# BGP Cheat Sheet

## What BGP does
- `BGP` exchanges reachability information and selects the preferred path for a prefix.
- `AS` = Autonomous System = routers under one administration.
- `IGP` such as `OSPF` or `IS-IS` handles internal routing inside the AS.
- `iBGP` = inside one AS, `eBGP` = between different ASes.

## Session setup
- First `TCP`, then BGP.
- No discovery: every peer must be configured explicitly.
- Important states:
  - `Idle`
  - `Connect`
  - `Active`
  - `OpenSent`
  - `OpenConfirm`
  - `Established`
- If TCP does not come up cleanly, BGP often oscillates between `Connect` and `Active`.

## Messages
- `OPEN`: AS, hold time, BGP identifier, capabilities
- `KEEPALIVE`: session stays alive
- `UPDATE`: new route or withdrawal
- `NOTIFICATION`: error, session ends
- `ROUTE-REFRESH`: request routes again for new policy evaluation

## Attribute classes
- `well-known mandatory`
- `well-known discretionary`
- `optional transitive`
- `optional non-transitive`

## Most important attributes
- `AS_PATH`: AS path of the route information, usually shorter is better
- `NEXT_HOP`: next router for the prefix
- `ORIGIN`: `IGP` before `EGP` before `INCOMPLETE`
- `LOCAL_PREF`: higher is better, only inside the local AS
- `MED`: lower is better, hint to a neighboring AS
- `COMMUNITY`: tag for grouped handling
- `ORIGINATOR_ID` and `CLUSTER_LIST`: RR loop protection

## Best path order
1. higher `LOCAL_PREF`
2. shorter `AS_PATH`
3. better `ORIGIN`
4. lower `MED`
5. `eBGP` over `iBGP`

Further tie-breakers can include:
- lower IGP cost to `NEXT_HOP`
- lower router ID
- shorter `CLUSTER_LIST`

## Route processing
- Route enters `RIB-IN`
- Validation + import policy
- Participation in BGP path selection
- Best route enters local BGP RIB
- `RTM` decides whether it is also installed into the routing table
- Then it becomes `used`

Reminder:
- `best` is not automatically `used`
- Default export candidates are `best` and `used`
- `advertise-inactive` also allows `best but not used`

## Policies
- `from` = what matches?
- `action` = accept, reject, or change attributes
- Match criteria can include:
  - prefix list
  - address family
  - neighbor
  - protocol such as `OSPF`
  - BGP attributes
- Actions can include:
  - set `LOCAL_PREF`
  - set `MED`
  - add `COMMUNITY`
- Default: first match wins
- `next-entry` / `next-policy` continue evaluation

## Communities in practice
- Communities group routes logically.
- Example:
  - `65001:100` = north
  - `65001:200` = south
- A later policy can react to them.

## MP-BGP
- Once BGP supports multiple address families, it is called `MP-BGP`.
- Examples:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - `Label-IPv4`
  - `Label-IPv6`
  - `EVPN`
  - `MVPN`

## VPN basics
- `VPWS` = Layer-2 point-to-point
- `VPLS` = Layer-2 multipoint
- `VPRN` = Layer-3 multipoint
- Distributed VPN = multiple PEs cooperate, core P routers do not need to know the service itself.
- Transport can use `MPLS`, `GRE`, or `VXLAN`.
- `SDP` binds service and transport.

## RD, RT, and label
- `RD` = Route Distinguisher = makes overlapping customer networks unique
- `RT` = Route Target = controls import and export between VRFs/VPRNs
- `MPLS Service Label` = used by the data plane

Reminder:
- `RD` = uniqueness
- `RT` = membership / import-export
- `Label` = forwarding

## Inter-region transport
- End-to-end tunnels can be stitched together from multiple smaller tunnels.
- This often uses `label-ipv4` / `label-ipv6` via MP-BGP.
- Typical stack: inner BGP label + outer `LDP` / `RSVP-TE` / `SR` label.

## Route reflectors
- RRs solve the iBGP full-mesh problem.
- Roles:
  - `RR`
  - `Client`
  - `Non-Client`
- A cluster = RR + its clients.
- Redundant RRs in the same cluster typically use the same cluster ID.

## RR update rules
- Best route from `Non-Client`:
  - to clients
  - to eBGP peers if policy allows
  - not to other non-clients
- Best route from `Client`:
  - to clients
  - to non-clients
  - to eBGP peers if policy allows
- Best route from `eBGP`:
  - to clients
  - to non-clients
  - to other eBGP peers if policy allows

## RR loop protection
- `AS_PATH` does not help enough with RR-internal iBGP loops because it is not changed on iBGP propagation.

### ORIGINATOR_ID
- The first RR sets it to the router ID of the original iBGP originator
- If a router sees its own router ID there, it discards the route

### CLUSTER_LIST
- List of cluster IDs the route has already passed through
- Each RR adds its local cluster ID
- If an RR sees its own cluster ID in the list, it discards the route

Reminder:
- `CLUSTER_LIST` is for RR loops inside one AS
- it is not a replacement for `AS_PATH`

## RR redundancy
- A single RR can become a single point of failure.
- Typical design:
  - multiple RRs per cluster
  - iBGP between the RRs
  - clients peer with all RRs in their cluster

## Nokia 7750 reminders
- `cluster` makes a 7750 an RR
- no extra base RR command is required
- `disable-client-reflect` suppresses reflection for a specific peer
- `split-horizon` or export policy can limit re-advertisement

## Common pitfalls
- `AS_PATH` is not the real packet path
- `ORIGIN` is `IGP / EGP / INCOMPLETE`
- `best` is not automatically `used`
- `RD` and `RT` are not the same
- `CLUSTER_LIST` is not inter-AS

## Ultra-short
- `LOCAL_PREF`: higher is better
- `AS_PATH`: shorter is better
- `MED`: lower is better
- `eBGP` over `iBGP` if earlier criteria are equal
- `RD` makes routes unique
- `RT` controls import/export
- `RR` reduces full mesh
- `ORIGINATOR_ID` + `CLUSTER_LIST` prevent RR loops
