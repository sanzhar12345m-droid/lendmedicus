(function () {
  const whatsappLinks = document.querySelectorAll('.js-whatsapp');

  whatsappLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const position = link.dataset.ctaPosition || 'unknown';

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: 'WhatsApp consultation',
          content_category: 'Clinic leadgen',
          cta_position: position
        });
      }
    });
  });
})();
