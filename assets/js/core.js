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

    // Waitlist form
    document.querySelectorAll('.waitlist-form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            const btn = form.querySelector('button');
            if (!input.value) return;
            const orig = btn.innerHTML;
            btn.innerHTML = '✓ You\'re on the list!';
            btn.style.background = '#22c55e';
            input.value = '';
            setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
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
