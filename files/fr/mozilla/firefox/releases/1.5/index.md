---
title: Firefox 1.5 note de version pour les développeurs
short-title: Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Basé sur le moteur {{Glossary("Gecko")}} 1.8, Firefox 1.5 améliore son déjà excellent support des standards et apporte de nouvelles fonctionnalités permettant la prochaine génération d'applications web. Firefox 1.5 propose un meilleur support de CSS2 et CSS3, des API pour des graphiques 2D scriptables et programmables via [SVG](/fr/docs/Web/SVG) 1.1 et [`<canvas>`](/fr/docs/Web/API/Canvas_API), [XForms](/fr/docs/Glossary/XForms) et les évènements XML, ainsi que de nombreuses améliorations de DHTML, JavaScript et du DOM.

## Outils de développement

Plusieurs outils et extensions de navigateur sont disponibles pour aider les développeur·euse·s à prendre en charge Firefox 1.5.

- [Inspecteur DOM <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html), un outil permettant d'examiner et de modifier des documents sans avoir à les éditer directement. L'Inspecteur DOM est disponible dans l'option d'installation personnalisée de Firefox 1.5 sous Outils de développement.
- Console JavaScript, un outil pour écrire et tester du code JavaScript ainsi que pour afficher les erreurs JavaScript et CSS sur une page.
- Afficher le code source de la page, avec coloration syntaxique et fonctions de recherche.
- [Extensions de navigateur <sup>(angl.)</sup>](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) incluant [FireBug <sup>(angl.)</sup>](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [barre d'outils Web Developer <sup>(angl.)</sup>](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Live HTTP Headers <sup>(angl.)</sup>](https://web.archive.org/web/20200628024648/http://livehttpheaders.mozdev.org/), [HTML Validator <sup>(angl.)</sup>](https://validator.w3.org/) et bien d'autres.

> [!NOTE]
> Certaines extensions ne sont pas encore supportées par Firefox 1.5 et seront automatiquement désactivées.

## Aperçu

Voici certaines des nouvelles fonctionnalités de Firefox 1.5&nbsp;:

### Site Web et développeurs d'applications

- SVG est pris en charge dans XHTML
  - : Le SVG peut être utilisé dans des pages XHTML. JavaScript et CSS peuvent être utilisés pour manipuler l'image comme vous le feriez avec du XHTML dans un script. Voir [SVG dans Firefox <sup>(angl.)</sup>](https://web.archive.org/web/20210413180914/https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_1.1_Support_in_Firefox) pour connaître l'état et les problèmes connus de l'implémentation du SVG dans Firefox.
- [Dessiner des graphiques avec canvas](/fr/docs/Web/API/Canvas_API/Tutorial)
  - : Découvrez la nouvelle balise `<canvas>` et comment dessiner des graphiques et d'autres objets dans Firefox.
- [Colonnes CSS3](/fr/docs/Web/CSS/Guides/Multicol_layout/Using)
  - : Découvrez le nouveau support de la mise en page automatique en colonnes multiples comme proposé pour [CSS3](/fr/docs/Web/CSS).
- [Utilisation du cache de Firefox 1.5](/fr/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Découvrez `bfcache` et comment il accélère la navigation arrière et avant.

### XUL et développeur·euse·s d'extensions

- [Construire une extension](/fr/docs/Mozilla/Add-ons)
  - : Ce tutoriel vous guidera étape par étape dans la création d'une extension très simple pour Firefox. Consultez également [un autre tutoriel sur la base de connaissance de MozillaZine <sup>(angl.)</sup>](https://kb.mozillazine.org/Getting_started_with_extension_development), qui montre comment il est encore plus simple de créer une nouvelle extension avec les nouvelles fonctionnalités du gestionnaire d'extensions dans la version 1.5.
- [XPCNativeWrapper <sup>(angl.)</sup>](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/en-US/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` est un moyen pour empaqueter un objet afin qu'il puisse [accéder à des privilèges chrome <sup>(angl.)</sup>](https://web.archive.org/web/20130905110328/https://developer.mozilla.org/en-US/docs/Safely_accessing_content_DOM_from_chrome). Il peut être utilisé dans toutes les versions de Firefox, bien que son comportement ait changé à partir de Firefox 1.5 (Gecko 1.8).
- [Système de préférences <sup>(angl.)</sup>](https://web.archive.org/web/20210620034317/https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preferences_system)
  - : Découvrez les nouveaux composants graphiques qui permettent de créer des fenêtres d'options plus facilement en utilisant moins de code JavaScript.
- [Caractères internationaux dans du JavaScript XUL <sup>(angl.)</sup>](https://web.archive.org/web/20210126100844/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/International_characters_in_XUL_JavaScript)
  - : Les fichiers JavaScript XUL peuvent désormais contenir des caractères non-{{Glossary("ASCII")}}.
- [Modifications de l'API Tree <sup>(angl.)</sup>](https://web.archive.org/web/20210414021241/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Tree_Widget_Changes)
  - : Les interfaces pour accéder aux éléments XUL `<tree>` ont été modifiées.
- [Modifications XUL pour Firefox 1.5 <sup>(angl.)</sup>](https://web.archive.org/web/20200812075014/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/XUL_Changes_for_Firefox_1.5)
  - : Résumé des modifications du XUL.

#### Changements liés au réseau

- Les invites de certificat peuvent désormais être remplacées par canal. Cela fonctionne en définissant un demandeur d'interface comme notificationCallbacks d'un `nsIChannel` et en fournissant une interface pour `nsIBadCertListener`.
- Les écouteurs de nsIWebBrowserPersist peuvent maintenant implémenter `nsIInterfaceRequestor::GetInterface` et auront l'opportunité de fournir toutes les interfaces que les canaux pourraient demander, y compris `nsIProgressEventSink` (peu utile, redondant avec `nsIWebProgressListener`). Les interfaces utiles ici incluent `nsIChannelEventSink` et `nsIBadCertListener`.
- Les extensions ou autres consommateurs necko, y compris XMLHttpRequest, peuvent définir explicitement un en-tête Cookie, et necko ne le remplacera pas. Les cookies stockés seront fusionnés avec l'en-tête défini explicitement, de sorte que l'en-tête explicite remplacera les cookies stockés.

## Nouvelles fonctionnalités pour l'utilisateur·ice

### Expéreince utilisateur

- **Navigation plus rapide** avec une performance accrue des boutons permettant de reculer ou d'avancer d'une page.
- **Réorganisation des onglets par glisser-déposer.**
- **Le dictionnaire MediaDICO a été ajouté à la liste des moteurs de recherche**.
- **Une meilleure prise en main** avec des pages d'erreur descriptives, un menu d'options redessiné, la découverte automatique des fils RSS et un «&nbsp;mode sans échec&nbsp;» plus facile à utiliser.
- **Meilleur support de l'accessibilité**, notamment pour les pages DHTML.
- **Assistant pour les sites Web non fonctionnels** pour rapporter les sites Web qui ne fonctionnent pas avec Firefox.
- **Meilleur support de Mac OS X** (10.2 et supérieur), avec la migration des profils de Safari et d'Internet Explorer pour Mac.

### Sécurité et vie privée

- **Mises à jour automatiques** pour rationaliser les mises à niveau du navigateur. La notification d'une mise à jour est plus visible et les mises à jour de Firefox n'excèdent plus le demi méga-octet. La mise à jour des extensions a également été améliorée.
- **Améliorations du système de blocage de l'ouverture intempestive de fenêtres (popups).**
- **La fonctionnalité d'effacement des traces** offre un accès simplifié et rapide pour supprimer toutes vos données personnelles via un menu ou un raccourci clavier.

### Support des standards Web ouverts

Le support des standards Web de Firefox garde une longueur d'avance avec des implémentations fonctionnelles et multiplateformes pour&nbsp;:

- Hypertext Markup Language ([HTML](/fr/docs/Web/HTML)) et Extensible Hypertext Markup Language ({{Glossary("XHTML")}})&nbsp;: [HTML 4.01 <sup>(angl.)</sup>](https://www.w3.org/TR/html401/) et [XHTML 1.0/1.1 <sup>(angl.)</sup>](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/fr/docs/Web/CSS))&nbsp;: [CSS niveau 1 <sup>(angl.)</sup>](https://www.w3.org/TR/CSS1/), [CSS niveau 2 <sup>(angl.)</sup>](https://www.w3.org/TR/CSS22/) et quelques parties de [CSS niveau 3 <sup>(angl.)</sup>](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ({{DOMxRef("Document_Object_Model", "DOM", "", 1)}})&nbsp;: [DOM niveau 1 <sup>(angl.)</sup>](https://www.w3.org/TR/DOM-Level-1/), [DOM niveau 2 <sup>(angl.)</sup>](https://www.w3.org/DOM/DOMTR#dom2) et quelques parties de [DOM niveau 3 <sup>(angl.)</sup>](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language&nbsp;: [MathML Version 2.0 <sup>(angl.)</sup>](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/fr/docs/Web/XML))&nbsp;: [XML 1.0 <sup>(angl.)</sup>](https://www.w3.org/TR/xml/), [Espaces de nommage sous XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml-names/), [Feuilles de styles associées avec des documents XML 1.0 <sup>(angl.)</sup>](https://www.w3.org/TR/xml-stylesheet/), [Identifiant de fragment pour XML <sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/fr/docs/Web/XML/XSLT))&nbsp;: [XSLT 1.0 <sup>(angl.)</sup>](https://www.w3.org/TR/xslt-10/)
- XML Path Language ([XPath](/fr/docs/Web/XML/XPath))&nbsp;: [XPath 1.0 <sup>(angl.)</sup>](https://www.w3.org/TR/xpath-10/)
- Resource Description Framework ({{Glossary("RDF")}})&nbsp;: [RDF <sup>(angl.)</sup>](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP)&nbsp;: [SOAP 1.1 <sup>(angl.)</sup>](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/fr/docs/Web/JavaScript) 1.6, basé sur [ECMA-262, révision 3 <sup>(angl.)</sup>](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 supporte un bon nombre de protocoles de transport de données (HTTP, FTP, SSL, TLS et d'autres), les caractères multi-langages (Unicode), plusieurs formats graphiques (GIF, JPEG, PNG, SVG et d'autres) et la dernière version du langage de script le plus populaire au monde, [JavaScript 1.6 <sup>(angl.)</sup>](https://web.archive.org/web/20210623231028/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.6).

## Changements depuis Firefox 1.0

De nombreux changements ont été introduits dans Firefox depuis sa première sortie le 9 novembre 2004. Firefox a progressé avec beaucoup de nouvelles fonctions et de corrections de bogues. Une [liste détaillée des modifications <sup>(angl.)</sup>](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) est disponible sur squarefree.com.
