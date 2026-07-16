---
title: Firefox 20 note de version pour les développeurs
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 20 est sorti le 2 avril 2013. Cette page résume les principaux changements dans Firefox 20 qui sont utiles aux développeur·euse·s.

## Changements pour les développeur·euse·s Web

### HTML

- Prise en charge de l'attribut [`download`](/fr/docs/Web/HTML/Reference/Elements/a#download) sur les éléments {{HTMLElement("a")}} et {{HTMLElement("area")}} a été ajouté ([bogue Firefox 676619 <sup>(angl.)</sup>](https://bugzil.la/676619)).
- La valeur `auto` pour [l'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) a été implémenté ([bogue Firefox 548206 <sup>(angl.)</sup>](https://bugzil.la/548206)).
- [L'attribut global](/fr/docs/Web/HTML/Reference/Global_attributes) `contextmenu` fonctionne désormais sur Firefox pour Android ([bogue Firefox 736321 <sup>(angl.)</sup>](https://bugzil.la/736321)).

### JavaScript

- Prise en charge de la méthode `WeakMap.prototype.clear()`, récemment ajoutée au brouillon d'Harmony (EcmaScript 6), a été ajouté ([bogue Firefox 814562 <sup>(angl.)</sup>](https://bugzil.la/814562)).
- Prise en charge de la méthode {{JSxRef("Math.imul()")}}, une fonction de multiplication 32 bits de type C. Bien qu'elle soit proposée pour Harmony (EcmaScript 6), elle n'a pas encore été acceptée et reste non standard ([bogue Firefox 808148 <sup>(angl.)</sup>](https://bugzil.la/808148)).
- Les applications Web utilisant le déplacement de texte grâce à Kinetic 3.x fonctionnent, même en utilisant le backend Cairo Canvas. ([bogue Firefox 835064 <sup>(angl.)</sup>](https://bugzil.la/835064))
- L'instruction [`for each...in`](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#instructions_2) a été dépréciée et ne doit plus être utilisée. Pensez à utiliser la nouvelle instruction {{JSxRef("Statements/for...of", "for...of")}} ([bogue Firefox 804834 <sup>(angl.)</sup>](https://bugzil.la/804834)).
- Prise en charge de {{JSxRef("Map.prototype.keys()")}}, {{JSxRef("Map.prototype.values()")}}, et {{JSxRef("Map.prototype.entries()")}} a été ajoutée ([bogue Firefox 817368 <sup>(angl.)</sup>](https://bugzil.la/817368)).

### CSS

- [Les boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) sont désormais disponibles par défaut dans les versions préliminaires (hors Bêta). Elles peuvent être activées dans les versions finales et bêta en définissant la préférence `layout.css.flexbox.enabled` dans about:config à `true`.
- La propriété {{CSSxRef("mask-type")}} a été ajoutée ([bogue Firefox 793617 <sup>(angl.)</sup>](https://bugzil.la/793617)).
- Prise en charge expérimentale de la pseudo-classe {{CSSxRef(":scope")}} a été ajoutée. Activé par défaut dans Aurora et Nightly, il peut être activé dans les versions finales et bêta en définissant la préférence `layout.css.scope-pseudo.enabled` dans about:config à `true` ([bogue Firefox 648722 <sup>(angl.)</sup>](https://bugzil.la/648722)).

### DOM

- {{DOMxRef("HTMLMediaElement")}} supporte désormais `playbackRate` (en lecture et écriture), avec correction de hauteur. La correction de hauteur peut être contrôlé à l'aide de la propriété `mozPreservesPitch` ([bogue Firefox 495040 <sup>(angl.)</sup>](https://bugzil.la/495040)).
- CSSOM&nbsp;: Le support des nouvelles interfaces {{DOMxRef("CSSGroupingRule")}} et {{DOMxRef("CSSConditionRule")}} a été ajouté ([bogue Firefox 814907 <sup>(angl.)</sup>](https://bugzil.la/814907)).
- CSSOM&nbsp;: Sur la constante {{DOMxRef("CSSRule")}}, `CSSRule.MOZ_KEYFRAME_RULE` et `CSSRule.MOZ_KEYFRAMES_RULE` ont été dé-préfixés pour `CSSRule.KEYFRAME_RULE` et `CSSRule.KEYFRAMES_RULE`. La version préfixée est temporairement maintenue, pour aider les sites web à la transition de leur code ([bogue Firefox 816431 <sup>(angl.)</sup>](https://bugzil.la/816431)).
- CSSOM&nbsp;: Il est désormais possible de définir la valeur de `conditionText` pour {{DOMxRef("CSSMediaRule")}} ([bogue Firefox 815021 <sup>(angl.)</sup>](https://bugzil.la/815021)).
- Les méthodes `parseFromStream` et `parseFromBuffer` de {{DOMxRef("DOMParser")}} ne sont plus disponibles à partir de contenu web ([bogue Firefox 816410 <sup>(angl.)</sup>](https://bugzil.la/816410)).
- La méthode `serializeToStream` de {{DOMxRef("XMLSerializer")}} n'est plus disponible à partir de contenu web ([bogue Firefox 816410 <sup>(angl.)</sup>](https://bugzil.la/816410)).
- Les interfaces {{DOMxRef("TextDecoder")}} et {{DOMxRef("TextEncoder")}} sont désormais disponibles dans Workers ([bogue Firefox 795542 <sup>(angl.)</sup>](https://bugzil.la/795542)).
- Le support de la méthode `CSS.supports()` a été ajouté ([bogue Firefox 779917 <sup>(angl.)</sup>](https://bugzil.la/779917)).
- Le support pour UndoManager a été ajouté ([bogue Firefox 617532 <sup>(angl.)</sup>](https://bugzil.la/617532)).
- L'interface {{DOMxRef("CaretPosition")}} a été implémentée dans la méthode CSSOM {{DOMxRef("document.caretPositionFromPoint()")}}.
- L'argument index des méthodes {{DOMxRef("HTMLTableRowElement.insertCell()")}} et {{DOMxRef("HTMLTableElement.insertRow()")}} est désormais optionnel conformément à la spécification HTML.
- {{DOMxRef("Navigator.getUserMedia")}}, toujours préfixé en tant que `Navigator.mozGetUserMedia`, est maintenant activé par défaut.
- Le troisième argument optionnel `transfer` de {{DOMxRef("Window.postMessage")}} est désormais pris en charge. Il permet de transférer une séquence [d'objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) vers la destination ([bogue Firefox 822094 <sup>(angl.)</sup>](https://bugzil.la/822094)).
- La méthode non standard {{DOMxRef("Window.sizeToContent()")}} limite désormais la taille minimale&nbsp;: la fenêtre ne peut plus être forcée à des tailles trop petites, empêchant l'utilisateur·ice d'interagir avec elle ([bogue Firefox 764240 <sup>(angl.)</sup>](https://bugzil.la/764240)).
- Les modes de fusion, tels que `overlay`, `color-burn`, `hue`, etc., ont été ajoutés à la propriété {{DOMxRef("CanvasRenderingContext2D.globalCompositeOperation")}} de Canvas ([bogue Firefox 748433 <sup>(angl.)</sup>](https://bugzil.la/748433)).
- La version préfixée de {{DOMxRef("Window.indexedDB")}} — `window.mozIndexedDB` — a été réintroduite dans Gecko, afin que le mauvais code préfixé inter-navigateurs (comme `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) ne casse pas dans Firefox. Une meilleure approche est `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (voir [bogue Firefox 770844 <sup>(angl.)</sup>](https://bugzil.la/770844)).

### SVG

- L'implémentation des propriétés `contentScriptType` et `contentStyleType` a été supprimée de {{DOMxRef("SVGSVGElement")}} avec la suppression de SVG2 ([bogue Firefox 819731 <sup>(angl.)</sup>](https://bugzil.la/819731)).

### MathML

- Pour aider les auteur·ice·s MathML dans le débogage des erreurs «&nbsp;<i lang="en">invalid-markup</i>&nbsp;» dans leurs documents, les erreurs d'analyse MathML (comme avoir trop / pas assez d'éléments enfants) et les avertissements au sujet des attributs obsolètes ou fausses valeurs d'attributs sont maintenant signalées à la console d'erreur.
- L'attribut `scriptminsize` accepte désormais des valeurs sans unité et les valeurs en pourcent. Elles sont interprétées comme des multiples de la valeur par défaut (`8pt`).
- Des valeurs sans unité sont désormais permis pour les attributs `mathsize` et `fontsize`, ils multiplient la valeur par défaut.

## Changements pour les développeur·euse·s Mozilla et d'extensions

- ECMAScript pour XML (E4X) est désormais complètement désactivé pour tous les scripts chrome et contenu. Il était auparavant désactivé pour le contenu dans Firefox 17 et a été entièrement supprimé pour Firefox 21. Utilisez DOMParser/DOMSerializer ou un algorithme JXON non natif à la place.
- L'interface `nsIDOMParserJS` n'existe plus ([bogue Firefox 816410 <sup>(angl.)</sup>](https://bugzil.la/816410)). Voir `nsIDOMParser` pour des alternatives.
- Préférences de contenu&nbsp;: L'interface `nsIContentPrefService` est désormais obsolète et l'API asynchrone de stockage `nsIContentPrefService2` a été implémentée.
- Les interfaces `nsIProfile` et `nsIProfileChangeStatus` ont été supprimées, ainsi que d'autres codes prenant en charge l'ancien système de gestion de profil de Firefox. Vous ne les utilisiez probablement pas, mais si c'était le cas, vous devez cesser de le faire. Cela empêche les parties obsolètes du système de gestion de profil de bloquer le processus de fermeture.
- L'interface `nsIEventSource` n'existe plus ([bogue Firefox 819639 <sup>(angl.)</sup>](https://bugzil.la/819639)).

## Voir aussi

- [Notes de version de Firefox 20 <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Site de compatibilité pour Firefox 20 <sup>(angl.)</sup>](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
