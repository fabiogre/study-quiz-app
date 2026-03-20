window.STUDY_QUIZ_SEED = [
  {
    "id": "telco-core-q1",
    "question": "Wofuer sind P-Router im Provider-Core primaer ausgelegt?",
    "options": [
      "Subscriber-Billing pro Service",
      "Hohe Forwarding-Kapazitaet auf High-Speed-Interfaces",
      "Kundenseitiges WLAN-Management",
      "Endgeraete-Authentifizierung im LAN"
    ],
    "correctIndex": 1,
    "explanation": "P-Router sind primar fuer schnellen, skalierbaren Transit im Kernnetz optimiert.",
    "extraInfo": "Der Fokus liegt auf Durchsatz und stabiler Core-Weiterleitung bei grossen Traffic-Mengen.",
    "tip": "P = Performance im Core.",
    "tags": [
      "Telecommunication",
      "P Core",
      "Forwarding"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What are P-routers in the provider core primarily designed for?",
    "explanation_en": "P-Routers are primarily optimized for fast, scalable transit in the core network.",
    "extraInfo_en": "The focus is on throughput and stable core forwarding for large amounts of traffic.",
    "tip_en": "P = performance in the core.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Subscriber billing per service",
      "High forwarding capacity on high-speed interfaces",
      "Customer-side WLAN management",
      "End device authentication in the LAN"
    ]
  },
  {
    "id": "telco-core-q2",
    "question": "Warum sind reine P-Router fuer klassische Service-Edge-Aufgaben oft nicht ideal?",
    "options": [
      "Sie koennen gar kein Routing",
      "Sie sind typischerweise nicht fuer umfangreiches QoS-, Bandwidth-Management und servicebezogenes Accounting optimiert",
      "Sie haben keine High-Speed-Interfaces",
      "Sie unterstuetzen keine MPLS-Funktionen"
    ],
    "correctIndex": 1,
    "explanation": "Service-Edge-Funktionen sind oft umfangreicher als das, worauf Core-Transitknoten optimiert sind.",
    "extraInfo": "Core-Router und Service-Edge-Router verfolgen unterschiedliche Optimierungsziele im Netzdesign.",
    "tip": "Transit-Optimierung ist nicht gleich Service-Optimierung.",
    "tags": [
      "Telecommunication",
      "P Core",
      "QoS",
      "Accounting"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Why are pure P-routers often not ideal for classic service edge tasks?",
    "explanation_en": "Service edge capabilities are often richer than what core transit nodes are optimized for.",
    "extraInfo_en": "Core routers and service edge routers pursue different optimization goals in network design.",
    "tip_en": "Transit optimization is not the same as service optimization.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "You can't do any routing at all",
      "They are typically not optimized for extensive QoS, bandwidth management and service-related accounting",
      "They don't have high-speed interfaces",
      "They do not support MPLS functions"
    ]
  },
  {
    "id": "telco-core-q3",
    "question": "Wie sind P-Router im Provider-Netz typischerweise angebunden?",
    "options": [
      "Nur direkt an CE-Router",
      "An andere P- oder PE-Router innerhalb der Providerdomane",
      "Ausschliesslich an Layer-2-Heimswitche",
      "Nur an externe Internet-IXPs"
    ],
    "correctIndex": 1,
    "explanation": "P-Router verbinden Core- und Edge-Elemente innerhalb der Providerdomane.",
    "extraInfo": "Sie nehmen am internen Routing teil, meist ueber IGPs, wodurch der Provider sein eigenes internes IP-Adressschema nutzt.",
    "tip": "P-Router denken intern, nicht kundenseitig.",
    "tags": [
      "Telecommunication",
      "P Core",
      "IGP",
      "Provider Domain"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How are P-routers typically connected in the provider network?",
    "explanation_en": "P-Routers connect core and edge elements within the provider domain.",
    "extraInfo_en": "They participate in internal routing, usually via IGPs, whereby the provider uses its own internal IP address scheme.",
    "tip_en": "P-Router think internally, not customer-side.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only directly to CE router",
      "To other P or PE routers within the provider domain",
      "Only on Layer 2 home switches",
      "Only to external Internet IXPs"
    ]
  },
  {
    "id": "telco-core-q4",
    "question": "Welche Aussage zu Layer-2- und IP-Service-Switches im Core-Umfeld passt am besten?",
    "options": [
      "Sie ersetzen immer komplett den Edge-Router",
      "Sie koennen Core-Funktionen entlasten und Processing erweitern, sind aber kein 1:1-Ersatz fuer volle Edge-Routing-Funktionalitaet",
      "Sie dienen nur als Stromverteiler",
      "Sie sind ausschliesslich fuer Heimnetze gedacht"
    ],
    "correctIndex": 1,
    "explanation": "Solche Switches koennen bestimmte Aufgaben uebernehmen, ersetzen aber nicht alle Edge-Router-Faehigkeiten.",
    "extraInfo": "Beispielsweise sind Subscriber-Management oder Encryption moeglich, waehrend oft nicht das komplette Internet-Routing-Feature-Set bereitsteht.",
    "tip": "Ergaenzen ja, voll ersetzen meist nein.",
    "tags": [
      "Telecommunication",
      "IP Service Switch",
      "Layer2 Switch",
      "Core"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about Layer 2 and IP service switches in the core environment fits best?",
    "explanation_en": "Such switches can perform certain tasks, but do not replace all edge router capabilities.",
    "extraInfo_en": "For example, subscriber management or encryption are possible, while the complete Internet routing feature set is often not available.",
    "tip_en": "Addition yes, full replacement usually no.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "They always completely replace the edge router",
      "They can relieve core functions and expand processing, but are not a 1:1 replacement for full edge routing functionality",
      "They only serve as power distributors",
      "They are intended exclusively for home networks"
    ]
  },
  {
    "id": "telco-cross-q1",
    "question": "Welche Aussage verbindet Grundlagen und Konsolidierung korrekt?",
    "options": [
      "Nur Legacy-Technologien reichen fuer die Zukunft aus",
      "Eine Plattform soll mehrere Technologien tragen, um Kosten zu senken und neue Nachfrage zu bedienen",
      "IP ersetzt alle Services ohne Uebergangsphase",
      "Konsolidierung ist nur fuer Sprachdienste relevant"
    ],
    "correctIndex": 1,
    "explanation": "Multi-Technologie-Plattformen sind technisch sinnvoll und werden durch wirtschaftlichen Druck zusaetzlich notwendig.",
    "extraInfo": "Technische Konvergenz plus Kosten- und Marktdruck ergeben die Gesamtlogik.",
    "tip": "Denke immer technisch und wirtschaftlich zusammen.",
    "tags": [
      "Telecommunication",
      "Konvergenz",
      "Themenuebergreifend"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement correctly combines fundamentals and consolidation?",
    "explanation_en": "Multi-technology platforms make technical sense and are made additionally necessary due to economic pressure.",
    "extraInfo_en": "Technical convergence plus cost and market pressure make up the overall logic.",
    "tip_en": "Always think technically and economically together.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only legacy technologies are sufficient for the future",
      "A platform should carry multiple technologies to reduce costs and meet new demand",
      "IP replaces all services without a transition phase",
      "Consolidation is only relevant for voice services"
    ]
  },
  {
    "id": "telco-cross-q2",
    "question": "Warum ist eine einzige Netzwerktechnologie-Plattform aus Provider-Sicht attraktiv?",
    "options": [
      "Sie verhindert jede Form von Legacy-Support",
      "Sie reduziert Parallelbetrieb und hilft, alte und neue Services auf derselben Basis zu managen",
      "Sie macht Preisdruck am Markt irrelevant",
      "Sie ersetzt automatisch jede SLA-Anforderung"
    ],
    "correctIndex": 1,
    "explanation": "Weniger Parallelnetze und einheitlicher Betrieb vereinfachen Kosten- und Service-Management.",
    "extraInfo": "Konvergenz bedeutet nicht, dass alle Probleme verschwinden, aber der Betrieb wird beherrschbarer.",
    "tip": "Achte auf den Betriebsaspekt: weniger Inselnetze.",
    "tags": [
      "Telecommunication",
      "Betrieb",
      "Konvergenz",
      "Themenuebergreifend"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Why is a single network technology platform attractive from a provider perspective?",
    "explanation_en": "Fewer parallel networks and uniform operation simplify cost and service management.",
    "extraInfo_en": "Convergence does not mean that all problems disappear, but operations become more manageable.",
    "tip_en": "Pay attention to the operational aspect: fewer isolated networks.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "It prevents any form of legacy support",
      "It reduces parallel operations and helps manage old and new services on the same basis",
      "It makes price pressure on the market irrelevant",
      "It automatically replaces any SLA requirement"
    ]
  },
  {
    "id": "telco-cross-q3",
    "question": "Welche Kombination beschreibt die aktuelle Provider-Herausforderung am besten?",
    "options": [
      "Legacy komplett abschalten und nur auf Preis achten",
      "Legacy-Umsaetze halten und gleichzeitig neue High-Bandwidth-Services wie Wireless Data/Video wirtschaftlich liefern",
      "Nur Bandbreite erhoehen, Betriebskosten ignorieren",
      "Nur alte Services optimieren, neue Nachfrage ignorieren"
    ],
    "correctIndex": 1,
    "explanation": "Provider muessen beides parallel managen: Altgeschaeft und wachsende datenintensive Neudienste.",
    "extraInfo": "Technikstrategie und Geschaeftsstrategie muessen hier sauber zusammenpassen.",
    "tip": "Das Schluesselwort ist 'gleichzeitig'.",
    "tags": [
      "Telecommunication",
      "Strategie",
      "Wireless",
      "Video",
      "Themenuebergreifend"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which combination best describes the current provider challenge?",
    "explanation_en": "Providers have to manage both in parallel: legacy business and growing, data-intensive new services.",
    "extraInfo_en": "Technical strategy and business strategy must fit together neatly.",
    "tip_en": "The key word is 'simultaneously'.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Switch off legacy completely and just pay attention to the price",
      "Maintain legacy revenue while economically delivering new high-bandwidth services such as wireless data/video",
      "Just increase bandwidth, ignore operating costs",
      "Only optimize old services, ignore new demand"
    ]
  },
  {
    "id": "telco-edge-q1",
    "question": "Welche Rolle hat der PE-Router in Service-Providernetzen am ehesten?",
    "options": [
      "Er arbeitet nur als Core-Transit ohne Servicefunktionen",
      "Er traegt die zentrale Service-Logik am Kundenrand",
      "Er ersetzt alle CE-Router beim Kunden",
      "Er ist nur fuer Layer-1-Repeater zustaendig"
    ],
    "correctIndex": 1,
    "explanation": "Am PE laufen in der Regel die wesentlichen Servicefunktionen fuer Kundenservices zusammen.",
    "extraInfo": "Deshalb gilt der PE oft als wichtigster Serviceknoten: dort passieren Service-Termination, Policy, QoS und Zuordnung pro Kunde/Service.",
    "tip": "PE = Service-Edge, nicht nur Transit.",
    "tags": [
      "Telecommunication",
      "PE",
      "Service Edge"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the most likely role of the PE router in service provider networks?",
    "explanation_en": "The essential service functions for customer services usually come together at the PE.",
    "extraInfo_en": "This is why the PE is often considered the most important service node: this is where service termination, policy, QoS and assignment per customer/service take place.",
    "tip_en": "PE = Service Edge, not just Transit.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "It only works as a core transit without service functions",
      "It carries the central service logic at the customer edge",
      "It replaces all of the customer's CE routers",
      "It is only responsible for Layer 1 repeaters"
    ]
  },
  {
    "id": "telco-edge-q2",
    "question": "Wie unterscheiden sich Access-Router typischerweise von vollwertigen Service-Edge-Routern?",
    "options": [
      "Access-Router haben mehr Skalierung als Service-Edge-Router",
      "Access-Router bieten teils aehnliche Features, sind aber oft weniger skalierbar bei starkem Wachstum",
      "Access-Router unterstuetzen keine IP-Funktionen",
      "Es gibt praktisch keinen Unterschied"
    ],
    "correctIndex": 1,
    "explanation": "Access-Router koennen funktional aehnlich sein, stossen aber bei Wachstum haeufig frueher an Skalierungsgrenzen.",
    "extraInfo": "Die Begriffe variieren je Hersteller, aber der Kerngedanke ist: Servicewachstum braucht robuste Edge-Skalierung.",
    "tip": "Achte auf den Unterschied Feature-Set vs. Skalierung.",
    "tags": [
      "Telecommunication",
      "Access Router",
      "Skalierung"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How do access routers typically differ from full-fledged service edge routers?",
    "explanation_en": "Access routers can be functionally similar, but often reach their scaling limits sooner as they grow.",
    "extraInfo_en": "The terms vary by manufacturer, but the core idea is: service growth requires robust edge scaling.",
    "tip_en": "Pay attention to the difference between feature set and scaling.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Access routers have more scale than service edge routers",
      "Access routers sometimes offer similar features, but are often less scalable when growing rapidly",
      "Access routers do not support IP functions",
      "There is practically no difference"
    ]
  },
  {
    "id": "telco-ies-q1",
    "question": "Was ist IES im Provider-Servicekontext?",
    "options": [
      "Ein Layer-3-IP-Serviceinterface fuer Internetverkehr mit servicebezogener Steuerung",
      "Ein rein physischer Glasfaserstecker",
      "Ein Layer-2-VPLS-Profil ohne IP",
      "Ein lokaler CE-Backupmodus"
    ],
    "correctIndex": 0,
    "explanation": "IES bietet dem Kunden ein L3-IP-Interface fuer Senden/Empfangen von Internetverkehr.",
    "extraInfo": "Im Unterschied zu sehr einfachen Basisinterfaces sind hier oft QoS, Billing, Shaping und Policing moeglich.",
    "tip": "IES = Internet Exposure mit Servicekontrolle auf dem Interface.",
    "tags": [
      "Telecommunication",
      "IES",
      "Internet Service",
      "QoS"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is IES in the provider service context?",
    "explanation_en": "IES provides the customer with an L3 IP interface for sending/receiving Internet traffic.",
    "extraInfo_en": "In contrast to very simple basic interfaces, QoS, billing, shaping and policing are often possible here.",
    "tip_en": "IES = Internet Exposure with service control on the interface.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A Layer 3 IP service interface for Internet traffic with service-based control",
      "A purely physical fiber optic connector",
      "A Layer 2 VPLS profile without IP",
      "A local CE backup mode"
    ]
  },
  {
    "id": "telco-ops-q1",
    "question": "Wozu dient Mirroring im Servicebetrieb am ehesten?",
    "options": [
      "Zur physischen Reparatur von Leitungen",
      "Zur Einsicht in Traffic eines Kundenservices, z. B. mit Sniffer-Analyse",
      "Zur automatischen Tarifsenkung ohne Messdaten",
      "Zum Ersetzen von Routingprotokollen"
    ],
    "correctIndex": 1,
    "explanation": "Mirroring spiegelt Traffic fuer Analyse- und Betriebszwecke.",
    "extraInfo": "Das ist besonders hilfreich fuer Troubleshooting, Verifikation und gezielte Fehlerdiagnose.",
    "tip": "Mirroring = beobachten, nicht weiterleiten.",
    "tags": [
      "Telecommunication",
      "Operations",
      "Mirroring",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is mirroring most likely used for in service operations?",
    "explanation_en": "Mirroring reflects traffic for analysis and operational purposes.",
    "extraInfo_en": "This is particularly helpful for troubleshooting, verification and targeted error diagnosis.",
    "tip_en": "Mirroring = observe, not forward.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "For physical repair of pipes",
      "To view traffic from a customer service, e.g. B. with sniffer analysis",
      "For automatic tariff reduction without measurement data",
      "To replace routing protocols"
    ]
  },
  {
    "id": "telco-s1-q1",
    "question": "Welche Telekom-Technologie ist aktuell am haeufigsten genutzt?",
    "options": [
      "Frame Relay",
      "ATM",
      "IP",
      "SONET"
    ],
    "correctIndex": 2,
    "explanation": "IP ist heute die dominante Basis fuer Datennetze und daher meistgenutzt.",
    "tags": [
      "Telecommunication",
      "Grundlagen"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which telecom technology is currently used most frequently?",
    "explanation_en": "IP is now the dominant basis for data networks and is therefore the most widely used.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Frame Relay",
      "ATM",
      "IP",
      "SONET"
    ]
  },
  {
    "id": "telco-s1-q2",
    "question": "Welche Layer-2-Technologie ist als ueblicher Transport genannt?",
    "options": [
      "Ethernet",
      "TDM",
      "MPLS-TP",
      "ISDN"
    ],
    "correctIndex": 0,
    "explanation": "Ethernet Layer-2 Transport ist in vielen Netzen ein ueblicher Ansatz.",
    "tags": [
      "Telecommunication",
      "Layer 2"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which Layer 2 technology is mentioned as the usual transport?",
    "explanation_en": "Ethernet Layer-2 transport is a common approach in many networks.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Ethernet",
      "TDM",
      "MPLS TP",
      "ISDN"
    ]
  },
  {
    "id": "telco-s1-q3",
    "question": "Welche Technologien gelten heute als weniger gaengig?",
    "options": [
      "IP und Ethernet",
      "Frame Relay und ATM",
      "SONET und Ethernet",
      "TDM und IP"
    ],
    "correctIndex": 1,
    "explanation": "Frame Relay und ATM sind klassische Legacy-WAN-Technologien und heute deutlich seltener.",
    "tags": [
      "Telecommunication",
      "Legacy"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which technologies are considered less common today?",
    "explanation_en": "Frame Relay and ATM are classic legacy WAN technologies and are much rarer today.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "IP and Ethernet",
      "Frame Relay and ATM",
      "SONET and Ethernet",
      "TDM and IP"
    ]
  },
  {
    "id": "telco-s1-q4",
    "question": "Wofuer wurde TDM historisch typischerweise eingesetzt?",
    "options": [
      "Cloud Storage",
      "Real-time Voice",
      "Video Streaming Best-Effort",
      "DNS-Transport"
    ],
    "correctIndex": 1,
    "explanation": "TDM wurde historisch oft fuer zeitkritische Sprachdienste eingesetzt.",
    "tags": [
      "Telecommunication",
      "TDM"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What was TDM typically used for historically?",
    "explanation_en": "TDM has historically often been used for time-critical voice services.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Cloud Storage",
      "Real-time Voice",
      "Video streaming best effort",
      "DNS transport"
    ]
  },
  {
    "id": "telco-s1-q5",
    "question": "Wofuer wurden Frame Relay und ATM typischerweise genutzt?",
    "options": [
      "Private Netzwerke",
      "Gaming-Netze",
      "Satellitentelemetrie",
      "E-Mail-Server"
    ],
    "correctIndex": 0,
    "explanation": "Beide wurden oft in privaten bzw. Unternehmens-WANs genutzt.",
    "tags": [
      "Telecommunication",
      "Frame Relay",
      "ATM"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What were Frame Relay and ATM typically used for?",
    "explanation_en": "Both were often used in private and corporate WANs.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Private networks",
      "Gaming networks",
      "Satellite telemetry",
      "Email server"
    ]
  },
  {
    "id": "telco-s1-q6",
    "question": "Wie wurde IP historisch im Service-Modell charakterisiert?",
    "options": [
      "Circuit-switched mit fixer Bandbreite",
      "Nur fuer Sprache",
      "Best-effort Data Services",
      "Nur fuer private Standleitungen"
    ],
    "correctIndex": 2,
    "explanation": "IP liefert grundsaetzlich ein Best-Effort-Modell, also keine harte Zustellgarantie.",
    "tags": [
      "Telecommunication",
      "IP"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How has IP been historically characterized in the service model?",
    "explanation_en": "IP basically delivers a best-effort model, i.e. no hard delivery guarantee.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Circuit-switched with fixed bandwidth",
      "Only for language",
      "Best effort data services",
      "Only for private leased lines"
    ]
  },
  {
    "id": "telco-s1-q7",
    "question": "Welche Aussage zu SONET trifft am besten zu?",
    "options": [
      "SONET wurde neu eingefuehrt und ersetzt IP.",
      "SONET bleibt die Hauptplattform moderner Rechenzentren.",
      "SONET ist ein Legacy-Ansatz und wurde durch optische Netze abgeloest.",
      "SONET ist ein Wireless-Standard."
    ],
    "correctIndex": 2,
    "explanation": "SONET war historisch wichtig, wurde aber durch moderne optische Netztechniken weitgehend ersetzt.",
    "tags": [
      "Telecommunication",
      "SONET"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about SONET is most accurate?",
    "explanation_en": "SONET was historically important but has been largely replaced by modern optical networking technologies.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "SONET was newly introduced and replaced IP.",
      "SONET remains the main platform of modern data centers.",
      "SONET is a legacy approach and has been replaced by optical networks.",
      "SONET is a wireless standard."
    ]
  },
  {
    "id": "telco-s1-q8",
    "question": "Was ist eine zentrale Plattform-Anforderung in modernen Providernetzen?",
    "options": [
      "Nur IP unterstuetzen",
      "Nur Legacy-Protokolle unterstuetzen",
      "Alle genannten Technologien auf einer Plattform bereitstellen koennen",
      "Ausschliesslich drahtlose Uebertragung anbieten"
    ],
    "correctIndex": 2,
    "explanation": "Die Kernaussage ist Konvergenz: eine Plattform, mehrere Technologien und Services.",
    "tags": [
      "Telecommunication",
      "Architektur"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is a central platform requirement in modern provider networks?",
    "explanation_en": "The core message is convergence: one platform, multiple technologies and services.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only support IP",
      "Only support legacy protocols",
      "All of the technologies mentioned can be provided on one platform",
      "Only offer wireless transmission"
    ]
  },
  {
    "id": "telco-s2-q1",
    "question": "Warum konsolidieren Service Provider mehrere Services auf eine Netzwerktechnologie?",
    "options": [
      "Um nur noch einen Kundentyp zu bedienen",
      "Um Betrieb und Wartung alter, getrennter Netze zu reduzieren",
      "Um Legacy-Services sofort abzuschalten",
      "Um weniger Bandbreite bereitzustellen"
    ],
    "correctIndex": 1,
    "explanation": "Getrennte Alt-Netze verursachen hohe Betriebs- und Wartungskosten.",
    "extraInfo": "Konsolidierung senkt typischerweise OPEX, weil weniger parallele Plattformen betrieben werden muessen.",
    "tip": "Achte auf Kostenargumente: mehrere diskrete Netze sind teuer.",
    "tags": [
      "Telecommunication",
      "Kosten",
      "Architektur"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Why do service providers consolidate multiple services onto one network technology?",
    "explanation_en": "Separate legacy networks cause high operating and maintenance costs.",
    "extraInfo_en": "Consolidation typically reduces OPEX because fewer parallel platforms need to be operated.",
    "tip_en": "Pay attention to cost arguments: multiple discrete networks are expensive.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "To only serve one type of customer",
      "To reduce operation and maintenance of old, disconnected networks",
      "To turn off legacy services immediately",
      "To provide less bandwidth"
    ]
  },
  {
    "id": "telco-s2-q2",
    "question": "Welche Legacy-Services werden als umsatzstark genannt und muessen weiter unterstuetzt werden?",
    "options": [
      "WLAN 7 und 5G SA",
      "MPLS-TE und VXLAN",
      "Frame Relay, SONET und TDM",
      "Nur Ethernet"
    ],
    "correctIndex": 2,
    "explanation": "Frame Relay, SONET und TDM sind alte, aber in manchen Umfeldern weiterhin relevante Services.",
    "extraInfo": "Der wirtschaftliche Punkt ist wichtig: Alttechnik kann trotz Alter noch Umsatz liefern.",
    "tip": "Nicht mit moderner DC-Technik verwechseln, hier geht es um Legacy-Telekomdienste.",
    "tags": [
      "Telecommunication",
      "Legacy",
      "Revenue"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which legacy services are cited as high-volume and need further support?",
    "explanation_en": "Frame Relay, SONET and TDM are old but still relevant services in some environments.",
    "extraInfo_en": "The economic point is important: old technology can still deliver sales despite its age.",
    "tip_en": "Not to be confused with modern DC technology, this is about legacy telecom services.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Wi-Fi 7 and 5G SA",
      "MPLS-TE and VXLAN",
      "Frame Relay, SONET and TDM",
      "Ethernet only"
    ]
  },
  {
    "id": "telco-s2-q3",
    "question": "Welchen Kundentrend muessen Provider gleichzeitig bedienen?",
    "options": [
      "Weniger Bandbreite zu hoeheren Preisen",
      "Mehr Bandbreite bei sinkenden Preisen",
      "Unveraenderte Bandbreite bei festen Preisen",
      "Nur Sprachdienste ohne Daten"
    ],
    "correctIndex": 1,
    "explanation": "Kunden fordern neue Services mit hoeherer Bandbreite zu stetig sinkendem Preis.",
    "extraInfo": "Das erhoeht den Effizienzdruck: mehr Leistung pro Kosten.",
    "tip": "Merke dir die Kombination: mehr Bandbreite, weniger Preis.",
    "tags": [
      "Telecommunication",
      "Bandbreite",
      "Preis"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which customer trend do providers have to serve at the same time?",
    "explanation_en": "Customers are demanding new services with higher bandwidth at steadily decreasing prices.",
    "extraInfo_en": "This increases the pressure for efficiency: more performance per cost.",
    "tip_en": "Remember the combination: more bandwidth, less price.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Less bandwidth at higher prices",
      "More bandwidth with falling prices",
      "Unchanged bandwidth at fixed prices",
      "Voice services only, no data"
    ]
  },
  {
    "id": "telco-s2-q4",
    "question": "Welche Herausforderung beschreibt die Provider-Situation am besten?",
    "options": [
      "Nur neue Services einfuehren, alte sofort abschalten",
      "Legacy-Umsaetze sichern und gleichzeitig neue, guenstigere High-Bandwidth-Services liefern",
      "Netzkomplexitaet absichtlich erhoehen",
      "Ausschliesslich auf SONET setzen"
    ],
    "correctIndex": 1,
    "explanation": "Provider muessen Altgeschaeft und Neugeschaeft parallel wirtschaftlich betreiben.",
    "extraInfo": "Genau hier hilft eine konvergente Plattformstrategie.",
    "tip": "Achte auf das 'gleichzeitig': alt erhalten und neu liefern.",
    "tags": [
      "Telecommunication",
      "Strategie",
      "Konvergenz"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which challenge best describes the provider situation?",
    "explanation_en": "Providers must operate old business and new business economically in parallel.",
    "extraInfo_en": "This is exactly where a convergent platform strategy helps.",
    "tip_en": "Pay attention to the 'simultaneous': receive old and deliver new.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only introduce new services and switch off old ones immediately",
      "Protect legacy revenue while delivering new, cheaper, high-bandwidth services",
      "Intentionally increase network complexity",
      "Rely exclusively on SONET"
    ]
  },
  {
    "id": "telco-s2-q5",
    "question": "Was ist KEIN Hauptgrund fuer Netzwerkkonsolidierung?",
    "options": [
      "Hohe Kosten diskreter Altnetze",
      "Legacy-Services mit Umsatz weiter stuetzen",
      "Kundennachfrage nach mehr Bandbreite bei niedrigerem Preis",
      "Mitarbeiterzahl ohne technischen Grund verdoppeln"
    ],
    "correctIndex": 3,
    "explanation": "Die genannten Gruende sind Kosten, Legacy-Support und Marktdruck durch neue Serviceanforderungen.",
    "extraInfo": "Pruefungsfragen nutzen oft 'nicht/kein'-Formulierungen als Falle.",
    "tip": "Bei 'KEIN' zuerst die drei echten Gruende im Kopf aufzaehlen.",
    "tags": [
      "Telecommunication",
      "Pruefungstyp"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is NOT a primary reason for network consolidation?",
    "explanation_en": "The reasons cited are cost, legacy support and market pressure from new service requirements.",
    "extraInfo_en": "Exam questions often use 'not/none' wording as a trap.",
    "tip_en": "If it's 'NO', first list the three real reasons in your head.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "High costs of discrete legacy networks",
      "Continue to support legacy services with revenue",
      "Customer demand for more bandwidth at a lower price",
      "Double the number of employees for no technical reason"
    ]
  },
  {
    "id": "telco-s2-q6",
    "question": "Welche neuen Servicebeispiele treiben die Nachfrage besonders stark?",
    "options": [
      "Nur Festnetztelefonie und Fax",
      "Wireless Data und Videostreaming",
      "Nur TDM-Sprachdienste",
      "Ausschliesslich ATM-Leitungen"
    ],
    "correctIndex": 1,
    "explanation": "Steigende Nachfrage betrifft explizit neue datenintensive Services wie Wireless Data und Videostreaming.",
    "extraInfo": "Genau diese Services brauchen oft mehr Durchsatz und stabile Qualitaet.",
    "tip": "Merke: mobil + video = wachsender Bandbreitenbedarf.",
    "tags": [
      "Telecommunication",
      "Neue Services",
      "Bandbreite"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which new service examples are driving demand particularly strongly?",
    "explanation_en": "Rising demand explicitly concerns new data-intensive services such as wireless data and video streaming.",
    "extraInfo_en": "It is precisely these services that often need more throughput and stable quality.",
    "tip_en": "Note: mobile + video = growing bandwidth requirements.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Landline telephony and fax only",
      "Wireless data and video streaming",
      "TDM voice services only",
      "Exclusively ATM lines"
    ]
  },
  {
    "id": "telco-s2-q7",
    "question": "Welcher Effekt entsteht durch mehr Wireless Data und Videostreaming aus Provider-Sicht?",
    "options": [
      "Sinkender Bedarf an Netzkapazitaet",
      "Steigender Kapazitaets- und Effizienzdruck",
      "Weniger Bedarf an Servicequalitaet",
      "Legacy-Services werden automatisch unrentabel"
    ],
    "correctIndex": 1,
    "explanation": "Mehr datenintensive Nutzung erhoeht den Druck auf Kapazitaet, Performance und Kostenstruktur.",
    "extraInfo": "Das verstaerkt den Wunsch nach konvergenten Plattformen und effizientem Betrieb.",
    "tip": "Mehr Traffic bedeutet nicht nur mehr Technik, sondern auch mehr Kostendruck.",
    "tags": [
      "Telecommunication",
      "Wireless",
      "Videostreaming",
      "Effizienz"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What effect does more wireless data and video streaming have from the provider's perspective?",
    "explanation_en": "More data-intensive use increases pressure on capacity, performance and cost structure.",
    "extraInfo_en": "This increases the desire for convergent platforms and efficient operations.",
    "tip_en": "More traffic not only means more technology, but also more cost pressure.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Declining need for network capacity",
      "Increasing pressure on capacity and efficiency",
      "Less need for quality of service",
      "Legacy services automatically become unprofitable"
    ]
  },
  {
    "id": "telco-sec2-q1",
    "question": "Was ist der Kernunterschied zwischen MPLS- und GRE-Transport im Providernetz?",
    "options": [
      "MPLS nutzt Label-Weiterleitung, GRE kapselt als IP-Tunnel ohne MPLS-Label-Stack",
      "Beide arbeiten identisch nur mit MAC-Adressen",
      "GRE ersetzt immer Routingtabellen im Core",
      "MPLS kann keine VPN-Dienste tragen"
    ],
    "correctIndex": 0,
    "explanation": "MPLS arbeitet mit Labeln im Core, waehrend GRE typischerweise als IP-basierter Tunnelmechanismus genutzt wird.",
    "extraInfo": "Beide koennen Kundendaten transportieren, aber die Weiterleitungslogik im Kern unterscheidet sich deutlich.",
    "tip": "MPLS = Label-Stack, GRE = Tunnel-Header.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "GRE",
      "Encapsulation"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the core difference between MPLS and GRE transport in the provider network?",
    "explanation_en": "MPLS works with labels in the core, while GRE is typically used as an IP-based tunneling mechanism.",
    "extraInfo_en": "Both can transport customer data, but the core forwarding logic is significantly different.",
    "tip_en": "MPLS = label stack, GRE = tunnel header.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "MPLS uses label forwarding, GRE encapsulates as an IP tunnel without an MPLS label stack",
      "Both work identically only with MAC addresses",
      "GRE always replaces routing tables in the core",
      "MPLS cannot carry VPN services"
    ]
  },
  {
    "id": "telco-sec2-q10",
    "question": "Welche Komponente muss in MPLS-VPNs den Service-Kontext typischerweise kennen?",
    "options": [
      "Jeder P-Router im Core kennt jeden Kundendienst vollstaendig",
      "Vor allem die beteiligten PE-Router am Service-Edge",
      "Nur der CE-Router kennt den Providerdienst",
      "Kein Geraet benoetigt Servicekontext"
    ],
    "correctIndex": 1,
    "explanation": "Servicekontext liegt vor allem an den Service-Edges, nicht in allen Core-Transitknoten.",
    "extraInfo": "Das reduziert Komplexitaet im Core und ist ein zentraler Skalierungsvorteil.",
    "tip": "Serviceintelligenz sitzt am Edge.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "PE",
      "MPLS VPN",
      "Service Context"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which component typically needs to know the service context in MPLS VPNs?",
    "explanation_en": "Service context is primarily at the service edges, not in all core transit nodes.",
    "extraInfo_en": "This reduces complexity in the core and is a key scaling advantage.",
    "tip_en": "Service intelligence sits at the edge.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Every P-Router in the core is fully aware of every customer service",
      "Especially the PE routers involved on the service edge",
      "Only the CE router knows the provider service",
      "No device requires service context"
    ]
  },
  {
    "id": "telco-sec2-q11",
    "question": "Welche Aussage beschreibt Signalisierung am besten?",
    "options": [
      "Datenweiterleitung und Signalisierung sind dasselbe",
      "Signalisierung richtet Pfade/Labels ein, Datenebene nutzt diese fuer den eigentlichen Traffic",
      "Signalisierung ist nur fuer CE-Management relevant",
      "Signalisierung ersetzt QoS"
    ],
    "correctIndex": 1,
    "explanation": "Control-Plane-Informationen bauen die Transport- und Servicezuordnung auf, die Data-Plane leitet danach weiter.",
    "extraInfo": "Diese Trennung ist grundlegend fuer nachvollziehbaren Betrieb und Troubleshooting.",
    "tip": "Control-Plane baut, Data-Plane faehrt.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Control Plane",
      "Data Plane",
      "Signalisierung"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement best describes signaling?",
    "explanation_en": "Control plane information builds the transport and service allocation, and the data plane then forwards it.",
    "extraInfo_en": "This separation is fundamental for comprehensible operation and troubleshooting.",
    "tip_en": "Control plane builds, data plane drives.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Data forwarding and signaling are the same thing",
      "Signaling sets up paths/labels, the data layer uses these for the actual traffic",
      "Signaling is only relevant for CE management",
      "Signaling replaces QoS"
    ]
  },
  {
    "id": "telco-sec2-q12",
    "question": "Warum ist Label-Stack-Verstaendnis fuer Fehlersuche wichtig?",
    "options": [
      "Weil Labels nur bei Billing gebraucht werden",
      "Weil man nachvollziehen kann, ob Transportpfad und Servicezuordnung korrekt sind",
      "Weil Labels nur CE-seitig existieren",
      "Weil man dadurch Routingprotokolle abschalten kann"
    ],
    "correctIndex": 1,
    "explanation": "Mit korrekter Stack-Analyse erkennt man schnell, ob Fehler im Core-Transport oder im Service-Mapping liegen.",
    "extraInfo": "Genau diese Trennung beschleunigt Troubleshooting in grossen Providernetzen.",
    "tip": "Outer/Inner pruefen: Weg vs. Service.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Troubleshooting",
      "Label Stack"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Why is label stack understanding important for troubleshooting?",
    "explanation_en": "With correct stack analysis, you can quickly see whether errors lie in the core transport or in the service mapping.",
    "extraInfo_en": "It is precisely this separation that accelerates troubleshooting in large provider networks.",
    "tip_en": "Check Outer/Inner: Path vs. Service.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Because labels are only needed for billing",
      "Because you can understand whether the transport path and service assignment are correct",
      "Because labels only exist on the CE side",
      "Because this allows you to switch off routing protocols"
    ]
  },
  {
    "id": "telco-sec2-q13",
    "question": "Welche Aussage zur Label-Behandlung im MPLS-Core ist korrekt?",
    "options": [
      "Der Transport-Label bleibt immer unveraendert, der Service-Label wird pro Hop geswappt",
      "Der Transport-Label wird im Core typischerweise geswappt/poppt; der innere Service-Label bleibt bis zum Egress meist erhalten",
      "Beide Labels werden bei jedem Hop identisch neu gesetzt",
      "Kein Label wird im Core ausgewertet"
    ],
    "correctIndex": 1,
    "explanation": "Im Core wird primaer das Top-Label verarbeitet. Der innere Service-Label dient der Service-Zuordnung am Egress.",
    "extraInfo": "RFC 3031 beschreibt Label-Swapping am Top-of-Stack. Bei VPN-/PW-Stacks bleibt der innere Label typischerweise bis zum Ziel-PE sichtbar.",
    "tip": "Outer = Transportweg, Inner = Servicekontext.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Label Stack",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about label handling in the MPLS core is correct?",
    "explanation_en": "The core primarily processes the top label. The inner service label is used for service assignment at the egress.",
    "extraInfo_en": "RFC 3031 describes label swapping at the top of the stack. For VPN/PW stacks, the inner label typically remains visible until the target PE.",
    "tip_en": "Outer = transport route, Inner = service context.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "The transport label always remains unchanged, the service label is swapped per hop",
      "The transport label is typically swapped/popped in the core; The inner service label usually remains until egress",
      "Both labels are reset identically with each hop",
      "No label is evaluated in the core"
    ]
  },
  {
    "id": "telco-sec2-q14",
    "question": "Trifft es immer zu, dass ein Service-/VC-Label direkt einen Kunden eindeutig identifiziert?",
    "options": [
      "Ja, immer global und kundenweit eindeutig",
      "Nein, es identifiziert primaer die Service-/PW-Instanz am Egress; die Kundenzuordnung ergibt sich aus dem Service-Design",
      "Nur wenn GRE verwendet wird",
      "Nur bei reinem Internetservice ohne VPN"
    ],
    "correctIndex": 1,
    "explanation": "Service-/VC-Labels dienen der Demultiplexierung von Services, nicht zwingend einer globalen Kunden-ID.",
    "extraInfo": "In der Praxis zeigt das Label auf eine konkrete Service-Instanz (z. B. PW, VRF-Kontext), die dann einem Kunden zugeordnet ist.",
    "tip": "Nicht Kunde und Service-ID verwechseln.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Service Label",
      "VC Label",
      "Demultiplexing"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Is it always true that a service/VC label directly and uniquely identifies a customer?",
    "explanation_en": "Service/VC labels are used to demultiplex services, not necessarily a global customer ID.",
    "extraInfo_en": "In practice, the label points to a specific service instance (e.g. PW, VRF context), which is then assigned to a customer.",
    "tip_en": "Do not confuse customer and service ID.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Yes, always global and clear across customers",
      "No, it primarily identifies the service/PW instance at the egress; the customer allocation results from the service design",
      "Only if GRE is used",
      "Only with pure internet service without VPN"
    ]
  },
  {
    "id": "telco-sec2-q15",
    "question": "Welche Multiplexing-Aussage passt zu Service-Tunneln am besten?",
    "options": [
      "Ein Transporttunnel kann genau einen Service tragen",
      "Viele Services koennen auf einem Tunnel gebuendelt werden; mehrere Tunnel koennen ueber denselben physischen Port laufen",
      "Pro Port ist nur ein einziger Tunnel erlaubt",
      "Service und Tunnel sind immer 1:1 fix gekoppelt"
    ],
    "correctIndex": 1,
    "explanation": "Provider-Modelle sind auf Multiplexing ausgelegt: viele Services pro Tunnel und effiziente Nutzung physischer Ressourcen.",
    "extraInfo": "Nokia-Dokumentation beschreibt explizit: viele Services pro Tunnel/SDP; Tunnel sind von Services entkoppelt konfigurierbar.",
    "tip": "Skalierung kommt durch Entkopplung und Multiplexing.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Transport Tunnel",
      "Service Tunnel",
      "Skalierung"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which multiplexing statement best suits service tunnels?",
    "explanation_en": "Provider models are designed for multiplexing: many services per tunnel and efficient use of physical resources.",
    "extraInfo_en": "Nokia documentation explicitly describes: many services per tunnel/SDP; Tunnels can be configured separately from services.",
    "tip_en": "Scaling comes through decoupling and multiplexing.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A transport tunnel can carry exactly one service",
      "Many services can be bundled on a tunnel; multiple tunnels can run over the same physical port",
      "Only a single tunnel is allowed per port",
      "Service and tunnel are always linked 1:1"
    ]
  },
  {
    "id": "telco-sec2-q16",
    "question": "Welche Aussage zu SDPs/Service-Tunneln ist korrekt?",
    "options": [
      "Ein SDP ist bidirektional; ein Tunnel reicht immer fuer beide Richtungen",
      "Ein SDP beschreibt typischerweise einen logischen unidirektionalen Service-Tunnel; fuer bidirektionale Kommunikation braucht man beide Richtungen",
      "SDPs sind nur fuer lokale Services ohne Remote-Endpunkt",
      "SDPs koennen nicht mit MPLS oder GRE arbeiten"
    ],
    "correctIndex": 1,
    "explanation": "In Nokia-Servicemodellen ist ein SDP unidirektional; bidirektional entsteht durch je eine Richtung pro Seite.",
    "extraInfo": "Das ist wichtig fuer Betrieb und Fehlersuche: Tunnelzustand immer richtungsbezogen denken.",
    "tip": "Unidirektional merken: hin und zurueck getrennt betrachten.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "SDP",
      "Service Tunnel"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about SDPs/service tunnels is correct?",
    "explanation_en": "In Nokia service models, an SDP is unidirectional; bidirectional is created by one direction per side.",
    "extraInfo_en": "This is important for operation and troubleshooting: Always think about the tunnel status in terms of direction.",
    "tip_en": "Remember unidirectionally: look back and forth separately.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "An SDP is bidirectional; one tunnel is always enough for both directions",
      "An SDP typically describes a logical unidirectional service tunnel; For bidirectional communication you need both directions",
      "SDPs are only for local services without a remote endpoint",
      "SDPs cannot work with MPLS or GRE"
    ]
  },
  {
    "id": "telco-sec2-q17",
    "question": "Welche Tunnelendpunkte sind bei GRE im Provider-Szenario typischerweise gesetzt?",
    "options": [
      "Quelle = Ingress-PE, Ziel = Egress-PE",
      "Quelle = CE, Ziel = Core-P-Router",
      "Quelle und Ziel sind immer derselbe Router",
      "GRE hat keine IP-Endpunkte"
    ],
    "correctIndex": 0,
    "explanation": "GRE-Tunnel werden typischerweise zwischen den PE-Endpunkten aufgebaut, die den Dienst transportieren.",
    "extraInfo": "Der aeussere IP-Header nutzt dabei meist Ingress-PE als Source und Egress-PE als Destination.",
    "tip": "GRE-Tunnelenden liegen im Provider-Edge-Kontext meist auf PE-Geraeten.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "GRE",
      "Tunnel Endpoints"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "Which tunnel endpoints are typically set with GRE in the provider scenario?",
    "explanation_en": "GRE tunnels are typically established between the PE endpoints that transport the service.",
    "extraInfo_en": "The outer IP header usually uses Ingress-PE as the source and Egress-PE as the destination.",
    "tip_en": "In the provider edge context, GRE tunnel ends are usually on PE devices.",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "Source = Ingress PE, Destination = Egress PE",
      "Source = CE, Destination = Core-P router",
      "The source and destination are always the same router",
      "GRE has no IP endpoints"
    ]
  },
  {
    "id": "telco-sec2-q18",
    "question": "Welche Aussage beschreibt das Control Word im MPLS-Servicekontext am besten?",
    "options": [
      "Es ist ein optionales Feld und seine Nutzung haengt vom Service-/Pseudowire-Typ und Design ab",
      "Es wird zwingend nur bei Internet-Best-Effort genutzt",
      "Es ersetzt Transport- und Service-Label vollstaendig",
      "Es ist grundsaetzlich immer verboten"
    ],
    "correctIndex": 0,
    "explanation": "Das Control Word ist optional und wird je nach Diensttyp und Implementierungsanforderung eingesetzt.",
    "extraInfo": "Wichtig: \"nur ATM/Frame Relay\" ist zu eng formuliert. Je nach Pseudowire-/Serviceprofil kann es auch in anderen Kontexten relevant sein.",
    "tip": "Control Word immer dienst- und designabhaengig betrachten.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Control Word",
      "Pseudowire"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "Which statement best describes the control word in the MPLS service context?",
    "explanation_en": "The Control Word is optional and is used depending on the service type and implementation requirements.",
    "extraInfo_en": "Important: â€œATM/Frame Relay onlyâ€ is worded too narrowly. Depending on the pseudowire/service profile, it may also be relevant in other contexts.",
    "tip_en": "Always view Control Word in terms of service and design.",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "It is an optional field and its usage depends on the service/pseudowire type and design",
      "It is mandatory to only use Internet Best Effort",
      "It completely replaces transport and service labels",
      "It is basically always forbidden"
    ]
  },
  {
    "id": "telco-sec2-q19",
    "question": "Welche Mindest-Encapsulation gilt in einem klassischen IP/MPLS-Servicepfad in der Regel?",
    "options": [
      "Mindestens Transport-Label und Service-Label fuer getunnelten Serviceverkehr",
      "Nur ein einzelner Label reicht immer aus",
      "Kein Label ist noetig, nur ein VLAN-Tag",
      "Nur GRE ohne weitere Header ist Pflicht"
    ],
    "correctIndex": 0,
    "explanation": "Fuer viele MPLS-VPN-/PW-Services ist ein Stack aus Transport- und Service-Label das Grundmuster.",
    "extraInfo": "Es gibt Sonderfaelle je Dienst/Design, aber als Grundregel fuer servicegetrennten MPLS-Transport ist der 2-Label-Stack zentral.",
    "tip": "Merke: Outer fuer den Weg, Inner fuer den Service.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Encapsulation",
      "Label Stack"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "What minimum encapsulation typically applies in a classic IP/MPLS service path?",
    "explanation_en": "For many MPLS VPN/PW services, a stack of transport and service labels is the basic pattern.",
    "extraInfo_en": "There are special cases per service/design, but as a basic rule for service-separated MPLS transport, the 2-label stack is central.",
    "tip_en": "Note: Outer for the journey, Inner for the service.",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "At least transport label and service label for tunneled service traffic",
      "Just a single label is always enough",
      "No label is necessary, just a VLAN tag",
      "Only GRE without any other headers is mandatory"
    ]
  },
  {
    "id": "telco-sec2-q2",
    "question": "Welche Aufgabe hat beim MPLS-VPN der aeussere Transport-Label in der Regel?",
    "options": [
      "Er identifiziert direkt den Kundendienst auf dem Ziel-PE",
      "Er fuehrt das Paket durch den Provider-Core bis zum Egress-Pfad",
      "Er ersetzt die komplette Kundenpayload",
      "Er wird nur beim CE ausgewertet"
    ],
    "correctIndex": 1,
    "explanation": "Der aeussere Label dient meist der Core-Transportsteuerung entlang des LSP.",
    "extraInfo": "Core-Router (P) sehen typischerweise primar den Transport-Label und muessen nicht die Kundendienstdetails kennen.",
    "tip": "Outer Label = Weg durch den Core.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Transport Label"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the role of the external transport label in MPLS VPN?",
    "explanation_en": "The outer label is usually used for core transport control along the LSP.",
    "extraInfo_en": "Core routers (P) typically primarily see the transport label and do not need to know the customer service details.",
    "tip_en": "Outer label = path through the core.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "It directly identifies customer service on the target PE",
      "It guides the packet through the provider core to the egress path",
      "It replaces the entire customer payload",
      "It is only evaluated at the CE"
    ]
  },
  {
    "id": "telco-sec2-q20",
    "question": "Welcher GRE-Basisheader ist im Provider-Transportkontext typischerweise das Minimum?",
    "options": [
      "4 Bytes: Flags/Reserved/Version plus Protocol Type",
      "2 Bytes nur fuer Protocol Type",
      "8 Bytes sind immer zwingend",
      "GRE hat keinen eigenen Header"
    ],
    "correctIndex": 0,
    "explanation": "Der GRE-Basisheader ist 4 Byte gross (inklusive Flags/Reserved/Version und Protocol Type).",
    "extraInfo": "Optional koennen weitere Felder hinzukommen (z. B. Key/Sequence nach RFC 2890), aber der Basisheader bleibt 4 Byte.",
    "tip": "Merkbild: 2 Byte Steuerbits + 2 Byte Protocol Type.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "GRE",
      "Header"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "Which GRE base header is typically the minimum in the provider transport context?",
    "explanation_en": "The GRE base header is 4 bytes (including flags/reserved/version and protocol type).",
    "extraInfo_en": "Optionally, additional fields can be added (e.g. Key/Sequence according to RFC 2890), but the base header remains 4 bytes.",
    "tip_en": "Note image: 2 byte control bits + 2 byte protocol type.",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "4 bytes: Flags/Reserved/Version plus Protocol Type",
      "2 bytes only for protocol type",
      "8 bytes are always mandatory",
      "GRE does not have its own header"
    ]
  },
  {
    "id": "telco-sec2-q21",
    "question": "Warum wird bei MPLS-over-GRE fuer VPN-Services weiterhin ein Service-/VC-Label genutzt?",
    "options": [
      "Zur Demultiplexierung und eindeutigen Servicezuordnung am far-end PE",
      "Damit P-Router im Core Label-Swapping machen koennen",
      "Nur um die IP-Quelladresse zu speichern",
      "Ausschliesslich fuer NAT-Funktionen"
    ],
    "correctIndex": 0,
    "explanation": "Auch bei GRE-Transport muss der empfangende PE den richtigen Dienst identifizieren; dafuer dient das Service-/VC-Label.",
    "extraInfo": "Transport und Service-Zuordnung sind getrennte Ebenen: GRE fuer den Weg, VC/Service-Label fuer den Dienst.",
    "tip": "Frage dich immer: Wie weiss der Ziel-PE, in welchen Service das Paket gehoert?",
    "tags": [
      "Telecommunication",
      "Section 2",
      "GRE",
      "Service Label",
      "VC Label"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "Why does MPLS-over-GRE continue to use a service/VC label for VPN services?",
    "explanation_en": "Even with GRE transport, the receiving PE must identify the correct service; This is what the service/VC label is for.",
    "extraInfo_en": "Transport and service mapping are separate levels: GRE for the route, VC/Service label for the service.",
    "tip_en": "Always ask yourself: How does the target PE know which service the package belongs to?",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "For demultiplexing and clear service allocation at the far-end PE",
      "So that P-Routers can do label swapping in the core",
      "Just to store the source IP address",
      "Exclusively for NAT functions"
    ]
  },
  {
    "id": "telco-sec2-q22",
    "question": "Welche Aussage zur Weiterleitung im GRE-Transport durch den Provider-Core ist korrekt?",
    "options": [
      "Es gibt kein MPLS-Transport-Label-Swapping pro Core-Hop; weitergeleitet wird als IP-Traffic bis zum far-end PE",
      "Jeder Core-Hop swappt den MPLS-Transport-Label wie in einem nativen MPLS-LSP",
      "Das Service-Label wird an jedem Core-Hop neu signalisiert",
      "GRE-Pakete werden nie geroutet"
    ],
    "correctIndex": 0,
    "explanation": "Bei GRE-Transport entscheidet der Core ueber IP-Weiterleitung. Der MPLS-Transport-Label-Swap-Mechanismus des nativen MPLS-Core greift hier nicht.",
    "extraInfo": "Am far-end PE wird die GRE-Huelle entfernt, danach erfolgt die Service-Zuordnung ueber das innere Service-/VC-Label.",
    "tip": "GRE im Core = IP-Routing, nicht MPLS-Label-Swap.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "GRE",
      "Core Forwarding",
      "MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "section": "Section 2",
    "question_en": "Which statement about forwarding in the GRE transport by the provider core is correct?",
    "explanation_en": "With GRE transport, the core decides about IP forwarding. The MPLS transport label swap mechanism of the native MPLS core does not apply here.",
    "extraInfo_en": "The GRE shell is removed at the far-end PE, after which the service assignment takes place via the inner service/VC label.",
    "tip_en": "GRE in core = IP routing, not MPLS label swap.",
    "source_en": "Telecommunication basics",
    "module_en": "Module 1",
    "section_en": "Section 2",
    "options_en": [
      "There is no MPLS transport label swapping per core hop; is forwarded as IP traffic to the far-end PE",
      "Each core hop swaps the MPLS transport label as in a native MPLS LSP",
      "The service label is signaled again at each core hop",
      "GRE packets are never routed"
    ]
  },
  {
    "id": "telco-sec2-q23",
    "question": "Was beschreibt den Unterschied zwischen Targeted LDP und Link LDP am besten?",
    "question_en": "What best describes the difference between Targeted LDP and Link LDP?",
    "options": [
      "Targeted LDP nutzt typischerweise Unicast zu einem spezifischen Remote-Peer (auch ueber mehrere Hops), waehrend Link LDP lokal mit Discovery auf dem direkten Link arbeitet",
      "Beide nutzen ausschliesslich denselben lokalen Multicast-Mechanismus ueber mehrere Hops",
      "Targeted LDP funktioniert nur fuer CE-Router",
      "Link LDP wird ausschliesslich fuer Internetzugang ohne VPN genutzt"
    ],
    "options_en": [
      "Targeted LDP typically uses unicast to a specific remote peer (even over multiple hops), while Link LDP works locally with discovery on the direct link",
      "Both exclusively use the same local multicast mechanism over multiple hops",
      "Targeted LDP only works for CE routers",
      "Link LDP is used exclusively for Internet access without VPN"
    ],
    "correctIndex": 0,
    "explanation": "Targeted LDP ist peer-spezifisch (oft mit Systemadresse), Link LDP arbeitet als direkte Nachbarschafts-Discovery auf dem lokalen Segment.",
    "explanation_en": "Targeted LDP is peer specific (often with system address), Link LDP works as direct neighborhood discovery on the local segment.",
    "extraInfo": "In der Praxis bedeutet das: tLDP kann gezielt entfernte PE-Peers erreichen, Link LDP dagegen nur direkt verbundene Nachbarn.",
    "extraInfo_en": "In practice this means: tLDP can specifically reach distant PE peers, whereas Link LDP can only reach directly connected neighbors.",
    "tip": "Merke: targeted = gezielt per Unicast, link = lokal auf dem Link.",
    "tip_en": "Note: targeted = targeted via unicast, link = locally on the link.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "LDP",
      "tLDP",
      "Link LDP",
      "Signalisierung"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q24",
    "question": "Welche Protokollzuordnung fuer Service-Label-Signaling ist korrekt?",
    "question_en": "Which protocol mapping for service label signaling is correct?",
    "options": [
      "VPWS/VPLS haeufig ueber T-LDP, VPRN typischerweise ueber MP-BGP",
      "VPWS/VPLS nur ueber OSPF, VPRN nur ueber RIP",
      "Alle Service-Typen ausschliesslich ueber RSVP-TE",
      "VPRN nutzt nie BGP-Updates"
    ],
    "options_en": [
      "VPWS/VPLS often over T-LDP, VPRN typically over MP-BGP",
      "VPWS/VPLS only over OSPF, VPRN only over RIP",
      "All service types exclusively via RSVP-TE",
      "VPRN never uses BGP updates"
    ],
    "correctIndex": 0,
    "explanation": "In vielen Providerdesigns (insbesondere klassisch) wird fuer VPWS/VPLS tLDP genutzt, waehrend VPRN ueblicherweise MP-BGP nutzt.",
    "explanation_en": "In many provider designs (especially classic ones), tLDP is used for VPWS/VPLS, while VPRN usually uses MP-BGP.",
    "extraInfo": "Wichtig: Das ist eine service-spezifische Control-Plane-Trennung, nicht dieselbe Signalisierung fuer alles.",
    "extraInfo_en": "Important: This is service-specific control plane separation, not the same signaling for everything.",
    "tip": "Service-Typ zuerst merken, dann das passende Signalisierungsprotokoll zuordnen.",
    "tip_en": "First note the service type, then assign the appropriate signaling protocol.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "VPWS",
      "VPLS",
      "VPRN",
      "MP-BGP",
      "tLDP"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q25",
    "question": "Was passiert typischerweise bei einem konfigurierten SDP mit aktiviertem Signaling?",
    "question_en": "What typically happens with a configured SDP with activated signaling?",
    "options": [
      "Ingress- und Egress-Service-Labels werden standardmaessig automatisch ueber die Signaling-Session ausgetauscht",
      "Alle Labels muessen immer manuell gesetzt werden",
      "Nur Transport-Labels werden erzeugt, Service-Labels nie",
      "SDPs koennen nicht mit Labels arbeiten"
    ],
    "options_en": [
      "By default, ingress and egress service labels are automatically exchanged via the signaling session",
      "All labels must always be set manually",
      "Only transport labels are created, service labels never",
      "SDPs cannot work with labels"
    ],
    "correctIndex": 0,
    "explanation": "Bei aktivem SDP-Signaling ist automatische Label-Vergabe fuer die Service-Richtung der normale Betriebsfall.",
    "explanation_en": "When SDP signaling is active, automatic label assignment for the service direction is the normal operating case.",
    "extraInfo": "Wenn Signaling deaktiviert ist, muessen die benoetigten Labels beim Service-Binding manuell gesetzt werden.",
    "extraInfo_en": "If signaling is deactivated, the required labels must be set manually during service binding.",
    "tip": "Default merken: auto bei aktivem Signaling, manuell bei ausgeschaltetem Signaling.",
    "tip_en": "Remember default: auto when signaling is active, manual when signaling is switched off.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "SDP",
      "Signalisierung",
      "Service Label"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q26",
    "question": "Welche Zuordnung zu den Signaling-Methoden Martini und Kompella ist korrekt?",
    "question_en": "Which assignment to the Martini and Kompella signaling methods is correct?",
    "options": [
      "Martini = T-LDP, Kompella = BGP-basierte Signalisierung",
      "Martini = OSPF, Kompella = STP",
      "Martini = nur RSVP-TE, Kompella = nur ICMP",
      "Beide sind reine Data-Plane-Verfahren ohne Control-Plane"
    ],
    "options_en": [
      "Martini = T-LDP, Kompella = BGP-based signaling",
      "Martini = OSPF, Kompella = STP",
      "Martini = RSVP-TE only, Kompella = ICMP only",
      "Both are pure data plane methods without a control plane"
    ],
    "correctIndex": 0,
    "explanation": "Die klassische Einordnung ist Martini ueber tLDP und Kompella ueber BGP-basierte Verfahren.",
    "explanation_en": "The classic classification is Martini about tLDP and Kompella about BGP-based methods.",
    "extraInfo": "Diese Unterscheidung ist praxistauglich fuer Design- und Troubleshooting-Fragen in L2/L3-Serviceumgebungen.",
    "extraInfo_en": "This distinction is practical for design and troubleshooting issues in L2/L3 service environments.",
    "tip": "Merksatz: Martini spricht tLDP, Kompella spricht BGP.",
    "tip_en": "Note: Martini speaks tLDP, Kompella speaks BGP.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Martini",
      "Kompella",
      "Signalisierung"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q27",
    "question": "Welche Informationen werden im Martini-/tLDP-Kontext typischerweise fuer VCs ausgetauscht?",
    "question_en": "What information is typically exchanged for VCs in the Martini/tLDP context?",
    "options": [
      "VC-ID, Interface-Parameter und VC-Typ (z. B. Ethernet, ATM, Frame Relay)",
      "Nur die CPU-Temperatur der Router",
      "Ausschliesslich NAT-Tabellen",
      "Nur physische Seriennummern der CE-Geraete"
    ],
    "options_en": [
      "VC ID, interface parameters and VC type (e.g. Ethernet, ATM, Frame Relay)",
      "Only the CPU temperature of the routers",
      "Only NAT tables",
      "Only physical serial numbers of the CE devices"
    ],
    "correctIndex": 0,
    "explanation": "Diese VC-bezogenen Parameter ermoeglichen den PE-Routern, passende Forwarding-Eintraege und VC-LSP-Zuordnung aufzubauen.",
    "explanation_en": "These VC-related parameters enable the PE routers to establish appropriate forwarding entries and VC-LSP mapping.",
    "extraInfo": "Damit wird aus Signaling-Information ein nutzbarer Servicezustand auf beiden PE-Seiten.",
    "extraInfo_en": "This turns signaling information into a usable service status on both PE sides.",
    "tip": "Denke an VC-Identitaet + Serviceeigenschaften fuer korrektes Forwarding.",
    "tip_en": "Think VC identity + service properties for correct forwarding.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Martini",
      "tLDP",
      "VC Label",
      "Forwarding"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q28",
    "question": "Welche Aussage zu MP-BGP in VPRN-Umgebungen ist korrekt?",
    "question_en": "Which statement about MP-BGP in VPRN environments is correct?",
    "options": [
      "MP-BGP kann neben Routen auch Label-Informationen fuer diese Routen transportieren",
      "MP-BGP ist nur fuer lokale CE-Neighbor ohne Provider-Core gedacht",
      "MP-BGP transportiert niemals Service-relevante Zusatzinformationen",
      "VPRN benoetigt grundsaetzlich kein BGP"
    ],
    "options_en": [
      "In addition to routes, MP-BGP can also transport label information for these routes",
      "MP-BGP is only intended for local CE neighbors without a provider core",
      "MP-BGP never transports service-relevant additional information",
      "VPRN fundamentally does not require BGP"
    ],
    "correctIndex": 0,
    "explanation": "In VPRN-Designs liefert MP-BGP nicht nur Reachability, sondern auch die zugehoerigen Label-/Servicehinweise.",
    "explanation_en": "In VPRN designs, MP-BGP not only provides reachability, but also the associated label/service instructions.",
    "extraInfo": "Genau diese Kopplung von Route und Label ermoeglicht skalierbares L3VPN-Forwarding zwischen PE-Routern.",
    "extraInfo_en": "It is precisely this coupling of route and label that enables scalable L3VPN forwarding between PE routers.",
    "tip": "Bei VPRN immer an Route + Label als gemeinsames Paket denken.",
    "tip_en": "When using VPRN, always think of route + label as a common package.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "VPRN",
      "MP-BGP",
      "Label Signaling"
    ],
    "source": "Telecommunication Grundlagen",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "source_en": "Telecommunication basics"
  },
  {
    "id": "telco-sec2-q3",
    "question": "Welche Rolle hat der innere Service-Label im MPLS-VPN-Stack?",
    "options": [
      "Er bestimmt den physikalischen Port im CE",
      "Er ordnet den Traffic dem richtigen VPN/Service auf dem PE zu",
      "Er verschluesselt automatisch alle Daten",
      "Er wird nur fuer QoS-Werte genutzt"
    ],
    "correctIndex": 1,
    "explanation": "Der innere Label trennt und identifiziert den konkreten Dienst bzw. die VPN-Instanz auf dem Service-Edge.",
    "extraInfo": "So bleiben mehrere Services auf derselben Infrastruktur logisch sauber getrennt.",
    "tip": "Inner Label = Service-Zuordnung.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Service Label",
      "VPN"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the role of the inner service label in the MPLS VPN stack?",
    "explanation_en": "The inner label separates and identifies the specific service or VPN instance on the service edge.",
    "extraInfo_en": "This means that multiple services on the same infrastructure remain logically separated.",
    "tip_en": "Inner Label = Service Assignment.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "It determines the physical port in the CE",
      "It assigns the traffic to the correct VPN/service on the PE",
      "It automatically encrypts all data",
      "It is only used for QoS values"
    ]
  },
  {
    "id": "telco-sec2-q4",
    "question": "Welche Encapsulation-Reihenfolge trifft den MPLS-Ansatz am besten?",
    "options": [
      "Customer Payload -> Service Label -> Transport Label -> Provider L2",
      "Transport Label -> Customer Payload -> Service Label",
      "Nur ein einzelner Label ohne Kundenpayload",
      "Customer Payload -> GRE -> Service Label ohne Core-Label"
    ],
    "correctIndex": 0,
    "explanation": "Bei MPLS-VPNs liegt typischerweise ein Service-Label unter dem aeusseren Transport-Label.",
    "extraInfo": "Die genaue Tiefe variiert je Dienst, aber das Prinzip outer transport plus inner service ist zentral.",
    "tip": "Denke in Schichten: Kunde innen, Transport aussen.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Encapsulation",
      "MPLS Stack"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which encapsulation order best suits the MPLS approach?",
    "explanation_en": "With MPLS VPNs there is typically a service label below the outer transport label.",
    "extraInfo_en": "The exact depth varies per service, but the principle of outer transport plus inner service is central.",
    "tip_en": "Think in layers: customer inside, transport outside.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Customer Payload -> Service Label -> Transport Label -> Provider L2",
      "Transport Label -> Customer Payload -> Service Label",
      "Just a single label with no customer payload",
      "Customer Payload -> GRE -> Service Label without core label"
    ]
  },
  {
    "id": "telco-sec2-q5",
    "question": "Wie werden Transport-Labels in MPLS-Netzen typischerweise signalisiert?",
    "options": [
      "Nur ueber DHCP vom CE",
      "Ueber Core-Control-Plane-Mechanismen wie LDP oder RSVP-TE (je Design)",
      "Ausschliesslich manuell auf jedem Paket",
      "Nur ueber NAT-Regeln"
    ],
    "correctIndex": 1,
    "explanation": "Transport-LSPs werden ueblicherweise durch MPLS-Core-Protokolle bereitgestellt.",
    "extraInfo": "In modernen Designs sind auch weitere Modelle moeglich, aber das Grundprinzip bleibt: Core-seitige Label-Signalisierung.",
    "tip": "Transport-Label kommt aus der Core-Control-Plane.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "MPLS",
      "Signalisierung",
      "LDP",
      "RSVP"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How are transport labels typically signaled in MPLS networks?",
    "explanation_en": "Transport LSPs are typically provided through MPLS core protocols.",
    "extraInfo_en": "In modern designs, other models are also possible, but the basic principle remains: core-side label signaling.",
    "tip_en": "Transport label comes from the core control plane.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only via DHCP from the CE",
      "About core control plane mechanisms such as LDP or RSVP-TE (depending on design)",
      "Exclusively manually on each package",
      "Only via NAT rules"
    ]
  },
  {
    "id": "telco-sec2-q6",
    "question": "Wie werden Service-Labels typischerweise signalisiert?",
    "options": [
      "Nie signalisiert, nur lokal geraten",
      "Abhaengig vom Dienst durch Service-Protokolle, haeufig BGP oder targeted LDP",
      "Nur per ICMP Echo",
      "Nur ueber Ethernet-Autonegotiation"
    ],
    "correctIndex": 1,
    "explanation": "Service-Labels entstehen in der Service-Control-Plane und haengen vom jeweiligen VPN-Dienst ab.",
    "extraInfo": "Beispielhaft: BGP bei bestimmten VPN-Typen, targeted LDP bei bestimmten Pseudowire-Diensten.",
    "tip": "Service-Label = serviceabhaengige Signalisierung.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Service Label",
      "Signalisierung",
      "BGP",
      "tLDP"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How are service labels typically signaled?",
    "explanation_en": "Service labels are created in the service control plane and depend on the respective VPN service.",
    "extraInfo_en": "Examples: BGP for certain VPN types, targeted LDP for certain pseudowire services.",
    "tip_en": "Service label = service-dependent signaling.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Never signaled, just guessed locally",
      "Depending on the service through service protocols, often BGP or targeted LDP",
      "Only via ICMP echo",
      "Only via Ethernet autonegotiation"
    ]
  },
  {
    "id": "telco-sec2-q7",
    "question": "Warum ist die Trennung von Transport- und Service-Label fuer Provider wichtig?",
    "options": [
      "Damit Core-Router jeden Kundendienst im Detail kennen muessen",
      "Damit Core und Service-Ebene skaliert getrennt arbeiten koennen",
      "Damit kein Routing mehr noetig ist",
      "Damit CE-Router den Core steuern koennen"
    ],
    "correctIndex": 1,
    "explanation": "Die Trennung entkoppelt Core-Transport von Service-Logik und verbessert Skalierung sowie Betrieb.",
    "extraInfo": "P-Router koennen schnell transportieren, waehrend PE-Router die Service-Intelligenz tragen.",
    "tip": "Entkopplung = Skalierung.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Skalierung",
      "Transport Label",
      "Service Label"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Why is the separation of transport and service labels important for providers?",
    "explanation_en": "The separation decouples core transport from service logic and improves scaling and operations.",
    "extraInfo_en": "P routers can transport quickly, while PE routers carry the service intelligence.",
    "tip_en": "Decoupling = scaling.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "So that core routers must know each customer service in detail",
      "So that the core and service layer can work separately at scale",
      "So that routing is no longer necessary",
      "So that CE routers can control the core"
    ]
  },
  {
    "id": "telco-sec2-q8",
    "question": "Welche Aussage zu GRE im Vergleich zu klassischem MPLS-Transport ist am treffendsten?",
    "options": [
      "GRE nutzt IP/GRE als Transporthuelle; bei MPLS-basierten Services bleibt ein Service-/VC-Label fuer Demultiplexing moeglich und haeufig noetig",
      "GRE nutzt immer zwei MPLS-Labels (Transport + Service) auf jedem Core-Hop",
      "GRE kann keine Kundendaten tragen",
      "GRE funktioniert nur innerhalb eines LANs"
    ],
    "correctIndex": 0,
    "explanation": "Bei GRE erfolgt der Transport ueber IP/GRE. Fuer viele Services wird dennoch ein Service-/VC-Label zur Zuordnung am far-end PE verwendet.",
    "extraInfo": "Im Unterschied zum klassischen MPLS-Core fehlt der hop-by-hop geswappte Transport-Label. Die Service-Zuordnung bleibt aber weiterhin notwendig.",
    "tip": "Unterscheide Transportmechanismus (IP/GRE) und Service-Demux (VC/Service-Label).",
    "tags": [
      "Telecommunication",
      "Section 2",
      "GRE",
      "MPLS",
      "Tunnel"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about GRE compared to classic MPLS transport is most accurate?",
    "explanation_en": "With GRE the transport takes place via IP/GRE. For many services, a service/VC label is still used for assignment at the far-end PE.",
    "extraInfo_en": "In contrast to the classic MPLS core, the hop-by-hop swapped transport label is missing. However, service allocation remains necessary.",
    "tip_en": "Distinguish between transport mechanism (IP/GRE) and service demux (VC/service label).",
    "source_en": "Telecommunication basics",
    "options_en": [
      "GRE uses IP/GRE as a transport shell; For MPLS-based services, a service/VC label for demultiplexing remains possible and often necessary",
      "GRE always uses two MPLS (transport + service) labels on each core hop",
      "GRE cannot carry customer data",
      "GRE only works within a LAN"
    ]
  },
  {
    "id": "telco-sec2-q9",
    "question": "Was bedeutet \"Kundenpayload encapsulieren\" im Providerkontext?",
    "options": [
      "Kundendaten loeschen und durch Providerdaten ersetzen",
      "Kundendaten in zusaetzliche Header/Labels einbetten, damit sie durchs Providernetz transportiert werden",
      "Nur die MAC-Adresse entfernen",
      "Nur die TTL auf 1 setzen"
    ],
    "correctIndex": 1,
    "explanation": "Encapsulation fuegt Transportinformationen hinzu, ohne die Nutzdatenfunktion des Kunden zu zerstoeren.",
    "extraInfo": "Der Provider schafft dadurch eine tragfaehige Transporthuelle fuer Weiterleitung, Trennung und Steuerung.",
    "tip": "Payload bleibt inhaltlich bestehen, Header kommen dazu.",
    "tags": [
      "Telecommunication",
      "Section 2",
      "Encapsulation",
      "Payload"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What does â€œencapsulate customer payloadâ€ mean in the provider context?",
    "explanation_en": "Encapsulation adds transport information without destroying the customer's payload functionality.",
    "extraInfo_en": "The provider thereby creates a stable transport shell for forwarding, separation and control.",
    "tip_en": "Payload content remains the same, headers are added.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Delete customer data and replace it with provider data",
      "Embed customer data in additional headers/labels so that it is transported through the provider network",
      "Remove only the MAC address",
      "Just set the TTL to 1"
    ]
  },
  {
    "id": "telco-sr-q1",
    "question": "Was ist die Hauptrolle des 7750 Service Routers in einem Providernetz?",
    "options": [
      "Nur TDM-Endgeraete anbinden",
      "Mehrere Servicearten auf einer gemeinsamen IP/MPLS-Infrastruktur bereitstellen",
      "Ausschliesslich Internetzugang ohne VPN liefern",
      "Nur Layer-2-Switching im Campus erledigen"
    ],
    "correctIndex": 1,
    "explanation": "Der 7750 SR wird genutzt, um mehrere Dienste ueber eine gemeinsame IP/MPLS-Plattform zu transportieren.",
    "extraInfo": "Die Idee ist Konvergenz: statt vieler separater Netze wird eine zentrale Infrastruktur genutzt, auf der verschiedene VPN-Services laufen.",
    "tip": "Achte auf das Zielbild: eine Plattform, viele Services.",
    "tags": [
      "Telecommunication",
      "Service Router",
      "IP/MPLS",
      "Konvergenz"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the main role of the 7750 Service Router in a provider network?",
    "explanation_en": "The 7750 SR is used to transport multiple services over a common IP/MPLS platform.",
    "extraInfo_en": "The idea is convergence: instead of many separate networks, a central infrastructure is used on which various VPN services run.",
    "tip_en": "Pay attention to the target image: one platform, many services.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only connect TDM devices",
      "Deploy multiple service types on a common IP/MPLS infrastructure",
      "Only provide internet access without VPN",
      "Only do Layer 2 switching on campus"
    ]
  },
  {
    "id": "telco-sr-q2",
    "question": "Welches Core-Netzwerk nutzt der 7750 SR typischerweise als Basis?",
    "options": [
      "ATM-Core",
      "SONET-only Core",
      "IP/MPLS Core",
      "Frame-Relay-Core"
    ],
    "correctIndex": 2,
    "explanation": "Der 7750 SR arbeitet als Service-Edge auf einem IP/MPLS-Core.",
    "extraInfo": "IP/MPLS erlaubt skalierbaren Transport und virtuelle Trennung verschiedener Kundendienste.",
    "tip": "Merke: moderne Provider-Services laufen meist auf IP/MPLS.",
    "tags": [
      "Telecommunication",
      "Service Router",
      "IP/MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which core network does the 7750 SR typically use as a basis?",
    "explanation_en": "The 7750 SR works as a service edge on an IP/MPLS core.",
    "extraInfo_en": "IP/MPLS allows scalable transport and virtual separation of different customer services.",
    "tip_en": "Note: modern provider services usually run on IP/MPLS.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "ATM core",
      "SONET only core",
      "IP/MPLS core",
      "Frame relay core"
    ]
  },
  {
    "id": "telco-sr-q3",
    "question": "Welche Aussage beschreibt den Serviceumfang des 7750 SR am besten?",
    "options": [
      "Nur ein VPN-Typ pro Plattform",
      "Breite Unterstuetzung verschiedener VPN-Servicearten",
      "Keine Legacy-Unterstuetzung moeglich",
      "Nur Voice-Services sind moeglich"
    ],
    "correctIndex": 1,
    "explanation": "Der Router ist auf die Bereitstellung vieler VPN-Servicearten ausgelegt.",
    "extraInfo": "Gerade in Migrationen ist wichtig, alte und neue Servicearten parallel abbilden zu koennen.",
    "tip": "Suche die Antwort mit Flexibilitaet statt Einzweck-Plattform.",
    "tags": [
      "Telecommunication",
      "Service Router",
      "VPN Services"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement best describes the scope of service of the 7750 SR?",
    "explanation_en": "The router is designed to provide many types of VPN services.",
    "extraInfo_en": "Especially in migrations, it is important to be able to map old and new service types in parallel.",
    "tip_en": "Find the answer with flexibility instead of a single-purpose platform.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only one VPN type per platform",
      "Wide support for different types of VPN services",
      "No legacy support possible",
      "Only voice services are possible"
    ]
  },
  {
    "id": "telco-sr-q4",
    "question": "Welche Servicewelt kann auf einer gemeinsamen Providerplattform zusammengefuehrt werden?",
    "options": [
      "Nur IP-Internet",
      "ATM/TDM, IP-High-Speed, SONET-nahe Services und Layer-2-Ethernet-Dienste",
      "Nur Sprachdienste",
      "Nur Cloud-Speicher"
    ],
    "correctIndex": 1,
    "explanation": "Die Plattform kann mehrere Servicewelten tragen, statt fuer jede ein eigenes Netz zu betreiben.",
    "extraInfo": "Das reduziert Parallelbetrieb und vereinfacht Betrieb, Management und Wachstum.",
    "tip": "Denk an Multi-Service statt Einzeldienst.",
    "tags": [
      "Telecommunication",
      "Konvergenz",
      "Legacy",
      "Ethernet",
      "IP"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which service world can be brought together on a common provider platform?",
    "explanation_en": "The platform can support several service worlds instead of operating a separate network for each.",
    "extraInfo_en": "This reduces parallel operations and simplifies operations, management and growth.",
    "tip_en": "Think multi-service instead of single-service.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "IP Internet only",
      "ATM/TDM, IP high-speed, SONET-related services and Layer 2 Ethernet services",
      "Voice services only",
      "Cloud storage only"
    ]
  },
  {
    "id": "telco-sr-q5",
    "question": "Was bedeutet: \"separate Overlay-Netze auf eine Plattform zusammenfassen und trotzdem ein Overlay-Modell behalten\"?",
    "options": [
      "Alle Kunden teilen sich dieselbe Konfiguration ohne Trennung",
      "Physisch wird konsolidiert, logisch bleiben Services/Kunden weiterhin getrennt",
      "Overlay wird komplett abgeschafft",
      "Nur die Managementebene bleibt getrennt"
    ],
    "correctIndex": 1,
    "explanation": "Es wird ein gemeinsames physisches Netz genutzt, waehrend die logischen Servicegrenzen erhalten bleiben.",
    "extraInfo": "Einfach gesagt: unter der Haube eine gemeinsame Infrastruktur, nach aussen weiterhin getrennte virtuelle Netze je Service/Kunde mit eigener Policy und Verwaltung.",
    "tip": "Trenne im Kopf \"physisch\" (gemeinsam) und \"logisch\" (getrennt).",
    "tags": [
      "Telecommunication",
      "Overlay",
      "Konvergenz",
      "VPN"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What does it mean: \"combine separate overlay networks onto one platform and still retain an overlay model\"?",
    "explanation_en": "A common physical network is used while the logical service boundaries are maintained.",
    "extraInfo_en": "Simply put: a common infrastructure under the hood, externally separate virtual networks for each service/customer with their own policy and administration.",
    "tip_en": "Separate in your mind â€œphysicalâ€ (joint) and â€œlogicalâ€ (separate).",
    "source_en": "Telecommunication basics",
    "options_en": [
      "All customers share the same configuration without separation",
      "Physically there is consolidation, but logically services/customers remain separated",
      "Overlay is completely abolished",
      "Only the management level remains separate"
    ]
  },
  {
    "id": "telco-vpls-q1",
    "question": "Was beschreibt VPLS am besten?",
    "options": [
      "Punkt-zu-Punkt-Standleitung",
      "Multipoint-Ethernet-Service, der sich wie ein verteilter Switch anfuehlt",
      "Reiner Layer-3-Internetdienst ohne Ethernet-Logik",
      "Nur lokale Standortvernetzung ohne Provideranteil"
    ],
    "correctIndex": 1,
    "explanation": "VPLS bietet ein multipoint faehiges Ethernet-aehnliches Serviceverhalten.",
    "extraInfo": "Mehrere Standorte koennen in einer gemeinsamen L2-Servicewelt gekoppelt werden.",
    "tip": "VPLS = Virtual Private LAN Service = multipoint L2.",
    "tags": [
      "Telecommunication",
      "VPLS",
      "L2VPN",
      "Ethernet"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What best describes VPLS?",
    "explanation_en": "VPLS offers a multipoint capable Ethernet-like service behavior.",
    "extraInfo_en": "Multiple locations can be linked in a common L2 service world.",
    "tip_en": "VPLS = Virtual Private LAN Service = multipoint L2.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Point-to-point leased line",
      "Multipoint Ethernet service that feels like a distributed switch",
      "Pure Layer 3 Internet service without Ethernet logic",
      "Only local site networking without provider share"
    ]
  },
  {
    "id": "telco-vpls-q2",
    "question": "Auf welcher Basis wird Traffic in VPLS typischerweise weitergeleitet?",
    "options": [
      "Nur auf Basis von IP-Prefixen",
      "Primar auf Basis von MAC-Adressen",
      "Nur ueber statische Portlisten ohne Adressbezug",
      "Ausschliesslich ueber MPLS-Label ohne L2-Logik"
    ],
    "correctIndex": 1,
    "explanation": "VPLS arbeitet L2-orientiert und nutzt typischerweise MAC-basierte Weiterleitung.",
    "extraInfo": "Dadurch wirkt der Dienst aus Kundensicht wie ein standortuebergreifender Ethernet-Switch.",
    "tip": "L2-Service = MAC-Denke.",
    "tags": [
      "Telecommunication",
      "VPLS",
      "MAC"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "On what basis is traffic typically routed in VPLS?",
    "explanation_en": "VPLS operates L2-oriented and typically uses MAC-based forwarding.",
    "extraInfo_en": "From the customer's perspective, the service therefore acts like a cross-site Ethernet switch.",
    "tip_en": "L2 service = MAC thinking.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only based on IP prefixes",
      "Primarily based on MAC addresses",
      "Only via static port lists without address reference",
      "Exclusively via MPLS label without L2 logic"
    ]
  },
  {
    "id": "telco-vpn-q1",
    "question": "Was ist ein VPN im Service-Provider-Kontext am treffendsten?",
    "options": [
      "Ein physisch eigenes Kabelnetz je Kunde",
      "Ein ueber gemeinsame Infrastruktur bereitgestelltes privates Service-Netz",
      "Nur ein verschluesselter Internet-Tunnel auf Endgeraeten",
      "Ein lokales Heimnetz ohne Provideranteil"
    ],
    "correctIndex": 1,
    "explanation": "VPN-Services werden auf geteilter Infrastruktur erzeugt, wirken fuer den Kunden aber privat.",
    "extraInfo": "Mehrere Kunden teilen sich Transportressourcen, bekommen aber logisch getrennte Services.",
    "tip": "Schluesselbegriff: shared infrastructure, private Sicht pro Kunde.",
    "tags": [
      "Telecommunication",
      "VPN",
      "Service Provider"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is a VPN most appropriate in a service provider context?",
    "explanation_en": "VPN services are created on shared infrastructure, but appear private to the customer.",
    "extraInfo_en": "Multiple customers share transport resources but receive logically separate services.",
    "tip_en": "Key term: shared infrastructure, private view per customer.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A physically separate cable network per customer",
      "A private service network provided via shared infrastructure",
      "Just an encrypted Internet tunnel on end devices",
      "A local home network without a provider share"
    ]
  },
  {
    "id": "telco-vpn-q2",
    "question": "Wie sieht der Provider ein VPN typischerweise?",
    "options": [
      "Als rein physisches Kundennetz",
      "Als virtuelles Netzwerk",
      "Als WLAN-Profil",
      "Als Billing-Report ohne Netzbezug"
    ],
    "correctIndex": 1,
    "explanation": "Aus Providersicht ist ein VPN eine virtuelle, logisch definierte Netzinstanz.",
    "extraInfo": "Die Trennung erfolgt durch Service- und Policy-Mechanismen, nicht durch vollstaendig separate Physik.",
    "tip": "Provider-Sicht: virtualisiert und servicebasiert.",
    "tags": [
      "Telecommunication",
      "VPN",
      "Provider Sicht"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How does the provider typically view a VPN?",
    "explanation_en": "From the provider's perspective, a VPN is a virtual, logically defined network instance.",
    "extraInfo_en": "The separation occurs through service and policy mechanisms, not through completely separate physics.",
    "tip_en": "Provider perspective: virtualized and service-based.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "As a purely physical customer network",
      "As a virtual network",
      "As a WiFi profile",
      "As a billing report without reference to the network"
    ]
  },
  {
    "id": "telco-vpn-q3",
    "question": "Wie sieht der Kunde dasselbe VPN typischerweise?",
    "options": [
      "Als offenes, oeffentliches Netz",
      "Als privates Netzwerk fuer seine Standorte",
      "Als reines Monitoring-Tool",
      "Als Layer-1-Leitung ohne Logik"
    ],
    "correctIndex": 1,
    "explanation": "Fuer den Kunden wirkt der Dienst wie ein privates Netz fuer seine eigenen Geraete und Standorte.",
    "extraInfo": "Genau dieser Eindruck ist Ziel des VPN-Service-Designs: private Kommunikation auf geteilter Infrastruktur.",
    "tip": "Kundensicht ist immer service- und nutzungsorientiert: \"mein privates Netz\".",
    "tags": [
      "Telecommunication",
      "VPN",
      "Customer Sicht"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How does the customer typically view the same VPN?",
    "explanation_en": "For the customer, the service acts like a private network for their own devices and locations.",
    "extraInfo_en": "It is precisely this impression that is the goal of the VPN service design: private communication on a shared infrastructure.",
    "tip_en": "The customer's perspective is always service and usage-oriented: \"my private network\".",
    "source_en": "Telecommunication basics",
    "options_en": [
      "As an open, public network",
      "As a private network for its locations",
      "As a pure monitoring tool",
      "As a layer 1 line without logic"
    ]
  },
  {
    "id": "telco-vpn-q4",
    "question": "Was beschreibt im Providerumfeld ein \"Service\" am besten?",
    "options": [
      "Ein einzelnes physisches Kabel",
      "Eine logische Entitaet fuer einen Verbindungstyp wie Internet, L2-VPN oder L3-VPN",
      "Nur einen Nutzervertrag ohne technische Parameter",
      "Eine zufaellige Routing-Entscheidung"
    ],
    "correctIndex": 1,
    "explanation": "Ein Service ist eine logisch eindeutig beschriebene Einheit fuer Konnektivitaet und Betrieb.",
    "extraInfo": "Dazu gehoeren typischerweise End-to-End-Konfiguration, Management und ein klares Kosten-/Abrechnungsmodell.",
    "tip": "Service = logische Einheit, nicht nur Hardware.",
    "tags": [
      "Telecommunication",
      "Service Modell",
      "VPN"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What best describes a â€œserviceâ€ in the provider environment?",
    "explanation_en": "A service is a logically clearly described unit for connectivity and operation.",
    "extraInfo_en": "This typically includes end-to-end configuration, management and a clear cost/billing model.",
    "tip_en": "Service = logical unit, not just hardware.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A single physical cable",
      "A logical entity for a connection type such as Internet, L2-VPN or L3-VPN",
      "Just a user contract without technical parameters",
      "A random routing decision"
    ]
  },
  {
    "id": "telco-vpn-q5",
    "question": "Welche Aussage zu Service-IDs ist korrekt?",
    "options": [
      "Mehrere Services teilen sich immer dieselbe ID",
      "Jeder Service besitzt eine eindeutige Service-ID",
      "Service-IDs gibt es nur fuer L3-VPN",
      "Service-IDs sind nur lokal auf CE-Routern relevant"
    ],
    "correctIndex": 1,
    "explanation": "Jeder Service wird ueber eine eindeutige ID identifiziert.",
    "extraInfo": "Eindeutige IDs helfen bei Provisionierung, Betrieb, Troubleshooting und Abrechnung.",
    "tip": "Ohne eindeutige IDs waere sauberes Service-Management kaum moeglich.",
    "tags": [
      "Telecommunication",
      "Service Modell",
      "Service ID"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about service IDs is correct?",
    "explanation_en": "Each service is identified by a unique ID.",
    "extraInfo_en": "Unique IDs help with provisioning, operations, troubleshooting and billing.",
    "tip_en": "Without unique IDs, clean service management would hardly be possible.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Multiple services always share the same ID",
      "Each service has a unique service ID",
      "Service IDs are only available for L3 VPN",
      "Service IDs are only relevant locally on CE routers"
    ]
  },
  {
    "id": "telco-vpn-q6",
    "question": "Was ist ein PE (Provider Edge) Router?",
    "options": [
      "Ein Router mit allen Interfaces nur im Provider-Core",
      "Ein Router, bei dem mindestens ein Interface in Richtung Kundendomane zeigt",
      "Ein Customer-Router im Kundengebaeude",
      "Ein Router, der keine Services kennt"
    ],
    "correctIndex": 1,
    "explanation": "PE-Router bilden den Rand der Providerdomane zum Kunden hin.",
    "extraInfo": "PEs terminieren und steuern kundenspezifische Services am Uebergang zwischen Provider und Kunde.",
    "tip": "PE = Edge zum Kunden.",
    "tags": [
      "Telecommunication",
      "Provider Terminology",
      "PE"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is a PE (Provider Edge) Router?",
    "explanation_en": "PE routers form the edge of the provider domain towards the customer.",
    "extraInfo_en": "PEs schedule and control customer-specific services at the interface between provider and customer.",
    "tip_en": "PE = Edge to the customer.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A router with all interfaces only in the provider core",
      "A router with at least one interface facing the customer domain",
      "A customer router in the customer building",
      "A router that doesn't know any services"
    ]
  },
  {
    "id": "telco-vpn-q7",
    "question": "Was kennzeichnet einen P (Provider Core) Router?",
    "options": [
      "Mindestens ein Interface zeigt zum Kunden",
      "Alle Interfaces liegen innerhalb der Providerdomane",
      "Er steht immer beim Kunden vor Ort",
      "Er ist fuer Endnutzer sichtbar und konfigurierbar"
    ],
    "correctIndex": 1,
    "explanation": "P-Router arbeiten rein im Core der Providerdomane.",
    "extraInfo": "Sie transportieren Traffic im Kernnetz und exponieren typischerweise keine direkten Kundenschnittstellen.",
    "tip": "P = Core-intern.",
    "tags": [
      "Telecommunication",
      "Provider Terminology",
      "P Core"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What characterizes a P (Provider Core) router?",
    "explanation_en": "P-Routers work purely in the core of the provider domain.",
    "extraInfo_en": "They transport traffic in the core network and typically do not expose any direct customer interfaces.",
    "tip_en": "P = core internal.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "At least one interface faces the customer",
      "All interfaces are within the provider domain",
      "He is always on site with the customer",
      "It is visible and configurable for end users"
    ]
  },
  {
    "id": "telco-vpn-q8",
    "question": "Was beschreibt CE (Customer Edge) im Provider-Modell am besten?",
    "options": [
      "Provider-Router fuer Kernfunktionen",
      "Kundenseitiger Router auf den Premises, typischerweise service-unaware",
      "Virtuelle Instanz im Provider-Core",
      "Layer-1-Verstaerker ohne Routing"
    ],
    "correctIndex": 1,
    "explanation": "CE-Router stehen beim Kunden und sind in vielen Modellen nicht service-aware wie PE-Komponenten.",
    "extraInfo": "Die Anbindung an den Provider erfolgt ueber klar definierte Uebergabepunkte, haeufig als SAPs bezeichnet.",
    "tip": "CE = beim Kunden, PE = beim Provider-Rand.",
    "tags": [
      "Telecommunication",
      "Provider Terminology",
      "CE",
      "SAPS"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What best describes CE (Customer Edge) in the provider model?",
    "explanation_en": "CE routers are available to customers and many models are not service-aware like PE components.",
    "extraInfo_en": "The connection to the provider takes place via clearly defined transfer points, often referred to as SAPs.",
    "tip_en": "CE = at the customer, PE = at the provider edge.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Provider router for core functions",
      "Customer-side router on the premises, typically service-unaware",
      "Virtual instance in the provider core",
      "Layer 1 amplifier without routing"
    ]
  },
  {
    "id": "telco-vprn-q1",
    "question": "Was beschreibt VPRN am besten?",
    "options": [
      "Ein reiner Layer-2-Bridging-Dienst",
      "Ein multipoint Layer-3-VPN mit gerouteter Kundendomane ueber IP/MPLS",
      "Ein lokaler NAT-Service ohne VPN",
      "Ein Ersatz fuer CE-Router beim Kunden"
    ],
    "correctIndex": 1,
    "explanation": "VPRN verbindet mehrere Sites ueber eine geroutete L3-VPN-Domane.",
    "extraInfo": "Die Transportbasis ist typischerweise IP/MPLS, waehrend die Kundennetze logisch getrennt bleiben.",
    "tip": "VPRN = multipoint L3, nicht L2-Bridge.",
    "tags": [
      "Telecommunication",
      "VPRN",
      "L3VPN",
      "IP/MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What best describes VPRN?",
    "explanation_en": "VPRN connects multiple sites over a routed L3 VPN domain.",
    "extraInfo_en": "The transport basis is typically IP/MPLS, while the customer networks remain logically separate.",
    "tip_en": "VPRN = multipoint L3, not L2 bridge.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "A pure Layer 2 bridging service",
      "A multipoint Layer 3 VPN with routed customer domain via IP/MPLS",
      "A local NAT service without VPN",
      "A replacement for the customer's CE router"
    ]
  },
  {
    "id": "telco-vprn-q2",
    "question": "Welche Aussage zur Tabellenstruktur in VPRN ist korrekt?",
    "options": [
      "Alle VPRNs teilen sich immer dieselbe globale Forwarding-Tabelle",
      "Jeder beteiligte PE fuehrt pro VPRN eine separate IP-Forwarding-Instanz",
      "Forwarding erfolgt nur auf CE-Routern",
      "Forwarding-Tabellen sind bei VPRN nicht notwendig"
    ],
    "correctIndex": 1,
    "explanation": "Pro VPRN wird auf den beteiligten PEs eine getrennte Forwarding-Sicht gepflegt.",
    "extraInfo": "Diese logische Trennung ist zentral fuer Mehrmandantenfaehigkeit und Adressisolation.",
    "tip": "Pro VPN eigene Routing/Forwarding-Sicht merken.",
    "tags": [
      "Telecommunication",
      "VPRN",
      "PE",
      "Forwarding Table"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which statement about the table structure in VPRN is correct?",
    "explanation_en": "A separate forwarding view is maintained for each VPRN on the PEs involved.",
    "extraInfo_en": "This logical separation is central to multi-client capability and address isolation.",
    "tip_en": "Note your own routing/forwarding view for each VPN.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "All VPRNs always share the same global forwarding table",
      "Each PE involved runs a separate IP forwarding instance per VPRN",
      "Forwarding only occurs on CE routers",
      "Forwarding tables are not necessary with VPRN"
    ]
  },
  {
    "id": "telco-vpws-q1",
    "question": "Was beschreibt VPWS am treffendsten?",
    "options": [
      "Multipoint-L3-VPN fuer dynamisches Routing",
      "Punkt-zu-Punkt-Dienst als virtuelle Standleitung",
      "Reines Internet-Best-Effort ohne Servicebindung",
      "Broadcast-Service fuer alle Kunden zugleich"
    ],
    "correctIndex": 1,
    "explanation": "VPWS bildet typischerweise eine Punkt-zu-Punkt-Verbindung wie eine leased line nach.",
    "extraInfo": "Daher wird VPWS haeufig fuer klare Standort-zu-Standort-Kopplung genutzt.",
    "tip": "VPWS = Virtual Private Wire Service = P2P.",
    "tags": [
      "Telecommunication",
      "VPWS",
      "Leased Line",
      "L2VPN"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What best describes VPWS?",
    "explanation_en": "VPWS typically emulates a point-to-point connection such as a leased line.",
    "extraInfo_en": "Therefore, VPWS is often used for clear site-to-site coupling.",
    "tip_en": "VPWS = Virtual Private Wire Service = P2P.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Multipoint L3 VPN for dynamic routing",
      "Point-to-point service as a virtual leased line",
      "Pure Internet best effort without service commitment",
      "Broadcast service for all customers at the same time"
    ]
  },
  {
    "id": "telco-vpws-q2",
    "question": "Wie wird Kundentraffic bei VPWS typischerweise durch das Providernetz transportiert?",
    "options": [
      "Nur ungetunnelt im offenen Internet",
      "Ueber Tunnelmechanismen, z. B. MPLS-basierte Pseudowires",
      "Ausschliesslich ueber WLAN-Mesh ohne Provider-Core",
      "Nur ueber analoge Leitungsvermittlung"
    ],
    "correctIndex": 1,
    "explanation": "VPWS nutzt in der Praxis oft Tunnel-/Pseudowire-Mechanismen im Provider-Core.",
    "extraInfo": "In vielen Implementierungen ist MPLS zentral, je nach Umgebung sind auch andere Kapselungsmodelle relevant.",
    "tip": "Stichwort: Pseudowire ueber das Core-Netz.",
    "tags": [
      "Telecommunication",
      "VPWS",
      "MPLS",
      "Pseudowire"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "How is customer traffic typically transported through the provider network at VPWS?",
    "explanation_en": "In practice, VPWS often uses tunnel/pseudowire mechanisms in the provider core.",
    "extraInfo_en": "MPLS is central in many implementations; depending on the environment, other encapsulation models are also relevant.",
    "tip_en": "Keyword: Pseudowire over the core network.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "Only untunneled on the open internet",
      "About tunnel mechanisms, e.g. B. MPLS-based pseudowires",
      "Exclusively via WLAN mesh without provider core",
      "Only via analogue line switching"
    ]
  },
  {
    "id": "telco-vpws-q3",
    "question": "Welcher Vorteil von VPWS aus Kundensicht ist typisch?",
    "options": [
      "Es wirkt wie eine direkte Verbindung zwischen zwei Standorten",
      "Es zwingt alle Standorte in ein gemeinsames Broadcast-Domain-Design",
      "Es macht QoS unmoeglich",
      "Es funktioniert nur fuer Sprachtraffic"
    ],
    "correctIndex": 0,
    "explanation": "VPWS vermittelt dem Kunden das Verhalten einer dedizierten Punkt-zu-Punkt-Leitung.",
    "extraInfo": "Dabei bleibt die Provider-Transportstruktur fuer den Kundennutzdatenpfad weitgehend transparent.",
    "tip": "Merke: \"wie ein Kabel zwischen zwei Standorten\".",
    "tags": [
      "Telecommunication",
      "VPWS",
      "Customer Sicht"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "What is the typical advantage of VPWS from the customerâ€™s perspective?",
    "explanation_en": "VPWS provides the customer with the behavior of a dedicated point-to-point line.",
    "extraInfo_en": "The provider transport structure for the customer user data path remains largely transparent.",
    "tip_en": "Note: â€œlike a cable between two locationsâ€.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "It acts like a direct connection between two locations",
      "It forces all locations into a common broadcast domain design",
      "It makes QoS impossible",
      "It only works for voice traffic"
    ]
  },
  {
    "id": "telco-vpws-q4",
    "question": "Welcher Vorteil von VPWS aus Provider-Sicht passt am besten?",
    "options": [
      "Alle Core-Router muessen jeden einzelnen Kundendienst kennen",
      "Nur die beteiligten Service-Edges muessen den Dienst terminieren; dazu skalierbar mit QoS/Billing pro Service",
      "QoS und Policing sind unmoeglich",
      "Ingress/Egress-Shaping ist grundsaetzlich nicht verfuegbar"
    ],
    "correctIndex": 1,
    "explanation": "VPWS ist betriebsseitig gut skalierbar, und servicebezogene Steuerung ist moeglich.",
    "extraInfo": "Dazu gehoeren oft pro Service QoS, Billing sowie Ingress/Egress-Shaping und Policing.",
    "tip": "Achte auf die Begriffe Skalierung und Per-Service-Steuerung.",
    "tags": [
      "Telecommunication",
      "VPWS",
      "Provider Sicht",
      "QoS",
      "Billing"
    ],
    "source": "Telecommunication Grundlagen",
    "question_en": "Which advantage of VPWS fits best from a provider perspective?",
    "explanation_en": "VPWS is easily scalable on the operational side and service-related control is possible.",
    "extraInfo_en": "This often includes per service QoS, billing as well as ingress/egress shaping and policing.",
    "tip_en": "Pay attention to the terms scaling and per-service control.",
    "source_en": "Telecommunication basics",
    "options_en": [
      "All core routers must know each individual customer service",
      "Only the service edges involved need to terminate the service; Plus scalable with QoS/billing per service",
      "QoS and policing are impossible",
      "Ingress/egress shaping is generally not available"
    ]
  },
  {
    "id": "telco-sec2-q29",
    "question": "Welche Aussage zur PE-Erreichbarkeit im Core ist am genauesten?",
    "question_en": "Which statement about PE reachability in the core is most accurate?",
    "options": [
      "iBGP sorgt typischerweise fuer reine Underlay-Loopback-Reachability im Core",
      "Ein IGP (z. B. OSPF/IS-IS) liefert typischerweise die Underlay-Reachability, waehrend iBGP/MP-BGP Service-Routen austauscht",
      "T-LDP ersetzt IGP komplett",
      "RSVP-TE ersetzt BGP fuer alle VPN-Routen"
    ],
    "options_en": [
      "iBGP typically provides pure underlay loopback reachability in the core",
      "An IGP (for example OSPF/IS-IS) typically provides underlay reachability, while iBGP/MP-BGP exchanges service routes",
      "T-LDP fully replaces IGP",
      "RSVP-TE replaces BGP for all VPN routes"
    ],
    "correctIndex": 1,
    "explanation": "In Providernetzen kommt die reine Transport-/Loopback-Reachability meist aus dem IGP; BGP verteilt vor allem VPN-/Service-Informationen.",
    "explanation_en": "In provider networks, pure transport/loopback reachability usually comes from the IGP, while BGP mainly distributes VPN/service information.",
    "extraInfo": "Dein Szenario mit iBGP passt fuer Service-Routen, aber als Basis fuer den Transportpfad wird typischerweise IGP vorausgesetzt.",
    "extraInfo_en": "Your iBGP scenario fits service routes, but the transport path is typically built on top of IGP reachability.",
    "tip": "Underlay meist IGP, Overlay/Service oft BGP.",
    "tip_en": "Underlay is usually IGP, overlay/service is often BGP.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "Control Plane",
      "IGP",
      "iBGP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q30",
    "question": "Wer tauscht bei einem PE-P-P-PE-Design die Service-/VC-Labels aus?",
    "question_en": "Who exchanges service/VC labels in a PE-P-P-PE design?",
    "options": [
      "Alle Router inklusive P-Router hop-by-hop",
      "Nur die P-Router untereinander",
      "Die beteiligten PE-Router an den Service-Endpunkten",
      "Nur die CE-Router"
    ],
    "options_en": [
      "All routers including P routers hop by hop",
      "Only the P routers with each other",
      "The participating PE routers at the service endpoints",
      "Only the CE routers"
    ],
    "correctIndex": 2,
    "explanation": "Service-Labels werden zwischen den Service-Edges signalisiert; P-Router im Core muessen den Service-Kontext nicht kennen.",
    "explanation_en": "Service labels are signaled between service edges; core P routers do not need to know the service context.",
    "extraInfo": "P-Router sind im Datenpfad Label-Switcher fuer den Transport, nicht Endpunkte der Service-Signalisierung.",
    "extraInfo_en": "P routers are transport label switchers in the data path, not endpoints of service signaling.",
    "tip": "Service-Logik am Edge, nicht im Core.",
    "tip_en": "Service logic lives at the edge, not in the core.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "Service Label",
      "PE",
      "P"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q31",
    "question": "Welche Aussage zu LSP-Richtung ist korrekt?",
    "question_en": "Which statement about LSP direction is correct?",
    "options": [
      "Ein einzelner LSP ist automatisch bidirektional",
      "LSPs sind unidirektional; fuer bidirektionale Kommunikation braucht man zwei entgegengesetzte LSPs",
      "LSPs funktionieren nur mit CE-zu-CE Signalisierung",
      "LSPs koennen nur in GRE-Netzen existieren"
    ],
    "options_en": [
      "A single LSP is automatically bidirectional",
      "LSPs are unidirectional; bidirectional communication needs two opposite LSPs",
      "LSPs work only with CE-to-CE signaling",
      "LSPs can exist only in GRE networks"
    ],
    "correctIndex": 1,
    "explanation": "Im Standardmodell ist ein LSP eine Richtung; Rueckrichtung wird separat aufgebaut.",
    "explanation_en": "In the standard model, an LSP is one direction, and the reverse direction is built separately.",
    "extraInfo": "Das gilt sowohl fuer Transport-LSPs als auch fuer viele servicebezogene Label-Pfade.",
    "extraInfo_en": "This applies to transport LSPs and to many service-related label paths.",
    "tip": "Hinweg und Rueckweg getrennt denken.",
    "tip_en": "Think of forward and reverse as separate paths.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "LSP",
      "Unidirectional"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q32",
    "question": "Wie verhalten sich bei downstream-assigned Labeln Control Plane und Data Plane typischerweise?",
    "question_en": "How do control plane and data plane typically relate with downstream-assigned labels?",
    "options": [
      "Beide laufen immer in exakt derselben Richtung",
      "Label-Mappings laufen downstream->upstream, waehrend Nutzdaten upstream->downstream entlang des LSP laufen",
      "Nur die Data Plane ist relevant, Control Plane spielt keine Rolle",
      "Control Plane laeuft nur zwischen CE-Routern"
    ],
    "options_en": [
      "Both always run in exactly the same direction",
      "Label mappings move downstream to upstream, while user traffic moves upstream to downstream along the LSP",
      "Only data plane matters, control plane has no role",
      "Control plane runs only between CE routers"
    ],
    "correctIndex": 1,
    "explanation": "Bei klassischer Downstream-Label-Distribution kommt die Label-Information vom naechsten/egressseitigen Knoten zurueck Richtung Ingress.",
    "explanation_en": "With classic downstream label distribution, label information comes back from the next/egress-side node toward ingress.",
    "extraInfo": "Darum wirkt es oft so, als ob Control- und Data-Richtung gegeneinander laufen.",
    "extraInfo_en": "That is why control and data directions often appear opposite.",
    "tip": "Label kommt vom Zielpfad zurueck, Daten laufen zum Ziel hin.",
    "tip_en": "Labels come back from the target side, data flows toward the target.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "Control Plane",
      "Data Plane",
      "LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q33",
    "question": "Welche Rollenbezeichnung passt am besten zu P- und PE-Routern im MPLS-Datenpfad?",
    "question_en": "Which role mapping best fits P and PE routers in the MPLS data path?",
    "options": [
      "P-Router sind LER, PE-Router sind nur CE-Backups",
      "P-Router agieren typischerweise als LSR (Label Switching Router), PE-Router am Rand als LER (Label Edge Router)",
      "Nur CE-Router koennen LSR sein",
      "Alle Router sind immer gleichzeitig nur LER"
    ],
    "options_en": [
      "P routers are LER, and PE routers are only CE backups",
      "P routers typically act as LSR (Label Switching Router), while edge PE routers act as LER (Label Edge Router)",
      "Only CE routers can be LSR",
      "All routers are always only LER at the same time"
    ],
    "correctIndex": 1,
    "explanation": "Core-P-Router switchen Labels, waehrend PE-Router Labels am Rand pushen/poppen und Services zuordnen.",
    "explanation_en": "Core P routers switch labels, while PE routers push/pop labels at the edge and map traffic to services.",
    "extraInfo": "In realen Designs kann ein Geraet je nach Kontext mehrere Rollen tragen; im Kursmodell ist diese Zuordnung der Standard.",
    "extraInfo_en": "In real designs, one device can carry multiple roles by context; in course models, this mapping is the standard.",
    "tip": "P = Switching im Core, PE = Edge und Servicezuordnung.",
    "tip_en": "P = switching in the core, PE = edge and service mapping.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "LSR",
      "LER",
      "Provider Core"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q34",
    "question": "Welche Aussage zu T-LDP ist fuer viele Provider-Implementierungen korrekt?",
    "question_en": "Which statement about T-LDP is correct for many provider implementations?",
    "options": [
      "T-LDP funktioniert als komplett eigenstaendiges Protokoll ohne LDP-Funktion auf dem Router",
      "T-LDP ist eine LDP-basierte Sessionform (targeted) und setzt eine aktive LDP-Funktion/Instanz voraus",
      "T-LDP ersetzt MP-BGP fuer alle VPRN-Faelle",
      "T-LDP ist nur fuer direkt benachbarte Router gedacht"
    ],
    "options_en": [
      "T-LDP works as a fully independent protocol without any LDP function on the router",
      "T-LDP is an LDP-based targeted session form and requires an active LDP function/instance",
      "T-LDP replaces MP-BGP for all VPRN cases",
      "T-LDP is only intended for directly connected neighbor routers"
    ],
    "correctIndex": 1,
    "explanation": "Targeted LDP baut auf LDP-Mechanismen auf; ohne aktive LDP-Basis gibt es keine tLDP-Session.",
    "explanation_en": "Targeted LDP builds on LDP mechanisms; without an active LDP base, there is no tLDP session.",
    "extraInfo": "Details koennen vendor-spezifisch aussehen, aber tLDP bleibt konzeptionell Teil des LDP-Frameworks.",
    "extraInfo_en": "Details may look vendor-specific, but conceptually tLDP remains part of the LDP framework.",
    "tip": "Das 't' in tLDP steht fuer targeted, nicht fuer getrennt von LDP.",
    "tip_en": "The 't' in tLDP means targeted, not separated from LDP.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "T-LDP",
      "LDP",
      "Signaling"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec2-q35",
    "question": "Wenn PE1 Daten zu PE2 senden soll: Wer startet im klassischen Downstream-Label-Modell den Label-Advertise-Fluss?",
    "question_en": "If PE1 needs to send data to PE2, who starts label advertisement in the classic downstream label model?",
    "options": [
      "Ingress-seitig PE1 startet immer zuerst die Label-Mappings Richtung PE2",
      "Egress-seitig PE2 bzw. downstream Knoten advertisieren Labels Richtung Ingress",
      "Nur P1 entscheidet lokal, ohne Label-Information von PE2",
      "CE-Router starten die Transport-Labels fuer den Core"
    ],
    "options_en": [
      "Ingress-side PE1 always starts label mappings toward PE2",
      "Egress-side PE2 or downstream nodes advertise labels toward ingress",
      "Only P1 decides locally, without label information from PE2",
      "CE routers start transport labels for the core"
    ],
    "correctIndex": 1,
    "explanation": "Beim downstream-assigned Prinzip wird das Label vom downstream/egressnahen Knoten vergeben und Richtung Ingress signalisiert.",
    "explanation_en": "With downstream-assigned behavior, the label is assigned by downstream/egress-side nodes and signaled toward ingress.",
    "extraInfo": "Das erklaert, warum der Control-Plane-Austausch fuer Labels oft entgegen der spaeteren Datenflussrichtung wirkt.",
    "extraInfo_en": "This explains why label control-plane exchange often appears opposite to the later data-flow direction.",
    "tip": "Downstream vergibt, Upstream nutzt.",
    "tip_en": "Downstream assigns, upstream uses.",
    "tags": [
      "Telecommunication",
      "MPLS",
      "Label Distribution",
      "Control Plane",
      "PE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-sec3-q1",
    "question": "Was ist der Hauptnutzen des service-zentrierten Modells auf dem Nokia 7750 SR?",
    "question_en": "What is the main benefit of the service-centric model on the Nokia 7750 SR?",
    "options": [
      "Es ersetzt alle PE-Router durch CE-Router",
      "Es bietet ein einheitliches Modell fuer Service-Konfiguration, Management und Billing",
      "Es deaktiviert die Trennung zwischen Kunden",
      "Es macht Label-Signalisierung unnoetig"
    ],
    "options_en": [
      "It replaces all PE routers with CE routers",
      "It provides a uniform model for service configuration, management, and billing",
      "It removes separation between customers",
      "It makes label signaling unnecessary"
    ],
    "correctIndex": 1,
    "explanation": "Service-Entities auf den PEs erlauben eine konsistente, service-zentrierte Betriebsweise.",
    "explanation_en": "Service entities on PEs enable a consistent, service-centric operating model.",
    "extraInfo": "Das ist ein Kernziel bei Service-Provisioning im SP-Umfeld: standardisierte Prozesse statt Einzelfall-Logik.",
    "extraInfo_en": "This is a core goal in SP service provisioning: standardized processes instead of one-off logic.",
    "tip": "Denk an den Dreiklang: konfigurieren, managen, abrechnen.",
    "tip_en": "Think of the triad: configure, manage, bill.",
    "tags": [
      "Telecommunication",
      "Nokia 7750 SR",
      "Service Model",
      "PE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q2",
    "question": "Was ist im Service-Modell ein Subscriber?",
    "question_en": "What is a subscriber in the service model?",
    "options": [
      "Der Nutzer des Services",
      "Ein Core-Router ohne Kundenschnittstelle",
      "Ein Transport-Tunnel im MPLS-Core",
      "Ein globaler Label-Pool"
    ],
    "options_en": [
      "The user of the service",
      "A core router without customer-facing interfaces",
      "A transport tunnel in the MPLS core",
      "A global label pool"
    ],
    "correctIndex": 0,
    "explanation": "Subscriber bezeichnet den Service-Nutzer, nicht die Transportkomponente.",
    "explanation_en": "Subscriber refers to the service user, not a transport component.",
    "extraInfo": "Die Subscriber-Sicht gehoert zur Dienstlogik am Edge.",
    "extraInfo_en": "Subscriber context belongs to service logic at the edge.",
    "tip": "Subscriber = Kunde/Nutzer des Dienstes.",
    "tip_en": "Subscriber = customer/user of the service.",
    "tags": [
      "Telecommunication",
      "Subscriber",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q3",
    "question": "Welche Aussage zu SAP (Service Access Point) ist korrekt?",
    "question_en": "Which statement about SAP (Service Access Point) is correct?",
    "options": [
      "Ein SAP ist global im ganzen Providernetz eindeutig",
      "Ein SAP ist am Interface lokal signifikant als Zugangspunkt des Subscribers zum Service",
      "Ein SAP ist identisch mit einer Customer ID",
      "Ein SAP ist ein Transport-LSP"
    ],
    "options_en": [
      "A SAP is globally unique across the entire provider network",
      "A SAP is locally significant at an interface as the subscriber access point to the service",
      "A SAP is identical to a customer ID",
      "A SAP is a transport LSP"
    ],
    "correctIndex": 1,
    "explanation": "SAPs sind typischerweise lokale Service-Anker auf Interfaces, nicht globale IDs.",
    "explanation_en": "SAPs are typically local service anchors on interfaces, not global IDs.",
    "extraInfo": "Die lokale Signifikanz hilft, Servicezugang port-/subif-bezogen sauber zu modellieren.",
    "extraInfo_en": "Local significance helps model service access cleanly per port/sub-interface.",
    "tip": "SAP denkt lokal am Interface.",
    "tip_en": "Think of SAP as local at the interface.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q4",
    "question": "Wofuer wird die Customer ID typischerweise genutzt?",
    "question_en": "What is the customer ID typically used for?",
    "options": [
      "Zum Label-Swapping auf jedem P-Router",
      "Zur Gruppierung von Services eines Kunden und fuer Reporting (global signifikant)",
      "Als Ersatz fuer die Service ID in jedem Fall",
      "Nur fuer lokale Port-Nummern"
    ],
    "options_en": [
      "For label swapping on every P router",
      "For grouping customer services and reporting (globally significant)",
      "As a full replacement for the service ID in every case",
      "Only for local port numbers"
    ],
    "correctIndex": 1,
    "explanation": "Customer IDs dienen der kundenbezogenen Strukturierung und Auswertung uebergreifend im Netz.",
    "explanation_en": "Customer IDs provide customer-centric grouping and reporting across the network.",
    "extraInfo": "Typisch ist die Trennung: Customer ID fuer Kundengruppe, Service ID fuer konkreten Dienst.",
    "extraInfo_en": "Typical split: customer ID for customer grouping, service ID for a specific service.",
    "tip": "Customer ID = Gruppierung/Reporting.",
    "tip_en": "Customer ID = grouping/reporting.",
    "tags": [
      "Telecommunication",
      "Customer ID",
      "Reporting",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q5",
    "question": "Welche Aussage zur Service ID passt am besten?",
    "question_en": "Which statement about the service ID is most accurate?",
    "options": [
      "Service IDs sind nur lokal pro SAP gueltig",
      "Die Service ID ist ein numerischer, global signifikanter Identifier fuer einen Service",
      "Die Service ID wird nur im CE-Router verwendet",
      "Service IDs gibt es nur bei GRE"
    ],
    "options_en": [
      "Service IDs are only locally valid per SAP",
      "The service ID is a numeric, globally significant identifier for a service",
      "The service ID is used only on CE routers",
      "Service IDs exist only with GRE"
    ],
    "correctIndex": 1,
    "explanation": "Die Service ID identifiziert den Dienst global innerhalb des Service-Modells.",
    "explanation_en": "The service ID identifies the service globally within the service model.",
    "extraInfo": "Sie ist von Labelwerten im Transportpfad konzeptionell getrennt.",
    "extraInfo_en": "It is conceptually separate from transport-path label values.",
    "tip": "Service ID = globaler Dienst-Schluessel.",
    "tip_en": "Service ID = global service key.",
    "tags": [
      "Telecommunication",
      "Service ID",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q6",
    "question": "Welche Aussage zur VC-ID im klassischen Martini/tLDP-Kontext ist korrekt?",
    "question_en": "Which statement about VC ID in classic Martini/tLDP context is correct?",
    "options": [
      "VC-ID wird nur auf P-Routern verwendet",
      "VC-ID (PWid/FEC128) wird Ende-zu-Ende konsistent provisioniert und zur PW-/Service-Identifikation im tLDP-Signaling genutzt",
      "VC-ID ist immer zufaellig und muss nicht uebereinstimmen",
      "VC-ID ersetzt die Customer-ID fuer Reporting"
    ],
    "options_en": [
      "VC ID is used only on P routers",
      "VC ID (PWid/FEC128) is provisioned consistently end-to-end and used for PW/service identification in tLDP signaling",
      "VC ID is always random and does not need to match",
      "VC ID replaces customer ID for reporting"
    ],
    "correctIndex": 1,
    "explanation": "Im klassischen Martini/PWid-FEC-Modell muss die VC-ID (zusammen mit PW-Typ) an beiden Endpunkten konsistent sein.",
    "explanation_en": "In the classic Martini/PWid-FEC model, VC ID (together with PW type) must be consistent at both endpoints.",
    "extraInfo": "Bei Generalized/FEC129-Varianten erfolgt die Identifikation stattdessen ueber AGI/SAII/TAII.",
    "extraInfo_en": "In generalized/FEC129 variants, identification is done via AGI/SAII/TAII instead.",
    "tip": "VC-ID-Match gilt fuer den klassischen PWid(FEC128)-Pfad.",
    "tip_en": "VC ID match applies to the classic PWid (FEC128) path.",
    "tags": [
      "Telecommunication",
      "VC ID",
      "Signaling",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q7",
    "question": "Was beschreibt ein SDP im Nokia-Servicemodell am besten?",
    "question_en": "What best describes an SDP in the Nokia service model?",
    "options": [
      "Globale Kunden-ID fuer Billing",
      "Logische Repraesentation eines Transport-Tunnels (lokal signifikant)",
      "Physischer CE-Router beim Kunden",
      "Ein Synonym fuer Service-Label"
    ],
    "options_en": [
      "A global customer ID for billing",
      "A logical representation of a transport tunnel (locally significant)",
      "A physical CE router at the customer site",
      "A synonym for service label"
    ],
    "correctIndex": 1,
    "explanation": "SDP beschreibt den Transportpfad aus Service-Sicht logisch auf dem Router.",
    "explanation_en": "An SDP logically represents the transport path from the service perspective on the router.",
    "extraInfo": "SDP-Objekte sind lokal am Geraet relevant und mit Transporttunneln verknuepft.",
    "extraInfo_en": "SDP objects are locally relevant on the device and linked to transport tunnels.",
    "tip": "SDP = logische Tunnel-Ansicht fuer Services.",
    "tip_en": "SDP = logical tunnel view for services.",
    "tags": [
      "Telecommunication",
      "SDP",
      "Transport Tunnel",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q8",
    "question": "Welche Abgrenzung zwischen Transport Tunnel und Service Tunnel ist korrekt?",
    "question_en": "Which distinction between transport tunnel and service tunnel is correct?",
    "options": [
      "Transport Tunnel werden durch Service-Labels repraesentiert; Service Tunnel durch IGP-Pfade",
      "Transport Tunnel (z. B. LSPs) tragen Daten, Service Tunnel werden durch Service-Labels zwischen PEs repraesentiert",
      "Beides ist dasselbe Objekt mit zwei Namen",
      "Service Tunnel existieren nur bei GRE"
    ],
    "options_en": [
      "Transport tunnels are represented by service labels; service tunnels by IGP paths",
      "Transport tunnels (for example LSPs) carry data, while service tunnels are represented by service labels between PEs",
      "Both are the same object with two names",
      "Service tunnels exist only with GRE"
    ],
    "correctIndex": 1,
    "explanation": "Transport und Service sind logisch getrennte Ebenen: Wegtransport vs Dienstzuordnung.",
    "explanation_en": "Transport and service are separate logical layers: path transport vs service mapping.",
    "extraInfo": "Genau diese Trennung macht Skalierung und Troubleshooting im SP-Netz besser beherrschbar.",
    "extraInfo_en": "This separation is exactly what improves scalability and troubleshooting in SP networks.",
    "tip": "Transport bringt Paket voran, Service sagt wohin im Dienstkontext.",
    "tip_en": "Transport moves packets along, service decides destination context.",
    "tags": [
      "Telecommunication",
      "Transport Tunnel",
      "Service Tunnel",
      "MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q9",
    "question": "Was bedeutet Demultiplexing am Egress-PE in diesem Kontext?",
    "question_en": "What does demultiplexing at the egress PE mean in this context?",
    "options": [
      "Der Egress-PE verteilt Kundenpakete anhand des Service-Labels dem richtigen Service",
      "Der Egress-PE ersetzt automatisch alle Customer IDs",
      "Der Egress-PE deaktiviert den Tunnel fuer jeden unbekannten Frame",
      "Der Egress-PE nutzt nur MAC-Adresse ohne Labels"
    ],
    "options_en": [
      "The egress PE maps customer packets to the correct service based on the service label",
      "The egress PE automatically replaces all customer IDs",
      "The egress PE disables the tunnel for each unknown frame",
      "The egress PE uses only MAC addresses without labels"
    ],
    "correctIndex": 0,
    "explanation": "Demultiplexing ist die Rueckzuordnung eingehender Pakete auf die korrekte Service-Instanz am Ziel.",
    "explanation_en": "Demultiplexing is mapping incoming packets back to the correct service instance at the destination.",
    "extraInfo": "Ohne diese Zuordnung waere Mehrdienstbetrieb ueber denselben Transportpfad nicht sauber moeglich.",
    "extraInfo_en": "Without this mapping, clean multi-service operation over the same transport path would not be possible.",
    "tip": "Egress schaut aufs Service-Label und ordnet zu.",
    "tip_en": "Egress checks the service label and maps accordingly.",
    "tags": [
      "Telecommunication",
      "Demultiplexing",
      "Egress PE",
      "Service Label"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q10",
    "question": "Welche Aussage zu P-Routern in Bezug auf Service-Labels trifft am besten zu?",
    "question_en": "Which statement about P routers regarding service labels is most accurate?",
    "options": [
      "P-Router terminieren Service-Labels und machen die Kundenzuordnung",
      "P-Router sind im Core typischerweise service-unaware und switchen primaer Transport-Labels",
      "P-Router definieren die Customer ID fuer Billing",
      "P-Router sind notwendig, um VC IDs manuell zu matchen"
    ],
    "options_en": [
      "P routers terminate service labels and perform customer mapping",
      "P routers are typically service-unaware in the core and primarily switch transport labels",
      "P routers define the customer ID for billing",
      "P routers are required to manually match VC IDs"
    ],
    "correctIndex": 1,
    "explanation": "Im klassischen Modell liegt Service-Intelligenz an den PEs, waehrend P-Router den Kerntransport leisten.",
    "explanation_en": "In the classic model, service intelligence sits on PEs, while P routers provide core transport.",
    "extraInfo": "Das reduziert Core-Komplexitaet und skaliert besser bei vielen Services.",
    "extraInfo_en": "This reduces core complexity and scales better with many services.",
    "tip": "P = Transport-Core, PE = Service-Edge.",
    "tip_en": "P = transport core, PE = service edge.",
    "tags": [
      "Telecommunication",
      "P Router",
      "PE Router",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q11",
    "question": "Welche Aussage zur Customer-ID-Zuordnung nach Service-Erstellung ist korrekt?",
    "question_en": "Which statement about customer-ID association after service creation is correct?",
    "options": [
      "Die Customer-ID kann jederzeit im laufenden Service frei geaendert werden",
      "Nach der Service-Erstellung ist die Customer-Zuordnung nicht editierbar; fuer Wechsel ist Recreate noetig",
      "Customer-ID gilt nur lokal am SAP und ist ohne Folgen wechselbar",
      "Customer-ID wird nur auf P-Routern gepflegt"
    ],
    "options_en": [
      "The customer ID can always be changed freely on a running service",
      "After service creation, the customer association is not editable; changing it requires recreate",
      "Customer ID is only local on the SAP and can be changed without impact",
      "Customer ID is maintained only on P routers"
    ],
    "correctIndex": 1,
    "explanation": "Im 7750-Servicemodell ist die Customer-Zuordnung bei der Service-Erstellung fest gebunden.",
    "explanation_en": "In the 7750 service model, customer association is fixed when the service is created.",
    "extraInfo": "Ein Wechsel der Customer-Zuordnung erfolgt operational ueber Loeschen und Neuaufbau des Services.",
    "extraInfo_en": "Changing customer association is operationally done by deleting and recreating the service.",
    "tip": "Customer-Bindung wird beim Create festgelegt.",
    "tip_en": "Customer binding is fixed at service creation.",
    "tags": [
      "Telecommunication",
      "Customer ID",
      "Service Components",
      "Nokia 7750 SR"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q12",
    "question": "Welche Aussage zur Anzahl von Services pro Customer-ID ist korrekt?",
    "question_en": "Which statement about number of services per customer ID is correct?",
    "options": [
      "Pro Customer-ID ist exakt nur ein Service erlaubt",
      "Mehrere Services koennen derselben Customer-ID zugeordnet werden",
      "Customer-ID ist nur fuer VPRN nutzbar",
      "Customer-ID ersetzt die Service-ID"
    ],
    "options_en": [
      "Exactly one service is allowed per customer ID",
      "Multiple services can be associated with the same customer ID",
      "Customer ID is usable only for VPRN",
      "Customer ID replaces the service ID"
    ],
    "correctIndex": 1,
    "explanation": "Customer-ID dient der Gruppierung; mehrere Dienste pro Kunde sind ein Kernprinzip des Modells.",
    "explanation_en": "Customer ID is for grouping; multiple services per customer are a core model principle.",
    "extraInfo": "Das vereinfacht Reporting, Betriebsprozesse und Kundenstrukturierung.",
    "extraInfo_en": "This simplifies reporting, operations processes, and customer organization.",
    "tip": "Ein Kunde kann viele Services haben.",
    "tip_en": "One customer can have many services.",
    "tags": [
      "Telecommunication",
      "Customer ID",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q13",
    "question": "Welche Aussage zum SAP-Eigentum ist korrekt?",
    "question_en": "Which statement about SAP ownership is correct?",
    "options": [
      "Ein SAP kann gleichzeitig mehreren Services gehoeren",
      "Ein SAP ist dem Service zugeordnet, in dem er erstellt wurde",
      "SAPs gehoeren ausschliesslich dem Core-Netz",
      "SAPs sind globale Objekte ohne Servicebezug"
    ],
    "options_en": [
      "A SAP can belong to multiple services at the same time",
      "A SAP belongs to the service in which it was created",
      "SAPs belong only to the core network",
      "SAPs are global objects without service context"
    ],
    "correctIndex": 1,
    "explanation": "Ein SAP ist ein lokales Serviceobjekt und wird im jeweiligen Service-Kontext verwaltet.",
    "explanation_en": "A SAP is a local service object and is managed in its service context.",
    "extraInfo": "Dadurch bleibt die Service-Zuordnung eindeutig und administrativ sauber.",
    "extraInfo_en": "This keeps service mapping unambiguous and administratively clean.",
    "tip": "SAP ist service-gebunden.",
    "tip_en": "A SAP is service-bound.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q14",
    "question": "Wodurch wird ein SAP technisch eindeutig erkannt?",
    "question_en": "How is a SAP technically identified uniquely?",
    "options": [
      "Nur durch die Customer-ID",
      "Durch Port/Channel plus Encapsulation-Identifier",
      "Nur durch die Service-ID ohne Interfacebezug",
      "Nur durch die VC-ID"
    ],
    "options_en": [
      "Only by customer ID",
      "By port/channel plus encapsulation identifier",
      "Only by service ID without interface context",
      "Only by VC ID"
    ],
    "correctIndex": 1,
    "explanation": "Die SAP-Identitaet wird ueber Interface-/Channel-Kontext und Encapsulation-Wert gebildet.",
    "explanation_en": "SAP identity is formed by interface/channel context and encapsulation value.",
    "extraInfo": "Die gleiche numerische Encap-ID kann auf anderen Geraeten erneut auftreten, da SAPs lokal signifikant sind.",
    "extraInfo_en": "The same numeric encapsulation ID may appear on other devices because SAPs are locally significant.",
    "tip": "Merke die Kombination: Port + Encap.",
    "tip_en": "Remember the combination: port + encapsulation.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Encapsulation",
      "Service Components"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q15",
    "question": "Wann koennen mehrere SAPs auf demselben Port existieren?",
    "question_en": "When can multiple SAPs exist on the same port?",
    "options": [
      "Nie, pro Port ist exakt ein SAP moeglich",
      "Wenn die Encapsulation es erlaubt (z. B. unterschiedliche VLAN/Encap-Zuordnungen)",
      "Nur wenn der Port im shutdown ist",
      "Nur auf reinen Network-Ports"
    ],
    "options_en": [
      "Never, exactly one SAP is possible per port",
      "When encapsulation allows it (for example different VLAN/encapsulation mappings)",
      "Only when the port is shutdown",
      "Only on pure network ports"
    ],
    "correctIndex": 1,
    "explanation": "Die Encapsulation bestimmt, ob und wie mehrere Service-Zuordnungen auf einem Port unterschieden werden.",
    "explanation_en": "Encapsulation determines whether and how multiple service mappings can be distinguished on one port.",
    "extraInfo": "Typisch im Ethernet-Umfeld sind dot1q/QinQ-basierte Trennungen.",
    "extraInfo_en": "In Ethernet environments, dot1q/QinQ based separation is typical.",
    "tip": "Mehrere SAPs brauchen unterscheidbare Encap-Werte.",
    "tip_en": "Multiple SAPs need distinguishable encapsulation values.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Encapsulation",
      "Access Port"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q16",
    "question": "Welche Port-Modi eignen sich fuer SAP-Definition im Servicekontext?",
    "question_en": "Which port modes are suitable for SAP definition in service context?",
    "options": [
      "Access (bzw. Access-Kontext, auch auf Hybrid), aber nicht auf reinen Network-only Ports",
      "Nur auf Network-only Ports",
      "Nur auf Loopback-Interfaces",
      "Ausschliesslich auf Core-LSPs"
    ],
    "options_en": [
      "Access (or access context, also on hybrid), but not on pure network-only ports",
      "Only on network-only ports",
      "Only on loopback interfaces",
      "Exclusively on core LSPs"
    ],
    "correctIndex": 0,
    "explanation": "SAPs sind kundenseitig/access-orientiert. Reine network-facing Ports sind fuer Transport/Core gedacht.",
    "explanation_en": "SAPs are customer-facing/access-oriented. Pure network-facing ports are for transport/core.",
    "extraInfo": "Hybrid-Ports erlauben gleichzeitig Access- und Network-Kontext; SAP liegt dabei im Access-Kontext.",
    "extraInfo_en": "Hybrid ports allow both access and network context; SAP is in the access context.",
    "tip": "SAP nie als reines Core-Objekt denken.",
    "tip_en": "Never think of SAP as a pure core object.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Access Port",
      "Hybrid Port",
      "Network Port"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q17",
    "question": "Wo werden SAPs bei IES/VPRN typischerweise definiert?",
    "question_en": "Where are SAPs typically defined for IES/VPRN?",
    "options": [
      "Im Core auf P-Routern ohne Service-Interface",
      "Innerhalb der IP-Interface-/Service-Kontexte am PE",
      "Nur als globale Systemvariable ohne Interfacebezug",
      "Nur in MPLS RSVP-Tunnels"
    ],
    "options_en": [
      "In the core on P routers without service interfaces",
      "Within IP interface/service contexts on the PE",
      "Only as a global system variable without interface context",
      "Only in MPLS RSVP tunnels"
    ],
    "correctIndex": 1,
    "explanation": "Bei IES/VPRN bindet der SAP den Zugang zum Subscriber-Netz an die jeweilige Service-IP-Interface-Logik.",
    "explanation_en": "In IES/VPRN, SAP binds subscriber access to the corresponding service IP interface logic.",
    "extraInfo": "Damit werden Routing (L3) und Servicezugang in einem konsistenten Serviceobjekt zusammengefuehrt.",
    "extraInfo_en": "This ties routing (L3) and service access into one consistent service object.",
    "tip": "IES/VPRN: SAP am Service-Interface, nicht im Core.",
    "tip_en": "IES/VPRN: SAP on service interface, not in the core.",
    "tags": [
      "Telecommunication",
      "IES",
      "VPRN",
      "SAP",
      "IP Interface"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q18",
    "question": "Was beschreibt die SAP-Encapsulation-Option 'null' am treffendsten?",
    "question_en": "What best describes the SAP encapsulation option 'null'?",
    "options": [
      "Mehrere VLAN-basierte Services pro Port ueber verschiedene Tags",
      "Ein einzelner Service auf dem Port, Encapsulation-ID 0",
      "Doppeltes Tagging mit Outer- und Inner-Tag",
      "Nur fuer Core-facing Network-Ports"
    ],
    "options_en": [
      "Multiple VLAN-based services per port using different tags",
      "A single service on the port, encapsulation ID 0",
      "Double tagging with outer and inner tags",
      "Only for core-facing network ports"
    ],
    "correctIndex": 1,
    "explanation": "Null-Encapsulation steht fuer den Single-Service-Fall; die ID ist dabei 0.",
    "explanation_en": "Null encapsulation is the single-service case; the encapsulation ID is 0.",
    "extraInfo": "Dot1q/QinQ werden genutzt, wenn mehrere Services ueber denselben Port getrennt werden sollen.",
    "extraInfo_en": "Dot1q/QinQ are used when multiple services must be separated over the same port.",
    "tip": "Null = ein Dienst, keine VLAN-Service-Trennung ueber IDs.",
    "tip_en": "Null = one service, no VLAN service split via IDs.",
    "tags": [
      "Telecommunication",
      "SAP",
      "Encapsulation",
      "null"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q19",
    "question": "Was ist der praktische Unterschied zwischen dot1q und QinQ bei SAP-Encapsulation?",
    "question_en": "What is the practical difference between dot1q and QinQ in SAP encapsulation?",
    "options": [
      "dot1q nutzt einen Tag, QinQ nutzt zwei Tags (outer/inner) und vergroessert so den Trennraum",
      "dot1q und QinQ sind identisch und unterscheiden sich nur im Namen",
      "QinQ kann nur auf Network-Ports genutzt werden",
      "dot1q unterstuetzt keine VLAN-IDs"
    ],
    "options_en": [
      "dot1q uses one tag, QinQ uses two tags (outer/inner) and expands separation space",
      "dot1q and QinQ are identical and differ only by name",
      "QinQ can only be used on network ports",
      "dot1q does not support VLAN IDs"
    ],
    "correctIndex": 0,
    "explanation": "dot1q trennt ueber einen VLAN-Tag; QinQ erweitert das Modell auf zwei Tag-Ebenen.",
    "explanation_en": "dot1q separates with one VLAN tag; QinQ extends this to two tag levels.",
    "extraInfo": "Im Nokia-Kontext sind bei QinQ beide Q-Tags im Bereich bis 4094 modelliert (regulaer 1..4094).",
    "extraInfo_en": "In Nokia context, both QinQ Q-tags are modeled up to 4094 (regular values 1..4094).",
    "tip": "dot1q = 1 Tag, QinQ = 2 Tags.",
    "tip_en": "dot1q = 1 tag, QinQ = 2 tags.",
    "tags": [
      "Telecommunication",
      "SAP",
      "dot1q",
      "QinQ",
      "Encapsulation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q20",
    "question": "Warum spricht man bei QinQ oft von '4094 x 4094'?",
    "question_en": "Why do people often say '4094 x 4094' for QinQ?",
    "options": [
      "Weil QinQ pro Port maximal 4094 Bytes MTU erlaubt",
      "Weil Outer- und Inner-Tag jeweils bis 4094 Werte bieten und damit ein viel groesserer Kombinationsraum entsteht",
      "Weil QinQ genau 4094 Services pro Chassis limitiert",
      "Weil QinQ nur mit 4094 P-Routern funktioniert"
    ],
    "options_en": [
      "Because QinQ allows a maximum MTU of 4094 bytes per port",
      "Because outer and inner tag each allow up to 4094 values, creating a much larger combination space",
      "Because QinQ limits exactly 4094 services per chassis",
      "Because QinQ works only with 4094 P routers"
    ],
    "correctIndex": 1,
    "explanation": "Zwei Tag-Ebenen erzeugen deutlich mehr unterscheidbare Service-Keys als ein einzelner VLAN-Tag.",
    "explanation_en": "Two tag levels create far more distinguishable service keys than a single VLAN tag.",
    "extraInfo": "Das ist kein direktes Versprechen auf exakt so viele nutzbare Services in jedem Design, aber eine gute Intuition fuer Skalierung.",
    "extraInfo_en": "This is not a guarantee of exactly that many usable services in every design, but it is good intuition for scaling.",
    "tip": "QinQ vergroessert den Adressraum fuer Service-Abgrenzung.",
    "tip_en": "QinQ expands the address space for service separation.",
    "tags": [
      "Telecommunication",
      "QinQ",
      "Encapsulation",
      "Scaling"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q21",
    "question": "Welcher Default-MTU-Wert gilt typischerweise fuer Ethernet-Access-Ports mit dot1q?",
    "question_en": "Which default MTU value typically applies to Ethernet access ports with dot1q?",
    "options": [
      "1500",
      "1514",
      "1518",
      "9212"
    ],
    "options_en": [
      "1500",
      "1514",
      "1518",
      "9212"
    ],
    "correctIndex": 2,
    "explanation": "Im Nokia-Default-Table steht fuer Ethernet access + dot1q typischerweise MTU 1518.",
    "explanation_en": "In Nokia default tables, Ethernet access + dot1q is typically MTU 1518.",
    "extraInfo": "Service-MTU muss zusaetzlich zur SAP-Port-MTU und zur SDP-Path-MTU passen.",
    "extraInfo_en": "Service MTU must also fit both SAP port MTU and SDP path MTU.",
    "tip": "dot1q auf Access-Port: 1518 merken.",
    "tip_en": "dot1q on access port: remember 1518.",
    "tags": [
      "Telecommunication",
      "MTU",
      "dot1q",
      "Access Port"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q22",
    "question": "Welche Policy-Arten lassen sich auf SAPs typischerweise anwenden?",
    "question_en": "Which policy types can typically be applied on SAPs?",
    "options": [
      "Nur Routing-Protocol-Policies",
      "Ingress/Egress Filter, QoS, Scheduler und Accounting Policies",
      "Ausschliesslich BGP-Route-Reflector Policies",
      "Nur MPLS-TE Policies"
    ],
    "options_en": [
      "Only routing protocol policies",
      "Ingress/egress filter, QoS, scheduler, and accounting policies",
      "Only BGP route-reflector policies",
      "Only MPLS-TE policies"
    ],
    "correctIndex": 1,
    "explanation": "SAPs koennen verkehrs- und abrechnungsrelevante Steuerung tragen, jeweils ingress und/oder egress abhaengig vom Policy-Typ.",
    "explanation_en": "SAPs can carry traffic-control and billing-related policies, in ingress and/or egress direction depending on policy type.",
    "extraInfo": "Das ist zentral fuer SLA, Schutz, Scheduling und Abrechnung pro Servicezugang.",
    "extraInfo_en": "This is central for SLA, protection, scheduling, and charging per service access.",
    "tip": "SAP ist ein starker Policy-Anker am Service-Edge.",
    "tip_en": "SAP is a strong policy anchor at the service edge.",
    "tags": [
      "Telecommunication",
      "SAP",
      "QoS",
      "Filter",
      "Scheduler",
      "Accounting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q23",
    "question": "Wann spricht man im Service-Modell von einem lokalen Service?",
    "question_en": "When is a service considered local in the service model?",
    "options": [
      "Wenn zwei CEs auf demselben PE ueber SAPs im gleichen Router-Service verbunden sind",
      "Wenn mindestens zwei P-Router zwischen den Endpunkten liegen",
      "Wenn zwingend ein SDP zu einem Remote-PE gebunden ist",
      "Wenn nur Network-Ports ohne SAP genutzt werden"
    ],
    "options_en": [
      "When two CEs are connected on the same PE via SAPs in the same router service",
      "When at least two P routers are between endpoints",
      "When an SDP must be bound to a remote PE",
      "When only network ports without SAP are used"
    ],
    "correctIndex": 0,
    "explanation": "Lokaler Service bedeutet: beide Service-Enden liegen auf demselben Router; kein verteiltes SDP-Overlay noetig.",
    "explanation_en": "A local service means both service ends are on the same router; no distributed SDP overlay is required.",
    "extraInfo": "Verteilter Service beginnt, sobald mindestens ein Service-Ende auf einem Remote-PE liegt.",
    "extraInfo_en": "A service becomes distributed when at least one service end is on a remote PE.",
    "tip": "Ein PE mit zwei SAPs kann bereits einen kompletten lokalen Service bilden.",
    "tip_en": "One PE with two SAPs can already form a complete local service.",
    "tags": [
      "Telecommunication",
      "Local Service",
      "SAP",
      "PE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q24",
    "question": "Was ist bei einem distributed Service zwischen zwei PEs zusaetzlich erforderlich?",
    "question_en": "What is additionally required for a distributed service between two PEs?",
    "options": [
      "Nur ein zusaetzlicher SAP auf demselben PE",
      "Ein SDP-Binding zum Service-Tunnel zwischen den PEs",
      "Direktes CE-zu-CE BGP ueber den Provider-Core",
      "Keine zusaetzlichen Objekte, SAPs reichen immer"
    ],
    "options_en": [
      "Only one extra SAP on the same PE",
      "An SDP binding to the service tunnel between the PEs",
      "Direct CE-to-CE BGP through the provider core",
      "No additional objects, SAPs are always enough"
    ],
    "correctIndex": 1,
    "explanation": "Distributed Services benoetigen SDPs, damit Traffic ueber das IP/MPLS-Netz zum Remote-PE gelenkt wird.",
    "explanation_en": "Distributed services require SDPs so traffic can be steered through the IP/MPLS network to the remote PE.",
    "extraInfo": "Ein SDP ist die logische Tunnel-Repraesentation; ohne Binding ist der Remote-Servicepfad nicht aktiv.",
    "extraInfo_en": "An SDP is the logical tunnel representation; without binding, the remote service path is not active.",
    "tip": "Local: SAPs reichen. Distributed: SDP-Binding noetig.",
    "tip_en": "Local: SAPs are enough. Distributed: SDP binding is required.",
    "tags": [
      "Telecommunication",
      "Distributed Service",
      "SDP",
      "MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q25",
    "question": "Welche Aussage zur SDP-ID ist korrekt?",
    "question_en": "Which statement about SDP ID is correct?",
    "options": [
      "Eine SDP-ID muss im gesamten Providernetz global eindeutig sein",
      "Eine SDP-ID ist nur auf dem lokalen Router eindeutig; dieselbe ID kann auf anderen Routern erneut verwendet werden",
      "SDP-IDs werden automatisch vom IGP global vergeben",
      "SDP-IDs sind nur bei GRE erlaubt"
    ],
    "options_en": [
      "An SDP ID must be globally unique across the entire provider network",
      "An SDP ID is unique only on the local router; the same ID can be reused on other routers",
      "SDP IDs are globally assigned automatically by the IGP",
      "SDP IDs are allowed only with GRE"
    ],
    "correctIndex": 1,
    "explanation": "SDP-IDs sind lokal signifikant und nicht netzweit global eindeutig.",
    "explanation_en": "SDP IDs are locally significant and not globally unique across the network.",
    "extraInfo": "Das erleichtert lokale Administration pro Router-Chassis.",
    "extraInfo_en": "This simplifies local administration per router chassis.",
    "tip": "SDP-ID = lokal, nicht global.",
    "tip_en": "SDP ID = local, not global.",
    "tags": [
      "Telecommunication",
      "SDP",
      "Service Components",
      "Nokia 7750 SR"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q26",
    "question": "Womit wird beim SDP typischerweise die Far-End-Destination identifiziert?",
    "question_en": "What is typically used in an SDP to identify the far-end destination?",
    "options": [
      "Mit der lokalen SAP-Nummer",
      "Mit der System-IP-Adresse des Remote-PE",
      "Mit der Customer-ID",
      "Mit der VC-ID des CE-Routers"
    ],
    "options_en": [
      "With the local SAP number",
      "With the system IP address of the remote PE",
      "With the customer ID",
      "With the VC ID of the CE router"
    ],
    "correctIndex": 1,
    "explanation": "Ein SDP adressiert den Remote-Endpunkt typischerweise ueber die far-end Systemadresse.",
    "explanation_en": "An SDP typically addresses the remote endpoint using the far-end system address.",
    "extraInfo": "Das passt zum PE-zu-PE Service-Transportmodell.",
    "extraInfo_en": "This matches the PE-to-PE service transport model.",
    "tip": "SDP zeigt auf den Remote-PE, nicht auf den CE.",
    "tip_en": "An SDP points to the remote PE, not the CE.",
    "tags": [
      "Telecommunication",
      "SDP",
      "PE",
      "System IP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q27",
    "question": "Welche Aussage zum Servicebezug von SDPs ist korrekt?",
    "question_en": "Which statement about service relation of SDPs is correct?",
    "options": [
      "Ein SDP ist immer nur fuer genau einen Service reserviert",
      "Mehrere Services koennen dasselbe SDP nutzen; ein SDP ist nicht per se service-spezifisch",
      "SDPs koennen nur von VPRN genutzt werden",
      "Ein SDP darf nie mit mehreren SAPs kombiniert werden"
    ],
    "options_en": [
      "An SDP is always reserved for exactly one service",
      "Multiple services can use the same SDP; an SDP is not inherently service-specific",
      "SDPs can be used only by VPRN",
      "An SDP can never be combined with multiple SAPs"
    ],
    "correctIndex": 1,
    "explanation": "SDPs repraesentieren Transportpfade und koennen von mehreren Diensten gemeinsam genutzt werden.",
    "explanation_en": "SDPs represent transport paths and can be shared by multiple services.",
    "extraInfo": "Aenderungen am SDP treffen daher potenziell alle gebundenen Services.",
    "extraInfo_en": "Changes on an SDP can therefore affect all bound services.",
    "tip": "SDP ist ein Transportobjekt, kein Einzelservice-Objekt.",
    "tip_en": "An SDP is a transport object, not a single-service object.",
    "tags": [
      "Telecommunication",
      "SDP",
      "Transport Tunnel",
      "Service Binding"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q28",
    "question": "Welche Aussage zur Encapsulation auf einem SDP ist korrekt?",
    "question_en": "Which statement about encapsulation on an SDP is correct?",
    "options": [
      "Jeder Service auf demselben SDP kann beliebig zwischen MPLS und GRE mischen",
      "Ein SDP hat einen Encapsulation-Typ (MPLS oder GRE); gebundene Services teilen diesen Typ",
      "Encapsulation wird nur pro SAP festgelegt, nie am SDP",
      "SDPs haben grundsaetzlich keine Encapsulation-Eigenschaft"
    ],
    "options_en": [
      "Each service on the same SDP can freely mix MPLS and GRE",
      "An SDP has one encapsulation type (MPLS or GRE); bound services share this type",
      "Encapsulation is configured only per SAP, never on SDP",
      "SDPs fundamentally have no encapsulation property"
    ],
    "correctIndex": 1,
    "explanation": "SDP-Encapsulation wird am SDP festgelegt und gilt fuer die darueber gebundenen Service-Verteilungen.",
    "explanation_en": "SDP encapsulation is defined on the SDP and applies to service distribution bound through it.",
    "extraInfo": "Darum ist SDP-Design eine gemeinsame Transportentscheidung fuer mehrere Dienste.",
    "extraInfo_en": "That is why SDP design is a shared transport decision for multiple services.",
    "tip": "Pro SDP ein Encapsulation-Typ.",
    "tip_en": "One encapsulation type per SDP.",
    "tags": [
      "Telecommunication",
      "SDP",
      "Encapsulation",
      "MPLS",
      "GRE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q29",
    "question": "Was ist eine direkte Folge von SDP-Aenderungen in produktiven Netzen?",
    "question_en": "What is a direct consequence of SDP changes in production networks?",
    "options": [
      "Aenderungen wirken nur auf den zuletzt angelegten Service",
      "Aenderungen koennen alle an dieses SDP gebundenen Services beeinflussen",
      "Aenderungen betreffen nur lokale SAP-Namen",
      "SDP-Aenderungen haben niemals Traffic-Auswirkung"
    ],
    "options_en": [
      "Changes affect only the most recently created service",
      "Changes can affect all services bound to this SDP",
      "Changes affect only local SAP names",
      "SDP changes never impact traffic"
    ],
    "correctIndex": 1,
    "explanation": "Da SDPs gemeinsam genutzt werden koennen, haben Aenderungen potenziell breite Auswirkungen.",
    "explanation_en": "Because SDPs can be shared, changes may have broad impact.",
    "extraInfo": "Deshalb sind Change-Planung und Wartungsfenster wichtig.",
    "extraInfo_en": "That is why change planning and maintenance windows are important.",
    "tip": "Shared Transportobjekt = shared Risiko.",
    "tip_en": "Shared transport object = shared risk.",
    "tags": [
      "Telecommunication",
      "SDP",
      "Operations",
      "Change Impact"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q30",
    "question": "Wann werden Service-Labels bei distributed Services typischerweise ausgetauscht?",
    "question_en": "When are service labels typically exchanged for distributed services?",
    "options": [
      "Immer sofort beim Anlegen des SDP, auch ohne Service-Binding",
      "Erst wenn der Service per SDP-Binding an den Transport gebunden ist (bei aktivem Signaling)",
      "Nur wenn ein CE-Router BGP aktiviert",
      "Nur bei lokalen Services auf einem einzelnen PE"
    ],
    "options_en": [
      "Always immediately when SDP is created, even without service binding",
      "Only after the service is bound via SDP binding to transport (with signaling enabled)",
      "Only when a CE router enables BGP",
      "Only for local services on a single PE"
    ],
    "correctIndex": 1,
    "explanation": "Der reine SDP-Aufbau reicht nicht; Service-Label-Signaling folgt dem konkreten Service-Binding.",
    "explanation_en": "SDP creation alone is not enough; service-label signaling follows actual service binding.",
    "extraInfo": "Ist Signaling deaktiviert, muessen Labels beim Binding manuell gesetzt werden.",
    "extraInfo_en": "If signaling is disabled, labels must be configured manually during binding.",
    "tip": "Kein Binding, kein fertiger Servicepfad.",
    "tip_en": "No binding, no complete service path.",
    "tags": [
      "Telecommunication",
      "SDP Binding",
      "Service Label",
      "Distributed Service"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q31",
    "question": "Welche Tunneltypen kann ein SDP als Transport nutzen?",
    "question_en": "Which tunnel types can an SDP use for transport?",
    "options": [
      "Nur statische IP-Routen ohne Tunnel",
      "LDP-LSP, RSVP-TE-LSP oder GRE-Tunnel (je nach Design)",
      "Nur ATM-PVCs",
      "Ausschliesslich QinQ-Tags"
    ],
    "options_en": [
      "Only static IP routes without tunnels",
      "LDP LSP, RSVP-TE LSP, or GRE tunnel (depending on design)",
      "Only ATM PVCs",
      "Exclusively QinQ tags"
    ],
    "correctIndex": 1,
    "explanation": "In der Praxis werden fuer SDP-Transport typischerweise MPLS-LSPs oder GRE eingesetzt.",
    "explanation_en": "In practice, SDP transport typically uses MPLS LSPs or GRE.",
    "extraInfo": "Die konkrete Wahl haengt von Control-Plane-Design, Schutzanforderung und Betriebsmodell ab.",
    "extraInfo_en": "The specific choice depends on control-plane design, protection requirements, and operations model.",
    "tip": "SDP baut auf Tunneltechnologie auf.",
    "tip_en": "SDP is built on tunnel technology.",
    "tags": [
      "Telecommunication",
      "SDP",
      "LDP",
      "RSVP-TE",
      "GRE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q32",
    "question": "Was unterscheidet 'secondary RSVP LSP' von 'secondary standby RSVP LSP' am besten?",
    "question_en": "What best distinguishes a secondary RSVP LSP from a secondary standby RSVP LSP?",
    "options": [
      "Bei Standby ist der Backup-Tunnel bereits operational; beim normalen Secondary wird er typischerweise erst im Fehlerfall aktiv genutzt",
      "Secondary und Standby sind technisch immer identisch",
      "Standby ist nur mit GRE erlaubt",
      "Secondary kann nie fuer Schutz genutzt werden"
    ],
    "options_en": [
      "With standby, the backup tunnel is already operational; with normal secondary it is typically used only after failure",
      "Secondary and standby are always technically identical",
      "Standby is allowed only with GRE",
      "Secondary can never be used for protection"
    ],
    "correctIndex": 0,
    "explanation": "Standby-Modelle halten den Backup-Pfad aktiv bereit und reduzieren Umschaltzeit.",
    "explanation_en": "Standby models keep the backup path active and reduce switchover time.",
    "extraInfo": "Ohne Standby kann ein Secondary-Pfad erst bei Ausfall voll wirksam werden.",
    "extraInfo_en": "Without standby, a secondary path may become fully effective only after failure.",
    "tip": "Standby = warm gehaltenes Backup.",
    "tip_en": "Standby = warm backup path.",
    "tags": [
      "Telecommunication",
      "RSVP-TE",
      "Protection",
      "Secondary",
      "Standby"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q33",
    "question": "Welche Aussage zu Fast Reroute (FRR) ist korrekt?",
    "question_en": "Which statement about Fast Reroute (FRR) is correct?",
    "options": [
      "One-to-one FRR baut dedizierte Detour-LSPs pro geschuetztem LSP, waehrend Facility FRR gemeinsame Bypass-Tunnel nutzt",
      "FRR funktioniert nur mit GRE",
      "Facility FRR braucht fuer jeden LSP einen eigenen Detour",
      "One-to-one FRR und Facility FRR sind nur Begriffe fuer BGP-Policies"
    ],
    "options_en": [
      "One-to-one FRR builds dedicated detour LSPs per protected LSP, while facility FRR uses shared bypass tunnels",
      "FRR works only with GRE",
      "Facility FRR needs a dedicated detour for every LSP",
      "One-to-one FRR and facility FRR are only terms for BGP policies"
    ],
    "correctIndex": 0,
    "explanation": "Das ist die klassische Unterscheidung der beiden RSVP-FRR-Schutzmodelle.",
    "explanation_en": "This is the classic distinction between the two RSVP FRR protection models.",
    "extraInfo": "Facility FRR skaliert oft besser bei vielen LSPs, weil Bypass-Tunnel geteilt werden.",
    "extraInfo_en": "Facility FRR often scales better for many LSPs because bypass tunnels are shared.",
    "tip": "One-to-one = dediziert, Facility = geteilt.",
    "tip_en": "One-to-one = dedicated, facility = shared.",
    "tags": [
      "Telecommunication",
      "FRR",
      "RSVP-TE",
      "Protection"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q34",
    "question": "Welche Zusammenfassung zu LDP, RSVP-TE und GRE trifft am besten zu?",
    "question_en": "Which summary about LDP, RSVP-TE, and GRE is most accurate?",
    "options": [
      "LDP folgt IGP-Paths mit geringerem Engineering-Aufwand; RSVP-TE bietet feinere Pfadkontrolle; GRE hat wenig Label-Control-Plane-Overhead und folgt IP-Routing",
      "RSVP-TE braucht keine Konfiguration und folgt immer automatisch IGP",
      "GRE liefert immer schnellere Konvergenz als jedes IGP",
      "LDP und RSVP-TE sind identisch bis auf den Namen"
    ],
    "options_en": [
      "LDP follows IGP paths with lower engineering effort; RSVP-TE offers finer path control; GRE has low label-control-plane overhead and follows IP routing",
      "RSVP-TE needs no configuration and always follows IGP automatically",
      "GRE always converges faster than any IGP",
      "LDP and RSVP-TE are identical except for the name"
    ],
    "correctIndex": 0,
    "explanation": "Das beschreibt die typischen Design-Tradeoffs dieser drei Transportansaetze.",
    "explanation_en": "This describes the typical design trade-offs of these three transport approaches.",
    "extraInfo": "GRE-Konvergenz haengt stark von der IP-Routing/IGP-Konvergenz im Netz ab.",
    "extraInfo_en": "GRE convergence heavily depends on IP routing/IGP convergence in the network.",
    "tip": "Denke in Tradeoffs: Einfachheit vs Pfadkontrolle vs Overhead.",
    "tip_en": "Think in trade-offs: simplicity vs path control vs overhead.",
    "tags": [
      "Telecommunication",
      "LDP",
      "RSVP-TE",
      "GRE",
      "Design Tradeoff"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q35",
    "question": "Was bedeutet im Kurskontext \"VC-ID muss vom User bereitgestellt werden\" am treffendsten?",
    "question_en": "In this course context, what does \"VC ID must be user-provisioned\" mean most accurately?",
    "options": [
      "Die VC-ID wird immer dynamisch vom IGP vergeben",
      "Im klassischen Martini/PWid-FEC-Setup wird die VC-ID auf beiden PEs konfiguriert und muss zusammenpassen",
      "Nur der Egress-PE braucht eine VC-ID",
      "VC-ID wird aus der Customer-ID automatisch berechnet"
    ],
    "options_en": [
      "VC ID is always assigned dynamically by the IGP",
      "In classic Martini/PWid-FEC setup, VC ID is configured on both PEs and must match",
      "Only the egress PE needs a VC ID",
      "VC ID is automatically derived from customer ID"
    ],
    "correctIndex": 1,
    "explanation": "Bei klassischem tLDP/PWid-FEC wird die VC-ID als provisionierter Identifier auf beiden Endpunkten abgestimmt.",
    "explanation_en": "With classic tLDP/PWid-FEC, VC ID is a provisioned identifier that must be aligned on both endpoints.",
    "extraInfo": "Das ist ein Kernunterschied zu auto-discovery-orientierten FEC129-Szenarien.",
    "extraInfo_en": "This is a key difference from auto-discovery-oriented FEC129 scenarios.",
    "tip": "Martini/PWid = statisch abgestimmte VC-ID.",
    "tip_en": "Martini/PWid = statically aligned VC ID.",
    "tags": [
      "Telecommunication",
      "VC ID",
      "Martini",
      "T-LDP",
      "PWid"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q36",
    "question": "Welche Aussage zur Label-Paarung an den PE-Endpunkten ist korrekt?",
    "question_en": "Which statement about label pairing at PE endpoints is correct?",
    "options": [
      "Ein einzelnes Label reicht immer fuer beide Richtungen",
      "Ingress- und Egress-Service-Label bilden zusammen den bidirektionalen PW-/Service-Kontext zwischen den Endpunkten",
      "Die Label-Paarung wird nur im P-Router-Core bestimmt",
      "Die VC-ID ist fuer die Zuordnung des Label-Paars irrelevant"
    ],
    "options_en": [
      "A single label is always enough for both directions",
      "Ingress and egress service labels together form the bidirectional PW/service context between endpoints",
      "Label pairing is determined only inside the P-router core",
      "VC ID is irrelevant for mapping the label pair"
    ],
    "correctIndex": 1,
    "explanation": "Jede Richtung signalisiert ihr eigenes Label; zusammen entsteht der Ende-zu-Ende-Kontext fuer den Dienst.",
    "explanation_en": "Each direction signals its own label; together they form the end-to-end service context.",
    "extraInfo": "Die P-Router switchen Transportlabels, die Servicekontext-Zuordnung passiert an den PEs.",
    "extraInfo_en": "P routers switch transport labels, while service-context mapping happens on PEs.",
    "tip": "Zwei Richtungen, zwei Label-Werte, ein logischer PW.",
    "tip_en": "Two directions, two label values, one logical PW.",
    "tags": [
      "Telecommunication",
      "Service Label",
      "Ingress",
      "Egress",
      "PE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec3-q37",
    "question": "Wann ist die Aussage \"VC-ID muss end-to-end identisch sein\" fachlich korrekt?",
    "question_en": "When is the statement \"VC ID must be identical end-to-end\" technically correct?",
    "options": [
      "In klassischen PWid/FEC128-(Martini)-Bereitstellungen",
      "In allen moeglichen Pseudowire-Signaling-Varianten ohne Ausnahme",
      "Nur bei GRE ohne MPLS-Service-Label",
      "Nur bei lokalen Services ohne Remote-PE"
    ],
    "options_en": [
      "In classic PWid/FEC128 (Martini) deployments",
      "In all possible pseudowire signaling variants without exception",
      "Only with GRE without MPLS service label",
      "Only for local services without remote PE"
    ],
    "correctIndex": 0,
    "explanation": "Die strikte PWid-Gleichheit gilt fuer PWid/FEC128; bei Generalized/FEC129 wird ueber Endpoint-Identifier gearbeitet.",
    "explanation_en": "Strict PWid equality applies to PWid/FEC128; generalized/FEC129 uses endpoint identifiers instead.",
    "extraInfo": "So vermeidest du typische Pruefungsfallen bei VC-ID-Fragen.",
    "extraInfo_en": "This helps avoid common exam traps in VC-ID questions.",
    "tip": "Immer den FEC-Typ mitdenken.",
    "tip_en": "Always consider the FEC type.",
    "tags": [
      "Telecommunication",
      "VC ID",
      "FEC128",
      "FEC129",
      "T-LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "telco-sec4-q1",
    "question": "Warum ist IGP-Basisreachability ein Pflichtschritt vor distributed Services?",
    "question_en": "Why is IGP base reachability a mandatory step before distributed services?",
    "options": [
      "Damit CE-Router direkt MPLS-Labels austauschen koennen",
      "Damit die Systemadressen/Loopbacks der PE/P-Router in den Routing-Tabellen erreichbar sind",
      "Damit VC-IDs automatisch vergeben werden",
      "Damit SAP-Encapsulation auf null gesetzt wird"
    ],
    "options_en": [
      "So CE routers can exchange MPLS labels directly",
      "So PE/P router system addresses/loopbacks are reachable in routing tables",
      "So VC IDs are assigned automatically",
      "So SAP encapsulation is forced to null"
    ],
    "correctIndex": 1,
    "explanation": "Ohne IGP-Reachability fehlt die IP-Grundlage fuer Label-Signaling und Tunnelaufbau im Core.",
    "explanation_en": "Without IGP reachability, the IP foundation for label signaling and tunnel setup in the core is missing.",
    "extraInfo": "Das betrifft vor allem System-/Loopback-Adressen als Signaling- und Tunnelendpunkte.",
    "extraInfo_en": "This mainly affects system/loopback addresses as signaling and tunnel endpoints.",
    "tip": "Erst Underlay, dann Overlay-Service.",
    "tip_en": "Underlay first, then overlay service.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "IGP",
      "Distributed Service"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q2",
    "question": "Welche Aussage zu Transport-Label-Signaling ist fuer distributed Services korrekt?",
    "question_en": "Which statement about transport label signaling is correct for distributed services?",
    "options": [
      "Transport-Label-Signaling wird nicht benoetigt",
      "LDP oder RSVP-TE muss aktiv sein, damit Transport-LSPs entstehen",
      "Nur MP-BGP reicht fuer den kompletten Transportpfad",
      "Transport-Labels werden ausschliesslich per GRE signalisiert"
    ],
    "options_en": [
      "Transport label signaling is not required",
      "LDP or RSVP-TE must be active so transport LSPs can exist",
      "Only MP-BGP is enough for the full transport path",
      "Transport labels are signaled exclusively via GRE"
    ],
    "correctIndex": 1,
    "explanation": "Der Transportpfad im MPLS-Core entsteht ueber LDP oder RSVP-TE, nicht ueber reine Serviceprotokolle.",
    "explanation_en": "Transport paths in the MPLS core are built via LDP or RSVP-TE, not by service-only protocols.",
    "extraInfo": "Service-Signaling (z. B. tLDP/MP-BGP) sitzt logisch auf der vorhandenen Transportreichweite.",
    "extraInfo_en": "Service signaling (for example tLDP/MP-BGP) logically sits on existing transport reachability.",
    "tip": "Transport und Service immer getrennt denken.",
    "tip_en": "Always separate transport and service in your model.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "LDP",
      "RSVP-TE",
      "Transport"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q3",
    "question": "Welche Spezialregel gilt im Kurskontext fuer tLDP?",
    "question_en": "Which special rule applies to tLDP in this course context?",
    "options": [
      "tLDP funktioniert komplett ohne LDP-Basis",
      "Fuer dynamisches tLDP-Signaling muss LDP auf dem Router aktiv sein",
      "tLDP ersetzt IGP-Reachability",
      "tLDP ist nur auf CE-Routern erlaubt"
    ],
    "options_en": [
      "tLDP works completely without any LDP base function",
      "For dynamic tLDP signaling, LDP must be active on the router",
      "tLDP replaces IGP reachability",
      "tLDP is allowed only on CE routers"
    ],
    "correctIndex": 1,
    "explanation": "Targeted LDP baut auf LDP-Mechanismen auf; ohne LDP-Basis gibt es kein dynamisches tLDP.",
    "explanation_en": "Targeted LDP builds on LDP mechanisms; without LDP base, no dynamic tLDP is available.",
    "extraInfo": "Vendor-Details variieren, das Kursmodell folgt dieser Betriebslogik.",
    "extraInfo_en": "Vendor details vary, but the course model follows this operating logic.",
    "tip": "Das \"t\" ist targeted, nicht getrennt von LDP.",
    "tip_en": "The \"t\" means targeted, not separate from LDP.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "T-LDP",
      "LDP",
      "Signaling"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q4",
    "question": "Was muss bei RSVP-TE zusaetzlich sauber eingerichtet sein, bevor ein Service stabil verteilt werden kann?",
    "question_en": "What must additionally be configured with RSVP-TE before a service can be distributed reliably?",
    "options": [
      "Nur die Customer-ID",
      "LSP plus passender Bind-Path (und bei Bedarf Schutzpfad)",
      "Ausschliesslich SAP-Filter ohne Tunnel",
      "Nur CE-seitiges OSPF"
    ],
    "options_en": [
      "Only the customer ID",
      "LSP plus matching bind path (and optional protection path)",
      "Only SAP filters without tunnel",
      "Only CE-side OSPF"
    ],
    "correctIndex": 1,
    "explanation": "Bei RSVP-Designs muss der Service auf den richtigen Transport-LSP gebunden werden.",
    "explanation_en": "In RSVP designs, the service must be bound to the correct transport LSP.",
    "extraInfo": "Ohne korrektes Bind-Path landet der Service nicht auf dem gewuenschten Tunnel.",
    "extraInfo_en": "Without correct bind path, the service does not use the intended tunnel.",
    "tip": "RSVP braucht mehr als nur \"enabled\".",
    "tip_en": "RSVP needs more than just \"enabled\".",
    "tags": [
      "Telecommunication",
      "Section 4",
      "RSVP-TE",
      "Bind Path",
      "LSP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q5",
    "question": "Welche Aussage zur SDP-Erstellung im distributed Service ist korrekt?",
    "question_en": "Which statement about SDP creation in distributed service is correct?",
    "options": [
      "Ein SDP braucht keine Tunnelauswahl",
      "Ein SDP wird erstellt und dann an passenden Transport gebunden (z. B. Select LDP oder RSVP-LSP)",
      "SDP ersetzt immer VC-ID und Service-ID",
      "SDP wird nur bei lokalen Services genutzt"
    ],
    "options_en": [
      "An SDP needs no tunnel selection",
      "An SDP is created and then bound to matching transport (for example Select LDP or RSVP LSP)",
      "SDP always replaces VC ID and service ID",
      "SDP is used only for local services"
    ],
    "correctIndex": 1,
    "explanation": "Das SDP stellt den logischen Service-Transportpfad dar und braucht eine konkrete Tunnelbasis.",
    "explanation_en": "SDP represents the logical service transport path and needs a concrete tunnel base.",
    "extraInfo": "Die konkrete Auswahl haengt vom LDP/RSVP/GRE-Design ab.",
    "extraInfo_en": "The concrete selection depends on LDP/RSVP/GRE design.",
    "tip": "SDP ohne Transportbindung ist nur ein unvollstaendiges Objekt.",
    "tip_en": "SDP without transport binding is an incomplete object.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "SDP",
      "LDP",
      "RSVP-TE"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q6",
    "question": "Welche Pflichtangaben gehoeren zur Service-Erstellung im distributed Setup?",
    "question_en": "Which required elements belong to service creation in distributed setup?",
    "options": [
      "Nur ein Service-Name ohne Typ",
      "Service-Typ definieren, SAPs zuordnen sowie SDP/VC-ID-Informationen korrekt anbinden",
      "Nur Customer-ID reicht aus",
      "Nur P-Router QoS setzen"
    ],
    "options_en": [
      "Only a service name without type",
      "Define service type, add SAPs, and correctly bind SDP/VC-ID information",
      "Only customer ID is enough",
      "Only set QoS on P routers"
    ],
    "correctIndex": 1,
    "explanation": "Ohne saubere Service-Objekte (Typ, SAP, SDP/VC-Kontext) ist der End-to-End-Dienst nicht operational.",
    "explanation_en": "Without proper service objects (type, SAP, SDP/VC context), end-to-end service is not operational.",
    "extraInfo": "Die genaue CLI kann je Service-Typ variieren, die Logik bleibt gleich.",
    "extraInfo_en": "Exact CLI differs by service type, but the logic is the same.",
    "tip": "Service-Typ zuerst, dann Access und Transport sauber binden.",
    "tip_en": "Service type first, then bind access and transport cleanly.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "Service Type",
      "SAP",
      "SDP",
      "VC ID"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q7",
    "question": "Welche Aussage zur VC-ID in distributed Services ist korrekt?",
    "question_en": "Which statement about VC ID in distributed services is correct?",
    "options": [
      "Die VC-ID darf auf beiden Enden unterschiedlich sein, solange SAP gleich ist",
      "Die VC-ID muss auf beiden Service-Enden konsistent matchen (klassischer PWid/FEC128-Kontext)",
      "VC-ID ist nur bei lokalen Services relevant",
      "VC-ID wird ausschliesslich von P-Routern vergeben"
    ],
    "options_en": [
      "VC ID can differ on both ends as long as SAP is equal",
      "VC ID must match consistently on both service endpoints (classic PWid/FEC128 context)",
      "VC ID is relevant only for local services",
      "VC ID is assigned exclusively by P routers"
    ],
    "correctIndex": 1,
    "explanation": "Fuer den klassischen Martini/PWid-Fall ist VC-ID-Konsistenz eine zentrale Voraussetzung.",
    "explanation_en": "For classic Martini/PWid, VC-ID consistency is a core requirement.",
    "extraInfo": "Damit kann der PE das Label-Mapping dem richtigen far-end Service zuordnen.",
    "extraInfo_en": "This allows the PE to map label signaling to the correct far-end service.",
    "tip": "VC-ID-Mismatch = Service kommt nicht sauber hoch.",
    "tip_en": "VC-ID mismatch = service does not come up cleanly.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "VC ID",
      "Distributed Service",
      "Martini"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q8",
    "question": "Welche Reihenfolge passt am besten zum erfolgreichen Aufbau eines distributed Service?",
    "question_en": "Which sequence best matches successful bring-up of a distributed service?",
    "options": [
      "Service zuerst, danach irgendwann IGP und Tunnel",
      "IGP-Reachability -> Transport-Signaling/LSP -> SDP + Tunnelbindung -> Servicetyp + SAP -> SDP-Binding/VC-ID",
      "Nur CE-Konfiguration, Providerpfad ist optional",
      "Direkt tLDP ohne Underlay"
    ],
    "options_en": [
      "Service first, then sometime later IGP and tunnels",
      "IGP reachability -> transport signaling/LSP -> SDP + tunnel binding -> service type + SAP -> SDP binding/VC ID",
      "Only CE configuration, provider path is optional",
      "Direct tLDP without underlay"
    ],
    "correctIndex": 1,
    "explanation": "Der Aufbau folgt logisch von Underlay zu Transport zu Service-Binding.",
    "explanation_en": "Build-up follows the logical order from underlay to transport to service binding.",
    "extraInfo": "So vermeidest du Teilkonfigurationen ohne betriebsfaehigen Datenpfad.",
    "extraInfo_en": "This avoids partial config without an operational data path.",
    "tip": "Erreichbarkeit vor Serviceschicht.",
    "tip_en": "Reachability before service layer.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "Configuration Order",
      "Distributed Service"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q9",
    "question": "Welche Kombination zu tLDP/LDP-Defaults ist fuer den 7750-Kontext am treffendsten?",
    "question_en": "Which combination about tLDP/LDP defaults is most accurate in 7750 context?",
    "options": [
      "Auf SDP ist signaling standardmaessig tLDP, waehrend MPLS-SDP-LDP-Transport separat aktiviert wird",
      "tLDP ist global immer aktiv, auch wenn SDP-signaling off ist",
      "LDP ist auf MPLS-SDP immer aktiv und kann nicht deaktiviert werden",
      "tLDP funktioniert unabhaengig von jeder LDP-Basisfunktion"
    ],
    "options_en": [
      "On SDP, signaling is by default tLDP, while MPLS-SDP LDP transport is enabled separately",
      "tLDP is globally always active, even if SDP signaling is off",
      "LDP is always active on MPLS SDP and cannot be disabled",
      "tLDP works independently from any LDP base function"
    ],
    "correctIndex": 0,
    "explanation": "Nokia unterscheidet SDP-signaling (tLDP default im SDP-Kontext) und die separate Auswahl des Transportmechanismus (LDP/LSP).",
    "explanation_en": "Nokia separates SDP signaling (tLDP default in SDP context) from separate transport selection (LDP/LSP).",
    "extraInfo": "Praxisregel: Ohne tragfaehige Underlay/LDP-Basis kommt kein stabiler dynamischer Dienstpfad zustande.",
    "extraInfo_en": "Practical rule: without working underlay/LDP base, no stable dynamic service path comes up.",
    "tip": "Signaling-Ebene und Transport-Ebene getrennt lesen.",
    "tip_en": "Read signaling layer and transport layer separately.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "T-LDP",
      "LDP",
      "Defaults"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q10",
    "question": "Was bedeutet bei RSVP/MPLS-Path die Einstellung \"loose\" am ehesten?",
    "question_en": "In RSVP/MPLS path config, what does \"loose\" most likely mean?",
    "options": [
      "Jeder Hop muss direkt benachbart sein",
      "Zwischen zwei definierten Hops duerfen IGP-basierte Zwischenknoten genutzt werden",
      "Pfad darf nur ueber GRE laufen",
      "Loose bedeutet automatisch Secondary"
    ],
    "options_en": [
      "Each hop must be directly adjacent",
      "Between two defined hops, IGP-based intermediate nodes may be used",
      "Path can run only over GRE",
      "Loose automatically means secondary"
    ],
    "correctIndex": 1,
    "explanation": "Loose-Hops erlauben Zwischenrouter; strict-Hops erzwingen direkte Nachbarschaft zum naechsten Hop.",
    "explanation_en": "Loose hops allow intermediate routers; strict hops require direct adjacency to the next hop.",
    "extraInfo": "Damit kannst du Pfadsteuerung zwischen \"voll strikt\" und \"IGP-gestuetzt\" abstufen.",
    "extraInfo_en": "This lets you tune path control between fully strict and IGP-assisted behavior.",
    "tip": "Loose = flexibler Teilpfad, strict = direkter Link.",
    "tip_en": "Loose = flexible segment, strict = direct link.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "RSVP-TE",
      "Path",
      "Loose",
      "Strict"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q11",
    "question": "Welche Aussage zur Reihenfolge \"Path und LSP\" ist korrekt?",
    "question_en": "Which statement about \"path and LSP order\" is correct?",
    "options": [
      "Ein LSP-Path kann erst nach dem LSP angelegt werden",
      "Paths werden zuerst definiert und dann als primary/secondary an LSPs gebunden",
      "Primary/secondary gilt nur fuer SAPs, nicht fuer LSPs",
      "Ein Path darf nie von mehreren LSPs genutzt werden"
    ],
    "options_en": [
      "An LSP path can only be created after the LSP exists",
      "Paths are defined first and then bound as primary/secondary to LSPs",
      "Primary/secondary applies only to SAPs, not to LSPs",
      "A path can never be used by multiple LSPs"
    ],
    "correctIndex": 1,
    "explanation": "In der Praxis definierst du zuerst die Path-Objekte und referenzierst sie dann in der LSP-Konfiguration.",
    "explanation_en": "In practice, you define path objects first and then reference them in LSP configuration.",
    "extraInfo": "Ein Path kann mehrfach genutzt werden, solange Design und Ressourcen passen.",
    "extraInfo_en": "A path can be reused by multiple LSPs as long as design and resources fit.",
    "tip": "Path ist ein eigenes Objekt unter router mpls.",
    "tip_en": "Path is a separate object under router mpls.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "MPLS",
      "Path",
      "Primary",
      "Secondary"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q12",
    "question": "Welche Aussage zur SDP-Encapsulation-Default ist korrekt?",
    "question_en": "Which statement about SDP encapsulation default is correct?",
    "options": [
      "Wenn nicht explizit gesetzt, ist GRE der Default bei SDP-Erstellung",
      "MPLS ist immer der feste Default und kann nicht geaendert werden",
      "Default ist automatisch RSVP-TE",
      "Ein SDP hat keinen Encapsulation-Typ"
    ],
    "options_en": [
      "If not explicitly set, GRE is default when creating an SDP",
      "MPLS is always fixed default and cannot be changed",
      "Default is automatically RSVP-TE",
      "An SDP has no encapsulation type"
    ],
    "correctIndex": 0,
    "explanation": "In der Nokia-CLI wird ohne expliziten Typ bei SDP-Erstellung GRE als Standard genutzt.",
    "explanation_en": "In Nokia CLI, if no explicit type is specified at SDP creation, GRE is used by default.",
    "extraInfo": "MPLS wird dann genutzt, wenn du das SDP entsprechend als mpls definierst und Transportzuordnung setzt.",
    "extraInfo_en": "MPLS is used when you define the SDP as mpls and set transport association.",
    "tip": "Default merken: SDP zuerst oft GRE.",
    "tip_en": "Remember the default: SDP is often GRE first.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "SDP",
      "GRE",
      "Default"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q13",
    "question": "Wann entstehen VC-/Service-Labels im distributed Servicebetrieb typischerweise?",
    "question_en": "When do VC/service labels typically come up in distributed service operation?",
    "options": [
      "Sofort beim Erstellen des SDP, auch ohne Service-Binding",
      "Wenn der konkrete Service an das SDP gebunden wird (bei aktivem Signaling)",
      "Erst wenn ein P-Router neu startet",
      "Nur bei local services auf einem einzelnen PE"
    ],
    "options_en": [
      "Immediately when SDP is created, even without service binding",
      "When the specific service is bound to the SDP (with signaling active)",
      "Only after a P router restarts",
      "Only for local services on a single PE"
    ],
    "correctIndex": 1,
    "explanation": "Das Label-Signaling ist dienstbezogen; das reine SDP-Objekt allein macht den Service noch nicht vollstaendig aktiv.",
    "explanation_en": "Label signaling is service-specific; SDP object alone does not make service fully active.",
    "extraInfo": "Ohne Binding gibt es keinen eindeutigen Servicekontext fuer die VC-Label-Signalisierung.",
    "extraInfo_en": "Without binding, there is no clear service context for VC-label signaling.",
    "tip": "Erst Binding, dann belastbarer Servicezustand.",
    "tip_en": "Binding first, then reliable service state.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "VC Label",
      "SDP Binding",
      "Distributed Service"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q14",
    "question": "Welche Aussage zur SDP-Option far-end im MPLS-SDP-Kontext ist korrekt?",
    "question_en": "Which statement about the SDP far-end option in MPLS SDP context is correct?",
    "options": [
      "far-end identifiziert typischerweise den Remote-PE bzw. tLDP-Peer (System-IP)",
      "far-end ist nur ein lokaler SAP-Name",
      "far-end ersetzt die VC-ID im spoke-sdp",
      "far-end wird nur bei local services gesetzt"
    ],
    "options_en": [
      "far-end typically identifies the remote PE or tLDP peer (system IP)",
      "far-end is only a local SAP name",
      "far-end replaces VC ID in spoke-sdp",
      "far-end is set only for local services"
    ],
    "correctIndex": 0,
    "explanation": "Im distributed Service-Kontext zeigt far-end auf den entfernten PE-Endpunkt, nicht auf einen lokalen Serviceparameter.",
    "explanation_en": "In distributed service context, far-end points to the remote PE endpoint, not a local service parameter.",
    "extraInfo": "Im Kursmodell ist das zugleich die relevante Peer-Zieladresse fuer tLDP-basierte Service-Signalisierung.",
    "extraInfo_en": "In the course model, this is also the relevant peer destination address for tLDP-based service signaling.",
    "tip": "far-end = wohin der SDP den Remote-PE adressiert.",
    "tip_en": "far-end = where the SDP targets the remote PE.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "SDP",
      "far-end",
      "T-LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q15",
    "question": "Wann nutzt man bei einem MPLS-SDP typischerweise die Option lsp <name>?",
    "question_en": "When do you typically use the option lsp <name> on an MPLS SDP?",
    "options": [
      "Wenn zuvor ein passender RSVP-TE LSP konfiguriert wurde, an den das SDP gebunden werden soll",
      "Nur bei GRE-SDPs",
      "Nur um die Customer-ID zu setzen",
      "Ausschliesslich bei Mesh-SDP-Bindings in VPRN"
    ],
    "options_en": [
      "When a matching RSVP-TE LSP has been configured beforehand and the SDP should bind to it",
      "Only for GRE SDPs",
      "Only to set the customer ID",
      "Exclusively for mesh SDP bindings in VPRN"
    ],
    "correctIndex": 0,
    "explanation": "Die lsp-Referenz verknuepft das SDP mit einem konkret definierten RSVP-TE-Transportpfad.",
    "explanation_en": "The lsp reference ties the SDP to a specifically defined RSVP-TE transport path.",
    "extraInfo": "Bei LDP-basiertem Transport erfolgt die Pfadnutzung ueber LDP/IGP-Logik statt ueber benannten RSVP-LSP.",
    "extraInfo_en": "With LDP-based transport, path use follows LDP/IGP logic instead of a named RSVP LSP.",
    "tip": "Benannter LSP im SDP = typischerweise RSVP-TE-Design.",
    "tip_en": "Named LSP in SDP = typically RSVP-TE design.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "SDP",
      "RSVP-TE",
      "LSP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q16",
    "question": "Welche Kombination passt richtig zusammen?",
    "question_en": "Which combination matches correctly?",
    "options": [
      "LDP LSP = TE-Path mit strict/loose-Hopliste als Pflicht; RSVP-TE = nur IGP-shortest path",
      "RSVP-TE LSP = explizite/engineering-orientierte LSP-Steuerung; LDP LSP = IGP-basierter Label-Transport; GRE = IP-Tunnel ohne MPLS-Transportlabel im Core",
      "GRE = MPLS-LSP mit TE-Labels",
      "LDP LSP = nur statisch hop-by-hop ohne Signaling"
    ],
    "options_en": [
      "LDP LSP = TE path with strict/loose hop list as mandatory; RSVP-TE = only IGP shortest path",
      "RSVP-TE LSP = explicit/engineering-oriented LSP control; LDP LSP = IGP-based label transport; GRE = IP tunnel without MPLS transport label in the core",
      "GRE = MPLS LSP with TE labels",
      "LDP LSP = only static hop-by-hop without signaling"
    ],
    "correctIndex": 1,
    "explanation": "Das ist die typische Abgrenzung der drei Transportoptionen im SP-Design.",
    "explanation_en": "That is the typical distinction of the three transport options in SP design.",
    "extraInfo": "GRE kann trotzdem Service-/VC-Labels fuer Demultiplexing tragen, aber nicht als MPLS-Transportlabel im Core hop-by-hop.",
    "extraInfo_en": "GRE can still carry service/VC labels for demultiplexing, but not as hop-by-hop MPLS transport labels in the core.",
    "tip": "RSVP = Pfadsteuerung, LDP = IGP-following, GRE = IP-Tunnel.",
    "tip_en": "RSVP = path control, LDP = IGP-following, GRE = IP tunnel.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "LDP",
      "RSVP-TE",
      "GRE",
      "Comparison"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q17",
    "question": "Welche Aussage zu MPLS-LSPs ist korrekt?",
    "question_en": "Which statement about MPLS LSPs is correct?",
    "options": [
      "MPLS-LSPs koennen nur dynamisch signalisiert werden",
      "MPLS-LSPs koennen dynamisch signalisiert (z. B. LDP/RSVP) oder statisch hop-by-hop konfiguriert werden (je Design/Plattform)",
      "MPLS-LSPs sind identisch mit SAPs",
      "MPLS-LSPs werden nur auf CE-Routern konfiguriert"
    ],
    "options_en": [
      "MPLS LSPs can only be signaled dynamically",
      "MPLS LSPs can be signaled dynamically (for example LDP/RSVP) or configured statically hop-by-hop (depending on design/platform)",
      "MPLS LSPs are identical to SAPs",
      "MPLS LSPs are configured only on CE routers"
    ],
    "correctIndex": 1,
    "explanation": "Im Kurskontext ist wichtig: es gibt sowohl dynamische als auch statische LSP-Modelle.",
    "explanation_en": "In this course context, the key point is that both dynamic and static LSP models exist.",
    "extraInfo": "Dynamisch ist im Providerbetrieb haeufiger, statisch wird fuer Spezialfaelle genutzt.",
    "extraInfo_en": "Dynamic is more common in provider operations, static is used for special cases.",
    "tip": "LSP nicht auf \"nur dynamisch\" verengen.",
    "tip_en": "Do not reduce LSPs to \"dynamic only\".",
    "tags": [
      "Telecommunication",
      "Section 4",
      "MPLS",
      "LSP",
      "Static",
      "Dynamic"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q18",
    "question": "Welche Bedingung gilt fuer tLDP-basiertes Service-Signaling ueber ein SDP Ende-zu-Ende?",
    "question_en": "Which condition applies to tLDP-based service signaling over an SDP end-to-end?",
    "options": [
      "tLDP muss nur am Ingress-PE aktiv sein",
      "Der Signaling-Kontext (tLDP/Service-Signaling) muss auf beiden PE-Enden kompatibel/aktiv sein",
      "Nur die P-Router muessen tLDP sprechen",
      "tLDP wird durch GRE automatisch ersetzt"
    ],
    "options_en": [
      "tLDP must be active only on the ingress PE",
      "The signaling context (tLDP/service signaling) must be compatible/active on both PE endpoints",
      "Only P routers must speak tLDP",
      "tLDP is automatically replaced by GRE"
    ],
    "correctIndex": 1,
    "explanation": "Service-Signaling ist eine Ende-zu-Ende-PE-Funktion; beide Seiten muessen dieselbe Signalisierungslogik bedienen.",
    "explanation_en": "Service signaling is an end-to-end PE function; both sides must support the same signaling logic.",
    "extraInfo": "Sonst kommt kein konsistenter Service-/VC-Label-Austausch zustande.",
    "extraInfo_en": "Otherwise no consistent service/VC label exchange can occur.",
    "tip": "PE-zu-PE Signaling braucht zwei passende Enden.",
    "tip_en": "PE-to-PE signaling needs two matching endpoints.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "T-LDP",
      "PE",
      "Signaling"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q19",
    "question": "Welche Aussage zu SDP-Binding-Typen ist korrekt?",
    "question_en": "Which statement about SDP binding types is correct?",
    "options": [
      "Mesh-Bindings werden typischerweise fuer VPLS genutzt; Spoke-SDPs fuer PW-/Punkt-zu-Punkt-artige Bindings",
      "Mesh-Bindings sind nur fuer IES erlaubt",
      "Spoke und Mesh bedeuten nur ingress/egress QoS-Richtung",
      "Mesh-Bindings ersetzen VC-IDs"
    ],
    "options_en": [
      "Mesh bindings are typically used for VPLS; spoke SDPs for PW/point-to-point-like bindings",
      "Mesh bindings are allowed only for IES",
      "Spoke and mesh only mean ingress/egress QoS direction",
      "Mesh bindings replace VC IDs"
    ],
    "correctIndex": 0,
    "explanation": "Im Kurskontext ist Mesh an VPLS gebunden; Spoke-SDPs sind der typische PW-/Epipe-Baustein.",
    "explanation_en": "In course context, mesh is tied to VPLS; spoke SDPs are the typical PW/Epipe building block.",
    "extraInfo": "Das hilft stark bei der schnellen Einordnung von Service-Konfigurationen.",
    "extraInfo_en": "This helps a lot when quickly classifying service configurations.",
    "tip": "VPLS denkt multipoint -> mesh.",
    "tip_en": "VPLS thinks multipoint -> mesh.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "SDP Binding",
      "Spoke",
      "Mesh",
      "VPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q20",
    "question": "Was spezifiziert das Format spoke-sdp <sdp-id>:<vc-id> am treffendsten?",
    "question_en": "What does the format spoke-sdp <sdp-id>:<vc-id> specify most accurately?",
    "options": [
      "Nur die Customer-ID und den SAP-Namen",
      "Das zu nutzende SDP (Transportweg) und die VC-ID (Service-/PW-Kontext) fuer die tLDP-signalisierte Pseudowire-Bindung",
      "Nur einen RSVP-Path ohne Servicebezug",
      "Ein Mesh-Binding fuer VPRN"
    ],
    "options_en": [
      "Only the customer ID and SAP name",
      "The SDP to use (transport path) and the VC ID (service/PW context) for the tLDP-signaled pseudowire binding",
      "Only an RSVP path without service context",
      "A mesh binding for VPRN"
    ],
    "correctIndex": 1,
    "explanation": "Das Format verknuepft Transportebene (SDP) und Serviceebene (VC-ID) fuer den PW-Kontext.",
    "explanation_en": "The format links transport layer (SDP) and service layer (VC ID) for the PW context.",
    "extraInfo": "Genau diese Trennung ist der Kern der Service-auf-Transport-Abbildung im Providerdesign.",
    "extraInfo_en": "This separation is exactly the core of mapping service onto transport in provider design.",
    "tip": "Links vom Doppelpunkt = Weg, rechts = Servicekontext.",
    "tip_en": "Left of colon = path, right = service context.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "Spoke-SDP",
      "VC ID",
      "Pseudowire",
      "T-LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q21",
    "question": "Welche Aussage hilft am besten gegen Verwechslung zwischen LDP-LSP, RSVP-TE-LSP und GRE?",
    "question_en": "Which statement best helps avoid confusion between LDP LSP, RSVP-TE LSP, and GRE?",
    "options": [
      "Alle drei sind dasselbe und nur anders benannt",
      "LDP-LSP und RSVP-TE-LSP sind MPLS-Transportpfade (unterschiedliche Control-Plane-Logik), GRE ist ein IP-Tunneltransport; SDP bindet Services auf eine dieser Methoden",
      "GRE ist nur eine andere Schreibweise fuer tLDP",
      "RSVP-TE wird nur fuer SAP-Encapsulation genutzt"
    ],
    "options_en": [
      "All three are the same and only named differently",
      "LDP LSP and RSVP-TE LSP are MPLS transport paths (different control-plane logic), GRE is IP tunnel transport; SDP binds services onto one of these methods",
      "GRE is just another name for tLDP",
      "RSVP-TE is used only for SAP encapsulation"
    ],
    "correctIndex": 1,
    "explanation": "Der Schluessel ist die Ebenentrennung: Transportmethode vs Service-Binding ueber SDP.",
    "explanation_en": "The key is layer separation: transport method vs service binding via SDP.",
    "extraInfo": "Wenn du zuerst fragst \"Welche Transportmethode?\" und dann \"Welcher Service darauf?\", wird die Konfiguration viel klarer.",
    "extraInfo_en": "If you first ask \"Which transport method?\" and then \"Which service on top?\", configuration becomes much clearer.",
    "tip": "Erst Transportart waehlen, dann Service darauf mappen.",
    "tip_en": "Choose transport first, then map service onto it.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "LDP",
      "RSVP-TE",
      "GRE",
      "SDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q22",
    "question": "Welche Zuordnung der Signifikanzbereiche ist korrekt?",
    "question_en": "Which mapping of significance scopes is correct?",
    "options": [
      "SAP-ID global, SDP-ID global, VC-ID global, Service-ID lokal, Customer-ID lokal",
      "SAP-ID lokal, SDP-ID lokal, VC-ID ptp-/PW-Kontext, Service-ID global, Customer-ID global",
      "SAP-ID ptp, SDP-ID global, VC-ID lokal, Service-ID global, Customer-ID lokal",
      "Alle IDs sind immer global im gesamten Providernetz"
    ],
    "options_en": [
      "SAP ID global, SDP ID global, VC ID global, Service ID local, Customer ID local",
      "SAP ID local, SDP ID local, VC ID ptp/PW context, Service ID global, Customer ID global",
      "SAP ID ptp, SDP ID global, VC ID local, Service ID global, Customer ID local",
      "All IDs are always global across the entire provider network"
    ],
    "correctIndex": 1,
    "explanation": "Das ist die praktische Merktabelle fuer Service-Komponenten im 7750-Kontext.",
    "explanation_en": "This is the practical memory table for service components in 7750 context.",
    "extraInfo": "VC-ID ist im klassischen PWid-Kontext Ende-zu-Ende abzustimmen, aber nicht als globale Netz-ID zu verstehen.",
    "extraInfo_en": "VC ID must be aligned end-to-end in classic PWid context, but it is not a global network-wide ID.",
    "tip": "SAP/SDP lokal, Service/Customer global, VC zwischen den PW-Enden.",
    "tip_en": "SAP/SDP local, Service/Customer global, VC between PW endpoints.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "ID Scope",
      "SAP",
      "SDP",
      "VC ID",
      "Service ID",
      "Customer ID"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-sec4-q23",
    "question": "Welche Aussage verbindet tLDP, VPWS und VPLS korrekt?",
    "question_en": "Which statement correctly connects tLDP, VPWS, and VPLS?",
    "options": [
      "tLDP-Sessions werden typischerweise fuer VPWS und VPLS genutzt; VPWS ist P2P-Pseudowire, VPLS ist eine logische Gruppe von Pseudowires mit MAC-Learning",
      "tLDP wird nur fuer VPRN genutzt; VPWS und VPLS brauchen kein Label-Signaling",
      "VPLS ist nur ein einzelner P2P-Pseudowire ohne MAC-Learning",
      "VPWS ist multipoint und braucht Mesh-Bindings wie VPLS"
    ],
    "options_en": [
      "tLDP sessions are typically used for VPWS and VPLS; VPWS is a P2P pseudowire, VPLS is a logical group of pseudowires with MAC learning",
      "tLDP is used only for VPRN; VPWS and VPLS need no label signaling",
      "VPLS is only a single P2P pseudowire without MAC learning",
      "VPWS is multipoint and requires mesh bindings like VPLS"
    ],
    "correctIndex": 0,
    "explanation": "Das kombiniert Protokollzuordnung (tLDP) mit dem Strukturunterschied zwischen VPWS und VPLS.",
    "explanation_en": "This combines protocol mapping (tLDP) with the structural difference between VPWS and VPLS.",
    "extraInfo": "VPLS lernt MACs und arbeitet multipoint, VPWS bildet eine P2P-Leitung/PW ab.",
    "extraInfo_en": "VPLS learns MACs and operates multipoint, while VPWS models a P2P line/pseudowire.",
    "tip": "VPWS = P2P, VPLS = multipoint mit MAC-Learning.",
    "tip_en": "VPWS = P2P, VPLS = multipoint with MAC learning.",
    "tags": [
      "Telecommunication",
      "Section 4",
      "tLDP",
      "VPWS",
      "VPLS",
      "Pseudowire",
      "MAC Learning"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "telco-m2s1-q1",
    "question": "Wozu dient SAP-Encapsulation bei epipe/VPWS am ehesten?",
    "question_en": "What is SAP encapsulation mainly used for in epipe/VPWS?",
    "options": [
      "Zur CPU-Lastmessung im P-Router",
      "Zur Service-Abgrenzung (delineation), also zur Zuordnung von Frames zu einem Service",
      "Zum Aufbau von IGP-Neighbor-Adressen",
      "Zum Ersetzen der Customer-ID"
    ],
    "options_en": [
      "To measure CPU load on P routers",
      "For service delineation, i.e. mapping frames to a service",
      "To build IGP neighbor addresses",
      "To replace the customer ID"
    ],
    "correctIndex": 1,
    "explanation": "Die SAP-Encapsulation legt fest, anhand welcher Ethernet-Tag-Logik Frames einem Service zugeordnet werden.",
    "explanation_en": "SAP encapsulation defines which Ethernet tag logic is used to map frames to a service.",
    "extraInfo": "Im epipe-Kontext ist das der Schluessel fuer saubere Trennung mehrerer Dienste auf demselben Port.",
    "extraInfo_en": "In epipe context, this is the key to cleanly separating multiple services on the same port.",
    "tip": "Encapsulation = Service-Abgrenzung auf dem Access-Port.",
    "tip_en": "Encapsulation = service delineation on the access port.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "SAP",
      "Encapsulation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q2",
    "question": "Wann ist eine Null-Encapsulation auf einem Ethernet-SAP typisch?",
    "question_en": "When is null encapsulation on an Ethernet SAP typically used?",
    "options": [
      "Wenn mehrere VLAN-basierte Services denselben Port teilen sollen",
      "Wenn ein einzelner CE/Service den Access-Port nutzt und keine VLAN-Tags zur Service-Abgrenzung verwendet werden",
      "Nur fuer RSVP-TE-Tunnel",
      "Nur fuer VPLS-Mesh-Bindings"
    ],
    "options_en": [
      "When multiple VLAN-based services should share the same port",
      "When a single CE/service uses the access port and no VLAN tags are used for service delineation",
      "Only for RSVP-TE tunnels",
      "Only for VPLS mesh bindings"
    ],
    "correctIndex": 1,
    "explanation": "Null-Encapsulation ist der klassische Single-Service-Fall auf einem Ethernet-Access-Port.",
    "explanation_en": "Null encapsulation is the classic single-service case on an Ethernet access port.",
    "extraInfo": "Dabei werden VLAN-Tags nicht als Netz-Service-Delimiter genutzt, sondern als Kundendaten behandelt.",
    "extraInfo_en": "In that case, VLAN tags are not used as network service delimiters but treated as customer data.",
    "tip": "Null = kein VLAN-basierter Service-Delimiter.",
    "tip_en": "Null = no VLAN-based service delimiter.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Null Encapsulation",
      "SAP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q3",
    "question": "Welche Aussage zu Dot1Q-Encapsulation ist korrekt?",
    "question_en": "Which statement about Dot1Q encapsulation is correct?",
    "options": [
      "Dot1Q nutzt zwei VLAN-Tags zur Service-Abgrenzung",
      "Dot1Q nutzt ein einzelnes Q-Tag (12-Bit VLAN-ID-Feld) als Service-Delimiter",
      "Dot1Q ist nur fuer untagged Frames",
      "Dot1Q kann keine mehreren SAPs auf einem Port ermoeglichen"
    ],
    "options_en": [
      "Dot1Q uses two VLAN tags for service delineation",
      "Dot1Q uses a single Q-tag (12-bit VLAN ID field) as service delimiter",
      "Dot1Q is only for untagged frames",
      "Dot1Q cannot enable multiple SAPs on one port"
    ],
    "correctIndex": 1,
    "explanation": "Dot1Q arbeitet mit einem VLAN-Tag und erlaubt dadurch mehrere logisch getrennte SAPs pro Port.",
    "explanation_en": "Dot1Q uses one VLAN tag and therefore allows multiple logically separated SAPs per port.",
    "extraInfo": "Das VLAN-ID-Feld ist 12 Bit breit; daraus ergeben sich die bekannten Sonderwerte und reservierten Werte.",
    "extraInfo_en": "The VLAN ID field is 12 bits wide; this leads to the known special values and reserved values.",
    "tip": "Dot1Q = 1 Tag, QinQ = 2 Tags.",
    "tip_en": "Dot1Q = 1 tag, QinQ = 2 tags.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Dot1Q",
      "SAP Encapsulation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q4",
    "question": "Welche Aussage zu VLAN-ID 0 und 4095 im Dot1Q-Kontext passt am besten?",
    "question_en": "Which statement about VLAN ID 0 and 4095 in Dot1Q context fits best?",
    "options": [
      "VLAN 0 ist reserviert und 4095 ist normales Kunden-VLAN",
      "VLAN 0 ist Sonderfall (Priority-Tagged/802.1p-Kontext), VLAN 4095 ist reserviert",
      "Beide sind normale Customer-VLANs ohne Besonderheit",
      "VLAN 4095 wird als Default-SAP-ID genutzt"
    ],
    "options_en": [
      "VLAN 0 is reserved and 4095 is a normal customer VLAN",
      "VLAN 0 is a special case (priority-tagged/802.1p context), VLAN 4095 is reserved",
      "Both are normal customer VLANs without special behavior",
      "VLAN 4095 is used as default SAP ID"
    ],
    "correctIndex": 1,
    "explanation": "Im Kurskontext ist VLAN 0 der Priority-Tag-Sonderfall, waehrend 4095 als reserviert gilt.",
    "explanation_en": "In course context, VLAN 0 is the priority-tag special case, while 4095 is considered reserved.",
    "extraInfo": "Pruefungsfalle: 12 Bit bedeuten viele Werte, aber nicht alle sind normale Service-VLANs.",
    "extraInfo_en": "Exam trap: 12 bits mean many values, but not all of them are normal service VLANs.",
    "tip": "VLAN 0 = special, 4095 = reserved.",
    "tip_en": "VLAN 0 = special, 4095 = reserved.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Dot1Q",
      "VLAN 0",
      "802.1p"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q5",
    "question": "Was beschreibt QinQ bei SAP-Encapsulation am treffendsten?",
    "question_en": "What best describes QinQ in SAP encapsulation?",
    "options": [
      "Ein untagged Null-Service ohne VLAN-Felder",
      "Zwei Q-Tags (outer/inner) zur Service-Abgrenzung und/oder Kunden-Tag-Transport je nach Design",
      "Ein MPLS-Transportlabel im Access-Port",
      "Nur eine QoS-Policy ohne Einfluss auf Service-Abgrenzung"
    ],
    "options_en": [
      "An untagged null service without VLAN fields",
      "Two Q-tags (outer/inner) for service delineation and/or customer-tag transport depending on design",
      "An MPLS transport label on the access port",
      "Only a QoS policy with no impact on service delineation"
    ],
    "correctIndex": 1,
    "explanation": "QinQ nutzt zwei VLAN-Tags. Je nach Konfiguration kann das innere Tag erhalten/transparenter transportiert werden.",
    "explanation_en": "QinQ uses two VLAN tags. Depending on configuration, the inner tag may be preserved/transported transparently.",
    "extraInfo": "Oft wird outer als Provider-Tag und inner als Customer-Tag interpretiert.",
    "extraInfo_en": "Often the outer tag is treated as provider tag and the inner tag as customer tag.",
    "tip": "QinQ = zwei Ebenen, oft Provider + Customer.",
    "tip_en": "QinQ = two layers, often provider + customer.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "QinQ",
      "SAP Encapsulation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q6",
    "question": "Wie viele Service-Delimiting-Tags werden typischerweise genutzt bei Null, Dot1Q und QinQ?",
    "question_en": "How many service-delineating tags are typically used for null, Dot1Q, and QinQ?",
    "options": [
      "Null=1, Dot1Q=2, QinQ=3",
      "Null=0, Dot1Q=1, QinQ=2",
      "Null=0, Dot1Q=2, QinQ=1",
      "Alle drei nutzen immer 2 Tags"
    ],
    "options_en": [
      "Null=1, Dot1Q=2, QinQ=3",
      "Null=0, Dot1Q=1, QinQ=2",
      "Null=0, Dot1Q=2, QinQ=1",
      "All three always use 2 tags"
    ],
    "correctIndex": 1,
    "explanation": "Das ist die einfachste Merktabelle fuer Service-Abgrenzung per Ethernet-Tagging im epipe-Kontext.",
    "explanation_en": "This is the simplest memory table for Ethernet-tag-based service delineation in epipe context.",
    "extraInfo": "Bei Null ist der Service-Delimiter logisch \"kein VLAN-Tag\".",
    "extraInfo_en": "With null, the service delimiter is logically \"no VLAN tag\".",
    "tip": "Null 0, Dot1Q 1, QinQ 2.",
    "tip_en": "Null 0, Dot1Q 1, QinQ 2.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Null",
      "Dot1Q",
      "QinQ"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q7",
    "question": "Wie verhaelt sich ein Null-SAP typischerweise gegenueber VLAN-Tags im eingehenden Kundentraffic?",
    "question_en": "How does a null SAP typically behave toward VLAN tags in incoming customer traffic?",
    "options": [
      "VLAN-Tags werden als Service-Delimiter genutzt und entfernt",
      "VLAN-Tags werden als Kundendaten behandelt (netzseitig nicht zur Service-Abgrenzung genutzt)",
      "Frames mit VLAN-Tags werden immer verworfen",
      "Es wird automatisch in QinQ umgewandelt"
    ],
    "options_en": [
      "VLAN tags are used as service delimiters and stripped",
      "VLAN tags are treated as customer data (not used network-side for service delineation)",
      "Frames with VLAN tags are always dropped",
      "They are automatically converted into QinQ"
    ],
    "correctIndex": 1,
    "explanation": "Beim Null-SAP erfolgt die Service-Abgrenzung nicht ueber VLAN-Tags, daher bleiben sie aus Servicesicht Kundendaten.",
    "explanation_en": "With null SAP, service delineation does not use VLAN tags, so from the service perspective they remain customer data.",
    "extraInfo": "Kursnah gilt Null als Standard auf Ethernet-Ports, solange kein VLAN-basiertes Delimiting konfiguriert wird.",
    "extraInfo_en": "In course context, null is the default on Ethernet ports unless VLAN-based delineation is configured.",
    "tip": "Null-SAP schaut nicht auf VLAN-Tags fuer die Servicewahl.",
    "tip_en": "Null SAP does not use VLAN tags for service selection.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Null SAP",
      "VLAN"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q8",
    "question": "Was passiert typischerweise bei Dot1Q-SAP-Encapsulation am SAP-Ingress mit dem service-delimiting VLAN-Tag?",
    "question_en": "What typically happens to the service-delimiting VLAN tag at SAP ingress with Dot1Q SAP encapsulation?",
    "options": [
      "Es bleibt immer erhalten und wird nie angeruehrt",
      "Es wird zur Service-Zuordnung genutzt und dann vor dem Ingress in den Service gestripped",
      "Es wird in ein MPLS-Transportlabel umgewandelt",
      "Es wird zur Customer-ID umcodiert"
    ],
    "options_en": [
      "It is always preserved and never touched",
      "It is used for service mapping and then stripped before ingress into the service",
      "It is converted into an MPLS transport label",
      "It is recoded into customer ID"
    ],
    "correctIndex": 1,
    "explanation": "Service-delimiting VLAN-Tags werden am SAP-Ingress fuer die Zuordnung ausgewertet und danach entfernt.",
    "explanation_en": "Service-delineating VLAN tags are evaluated at SAP ingress for mapping and then removed.",
    "extraInfo": "Bei regulaeren Dot1Q/QinQ-SAPs werden Delimiting-Tags am SAP-Ingress ausgewertet und gestripped; Default-QinQ-SAPs (z. B. 0.*, *.null, *.*) sind eine wichtige Ausnahme.",
    "extraInfo_en": "For regular Dot1Q/QinQ SAPs, delineating tags are evaluated and stripped at SAP ingress; default QinQ SAPs (for example 0.*, *.null, *.*) are an important exception.",
    "tip": "Tag dient der Servicewahl und wird dann gestripped.",
    "tip_en": "Tag selects the service and is then stripped.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Dot1Q",
      "SAP Ingress",
      "Tag Stripping"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q9",
    "question": "Welche Aussage zu QinQ-Matching am SAP ist korrekt?",
    "question_en": "Which statement about QinQ matching at the SAP is correct?",
    "options": [
      "Bei QinQ reicht ein passender innerer Tag immer aus",
      "Bei QinQ werden nur Frames mit passendem outer und inner Tag dem Service zugeordnet",
      "QinQ akzeptiert automatisch alle VLAN-Kombinationen",
      "QinQ kann keine logische Tag-Signifikanz haben"
    ],
    "options_en": [
      "With QinQ, a matching inner tag is always enough",
      "With QinQ, only frames with matching outer and inner tags are mapped to the service",
      "QinQ automatically accepts all VLAN combinations",
      "QinQ cannot have logical tag significance"
    ],
    "correctIndex": 1,
    "explanation": "Bei qinq-SAP-Encapsulation erfolgt die Service-Abgrenzung anhand des definierten Tag-Paars.",
    "explanation_en": "With QinQ SAP encapsulation, service delineation uses the configured tag pair.",
    "extraInfo": "Outer/inner koennen je nach Design Provider-/Customer-Rolle tragen.",
    "extraInfo_en": "Outer/inner may carry provider/customer role depending on design.",
    "tip": "QinQ braucht das passende Duo.",
    "tip_en": "QinQ needs the matching pair.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "QinQ",
      "Matching"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q10",
    "question": "Welche Aussage zu VLAN-Tags bei Dot1Q/QinQ-SAPs ist im Kurskontext korrekt?",
    "question_en": "Which statement about VLAN tags on Dot1Q/QinQ SAPs is correct in course context?",
    "options": [
      "Sie haben nur physische, aber keine logische Signifikanz",
      "Sie haben logische Signifikanz fuer Service-Delimiting",
      "Sie werden ausschliesslich fuer QoS genutzt",
      "Sie ersetzen SAP-IDs"
    ],
    "options_en": [
      "They have only physical but no logical significance",
      "They have logical significance for service delineation",
      "They are used exclusively for QoS",
      "They replace SAP IDs"
    ],
    "correctIndex": 1,
    "explanation": "Dot1Q/QinQ-Tags sind Teil der logischen Service-Abgrenzung am SAP.",
    "explanation_en": "Dot1Q/QinQ tags are part of logical service delineation at the SAP.",
    "extraInfo": "Deshalb ist die exakte Tag-Konfiguration fuer SAP-Matching entscheidend.",
    "extraInfo_en": "That is why exact tag configuration is crucial for SAP matching.",
    "tip": "Tags sind hier Logik, nicht nur Deko.",
    "tip_en": "Tags are logic here, not decoration.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Dot1Q",
      "QinQ",
      "Service Delimiting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q11",
    "question": "Was beschreibt der spezielle SAP-Wert 1/1/1:* im Kurskontext am besten?",
    "question_en": "What best describes the special SAP value 1/1/1:* in course context?",
    "options": [
      "Nur untagged Frames sind erlaubt, alle tagged Frames werden verworfen",
      "Alle untagged Frames und alle noch nicht anderweitig belegten single-tag Frames werden akzeptiert; VLAN-Tags bleiben transparent erhalten",
      "Es ist ein RSVP-TE-Pfadname",
      "Es ist identisch mit Null-SAP 1/1/1:0"
    ],
    "options_en": [
      "Only untagged frames are accepted, all tagged frames are dropped",
      "All untagged frames and all not-yet-allocated single-tag frames are accepted; VLAN tags remain transparently preserved",
      "It is an RSVP-TE path name",
      "It is identical to null SAP 1/1/1:0"
    ],
    "correctIndex": 1,
    "explanation": "Wildcard-SAPs dienen als Sammel-/Default-Muster fuer noch nicht spezifisch zugeordnete VLANs und koennen tags transparent behandeln.",
    "explanation_en": "Wildcard SAPs act as a catch-all/default pattern for not-yet-specifically-assigned VLANs and can preserve tags transparently.",
    "extraInfo": "Kursnah: Diese VLAN-Tags werden dann nicht als Service-Delimiter gestripped.",
    "extraInfo_en": "In course context, these VLAN tags are then not stripped as service delimiters.",
    "tip": "Stern = Catch-all fuer freie Tag-Werte auf dem Port.",
    "tip_en": "Star = catch-all for free tag values on the port.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Wildcard SAP",
      "Dot1Q"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q12",
    "question": "Welche Aussage zu 1/1/1:0 (Null-SAP) ist korrekt?",
    "question_en": "Which statement about 1/1/1:0 (null SAP) is correct?",
    "options": [
      "Er akzeptiert nur QinQ-Frames",
      "Er erhaelt typischerweise untagged Frames sowie Frames mit VLAN-ID 0",
      "Er ist nur fuer VPLS mesh-sdp erlaubt",
      "Er ersetzt den default SAP auf dem Port"
    ],
    "options_en": [
      "It accepts only QinQ frames",
      "It typically receives untagged frames and frames with VLAN ID 0",
      "It is allowed only for VPLS mesh-sdp",
      "It replaces the default SAP on the port"
    ],
    "correctIndex": 1,
    "explanation": "Der Null-SAP mit :0 deckt im Kurskontext untagged und VLAN-0-Frames ab.",
    "explanation_en": "In course context, null SAP with :0 covers untagged and VLAN-0 frames.",
    "extraInfo": "VLAN 0 bleibt der Priority-Tag-Sonderfall und ist nicht einfach ein normales Service-VLAN.",
    "extraInfo_en": "VLAN 0 remains the priority-tag special case and is not just a normal service VLAN.",
    "tip": "Null SAP :0 = untagged + VLAN0.",
    "tip_en": "Null SAP :0 = untagged + VLAN0.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Null SAP",
      "VLAN 0"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q13",
    "question": "Welche Aussage zu Null-SAPs und Default-SAPs auf einem Port ist korrekt?",
    "question_en": "Which statement about null SAPs and default SAPs on a port is correct?",
    "options": [
      "Sie sind auf demselben Port typischerweise gleichzeitig erlaubt und empfohlen",
      "Sie sind auf einem Port gegenseitig ausschliessend (mutually exclusive)",
      "Nur in GRE-Netzen sind sie exklusiv",
      "Die Regel gilt nur fuer VPRN, nicht fuer epipe"
    ],
    "options_en": [
      "They are typically allowed and recommended together on the same port",
      "They are mutually exclusive on a port",
      "They are exclusive only in GRE networks",
      "This rule applies only to VPRN, not to epipe"
    ],
    "correctIndex": 1,
    "explanation": "Im Kurskontext sind Null-SAP und Default-SAP auf demselben Port nicht gleichzeitig nutzbar.",
    "explanation_en": "In course context, null SAP and default SAP cannot be used simultaneously on the same port.",
    "extraInfo": "Das verhindert ueberschneidende Catch-all-/Null-Logik auf demselben Access-Port.",
    "extraInfo_en": "This prevents overlapping catch-all/null logic on the same access port.",
    "tip": "Null + Default auf einem Port = nein.",
    "tip_en": "Null + default on one port = no.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "epipe",
      "Null SAP",
      "Default SAP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q14",
    "question": "Welche Zuordnung der QinQ-SAP-Notation ist korrekt?",
    "question_en": "Which mapping of QinQ SAP notation is correct?",
    "options": [
      "Bei port:qtag1.qtag2 ist qtag1 der outer (top) Tag und qtag2 der inner (bottom) Tag",
      "Bei port:qtag1.qtag2 ist qtag1 immer der inner Tag und qtag2 der outer Tag",
      "Die Reihenfolge outer/inner ist zufaellig und nur vom CE abhaengig",
      "QinQ SAPs kennen keine getrennten outer/inner Tags"
    ],
    "options_en": [
      "In port:qtag1.qtag2, qtag1 is the outer (top) tag and qtag2 is the inner (bottom) tag",
      "In port:qtag1.qtag2, qtag1 is always the inner tag and qtag2 the outer tag",
      "The outer/inner order is random and depends only on the CE",
      "QinQ SAPs do not distinguish outer and inner tags"
    ],
    "correctIndex": 0,
    "explanation": "Im Nokia-QinQ-SAP-Format ist qtag1 der outer/top Tag und qtag2 der inner/bottom Tag.",
    "explanation_en": "In Nokia QinQ SAP format, qtag1 is the outer/top tag and qtag2 is the inner/bottom tag.",
    "extraInfo": "Die Verwechslung passiert oft, weil man die CLI-Schreibweise mit der Frame-Darstellung durcheinanderbringt.",
    "extraInfo_en": "This is often confused when CLI notation is mixed up with frame visualization.",
    "tip": "Merke: links = outer, rechts = inner.",
    "tip_en": "Remember: left = outer, right = inner.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "SAP Notation",
      "Outer/Inner"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q15",
    "question": "Was beschreibt ein spezieller QinQ-SAP port:x.* im Kurskontext am besten?",
    "question_en": "What best describes a special QinQ SAP port:x.* in course context?",
    "options": [
      "Er akzeptiert nur Frames mit inner Tag x",
      "Er akzeptiert Frames mit outer Tag x (unabhaengig vom inner Tag bzw. auch ohne inner Tag); der outer Delimiting-Tag wird ausgewertet und das innere Tag kann transparent bleiben",
      "Er ist identisch mit port:x.0",
      "Er ist nur fuer VPRN erlaubt"
    ],
    "options_en": [
      "It accepts only frames with inner tag x",
      "It accepts frames with outer tag x (regardless of inner tag, or no inner tag); the outer delimiting tag is evaluated and the inner tag can remain transparent",
      "It is identical to port:x.0",
      "It is allowed only for VPRN"
    ],
    "correctIndex": 1,
    "explanation": "x.* ist ein QinQ-Sonder-/Defaultmuster mit festem outer Tag und flexiblem inner Tag-Verhalten.",
    "explanation_en": "x.* is a QinQ special/default pattern with fixed outer tag and flexible inner-tag behavior.",
    "extraInfo": "Kursnah wird das oft als \"outer strip, inner transparent\" beschrieben; genaue Egress/Lookup-Details sind softwarestandabhaengig.",
    "extraInfo_en": "In course context this is often described as \"outer strip, inner transparent\"; exact egress/lookup details depend on software release.",
    "tip": "x.* = outer fest, inner flexibel.",
    "tip_en": "x.* = outer fixed, inner flexible.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Special SAP",
      "x.*"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q16",
    "question": "Welche Aussage zu einem QinQ-SAP port:0.* ist korrekt?",
    "question_en": "Which statement about a QinQ SAP port:0.* is correct?",
    "options": [
      "Er nimmt typischerweise untagged Frames und Frames mit outer VLAN-ID 0 an",
      "Er akzeptiert nur doppelt getaggte Frames mit inner Tag 0",
      "Er ist identisch mit port:*.*",
      "Er kann nicht auf 7750 genutzt werden"
    ],
    "options_en": [
      "It typically accepts untagged frames and frames with outer VLAN ID 0",
      "It accepts only double-tagged frames with inner tag 0",
      "It is identical to port:*.*",
      "It cannot be used on 7750"
    ],
    "correctIndex": 0,
    "explanation": "0.* ist der Null-SAP-Sonderfall fuer untagged bzw. outer-tag=0-Frames im QinQ-Kontext.",
    "explanation_en": "0.* is the null-SAP special case for untagged or outer-tag=0 frames in QinQ context.",
    "extraInfo": "In Nokia-Doku sind Default-QinQ-SAPs wie 0.* als spezielle SAP-Typen beschrieben (versions-/featureabhaengig aktivierbar).",
    "extraInfo_en": "In Nokia documentation, default QinQ SAPs like 0.* are described as special SAP types (enabled depending on version/feature settings).",
    "tip": "0.* = untagged und/oder outer 0.",
    "tip_en": "0.* = untagged and/or outer 0.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Special SAP",
      "0.*"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q17",
    "question": "Welche Aussage zu einem QinQ-SAP port:x.0 ist korrekt?",
    "question_en": "Which statement about a QinQ SAP port:x.0 is correct?",
    "options": [
      "Er matcht outer Tag x und inner Tag 0 oder keinen inner Tag (kursnah beschrieben)",
      "Er matcht jeden outer Tag solange inner Tag x ist",
      "Er ist ein reiner GRE-Tunnelparameter",
      "Er ersetzt einen qinq regular SAP x.y vollstaendig"
    ],
    "options_en": [
      "It matches outer tag x and inner tag 0 or no inner tag (course-style description)",
      "It matches any outer tag as long as inner tag is x",
      "It is a pure GRE tunnel parameter",
      "It completely replaces a regular qinq SAP x.y"
    ],
    "correctIndex": 0,
    "explanation": "x.0 ist ein spezieller QinQ-SAP-Typ mit festem outer Tag x und Null-/No-inner-Tag-Fall.",
    "explanation_en": "x.0 is a special QinQ SAP type with fixed outer tag x and null/no-inner-tag case.",
    "extraInfo": "In neueren Nokia-Dokus ist das Lookup-Verhalten zu x.0 explizit beschrieben und priorisiert.",
    "extraInfo_en": "In newer Nokia docs, lookup behavior for x.0 is explicitly described and prioritized.",
    "tip": "x.0 = outer fest, inner 0/kein inner.",
    "tip_en": "x.0 = outer fixed, inner 0/no inner.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Special SAP",
      "x.0"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q18",
    "question": "Welche Aussage zu port:*.* auf dem 7750 ist am genauesten?",
    "question_en": "Which statement about port:*.* on the 7750 is most accurate?",
    "options": [
      "port:*.* ist auf dem 7750 grundsaetzlich immer unmoeglich",
      "port:*.* ist als spezieller/default bzw. capture-QinQ-SAP software-/featureabhaengig verfuegbar (nicht pauschal immer aktiv)",
      "port:*.* ist nur fuer CE-Router gedacht",
      "port:*.* ist identisch mit port:0.*"
    ],
    "options_en": [
      "port:*.* is fundamentally always impossible on the 7750",
      "port:*.* is available as a special/default or capture QinQ SAP depending on software/feature settings (not always active by default)",
      "port:*.* is intended only for CE routers",
      "port:*.* is identical to port:0.*"
    ],
    "correctIndex": 1,
    "explanation": "Die Nokia-Doku beschreibt *.* fuer 7750 als speziellen/capture/default-QinQ-SAP-Kontext, oft mit Zusatzfeature/Lookup-Optionen.",
    "explanation_en": "Nokia documentation describes *.* on 7750 in special/capture/default QinQ SAP context, often with extra feature/lookup options.",
    "extraInfo": "Wenn dein Kurs sagt \"nicht moeglich\", ist das oft eine Versions-, Release- oder Feature-Enable-Einschraenkung.",
    "extraInfo_en": "If your course says \"not possible\", that is often a version, release, or feature-enable limitation.",
    "tip": "Bei *.* immer an Release/Feature-Stand denken.",
    "tip_en": "For *.*, always think about release/feature state.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Special SAP",
      "*.*",
      "7750"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q19",
    "question": "Welche Aussage zum Tag-Stripping bei QinQ-Sonder-SAPs ist korrekt?",
    "question_en": "Which statement about tag stripping on QinQ special SAPs is correct?",
    "options": [
      "Bei allen QinQ-SAPs werden immer alle Tags gestripped",
      "Bei regulaeren QinQ-Delimiting-SAPs werden Service-Tags ausgewertet/gestripped; bei bestimmten Default-QinQ-SAPs (z. B. 0.*, *.null, *.*) kann transparentes Tag-Handling gelten",
      "Tag-Stripping gibt es nur bei MPLS, nie bei Ethernet-SAPs",
      "Nur der inner Tag wird bei jedem QinQ-SAP garantiert gestripped"
    ],
    "options_en": [
      "On all QinQ SAPs, all tags are always stripped",
      "On regular QinQ delineating SAPs, service tags are evaluated/stripped; on certain default QinQ SAPs (for example 0.*, *.null, *.*), transparent tag handling may apply",
      "Tag stripping exists only in MPLS, never on Ethernet SAPs",
      "Only the inner tag is guaranteed to be stripped on every QinQ SAP"
    ],
    "correctIndex": 1,
    "explanation": "Das ist die wichtige Ausnahme-Regel: Default-QinQ-SAPs koennen Tag-Transparenz statt klassischem Delimiting-Strip nutzen.",
    "explanation_en": "This is the key exception rule: default QinQ SAPs may use tag transparency instead of classic delineation stripping.",
    "extraInfo": "Deshalb muss man bei QinQ immer unterscheiden zwischen regulaeren x.y-SAPs und speziellen/default SAPs.",
    "extraInfo_en": "Therefore, with QinQ you must distinguish between regular x.y SAPs and special/default SAPs.",
    "tip": "Nicht \"QinQ = immer strip\" merken.",
    "tip_en": "Do not memorize \"QinQ = always strip\".",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Tag Stripping",
      "Default SAP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q20",
    "question": "Wofuer steht der Ethertype/TPID-Wert 0x8100 im VLAN-Kontext?",
    "question_en": "What does the Ethertype/TPID value 0x8100 represent in VLAN context?",
    "options": [
      "Er kennzeichnet typischerweise einen 802.1Q-VLAN-Tag (TPID)",
      "Er ist die Standard-VC-ID fuer Pseudowires",
      "Er ist ein RSVP-TE-Protokolltyp",
      "Er ist die feste Customer-ID im 7750"
    ],
    "options_en": [
      "It typically identifies an 802.1Q VLAN tag (TPID)",
      "It is the default VC ID for pseudowires",
      "It is an RSVP-TE protocol type",
      "It is the fixed customer ID in the 7750"
    ],
    "correctIndex": 0,
    "explanation": "0x8100 ist der klassische TPID/Ethertype-Wert zur Kennzeichnung von 802.1Q-getaggten Frames.",
    "explanation_en": "0x8100 is the classic TPID/Ethertype value used to identify 802.1Q-tagged frames.",
    "extraInfo": "Im QinQ-Kontext kann der TPID fuer Tag-Erkennung je nach Port-/Plattform-Konfiguration angepasst werden.",
    "extraInfo_en": "In QinQ context, TPID used for tag recognition can be adjusted depending on port/platform configuration.",
    "tip": "0x8100 = VLAN-Tag-Erkennung merken.",
    "tip_en": "Remember 0x8100 = VLAN tag identification.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "Ethertype",
      "TPID",
      "802.1Q"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q21",
    "question": "Welche Aussage zu unterschiedlichen TPID/Ethertype-Werten fuer inner/outer QinQ-Tags ist korrekt?",
    "question_en": "Which statement about different TPID/Ethertype values for inner/outer QinQ tags is correct?",
    "options": [
      "Inner und outer muessen immer zwingend denselben TPID haben",
      "Je nach Plattform/Port-Kontext koennen unterschiedliche erwartete Ethertype/TPID-Werte fuer Dot1Q (inner) und QinQ (outer) konfiguriert werden",
      "TPID-Werte koennen nur auf CE-Switches geaendert werden, nie auf Provider-Routern",
      "Wenn TPID abweicht, wird das Paket immer garantiert gedroppt und nie anders klassifiziert"
    ],
    "options_en": [
      "Inner and outer must always have exactly the same TPID",
      "Depending on platform/port context, different expected Ethertype/TPID values can be configured for Dot1Q (inner) and QinQ (outer)",
      "TPID values can be changed only on CE switches, never on provider routers",
      "If TPID differs, the packet is always guaranteed to be dropped and never classified differently"
    ],
    "correctIndex": 1,
    "explanation": "Nokia-Ports/PW-Ports kennen konfigurierbare TPID/Ethertype-Werte (z. B. dot1q-etype, qinq-etype) fuer Tag-Erkennung.",
    "explanation_en": "Nokia ports/PW-ports support configurable TPID/Ethertype values (for example dot1q-etype, qinq-etype) for tag recognition.",
    "extraInfo": "Abweichende TPID-Werte fuehren je nach Konfiguration dazu, dass Frames nicht als erwartete getaggte Frames erkannt werden (kursnah oft als \"untagged/non-matching\" vereinfacht).",
    "extraInfo_en": "Depending on configuration, differing TPID values may cause frames not to be recognized as the expected tagged frames (often simplified in course context as \"untagged/non-matching\").",
    "tip": "TPID-Fehler = oft Klassifizierungsproblem, nicht nur \"Kabel kaputt\".",
    "tip_en": "TPID mismatch = often a classification problem, not just a cable issue.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "TPID",
      "Ethertype",
      "dot1q-etype",
      "qinq-etype"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q22",
    "question": "Ein Frame trifft an einem QinQ-SAP `port:0.*` mit outer VLAN 0 und inner VLAN 10 ein. Was ist im Kurskontext die typische Wirkung am SAP-Ingress?",
    "question_en": "A frame arrives on a QinQ SAP `port:0.*` with outer VLAN 0 and inner VLAN 10. What is the typical SAP-ingress effect in course context?",
    "options": [
      "Beide Tags werden immer gestripped und der Frame wird komplett untagged weitergegeben",
      "Der outer Delimiting-Tag (0) wird fuer die Zuordnung genutzt und gestripped; der innere Tag (10) kann transparent erhalten bleiben",
      "Der Frame wird verworfen, weil der innere Tag nicht 0 ist",
      "Der Frame wird automatisch in einen GRE-Tunnel umgewandelt"
    ],
    "options_en": [
      "Both tags are always stripped and the frame is forwarded completely untagged",
      "The outer delimiting tag (0) is used for matching and stripped; the inner tag (10) may remain transparently preserved",
      "The frame is dropped because the inner tag is not 0",
      "The frame is automatically converted into a GRE tunnel packet"
    ],
    "correctIndex": 1,
    "explanation": "Bei speziellen QinQ-Default/Null-SAP-Faellen wie 0.* wird kursnah oft beschrieben: outer Delimiting-Tag auswerten, inneres Tag transparent weitertragen.",
    "explanation_en": "For special QinQ default/null SAP cases like 0.*, course material often describes it as: evaluate the outer delimiting tag, carry the inner tag transparently.",
    "extraInfo": "Wichtig: Das ist eine Sonderfall-Logik. Bei regulaeren qinq-SAPs x.y werden die Service-Delimiting-Tags typischerweise gestripped.",
    "extraInfo_en": "Important: this is special-case behavior. With regular qinq SAPs x.y, service-delineating tags are typically stripped.",
    "tip": "Bei 0.* nicht pauschal \"beide Tags weg\" merken.",
    "tip_en": "Do not memorize \"both tags removed\" for 0.*.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "Special SAP",
      "0.*",
      "Tag Stripping",
      "Scenario"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q23",
    "question": "Wann wird ein ankommender VLAN-Tag am SAP als service-delimiting Tag behandelt?",
    "question_en": "When is an incoming VLAN tag treated as a service-delineating tag at the SAP?",
    "options": [
      "Immer, sobald irgendein VLAN-Tag vorhanden ist",
      "Nur wenn das Tag-Muster zur konfigurierten SAP-Encapsulation auf diesem Port passt",
      "Nur wenn MPLS im Core aktiv ist",
      "Nur bei RSVP-TE, nicht bei LDP/GRE-Transport"
    ],
    "options_en": [
      "Always, as soon as any VLAN tag is present",
      "Only when the tag pattern matches the configured SAP encapsulation on that port",
      "Only when MPLS is enabled in the core",
      "Only with RSVP-TE, not with LDP/GRE transport"
    ],
    "correctIndex": 1,
    "explanation": "Ein VLAN-Tag wird nur dann als Service-Delimiter verwendet, wenn er zur SAP-Encapsulation (z. B. null, dot1q, qinq und deren Muster) passt.",
    "explanation_en": "A VLAN tag is used as a service delimiter only when it matches the SAP encapsulation (for example null, dot1q, qinq and their patterns).",
    "extraInfo": "Nicht jedes getaggte Frame bedeutet automatisch \"dieser Tag delimitiert den Service\".",
    "extraInfo_en": "Not every tagged frame automatically means \"this tag delineates the service\".",
    "tip": "Erst Match, dann Delimiting.",
    "tip_en": "Match first, then delineation.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "SAP Encapsulation",
      "Service Delimiting",
      "Matching"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q24",
    "question": "Ein getaggter Frame kommt mit einem anderen TPID/Ethertype als erwartet an (z. B. nicht der konfigurierte VLAN-Tag-Wert). Welche Aussage ist kursnah am treffendsten?",
    "question_en": "A tagged frame arrives with a different TPID/Ethertype than expected (for example not the configured VLAN tag value). Which statement is the best course-style approximation?",
    "options": [
      "Er wird immer sofort physisch verworfen, ohne weitere Klassifizierung",
      "Er kann als untagged oder non-matching behandelt werden, weil der Tag nicht als erwarteter VLAN-Tag erkannt wird",
      "Der Router ersetzt den TPID automatisch durch 0x8100",
      "Das betrifft nur den inneren QinQ-Tag, nie den outer Tag"
    ],
    "options_en": [
      "It is always immediately dropped at physical layer without further classification",
      "It may be treated as untagged or non-matching because the tag is not recognized as the expected VLAN tag",
      "The router automatically replaces the TPID with 0x8100",
      "This affects only the inner QinQ tag, never the outer tag"
    ],
    "correctIndex": 1,
    "explanation": "Wenn der TPID/Ethertype nicht zum erwarteten Wert passt, wird der Frame oft nicht als passendes getaggtes Frame erkannt; im Kurs wird das haeufig als \"untagged/non-matching\" vereinfacht.",
    "explanation_en": "If the TPID/Ethertype does not match the expected value, the frame is often not recognized as the expected tagged frame; course material often simplifies this as \"untagged/non-matching\".",
    "extraInfo": "Die genaue Reaktion haengt von Plattform, Port-Kontext und Konfiguration ab. Wichtig fuer die Pruefung ist das Klassifizierungs-/Matching-Problem.",
    "extraInfo_en": "The exact behavior depends on platform, port context, and configuration. For exams, the key point is the classification/matching problem.",
    "tip": "TPID-Mismatch = meist Erkennungsproblem.",
    "tip_en": "TPID mismatch = usually a recognition problem.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "QinQ",
      "TPID",
      "Ethertype",
      "Matching",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q25",
    "question": "Ein aelterer Switch nutzt fuer einen VLAN-Tag einen anderen TPID als erwartet. Welche Massnahme ist auf Provider-Seite am sinnvollsten, wenn der 7750 das unterstuetzt?",
    "question_en": "An older switch uses a different TPID for a VLAN tag than expected. Which action is most appropriate on the provider side if the 7750 supports it?",
    "options": [
      "Immer auf GRE wechseln, weil Ethernet-SAPs damit nicht umgehen koennen",
      "Die erwarteten TPID/Ethertype-Werte (z. B. fuer outer/inner Tag) im relevanten Port-/SAP-Kontext passend konfigurieren",
      "Die VC-ID verdoppeln, damit das Tag trotzdem erkannt wird",
      "Nur die Customer-ID aendern"
    ],
    "options_en": [
      "Always switch to GRE because Ethernet SAPs cannot handle this",
      "Configure the expected TPID/Ethertype values (for example for outer/inner tag) in the relevant port/SAP context",
      "Double the VC ID so the tag is still recognized",
      "Change only the customer ID"
    ],
    "correctIndex": 1,
    "explanation": "Wenn unterschiedliche TPIDs im Netz vorkommen, ist die passende TPID/Ethertype-Konfiguration (z. B. dot1q-etype/qinq-etype je nach Kontext) die richtige Stellschraube.",
    "explanation_en": "When different TPIDs exist in the network, the correct lever is matching TPID/Ethertype configuration (for example dot1q-etype/qinq-etype depending on context).",
    "extraInfo": "Das ist ein typischer Interop-Fall mit aelteren Switches oder Provider-/Customer-Tag-Konventionen.",
    "extraInfo_en": "This is a typical interoperability case with older switches or provider/customer tag conventions.",
    "tip": "Nicht Tunneltyp aendern, erst Tag-Erkennung korrekt einstellen.",
    "tip_en": "Do not change tunnel type first; fix tag recognition first.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "TPID",
      "Ethertype",
      "Interoperability",
      "QinQ",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q26",
    "question": "Welche MTU-Bereiche muss man im MPLS-Servicekontext typischerweise zusammen betrachten?",
    "question_en": "Which MTU domains typically need to be considered together in an MPLS service context?",
    "options": [
      "Nur Service-MTU und Customer-ID",
      "SAP/Access-Port-MTU, Service-MTU, SDP Path MTU und Network-Port-MTU",
      "Nur VC-ID und SDP-ID",
      "Nur IP-MTU am CE und die GRE-Key-Laenge"
    ],
    "options_en": [
      "Only service MTU and customer ID",
      "SAP/access-port MTU, service MTU, SDP path MTU, and network-port MTU",
      "Only VC ID and SDP ID",
      "Only CE IP MTU and GRE key length"
    ],
    "correctIndex": 1,
    "explanation": "Bei Ethernet/MPLS-Services muss die komplette MTU-Kette passen: Access/SAP, Service, SDP-Pfad und Network-Port.",
    "explanation_en": "For Ethernet/MPLS services, the full MTU chain must fit: access/SAP, service, SDP path, and network port.",
    "extraInfo": "Ein Fehler in nur einem Glied kann zu Drops oder unerwuenschten Fragmentierungsproblemen fuehren.",
    "extraInfo_en": "A mismatch in just one element can cause drops or unwanted fragmentation issues.",
    "tip": "MTU immer end-to-end als Kette denken.",
    "tip_en": "Think of MTU as an end-to-end chain.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "MPLS",
      "Service Design"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q27",
    "question": "Welche Aussage zu oversized Traffic ist im Kurskontext am treffendsten?",
    "question_en": "Which statement about oversized traffic is most accurate in course context?",
    "options": [
      "Layer-2 oversized Frames werden typischerweise gedroppt; Layer-3 Fragmentierung kann passieren (wenn erlaubt), ist aber teuer und unerwuenscht",
      "Layer-2 oversized Frames werden immer fragmentiert wie IP-Pakete",
      "Layer-3 oversized Pakete werden immer ohne Ausnahme verworfen",
      "Oversized betrifft nur GRE, nicht MPLS oder Ethernet"
    ],
    "options_en": [
      "Layer-2 oversized frames are typically dropped; Layer-3 fragmentation may occur (if allowed), but is costly and undesirable",
      "Layer-2 oversized frames are always fragmented like IP packets",
      "Layer-3 oversized packets are always dropped without exception",
      "Oversized issues affect only GRE, not MPLS or Ethernet"
    ],
    "correctIndex": 0,
    "explanation": "Auf Layer 2 gibt es keine normale Fragmentierung wie bei IP. Auf Layer 3 kann Fragmentierung auftreten, wird aber in Provider-Designs moeglichst vermieden.",
    "explanation_en": "At Layer 2, there is no normal fragmentation like IP. At Layer 3, fragmentation can occur, but provider designs try to avoid it.",
    "extraInfo": "Praktisch wird oft mit korrekter MTU-Planung und PMTUD gearbeitet, statt Fragmentierung zu akzeptieren.",
    "extraInfo_en": "In practice, proper MTU planning and PMTUD are often used instead of accepting fragmentation.",
    "tip": "L2 droppt eher, L3 fragmentiert ggf. (aber ungern).",
    "tip_en": "L2 tends to drop, L3 may fragment (but preferably not).",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Layer 2",
      "Layer 3",
      "Fragmentation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q28",
    "question": "Welche Zuordnung der typischen SAP-MTU-Defaults (kursnah) ist korrekt?",
    "question_en": "Which mapping of typical SAP MTU defaults (course-style) is correct?",
    "options": [
      "null 1514, dot1q 1518, qinq 1522",
      "null 1500, dot1q 1514, qinq 1518",
      "null 1518, dot1q 1522, qinq 1526",
      "Alle drei sind standardmaessig 1514"
    ],
    "options_en": [
      "null 1514, dot1q 1518, qinq 1522",
      "null 1500, dot1q 1514, qinq 1518",
      "null 1518, dot1q 1522, qinq 1526",
      "All three are 1514 by default"
    ],
    "correctIndex": 0,
    "explanation": "Ausgehend von null=1514 kommen pro VLAN-Tag typischerweise 4 Bytes hinzu: dot1q +4, qinq +8.",
    "explanation_en": "Starting from null=1514, each VLAN tag typically adds 4 bytes: dot1q +4, qinq +8.",
    "extraInfo": "Diese Werte sind kursnah/default-orientiert und muessen immer mit dem konkreten Plattform-/Port-Kontext abgeglichen werden.",
    "extraInfo_en": "These values are course-style/default-oriented and should always be checked against actual platform/port context.",
    "tip": "Jedes VLAN-Tag = +4 Bytes merken.",
    "tip_en": "Remember: each VLAN tag = +4 bytes.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SAP MTU",
      "Dot1Q",
      "QinQ"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q29",
    "question": "Was bedeutet ?VLAN-Tags sind service-delimiting? am SAP praktisch?",
    "question_en": "What does ?VLAN tags are service-delineating? mean in practice at the SAP?",
    "options": [
      "Die Tags werden nur fuer QoS ausgewertet und bleiben immer im Service erhalten",
      "Die Tags werden benutzt, um den richtigen Service/SAP zuzuordnen; danach werden diese Delimiting-Tags typischerweise am SAP-Ingress entfernt",
      "Die Tags werden in MPLS-Service-Labels umgewandelt und im Core weitergeswapt",
      "Die Tags ersetzen VC-ID und Service-ID"
    ],
    "options_en": [
      "The tags are used only for QoS and always remain in the service frame",
      "The tags are used to map to the correct service/SAP; afterward these delineating tags are typically removed at SAP ingress",
      "The tags are converted into MPLS service labels and swapped in the core",
      "The tags replace VC ID and service ID"
    ],
    "correctIndex": 1,
    "explanation": "Service-delimiting Tags sind Zugangs-/Zuordnungsinformation am SAP. Sie dienen der Auswahl des Services und sind bei regulaeren Dot1Q/QinQ-SAPs danach typischerweise nicht mehr Teil des Service-Frames.",
    "explanation_en": "Service-delineating tags are access/mapping information at the SAP. They select the service and, on regular Dot1Q/QinQ SAPs, are then typically no longer part of the service frame.",
    "extraInfo": "Genau deshalb kann ein scheinbar ?groesseres? CE-Frame nach dem SAP wieder zur Service-MTU passen, wenn die Delimiting-Tags gestripped werden.",
    "extraInfo_en": "This is exactly why a seemingly ?larger? CE frame may still fit the service MTU after SAP processing when the delineating tags are stripped.",
    "tip": "Delimiting-Tag = Auswahl-Tag, nicht automatisch Nutzlast-Tag.",
    "tip_en": "Delineating tag = selection tag, not automatically payload tag.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "SAP Encapsulation",
      "Service Delimiting",
      "MTU"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q30",
    "question": "Welche Aussage beschreibt die Service-MTU bei einem Ethernet Layer-2 Service am besten?",
    "question_en": "Which statement best describes service MTU for an Ethernet Layer-2 service?",
    "options": [
      "Sie ist nur die VC-ID-Groesse in Bytes",
      "Sie beschreibt die maximal uebertragbare Kundendaten-Frame-Groesse im Servicekontext (kursnah oft 1514 als 1500 Payload + 14 Ethernet Header)",
      "Sie ist identisch mit der Customer-ID",
      "Sie gilt nur fuer GRE-SDPs, nicht fuer MPLS"
    ],
    "options_en": [
      "It is only the VC ID size in bytes",
      "It describes the maximum transferable customer frame size in service context (course-style often 1514 as 1500 payload + 14 Ethernet header)",
      "It is identical to the customer ID",
      "It applies only to GRE SDPs, not MPLS"
    ],
    "correctIndex": 1,
    "explanation": "Im Kurskontext wird fuer Ethernet-VPN-Services oft mit 1514 gerechnet (1500 + 14 Byte Ethernet Header, ohne FCS).",
    "explanation_en": "In course context, Ethernet VPN services are often calculated with 1514 (1500 + 14-byte Ethernet header, without FCS).",
    "extraInfo": "Je nach Plattform/Serviceoptionen koennen MTU-Definitionen Details unterscheiden; fuer die Pruefung ist die Kursdefinition entscheidend.",
    "extraInfo_en": "Depending on platform/service options, MTU definitions may vary in details; for exams, the course definition is what matters.",
    "tip": "Service-MTU = was der Service als Frame transportieren darf.",
    "tip_en": "Service MTU = what frame size the service can carry.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Service MTU",
      "Ethernet VPN"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q31",
    "question": "Welche MTU-Beziehung ist fuer einen funktionierenden Ethernet-Service notwendig?",
    "question_en": "Which MTU relationship is required for a working Ethernet service?",
    "options": [
      "SAP MTU muss kleiner als Service MTU sein",
      "SAP MTU muss groesser oder gleich Service MTU sein",
      "Service MTU muss immer groesser als SDP Path MTU sein",
      "Nur die MTU am CE ist relevant"
    ],
    "options_en": [
      "SAP MTU must be smaller than service MTU",
      "SAP MTU must be greater than or equal to service MTU",
      "Service MTU must always be greater than SDP path MTU",
      "Only the MTU at the CE matters"
    ],
    "correctIndex": 1,
    "explanation": "Der SAP darf den Service-Frame nicht vorher abschneiden/droppen; daher muss die SAP-MTU mindestens so gross wie die Service-MTU sein.",
    "explanation_en": "The SAP must not cut off/drop the service frame first; therefore SAP MTU must be at least as large as service MTU.",
    "extraInfo": "Zusatzregel in der Kette: auch SDP Path MTU und Network-Port-MTU muessen danach noch ausreichen.",
    "extraInfo_en": "Additional chain rule: SDP path MTU and network-port MTU must also still be large enough.",
    "tip": "SAP >= Service.",
    "tip_en": "SAP >= Service.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SAP MTU",
      "Service MTU"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q32",
    "question": "Warum kann bei einem Layer-2 Service mit `port:*` (Tag transparent, nicht service-delimiting) eine Erhoehung der Service-MTU noetig sein?",
    "question_en": "Why may a Layer-2 service with `port:*` (tag transparent, not service-delineating) require a higher service MTU?",
    "options": [
      "Weil `port:*` automatisch zwei MPLS-Labels hinzufuegt",
      "Weil das VLAN-Tag als Teil des transportierten Service-Frames erhalten bleibt und damit die Groesse z. B. von 1514 auf 1518 steigen kann",
      "Weil `port:*` nur mit GRE funktioniert",
      "Weil dadurch die Customer-ID verdoppelt wird"
    ],
    "options_en": [
      "Because `port:*` automatically adds two MPLS labels",
      "Because the VLAN tag remains part of the transported service frame and can increase size, for example from 1514 to 1518",
      "Because `port:*` works only with GRE",
      "Because it doubles the customer ID"
    ],
    "correctIndex": 1,
    "explanation": "Wenn das VLAN-Tag nicht nur der Servicezuordnung dient, sondern transparent mittransportiert wird, steigt die effektive Service-Frame-Groesse.",
    "explanation_en": "If the VLAN tag is not only for service selection but is transported transparently, the effective service frame size increases.",
    "extraInfo": "Dann reicht die Default-Service-MTU 1514 oft nicht mehr und muss (inkl. nachgelagerter MTU-Kette) angepasst werden.",
    "extraInfo_en": "Then the default service MTU 1514 is often no longer enough and must be adjusted (including the downstream MTU chain).",
    "tip": "Transparente Tags zaehlen zur Service-Groesse.",
    "tip_en": "Transparent tags count toward service frame size.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Service MTU",
      "port:*",
      "Wildcard SAP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q33",
    "question": "Wenn du die Service-MTU wegen transparent mitgesendeter VLAN-Tags erhoehst, welche Folge ist im MPLS-Servicepfad typischerweise ebenfalls zu pruefen/anzupassen?",
    "question_en": "If you increase service MTU because VLAN tags are carried transparently, what else in the MPLS service path typically must also be checked/adjusted?",
    "options": [
      "Nur die Customer-ID",
      "SDP Path MTU (und indirekt/ggf. Network-Port-MTU)",
      "Nur die VC-ID auf einer Seite",
      "Nur die Spracheinstellung der Quiz-App"
    ],
    "options_en": [
      "Only the customer ID",
      "SDP path MTU (and indirectly/possibly network-port MTU)",
      "Only the VC ID on one side",
      "Only the quiz app language setting"
    ],
    "correctIndex": 1,
    "explanation": "Eine groessere Service-Frame-Groesse muss auch noch durch den SDP-Pfad (inkl. Overhead) passen.",
    "explanation_en": "A larger service frame size must still fit through the SDP path (including overhead).",
    "extraInfo": "In der Praxis fuehrt eine Service-MTU-Erhoehung oft zu einer MTU-Pruefung der kompletten Transportkette.",
    "extraInfo_en": "In practice, increasing service MTU often triggers an MTU review of the full transport chain.",
    "tip": "Service-MTU nie isoliert aendern.",
    "tip_en": "Never change service MTU in isolation.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Service MTU",
      "SDP Path MTU",
      "MPLS"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q34",
    "question": "Welche Beschreibung des SDP Path MTU ist im Kurskontext korrekt?",
    "question_en": "Which description of SDP path MTU is correct in course context?",
    "options": [
      "Es ist die maximale MTU, die ueber ein SDP transportiert werden kann; kursnah abgeleitet aus Network-Port-MTU minus Layer-2-Header und MPLS-Overhead",
      "Es ist immer identisch mit der Service-ID",
      "Es gilt nur fuer GRE und nicht fuer MPLS-SDPs",
      "Es wird ausschliesslich vom CE bestimmt"
    ],
    "options_en": [
      "It is the maximum MTU that can be carried over an SDP; course-style derived from network-port MTU minus Layer-2 header and MPLS overhead",
      "It is always identical to the service ID",
      "It applies only to GRE and not MPLS SDPs",
      "It is determined exclusively by the CE"
    ],
    "correctIndex": 0,
    "explanation": "Der SDP Path MTU beschreibt die maximal transportierbare Groesse ueber den SDP-Pfad unter Beruecksichtigung des Transport-Overheads.",
    "explanation_en": "SDP path MTU describes the maximum size transportable across the SDP path while accounting for transport overhead.",
    "extraInfo": "Die genaue Overhead-Hoehe kann je nach Anzahl Labels/Link-Layer variieren; der Kurs arbeitet hier mit einer Planungsformel.",
    "extraInfo_en": "Exact overhead depends on label count/link layer; the course uses a planning formula here.",
    "tip": "SDP Path MTU = Transportbudget nach Overhead.",
    "tip_en": "SDP path MTU = transport budget after overhead.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SDP Path MTU",
      "MPLS Overhead"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q35",
    "question": "Welche Aussage zu SDP Path MTU Konfiguration und Abgleich ist korrekt?",
    "question_en": "Which statement about SDP path MTU configuration and alignment is correct?",
    "options": [
      "SDP Path MTU muss auf beiden Seiten immer exakt gleich sein, sonst kann kein Service laufen",
      "SDP Path MTU muss mindestens so gross wie die Service-MTU sein; sie muss nicht zwingend auf beiden Seiten exakt matchen",
      "SDP Path MTU ist immer groesser als Network-Port-MTU",
      "SDP Path MTU kann nicht geaendert werden, wenn die Network-Port-MTU schon gesetzt ist"
    ],
    "options_en": [
      "SDP path MTU must always be exactly equal on both sides or no service can run",
      "SDP path MTU must be at least as large as service MTU; it does not have to match exactly on both sides",
      "SDP path MTU is always larger than network-port MTU",
      "SDP path MTU cannot be changed once network-port MTU is set"
    ],
    "correctIndex": 1,
    "explanation": "Entscheidend ist, dass der SDP-Pfad die Service-Frame-Groesse traegt. Ein exakter beidseitiger Gleichstand des Werts ist nicht immer erforderlich.",
    "explanation_en": "What matters is that the SDP path can carry the service frame size. An exact equal value on both sides is not always required.",
    "extraInfo": "Kursnah: Aendere die Network-Port-MTU oder den SDP-MTU-Wert passend, aber pruefe immer die gesamte MTU-Kette.",
    "extraInfo_en": "Course-style: adjust the network-port MTU or the SDP MTU value as needed, but always check the full MTU chain.",
    "tip": "Regel merken: SDP Path MTU >= Service MTU.",
    "tip_en": "Remember the rule: SDP path MTU >= service MTU.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SDP Path MTU",
      "Service MTU",
      "Design Rules"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q36",
    "question": "Welcher Default-MTU-Wert gilt im Kurskontext typischerweise fuer einen Gigabit-Ethernet-Network-Port?",
    "question_en": "Which default MTU value typically applies to a Gigabit Ethernet network port in course context?",
    "options": [
      "1514",
      "1522",
      "9212",
      "9190"
    ],
    "options_en": [
      "1514",
      "1522",
      "9212",
      "9190"
    ],
    "correctIndex": 2,
    "explanation": "In deiner Kurs-Tabelle ist fuer Gigabit Ethernet Network Ports typischerweise MTU 9212 angegeben.",
    "explanation_en": "In your course table, Gigabit Ethernet network ports are typically listed with MTU 9212.",
    "extraInfo": "Dieser grosse Wert ist wichtig, damit genug Platz fuer Service-Frames plus Tunnel-/Label-Overhead bleibt.",
    "extraInfo_en": "This larger value is important to leave room for service frames plus tunnel/label overhead.",
    "tip": "GigE Network-Port im Kurs: 9212 merken.",
    "tip_en": "Course value for GigE network port: remember 9212.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Network Port MTU",
      "Gigabit Ethernet"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q37",
    "question": "Welche MPLS-SDP-Path-MTU-Rechnung ergibt kursnah 9190 Byte bei einem Network-Port-MTU von 9212?",
    "question_en": "Which MPLS SDP path MTU calculation gives the course-style result of 9190 bytes with a network-port MTU of 9212?",
    "options": [
      "9212 - 12 (Ethernet) - 4 (Transport Label) - 4 (Service Label) = 9190",
      "9212 - 14 (Ethernet) - 4 (Transport Label) - 4 (Service Label) = 9190",
      "9212 - 14 (Ethernet) - 8 (Transport Label) - 8 (Service Label) = 9190",
      "9212 - 20 (IP) - 4 (GRE) = 9190"
    ],
    "options_en": [
      "9212 - 12 (Ethernet) - 4 (transport label) - 4 (service label) = 9190",
      "9212 - 14 (Ethernet) - 4 (transport label) - 4 (service label) = 9190",
      "9212 - 14 (Ethernet) - 8 (transport label) - 8 (service label) = 9190",
      "9212 - 20 (IP) - 4 (GRE) = 9190"
    ],
    "correctIndex": 1,
    "explanation": "9190 ergibt sich nur mit 14 Byte Ethernet-Header: 9212 - 14 - 4 - 4 = 9190. Mit 12 Byte waere das Ergebnis 9192.",
    "explanation_en": "9190 is obtained only with a 14-byte Ethernet header: 9212 - 14 - 4 - 4 = 9190. With 12 bytes, the result would be 9192.",
    "extraInfo": "Das ist ein typischer Pruefungsfehler: korrekte Formelidee, aber falscher Header-Wert oder Zahlendreher.",
    "extraInfo_en": "This is a typical exam mistake: correct formula idea, but wrong header value or arithmetic slip.",
    "tip": "9190 passt zu 14B Ethernet-Header.",
    "tip_en": "9190 matches a 14-byte Ethernet header.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SDP Path MTU",
      "MPLS",
      "Calculation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q38",
    "question": "Du rechnest fuer GRE: 9212 - 14 (Ethernet) - 20 (IP) - 4 (GRE) - 4 (Service Label). Welches Ergebnis ist korrekt?",
    "question_en": "For GRE, you calculate: 9212 - 14 (Ethernet) - 20 (IP) - 4 (GRE) - 4 (service label). Which result is correct?",
    "options": [
      "1970",
      "9170",
      "9190",
      "9208"
    ],
    "options_en": [
      "1970",
      "9170",
      "9190",
      "9208"
    ],
    "correctIndex": 1,
    "explanation": "Die Summe des Overheads ist 42 Byte. 9212 - 42 = 9170. 1970 ist ein Zahlendreher/Arithmetikfehler.",
    "explanation_en": "The overhead sum is 42 bytes. 9212 - 42 = 9170. 1970 is a typo/arithmetic error.",
    "extraInfo": "Wenn du solche Rechnungen machst: erst Overhead aufsummieren, dann einmal subtrahieren.",
    "extraInfo_en": "When doing such calculations, sum the overhead first, then subtract once.",
    "tip": "14+20+4+4 = 42; 9212-42 = 9170.",
    "tip_en": "14+20+4+4 = 42; 9212-42 = 9170.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SDP Path MTU",
      "GRE",
      "Calculation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q39",
    "question": "Welche Aussage zum zusaetzlichen Overhead bei Facility-Backup und LDP-over-RSVP ist kursnah korrekt?",
    "question_en": "Which statement about additional overhead for facility backup and LDP-over-RSVP is correct in course context?",
    "options": [
      "Jede Option kann ein zusaetzliches MPLS-Label (4 Byte) bedeuten; zusammen koennen also 8 Byte extra hinzukommen",
      "Beide Optionen entfernen MPLS-Labels und sparen 8 Byte",
      "Das betrifft nur GRE-SDPs, nicht MPLS",
      "Der Overhead ist immer exakt 16 Byte pro Option"
    ],
    "options_en": [
      "Each option may add one extra MPLS label (4 bytes); together they can add 8 bytes extra",
      "Both options remove MPLS labels and save 8 bytes",
      "This applies only to GRE SDPs, not MPLS",
      "The overhead is always exactly 16 bytes per option"
    ],
    "correctIndex": 0,
    "explanation": "Kursnah: zusaetzliche MPLS-Labels fuer Schutz-/Transportkombinationen reduzieren das verfuegbare MTU-Budget.",
    "explanation_en": "Course-style: extra MPLS labels for protection/transport combinations reduce the available MTU budget.",
    "extraInfo": "Deshalb bei MTU-Planung nicht nur den Basisfall mit zwei Labels annehmen.",
    "extraInfo_en": "That is why MTU planning should not assume only the basic two-label case.",
    "tip": "+1 Label = +4 Byte Overhead.",
    "tip_en": "+1 label = +4 bytes overhead.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "MPLS",
      "FRR",
      "LDP over RSVP",
      "Overhead"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q40",
    "question": "Wofuer wird auf dem 7750 der OAM-Befehl `oam sdp-mtu` (bzw. SDP Path MTU Test) genutzt?",
    "question_en": "What is the 7750 OAM command `oam sdp-mtu` (or SDP path MTU test) used for?",
    "options": [
      "Zum Aendern der Customer-ID eines Services",
      "Zum Ermitteln/Testen der effektiven Path MTU eines SDP",
      "Zum Erzwingen eines VC-ID-Matchs per T-LDP",
      "Zum Einschalten von RSVP adspec global fuer alle LSPs"
    ],
    "options_en": [
      "To change the customer ID of a service",
      "To determine/test the effective path MTU of an SDP",
      "To force a VC-ID match via T-LDP",
      "To enable RSVP adspec globally for all LSPs"
    ],
    "correctIndex": 1,
    "explanation": "Der OAM SDP-MTU-Test dient dazu, die praktisch erreichbare SDP-Path-MTU zu pruefen/zu bestimmen.",
    "explanation_en": "The OAM SDP-MTU test is used to verify/determine the practically reachable SDP path MTU.",
    "extraInfo": "Hilfreich fuer Troubleshooting, wenn theoretische Rechnung und reales Verhalten nicht zusammenpassen.",
    "extraInfo_en": "Useful for troubleshooting when theoretical calculations and actual behavior do not match.",
    "tip": "oam sdp-mtu = messen/testen, nicht Service-ID aendern.",
    "tip_en": "oam sdp-mtu = measure/test, not change service ID.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "OAM",
      "SDP Path MTU",
      "7750"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q41",
    "question": "Welche Rolle spielt `adspec` bei signaled RSVP-TE LSPs im MTU-Kontext?",
    "question_en": "What role does `adspec` play for signaled RSVP-TE LSPs in MTU context?",
    "options": [
      "Es signalisiert die Customer-ID in BGP Updates",
      "Es fuegt RSVP-Pfadnachrichten ein Objekt hinzu, mit dem die minimale MTU entlang des Pfads gesammelt/abgeleitet werden kann",
      "Es ersetzt LDP fuer Service-Label-Signaling",
      "Es macht den LSP bidirektional"
    ],
    "options_en": [
      "It signals the customer ID in BGP updates",
      "It adds an object to RSVP path messages so the minimum MTU along the path can be collected/derived",
      "It replaces LDP for service-label signaling",
      "It makes the LSP bidirectional"
    ],
    "correctIndex": 1,
    "explanation": "Mit adspec kann die effektive LSP-MTU auf Basis der kleinsten MTU entlang des Pfads bestimmt werden.",
    "explanation_en": "With adspec, effective LSP MTU can be derived based on the smallest MTU along the path.",
    "extraInfo": "Das ist besonders nuetzlich bei signaled LSPs mit potenziell wechselnden Pfaden.",
    "extraInfo_en": "This is especially useful with signaled LSPs and potentially changing paths.",
    "tip": "adspec = Path-Infos sammeln (inkl. MTU).",
    "tip_en": "adspec = collect path information (including MTU).",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "RSVP-TE",
      "adspec",
      "LSP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q42",
    "question": "Welche Aussage zur effektiven LSP-/SDP-Path-MTU bei RSVP-TE mit adspec ist korrekt?",
    "question_en": "Which statement about effective LSP/SDP path MTU with RSVP-TE and adspec is correct?",
    "options": [
      "Sie bleibt immer der MTU des ersten Hops gleich",
      "Sie orientiert sich am kleinsten MTU-Wert auf dem Pfad; bei Pfadaenderung kann sich der Wert aendern",
      "Sie ist immer exakt 9190",
      "Sie ist nur lokal am Egress sichtbar, nicht am Ingress"
    ],
    "options_en": [
      "It always stays equal to the MTU of the first hop",
      "It follows the smallest MTU value on the path; it can change when the path changes",
      "It is always exactly 9190",
      "It is visible only locally at egress, not at ingress"
    ],
    "correctIndex": 1,
    "explanation": "Der wirksame MTU-Wert wird durch den kleinsten Engpass entlang des aktuell genutzten Pfads bestimmt.",
    "explanation_en": "The effective MTU value is determined by the smallest bottleneck along the currently used path.",
    "extraInfo": "Wenn RSVP-TE reroutet, kann sich auch die effektive MTU fuer den verwendeten Transportpfad aendern.",
    "extraInfo_en": "If RSVP-TE reroutes, the effective MTU of the transport path can also change.",
    "tip": "MTU folgt dem Bottleneck.",
    "tip_en": "MTU follows the bottleneck.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "RSVP-TE",
      "adspec",
      "Path Change"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q43",
    "question": "Welche Zuordnung aus deiner Kurs-Default-Tabelle ist korrekt?",
    "question_en": "Which mapping from your course default MTU table is correct?",
    "options": [
      "Fast Ethernet Network = 9212, Gigabit Ethernet Network = 1514",
      "Ethernet access null = 1514, dot1q = 1518, qinq = 1522, Fast Ethernet Network = 1514, Gigabit Ethernet Network = 9212",
      "Alle genannten Werte sind 1500",
      "Nur Network-Ports haben eine MTU, SAPs nicht"
    ],
    "options_en": [
      "Fast Ethernet Network = 9212, Gigabit Ethernet Network = 1514",
      "Ethernet access null = 1514, dot1q = 1518, qinq = 1522, Fast Ethernet Network = 1514, Gigabit Ethernet Network = 9212",
      "All listed values are 1500",
      "Only network ports have an MTU, SAPs do not"
    ],
    "correctIndex": 1,
    "explanation": "Das entspricht der von dir genannten Kurs-Tabelle und verbindet Access- und Network-Port-Defaults in einer Sicht.",
    "explanation_en": "This matches the course table you provided and combines access and network-port defaults in one view.",
    "extraInfo": "Fuer die Praxis immer Plattform-/Port-Doku pruefen, aber fuer die Pruefung zuerst die Kurswerte sicher beherrschen.",
    "extraInfo_en": "For real deployments, always check platform/port docs, but for exams master the course values first.",
    "tip": "Kurstabelle als Paket lernen.",
    "tip_en": "Learn the course table as one package.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Defaults",
      "Access Port",
      "Network Port"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q44",
    "question": "Wie ergibt sich im Kurskontext die VC-MTU fuer Layer-2 Services aus der Service-MTU?",
    "question_en": "How is VC MTU for Layer-2 services derived from service MTU in course context?",
    "options": [
      "VC-MTU = Service-MTU + 14 Ethernet Header",
      "VC-MTU = Service-MTU - 14 Ethernet Overhead",
      "VC-MTU = SDP Path MTU - 20 IP Header",
      "VC-MTU = Customer-ID - Service-ID"
    ],
    "options_en": [
      "VC MTU = Service MTU + 14 Ethernet header",
      "VC MTU = Service MTU - 14 Ethernet overhead",
      "VC MTU = SDP path MTU - 20 IP header",
      "VC MTU = Customer ID - Service ID"
    ],
    "correctIndex": 1,
    "explanation": "Bei Ethernet Layer-2 Services wird die advertised/VC-MTU im Kurskontext als Service-MTU minus 14 Byte Ethernet-Header betrachtet.",
    "explanation_en": "For Ethernet Layer-2 services, course context treats advertised/VC MTU as service MTU minus 14-byte Ethernet header.",
    "extraInfo": "Beispiel: 1514 Service-MTU -> 1500 VC-MTU.",
    "extraInfo_en": "Example: 1514 service MTU -> 1500 VC MTU.",
    "tip": "L2 VC-MTU = 1514 - 14 = 1500 (Defaultfall).",
    "tip_en": "L2 VC MTU = 1514 - 14 = 1500 (default case).",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "VC-MTU",
      "Layer 2",
      "T-LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q45",
    "question": "Welche Aussage zur VC-MTU bei Layer-2 Services und T-LDP ist korrekt?",
    "question_en": "Which statement about VC MTU for Layer-2 services and T-LDP is correct?",
    "options": [
      "VC-MTU wird nicht signalisiert und ist nur lokal relevant",
      "VC-MTU wird im T-LDP-Kontext (advertised MTU) ausgetauscht und sollte mit der Gegenseite kompatibel/matchend sein",
      "VC-MTU ersetzt die SAP-MTU auf dem Access-Port",
      "VC-MTU ist nur fuer VPRN relevant"
    ],
    "options_en": [
      "VC MTU is not signaled and is only locally relevant",
      "VC MTU is exchanged in T-LDP context (advertised MTU) and should be compatible/matching with the far end",
      "VC MTU replaces SAP MTU on the access port",
      "VC MTU is relevant only for VPRN"
    ],
    "correctIndex": 1,
    "explanation": "Bei Pseudowire-/Epipe-Kontext wird die beworbene VC-/Service-MTU im Signaling verwendet und muss Ende-zu-Ende zusammenpassen.",
    "explanation_en": "In pseudowire/epipe context, the advertised VC/service MTU is used in signaling and must be consistent end-to-end.",
    "extraInfo": "Nokia-Doku zeigt fuer Ethernet typischerweise advertised MTU = Service MTU minus EtherHeaderSize.",
    "extraInfo_en": "Nokia docs show that for Ethernet, advertised MTU is typically service MTU minus EtherHeaderSize.",
    "tip": "Nicht nur VC-ID matchen lassen, auch die MTU-Werte.",
    "tip_en": "Not only VC ID should match; MTU values too.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "VC-MTU",
      "T-LDP",
      "Pseudowire"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q46",
    "question": "Welche Aussage beschreibt Layer-3 (IES/VPRN) MTU-Verhalten im Kurskontext am besten?",
    "question_en": "Which statement best describes Layer-3 (IES/VPRN) MTU behavior in course context?",
    "options": [
      "Es gibt dort exakt dasselbe Service-MTU-Konzept wie bei Layer-2 Epipe",
      "Es gibt kein identisches Layer-2-Service-MTU-Konzept; relevant sind administrative IP MTU und eine daraus abgeleitete operative MTU, die durch SAP-/SDP-Path-Grenzen begrenzt wird",
      "Layer-3 ignoriert immer SAP- und SDP-MTU-Werte",
      "Layer-3 kann niemals fragmentieren"
    ],
    "options_en": [
      "It uses exactly the same service-MTU concept as Layer-2 epipe",
      "It does not use the identical Layer-2 service-MTU concept; what matters is administrative IP MTU and a derived operational MTU limited by SAP/SDP-path constraints",
      "Layer 3 always ignores SAP and SDP MTU values",
      "Layer 3 can never fragment"
    ],
    "correctIndex": 1,
    "explanation": "Bei IES/VPRN denkt man eher in IP-MTU (administrativ/operativ). Die operative MTU wird durch den tatsaechlich verfuegbaren Unterbau (SAP oder SDP Path) begrenzt.",
    "explanation_en": "With IES/VPRN, you typically think in terms of IP MTU (administrative/operational). Operational MTU is limited by the actually available underlay (SAP or SDP path).",
    "extraInfo": "Darum steht im Kurskontext oft: operative MTU = kleiner/gleich administrative IP MTU und kleiner/gleich SAP-MTU bzw. SDP Path MTU.",
    "extraInfo_en": "That is why course material often states: operational MTU is less than or equal to administrative IP MTU and less than or equal to SAP MTU or SDP path MTU.",
    "tip": "L3: denk in Admin-IP-MTU vs Oper-IP-MTU.",
    "tip_en": "L3: think in admin IP MTU vs operational IP MTU.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Layer 3",
      "IES",
      "VPRN",
      "Operational MTU"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q47",
    "question": "Welche Reihenfolge der MTU-Beziehungen fuer Layer-2 ist im Kurskontext korrekt (vereinfacht)?",
    "question_en": "Which simplified order of MTU relationships for Layer-2 is correct in course context?",
    "options": [
      "VC-MTU > Service-MTU > SAP-MTU > SDP Path MTU > Network-Port-MTU",
      "SAP-MTU >= Service-MTU > VC-MTU und zusaetzlich SDP Path MTU >= Service-MTU sowie Network-Port-MTU als Basis fuer SDP Path MTU",
      "Nur VC-MTU und Customer-ID muessen verglichen werden",
      "Service-MTU ist bei Layer-2 optional und kann ignoriert werden"
    ],
    "options_en": [
      "VC MTU > Service MTU > SAP MTU > SDP path MTU > network-port MTU",
      "SAP MTU >= service MTU > VC MTU and additionally SDP path MTU >= service MTU, with network-port MTU as the basis for SDP path MTU",
      "Only VC MTU and customer ID need comparison",
      "Service MTU is optional in Layer-2 and can be ignored"
    ],
    "correctIndex": 1,
    "explanation": "Das fasst deine Kurslogik zusammen: Access/SAP muss den Service aufnehmen, der Service bestimmt die advertised/VC-MTU, und der SDP-Pfad muss den Service inklusive Transport-Overhead tragen koennen.",
    "explanation_en": "This summarizes your course logic: access/SAP must accept the service frame, the service defines advertised/VC MTU, and the SDP path must carry the service plus transport overhead.",
    "extraInfo": "Die exakten Zahlen koennen je nach Tag-Transparenz und Label-Stack variieren, die Reihenfolge/Abhaengigkeit bleibt aber zentral.",
    "extraInfo_en": "Exact numbers vary with tag transparency and label stack, but the dependency order remains central.",
    "tip": "L2-MTU als Kette denken, nicht als Einzelwert.",
    "tip_en": "Think of L2 MTU as a chain, not a single value.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Layer 2",
      "VC-MTU",
      "Service MTU",
      "SDP Path MTU"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q48",
    "question": "Warum ist der Hinweis \"DLC = Ethernet Header\" bei MTU-Rechnungen wichtig?",
    "question_en": "Why is the reminder \"DLC = Ethernet header\" important in MTU calculations?",
    "options": [
      "Weil DLC die Customer-ID ersetzt",
      "Weil der Ethernet/L2-Header Teil der Frame-Groesse ist und in kursnahen Service-/VC-/Path-MTU-Rechnungen mitgezaehlt bzw. abgezogen wird",
      "Weil DLC nur fuer GRE-Header steht",
      "Weil DLC die Anzahl der MPLS-Labels vorgibt"
    ],
    "options_en": [
      "Because DLC replaces the customer ID",
      "Because the Ethernet/L2 header is part of frame size and is counted or subtracted in course-style service/VC/path MTU calculations",
      "Because DLC stands only for GRE header",
      "Because DLC defines the number of MPLS labels"
    ],
    "correctIndex": 1,
    "explanation": "Wenn man den DLC/Ethernet-Header vergisst, stimmen Service-MTU-, VC-MTU- oder SDP-Path-MTU-Rechnungen schnell um 14 Byte nicht mehr.",
    "explanation_en": "If you forget the DLC/Ethernet header, service MTU, VC MTU, or SDP path MTU calculations quickly become wrong by 14 bytes.",
    "extraInfo": "Im Kurskontext wird DLC oft als der Ethernet/L2-Header in der Encapsulation-Skizze bezeichnet.",
    "extraInfo_en": "In course context, DLC is often used to mean the Ethernet/L2 header in the encapsulation diagram.",
    "tip": "DLC/L2-Header immer bewusst mitrechnen.",
    "tip_en": "Always account for the DLC/L2 header explicitly.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "DLC",
      "Ethernet Header",
      "Calculation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q49",
    "question": "Ein Frame kommt ueber einen Dot1Q-SAP mit VLAN 50 an und dieses VLAN ist service-delimiting. Was passiert kursnah mit der Groesse vor der MPLS-Kapselung?",
    "question_en": "A frame arrives via a Dot1Q SAP with VLAN 50 and that VLAN is service-delineating. What happens to the size in course context before MPLS encapsulation?",
    "options": [
      "Das VLAN-Tag bleibt immer im Service-Frame, daher bleibt es 1518",
      "Das Delimiting-VLAN-Tag wird am SAP entfernt; aus 1518 werden wieder 1514 (1500 Payload + 14 Byte Ethernet/DLC)",
      "Es werden bereits am SAP zwei MPLS-Labels hinzugefuegt, also 1522",
      "Der Frame wird auf 1500 gekuerzt, weil der Ethernet-Header ebenfalls entfernt wird"
    ],
    "options_en": [
      "The VLAN tag always remains in the service frame, so it stays 1518",
      "The delineating VLAN tag is removed at the SAP; 1518 becomes 1514 again (1500 payload + 14-byte Ethernet/DLC)",
      "Two MPLS labels are already added at the SAP, so it becomes 1522",
      "The frame is reduced to 1500 because the Ethernet header is also removed"
    ],
    "correctIndex": 1,
    "explanation": "Wenn das Dot1Q-Tag zur Service-Zuordnung dient, wird es typischerweise am SAP-Ingress gestripped. Der Service-Frame bleibt dann 1514 Byte (ohne FCS).",
    "explanation_en": "If the Dot1Q tag is used for service mapping, it is typically stripped at SAP ingress. The service frame then remains 1514 bytes (without FCS).",
    "extraInfo": "Das ist der Kernunterschied zwischen service-delimiting Tags und transparent mittransportierten Tags.",
    "extraInfo_en": "This is the key difference between service-delineating tags and transparently carried tags.",
    "tip": "Dot1Q als Delimiter -> +4 wieder weg vor dem Service.",
    "tip_en": "Dot1Q as delimiter -> the +4 is removed before the service.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Dot1Q",
      "Service Delimiting",
      "SAP Ingress"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q50",
    "question": "Wenn der Service-Frame nach Dot1Q-Tag-Strip 1514 Byte gross ist und im MPLS-Tunnel Transport-Label + Service-Label hinzugefuegt werden, welche Groesse ergibt sich kursnah?",
    "question_en": "If the service frame is 1514 bytes after Dot1Q tag stripping and MPLS transport label + service label are added in the tunnel, what size results in course context?",
    "options": [
      "1518",
      "1520",
      "1522",
      "1530"
    ],
    "options_en": [
      "1518",
      "1520",
      "1522",
      "1530"
    ],
    "correctIndex": 2,
    "explanation": "Zwei MPLS-Labels zu je 4 Byte ergeben +8 Byte Overhead. 1514 + 8 = 1522.",
    "explanation_en": "Two MPLS labels at 4 bytes each add +8 bytes overhead. 1514 + 8 = 1522.",
    "extraInfo": "Kursnah gilt: Der Tunnel braucht eine ausreichend groessere MTU, damit diese zusaetzlichen Labels problemlos Platz haben.",
    "extraInfo_en": "In course context, the tunnel needs a sufficiently larger MTU so these extra labels fit without issue.",
    "tip": "2 Labels = +8 Byte.",
    "tip_en": "2 labels = +8 bytes.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "MPLS",
      "Transport Label",
      "Service Label",
      "Calculation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q51",
    "question": "Warum funktioniert ein IPv4-Ping-Test mit `size 1472` und gesetztem `do-not-fragment` typischerweise noch, `1473` aber nicht (bei 1500 Byte IP-MTU)?",
    "question_en": "Why does an IPv4 ping test with `size 1472` and `do-not-fragment` typically still work, but `1473` does not (with 1500-byte IP MTU)?",
    "options": [
      "Weil 1472 + 20 (IP) + 8 (ICMP) = 1500 passt; 1473 + 20 + 8 = 1501 und damit 1 Byte zu gross fuer die IP-MTU",
      "Weil 1472 genau die Groesse des Ethernet-Headers ist",
      "Weil bei 1473 automatisch ein drittes MPLS-Label gesetzt wird",
      "Weil DF nur fuer GRE-Tunnel gilt"
    ],
    "options_en": [
      "Because 1472 + 20 (IP) + 8 (ICMP) = 1500 fits; 1473 + 20 + 8 = 1501 and is therefore 1 byte too large for the IP MTU",
      "Because 1472 is exactly the size of the Ethernet header",
      "Because a third MPLS label is automatically added at 1473",
      "Because DF applies only to GRE tunnels"
    ],
    "correctIndex": 0,
    "explanation": "Bei diesem Test wird kursnah mit ICMP-Datenlaenge gerechnet. Mit DF darf ein zu grosses IP-Paket nicht fragmentiert werden und scheitert daher bei 1501.",
    "explanation_en": "In this test, course context treats the value as ICMP data length. With DF set, an oversized IP packet must not be fragmented and therefore fails at 1501.",
    "extraInfo": "Die genaue CLI-Syntax variiert je nach Geraet/OS; die Rechenlogik 1472+28 vs 1473+28 bleibt dieselbe.",
    "extraInfo_en": "Exact CLI syntax varies by device/OS; the arithmetic logic 1472+28 vs 1473+28 remains the same.",
    "tip": "IPv4+ICMP Overhead = 28 Byte merken.",
    "tip_en": "Remember IPv4+ICMP overhead = 28 bytes.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Ping",
      "DF",
      "ICMP",
      "IPv4"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q52",
    "question": "Was ist der wichtigste Unterschied im Verhalten, wenn beim Ping-Test das `do-not-fragment`-Bit NICHT gesetzt ist?",
    "question_en": "What is the key behavior difference if the ping test does NOT set the `do-not-fragment` bit?",
    "options": [
      "Das Paket wird auf Layer 2 im Service fragmentiert",
      "Ein zu grosses IP-Paket kann (wenn erlaubt und entlang des Pfads moeglich) auf IP-Ebene fragmentiert werden, statt sofort zu scheitern",
      "Es wird automatisch als MPLS OAM Paket behandelt",
      "Dann gelten ICMP-Header nicht mehr"
    ],
    "options_en": [
      "The packet is fragmented at Layer 2 inside the service",
      "An oversized IP packet may be fragmented at IP layer (if allowed and possible along the path) instead of failing immediately",
      "It is automatically treated as an MPLS OAM packet",
      "ICMP headers no longer apply"
    ],
    "correctIndex": 1,
    "explanation": "Wichtig: Fragmentierung (falls sie stattfindet) ist ein IP-Thema, nicht eine Layer-2-Frame-Fragmentierung im Epipe-Service.",
    "explanation_en": "Important: fragmentation (if it occurs) is an IP-layer behavior, not Layer-2 frame fragmentation inside the epipe service.",
    "extraInfo": "Im Provider-Design will man Fragmentierung trotzdem meist vermeiden, weil sie Performance und Troubleshooting verschlechtert.",
    "extraInfo_en": "Provider designs still usually avoid fragmentation because it hurts performance and troubleshooting.",
    "tip": "Kein DF = ggf. IP-Fragmentierung, nicht L2-Fragmentierung.",
    "tip_en": "No DF = possible IP fragmentation, not L2 fragmentation.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Ping",
      "DF",
      "Fragmentation",
      "Layer 3"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q53",
    "question": "Welche kurze MTU-Denkkette ist fuer dein Dot1Q->MPLS-Beispiel korrekt?",
    "question_en": "Which short MTU reasoning chain is correct for your Dot1Q->MPLS example?",
    "options": [
      "1518 (Dot1Q am SAP) -> Tag ist Delimiter und wird gestripped -> 1514 Service-Frame -> +8 MPLS Labels -> 1522 im Tunnel",
      "1518 (Dot1Q am SAP) -> Ethernet-Header wird entfernt -> 1504 -> +8 MPLS Labels -> 1512 im Tunnel",
      "1518 (Dot1Q am SAP) -> es wird nie etwas entfernt -> +8 MPLS Labels -> 1526",
      "1518 (Dot1Q am SAP) -> nur Service-Label +4 -> 1522"
    ],
    "options_en": [
      "1518 (Dot1Q at SAP) -> tag is a delimiter and gets stripped -> 1514 service frame -> +8 MPLS labels -> 1522 in tunnel",
      "1518 (Dot1Q at SAP) -> Ethernet header is removed -> 1504 -> +8 MPLS labels -> 1512 in tunnel",
      "1518 (Dot1Q at SAP) -> nothing is ever removed -> +8 MPLS labels -> 1526",
      "1518 (Dot1Q at SAP) -> only service label +4 -> 1522"
    ],
    "correctIndex": 0,
    "explanation": "Das ist genau die kursnahe Kette: Dot1Q-Delimiting-Tag weg, DLC/Ethernet-Header bleibt Teil des Service-Frames, danach kommen MPLS-Labels dazu.",
    "explanation_en": "This is the course-style chain: the Dot1Q delineating tag is removed, the DLC/Ethernet header remains part of the service frame, and MPLS labels are added afterward.",
    "extraInfo": "Der haeufigste Fehler ist, versehentlich den Ethernet/DLC-Header mit zu strippen oder das Delimiting-Tag im Service-Frame mitzuzahlen.",
    "extraInfo_en": "The most common mistake is accidentally stripping the Ethernet/DLC header as well, or incorrectly counting the delineating tag inside the service frame.",
    "tip": "Strip nur Delimiting-Tag, nicht den Ethernet-Header.",
    "tip_en": "Strip only the delineating tag, not the Ethernet header.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Dot1Q",
      "MPLS",
      "DLC",
      "Scenario"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q54",
    "question": "Ein Kunde will die Payload ueber Epipe von 1500 auf 1504 erhoehen (Dot1Q-SAP, service-delimiting). Welche erste Service-MTU-Anpassung ist kursnah notwendig?",
    "question_en": "A customer wants to increase payload over an epipe from 1500 to 1504 (Dot1Q SAP, service-delineating). Which first service-MTU adjustment is needed in course context?",
    "options": [
      "Service MTU von 1514 auf 1518 erhoehen",
      "Service MTU unveraendert bei 1514 lassen",
      "Service MTU auf 1522 erhoehen",
      "Nur VC-ID aendern, MTU bleibt gleich"
    ],
    "options_en": [
      "Increase service MTU from 1514 to 1518",
      "Keep service MTU unchanged at 1514",
      "Increase service MTU to 1522",
      "Change only VC ID, MTU stays the same"
    ],
    "correctIndex": 0,
    "explanation": "1504 Payload + 14 Byte Ethernet/DLC-Header ergibt einen Service-Frame von 1518. Daher muss die Service-MTU auf 1518 steigen.",
    "explanation_en": "1504 payload + 14-byte Ethernet/DLC header gives a 1518-byte service frame. Therefore service MTU must increase to 1518.",
    "extraInfo": "Das gilt fuer die kursnahe Ethernet-Service-MTU-Sicht ohne FCS.",
    "extraInfo_en": "This follows the course-style Ethernet service-MTU view without FCS.",
    "tip": "Neue Payload -> zuerst neue Service-Frame-Groesse rechnen.",
    "tip_en": "New payload -> first compute the new service frame size.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Epipe",
      "Service MTU",
      "Scenario"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q55",
    "question": "Warum reicht in diesem 1504-Byte-Fall ein SAP-MTU-Wert von 1518 am Dot1Q-SAP (service-delimiting) nicht aus?",
    "question_en": "Why is a SAP MTU value of 1518 not sufficient in this 1504-byte case on a Dot1Q SAP (service-delineating)?",
    "options": [
      "Weil am SAP noch das ankommende Delimiting-VLAN-Tag vorhanden ist, also 1518 (Service-Frame) + 4 = 1522 ankommen koennen",
      "Weil Dot1Q-SAPs immer mindestens 1600 Byte brauchen",
      "Weil der SAP die MPLS-Labels schon vor dem Eingang mitrechnet",
      "Weil bei Dot1Q der Ethernet-Header doppelt gesendet wird"
    ],
    "options_en": [
      "Because the incoming delineating VLAN tag is still present at the SAP, so 1518 (service frame) + 4 = 1522 may arrive",
      "Because Dot1Q SAPs always require at least 1600 bytes",
      "Because the SAP already counts MPLS labels before ingress",
      "Because with Dot1Q the Ethernet header is transmitted twice"
    ],
    "correctIndex": 0,
    "explanation": "Das Delimiting-Tag wird erst am SAP ausgewertet/gestripped. Vor diesem Schritt muss der SAP die ankommende Frame-Groesse inkl. VLAN-Tag aufnehmen koennen.",
    "explanation_en": "The delineating tag is evaluated/stripped only at the SAP. Before that step, the SAP must accept the incoming frame size including the VLAN tag.",
    "extraInfo": "Darum wird in diesem Szenario die SAP-MTU auf 1522 erhoeht, obwohl die Service-MTU selbst nur 1518 ist.",
    "extraInfo_en": "That is why SAP MTU is increased to 1522 in this scenario, even though service MTU itself is only 1518.",
    "tip": "SAP sieht das Tag noch, der Service danach nicht mehr.",
    "tip_en": "The SAP still sees the tag; the service (after stripping) does not.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SAP MTU",
      "Dot1Q",
      "Service Delimiting",
      "Scenario"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q56",
    "question": "Welche MTU-Kombination ist fuer den beschriebenen 1504-Byte-Payload-Fall (Dot1Q service-delimiting) kursnah korrekt?",
    "question_en": "Which MTU combination is correct in course context for the described 1504-byte payload case (Dot1Q service-delineating)?",
    "options": [
      "Service MTU 1518, SAP MTU 1522",
      "Service MTU 1522, SAP MTU 1518",
      "Service MTU 1514, SAP MTU 1518",
      "Service MTU 1504, SAP MTU 1514"
    ],
    "options_en": [
      "Service MTU 1518, SAP MTU 1522",
      "Service MTU 1522, SAP MTU 1518",
      "Service MTU 1514, SAP MTU 1518",
      "Service MTU 1504, SAP MTU 1514"
    ],
    "correctIndex": 0,
    "explanation": "Service-Frame = 1504 + 14 = 1518. Weil am SAP der Delimiting-Tag noch anliegt, braucht der SAP 1518 + 4 = 1522.",
    "explanation_en": "Service frame = 1504 + 14 = 1518. Because the delineating tag is still present at SAP ingress, the SAP needs 1518 + 4 = 1522.",
    "extraInfo": "Danach muss die restliche MTU-Kette (SDP Path MTU / Network-Port-MTU) ebenfalls passen.",
    "extraInfo_en": "After that, the rest of the MTU chain (SDP path MTU / network-port MTU) must also fit.",
    "tip": "Service rechnen, dann SAP + Delimiter-Tag.",
    "tip_en": "Compute service first, then SAP + delimiter tag.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Epipe",
      "SAP MTU",
      "Service MTU",
      "Calculation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q57",
    "question": "Wofuer nutzt man kursnah den Classic-CLI Befehl `oam sdp-mtu <serviceid> size-inc <start> <end> step <inc>`?",
    "question_en": "What is the course-style use of the Classic CLI command `oam sdp-mtu <serviceid> size-inc <start> <end> step <inc>`?",
    "options": [
      "Zum schrittweisen Herantasten/Bestimmen der effektiven SDP-Path-MTU",
      "Zum Umschalten eines SDP von GRE auf RSVP-TE",
      "Zum Aendern der VC-ID auf beiden PEs gleichzeitig",
      "Zum Aktivieren von adspec unter allen LSPs"
    ],
    "options_en": [
      "To stepwise probe/determine the effective SDP path MTU",
      "To switch an SDP from GRE to RSVP-TE",
      "To change the VC ID on both PEs simultaneously",
      "To enable adspec under all LSPs"
    ],
    "correctIndex": 0,
    "explanation": "Mit `size-inc` tastet man sich in Schritten an die maximal funktionierende Groesse heran und ermittelt so praktisch die nutzbare SDP-Path-MTU.",
    "explanation_en": "With `size-inc`, you probe in steps toward the maximum working size and thus determine the practically usable SDP path MTU.",
    "extraInfo": "Danach kann man die benoetigten Header-/Label-Overheads beruecksichtigen, um auf Network-Port-MTU-Anforderungen zu schliessen.",
    "extraInfo_en": "Afterward, you can account for header/label overheads to infer network-port MTU requirements.",
    "tip": "oam sdp-mtu size-inc = messen durch Herantasten.",
    "tip_en": "oam sdp-mtu size-inc = probe by stepping.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "OAM",
      "SDP Path MTU",
      "Classic CLI"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q58",
    "question": "Wenn du aus einer gemessenen/abgeleiteten Servicegroesse auf die noetige Network-Port-MTU fuer einen einfachen MPLS-Transport schliesst, welche Overheads addierst du im Kurskontext typischerweise?",
    "question_en": "If you infer the required network-port MTU from a measured/derived service size for simple MPLS transport, which overheads do you typically add in course context?",
    "options": [
      "14 Byte DLC/Ethernet Header + 4 Byte Transport Label + 4 Byte Service Label (= 22 Byte)",
      "Nur 8 Byte ICMP Header",
      "20 Byte IP Header + 20 Byte TCP Header, immer",
      "Keine, weil MPLS-Labels innerhalb der Payload liegen"
    ],
    "options_en": [
      "14-byte DLC/Ethernet header + 4-byte transport label + 4-byte service label (= 22 bytes)",
      "Only 8-byte ICMP header",
      "20-byte IP header + 20-byte TCP header, always",
      "None, because MPLS labels are inside the payload"
    ],
    "correctIndex": 0,
    "explanation": "Kursnah wird fuer den Basisfall oft mit 22 Byte Zusatz gerechnet: 14 (L2/DLC) + 4 (Transport-Label) + 4 (Service-Label).",
    "explanation_en": "In course context, the basic case is often calculated with 22 extra bytes: 14 (L2/DLC) + 4 (transport label) + 4 (service label).",
    "extraInfo": "Weitere Labels (z. B. Schutz/FRR/LDP-over-RSVP) reduzieren das Budget weiter.",
    "extraInfo_en": "Additional labels (for example protection/FRR/LDP-over-RSVP) reduce the budget further.",
    "tip": "Basis-MPLS-Aufschlag oft 22 Byte.",
    "tip_en": "Basic MPLS add-on is often 22 bytes.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "MPLS",
      "Overhead",
      "Calculation",
      "DLC"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q59",
    "question": "Wie ist die Aussage \"SDP Path MTU ist vom mit adspec via RSVP-TE verhandelten Path-MTU-Wert abgeleitet\" am besten zu verstehen?",
    "question_en": "How should the statement \"SDP path MTU is derived from the path-MTU value negotiated via RSVP-TE with adspec\" be understood?",
    "options": [
      "Wenn ein SDP einen RSVP-TE-LSP als Transport nutzt und dieser LSP adspec-basiert eine effektive Path-MTU kennt, dann orientiert sich die nutzbare SDP-Path-MTU an diesem LSP-Wert (Bottleneck-basiert)",
      "adspec erzeugt automatisch die SAPs und setzt deren MTU",
      "adspec ersetzt die OAM-Messung vollstaendig in jedem Fall",
      "adspec ist nur fuer GRE-Tunnel relevant"
    ],
    "options_en": [
      "If an SDP uses an RSVP-TE LSP as transport and that LSP knows an effective path MTU via adspec, then usable SDP path MTU follows that LSP value (bottleneck-based)",
      "adspec automatically creates the SAPs and sets their MTU",
      "adspec fully replaces OAM measurement in every case",
      "adspec is relevant only for GRE tunnels"
    ],
    "correctIndex": 0,
    "explanation": "Kurz gesagt: SDP nutzt den LSP als Transport. Wenn der LSP durch adspec eine realistischere effektive MTU ableitet, wirkt sich das auf die nutzbare SDP-Path-MTU aus.",
    "explanation_en": "In short: the SDP uses the LSP as transport. If the LSP derives a more realistic effective MTU via adspec, that influences the usable SDP path MTU.",
    "extraInfo": "Darum kann ein Service ohne adspec \"up\" wirken, mit adspec aber ploetzlich als MTU-begrenzt/problematisch erkannt werden.",
    "extraInfo_en": "That is why a service may appear \"up\" without adspec but then be recognized as MTU-limited/problematic with adspec enabled.",
    "tip": "SDP erbt MTU-Grenzen des genutzten LSP-Transports.",
    "tip_en": "SDP inherits MTU limits from the LSP transport it uses.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "SDP Path MTU",
      "RSVP-TE",
      "adspec",
      "Explanation"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q60",
    "question": "Warum kann eine Epipe mit sehr grosser Service-MTU (z. B. 9000) ohne adspec operational up sein, obwohl ein kleiner Core-Network-Port die reale Framegroesse begrenzt?",
    "question_en": "Why can an epipe with a very large service MTU (for example 9000) be operationally up without adspec even though a small core network port limits the real frame size?",
    "options": [
      "Weil der Service-Status ohne effektive Path-MTU-Erkennung den Core-Bottleneck evtl. nicht als MTU-Fehler abbildet und grosse Frames erst im Datenpfad scheitern",
      "Weil Network-Port-MTU nur fuer GRE zaehlt",
      "Weil Epipe Frames automatisch komprimiert",
      "Weil ein kleiner Core-Port die VC-MTU immer vergroessert"
    ],
    "options_en": [
      "Because without effective path-MTU detection, the service status may not reflect the core bottleneck as an MTU error, and large frames fail only in the data path",
      "Because network-port MTU matters only for GRE",
      "Because epipe frames are automatically compressed",
      "Because a small core port always increases VC MTU"
    ],
    "correctIndex": 0,
    "explanation": "Ohne wirksame Path-MTU-Ableitung/Messung sieht man den Engpass oft erst bei echten grossen Datenframes. Der Service kann formal noch up erscheinen.",
    "explanation_en": "Without effective path-MTU derivation/measurement, the bottleneck is often visible only when real large data frames are sent. The service may still appear formally up.",
    "extraInfo": "Mit adspec/OAM wird die reale Transportgrenze besser sichtbar und kann Status/Flags beeinflussen.",
    "extraInfo_en": "With adspec/OAM, the real transport limit becomes more visible and may affect status/flags.",
    "tip": "Control-/Service-Status != automatisch Jumbo-tauglich.",
    "tip_en": "Control/service status != automatically jumbo-capable.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "Epipe",
      "adspec",
      "Operational Status",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q61",
    "question": "In deinem Beispiel zeigt `show service ... sdp ... detail` etwa `minReqd MTU 9000`, `oper path MTU 1492` und ein Flag wie `PathMTUTooSmall`. Was bedeutet das am besten?",
    "question_en": "In your example, `show service ... sdp ... detail` shows roughly `minReqd MTU 9000`, `oper path MTU 1492`, and a flag like `PathMTUTooSmall`. What does that best mean?",
    "options": [
      "Die konfigurierte/benoetigte Servicegroesse ist groesser als die effektiv verfuegbare Transport-MTU auf dem Pfad; der Pfad ist der Engpass",
      "Die VC-ID ist falsch und muss neu signalisiert werden",
      "Das bedeutet nur, dass der CE ausgeschaltet ist",
      "Es ist ein Hinweis auf falsche Customer-ID-Gruppierung"
    ],
    "options_en": [
      "The configured/required service size is larger than the effectively available transport MTU on the path; the path is the bottleneck",
      "The VC ID is wrong and must be re-signaled",
      "It only means the CE is powered off",
      "It indicates incorrect customer-ID grouping"
    ],
    "correctIndex": 0,
    "explanation": "Das Flag sagt sinngemaess: Der Dienst braucht mehr MTU als der aktuelle Transportpfad liefern kann.",
    "explanation_en": "The flag essentially means: the service requires more MTU than the current transport path can provide.",
    "extraInfo": "Typische naechste Schritte: Pfad finden (z. B. LSP trace), kleinen Port identifizieren (MRU/MTU) und dort korrigieren.",
    "extraInfo_en": "Typical next steps: find the path (for example LSP trace), identify the small port (MRU/MTU), and fix it there.",
    "tip": "minReqd > operPath = MTU-Engpass im Transport.",
    "tip_en": "minReqd > operPath = transport MTU bottleneck.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "PathMTUTooSmall",
      "SDP",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q62",
    "question": "Wofuer nutzt man in deinem Troubleshooting-Szenario `oam lsp-trace rsvp-te ... output-format detail` am sinnvollsten?",
    "question_en": "What is the best use of `oam lsp-trace rsvp-te ... output-format detail` in your troubleshooting scenario?",
    "options": [
      "Um den RSVP-TE-LSP-Pfad Hop fuer Hop zu sehen und den Port/Hop mit zu kleiner MRU/MTU zu identifizieren",
      "Um die Service-ID automatisch auf 9000 zu setzen",
      "Um GRE in MPLS umzuwandeln",
      "Um die Customer-ID auf allen PEs zu synchronisieren"
    ],
    "options_en": [
      "To inspect the RSVP-TE LSP path hop by hop and identify the port/hop with too-small MRU/MTU",
      "To automatically set the service ID to 9000",
      "To convert GRE into MPLS",
      "To synchronize customer ID across all PEs"
    ],
    "correctIndex": 0,
    "explanation": "Wenn der Service wegen Path-MTU-Bottleneck scheitert, hilft LSP-Trace bei der Lokalisierung des problematischen Hops/Ports im Core.",
    "explanation_en": "If the service fails due to a path-MTU bottleneck, LSP trace helps locate the problematic core hop/port.",
    "extraInfo": "Im Output taucht je nach Kontext oft MRU als relevante physische Port-Groesse auf (kursnah als Gegenstueck zur Port-MTU betrachtet).",
    "extraInfo_en": "Depending on context, the output often shows MRU as the relevant physical port size (course-style considered a counterpart to port MTU).",
    "tip": "Erst Engpass finden, dann Port-MTU/MRU korrigieren.",
    "tip_en": "Find the bottleneck first, then fix port MTU/MRU.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "OAM",
      "LSP Trace",
      "RSVP-TE",
      "MRU",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q63",
    "question": "Was beschreibt RFC 4448 fuer Ethernet-Pseudowires im Kern?",
    "question_en": "What does RFC 4448 fundamentally describe for Ethernet pseudowires?",
    "options": [
      "Zwei Ethernet-PW-Modi: Ethernet Raw Mode und Ethernet Tagged Mode",
      "Nur GRE-basierte VC-Typen ohne MPLS",
      "Ausschliesslich Layer-3-VPRN-Typen",
      "Nur ATM VC-Typen"
    ],
    "options_en": [
      "Two Ethernet PW modes: Ethernet Raw Mode and Ethernet Tagged Mode",
      "Only GRE-based VC types without MPLS",
      "Only Layer-3 VPRN types",
      "Only ATM VC types"
    ],
    "correctIndex": 0,
    "explanation": "RFC 4448 unterscheidet fuer Ethernet-PWs insbesondere Raw Mode und Tagged Mode.",
    "explanation_en": "RFC 4448 distinguishes Ethernet PWs mainly into Raw Mode and Tagged Mode.",
    "extraInfo": "Diese Wahl beeinflusst, ob ein VLAN-Tag als Teil des transportierten Frames betrachtet wird.",
    "extraInfo_en": "This choice affects whether a VLAN tag is treated as part of the transported frame.",
    "tip": "RFC 4448 -> Ethernet PW: raw vs tagged.",
    "tip_en": "RFC 4448 -> Ethernet PW: raw vs tagged.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "RFC 4448",
      "Pseudowire",
      "VC Type"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q64",
    "question": "Wann wird der VC Type im Kurskontext festgelegt und relevant signalisiert?",
    "question_en": "When is VC type set and relevantly signaled in course context?",
    "options": [
      "Beim SDP-Service-Binding (z. B. spoke-sdp) und danach im T-LDP-PW-Signaling",
      "Nur beim Erstellen der Customer-ID",
      "Ausschliesslich im IGP (OSPF/ISIS)",
      "Er wird nie signalisiert, nur lokal genutzt"
    ],
    "options_en": [
      "At SDP-service binding (for example spoke-sdp) and then in T-LDP PW signaling",
      "Only when creating customer ID",
      "Exclusively in IGP (OSPF/ISIS)",
      "It is never signaled, only locally used"
    ],
    "correctIndex": 0,
    "explanation": "Der VC Type ist Teil des Pseudowire-Kontexts und wird im T-LDP-Signaling zwischen den PE-Enden relevant.",
    "explanation_en": "VC type is part of pseudowire context and is relevantly signaled between PE ends via T-LDP.",
    "extraInfo": "Darum muss die End-zu-End-Konfiguration (VC-ID, Typ, MTU) sauber zusammenpassen.",
    "extraInfo_en": "That is why end-to-end configuration (VC ID, type, MTU) must align cleanly.",
    "tip": "VC-Type ist Teil des PW-Bindings, nicht nur lokale Deko.",
    "tip_en": "VC type is part of PW binding, not just local decoration.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "VC Type",
      "T-LDP",
      "SDP Binding",
      "Pseudowire"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q65",
    "question": "Welche Aussage beschreibt Ethernet Raw Mode (Default im Kurskontext) am besten?",
    "question_en": "Which statement best describes Ethernet Raw Mode (default in course context)?",
    "options": [
      "Service-delimiting VLAN-Tags werden am Ingress typischerweise gestripped und nicht als Frame-Tag ueber die epipe carried",
      "Alle VLAN-Tags werden immer mittransportiert",
      "Raw Mode funktioniert nur mit GRE",
      "Raw Mode ist nur fuer Layer-3-Services"
    ],
    "options_en": [
      "Service-delineating VLAN tags are typically stripped at ingress and not carried as frame tags across the epipe",
      "All VLAN tags are always carried through",
      "Raw mode works only with GRE",
      "Raw mode is only for Layer-3 services"
    ],
    "correctIndex": 0,
    "explanation": "Raw Mode behandelt Delimiting-Tags typischerweise als Service-Zuordnungsinfo, nicht als Nutz-Frame-Tag ueber den PW.",
    "explanation_en": "Raw mode treats delineating tags typically as service-mapping info, not as user frame tags transported over the PW.",
    "extraInfo": "Das passt zur bekannten Dot1Q service-delimiting Logik am SAP.",
    "extraInfo_en": "This aligns with the known Dot1Q service-delineating logic at the SAP.",
    "tip": "Raw: Delimiter raus, Nutzframe ohne dieses Tag weiter.",
    "tip_en": "Raw: delimiter stripped, payload frame continues without that tag.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "VC Type",
      "Raw Mode",
      "Epipe",
      "VLAN"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q66",
    "question": "Wann ist Ethernet Tagged Mode (VC Type VLAN) im Kurskontext besonders sinnvoll?",
    "question_en": "When is Ethernet Tagged Mode (VC Type VLAN) especially useful in course context?",
    "options": [
      "Wenn Interoperabilitaet mit Gegenstellen/Systemen gebraucht wird, die tagged mode erwarten",
      "Nur wenn keine VLANs im Netz vorhanden sind",
      "Nur fuer VPRN statt Epipe",
      "Wenn man T-LDP komplett vermeiden will"
    ],
    "options_en": [
      "When interoperability is needed with peers/systems that expect tagged mode",
      "Only when there are no VLANs in the network",
      "Only for VPRN instead of epipe",
      "When you want to avoid T-LDP completely"
    ],
    "correctIndex": 0,
    "explanation": "Tagged Mode wird oft fuer Interoperabilitaet genutzt, wenn der VLAN-Tag als Teil des transportierten Frames erhalten bleiben soll.",
    "explanation_en": "Tagged mode is often used for interoperability when VLAN tag should remain part of the transported frame.",
    "extraInfo": "Gerade in Multi-Vendor-Umgebungen ist das ein haeufiger Grund fuer VC-Type-VLAN.",
    "extraInfo_en": "In multi-vendor environments, this is a common reason for VC-type VLAN.",
    "tip": "Tagged mode = VLAN-Tag wird Teil der transportierten Nutzsicht.",
    "tip_en": "Tagged mode = VLAN tag becomes part of transported user view.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "VC Type",
      "Tagged Mode",
      "VLAN",
      "Interoperability"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q67",
    "question": "Welche MTU-Folge hat Tagged Mode typischerweise fuer die Service-MTU-Betrachtung?",
    "question_en": "What MTU implication does tagged mode typically have for service-MTU considerations?",
    "options": [
      "Man muss typischerweise 4 Byte fuer den VLAN-Tag mit einplanen",
      "Man kann immer 4 Byte abziehen",
      "MTU spielt bei tagged mode keine Rolle",
      "Es kommen automatisch 8 Byte ICMP-Overhead dazu"
    ],
    "options_en": [
      "You typically need to account for an extra 4 bytes for the VLAN tag",
      "You can always subtract 4 bytes",
      "MTU does not matter in tagged mode",
      "It automatically adds 8 bytes ICMP overhead"
    ],
    "correctIndex": 0,
    "explanation": "Wenn der VLAN-Tag im transportierten Frame erhalten bleibt, muss diese Groesse in der MTU-Kette mitgerechnet werden.",
    "explanation_en": "If the VLAN tag remains in the transported frame, that size must be included in the MTU chain.",
    "extraInfo": "Das ist derselbe Grundgedanke wie bei transparent mittransportierten Tags.",
    "extraInfo_en": "This is the same principle as transparently carried tags.",
    "tip": "Tagged mode -> +4 Byte im Budget merken.",
    "tip_en": "Tagged mode -> remember +4 bytes in the budget.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "MTU",
      "VC Type",
      "Tagged Mode",
      "VLAN"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q68",
    "question": "Welche Aussage zu Dot1Q mit VLAN-ID 0 ist im Kurskontext korrekt?",
    "question_en": "Which statement about Dot1Q with VLAN ID 0 is correct in course context?",
    "options": [
      "Untagged Traffic und Traffic mit VLAN-ID 0 koennen auf diesen SAP gemappt werden",
      "VLAN-ID 0 wird immer wie normales Kunden-VLAN behandelt",
      "VLAN-ID 0 ist fuer Epipe nie erlaubt",
      "VLAN-ID 0 zwingt immer QinQ"
    ],
    "options_en": [
      "Untagged traffic and traffic with VLAN ID 0 can be mapped to this SAP",
      "VLAN ID 0 is always treated as a normal customer VLAN",
      "VLAN ID 0 is never allowed for epipe",
      "VLAN ID 0 always forces QinQ"
    ],
    "correctIndex": 0,
    "explanation": "Kursnah gilt fuer den 0-Sonderfall: untagged und VLAN-0-Traffic koennen zusammen auf denselben SAP-Kontext fallen.",
    "explanation_en": "In course context, VLAN 0 special case allows untagged and VLAN-0 traffic to map into the same SAP context.",
    "extraInfo": "VLAN 0 bleibt ein Sonderfall (Priority-Tag-Kontext), nicht einfach ein normales Service-VLAN.",
    "extraInfo_en": "VLAN 0 remains a special case (priority-tag context), not simply a normal service VLAN.",
    "tip": "VLAN 0 separat merken.",
    "tip_en": "Remember VLAN 0 as a special case.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "Dot1Q",
      "VLAN 0",
      "SAP Mapping"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q69",
    "question": "Wann wird ein VLAN-Tag am SAP als service-delimiting betrachtet?",
    "question_en": "When is a VLAN tag considered service-delineating at the SAP?",
    "options": [
      "Wenn der Tag zur konfigurierten SAP-Encapsulation auf diesem Port matcht",
      "Immer sobald irgendein VLAN-Tag vorhanden ist",
      "Nur wenn RSVP-TE aktiv ist",
      "Nur bei GRE-SDPs"
    ],
    "options_en": [
      "When the tag matches the configured SAP encapsulation on that port",
      "Always whenever any VLAN tag is present",
      "Only when RSVP-TE is enabled",
      "Only with GRE SDPs"
    ],
    "correctIndex": 0,
    "explanation": "Service-delimiting ist an das SAP-Matching gebunden, nicht pauschal an jedes VLAN-Tag.",
    "explanation_en": "Service delineation is tied to SAP matching, not automatically to every VLAN tag.",
    "extraInfo": "Diese Regel ist zentral fuer korrektes Tag-Handling und MTU-Rechnungen.",
    "extraInfo_en": "This rule is central for correct tag handling and MTU calculations.",
    "tip": "Ohne Match kein Delimiting.",
    "tip_en": "No match, no delineation.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "SAP Encapsulation",
      "Service Delimiting",
      "VLAN"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s1-q70",
    "question": "Welche Aussage beschreibt den praktischen Unterschied zwischen \"Provider-/service-delimiting VLAN\" und transparent mittransportiertem VLAN am besten?",
    "question_en": "Which statement best describes the practical difference between a provider/service-delineating VLAN and a transparently transported VLAN?",
    "options": [
      "Service-delimiting VLAN dient primar der SAP-Servicezuordnung; transparentes VLAN bleibt als Nutz-Tag im transportierten Frame erhalten",
      "Beides ist dasselbe, nur andere Begriffe",
      "Transparente VLANs gibt es nur bei Layer-3",
      "Service-delimiting VLAN kann nie gestripped werden"
    ],
    "options_en": [
      "A service-delineating VLAN primarily maps traffic to the SAP/service; a transparent VLAN remains as user tag in the transported frame",
      "Both are the same, just different wording",
      "Transparent VLANs exist only in Layer 3",
      "A service-delineating VLAN can never be stripped"
    ],
    "correctIndex": 0,
    "explanation": "Das ist der Kern fuer Interop und MTU: Delimiting-Tags sind oft Zuordnungslogik, transparente Tags sind Nutz-Frame-Bestandteil.",
    "explanation_en": "This is core for interop and MTU: delineating tags are often mapping logic, while transparent tags are part of user frame content.",
    "extraInfo": "Bei VC-Type-Wahl (raw/tagged) und SAP-Encapsulation entscheidet sich, welche Sicht gilt.",
    "extraInfo_en": "VC-type choice (raw/tagged) and SAP encapsulation determine which view applies.",
    "tip": "Delimiter waehlt Service, transparentes Tag reist mit.",
    "tip_en": "Delimiter selects service, transparent tag travels through.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 1",
      "VLAN",
      "Service Delimiting",
      "Transparent Tag",
      "VC Type"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 1",
    "section_en": "Section 1"
  },
  {
    "id": "telco-m2s2-q1",
    "question": "Was beschreibt VPLS Label Signaling im Kurskontext am besten?",
    "question_en": "What best describes VPLS label signaling in course context?",
    "options": [
      "Alle PE-Router eines VPLS sind T-LDP-Peers und tauschen Service-Labels fuer diesen Dienst aus",
      "Nur P-Router signalisieren die VPLS-Service-Labels",
      "VPLS nutzt ausschliesslich MP-BGP fuer Service-Labels",
      "Service-Labels werden nur lokal auf einem PE erzeugt, nicht ausgetauscht"
    ],
    "options_en": [
      "All PE routers of a VPLS are T-LDP peers and exchange service labels for that service",
      "Only P routers signal VPLS service labels",
      "VPLS uses only MP-BGP for service labels",
      "Service labels are created only locally on one PE and not exchanged"
    ],
    "correctIndex": 0,
    "explanation": "Im Kursmodell tauschen die VPLS-PEs die relevanten Service-Labels ueber T-LDP aus.",
    "explanation_en": "In the course model, VPLS PEs exchange relevant service labels via T-LDP.",
    "extraInfo": "Die P-Router dazwischen bleiben label-switched Transit, aber nicht service-aware auf VPLS-Ebene.",
    "extraInfo_en": "Intermediate P routers remain label-switched transit, but are not service-aware at VPLS service level.",
    "tip": "VPLS Service-Label: PE-zu-PE ueber T-LDP.",
    "tip_en": "VPLS service label: PE-to-PE via T-LDP.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "Label Signaling",
      "T-LDP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q2",
    "question": "Wie wird eine PE-Instanz im VPLS-Kontext im Kurs oft bezeichnet?",
    "question_en": "How is a PE instance often referred to in VPLS context in the course?",
    "options": [
      "Virtual Switch (VS)",
      "Provider Core Switch (PCS)",
      "Loopback Gateway (LG)",
      "Access Policy Endpoint (APE)"
    ],
    "options_en": [
      "Virtual Switch (VS)",
      "Provider Core Switch (PCS)",
      "Loopback Gateway (LG)",
      "Access Policy Endpoint (APE)"
    ],
    "correctIndex": 0,
    "explanation": "Im Kurs wird die Service-Instanz am PE fuer VPLS oft als virtueller Switch dargestellt.",
    "explanation_en": "In the course, the PE service instance for VPLS is often represented as a virtual switch.",
    "extraInfo": "Jeder Service hat dabei seine eigene MAC-Learning-Domaene.",
    "extraInfo_en": "Each service has its own MAC-learning domain.",
    "tip": "VPLS am PE = virtueller Switch pro Service.",
    "tip_en": "VPLS on PE = virtual switch per service.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "PE",
      "Virtual Switch"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q3",
    "question": "Welche Aussage trifft die VPLS-Topologie-Idee im Kurs am besten?",
    "question_en": "Which statement best captures the VPLS topology idea in the course?",
    "options": [
      "VPLS kann als Full-Mesh aus Pseudowire-/Epipe-aehnlichen Verbindungen zwischen allen beteiligten PEs verstanden werden",
      "VPLS ist immer nur Punkt-zu-Punkt zwischen genau zwei PEs",
      "VPLS braucht keine SDPs zwischen PEs",
      "VPLS ist ausschliesslich ein Layer-3-Service"
    ],
    "options_en": [
      "VPLS can be understood as a full mesh of pseudowire/epipe-like connections among all participating PEs",
      "VPLS is always only point-to-point between exactly two PEs",
      "VPLS requires no SDPs between PEs",
      "VPLS is exclusively a Layer-3 service"
    ],
    "correctIndex": 0,
    "explanation": "Kursnah wird VPLS als multipoint-L2-Service mit voller PE-zu-PE-Erreichbarkeit modelliert.",
    "explanation_en": "Course-style, VPLS is modeled as a multipoint Layer-2 service with full PE-to-PE reachability.",
    "extraInfo": "Das unterscheidet VPLS klar vom reinen VPWS-Punkt-zu-Punkt-Modell.",
    "extraInfo_en": "This clearly distinguishes VPLS from pure VPWS point-to-point models.",
    "tip": "VPLS = multipoint, nicht nur 2 Enden.",
    "tip_en": "VPLS = multipoint, not just two endpoints.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "Topology",
      "Full Mesh"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q4",
    "question": "Welche Aussage zu T-LDP-Sessions zwischen zwei PEs ist fuer VPLS/Service-Label-Signaling im Kurs korrekt?",
    "question_en": "Which statement about T-LDP sessions between two PEs is correct for VPLS/service-label signaling in the course?",
    "options": [
      "Zwischen zwei PEs reicht typischerweise eine T-LDP-Session; darueber koennen mehrere Services signalisiert werden",
      "Pro Service ist zwingend eine eigene T-LDP-Transport-Session erforderlich",
      "T-LDP-Session ist nur fuer den ersten Service moeglich",
      "T-LDP wird nach jedem Service-Label wieder getrennt"
    ],
    "options_en": [
      "Between two PEs, one T-LDP session is typically sufficient; multiple services can be signaled over it",
      "A dedicated T-LDP transport session is mandatory per service",
      "T-LDP session is possible only for the first service",
      "T-LDP is torn down after every service label"
    ],
    "correctIndex": 0,
    "explanation": "Die Session kann mehrere FEC-/Service-Eintraege tragen, daher nicht zwingend eine Session pro Service.",
    "explanation_en": "The session can carry multiple FEC/service entries, so one session per service is not mandatory.",
    "extraInfo": "Das verbessert Skalierung und reduziert Session-Overhead.",
    "extraInfo_en": "This improves scalability and reduces session overhead.",
    "tip": "Session teilen, Services darin signalisieren.",
    "tip_en": "Share the session, signal services inside it.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "T-LDP",
      "Scalability"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q5",
    "question": "Welche Folge hat ein VC-ID-Mismatch in einer Punkt-zu-Punkt-PW-Bindung im Kurskontext?",
    "question_en": "What is the effect of a VC-ID mismatch in a point-to-point PW binding in course context?",
    "options": [
      "Es kommt kein passendes Service-Label/PW zustande",
      "Der Service faellt auf GRE-Transport zurueck",
      "Nur Unknown Unicast ist betroffen, Known Unicast bleibt ok",
      "Es betrifft nur die Customer-ID-Auswertung"
    ],
    "options_en": [
      "No matching service label/PW comes up",
      "The service falls back to GRE transport",
      "Only unknown unicast is affected; known unicast remains fine",
      "It affects only customer-ID evaluation"
    ],
    "correctIndex": 0,
    "explanation": "Bei VC-ID-Mismatch fehlt die eindeutige End-zu-End-Zuordnung fuer den PW-/Service-Label-Kontext.",
    "explanation_en": "With VC-ID mismatch, the end-to-end mapping for PW/service-label context is missing.",
    "extraInfo": "Das gilt besonders fuer p2p-PW-/spoke-SDP-Logik und ist eine haeufige Fehlerquelle.",
    "extraInfo_en": "This is especially true for p2p PW/spoke-SDP logic and is a common failure source.",
    "tip": "VC-ID muss auf beiden Enden zusammenpassen.",
    "tip_en": "VC ID must match on both ends.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "VC ID",
      "T-LDP",
      "Troubleshooting"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q6",
    "question": "Welche Aussage zur Broadcast-Domain in einem VPLS-Service ist kursnah korrekt?",
    "question_en": "Which statement about broadcast domain behavior in a VPLS service is correct in course context?",
    "options": [
      "Alle SAPs eines VPLS gehoeren zur selben Broadcast-Domain, unabhaengig von CE-seitigen VLAN-Tag-Details",
      "Jeder SAP bildet in VPLS immer eine getrennte Broadcast-Domain",
      "Broadcast-Domain gibt es nur in VPWS, nicht in VPLS",
      "Broadcast-Traffic wird in VPLS nie repliziert"
    ],
    "options_en": [
      "All SAPs in a VPLS belong to the same broadcast domain, independent of CE-side VLAN-tag details",
      "Each SAP always forms a separate broadcast domain in VPLS",
      "Broadcast domain exists only in VPWS, not VPLS",
      "Broadcast traffic is never replicated in VPLS"
    ],
    "correctIndex": 0,
    "explanation": "VPLS bildet eine gemeinsame L2-Domain je Serviceinstanz ueber alle angebundenen SAPs/PEs.",
    "explanation_en": "VPLS forms one shared Layer-2 domain per service instance across all attached SAPs/PEs.",
    "extraInfo": "Tag-Handling am Edge beeinflusst Mapping, aber die Service-Domain bleibt gemeinschaftlich.",
    "extraInfo_en": "Edge tag handling affects mapping, but the service domain remains shared.",
    "tip": "Ein VPLS-Service = eine gemeinsame L2-Domain.",
    "tip_en": "One VPLS service = one shared L2 domain.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "Broadcast Domain",
      "SAP"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q7",
    "question": "Wie verhaelt sich MAC-Learning in VPLS im Kurskontext?",
    "question_en": "How does MAC learning behave in VPLS in course context?",
    "options": [
      "MAC-Adressen werden pro Serviceinstanz gelernt (virtueller Switch pro Service)",
      "MAC-Adressen werden global ueber alle Services gemeinsam gelernt",
      "VPLS braucht kein MAC-Learning",
      "MAC-Learning passiert nur auf CE-Routern"
    ],
    "options_en": [
      "MAC addresses are learned per service instance (virtual switch per service)",
      "MAC addresses are learned globally across all services",
      "VPLS does not need MAC learning",
      "MAC learning happens only on CE routers"
    ],
    "correctIndex": 0,
    "explanation": "Jeder VPLS-Service hat seine eigene Forwarding-/MAC-Tabelle wie ein separater virtueller Switch.",
    "explanation_en": "Each VPLS service has its own forwarding/MAC table like a separate virtual switch.",
    "extraInfo": "Das verhindert ungewollte Vermischung zwischen verschiedenen Kundendiensten.",
    "extraInfo_en": "This prevents undesired mixing between different customer services.",
    "tip": "MAC-Learning ist service-lokal.",
    "tip_en": "MAC learning is service-local.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "MAC Learning",
      "Virtual Switch"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q8",
    "question": "Wie wird Unknown-Unicast-Traffic in VPLS standardmaessig behandelt?",
    "question_en": "How is unknown-unicast traffic handled by default in VPLS?",
    "options": [
      "Er wird repliziert/flooded auf alle relevanten LSPs/PWs innerhalb des Services",
      "Er wird immer gedroppt",
      "Er wird immer nur zum Root-PE gesendet",
      "Er wird als Broadcast im IGP signalisiert"
    ],
    "options_en": [
      "It is replicated/flooded to all relevant LSPs/PWs within the service",
      "It is always dropped",
      "It is always sent only to the root PE",
      "It is signaled as broadcast in the IGP"
    ],
    "correctIndex": 0,
    "explanation": "Wenn die Destination-MAC unbekannt ist, wird im VPLS standardmaessig geflutet, damit der Zielort erreicht werden kann.",
    "explanation_en": "When destination MAC is unknown, VPLS floods by default so the destination can still be reached.",
    "extraInfo": "Sobald MAC gelernt wurde, kann danach gezielt unicast weitergeleitet werden.",
    "extraInfo_en": "Once MAC is learned, forwarding can then be targeted unicast.",
    "tip": "Unknown = flood, known = gezielt.",
    "tip_en": "Unknown = flood, known = targeted.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "Unknown Unicast",
      "Flooding"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "telco-m2s2-q9",
    "question": "Wie wird Known-Unicast-Traffic in VPLS standardmaessig behandelt?",
    "question_en": "How is known-unicast traffic handled by default in VPLS?",
    "options": [
      "Er wird nur zum bekannten Zielport/Ziel-PW weitergeleitet, nicht mehr geflutet",
      "Er wird weiterhin an alle PEs repliziert",
      "Er wird immer ueber den kuerzesten IGP-Pfad als IP geroutet",
      "Er wird nur lokal am Ingress-PE verarbeitet"
    ],
    "options_en": [
      "It is forwarded only to the known destination port/PW and no longer flooded",
      "It continues to be replicated to all PEs",
      "It is always IP-routed over the shortest IGP path",
      "It is processed only locally at ingress PE"
    ],
    "correctIndex": 0,
    "explanation": "Bei bekannter Ziel-MAC erfolgt selektive Weiterleitung statt breitflaechigem Flooding.",
    "explanation_en": "With known destination MAC, forwarding is selective instead of broad flooding.",
    "extraInfo": "Das ist der Effizienzgewinn durch korrektes MAC-Learning im VPLS.",
    "extraInfo_en": "That is the efficiency gain enabled by proper MAC learning in VPLS.",
    "tip": "Known unicast = gezielte Weiterleitung.",
    "tip_en": "Known unicast = targeted forwarding.",
    "tags": [
      "Telecommunication",
      "Modul 2",
      "Section 2",
      "VPLS",
      "Known Unicast",
      "MAC Learning"
    ],
    "source": "Telecommunication Grundlagen",
    "source_en": "Telecommunication basics",
    "module": "Modul 2",
    "module_en": "Module 2",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q1",
    "question": "Wofuer steht BGP?",
    "question_en": "What does BGP stand for?",
    "options": [
      "Border Gateway Protocol",
      "Backbone Grouping Protocol",
      "Broadcast Gateway Procedure",
      "Binary Gateway Process"
    ],
    "options_en": [
      "Border Gateway Protocol",
      "Backbone Grouping Protocol",
      "Broadcast Gateway Procedure",
      "Binary Gateway Process"
    ],
    "correctIndex": 0,
    "explanation": "BGP bedeutet Border Gateway Protocol und ist das zentrale Inter-Domain-Routingprotokoll im Internet.",
    "explanation_en": "BGP means Border Gateway Protocol and is the core inter-domain routing protocol of the Internet.",
    "extraInfo": "Inter-Domain bedeutet hier: Routing zwischen verschiedenen autonomen Systemen (AS).",
    "extraInfo_en": "Inter-domain here means routing between different autonomous systems (AS).",
    "tip": "BGP = Border Gateway Protocol.",
    "tip_en": "BGP = Border Gateway Protocol.",
    "tags": [
      "BGP",
      "Overview",
      "Routing",
      "Inter-Domain"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q2",
    "question": "Welcher Protokolltyp passt am besten zu BGP?",
    "question_en": "Which protocol type best matches BGP?",
    "options": [
      "Path-Vector-Protokoll",
      "Distance-Vector-Protokoll",
      "Reines Link-State-Protokoll",
      "Layer-2-Spanning-Tree-Protokoll"
    ],
    "options_en": [
      "Path-vector protocol",
      "Distance-vector protocol",
      "Pure link-state protocol",
      "Layer-2 spanning-tree protocol"
    ],
    "correctIndex": 0,
    "explanation": "BGP wird klassisch als Path-Vector-Protokoll beschrieben, da es u. a. den AS-Pfad fuer Routingentscheidungen nutzt.",
    "explanation_en": "BGP is classically described as a path-vector protocol because it uses the AS path for routing decisions.",
    "extraInfo": "Der AS_PATH ist zugleich ein zentraler Mechanismus zur Schleifenvermeidung zwischen AS.",
    "extraInfo_en": "AS_PATH is also a key loop-prevention mechanism between ASes.",
    "tip": "BGP denkt in Pfaden zwischen AS, nicht nur in Metriken.",
    "tip_en": "BGP reasons in AS paths, not only metrics.",
    "tags": [
      "BGP",
      "Overview",
      "Path Vector",
      "AS_PATH"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q3",
    "question": "Welchen Transport nutzt BGP fuer seine Session?",
    "question_en": "Which transport does BGP use for its session?",
    "options": [
      "TCP Port 179",
      "UDP Port 179",
      "ICMP Echo Session",
      "SCTP Port 179"
    ],
    "options_en": [
      "TCP port 179",
      "UDP port 179",
      "ICMP echo session",
      "SCTP port 179"
    ],
    "correctIndex": 0,
    "explanation": "BGP baut eine zuverlaessige TCP-Verbindung auf Port 179 zwischen Peers auf.",
    "explanation_en": "BGP establishes a reliable TCP connection on port 179 between peers.",
    "extraInfo": "Darum sind bei BGP-Fehlern oft auch TCP-Reachability und Filter/ACL zu pruefen.",
    "extraInfo_en": "That is why BGP troubleshooting often includes TCP reachability and ACL/filter checks.",
    "tip": "BGP sitzt auf TCP/179.",
    "tip_en": "BGP runs on TCP/179.",
    "tags": [
      "BGP",
      "Overview",
      "TCP",
      "Port 179"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q4",
    "question": "Was ist der Kernunterschied zwischen eBGP und iBGP?",
    "question_en": "What is the core difference between eBGP and iBGP?",
    "options": [
      "eBGP laeuft zwischen verschiedenen AS, iBGP innerhalb desselben AS",
      "eBGP nutzt UDP, iBGP TCP",
      "eBGP ist Layer 2, iBGP Layer 3",
      "eBGP kann keine Policies, iBGP schon"
    ],
    "options_en": [
      "eBGP runs between different ASes, iBGP within the same AS",
      "eBGP uses UDP, iBGP TCP",
      "eBGP is Layer 2, iBGP Layer 3",
      "eBGP cannot do policies, iBGP can"
    ],
    "correctIndex": 0,
    "explanation": "Die Unterscheidung folgt der AS-Grenze: extern zwischen AS (eBGP) vs intern im gleichen AS (iBGP).",
    "explanation_en": "The distinction follows AS boundaries: external between ASes (eBGP) vs internal within the same AS (iBGP).",
    "extraInfo": "Beide nutzen TCP als Session-Transport, aber mit unterschiedlichen Betriebsregeln.",
    "extraInfo_en": "Both use TCP as transport, but with different operational rules.",
    "tip": "e = external, i = internal.",
    "tip_en": "e = external, i = internal.",
    "tags": [
      "BGP",
      "Overview",
      "eBGP",
      "iBGP",
      "AS"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q5",
    "question": "Welche Rolle spielt der AS_PATH in BGP am direktesten?",
    "question_en": "What is the most direct role of AS_PATH in BGP?",
    "options": [
      "Schleifenvermeidung zwischen AS und wichtiger Best-Path-Faktor",
      "Ersetzt die Next-Hop-IP vollstaendig",
      "Steuert nur QoS im Core",
      "Ist nur fuer IPv6 vorhanden"
    ],
    "options_en": [
      "Inter-AS loop prevention and an important best-path factor",
      "It fully replaces next-hop IP",
      "It controls only core QoS",
      "It exists only for IPv6"
    ],
    "correctIndex": 0,
    "explanation": "AS_PATH zeigt, durch welche AS ein Prefix gelernt wurde. Ein bereits enthaltenes eigenes AS weist auf eine Schleife hin.",
    "explanation_en": "AS_PATH shows through which ASes a prefix was learned. Seeing your own AS indicates a loop.",
    "extraInfo": "Neben Loop-Check wird AS_PATH auch in vielen Best-Path-/Policy-Entscheidungen genutzt.",
    "extraInfo_en": "Beyond loop checks, AS_PATH is also used in many best-path/policy decisions.",
    "tip": "AS_PATH lesen = Herkunft + Loop-Hinweis.",
    "tip_en": "Read AS_PATH = origin trail + loop hint.",
    "tags": [
      "BGP",
      "Overview",
      "AS_PATH",
      "Loop Prevention",
      "Best Path"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q6",
    "question": "Welche Aussage zu BGP-Updates ist im Overview korrekt?",
    "question_en": "Which statement about BGP updates is correct in the overview?",
    "options": [
      "BGP sendet nach dem Initialaustausch typischerweise inkrementelle Updates statt periodischer Full-Table-Updates",
      "BGP sendet jede Minute immer die komplette Routingtabelle",
      "BGP nutzt nur Broadcast-Updates im LAN",
      "BGP aktualisiert Routen ausschliesslich ueber ICMP"
    ],
    "options_en": [
      "After initial exchange, BGP typically sends incremental updates instead of periodic full-table updates",
      "BGP always sends the full routing table every minute",
      "BGP uses only LAN broadcast updates",
      "BGP updates routes only via ICMP"
    ],
    "correctIndex": 0,
    "explanation": "BGP ist event-getrieben: es signalisiert Aenderungen, statt staendig komplette Tabellen zu versenden.",
    "explanation_en": "BGP is event-driven: it signals changes instead of constantly sending full tables.",
    "extraInfo": "Keepalives dienen dabei vor allem dem Session-Liveness-Check.",
    "extraInfo_en": "Keepalives are primarily used for session liveness checks.",
    "tip": "BGP: initial full exchange, danach inkrementell.",
    "tip_en": "BGP: initial full exchange, then incremental.",
    "tags": [
      "BGP",
      "Overview",
      "Updates",
      "Incremental",
      "Keepalive"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q7",
    "question": "Was ist ein zentraler Vorteil von BGP gegenueber rein metrischen IGP-Entscheidungen?",
    "question_en": "What is a central BGP advantage compared to purely metric-based IGP decisions?",
    "options": [
      "Starke Policy-Steuerung fuer Routingentscheidungen",
      "Automatische Layer-2-MAC-Learning-Funktion",
      "Garantiert immer den kuerzesten physikalischen Weg",
      "Ersetzt ACLs und Firewalls"
    ],
    "options_en": [
      "Strong policy control over routing decisions",
      "Automatic Layer-2 MAC learning",
      "Always guarantees the physically shortest path",
      "Replaces ACLs and firewalls"
    ],
    "correctIndex": 0,
    "explanation": "BGP ist stark policy-getrieben und erlaubt gezielte Steuerung von Ein- und Ausganspfaden.",
    "explanation_en": "BGP is strongly policy-driven and allows precise control of inbound and outbound path selection.",
    "extraInfo": "Darum ist BGP im Provider- und Internet-Edge-Bereich so zentral.",
    "extraInfo_en": "That is why BGP is so central at provider and Internet edges.",
    "tip": "BGP = Policy first, nicht nur Metrik.",
    "tip_en": "BGP = policy first, not just metric.",
    "tags": [
      "BGP",
      "Overview",
      "Policy",
      "Routing Decision"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q8",
    "question": "Welche Attributgruppe gehoert typischerweise zu BGP-Best-Path-Entscheidungen?",
    "question_en": "Which attribute group typically belongs to BGP best-path decisions?",
    "options": [
      "LOCAL_PREF, AS_PATH, MED, NEXT_HOP",
      "STP Priority, BPDU Age, Port Cost",
      "ARP Timeout, MAC Age, VLAN ID",
      "ICMP Type, TCP Window, DNS TTL"
    ],
    "options_en": [
      "LOCAL_PREF, AS_PATH, MED, NEXT_HOP",
      "STP priority, BPDU age, port cost",
      "ARP timeout, MAC age, VLAN ID",
      "ICMP type, TCP window, DNS TTL"
    ],
    "correctIndex": 0,
    "explanation": "Diese BGP-Attribute sind zentrale Bausteine fuer die Pfadwahl und Policy-Auswertung.",
    "explanation_en": "These BGP attributes are key building blocks for path selection and policy evaluation.",
    "extraInfo": "Die exakte Reihenfolge ist implementations-/designabhaengig, der Overview-Fokus liegt auf den Attributrollen.",
    "extraInfo_en": "Exact order can vary by implementation/design; overview focus is on attribute roles.",
    "tip": "LOCAL_PREF und AS_PATH sind in der Praxis besonders wichtig.",
    "tip_en": "LOCAL_PREF and AS_PATH are especially important in practice.",
    "tags": [
      "BGP",
      "Overview",
      "Best Path",
      "Attributes",
      "LOCAL_PREF",
      "MED"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q9",
    "question": "Welche Aussage zu iBGP-Skalierung ist im Overview korrekt?",
    "question_en": "Which statement about iBGP scaling is correct in the overview?",
    "options": [
      "Ohne Zusatzmechanismen wird iBGP klassisch als Full-Mesh zwischen BGP-Speakern aufgebaut",
      "iBGP braucht nie direkte Session-Beziehungen",
      "iBGP kann nur mit einem einzigen Router pro AS betrieben werden",
      "iBGP ersetzt das IGP im Core vollstaendig"
    ],
    "options_en": [
      "Without extra mechanisms, iBGP is classically built as a full mesh among BGP speakers",
      "iBGP never needs direct session relationships",
      "iBGP can only run with one router per AS",
      "iBGP fully replaces IGP in the core"
    ],
    "correctIndex": 0,
    "explanation": "Im Grundmodell erfordert iBGP ein Full-Mesh; fuer Skalierung kommen spaeter z. B. Route Reflector ins Spiel.",
    "explanation_en": "In the base model, iBGP requires a full mesh; later scaling usually uses route reflectors.",
    "extraInfo": "Das ist wichtig fuer Module, die spaeter auf RR/Confederations eingehen.",
    "extraInfo_en": "This becomes important for later modules covering RR/confederations.",
    "tip": "iBGP-Basis = Full-Mesh-Idee merken.",
    "tip_en": "Remember the iBGP base full-mesh concept.",
    "tags": [
      "BGP",
      "Overview",
      "iBGP",
      "Scalability",
      "Full Mesh"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q10",
    "question": "Welche Aussage zur Beziehung zwischen BGP und IGP trifft im Overview am ehesten zu?",
    "question_en": "Which statement about the relationship between BGP and IGP is most accurate in the overview?",
    "options": [
      "BGP entscheidet Pfade per Policy/Attribute, waehrend IGP intern die Erreichbarkeit im AS bereitstellt",
      "BGP und IGP sind identisch und austauschbar",
      "BGP benoetigt nie eine interne Erreichbarkeit des Next Hops",
      "IGP dient nur fuer Layer-2-Broadcast"
    ],
    "options_en": [
      "BGP selects paths via policy/attributes, while IGP provides internal reachability inside the AS",
      "BGP and IGP are identical and interchangeable",
      "BGP never needs internal next-hop reachability",
      "IGP is only for Layer-2 broadcast"
    ],
    "correctIndex": 0,
    "explanation": "In typischen Designs liefert IGP den Unterbau (Reachability), BGP steuert Inter-Domain-Pfade und Policies.",
    "explanation_en": "In typical designs, IGP provides the reachability underlay while BGP controls inter-domain paths and policies.",
    "extraInfo": "Darum werden BGP-Probleme oft gemeinsam mit IGP-/Next-Hop-Reachability betrachtet.",
    "extraInfo_en": "That is why BGP issues are often analyzed together with IGP/next-hop reachability.",
    "tip": "IGP = Unterbau, BGP = Policy-/Interdomain-Steuerung.",
    "tip_en": "IGP = underlay reachability, BGP = inter-domain policy control.",
    "tags": [
      "BGP",
      "Overview",
      "IGP",
      "Next Hop",
      "Design"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q11",
    "question": "Was ist ein Autonomous System (AS)?",
    "question_en": "What is an Autonomous System (AS)?",
    "options": [
      "Eine Sammlung von Routern unter einer gemeinsamen administrativen Kontrolle",
      "Ein einzelner Router mit zwei Loopbacks",
      "Ein Layer-2-VLAN ueber mehrere Standorte",
      "Ein DNS-Cluster"
    ],
    "options_en": [
      "A collection of routers under a common administrative control",
      "A single router with two loopbacks",
      "A Layer-2 VLAN across multiple sites",
      "A DNS cluster"
    ],
    "correctIndex": 0,
    "explanation": "Ein AS ist ein logisch zusammengehoeriger Routing-Verbund unter einer Organisation.",
    "explanation_en": "An AS is a logically grouped routing domain operated by one organization.",
    "extraInfo": "Innerhalb des AS gelten eigene Routingregeln und Policies.",
    "extraInfo_en": "Inside an AS, its own routing rules and policies apply.",
    "tip": "AS = administrativer Routing-Verbund.",
    "tip_en": "AS = administratively controlled routing domain.",
    "tags": [
      "BGP",
      "Overview",
      "AS",
      "Basics"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q12",
    "question": "Wer weist einem AS typischerweise die eindeutige AS-Nummer zu?",
    "question_en": "Who typically assigns the unique AS number to an AS?",
    "options": [
      "Eine Regional Internet Registry (RIR)",
      "Der lokale Layer-2-Switch",
      "Das DNS-Protokoll",
      "Der CE-Router per DHCP"
    ],
    "options_en": [
      "A Regional Internet Registry (RIR)",
      "The local Layer-2 switch",
      "The DNS protocol",
      "The CE router via DHCP"
    ],
    "correctIndex": 0,
    "explanation": "AS-Nummern werden in der Praxis ueber die Registry-Struktur vergeben (kursnah: RIR).",
    "explanation_en": "In practice, AS numbers are assigned via the registry structure (course-style: RIR).",
    "extraInfo": "Die ASN muss global eindeutig sein, wenn sie im Internet-Kontext genutzt wird.",
    "extraInfo_en": "The ASN must be globally unique when used in Internet context.",
    "tip": "ASN-Zuteilung: RIR merken.",
    "tip_en": "ASN assignment: remember RIR.",
    "tags": [
      "BGP",
      "Overview",
      "AS Number",
      "RIR"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q13",
    "question": "Welches Beispiel passt typischerweise zu einem AS?",
    "question_en": "Which example typically matches an AS?",
    "options": [
      "Ein ISP (Internet Service Provider)",
      "Ein einzelner Endnutzer-PC",
      "Ein WLAN-Access-Point",
      "Ein einzelnes VLAN-Tag"
    ],
    "options_en": [
      "An ISP (Internet Service Provider)",
      "A single end-user PC",
      "A wireless access point",
      "A single VLAN tag"
    ],
    "correctIndex": 0,
    "explanation": "Ein ISP betreibt typischerweise ein eigenes AS mit eigener Routingpolitik.",
    "explanation_en": "An ISP typically operates its own AS with its own routing policy.",
    "extraInfo": "Auch grosse Enterprises koennen ein eigenes AS betreiben.",
    "extraInfo_en": "Large enterprises may also operate their own AS.",
    "tip": "AS im Alltag: oft ISP.",
    "tip_en": "Common AS example: ISP.",
    "tags": [
      "BGP",
      "Overview",
      "AS",
      "ISP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q14",
    "question": "Wie heissen Interior Routing Protocols (IRP) im Regelfall noch?",
    "question_en": "What is another common name for Interior Routing Protocols (IRP)?",
    "options": [
      "IGP (Interior Gateway Protocol)",
      "EGP (Exterior Gateway Protocol)",
      "L2P (Layer-2 Protocol)",
      "ARP (Address Resolution Protocol)"
    ],
    "options_en": [
      "IGP (Interior Gateway Protocol)",
      "EGP (Exterior Gateway Protocol)",
      "L2P (Layer-2 Protocol)",
      "ARP (Address Resolution Protocol)"
    ],
    "correctIndex": 0,
    "explanation": "IRP und IGP werden im Kurskontext synonym fuer interne AS-Routingprotokolle verwendet.",
    "explanation_en": "In course context, IRP and IGP are used synonymously for internal AS routing protocols.",
    "extraInfo": "Typische IGPs: OSPF oder IS-IS.",
    "extraInfo_en": "Typical IGPs: OSPF or IS-IS.",
    "tip": "IRP = IGP.",
    "tip_en": "IRP = IGP.",
    "tags": [
      "BGP",
      "Overview",
      "IGP",
      "IRP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q15",
    "question": "Was war der urspruengliche BGP-Zweck?",
    "question_en": "What was the original purpose of BGP?",
    "options": [
      "Als Exterior Routing Protocol Reachability-Informationen zwischen unabhaengigen AS austauschen",
      "Als Layer-2-Protokoll VLAN-Tags verteilen",
      "Als Ersatz fuer TCP Session-Reliability bereitstellen",
      "Als DNS-Zonentransfer-Protokoll dienen"
    ],
    "options_en": [
      "To exchange reachability information between independent ASes as an exterior routing protocol",
      "To distribute VLAN tags as a Layer-2 protocol",
      "To replace TCP session reliability",
      "To serve as DNS zone-transfer protocol"
    ],
    "correctIndex": 0,
    "explanation": "BGP entstand fuer den Austausch von Netzwerkreichweite ueber AS-Grenzen hinweg.",
    "explanation_en": "BGP was created to exchange network reachability across AS boundaries.",
    "extraInfo": "Heute kann BGP deutlich mehr als nur den klassischen IPv4-Unicast-Use-Case.",
    "extraInfo_en": "Today, BGP does much more than the classic IPv4 unicast use case.",
    "tip": "BGP startet als EGP fuer AS-zu-AS Reachability.",
    "tip_en": "BGP started as EGP for AS-to-AS reachability.",
    "tags": [
      "BGP",
      "Overview",
      "History",
      "EGP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q16",
    "question": "Wie hat sich BGP im Lauf der Zeit erweitert?",
    "question_en": "How has BGP evolved over time?",
    "options": [
      "Zu Multi-Protocol-BGP mit mehreren Address Families und zusaetzlichen Funktionen",
      "Es kann heute nur noch IPv4 und keine weiteren Familien",
      "Es wurde vollstaendig durch OSPF ersetzt",
      "Es arbeitet nur noch ohne Policies"
    ],
    "options_en": [
      "Into multiprotocol BGP with multiple address families and additional functions",
      "It now supports only IPv4 and no additional families",
      "It was completely replaced by OSPF",
      "It now works only without policies"
    ],
    "correctIndex": 0,
    "explanation": "Modernes BGP transportiert unterschiedliche AFI/SAFI-Kontexte und wird breit eingesetzt.",
    "explanation_en": "Modern BGP carries different AFI/SAFI contexts and is widely used.",
    "extraInfo": "Beispiele sind VPNv4/VPNv6, EVPN oder klassisches IPv4/IPv6-Unicast.",
    "extraInfo_en": "Examples include VPNv4/VPNv6, EVPN, or classic IPv4/IPv6 unicast.",
    "tip": "BGP heute: multiprotocol und vielseitig.",
    "tip_en": "Modern BGP: multiprotocol and versatile.",
    "tags": [
      "BGP",
      "Overview",
      "Multiprotocol",
      "Address Family"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q17",
    "question": "Wie nennt man Router, die BGP-Informationen miteinander austauschen?",
    "question_en": "What do you call routers that exchange BGP information with each other?",
    "options": [
      "Peers / Neighbors / Speakers",
      "Only route reflectors",
      "Nur LSR",
      "Nur CE-Router"
    ],
    "options_en": [
      "Peers / neighbors / speakers",
      "Only route reflectors",
      "Only LSRs",
      "Only CE routers"
    ],
    "correctIndex": 0,
    "explanation": "Diese Begriffe bezeichnen den BGP-Nachbarschaftskontext.",
    "explanation_en": "These terms refer to BGP neighbor relationships.",
    "extraInfo": "In der Praxis wird meist einfach von BGP-Neighbors oder Peers gesprochen.",
    "extraInfo_en": "In practice, people mostly say BGP neighbors or peers.",
    "tip": "Neighbor = Peer = Speaker (im Kontext).",
    "tip_en": "Neighbor = peer = speaker (in context).",
    "tags": [
      "BGP",
      "Overview",
      "Neighbors",
      "Peers"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q18",
    "question": "Welche Aussage zur Session-Etablierung ist korrekt?",
    "question_en": "Which statement about session establishment is correct?",
    "options": [
      "Zuerst wird eine TCP-Session aufgebaut, danach die BGP-Session mit BGP-Messages",
      "BGP baut zuerst Updates auf und danach TCP",
      "BGP nutzt nur Discovery ohne Sessionaufbau",
      "BGP startet immer mit Notification"
    ],
    "options_en": [
      "First a TCP session is established, then the BGP session with BGP messages",
      "BGP first brings up updates and then TCP",
      "BGP uses only discovery without session establishment",
      "BGP always starts with notification"
    ],
    "correctIndex": 0,
    "explanation": "TCP liefert den zuverlaessigen Transport, darauf folgt die eigentliche BGP-Nachbarschaft.",
    "explanation_en": "TCP provides reliable transport; on top of it, the actual BGP adjacency is formed.",
    "extraInfo": "Deshalb sind TCP-Connectivity-Probleme oft die erste BGP-Fehlerursache.",
    "extraInfo_en": "That is why TCP connectivity issues are often the first BGP failure cause.",
    "tip": "Erst TCP, dann BGP.",
    "tip_en": "TCP first, then BGP.",
    "tags": [
      "BGP",
      "Overview",
      "Session",
      "TCP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q19",
    "question": "Welche Aussage zu Discovery bei BGP ist korrekt?",
    "question_en": "Which statement about BGP discovery is correct?",
    "options": [
      "BGP hat keinen automatischen Discovery-Mechanismus; Peers muessen explizit konfiguriert werden",
      "BGP entdeckt Nachbarn automatisch per Hello-Multicast",
      "BGP entdeckt Peers ueber ARP-Requests",
      "BGP Discovery funktioniert nur bei iBGP"
    ],
    "options_en": [
      "BGP has no automatic discovery mechanism; peers must be explicitly configured",
      "BGP discovers neighbors automatically via hello multicast",
      "BGP discovers peers through ARP requests",
      "BGP discovery works only for iBGP"
    ],
    "correctIndex": 0,
    "explanation": "Im Grundbetrieb wird jeder BGP-Peer explizit als Nachbar konfiguriert.",
    "explanation_en": "In basic operation, each BGP peer is explicitly configured as a neighbor.",
    "extraInfo": "Das unterscheidet BGP von vielen IGP-Hello-Mechanismen.",
    "extraInfo_en": "This differs from many IGP hello mechanisms.",
    "tip": "BGP = kein Auto-Neighbor.",
    "tip_en": "BGP = no auto-neighbor discovery.",
    "tags": [
      "BGP",
      "Overview",
      "Discovery",
      "Configuration"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q20",
    "question": "Welche Felder gehoeren typischerweise in die BGP OPEN-Message?",
    "question_en": "Which fields typically belong to the BGP OPEN message?",
    "options": [
      "Version, My AS, Hold Time, BGP Identifier, Optional Parameters (Capabilities)",
      "Source-IP als eigenes OPEN-Feld, ARP-Cache, VLAN-ID, ICMP-Type",
      "Nur Notification-Code und Error-Subcode",
      "Nur Route-Refresh und Keepalive-Timer"
    ],
    "options_en": [
      "Version, My AS, Hold Time, BGP Identifier, Optional Parameters (capabilities)",
      "Source IP as dedicated OPEN field, ARP cache, VLAN ID, ICMP type",
      "Only notification code and error subcode",
      "Only route-refresh and keepalive timer"
    ],
    "correctIndex": 0,
    "explanation": "Wichtig: Die Source-IP kommt aus der TCP-Session, nicht als separates OPEN-Feld.",
    "explanation_en": "Important: source IP comes from the TCP session, not as a separate OPEN field.",
    "extraInfo": "Zusatzfunktionen wie Address Families werden ueber Capabilities in Optional Parameters ausgehandelt.",
    "extraInfo_en": "Additional functions like address families are negotiated via capabilities in optional parameters.",
    "tip": "OPEN prueft Kompatibilitaet der Session-Parameter.",
    "tip_en": "OPEN validates compatibility of session parameters.",
    "tags": [
      "BGP",
      "Overview",
      "OPEN Message",
      "Capabilities"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q21",
    "question": "Was ist die Kernaufgabe von Import Policies in BGP?",
    "question_en": "What is the core purpose of import policies in BGP?",
    "options": [
      "Steuern, welche eingehenden Routen akzeptiert/abgelehnt oder in Attributen geaendert werden",
      "Nur TCP Keepalive-Intervalle aendern",
      "Nur MAC-Address-Learning beeinflussen",
      "Nur IGP-Adjazenzen aufbauen"
    ],
    "options_en": [
      "Control which incoming routes are accepted/rejected or modified in attributes",
      "Only change TCP keepalive intervals",
      "Only influence MAC address learning",
      "Only build IGP adjacencies"
    ],
    "correctIndex": 0,
    "explanation": "Import Policies sind ein zentrales Werkzeug fuer BGP-Routekontrolle und Attributmanipulation.",
    "explanation_en": "Import policies are a central mechanism for BGP route control and attribute manipulation.",
    "extraInfo": "Damit werden Security-, Traffic-Engineering- und Business-Regeln umgesetzt.",
    "extraInfo_en": "They implement security, traffic-engineering, and business rules.",
    "tip": "Import Policy = inbound Route-Filter + Attribut-Logik.",
    "tip_en": "Import policy = inbound route filtering + attribute logic.",
    "tags": [
      "BGP",
      "Overview",
      "Import Policy",
      "Routing Policy"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q22",
    "question": "Wofuer wird die BGP Route-Refresh Message genutzt?",
    "question_en": "What is the BGP route-refresh message used for?",
    "options": [
      "Nach Policy-Aenderungen einen Nachbarn um erneutes Senden von Routen zu bitten, damit sie mit neuer Policy neu bewertet werden",
      "Eine TCP-Session physisch neu zu starten",
      "Die ASN des Nachbarn zu aendern",
      "Nur Keepalive-Timer zu synchronisieren"
    ],
    "options_en": [
      "After policy changes, request a neighbor to resend routes so they can be re-evaluated with new policy",
      "Physically restart a TCP session",
      "Change the neighbor ASN",
      "Only synchronize keepalive timers"
    ],
    "correctIndex": 0,
    "explanation": "Route Refresh hilft, ohne Hard-Reset der Session eine erneute Policy-Anwendung auf empfangene Routen auszulÃ¶sen.",
    "explanation_en": "Route refresh helps trigger policy re-evaluation of received routes without hard-resetting the session.",
    "extraInfo": "Kursnah fuer Nokia 7750: in deinem Kontext besonders bei BGP-Informationen fuer VPRN relevant.",
    "extraInfo_en": "Course-style for Nokia 7750: in your context especially relevant with BGP information used for VPRN.",
    "tip": "Route Refresh = Routen neu anfordern, Policy neu anwenden.",
    "tip_en": "Route refresh = request routes again, reapply policy.",
    "tags": [
      "BGP",
      "Overview",
      "Route Refresh",
      "Policy"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s2-q23",
    "question": "Welche Zuordnung der BGP-Main-Messages ist korrekt?",
    "question_en": "Which mapping of main BGP messages is correct?",
    "options": [
      "OPEN = Sessionparameter austauschen, KEEPALIVE = Session am Leben halten, UPDATE = Routen announcen/withdrawn, NOTIFICATION = Fehler und Session-Abbruch",
      "OPEN = nur fuer VLAN-Tagging, KEEPALIVE = Route-Anzeige, UPDATE = TCP-Aufbau, NOTIFICATION = QoS",
      "UPDATE = nur fuer Keepalive, NOTIFICATION = nur fuer Route Refresh",
      "Es gibt in BGP nur OPEN und UPDATE"
    ],
    "options_en": [
      "OPEN = exchange session parameters, KEEPALIVE = maintain session liveness, UPDATE = announce/withdraw routes, NOTIFICATION = error and session teardown",
      "OPEN = only for VLAN tagging, KEEPALIVE = route display, UPDATE = TCP setup, NOTIFICATION = QoS",
      "UPDATE = only for keepalive, NOTIFICATION = only for route refresh",
      "BGP has only OPEN and UPDATE"
    ],
    "correctIndex": 0,
    "explanation": "Diese vier Message-Typen bilden den Kern einer klassischen BGP-Session.",
    "explanation_en": "These four message types form the core of a classic BGP session.",
    "extraInfo": "Route Refresh ist ein eigener Message-Typ fuer Re-Advertisement-Anforderung nach Policy-Change.",
    "extraInfo_en": "Route refresh is a separate message type for re-advertisement requests after policy changes.",
    "tip": "OPEN/KEEPALIVE/UPDATE/NOTIFICATION sind Pflichtwissen.",
    "tip_en": "OPEN/KEEPALIVE/UPDATE/NOTIFICATION are must-know basics.",
    "tags": [
      "BGP",
      "Overview",
      "Messages",
      "OPEN",
      "UPDATE",
      "KEEPALIVE",
      "NOTIFICATION"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2"
  },
  {
    "id": "bgp-m1s3-q1",
    "question": "Welche BGP Connection States gehoeren zur klassischen BGP FSM?",
    "question_en": "Which BGP connection states belong to the classic BGP FSM?",
    "options": [
      "Idle, Connect, Active, OpenSent, OpenConfirm, Established",
      "Down, Hello, Exchange, Loading, Full, Established",
      "Idle, TCP-Up, Policy, Update, Refresh, Done",
      "Init, Discover, Sync, Open, Forward, Close"
    ],
    "options_en": [
      "Idle, Connect, Active, OpenSent, OpenConfirm, Established",
      "Down, Hello, Exchange, Loading, Full, Established",
      "Idle, TCP-Up, Policy, Update, Refresh, Done",
      "Init, Discover, Sync, Open, Forward, Close"
    ],
    "correctIndex": 0,
    "explanation": "Die klassische BGP FSM besteht aus genau diesen sechs Zustaenden.",
    "explanation_en": "The classic BGP FSM consists of exactly these six states.",
    "extraInfo": "Fuer Troubleshooting sind vor allem Idle, Active und Established sehr praxisrelevant.",
    "extraInfo_en": "For troubleshooting, Idle, Active, and Established are especially relevant in practice.",
    "tip": "Die 6 StandardzustÃ¤nde der BGP FSM auswendig koennen.",
    "tip_en": "Know the 6 standard BGP FSM states by heart.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "States"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q2",
    "question": "Was bedeutet der Idle State bei BGP im Kurskontext am ehesten?",
    "question_en": "What does the Idle state mean in BGP in course context?",
    "options": [
      "Die Session ist nicht aktiv gestartet; bei administrativem Shutdown werden keine TCP-Verbindungsversuche gestartet",
      "Die Session hat bereits Updates ausgetauscht, wartet aber auf neue Communities",
      "Der Router floodet ARP, um den Peer zu finden",
      "Die OPEN-Message wurde bereits akzeptiert"
    ],
    "options_en": [
      "The session is not actively started; with administrative shutdown no TCP connection attempts are made",
      "The session has already exchanged updates but is waiting for new communities",
      "The router floods ARP to find the peer",
      "The OPEN message has already been accepted"
    ],
    "correctIndex": 0,
    "explanation": "Im Idle-Zustand startet BGP keine aktive Session. Bei administrativem Shutdown bleibt die Session dort.",
    "explanation_en": "In the Idle state, BGP does not actively start the session. With administrative shutdown, the session remains there.",
    "extraInfo": "Idle ist deshalb haeufig ein erster Hinweis auf Shutdown oder Startprobleme.",
    "extraInfo_en": "Idle is therefore often an early hint toward shutdown or start issues.",
    "tip": "Idle + Shutdown = keine TCP-Starts.",
    "tip_en": "Idle + shutdown = no TCP starts.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "Idle"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q3",
    "question": "Was beschreibt den BGP State Connect am besten?",
    "question_en": "What best describes the BGP Connect state?",
    "options": [
      "BGP versucht aktiv, die TCP-Verbindung zum Peer aufzubauen",
      "BGP hat bereits eine gueltige KEEPALIVE erhalten",
      "BGP ist nur noch fuer Route Refresh offen",
      "BGP hoert ausschliesslich passiv auf Updates"
    ],
    "options_en": [
      "BGP is actively trying to establish the TCP connection to the peer",
      "BGP has already received a valid KEEPALIVE",
      "BGP is open only for route refresh",
      "BGP is listening passively only for updates"
    ],
    "correctIndex": 0,
    "explanation": "Connect ist der Zustand, in dem der Aufbau der TCP-Session aktiv versucht wird.",
    "explanation_en": "Connect is the state in which the TCP session establishment is actively attempted.",
    "extraInfo": "Kursnah wird das oft mit dem Absenden des TCP SYN verknuepft.",
    "extraInfo_en": "Course-style, this is often associated with sending the TCP SYN.",
    "tip": "Connect = aktiver TCP-Aufbauversuch.",
    "tip_en": "Connect = active TCP connection attempt.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "Connect",
      "TCP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q4",
    "question": "Was bedeutet der BGP State Active RFC-/Nokia-konform am ehesten?",
    "question_en": "What does the BGP Active state most accurately mean in RFC/Nokia terms?",
    "options": [
      "Der Router lauscht auf eine eingehende TCP-Verbindung bzw. versucht nach Fehlschlag erneut den Sessionaufbau",
      "Die Session ist bereits established und transportiert aktiv Daten",
      "Der Peer hat gerade einen Route Reflector aktiviert",
      "Es bedeutet nur, dass ein TCP SYN empfangen wurde und sonst nichts"
    ],
    "options_en": [
      "The router is listening for an inbound TCP connection and/or retrying the session establishment after failure",
      "The session is already established and actively carrying data",
      "The peer has just enabled a route reflector",
      "It means only that a TCP SYN was received and nothing else"
    ],
    "correctIndex": 0,
    "explanation": "Active ist kein \"guter\" aktiver Betriebszustand, sondern typischerweise ein Zwischen-/Retry-Zustand beim TCP-Aufbau.",
    "explanation_en": "Active is not a \"good active\" operating state, but typically an intermediate/retry state during TCP establishment.",
    "extraInfo": "Stuck in Active deutet oft auf Erreichbarkeits-, ACL- oder Peer-Parameterprobleme hin.",
    "extraInfo_en": "Being stuck in Active often points to reachability, ACL, or peer-parameter issues.",
    "tip": "Active heisst bei BGP oft: Session kommt gerade nicht sauber hoch.",
    "tip_en": "Active in BGP often means the session is not coming up cleanly.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "Active",
      "Troubleshooting"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q5",
    "question": "Wann befindet sich eine BGP-Session in OpenSent?",
    "question_en": "When is a BGP session in OpenSent?",
    "options": [
      "Nachdem die TCP-Session steht und eine OPEN-Message gesendet wurde, waehrend auf die OPEN des Peers gewartet wird",
      "Nachdem bereits Updates ausgetauscht wurden",
      "Wenn nur noch Keepalives gesendet werden",
      "Direkt nach administrativem Shutdown"
    ],
    "options_en": [
      "After the TCP session is up and an OPEN message has been sent, while waiting for the peer's OPEN",
      "After updates have already been exchanged",
      "When only keepalives are sent",
      "Immediately after administrative shutdown"
    ],
    "correctIndex": 0,
    "explanation": "OpenSent folgt auf den erfolgreichen TCP-Aufbau und die lokal gesendete OPEN-Message.",
    "explanation_en": "OpenSent follows successful TCP establishment and the locally sent OPEN message.",
    "extraInfo": "Wenn hier ein Fehler passiert, sind OPEN-Inhalt oder Peer-Parameter oft die Ursache.",
    "extraInfo_en": "If errors occur here, OPEN content or peer parameters are often the cause.",
    "tip": "OpenSent = OPEN raus, auf OPEN rein warten.",
    "tip_en": "OpenSent = OPEN sent, waiting for OPEN in.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "OpenSent"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q6",
    "question": "Was beschreibt OpenConfirm am treffendsten?",
    "question_en": "What best describes OpenConfirm?",
    "options": [
      "Eine akzeptable OPEN wurde empfangen, KEEPALIVE wurde gesendet, jetzt wartet man auf KEEPALIVE vom Peer",
      "Die Session ist administrativ deaktiviert",
      "TCP wird noch gar nicht genutzt",
      "Nur Notifications werden noch akzeptiert"
    ],
    "options_en": [
      "An acceptable OPEN was received, a KEEPALIVE was sent, and now the router waits for the peer's KEEPALIVE",
      "The session is administratively disabled",
      "TCP is not yet used at all",
      "Only notifications are still accepted"
    ],
    "correctIndex": 0,
    "explanation": "OpenConfirm ist der letzte Vorstufen-Zustand vor Established.",
    "explanation_en": "OpenConfirm is the last pre-established state before Established.",
    "extraInfo": "Hier koennen auch noch Connection-Collision-Pruefungen eine Rolle spielen.",
    "extraInfo_en": "Connection collision checks may still matter here.",
    "tip": "Open bestaetigt, auf KEEPALIVE vom Peer warten.",
    "tip_en": "OPEN confirmed, waiting for peer KEEPALIVE.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "OpenConfirm",
      "Keepalive"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q7",
    "question": "Wann gilt eine BGP-Session als Established?",
    "question_en": "When is a BGP session considered Established?",
    "options": [
      "Wenn ein gueltiges KEEPALIVE vom Peer empfangen wurde und der Message-Austausch starten kann",
      "Sobald TCP SYN gesendet wurde",
      "Sobald die Session in Idle faellt",
      "Sobald ein Route Reflector konfiguriert wurde"
    ],
    "options_en": [
      "When a valid KEEPALIVE has been received from the peer and message exchange can start",
      "As soon as a TCP SYN is sent",
      "As soon as the session returns to Idle",
      "As soon as a route reflector is configured"
    ],
    "correctIndex": 0,
    "explanation": "Im Established-Zustand koennen UPDATE-, KEEPALIVE- und NOTIFICATION-Messages ausgetauscht werden.",
    "explanation_en": "In Established state, UPDATE, KEEPALIVE, and NOTIFICATION messages can be exchanged.",
    "extraInfo": "Erst hier ist die BGP-Nachbarschaft wirklich betriebsbereit.",
    "extraInfo_en": "Only here is the BGP adjacency truly operational.",
    "tip": "Established = Session steht, Routing kann laufen.",
    "tip_en": "Established = session is up, routing can operate.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "FSM",
      "Established"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q8",
    "question": "Welche Aussage zu BGP Peering Sessions ist korrekt?",
    "question_en": "Which statement about BGP peering sessions is correct?",
    "options": [
      "Gleiches AS = iBGP, unterschiedliches AS = eBGP",
      "Gleiches AS = eBGP, unterschiedliches AS = iBGP",
      "BGP kennt keine Unterscheidung zwischen intern und extern",
      "Nur eBGP nutzt TCP"
    ],
    "options_en": [
      "Same AS = iBGP, different AS = eBGP",
      "Same AS = eBGP, different AS = iBGP",
      "BGP makes no distinction between internal and external",
      "Only eBGP uses TCP"
    ],
    "correctIndex": 0,
    "explanation": "Die AS-Grenze entscheidet, ob eine Session intern oder extern ist.",
    "explanation_en": "The AS boundary determines whether a session is internal or external.",
    "extraInfo": "Diese Unterscheidung beeinflusst spaeter Weitergaberegeln und Default-Verhalten.",
    "extraInfo_en": "This distinction later affects advertisement rules and default behavior.",
    "tip": "Same AS = iBGP, different AS = eBGP.",
    "tip_en": "Same AS = iBGP, different AS = eBGP.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "iBGP",
      "eBGP",
      "AS"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q9",
    "question": "Welche iBGP-Regel beschreibt die Split-Horizon-Regel am besten?",
    "question_en": "Which statement best describes the iBGP split-horizon rule?",
    "options": [
      "Eine Route, die von einem iBGP-Peer gelernt wurde, darf nicht an andere iBGP-Peers weiteradvertised werden",
      "iBGP-Routen muessen immer an alle iBGP-Peers gespiegelt werden",
      "Nur eBGP-Routen duerfen in iBGP gelernt werden",
      "Split Horizon gilt nur fuer MED"
    ],
    "options_en": [
      "A route learned from one iBGP peer must not be advertised to other iBGP peers",
      "iBGP routes must always be mirrored to all iBGP peers",
      "Only eBGP routes may be learned in iBGP",
      "Split horizon applies only to MED"
    ],
    "correctIndex": 0,
    "explanation": "Diese Regel verhindert Schleifen innerhalb eines AS im klassischen iBGP-Modell.",
    "explanation_en": "This rule prevents loops inside an AS in the classic iBGP model.",
    "extraInfo": "Sie ist der Hauptgrund fuer Full-Mesh oder spaeter Route Reflectors.",
    "extraInfo_en": "It is the main reason for full mesh or later route reflectors.",
    "tip": "Von iBGP gelernt -> nicht an anderes iBGP weiter.",
    "tip_en": "Learned from iBGP -> do not advertise to other iBGP.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "iBGP",
      "Split Horizon"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q10",
    "question": "Warum fuehrt die klassische iBGP-Logik zu einer Full-Mesh-Anforderung?",
    "question_en": "Why does classic iBGP logic lead to a full-mesh requirement?",
    "options": [
      "Weil iBGP-Routen nicht zwischen iBGP-Peers weiteradvertised werden und daher jeder relevante Speaker direkt peeren muss",
      "Weil TCP nur Full Mesh erlaubt",
      "Weil iBGP keine NEXT_HOP-Attribute kennt",
      "Weil eBGP sonst automatisch abgeschaltet wird"
    ],
    "options_en": [
      "Because iBGP-learned routes are not re-advertised between iBGP peers, so each relevant speaker must peer directly",
      "Because TCP allows only full mesh",
      "Because iBGP has no NEXT_HOP attribute",
      "Because eBGP would otherwise be shut down automatically"
    ],
    "correctIndex": 0,
    "explanation": "Die Split-Horizon-Annahme impliziert, dass alle Speaker sich direkt kennen muessen, wenn jeder alles lernen soll.",
    "explanation_en": "The split-horizon assumption implies that all speakers need direct peerings if everyone should learn everything.",
    "extraInfo": "Genau deshalb skaliert klassisches iBGP ohne Zusatzmechanismen schlecht.",
    "extraInfo_en": "That is exactly why classic iBGP scales poorly without extra mechanisms.",
    "tip": "Split Horizon + alle Routen fuer alle = Full Mesh.",
    "tip_en": "Split horizon + all routes for all = full mesh.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "iBGP",
      "Full Mesh",
      "Scalability"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s3-q11",
    "question": "Wofuer werden Route Reflectors im iBGP-Kontext eingesetzt?",
    "question_en": "What are route reflectors used for in iBGP context?",
    "options": [
      "Um die Full-Mesh-Anforderung zu reduzieren und iBGP besser skalieren zu lassen",
      "Um TCP durch UDP zu ersetzen",
      "Um eBGP in Layer-2 zu verwandeln",
      "Um nur noch KEEPALIVE-Messages zu senden"
    ],
    "options_en": [
      "To reduce the full-mesh requirement and let iBGP scale better",
      "To replace TCP with UDP",
      "To turn eBGP into Layer 2",
      "To send only KEEPALIVE messages"
    ],
    "correctIndex": 0,
    "explanation": "Route Reflectors sind die klassische Loesung, um grosse iBGP-Full-Meshes beherrschbar zu machen.",
    "explanation_en": "Route reflectors are the classic solution to make large iBGP full meshes manageable.",
    "extraInfo": "Die Route-Reflector-Details kommen meist in spaeteren BGP-Abschnitten.",
    "extraInfo_en": "Route-reflector details usually come in later BGP sections.",
    "tip": "RR = weniger iBGP-Sessions, bessere Skalierung.",
    "tip_en": "RR = fewer iBGP sessions, better scalability.",
    "tags": [
      "BGP",
      "Peering Sessions",
      "Route Reflector",
      "iBGP",
      "Scalability"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 3",
    "section_en": "Section 3"
  },
  {
    "id": "bgp-m1s4-q1",
    "question": "Wie werden BGP-Path-Attribute grundsaetzlich eingeteilt?",
    "question_en": "How are BGP path attributes broadly classified?",
    "options": [
      "In well-known und optional",
      "Nur in internal und external",
      "Nur in TCP und UDP",
      "Nur in ingress und egress"
    ],
    "options_en": [
      "Into well-known and optional",
      "Only into internal and external",
      "Only into TCP and UDP",
      "Only into ingress and egress"
    ],
    "correctIndex": 0,
    "explanation": "BGP unterscheidet zuerst zwischen well-known und optionalen Attributen. Danach folgen weitere Unterteilungen wie mandatory, discretionary, transitive und non-transitive.",
    "explanation_en": "BGP first distinguishes between well-known and optional attributes. Further subtypes then include mandatory, discretionary, transitive, and non-transitive.",
    "extraInfo": "Diese Einteilung ist wichtig, weil sie bestimmt, welche Attribute verstanden oder weitergegeben werden muessen.",
    "extraInfo_en": "This classification matters because it determines which attributes must be understood or propagated.",
    "tip": "Erst grob: well-known vs optional.",
    "tip_en": "First broad split: well-known vs optional.",
    "tags": [
      "BGP",
      "Path Attributes",
      "Overview"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q2",
    "question": "Was ist der Unterschied zwischen well-known mandatory und well-known discretionary Attributen?",
    "question_en": "What is the difference between well-known mandatory and well-known discretionary attributes?",
    "options": [
      "Mandatory muessen in jedem passenden UPDATE vorhanden sein, discretionary nur wenn sie fuer die Route relevant sind",
      "Mandatory gelten nur fuer eBGP, discretionary nur fuer iBGP",
      "Mandatory werden nie propagated, discretionary immer",
      "Es gibt keinen Unterschied"
    ],
    "options_en": [
      "Mandatory must be present in every applicable UPDATE, while discretionary are included only when relevant to the route",
      "Mandatory apply only to eBGP, discretionary only to iBGP",
      "Mandatory are never propagated, discretionary always are",
      "There is no difference"
    ],
    "correctIndex": 0,
    "explanation": "Well-known mandatory Attribute gehoeren zwingend zu passenden Routen-Updates. Well-known discretionary Attribute sind ebenfalls standardisiert, aber nicht fuer jede Route erforderlich.",
    "explanation_en": "Well-known mandatory attributes are required in applicable route updates. Well-known discretionary attributes are also standardized, but not required for every route.",
    "extraInfo": "Mandatory heisst nicht automatisch 'immer in jeder denkbaren Nachricht', sondern fuer die Route bzw. das UPDATE, fuer das sie gelten.",
    "extraInfo_en": "Mandatory does not mean 'in every conceivable message', but rather for the route or UPDATE where they apply.",
    "tip": "Mandatory = Pflicht, discretionary = situationsabhaengig.",
    "tip_en": "Mandatory = required, discretionary = situation-dependent.",
    "tags": [
      "BGP",
      "Path Attributes",
      "Mandatory",
      "Discretionary"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q3",
    "question": "Was bedeutet 'optional transitive' bei einem BGP-Attribut?",
    "question_en": "What does 'optional transitive' mean for a BGP attribute?",
    "options": [
      "Es kann weitergegeben werden, selbst wenn der empfangende Router es nicht vollstaendig auswertet",
      "Es darf nur innerhalb eines AS genutzt werden",
      "Es muss in jeder OPEN-Message stehen",
      "Es ersetzt LOCAL_PREF"
    ],
    "options_en": [
      "It can be propagated even if the receiving router does not fully interpret it",
      "It may only be used inside one AS",
      "It must appear in every OPEN message",
      "It replaces LOCAL_PREF"
    ],
    "correctIndex": 0,
    "explanation": "Optionale transitive Attribute duerfen AS-Grenzen ueberschreiten. Auch ein Router, der sie nicht im Detail versteht, darf sie nicht einfach verwerfen wie ein non-transitives Attribut.",
    "explanation_en": "Optional transitive attributes may cross AS boundaries. Even a router that does not fully understand them must not simply drop them like a non-transitive attribute.",
    "extraInfo": "Communities sind das klassische Beispiel fuer optionale transitive Attribute.",
    "extraInfo_en": "Communities are the classic example of optional transitive attributes.",
    "tip": "Transitive = darf weiterwandern.",
    "tip_en": "Transitive = allowed to continue onward.",
    "tags": [
      "BGP",
      "Path Attributes",
      "Optional",
      "Transitive"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q4",
    "question": "Wie wird ein optional non-transitives Attribut typischerweise behandelt, wenn eine Route von eBGP empfangen und spaeter wieder per eBGP in ein anderes AS geschickt wird?",
    "question_en": "How is an optional non-transitive attribute typically handled when a route is received via eBGP and later sent via eBGP into another AS?",
    "options": [
      "Es wird nicht unveraendert in ein weiteres AS propagated",
      "Es muss immer unveraendert an alle eBGP-Peers weitergegeben werden",
      "Es wird automatisch zu COMMUNITY konvertiert",
      "Es beendet die Session mit einer NOTIFICATION"
    ],
    "options_en": [
      "It is not propagated unchanged into another AS",
      "It must always be forwarded unchanged to all eBGP peers",
      "It is automatically converted into COMMUNITY",
      "It terminates the session with a NOTIFICATION"
    ],
    "correctIndex": 0,
    "explanation": "Non-transitive Attribute sollen nicht ueber AS-Grenzen hinweg erhalten bleiben. Innerhalb des eigenen AS koennen sie je nach Implementierung bzw. Kontext noch sichtbar oder nutzbar sein.",
    "explanation_en": "Non-transitive attributes are not meant to be preserved across AS boundaries. Inside the local AS they may still be visible or useful depending on implementation and context.",
    "extraInfo": "MED ist das klassische Beispiel fuer optional non-transitive.",
    "extraInfo_en": "MED is the classic example of an optional non-transitive attribute.",
    "tip": "Non-transitive = nicht fuer fremde AS gedacht.",
    "tip_en": "Non-transitive = not intended for foreign ASes.",
    "tags": [
      "BGP",
      "Path Attributes",
      "Optional",
      "Non-Transitive",
      "eBGP"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q5",
    "question": "Welche Attributgruppe gehoert zu den well-known mandatory Path Attributes?",
    "question_en": "Which group belongs to the well-known mandatory path attributes?",
    "options": [
      "AS_PATH, NEXT_HOP und ORIGIN",
      "LOCAL_PREF, MED und COMMUNITY",
      "ATOMIC_AGGREGATE, MED und ORIGINATOR_ID",
      "CLUSTER_LIST, COMMUNITY und NEXT_HOP"
    ],
    "options_en": [
      "AS_PATH, NEXT_HOP, and ORIGIN",
      "LOCAL_PREF, MED, and COMMUNITY",
      "ATOMIC_AGGREGATE, MED, and ORIGINATOR_ID",
      "CLUSTER_LIST, COMMUNITY, and NEXT_HOP"
    ],
    "correctIndex": 0,
    "explanation": "AS_PATH, NEXT_HOP und ORIGIN sind die klassischen well-known mandatory Attribute fuer BGP-Pfade.",
    "explanation_en": "AS_PATH, NEXT_HOP, and ORIGIN are the classic well-known mandatory BGP path attributes.",
    "extraInfo": "LOCAL_PREF ist zwar well-known, aber discretionary und nicht mandatory.",
    "extraInfo_en": "LOCAL_PREF is well-known, but discretionary rather than mandatory.",
    "tip": "Merker: Pfad, naechster Hop, Herkunft.",
    "tip_en": "Memory line: path, next hop, origin.",
    "tags": [
      "BGP",
      "Path Attributes",
      "AS_PATH",
      "NEXT_HOP",
      "ORIGIN"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q6",
    "question": "Was beschreibt das BGP-Attribut NEXT_HOP am besten?",
    "question_en": "What best describes the BGP NEXT_HOP attribute?",
    "options": [
      "Die Adresse des Routers, zu dem Pakete fuer den Prefix weitergeleitet werden sollen",
      "Die Router-ID jedes AS im AS_PATH",
      "Die TCP-Quelladresse der OPEN-Message",
      "Die Liste aller Communities des Prefixes"
    ],
    "options_en": [
      "The address of the router to which packets for the prefix should be forwarded",
      "The router ID of every AS in the AS_PATH",
      "The TCP source address of the OPEN message",
      "The list of all communities attached to the prefix"
    ],
    "correctIndex": 0,
    "explanation": "NEXT_HOP gibt an, welcher Router als naechster L3-Schritt fuer den Prefix benutzt werden soll. Das muss nicht immer derselbe Router sein, der gerade das UPDATE sendet.",
    "explanation_en": "NEXT_HOP tells which router should be used as the next L3 step for the prefix. That is not always the same router that is currently sending the UPDATE.",
    "extraInfo": "Gerade bei iBGP spielt NEXT_HOP unveraendert weiterreichen vs. next-hop-self eine grosse Rolle.",
    "extraInfo_en": "Especially in iBGP, unchanged NEXT_HOP versus next-hop-self matters a lot.",
    "tip": "NEXT_HOP = wohin der Traffic als naechstes soll.",
    "tip_en": "NEXT_HOP = where traffic should go next.",
    "tags": [
      "BGP",
      "NEXT_HOP",
      "Path Attributes"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q7",
    "question": "Wie kann ein COMMUNITY-Attribut die Route Selection innerhalb eines AS beeinflussen?",
    "question_en": "How can a COMMUNITY attribute influence route selection inside an AS?",
    "options": [
      "Es kann per Policy in LOCAL_PREF umgesetzt werden und so die bevorzugte Exit-Route steuern",
      "Es ersetzt automatisch den AS_PATH",
      "Es zwingt BGP dazu, iBGP vor eBGP zu bevorzugen",
      "Es setzt die Router-ID aller Peers neu"
    ],
    "options_en": [
      "It can be mapped by policy into LOCAL_PREF and thereby steer the preferred exit path",
      "It automatically replaces the AS_PATH",
      "It forces BGP to prefer iBGP over eBGP",
      "It resets the router ID of all peers"
    ],
    "correctIndex": 0,
    "explanation": "Community-Tags sind oft nur Marker. Die eigentliche Wirkung entsteht erst durch Policies, zum Beispiel wenn ein Edge-Router aus einer Community einen LOCAL_PREF-Wert ableitet.",
    "explanation_en": "Community tags are often just markers. The actual effect comes from policy, for example when an edge router derives a LOCAL_PREF value from a community.",
    "extraInfo": "So kann derselbe Prefix ueber unterschiedliche Edge-Router unterschiedlich attraktiv gemacht werden.",
    "extraInfo_en": "That allows the same prefix to become more or less attractive through different edge routers.",
    "tip": "Community markiert, Policy wirkt.",
    "tip_en": "Community marks, policy acts.",
    "tags": [
      "BGP",
      "COMMUNITY",
      "LOCAL_PREF",
      "Route Selection"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q8",
    "question": "Wofuer kann ein COMMUNITY-Attribut innerhalb desselben AS noch genutzt werden?",
    "question_en": "What else can a COMMUNITY attribute be used for inside the same AS?",
    "options": [
      "Als internes Policy-Merkmal, um bestimmte Prefixe vor dem eBGP-Export zu filtern",
      "Um TCP durch ein anderes Transportprotokoll zu ersetzen",
      "Um ORIGIN immer auf IGP zu setzen",
      "Um SAP-IDs im Core zu verteilen"
    ],
    "options_en": [
      "As an internal policy marker to filter certain prefixes before eBGP export",
      "To replace TCP with another transport protocol",
      "To always set ORIGIN to IGP",
      "To distribute SAP IDs in the core"
    ],
    "correctIndex": 0,
    "explanation": "Communities werden haeufig als interne Kennzeichnung benutzt. Spaeter kann eine Export-Policy diese Marker auswerten und entscheiden, ob eine Route nach extern advertised werden darf.",
    "explanation_en": "Communities are often used as internal markings. Later, an export policy can evaluate those markings and decide whether a route may be advertised externally.",
    "extraInfo": "Das ist einer der Hauptgruende, warum Communities in grossen Netzen so beliebt sind.",
    "extraInfo_en": "That is one of the main reasons why communities are so popular in large networks.",
    "tip": "Community kann reine Steuerinformation sein.",
    "tip_en": "A community can be pure control metadata.",
    "tags": [
      "BGP",
      "COMMUNITY",
      "Policy",
      "Export"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q9",
    "question": "Was zeigt AS_PATH in BGP tatsaechlich an?",
    "question_en": "What does AS_PATH actually show in BGP?",
    "options": [
      "Die Liste der AS, durch die die Routeninformation gegangen ist",
      "Die exakte physische Paketlaufzeit durch das Netz",
      "Die Reihenfolge aller Router-Interfaces auf Layer 2",
      "Die TCP-Portliste zwischen den Peers"
    ],
    "options_en": [
      "The list of ASes through which the route information has passed",
      "The exact physical packet latency through the network",
      "The order of all router interfaces on Layer 2",
      "The TCP port list between the peers"
    ],
    "correctIndex": 0,
    "explanation": "AS_PATH beschreibt den Weg der BGP-Routeninformation ueber AS-Grenzen hinweg. Es ist nicht dasselbe wie ein Messwert fuer Delay oder reale Paketkosten.",
    "explanation_en": "AS_PATH describes how the BGP route information crossed AS boundaries. It is not the same thing as a measured delay or real packet cost.",
    "extraInfo": "AS_PATH hilft vor allem bei Loop-Vermeidung und ist ein zentrales Kriterium bei der Best-Path-Wahl.",
    "extraInfo_en": "AS_PATH mainly helps with loop avoidance and is a key criterion in best-path selection.",
    "tip": "AS_PATH = Historie der Route, nicht Performance-Messung.",
    "tip_en": "AS_PATH = route history, not a performance measurement.",
    "tags": [
      "BGP",
      "AS_PATH",
      "Route Selection",
      "Loop Prevention"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q10",
    "question": "Warum wird bei sonst gleichen Bedingungen meist der kuerzere AS_PATH bevorzugt?",
    "question_en": "Why is the shorter AS_PATH usually preferred when other conditions are equal?",
    "options": [
      "Weil er im BGP-Entscheidungsprozess als guenstiger gilt, nicht weil er automatisch die geringste Latenz garantiert",
      "Weil er immer den billigsten kommerziellen Vertrag beweist",
      "Weil BGP keine laengeren AS_PATHs akzeptiert",
      "Weil kuerzere AS_PATHs immer aus demselben AS stammen"
    ],
    "options_en": [
      "Because BGP treats it as more favorable in best-path selection, not because it automatically guarantees the lowest latency",
      "Because it always proves the cheapest commercial contract",
      "Because BGP does not accept longer AS_PATHs",
      "Because shorter AS_PATHs always come from the same AS"
    ],
    "correctIndex": 0,
    "explanation": "Ein kurzer AS_PATH ist ein BGP-Entscheidungskriterium. Er ist aber kein direkter Beweis fuer weniger Delay oder geringere Kosten in der realen Transportwelt.",
    "explanation_en": "A short AS_PATH is a BGP decision criterion. It is not direct proof of lower delay or lower commercial cost in the real transport world.",
    "extraInfo": "Policy kann kuerzere AS_PATHs trotzdem ueberstimmen, zum Beispiel mit LOCAL_PREF.",
    "extraInfo_en": "Policy can still override a shorter AS_PATH, for example with LOCAL_PREF.",
    "tip": "Kuerzer ist in BGP oft besser, aber nicht automatisch schneller.",
    "tip_en": "Shorter is often better in BGP, but not automatically faster.",
    "tags": [
      "BGP",
      "AS_PATH",
      "Best Path"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q11",
    "question": "Welche Reihenfolge ist fuer das ORIGIN-Attribut korrekt, wenn BGP zwischen gleichen Pfaden entscheidet?",
    "question_en": "Which ORIGIN order is correct when BGP compares otherwise equal paths?",
    "options": [
      "IGP vor EGP vor INCOMPLETE",
      "EGP vor IGP vor INCOMPLETE",
      "INCOMPLETE vor IGP vor EGP",
      "LOCAL_PREF vor ORIGIN vor MED"
    ],
    "options_en": [
      "IGP before EGP before INCOMPLETE",
      "EGP before IGP before INCOMPLETE",
      "INCOMPLETE before IGP before EGP",
      "LOCAL_PREF before ORIGIN before MED"
    ],
    "correctIndex": 0,
    "explanation": "Beim ORIGIN-Vergleich gilt: IGP ist am besten, dann EGP, dann INCOMPLETE. Viele Schulungsunterlagen nennen statt INCOMPLETE vereinfacht 'unknown'.",
    "explanation_en": "For ORIGIN comparison the order is: IGP best, then EGP, then INCOMPLETE. Many training materials simplify INCOMPLETE as 'unknown'.",
    "extraInfo": "ORIGIN ist nur ein spaeteres Tie-Break-Kriterium, nicht das erste.",
    "extraInfo_en": "ORIGIN is only a later tie-break criterion, not the first one.",
    "tip": "Origin-Merker: i, e, ?",
    "tip_en": "Origin memory line: i, e, ?",
    "tags": [
      "BGP",
      "ORIGIN",
      "Best Path"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q12",
    "question": "Welchen ORIGIN-Wert haben redistributete oder anders lokal eingebrachte Routen haeufig?",
    "question_en": "Which ORIGIN value do redistributed or otherwise locally injected routes often have?",
    "options": [
      "INCOMPLETE",
      "EGP",
      "MED",
      "CLUSTER_LIST"
    ],
    "options_en": [
      "INCOMPLETE",
      "EGP",
      "MED",
      "CLUSTER_LIST"
    ],
    "correctIndex": 0,
    "explanation": "Wenn eine Route nicht klassisch per BGP network-Statement als IGP-originated erscheint, sondern etwa durch Redistribution hineinkommt, ist ORIGIN haeufig INCOMPLETE.",
    "explanation_en": "When a route does not appear as classically IGP-originated via a BGP network statement, but is brought in for example by redistribution, ORIGIN is often INCOMPLETE.",
    "extraInfo": "Das wird in Kursen oft falsch mit 'IGP aus OSPF/RIP' verknuepft.",
    "extraInfo_en": "This is often incorrectly tied in training material to 'IGP from OSPF/RIP'.",
    "tip": "Redistribution denkt oft an '?'.",
    "tip_en": "Redistribution often means '?'.",
    "tags": [
      "BGP",
      "ORIGIN",
      "Redistribution"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q13",
    "question": "Was beschreibt das MED-Attribut am besten?",
    "question_en": "What best describes the MED attribute?",
    "options": [
      "Ein Hinweis an ein anderes AS, welcher Einstiegspunkt bevorzugt werden soll; kleinere Werte sind besser",
      "Eine interne iBGP-only Router-ID",
      "Der Ersatz fuer AS_PATH in IPv6",
      "Eine Liste aller Communities des Prefixes"
    ],
    "options_en": [
      "A hint to another AS about which entry point should be preferred; lower values are better",
      "An internal iBGP-only router ID",
      "The replacement for AS_PATH in IPv6",
      "A list of all communities attached to the prefix"
    ],
    "correctIndex": 0,
    "explanation": "MED ist ein optional non-transitives Attribut. Es wird genutzt, um einem Nachbar-AS einen bevorzugten Eintrittspfad mitzuteilen; kleinere MED-Werte werden bevorzugt.",
    "explanation_en": "MED is an optional non-transitive attribute. It is used to tell a neighboring AS about a preferred entry path; lower MED values are preferred.",
    "extraInfo": "Viele Implementierungen vergleichen MED standardmaessig nur zwischen Pfaden aus demselben Nachbar-AS.",
    "extraInfo_en": "Many implementations compare MED by default only among paths from the same neighboring AS.",
    "tip": "MED: kleiner ist besser.",
    "tip_en": "MED: lower is better.",
    "tags": [
      "BGP",
      "MED",
      "Path Attributes",
      "Best Path"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q14",
    "question": "Wann wird eine eBGP-gelernte Route gegenueber einer iBGP-gelernten Route bevorzugt?",
    "question_en": "When is an eBGP-learned route preferred over an iBGP-learned route?",
    "options": [
      "Wenn die vorherigen relevanten Kriterien bereits gleich ausgefallen sind",
      "Immer ohne Ausnahme",
      "Nur wenn MED hoeher ist",
      "Nur bei IPv6"
    ],
    "options_en": [
      "When the earlier relevant criteria have already tied",
      "Always, without exception",
      "Only when MED is higher",
      "Only for IPv6"
    ],
    "correctIndex": 0,
    "explanation": "Die Praeferenz fuer eBGP vor iBGP ist ein spaeteres Best-Path-Kriterium. Fruehere Faktoren wie LOCAL_PREF oder AS_PATH koennen also bereits entschieden haben.",
    "explanation_en": "The preference for eBGP over iBGP is a later best-path criterion. Earlier factors such as LOCAL_PREF or AS_PATH may already have decided the outcome.",
    "extraInfo": "Genau deshalb sollte man die Kriterien als Reihenfolge lernen und nicht als lose Fakten.",
    "extraInfo_en": "That is exactly why the criteria should be learned as an ordered list rather than isolated facts.",
    "tip": "eBGP-vor-iBGP kommt nicht ganz am Anfang.",
    "tip_en": "eBGP-over-iBGP is not at the very beginning.",
    "tags": [
      "BGP",
      "eBGP",
      "iBGP",
      "Best Path"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q15",
    "question": "Welche Reihenfolge passt zu den ersten wichtigen BGP-Auswahlkriterien aus deinen Notizen?",
    "question_en": "Which order matches the first important BGP selection criteria from your notes?",
    "options": [
      "Hoehere LOCAL_PREF, kuerzerer AS_PATH, besserer ORIGIN, niedrigeres MED, eBGP vor iBGP",
      "Niedrigeres MED, hoehere LOCAL_PREF, laengerer AS_PATH, iBGP vor eBGP, ORIGIN",
      "ORIGIN, NEXT_HOP, TCP-Port, Community-Anzahl, MED",
      "Router-ID, Cluster-List, NEXT_HOP-IP, MED, LOCAL_PREF"
    ],
    "options_en": [
      "Higher LOCAL_PREF, shorter AS_PATH, better ORIGIN, lower MED, eBGP over iBGP",
      "Lower MED, higher LOCAL_PREF, longer AS_PATH, iBGP over eBGP, ORIGIN",
      "ORIGIN, NEXT_HOP, TCP port, community count, MED",
      "Router ID, cluster list, NEXT_HOP IP, MED, LOCAL_PREF"
    ],
    "correctIndex": 0,
    "explanation": "Diese Reihenfolge bildet die typischen fruehen Best-Path-Schritte aus deinen Kursnotizen gut ab. Weitere Kriterien kommen spaeter als Tie-Breaker.",
    "explanation_en": "This order matches the typical early best-path steps from your course notes well. Additional criteria come later as tie-breakers.",
    "extraInfo": "In real Implementierungen koennen noch weitere Schritte und Plattformnuancen dazukommen.",
    "extraInfo_en": "Real implementations may add more steps and platform-specific nuances.",
    "tip": "LocalPref vor AS_PATH vor ORIGIN vor MED vor eBGP/iBGP.",
    "tip_en": "LocalPref before AS_PATH before ORIGIN before MED before eBGP/iBGP.",
    "tags": [
      "BGP",
      "Best Path",
      "LOCAL_PREF",
      "AS_PATH",
      "MED"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q16",
    "question": "Wo landet eine empfangene BGP-Route zuerst im normalen Route-Processing?",
    "question_en": "Where does a received BGP route land first in normal route processing?",
    "options": [
      "Im RIB-IN",
      "Direkt im RTM",
      "Sofort im FIB ohne Pruefung",
      "Direkt im RIB-OUT"
    ],
    "options_en": [
      "In RIB-IN",
      "Directly in the RTM",
      "Immediately in the FIB without checks",
      "Directly in RIB-OUT"
    ],
    "correctIndex": 0,
    "explanation": "Empfangene BGP-Routen kommen zuerst im RIB-IN an. Dort werden sie bewertet, koennen als valid oder invalid markiert werden und nehmen dann am Best-Path-Prozess teil.",
    "explanation_en": "Received BGP routes arrive in RIB-IN first. There they are evaluated, may be marked valid or invalid, and then participate in best-path selection.",
    "extraInfo": "RIB-IN ist also die Eingangsansicht der von Peers gelernten Routen.",
    "extraInfo_en": "RIB-IN is therefore the inbound view of routes learned from peers.",
    "tip": "IN kommt vor Best und Used.",
    "tip_en": "IN comes before Best and Used.",
    "tags": [
      "BGP",
      "Route Processing",
      "RIB-IN"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q17",
    "question": "Was passiert mit einer validen BGP-Route, wenn sie fuer ihren Prefix als beste Route ausgewaehlt wird?",
    "question_en": "What happens to a valid BGP route when it is selected as the best route for its prefix?",
    "options": [
      "Sie wird in die lokale BGP-RIB aufgenommen und anschliessend dem RTM angeboten",
      "Sie ueberspringt alle weiteren Pruefungen und ersetzt immer direkt jede IGP-Route",
      "Sie wird sofort aus dem RIB-IN geloescht",
      "Sie wird nur an eBGP exportiert und lokal nie genutzt"
    ],
    "options_en": [
      "It is installed into the local BGP RIB and then offered to the RTM",
      "It skips all further checks and always directly replaces any IGP route",
      "It is immediately deleted from RIB-IN",
      "It is exported only to eBGP and never used locally"
    ],
    "correctIndex": 0,
    "explanation": "Die beste valide Route geht in die lokale BGP-RIB. Danach entscheidet der Route Table Manager, ob sie auch im eigentlichen Routing Table als aktive genutzte Route installiert wird.",
    "explanation_en": "The best valid route goes into the local BGP RIB. The route table manager then decides whether it also becomes the active used route in the actual routing table.",
    "extraInfo": "Damit trennt man 'beste BGP-Route' von 'tatsaechlich genutzter Systemroute'.",
    "extraInfo_en": "This separates 'best BGP route' from 'actually used system route'.",
    "tip": "Best ist noch nicht automatisch Used.",
    "tip_en": "Best does not automatically mean Used.",
    "tags": [
      "BGP",
      "Route Processing",
      "Best Path",
      "RTM"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q18",
    "question": "Warum kann eine BGP-Route 'best' sein, aber trotzdem nicht als 'used' im System auftauchen?",
    "question_en": "Why can a BGP route be 'best' but still not appear as 'used' in the system?",
    "options": [
      "Weil ein anderes Protokoll denselben Prefix mit besserer administrativer Praeferenz liefern kann",
      "Weil BGP niemals ins Routing Table schreibt",
      "Weil nur iBGP-Routen als used markiert werden",
      "Weil jede best Route automatisch verworfen wird"
    ],
    "options_en": [
      "Because another protocol may provide the same prefix with a better administrative preference",
      "Because BGP never installs anything into the routing table",
      "Because only iBGP routes are marked as used",
      "Because every best route is automatically discarded"
    ],
    "correctIndex": 0,
    "explanation": "BGP waehlt zunaechst seine beste BGP-Route. Ob diese auch systemweit genutzt wird, haengt davon ab, ob nicht bereits eine bevorzugtere Route aus einem anderen Protokoll aktiv ist.",
    "explanation_en": "BGP first selects its best BGP route. Whether it is actually used system-wide depends on whether a more preferred route from another protocol is already active.",
    "extraInfo": "Genau fuer solche Faelle ist der Unterschied zwischen 'best' und 'used' wichtig.",
    "extraInfo_en": "That is exactly why the distinction between 'best' and 'used' matters.",
    "tip": "Best in BGP ist nicht immer best im ganzen Router.",
    "tip_en": "Best in BGP is not always best on the whole router.",
    "tags": [
      "BGP",
      "Best Path",
      "Used",
      "RTM"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q19",
    "question": "Wofuer dient die Option advertise-inactive?",
    "question_en": "What is the purpose of advertise-inactive?",
    "options": [
      "Sie erlaubt, eine beste aber nicht aktive BGP-Route dennoch an Peers zu advertisieren",
      "Sie deaktiviert KEEPALIVEs bei inaktiven Sessions",
      "Sie zwingt MED auf 0",
      "Sie verhindert RIB-IN-Eintraege"
    ],
    "options_en": [
      "It allows a best but inactive BGP route to still be advertised to peers",
      "It disables KEEPALIVEs on inactive sessions",
      "It forces MED to 0",
      "It prevents RIB-IN entries"
    ],
    "correctIndex": 0,
    "explanation": "advertise-inactive ist nuetzlich, wenn die beste BGP-Route lokal nicht aktiv ist, etwa weil ein anderes Protokoll denselben Prefix bereits mit besserer Systempraeferenz nutzt.",
    "explanation_en": "advertise-inactive is useful when the best BGP route is not locally active, for example because another protocol already uses the same prefix with better system preference.",
    "extraInfo": "Das ist vor allem in Inter-AS- oder Migrationsszenarien relevant.",
    "extraInfo_en": "This is especially relevant in inter-AS or migration scenarios.",
    "tip": "Inactive lokal kann trotzdem exportierbar sein.",
    "tip_en": "Inactive locally can still be exportable.",
    "tags": [
      "BGP",
      "advertise-inactive",
      "Export",
      "Route Processing"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q20",
    "question": "Was ist der zentrale Unterschied zwischen Import- und Export-Policies in BGP?",
    "question_en": "What is the central difference between import and export policies in BGP?",
    "options": [
      "Import bewertet empfangene Routen, Export bewertet lokal bekannte Routen vor dem Advertisieren",
      "Import gilt nur fuer TCP, Export nur fuer UDP",
      "Import ist nur fuer iBGP, Export nur fuer eBGP",
      "Import aendert nur NEXT_HOP, Export nur ORIGIN"
    ],
    "options_en": [
      "Import evaluates received routes, export evaluates locally known routes before advertisement",
      "Import applies only to TCP, export only to UDP",
      "Import is only for iBGP, export only for eBGP",
      "Import changes only NEXT_HOP, export only ORIGIN"
    ],
    "correctIndex": 0,
    "explanation": "Import-Policies steuern, was hereinkommt und wie empfangene Attribute geaendert werden. Export-Policies steuern, was hinausgeht und welche Attribute dabei gesetzt oder modifiziert werden.",
    "explanation_en": "Import policies control what comes in and how received attributes are changed. Export policies control what goes out and which attributes are set or modified along the way.",
    "extraInfo": "Beide Policy-Richtungen sind fuer sich genommen schon ein eigenes grosses Thema in BGP.",
    "extraInfo_en": "Each policy direction is a major topic of its own in BGP.",
    "tip": "Import = rein, Export = raus.",
    "tip_en": "Import = in, export = out.",
    "tags": [
      "BGP",
      "Policy",
      "Import",
      "Export"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q21",
    "question": "Was passiert beim Export zu einem eBGP-Peer typischerweise automatisch mit AS_PATH und NEXT_HOP?",
    "question_en": "What typically happens automatically to AS_PATH and NEXT_HOP when exporting to an eBGP peer?",
    "options": [
      "Die eigene AS-Nummer wird dem AS_PATH hinzugefuegt und NEXT_HOP wird typischerweise auf die lokale ausgehende Adresse gesetzt",
      "AS_PATH wird geloescht und NEXT_HOP bleibt immer unveraendert",
      "Nur COMMUNITY wird gesetzt, AS_PATH bleibt leer",
      "NEXT_HOP wird immer zur Router-ID und AS_PATH zu MED"
    ],
    "options_en": [
      "The local AS number is added to AS_PATH and NEXT_HOP is typically set to the local outgoing address",
      "AS_PATH is deleted and NEXT_HOP always remains unchanged",
      "Only COMMUNITY is set, AS_PATH stays empty",
      "NEXT_HOP always becomes the router ID and AS_PATH becomes MED"
    ],
    "correctIndex": 0,
    "explanation": "Beim eBGP-Export wird der eigene AS-Kontext sichtbar gemacht, indem die lokale AS-Nummer im AS_PATH erscheint. NEXT_HOP wird fuer eBGP ebenfalls typischerweise auf die lokale ausgehende Adresse gesetzt.",
    "explanation_en": "When exporting to eBGP, the local AS context becomes visible by adding the local AS number to AS_PATH. NEXT_HOP is also typically set to the local outgoing address for eBGP.",
    "extraInfo": "Gerade diese automatischen Aenderungen sind wichtig, wenn man Policies oder Debug-Ausgaben liest.",
    "extraInfo_en": "These automatic changes matter a lot when reading policies or debugging output.",
    "tip": "eBGP export: eigenes AS dran, naechster Hop lokal.",
    "tip_en": "eBGP export: prepend local AS, use local next hop.",
    "tags": [
      "BGP",
      "AS_PATH",
      "NEXT_HOP",
      "eBGP",
      "Export"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q22",
    "question": "Welche Aussage beschreibt das Nokia-Default-Verhalten fuer eBGP-Policies am besten?",
    "question_en": "Which statement best describes the Nokia default behavior for eBGP policies?",
    "options": [
      "In MD-CLI ist eBGP standardmaessig ohne passende Policies gesichert auf Reject, waehrend Classic historisch Default Accept kannte",
      "MD-CLI und Classic verhalten sich immer identisch mit Default Accept",
      "MD-CLI lehnt nur Export ab, importiert aber immer alles",
      "Classic lehnt immer alles ab und kann nicht geaendert werden"
    ],
    "options_en": [
      "In MD-CLI, eBGP is secured by default with reject behavior unless proper policies exist, while classic historically used default accept",
      "MD-CLI and classic always behave identically with default accept",
      "MD-CLI rejects only export but always imports everything",
      "Classic always rejects everything and cannot be changed"
    ],
    "correctIndex": 0,
    "explanation": "Neuere Nokia-Model-Driven-Kontexte folgen dem RFC-8212-Gedanken und rejecten eBGP ohne Policies standardmaessig. Classic CLI war historisch offener und arbeitete oft mit Default Accept.",
    "explanation_en": "Newer Nokia model-driven contexts follow the RFC 8212 idea and reject eBGP by default when no policies are present. Classic CLI was historically more open and often used default accept.",
    "extraInfo": "Trotzdem ist die saubere Praxis immer: explizite Import- und Export-Policies bauen.",
    "extraInfo_en": "Even so, the clean operational practice is always to build explicit import and export policies.",
    "tip": "MD-CLI denkt sicherer als altes Classic.",
    "tip_en": "MD-CLI thinks more securely than old classic.",
    "tags": [
      "BGP",
      "Nokia",
      "eBGP",
      "Policy",
      "RFC 8212"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s4-q23",
    "question": "Wofuer sind 'show router bgp routes ... detail' und 'show router bgp routes ... hunt' besonders nuetzlich?",
    "question_en": "What are 'show router bgp routes ... detail' and 'show router bgp routes ... hunt' especially useful for?",
    "options": [
      "Um empfangene, veraenderte und exportierte Routensichten beim Troubleshooting nachzuvollziehen",
      "Um die TCP-Portnummer der BGP-Session zu aendern",
      "Um VLAN-Tags auf SAPs zu strippen",
      "Um RSVP-TE-Paths zu signalisieren"
    ],
    "options_en": [
      "To trace received, modified, and exported route views during troubleshooting",
      "To change the TCP port number of the BGP session",
      "To strip VLAN tags on SAPs",
      "To signal RSVP-TE paths"
    ],
    "correctIndex": 0,
    "explanation": "Mit diesen Anzeigen kann man nachvollziehen, was in RIB-IN, Best-Path-Sicht und Export-Sicht passiert. Gerade bei Policy-Aenderungen ist das extrem hilfreich.",
    "explanation_en": "These views help track what happens in RIB-IN, in best-path perspective, and in export perspective. That is extremely helpful when troubleshooting policy changes.",
    "extraInfo": "'detail' hilft fuer Attributwerte, 'hunt' ist stark fuer die komplette Routenverfolgung ueber die Verarbeitungsstufen.",
    "extraInfo_en": "'detail' helps with attribute values, while 'hunt' is strong for tracing the full route through processing stages.",
    "tip": "Detail fuer Attribute, hunt fuer Prozesssicht.",
    "tip_en": "Detail for attributes, hunt for process view.",
    "tags": [
      "BGP",
      "Troubleshooting",
      "RIB-IN",
      "RIB-OUT",
      "CLI"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 4",
    "section_en": "Section 4"
  },
  {
    "id": "bgp-m1s5-q1",
    "question": "Wie ist eine grundlegende Route Policy logisch aufgebaut?",
    "question_en": "How is a basic route policy logically structured?",
    "options": [
      "From bestimmt, welche Prefixe oder Routen matchen; Action bestimmt, was danach mit ihnen passiert",
      "Action waehlt die Prefixe aus, From setzt nur die Router-ID",
      "From gilt nur fuer Export, Action nur fuer Import",
      "Eine Policy hat nur Actions, aber keine Match-Kriterien"
    ],
    "options_en": [
      "From determines which prefixes or routes match; Action determines what then happens to them",
      "Action selects the prefixes, while From only sets the router ID",
      "From applies only to export, Action only to import",
      "A policy has only actions and no match criteria"
    ],
    "correctIndex": 0,
    "explanation": "Das Kernmodell ist einfach: `from` beschreibt die betroffenen Routen, `action` beschreibt die Folgeaktion.",
    "explanation_en": "The core model is simple: `from` describes the routes being matched, `action` describes what to do next.",
    "extraInfo": "Genau dieses Muster zieht sich durch fast alle Routing-Policies.",
    "extraInfo_en": "That exact pattern runs through almost all routing policies.",
    "tip": "From = was trifft zu, Action = was passiert.",
    "tip_en": "From = what matches, Action = what happens.",
    "tags": [
      "BGP",
      "Route Policy",
      "From",
      "Action"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q2",
    "question": "Was bedeutet es in einer Route Policy meist, wenn ein bestimmtes From-Kriterium weggelassen wird?",
    "question_en": "What does it usually mean in a route policy when a specific From criterion is omitted?",
    "options": [
      "Das Kriterium wirkt dann allgemein auf alle passenden Routen dieser Policy-Ebene",
      "Die Policy wird ungueltig",
      "Nur IPv6-Routen werden noch betrachtet",
      "Die Action wird automatisch reject"
    ],
    "options_en": [
      "The criterion then applies generally to all relevant routes at that policy level",
      "The policy becomes invalid",
      "Only IPv6 routes are considered from then on",
      "The action automatically becomes reject"
    ],
    "correctIndex": 0,
    "explanation": "Wenn du ein Match-Kriterium wie Prefix-Liste oder Neighbor nicht setzt, wird an dieser Stelle typischerweise nicht weiter eingeschraenkt.",
    "explanation_en": "If you do not set a match criterion such as a prefix list or neighbor, the policy typically does not further restrict on that condition.",
    "extraInfo": "Genau deshalb koennen sehr breite oder sehr spezifische Policy-Eintraege gebaut werden.",
    "extraInfo_en": "That is exactly why policy entries can be made very broad or very specific.",
    "tip": "Nicht angegeben bedeutet oft: kein zusaetzlicher Filter an dieser Stelle.",
    "tip_en": "Not specified often means: no extra filter on that condition.",
    "tags": [
      "BGP",
      "Route Policy",
      "From",
      "Match"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q3",
    "question": "Welche Informationen koennen im From-Teil einer BGP-Route-Policy typischerweise geprueft werden?",
    "question_en": "Which kinds of information can typically be checked in the From part of a BGP route policy?",
    "options": [
      "Zum Beispiel Prefix-Liste, Address Family, Lernprotokoll, BGP-Nachbar oder BGP-Attribute",
      "Nur die TCP-Portnummer der Session",
      "Nur die lokale CPU-Auslastung",
      "Nur SAP- und SDP-Werte"
    ],
    "options_en": [
      "For example prefix list, address family, learning protocol, BGP neighbor, or BGP attributes",
      "Only the TCP port number of the session",
      "Only the local CPU utilization",
      "Only SAP and SDP values"
    ],
    "correctIndex": 0,
    "explanation": "Der From-Teil kann sehr gezielt matchen, etwa nach Prefixen, AFI/SAFI, Protokollherkunft, Neighbor oder Attributen.",
    "explanation_en": "The From part can match very specifically, for example on prefixes, AFI/SAFI, protocol source, neighbor, or attributes.",
    "extraInfo": "Damit lassen sich Policies sehr fein auf bestimmte Routenmengen zuschneiden.",
    "extraInfo_en": "That allows policies to be tailored very precisely to specific route sets.",
    "tip": "From prueft die Eigenschaften der Route.",
    "tip_en": "From checks the route's properties.",
    "tags": [
      "BGP",
      "Route Policy",
      "Prefix List",
      "Neighbor",
      "Attributes"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q4",
    "question": "Was bedeutet Action = accept bei einer Import-Policy?",
    "question_en": "What does Action = accept mean in an import policy?",
    "options": [
      "Die Route wird angenommen und darf am BGP-Entscheidungsprozess teilnehmen",
      "Die Route wird nur im RIB-OUT gespeichert",
      "Die Session wird neu gestartet",
      "Die Route wird sofort an alle eBGP-Peers exportiert"
    ],
    "options_en": [
      "The route is accepted and may participate in the BGP decision process",
      "The route is stored only in RIB-OUT",
      "The session is restarted",
      "The route is immediately exported to all eBGP peers"
    ],
    "correctIndex": 0,
    "explanation": "Bei Import bedeutet accept, dass die Route angenommen wird und weiter in die BGP-Verarbeitung gehen darf.",
    "explanation_en": "On import, accept means the route is accepted and may continue through BGP processing.",
    "extraInfo": "Ob sie spaeter auch wirklich aktiv genutzt wird, ist damit noch nicht garantiert.",
    "extraInfo_en": "That still does not guarantee it will later be actively used.",
    "tip": "Import accept = Route darf rein.",
    "tip_en": "Import accept = route may come in.",
    "tags": [
      "BGP",
      "Route Policy",
      "Import",
      "Accept"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q5",
    "question": "Was bedeutet Action = reject bei einer Import-Policy?",
    "question_en": "What does Action = reject mean in an import policy?",
    "options": [
      "Die Route wird ignoriert und nicht fuer die weitere BGP-Auswahl zugelassen",
      "Die Route wird bevorzugt als best markiert",
      "Die Route wird automatisch in COMMUNITY umgewandelt",
      "Die Route wird direkt ins RTM geschrieben"
    ],
    "options_en": [
      "The route is ignored and not allowed into further BGP selection",
      "The route is automatically preferred as best",
      "The route is automatically converted into COMMUNITY",
      "The route is written directly into the RTM"
    ],
    "correctIndex": 0,
    "explanation": "Reject bei Import bedeutet, dass die Route an dieser Stelle nicht angenommen wird.",
    "explanation_en": "Reject on import means the route is not accepted at that point.",
    "extraInfo": "Damit endet fuer diese Route die normale Verarbeitung in dieser Import-Richtung.",
    "extraInfo_en": "That ends normal processing for this route in that import direction.",
    "tip": "Import reject = Route bleibt draussen.",
    "tip_en": "Import reject = route stays out.",
    "tags": [
      "BGP",
      "Route Policy",
      "Import",
      "Reject"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q6",
    "question": "Was bedeutet Action = accept bei einer Export-Policy?",
    "question_en": "What does Action = accept mean in an export policy?",
    "options": [
      "Die Route darf an passende BGP-Peers advertised werden",
      "Die Route wird automatisch lokal als used installiert",
      "Die Route wird ins RIB-IN verschoben",
      "Die TCP-Session wird bestaetigt"
    ],
    "options_en": [
      "The route may be advertised to matching BGP peers",
      "The route is automatically installed locally as used",
      "The route is moved into RIB-IN",
      "The TCP session is confirmed"
    ],
    "correctIndex": 0,
    "explanation": "Bei Export bedeutet accept, dass die Route in dieser Policy-Richtung geteilt werden darf.",
    "explanation_en": "On export, accept means the route may be shared in that policy direction.",
    "extraInfo": "Auch hier koennen Attribute vor dem eigentlichen Export noch geaendert werden.",
    "extraInfo_en": "Attributes can also still be changed here before the actual export.",
    "tip": "Export accept = Route darf raus.",
    "tip_en": "Export accept = route may go out.",
    "tags": [
      "BGP",
      "Route Policy",
      "Export",
      "Accept"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q7",
    "question": "Was bedeutet Action = reject bei einer Export-Policy?",
    "question_en": "What does Action = reject mean in an export policy?",
    "options": [
      "Die Route wird nicht an den betreffenden Peer oder die betreffende Policy-Richtung advertised",
      "Die Route wird lokal geloescht",
      "Die Route verliert automatisch ihren AS_PATH",
      "Die Session geht in Idle"
    ],
    "options_en": [
      "The route is not advertised to the relevant peer or policy direction",
      "The route is deleted locally",
      "The route automatically loses its AS_PATH",
      "The session goes to Idle"
    ],
    "correctIndex": 0,
    "explanation": "Reject bei Export bedeutet einfach, dass die Route nicht hinausgegeben wird.",
    "explanation_en": "Reject on export simply means the route is not sent out.",
    "extraInfo": "Das ist ein Standardwerkzeug, um interne oder unerwuenschte Prefixe zurueckzuhalten.",
    "extraInfo_en": "This is a standard tool to keep internal or unwanted prefixes from being sent out.",
    "tip": "Export reject = nicht weitergeben.",
    "tip_en": "Export reject = do not advertise.",
    "tags": [
      "BGP",
      "Route Policy",
      "Export",
      "Reject"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q8",
    "question": "Welche Aussage zu Attributaenderungen in Route Policies ist korrekt?",
    "question_en": "Which statement about attribute changes in route policies is correct?",
    "options": [
      "BGP-Attribute koennen sowohl bei Import als auch bei Export gesetzt oder geaendert werden",
      "Attribute duerfen nur bei Export geaendert werden",
      "Attribute duerfen nur bei Import geaendert werden",
      "Route Policies duerfen nie Attribute veraendern"
    ],
    "options_en": [
      "BGP attributes can be set or changed on both import and export",
      "Attributes may be changed only on export",
      "Attributes may be changed only on import",
      "Route policies may never modify attributes"
    ],
    "correctIndex": 0,
    "explanation": "Policies dienen nicht nur zum Filtern, sondern auch zum gezielten Manipulieren von BGP-Attributen in beiden Richtungen.",
    "explanation_en": "Policies are not only for filtering, but also for deliberately manipulating BGP attributes in both directions.",
    "extraInfo": "Genau darueber wirken spaeter Dinge wie LOCAL_PREF, COMMUNITY oder MED.",
    "extraInfo_en": "That is exactly how things like LOCAL_PREF, COMMUNITY, or MED take effect later.",
    "tip": "Policy kann filtern und formen.",
    "tip_en": "Policy can filter and shape.",
    "tags": [
      "BGP",
      "Route Policy",
      "Attributes",
      "Import",
      "Export"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q9",
    "question": "Was passiert standardmaessig, sobald eine Route einen Policy-Eintrag matched?",
    "question_en": "What happens by default once a route matches a policy entry?",
    "options": [
      "Die zugehoerige Action wird ausgefuehrt und weitere Eintraege werden standardmaessig nicht mehr betrachtet",
      "Die Policy springt immer zur letzten Regel",
      "Es werden automatisch alle anderen Policies ebenfalls erzwungen",
      "Die Route wird sofort als used markiert"
    ],
    "options_en": [
      "The matching action is executed and further entries are normally no longer evaluated",
      "The policy always jumps to the last rule",
      "All other policies are automatically forced as well",
      "The route is immediately marked as used"
    ],
    "correctIndex": 0,
    "explanation": "Der typische Default ist 'first match wins'. Sobald ein Eintrag greift, endet die normale Auswertung dieser Policy-Kette.",
    "explanation_en": "The typical default is 'first match wins'. Once an entry matches, normal evaluation of that policy chain stops.",
    "extraInfo": "Genau deshalb ist die Reihenfolge der Eintraege wichtig.",
    "extraInfo_en": "That is exactly why entry order matters.",
    "tip": "Reihenfolge in Policies ist nicht kosmetisch.",
    "tip_en": "Order in policies is not cosmetic.",
    "tags": [
      "BGP",
      "Route Policy",
      "Evaluation",
      "First Match"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q10",
    "question": "Wozu dienen die Action-Typen next-entry oder next-policy?",
    "question_en": "What are the action types next-entry or next-policy used for?",
    "options": [
      "Sie erlauben, trotz Match weitere Eintraege oder Policies zu pruefen",
      "Sie beenden die BGP-Session sauber",
      "Sie setzen automatisch den NEXT_HOP neu",
      "Sie ersetzen accept und reject komplett"
    ],
    "options_en": [
      "They allow further entries or policies to be evaluated even after a match",
      "They cleanly terminate the BGP session",
      "They automatically rewrite NEXT_HOP",
      "They completely replace accept and reject"
    ],
    "correctIndex": 0,
    "explanation": "Mit next-entry oder next-policy kann die Verarbeitung bewusst fortgesetzt werden, obwohl ein Eintrag bereits gematcht hat.",
    "explanation_en": "With next-entry or next-policy, processing can intentionally continue even though an entry has already matched.",
    "extraInfo": "Das ist wichtig fuer mehrstufige Policies mit mehreren Bearbeitungsschritten.",
    "extraInfo_en": "This is important for multi-stage policies with multiple processing steps.",
    "tip": "Normal waere Stopp, next-* macht Weiter.",
    "tip_en": "Normal behavior is stop, next-* means continue.",
    "tags": [
      "BGP",
      "Route Policy",
      "next-entry",
      "next-policy"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q11",
    "question": "Wie werden mehrere Policy-Eintraege typischerweise ausgewertet?",
    "question_en": "How are multiple policy entries typically evaluated?",
    "options": [
      "Sequenziell in ihrer Reihenfolge beziehungsweise Enumeration",
      "Immer zufaellig",
      "Immer von unten nach oben",
      "Nur die gerade neueste Regel wird betrachtet"
    ],
    "options_en": [
      "Sequentially in their configured order or enumeration",
      "Always randomly",
      "Always from bottom to top",
      "Only the most recently added rule is considered"
    ],
    "correctIndex": 0,
    "explanation": "Policy-Eintraege werden in ihrer konfigurierten Reihenfolge verarbeitet. Deshalb sind fruehe Treffer oft entscheidend.",
    "explanation_en": "Policy entries are processed in their configured order. That is why early matches are often decisive.",
    "extraInfo": "Erst die Reihenfolge, dann die Aktion, dann eventuell Abbruch oder Weitergabe.",
    "extraInfo_en": "First the order, then the action, then possibly stop or continue.",
    "tip": "Policies lesen sich wie eine geordnete Regelkette.",
    "tip_en": "Policies behave like an ordered rule chain.",
    "tags": [
      "BGP",
      "Route Policy",
      "Evaluation",
      "Order"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q12",
    "question": "Was passiert, wenn kein Policy-Eintrag matched?",
    "question_en": "What happens if no policy entry matches?",
    "options": [
      "Dann greift die konfigurierte Default Action oder, falls keine gesetzt ist, das Default-Verhalten des verwendenden Protokolls",
      "Dann wird immer accept genutzt",
      "Dann wird immer reject genutzt",
      "Dann wird die BGP-Session automatisch geschlossen"
    ],
    "options_en": [
      "Then the configured default action applies or, if none is set, the default behavior of the using protocol applies",
      "Then accept is always used",
      "Then reject is always used",
      "Then the BGP session is automatically closed"
    ],
    "correctIndex": 0,
    "explanation": "Die Default Action ist das Sicherheitsnetz fuer den Fall, dass kein Eintrag greift. Wenn auch sie fehlt, entscheidet das Protokoll-Default.",
    "explanation_en": "The default action is the safety net for the case where no entry matches. If it is also missing, the protocol default decides.",
    "extraInfo": "Genau hier entstehen oft Ueberraschungen, wenn eine Policy formal korrekt ist, aber logisch nicht alles abdeckt.",
    "extraInfo_en": "This is exactly where surprises often happen when a policy is formally correct but does not logically cover everything.",
    "tip": "Kein Match = Default entscheidet.",
    "tip_en": "No match = default decides.",
    "tags": [
      "BGP",
      "Route Policy",
      "Default Action"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q13",
    "question": "Was ist im BGP-Kontext meist mit einem 'bogus' oder genauer 'bogon' Prefix gemeint?",
    "question_en": "In BGP context, what is usually meant by a 'bogus' or more precisely 'bogon' prefix?",
    "options": [
      "Ein Prefix, das im oeffentlichen Routing typischerweise nicht auftauchen sollte, etwa weil es privat, reserviert oder unzugewiesen ist",
      "Ein Prefix mit besonders kurzem AS_PATH",
      "Ein Prefix mit hohem LOCAL_PREF",
      "Ein Prefix, das immer per iBGP gelernt wurde"
    ],
    "options_en": [
      "A prefix that normally should not appear in public routing, for example because it is private, reserved, or unallocated",
      "A prefix with an especially short AS_PATH",
      "A prefix with high LOCAL_PREF",
      "A prefix that was always learned via iBGP"
    ],
    "correctIndex": 0,
    "explanation": "Im Betrieb ist fast immer 'bogon prefix' gemeint: also Adressraeume, die im globalen Internet-Routing nicht legitim auftauchen sollten.",
    "explanation_en": "Operationally, people almost always mean a 'bogon prefix': address space that should not legitimately appear in the global Internet routing table.",
    "extraInfo": "Typische Beispiele sind private RFC-1918-Netze oder noch nicht vergebene bzw. reservierte Bereiche.",
    "extraInfo_en": "Typical examples are private RFC 1918 space or still-unallocated or reserved ranges.",
    "tip": "Bogon = im globalen Internet eigentlich ungueltig oder unpassend.",
    "tip_en": "Bogon = generally invalid or inappropriate on the global Internet.",
    "tags": [
      "BGP",
      "Route Policy",
      "Bogon",
      "Filtering"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q14",
    "question": "Wie kann der MED-Wert in einer Route Policy typischerweise gesetzt werden?",
    "question_en": "How can the MED value typically be set in a route policy?",
    "options": [
      "Entweder auf einen festen Wert oder auf Basis des IGP-bezogenen Kostenwerts",
      "Nur durch TCP-Optionen in der BGP-Session",
      "Nur automatisch aus dem AS_PATH",
      "Gar nicht per Policy"
    ],
    "options_en": [
      "Either to a fixed value or based on the IGP-related cost value",
      "Only through TCP options in the BGP session",
      "Only automatically from the AS_PATH",
      "Not by policy at all"
    ],
    "correctIndex": 0,
    "explanation": "MED kann per Policy auf einen festen Wert gesetzt oder IGP-basiert abgeleitet werden, je nach Plattformsyntax.",
    "explanation_en": "MED can be set by policy to a fixed value or derived from IGP-related cost, depending on platform syntax.",
    "extraInfo": "Dein Beispiel mit IGP und einem gesetzten Wert gehoert genau in diese Kategorie der Policy-gesteuerten MED-Beeinflussung.",
    "extraInfo_en": "Your example with IGP and a configured value belongs exactly to this category of policy-driven MED control.",
    "tip": "MED kann bewusst gesetzt werden, nicht nur passiv mitlaufen.",
    "tip_en": "MED can be deliberately set, not just passively inherited.",
    "tags": [
      "BGP",
      "Route Policy",
      "MED",
      "Attributes"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q15",
    "question": "Wie markiert man in einer Export-Policy unterschiedliche Prefixe mit unterschiedlichen Communities?",
    "question_en": "How do you mark different prefixes with different communities in an export policy?",
    "options": [
      "Mit getrennten Prefix-Listen und getrennten Policy-Entries, die jeweils die passende Community addieren",
      "Mit nur einem einzigen Eintrag ohne Prefix-Match",
      "Nur ueber die BGP OPEN-Message",
      "Nur durch Aendern der Router-ID"
    ],
    "options_en": [
      "With separate prefix lists and separate policy entries that each add the matching community",
      "With only one single entry without any prefix match",
      "Only through the BGP OPEN message",
      "Only by changing the router ID"
    ],
    "correctIndex": 0,
    "explanation": "Das gezeigte Muster ist klassisch: Prefix-Liste pro Route-Gruppe und dann pro Entry die passende Community hinzufuegen.",
    "explanation_en": "The shown pattern is classic: one prefix list per route group, and then add the corresponding community in each entry.",
    "extraInfo": "Dadurch bleiben Match und Aktion sauber voneinander getrennt.",
    "extraInfo_en": "That keeps matching and action cleanly separated.",
    "tip": "Eine Route-Gruppe, eine Prefix-Liste, ein passender Policy-Entry.",
    "tip_en": "One route group, one prefix list, one matching policy entry.",
    "tags": [
      "BGP",
      "Route Policy",
      "COMMUNITY",
      "Prefix List",
      "Export"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q16",
    "question": "Was bedeutet in einer Export-Policy ein Match wie 'from protocol ospf' am ehesten?",
    "question_en": "What does a match such as 'from protocol ospf' most likely mean in an export policy?",
    "options": [
      "Es betrifft Routen, die ueber OSPF gelernt wurden und nun fuer den Export in BGP betrachtet werden",
      "Es betrifft nur BGP-Routen mit ORIGIN IGP",
      "Es betrifft nur Routen von eBGP-Peers",
      "Es schaltet OSPF auf dem Router ab"
    ],
    "options_en": [
      "It affects routes learned through OSPF that are now being considered for export into BGP",
      "It affects only BGP routes with ORIGIN IGP",
      "It affects only routes from eBGP peers",
      "It disables OSPF on the router"
    ],
    "correctIndex": 0,
    "explanation": "Das Match bezieht sich auf die Herkunft der Route im lokalen Routing-Kontext. In einer Export-Policy geht es also um OSPF-gelernte Routen, die in BGP exportiert werden sollen.",
    "explanation_en": "The match refers to the route's origin in the local routing context. In an export policy, that means OSPF-learned routes that are being considered for export into BGP.",
    "extraInfo": "Das ist nicht dasselbe wie das BGP-ORIGIN-Attribut.",
    "extraInfo_en": "That is not the same as the BGP ORIGIN attribute.",
    "tip": "Protocol-Match fragt: Woher kam die Route lokal?",
    "tip_en": "Protocol match asks: where did the route come from locally?",
    "tags": [
      "BGP",
      "Route Policy",
      "OSPF",
      "Export",
      "Protocol Match"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q17",
    "question": "Wie wirkt LOCAL_PREF auf die Pfadauswahl innerhalb eines AS?",
    "question_en": "How does LOCAL_PREF influence path selection inside an AS?",
    "options": [
      "Hoehere Werte werden bevorzugt und beeinflussen damit, welcher Exit-Router genommen wird",
      "Niedrigere Werte werden immer bevorzugt",
      "LOCAL_PREF wirkt nur bei eBGP nach aussen",
      "LOCAL_PREF ersetzt den NEXT_HOP"
    ],
    "options_en": [
      "Higher values are preferred and therefore influence which exit router is chosen",
      "Lower values are always preferred",
      "LOCAL_PREF applies only to outbound eBGP",
      "LOCAL_PREF replaces NEXT_HOP"
    ],
    "correctIndex": 0,
    "explanation": "LOCAL_PREF steuert typischerweise den bevorzugten Ausgangspfad aus dem eigenen AS. Hoehere Werte sind attraktiver.",
    "explanation_en": "LOCAL_PREF typically controls the preferred exit path from the local AS. Higher values are more attractive.",
    "extraInfo": "Deshalb wird LOCAL_PREF oft per Import-Policy oder interner Policy gesetzt.",
    "extraInfo_en": "That is why LOCAL_PREF is often set by import policy or other internal policy logic.",
    "tip": "Local Preference: hoch gewinnt.",
    "tip_en": "Local Preference: high wins.",
    "tags": [
      "BGP",
      "LOCAL_PREF",
      "Best Path",
      "Route Policy"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s5-q18",
    "question": "Warum ist die Kombination aus Prefix-Liste und Community in einer Export-Policy so nuetzlich?",
    "question_en": "Why is the combination of a prefix list and a community in an export policy so useful?",
    "options": [
      "Weil bestimmte Prefix-Gruppen gezielt markiert und spaeter von anderen Routern unterschiedlich behandelt werden koennen",
      "Weil dadurch keine BGP-Session mehr noetig ist",
      "Weil Communities den AS_PATH ueberfluessig machen",
      "Weil Prefix-Listen nur fuer OSPF gedacht sind"
    ],
    "options_en": [
      "Because specific prefix groups can be marked deliberately and later treated differently by other routers",
      "Because no BGP session is needed afterward",
      "Because communities make AS_PATH unnecessary",
      "Because prefix lists are intended only for OSPF"
    ],
    "correctIndex": 0,
    "explanation": "Genau so werden Routen logisch gruppiert: Prefix-Liste fuer das Match, Community fuer die spaetere Steuerung durch Policies auf anderen Routern.",
    "explanation_en": "That is exactly how routes are grouped logically: prefix list for matching, community for later policy control on other routers.",
    "extraInfo": "Das ist ein klassisches Designmuster fuer saubere BGP-Steuerung.",
    "extraInfo_en": "This is a classic design pattern for clean BGP control.",
    "tip": "Prefix list waehlt aus, community markiert weiter.",
    "tip_en": "Prefix list selects, community marks onward.",
    "tags": [
      "BGP",
      "Route Policy",
      "COMMUNITY",
      "Prefix List",
      "Design"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 5",
    "section_en": "Section 5"
  },
  {
    "id": "bgp-m1s6-q1",
    "question": "Was ist die grundlegende Rolle von BGP?",
    "question_en": "What is the fundamental role of BGP?",
    "options": [
      "Als Exterior Routing Protocol Erreichbarkeitsinformationen zwischen verschiedenen AS auszutauschen",
      "VLAN-Tags auf Ethernet-Ports zu setzen",
      "MPLS-Labels im Core zu signalisieren",
      "TCP durch UDP zu ersetzen"
    ],
    "options_en": [
      "To exchange reachability information between different ASes as an exterior routing protocol",
      "To assign VLAN tags on Ethernet ports",
      "To signal MPLS labels in the core",
      "To replace TCP with UDP"
    ],
    "correctIndex": 0,
    "explanation": "Der urspruengliche BGP-Zweck ist der Austausch von IP-Erreichbarkeit zwischen verschiedenen autonomen Systemen.",
    "explanation_en": "The original purpose of BGP is to exchange IP reachability between different autonomous systems.",
    "extraInfo": "Heute ist BGP deutlich breiter im Einsatz, aber das ist der Kern.",
    "extraInfo_en": "Today BGP is used much more broadly, but that is still the core idea.",
    "tip": "BGP = zwischen AS, nicht fuer internes IGP-Basisrouting gedacht.",
    "tip_en": "BGP = between ASes, not meant as the basic internal IGP.",
    "tags": [
      "BGP",
      "Overview",
      "Role"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q2",
    "question": "Was ist ein Autonomous System (AS)?",
    "question_en": "What is an Autonomous System (AS)?",
    "options": [
      "Eine Sammlung von Routern unter derselben administrativen Kontrolle",
      "Eine einzelne TCP-Verbindung zwischen zwei Routern",
      "Ein Layer-2-Switch-Verbund ohne Routing",
      "Eine Prefix-Liste fuer Communities"
    ],
    "options_en": [
      "A collection of routers under the same administrative control",
      "A single TCP connection between two routers",
      "A Layer 2 switching domain without routing",
      "A prefix list for communities"
    ],
    "correctIndex": 0,
    "explanation": "Ein AS ist organisatorisch und routingtechnisch ein zusammengehoeriger Bereich unter einer gemeinsamen Verwaltung.",
    "explanation_en": "An AS is an organizational and routing domain under a common administration.",
    "extraInfo": "Typische Beispiele sind ISPs oder grosse Unternehmensnetze.",
    "extraInfo_en": "Typical examples are ISPs or large enterprise networks.",
    "tip": "AS = Routerfamilie unter einer Administration.",
    "tip_en": "AS = router family under one administration.",
    "tags": [
      "BGP",
      "AS",
      "Overview"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q3",
    "question": "Welche Hauptnachrichten verwendet BGP in einer Session?",
    "question_en": "Which main messages does BGP use in a session?",
    "options": [
      "OPEN, KEEPALIVE, UPDATE und NOTIFICATION",
      "SYN, ACK, FIN und RESET",
      "HELLO, LSA, SPF und ACK",
      "LABEL, PATH, RSVP und GRE"
    ],
    "options_en": [
      "OPEN, KEEPALIVE, UPDATE, and NOTIFICATION",
      "SYN, ACK, FIN, and RESET",
      "HELLO, LSA, SPF, and ACK",
      "LABEL, PATH, RSVP, and GRE"
    ],
    "correctIndex": 0,
    "explanation": "Diese vier Message-Typen decken Session-Aufbau, Lebenszeichen, Routenupdates und Fehlerbehandlung ab.",
    "explanation_en": "These four message types cover session setup, keepalive behavior, route updates, and error handling.",
    "extraInfo": "Route Refresh ist ein weiterer spezieller Typ, aber nicht einer der klassischen vier Haupttypen aus dem Einstieg.",
    "extraInfo_en": "Route Refresh is another specific type, but not one of the classic four main entry-level message types.",
    "tip": "OPEN, KEEPALIVE, UPDATE, NOTIFICATION.",
    "tip_en": "OPEN, KEEPALIVE, UPDATE, NOTIFICATION.",
    "tags": [
      "BGP",
      "Messages",
      "Session"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q4",
    "question": "Welche Informationen traegt eine BGP UPDATE-Message typischerweise?",
    "question_en": "What information does a BGP UPDATE message typically carry?",
    "options": [
      "NLRI beziehungsweise Reachability-Informationen und die zugehoerigen Path Attributes",
      "Nur die TCP-Sequenznummern",
      "Nur die Router-ID beider Seiten",
      "Nur Communities ohne Prefixe"
    ],
    "options_en": [
      "NLRI or reachability information together with the associated path attributes",
      "Only the TCP sequence numbers",
      "Only the router IDs of both sides",
      "Only communities without prefixes"
    ],
    "correctIndex": 0,
    "explanation": "UPDATE ist die eigentliche Nutznachricht fuer BGP-Routen: welche Prefixe es gibt oder nicht mehr gibt und welche Attribute dazu gehoeren.",
    "explanation_en": "UPDATE is the real work message for BGP routes: which prefixes exist or no longer exist and which attributes belong to them.",
    "extraInfo": "Genau hier werden Pfadauswahl und Policy spaeter interessant.",
    "extraInfo_en": "This is exactly where path selection and policy later become interesting.",
    "tip": "UPDATE = Prefix + Attribute.",
    "tip_en": "UPDATE = prefix + attributes.",
    "tags": [
      "BGP",
      "UPDATE",
      "NLRI",
      "Path Attributes"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q5",
    "question": "In welchen BGP-Zustaenden sieht man eine Session typischerweise haengen, wenn die TCP-Verbindung gar nicht sauber zustande kommt?",
    "question_en": "In which BGP states do you typically see a session get stuck when the TCP connection does not come up cleanly?",
    "options": [
      "Connect und Active",
      "OpenConfirm und Established",
      "Only Notification",
      "IGP und EGP"
    ],
    "options_en": [
      "Connect and Active",
      "OpenConfirm and Established",
      "Only Notification",
      "IGP and EGP"
    ],
    "correctIndex": 0,
    "explanation": "Wenn TCP nicht sauber steht, pendelt die Session typischerweise in den fruehen FSM-Zustaenden wie Connect und Active.",
    "explanation_en": "If TCP does not come up cleanly, the session typically oscillates in early FSM states such as Connect and Active.",
    "extraInfo": "Active ist dabei oft ein Retry-/Wartezustand, nicht 'alles laeuft gut'.",
    "extraInfo_en": "Active is often a retry or waiting state, not 'everything is fine'.",
    "tip": "TCP-Probleme zeigen sich frueh in Connect/Active.",
    "tip_en": "TCP problems show up early in Connect/Active.",
    "tags": [
      "BGP",
      "FSM",
      "TCP",
      "Troubleshooting"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q6",
    "question": "In welchen Phasen kann sich eine BGP-Session nach erfolgreichem TCP-Aufbau befinden, bevor sie voll etabliert ist?",
    "question_en": "In which phases can a BGP session be after TCP is up but before it is fully established?",
    "options": [
      "OpenSent und OpenConfirm",
      "Only Idle",
      "Only Active",
      "Only Notification"
    ],
    "options_en": [
      "OpenSent and OpenConfirm",
      "Only Idle",
      "Only Active",
      "Only Notification"
    ],
    "correctIndex": 0,
    "explanation": "Nach erfolgreichem TCP-Aufbau kommt die BGP-spezifische OPEN-/KEEPALIVE-Phase mit OpenSent und OpenConfirm, bevor Established erreicht wird.",
    "explanation_en": "After TCP is up, the BGP-specific OPEN/KEEPALIVE phase uses OpenSent and OpenConfirm before Established is reached.",
    "extraInfo": "Established ist erst dann erreicht, wenn die Session wirklich fuer normalen Nachrichtenaustausch bereit ist.",
    "extraInfo_en": "Established is reached only when the session is truly ready for normal message exchange.",
    "tip": "TCP steht zuerst, BGP bestaetigt danach.",
    "tip_en": "TCP comes first, BGP confirms afterward.",
    "tags": [
      "BGP",
      "FSM",
      "OpenSent",
      "OpenConfirm"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q7",
    "question": "Welche zwei grundlegenden Arten von BGP-Sessions koennen zwei Router miteinander haben?",
    "question_en": "Which two fundamental kinds of BGP sessions can two routers have with each other?",
    "options": [
      "iBGP und eBGP",
      "LDP und RSVP",
      "IGP und MED",
      "TCP und UDP"
    ],
    "options_en": [
      "iBGP and eBGP",
      "LDP and RSVP",
      "IGP and MED",
      "TCP and UDP"
    ],
    "correctIndex": 0,
    "explanation": "Die Grundunterscheidung ist einfach: gleiches AS bedeutet iBGP, unterschiedliches AS bedeutet eBGP.",
    "explanation_en": "The basic distinction is simple: same AS means iBGP, different AS means eBGP.",
    "extraInfo": "Viele weitere BGP-Regeln leiten sich aus genau dieser Trennung ab.",
    "extraInfo_en": "Many other BGP rules follow directly from this separation.",
    "tip": "gleiches AS = iBGP, anderes AS = eBGP.",
    "tip_en": "same AS = iBGP, different AS = eBGP.",
    "tags": [
      "BGP",
      "iBGP",
      "eBGP",
      "Sessions"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q8",
    "question": "Was braucht eine nicht direkt benachbarte eBGP-Session zusaetzlich, damit sie ueber mehrere Hops aufgebaut werden kann?",
    "question_en": "What does a non-directly-connected eBGP session additionally need so that it can be built across multiple hops?",
    "options": [
      "Einen passenden eBGP-multihop-Wert, damit das TTL-Limit nicht schon am ersten Hop endet",
      "Eine hoehere LOCAL_PREF auf beiden Routern",
      "Ein anderes TCP-Portpaar",
      "Ein MPLS-Service-Label"
    ],
    "options_en": [
      "A suitable eBGP multihop value so that the TTL limit does not expire at the first hop",
      "A higher LOCAL_PREF on both routers",
      "A different TCP port pair",
      "An MPLS service label"
    ],
    "correctIndex": 0,
    "explanation": "Normales eBGP geht von direkter Nachbarschaft aus. Bei mehreren Hops muss das TTL-Verhalten per multihop passend erweitert werden.",
    "explanation_en": "Normal eBGP assumes direct adjacency. Across multiple hops, TTL behavior must be extended appropriately with multihop.",
    "extraInfo": "Der konfigurierte Wert muss hoch genug fuer die reale Hop-Anzahl sein.",
    "extraInfo_en": "The configured value must be high enough for the actual hop count.",
    "tip": "Nicht benachbartes eBGP braucht multihop.",
    "tip_en": "Non-adjacent eBGP needs multihop.",
    "tags": [
      "BGP",
      "eBGP",
      "Multihop",
      "Sessions"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q9",
    "question": "Welche Aussage beschreibt die BGP-Best-Path-Auswahl fuer denselben Prefix am besten?",
    "question_en": "Which statement best describes BGP best-path selection for the same prefix?",
    "options": [
      "BGP vergleicht die Pfade schrittweise anhand definierter Attribute wie LOCAL_PREF, AS_PATH, ORIGIN, MED und spaeter eBGP vor iBGP",
      "BGP nimmt immer einfach die erste empfangene Route",
      "BGP waehlt immer den Pfad mit der hoechsten Router-ID zuerst",
      "BGP ignoriert alle Attribute und verwendet nur TCP"
    ],
    "options_en": [
      "BGP compares paths step by step using defined attributes such as LOCAL_PREF, AS_PATH, ORIGIN, MED, and later eBGP over iBGP",
      "BGP always simply takes the first route received",
      "BGP always chooses the path with the highest router ID first",
      "BGP ignores all attributes and uses only TCP"
    ],
    "correctIndex": 0,
    "explanation": "Best-Path-Auswahl in BGP ist ein geordneter Vergleich, kein Zufalls- oder First-Come-Mechanismus.",
    "explanation_en": "Best-path selection in BGP is an ordered comparison, not a random or first-come mechanism.",
    "extraInfo": "Genau deshalb koennen Policies die Auswahl gezielt beeinflussen.",
    "extraInfo_en": "That is exactly why policies can influence the selection deliberately.",
    "tip": "BGP entscheidet in Reihenfolge, nicht nach Gefuehl.",
    "tip_en": "BGP decides in order, not by intuition.",
    "tags": [
      "BGP",
      "Best Path",
      "Route Selection"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q10",
    "question": "Wie veraendern Route Policies das Default-Verhalten eines BGP-Routers?",
    "question_en": "How do route policies change the default behavior of a BGP router?",
    "options": [
      "Sie bestimmen, welche Routen akzeptiert, verworfen oder mit geaenderten Attributen weiterverarbeitet werden",
      "Sie ersetzen TCP durch ein lokales Protokoll",
      "Sie deaktivieren automatisch die Best-Path-Wahl",
      "Sie machen jede Route automatisch best und used"
    ],
    "options_en": [
      "They determine which routes are accepted, rejected, or further processed with modified attributes",
      "They replace TCP with a local protocol",
      "They automatically disable best-path selection",
      "They automatically make every route best and used"
    ],
    "correctIndex": 0,
    "explanation": "Policies greifen direkt in Annahme, Ablehnung und Attributmanipulation ein und aendern damit das Standardverhalten der Routenverarbeitung.",
    "explanation_en": "Policies directly affect acceptance, rejection, and attribute manipulation and therefore change the default route-processing behavior.",
    "extraInfo": "Damit sind Policies eines der wichtigsten Werkzeuge in BGP ueberhaupt.",
    "extraInfo_en": "That makes policies one of the most important tools in BGP overall.",
    "tip": "Policy = bewusstes Ueberschreiben von Default-Verhalten.",
    "tip_en": "Policy = deliberate override of default behavior.",
    "tags": [
      "BGP",
      "Route Policy",
      "Behavior"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q11",
    "question": "Welche Aussage zu Path Attributes ist als Beispielsammlung korrekt?",
    "question_en": "Which statement is a correct example collection of path attributes?",
    "options": [
      "COMMUNITY, LOCAL_PREF, AS_PATH und MED sind typische Beispiele",
      "SAP, SDP, VCID und DLC sind typische BGP-Path-Attribute",
      "OSPF Cost, VLAN ID und MTU sind typische BGP-Path-Attribute",
      "TCP Port, Router-ID und Ping Size sind typische BGP-Path-Attribute"
    ],
    "options_en": [
      "COMMUNITY, LOCAL_PREF, AS_PATH, and MED are typical examples",
      "SAP, SDP, VCID, and DLC are typical BGP path attributes",
      "OSPF cost, VLAN ID, and MTU are typical BGP path attributes",
      "TCP port, router ID, and ping size are typical BGP path attributes"
    ],
    "correctIndex": 0,
    "explanation": "Diese vier gehoeren zu den bekanntesten Attributen, die Pfadwahl und Policy in BGP beeinflussen.",
    "explanation_en": "These four are among the best-known attributes that influence path choice and policy in BGP.",
    "extraInfo": "Nicht alle davon sind gleich klassifiziert, aber sie sind alle wichtig fuer den Betrieb.",
    "extraInfo_en": "Not all of them are classified the same way, but all are important operationally.",
    "tip": "Wenn es Pfadwahl oder Policy beeinflusst, ist es oft ein relevantes Attribut.",
    "tip_en": "If it influences path choice or policy, it is often a relevant attribute.",
    "tags": [
      "BGP",
      "Path Attributes",
      "COMMUNITY",
      "LOCAL_PREF",
      "AS_PATH",
      "MED"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  },
  {
    "id": "bgp-m1s6-q12",
    "question": "Welche Aussage zu Accept und Reject in Import- und Export-Policies ist korrekt?",
    "question_en": "Which statement about accept and reject in import and export policies is correct?",
    "options": [
      "Import accept laesst eine Route in die BGP-Verarbeitung, Export accept erlaubt das Advertisen; reject verhindert das jeweils",
      "Import reject bedeutet, dass die Route bevorzugt genutzt wird",
      "Export reject fuegt nur den AS_PATH nicht hinzu, advertised aber trotzdem",
      "Accept und reject wirken nur auf Communities, nicht auf Prefixe"
    ],
    "options_en": [
      "Import accept allows a route into BGP processing, export accept allows advertisement; reject prevents the respective action",
      "Import reject means the route is preferred for use",
      "Export reject only prevents AS_PATH addition but still advertises the route",
      "Accept and reject affect only communities, not prefixes"
    ],
    "correctIndex": 0,
    "explanation": "Accept und reject muessen immer im Richtungs-Kontext gelesen werden: Import betrifft Annahme, Export betrifft Weitergabe.",
    "explanation_en": "Accept and reject must always be read in the direction context: import affects acceptance, export affects advertisement.",
    "extraInfo": "Das ist eine der haeufigsten Stolperstellen am Anfang.",
    "extraInfo_en": "That is one of the most common stumbling blocks at the beginning.",
    "tip": "Import fragt: darf rein? Export fragt: darf raus?",
    "tip_en": "Import asks: may it come in? Export asks: may it go out?",
    "tags": [
      "BGP",
      "Route Policy",
      "Import",
      "Export",
      "Accept",
      "Reject"
    ],
    "source": "BGP Grundlagen",
    "source_en": "BGP fundamentals",
    "topic": "BGP",
    "topic_en": "BGP",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 6",
    "section_en": "Section 6"
  }
]
;
