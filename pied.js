/* =====================================================================
   PIED DE PAGE COMMUN — traductions (03/11/2026, demande d'Erwan).
   ⚠️ FICHIER IDENTIQUE dans suncom-io/pied.js et suncom-lab-llc/public/pied.js
   (buyest : mêmes textes dans messages/<langue>.json, clés footer.pc_*).

   Les éléments `[data-pc-t="clé"]` du pied reçoivent le texte de la langue
   du site (document.documentElement.lang, posée par la page), repli anglais.
   Les noms propres et les adresses ne se traduisent pas (écrits dans la page).
   ===================================================================== */
(function () {
  'use strict';
  if (window.__piedCommun) return;
  window.__piedCommun = true;

  var T = {
    fr: { usa: 'Infrastructure I.A. USA', eu: 'Infrastructure I.A. Europe', ru: 'Royaume-Uni', sous: 'Services juridiques, financiers et supports exclusifs', zone: 'USA & Europe', cgu: 'CGU', mentions: 'Mentions légales', conf: 'Confidentialité', ecrire: 'Nous écrire', droits: 'Tous droits réservés' },
    en: { usa: 'A.I. Infrastructure USA', eu: 'A.I. Infrastructure Europe', ru: 'United Kingdom', sous: 'Exclusive legal, financial and support services', zone: 'USA & Europe', cgu: 'Terms of Use', mentions: 'Legal notice', conf: 'Privacy', ecrire: 'Contact us', droits: 'All rights reserved' },
    de: { usa: 'KI-Infrastruktur USA', eu: 'KI-Infrastruktur Europa', ru: 'Vereinigtes Königreich', sous: 'Exklusive Rechts-, Finanz- und Supportleistungen', zone: 'USA & Europa', cgu: 'AGB', mentions: 'Impressum', conf: 'Datenschutz', ecrire: 'Kontakt', droits: 'Alle Rechte vorbehalten' },
    es: { usa: 'Infraestructura I.A. EE. UU.', eu: 'Infraestructura I.A. Europa', ru: 'Reino Unido', sous: 'Servicios jurídicos, financieros y de soporte exclusivos', zone: 'EE. UU. y Europa', cgu: 'Condiciones de uso', mentions: 'Aviso legal', conf: 'Privacidad', ecrire: 'Escríbanos', droits: 'Todos los derechos reservados' },
    pt: { usa: 'Infraestrutura I.A. EUA', eu: 'Infraestrutura I.A. Europa', ru: 'Reino Unido', sous: 'Serviços jurídicos, financeiros e de suporte exclusivos', zone: 'EUA e Europa', cgu: 'Termos de uso', mentions: 'Aviso legal', conf: 'Privacidade', ecrire: 'Escreva-nos', droits: 'Todos os direitos reservados' },
    ru: { usa: 'ИИ-инфраструктура США', eu: 'ИИ-инфраструктура Европа', ru: 'Великобритания', sous: 'Эксклюзивные юридические, финансовые услуги и поддержка', zone: 'США и Европа', cgu: 'Условия', mentions: 'Реквизиты', conf: 'Конфиденциальность', ecrire: 'Контакты', droits: 'Все права защищены' }
  };

  function langue() {
    var l = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    return T[l] ? l : 'en';
  }

  function traduire() {
    var t = T[langue()];
    document.querySelectorAll('[data-pc-t]').forEach(function (e) {
      var k = e.getAttribute('data-pc-t');
      if (t[k]) e.textContent = t[k];
    });
  }

  new MutationObserver(traduire).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', traduire); else traduire();
})();
