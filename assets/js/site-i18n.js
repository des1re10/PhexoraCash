(() => {
    "use strict";

    const DEFAULT_LANGUAGE = "en";
    const LANGUAGE_QUERY_PARAMETER = "lang";
    const SUPPORTED_LANGUAGES = new Set(["de", "en"]);

    const TRANSLATIONS = Object.freeze({
        en: Object.freeze({
            "common.primaryNavigation": "Primary navigation",
            "common.researchHome": "QuietBlocks research home",
            "common.status": "Status",
            "common.papers": "Papers",
            "common.contribute": "Contribute",
            "common.languageSelection": "Language selection",
            "common.companyTagline": "Software for concrete workflows – from clear requirements to controlled live operation.",
            "common.companyDescription": "We develop software, design AI-assisted workflows, and conduct technical audits.",
            "common.footerNavigation": "Navigation",
            "common.home": "Home",
            "common.about": "About",
            "common.contact": "Contact",
            "common.applications": "Applications",
            "common.getInTouch": "Get in Touch",
            "common.followUs": "Follow Us",
            "common.copyright": "© 2026 Phexora AI, LLC, Berlin, Germany. All rights reserved.",
            "common.privacy": "Privacy Policy",
            "common.terms": "Terms of Service",
            "common.imprint": "Impressum",
            "common.refundPolicy": "Refund Policy",

            "home.metaTitle": "QuietBlocks | Private payments in the quantum era",
            "home.metaDescription": "QuietBlocks researches private, publicly verifiable payments with parallel blocks and post-quantum cryptography.",
            "home.heroLabel": "Open research",
            "home.heroTitle": "Private payments in the quantum era",
            "home.heroSubtitle": "QuietBlocks explores how to combine public verification, parallel blocks, and privacy by default in a payment network designed to resist quantum attacks.",
            "home.heroRisk": "A sufficiently powerful quantum computer could forge today's elliptic-curve signatures and let attackers spend funds without the owner's approval.",
            "home.comparisonCta": "Compare the networks",
            "home.papersCta": "Read the research",
            "home.targetLabel": "The target architecture",
            "home.targetsAria": "QuietBlocks architecture targets",
            "home.bitsTarget": "bit post-quantum security target",
            "home.tpsValue": "1,000+",
            "home.tpsTarget": "accepted layer-1 TPS target",
            "home.privacyValue": "Private",
            "home.transparentTarget": "by default at protocol level",
            "home.statusKicker": "Research programme",
            "home.statusTitle": "From rigorous design to verifiable infrastructure",
            "home.statusDescription": "QuietBlocks brings specifications, comparative experiments, and verification paths together in a focused programme. Each phase creates reviewable foundations for the next.",
            "home.status1Chip": "Foundation defined",
            "home.status1Step": "1 · Requirements",
            "home.status1Title": "Research design 0.5.4",
            "home.status1Description": "The design connects security, privacy, scalability, independent operation, and production incentives in one reference architecture.",
            "home.status2Chip": "Comparison mapped",
            "home.status2Step": "2 · Prior art",
            "home.status2Title": "Research direction established",
            "home.status2Description": "Published baselines and reusable ideas are mapped into a focused comparative programme.",
            "home.status3Chip": "Study designed",
            "home.status3Step": "3 · Feasibility",
            "home.status3Title": "T305 comparison study",
            "home.status3Description": "The published experiment design compares authorisation, state management, and client budgets within one complete transaction relation.",
            "home.status4Chip": "Research roadmap",
            "home.status4Step": "4 · Next fields",
            "home.status4Title": "Discovery, network privacy, and DAG state",
            "home.status4Description": "Dedicated studies extend the foundation across wallet discovery, transport privacy, and deterministic state.",
            "home.requirementsKicker": "Design principles",
            "home.requirementsTitle": "Security, privacy, scale, and independent operation",
            "home.requirementsDescription": "QuietBlocks treats technical capability and economic operability as one architecture challenge instead of isolated features.",
            "home.requirement1Title": "Post-quantum from the ground up",
            "home.requirement1Description": "Commitments, authorisation, encryption, and validity proofs are composed around a common post-quantum security target.",
            "home.requirement2Title": "Privacy across the transaction lifecycle",
            "home.requirement2Description": "The research programme spans values, recipients, transaction relationships, selective disclosure, and network origins.",
            "home.requirement3Title": "Scalable at layer 1",
            "home.requirement3Description": "The programme defines client, verifier, wire-size, and throughput targets for the complete private transaction path.",
            "home.requirement4Title": "Independently operable",
            "home.requirement4Description": "Throughput and recovery must remain inside a frozen, non-institutional validator budget instead of redefining the hardware after measurement.",
            "home.requirement5Title": "Contestable block production",
            "home.requirement5Description": "Hardware, pool templates, ordering incentives, and the long-run security budget remain explicit, independently reviewed release questions.",
            "home.comparisonTitle": "What QuietBlocks draws from Bitcoin, Kaspa, and Monero",
            "home.bitcoinPrinciple": "Anyone can verify transactions independently.",
            "home.kaspaPrinciple": "Blocks can be produced in parallel to support higher throughput.",
            "home.moneroPrinciple": "The protocol protects payment details by default.",
            "home.quietblocksAddition": "Added as a research goal: post-quantum signatures designed to withstand quantum computers.",
            "home.quantumContextTitle": "Why start preparing now?",
            "home.quantumContext": "AI has already improved error correction in quantum computing experiments. The timeline for breaking today's signatures is uncertain. Updating a payment network, its wallets, and the way existing funds are secured takes time.",
            "home.quantumNist": "NIST on the transition to post-quantum cryptography",
            "home.quantumAiStudy": "Study on AI-assisted quantum error correction",
            "home.comparisonVideoAria": "Video comparing the QuietBlocks design with Bitcoin, Kaspa, and Monero",
            "home.comparisonCaption": "The video compares the design goals of QuietBlocks research revision 0.5.4.",
            "home.publicationKicker": "Research with a clear direction",
            "home.publicationTitle": "The foundation of QuietBlocks",
            "home.publicationDescription": "Read the specification, verification plan, and feasibility study protocol.",
            "home.paper1Order": "Start here",
            "home.paper1Status": "Research design 0.5.4",
            "home.paper1Title": "Post-quantum DAG protocol for private payments",
            "home.paper1Abstract": "The specification describes the requirements, proposed architecture, and verification plan for QuietBlocks.",
            "home.specificationPdf": "Specification PDF",
            "home.verificationPdf": "Verification plan PDF",
            "home.specificationSource": "Specification source",
            "home.verificationSource": "Verification-plan source",
            "home.paper2Order": "Then review the experiment",
            "home.paper2Status": "Comparative protocol 0.4.0",
            "home.paper2Title": "Stateless Versus Stateful Hash-Based Authorisation Inside a Private-Transaction STARK",
            "home.paper2Abstract": "A pre-registration draft for comparing full FIPS 205 SLH-DSA-SHAKE-256f and 256s with one-time and stateful hash-based baselines inside the same 2-input/2-output relation.",
            "home.paper2Note": "The comparison protocol creates a measurable decision basis for authorisation, state management, and constrained-client budgets.",
            "home.researchProtocolPdf": "Research protocol PDF",
            "home.protocolSource": "Protocol source",
            "home.priorArtDecision": "Prior-art and reuse decision",
            "home.operabilityDecision": "Operability and security-budget decision",
            "home.planningLabel": "Next research fields:",
            "home.planningText": "private note discovery, network-origin anonymity, and deterministic GHOSTDAG private-state semantics extend the publication programme.",
            "home.contributeKicker": "Open research",
            "home.contributeTitle": "Contribute to QuietBlocks",
            "home.contributeDescription": "Researchers and engineers can contribute cryptographic analysis, reproducible benchmarks, interoperability work, and independent implementations of the published experiments.",
            "home.contributeCta": "Contribute on GitHub"
        }),
        de: Object.freeze({
            "common.primaryNavigation": "Hauptnavigation",
            "common.researchHome": "QuietBlocks-Startseite",
            "common.status": "Status",
            "common.papers": "Publikationen",
            "common.contribute": "Mitwirken",
            "common.languageSelection": "Sprachauswahl",
            "common.companyTagline": "Software für konkrete Abläufe – von klaren Anforderungen bis zum kontrollierten Live-Betrieb.",
            "common.companyDescription": "Wir entwickeln Software, gestalten KI-gestützte Arbeitsabläufe und führen technische Audits durch.",
            "common.footerNavigation": "Navigation",
            "common.home": "Startseite",
            "common.about": "Über uns",
            "common.contact": "Kontakt",
            "common.applications": "Anwendungen",
            "common.getInTouch": "Kontakt aufnehmen",
            "common.followUs": "Folge uns",
            "common.copyright": "© 2026 Phexora AI, LLC, Berlin, Germany. Alle Rechte vorbehalten.",
            "common.privacy": "Datenschutz",
            "common.terms": "Nutzungsbedingungen",
            "common.imprint": "Impressum",
            "common.refundPolicy": "Erstattungsrichtlinie",

            "home.metaTitle": "QuietBlocks | Private Zahlungen im Quantenzeitalter",
            "home.metaDescription": "QuietBlocks erforscht private, öffentlich prüfbare Zahlungen mit parallelen Blöcken und Post-Quanten-Kryptografie.",
            "home.heroLabel": "Offene Forschung",
            "home.heroTitle": "Private Zahlungen im Quantenzeitalter",
            "home.heroSubtitle": "QuietBlocks erforscht, wie sich öffentliche Prüfbarkeit, parallele Blöcke und standardmäßig private Zahlungen in einem Netz mit Post-Quanten-Kryptografie verbinden lassen.",
            "home.heroRisk": "Ein ausreichend leistungsfähiger Quantencomputer könnte heutige Signaturen auf Basis elliptischer Kurven fälschen. Angreifer könnten damit fremde Guthaben ausgeben.",
            "home.comparisonCta": "Netzwerke vergleichen",
            "home.papersCta": "Forschung lesen",
            "home.targetLabel": "Die Zielarchitektur",
            "home.targetsAria": "Architekturziele von QuietBlocks",
            "home.bitsTarget": "Bit Post-Quantum-Sicherheitsziel",
            "home.tpsValue": "1.000+",
            "home.tpsTarget": "akzeptierte Layer-1-TPS als Ziel",
            "home.privacyValue": "Privat",
            "home.transparentTarget": "als Standard auf Protokollebene",
            "home.statusKicker": "Forschungsprogramm",
            "home.statusTitle": "Vom fundierten Design zur verifizierbaren Infrastruktur",
            "home.statusDescription": "QuietBlocks verbindet Spezifikation, Vergleichsexperimente und Verifikationspfade in einem fokussierten Programm. Jede Phase schafft überprüfbare Grundlagen für die nächste.",
            "home.status1Chip": "Fundament definiert",
            "home.status1Step": "1 · Anforderungen",
            "home.status1Title": "Forschungsdesign 0.5.4",
            "home.status1Description": "Das Design verbindet Anforderungen an Sicherheit, Privatsphäre, Skalierbarkeit, unabhängigen Betrieb und Produktionsanreize in einer gemeinsamen Referenzarchitektur.",
            "home.status2Chip": "Vergleich definiert",
            "home.status2Step": "2 · Stand der Forschung",
            "home.status2Title": "Forschungsrichtung festgelegt",
            "home.status2Description": "Veröffentlichte Baselines und wiederverwendbare Ansätze sind in einem fokussierten Vergleichsprogramm zusammengeführt.",
            "home.status3Chip": "Studie konzipiert",
            "home.status3Step": "3 · Machbarkeit",
            "home.status3Title": "T305-Vergleichsstudie",
            "home.status3Description": "Das veröffentlichte Versuchsdesign vergleicht Autorisierung, Zustandsmanagement und Client-Budgets innerhalb einer vollständigen Transaktionsrelation.",
            "home.status4Chip": "Forschungsroadmap",
            "home.status4Step": "4 · Nächste Felder",
            "home.status4Title": "Erkennung, Netzwerkprivatsphäre und DAG-Zustand",
            "home.status4Description": "Eigene Studien erweitern das Fundament um Wallet-Erkennung, Transportprivatsphäre und deterministischen Zustand.",
            "home.requirementsKicker": "Designprinzipien",
            "home.requirementsTitle": "Sicherheit, Privatsphäre, Skalierung und unabhängiger Betrieb",
            "home.requirementsDescription": "QuietBlocks betrachtet technische Fähigkeiten und wirtschaftliche Betreibbarkeit als gemeinsame Architekturaufgabe statt als isolierte Funktionen.",
            "home.requirement1Title": "Post-Quantum von Grund auf",
            "home.requirement1Description": "Commitments, Autorisierung, Verschlüsselung und Validitätsbeweise werden auf ein gemeinsames Post-Quantum-Sicherheitsziel ausgerichtet.",
            "home.requirement2Title": "Privatsphäre über den gesamten Transaktionsweg",
            "home.requirement2Description": "Das Forschungsprogramm umfasst Werte, Empfänger, Transaktionsbeziehungen, selektive Offenlegung und Netzwerkursprünge.",
            "home.requirement3Title": "Skalierbar auf Layer 1",
            "home.requirement3Description": "Das Programm definiert Ziele für Client, Verifier, Übertragungsgröße und Durchsatz am vollständigen privaten Transaktionspfad.",
            "home.requirement4Title": "Unabhängig betreibbar",
            "home.requirement4Description": "Durchsatz und Recovery müssen innerhalb eines vorab eingefrorenen, nicht institutionellen Validatorbudgets bleiben, statt die Hardware nach der Messung neu zu definieren.",
            "home.requirement5Title": "Bestreitbare Blockproduktion",
            "home.requirement5Description": "Hardware, Pool-Templates, Anreize bei der Transaktionsauswahl und das langfristige Sicherheitsbudget bleiben explizite, unabhängig geprüfte Release-Fragen.",
            "home.comparisonTitle": "Was QuietBlocks von Bitcoin, Kaspa und Monero aufgreift",
            "home.bitcoinPrinciple": "Jeder kann Transaktionen selbst prüfen.",
            "home.kaspaPrinciple": "Die parallele Blockproduktion ermöglicht einen höheren Durchsatz.",
            "home.moneroPrinciple": "Das Protokoll schützt Zahlungsdetails standardmäßig.",
            "home.quietblocksAddition": "Hinzu kommt als Forschungsziel: Post-Quanten-Signaturen, die Quantencomputern standhalten sollen.",
            "home.quantumContextTitle": "Warum die Vorbereitung heute beginnt",
            "home.quantumContext": "KI hat in Quantenexperimenten bereits die Fehlerkorrektur verbessert. Wann Quantencomputer heutige Signaturen brechen können, ist offen. Der Umstieg braucht Vorlauf. Protokolle und Wallets müssen umgestellt und bestehende Guthaben abgesichert werden.",
            "home.quantumNist": "NIST zum Umstieg auf Post-Quanten-Kryptografie",
            "home.quantumAiStudy": "Studie zur KI-gestützten Quantenfehlerkorrektur",
            "home.comparisonVideoAria": "Video zum Vergleich des QuietBlocks-Entwurfs mit Bitcoin, Kaspa und Monero",
            "home.comparisonCaption": "Das Video vergleicht die Entwurfsziele der QuietBlocks-Forschungsfassung 0.5.4.",
            "home.publicationKicker": "Forschung mit klarer Linie",
            "home.publicationTitle": "Das Fundament von QuietBlocks",
            "home.publicationDescription": "Hier findest du die Spezifikation, den Verifikationsplan und das Protokoll der Machbarkeitsstudie.",
            "home.paper1Order": "Hier beginnen",
            "home.paper1Status": "Forschungsdesign 0.5.4",
            "home.paper1Title": "Post-Quanten-DAG-Protokoll für private Zahlungen",
            "home.paper1Abstract": "Die Spezifikation beschreibt die Anforderungen, die Architektur und den Prüfplan für QuietBlocks.",
            "home.specificationPdf": "Spezifikation als PDF",
            "home.verificationPdf": "Verifikationsplan als PDF",
            "home.specificationSource": "Spezifikationsquelle",
            "home.verificationSource": "Quelle des Verifikationsplans",
            "home.paper2Order": "Danach das Experiment prüfen",
            "home.paper2Status": "Vergleichsprotokoll 0.4.0",
            "home.paper2Title": "Zustandslose versus zustandsbehaftete hashbasierte Autorisierung in einem STARK für private Transaktionen",
            "home.paper2Abstract": "Ein Vorregistrierungsentwurf zum Vergleich der vollständigen FIPS-205-Profile SLH-DSA-SHAKE-256f und 256s mit einmaligen und zustandsbehafteten hashbasierten Baselines innerhalb derselben 2-Input-/2-Output-Relation.",
            "home.paper2Note": "Das Vergleichsprotokoll schafft eine messbare Entscheidungsgrundlage für Autorisierung, Zustandsmanagement und die Budgets eingeschränkter Clients.",
            "home.researchProtocolPdf": "Forschungsprotokoll als PDF",
            "home.protocolSource": "Protokollquelle",
            "home.priorArtDecision": "Entscheidung zu Stand der Forschung und Wiederverwendung",
            "home.operabilityDecision": "Entscheidung zu Betreibbarkeit und Sicherheitsbudget",
            "home.planningLabel": "Nächste Forschungsfelder:",
            "home.planningText": "Private Note-Erkennung, Netzwerkursprungs-Anonymität und deterministische GHOSTDAG-Semantik für private Zustände erweitern das Publikationsprogramm.",
            "home.contributeKicker": "Offene Forschung",
            "home.contributeTitle": "Bei QuietBlocks mitarbeiten",
            "home.contributeDescription": "Forschende und Entwickler können kryptografische Analysen, reproduzierbare Benchmarks, Interoperabilitätsarbeit und unabhängige Implementierungen der veröffentlichten Experimente beitragen.",
            "home.contributeCta": "Auf GitHub mitwirken"
        })
    });

    const ATTRIBUTE_BINDINGS = Object.freeze([
        Object.freeze({ source: "data-i18n-aria-label", target: "aria-label" }),
        Object.freeze({ source: "data-i18n-content", target: "content" })
    ]);

    const VIDEO_SOURCES = Object.freeze({
        en: Object.freeze({
            src: "assets/videos/QuietBlocks_BlockchainComparison_EN_16x9.mp4?v=e42e311afc2c",
            poster: "assets/videos/QuietBlocks_BlockchainComparison_EN_16x9_poster.jpg?v=6e9841c0bd93",
            trackSrc: "assets/videos/QuietBlocks_BlockchainComparison_EN_16x9.en.vtt?v=8ee65093c419",
            trackLang: "en",
            trackLabel: "English"
        }),
        de: Object.freeze({
            src: "assets/videos/QuietBlocks_BlockchainComparison_DE_16x9.mp4?v=331d6fd8dd70",
            poster: "assets/videos/QuietBlocks_BlockchainComparison_DE_16x9_poster.jpg?v=c947a26b01ac",
            trackSrc: "assets/videos/QuietBlocks_BlockchainComparison_DE_16x9.de.vtt?v=ceb99a8ecbbe",
            trackLang: "de",
            trackLabel: "Deutsch"
        })
    });

    function translationFor(language, key) {
        const languageTranslations = TRANSLATIONS[language];
        if (!Object.hasOwn(languageTranslations, key)) {
            throw new Error(`Missing ${language} translation for: ${key}`);
        }
        return languageTranslations[key];
    }

    function collectBindings(language) {
        const bindings = [];

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            bindings.push({
                apply: () => {
                    element.textContent = translationFor(language, key);
                }
            });
        });

        ATTRIBUTE_BINDINGS.forEach(({ source, target }) => {
            document.querySelectorAll(`[${source}]`).forEach((element) => {
                const key = element.getAttribute(source);
                bindings.push({
                    apply: () => {
                        element.setAttribute(target, translationFor(language, key));
                    }
                });
            });
        });

        return bindings;
    }

    function updateLanguageButtons(language) {
        document.querySelectorAll("[data-language]").forEach((button) => {
            const isActive = button.dataset.language === language;
            button.setAttribute("aria-pressed", String(isActive));
            button.classList.toggle("active", isActive);
        });
    }

    function updateComparisonVideo(language) {
        const video = document.getElementById("comparison-video");
        const track = document.getElementById("comparison-video-track");
        if (!video || !track) {
            return;
        }
        const source = VIDEO_SOURCES[language];
        video.setAttribute("poster", source.poster);
        track.setAttribute("srclang", source.trackLang);
        track.setAttribute("label", source.trackLabel);
        if (track.getAttribute("src") !== source.trackSrc) {
            track.setAttribute("src", source.trackSrc);
        }
        if (video.getAttribute("src") !== source.src) {
            video.pause();
            video.setAttribute("src", source.src);
            video.load();
        }
    }

    function replaceLanguageQuery(language) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set(LANGUAGE_QUERY_PARAMETER, language);
        window.history.replaceState(null, "", currentUrl);
    }

    function applyLanguage(language, updateUrl) {
        if (!SUPPORTED_LANGUAGES.has(language)) {
            throw new RangeError(`Unsupported language: ${language}`);
        }

        const bindings = collectBindings(language);
        bindings.forEach(({ apply }) => apply());
        document.documentElement.lang = language;
        updateLanguageButtons(language);
        updateComparisonVideo(language);

        if (updateUrl) {
            replaceLanguageQuery(language);
        }
    }

    const requestedLanguage = new URLSearchParams(window.location.search).get(
        LANGUAGE_QUERY_PARAMETER
    );
    const initialLanguage = SUPPORTED_LANGUAGES.has(requestedLanguage)
        ? requestedLanguage
        : DEFAULT_LANGUAGE;

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.language, true);
        });
    });

    applyLanguage(
        initialLanguage,
        requestedLanguage !== null && requestedLanguage !== initialLanguage
    );
})();
