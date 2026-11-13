---
title: Firefox 22 note de version pour les développeurs
short-title: Firefox 22
slug: Mozilla/Firefox/Releases/22
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 22 a été publié le 25 juin 2013. Cet article répertorie les principaux changements qui sont utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### HTML

- L'élément HTML5 {{HTMLElement("data")}} a été ajouté ([bogue Firefox 839371 <sup>(angl.)</sup>](https://bugzil.la/839371)).
- L'élément HTML5 {{HTMLElement("time")}} a été ajouté ([bogue Firefox 629801 <sup>(angl.)</sup>](https://bugzil.la/629801)).
- L'état `range` de l'élément {{HTMLElement("input")}} (`<input type="range">`) a été ajouté, derrière la préférence `dom.experimental_forms_range`, uniquement activé par défaut sur les canaux Nightly et Aurora ([bogue Firefox 841948 <sup>(angl.)</sup>](https://bugzil.la/841948)).
- La prise en charge de l'élément {{HTMLElement("template")}}, faisant partie de la spécification des composants Web, a été ajoutée ([bogue Firefox 818976 <sup>(angl.)</sup>](https://bugzil.la/818976)).

### JavaScript

- Les optimisations [Asm.js <sup>(angl.)</sup>](https://asmjs.org/spec/latest/) sont activées, rendant possible la compilation d'applications C / C++ vers un sous-ensemble Javascript pour de meilleures performances.
- La syntaxe ES6 [fonction fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) a été implémentée ([bogue Firefox 846406 <sup>(angl.)</sup>](https://bugzil.la/846406)).
- La nouvelle fonction {{JSxRef("Object.is()")}} a été ajoutée ([bogue Firefox 839979 <sup>(angl.)</sup>](https://bugzil.la/839979)).
- [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) dans les expressions génératrices est maintenant hérité de la portée lexicale englobante ([bogue Firefox 848051 <sup>(angl.)</sup>](https://bugzil.la/848051)).
- Le piège `preventExtensions` des mandataires ES2015 {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}} a été implémenté ([bogue Firefox 789897 <sup>(angl.)</sup>](https://bugzil.la/789897)).

### DOM

- Prise en charge de la propriété `multipart` sur `XMLHttpRequest` et des réponses `multipart/x-mixed-replace` dans `XMLHttpRequest` a été supprimée. Il s'agissait d'une fonctionnalité spécifique à Gecko qui n'a jamais été standardisée. Les [évènements côté serveur](/fr/docs/Web/API/Server-sent_events), les [Web Sockets](/fr/docs/Web/API/WebSockets_API) ou l'inspection de `responseText` à partir des évènements de progression peuvent être utilisés à la place.
- Prise en charge des [notifications web](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API) a été ajoutée ([bogue Firefox 782211 <sup>(angl.)</sup>](https://bugzil.la/782211)).
- La méthode `append` de {{DOMxRef("FormData")}} accepte désormais un troisième paramètre optionnel `filename` ([bogue Firefox 690659 <sup>(angl.)</sup>](https://bugzil.la/690659)).
- `Node.isSupported` a été supprimé ([bogue Firefox 801562 <sup>(angl.)</sup>](https://bugzil.la/801562)).
- `Node.setUserData` et `Node.getUserData` ont été supprimés pour le contenu web et sont obsolètes pour le contenu chrome ([bogue Firefox 842372 <sup>(angl.)</sup>](https://bugzil.la/842372)).
- La propriété {{DOMxRef("Element.attributes")}} a été déplacée depuis {{DOMxRef("Node")}} comme requis par la spécification ([bogue Firefox 844134 <sup>(angl.)</sup>](https://bugzil.la/844134)).
- Le côté système de Mac OS X pour **les évènements de lumière ambiante** a été ajouté.
- Les éléments dans l'espace de noms HTML avec les noms locaux `<bgsound>`, `<multicol>` et `<image>` n'ajoutent plus l'interface {{DOMxRef("HTMLSpanElement")}}. `<bgsound>` ajouté {{DOMxRef("HTMLUnknownElement")}} et `<image>` ajouté {{DOMxRef("HTMLElement")}}.
- La méthode {{DOMxRef("NodeIterator.detach")}} a été modifiée pour ne rien faire ([bogue Firefox 823549 <sup>(angl.)</sup>](https://bugzil.la/823549)).
- L'interface {{DOMxRef("BlobEvent")}} a été ajoutée ([bogue Firefox 834165 <sup>(angl.)</sup>](https://bugzil.la/834165)).
- Les propriétés `HTMLMediaElement.crossorigin` et `HTMLInputElement.inputmode` ont été supprimées pour correspondre à la spécification dans {{DOMxRef("HTMLMediaElement.crossOrigin")}} et `HTMLInputElement.inputMode`, respectivement ([bogue Firefox 847370 <sup>(angl.)</sup>](https://bugzil.la/847370) et [bogue Firefox 850346 <sup>(angl.)</sup>](https://bugzil.la/850346)).
- WebRTC&nbsp;: l'API Media Stream et l'API Peer Connection sont désormais prises en charge par défaut.
- Web Components&nbsp;: la méthode `Document.register()` a été ajoutée ([bogue Firefox 783129 <sup>(angl.)</sup>](https://bugzil.la/783129)).
- La méthode de constructeur `ProgressEvent.initProgressEvent()` a été supprimée. Utilisez le constructeur standard, {{DOMxRef("ProgressEvent.ProgressEvent", "ProgressEvent()")}} pour construire et initialiser {{DOMxRef("ProgressEvent")}} ([bogue Firefox 843489 <sup>(angl.)</sup>](https://bugzil.la/843489)).
- Les données manipulées associées à un évènement {{DOMxRef("Element/cut_event", "cut")}}, {{DOMxRef("Element/copy_event", "copy")}}, ou {{DOMxRef("Element/paste_event", "paste")}} peuvent désormais être accessibles avec la propriété {{DOMxRef("ClipboardEvent.clipboardData")}} ([bogue Firefox 407983 <sup>(angl.)</sup>](https://bugzil.la/407983)).
- L'interface {{DOMxRef("HTMLTimeElement")}} a été implémentée ([bogue Firefox 629801 <sup>(angl.)</sup>](https://bugzil.la/629801)).
- Lorsqu'un constructeur {{DOMxRef("Worker")}} reçoit une URL invalide, il lance désormais une {{DOMxRef("DOMException")}} de type `SECURITY_ERR` ([bogue Firefox 587251 <sup>(angl.)</sup>](https://bugzil.la/587251)).

### CSS

- La prise en charge du [modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) a été activée par défaut ([bogue Firefox 841876 <sup>(angl.)</sup>](https://bugzil.la/841876)).
- Suite à un changement de spécification, la valeur initiale pour {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}} a été rétablie à `0`, même pour les éléments flexibles ([bogue Firefox 848539 <sup>(angl.)</sup>](https://bugzil.la/848539)).
- La prise en charge des conditions CSS ({{CSSxRef("@supports")}} et {{DOMxRef("CSS.supports")}}) a été activée par défaut ([bogue Firefox 855455 <sup>(angl.)</sup>](https://bugzil.la/855455)).
- La prise en charge des propriétés {{CSSxRef("background-clip")}} et {{CSSxRef("background-origin")}} dans le raccourci {{CSSxRef("background")}} a été implémentée ([bogue Firefox 570896 <sup>(angl.)</sup>](https://bugzil.la/570896)).

## Changements pour les développeur·euse·s Mozilla et d'extensions

- Le paramètre `properties` a été supprimé des méthodes `nsITreeView.getCellProperties()` `nsITreeView.getColumnProperties()` et `nsITreeView.getRowProperties()` de l'interface `nsITreeView`. Ces méthodes retournent maintenant une chaîne de caractères de noms de propriétés séparées par des espaces. ([bogue Firefox 407956 <sup>(angl.)</sup>](https://bugzil.la/407956))
- La méthode `inIDOMUtils.getCSSPropertyNames()` a été implémentée et retourne le nom de toutes les [propriétés CSS](/fr/docs/Web/CSS/Reference) supportées.
- Voir [le blog Mozilla <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) pour tous les changements.

### Outils de développement Firefox

- [L'inspecteur de polices <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) montre quelles polices sur votre ordinateur ont été appliquées sur cette page.
- Le mode d'affichage de rendu visuel montre quand et où une page est re-rendue.
- Les outils pour développeur·euse·s peuvent maintenant être affichés à droite d'une fenêtre et plus seulement en bas.
- Certains onglets des outils pour développeur·euse·s sont passés de [XUL à HTML <sup>(angl.)</sup>](https://bugzil.la/875727). Par exemple, l'onglet présentant les règles css fait maintenant partie de chrome://browser/content/devtools/cssruleview\.xhtml, et pas de `cssruleview.xul`. Au lieu d'ajouter une couche pour ajouter des fonctionnalités directement sur ces onglets, vous pouvez ajouter une couche et la lier par script au document xul externe afin d'ajouter des écouteurs d'évènements et de changer ces documents html.
- L'affichage en pile est maintenant affiché en fil d'Ariane en haut de l'onglet et la liste des scripts est maintenant sur la gauche du débogueur.

## Voir aussi

- [Notes de version de Firefox 22 Bêta <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Compatibilité des extensions avec Firefox 22 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)
