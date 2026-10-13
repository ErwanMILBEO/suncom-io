/* =====================================================================
   INFORMATIONS LÉGALES — fenêtre unique (13/10/2026, demande d'Erwan)
   CGU · Mentions légales · Confidentialité, en trois cartes, 6 langues.
   Même principe que waterstart.team, planata.app et buyest.io : EMIAS au
   cœur, contrôle d'édition CABEM CONSEILS, NOTA de propriété intellectuelle.

   ⚠️ FICHIER IDENTIQUE dans les deux dépôts : suncom-io/legal.js (suncom.estate)
   et suncom-lab-llc/public/legal.js (suncom-lab.llc). Le site est reconnu par
   son adresse (SITE ci-dessous). Toute correction se fait dans les deux.

   Langue : celle du site (document.documentElement.lang, posée par lang.js),
   repli anglais. Les libellés des liens `[data-legal-libelle]` suivent la
   langue. Qui ouvre la fenêtre : tout lien vers `?legal=cgu|mentions|
   confidentialite`, et l'adresse `?legal=…` à l'ouverture d'une page.
   Aucune saisie n'est posée en innerHTML : seuls les textes fixes ci-dessous.
   ===================================================================== */
(function () {
  'use strict';
  if (window.__legalSuncom) return;
  window.__legalSuncom = true;
  if (typeof HTMLDialogElement !== 'function') return;

  var SITE = /suncom-lab/.test(location.hostname) ? 'lab' : 'estate';
  var DOMAINE = SITE === 'lab' ? 'suncom-lab.llc' : 'suncom.estate';
  var CONTACT = '<a href="mailto:contact@suncom-lab.llc">contact@suncom-lab.llc</a>';
  var NOTA_LIEN = '<a href="https://www.suncom-lab.llc/" target="_blank" rel="noopener">suncom-lab.llc</a>';
  var DOCS = ['cgu', 'mentions', 'confidentialite'];

  /* ---------------- LES TEXTES (français = source) ---------------- */
  var T = {
    fr: {
      cartes: { cgu: 'CGU', mentions: 'Mentions légales', confidentialite: 'Confidentialité' },
      titres: { cgu: 'Conditions générales d’utilisation', mentions: 'Mentions légales', confidentialite: 'Confidentialité' },
      maj: 'Dernière mise à jour : 13 octobre 2026', fermer: 'Fermer', distributeur: 'Distributeur Exclusif France',
      mentions: [
        ['', 'Ces mentions légales s’appliquent à ' + DOMAINE + ' et à l’ensemble de ses pages, dans toutes ses langues.'],
        ['Éditeur',
          (SITE === 'lab'
            ? 'suncom-lab.llc est le site autonome du Think Tank SUNCOM Lab LLC, centre de R&amp;D stratégique du groupe SUNCOM, programmé pour fonctionner dans un navigateur ou sur un téléphone portable. Il ne nécessite aucune installation.'
            : 'suncom.estate est le site vitrine autonome du groupe SUNCOM, groupe immobilier mondial propulsé par l’I.A. (Buyest, EMIAS, SUNCOM Lab…), programmé pour fonctionner dans un navigateur ou sur un téléphone portable. Il ne nécessite aucune installation.')
          + ' Ses développements sont produits et exécutés par assistance I.A. via EMIAS (USA) sous contrôle d’édition et de direction de la communication internationale du cabinet CABEM CONSEILS (France).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, États-Unis',
          '<strong>CABEM CONSEILS</strong> - Cabinet conseil en gestion des affaires<br>SAS au capital de 100&nbsp;€<br>RCS Rennes 848 618 831<br>Domiciliée 1, place de l’Église, 35550 Pipriac, France',
          'Toutes deux représentées par leur mandataire légal et directeur de publication<br>Monsieur Erwan Milbéo, domicilié en France : 8, rue Jean Coré à Scaër 29390',
          'EMIAS est une intelligence artificielle hébergée chez Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. CABEM CONSEILS en est le représentant et distributeur exclusif pour la France.',
          'NOTA : Tous les projets et développements EMIAS sont issus de R&amp;D stratégique et la propriété intellectuelle de Monsieur Erwan Milbéo - Fondateur, initiateur et Managing Member du Think Tank ' + NOTA_LIEN + ' (Delaware - USA).'],
        ['Hébergement', 'Le site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis — cloudflare.com.'],
        ['Propriété intellectuelle', 'Les noms, logotypes, textes et visuels du site appartiennent à leur éditeur. Leur reproduction, totale ou partielle, est interdite sans autorisation écrite préalable.'],
        ['Contact', 'Par e-mail : ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'Ces conditions encadrent l’utilisation de ' + DOMAINE + '. Utiliser le site vaut acceptation de ces conditions.'],
        ['Éditeur', DOMAINE + ' est produit et exécuté par assistance I.A. via EMIAS (USA), sous contrôle d’édition et de direction de la communication internationale du cabinet CABEM CONSEILS (France), représenté par son mandataire légal et directeur de publication, Monsieur Erwan Milbéo. Ses coordonnées figurent dans les <a href="?legal=mentions">mentions légales</a>.'],
        ['Ce que propose le site', SITE === 'lab'
          ? 'Le site présente SUNCOM Lab LLC, centre de R&amp;D stratégique du groupe SUNCOM, ses travaux et ses domaines d’intervention.'
          : 'Le site présente le groupe SUNCOM et ses activités (Buyest, EMIAS, SUNCOM Lab…), ainsi que LE CLUB, l’espace réservé à ses membres.'],
        SITE === 'estate' ? ['LE CLUB', 'Le formulaire de candidature prépare un e-mail que vous envoyez vous-même depuis votre messagerie. Envoyer une candidature ne vaut ni admission, ni engagement de part et d’autre.'] : null,
        ['Responsabilité', 'Les informations publiées sont fournies à titre d’information. Elles ne constituent ni une offre contractuelle, ni une offre au public de titres financiers, ni un conseil en investissement. Elles sont vérifiées avec soin mais peuvent comporter des erreurs ; toute erreur signalée est corrigée.'],
        ['Propriété intellectuelle', 'Voir les <a href="?legal=mentions">mentions légales</a>.'],
        ['Données personnelles', 'Les données que vous transmettez sont traitées comme l’explique le texte <a href="?legal=confidentialite">Confidentialité</a>.'],
        ['Droit applicable', 'Ces conditions sont soumises au droit de l’État du Delaware (États-Unis).'],
        ['Contact', 'Par e-mail : ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'Ce texte décrit l’usage des données personnelles sur ' + DOMAINE + '. Le site collecte le moins de données possible et ne s’en sert que pour ce qui est annoncé ici.'],
        ['Responsable de vos données', '<strong>CABEM CONSEILS</strong> - Cabinet conseil en gestion des affaires, SAS au capital de 100&nbsp;€, RCS Rennes 848 618 831, domiciliée 1, place de l’Église, 35550 Pipriac, France, représentée par son mandataire légal et directeur de publication, Monsieur Erwan Milbéo.'],
        SITE === 'estate' ? ['La candidature au CLUB', 'Données : prénom, nom, e-mail, téléphone, société ou enseigne, statut, adresse, code postal, ville, pays, et votre accord. Le site ne les enregistre pas et ne les envoie à aucun serveur : le formulaire prépare un e-mail dans votre messagerie, et elles ne nous parviennent que si vous l’envoyez. Elles servent à examiner votre candidature. Conservation : le temps de l’examen et de l’échange, puis au plus trois ans.'] : null,
        ['Si vous nous écrivez', 'Votre adresse e-mail et votre message servent uniquement à vous répondre. Conservation : le temps de l’échange, puis au plus douze mois.'],
        ['Cookies et stockage local', 'Le site ne dépose aucun cookie et n’emploie aucun outil de mesure d’audience ni de publicité. Il garde seulement dans votre navigateur la langue et le thème (clair ou sombre) que vous avez choisis. Les polices de caractères sont chargées depuis Google Fonts : Google reçoit alors l’adresse IP de votre appareil.'],
        ['Hébergement', 'Cloudflare, l’hébergeur, enregistre automatiquement des journaux techniques (adresse IP, date et heure, page consultée) pour faire fonctionner le site et le protéger contre les abus.'],
        ['Vos droits', 'Vous pouvez à tout moment accéder à vos données, les faire corriger ou supprimer, en limiter ou refuser l’utilisation, les récupérer et retirer votre consentement. Écrivez à ' + CONTACT + ' : une réponse vous est apportée dans un délai d’un mois.']
      ]
    },

    en: {
      cartes: { cgu: 'Terms of Use', mentions: 'Legal notice', confidentialite: 'Privacy' },
      titres: { cgu: 'Terms of Use', mentions: 'Legal notice', confidentialite: 'Privacy' },
      maj: 'Last updated: 13 October 2026', fermer: 'Close', distributeur: 'Exclusive Distributor for France',
      mentions: [
        ['', 'This legal notice applies to ' + DOMAINE + ' and all of its pages, in every language.'],
        ['Publisher',
          (SITE === 'lab'
            ? 'suncom-lab.llc is the autonomous website of the Think Tank SUNCOM Lab LLC, the strategic R&amp;D center of the SUNCOM Group, designed to run in a web browser or on a mobile phone. It requires no installation.'
            : 'suncom.estate is the autonomous showcase website of the SUNCOM Group, a global real estate group powered by A.I. (Buyest, EMIAS, SUNCOM Lab…), designed to run in a web browser or on a mobile phone. It requires no installation.')
          + ' Its developments are produced and executed with A.I. assistance via EMIAS (USA), under the editorial control and international communications direction of the consulting firm CABEM CONSEILS (France).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, USA',
          '<strong>CABEM CONSEILS</strong> - Business management consulting firm<br>SAS (French simplified joint-stock company) with a share capital of €100<br>RCS Rennes 848 618 831<br>Registered office: 1, place de l’Église, 35550 Pipriac, France',
          'Both represented by their legal representative and publication director<br>Mr Erwan Milbéo, residing in France: 8, rue Jean Coré, 29390 Scaër',
          'EMIAS is an artificial intelligence hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. CABEM CONSEILS is its representative and exclusive distributor for France.',
          'NOTE: All EMIAS projects and developments stem from strategic R&amp;D and are the intellectual property of Mr Erwan Milbéo - Founder, initiator and Managing Member of the Think Tank ' + NOTA_LIEN + ' (Delaware - USA).'],
        ['Hosting', 'The website is hosted by Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA — cloudflare.com.'],
        ['Intellectual property', 'The names, logos, texts and visuals of the website belong to their publisher. Any reproduction, in whole or in part, is prohibited without prior written authorization.'],
        ['Contact', 'By e-mail: ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'These terms govern the use of ' + DOMAINE + '. Using the website implies acceptance of these terms.'],
        ['Publisher', DOMAINE + ' is produced and executed with A.I. assistance via EMIAS (USA), under the editorial control and international communications direction of the consulting firm CABEM CONSEILS (France), represented by its legal representative and publication director, Mr Erwan Milbéo. Contact details are given in the <a href="?legal=mentions">legal notice</a>.'],
        ['What the website offers', SITE === 'lab'
          ? 'The website presents SUNCOM Lab LLC, the strategic R&amp;D center of the SUNCOM Group, its work and its fields of activity.'
          : 'The website presents the SUNCOM Group and its activities (Buyest, EMIAS, SUNCOM Lab…), as well as LE CLUB, the space reserved for its members.'],
        SITE === 'estate' ? ['LE CLUB', 'The application form prepares an e-mail that you send yourself from your own mailbox. Sending an application constitutes neither admission nor a commitment by either party.'] : null,
        ['Liability', 'The information published is provided for information purposes only. It constitutes neither a contractual offer, nor a public offering of securities, nor investment advice. It is carefully checked but may contain errors; any error reported is corrected.'],
        ['Intellectual property', 'See the <a href="?legal=mentions">legal notice</a>.'],
        ['Personal data', 'The data you provide are processed as explained in the <a href="?legal=confidentialite">Privacy</a> text.'],
        ['Governing law', 'These terms are governed by the laws of the State of Delaware (United States).'],
        ['Contact', 'By e-mail: ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'This text describes the use of personal data on ' + DOMAINE + '. The website collects as little data as possible and uses it only for the purposes stated here.'],
        ['Data controller', '<strong>CABEM CONSEILS</strong> - Business management consulting firm, SAS with a share capital of €100, RCS Rennes 848 618 831, registered office 1, place de l’Église, 35550 Pipriac, France, represented by its legal representative and publication director, Mr Erwan Milbéo.'],
        SITE === 'estate' ? ['Applying to LE CLUB', 'Data: first name, last name, e-mail, phone, company or brand, status, address, postcode, city, country, and your consent. The website does not store them or send them to any server: the form prepares an e-mail in your mailbox, and they only reach us if you send it. They are used to review your application. Retention: for the time needed to review it and correspond, then for three years at most.'] : null,
        ['If you write to us', 'Your e-mail address and message are used solely to reply to you. Retention: for the duration of the exchange, then for twelve months at most.'],
        ['Cookies and local storage', 'The website sets no cookies and uses no audience measurement or advertising tools. It only keeps in your browser the language and theme (light or dark) you have chosen. Fonts are loaded from Google Fonts: Google then receives your device’s IP address.'],
        ['Hosting', 'Cloudflare, the host, automatically records technical logs (IP address, date and time, page viewed) to operate the website and protect it against abuse.'],
        ['Your rights', 'You may at any time access your data, have it corrected or deleted, restrict or object to its use, obtain a copy and withdraw your consent. Write to ' + CONTACT + ': you will receive a reply within one month.']
      ]
    },

    es: {
      cartes: { cgu: 'Condiciones', mentions: 'Aviso legal', confidentialite: 'Privacidad' },
      titres: { cgu: 'Condiciones generales de uso', mentions: 'Aviso legal', confidentialite: 'Privacidad' },
      maj: 'Última actualización: 13 de octubre de 2026', fermer: 'Cerrar', distributeur: 'Distribuidor exclusivo para Francia',
      mentions: [
        ['', 'Este aviso legal se aplica a ' + DOMAINE + ' y a todas sus páginas, en todos sus idiomas.'],
        ['Editor',
          (SITE === 'lab'
            ? 'suncom-lab.llc es el sitio autónomo del Think Tank SUNCOM Lab LLC, centro de I+D estratégica del grupo SUNCOM, programado para funcionar en un navegador o en un teléfono móvil. No requiere ninguna instalación.'
            : 'suncom.estate es el sitio escaparate autónomo del grupo SUNCOM, grupo inmobiliario mundial impulsado por la I.A. (Buyest, EMIAS, SUNCOM Lab…), programado para funcionar en un navegador o en un teléfono móvil. No requiere ninguna instalación.')
          + ' Sus desarrollos son producidos y ejecutados con asistencia de I.A. a través de EMIAS (EE. UU.), bajo el control editorial y la dirección de comunicación internacional del despacho CABEM CONSEILS (Francia).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, Estados Unidos',
          '<strong>CABEM CONSEILS</strong> - Consultoría en gestión empresarial<br>SAS (sociedad por acciones simplificada francesa) con un capital de 100&nbsp;€<br>RCS Rennes 848 618 831<br>Domiciliada en 1, place de l’Église, 35550 Pipriac, Francia',
          'Ambas representadas por su mandatario legal y director de la publicación<br>D. Erwan Milbéo, domiciliado en Francia: 8, rue Jean Coré, 29390 Scaër',
          'EMIAS es una inteligencia artificial alojada en Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. CABEM CONSEILS es su representante y distribuidor exclusivo para Francia.',
          'NOTA: Todos los proyectos y desarrollos de EMIAS proceden de I+D estratégica y son propiedad intelectual de D. Erwan Milbéo - Fundador, iniciador y Managing Member del Think Tank ' + NOTA_LIEN + ' (Delaware - EE. UU.).'],
        ['Alojamiento', 'El sitio está alojado por Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, Estados Unidos — cloudflare.com.'],
        ['Propiedad intelectual', 'Los nombres, logotipos, textos y elementos visuales del sitio pertenecen a su editor. Queda prohibida su reproducción, total o parcial, sin autorización previa por escrito.'],
        ['Contacto', 'Por correo electrónico: ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'Estas condiciones regulan el uso de ' + DOMAINE + '. El uso del sitio implica la aceptación de estas condiciones.'],
        ['Editor', DOMAINE + ' es producido y ejecutado con asistencia de I.A. a través de EMIAS (EE. UU.), bajo el control editorial y la dirección de comunicación internacional del despacho CABEM CONSEILS (Francia), representado por su mandatario legal y director de la publicación, D. Erwan Milbéo. Sus datos de contacto figuran en el <a href="?legal=mentions">aviso legal</a>.'],
        ['Qué ofrece el sitio', SITE === 'lab'
          ? 'El sitio presenta SUNCOM Lab LLC, centro de I+D estratégica del grupo SUNCOM, sus trabajos y sus ámbitos de actuación.'
          : 'El sitio presenta el grupo SUNCOM y sus actividades (Buyest, EMIAS, SUNCOM Lab…), así como LE CLUB, el espacio reservado a sus miembros.'],
        SITE === 'estate' ? ['LE CLUB', 'El formulario de candidatura prepara un correo electrónico que usted mismo envía desde su buzón. Enviar una candidatura no supone ni admisión ni compromiso para ninguna de las partes.'] : null,
        ['Responsabilidad', 'La información publicada se facilita a título informativo. No constituye ni una oferta contractual, ni una oferta pública de valores, ni un asesoramiento en inversión. Se verifica con cuidado, pero puede contener errores; todo error señalado se corrige.'],
        ['Propiedad intelectual', 'Véase el <a href="?legal=mentions">aviso legal</a>.'],
        ['Datos personales', 'Los datos que usted transmite se tratan según se explica en el texto <a href="?legal=confidentialite">Privacidad</a>.'],
        ['Derecho aplicable', 'Estas condiciones se rigen por el derecho del Estado de Delaware (Estados Unidos).'],
        ['Contacto', 'Por correo electrónico: ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'Este texto describe el uso de los datos personales en ' + DOMAINE + '. El sitio recoge el mínimo de datos posible y solo los utiliza para lo que aquí se indica.'],
        ['Responsable de sus datos', '<strong>CABEM CONSEILS</strong> - Consultoría en gestión empresarial, SAS con un capital de 100&nbsp;€, RCS Rennes 848 618 831, domiciliada en 1, place de l’Église, 35550 Pipriac, Francia, representada por su mandatario legal y director de la publicación, D. Erwan Milbéo.'],
        SITE === 'estate' ? ['La candidatura a LE CLUB', 'Datos: nombre, apellidos, correo electrónico, teléfono, empresa o marca, estatus, dirección, código postal, ciudad, país y su consentimiento. El sitio no los guarda ni los envía a ningún servidor: el formulario prepara un correo en su buzón, y solo nos llegan si usted lo envía. Sirven para examinar su candidatura. Conservación: el tiempo del examen y del intercambio, y después tres años como máximo.'] : null,
        ['Si nos escribe', 'Su dirección de correo y su mensaje solo sirven para responderle. Conservación: el tiempo del intercambio, y después doce meses como máximo.'],
        ['Cookies y almacenamiento local', 'El sitio no instala ninguna cookie ni utiliza herramientas de medición de audiencia o de publicidad. Solo guarda en su navegador el idioma y el tema (claro u oscuro) que usted ha elegido. Las fuentes tipográficas se cargan desde Google Fonts: Google recibe entonces la dirección IP de su dispositivo.'],
        ['Alojamiento', 'Cloudflare, el proveedor de alojamiento, registra automáticamente registros técnicos (dirección IP, fecha y hora, página consultada) para hacer funcionar el sitio y protegerlo contra abusos.'],
        ['Sus derechos', 'Puede en cualquier momento acceder a sus datos, rectificarlos o suprimirlos, limitar u oponerse a su uso, obtener una copia y retirar su consentimiento. Escriba a ' + CONTACT + ': recibirá una respuesta en el plazo de un mes.']
      ]
    },

    de: {
      cartes: { cgu: 'Nutzungsbedingungen', mentions: 'Impressum', confidentialite: 'Datenschutz' },
      titres: { cgu: 'Allgemeine Nutzungsbedingungen', mentions: 'Impressum', confidentialite: 'Datenschutz' },
      maj: 'Letzte Aktualisierung: 13. Oktober 2026', fermer: 'Schließen', distributeur: 'Exklusiver Vertriebspartner für Frankreich',
      mentions: [
        ['', 'Dieses Impressum gilt für ' + DOMAINE + ' und alle seine Seiten, in allen Sprachen.'],
        ['Herausgeber',
          (SITE === 'lab'
            ? 'suncom-lab.llc ist die eigenständige Website des Think Tanks SUNCOM Lab LLC, des strategischen F&amp;E-Zentrums der SUNCOM-Gruppe, programmiert für die Nutzung im Webbrowser oder auf dem Mobiltelefon. Sie erfordert keine Installation.'
            : 'suncom.estate ist die eigenständige Präsentations-Website der SUNCOM-Gruppe, einer weltweiten Immobiliengruppe mit KI (Buyest, EMIAS, SUNCOM Lab…), programmiert für die Nutzung im Webbrowser oder auf dem Mobiltelefon. Sie erfordert keine Installation.')
          + ' Ihre Entwicklungen werden mit KI-Unterstützung über EMIAS (USA) erstellt und ausgeführt, unter der redaktionellen Kontrolle und der Leitung der internationalen Kommunikation der Beratungsgesellschaft CABEM CONSEILS (Frankreich).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, USA',
          '<strong>CABEM CONSEILS</strong> - Unternehmensberatung für Geschäftsführung<br>SAS (französische vereinfachte Aktiengesellschaft) mit einem Stammkapital von 100&nbsp;€<br>RCS Rennes 848 618 831<br>Sitz: 1, place de l’Église, 35550 Pipriac, Frankreich',
          'Beide vertreten durch ihren gesetzlichen Vertreter und Verantwortlichen für den Inhalt<br>Herrn Erwan Milbéo, wohnhaft in Frankreich: 8, rue Jean Coré, 29390 Scaër',
          'EMIAS ist eine künstliche Intelligenz, gehostet bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. CABEM CONSEILS ist ihr Vertreter und exklusiver Vertriebspartner für Frankreich.',
          'HINWEIS: Alle Projekte und Entwicklungen von EMIAS stammen aus strategischer F&amp;E und sind geistiges Eigentum von Herrn Erwan Milbéo - Gründer, Initiator und Managing Member des Think Tanks ' + NOTA_LIEN + ' (Delaware - USA).'],
        ['Hosting', 'Die Website wird gehostet von Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA — cloudflare.com.'],
        ['Geistiges Eigentum', 'Die Namen, Logos, Texte und Bilder der Website gehören ihrem Herausgeber. Jede vollständige oder teilweise Vervielfältigung ohne vorherige schriftliche Genehmigung ist untersagt.'],
        ['Kontakt', 'Per E-Mail: ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'Diese Bedingungen regeln die Nutzung von ' + DOMAINE + '. Mit der Nutzung der Website erkennen Sie diese Bedingungen an.'],
        ['Herausgeber', DOMAINE + ' wird mit KI-Unterstützung über EMIAS (USA) erstellt und ausgeführt, unter der redaktionellen Kontrolle und der Leitung der internationalen Kommunikation der Beratungsgesellschaft CABEM CONSEILS (Frankreich), vertreten durch ihren gesetzlichen Vertreter und Verantwortlichen für den Inhalt, Herrn Erwan Milbéo. Die Kontaktdaten stehen im <a href="?legal=mentions">Impressum</a>.'],
        ['Angebot der Website', SITE === 'lab'
          ? 'Die Website stellt SUNCOM Lab LLC vor, das strategische F&amp;E-Zentrum der SUNCOM-Gruppe, seine Arbeiten und Tätigkeitsfelder.'
          : 'Die Website stellt die SUNCOM-Gruppe und ihre Aktivitäten vor (Buyest, EMIAS, SUNCOM Lab…) sowie LE CLUB, den ihren Mitgliedern vorbehaltenen Bereich.'],
        SITE === 'estate' ? ['LE CLUB', 'Das Bewerbungsformular bereitet eine E-Mail vor, die Sie selbst aus Ihrem Postfach versenden. Eine Bewerbung bedeutet weder Aufnahme noch eine Verpflichtung für eine der Parteien.'] : null,
        ['Haftung', 'Die veröffentlichten Informationen dienen nur zur Information. Sie stellen weder ein Vertragsangebot noch ein öffentliches Angebot von Wertpapieren noch eine Anlageberatung dar. Sie werden sorgfältig geprüft, können aber Fehler enthalten; jeder gemeldete Fehler wird korrigiert.'],
        ['Geistiges Eigentum', 'Siehe <a href="?legal=mentions">Impressum</a>.'],
        ['Personenbezogene Daten', 'Die von Ihnen übermittelten Daten werden wie im Text <a href="?legal=confidentialite">Datenschutz</a> beschrieben verarbeitet.'],
        ['Anwendbares Recht', 'Diese Bedingungen unterliegen dem Recht des Bundesstaates Delaware (USA).'],
        ['Kontakt', 'Per E-Mail: ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'Dieser Text beschreibt die Verwendung personenbezogener Daten auf ' + DOMAINE + '. Die Website erhebt so wenige Daten wie möglich und nutzt sie nur für die hier genannten Zwecke.'],
        ['Verantwortlicher', '<strong>CABEM CONSEILS</strong> - Unternehmensberatung für Geschäftsführung, SAS mit einem Stammkapital von 100&nbsp;€, RCS Rennes 848 618 831, Sitz 1, place de l’Église, 35550 Pipriac, Frankreich, vertreten durch ihren gesetzlichen Vertreter und Verantwortlichen für den Inhalt, Herrn Erwan Milbéo.'],
        SITE === 'estate' ? ['Bewerbung für LE CLUB', 'Daten: Vorname, Nachname, E-Mail, Telefon, Unternehmen oder Marke, Status, Adresse, Postleitzahl, Ort, Land und Ihre Einwilligung. Die Website speichert sie nicht und sendet sie an keinen Server: Das Formular bereitet eine E-Mail in Ihrem Postfach vor, und die Daten erreichen uns nur, wenn Sie sie absenden. Sie dienen der Prüfung Ihrer Bewerbung. Aufbewahrung: für die Dauer der Prüfung und des Austauschs, danach höchstens drei Jahre.'] : null,
        ['Wenn Sie uns schreiben', 'Ihre E-Mail-Adresse und Ihre Nachricht dienen ausschließlich der Beantwortung. Aufbewahrung: für die Dauer des Austauschs, danach höchstens zwölf Monate.'],
        ['Cookies und lokaler Speicher', 'Die Website setzt keine Cookies und verwendet keine Werkzeuge zur Reichweitenmessung oder Werbung. Sie speichert in Ihrem Browser lediglich die gewählte Sprache und das Design (hell oder dunkel). Die Schriftarten werden von Google Fonts geladen: Google erhält dabei die IP-Adresse Ihres Geräts.'],
        ['Hosting', 'Cloudflare, der Hoster, zeichnet automatisch technische Protokolle auf (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite), um die Website zu betreiben und vor Missbrauch zu schützen.'],
        ['Ihre Rechte', 'Sie können jederzeit auf Ihre Daten zugreifen, sie berichtigen oder löschen lassen, ihre Verwendung einschränken oder ihr widersprechen, eine Kopie erhalten und Ihre Einwilligung widerrufen. Schreiben Sie an ' + CONTACT + ': Sie erhalten innerhalb eines Monats eine Antwort.']
      ]
    },

    pt: {
      cartes: { cgu: 'Condições', mentions: 'Menções legais', confidentialite: 'Privacidade' },
      titres: { cgu: 'Condições gerais de utilização', mentions: 'Menções legais', confidentialite: 'Privacidade' },
      maj: 'Última atualização: 13 de outubro de 2026', fermer: 'Fechar', distributeur: 'Distribuidor exclusivo para França',
      mentions: [
        ['', 'Estas menções legais aplicam-se a ' + DOMAINE + ' e a todas as suas páginas, em todos os idiomas.'],
        ['Editor',
          (SITE === 'lab'
            ? 'suncom-lab.llc é o site autónomo do Think Tank SUNCOM Lab LLC, centro de I&amp;D estratégica do grupo SUNCOM, programado para funcionar num navegador ou num telemóvel. Não requer qualquer instalação.'
            : 'suncom.estate é o site de apresentação autónomo do grupo SUNCOM, grupo imobiliário mundial movido pela I.A. (Buyest, EMIAS, SUNCOM Lab…), programado para funcionar num navegador ou num telemóvel. Não requer qualquer instalação.')
          + ' Os seus desenvolvimentos são produzidos e executados com assistência de I.A. através da EMIAS (EUA), sob o controlo editorial e a direção de comunicação internacional do gabinete CABEM CONSEILS (França).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, Estados Unidos',
          '<strong>CABEM CONSEILS</strong> - Consultoria em gestão empresarial<br>SAS (sociedade por ações simplificada francesa) com capital social de 100&nbsp;€<br>RCS Rennes 848 618 831<br>Sede: 1, place de l’Église, 35550 Pipriac, França',
          'Ambas representadas pelo seu mandatário legal e diretor de publicação<br>Sr. Erwan Milbéo, residente em França: 8, rue Jean Coré, 29390 Scaër',
          'A EMIAS é uma inteligência artificial alojada na Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. A CABEM CONSEILS é a sua representante e distribuidora exclusiva para França.',
          'NOTA: Todos os projetos e desenvolvimentos da EMIAS resultam de I&amp;D estratégica e são propriedade intelectual do Sr. Erwan Milbéo - Fundador, iniciador e Managing Member do Think Tank ' + NOTA_LIEN + ' (Delaware - EUA).'],
        ['Alojamento', 'O site é alojado pela Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, Estados Unidos — cloudflare.com.'],
        ['Propriedade intelectual', 'Os nomes, logótipos, textos e elementos visuais do site pertencem ao seu editor. É proibida a sua reprodução, total ou parcial, sem autorização prévia por escrito.'],
        ['Contacto', 'Por e-mail: ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'Estas condições regem a utilização de ' + DOMAINE + '. A utilização do site implica a aceitação destas condições.'],
        ['Editor', DOMAINE + ' é produzido e executado com assistência de I.A. através da EMIAS (EUA), sob o controlo editorial e a direção de comunicação internacional do gabinete CABEM CONSEILS (França), representado pelo seu mandatário legal e diretor de publicação, Sr. Erwan Milbéo. Os contactos constam das <a href="?legal=mentions">menções legais</a>.'],
        ['O que o site propõe', SITE === 'lab'
          ? 'O site apresenta a SUNCOM Lab LLC, centro de I&amp;D estratégica do grupo SUNCOM, os seus trabalhos e áreas de atuação.'
          : 'O site apresenta o grupo SUNCOM e as suas atividades (Buyest, EMIAS, SUNCOM Lab…), bem como o LE CLUB, o espaço reservado aos seus membros.'],
        SITE === 'estate' ? ['LE CLUB', 'O formulário de candidatura prepara um e-mail que o próprio envia a partir da sua caixa de correio. Enviar uma candidatura não constitui admissão nem compromisso de nenhuma das partes.'] : null,
        ['Responsabilidade', 'As informações publicadas são fornecidas a título informativo. Não constituem uma oferta contratual, nem uma oferta pública de valores mobiliários, nem aconselhamento de investimento. São verificadas com cuidado, mas podem conter erros; qualquer erro assinalado é corrigido.'],
        ['Propriedade intelectual', 'Ver as <a href="?legal=mentions">menções legais</a>.'],
        ['Dados pessoais', 'Os dados que transmite são tratados conforme explicado no texto <a href="?legal=confidentialite">Privacidade</a>.'],
        ['Lei aplicável', 'Estas condições regem-se pela lei do Estado de Delaware (Estados Unidos).'],
        ['Contacto', 'Por e-mail: ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'Este texto descreve a utilização dos dados pessoais em ' + DOMAINE + '. O site recolhe o mínimo de dados possível e só os utiliza para o que aqui é indicado.'],
        ['Responsável pelos seus dados', '<strong>CABEM CONSEILS</strong> - Consultoria em gestão empresarial, SAS com capital social de 100&nbsp;€, RCS Rennes 848 618 831, sede em 1, place de l’Église, 35550 Pipriac, França, representada pelo seu mandatário legal e diretor de publicação, Sr. Erwan Milbéo.'],
        SITE === 'estate' ? ['A candidatura ao LE CLUB', 'Dados: nome próprio, apelido, e-mail, telefone, empresa ou insígnia, estatuto, morada, código postal, cidade, país e o seu consentimento. O site não os guarda nem os envia para nenhum servidor: o formulário prepara um e-mail na sua caixa de correio, e só nos chegam se o enviar. Servem para analisar a sua candidatura. Conservação: o tempo da análise e da troca, e depois três anos no máximo.'] : null,
        ['Se nos escrever', 'O seu endereço de e-mail e a sua mensagem servem apenas para lhe responder. Conservação: o tempo da troca, e depois doze meses no máximo.'],
        ['Cookies e armazenamento local', 'O site não instala cookies nem utiliza ferramentas de medição de audiência ou de publicidade. Guarda apenas no seu navegador o idioma e o tema (claro ou escuro) que escolheu. Os tipos de letra são carregados a partir do Google Fonts: a Google recebe então o endereço IP do seu dispositivo.'],
        ['Alojamento', 'A Cloudflare, o fornecedor de alojamento, regista automaticamente registos técnicos (endereço IP, data e hora, página consultada) para fazer funcionar o site e protegê-lo contra abusos.'],
        ['Os seus direitos', 'Pode a qualquer momento aceder aos seus dados, retificá-los ou apagá-los, limitar ou opor-se à sua utilização, obter uma cópia e retirar o seu consentimento. Escreva para ' + CONTACT + ': receberá uma resposta no prazo de um mês.']
      ]
    },

    ru: {
      cartes: { cgu: 'Условия', mentions: 'Правовая информация', confidentialite: 'Конфиденциальность' },
      titres: { cgu: 'Условия использования', mentions: 'Правовая информация', confidentialite: 'Конфиденциальность' },
      maj: 'Последнее обновление: 13 октября 2026 г.', fermer: 'Закрыть', distributeur: 'Эксклюзивный дистрибьютор во Франции',
      mentions: [
        ['', 'Настоящая правовая информация распространяется на ' + DOMAINE + ' и все его страницы на всех языках.'],
        ['Издатель',
          (SITE === 'lab'
            ? 'suncom-lab.llc — автономный сайт аналитического центра SUNCOM Lab LLC, центра стратегических НИОКР группы SUNCOM, работающий в браузере или на мобильном телефоне. Он не требует установки.'
            : 'suncom.estate — автономный сайт-витрина группы SUNCOM, международной группы недвижимости на базе ИИ (Buyest, EMIAS, SUNCOM Lab…), работающий в браузере или на мобильном телефоне. Он не требует установки.')
          + ' Его разработки создаются и выполняются с помощью ИИ через EMIAS (США) под редакционным контролем и руководством международных коммуникаций консалтинговой компании CABEM CONSEILS (Франция).',
          '<strong>EMIAS</strong> — EM Intelligent Assistant System<br>276 5th Ave #704, New York, NY 10001, США',
          '<strong>CABEM CONSEILS</strong> — консалтинговая компания в области управления бизнесом<br>SAS (французское упрощённое акционерное общество) с уставным капиталом 100&nbsp;€<br>RCS Rennes 848 618 831<br>Юридический адрес: 1, place de l’Église, 35550 Pipriac, Франция',
          'Обе представлены своим законным представителем и директором публикации<br>г-ном Эрваном Мильбео (Erwan Milbéo), проживающим во Франции: 8, rue Jean Coré, 29390 Scaër',
          'EMIAS — искусственный интеллект, размещённый у Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, США. CABEM CONSEILS является её представителем и эксклюзивным дистрибьютором во Франции.',
          'ПРИМЕЧАНИЕ: все проекты и разработки EMIAS являются результатом стратегических НИОКР и интеллектуальной собственностью г-на Эрвана Мильбео (Erwan Milbéo) — основателя, инициатора и Managing Member аналитического центра ' + NOTA_LIEN + ' (Делавэр, США).'],
        ['Хостинг', 'Сайт размещён у Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, США — cloudflare.com.'],
        ['Интеллектуальная собственность', 'Названия, логотипы, тексты и изображения сайта принадлежат его издателю. Их полное или частичное воспроизведение без предварительного письменного разрешения запрещено.'],
        ['Контакт', 'По электронной почте: ' + CONTACT + '.']
      ],
      cgu: [
        ['', 'Настоящие условия регулируют использование ' + DOMAINE + '. Использование сайта означает согласие с этими условиями.'],
        ['Издатель', DOMAINE + ' создаётся и выполняется с помощью ИИ через EMIAS (США) под редакционным контролем и руководством международных коммуникаций консалтинговой компании CABEM CONSEILS (Франция) в лице её законного представителя и директора публикации г-на Эрвана Мильбео (Erwan Milbéo). Контактные данные приведены в разделе <a href="?legal=mentions">правовой информации</a>.'],
        ['Что предлагает сайт', SITE === 'lab'
          ? 'Сайт представляет SUNCOM Lab LLC — центр стратегических НИОКР группы SUNCOM, его работы и направления деятельности.'
          : 'Сайт представляет группу SUNCOM и её деятельность (Buyest, EMIAS, SUNCOM Lab…), а также LE CLUB — пространство, зарезервированное для её участников.'],
        SITE === 'estate' ? ['LE CLUB', 'Форма заявки готовит электронное письмо, которое вы отправляете сами из своего почтового ящика. Отправка заявки не означает ни принятия, ни обязательств ни для одной из сторон.'] : null,
        ['Ответственность', 'Публикуемая информация носит исключительно информационный характер. Она не является ни договорной офертой, ни публичным предложением ценных бумаг, ни инвестиционной рекомендацией. Она тщательно проверяется, но может содержать ошибки; любая выявленная ошибка исправляется.'],
        ['Интеллектуальная собственность', 'См. <a href="?legal=mentions">правовую информацию</a>.'],
        ['Персональные данные', 'Передаваемые вами данные обрабатываются, как описано в тексте <a href="?legal=confidentialite">«Конфиденциальность»</a>.'],
        ['Применимое право', 'Настоящие условия регулируются правом штата Делавэр (США).'],
        ['Контакт', 'По электронной почте: ' + CONTACT + '.']
      ],
      confidentialite: [
        ['', 'Этот текст описывает использование персональных данных на ' + DOMAINE + '. Сайт собирает как можно меньше данных и использует их только для указанных здесь целей.'],
        ['Ответственный за ваши данные', '<strong>CABEM CONSEILS</strong> — консалтинговая компания в области управления бизнесом, SAS с уставным капиталом 100&nbsp;€, RCS Rennes 848 618 831, юридический адрес: 1, place de l’Église, 35550 Pipriac, Франция, в лице законного представителя и директора публикации г-на Эрвана Мильбео (Erwan Milbéo).'],
        SITE === 'estate' ? ['Заявка в LE CLUB', 'Данные: имя, фамилия, электронная почта, телефон, компания или бренд, статус, адрес, почтовый индекс, город, страна и ваше согласие. Сайт их не сохраняет и не отправляет ни на какой сервер: форма готовит письмо в вашем почтовом ящике, и данные поступают к нам, только если вы его отправите. Они используются для рассмотрения вашей заявки. Срок хранения: на время рассмотрения и переписки, затем не более трёх лет.'] : null,
        ['Если вы нам пишете', 'Ваш адрес электронной почты и сообщение используются только для ответа вам. Срок хранения: на время переписки, затем не более двенадцати месяцев.'],
        ['Файлы cookie и локальное хранилище', 'Сайт не устанавливает файлы cookie и не использует инструменты измерения аудитории или рекламы. Он сохраняет в вашем браузере только выбранные вами язык и тему (светлую или тёмную). Шрифты загружаются с Google Fonts: при этом Google получает IP-адрес вашего устройства.'],
        ['Хостинг', 'Cloudflare, хостинг-провайдер, автоматически ведёт технические журналы (IP-адрес, дата и время, просмотренная страница) для работы сайта и защиты от злоупотреблений.'],
        ['Ваши права', 'Вы можете в любое время получить доступ к своим данным, исправить или удалить их, ограничить их использование или возразить против него, получить копию и отозвать согласие. Напишите на ' + CONTACT + ': ответ будет дан в течение месяца.']
      ]
    }
  };

  function langue() {
    var l = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    return T[l] ? l : 'en';
  }

  /* ---------------- LE STYLE (charte SUNCOM : nuit, turquoise, or) ---------------- */
  var CSS = [
    '.lgs{width:min(720px,calc(100% - 24px));max-height:calc(100% - 32px);padding:0;border:1px solid rgba(0,196,180,.35);border-radius:20px;overflow:hidden;color:#E8EDF5;',
    '  font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;font-size:15px;line-height:1.65;text-align:left;',
    '  background:radial-gradient(700px 320px at 50% -10%,rgba(0,196,180,.18) 0%,transparent 62%),linear-gradient(180deg,#0E1A2B 0%,#0A1220 100%);',
    '  box-shadow:0 40px 90px -30px rgba(0,0,0,.85),0 0 60px -22px rgba(0,196,180,.5)}',
    '.lgs::backdrop{background:rgba(4,9,16,.74);backdrop-filter:blur(3px)}',
    '.lgs *{box-sizing:border-box}',
    '.lgs-in{max-height:calc(100vh - 34px);overflow-y:auto;overscroll-behavior:contain}',
    '.lgs-tete{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 26px 8px}',
    '.lgs-tete h2{margin:0;font-family:"Michroma",sans-serif;font-weight:400;font-size:clamp(15px,2.6vw,19px);letter-spacing:.06em;line-height:1.3;color:#fff;text-transform:none}',
    '.lgs-fermer{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid rgba(232,237,245,.25);background:transparent;color:#E8EDF5;font-size:18px;line-height:1;cursor:pointer;padding:0}',
    '.lgs-fermer:hover{border-color:#00C4B4;color:#00C4B4}',
    '.lgs-cartes{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:10px 26px 4px}',
    '.lgs-carte{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 6px 12px;border-radius:14px;cursor:pointer;margin:0;',
    '  font-family:inherit;font-size:12.5px;font-weight:500;line-height:1.25;letter-spacing:.02em;text-transform:none;color:rgba(232,237,245,.7);',
    '  background:linear-gradient(180deg,rgba(0,196,180,.10),rgba(0,196,180,.02));border:1px solid rgba(0,196,180,.22);transition:transform .15s,border-color .15s,box-shadow .15s,color .15s}',
    '.lgs-carte svg{width:26px;height:26px}',
    '.lgs-carte:hover{transform:translateY(-2px);color:#fff}',
    '.lgs-carte[aria-pressed="true"]{color:#F0A500;border-color:#F0A500;box-shadow:0 0 0 1px #F0A500,0 0 26px -8px rgba(240,165,0,.8);background:linear-gradient(180deg,rgba(240,165,0,.14),rgba(240,165,0,.03))}',
    '.lgs-carte:focus-visible,.lgs-fermer:focus-visible{outline:2px solid #00C4B4;outline-offset:3px}',
    '.lgs-texte{padding:8px 26px 22px;color:rgba(232,237,245,.82)}',
    '.lgs-texte p{margin:0 0 12px}',
    '.lgs-maj{font-size:12.5px;color:rgba(232,237,245,.5)}',
    '.lgs-intro{font-size:15.5px;color:#fff}',
    '.lgs-texte h3{margin:22px 0 8px;padding-top:16px;border-top:1px solid rgba(0,196,180,.15);font-family:"Michroma",sans-serif;font-weight:400;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#00C4B4}',
    '.lgs-texte strong{color:#fff;font-weight:600}',
    '.lgs-texte a{color:#00C4B4;text-decoration:underline;text-underline-offset:2px}',
    '.lgs-pied{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:14px 26px 16px;border-top:1px solid rgba(0,196,180,.15);background:rgba(0,0,0,.22);font-size:10.5px;line-height:1.55;color:rgba(232,237,245,.45)}',
    '.lgs-pied p{margin:0}',
    '.lgs-pied b{color:rgba(232,237,245,.75);font-weight:600}',
    '.lgs-d{text-align:right}',
    '.lgs-point{display:inline-block;width:7px;height:7px;border-radius:50%;background:#00C4B4;vertical-align:1px}',
    '@media (max-width:620px){',
    '  .lgs-tete{padding:18px 18px 6px}.lgs-cartes{padding:8px 18px 2px;gap:8px}.lgs-texte{padding:6px 18px 18px}.lgs-pied{padding:12px 18px 14px}',
    '  .lgs-carte{font-size:11.5px;padding:12px 4px 10px}.lgs-d{text-align:left}',
    '}'
  ].join('\n');

  var ICONES = {
    cgu: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
    mentions: '<path d="M12 3v18M8 21h8M5 7h14"/><path d="M5 7l-3 6.5a3.5 3.5 0 0 0 6 0L5 7z"/><path d="M19 7l-3 6.5a3.5 3.5 0 0 0 6 0L19 7z"/>',
    confidentialite: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.3"/>'
  };

  var fenetre, actuel = 'mentions';

  function construire() {
    if (fenetre) return;
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    fenetre = document.createElement('dialog');
    fenetre.className = 'lgs';
    fenetre.setAttribute('aria-labelledby', 'lgs-titre');
    document.body.appendChild(fenetre);
    fenetre.addEventListener('click', function (e) {
      if (e.target === fenetre) { fenetre.close(); return; } // clic hors du cadre
      if (e.target.closest('.lgs-fermer')) { fenetre.close(); return; }
      var carte = e.target.closest('[data-legal-carte]');
      if (carte) afficher(carte.getAttribute('data-legal-carte'));
    });
  }

  function afficher(k) {
    if (DOCS.indexOf(k) < 0) k = 'mentions';
    actuel = k;
    var t = T[langue()];
    var cartes = DOCS.map(function (d) {
      return '<button type="button" class="lgs-carte" data-legal-carte="' + d + '" aria-pressed="' + (d === k) + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONES[d] + '</svg>' +
        t.cartes[d] + '</button>';
    }).join('');
    var texte = '<p class="lgs-maj">' + t.maj + '</p>';
    t[k].forEach(function (s) {
      if (!s) return;
      if (!s[0]) { texte += '<p class="lgs-intro">' + s[1] + '</p>'; return; }
      texte += '<h3>' + s[0] + '</h3>';
      for (var i = 1; i < s.length; i++) texte += '<p>' + s[i] + '</p>';
    });
    fenetre.innerHTML = '<div class="lgs-in">' +
      '<div class="lgs-tete"><h2 id="lgs-titre">' + t.titres[k] + '</h2><button type="button" class="lgs-fermer" aria-label="' + t.fermer + '">✕</button></div>' +
      '<div class="lgs-cartes" role="group">' + cartes + '</div>' +
      '<div class="lgs-texte">' + texte + '</div>' +
      '<div class="lgs-pied"><p><span class="lgs-point" aria-hidden="true"></span> <b>EMIAS</b> ©EM Intelligent Assistant System<br>276 5th Ave #704 - New York<br>NY 10001 - USA</p>' +
      '<p class="lgs-d">' + t.distributeur + '<br><b>CABEM CONSEILS</b> - RCS Rennes 848 618 831</p></div></div>';
    var defile = fenetre.querySelector('.lgs-in');
    if (defile) defile.scrollTop = 0;
  }

  function ouvrir(k) {
    construire();
    afficher(k);
    if (!fenetre.open) fenetre.showModal();
  }

  // Les libellés des liens du pied suivent la langue du site.
  function libeller() {
    var t = T[langue()];
    document.querySelectorAll('[data-legal-libelle]').forEach(function (a) {
      var k = a.getAttribute('data-legal-libelle');
      if (t.cartes[k]) a.textContent = t.cartes[k];
    });
    if (fenetre && fenetre.open) afficher(actuel);
  }
  new MutationObserver(libeller).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href*="legal="]');
    if (!a) return;
    var k;
    try { k = new URL(a.href, location.href).searchParams.get('legal'); } catch (_) { return; }
    if (!k) return;
    e.preventDefault();
    ouvrir(k);
  });

  function demarrer() {
    libeller();
    var params = new URLSearchParams(location.search);
    if (params.has('legal')) {
      var k = params.get('legal');
      params.delete('legal');
      var reste = params.toString();
      history.replaceState(history.state, '', location.pathname + (reste ? '?' + reste : '') + location.hash);
      ouvrir(k);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();
