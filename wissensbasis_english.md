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

---

## Open points / next topics
- Hier tragen wir neue Themen ein, sobald du sie schickst.

