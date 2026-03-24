# Knowledge Base (EN draft)\n\nThis file is an English draft derived from wissensbasis_einfach.md.\nUse it as quick reference; the German source stays authoritative for exact wording.\n\n# Knowledge Base (simple explanation)

Dieses File sammelt alles Wissen, das du mir gibst.
Ziel:
- einfach erklaert
- klar geordnet
- schnell wiederholbar

## Usage
- Neue Infos kommen als kurze Punkte in die passenden Kapitel.
- Wenn noetig, schreibe ich darunter:
  - "Merksatz"
  - "Typischer Fehler"
  - "Pruefungsfrage-Idee"

---

## Kapitel A - D2R Grundlagen

### A1) Klassen
- In vanilla Diablo 2 Resurrected gibt es keine Klasse "Warlock".
- Wenn irgendwo "Warlock" steht, ist das meistens eine Mod oder eine Verwechslung mit anderen Games.

Key takeaway:
- Vanilla D2R hat feste Originalklassen, kein Warlock.

### A2) Gruene Aura
- Die gruene Aura ist oft Conviction (vor allem bei Gegnern).
- Conviction senkt deine Defense und Elementar-Resistenzen.
- Folge: Du bekommst deutlich mehr Elementarschaden.

Key takeaway:
- Gruen + ploetzlich viel Elementarschaden = oft Conviction.

---

## Kapitel B - Runenwoerter kurz und praktisch

### B1) Spirit
- Spirit = Tal + Thul + Ort + Amn.
- Geht nur in:
  - 4 Sockel Schwerter
  - 4 Sockel Schilde
- Geht nicht in Polearms.

### B2) Insight
- Insight = Ral + Tir + Tal + Sol.
- Geht in D2R in:
  - Polearms
  - Staves
  - Bows
  - Crossbows
- Sehr wichtig wegen Meditation Aura (Mana-Regeneration).

### B3) Smoke und Treachery (Armor)
- Smoke = Nef + Lum in 2 Sockel Body Armor.
- Treachery = Shael + Thul + Lem in 3 Sockel Body Armor.
- Reihenfolge der Runen muss exakt stimmen.

Key takeaway:
- Smoke = sichere Res-Armor.
- Treachery = starke Utility/Defense durch Fade.

### B4) Cinquedeas
- Cinquedeas zaehlt als Dagger-Klasse.
- Maximal 3 Sockel.
- Deshalb nur 2- oder 3-Sockel-Runenwoerter moeglich.

### B5) 6 Sockel Pike
- Typische 6-Sockel-Optionen:
  - Breath of the Dying
  - Silence
- Fuer High-Budget lohnt oft eine bessere Spear-Basis als normale Pike.

---

## Kapitel C - Horadrim-Wuerfel Rezepte

### C1) Rune upgraden
- 3x Io + 1x flawed Topaz = 1x Lum.

### C2) Charges nachfuellen
- Waffe mit Charges:
  - Ort + beliebiger chipped Gem + Waffe
- Armor/Helm/Shield mit Charges:
  - Ral + beliebiger flawed Gem + Item
- Ohne Gem nur reparieren, nicht aufladen.

### C3) Rings mit Res
- Einzel-Res-Ringe per Rezept sind moeglich (z. B. Fire/Cold/Light/Poison).
- Direktes "All Res Ring Rezept" gibt es nicht.

---

## Kapitel D - Merc (Act 2 Nightmare) tanky bauen

### D1) Grundsetup
- Helm mit Leech/Res
- Armor mit Res/Defense (z. B. Smoke oder Treachery)
- Waffe oft Insight (oder Reaper's Toll fuer mehr Sicherheit)

### D2) Wichtige Werte
- Life Leech
- Resistenzen
- Damage Reduction
- Genug Angriffsgeschwindigkeit fuer regelmaessigen Leech

Key takeaway:
- Tanky Merc lebt durch Leech + Res, nicht nur durch Defense-Zahl.

---

## Kapitel E - Lernsystem fuer deinen 500-Folien-Kurs

### E1) Ziel
- Wissen in kleine, pruefbare Einheiten zerlegen.
- Jede Einheit:
  - einfache Zusammenfassung
  - Multiple-Choice Fragen

### E2) Bereits gebaut
- Webapp unter:
  - apps/study-quiz/index.html
- Funktionen:
  - lernen
  - Fragen bauen
  - JSON Import/Export
  - Fortschritt speichern

### E3) Workflow
1. Du gibst Inhalt in kleinen Bloecken.
2. Ich fasse einfach zusammen (in dieses File).
3. Ich baue direkt MC-Fragen fuer die App.

---

## Kapitel F - Telecommunication Grundlagen (Slide 1)

### F1) Ueberblick der Technologien
- In Telekommunikation gibt es mehrere Transporttechnologien.
- Heute ist IP die meistgenutzte Technologie.
- Ethernet (Layer 2 Transport) ist ebenfalls sehr verbreitet.
- Frame Relay und ATM sind eher Legacy und heute weniger gaengig.
- TDM ist typisch fuer aeltere Netze.
- SONET war wichtig, wurde aber durch moderne optische Netztechnik weitgehend ersetzt.

Key takeaway:
- Modern: IP + Ethernet. Legacy: Frame Relay, ATM, TDM, SONET.

### F2) Wofuer die Technologien historisch genutzt wurden
- TDM: oft fuer Real-time Voice (zeitkritische Sprachdienste).
- Frame Relay / ATM: haeufig fuer private WAN-Netzwerke.
- IP: Best-effort Data Services (keine harte Zustellgarantie).

Key takeaway:
- Voice frueher eher TDM, Daten heute meist IP.

### F3) Wichtige Architektur-Aussage aus Slide 1
- Eine Plattform sollte mehrere Technologien gleichzeitig bereitstellen koennen.
- Ziel ist Konvergenz: alte und neue Dienste auf einer gemeinsamen Infrastruktur.

Typical mistake:
- Zu denken, dass eine moderne Plattform nur IP koennen muss.
- In der Praxis muss sie oft auch Legacy-Services integrieren oder migrieren.

### F4) Einfach erklaert: Best-effort bei IP
- "Best-effort" bedeutet:
  - Das Netz versucht Daten zu liefern.
  - Es gibt aber ohne zusaetzliche Mechanismen keine feste Garantie fuer Latenz, Jitter oder Paketverlust.

Exam question idea:
- Warum war TDM fuer Voice historisch attraktiv, waehrend IP als Best-effort gilt?

### F5) Wichtige Einordnung fuer heute
- Historisch wurde IP oft als "Best-effort" eingefuehrt.
- In modernen Netzen wird IP haeufig mit Zusatzmechanismen betrieben, z. B.:
  - QoS-Klassen
  - Priorisierung
  - Traffic Engineering
- Dadurch kann das Verhalten fuer kritische Services deutlich besser steuerbar sein als im reinen Best-effort-Modell.

Key takeaway:
- IP ist die Basis, Servicequalitaet kommt oft ueber Zusatzmechanismen.

---

## Kapitel G - Telecommunication Konsolidierung (Slide 2)

### G1) Warum Service Provider konsolidieren
- Betrieb und Wartung alter, getrennter Netze ist teuer.
- Mehrere diskrete Plattformen parallel zu betreiben verursacht hohe Kosten.
- Deshalb werden mehrere Service-Typen auf eine gemeinsame Netzwerktechnologie zusammengefuehrt.

Key takeaway:
- Konsolidierung = weniger Parallelbetrieb, bessere Kostenkontrolle.

### G2) Wirtschaftlicher Spagat
- Alte Services koennen weiterhin hohen Umsatz bringen (z. B. Frame Relay, SONET, TDM).
- Diese Services muessen oft weiter unterstuetzt werden.
- Gleichzeitig verlangen Kunden neue Services mit mehr Bandbreite zu sinkenden Preisen.
- Die Nachfrage nach neuen Services wie Wireless Data und Videostreaming steigt zusaetzlich.

Key takeaway:
- Altgeschaeft halten, Neugeschaeft skalieren.

### G3) Konkrete Nachfragetreiber
- Wireless Data waechst durch mobile Nutzung.
- Videostreaming erhoeht den kontinuierlichen Bandbreitenbedarf stark.
- Beides verstaerkt den Druck auf:
  - Netzkapazitaet
  - Effizienz
  - Preis-Leistungs-Verhaeltnis

Key takeaway:
- Mehr mobile Daten + mehr Video = mehr Last bei gleichzeitigem Preisdruck.

### G4) Kernaussage slide-uebergreifend (Slide 1 + 2)
- Slide 1: Eine Plattform soll mehrere Technologien tragen.
- Slide 2: Warum das wirtschaftlich notwendig ist (Kosten + Marktanforderung).
- Zusammen: Technische Konvergenz als Antwort auf Betriebs- und Preisdruck.

Typical mistake:
- Nur auf Technik schauen und die Kosten-/Marktseite vergessen.
- Oder nur auf Preis schauen und die Legacy-Verpflichtungen ignorieren.

Exam question idea:
- Erklaere, warum Provider nicht einfach alle Legacy-Services sofort abschalten.

---

## Kapitel H - 7750 Service Router und Konvergenz

### H1) Wofuer der 7750 SR eingesetzt wird
- Der 7750 Service Router (SR) wird genutzt, um viele Servicearten ueber eine gemeinsame IP/MPLS-Infrastruktur bereitzustellen.
- Ziel: ein einziges, skalierbares Netz statt vieler isolierter Teilnetze.
- Dadurch koennen verschiedene VPN-Services parallel unterstuetzt werden.

Key takeaway:
- Eine Plattform, viele Services.

### H2) Service-Bild (vereinfacht)
```text
      (ATM/TDM Services)
              |
 (SONET Services) -- [ 7750 SR ] -- (IP High-Speed Services)
              |
      (Layer-2 Ethernet Services)
```

Einfach erklaert:
- In der Mitte steht der Service Router.
- Drumherum liegen verschiedene Service-Welten.
- Der Router bindet sie ueber das gemeinsame IP/MPLS-Netz zusammen.

### H3) Satz, der oft verwirrt: "collapse overlay networks ... still supporting an overlay model"
- Bedeutung:
  - Physisch wird konsolidiert: weniger getrennte Hardware-/Transportinseln.
  - Logisch bleibt getrennt: Services und Kunden bleiben virtuell separiert.
- Ergebnis:
  - weniger Betriebsaufwand
  - weiterhin klare Service-Trennung und Kundenisolation

Key takeaway:
- Unten gemeinsam (Infrastruktur), oben getrennt (Service-Logik).

Typical mistake:
- Zu glauben, dass Konsolidierung automatisch alle Kunden/Services technisch "zusammenmischt".
- Das Overlay-Modell sorgt weiterhin fuer logische Trennung.

---

## Kapitel I - VPN Services und Provider Terminologie

### I1) Was ein VPN hier bedeutet
- Ein VPN wird auf einer geteilten Infrastruktur aufgebaut.
- Es stellt fuer den Nutzer private Dienste bereit.
- Provider-Sicht: virtuelles Netzwerk.
- Kunden-Sicht: privates Netzwerk.

Key takeaway:
- Shared transport, private experience.

### I2) Was ein "Service" ist
- Ein Service ist eine logische, eindeutige Entitaet.
- Er bezieht sich auf einen Verbindungstyp (z. B. Internet, Layer-2 VPN, Layer-3 VPN).
- Jeder Service hat eine eindeutige Service-ID.
- Ein Service soll einheitlich End-to-End bereitgestellt und betrieben werden:
  - Konfiguration
  - Management
  - Kosten-/Abrechnungsmodell

Key takeaway:
- Service = eindeutige logische Einheit mit technischer und betrieblicher Ordnung.

### I3) PE, P, CE einfach
- PE (Provider Edge):
  - Router am Rand der Providerdomane.
  - Mindestens ein Interface zeigt zum Kunden.
- P (Provider Core):
  - Router im Provider-Kern.
  - Alle Interfaces liegen in der Providerdomane.
- CE (Customer Edge):
  - Router beim Kunden (Premises).
  - Typisch service-unaware im Provider-Servicekontext.
  - Anbindung an PE ueber definierte Uebergabepunkte (z. B. SAPs).

Typical mistake:
- PE und P verwechseln.
- CE als Provider-Serviceknoten betrachten, obwohl er kundenseitig ist.

---

## Kapitel J - Router-Rollen im Providernetz (praxisnah)

### J1) Warum PE-Router so wichtig sind
- Im Service-Kontext ist der PE-Router oft der wichtigste Knoten.
- Auf dem PE laufen die zentralen Servicefunktionen zusammen.
- Dort werden Services kundenspezifisch terminiert und gesteuert.

Einfach gesagt:
- Der PE ist die "Service-Zentrale" am Rand des Providernetzes.

### J2) Access-Router vs. Service-Edge
- Access-Router koennen ein aehnliches Feature-Set haben.
- Typische Grenze:
  - bei starkem Wachstum fehlt oft die notwendige Skalierung.
- Deshalb werden fuer grosse Service-Umgebungen robuste Service-Edge-Plattformen bevorzugt.

Key takeaway:
- Features aehnlich, Skalierung oft der echte Unterschied.

### J3) Rolle der P-Router
- P-Router sind auf High-Speed-Interfaces und hohe Forwarding-Kapazitaet ausgelegt.
- Schwerpunkt:
  - viel Traffic schnell und stabil durch den Core transportieren.
- P-Router sind nicht die erste Wahl fuer umfangreiche Service-Edge-Funktionen wie:
  - feingranulares QoS
  - Bandwidth-Management je Service
  - servicebezogenes Accounting

Key takeaway:
- P = Durchsatz im Core, PE = Serviceintelligenz am Edge.

### J4) Interne Core-Logik
- P-Router sind typischerweise mit P- oder PE-Routern verbunden.
- Sie nutzen internes Routing im Provider-Core (z. B. IGP-basierte Modelle).
- Dadurch kann der Provider ein eigenes internes IP-Adressschema nutzen.

### J5) Layer-2/IP Service Switches im Umfeld
- Solche Switches koennen Core-Router entlasten und Processing erweitern.
- IP-Service-Switches koennen zusaetzliche Funktionen uebernehmen, z. B.:
  - Subscriber-Management
  - Encryption
- Grenze:
  - oft nicht dieselbe volle Internet-Routing-Funktionalitaet
  - oft nicht dieselbe Breite an Routing-Policies wie ein starker Edge-Router

Typical mistake:
- Ergaenzende Plattformen als vollwertigen Ersatz fuer alle Edge-Funktionen sehen.

---

## Kapitel K - 7750 Service-Typen (VPWS, VPLS, VPRN, IES, Mirroring)

### K1) VPWS (Virtual Private Wire Service)
- Punkt-zu-Punkt-Service, oft wie eine virtuelle Standleitung (VLL).
- Kundentraffic wird im Providernetz getunnelt transportiert (haeufig MPLS-basiert).
- Beim 7750-Umfeld sind verschiedene Pipe-Arten relevant, z. B.:
  - Epipe (Ethernet P2P)
  - Fpipe (Frame Relay)
  - Apipe (ATM)
  - Ipipe (IP Interworking)
  - Cpipe (TDM Circuit Emulation)

Kundensicht:
- Fuehlt sich wie direkte Verbindung zwischen zwei Standorten an.
- Alte und neue Servicetypen koennen integriert werden.

Provider-Sicht:
- Nur beteiligte Service-Edges muessen den Dienst terminieren.
- Hohe Skalierbarkeit und Flexibilitaet.
- Per-Service QoS, Billing, Ingress/Egress Shaping und Policing moeglich.

### K2) VPLS
- Multipoint-Ethernet-Service, aus Kundensicht wie ein verteilter Ethernet-Switch.
- Weiterleitung basiert typischerweise auf MAC-Logik.

Kundensicht:
- Mehrere Standorte wirken wie in einem gemeinsamen Ethernet.
- Kundendaten bleiben fuer den Providerdienst transparent.

Provider-Sicht:
- Viele Betriebsvorteile wie bei VPWS (Skalierung, Service-Steuerung, OPEX-Effizienz).

### K3) VPRN
- Multipoint Layer-3 VPN ueber ein IP/MPLS-Netz.
- Verbindet mehrere Kundensites in einer gerouteten Domane.
- Jeder beteiligte PE haelt pro VPRN eine separate Forwarding-Instanz.

Kundensicht:
- Wirkt wie ein privates "Internet" fuer die eigenen Sites.
- Unabhaengige IP-Planung pro VPRN ist moeglich.

Provider-Sicht:
- Gleiche betriebliche Staerken wie andere skalierbare VPN-Services.

### K4) IES (Internet Enhanced Service)
- Gibt dem Kunden ein Layer-3-IP-Interface fuer Internetverkehr.
- Wichtiger Unterschied zu sehr einfachen Basisinterfaces:
  - servicebezogenes QoS
  - Billing
  - Ingress/Egress Shaping
  - Policing

### K5) Mirroring
- Mirroring erlaubt es dem Operator, Traffic eines Kundenservices gezielt mitzuschneiden bzw. zu analysieren.
- Typischer Nutzen:
  - Troubleshooting
  - Verifikation
  - tiefere Traffic-Analyse mit Sniffer-Tools

Key takeaway:
- Mirroring ist Beobachtung und Analyse, nicht eigentliche Serviceweiterleitung.

---

## Kapitel L - Section 2: Datenpfad, Encapsulation und Label-Signalisierung

### L1) Lernziel dieser Section
- Du sollst erklaeren koennen, wie Kundendaten durch Providernetze transportiert werden.
- Wichtige Vergleichsebene:
  - MPLS-basierter Transport
  - GRE-basierter Tunneltransport
- Dazu gehoert:
  - Encapsulation der Kundenpayload
  - Rolle von Transport-Label und Service-Label
  - Signalisierung dieser Informationen

### L2) MPLS vs. GRE in einem Satz
- MPLS: Weiterleitung im Core ueber Label-Logik.
- GRE: IP-basierte Tunnelkapselung ohne klassischen MPLS-Label-Stack als Pflicht.

Key takeaway:
- MPLS denkt in Labeln, GRE denkt in Tunneln.

### L3) Encapsulation einfach erklaert
- Encapsulation bedeutet:
  - Kundennutzdaten (Payload) bleiben inhaltlich erhalten.
  - Der Provider fuegt Transport-Informationen hinzu (Header/Labels).
- So kann derselbe Core viele verschiedene Dienste sicher transportieren.

### L4) MPLS Label-Stack (vereinfacht)
```text
[Provider L2 Header]
  [Outer Transport Label]
    [Inner Service Label]
      [Customer Payload]
```

Bedeutung:
- Outer Transport Label:
  - Fuehrt den Traffic durch den Provider-Core.
- Inner Service Label:
  - Ordnet den Traffic dem richtigen Dienst/VPN am Service-Edge zu.

Key takeaway:
- Aussen der Weg, innen der Service.

### L5) GRE-Kapselung (vereinfacht)
```text
[Provider L2 Header]
  [Outer IP Header]
    [GRE Header]
      [Customer Payload]
```

Einfach erklaert:
- Bei GRE liegt die Transportlogik in der Tunnelkapselung.
- Die Service-Trennung wird nicht ueber denselben MPLS-Label-Stack-Mechanismus gemacht.

### L6) Signalisierung: Wer baut was auf?
- Transport-Label (MPLS-Core):
  - wird typischerweise durch Core-Control-Plane signalisiert
  - z. B. LDP oder RSVP-TE (je Netzdesign)
- Service-Label:
  - wird durch dienstspezifische Service-Control-Plane signalisiert
  - je nach Service haeufig BGP oder targeted LDP

Wichtig:
- Control Plane richtet Pfade/Zuordnungen ein.
- Data Plane transportiert danach den eigentlichen Kundentraffic.

Key takeaway:
- Control baut, Data faehrt.

### L7) Warum das fuer die Praxis wichtig ist
- Die Trennung von Transport und Service verbessert Skalierung:
  - Core bleibt schnell und schlank
  - Service-Intelligenz bleibt am Edge
- Fuer Troubleshooting ist die Trennung Gold wert:
  - Fehler im Weg? -> Transport-Label/Path ansehen
  - Fehler im Dienst? -> Service-Label/Service-Mapping ansehen

Typical mistake:
- Alles als "ein Labelproblem" sehen, ohne zwischen Transport- und Serviceebene zu unterscheiden.

### L8) Verifiziert und praezisiert (wichtige Pruefungspunkte)
- Deine Aussage "Transporttunnel fuer Kundendaten ueber das SP-Netz" ist korrekt.
- Deine Aussage "Transport ueber MPLS oder GRE" ist im Kontext vieler Provider-/7750-Designs korrekt.
- Deine Aussage "viele Service-Tunnel in einem Transporttunnel" ist korrekt (Multiplexing).
- Deine Aussage "viele Tunnel koennen ueber einen Port laufen" ist korrekt.

Wichtige Praezisierung 1:
- "Jeder Service erhaelt ein Service-/VC-Label, damit man den Kunden erkennt" ist fast richtig, aber genauer:
  - Das Label identifiziert primaer die Service-Instanz (z. B. PW/VRF-Kontext).
  - Die Kundenzuordnung ergibt sich ueber die Service-Instanz und deren Konfiguration.

Wichtige Praezisierung 2:
- "Label wird am Ingress angehaengt und aendert sich nicht bis Egress" gilt nicht fuer alle Labels gleich:
  - Outer Transport-Label wird im Core typischerweise geswappt/poppt.
  - Inneres Service-/VC-Label bleibt bei klassischem MPLS-VPN/PW-Stack im Transit meist bis zum Egress erhalten.

Pruefungs-Key takeaway:
- Outer Label kann unterwegs wechseln, Inner Label traegt den Servicekontext bis zum Ziel-PE.

### L9) Konkreter Aufbau und Signalisierung (kompakt)
- Transporttunnel:
  - nutzen im Providerkontext typischerweise MPLS oder GRE.
  - MPLS-Transport-Labels werden im Core ueber Protokolle wie LDP oder RSVP-TE aufgebaut/signalisiert (je Design).
  - GRE kapselt Kundendaten in IP/GRE zwischen Tunnelendpunkten (haeufig Ingress-PE zu Egress-PE), oft dort genutzt, wo MPLS nicht verfuegbar/gewuenscht ist.

- Service-Tunnel / Service-Signalisierung:
  - haeufig ueber MP-BGP oder targeted LDP (dienstabhaengig).

- MPLS-Encapsulation (typisches Schema):
```text
[DLC/L2 Header] -> [Transport Label] -> [Service/VC Label] -> [Control Word (optional)] -> [Service Packet]
```

Einfach erklaert:
- DLC/L2 Header:
  - Layer-2-Transporthuelle fuer das MPLS-Paket auf dem jeweiligen Link.
- Transport Label (outer):
  - vom naechsten Hop/Core-Pfad bestimmt; dient der Weiterleitung durch den Core.
- Service/VC Label (inner):
  - identifiziert die Service-Instanz am Ziel-Edge.
- Control Word:
  - optional, Nutzung ist service-/designabhaengig (nicht pauschal nur auf zwei Legacy-Servicearten begrenzen).
- Service Packet:
  - eigentliche Kundennutzdaten.

Key takeaway:
- Im klassischen Service-MPLS sind mindestens Outer- und Inner-Label das Standardmuster.

### L10) GRE-Transport fuer VPN-Traffic (praezise)
- Typischer Stack bei GRE-basiertem Service-Transport:
```text
[DLC/L2 Header] -> [Outer IP Header] -> [GRE Header] -> [Service/VC Label] -> [Control Word (optional)] -> [Service Packet]
```

Wichtige Punkte:
- Hauptunterschied zu nativem MPLS-Core-Transport:
  - der Transport erfolgt ueber den Outer IP Header + GRE, nicht ueber einen hop-by-hop MPLS-Transport-Label.
- GRE-Basisheader:
  - mindestens 4 Byte (Flags/Reserved/Version + Protocol Type).
- Demultiplexing am Ziel:
  - auch bei GRE-Transport bleibt fuer viele Services ein Service-/VC-Label noetig, damit der far-end PE den richtigen Dienst zuordnet.
- Core-Verhalten:
  - kein MPLS-Transport-Label-Swapping an jedem Hop im Provider-Core.
  - stattdessen IP-Weiterleitung der GRE-Pakete bis zum far-end PE.
- Typischer Einsatzgrund:
  - wenn Core/P-Router kein MPLS im Transit bereitstellen sollen oder koennen.
  - dadurch kann MPLS-Serviceintelligenz primar an den PEs liegen.

Praezisierung Control Word:
- Das Control Word ist optional bzw. dienst-/designabhaengig.
- "Nur fuer ATM/Frame Relay" ist als allgemeine Regel zu eng formuliert.

Key takeaway:
- GRE transportiert den Weg, Service-/VC-Label sichert die richtige Dienstzuordnung.

### L11) MPLS Transport- und Service-Label-Signaling (Section 2 Vertiefung)
- LDP oder RSVP-TE werden genutzt, um Label Switched Paths (LSPs) im Core aufzubauen.
- LSPs dienen als Transportpfade, auf denen mehrere Services/Tunnel getragen werden koennen.
- Service-/VC-Labels werden genutzt, um konkrete Services zu kapseln und am Ziel sauber zuzuordnen.
- Das Service-Label wird am Kundenverkehr angehaengt, bevor der Transport-/LSP-Label verwendet wird.

Signaling-Zuordnung (typischer Kurskontext):
- VPWS/VPLS: haeufig ueber T-LDP
- VPRN: typischerweise ueber MP-BGP

Targeted vs Link LDP:
- Targeted LDP:
  - nutzt Unicast zu einem gezielten Remote-Peer (oft Systemadresse)
  - Peer kann mehrere Hops entfernt sein
- Link LDP:
  - Discovery auf direkter Nachbarschaft (on-link)
  - im Kursbeispiel wird oft die Multicast-Adresse `224.0.0.2` genannt

SDP-Hinweis (kursnah):
- Bei konfiguriertem SDP und aktivem Signaling werden Ingress-/Egress-Service-Labels standardmaessig automatisch ausgetauscht.
- Wenn Signaling deaktiviert ist, muessen Labels beim Service-Binding manuell gesetzt werden.

VPRN / MP-BGP:
- MP-BGP verteilt fuer VPRN nicht nur Routen, sondern auch Label-Informationen fuer diese Routen.

Martini und Kompella:
- Martini-Signaling:
  - nutzt T-LDP zwischen PE-Routern
  - verteilt VC-Labels inkl. Informationen wie VC-ID, Interface-Parameter und VC-Typ (z. B. ATM, Frame Relay, Ethernet)
- Kompella-Signaling:
  - basiert auf BGP-Mechanismen fuer die jeweilige Serviceumgebung

Key takeaway:
- Core-Transport und Service-Signaling getrennt denken: LSP fuer den Weg, Service-/VC-Label fuer den Dienst.

### L12) Scenario PE -- P -- P -- PE (signaling flow vs data flow)
- Example topology:
  - `PE1 -- P1 -- P2 -- PE2`
- Goal:
  - PE1 should send customer data to PE2.

Typical sequence (simplified):
1. Underlay reachability in the core:
   - usually via an IGP (for example OSPF/IS-IS) for stable loopback/next-hop reachability.
2. Transport LSP:
   - built with LDP or RSVP-TE.
3. Service labels:
   - exchanged with tLDP or MP-BGP (service-dependent, for example VPWS/VPLS vs VPRN).

Important clarification to the iBGP statement:
- iBGP/MP-BGP is important for service/VPN route exchange.
- Pure transport reachability in the core is usually provided by IGP in many designs.

LSP direction:
- An LSP is unidirectional.
- Bidirectional communication needs two opposite LSPs.

Control plane vs data plane:
- With classic downstream-assigned label behavior, label information is distributed from egress/downstream toward ingress.
- User traffic later flows from ingress toward egress.
- That is why signaling direction and data-flow direction often look opposite.

Core roles:
- P routers: typically LSRs (Label Switching Routers), switching transport labels.
- PE routers: typically LERs (Label Edge Routers), pushing/popping labels and mapping services.

T-LDP note:
- tLDP is not a completely separate protocol from LDP; it is targeted LDP.
- In practice, tLDP therefore needs an active LDP base function on the router.

## Chapter M - Section 3: Service Components (Nokia 7750 SR)

### M1) Core idea
- The Nokia service model uses service-edge routers (PEs) and logical service entities.
- Goal:
  - provide a uniform, service-centric model for
    - configuration
    - management
    - billing

Key takeaway:
- Services are built and operated as logical objects, not as loose interface configs.

### M2) Service building blocks
- Subscriber:
  - the user of the service.
- SAP (Service Access Point):
  - subscriber access point at the interface into the service network.
  - locally significant.
- Customer ID:
  - globally significant.
  - used to group a customer's services and for reporting.
- Service ID:
  - numeric, globally significant service identifier.
- Service Type:
  - service class (for example VPWS, VPLS, VPRN, IES depending on context).
- VC ID:
  - identifies the service in label-signaling context.
  - must be consistent end-to-end.
  - often set to the same value as service ID (design convention).
- SDP:
  - logical representation of a transport tunnel.
  - locally significant.
- Transport tunnel:
  - typically an LSP-based transport path.
  - associated with SDPs.
- Service tunnel:
  - end-to-end service path represented by service labels between PEs.
- Demultiplexer / demultiplexing:
  - egress operation where the service is identified by the service label.

### M3) Important for exams and troubleshooting
- P routers in the core are typically service-unaware:
  - they mainly switch transport labels.
- PE routers carry service intelligence:
  - termination, mapping, and per-service/per-customer policy.
- Service labels at egress are critical for correct service mapping.

Key takeaway:
- Transport gets packets to the destination; service labels tell the destination PE which service the packet belongs to.

### M4) Customer-ID and SAP rules (practical)
- Customer ID:
  - A service is bound to a customer ID when created.
  - This customer association is not directly editable afterward.
  - Multiple services can be associated with the same customer ID.

- SAP:
  - A SAP belongs to the service where it was created (service-bound).
  - SAP identity is local and based on port/channel plus encapsulation identifier.
  - Depending on encapsulation, multiple SAPs can exist on the same port.
  - SAPs are built in access context (including access part of hybrid), not on pure core/network-only ports.
  - For IES/VPRN, SAPs are defined in the relevant service/IP-interface context.

Key takeaway:
- Customer ID groups services, SAP anchors the actual service access on an interface.

### M5) SAP encapsulation, MTU, and local vs distributed service

SAP encapsulation (simplified):
- `null`:
  - single-service case on the port.
  - encapsulation identifier is `0`.
- `dot1q <vlan-id>`:
  - one VLAN tag per service mapping.
  - modeled up to `4094` (regular VLAN IDs are typically `1..4094`).
- `qinq <outer>.<inner>`:
  - two tag levels (outer/inner), each up to `4094`.
  - often described as `4094 x 4094` (very large separation space for service mapping).

MTU note:
- For Ethernet access with dot1q, the default MTU in this course context is `1518`.
- In practice, end-to-end MTU (SAP, service, SDP/transport path) must match.

Policies on SAP:
- Typical configurable policy types:
  - ingress/egress filter policies
  - QoS policies
  - scheduler policies
  - accounting policies

Local service:
- A single PE can connect two CEs using two SAPs in the same service.
- No remote tunnel is needed as long as both endpoints are local on that PE.

Distributed service:
- Service endpoints are on different PEs.
- Then SDPs are required for tunneling over the IP/MPLS network.

Key takeaway:
- Local = only SAPs on one PE.
- Distributed = SAPs plus SDP through the core network.

### M6) SDP binding, protection, and tunnel selection

SDP basics:
- SDP = local router entity for transport toward a remote PE.
- SDP ID is locally unique (can be reused on another router).
- Far-end is typically identified by the remote PE system IP.
- One SDP can be used by multiple services (shared transport object).

Important consequence:
- SDP changes can affect all services bound to that SDP.

Binding to service:
- A service uses the transport path only through `SDP binding`.
- Service-label signaling for distributed services becomes relevant in the binding context.
- If signaling is not active, required labels must be configured manually.

Tunnel types under SDP:
- MPLS:
  - LDP LSP or RSVP-TE LSP.
- GRE:
  - IP-based tunnel transport.

Design comparison (short):
- LDP:
  - typically follows IGP paths.
  - lower engineering effort.
- RSVP-TE:
  - higher configuration effort.
  - finer path control (traffic engineering, explicit path).
- GRE:
  - lower label-control-plane overhead.
  - path/convergence depends on IP routing/IGP.

Protection mechanisms (course context):
- Secondary RSVP LSP:
  - alternate path used when the primary path fails.
- Secondary standby RSVP LSP:
  - backup is already operational/warm and can take over faster.
- FRR one-to-one:
  - dedicated detour per protected LSP.
- FRR facility:
  - shared bypass tunnels for multiple LSPs.

Key takeaway:
- SDP is a shared transport object, so always consider protection, change impact, and binding context.

### M7) VC ID (PWid) and Martini/tLDP - clarification

Core statement (classic Martini PW):
- VC ID (PWid/FEC128) is provisioned on both PE endpoints.
- VC ID + PW type must match so the pseudowire maps correctly.
- This is exchanged through tLDP label mapping.

Important:
- Each direction has its own service label.
- Ingress/egress label pair together forms the bidirectional service/PW context between endpoints.

Exam clarification:
- \"VC ID must be identical end-to-end\" is correct for classic PWid/FEC128.
- In generalized PW/FEC129, endpoint identifiers (AGI/SAII/TAII) are used instead.

Key takeaway:
- Determine FEC type first, then apply VC-ID rule.

## Chapter N - Section 4: Distributed Service Configuration

### N1) Target model
- Distributed service means:
  - service endpoints are on different PEs.
  - data path must be stable across the provider core.

### N2) Required steps (recommended order)
1. Configure IGP base reachability:
   - system/loopback addresses must be reachable in routing tables.
2. Enable transport label signaling:
   - LDP or RSVP-TE (depending on design).
3. Prepare transport path:
   - LSP (and with RSVP also clean bind-path/protection design).
4. Create SDP and bind it to transport:
   - with RSVP, bind to matching LSP/bind-path,
   - with LDP, select corresponding LDP transport.
5. Create the service:
   - define service type,
   - add SAPs,
   - set SDP binding + VC ID correctly.
6. Validate end-to-end:
   - VC ID must match on both ends (classic PWid/FEC128 context).

### N3) tLDP special case (course context)
- Dynamic tLDP signaling requires LDP base function to be enabled.
- tLDP does not replace underlay reachability.

### N4) Practical design rule
- Build bottom-up:
  - underlay (IGP) -> transport (LDP/RSVP/GRE) -> service (SAP/SDP/VC).

Key takeaway:
- If transport is not stable, service will not be stable either.

### N5) RSVP path and SDP details (course context)

tLDP/LDP default nuance:
- In SDP context, signaling is tLDP by default.
- Actual transport selection (LDP/RSVP/GRE) is configured separately.
- Dynamic tLDP requires a working LDP base.

RSVP-TE path configuration:
- Create path object first (`router mpls path`), then reference it in LSP.
- Path can be used as primary or secondary.
- `loose`:
  - intermediate hops may be resolved by IGP.
- `strict`:
  - hops must be explicitly defined with strict adjacency behavior.

SDP practice:
- Create SDP first, then bind services to it.
- Multiple services can share the same SDP.
- VC/service labels are meaningfully signaled when service is bound to SDP.
- Without explicit type, SDP encapsulation defaults to GRE in 7750 context.

Key takeaway:
- Path before LSP, SDP before service binding, then stable label/service operation.

### N6) What do I use when? (LDP LSP vs RSVP-TE LSP vs GRE)

Core logic:
- SDP binds a service to a transport method.
- Transport method is typically one of these:
  - LDP LSP (MPLS, follows IGP)
  - RSVP-TE LSP (MPLS, explicit/finer path control)
  - GRE tunnel (IP tunnel transport)

SDP configuration reminders:
- `far-end`:
  - points to the remote PE (typically system IP).
  - in course context, also the relevant peer destination for tLDP service signaling.
- `lsp <name>`:
  - typically used when an RSVP-TE LSP is already defined and the SDP should use exactly that path.

MPLS LSPs:
- can be signaled dynamically (for example LDP/RSVP-TE),
- or configured statically hop-by-hop in special cases.

tLDP end-to-end:
- service signaling must be compatibly enabled on both PE endpoints.
- one-sided activation is not enough for clean VC/service label exchange.

Binding types:
- `spoke-sdp <sdp-id>:<vc-id>`
  - typical PW/point-to-point binding style
  - left side: transport path (SDP)
  - right side: service/PW context (VC ID)
- `mesh-sdp`
  - typically for VPLS (multipoint)

Key takeaway:
- First ask: \"Which transport path?\" (LDP/RSVP/GRE)
- Then ask: \"How is the service bound to it?\" (spoke/mesh + VC ID)

### N7) Extra memory aids: tLDP service types and ID significance

tLDP service reminder:
- In course context, tLDP sessions are typically used for VPWS and VPLS.
- VPWS:
  - P2P pseudowire / virtual leased line.
- VPLS:
  - logical group of pseudowires with MAC learning (multipoint L2 behavior).

ID significance (memory table):
- SAP ID: locally significant
- SDP ID: locally significant
- VC ID: P2P/PW context (must be aligned end-to-end between service endpoints)
- Service ID: globally significant
- Customer ID: globally significant

Key takeaway:
- Access/transport objects are often local, while management/service objects are often global.

---

## Open points / next topics
- Hier tragen wir neue Themen ein, sobald du sie schickst.

## Chapter O - Module 2 Section 1: VPWS / Epipe (SAP Encapsulation)

### O1) epipe / VPWS core idea
- In Nokia context, epipe is an Ethernet point-to-point service (VPWS/pseudowire-oriented).
- A key access-side concept is SAP encapsulation:
  - it determines how frames are assigned to a service (service delineation).

### O2) Encapsulation types on Ethernet SAPs
- `null`
  - no VLAN tag used as service delimiter
  - typical when a single CE/service uses the port
  - VLAN tags are treated as customer data (not network service delimiters)
- `dot1q`
  - one Q-tag used as service delimiter
  - 12-bit VLAN ID field (with special/reserved values)
- `qinq`
  - two Q-tags (outer/inner) as delineation/transport model
  - often: outer = provider tag, inner = customer tag (design-dependent)

Memory table (service-delineating tags):
- `null` -> 0
- `dot1q` -> 1
- `qinq` -> 2

### O3) VLAN-ID special cases (course context)
- VLAN ID `0`
  - special case for priority-tagged / 802.1p context
  - not a normal customer service VLAN like typical values
- VLAN ID `4095`
  - reserved

Exam reminder:
- 12 bits provide many values, but not all are normal service IDs for Dot1Q delineation.

### O4) Behavior at SAP ingress
- With `dot1q`:
  - only frames with matching VLAN tag are mapped to the service
  - the service-delineating tag is stripped at SAP ingress
- With `qinq`:
  - only frames with matching outer+inner tags are mapped
  - service-delineating tags are stripped at SAP ingress
- Frame Check Sequence (FCS):
  - in course context, it is also removed at SAP ingress

Important:
- With Dot1Q/QinQ, VLAN tags have logical significance for service mapping.

### O5) Special SAP values (course context)
- `1/1/1:*`
  - wildcard/catch-all behavior for untagged and not-yet-used tag values (as described in the course)
  - VLAN tags may be forwarded transparently (not stripped as delimiting tags)
- `1/1/1:0` (null SAP)
  - typically untagged frames + VLAN-0 frames

### O6) Exclusivity rule
- Null SAP and default SAP are mutually exclusive on the same port.

Key takeaway:
- First decide whether VLAN tags should be used for service delineation.
- Then choose the right model: `null`, `dot1q`, or `qinq`.

### O7) Special QinQ SAP values (deeper view)
- `port:x.*`
  - fixed outer tag `x`, flexible inner tag (course-style often described as "inner transparent")
- `port:0.*`
  - null/default special case in QinQ context
  - typically untagged or outer VLAN `0`
- `port:x.0`
  - fixed outer tag `x` with inner `0`, or a course-style no-inner/null-bottom special case
- `port:*.*`
  - not universally "always impossible" on 7750
  - availability/behavior depends on release/feature state (course material may simplify with restrictions)

Important reminder:
- In `port:qtag1.qtag2`, `qtag1` is the outer/top tag and `qtag2` is the inner/bottom tag.

### O8) Tag-stripping exceptions and TPID/Ethertype
- General rule:
  - on regular Dot1Q/QinQ delineation SAPs, service-delineating tags are evaluated and stripped
- Important exception:
  - certain default/special QinQ SAPs may handle tags transparently

Example (course-style):
- SAP `port:0.*`, frame with outer `0` and inner `10`
  - outer `0` is used for matching and removed
  - inner `10` may be carried transparently

TPID/Ethertype:
- `0x8100` is the classic 802.1Q TPID/Ethertype for VLAN tag recognition
- Different expected TPID values for outer/inner tags may be configurable (platform/context dependent)
- If TPID does not match the expected value, the typical problem is classification/matching (often simplified in course context as `untagged/non-matching`)

### O9) MTU overview in the MPLS service path
Important MTU levels in course context:
- SAP/access-port MTU
- Service MTU
- SDP path MTU
- Network-port MTU

Reminder:
- MTU must fit as a chain. A single value that is too small is enough to cause drops.

### O10) SAP MTU, service MTU, and "service-delineating" tags
SAP MTU (course-style):
- `null` typically `1514`
- `dot1q` typically `1518` (`+4` bytes for one VLAN tag)
- `qinq` typically `1522` (`+8` bytes for two VLAN tags)

What does "service-delineating" mean?
- A VLAN tag is used at the SAP to select/map the correct service.
- On regular Dot1Q/QinQ SAPs, this delineating tag is typically evaluated and stripped at SAP ingress.
- That means the tag no longer counts toward the service-frame size inside the service core.

Important for MTU calculations:
- If tags are carried transparently (for example wildcard/default behavior like `port:*` in the course example), they remain part of the service frame.
- This can increase service frame size from `1514` to `1518`.
- Then service MTU often must be increased.

Service MTU (course-style):
- Default for Ethernet Layer-2 service is often `1514` (`1500` payload + `14` bytes Ethernet header, without FCS)
- Rule: `SAP MTU >= Service MTU`

### O11) SDP path MTU (course-style)
- SDP path MTU = largest frame size that can be transported over the SDP
- Course formula (simplified):
  - `SDP Path MTU = Network Port MTU - Layer-2 Header - MPLS Overhead`

Notes:
- MPLS overhead may vary depending on label count
- RSVP/LDP/GRE have different overhead/transport context
- If service MTU increases, SDP path MTU must still be sufficient

Rules:
- `SDP Path MTU >= Service MTU`
- SDP path MTU does not have to match exactly on both ends
- Changes can be relevant through network-port MTU and/or SDP-MTU configuration

Extra (Layer 2 vs Layer 3):
- Oversized Layer-2 frames are typically dropped
- Layer-3 fragmentation may occur (if allowed), but is costly and usually avoided

### O12) Network-port MTU and concrete SDP path MTU calculations (course-style)
Default table (your course):
- Ethernet access `null` = `1514`
- Ethernet access `dot1q` = `1518`
- Ethernet access `qinq` = `1522`
- Fast Ethernet network = `1514`
- Gigabit Ethernet network = `9212`

MPLS SDP example (course-style):
- If you start from `9212` and subtract two MPLS labels (transport + service) plus Ethernet header, the remainder is SDP path MTU.
- Important arithmetic note:
  - `9190` is obtained only with a `14`-byte Ethernet header: `9212 - 14 - 4 - 4 = 9190`
  - with `12` bytes, the result would be `9192`

GRE SDP example (course-style):
- `9212 - 14 (Eth) - 20 (IP) - 4 (GRE) - 4 (service label) = 9170`
- If `1970` appears somewhere, that is a typo/arithmetic error.

Additional overhead:
- Facility backup or LDP-over-RSVP may add extra MPLS labels
- Per extra label: `+4` bytes overhead
- Two extra labels: `+8` bytes overhead

### O13) Measure effective SDP path MTU vs derive it
Measure/test:
- On 7750, an OAM SDP-MTU path test can be used (course-style often referred to as `oam sdp-mtu`)
- This tests the practically reachable path MTU of an SDP

Derive (control plane, RSVP-TE):
- For signaled RSVP-TE LSPs, `adspec` can be used
- The ADSPEC object collects path information (including MTU-related values) along the RSVP path
- Effective LSP/path MTU follows the smallest MTU on the path (bottleneck)
- If the RSVP path changes, effective MTU can also change

### O14) VC MTU (Layer 2) vs operational IP MTU (Layer 3) - simple explanation
Layer 2 (for example Epipe / PW):
- `Service MTU` is central
- `VC MTU` (advertised MTU) is, in course context, the usable payload size in the service tunnel
- For Ethernet, course rule is often: `VC-MTU = Service-MTU - 14`
- Example: `1514 -> 1500`
- This advertised/VC MTU is exchanged in T-LDP/PW context and must fit the far end

Layer 3 (IES/VPRN):
- Think in `IP MTU`, not the same Layer-2 service-MTU model
- There is administrative IP MTU (configured) and operational IP MTU (actually usable)
- Operational IP MTU is limited by the underlay:
  - with SAP attachment: by SAP MTU
  - with spoke-SDP attachment: by SDP path MTU
- Simplified:
  - `operational IP MTU <= admin IP MTU`
  - `operational IP MTU <= SAP MTU` or `<= SDP Path MTU`

Why you seem to subtract Ethernet header twice (your observation):
- Some course-style derivations first derive SDP path MTU from network-port MTU including link/tunnel overhead
- Then, for an IP-payload/VC-like view, they subtract Ethernet-header contribution again at the next abstraction level
- That is not the same header being "physically transmitted twice"; it is a staged derivation across different MTU levels

Simple memory line:
- L2: think `Service MTU` + `VC MTU`
- L3: think `Admin IP MTU` vs `Operational IP MTU`
- Always find the smallest value in the chain (the bottleneck)

### O15) Dot1Q service-delineating + MPLS labels (practical example)
Important reminder:
- DLC = Ethernet/L2 header (do not forget it)

Example (course-style):
- Frame arrives on a Dot1Q SAP: `1518` bytes (including 1 VLAN tag)
- The VLAN tag (for example `50`) is service-delineating
- That delineating tag is stripped at the SAP
- The remaining service frame contains:
  - `1500` payload
  - `+14` bytes Ethernet/DLC header
  - so `1514` bytes
- Then MPLS transport encapsulation is added:
  - `+4` bytes transport label
  - `+4` bytes service label
- Tunnel frame (course-style): `1514 + 8 = 1522`

Common mistake:
- The delineating tag is correctly removed, but the Ethernet/DLC header is also accidentally "mentally removed".

### O16) Testing MTU with ping (DF / do-not-fragment)
Course logic (IPv4 ping test):
- `ping <ip> size 1472 do-not-fragment` typically works with `1500` byte IP MTU
- Reason:
  - `1472` (ICMP data)
  - `+20` bytes IPv4 header
  - `+8` bytes ICMP header
  - `= 1500` byte IP packet

Why `1473` fails (with DF):
- `1473 + 20 + 8 = 1501` bytes
- That is `1` byte above `1500`
- With DF set, the packet must not be fragmented -> test fails

Without DF:
- Then IP fragmentation may occur (if allowed/possible)
- Important: this is Layer-3 fragmentation, not Layer-2 frame fragmentation inside the service

Simple memory line:
- Ping size + `28` bytes (IPv4+ICMP) = actual IP packet size

### O17) Increasing payload to 1504 with Dot1Q (service-delineating) - step by step
Scenario:
- Customer wants to increase payload from `1500` to `1504`
- Dot1Q SAP, VLAN is service-delineating

Calculation (course-style):
1. Calculate new service frame size
- `1504` payload + `14` bytes Ethernet/DLC = `1518`
- -> `Service MTU` must be increased to `1518`

2. Consider SAP ingress (delimiter tag is still present on arrival)
- The Dot1Q tag is evaluated at the SAP and then stripped
- Therefore a frame of `1518 + 4 = 1522` may arrive at the SAP
- -> `SAP MTU` must be increased to `1522`

Memory line:
- Service sees `1518` after strip
- SAP must be able to accept `1522` before strip

### O18) Determine SDP path MTU and back-calculate overhead
Classic CLI (course-style description):
- `oam sdp-mtu <serviceid> size-inc <value1> <value2> step <increment>`
- Purpose: determine effective SDP path MTU by probing in steps

Then (basic MPLS case) common back-calculation toward network-port MTU:
- `+14` bytes DLC/Ethernet header
- `+4` bytes transport label
- `+4` bytes service label
- total often `+22` bytes (without extra labels)

### O19) ADSPEC/RSVP-TE, PathMTUTooSmall, and LSP trace (troubleshooting)
ADSPEC (simple explanation):
- If an SDP uses an RSVP-TE LSP as transport, ADSPEC can help derive the effective path MTU of that LSP from the path
- This effective MTU follows the smallest MTU value along the path (bottleneck)
- If the RSVP path changes, the effective MTU can also update dynamically

Why a service may appear "up" without ADSPEC:
- Without effective path-MTU visibility, bottlenecks are often noticed only in the data plane (when sending large frames)
- A jumbo service (for example `9000`) may be formally up even though a small port in the core limits it

With ADSPEC/MTU visibility, you may then see:
- `minReqd MTU` (required by service) > `oper path MTU` (actually available)
- a flag like `PathMTUTooSmall`
- Result: service/SDP is recognized as MTU-problematic (possibly down/failed, depending on status behavior/model)

Typical troubleshooting sequence:
1. `show service id <id> sdp <spoke-sdp> detail` -> check `minReqd MTU`, `oper path MTU`, flags
2. `oam lsp-trace rsvp-te ... output-format detail` -> find the problematic hop/port
3. Fix the small `MRU`/port MTU in the core

MRU note (course-style):
- Some outputs show `MRU` as the relevant physical port size
- In your troubleshooting flow, this is the practical field used to identify the undersized port

### O20) SDP and VC type (RFC 4448) - simple explanation
Core idea:
- RFC 4448 defines two key Ethernet pseudowire VC-type views:
  - Ethernet Raw Mode
  - Ethernet Tagged Mode (often referred to as VLAN-specific mode)

Where this matters:
- When binding a service into SDP/PW context (for example spoke-sdp)
- In T-LDP signaling between PE routers

Raw mode (course-style default view):
- Service-delineating VLAN tag is typically stripped at ingress
- That delineating tag is not carried as user tag across the epipe

Tagged mode (VC type VLAN):
- VLAN tag remains part of the transported frame
- Often required for interoperability with peers expecting tagged mode
- MTU implication:
  - The VLAN tag must be counted in service-MTU considerations (`+4` bytes)

Important tag reminder:
- An incoming VLAN tag is service-delineating only if it matches SAP encapsulation
- If it does not match as delimiter, it may be a transparent user tag depending on mode

Dot1Q with VLAN 0 (course-style):
- Untagged traffic and VLAN-ID-0 traffic can map into the same SAP context
- VLAN 0 remains a special case (priority-tag context)

Short comparison:
- service-delineating VLAN (often provider view): tag primarily maps traffic to service
- transparently carried VLAN (user view): tag remains part of transported customer frame

## Chapter P - Module 2 Section 2: VPLS Label Signaling

### P1) Core principle
- In VPLS, participating PE routers are T-LDP peers for the service
- These PE endpoints exchange service/PW labels for that service
- A PE service instance is often viewed as a virtual switch (VS) in course context

### P2) Topology idea
- VPLS can be understood as a multipoint Layer-2 service with full-mesh character among participating PEs
- Between two PE routers, one T-LDP session is typically enough to signal multiple services

### P3) VC ID and service state
- In p2p PW/spoke context, VC ID must match end-to-end
- With VC-ID mismatch, no matching service/PW label context comes up

### P4) Broadcast domain and MAC learning
- All SAPs of a VPLS belong to the same Layer-2 broadcast domain of that service
- Each service has its own MAC-learning/forwarding view (virtual switch per service)

### P5) Unknown vs known unicast
- Unknown destination (MAC unknown):
  - default flooding/replication across relevant PWs/LSPs in the service
- Known unicast (MAC learned):
  - targeted forwarding only to known destination

Memory line:
- VPLS behaves like a distributed virtual switch:
  - learn first (MAC), then forward selectively

## Chapter Q - BGP Module 1 Section 2: BGP Overview

### Q1) BGP core idea
- BGP = Border Gateway Protocol
- It is the key inter-domain routing protocol between autonomous systems (AS)
- BGP is classically considered a path-vector protocol

### Q2) Session and types
- BGP session runs over TCP port 179
- eBGP: between different ASes
- iBGP: within the same AS

### Q3) Key BGP concepts in overview
- BGP uses attributes (for example LOCAL_PREF, AS_PATH, MED, NEXT_HOP) for path and policy decisions
- AS_PATH helps prevent inter-AS loops
- Updates are typically incremental (after initial exchange)
- Keepalives maintain session liveness

### Q4) BGP and IGP interaction
- IGP provides internal reachability (AS underlay)
- BGP handles inter-domain/policy decisions
- Next-hop reachability remains a central practical point

### Q5) Scaling note
- iBGP classically starts from a full-mesh model
- Larger networks later use mechanisms such as route reflectors

Simple memory line:
- IGP asks: "How do I get there internally?"
- BGP asks: "Which external path do I want based on policy?"

### Q6) AS, ASN, and internal protocols
- An AS is a router collection under one common administration.
- Each AS has an ASN (AS number), which must be unique in Internet context.
- Course-style: ASN assignment via Regional Internet Registries (RIR).
- Inside an AS, typical IGP/IRP protocols are OSPF or IS-IS.

### Q7) BGP role and evolution
- Originally: exterior routing to exchange reachability between independent ASes.
- Today: multiprotocol capable (multiple address families, additional functions).
- Typical AS owner example: ISP.

### Q8) Peers, session bring-up, no discovery
- Routers exchanging BGP information are peers / neighbors / speakers.
- Sequence:
1. Build TCP session (port 179).
2. Then establish BGP session using OPEN/KEEPALIVE/UPDATE, etc.
- There is no automatic neighbor discovery like classic hello protocols.
- Each peer is explicitly configured.

### Q9) OPEN message - what is actually inside
- Typical OPEN elements:
  - BGP version
  - My AS
  - Hold time
  - BGP identifier
  - Optional parameters (capabilities, for example address families, auth methods depending on platform/mechanism)
- Important clarification:
  - Source IP comes from the TCP session, not as a separate OPEN field.

### Q10) Policy and route refresh
- Import policy:
  - controls accept/reject of inbound routes
  - can modify route attributes
- Route refresh:
  - after policy changes, a router can ask a neighbor to resend routes
  - goal: apply new policy without hard session resets
- Course context Nokia 7750:
  - highlighted in your material especially for BGP/VPRN use cases

### Q11) Main messages in a BGP session
- OPEN:
  - align session parameters and capabilities
- KEEPALIVE:
  - confirm session liveness
- UPDATE:
  - announce new routes or withdraw existing ones
- NOTIFICATION:
  - signal errors and tear down the session

### Q12) Practical memory line
- TCP provides reliable transport.
- BGP provides path/policy decisions.
- IGP provides internal AS reachability.

## Chapter R - BGP Module 1 Section 3: BGP Peering Sessions

### R1) BGP connection states (FSM)
- The classic BGP states are:
  - Idle
  - Connect
  - Active
  - OpenSent
  - OpenConfirm
  - Established

### R2) The key states explained simply
- Idle:
  - session is not actively started
  - with administrative shutdown, no TCP connection attempts are made
- Connect:
  - active TCP connection attempt to the peer
- Active:
  - not a "good active state", but rather a retry/wait state
  - router listens for inbound TCP connection or retries setup
- OpenSent:
  - OPEN has been sent, waiting for OPEN from peer
- OpenConfirm:
  - valid OPEN was received, KEEPALIVE was sent, waiting for peer KEEPALIVE
- Established:
  - session is up, normal BGP message exchange can run

Reminder:
- `Active` is often misunderstood. In practice, it often means the session is not coming up cleanly.

### R2b) Success sequence and troubleshooting
- Typical success sequence without fallback:
  - `Idle -> Connect -> OpenSent -> OpenConfirm -> Established`
- What happens in that sequence:
  - `Connect`:
    - TCP is being established
  - `OpenSent`:
    - TCP is up, the local `OPEN` has been sent
  - `OpenConfirm`:
    - the peer `OPEN` has been accepted, and the router is still waiting for a valid `KEEPALIVE`
  - `Established`:
    - a valid `KEEPALIVE` from the peer has been received, and normal message exchange can run
- If a session keeps oscillating between `Connect` and `Active`:
  - the first suspects are often reachability, TCP, peer IP, ASN, or session-setup issues

### R3) iBGP vs eBGP
- Same AS:
  - iBGP
- Different AS:
  - eBGP

### R4) Full-mesh iBGP and split horizon
- Classic iBGP rule:
  - A route learned from one iBGP peer must not be re-advertised to another iBGP peer
- This rule is often called iBGP split horizon
- That leads to the full-mesh assumption:
  - If every speaker should learn all relevant routes, all relevant iBGP speakers need direct peerings

### R5) Why route reflectors matter later
- Full mesh scales poorly
- Route reflectors reduce the number of required iBGP sessions
- They are the classic answer to the scaling problem in large iBGP networks

Simple memory line:
- Idle = nothing starts
- Active = it is not coming up cleanly
- Established = session is up
- iBGP split horizon = reason for full mesh

## Chapter S - BGP Module 1 Section 4: Path Attributes and Route Processing

### S1) The main BGP attribute classes
- BGP path attributes are first divided into two major groups:
  - well-known
  - optional
- Well-known attributes must be understood by every BGP implementation
- Optional attributes may be supported differently depending on implementation and use case

### S2) Mandatory, discretionary, transitive, non-transitive
- Well-known mandatory:
  - must be present for applicable route updates
- Well-known discretionary:
  - are standardized, but not required for every route
- Optional transitive:
  - may be propagated onward
- Optional non-transitive:
  - should not be preserved unchanged across AS boundaries

Reminder:
- mandatory = required
- discretionary = situation-dependent
- transitive = allowed to continue
- non-transitive = not preserved for other ASes

### S3) Important path attributes
- Well-known mandatory:
  - `AS_PATH`
  - `NEXT_HOP`
  - `ORIGIN`
- Well-known discretionary:
  - `LOCAL_PREF`
  - `ATOMIC_AGGREGATE`
- Other important optional attributes:
  - `COMMUNITY`
  - `MED`
  - `AGGREGATOR`
  - `AS4_PATH`
  - `ORIGINATOR_ID`
  - `CLUSTER_LIST`

### S4) COMMUNITY and LOCAL_PREF in simple terms
- COMMUNITY is often just a marker at first
- A policy can turn a community into a `LOCAL_PREF` value
- That allows the local AS to decide:
  - which exit router should be preferred
  - which route should look more attractive
- Communities can also be used internally to mark prefixes that should later be filtered before eBGP export

Simple memory line:
- Community marks
- Policy decides
- Local Preference acts

### S5) AS_PATH, ORIGIN, and MED
- `AS_PATH` shows the sequence of ASes through which the route information has passed
- A shorter `AS_PATH` is often preferred
- But:
  - that does not automatically prove lower delay
  - that does not automatically prove lower real-world cost
- `ORIGIN` is typically ranked like this:
  - `IGP` better than `EGP`
  - `EGP` better than `INCOMPLETE`
- Redistributed routes often end up as `INCOMPLETE`
- `MED` is a hint to another AS about which entry point it should prefer
- Lower MED values are better

### S6) Early route-selection order
- In your notes, the important order is:
  - higher `LOCAL_PREF`
  - shorter `AS_PATH`
  - better `ORIGIN`
  - lower `MED`
  - `eBGP` over `iBGP`
- Additional tie-breakers come later

Important:
- `eBGP over iBGP` is not a universal rule for everything
- It applies only after the earlier criteria did not already decide the winner

### S7) Best, used, RIB-IN, local BGP RIB
- A received BGP route first lands in `RIB-IN`
- There it is checked:
  - is it valid?
  - is it accepted by policy?
  - are required elements such as `NEXT_HOP` reachable?
- It then participates in best-path selection
- The best valid route per prefix is installed into the local BGP RIB
- After that it is offered to the `RTM`

### S8) Why best is not always used
- A route can be the best BGP route
- But it still may not become the active system route
- Reason:
  - another protocol may provide the same prefix with a better administrative preference
- In that case the BGP route remains `best`, but not `used`

### S9) advertise-inactive
- Normally, best and used BGP routes are the candidates for export
- With `advertise-inactive`, a best but locally unused BGP route can still be advertised
- This is useful when:
  - another protocol wins locally
  - but you still want to advertise the BGP route externally

### S10) Import policies, export policies, and debug views
- Import policy:
  - evaluates received routes
  - can accept, reject, or modify attributes
- Export policy:
  - evaluates locally known routes before advertisement
  - can also set or modify attributes
- When exporting to `eBGP`, it is typical that:
  - the local AS number is added to `AS_PATH`
  - `NEXT_HOP` is set to the local outgoing address

Nokia nuance:
- In newer MD-CLI contexts, eBGP without proper policies is secured by default
- Classic CLI was historically more permissive
- Clean operational practice still is:
  - build explicit import and export policies

Troubleshooting:
- `show router bgp routes ... detail`
  - good for attribute values
- `show router bgp routes ... hunt`
  - good for tracing the route across inbound, best-path, and export views

## Chapter T - BGP Module 1 Section 5: Basic Route Policies

### T1) Core idea of a route policy
- A routing policy consists of rules or entries
- Each entry basically has two sides:
  - `from`
  - `action`
- `from` describes:
  - which routes or prefixes are affected
- `action` describes:
  - what is done with those matched routes

Simple memory line:
- From = which route?
- Action = what happens to it?

### T2) What can appear in the From part?
- Typical match criteria are:
  - prefix list
  - address family
  - protocol through which the route was learned
  - BGP neighbor
  - BGP attributes
- If a specific criterion is omitted, the policy usually does not further restrict on that point

### T3) Accept and reject on import and export
- Import `accept`:
  - route is accepted
  - route may continue into BGP selection
- Import `reject`:
  - route is ignored
- Export `accept`:
  - route may be advertised to matching BGP peers
- Export `reject`:
  - route is not advertised

### T4) Policies can also change attributes
- A policy does not only filter
- It can also set or modify BGP attributes
- That works on:
  - import
  - export

### T5) Order and stop behavior
- Policy entries are evaluated sequentially
- Normal behavior:
  - first match executes the action
  - then evaluation stops
- That is why entry order matters

### T6) next-entry and next-policy
- With `next-entry` or `next-policy`, processing can continue even after a match
- This is useful when:
  - multiple processing steps are needed
  - the first match should not already be the end

### T7) Default action
- If no entry matches, the `default action` applies
- If no explicit default action is configured:
  - then the default behavior of the using protocol applies

Reminder:
- No match = default decides

### T8) Bogon or bogus prefix
- In everyday BGP operations, this usually means a `bogon prefix`
- Those are prefixes that normally should not appear in the global Internet routing table
- Examples:
  - private RFC 1918 space
  - reserved ranges
  - not-yet-allocated ranges

Practice:
- Such prefixes are often filtered by policy
- Especially on eBGP edges, this is an important basic protection measure

### T9) MED, COMMUNITY, and LOCAL_PREF in policies
- `MED` can be set by policy
- Depending on syntax:
  - as a fixed value
  - or based on IGP-related cost
- `LOCAL_PREF` can also be set or changed by policy
- Higher `LOCAL_PREF` is more attractive

### T10) Combining prefix lists with communities
- A clean design pattern is:
  - prefix list for selection
  - community for marking
- Example:
  - match `NORTH_PREFIXES`
  - add `NORTH_COMMUNITY`
  - match `SOUTH_PREFIXES`
  - add `SOUTH_COMMUNITY`
- That allows a downstream router to later treat those groups differently

### T11) Reading from protocol ospf correctly
- If an export policy says `from protocol ospf`, it refers to routes learned locally through OSPF
- Those routes are then being considered for export into BGP
- That is not the same thing as the BGP `ORIGIN` attribute

## Chapter U - BGP Module 1 Section 6: Understanding Questions and Big Picture

### U1) The broad BGP picture
- BGP is meant for exchanging reachability information
- Classically:
  - between different ASes
- An AS is:
  - a collection of routers under common administration

### U2) Session and states
- Early problem states:
  - `Connect`
  - `Active`
- After successful TCP setup:
  - `OpenSent`
  - `OpenConfirm`
  - `Established`

Reminder:
- TCP must come up first
- then the real BGP session logic follows

### U3) Messages and contents
- Important BGP messages:
  - `OPEN`
  - `KEEPALIVE`
  - `UPDATE`
  - `NOTIFICATION`
- `UPDATE` carries:
  - reachability or NLRI
  - path attributes

### U4) Path selection in one sentence
- If multiple updates exist for the same prefix, BGP compares the paths in order
- Typical early criteria:
  - `LOCAL_PREF`
  - `AS_PATH`
  - `ORIGIN`
  - `MED`
  - later `eBGP` over `iBGP`

### U5) Why policies change behavior
- Policies decide:
  - what is accepted
  - what is rejected
  - which attributes are changed
- That is exactly how the default behavior of a BGP speaker is deliberately adjusted

### U6) One more important practical point
- Non-directly-connected `eBGP` needs `multihop`
- Otherwise the session often fails already because of TTL behavior

## Chapter V - BGP Module 2 Section 1: MP-BGP and VPN Routing

### V1) When does BGP become MP-BGP?
- Classic BGP was originally focused mainly on IPv4 unicast
- As soon as a BGP implementation can carry multiple address families or reachability types, we speak of `MP-BGP`
- Typical examples:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - label-related families
  - other VPN-related families

### V2) The three VPN service pictures
- `VPWS`
  - Layer 2 point-to-point
- `VPLS`
  - Layer 2 multipoint
- `VPRN`
  - Layer 3 multipoint

Memory line:
- VPWS = like a wire
- VPLS = like a distributed switch
- VPRN = like a distributed routed network

### V3) Distributed VPN explained simply
- A distributed VPN is jointly provided by multiple PE devices
- Tunnels are required between them
- The simplified data flow is:
  - CE sends traffic to PE
  - ingress PE encapsulates
  - P routers transport
  - egress PE decapsulates
  - CE receives the traffic

### V4) Transport and service tunnels
- A transport tunnel carries traffic through the provider network
- Many services can share the same transport tunnel
- That is why an additional service context or service tunnel is needed
- The `SDP` is the binding element between service and transport path

### V5) Service interconnections
- VPN services can be interconnected
- Examples:
  - VPLS attached to a VPRN interface
  - VPWS terminated into VPLS
  - VPWS terminated into a VPRN interface
- When VPLS is attached to a VPRN interface, this is often called `rVPLS`

### V6) Multiple router instances in VPRN
- In addition to the base router, each `VPRN` has its own logical router instance
- Each instance has:
  - its own Layer 3 interfaces
  - its own routing protocols
  - its own routing view

### V7) Why MP-BGP is so important for VPRN
- VPRN is a distributed Layer 3 service
- The PE routers must exchange VPN routing information for customer sites
- That is exactly where `MP-BGP` becomes central
- For full exchange, a full mesh is typically needed unless helper mechanisms are used
- Route reflectors improve scalability here

### V8) Route distinguisher
- Customers may use overlapping prefixes
- To let BGP distinguish them anyway, there is the `route distinguisher`
- Put simply:
  - `RD + IPv4 prefix = VPN-IPv4`
  - `RD + IPv6 prefix = VPN-IPv6`

Reminder:
- RD makes prefixes unique
- It does not change the customer address itself
- It only creates a unique VPN context

### V9) VPN address families on the session
- For PE routers to actually exchange those VPN prefixes, the matching MP-BGP address family must be enabled
- Typical examples:
  - `VPN-IPv4`
  - `VPN-IPv6`

## Chapter W - BGP Module 2 Section 3: Inter-Region Transport Tunnels

### W1) Service labels in MP-BGP VPN routes
- MP-BGP VPN-IPv4/VPN-IPv6 updates can carry label information for later VPN forwarding
- Important:
  - that does not automatically mean "a completely different label value for every prefix"
  - on `SR OS`, `label-per-VRF` is often used for `VPRN`
- That means:
  - multiple prefixes from the same VRF can use the same service-label value

Reminder:
- MP-BGP carries the label information
- the platform can still operate in label-per-VRF mode

### W2) Role of the route distinguisher here
- The `RD` belongs to the control plane
- It turns normal prefixes into unique `VPN-IPv4` or `VPN-IPv6` routes
- In the actual VRF route table or FIB, the box works again with the normal IPv4/IPv6 prefixes

Reminder:
- `RD` = uniqueness in BGP
- `RT` = import/export membership
- `RD` is not a data-plane header

### W3) Why inter-region tunnels are needed
- In large networks, VPNs often cross multiple regions
- Those regions can even be operated by different teams or operators
- A scalable approach is:
  - end-to-end transport between the PEs
  - service-specific knowledge stays at the PEs
  - intermediate routers do not need to know the individual VPN services

### W4) Why tunnels are stitched
- LDP, RSVP-TE, or segment routing often do not simply run across all regions end to end
- So the design is:
  - intra-region tunnels inside each region
  - stitched together at the regional boundaries
- `MP-BGP labeled unicast` helps with that stitching

Typical examples:
- `label-ipv4`
- `label-ipv6`

### W5) What PE routers typically advertise
- PEs usually advertise their loopback or system IP
- That address is the stable tunnel endpoint
- Border and core routers can then build the transport path toward it

### W6) Data plane explained simply
- Inside one region, the packet often looks like this:
  - inner `BGP` label
  - outer `LDP`/`RSVP`/`SR` label
- The outer label carries the packet to the regional border router
- There, the outer label is removed
- The visible BGP label is then reused or swapped for the next segment

Reminder:
- outer label = regional transport
- inner label = stitched onward path

### W7) Border routers and stitching
- When two border routers are directly adjacent, that direct hop often does not need an additional regional transport label
- Then the BGP label becomes the key hint for the next step
- In the next region, a new outer label can be added again

### W8) Segment routing in this picture
- With segment routing, the outer stack can contain multiple labels or SIDs
- But the core idea stays the same:
  - inside is the inter-regional BGP context
  - outside is the regional transport context

### W9) What happens after transport is built
- Once end-to-end transport exists, the PE routers can directly exchange service-specific information
- Depending on the service, this can include:
  - service labels
  - Layer 3 prefixes
  - Layer 2 MAC addresses

Possible signaling methods:
- `targeted LDP`
- `MP-BGP`

### W10) Intra-region tunnels in the SR OS context
- Often, only `LDP` tunnels are initially used by default for resolving label-IP next hops
- Other tunnel types can also be included
- With `resolution any`, more tunnel types can be considered
- If multiple tunnels are possible, the `Tunnel Table Manager` decides

Reminder:
- a lower numeric preference is better

## Chapter X - BGP Module 3 Section 1: Improving iBGP Scalability with Route Reflectors

### X1) Why route reflectors are needed
- In large VPN environments, many PE routers must exchange VPN routes
- Without helper mechanisms, iBGP quickly turns into a full mesh
- That scales poorly because the number of sessions grows rapidly

### X2) Basic idea of the route reflector
- A `Route Reflector` is a special BGP speaker defined by `RFC 4456`
- It may re-advertise routes learned via iBGP to selected other iBGP peers
- That re-advertisement is called `reflecting`

Reminder:
- An RR relaxes the classic iBGP split-horizon rule in a controlled way
- that is exactly why the number of required iBGP sessions goes down

### X3) How the topology becomes simpler
- Instead of every PE peering with every other PE, an RR can sit logically in the middle
- Each PE then has only its session to the RR
- The RR distributes the relevant routes onward

### X4) Why this matters in VPN environments
- In VPN environments, examples of exchanged routes include:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - `EVPN`
- With many PEs, the session problem quickly becomes larger than the routing problem itself

## Chapter Y - BGP Module 3 Section 2: Topology and Operation of Route-Reflection Clusters

### Y1) Three roles in an RR design
- One typically distinguishes:
  - `Route Reflector`
  - `RR Client`
  - `Regular iBGP Speaker` or `Non-Client Peer`

### Y2) Which peers still need full mesh
- Clients do not need to be full-meshed with one another
- Non-clients must still be treated as properly meshed
- In simple designs, other RRs are often treated as non-clients

Reminder:
- RR mainly saves the full mesh on the client side
- non-clients remain normal iBGP speakers from a routing perspective

### Y3) What a cluster is
- An RR and its clients logically form a `cluster`
- The RR is the central point of that cluster
- The clients peer toward the RR

### Y4) Cluster ID
- A cluster has a `4-byte cluster ID`
- It identifies the cluster
- A common choice is the router ID of the RR
- With redundant RRs in the same cluster, the same cluster value can be used

### Y5) Best and used routes on the RR
- RRs typically advertise `best` and `used` routes
- `best` means:
  - the route won BGP path selection against other candidates for the same prefix
- `used` means:
  - it was also installed into the routing table by the RTM

Reminder:
- `best` is not automatically `used`
- an RR does not blindly reflect every received route

### Y6) Loop prevention in the RR environment
- Route reflection introduces additional loop risks
- That is why the following attributes matter:
  - `ORIGINATOR_ID`
  - `CLUSTER_LIST`
- They help detect whether a reflected route has looped back in an unhealthy way

### Y7) Update rules on the RR
- If the best route comes from a `non-client`:
  - reflect it to clients
  - propagate it to eBGP peers as allowed by policy
  - do not reflect it to other non-clients
- If the best route comes from a `client`:
  - reflect it to clients
  - reflect it to non-clients
  - propagate it to eBGP peers as allowed by policy
- If the best route comes from an `eBGP` peer:
  - advertise it to clients
  - advertise it to non-clients
  - advertise it to other eBGP peers
  - each case still depends on policy

### Y8) Nokia view of split horizon and re-advertisement
- On `SR OS`, the non-client behavior is built in
- For clients, confed-eBGP, and eBGP, the `split-horizon` BGP command is additionally needed if you want to suppress re-advertisement
- Without that extra split-horizon control, a best route learned from a client or eBGP peer can in principle be advertised back to the same peer

Reminder:
- in eBGP, `AS_PATH` loop detection then typically helps
- if you do not want that behavior:
  - use export policy
  - or configure `split-horizon`
