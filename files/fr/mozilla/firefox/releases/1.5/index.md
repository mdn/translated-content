---
title: Firefox 1.5 pour les développeurs
slug: Mozilla/Firefox/Releases/1.5
---

{{FirefoxSidebar}}

Firefox 1.5, basé sur le moteur [Gecko](/fr/Gecko) 1.8, améliore son support des standards déjà de premier ordre et fournit de nouvelles opportunités de créer la prochaine génération d'applications Web. Firefox 1.5 propose un support amélioré de CSS2 et CSS3, des API pour des graphiques 2D scriptables et programmables grâce à [SVG](/fr/SVG) 1.1 et `<canvas>`, les évènements [XForms](/fr/XForms) et XML, ainsi que de nombreuses améliorations du DHTML, du JavaScript et du DOM.

## Outils pour développeurs

Plusieurs outils et extensions sont disponibles pour aider les développeurs à travailler avec Firefox 1.5.

- L'[Inspecteur DOM](/fr/Inspecteur_DOM), un outil permettant aux développeurs d'examiner et de transformer les documents sans avoir à les modifier directement. L'inspecteur DOM est disponible lors de l'installation de Firefox 1.5 dans les options d'installation personnalisée, en choisissant les outils de développement.
- La console JavaScript, un outil permettant d'écrire et tester du code JavaScript, ainsi que d'afficher les erreurs JavaScript et CSS d'une page.
- L'affichage du code source d'une page avec coloration syntaxique et recherche intégrée.
- Des [extensions](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) comme [Firebug](http://www.joehewitt.com/software/firebug/), [la barre d'outils Web Developer](</fr/Extension_Firefox_Web_Developer_(externe)>), [Live HTTP Headers](</fr/Live_HTTP_Headers_(externe)>), [un validateur HTML](</fr/Validateur_HTML_en_français_(externe)>), [une extension pour les développeurs d'extensions](</fr/Extension_Developer's_Extension_(externe)>) et bien d'autres.

**Note&nbsp;:** Certaines extensions ne sont pas encore supportées par Firefox 1.5 et seront automatiquement désactivées.

## Fonctionnalités

Voici certaines des nouvelles fonctionnalités de Firefox 1.5&nbsp;:

### Site Web et développeurs d'applications

- [Introduction à SVG dans HTML](/fr/Introduction_à_SVG_dans_HTML)
  - : Apprenez à utiliser le SVG dans des pages XHTML et comment JavaScript et CSS sont utilisés pour manipuler une image comme vous le feriez avec le XHTML dans un script. Voir également [SVG dans Firefox](/fr/SVG_dans_Firefox) pour connaître l'état et les problèmes connus de l'implémentation du SVG dans la version 1.5.

<!---->

- [Dessiner avec canvas](/fr/Dessiner_avec_canvas)
  - : Apprenez à utiliser la nouvelle balise `<canvas>` et comment dessiner des graphiques et d'autres objets dans Firefox.

<!---->

- [Colonnes CSS3](/fr/Colonnes_CSS3)
  - : Apprenez à utiliser le nouveau support de mise en page multi-colonnes automatiques comme proposé par CSS3.

<!---->

- [Utilisation du cache de Firefox 1.5](/fr/Utilisation_du_cache_de_Firefox_1.5)
  - : Découvrez `bfcache` et comment il accélère la navigation en arrière et en avant.

### XUL et développeurs d'extension

- [Construire une extension](/fr/Construire_une_extension)
  - : Ce tutoriel vous guidera par étape dans la création d'une extension très simple pour Firefox. Consultez également [un autre tutoriel sur la base de connaissance de MozillaZine](http://kb.mozillazine.org/Getting_started_with_extension_development) qui montre comment il est encore plus simple de créer une nouvelle extension avec les nouvelles fonctionnalités du gestionnaire d'extensions dans 1.5.

<!---->

- [XPCNativeWrapper](/fr/XPCNativeWrapper)
  - : `XPCNativeWrapper` est un moyen pour empaqueter un objet afin qu'il puisse [accéder à des privilèges chrome](/fr/Accès_sécurisé_au_contenu_DOM_depuis_le_chrome). Il peut être utilisé dans toutes les versions de Firefox bien que son comportement soit sensiblement différent au lancement de Firefox 1.5 (Gecko 1.8).

<!---->

- [Système de préférences](/fr/Système_de_préférences)
  - : Apprenez à utiliser les nouveaux composants graphiques qui vous permettront de créer des fenêtres d'options plus facilement en utilisant moins de code JavaScript.

<!---->

- [Caractères internationaux dans du JavaScript XUL](/fr/Caractères_internationaux_dans_du_JavaScript_XUL)
  - : Les fichiers JavaScript XUL peuvent maintenant contenir des caractères non-ASCII.

<!---->

- [Modifications de l'API Tree](/fr/Modifications_du_composant_graphique_tree)
  - : Les interfaces pour accéder aux éléments XUL `<tree>` ont été modifiées.

<!---->

- [Modifications XUL pour Firefox 1.5](/fr/Modifications_XUL_pour_Firefox_1.5)
  - : Résumé des modifications du XUL. Consultez également [Adaptation des applications XUL pour Firefox 1.5](/fr/Adaptation_des_applications_XUL_pour_Firefox_1.5).

## Nouvelles fonctionnalités pour l'utilisateur

### Utilisation courante

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

- Hypertext Markup Language ([HTML](/fr/HTML)) et Extensible Hypertext Markup Language ([XHTML](/fr/XHTML)): [HTML 4.01](http://www.w3.org/TR/html401/) et [XHTML 1.0/1.1](http://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/fr/CSS)): [CSS niveau 1](http://www.w3.org/TR/REC-CSS1), [CSS niveau 2](http://www.w3.org/TR/REC-CSS2) et quelques parties de [CSS niveau 3](http://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/fr/DOM)): [DOM niveau 1](http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM niveau 2](http://www.w3.org/DOM/DOMTR#dom2) et quelques parties de [DOM niveau 3](http://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](http://www.w3.org/Math/)
- Extensible Markup Language ([XML](/fr/XML)): [XML 1.0](http://www.w3.org/TR/REC-xml), [Espaces de nommage sous XML](http://www.w3.org/TR/REC-xml-names/), [Feuilles de styles associées avec des documents XML 1.0](http://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/fr/XSLT)): [XSLT 1.0](http://www.w3.org/TR/xslt)
- XML Path Language ([XPath](/fr/XPath)): [XPath 1.0](http://www.w3.org/TR/xpath)
- Resource Description Framework ([RDF](/fr/RDF)): [RDF](http://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](http://www.w3.org/TR/SOAP/)
- [JavaScript](/fr/JavaScript) 1.6, basé sur [ECMA-262](/fr/ECMAScript), révision 3&nbsp;: [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 supporte un bon nombre de protocoles de transport de données (HTTP, FTP, SSL, TLS et d'autres), les caractères multi-langages (Unicode), plusieurs formats graphiques (GIF, JPEG, PNG, SVG et d'autres) et la dernière version du langage de script le plus populaire au monde, [JavaScript 1.6](/fr/Nouveautés_dans_JavaScript_1.6).

## Changements depuis Firefox 1.0

De nombreux changements ont été introduits dans Firefox depuis sa première sortie le 9 novembre 2004. Firefox a progressé avec beaucoup de nouvelles fonctions et de corrections de bogues. Une [liste détaillée des modifications](http://www.squarefree.com/burningedge/releases/1.5-comprehensive.html) est disponible sur squarefree.com.
