// Product-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail click handler
    document.querySelectorAll('.thumbnail-strip img').forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail-strip img').forEach(t => {
                t.classList.remove('active');
            });
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Change main image
            changeMainImage(this.src, this.alt);
        });
    });

    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            item.classList.toggle('active');
        });
    });

    // Function to change main image
    window.changeMainImage = function(src, alt) {
        const mainImage = document.getElementById('mainProductImage');
        mainImage.src = src;
        mainImage.alt = alt;
    };

    // Animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

    // Dynamically update contact info
    function updateContactLinks() {
        const productName = document.title.split(' | ')[0];
        const whatsappMessage = `Bonjour, je suis intéressé par votre produit: ${productName}. J'aimerais obtenir plus d'informations.`;
        document.querySelectorAll('[data-whatsapp-link="true"]').forEach(el => {
            el.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        });
        document.querySelectorAll('[data-phone-link="true"]').forEach(el => {
            el.href = `tel:${CONTACT_INFO.phone}`;
        });
        document.querySelectorAll('[data-email-link="true"]').forEach(el => {
            el.href = `mailto:${CONTACT_INFO.email}`;
        });
    }

    // Ensure CONTACT_INFO is available before updating links
    if (typeof CONTACT_INFO !== 'undefined') {
        updateContactLinks();
    } else {
        // If main.js loads after this script, wait for it
        document.addEventListener('contactInfoLoaded', updateContactLinks);
    }
});
