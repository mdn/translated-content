---
title: Firefox 28 note de version pour les développeurs
short-title: Firefox 28
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 28 est sorti le 18 Mars 2014. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeur·euse·s Web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### Outils de développement

- La propriété `console.exception` a été ajoutée ([bogue Firefox 922214 <sup>(angl.)</sup>](https://bugzil.la/922214)).
- La propriété {{DOMxRef("console/assert_static", "console.assert()")}} a été ajoutée ([bogue Firefox 760193 <sup>(angl.)</sup>](https://bugzil.la/760193)).
- Gestionnaire d'applications&nbsp;: un nouvel éditeur de manifeste a été ajouté.
- Gestionnaire d'applications&nbsp;: la boîte à outils utilisée pour le débogage des applications est désormais intégrée dans l'interface utilisateur du gestionnaire d'applications.
- Console Web&nbsp;: ajout d'un mode "console partagée" - appuyez sur <kbd>Echap</kbd> pour ouvrir rapidement la console dans n'importe quel autre outil.
- Console Web&nbsp;: ajout d'un thème sombre pour la sortie.
- Débogueur&nbsp;: JavaScript minifié pretty-print.
- Débogueur&nbsp;: survolez simplement n'importe quelle variable ou cliquez dessus pour faire apparaître une fenêtre contextuelle qui affiche la valeur actuelle.
- Inspecteur&nbsp;: ajout d'un sélecteur de couleur dans la vue des règles et de diverses info-bulles.
- Browser Toolbox&nbsp;: permet aux développeur·euse·s d'extensions et de plates-formes d'utiliser presque tous les outils de développement tout en ciblant le navigateur lui-même.

Plus de détails dans [cet article <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- La prise en charge des [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) multi-lignes a été ajoutée ([bogue Firefox 939901 <sup>(angl.)</sup>](https://bugzil.la/939901)).
- Les [styles de compteur <sup>(angl.)</sup>](/fr/docs/Web/CSS/Reference/Properties/list-style-type) Longhand East Asian ont été implémentés ([bogue Firefox 934072 <sup>(angl.)</sup>](https://bugzil.la/934072)).
- La prise en charge expérimentale de la propriété {{CSSxRef("background-blend-mode")}} a été ajoutée, mais elle est désactivée par défaut ([bogue Firefox 841601 <sup>(angl.)</sup>](https://bugzil.la/841601)).
- La valeur `none` a été ajoutée à {{CSSxRef("font-variant-ligatures")}} ([bogue Firefox 913264 <sup>(angl.)</sup>](https://bugzil.la/913264)).
- Le support de la pseudo-classe d'action utilisateur·ice {{CSSxRef(":hover")}} sur les pseudo-éléments a été implémenté ([bogue Firefox 922669 <sup>(angl.)</sup>](https://bugzil.la/922669)).

### HTML

- `<input type=color>` et `<input type=number>` ont été implémentés, désactivés par défaut.

### JavaScript

- L'implémentation de ECMAScript 2015 continue&nbsp;:
  - De nouvelles méthodes `Array` ont été implémentées: {{JSxRef("Array.prototype.entries()")}} et {{JSxRef("Array.prototype.keys()")}} ([bogue Firefox 894658 <sup>(angl.)</sup>](https://bugzil.la/894658)).

- Un bogue provoquant que {{JSxRef("Object.getOwnPropertyNames()")}} ne voyait pas les propriétés non résolues des objets {{JSxRef("Error")}} a été corrigé ([bogue Firefox 724768 <sup>(angl.)</sup>](https://bugzil.la/724768)).

### Interfaces/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` signale maintenant `maybe`. ([bogue Firefox 884275 <sup>(angl.)</sup>](https://bugzil.la/884275)).
- La méthode {{DOMxRef("DocumentFragment.getElementById()")}} a été implémentée. Par exemple `document.createDocumentFragment().getElementById()` ([bogue Firefox 933193 <sup>(angl.)</sup>](https://bugzil.la/933193)).
- L'attribut {{DOMxRef("KeyboardEvent.repeat")}} a été implémenté ([bogue Firefox 600117 <sup>(angl.)</sup>](https://bugzil.la/600117)).
- Le constructeur {{DOMxRef("File")}}, par exemple `new File(["foo"], "foo.txt")` a été implémenté ([bogue Firefox 819900 <sup>(angl.)</sup>](https://bugzil.la/819900)).
- Le {{DOMxRef("Navigator.plugins")}} n'est plus énumérable, pour des raisons de confidentialité ([bogue Firefox 757726 <sup>(angl.)</sup>](https://bugzil.la/757726)).
- Les deux attributs {{DOMxRef("Window.screenX")}} et {{DOMxRef("Window.screenY")}} renvoient désormais des pixels CSS (et plus de pixels de périphérique) ([bogue Firefox 943668 <sup>(angl.)</sup>](https://bugzil.la/943668)).
- Les deux méthodes `CanvasRenderingContext2D.drawSystemFocusRing()` et {{DOMxRef("CanvasRenderingContext2D.drawCustomFocusRing()")}} ont été implémentées. La préférence `canvas.focusring.enabled` doit être définie sur `true` pour activer les deux ([bogue Firefox 540456 <sup>(angl.)</sup>](https://bugzil.la/540456)).
- L'attribut de contexte `willReadFrequently` pour les contextes de canevas 2D a été implémenté (voir {{DOMxRef("HTMLCanvasElement.getContext()")}}) ([bogue Firefox 884226 <sup>(angl.)</sup>](https://bugzil.la/884226)).
- Les attributs et méthodes suivants de `NavigatorID` ont été implémentés sur {{DOMxRef("WorkerNavigator")}} pour permettre leur utilisation dans les workers: {{DOMxRef("Navigator.appCodeName")}}, {{DOMxRef("Navigator.product")}}, et {{DOMxRef("Navigator.taintEnabled()")}} ([bogue Firefox 925847 <sup>(angl.)</sup>](https://bugzil.la/925847)).
- Les propriétés {{DOMxRef("NonDocumentTypeChildNode.previousElementSibling" , "previousElementSibling")}} et {{DOMxRef("NonDocumentTypeChildNode.nextElementSibling" , "nextElementSibling")}} ont été supprimées de {{DOMxRef("DocumentType")}}, pour des problèmes de compatibilité ([bogue Firefox 932501 <sup>(angl.)</sup>](https://bugzil.la/932501)).

### MathML

- Le support de l'attribut `mathvariant` a été ajouté ([bogue Firefox 114365 <sup>(angl.)</sup>](https://bugzil.la/114365)).

### SVG

_Pas de changement._

### Audio/Vidéo

- Opus dans WebM est désormais supporté ([bogue Firefox 887978 <sup>(angl.)</sup>](https://bugzil.la/887978)).
- Le décodeur vidéo VP9 est désormais pris en charge ([bogue Firefox 833023 <sup>(angl.)</sup>](https://bugzil.la/833023)).

### Réseau

- La prise en charge de `SPDY/2` a été supprimée.

## Changements pour les développeur·euse·s de Mozilla et d'extensions

- L'interface de `DeferredTask.jsm` a été modifiée et les méthodes `isPending()`, `start()`, `flush()`, et `cancel()` ont été supprimées ([bogue Firefox 940408 <sup>(angl.)</sup>](https://bugzil.la/940408)).

## Sécurité

- Le CSP n'était pas appliqué dans les iframes en bac à sable. Cela a été corrigé ([bogue Firefox 886164 <sup>(angl.)</sup>](https://bugzil.la/886164)).
- La directive expérimentale `script-nonce` du CSP 1.1 a été implémentée. La préférence `security.csp.experimentalEnabled` doit être définie sur `true` pour activer cette fonctionnalité ([bogue Firefox 855326 <sup>(angl.)</sup>](https://bugzil.la/855326)).
