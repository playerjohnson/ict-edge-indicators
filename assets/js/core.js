/* ICT Edge Indicators — Core JS */
(function(){
    'use strict';

    // Nav toggle
    const h = document.querySelector('.nav-hamburger');
    const l = document.querySelector('.nav-links');
    if (h && l) {
        h.addEventListener('click', () => l.classList.toggle('open'));
        document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) l.classList.remove('open'); });
    }

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(q => {
        q.addEventListener('click', () => {
            const a = q.nextElementSibling;
            const isOpen = q.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-q').forEach(x => { x.classList.remove('open'); x.nextElementSibling.classList.remove('open'); });
            if (!isOpen) { q.classList.add('open'); a.classList.add('open'); }
        });
    });

    // Whop CTA tracking (optional analytics)
    document.querySelectorAll('a[href*="whop.com"]').forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') gtag('event', 'whop_click', { plan: link.href.split('plan=')[1] || 'general' });
        });
    });

    // Pricing toggle (monthly / annual)
    const toggle = document.getElementById('pricingToggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            const annual = toggle.checked;
            document.querySelectorAll('[data-monthly]').forEach(el => {
                el.textContent = annual ? el.dataset.annual : el.dataset.monthly;
            });
            document.querySelectorAll('[data-period]').forEach(el => {
                el.textContent = annual ? '/year' : '/month';
            });
            document.querySelectorAll('.price-annual').forEach(el => {
                el.style.visibility = annual ? 'hidden' : 'visible';
            });
        });
    }
})();
