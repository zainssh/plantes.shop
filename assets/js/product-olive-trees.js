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

    // Sticky bar on scroll
    const stickyBar = document.getElementById('stickyBar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            stickyBar.style.display = 'block';
            setTimeout(() => stickyBar.classList.add('active'), 10);
        } else {
            stickyBar.classList.remove('active');
            setTimeout(() => {
                if (!stickyBar.classList.contains('active')) {
                    stickyBar.style.display = 'none';
                }
            }, 300);
        }
    });

    // Request catalog button
    document.getElementById('requestCatalog').addEventListener('click', function() {
        const email = prompt("Veuillez entrer votre email pour recevoir le catalogue PDF:");
        if (email && email.includes('@')) {
            showNotification('Catalogue envoyé à ' + email, 'success');
            // Here you would normally send the email to your server
        } else if (email !== null) {
            showNotification('Veuillez entrer un email valide', 'error');
        }
    });

    // Function to change main image
    window.changeMainImage = function(src, alt) {
        const mainImage = document.getElementById('mainOliveImage');
        mainImage.src = src;
        mainImage.alt = alt;
    };

    // Function to show notification
    function showNotification(message, type) {
        const toast = document.getElementById('notificationToast');
        toast.innerHTML = `
            <div class="toast-content toast-${type}">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

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
        const whatsappMessage = "Bonjour, je suis intéressé par vos oliviers de grande taille et j'aimerais obtenir un devis.";
        document.querySelectorAll('[data-whatsapp-link="true"]').forEach(el => {
            el.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        });
        document.querySelectorAll('[data-phone-link="true"]').forEach(el => {
            el.href = `tel:${CONTACT_INFO.phone}`;
        });
        document.querySelectorAll('[data-email-link="true"]').forEach(el => {
            el.href = `mailto:${CONTACT_INFO.email}`;
        });
        document.querySelectorAll('[data-phone-text="true"]').forEach(el => {
            el.textContent = CONTACT_INFO.phone;
        });
        document.querySelectorAll('[data-email-text="true"]').forEach(el => {
            el.textContent = CONTACT_INFO.email;
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