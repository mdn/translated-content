---
title: Firefox 22 pour les développeurs
slug: Mozilla/Firefox/Releases/22
---

{{FirefoxSidebar}}

Vous voulez aider à documenter Firefox 22 ? Parcourez la [liste des bugs qui ont besoin d'être documentés](http://beta.elchi3.de/doctracker/#list=fx&version=22.0) et lancez-vous !

## Changements pour les développeurs Web

### HTML

- L'élément HTML5 {{HTMLElement("data")}} a été implémenté ([bug Firefox 839371](https://bugzil.la/839371)).
- Le type `range` de l'élément {{HTMLElement("input")}} (`<input type="range">`) a été implémenté mais n'est seulement activé que dans les canaux Aurora et Nightly pour l'instant ([bug Firefox 841948](https://bugzil.la/841948)).

### JavaScript

- Les optimizations [Asm.js](http://asmjs.org/spec/latest/) sont activées, rendant possible la compilation d'applications C / C++ vers un sous-ensemble Javascript pour de meilleures performances.
- La syntaxe ES6 [Arrow Function](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) a été implémentée ([bug Firefox 846406](https://bugzil.la/846406)).
- La nouvelle fonction [Object.is](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is) a été ajoutée ([bug Firefox 839979](https://bugzil.la/839979)).

### DOM

- Support de la propriété `multipart` avec `XMLHttpRequest`. Les réponses `multipart/x-mixed-replace` dans `XMLHttpRequest` ont été supprimées. C'était une fonctionnalité uniquement supportée par Gecko et jamais standardisée. Il est possible d'utiliser [Server-Sent Events](/fr/docs/Web/API/Server-sent_events) et [Web Sockets](/fr/docs/Web/API/WebSockets_API) ou d'inspecter la propriété `responseText` des _progress events_ à la place.
- Le support des [Web Notifications](http://notifications.spec.whatwg.org/) est activé par défaut. ([bug Firefox 782211](https://bugzil.la/782211)).
- La méthode {{domxref("XMLHttpRequest/FormData", "FormData")}} `append` accepte maintenant un troisième paramètre optionnel `filename` ([bug Firefox 690659](https://bugzil.la/690659)).
- {{domxref("Node.isSupported")}} a été supprimé ([bug Firefox 801562](https://bugzil.la/801562)).
- {{domxref("Node.setUserData")}} et {{domxref("Node.getUserData")}} ont été supprimés pour le contenu web et dépréciés pour le contenu chrome ([bug Firefox 842372](https://bugzil.la/842372))
- Un backend Mac OS X pour {{domxref("DeviceLightEvent", "Ambient Light Events")}} a été implémenté.
- Les éléments du namespace HTML avec les noms locaux "bgsound", "multicol", et "image" n'utilisent plus l'interface `HTMLSpanElement`. "bgsound" et "multicol" utilisent `HTMLUnknownElement` et "image" utilise `HTMLElement`.

### CSS

- Le support de [CSS Flexbox layout](/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) a été activé par défaut ([bug Firefox 841876](https://bugzil.la/841876)).
- Le support de CSS Conditionals ({{cssxref("@supports")}} et {{domxref("CSS.supports")}}) ont été activés par défaut ([bug Firefox 855455](https://bugzil.la/855455)).

## Changements pour les développeurs Mozilla et développeurs d'add-on

- Le paramètre `properties` a été supprimé des méthodes `nsITreeView.getCellProperties()` `nsITreeView.getColumnProperties()` et `nsITreeView.getRowProperties()` de l'interface `nsITreeView`. Ces méthodes retourneront maintenant un string de noms de propriétés séparées par des espaces. ([bug Firefox 407956](https://bugzil.la/407956))
- La méthode `inIDOMUtils.getCSSPropertyNames()` a été implémentée et retourne le nom de toutes les [propriétés CSS](/fr/docs/Web/CSS/Reference) supportées.
- Voir [tous les changements](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/).

### Outils pour développeurs de Firefox

- [L'inspecteur de polices](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) montre quelles polices sur votre ordinateur ont été appliquées sur cette page.
- Le mode d'affichage de rendu visuel montre quand et où une page est re-rendue.
- Les outils pour développeurs peuvent maintenant être affichés à droite d'une fenêtre et plus seulement en bas.
- Certains onglets des outils pour développeurs sont passés de [XUL à HTML](https://bugzilla.mozilla.org/show_bug.cgi?id=875727). Par exemple, l'onglet présentant les règles css fait maintenant partie de chrome://browser/content/devtools/cssruleview\.xhtml, et pas de `cssruleview.xul`. Au lieu d'ajouter une couche pour ajouter des fonctionnalités directement sur ces onglets, vous pouvez ajouter une couche et la lier par script au document xul externe afin d'ajouter des écouteurs d'événements et de changer ces documents html.
- L'affichage en pile est maintenant affiché en fil d'Ariane en haut de l'onglet et la liste des scripts est maintenant sur la gauche du débuggeur.

## Voir aussi

- [Notes de version de Firefox 22 Beta](https://www.mozilla.org/en-US/firefox/22.0beta/releasenotes/)
- [Compatibilité des sites avec Firefox 22](/fr/docs/Site_Compatibility_for_Firefox_22)
- [Compatibilité des add-ons avec Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versions

{{Firefox_for_developers('21')}}
