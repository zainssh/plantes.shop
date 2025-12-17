const plantsData = [
    {
        id: 1,
        name: "Ficus nitida Tressé",
        price: 840,
        category: "Bonsaïs",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-nitida-tresse-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-nitida-tresse.jpeg"
        ],
        description: "Le Ficus nitida Tressé est une plante d'intérieur populaire, appréciée pour son tronc tressé élégant et son feuillage dense et brillant.",
        care: {
            water: "Arrosage modéré",
            light: "Lumière vive indirecte",
            temperature: "18-24°C"
        },
        availability: 10,
        difficulty: "Facile",
        height: "1-2 m"
    },
    {
        id: 2,
        name: "Ficus moclame Tressé",
        price: 720,
        category: "Bonsaïs",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-moclame-tresse-clorofila-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-moclame-tresse.jpeg"
        ],
        description: "Le Ficus moclame Tressé se distingue par son feuillage vert clair et sa forme compacte.",
        care: {
            water: "Arrosage régulier",
            light: "Lumière vive",
            temperature: "16-25°C"
        },
        availability: 12,
        difficulty: "Facile",
        height: "1-1.5 m"
    },
    {
        id: 3,
        name: "Ficus benjamina Tressé",
        price: 600,
        category: "Bonsaïs",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-benjamina-tresse-maroc.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-benjamina-tresse-clorofila.jpeg"
        ],
        description: "Le Ficus benjamina, ou figuier pleureur, avec un tronc tressé pour une touche d'originalité.",
        care: {
            water: "Maintenir le sol humide",
            light: "Lumière vive indirecte",
            temperature: "18-26°C"
        },
        availability: 15,
        difficulty: "Moyenne",
        height: "1.5-2.5 m"
    },
    {
        id: 4,
        name: "Ficus benjamina Cage",
        price: 780,
        category: "Bonsaïs",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-benjamina-cage-maroc.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-benjamina-cage-maroc-5.jpeg"
        ],
        description: "Une variante unique du Ficus benjamina où le tronc est formé en cage.",
        care: {
            water: "Arrosage modéré",
            light: "Lumière vive",
            temperature: "18-26°C"
        },
        availability: 8,
        difficulty: "Moyenne",
        height: "1.5-2 m"
    },
    {
        id: 5,
        name: "Ficus microcarpa bonsai",
        price: 480,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ficus-microcarpa-bonsai.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Ficus-microcarpa-bonsai-clorofila.jpg"
        ],
        description: "Idéal pour s'initier à l'art du bonsaï. Robuste et facile d'entretien.",
        care: {
            water: "Arroser lorsque le substrat est sec",
            light: "Beaucoup de lumière",
            temperature: "15-25°C"
        },
        availability: 20,
        difficulty: "Facile",
        height: "30-50 cm"
    },
    {
        id: 6,
        name: "Olivier, olea europaea topiaire bonsai",
        price: 1680,
        category: "Bonsaïs",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/olivier-olea-europaea-bonsai-2.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/olivier-olea-europaea-bonsai.jpeg"
        ],
        description: "Apporte une touche méditerranéenne et sculpturale à votre terrasse ou jardin.",
        care: {
            water: "Arrosage modéré",
            light: "Plein soleil",
            temperature: "Supporte la chaleur"
        },
        availability: 5,
        difficulty: "Moyenne",
        height: "80-120 cm"
    },
    {
        id: 7,
        name: "Figue de barbarie – ait baamrane (sans épines)",
        price: 48,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/prickly-pears-2663130_1280-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Indian_Fig_2_-_Opuntia_ficus-indica.jpg"
        ],
        description: "Variété d'Opuntia sans épines, facile à manipuler, produisant de délicieux fruits.",
        care: {
            water: "Très peu d'arrosage",
            light: "Plein soleil",
            temperature: "Très résistant à la chaleur"
        },
        availability: 30,
        difficulty: "Très facile",
        height: "1-2 m"
    },
    {
        id: 8,
        name: "Cactus variété",
        price: 51,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/cactus-maroc-clorofila.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/cactus-maroc-clorofila-3.jpg"
        ],
        description: "Assortiment de petites variétés de cactus, parfaits pour débuter une collection.",
        care: {
            water: "Arrosage très limité",
            light: "Lumière vive",
            temperature: "Supporte de fortes chaleurs"
        },
        availability: 50,
        difficulty: "Très facile",
        height: "10-20 cm"
    },
    {
        id: 9,
        name: "Opuntia",
        price: 300,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/prickly-pears-2663130_1280-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Indian_Fig_2_-_Opuntia_ficus-indica.jpg"
        ],
        description: "Cactus emblématique des paysages arides.",
        care: {
            water: "Très résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "Aime la chaleur"
        },
        availability: 15,
        difficulty: "Très facile",
        height: "1-3 m"
    },
    {
        id: 10,
        name: "Neobuxbaumia",
        price: 660,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/24786759479_8aa8d670c1_b.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/25128109836_5f08edd87e_b.jpg"
        ],
        description: "Un cactus colonnaire majestueux, à croissance lente mais spectaculaire.",
        care: {
            water: "Arrosage parcimonieux",
            light: "Plein soleil",
            temperature: "Chaleur intense"
        },
        availability: 7,
        difficulty: "Facile",
        height: "Peut atteindre 15 m"
    },
    {
        id: 11,
        name: "Myrtillocactus",
        price: 380,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/39174729005_b381f59b68_b.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Ses_Salines_-_Botanicactus_-_Myrtillocactus_geometrizans_05_ies-scaled-1.jpg"
        ],
        description: "Cactus arborescent aux tiges bleutées caractéristiques.",
        care: {
            water: "Arrosage faible à modéré",
            light: "Plein soleil ou mi-ombre",
            temperature: "Sensible au gel"
        },
        availability: 10,
        difficulty: "Facile",
        height: "2-4 m"
    },
    {
        id: 12,
        name: "Ferocactus glaucescens (blue barrel)",
        price: 264,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/ferocactus-glaucescens-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/472a424d7ff0d3cbdc245df04a3fc7f8c2c04487.jpg"
        ],
        description: "Cactus tonneau à la couleur bleu-vert distinctive et aux épines dorées.",
        care: {
            water: "Très peu d'arrosage",
            light: "Plein soleil",
            temperature: "Aime la chaleur"
        },
        availability: 18,
        difficulty: "Facile",
        height: "30-50 cm"
    },
    {
        id: 13,
        name: "Euphorbia",
        price: 192,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Euphorbia_ingens_-_Samdan_agaci_Adana_2017-11-19_02-1-scaled-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/canarian-spurge-plant-euphorbia-canariensis-spurge.jpg"
        ],
        description: "Plantes succulentes qui ressemblent à des cactus.",
        care: {
            water: "Arrosage modéré",
            light: "Lumière vive",
            temperature: "Variable"
        },
        availability: 25,
        difficulty: "Facile",
        height: "Variable"
    },
    {
        id: 14,
        name: "Euphorbia trigona (trigone)",
        price: 216,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/euphorbia-trigona.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/euphorbia-triangle.jpg"
        ],
        description: "Aussi appelée 'plante cathédrale africaine', cette euphorbe a une croissance verticale rapide.",
        care: {
            water: "Laisser sécher le sol",
            light: "Lumière vive",
            temperature: "18-25°C"
        },
        availability: 20,
        difficulty: "Facile",
        height: "Peut atteindre 2m"
    },
    {
        id: 15,
        name: "Euphorbia milii (couronne d’épines)",
        price: 46,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/euphorbia-milii-rouge.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/euphorbia-rouge-2.jpg"
        ],
        description: "Arbuste épineux qui produit de jolies petites fleurs presque toute l'année.",
        care: {
            water: "Arrosage modéré",
            light: "Plein soleil",
            temperature: "Aime la chaleur"
        },
        availability: 40,
        difficulty: "Facile",
        height: "30-60 cm"
    },
    {
        id: 16,
        name: "Pachycereus pringlei",
        price: 380,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/vente-Cactus-Pachycereus-pringlei-Pepiniere-marrakech-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/5753605439_66729964bc_b.jpg"
        ],
        description: "Connu comme le 'Cardón', c'est le plus grand cactus du monde.",
        care: {
            water: "Très peu d'arrosage",
            light: "Plein soleil",
            temperature: "Supporte des chaleurs extrêmes"
        },
        availability: 5,
        difficulty: "Facile",
        height: "Peut atteindre 19 m"
    },
    {
        id: 17,
        name: "Cactus Barrel",
        price: 1500,
        category: "Cactus",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/0659fc1394bc877d4160923c4750c04b9f5dd8c5.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/spiny-cactus-14176349468p2.jpg"
        ],
        description: "Grand cactus en forme de tonneau, un classique des jardins de rocaille.",
        care: {
            water: "Arrosage minimal",
            light: "Plein soleil intense",
            temperature: "Très résistant à la chaleur"
        },
        availability: 3,
        difficulty: "Facile",
        height: "Jusqu'à 1 m"
    },
    {
        id: 18,
        name: "Gazon Paspalum",
        price: 80,
        category: "Plantes graminées",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-paspalum-maroc-clorofila.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-paspalum-maroc-clorofila.jpeg"
        ],
        description: "Gazon très résistant à la chaleur, au piétinement et à l'eau salée.",
        care: {
            water: "Bonne tolérance à la sécheresse",
            light: "Plein soleil",
            temperature: "Excellent pour climats chauds"
        },
        availability: 100,
        difficulty: "Facile",
        height: "Tonte à 3-5 cm"
    },
    {
        id: 19,
        name: "Gazon Kikuyu",
        price: 84,
        category: "Plantes graminées",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-kikuyu-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-kikuyu-maroc.jpeg"
        ],
        description: "Gazon agressif et rampant, formant un tapis dense et résistant.",
        care: {
            water: "Arrosage régulier",
            light: "Plein soleil",
            temperature: "Aime la chaleur"
        },
        availability: 100,
        difficulty: "Facile",
        height: "Tonte à 4-6 cm"
    },
    {
        id: 20,
        name: "Gazon Zoysia japonica",
        price: 114,
        category: "Plantes graminées",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-zoysia-japonaise-clorofila.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2022/01/gazon-zoysia-japonaise-maroc.jpeg"
        ],
        description: "Gazon de haute qualité, très dense, qui étouffe les mauvaises herbes.",
        care: {
            water: "Besoins en eau modérés",
            light: "Plein soleil ou mi-ombre",
            temperature: "Très bonne résistance à la chaleur"
        },
        availability: 80,
        difficulty: "Moyenne",
        height: "Tonte à 3-5 cm"
    },
    {
        id: 21,
        name: "Olivier (Picholine Marocaine)",
        price: 8,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/picholine-marocaine.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/picholine-marocaine.jpeg"
        ],
        description: "La variété d'olivier la plus cultivée au Maroc, appréciée pour sa double aptitude.",
        care: {
            water: "Très résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "Adapté au climat méditerranéen"
        },
        availability: 200,
        difficulty: "Facile",
        height: "4-6 m"
    },
    {
        id: 22,
        name: "Olivier Arbosana",
        price: 8,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/arbosana-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/arborsana-oliviers.jpg"
        ],
        description: "Variété d'olivier de petite taille, idéale pour la culture en haute densité.",
        care: {
            water: "Irrigation contrôlée",
            light: "Plein soleil",
            temperature: "Bonne résistance au froid"
        },
        availability: 150,
        difficulty: "Facile",
        height: "2-3 m"
    },
    {
        id: 23,
        name: "Olivier (Koroneiki)",
        price: 15,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-koroneiki.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-koroneiki.jpg"
        ],
        description: "Variété d'origine grecque, réputée for son rendement élevé en huile d'excellente qualité.",
        care: {
            water: "Bonne résistance à la sécheresse",
            light: "Plein soleil",
            temperature: "Sensible aux fortes gelées"
        },
        availability: 180,
        difficulty: "Facile",
        height: "4-5 m"
    },
    {
        id: 24,
        name: "Olivier languedoc",
        price: 36,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/Languedoc-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/arbequine-maroc.jpg"
        ],
        description: "Variété française rustique, produisant des olives pour l'huile et la table.",
        care: {
            water: "Résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "Bonne résistance au froid"
        },
        availability: 90,
        difficulty: "Facile",
        height: "5-7 m"
    },
    {
        id: 25,
        name: "Olivier arbequine",
        price: 18,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/arbequine-maroc-clorofila.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/arbequine-maroc-clorofila.jpg"
        ],
        description: "Originaire d'Espagne, l'Arbequine est très plantée pour son huile douce et aromatique.",
        care: {
            water: "Irrigation recommandée",
            light: "Plein soleil",
            temperature: "Très bonne résistance au froid"
        },
        availability: 250,
        difficulty: "Facile",
        height: "2-4 m"
    },
    {
        id: 26,
        name: "Olivier menara (picholine marocain)",
        price: 12,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-menara-maroc-clorofila.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-menara-maroc.jpeg"
        ],
        description: "Sélection de la picholine marocaine, adaptée et productive.",
        care: {
            water: "Excellente résistance à la sécheresse",
            light: "Plein soleil",
            temperature: "Adapté au climat marocain"
        },
        availability: 300,
        difficulty: "Facile",
        height: "5-6 m"
    },
    {
        id: 27,
        name: "Olivier haouzia (picholine marocain)",
        price: 12,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-haouzia-maroc-clorofila-scaled-1.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2023/02/olivier-haouzia-maroc.jpeg"
        ],
        description: "Autre sélection de la picholine marocaine, très productive.",
        care: {
            water: "Très résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "Adapté au climat marocain"
        },
        availability: 280,
        difficulty: "Facile",
        height: "5-6 m"
    },
    {
        id: 28,
        name: "Olivier d’ornement (olea europaea)",
        price: 600,
        category: "Arbres",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/olives-1549770_1280.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/olivier.jpg"
        ],
        description: "Olivier mature, sélectionné pour sa valeur esthétique.",
        care: {
            water: "Arrosage très modéré",
            light: "Plein soleil",
            temperature: "Résistant au froid et à la chaleur"
        },
        availability: 10,
        difficulty: "Facile",
        height: "Variable"
    },
    {
        id: 29,
        name: "Cycas thouarsii",
        price: 600,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Cycas-thouarsii.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Cycas-thouarsii.jpeg"
        ],
        description: "Plante préhistorique à l'allure de palmier, croissance lente et grande longévité.",
        care: {
            water: "Arrosage modéré",
            light: "Mi-ombre ou lumière vive",
            temperature: "Ne supporte pas le gel"
        },
        availability: 15,
        difficulty: "Moyenne",
        height: "Peut atteindre 10 m"
    },
    {
        id: 30,
        name: "Wodyetia bifurcata (palmier à queue de renard)",
        price: 2400,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Wodyetia-bifurcata.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Wodyetia-bifurcata.jpg"
        ],
        description: "Palmier australien très élégant, avec des feuilles plumeuses. Croissance rapide.",
        care: {
            water: "Arrosage régulier",
            light: "Plein soleil",
            temperature: "Sensible aux fortes gelées"
        },
        availability: 8,
        difficulty: "Facile",
        height: "Jusqu'à 10 m"
    },
    {
        id: 31,
        name: "Arbre du voyageur (ravenala)",
        price: 1500,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/arbre-du-voyageur-ravenala-clorofila.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/arbre-du-voyageur-ravenala.jpeg"
        ],
        description: "Plante spectaculaire célèbre pour ses feuilles en éventail.",
        care: {
            water: "Besoin important en eau",
            light: "Plein soleil ou mi-ombre",
            temperature: "Craint le gel"
        },
        availability: 6,
        difficulty: "Moyenne",
        height: "7-10 m"
    },
    {
        id: 32,
        name: "Washingtonia robusta",
        price: 240,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/washintognia-robusta-maroc-casablanca-marrakech.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Washingtonia_robusta-scaled-1.jpg"
        ],
        description: "Palmier mexicain à croissance très rapide, avec un stipe fin et élancé.",
        care: {
            water: "Tolère la sécheresse",
            light: "Plein soleil",
            temperature: "Résiste à de courtes gelées"
        },
        availability: 40,
        difficulty: "Très facile",
        height: "15-20 m"
    },
    {
        id: 33,
        name: "Washingtonia filifera (palmier de californie)",
        price: 104,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Washingtonia-Felifera-maroc-clorofila-pepiniere.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Washingtonia_filifera_frond.jpg"
        ],
        description: "Palmier de Californie, plus massif et trapu que le robusta.",
        care: {
            water: "Très résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "Très bonne résistance au froid"
        },
        availability: 30,
        difficulty: "Très facile",
        height: "10-15 m"
    },
    {
        id: 34,
        name: "Trachycarpus fortunei (palmier à chanvre)",
        price: 900,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Sans-titre.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Trachycarpus_fortunei_flower.jpg"
        ],
        description: "Un des palmiers les plus résistants au froid.",
        care: {
            water: "Arrosage régulier",
            light: "Soleil ou mi-ombre",
            temperature: "Très résistant au froid"
        },
        availability: 20,
        difficulty: "Facile",
        height: "8-12 m"
    },
    {
        id: 35,
        name: "Roystonea regia (palmier royal de cuba)",
        price: 7800,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/roystonea-regia-palmier-royal-de-cuba-maroc.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Palma-real-Roystonea-regia-scaled.jpg"
        ],
        description: "Palmier majestueux et tropical, avec un stipe lisse et grisâtre.",
        care: {
            water: "Arrosages réguliers et abondants",
            light: "Plein soleil",
            temperature: "Ne tolère aucun gel"
        },
        availability: 4,
        difficulty: "Difficile",
        height: "15-20 m"
    },
    {
        id: 36,
        name: "Rhapis excelsa (palmier chinois)",
        price: 490,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/8150725691_882b36464d_b.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Rhapis_excelsa_17zz.jpg"
        ],
        description: "Palmier touffu à croissance lente, idéal pour l'intérieur ou les zones ombragées.",
        care: {
            water: "Arrosage modéré",
            light: "Ombre ou mi-ombre",
            temperature: "Résiste à de faibles gelées"
        },
        availability: 18,
        difficulty: "Facile",
        height: "2-3 m"
    },
    {
        id: 37,
        name: "Pritchardia (palmier de hawaii)",
        price: 1750,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Pritchardia_glabrata_5188464636.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Pritchardia_beccariana_4761434315.jpg"
        ],
        description: "Genre de palmiers originaires des îles du Pacifique.",
        care: {
            water: "Arrosage régulier",
            light: "Plein soleil ou mi-ombre",
            temperature: "Climat tropical"
        },
        availability: 9,
        difficulty: "Moyenne",
        height: "5-15 m"
    },
    {
        id: 38,
        name: "Phoenix roebelenii (dattier nain)",
        price: 864,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Phoenix-Roebelenii-dattier-nain-maroc.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Palma_robelina_Phoenix_roebelenii_-_Infrutescencias_14830670382-scaled-1.jpg"
        ],
        description: "Palmier nain élégant et gracieux, parfait pour la culture en pot.",
        care: {
            water: "Arrosage régulier",
            light: "Lumière vive",
            temperature: "Sensible au gel"
        },
        availability: 22,
        difficulty: "Facile",
        height: "1-2 m"
    },
    {
        id: 39,
        name: "Phoenix dactylifera (dattier)",
        price: 180,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/date-palm-223250_1280.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Phoenix-dactylifera.jpg"
        ],
        description: "Le véritable palmier dattier, symbole des oasis.",
        care: {
            water: "Très résistant à la sécheresse",
            light: "Plein soleil",
            temperature: "A besoin de beaucoup de chaleur"
        },
        availability: 35,
        difficulty: "Facile",
        height: "15-25 m"
    },
    {
        id: 40,
        name: "Phoenix canariensis",
        price: 2400,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/phoenix-canariensis-maroc-clorofila.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/4c99e8d6-b31a-4ea3-a5fa-421997d75bb5.jpg"
        ],
        description: "Palmier massif et spectaculaire avec une couronne de feuilles très dense.",
        care: {
            water: "Bonne résistance à la sécheresse",
            light: "Plein soleil",
            temperature: "Assez rustique"
        },
        availability: 12,
        difficulty: "Facile",
        height: "10-20 m"
    },
    {
        id: 41,
        name: "Livistona decipiens (latanier pleureur)",
        price: 650,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/livistona-decipiens-latanier-pleureur-maroc.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/6148937962_a1c989e635_z.jpg"
        ],
        description: "Palmier très gracieux avec des feuilles palmées retombantes.",
        care: {
            water: "Arrosage régulier",
            light: "Plein soleil",
            temperature: "Résiste à de légères gelées"
        },
        availability: 14,
        difficulty: "Facile",
        height: "10-15 m"
    },
    {
        id: 42,
        name: "Livistona chinensis",
        price: 1400,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/Livistona_chinensis_Cooktown_2010-scaled-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/5970205320_13dc7951bd_b.jpg"
        ],
        description: "Palmier éventail chinois, apprécié pour ses grandes feuilles palmées.",
        care: {
            water: "Arrosage régulier",
            light: "Mi-ombre ou soleil non brûlant",
            temperature: "Bonne résistance au froid"
        },
        availability: 11,
        difficulty: "Facile",
        height: "5-9 m"
    },
    {
        id: 43,
        name: "Latania lontaroides (Latanier rouge)",
        price: 1400,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/latania-1.jpg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/40556022245_fd3b24f65a_b.jpg"
        ],
        description: "Palmier très ornemental, avec des pétioles et nervures de couleur rouge vif.",
        care: {
            water: "Arrosage régulier",
            light: "Plein soleil",
            temperature: "Ne supporte pas le gel"
        },
        availability: 7,
        difficulty: "Moyenne",
        height: "6-12 m"
    },
    {
        id: 44,
        name: "Hyophorbe verschaffeltii (palmier bouteille)",
        price: 3600,
        category: "Palmiers",
        images: [
            "https://www.clorofila.ma/wp-content/uploads/2021/11/hyophorbe-verschaffeltii-palmier-bouteille-maroc.jpeg",
            "https://www.clorofila.ma/wp-content/uploads/2021/11/hyophorbe-verschaffeltii-maroc-clorofila.jpg"
        ],
        description: "Palmier rare et recherché pour son stipe renflé à la base.",
        care: {
            water: "Arrosage modéré",
            light: "Plein soleil ou mi-ombre",
            temperature: "Craint le gel"
        },
        availability: 5,
        difficulty: "Difficile",
        height: "3-5 m"
    }
];
