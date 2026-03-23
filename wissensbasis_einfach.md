# Wissensbasis (einfach erklaert)

Dieses File sammelt alles Wissen, das du mir gibst.
Ziel:
- einfach erklaert
- klar geordnet
- schnell wiederholbar

## Nutzung
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

Merksatz:
- Vanilla D2R hat feste Originalklassen, kein Warlock.

### A2) Gruene Aura
- Die gruene Aura ist oft Conviction (vor allem bei Gegnern).
- Conviction senkt deine Defense und Elementar-Resistenzen.
- Folge: Du bekommst deutlich mehr Elementarschaden.

Merksatz:
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

Merksatz:
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

Merksatz:
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

Merksatz:
- Modern: IP + Ethernet. Legacy: Frame Relay, ATM, TDM, SONET.

### F2) Wofuer die Technologien historisch genutzt wurden
- TDM: oft fuer Real-time Voice (zeitkritische Sprachdienste).
- Frame Relay / ATM: haeufig fuer private WAN-Netzwerke.
- IP: Best-effort Data Services (keine harte Zustellgarantie).

Merksatz:
- Voice frueher eher TDM, Daten heute meist IP.

### F3) Wichtige Architektur-Aussage aus Slide 1
- Eine Plattform sollte mehrere Technologien gleichzeitig bereitstellen koennen.
- Ziel ist Konvergenz: alte und neue Dienste auf einer gemeinsamen Infrastruktur.

Typischer Fehler:
- Zu denken, dass eine moderne Plattform nur IP koennen muss.
- In der Praxis muss sie oft auch Legacy-Services integrieren oder migrieren.

### F4) Einfach erklaert: Best-effort bei IP
- "Best-effort" bedeutet:
  - Das Netz versucht Daten zu liefern.
  - Es gibt aber ohne zusaetzliche Mechanismen keine feste Garantie fuer Latenz, Jitter oder Paketverlust.

Pruefungsfrage-Idee:
- Warum war TDM fuer Voice historisch attraktiv, waehrend IP als Best-effort gilt?

### F5) Wichtige Einordnung fuer heute
- Historisch wurde IP oft als "Best-effort" eingefuehrt.
- In modernen Netzen wird IP haeufig mit Zusatzmechanismen betrieben, z. B.:
  - QoS-Klassen
  - Priorisierung
  - Traffic Engineering
- Dadurch kann das Verhalten fuer kritische Services deutlich besser steuerbar sein als im reinen Best-effort-Modell.

Merksatz:
- IP ist die Basis, Servicequalitaet kommt oft ueber Zusatzmechanismen.

---

## Kapitel G - Telecommunication Konsolidierung (Slide 2)

### G1) Warum Service Provider konsolidieren
- Betrieb und Wartung alter, getrennter Netze ist teuer.
- Mehrere diskrete Plattformen parallel zu betreiben verursacht hohe Kosten.
- Deshalb werden mehrere Service-Typen auf eine gemeinsame Netzwerktechnologie zusammengefuehrt.

Merksatz:
- Konsolidierung = weniger Parallelbetrieb, bessere Kostenkontrolle.

### G2) Wirtschaftlicher Spagat
- Alte Services koennen weiterhin hohen Umsatz bringen (z. B. Frame Relay, SONET, TDM).
- Diese Services muessen oft weiter unterstuetzt werden.
- Gleichzeitig verlangen Kunden neue Services mit mehr Bandbreite zu sinkenden Preisen.
- Die Nachfrage nach neuen Services wie Wireless Data und Videostreaming steigt zusaetzlich.

Merksatz:
- Altgeschaeft halten, Neugeschaeft skalieren.

### G3) Konkrete Nachfragetreiber
- Wireless Data waechst durch mobile Nutzung.
- Videostreaming erhoeht den kontinuierlichen Bandbreitenbedarf stark.
- Beides verstaerkt den Druck auf:
  - Netzkapazitaet
  - Effizienz
  - Preis-Leistungs-Verhaeltnis

Merksatz:
- Mehr mobile Daten + mehr Video = mehr Last bei gleichzeitigem Preisdruck.

### G4) Kernaussage slide-uebergreifend (Slide 1 + 2)
- Slide 1: Eine Plattform soll mehrere Technologien tragen.
- Slide 2: Warum das wirtschaftlich notwendig ist (Kosten + Marktanforderung).
- Zusammen: Technische Konvergenz als Antwort auf Betriebs- und Preisdruck.

Typischer Fehler:
- Nur auf Technik schauen und die Kosten-/Marktseite vergessen.
- Oder nur auf Preis schauen und die Legacy-Verpflichtungen ignorieren.

Pruefungsfrage-Idee:
- Erklaere, warum Provider nicht einfach alle Legacy-Services sofort abschalten.

---

## Kapitel H - 7750 Service Router und Konvergenz

### H1) Wofuer der 7750 SR eingesetzt wird
- Der 7750 Service Router (SR) wird genutzt, um viele Servicearten ueber eine gemeinsame IP/MPLS-Infrastruktur bereitzustellen.
- Ziel: ein einziges, skalierbares Netz statt vieler isolierter Teilnetze.
- Dadurch koennen verschiedene VPN-Services parallel unterstuetzt werden.

Merksatz:
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

Merksatz:
- Unten gemeinsam (Infrastruktur), oben getrennt (Service-Logik).

Typischer Fehler:
- Zu glauben, dass Konsolidierung automatisch alle Kunden/Services technisch "zusammenmischt".
- Das Overlay-Modell sorgt weiterhin fuer logische Trennung.

---

## Kapitel I - VPN Services und Provider Terminologie

### I1) Was ein VPN hier bedeutet
- Ein VPN wird auf einer geteilten Infrastruktur aufgebaut.
- Es stellt fuer den Nutzer private Dienste bereit.
- Provider-Sicht: virtuelles Netzwerk.
- Kunden-Sicht: privates Netzwerk.

Merksatz:
- Shared transport, private experience.

### I2) Was ein "Service" ist
- Ein Service ist eine logische, eindeutige Entitaet.
- Er bezieht sich auf einen Verbindungstyp (z. B. Internet, Layer-2 VPN, Layer-3 VPN).
- Jeder Service hat eine eindeutige Service-ID.
- Ein Service soll einheitlich End-to-End bereitgestellt und betrieben werden:
  - Konfiguration
  - Management
  - Kosten-/Abrechnungsmodell

Merksatz:
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

Typischer Fehler:
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

Merksatz:
- Features aehnlich, Skalierung oft der echte Unterschied.

### J3) Rolle der P-Router
- P-Router sind auf High-Speed-Interfaces und hohe Forwarding-Kapazitaet ausgelegt.
- Schwerpunkt:
  - viel Traffic schnell und stabil durch den Core transportieren.
- P-Router sind nicht die erste Wahl fuer umfangreiche Service-Edge-Funktionen wie:
  - feingranulares QoS
  - Bandwidth-Management je Service
  - servicebezogenes Accounting

Merksatz:
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

Typischer Fehler:
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

Merksatz:
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

Merksatz:
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

Merksatz:
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

Merksatz:
- Control baut, Data faehrt.

### L7) Warum das fuer die Praxis wichtig ist
- Die Trennung von Transport und Service verbessert Skalierung:
  - Core bleibt schnell und schlank
  - Service-Intelligenz bleibt am Edge
- Fuer Troubleshooting ist die Trennung Gold wert:
  - Fehler im Weg? -> Transport-Label/Path ansehen
  - Fehler im Dienst? -> Service-Label/Service-Mapping ansehen

Typischer Fehler:
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

Pruefungs-Merksatz:
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

Merksatz:
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

Merksatz:
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

Merksatz:
- Core-Transport und Service-Signaling getrennt denken: LSP fuer den Weg, Service-/VC-Label fuer den Dienst.

### L12) Szenario PE -- P -- P -- PE (Signalfluss und Datenfluss)
- Beispieltopologie:
  - `PE1 -- P1 -- P2 -- PE2`
- Ziel:
  - PE1 soll Kundendaten zu PE2 senden.

Wichtige Reihenfolge (vereinfacht):
1. Underlay-Reachability im Core:
   - typischerweise per IGP (z. B. OSPF/IS-IS) fuer stabile Loopback-/Next-Hop-Erreichbarkeit.
2. Transport-LSP:
   - per LDP oder RSVP-TE.
3. Service-Labels:
   - per tLDP oder MP-BGP (serviceabhaengig, z. B. VPWS/VPLS vs VPRN).

Praezisierung zu deiner iBGP-Aussage:
- iBGP/MP-BGP ist wichtig fuer Service-/VPN-Routen.
- Die reine Transport-Erreichbarkeit im Core kommt in vielen Designs primaer aus dem IGP.

LSP-Richtung:
- Ein LSP ist unidirektional.
- Fuer bidirektionale Kommunikation braucht man zwei entgegengesetzte LSPs.

Control Plane vs Data Plane:
- Beim klassischen downstream-assigned Labelverhalten wird Label-Info vom egress/downstream in Richtung ingress verteilt.
- Der spaetere Nutzdatenfluss laeuft dann vom ingress zum egress.
- Deshalb wirken Signalisierungsrichtung und Datenflussrichtung oft entgegengesetzt.

Rollen im Core:
- P-Router: typischerweise LSR (Label Switching Router), sie switchen Transport-Labels.
- PE-Router: typischerweise LER (Label Edge Router), sie pushen/poppen Label und ordnen Services zu.

T-LDP Hinweis:
- tLDP ist keine komplett getrennte Welt von LDP, sondern targeted LDP.
- In der Praxis braucht tLDP daher eine aktive LDP-Basisfunktion auf dem Router.

## Kapitel M - Section 3: Service Components (Nokia 7750 SR)

### M1) Grundidee
- Das Nokia-Servicemodell nutzt Service-Edge-Router (PE) und logische Service-Entities.
- Ziel:
  - ein einheitliches, service-zentriertes Modell fuer
    - Konfiguration
    - Management
    - Billing

Merksatz:
- Services werden als logische Objekte gebaut und betrieben, nicht nur als lose Interface-Configs.

### M2) Service-Bausteine kompakt
- Subscriber:
  - der Nutzer des Services.
- SAP (Service Access Point):
  - Zugriffspunkt des Subscribers am Interface zum Service-Netz.
  - lokal signifikant.
- Customer ID:
  - global signifikant.
  - dient der Gruppierung von Services eines Kunden und fuer Reporting.
- Service ID:
  - numerischer, global signifikanter Service-Identifier.
- Service Type:
  - Dienstklasse (z. B. VPWS, VPLS, VPRN, IES je nach Kontext).
- VC ID:
  - identifiziert den Service im Label-Signaling-Kontext.
  - muss Ende-zu-Ende konsistent sein.
  - oft wird derselbe Wert wie bei der Service ID verwendet (Designkonvention).
- SDP:
  - logische Repraesentation eines Transport-Tunnels.
  - lokal signifikant.
- Transport Tunnel:
  - typischerweise LSP-basierte Transportpfade.
  - immer mit SDPs verknuepft.
- Service Tunnel:
  - Ende-zu-Ende-Servicepfad, repraesentiert durch Service-Labels zwischen PEs.
- Demultiplexer / Demultiplexing:
  - Egress-Operation: Service wird anhand des Service-Labels eindeutig zugeordnet.

### M3) Wichtig fuer Pruefung und Troubleshooting
- P-Router im Core sind typischerweise service-unaware:
  - sie switchen primaer Transport-Labels.
- PE-Router tragen die Service-Intelligenz:
  - Termination, Zuordnung, Richtlinien pro Service/Kunde.
- Service Label am Egress ist entscheidend fuer die korrekte Dienstzuordnung.

Merksatz:
- Transport bringt Pakete ans Ziel, Service-Labels sagen dem Ziel-PE, zu welchem Dienst das Paket gehoert.

### M4) Customer-ID- und SAP-Regeln (praxisnah)
- Customer ID:
  - Ein Service wird beim Erstellen an eine Customer ID gebunden.
  - Diese Customer-Zuordnung ist danach nicht direkt editierbar.
  - Mehrere Services koennen derselben Customer ID zugeordnet sein.

- SAP:
  - Ein SAP gehoert zum Service, in dem er erzeugt wurde (service-gebunden).
  - SAP-Identitaet ist lokal und wird ueber Port/Channel + Encapsulation-Identifier bestimmt.
  - Je nach Encapsulation koennen mehrere SAPs auf demselben Port existieren.
  - SAPs werden auf Access-Kontexten gebaut (auch bei Hybrid im Access-Teil), nicht auf reinen Core-/Network-only Ports.
  - Bei IES/VPRN werden SAPs innerhalb der jeweiligen Service-/IP-Interface-Kontexte definiert.

Merksatz:
- Customer ID gruppiert Services, SAP verankert den konkreten Servicezugang am Interface.

### M5) SAP-Encapsulation, MTU und Local vs Distributed Service

SAP-Encapsulation (vereinfacht):
- `null`:
  - Single-Service-Fall auf dem Port.
  - Encapsulation-Identifier ist `0`.
- `dot1q <vlan-id>`:
  - ein VLAN-Tag pro Service-Zuordnung.
  - im Modell bis `4094` (regulaere VLAN-IDs typischerweise `1..4094`).
- `qinq <outer>.<inner>`:
  - zwei Tag-Ebenen (outer/inner), jeweils bis `4094`.
  - daher oft als `4094 x 4094` beschrieben (sehr grosser Trennraum fuer Servicezuordnung).

MTU-Hinweis:
- Bei Ethernet-Access mit dot1q ist der Default-MTU im Kurskontext `1518`.
- In der Praxis muss die End-to-End-MTU (SAP, Service, SDP/Transportpfad) zusammenpassen.

Policies auf SAP:
- Typisch konfigurierbar:
  - ingress/egress Filter Policies
  - QoS Policies
  - Scheduler Policies
  - Accounting Policies

Local Service:
- Ein einzelner PE kann zwei CEs ueber zwei SAPs im selben Service verbinden.
- Kein Remote-Tunnel noetig, solange beide Enden lokal auf demselben PE liegen.

Distributed Service:
- Service-Enden liegen auf verschiedenen PEs.
- Dann sind SDPs fuer das Tunneling ueber das IP/MPLS-Netz noetig.

Merksatz:
- Lokal = nur SAPs auf einem PE.
- Distributed = SAPs plus SDP ueber das Core-Netz.

### M6) SDP-Binding, Schutz und Tunnelwahl

SDP-Basics:
- SDP = lokale Router-Entity fuer den Transport zu einem Remote-PE.
- SDP-ID ist lokal eindeutig (kann auf anderem Router wiederverwendet werden).
- Far-End wird typischerweise ueber die System-IP des Remote-PE identifiziert.
- Ein SDP kann von mehreren Services genutzt werden (shared Transportobjekt).

Wichtige Folge:
- SDP-Aenderungen koennen alle daran gebundenen Services beeinflussen.

Binding an Service:
- Ein Service nutzt den Transportpfad erst durch `SDP Binding`.
- Service-Label-Signaling fuer distributed Services wird im Binding-Kontext relevant.
- Ohne aktives Signaling muessen benoetigte Label manuell konfiguriert werden.

Tunneltypen unter SDP:
- MPLS:
  - LDP-LSP oder RSVP-TE-LSP.
- GRE:
  - IP-basierter Tunneltransport.

Designvergleich (kurz):
- LDP:
  - folgt typischerweise IGP-Pfaden.
  - geringer Engineering-Aufwand.
- RSVP-TE:
  - mehr Konfigurationsaufwand.
  - dafuer feinere Pfadsteuerung (Traffic Engineering, explicit path).
- GRE:
  - geringerer Label-Control-Plane-Overhead.
  - Pfad/Convergence haengt von IP-Routing/IGP ab.

Schutzmechanismen (kursnah):
- Secondary RSVP LSP:
  - alternativer Pfad, der bei Ausfall des Primary genutzt wird.
- Secondary Standby RSVP LSP:
  - Backup ist bereits operational/warm und kann schneller uebernehmen.
- FRR one-to-one:
  - dedizierter Detour pro geschuetztem LSP.
- FRR facility:
  - gemeinsame Bypass-Tunnel fuer mehrere LSPs.

Merksatz:
- SDP ist ein geteiltes Transportobjekt. Deshalb immer Schutz, Change-Impact und Binding-Kontext mitdenken.

### M7) VC-ID (PWid) und Martini/tLDP - Praezisierung

Kernaussage (klassischer Martini-PW):
- VC-ID (PWid/FEC128) wird auf beiden PE-Enden provisioniert.
- VC-ID + PW-Typ muessen zusammenpassen, damit der Pseudowire korrekt gemappt wird.
- Das wird ueber tLDP-Label-Mapping ausgetauscht.

Wichtig:
- Jede Richtung hat ihr eigenes Service-Label.
- Ingress-/Egress-Label zusammen bilden den bidirektionalen Service-/PW-Kontext zwischen den Enden.

Praezisierung zur Pruefung:
- "VC-ID muss end-to-end identisch sein" ist fuer den klassischen PWid/FEC128-Fall korrekt.
- Bei Generalized-PW/FEC129 wird stattdessen ueber AGI/SAII/TAII-Endpoint-Identifier gearbeitet.

Merksatz:
- Erst FEC-Typ klaeren, dann VC-ID-Regel anwenden.

## Kapitel N - Section 4: Distributed Service Configuration

### N1) Zielbild
- Distributed Service bedeutet:
  - Service-Enden liegen auf verschiedenen PEs.
  - Der Datenpfad muss ueber das Provider-Core-Netz stabil stehen.

### N2) Pflichtschritte (in sinnvoller Reihenfolge)
1. IGP-Basis konfigurieren:
   - System-/Loopback-Adressen muessen in den Routing-Tabellen erreichbar sein.
2. Transport-Label-Signaling aktivieren:
   - LDP oder RSVP-TE (je Design).
3. Transportpfad bereitstellen:
   - LSP (und bei RSVP zusaetzlich sauberer Bind-Path/Schutzdesign).
4. SDP erstellen und an Transport anbinden:
   - bei RSVP an passenden LSP/bind-path,
   - bei LDP entsprechend LDP-Transportauswahl.
5. Service anlegen:
   - Service-Typ definieren.
   - SAPs dem Service zuordnen.
   - SDP-Binding + VC-ID korrekt setzen.
6. End-to-End-Pruefung:
   - VC-ID muss an beiden Enden matchen (klassischer PWid/FEC128-Kontext).

### N3) tLDP-Sonderfall (kursnah)
- Fuer dynamisches tLDP-Signaling muss LDP als Basisfunktion aktiv sein.
- tLDP allein ersetzt nicht die Underlay-Reachability.

### N4) Praktische Designregel
- Alles von unten nach oben bauen:
  - Underlay (IGP) -> Transport (LDP/RSVP/GRE) -> Service (SAP/SDP/VC).

Merksatz:
- Wenn der Transportpfad nicht stabil ist, wird auch der Service nicht stabil.

### N5) RSVP-Path und SDP-Details (kursnah)

tLDP/LDP-Default-Nuance:
- Im SDP-Kontext ist signaling standardmaessig tLDP.
- Die eigentliche Transportauswahl (LDP/RSVP/GRE) ist davon getrennt zu konfigurieren.
- Fuer dynamisches tLDP braucht man eine funktionierende LDP-Basis.

RSVP-TE Path-Konfiguration:
- Path-Objekt zuerst erstellen (`router mpls path`), danach im LSP referenzieren.
- Path kann als primary oder secondary genutzt werden.
- `loose`:
  - Zwischenknoten duerfen via IGP bestimmt werden.
- `strict`:
  - Hops muessen explizit und direkt passend definiert sein.

SDP-Praxis:
- Erst SDP erstellen, dann Service daran binden.
- Mehrere Services koennen dasselbe SDP nutzen.
- VC-/Service-Labels werden relevant signalisiert, wenn der Service an SDP gebunden wird.
- Ohne explizite Angabe ist SDP-Encapsulation im 7750-Kontext standardmaessig GRE.

Merksatz:
- Path vor LSP, SDP vor Service-Binding, dann erst stabile Label-/Service-Operation.

### N6) Was benutze ich wann? (LDP-LSP vs RSVP-TE-LSP vs GRE)

Grundlogik:
- SDP bindet einen Service an eine Transportmethode.
- Transportmethode ist typischerweise eine von drei Optionen:
  - LDP-LSP (MPLS, IGP-folgend)
  - RSVP-TE-LSP (MPLS, explizite/feinere Pfadsteuerung)
  - GRE-Tunnel (IP-Tunneltransport)

SDP-Konfigurationsmerker:
- `far-end`:
  - zeigt auf den Remote-PE (typisch System-IP).
  - im Kurskontext zugleich relevante Peer-Zieladresse fuer tLDP-Service-Signaling.
- `lsp <name>`:
  - nutzt du typischerweise, wenn ein RSVP-TE-LSP bereits definiert wurde und das SDP genau diesen Pfad nutzen soll.

MPLS-LSPs:
- koennen dynamisch signalisiert werden (z. B. LDP/RSVP-TE),
- oder in Spezialfaellen statisch hop-by-hop konfiguriert werden.

tLDP Ende-zu-Ende:
- Service-Signaling muss auf beiden PE-Enden kompatibel aktiv sein.
- Einseitige Aktivierung reicht nicht fuer sauberen VC-/Service-Label-Austausch.

Binding-Typen:
- `spoke-sdp <sdp-id>:<vc-id>`
  - typischer PW-/Punkt-zu-Punkt-Binding-Stil
  - links: Transportweg (SDP)
  - rechts: Service-/PW-Kontext (VC-ID)
- `mesh-sdp`
  - typischerweise fuer VPLS (Multipoint)

Merksatz:
- Erst fragen: \"Welcher Transportpfad?\" (LDP/RSVP/GRE)
- Dann fragen: \"Wie binde ich den Service darauf?\" (spoke/mesh + VC-ID)

### N7) Zusatz-Merker: tLDP-Servicetypen und ID-Signifikanz

tLDP-Service-Merker:
- tLDP-Sessions werden im Kurskontext typischerweise fuer VPWS und VPLS verwendet.
- VPWS:
  - P2P-Pseudowire / virtuelle Standleitung.
- VPLS:
  - logische Gruppe von Pseudowires mit MAC-Learning (multipoint L2-Verhalten).

ID-Signifikanz (Merktabelle):
- SAP-ID: lokal signifikant
- SDP-ID: lokal signifikant
- VC-ID: P2P-/PW-Kontext (Ende-zu-Ende zwischen Service-Enden abzustimmen)
- Service-ID: global signifikant
- Customer-ID: global signifikant

Merksatz:
- Access-/Transportobjekte oft lokal, Verwaltungs-/Serviceobjekte oft global.

---

## Offene Punkte / naechste Inhalte
- Hier tragen wir neue Themen ein, sobald du sie schickst.

## Kapitel O - Modul 2 Section 1: VPWS / Epipe (SAP Encapsulation)

### O1) epipe / VPWS Grundidee
- epipe ist im Nokia-Kontext ein Ethernet Point-to-Point Service (VPWS/Pseudowire-orientiert).
- Zentral fuer den Access-Einstieg ist die SAP-Encapsulation:
  - Sie bestimmt, wie Frames einem Service zugeordnet werden (Service-Delineation).

### O2) Encapsulation-Typen auf Ethernet-SAPs
- `null`
  - kein VLAN-Tag als Service-Delimiter
  - typisch, wenn ein einzelner CE/Service den Port nutzt
  - VLAN-Tags werden dann als Kundendaten behandelt (nicht als Netz-Delimiter)
- `dot1q`
  - ein Q-Tag als Service-Delimiter
  - 12-Bit VLAN-ID-Feld (mit Sonder-/Reservierungswerten)
- `qinq`
  - zwei Q-Tags (outer/inner) als Delimiting-/Transportmodell
  - oft: outer = Provider-Tag, inner = Customer-Tag (designabhaengig)

Merktabelle (Service-Delimiting-Tags):
- `null` -> 0
- `dot1q` -> 1
- `qinq` -> 2

### O3) VLAN-ID-Sonderfaelle (kursnah)
- VLAN-ID `0`
  - Sonderfall fuer Priority-Tagged / 802.1p-Kontext
  - kein normales Kunden-Service-VLAN wie die typischen Werte
- VLAN-ID `4095`
  - reserviert

Pruefungs-Merker:
- 12 Bit bedeuten viele Werte, aber nicht alle sind normale Service-IDs fuer Dot1Q-Delimiting.

### O4) Verhalten am SAP-Ingress
- Bei `dot1q`:
  - nur Frames mit passendem VLAN-Tag werden dem Service zugeordnet
  - das service-delimiting Tag wird am SAP-Ingress gestripped
- Bei `qinq`:
  - nur Frames mit passendem outer+inner Tag werden zugeordnet
  - service-delimiting Tags werden am SAP-Ingress gestripped
- Frame Check Sequence (FCS):
  - wird im Kurskontext am SAP-Ingress ebenfalls entfernt

Wichtig:
- Bei Dot1Q/QinQ haben VLAN-Tags logische Signifikanz fuer die Servicezuordnung.

### O5) Spezielle SAP-Werte (kursnah)
- `1/1/1:*`
  - Wildcard-/Catch-all-Verhalten fuer untagged und nicht anderweitig belegte Tag-Werte (kursnah beschrieben)
  - VLAN-Tags koennen transparent weitergegeben werden (nicht als Delimiting-Tags gestripped)
- `1/1/1:0` (Null-SAP)
  - typischerweise untagged Frames + VLAN-0-Frames

### O6) Exklusivitaetsregel
- Null-SAP und Default-SAP sind auf demselben Port gegenseitig ausschliessend (mutually exclusive).

Merksatz:
- Erst festlegen, ob VLAN-Tags zur Service-Abgrenzung dienen sollen.
- Danach passend waehlen: `null`, `dot1q` oder `qinq`.

### O7) Spezielle QinQ-SAP-Werte (Vertiefung)
- `port:x.*`
  - fester outer Tag `x`, inner Tag flexibel (kursnah oft auch "inner transparent")
- `port:0.*`
  - Null-/Default-Sonderfall im QinQ-Kontext
  - typischerweise untagged oder outer VLAN `0`
- `port:x.0`
  - fester outer Tag `x` mit inner `0` bzw. kursnah no-inner-/Null-bottom-Sonderfall
- `port:*.*`
  - nicht pauschal "immer unmoeglich" auf 7750
  - Verfuegbarkeit/Verhalten ist release-/featureabhaengig (Kursunterlagen koennen eingeschraenkt vereinfachen)

Wichtiger Merker:
- In `port:qtag1.qtag2` ist `qtag1` der outer/top Tag und `qtag2` der inner/bottom Tag.

### O8) Tag-Stripping-Ausnahmen und TPID/Ethertype
- Regelfall:
  - bei regulaeren Dot1Q/QinQ-Delimiting-SAPs werden die Service-Delimiting-Tags ausgewertet und gestripped
- Wichtige Ausnahme:
  - bestimmte Default-/Special-QinQ-SAPs koennen Tags transparent behandeln

Beispiel (kursnah):
- SAP `port:0.*`, Frame mit outer `0` und inner `10`
  - outer `0` wird fuer die Zuordnung genutzt und entfernt
  - inner `10` kann transparent weitertransportiert werden

TPID/Ethertype:
- `0x8100` ist der klassische 802.1Q-TPID/Ethertype fuer VLAN-Tag-Erkennung
- Fuer outer/inner Tags koennen (plattform-/kontextabhaengig) unterschiedliche erwartete TPID-Werte konfiguriert werden
- Wenn der TPID nicht zum erwarteten Wert passt, entsteht typischerweise ein Matching-/Klassifizierungsproblem (kursnah oft als `untagged/non-matching` vereinfacht)

### O9) MTU-Ueberblick im MPLS-Servicepfad
Wichtige MTU-Ebenen im Kurskontext:
- SAP/Access-Port-MTU
- Service-MTU
- SDP Path MTU
- Network-Port-MTU

Merker:
- Die MTU muss als Kette passen. Ein einzelner zu kleiner Wert reicht fuer Drops.

### O10) SAP MTU, Service MTU und "service-delimiting" Tags
SAP MTU (kursnah):
- `null` typischerweise `1514`
- `dot1q` typischerweise `1518` (`+4` Byte fuer ein VLAN-Tag)
- `qinq` typischerweise `1522` (`+8` Byte fuer zwei VLAN-Tags)

Was bedeutet "service-delimiting"?
- Ein VLAN-Tag dient am SAP zur Auswahl/Zuordnung des richtigen Services.
- Bei regulaeren Dot1Q/QinQ-SAPs wird dieser Delimiting-Tag am SAP-Ingress typischerweise ausgewertet und gestripped.
- Dann zaehlt dieser Tag nicht mehr zur Service-Frame-Groesse im Servicekern.

Wichtig fuer die MTU-Rechnung:
- Wenn Tags transparent mittransportiert werden (z. B. Wildcard-/Default-Verhalten wie `port:*` im Kursbeispiel), bleiben sie Teil des Service-Frames.
- Dadurch kann aus einer Service-Groesse von `1514` schnell `1518` werden.
- Dann muss haeufig die Service-MTU erhoeht werden.

Service MTU (kursnah):
- Default fuer Ethernet Layer-2 Service oft `1514` (`1500` Payload + `14` Byte Ethernet-Header, ohne FCS)
- Regel: `SAP MTU >= Service MTU`

### O11) SDP Path MTU (kursnah)
- SDP Path MTU = groesste Frame-Groesse, die ueber den SDP transportiert werden kann
- Kursformel (vereinfacht):
  - `SDP Path MTU = Network Port MTU - Layer-2 Header - MPLS Overhead`

Hinweise:
- Der MPLS-Overhead kann je nach Label-Anzahl variieren
- Bei RSVP/LDP/GRE ist der Overhead-/Transportkontext unterschiedlich
- Wenn Service-MTU steigt, muss auch der SDP Path MTU weiterhin ausreichen

Regeln:
- `SDP Path MTU >= Service MTU`
- SDP Path MTU muss nicht zwingend auf beiden Seiten exakt gleich sein
- Aenderungen sind ueber Network-Port-MTU und/oder SDP-MTU-Konfiguration relevant

Zusatz (Layer 2 vs Layer 3):
- Oversized Layer-2 Frames werden typischerweise gedroppt
- Layer-3 Fragmentierung kann (wenn erlaubt) passieren, ist aber teuer und wird meist vermieden

### O12) Network-Port-MTU und konkrete SDP-Path-MTU-Rechnungen (kursnah)
Default-Tabelle (dein Kurs):
- Ethernet access `null` = `1514`
- Ethernet access `dot1q` = `1518`
- Ethernet access `qinq` = `1522`
- Fast Ethernet network = `1514`
- Gigabit Ethernet network = `9212`

Beispiel MPLS-SDP (kursnah):
- Wenn mit `9212` gerechnet wird und zwei MPLS-Labels (Transport + Service) sowie Ethernet-Header abgezogen werden, bleibt die SDP Path MTU uebrig.
- Wichtiger Rechenhinweis:
  - `9190` ergibt sich nur mit `14` Byte Ethernet-Header: `9212 - 14 - 4 - 4 = 9190`
  - mit `12` Byte waere das Ergebnis `9192`

Beispiel GRE-SDP (kursnah):
- `9212 - 14 (Eth) - 20 (IP) - 4 (GRE) - 4 (Service Label) = 9170`
- Wenn irgendwo `1970` steht, ist das ein Zahlendreher/Rechenfehler.

Zusatz-Overhead:
- Facility-Backup oder LDP-over-RSVP koennen weitere MPLS-Labels hinzufuegen
- Pro zusaetzlichem Label: `+4` Byte Overhead
- Zwei zusaetzliche Labels: `+8` Byte Overhead

### O13) Effektive SDP Path MTU messen vs. herleiten
Messen/Pruefen:
- Auf 7750 kann ein OAM SDP-MTU-Path-Test genutzt werden (kursnah als `oam sdp-mtu` bezeichnet)
- Damit pruefst du die praktisch erreichbare Path MTU eines SDP

Herleiten (Control Plane, RSVP-TE):
- Bei signaled RSVP-TE LSPs kann `adspec` genutzt werden
- Das ADSPEC-Objekt sammelt Pfadinformationen (inkl. MTU-bezogenem Wert) entlang des RSVP-Pfads
- Die effektive LSP-/Path-MTU orientiert sich am kleinsten MTU-Wert auf dem Pfad (Bottleneck)
- Aendert sich der RSVP-Pfad, kann sich auch die effektive MTU aendern

### O14) VC-MTU (Layer 2) vs. operative IP-MTU (Layer 3) - einfach erklaert
Layer 2 (z. B. Epipe / PW):
- Hier ist `Service MTU` zentral
- `VC-MTU` (advertised MTU) ist kursnah die nutzbare Payload-Groesse im Service-Tunnel
- Fuer Ethernet gilt im Kurs oft: `VC-MTU = Service-MTU - 14`
- Beispiel: `1514 -> 1500`
- Diese advertised/VC-MTU wird im T-LDP-/PW-Kontext ausgetauscht und muss zur Gegenseite passen

Layer 3 (IES/VPRN):
- Hier denkt man eher in `IP MTU` statt im Layer-2-Service-MTU-Modell
- Es gibt eine administrative IP-MTU (konfiguriert) und eine operative IP-MTU (tatsaechlich nutzbar)
- Die operative IP-MTU ist durch den Unterbau begrenzt:
  - bei SAP-Anbindung durch SAP-MTU
  - bei spoke-SDP-Anbindung durch SDP Path MTU
- Vereinfacht:
  - `operational IP MTU <= admin IP MTU`
  - `operational IP MTU <= SAP MTU` oder `<= SDP Path MTU`

Warum du "zweimal Ethernet Header" siehst (dein Gedanke):
- In manchen kursnahen Herleitungen wird erst die SDP Path MTU vom Network-Port inkl. Link-/Tunnel-Overhead abgeleitet
- Danach wird fuer eine IP-Payload-/VC-nahe Betrachtung nochmal Ethernet-Header-Anteil subtrahiert
- Das ist keine doppelte "echte" Uebertragung desselben Headers, sondern eine gestufte Herleitung ueber verschiedene MTU-Ebenen

Dummy-Merksatz:
- L2: `Service MTU` + `VC-MTU` denken
- L3: `Admin IP MTU` vs `Oper IP MTU` denken
- Immer pruefen, welches Glied in der Kette der kleinste Wert ist

### O15) Dot1Q service-delimiting + MPLS Labels (Praxisbeispiel)
Wichtiger Merker:
- DLC = Ethernet/L2-Header (nicht vergessen)

Beispiel (kursnah):
- Frame kommt an einem Dot1Q-SAP an: `1518` Byte (inkl. 1 VLAN-Tag)
- Das VLAN-Tag (z. B. `50`) ist service-delimiting
- Am SAP wird dieses Delimiting-Tag gestripped
- Es bleibt der Service-Frame mit:
  - `1500` Payload
  - `+14` Byte Ethernet/DLC-Header
  - also `1514` Byte
- Danach wird fuer MPLS transportiert:
  - `+4` Byte Transport-Label
  - `+4` Byte Service-Label
- Tunnel-Frame (kursnah gerechnet): `1514 + 8 = 1522`

Haeufiger Fehler:
- Das Delimiting-Tag wird korrekt entfernt, aber versehentlich wird auch der Ethernet/DLC-Header "mit weggedacht".

### O16) MTU mit Ping testen (DF / do-not-fragment)
Kurslogik (IPv4-Ping-Test):
- `ping <ip> size 1472 do-not-fragment` funktioniert typischerweise bei `1500` Byte IP-MTU
- Grund:
  - `1472` (ICMP-Daten)
  - `+20` Byte IPv4-Header
  - `+8` Byte ICMP-Header
  - `= 1500` Byte IP-Paket

Warum `1473` scheitert (mit DF):
- `1473 + 20 + 8 = 1501` Byte
- Das ist `1` Byte ueber `1500`
- Mit gesetztem DF-Bit darf das Paket nicht fragmentiert werden -> Test scheitert

Ohne DF-Bit:
- Dann kann (wenn erlaubt/moeglich) IP-Fragmentierung stattfinden
- Wichtig: Das ist Layer-3-Fragmentierung, nicht Layer-2-Frame-Fragmentierung im Service

Dummy-Merksatz:
- Ping-Groesse + `28` Byte (IPv4+ICMP) = echte IP-Paketgroesse

### O17) Payload-Erhoehung auf 1504 bei Dot1Q (service-delimiting) - Schritt fuer Schritt
Szenario:
- Kunde will Payload von `1500` auf `1504` erhoehen
- Dot1Q-SAP, VLAN ist service-delimiting

Rechnung (kursnah):
1. Neue Service-Frame-Groesse berechnen
- `1504` Payload + `14` Byte Ethernet/DLC = `1518`
- -> `Service MTU` muss auf `1518` erhoeht werden

2. SAP-Ingress bedenken (Delimiting-Tag ist beim Eingang noch da)
- Das Dot1Q-Tag wird erst am SAP ausgewertet und dann gestripped
- Daher kann am SAP ein Frame von `1518 + 4 = 1522` ankommen
- -> `SAP MTU` muss auf `1522` erhoeht werden

Merksatz:
- Service sieht nach Strip `1518`
- SAP muss vor Strip `1522` schlucken koennen

### O18) SDP-Path-MTU bestimmen und Overhead rueckrechnen
Classic CLI (kursnah beschrieben):
- `oam sdp-mtu <serviceid> size-inc <wert1> <wert2> step <increment>`
- Zweck: durch Herantasten die effektiv nutzbare SDP Path MTU bestimmen

Danach (Basisfall MPLS) haeufige Rueckrechnung Richtung Network-Port-MTU:
- `+14` Byte DLC/Ethernet Header
- `+4` Byte Transport-Label
- `+4` Byte Service-Label
- zusammen oft `+22` Byte (ohne weitere zusaetzliche Labels)

### O19) ADSPEC/RSVP-TE, PathMTUTooSmall und LSP-Trace (Troubleshooting)
ADSPEC (einfach erklaert):
- Wenn ein SDP einen RSVP-TE-LSP als Transport nutzt, kann ADSPEC helfen, die effektive Path-MTU des LSPs aus dem Pfad abzuleiten
- Diese effektive MTU orientiert sich am kleinsten MTU-Wert entlang des Pfads (Bottleneck)
- Aendert sich der RSVP-Pfad, kann sich die effektive MTU dynamisch mit aendern

Warum ein Service ohne ADSPEC "up" wirken kann:
- Ohne erkennbare effektive Path-MTU sieht man Engpaesse oft erst im Datenpfad (bei grossen Frames)
- Ein Jumbo-Service (z. B. `9000`) kann formal up sein, obwohl irgendwo im Core ein kleiner Port limitiert

Mit ADSPEC/MTU-Erkennung kann dann sichtbar werden:
- `minReqd MTU` (vom Service benoetigt) > `oper path MTU` (real verfuegbar)
- Flag wie `PathMTUTooSmall`
- Folge: Service/SDP wird als MTU-problematisch erkannt (ggf. down/failed, je nach Verhalten/Statusmodell)

Typische Diagnosekette:
1. `show service id <id> sdp <spoke-sdp> detail` -> `minReqd MTU`, `oper path MTU`, Flags pruefen
2. `oam lsp-trace rsvp-te ... output-format detail` -> problematischen Hop/Port finden
3. Kleine `MRU`/Port-MTU im Core korrigieren

Hinweis zu MRU (kursnah):
- In manchen Outputs wird `MRU` als relevante physische Port-Groesse angezeigt
- Fuer dein Troubleshooting ist das praktisch das Feld, an dem du den zu kleinen Port erkennst

### O20) SDP und VC Type (RFC 4448) - einfach erklaert
Grundidee:
- RFC 4448 beschreibt fuer Ethernet Pseudowires zwei zentrale VC-Typ-Sichten:
  - Ethernet Raw Mode
  - Ethernet Tagged Mode (oft als VLAN-spezifischer Modus bezeichnet)

Wo wird das relevant?
- Beim Binden eines Services an ein SDP/PW-Kontext (z. B. spoke-sdp)
- Im T-LDP-Signaling zwischen den PE-Routern

Raw Mode (kursnah als Default-Sicht):
- Service-delimiting VLAN-Tag wird am Ingress typischerweise gestripped
- Dieses Delimiting-Tag wird nicht als Nutz-Tag durch die epipe getragen

Tagged Mode (VC Type VLAN):
- VLAN-Tag bleibt als Teil des transportierten Frames erhalten
- Wird oft fuer Interoperabilitaet mit Gegenstellen benoetigt, die tagged mode erwarten
- Folge fuer MTU:
  - Das VLAN-Tag muss in der Service-MTU-Betrachtung mitgezaehlt werden (`+4` Byte)

Wichtiger Tag-Merker:
- Ein ankommender VLAN-Tag ist nur dann service-delimiting, wenn er auf die SAP-Encapsulation matcht
- Matcht er nicht als Delimiter, kann er je nach Modus transparenter Nutz-Tag sein

Dot1Q mit VLAN 0 (kursnah):
- Untagged Traffic und VLAN-ID-0-Traffic koennen auf denselben SAP-Kontext gemappt werden
- VLAN 0 bleibt ein Sonderfall (Priority-Tag-Kontext)

Kurzvergleich:
- service-delimiting VLAN (oft Provider-Sicht): Tag dient primaer der Servicezuordnung
- transparent carried VLAN (Nutzsicht): Tag bleibt Teil des transportierten Kundendaten-Frames

## Kapitel P - Modul 2 Section 2: VPLS Label Signaling

### P1) Grundprinzip
- In VPLS sind die beteiligten PE-Router T-LDP-Peers fuer den jeweiligen Service
- Diese PE-Enden tauschen die Service-/PW-Labels fuer den Dienst aus
- Eine PE-Serviceinstanz wird kursnah oft als virtueller Switch (VS) betrachtet

### P2) Topologie-Idee
- VPLS kann man als multipoint-L2-Dienst mit Full-Mesh-Charakter zwischen den beteiligten PEs verstehen
- Zwischen zwei PE-Routern reicht typischerweise eine T-LDP-Session, ueber die mehrere Services signalisiert werden koennen

### P3) VC-ID und Service-Zustand
- Bei p2p-PW-/spoke-Kontext muss die VC-ID Ende-zu-Ende passen
- Bei VC-ID-Mismatch kommt kein passender Service-/PW-Labelkontext zustande

### P4) Broadcast-Domain und MAC-Learning
- Alle SAPs eines VPLS gehoeren zur selben L2-Broadcast-Domain des Services
- Pro Service gibt es eine eigene MAC-Learning-/Forwarding-Sicht (virtueller Switch pro Service)

### P5) Unknown vs Known Unicast
- Unknown destination (MAC unbekannt):
  - standardmaessig Flooding/Replication auf alle relevanten PWs/LSPs im Service
- Known unicast (MAC gelernt):
  - gezielte Weiterleitung nur zum bekannten Ziel

Merksatz:
- VPLS funktioniert wie ein verteilter virtueller Switch:
  - erst lernen (MAC), dann gezielt weiterleiten

## Kapitel Q - BGP Modul 1 Section 2: BGP Overview

### Q1) BGP Grundidee
- BGP = Border Gateway Protocol
- Es ist das zentrale Inter-Domain-Routingprotokoll zwischen autonomen Systemen (AS)
- BGP wird klassisch als Path-Vector-Protokoll betrachtet

### Q2) Session und Typen
- BGP-Session laeuft ueber TCP Port 179
- eBGP: zwischen verschiedenen AS
- iBGP: innerhalb desselben AS

### Q3) Wichtige BGP-Konzepte im Overview
- BGP nutzt Attribute (z. B. LOCAL_PREF, AS_PATH, MED, NEXT_HOP) fuer Pfadwahl und Policy
- AS_PATH hilft bei Schleifenvermeidung zwischen AS
- Updates sind typischerweise inkrementell (nach initialem Austausch)
- Keepalives halten die Session lebendig

### Q4) BGP und IGP (Zusammenspiel)
- IGP stellt intern Reachability bereit (Unterbau im AS)
- BGP trifft Inter-Domain-/Policy-Entscheidungen
- Next-Hop-Erreichbarkeit bleibt ein zentraler Praxispunkt

### Q5) Skalierungshinweis
- iBGP basiert klassisch auf Full-Mesh-Idee
- Fuer groessere Netze kommen spaeter Mechanismen wie Route Reflector hinzu

Dummy-Merksatz:
- IGP sagt: "Wie komme ich intern hin?"
- BGP sagt: "Welchen externen Pfad will ich policy-seitig nutzen?"

### Q6) AS, ASN und interne Protokolle
- Ein AS ist eine Router-Sammlung unter einer gemeinsamen Administration.
- Jedes AS hat eine ASN (AS-Nummer), die im Internet-Kontext eindeutig sein muss.
- Kursnah: ASN-Zuteilung ueber Regional Internet Registries (RIR).
- Innerhalb eines AS laufen typischerweise IGP/IRP-Protokolle wie OSPF oder IS-IS.

### Q7) BGP Rolle und Entwicklung
- Urspruenglich: Exterior-Routing fuer Reachability-Austausch zwischen unabhaengigen AS.
- Heute: multiprotocol faehig (mehrere Address Families, zusaetzliche Funktionen).
- Typischer AS-Beispieltraeger: ISP.

### Q8) Peers, Sessionaufbau, kein Discovery
- BGP-Router im Austausch heissen Peers / Neighbors / Speakers.
- Ablauf:
1. TCP-Session (Port 179) aufbauen.
2. Danach BGP-Session ueber OPEN/KEEPALIVE/UPDATE usw.
- Es gibt keinen automatischen Neighbor-Discovery-Mechanismus wie klassische Hello-Protokolle.
- Jeder Peer wird explizit konfiguriert.

### Q9) OPEN Message - was wirklich drin ist
- Typische OPEN-Elemente:
  - BGP Version
  - My AS
  - Hold Time
  - BGP Identifier
  - Optional Parameters (Capabilities, z. B. Address Families, Auth-Mechanismen je nach Plattform/Verfahren)
- Wichtige Klarstellung:
  - Die Source-IP kommt aus der TCP-Verbindung, nicht als eigenes OPEN-Feld.

### Q10) Policy und Route Refresh
- Import Policy:
  - steuert Annahme/Ablehnung eingehender Routen
  - kann Attribute modifizieren
- Route Refresh:
  - nach Policy-Aenderung kann ein Router den Neighbor um erneutes Senden von Routen bitten
  - Ziel: neue Policy anwenden, ohne harte Session-Resets
- Kurskontext Nokia 7750:
  - in deinem Material besonders im BGP/VPRN-Umfeld hervorgehoben

### Q11) Haupt-Messages einer BGP-Session
- OPEN:
  - Session-Parameter und Capabilities abgleichen
- KEEPALIVE:
  - Session-Liveness bestaetigen
- UPDATE:
  - neue Routen announcen oder vorhandene withdrawen
- NOTIFICATION:
  - Fehler melden und Session beenden

### Q12) Praktischer Merksatz
- TCP macht den Transport zuverlaessig.
- BGP macht die Pfad-/Policy-Entscheidung.
- IGP macht die interne Erreichbarkeit im AS.

## Kapitel R - BGP Modul 1 Section 3: BGP Peering Sessions

### R1) BGP Connection States (FSM)
- Die klassischen BGP-Zustaende sind:
  - Idle
  - Connect
  - Active
  - OpenSent
  - OpenConfirm
  - Established

### R2) Die wichtigsten Zustaende einfach erklaert
- Idle:
  - Session ist nicht aktiv gestartet
  - bei administrativem Shutdown bleiben auch TCP-Verbindungsversuche aus
- Connect:
  - aktiver TCP-Aufbauversuch zum Peer
- Active:
  - kein "guter Aktivzustand", sondern eher Retry-/Wartezustand
  - Router lauscht auf eingehende TCP-Verbindung oder versucht den Aufbau erneut
- OpenSent:
  - OPEN wurde gesendet, man wartet auf OPEN vom Peer
- OpenConfirm:
  - gueltige OPEN wurde empfangen, KEEPALIVE wurde gesendet, man wartet auf KEEPALIVE vom Peer
- Established:
  - Session steht, BGP-Message-Austausch kann normal laufen

Merker:
- `Active` wird oft missverstanden. In der Praxis bedeutet es haeufig: Session kommt gerade nicht sauber hoch.

### R2b) Erfolgsfolge und Fehlersuche
- Typische Erfolgsfolge ohne Rueckfall:
  - `Idle -> Connect -> OpenSent -> OpenConfirm -> Established`
- Was dabei passiert:
  - `Connect`:
    - TCP wird aufgebaut
  - `OpenSent`:
    - TCP steht, die lokale `OPEN` wurde gesendet
  - `OpenConfirm`:
    - die `OPEN` des Peers wurde akzeptiert, man wartet noch auf ein gueltiges `KEEPALIVE`
  - `Established`:
    - gueltiges `KEEPALIVE` vom Peer wurde empfangen, normaler Nachrichtenaustausch kann laufen
- Wenn eine Session zwischen `Connect` und `Active` pendelt:
  - liegt das oft zuerst an Reachability-, TCP-, Peer-IP-, ASN- oder Sessionaufbau-Problemen

### R3) iBGP vs eBGP
- Gleiches AS:
  - iBGP
- Unterschiedliche AS:
  - eBGP

### R4) Full-Mesh iBGP und Split Horizon
- Klassische iBGP-Regel:
  - Eine Route, die von einem iBGP-Peer gelernt wurde, darf nicht an einen anderen iBGP-Peer weiteradvertised werden
- Diese Regel wird oft als iBGP Split Horizon bezeichnet
- Daraus folgt die Full-Mesh-Annahme:
  - Wenn jeder Speaker alle relevanten Routen lernen soll, muessen alle relevanten iBGP-Speaker direkt peeren

### R5) Warum Route Reflectors spaeter wichtig werden
- Full Mesh skaliert schlecht
- Route Reflectors reduzieren die Zahl noetiger iBGP-Sessions
- Sie sind die klassische Antwort auf das Skalierungsproblem grosser iBGP-Netze

Dummy-Merksatz:
- Idle = nichts startet
- Active = es klappt gerade nicht sauber
- Established = Session steht
- iBGP Split Horizon = Grund fuer Full Mesh

## Kapitel S - BGP Modul 1 Section 4: Path Attributes und Route Processing

### S1) Die Grundklassen der BGP-Attribute
- BGP-Path-Attribute werden zuerst in zwei Hauptgruppen eingeteilt:
  - well-known
  - optional
- Well-known Attribute muessen von jeder BGP-Implementierung verstanden werden
- Optionale Attribute koennen je nach Implementierung und Einsatzfall unterschiedlich unterstuetzt werden

### S2) Mandatory, Discretionary, Transitive, Non-Transitive
- Well-known mandatory:
  - muessen fuer passende Routen-Updates vorhanden sein
- Well-known discretionary:
  - sind standardisiert, aber nicht fuer jede Route noetig
- Optional transitive:
  - duerfen weitergegeben werden
- Optional non-transitive:
  - sollen nicht unveraendert ueber AS-Grenzen hinweg weitergereicht werden

Merker:
- mandatory = Pflicht
- discretionary = situationsabhaengig
- transitive = darf weiterwandern
- non-transitive = bleibt nicht fuer andere AS erhalten

### S3) Wichtige Path Attributes
- Well-known mandatory:
  - `AS_PATH`
  - `NEXT_HOP`
  - `ORIGIN`
- Well-known discretionary:
  - `LOCAL_PREF`
  - `ATOMIC_AGGREGATE`
- Weitere wichtige optionale Attribute:
  - `COMMUNITY`
  - `MED`
  - `AGGREGATOR`
  - `AS4_PATH`
  - `ORIGINATOR_ID`
  - `CLUSTER_LIST`

### S4) COMMUNITY und LOCAL_PREF einfach
- COMMUNITY ist oft zuerst nur ein Marker
- Eine Policy kann aus einer Community einen `LOCAL_PREF` ableiten
- Dadurch kann innerhalb des eigenen AS entschieden werden:
  - welcher Exit-Router bevorzugt wird
  - welche Route attraktiver ist
- Communities koennen auch intern benutzt werden, um Prefixe spaeter vor dem eBGP-Export zu filtern

Dummy-Merksatz:
- Community markiert
- Policy entscheidet
- Local Preference wirkt

### S5) AS_PATH, ORIGIN und MED
- `AS_PATH` zeigt die Folge der AS, durch die die Routeninformation gelaufen ist
- Ein kuerzerer `AS_PATH` wird oft bevorzugt
- Aber:
  - das beweist nicht automatisch weniger Delay
  - das beweist nicht automatisch geringere reale Kosten
- `ORIGIN` wird typischerweise so bewertet:
  - `IGP` besser als `EGP`
  - `EGP` besser als `INCOMPLETE`
- Redistributete Routen landen haeufig bei `INCOMPLETE`
- `MED` ist ein Hinweis an ein anderes AS, welchen Eintrittspunkt es bevorzugen soll
- Kleinere MED-Werte sind besser

### S6) Fruehe Route-Selection-Reihenfolge
- In deinen Notizen ist die wichtige Reihenfolge:
  - hoehere `LOCAL_PREF`
  - kuerzerer `AS_PATH`
  - besserer `ORIGIN`
  - niedrigeres `MED`
  - `eBGP` vor `iBGP`
- Danach kommen weitere Tie-Breaker

Wichtig:
- `eBGP vor iBGP` gilt nicht als absolute Regel fuer alles
- Es gilt erst dann, wenn die frueheren Kriterien noch keinen Sieger bestimmt haben

### S7) Best, Used, RIB-IN, Local BGP RIB
- Eine empfangene BGP-Route landet zuerst im `RIB-IN`
- Dort wird geprueft:
  - ist sie gueltig?
  - darf sie laut Policy angenommen werden?
  - sind die noetigen Daten wie `NEXT_HOP` erreichbar?
- Danach nimmt sie am Best-Path-Prozess teil
- Die beste valide Route pro Prefix wird in die lokale BGP-RIB uebernommen
- Danach wird sie dem `RTM` angeboten

### S8) Warum Best nicht immer Used ist
- Eine Route kann die beste BGP-Route sein
- Trotzdem muss sie nicht die aktive Systemroute werden
- Grund:
  - ein anderes Protokoll kann denselben Prefix mit besserer administrativer Praeferenz liefern
- Dann bleibt die BGP-Route zwar `best`, aber nicht `used`

### S9) advertise-inactive
- Normalerweise sind beste und benutzte BGP-Routen die Kandidaten fuer den Export
- Mit `advertise-inactive` kann auch eine beste, aber lokal nicht genutzte BGP-Route advertised werden
- Das ist nuetzlich, wenn:
  - lokal ein anderes Protokoll gewinnt
  - man trotzdem BGP-seitig eine Route nach aussen geben will

### S10) Import-, Export-Policies und Debug-Sicht
- Import-Policy:
  - bewertet empfangene Routen
  - kann Routen akzeptieren, verwerfen oder Attribute aendern
- Export-Policy:
  - bewertet lokal bekannte Routen vor dem Advertisieren
  - kann ebenfalls Attribute setzen oder aendern
- Beim Export zu `eBGP` wird typischerweise:
  - die eigene AS-Nummer dem `AS_PATH` hinzugefuegt
  - `NEXT_HOP` auf die lokale ausgehende Adresse gesetzt

Nuance auf Nokia:
- In neueren MD-CLI-Kontexten ist eBGP ohne passende Policies standardmaessig abgesichert
- Classic CLI war historisch offener
- Saubere Praxis bleibt:
  - explizite Import- und Export-Policies bauen

Troubleshooting:
- `show router bgp routes ... detail`
  - gut fuer Attributwerte
- `show router bgp routes ... hunt`
  - gut, um die Route durch Eingangs-, Best- und Export-Sicht zu verfolgen

## Kapitel T - BGP Modul 1 Section 5: Basic Route Policies

### T1) Grundidee einer Route Policy
- Eine Routing-Policy besteht aus Regeln oder Eintraegen
- Jeder Eintrag hat im Kern zwei Seiten:
  - `from`
  - `action`
- `from` beschreibt:
  - welche Routen oder Prefixe betroffen sind
- `action` beschreibt:
  - was mit diesen gematchten Routen gemacht wird

Dummy-Merksatz:
- From = welche Route?
- Action = was passiert damit?

### T2) Was kann im From-Teil stehen?
- Typische Match-Kriterien sind:
  - Prefix-Liste
  - Address Family
  - Protokoll, ueber das die Route gelernt wurde
  - BGP-Nachbar
  - BGP-Attribute
- Wenn ein bestimmtes Kriterium weggelassen wird, wird an dieser Stelle meist nicht weiter eingeschraenkt

### T3) Accept und Reject bei Import und Export
- Import `accept`:
  - Route wird angenommen
  - Route darf weiter in die BGP-Auswahl
- Import `reject`:
  - Route wird ignoriert
- Export `accept`:
  - Route darf an passende BGP-Peers advertised werden
- Export `reject`:
  - Route wird nicht advertised

### T4) Policies koennen auch Attribute aendern
- Eine Policy kann nicht nur filtern
- Sie kann auch BGP-Attribute setzen oder aendern
- Das geht sowohl:
  - beim Import
  - als auch beim Export

### T5) Reihenfolge und Abbruch
- Policy-Eintraege werden sequenziell ausgewertet
- Normalfall:
  - erster Match fuehrt die Action aus
  - danach wird nicht weiter ausgewertet
- Deshalb ist die Reihenfolge der Eintraege wichtig

### T6) next-entry und next-policy
- Mit `next-entry` oder `next-policy` kann die Verarbeitung trotz Treffer fortgesetzt werden
- Das ist nuetzlich, wenn:
  - mehrere Bearbeitungsschritte noetig sind
  - nicht der erste Treffer schon das Ende sein soll

### T7) Default Action
- Wenn kein Eintrag matched, greift die `default action`
- Falls keine eigene Default Action gesetzt ist:
  - dann gilt das Default-Verhalten des verwendenden Protokolls

Merker:
- Kein Match = Default entscheidet

### T8) Bogon oder bogus prefix
- Im BGP-Alltag ist damit fast immer ein `bogon prefix` gemeint
- Das sind Prefixe, die im globalen Internet-Routing normalerweise nicht auftauchen sollten
- Beispiele:
  - private RFC-1918-Bereiche
  - reservierte Bereiche
  - noch nicht vergebene Bereiche

Praxis:
- Solche Prefixe werden haeufig per Policy gefiltert
- Gerade an eBGP-Kanten ist das ein wichtiger Basisschutz

### T9) MED, COMMUNITY und LOCAL_PREF in Policies
- `MED` kann per Policy gesetzt werden
- Je nach Syntax:
  - als fester Wert
  - oder IGP-bezogen
- `LOCAL_PREF` kann ebenfalls per Policy gesetzt oder geaendert werden
- Hoehere `LOCAL_PREF` ist attraktiver

### T10) Prefix-Listen mit Communities kombinieren
- Ein sauberes Designmuster ist:
  - Prefix-Liste fuer die Auswahl
  - Community fuer die Markierung
- Beispiel:
  - `NORTH_PREFIXES` matchen
  - `NORTH_COMMUNITY` adden
  - `SOUTH_PREFIXES` matchen
  - `SOUTH_COMMUNITY` adden
- So kann ein nachgelagerter Router spaeter leicht unterschiedlich auf diese Gruppen reagieren

### T11) from protocol ospf richtig lesen
- Wenn in einer Export-Policy `from protocol ospf` steht, geht es um lokal per OSPF gelernte Routen
- Diese werden dann fuer den Export in BGP betrachtet
- Das ist nicht dasselbe wie das BGP-`ORIGIN`-Attribut

## Kapitel U - BGP Modul 1 Section 6: Verstaendnisfragen und Gesamtbild

### U1) Das grobe BGP-Bild
- BGP ist fuer den Austausch von Erreichbarkeitsinformationen gedacht
- Klassisch:
  - zwischen verschiedenen AS
- Ein AS ist:
  - eine Router-Sammlung unter gemeinsamer Administration

### U2) Session und Zustaende
- Fruehe Problemzustaende:
  - `Connect`
  - `Active`
- Nach erfolgreichem TCP-Aufbau:
  - `OpenSent`
  - `OpenConfirm`
  - `Established`

Merker:
- TCP muss zuerst stehen
- Danach kommt die eigentliche BGP-Session-Logik

### U3) Nachrichten und Inhalte
- Wichtige BGP-Nachrichten:
  - `OPEN`
  - `KEEPALIVE`
  - `UPDATE`
  - `NOTIFICATION`
- `UPDATE` transportiert:
  - Reachability/NLRI
  - Path Attributes

### U4) Pfadwahl in einem Satz
- Wenn mehrere Updates fuer denselben Prefix da sind, vergleicht BGP die Pfade geordnet
- Typische fruehe Kriterien:
  - `LOCAL_PREF`
  - `AS_PATH`
  - `ORIGIN`
  - `MED`
  - spaeter `eBGP` vor `iBGP`

### U5) Warum Policies das Verhalten aendern
- Policies entscheiden:
  - was angenommen wird
  - was verworfen wird
  - welche Attribute veraendert werden
- Genau dadurch wird das Default-Verhalten eines BGP-Speakers gezielt angepasst

### U6) Noch ein wichtiger Praxispunkt
- Nicht direkt benachbartes `eBGP` braucht `multihop`
- Sonst scheitert die Session oft schon am TTL-Verhalten

## Kapitel V - BGP Modul 2 Section 1: MP-BGP und VPN Routing

### V1) Wann wird aus BGP MP-BGP?
- Klassisches BGP war frueher im Kern auf IPv4-Unicast fokussiert
- Sobald eine BGP-Implementierung mehrere Address Families oder Reachability-Typen transportieren kann, spricht man von `MP-BGP`
- Typische Beispiele:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - labelbezogene Familien
  - weitere VPN-bezogene Familien

### V2) Die drei VPN-Servicebilder
- `VPWS`
  - Layer 2 Punkt-zu-Punkt
- `VPLS`
  - Layer 2 Multipoint
- `VPRN`
  - Layer 3 Multipoint

Merker:
- VPWS = wie eine Leitung
- VPLS = wie ein verteilter Switch
- VPRN = wie ein verteiltes Router-Netz

### V3) Distributed VPN einfach erklaert
- Ein distributed VPN wird von mehreren PE-Geraeten gemeinsam bereitgestellt
- Zwischen ihnen braucht es Tunnel
- Der Datenfluss ist vereinfacht:
  - CE gibt Daten an PE
  - ingress-PE kapselt
  - P-Router transportieren
  - egress-PE entkapselt
  - CE erhaelt die Daten

### V4) Transport- und Service-Tunnel
- Ein Transport-Tunnel bringt die Daten durch das Provider-Netz
- Viele Services koennen denselben Transport-Tunnel teilen
- Deshalb braucht es zusaetzlich einen Service-Kontext oder Service-Tunnel
- Der `SDP` ist dabei das Bindeglied zwischen Dienst und Transportweg

### V5) Service-Kopplungen
- VPN-Services koennen miteinander verbunden werden
- Beispiele:
  - VPLS an VPRN-Interface
  - VPWS terminiert in VPLS
  - VPWS terminiert in VPRN-Interface
- Wird VPLS an ein VPRN-Interface angebunden, spricht man oft von `rVPLS`

### V6) Multiple Router Instances in VPRN
- Neben dem Base Router hat jedes `VPRN` seine eigene logische Router-Instanz
- Jede Instanz hat:
  - eigene Layer-3-Interfaces
  - eigene Routing-Protokolle
  - eigene Routing-Sicht

### V7) Warum MP-BGP fuer VPRN so wichtig ist
- VPRN ist ein verteilter Layer-3-Service
- Die PE-Router muessen VPN-Routing-Informationen der Kundenseiten austauschen
- Genau dafuer ist `MP-BGP` zentral
- Fuer den vollen Austausch braucht man ohne Hilfsmittel typischerweise ein Full Mesh
- Route Reflectors verbessern hier die Skalierbarkeit

### V8) Route Distinguisher
- Kunden koennen ueberlappende Prefixe benutzen
- Damit BGP diese trotzdem unterscheiden kann, gibt es den `Route Distinguisher`
- Vereinfacht:
  - `RD + IPv4-Prefix = VPN-IPv4`
  - `RD + IPv6-Prefix = VPN-IPv6`

Merker:
- RD macht Praefixe eindeutig
- Er aendert nicht die Kundenadresse selbst
- Er schafft nur einen eindeutigen VPN-Kontext

### V9) VPN Address Families auf der Session
- Damit PE-Router diese VPN-Praefixe wirklich austauschen koennen, muss die passende MP-BGP-Address-Family aktiviert sein
- Typisch:
  - `VPN-IPv4`
  - `VPN-IPv6`

## Kapitel W - BGP Modul 2 Section 3: Inter-Region Transport Tunnels

### W1) Service-Labels in MP-BGP VPN-Routen
- MP-BGP VPN-IPv4/VPN-IPv6 Updates koennen Label-Information fuer die spaetere VPN-Weiterleitung mittragen
- Wichtig:
  - das bedeutet nicht automatisch "ein ganz anderer Labelwert pro Prefix"
  - auf `SR OS` ist bei `VPRN` oft `label-per-VRF` aktiv
- Das heisst:
  - mehrere Prefixe derselben VRF koennen denselben Service-Labelwert verwenden

Merker:
- MP-BGP traegt die Label-Info
- die Plattform kann trotzdem label-per-VRF arbeiten

### W2) Rolle des Route Distinguisher hier
- Der `RD` ist fuer die Control Plane da
- Er macht aus normalen Prefixen eindeutige `VPN-IPv4` oder `VPN-IPv6` Routen
- In der eigentlichen VRF-Route-Table oder FIB arbeitet die Box wieder mit den normalen IPv4/IPv6-Prefixen

Merker:
- `RD` = Eindeutigkeit im BGP
- `RT` = Import/Export-Mitgliedschaft
- `RD` ist kein Data-Plane-Header

### W3) Warum Inter-Region-Tunnel gebraucht werden
- In grossen Netzen gehen VPNs oft ueber mehrere Regionen
- Diese Regionen koennen auch von unterschiedlichen Teams oder Operatoren betrieben werden
- Ein gut skalierbarer Ansatz ist:
  - End-to-End-Transport zwischen den PEs
  - service-spezifisches Wissen bleibt an den PEs
  - Zwischenrouter muessen die einzelnen VPN-Services nicht kennen

### W4) Warum man Tunnel stitcht
- LDP, RSVP-TE oder Segment Routing laufen oft nicht einfach ueber alle Regionen hinweg durch
- Deshalb baut man:
  - intra-region Tunnel in jeder Region
  - und stitcht sie an den Regionsgrenzen zusammen
- Fuer dieses Stitching hilft `MP-BGP labeled unicast`

Typisch:
- `label-ipv4`
- `label-ipv6`

### W5) Was die PE-Router typischerweise advertisieren
- Meist advertisieren PEs ihre Loopback- oder System-IP
- Diese Adresse ist der stabile Tunnel-Endpunkt
- Border- und Core-Router koennen darauf dann den Transportpfad aufbauen

### W6) Data Plane einfach erklaert
- Innerhalb einer Region sieht das Paket oft so aus:
  - inneres `BGP`-Label
  - aeusseres `LDP`/`RSVP`/`SR`-Label
- Das aeussere Label bringt das Paket bis zum Border Router der Region
- Dort faellt das aeussere Label weg
- Das sichtbare BGP-Label wird dann fuer den naechsten Abschnitt weiterverwendet oder geswappt

Merker:
- outer label = regionaler Transport
- inner label = stitched Weiterweg

### W7) Border Router und Stitching
- Treffen zwei Border Router direkt aufeinander, braucht man fuer diesen direkten Hop oft kein weiteres regionales Transportlabel
- Dann ist das BGP-Label der entscheidende Hinweis fuer den naechsten Schritt
- In der naechsten Region kann wieder ein neues outer label dazukommen

### W8) Segment Routing in diesem Bild
- Bei Segment Routing kann der outer Stack aus mehreren Labels oder SIDs bestehen
- Die Grundidee bleibt aber gleich:
  - innen der ueberregionale BGP-Kontext
  - aussen der regionale Transportkontext

### W9) Was nach dem Transportaufbau folgt
- Wenn der End-to-End-Transport steht, koennen die PE-Router direkt dienstspezifische Infos austauschen
- Je nach Dienst sind das zum Beispiel:
  - Service-Labels
  - Layer-3-Prefixe
  - Layer-2-MAC-Adressen

Moegliche Signalisierung:
- `targeted LDP`
- `MP-BGP`

### W10) Intra-Region-Tunnel im SR OS Kontext
- Oft werden standardmaessig zunaechst `LDP`-Tunnel fuer die Aufloesung von label-IP Next-Hops genutzt
- Man kann aber weitere Tunneltypen einbeziehen
- Mit `resolution any` erweitert man die moeglichen Aufloesungswege
- Wenn mehrere Tunnel moeglich sind, entscheidet der `Tunnel Table Manager`

Merker:
- kleinere numerische Preference ist besser

## Kapitel X - BGP Modul 3 Section 1: Improving iBGP Scalability durch Route Reflectors

### X1) Warum Route Reflectors gebraucht werden
- In grossen VPN-Umgebungen muessen viele PE-Router VPN-Routen austauschen
- Ohne Hilfsmittel fuehrt das bei iBGP schnell zu einem Full Mesh
- Das skaliert schlecht, weil die Zahl der Sessions stark waechst

### X2) Grundidee des Route Reflector
- Ein `Route Reflector` ist ein spezieller BGP-Speaker nach `RFC 4456`
- Er darf iBGP-gelernte Routen an bestimmte andere iBGP-Peers weiteradvertisen
- Dieses Weiteradvertisen nennt man `reflecting`

Merker:
- RR lockert die klassische iBGP-Split-Horizon-Regel kontrolliert
- genau dadurch sinkt die Zahl noetiger iBGP-Sessions

### X3) Wie die Topologie vereinfacht wird
- Statt dass jeder PE mit jedem anderen PE peert, kann ein RR logisch in der Mitte stehen
- Jeder PE hat dann nur noch seine Session zum RR
- Der RR verteilt die relevanten Routen weiter

### X4) Warum das in VPN-Umgebungen wichtig ist
- In VPN-Umgebungen werden zum Beispiel ausgetauscht:
  - `VPN-IPv4`
  - `VPN-IPv6`
  - `EVPN`
- Gerade bei vielen PEs wird das Session-Problem schnell groesser als das eigentliche Routing-Problem

## Kapitel Y - BGP Modul 3 Section 2: Topology und Operation von Route-Reflection-Clustern

### Y1) Drei Rollen im RR-Design
- Typisch unterscheidet man:
  - `Route Reflector`
  - `RR Client`
  - `Regular iBGP Speaker` bzw. `Non-Client Peer`

### Y2) Welche Peers full-meshed sein muessen
- Clients muessen nicht untereinander full-meshed sein
- Non-Clients muessen sauber vermascht betrachtet werden
- In einfachen Designs werden andere RRs oft als Non-Clients behandelt

Merker:
- RR spart Full Mesh vor allem auf der Client-Seite
- Non-Clients bleiben aus Routing-Sicht normale iBGP-Speaker

### Y3) Was ein Cluster ist
- Ein RR und seine Clients bilden logisch ein `Cluster`
- Der RR ist der zentrale Punkt dieses Clusters
- Die Clients peeren zum RR

### Y4) Cluster-ID
- Ein Cluster hat eine `4-Byte Cluster-ID`
- Sie identifiziert das Cluster
- Hauefig wird dafuer die Router-ID des RR verwendet
- Bei redundanten RRs im selben Cluster kann derselbe Cluster-Wert verwendet werden

### Y5) Best und used Routes am RR
- RRs advertisieren typischerweise `best` und `used` routes
- `best` bedeutet:
  - die Route hat sich in der BGP Path Selection gegen andere Kandidaten fuer denselben Prefix durchgesetzt
- `used` bedeutet:
  - sie wurde auch durch den RTM in die Routing-Tabelle uebernommen

Merker:
- `best` ist nicht automatisch `used`
- ein RR spiegelt nicht einfach blind jede empfangene Route

### Y6) Schleifenvermeidung im RR-Umfeld
- Route Reflection bringt zusaetzliche Schleifenrisiken mit sich
- Darum sind folgende Attribute wichtig:
  - `ORIGINATOR_ID`
  - `CLUSTER_LIST`
- Damit kann erkannt werden, ob eine reflektierte Route unguenstig im Kreis gelaufen ist
