const pageData = {
    report: {
        week: 24,
        dates: '17 juin — 23 juin 2026',
        title: 'Veille Informatique',
        subtitle: 'Analyse premium des tendances hardware, sécurité, IA et infrastructures. Design évolutif pensé pour les équipes tech et les responsables innovation.',
    },
    featured: [
        {
            tag: 'IA',
            title: 'Architectures IA embarquées',
            summary: 'Les architectures ASIC avancées intègrent désormais de puissants blocs d'IA au plus proche des capteurs, ouvrant la voie à l\'autonomie des systèmes embarqués.',
                source: 'AnandTech',
                url: 'https://www.anandtech.com',
            variant: 'highlight'
        },
        {
            tag: 'CPU',
            title: 'Rupture Zen 5 / Zen 6',
            summary: 'Des premiers tests montrent une hausse d\'IPC significative tout en maîtrisant la consommation énergétique sur les architectures Ryzen de nouvelle génération.',
            source: 'TechPowerUp',
            url: 'https://www.techpowerup.com',
            variant: 'standard'
        },
        {
            tag: 'Sécurité',
            title: 'Vulnérabilité DMA critique',
            summary: '[⚠️ ALERTE] Une faille matérielle affecte plusieurs générations de puces. Le déploiement de correctifs et de mitigations est prioritaire.',
            source: 'The Verge',
            url: 'https://www.theverge.com',
            variant: 'alert'
        }
    ],
    categories: [
        {
            id: 'gpu',
            title: 'GPU & Cartes graphiques',
            description: 'Benchmark haut de gamme : les dernières puces rivalisent sur le ray-tracing et l\'IA dédiée, renforçant le positionnement des architectures dernière génération.',
            source: 'Videocardz',
            url: 'https://www.videocardz.com'
        },
        {
            id: 'cpu',
            title: 'CPU & Plateformes',
            description: 'Socket AM6 et DDR6 stimulent une refonte VRM. Ce changement impose une stratégie matérielle repensée pour les systèmes hautes performances.',
            source: 'Cowcotland',
            url: 'https://www.cowcotland.com'
        },
        {
            id: 'storage',
            title: 'Stockage & Mémoire',
            description: 'PCIe Gen 6 s\'invite dans les SSD externes, apportant des débits inédits pour la production 8K et les workflows professionnels exigeants.',
            source: 'Hardwareand',
            url: 'https://www.hardwareand.com'
        },
        {
            id: 'safety',
            title: 'Logiciels, drivers & sécurité',
            description: 'Mises à jour NVIDIA/AMD optimisent la stabilité DirectX 12 Ultimate. L\'open-source accélère les API GPU Linux avec une nouvelle bibliothèque communautaire.',
            source: 'Phoronix',
            url: 'https://www.phoronix.com'
        }
    ],
    watchlist: {
        title: '🔭 À surveiller',
        summary: 'La semaine prochaine, plusieurs acteurs dévoileront leurs roadmaps ASIC, ce qui pourrait redessiner les priorités d\'investissement en semi-conducteurs.',
        note: 'Restez prêt pour un événement industriel majeur et des annonces d\'architecture haut rendement.'
    },
    externalLinks: [
        { title: 'AnandTech', url: 'https://www.anandtech.com' },
        { title: 'TechPowerUp', url: 'https://www.techpowerup.com' },
        { title: 'The Verge', url: 'https://www.theverge.com' },
        { title: 'Videocardz', url: 'https://www.videocardz.com' },
        { title: 'Cowcotland', url: 'https://www.cowcotland.com' },
        { title: 'Hardwareand', url: 'https://www.hardwareand.com' },
        { title: 'Phoronix', url: 'https://www.phoronix.com' }
    ],
    stats: [
        {value: '4', label: 'Catégories clés'},
        {value: '8', label: 'Insights profonds'},
        {value: '95%', label: 'Sources vérifiées'}
    ],
};
