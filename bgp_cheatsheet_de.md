# BGP Cheat Sheet

## Was BGP macht
- `BGP` tauscht Reachability-Informationen aus und waehlt fuer einen Prefix den bevorzugten Pfad.
- `AS` = Autonomous System = Router unter derselben Administration.
- `IGP` wie `OSPF` oder `IS-IS` macht internes Routing im AS.
- `iBGP` = innerhalb eines AS, `eBGP` = zwischen verschiedenen AS.

## Session-Aufbau
- Erst `TCP`, dann BGP.
- Kein Discovery: jeder Peer muss explizit konfiguriert werden.
- Wichtige States:
  - `Idle`
  - `Connect`
  - `Active`
  - `OpenSent`
  - `OpenConfirm`
  - `Established`
- Wenn TCP nicht sauber hochkommt, pendelt BGP oft zwischen `Connect` und `Active`.

## Nachrichten
- `OPEN`: AS, Hold Time, BGP Identifier, Capabilities
- `KEEPALIVE`: Session lebt
- `UPDATE`: neue Route oder Withdraw
- `NOTIFICATION`: Fehler, Session endet
- `ROUTE-REFRESH`: Routen fuer neue Policy-Bewertung erneut anfordern

## Attribut-Klassen
- `well-known mandatory`
- `well-known discretionary`
- `optional transitive`
- `optional non-transitive`

## Wichtigste Attribute
- `AS_PATH`: AS-Weg der Routeninformation, kuerzer meist besser
- `NEXT_HOP`: naechster Router fuer den Prefix
- `ORIGIN`: `IGP` vor `EGP` vor `INCOMPLETE`
- `LOCAL_PREF`: hoeher besser, nur im lokalen AS
- `MED`: kleiner besser, Hinweis an Nachbar-AS
- `COMMUNITY`: Tag fuer Gruppenbehandlung
- `ORIGINATOR_ID` und `CLUSTER_LIST`: RR-Loop-Protection

## Best Path Reihenfolge
1. hoehere `LOCAL_PREF`
2. kuerzerer `AS_PATH`
3. besseres `ORIGIN`
4. kleinerer `MED`
5. `eBGP` vor `iBGP`

Weitere Tiebreaker koennen sein:
- niedrigere IGP-Kosten zum `NEXT_HOP`
- kleinere Router-ID
- kuerzere `CLUSTER_LIST`

## Route Processing
- Route kommt ins `RIB-IN`
- Validierung + Import Policy
- Teilnahme an BGP Path Selection
- beste Route ins lokale BGP-RIB
- `RTM` entscheidet, ob sie auch wirklich ins Routing Table kommt
- dann ist sie `used`

Merker:
- `best` ist nicht automatisch `used`
- Standard fuer Export: `best` und `used`
- `advertise-inactive` erlaubt auch `best but not used`

## Policies
- `from` = was matcht?
- `action` = accept, reject oder Attribute aendern
- Match-Kriterien z. B.:
  - Prefix-List
  - Address Family
  - Nachbar
  - Protokoll wie `OSPF`
  - BGP-Attribute
- Actions z. B.:
  - `LOCAL_PREF` setzen
  - `MED` setzen
  - `COMMUNITY` adden
- Standard: erster Match gewinnt
- `next-entry` / `next-policy` pruefen weiter

## Communities in der Praxis
- Communities gruppieren Routen logisch.
- Beispiel:
  - `65001:100` = Nord
  - `65001:200` = Sued
- Spaeter kann eine Policy darauf reagieren.

## MP-BGP
- Sobald BGP mehrere Address Families kann, spricht man von `MP-BGP`.
- Beispiele:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - `Label-IPv4`
  - `Label-IPv6`
  - `EVPN`
  - `MVPN`

## VPN-Grundlagen
- `VPWS` = Layer-2 Point-to-Point
- `VPLS` = Layer-2 Multipoint
- `VPRN` = Layer-3 Multipoint
- Distributed VPN = mehrere PEs arbeiten zusammen, P-Router im Kern muessen den Dienst nicht kennen.
- Transport kann ueber `MPLS`, `GRE` oder `VXLAN` laufen.
- `SDP` bindet Service und Transport.

## RD, RT und Label
- `RD` = Route Distinguisher = macht ueberlappende Kundennetze eindeutig
- `RT` = Route Target = steuert Import und Export zwischen VRFs/VPRNs
- `MPLS Service Label` = fuer die Data Plane

Merker:
- `RD` = Eindeutigkeit
- `RT` = Mitgliedschaft / Import-Export
- `Label` = Weiterleitung

## Inter-Region Transport
- End-to-End-Tunnel koennen aus mehreren Teil-Tunneln gestitcht werden.
- Dafuer nutzt man oft `label-ipv4` / `label-ipv6` ueber MP-BGP.
- Typisch: inneres BGP-Label + aeusseres `LDP` / `RSVP-TE` / `SR` Label.

## Route Reflectors
- RR loesen das iBGP-Full-Mesh-Problem.
- Rollen:
  - `RR`
  - `Client`
  - `Non-Client`
- Ein Cluster = RR + seine Clients.
- Redundante RRs im selben Cluster nutzen typischerweise dieselbe Cluster-ID.

## RR Update-Regeln
- Beste Route von `Non-Client`:
  - an Clients
  - an eBGP-Peers, wenn Policy es erlaubt
  - nicht an andere Non-Clients
- Beste Route von `Client`:
  - an Clients
  - an Non-Clients
  - an eBGP-Peers, wenn Policy es erlaubt
- Beste Route von `eBGP`:
  - an Clients
  - an Non-Clients
  - an andere eBGP-Peers, wenn Policy es erlaubt

## RR Loop Protection
- `AS_PATH` hilft bei RR-internen iBGP-Loops nicht genug, weil es bei iBGP nicht geaendert wird.

### ORIGINATOR_ID
- erster RR setzt sie auf die Router-ID des urspruenglichen iBGP-Originators
- sieht ein Router seine eigene Router-ID dort, verwirft er die Route

### CLUSTER_LIST
- Liste der Cluster-IDs, die die Route schon durchlaufen hat
- jeder RR fuegt seine lokale Cluster-ID hinzu
- sieht ein RR seine eigene Cluster-ID in der Liste, verwirft er die Route

Merker:
- `CLUSTER_LIST` ist fuer RR-Loops innerhalb eines AS
- kein Ersatz fuer `AS_PATH`

## RR Redundanz
- Ein einzelner RR ist ein moeglicher Single Point of Failure.
- Typisch:
  - mehrere RRs pro Cluster
  - iBGP zwischen den RRs
  - Clients peeren zu allen RRs ihres Clusters

## Nokia 7750 Merker
- mit `cluster` wird ein 7750 zum RR
- kein weiterer Grundbefehl fuer RR noetig
- `disable-client-reflect` unterdrueckt Reflection gezielt pro Peer
- `split-horizon` oder Export-Policy kann Rueckadvertising begrenzen

## Typische Stolperpunkte
- `AS_PATH` ist nicht der echte Paketpfad
- `ORIGIN` ist `IGP / EGP / INCOMPLETE`
- `best` ist nicht automatisch `used`
- `RD` und `RT` sind nicht dasselbe
- `CLUSTER_LIST` ist nicht AS-uebergreifend

## Ultra-kurz
- `LOCAL_PREF`: hoeher besser
- `AS_PATH`: kuerzer besser
- `MED`: kleiner besser
- `eBGP` vor `iBGP`, wenn vorher alles gleich ist
- `RD` macht eindeutig
- `RT` steuert Import/Export
- `RR` spart Full Mesh
- `ORIGINATOR_ID` + `CLUSTER_LIST` verhindern RR-Loops
