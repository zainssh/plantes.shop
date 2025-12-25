
        // ============================================
        // CONFIGURATION & DONNÉES
        // ============================================
        const CONTACT_INFO = {
            phone: "+212661193752",
            whatsapp: "+212661193752",
            email: "contact.plantes.shop@gmail.com"
        };

        const CONFIG = {
            freeShippingThreshold: 500,
            currency: 'MAD',
            languages: {
                fr: 'Français',
                ar: 'العربية',
                en: 'English'
            },
            defaultLanguage: 'fr'
        };

        // Données des produits (réelles)
        const PRODUCTS = [
            {
                id: 9,
                name: "Oliviers de Grande Taille",
                name_ar: "أشجار الزيتون كبيرة الحجم",
                name_en: "Large Olive Trees",
                price: 0,
                onDemand: true,
                category: "exterior",
                subcategory: "trees",
                images: [
                    "assets/images/olive-gallery-13.jpeg",
                    "assets/images/olive-gallery-24.jpeg",
                    "assets/images/olive-gallery-22.jpeg",
                    "assets/images/olive-gallery-21.jpeg",
                    "assets/images/olive-gallery-23.jpeg",
                    "assets/images/olive-gallery-19.jpeg",
                    "assets/images/olive-gallery-18.jpeg",
                    "assets/images/olive-gallery-17.jpeg",
                    "assets/images/olive-gallery-20.jpeg",
                    "assets/images/olive-gallery-16.jpeg",
                    "assets/images/olive-gallery-15.jpeg",
                    "assets/images/olive-gallery-14.jpeg"
                ],
                description: "Vente & Installation d’Oliviers de Grande Taille pour l'aménagement paysager. Large stock disponible.",
                description_ar: "بيع وتركيب أشجار الزيتون كبيرة الحجم لتنسيق الحدائق. لدينا مخزون كبير.",
                description_en: "Sale & Installation of Large Olive Trees for landscaping. Large stock available.",
                availability: 100,
                stock: 100,
                difficulty: "Moyen",
                height: "Sur mesure",
                rating: 5.0,
                reviews: 15,
                tags: ["exterieur", "olivier", "aménagement", "luxe"],
                isNew: true,
                isPopular: true,
                sku: "PS-OLV-LG-009"
            }
        ];

        const ARTICLES = [
            {
                id: 1,
                title: "10 Conseils pour Entretenir vos Plantes d'Intérieur en Hiver",
                image: "assets/images/olive-gallery-12.jpeg",
                date: "15 Mars 2024",
                readTime: "5 min",
                excerpt: "Découvrez comment protéger vos plantes pendant la saison froide et les maintenir en pleine santé jusqu'au printemps.",
                tags: ["Conseils", "Entretien", "Saison"],
                content: `
                    <h4>Introduction</h4>
                    <p>L'hiver peut être une période difficile pour les plantes d'intérieur. La baisse de luminosité, l'air sec causé par le chauffage et les courants d'air froid sont autant de défis à relever. Voici 10 conseils essentiels pour aider vos plantes à traverser la saison froide en pleine forme.</p>
                    
                    <h4>1. Réduisez l'arrosage</h4>
                    <p>En hiver, la plupart des plantes entrent en période de dormance et leur croissance ralentit. Elles ont donc besoin de moins d'eau. Laissez le terreau sécher davantage entre deux arrosages. Un excès d'eau peut rapidement entraîner la pourriture des racines.</p>
                    
                    <h4>2. Augmentez l'humidité</h4>
                    <p>Le chauffage assèche l'air, ce qui est néfaste pour de nombreuses plantes tropicales. Pour y remédier, vous pouvez :</p>
                    <ul>
                        <li>Vaporiser régulièrement le feuillage avec de l'eau non calcaire.</li>
                        <li>Placer les pots sur des plateaux remplis de billes d'argile et d'eau.</li>
                        <li>Utiliser un humidificateur d'air.</li>
                    </ul>
                    
                    <h4>3. Maximisez la lumière</h4>
                    <p>Rapprochez vos plantes des fenêtres les mieux exposées (généralement au sud) pour qu'elles profitent au maximum de la lumière naturelle, qui est plus faible en hiver. Pensez à nettoyer régulièrement les vitres.</p>
                `
            },
            {
                id: 2,
                title: "Top 5 des Plantes qui Purifient l'Air de votre Maison",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                date: "28 Février 2024",
                readTime: "7 min",
                excerpt: "Certaines plantes sont particulièrement efficaces pour filtrer les polluants et améliorer la qualité de l'air intérieur.",
                tags: ["Santé", "Intérieur", "Purification"],
                content: `
                    <h4>Pourquoi purifier l'air intérieur ?</h4>
                    <p>Nos intérieurs sont souvent plus pollués que l'air extérieur à cause des composés organiques volatils (COV) émis par les peintures, les meubles, les produits d'entretien, etc. Heureusement, certaines plantes sont de véritables stations d'épuration naturelles.</p>

                    <h4>1. Le Sansevieria (Langue de belle-mère)</h4>
                    <p>C'est l'une des plantes les plus efficaces. Elle a la particularité de produire de l'oxygène la nuit, ce qui en fait une excellente plante pour la chambre à coucher. Elle filtre le benzène, le formaldéhyde et le trichloréthylène.</p>

                    <h4>2. Le Spathiphyllum (Fleur de lune)</h4>
                    <p>En plus de ses élégantes fleurs blanches, le Spathiphyllum est un champion de la purification, éliminant l'ammoniac, le benzène, le formaldéhyde et le trichloréthylène.</p>
                `
            },
            {
                id: 3,
                title: "Comment Créer un Jardin Méditerranéen au Maroc",
                image: "assets/images/olive-gallery-11.jpeg",
                date: "12 Février 2024",
                readTime: "10 min",
                excerpt: "Guide complet pour créer un jardin résistant à la sécheresse, typique du climat méditerranéen marocain.",
                tags: ["Jardinage", "Extérieur", "Climat"],
                content: `
                    <h4>Les principes du jardin méditerranéen</h4>
                    <p>Créer un jardin méditerranéen, c'est avant tout travailler avec le climat local, et non contre lui. Cela implique de choisir des plantes résistantes à la chaleur et à la sécheresse, d'économiser l'eau et de créer des espaces de vie ombragés.</p>

                    <h4>Choix des plantes</h4>
                    <p>Optez pour des espèces locales ou adaptées au climat marocain :</p>
                    <ul>
                        <li><b>Arbres :</b> Olivier, Arganier, Palmier dattier.</li>
                        <li><b>Arbustes :</b> Laurier-rose, Bougainvillier, Lavande, Romarin.</li>
                        <li><b>Plantes vivaces :</b> Agaves, Aloès, Gazanias.</li>
                    </ul>

                    <h4>Aménagement et paillage</h4>
                    <p>Utilisez des matériaux locaux comme la pierre et le gravier pour créer des allées et des terrasses. Le paillage minéral (gravier, pouzzolane) est essentiel pour limiter l'évaporation de l'eau et réduire la croissance des mauvaises herbes.</p>
                `
            }
        ];

        // ============================================
        // ÉTAT DE L'APPLICATION
        // ============================================
        let state = {
            cart: JSON.parse(localStorage.getItem('plantesShopCart')) || [],
            currentLanguage: localStorage.getItem('plantesShopLanguage') || CONFIG.defaultLanguage,
            currentFilter: 'all',
            currentSort: 'popular',
            displayedProducts: 6,
            currentHeroSlide: 0,
            currentTestimonial: 0,
            isCartOpen: false,
            isMobileMenuOpen: false
        };

        // ============================================
        // INITIALISATION
        // ============================================
        document.addEventListener('DOMContentLoaded', () => {
            initializeApp();
            setupEventListeners();
            startAnimations();
        });

        function initializeApp() {
            // Mettre à jour les compteurs
            updateCartCount();
            
            // Rendre les produits
            initializeOliveShowcase(); // Remplacer renderProducts()
            initializeYuccaShowcase();
            initializeArecaShowcase();
            initializeFicusBonsaiShowcase();
            
            // Mettre à jour la langue
            updateLanguage();
            
            // Démarrer le slider hero
            startHeroSlider();
            
            // Démarrer le slider témoignages
            startTestimonialSlider();
            
            // Vérifier le défilement pour le header
            checkScroll();
            
            // Observer les éléments pour les animations
            setupIntersectionObserver();

            // Mettre à jour les informations de contact
            updateContactInfo();
        }

        function updateContactInfo() {
            document.querySelectorAll('a, p, span').forEach(el => {
                // Remplacer dans les attributs href
                if (el.hasAttribute('href')) {
                    let href = el.getAttribute('href');
                    href = href.replace(/\$\{CONTACT_INFO\.phone\}/g, `tel:${CONTACT_INFO.phone}`);
                    href = href.replace(/\$\{CONTACT_INFO\.whatsapp\}/g, `https://wa.me/${CONTACT_INFO.whatsapp}`);
                    href = href.replace(/\$\{CONTACT_INFO\.email\}/g, `mailto:${CONTACT_INFO.email}`);
                    el.setAttribute('href', href);
                }

                // Remplacer dans le contenu textuel
                if (el.innerHTML.includes('${CONTACT_INFO')) {
                    el.innerHTML = el.innerHTML.replace(/\$\{CONTACT_INFO\.phone\}/g, CONTACT_INFO.phone);
                    el.innerHTML = el.innerHTML.replace(/\$\{CONTACT_INFO\.whatsapp\}/g, CONTACT_INFO.whatsapp);
                    el.innerHTML = el.innerHTML.replace(/\$\{CONTACT_INFO\.email\}/g, CONTACT_INFO.email);
                }
            });
        }

        // ============================================
        // ÉCOUTEURS D'ÉVÉNEMENTS
        // ============================================
        function setupEventListeners() {
            // Helper to add event listener if element exists
            const on = (selector, event, handler) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.addEventListener(event, handler);
                }
            };

            const onId = (id, event, handler) => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener(event, handler);
                }
            };
            
            // Header scroll
            window.addEventListener('scroll', checkScroll);
            
            // Menu mobile
            onId('mobileMenuButton', 'click', toggleMobileMenu);
            onId('closeMobileMenu', 'click', toggleMobileMenu);
            
            // Panier
            onId('cartButton', 'click', openCart);
            onId('closeCart', 'click', closeCart);
            onId('checkoutButton', 'click', proceedToCheckout);
            
            // Modals
            onId('modalOverlay', 'click', closeAllModals);
            onId('closeImageModal', 'click', closeImageModal);
            onId('prevImage', 'click', showPrevImage);
            onId('nextImage', 'click', showNextImage);

            // Témoignages navigation
            on('.prev-testimonial', 'click', prevTestimonial);
            on('.next-testimonial', 'click', nextTestimonial);
            
            // Formulaires
            onId('contactForm', 'submit', handleContactSubmit);
            onId('newsletterForm', 'submit', handleNewsletterSubmit);
            
            // Retour en haut
            onId('backToTop', 'click', scrollToTop);
            
            // Touche Échap pour fermer les modals
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeAllModals();
            });
            
            // Navigation fluide
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', smoothScroll);
            });

            // Image Gallery Event Delegation
            document.addEventListener('click', function(e) {
                const thumbnail = e.target.closest('.gallery-thumbnail');
                if (thumbnail) {
                    openImageModal(thumbnail);
                }
            });
        }

        // ============================================
        // IMAGE GALLERY MODAL
        // ============================================
        let currentImageIndex;
        let currentGallery;

        function openImageModal(thumbnail) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            
            currentGallery = Array.from(thumbnail.closest('.image-gallery').querySelectorAll('.gallery-thumbnail'));
            currentImageIndex = currentGallery.indexOf(thumbnail);
            
            modalImage.src = thumbnail.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('active');
            if (!state.isCartOpen && !state.isMobileMenuOpen) {
                document.body.style.overflow = '';
            }
        }

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
            document.getElementById('modalImage').src = currentGallery[currentImageIndex].src;
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
            document.getElementById('modalImage').src = currentGallery[currentImageIndex].src;
        }

        // ============================================
        // FONCTIONS DU HEADER
        // ============================================
        function checkScroll() {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        function toggleMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const isOpening = !mobileNav.classList.contains('active');
            
            state.isMobileMenuOpen = isOpening;
            mobileNav.classList.toggle('active');
            
            if (isOpening) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        // ============================================
        // FONCTIONS DES PRODUITS
        // ============================================
        const YUCCA_IMAGES = [
            "assets/images/yucca-09.jpeg",
            "assets/images/yucca-08.jpeg",
            "assets/images/yucca-07.jpeg",
            "assets/images/yucca-06.jpeg",
            "assets/images/yucca-10.jpeg"
        ];

        const ARECA_IMAGES = [
            "assets/images/areca-01.jpeg"
        ];

        const FICUS_BONSAI_IMAGES = [
            "assets/images/ficus-bonsai-03.jpeg",
            "assets/images/ficus-bonsai-01.jpeg",
            "assets/images/ficus-bonsai-02.jpeg"
        ];

        function initializeOliveShowcase() {
            const product = PRODUCTS.find(p => p.id === 9); // Hardcoded ID for olive tree
            if (!product) {
                console.error("Olive tree product not found.");
                return;
            }

            const galleryContainer = document.getElementById('oliveThumbnails');
            if (!galleryContainer) {
                return;
            }

            // Load thumbnails into the gallery
            galleryContainer.innerHTML = ''; // Clear container
            product.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `${product.name} - vue ${index + 1}`;
                thumb.classList.add('gallery-thumbnail'); // Add class for modal functionality
                
                galleryContainer.appendChild(thumb);
            });
        }

        function initializeYuccaShowcase() {
            const galleryContainer = document.getElementById('yuccaThumbnails');
            if (!galleryContainer) return;

            galleryContainer.innerHTML = ''; // Clear container
            YUCCA_IMAGES.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `Yucca elephantipes - vue ${index + 1}`;
                thumb.classList.add('gallery-thumbnail');
                galleryContainer.appendChild(thumb);
            });
        }

        function initializeArecaShowcase() {
            const galleryContainer = document.getElementById('arecaThumbnails');
            if (!galleryContainer) return;

            galleryContainer.innerHTML = ''; // Clear container
            ARECA_IMAGES.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `Areca catechu - vue ${index + 1}`;
                thumb.classList.add('gallery-thumbnail');
                galleryContainer.appendChild(thumb);
            });
        }

        function initializeFicusBonsaiShowcase() {
            const galleryContainer = document.getElementById('ficusBonsaiThumbnails');
            if (!galleryContainer) return;

            galleryContainer.innerHTML = ''; // Clear container
            FICUS_BONSAI_IMAGES.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `Ficus bonsai - vue ${index + 1}`;
                thumb.classList.add('gallery-thumbnail');
                galleryContainer.appendChild(thumb);
            });
        }

        // ============================================
        // FONCTIONS DU PANIER
        // ============================================
        function addToCart(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || product.availability < 1) {
                showNotification('Stock insuffisant', 'error');
                return;
            }
            
            const existingItem = state.cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    quantity: 1,
                    sku: product.sku,
                    maxQuantity: product.availability
                });
            }
            
            // Mettre à jour le stock virtuel
            product.availability -= 1;
            
            saveState();
            updateCartCount();
            showNotification(`${product.name} ajouté au panier`, 'success');
            
            // Ouvrir le panier sur desktop
            if (window.innerWidth > 768) {
                openCart();
            }
        }

        function removeFromCart(productId) {
            const itemIndex = state.cart.findIndex(item => item.id === productId);
            if (itemIndex === -1) return;
            
            const item = state.cart[itemIndex];
            const product = PRODUCTS.find(p => p.id === productId);
            
            // Restaurer le stock
            if (product) {
                product.availability += item.quantity;
            }
            
            state.cart.splice(itemIndex, 1);
            
            saveState();
            updateCartCount();
            renderCartItems();
            showNotification('Article retiré du panier', 'info');
        }

        function updateCartQuantity(productId, change) {
            const item = state.cart.find(item => item.id === productId);
            if (!item) return;
            
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;
            
            const newQuantity = item.quantity + change;
            
            // Vérifier les limites
            if (newQuantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            if (newQuantity > product.availability + item.quantity) {
                showNotification('Stock insuffisant', 'error');
                return;
            }
            
            // Mettre à jour le stock
            product.availability -= change;
            item.quantity = newQuantity;
            
            saveState();
            updateCartCount();
            renderCartItems();
        }

        function renderCartItems() {
            const container = document.getElementById('cartItems');
            const footer = document.querySelector('.cart-footer');
            
            if (state.cart.length === 0) {
                container.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <h4>Votre panier est vide</h4>
                        <p>Découvrez nos magnifiques plantes</p>
                        <button class="btn btn-primary" onclick="closeAllModals()">
                            <i class="fas fa-store"></i> Explorer la boutique
                        </button>
                    </div>
                `;
                footer.style.display = 'none';
                return;
            }
            
            container.innerHTML = state.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Retirer">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            updateCartSummary();
            footer.style.display = 'block';
        }

        function updateCartSummary() {
            const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal >= CONFIG.freeShippingThreshold ? 0 : 50;
            const total = subtotal + shipping;
            
            document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
            document.getElementById('cartShipping').textContent = shipping === 0 ? 'Gratuite' : formatPrice(shipping);
            document.getElementById('cartTotal').textContent = formatPrice(total);
            
            // Mettre à jour le message de livraison gratuite
            const freeShippingRemaining = CONFIG.freeShippingThreshold - subtotal;
            if (freeShippingRemaining > 0) {
                document.querySelector('.cart-footer p').innerHTML = `
                    <i class="fas fa-shipping-fast"></i> Plus que ${formatPrice(freeShippingRemaining)} pour la livraison gratuite
                `;
            }
        }

        function updateCartCount() {
            const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        function openCart() {
            const modal = document.getElementById('cartModal');
            const overlay = document.getElementById('modalOverlay');
            
            renderCartItems();
            modal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            const modal = document.getElementById('cartModal');
            const overlay = document.getElementById('modalOverlay');
            
            modal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        function proceedToCheckout() {
            if (state.cart.length === 0) {
                showNotification('Votre panier est vide', 'error');
                return;
            }
            
            closeCart();
            showNotification('Fonctionnalité de paiement à implémenter', 'info');
            // Ici, vous pouvez rediriger vers une page de paiement
        }

        // ============================================
        // FONCTIONS DES SLIDERS
        // ============================================
        function startHeroSlider() {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            // Changer de slide toutes les 5 secondes
            setInterval(() => {
                state.currentHeroSlide = (state.currentHeroSlide + 1) % slides.length;
                updateHeroSlider();
            }, 5000);
            
            // Écouteurs pour les dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    state.currentHeroSlide = index;
                    updateHeroSlider();
                });
            });
        }

        function updateHeroSlider() {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === state.currentHeroSlide);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === state.currentHeroSlide);
            });
        }

        function startTestimonialSlider() {
            const slides = document.querySelectorAll('.testimonial-slide');
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === state.currentTestimonial);
            });
        }

        function prevTestimonial() {
            const slides = document.querySelectorAll('.testimonial-slide');
            state.currentTestimonial = (state.currentTestimonial - 1 + slides.length) % slides.length;
            updateTestimonialSlider();
        }

        function nextTestimonial() {
            const slides = document.querySelectorAll('.testimonial-slide');
            state.currentTestimonial = (state.currentTestimonial + 1) % slides.length;
            updateTestimonialSlider();
        }

        function updateTestimonialSlider() {
            const slides = document.querySelectorAll('.testimonial-slide');
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === state.currentTestimonial);
            });
        }

        // ============================================
        // FONCTIONS DES FORMULAIRES
        // ============================================
        function handleContactSubmit(e) {
            e.preventDefault();
            
            const form = e.target;
            const successEl = document.getElementById('formSuccess');
            const errorEl = document.getElementById('formError');
            
            // Validation simple
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--error-red)';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                errorEl.style.display = 'block';
                successEl.style.display = 'none';
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }
            
            // Simuler l'envoi
            setTimeout(() => {
                successEl.style.display = 'block';
                errorEl.style.display = 'none';
                form.reset();
                showNotification('Message envoyé avec succès!', 'success');
                
                // Cacher le message après 5 secondes
                setTimeout(() => {
                    successEl.style.display = 'none';
                }, 5000);
            }, 1000);
        }

        function handleNewsletterSubmit(e) {
            e.preventDefault();
            const input = e.target.querySelector('input[type="email"]');
            
            if (!input.value || !isValidEmail(input.value)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }
            
            showNotification('Merci pour votre inscription à notre newsletter!', 'success');
            input.value = '';
        }

        // ============================================
        // FONCTIONS DE LANGUE
        // ============================================
        function changeLanguage(lang) {
            state.currentLanguage = lang;
            saveState();
            updateLanguage();
            showNotification(`Langue changée en ${CONFIG.languages[lang]}`, 'info');
        }

        function updateLanguage() {
            // Mettre à jour le bouton de langue
            const langBtn = document.querySelector('.language-btn span');
            if (langBtn) {
                langBtn.textContent = state.currentLanguage.toUpperCase();
            }
            
            // Ici, vous pourriez mettre à jour tout le contenu textuel
            // Pour l'instant, nous gardons le français comme langue par défaut
        }

        // ============================================
        // FONCTIONS UTILITAIRES
        // ============================================
        function formatPrice(price) {
            return `${price.toLocaleString('fr-MA')} ${CONFIG.currency}`;
        }

        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            
            let stars = '';
            
            for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
            if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
            for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
            
            return stars;
        }

        function getCategoryName(category) {
            const categories = {
                'interior': 'Intérieur',
                'exterior': 'Extérieur',
                'fruit': 'Fruitier',
                'palm': 'Palmier',
                'bonsai': 'Bonsaï',
                'cactus': 'Cactus'
            };
            return categories[category] || category;
        }

        function showNotification(message, type = 'info') {
            const toast = document.getElementById('notificationToast');
            if (!toast) return;
            
            const typeClass = {
                'success': 'success',
                'error': 'error',
                'info': 'info',
                'warning': 'warning'
            }[type] || 'info';
            
            const icon = {
                'success': 'fa-check-circle',
                'error': 'fa-exclamation-circle',
                'info': 'fa-info-circle',
                'warning': 'fa-exclamation-triangle'
            }[type] || 'fa-info-circle';
            
            toast.innerHTML = `
                <div class="toast-content toast-${typeClass}">
                    <i class="fas ${icon}"></i>
                    <span>${message}</span>
                </div>
            `;
            
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function smoothScroll(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeAllModals();
                
                // Mettre à jour le lien actif
                updateActiveNavLink(targetId);
            }
        }

        function updateActiveNavLink(targetId) {
            // Mettre à jour les liens desktop
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                }
            });
            
            // Mettre à jour les liens mobile
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                }
            });
        }

        function closeAllModals() {
            closeCart();
            closeImageModal();
            
            if (state.isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function saveState() {
            localStorage.setItem('plantesShopCart', JSON.stringify(state.cart));
            localStorage.setItem('plantesShopLanguage', state.currentLanguage);
        }

        // ============================================
        // ANIMATIONS
        // ============================================
        function startAnimations() {
            // Animation d'entrée pour le contenu hero
            const fadeElements = document.querySelectorAll('.fade-in-up');
            fadeElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
            });
        }

        function setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        // ============================================
        // EXPORT DES FONCTIONS GLOBALES
        // ============================================
        window.addToCart = addToCart;
        window.removeFromCart = removeFromCart;
        window.updateCartQuantity = updateCartQuantity;
        window.closeAllModals = closeAllModals;
        window.changeLanguage = changeLanguage;
        window.scrollToTop = scrollToTop;
        window.prevTestimonial = prevTestimonial;
        window.nextTestimonial = nextTestimonial;

        // ============================================
        // ARTICLE MODAL FUNCTIONS
        // ============================================
        function openArticleModal(articleId) {
            const article = ARTICLES.find(a => a.id === articleId);
            if (!article) return;

            document.getElementById('articleModalTitle').textContent = article.title;
            const body = document.getElementById('articleModalBody');
            body.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="article-modal-image">
                <div class="article-modal-meta">
                    <span><i class="far fa-calendar"></i> ${article.date}</span>
                    <span><i class="far fa-clock"></i> ${article.readTime} lecture</span>
                </div>
                <div class="article-modal-content">
                    ${article.content}
                </div>
            `;
            
            document.getElementById('articleModal').classList.add('active');
            document.getElementById('modalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeArticleModal() {
            document.getElementById('articleModal').classList.remove('active');
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        window.openArticleModal = openArticleModal;
        window.closeArticleModal = closeArticleModal;

    
