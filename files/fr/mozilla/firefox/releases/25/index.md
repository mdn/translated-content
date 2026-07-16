---
title: Firefox 25 note de version pour les développeurs
short-title: Firefox 25
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 1da52a7f6bb19443de543ed6dfd8983602d501c7
---

## Changements pour les développeur·euse·s Web

### Nouveau dans les Firefox DevTools

- L'inspecteur propose désormais la saisie semi-automatique des noms et valeurs CSS.
- Le débogueur vous permet désormais de créer des fichiers de script «&nbsp;boîte noire&nbsp;», pour empêcher les points d'arrêt de s'arrêter dans le code de la bibliothèque que vous n'êtes pas intéressé par le débogage.
- Le profileur a désormais la possibilité d'enregistrer et d'importer les résultats du profilage. «&nbsp;Afficher les données de la plateforme Gecko&nbsp;» est désormais une option dans les options des outils de développement Firefox.
- Le panneau Réseau dispose d'un menu contextuel accessible par clic droit, avec des commandes de copie et de renvoi d'URL.
- De nombreux changements sous le capot peuvent rendre nécessaire une réécriture pour les addons qui modifient les DevTools.

### CSS

- La prise en charge du mot clé `local` en tant que valeur de la propriété CSS {{CSSxRef("background-attachment")}} a été ajoutée ([bogue Firefox 483446 <sup>(angl.)</sup>](https://bugzil.la/483446)).
- La prise en charge d'une requête multimédia non standard de Mozilla uniquement pour déterminer la version du système d'exploitation a été ajoutée: `-moz-os-version` ([bogue Firefox 810399 <sup>(angl.)</sup>](https://bugzil.la/810399)). La propriété n'est actuellement implémentée que sur Windows.
- La propriété CSS `-moz-osx-font-smoothing` a été ajoutée ([bogue Firefox 857142 <sup>(angl.)</sup>](https://bugzil.la/857142)).
- Notre support expérimental pour {{CSSxRef("filter")}} prend désormais en charge la notation fonctionnelle `hue-rotate()` ([bogue Firefox 897392 <sup>(angl.)</sup>](https://bugzil.la/897392)). Il est toujours désactivé par défaut.
- `page-break-inside`&nbsp;: `avoid` fonctionne désormais avec la hauteur d'un bloc ([bogue Firefox 883676 <sup>(angl.)</sup>](https://bugzil.la/883676)).

### HTML

- L'attribut [`srcdoc`](/fr/docs/Web/HTML/Reference/Elements/iframe#srcdoc), permettant la spécification en ligne du contenu d'un {{HTMLElement("iframe")}}, est maintenant pris en charge ([bogue Firefox 802895 <sup>(angl.)</sup>](https://bugzil.la/802895)).
- Lorsqu'elle est utilisée avec un type `"image/jpeg"`, la méthode `HTMLCanvasElement.toBlob` accepte désormais un troisième attribut définissant la qualité de l'image ([bogue Firefox 891884 <sup>(angl.)</sup>](https://bugzil.la/891884)).

### JavaScript

L'implémentation de EcmaScript 2015 continue&nbsp;!

- La méthode {{JSxRef("Array.of()")}} est maintenant implémentée sur {{JSxRef("Array")}} ([bogue Firefox 866849 <sup>(angl.)</sup>](https://bugzil.la/866849)).
- Le support des méthodes {{JSxRef("Array.prototype.find()")}} et {{JSxRef("Array.prototype.findIndex()")}} a été ajouté ([bogue Firefox 885553 <sup>(angl.)</sup>](https://bugzil.la/885553)).
- Les méthodes {{JSxRef("Global_Objects/Number/parseInt", "Number.parseInt()")}} et {{JSxRef("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} ont été implémentées ([bogue Firefox 886949 <sup>(angl.)</sup>](https://bugzil.la/886949)).
- Les méthodes {{JSxRef("Map.prototype.forEach()")}} et {{JSxRef("Set.prototype.forEach()")}} sont maintenant implémentées ([bogue Firefox 866847 <sup>(angl.)</sup>](https://bugzil.la/866847)).
- De nouvelles méthodes mathématiques ont été implémentées sur {{JSxRef("Math")}}&nbsp;: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` et `Math.cbrt()` ([bogue Firefox 717379 <sup>(angl.)</sup>](https://bugzil.la/717379)).
- La prise en charge des littéraux d'entiers binaires et octaux a été ajoutée: `0b10101010`, `0B1010`, `0o777`, `0O237` sont désormais valides ([bogue Firefox 894026 <sup>(angl.)</sup>](https://bugzil.la/894026)).
- La constante epsilon de la machine, c'est-à-dire le plus petit nombre représentable qui, ajouté à 1, ne donne pas 1, est désormais disponible sous la forme {{JSxRef("Global_Objects/Number/EPSILON", "Number.EPSILON")}} ([bogue Firefox 885798 <sup>(angl.)</sup>](https://bugzil.la/885798)).
- Les [tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ont été mis à jour pour [ne plus rechercher dans la chaîne de prototypes les propriétés indexées](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#accès_aux_propriétés) ([bogue Firefox 829896 <sup>(angl.)</sup>](https://bugzil.la/829896)).

### Interfaces/APIs/DOM

- [L'API Web Audio](/fr/docs/Web/API/Web_Audio_API) est désormais prise en charge. Une implémentation incomplète était auparavant disponible derrière une préférence ([bogue Firefox 779297 <sup>(angl.)</sup>](https://bugzil.la/779297)).
- Certaines clés liées à IME sous Windows sont prises en charge par `KeyboardEvent.key` ([bogue Firefox 865565 <sup>(angl.)</sup>](https://bugzil.la/865565)), voir [le tableau des noms de clé](/fr/docs/Web/API/UI_Events/Keyboard_event_key_values) pour plus de détails.
- Firefox pour Metro distribue désormais les évènements clés de la même manière que la version bureau ([bogue Firefox 843236 <sup>(angl.)</sup>](https://bugzil.la/843236)).
- L'évènement `keypress` n'est plus distribué si `preventDefault()` de l'évènement `keydown` précédent est appelé ([bogue Firefox 501496 <sup>(angl.)</sup>](https://bugzil.la/501496)).
- L'interface `Future` a été renommée `Promise` ([bogue Firefox 884279 <sup>(angl.)</sup>](https://bugzil.la/884279)).
- La propriété `srcDoc` sur l'interface {{DOMxRef("HTMLIFrameElement")}}, permettant la spécification en ligne du contenu d'un {{HTMLElement("iframe")}}, est désormais prise en charge ([bogue Firefox 802895 <sup>(angl.)</sup>](https://bugzil.la/802895)).
- La méthode `createTBody()` sur l'interface {{DOMxRef("HTMLTableElement")}}, permettant d'obtenir son {{HTMLElement("tbody")}}, est désormais prise en charge ([bogue Firefox 813034 <sup>(angl.)</sup>](https://bugzil.la/813034)).
- Le paramètre `toStart` de la méthode {{DOMxRef("Range.collapse()")}} est maintenant facultatif et par défaut à `false`, comme défini dans la spécification ([bogue Firefox 891340 <sup>(angl.)</sup>](https://bugzil.la/891340)).
- La prise en charge de l'interface `ParentNode` sur {{DOMxRef("Document")}} et {{DOMxRef("DocumentFragment")}} a été ajoutée ([bogue Firefox 895974 <sup>(angl.)</sup>](https://bugzil.la/895974)).
- Le `previousElementSibling` et le `nextElementSibling` ont été déplacés vers `ChildNode` leur permettant d'être appelés non seulement sur un objet {{DOMxRef("Element")}} mais aussi sur un {{DOMxRef("CharacterData")}} ou {{DOMxRef("DocumentType")}} ([bogue Firefox 895974 <sup>(angl.)</sup>](https://bugzil.la/895974)).
- La propriété `navigator.geolocation` a été mise à jour pour correspondre à la spécification. Il ne retourne jamais `null`. Lorsque la préférence `geo.enabled` est définie sur `false`, elle retourne désormais `undefined` ([bogue Firefox 884921 <sup>(angl.)</sup>](https://bugzil.la/884921)).
- L'attribut `videoPlaybackQuality` sur l'interface {{DOMxRef("HTMLVideoElement")}} a été remplacé par la méthode `getVideoPlaybackQuality` ([bogue Firefox 889205 <sup>(angl.)</sup>](https://bugzil.la/889205)).
- L'interface non standard de `GlobalObjectConstructor` a été supprimée ([bogue Firefox 898136 <sup>(angl.)</sup>](https://bugzil.la/898136)). Cette interface a été utilisée pour ajouter des arguments aux constructeurs d'APIs que les [extensions](/fr/docs/Mozilla/Add-ons) de Firefox exposaient sur l'objet global. Cette capacité a été supprimée&nbsp;; notez qu'à l'heure actuelle, il n'y a pas de remplacement pour cette fonctionnalité.

### MathML

_Pas de changement._

### SVG

_Pas de changement._
