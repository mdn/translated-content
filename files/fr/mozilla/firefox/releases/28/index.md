---
title: Firefox 28 for developers
slug: Mozilla/Firefox/Releases/28
---

{{FirefoxSidebar}}

Firefox 28 est sorti le 18 Mars 2014. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeurs Web, mais aussi pour les développeurs Firefox et Gecko ainsi que pour les développeurs d'add-ons.

## Changements pour les développeurs Web

### Outils de développement

- La propriété {{domxref("console.exception")}} a été ajoutée ([bug Firefox 922214](https://bugzil.la/922214)).
- La propriété {{domxref("console.assert")}} a été ajoutée ([bug Firefox 760193](https://bugzil.la/760193)).
- Gestionnaire d'applications: un nouvel éditeur de manifeste a été ajouté.
- Gestionnaire d'applications: la boîte à outils utilisée pour le débogage des applications est désormais intégrée dans l'interface utilisateur du gestionnaire d'applications.
- Console Web: ajout d'un mode "console partagée" - appuyez sur Echap pour ouvrir rapidement la console dans n'importe quel autre outil.
- Console Web: ajout d'un thème sombre pour la sortie.
- Débogueur: JavaScript minifié pretty-print.
- Débogueur: survolez simplement n'importe quelle variable ou cliquez dessus pour faire apparaître une fenêtre contextuelle qui affiche la valeur actuelle.
- Inspecteur: ajout d'un sélecteur de couleur dans la vue des règles et de diverses info-bulles.
- Browser Toolbox: permet aux développeurs d'add-on et de plates-formes d'utiliser presque tous les outils de développement tout en ciblant le navigateur lui-même.

Plus de détails dans [cet article](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Le support de la [flexbox](/fr/docs/Web/Guide/CSS/Flexible_boxes) multi-lignes a été ajouté ([bug Firefox 939901](https://bugzil.la/939901)).
- Les [styles de compteur](/fr/docs/Web/CSS/list-style-type) Longhand East Asian ont été implémentés ([bug Firefox 934072](https://bugzil.la/934072)).
- La prise en charge expérimentale de la propriété {{cssxref("background-blend-mode")}} a été ajoutée, mais elle est désactivée par défaut ([bug Firefox 841601](https://bugzil.la/841601)).
- La valeur `none` a été ajoutée à {{cssxref("font-variant-ligatures")}} ([bug Firefox 913264](https://bugzil.la/913264)).
- Le support de la pseudo-classe d'action utilisateur {{cssxref(":hover")}} sur les pseudo-éléments a été implémenté ([bug Firefox 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` et `<input type=number>` ont été implémentés, désactivés par défaut.

### JavaScript

- [ECMAScript 6](/fr/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) l'implémentation continue:

  - De nouvelles méthodes `Array` ont été implémentées: {{jsxref("Array.prototype.entries()")}} et {{jsxref("Array.prototype.keys()")}} ([bug Firefox 894658](https://bugzil.la/894658)).

- Un bug provoquant que {{jsxref("Object.getOwnPropertyNames()")}} ne voyait pas les propriétés non résolues des objets {{jsxref("Error")}} a été corrigé ([bug Firefox 724768](https://bugzil.la/724768)).

### Interfaces/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` signale maintenant `maybe`. ([bug Firefox 884275](https://bugzil.la/884275)).
- La méthode {{domxref("DocumentFragment.getElementById()")}} a été implémentée. Par exemple `document.createDocumentFragment().getElementById()` ([bug Firefox 933193](https://bugzil.la/933193)).
- L'attribut {{domxref("KeyboardEvent.repeat")}} a été implémenté ([bug Firefox 600117](https://bugzil.la/600117)).
- Le constructeur {{domxref("File")}}, par exemple `new File(["foo"], "foo.txt")` a été implémenté ([bug Firefox 819900](https://bugzil.la/819900)).
- Le {{domxref("NavigatorPlugins.plugins", "navigator.plugins")}} n'est plus énumérable, pour des raisons de confidentialité ([bug Firefox 757726](https://bugzil.la/757726)).
- Les deux attributs {{domxref("Window.screenX")}} et {{domxref("Window.screenY")}} renvoient désormais des pixels CSS (et plus de pixels de périphérique) ([bug Firefox 943668](https://bugzil.la/943668)).
- Les deux méthodes {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} et {{domxref("CanvasRenderingContext2D.drawCustomFocusRing()")}} ont été implémentées. La préférence `canvas.focusring.enabled` doit être définié sur `true` pour activer les deux ([bug Firefox 540456](https://bugzil.la/540456)).
- L'attribut de contexte `willReadFrequently` pour les contextes de canevas "`2d`" a été implémenté (voir {{domxref("HTMLCanvasElement.getContext()")}}) ([bug Firefox 884226](https://bugzil.la/884226)).
- Les attributs et méthodes suivants de {{domxref("NavigatorID")}} ont été implémentés sur {{domxref("WorkerNavigator")}} pour permettre leur utilisation dans les workers: {{domxref("NavigatorID.appCodeName", "appCodeName")}}, {{domxref("NavigatorID.product", "product")}}, et {{domxref("NavigatorID.taintEnabled", "taintEnabled()")}} ([bug Firefox 925847](https://bugzil.la/925847)).
- Les propriétés {{domxref("NonDocumentTypeChildNode.previousElementSibling" , "previousElementSibling")}} et {domxref("NonDocumentTypeChildNode.nextElementSibling" , "nextElementSibling")}} ont été supprimées de {{domxref("DocumentType")}}, pour des problèmes de compatibilité ([bug Firefox 932501](https://bugzil.la/932501)).

### MathML

- Le support de l'attribut `mathvariant` a été ajouté ([bug Firefox 114365](https://bugzil.la/114365)).

### SVG

_Pas de changement._

### Audio/Vidéo

- Opus dans WebM est désormais supporté ([bug Firefox 887978](https://bugzil.la/887978)).
- Le décodeur vidéo VP9 est désormais pris en charge ([bug Firefox 833023](https://bugzil.la/833023)).

### Réseau

- La prise en charge de `SPDY/2` a été supprimée.

## Changements pour les développeurs d'add-ons et de Mozilla

- L'interface de [DeferredTask.jsm](/fr/docs/Mozilla/JavaScript_code_modules/DeferredTask.jsm) a été modifiée et les méthodes `isPending()`, `start()`, `flush()`, et `cancel()` ont été supprimées ([bug Firefox 940408](https://bugzil.la/940408)).

## Sécurité

- Le CSP n'était pas appliqué dans les iframes en bac à sable. Cela a été corrigé ([bug Firefox 886164](https://bugzil.la/886164)).
- La directive expérimentale `script-nonce` du CSP 1.1 a été implémentée. La préférence `security.csp.experimentalEnabled` doit être définie sur `true` pour activer cette fonctionnalité ([bug Firefox 855326](https://bugzil.la/855326)).

## Voir aussi

### Anciennes versions

{{Firefox_for_developers('27')}}
