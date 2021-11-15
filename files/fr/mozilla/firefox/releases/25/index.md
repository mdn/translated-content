---
title: Firefox 25 for developers
slug: Mozilla/Firefox/Releases/25
tags:
  - Beginner
  - Firefox
  - Firefox 25
  - Guide
  - TopicStub
translation_of: Mozilla/Firefox/Releases/25
---
{{FirefoxSidebar}}

## Changements pour les développeurs Web

### Nouveau dans Firefox DevTools

- L'inspecteur propose désormais la saisie semi-automatique des noms et valeurs CSS.
- Le débogueur vous permet désormais de créer des fichiers de script "boîte noire", pour empêcher les points d'arrêt de s'arrêter dans le code de la bibliothèque que vous n'êtes pas intéressé par le débogage.
- Le profileur a désormais la possibilité d'enregistrer et d'importer les résultats du profilage. "Afficher les données de la plateforme Gecko" est désormais une option dans les options des outils de développement Firefox.
- Le panneau Réseau dispose d'un menu contextuel accessible par clic droit, avec des commandes de copie et de renvoi d'URL.
- De nombreux changements sous le capot peuvent rendre nécessaire une réécriture pour les addons qui modifient les DevTools.

### CSS

- La prise en charge du mot clé `local` en tant que valeur de la propriété CSS {{cssxref("background-attachment")}} a été ajoutée ({{bug("483446")}}).
- La prise en charge d'une requête multimédia non standard de Mozilla uniquement pour déterminer la version du système d'exploitation a été ajoutée: [`-moz-os-version`](/fr/docs/Web/Guide/CSS/Media_queries#-moz-os-version) ({{bug("810399")}}). La propriété n'est actuellement implémentée que sur Windows.
- La propriété CSS {{cssxref("-moz-osx-font-smoothing")}} a été ajoutée ({{bug("857142")}}).
- Notre support expérimental pour {{cssxref("filter")}} prend désormais en charge la notation fonctionnelle `hue-rotate()` ({{bug(897392)}}). Il est toujours désactivé par défaut.
- ` page-break-inside``: avoid ` travaille maintenant avec la hauteur d'un bloc ({{bug(883676)}}).

### HTML

- L'attribut {{htmlattrxref("srcdoc", "iframe")}}, permettant la spécification en ligne du contenu d'un {{HTMLElement("iframe")}},  est maintenant pris en charge ({{bug("802895")}}).
- Lorsqu'elle est utilisée avec un type `"image/jpeg"`, la méthode `HTMLCanvasElement.toBlob` accepte désormais un troisième attribut définissant la qualité de l'image ({{bug("891884")}}).

### JavaScript

L'implémentation d'[EcmaScript 6](/fr/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) continue!

- La méthode {{jsxref("Array.of()")}} est maintenant implémentée sur  [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) ({{bug("866849")}}).
- Le support des méthodes {{jsxref("Array.prototype.find()")}} et {{jsxref("Array.prototype.findIndex()")}} a été ajouté ({{bug("885553")}}).
- Les méthodes {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} et {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} ont été implémentées ({{bug("886949")}}).
- Les méthodes {{jsxref("Map.prototype.forEach()")}} et {{jsxref("Set.prototype.forEach()")}} sont maintenant implémentées ({{bug("866847")}}).
- De nouvelles méthodes mathématiques ont été implémentées sur [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math): `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` et `Math.cbrt()` ({{bug("717379")}}).
- La prise en charge des littéraux d'entiers binaires et octaux a été ajoutée: `0b10101010`, `0B1010`, `0o777`, `0O237` sont désormais valides ({{bug("894026")}}).
- La constante epsilon de la machine, c'est-à-dire le plus petit nombre représentable qui ajouté à 1 ne sera pas 1, est désormais disponible sous la forme {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} ({{bug("885798")}}).
- Les [tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ont été mis à jour pour [ne plus rechercher dans la chaîne de prototypes les propriétés indexées](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Indexed_property_access) ({{bug("829896")}}).

### Interfaces/APIs/DOM

- L'[API Web Audio](/fr/docs/Web_Audio_API) est désormais prise en charge. Une implémentation incomplète était auparavant disponible derrière une péférence ({{bug("779297")}}).
- Certaines clés liées à IME sous Windows sont prises en charge par `KeyboardEvent.key` ({{bug("865565")}}), voir [le tableau des noms de clé](/fr/docs/Web/API/KeyboardEvent#keyname_table_win) pour plus de détails.
- Firefox pour Metro distribue désormais les événements clés de la même manière que la version bureau ({{bug("843236")}}).
- L'événement `keypress` n'est plus distribué si `preventDefault()` de l'événement `keydown` précédnt est appelé ({{bug("501496")}}), voir [le document de l'événement `keydown`](</fr/docs/Web/Reference/Events/keydown#preventDefault()_of_keydown_event>) pour plus de détails.
- L'interface `Future` a été renommée `Promise` ({{bug("884279")}}).
- La propriété `srcDoc` sur l'interface {{domxref("HTMLIFrameElement")}}, permettant la spécification en ligne du contenu d'un {{HTMLElement("iframe")}}, est désormais prise en charge ({{bug("802895")}}).
- La méthode `createTBody()` sur l'interface {{domxref("HTMLTableElement")}}, permettant d'obtenir son {{HTMLElement("tbody")}}, est désormais supportée ({{bug("813034")}}).
- Le paramètre `toStart` de la méthode {{domxref("Range.collapse()")}} est maintenant facultatif et par défaut à `false`, comme défini dans la spécification ({{bug("891340")}}).
- La prise en charge de l'interface {{domxref("ParentNode")}} sur {{domxref("Document")}} et {{domxref("DocumentFragment")}} a été ajoutée ({{bug("895974")}}).
- Le `previousElementSibling` et le `nextElementSibling` ont été déplacés vers {{domxref("ChildNode")}} leur permettant d'être appelés non seulement sur un objet {{domxref("Element")}} mais aussi sur un {{domxref("CharacterData")}} ou {{domxref("DocumentType")}}  ({{bug("895974")}}).
- La propriété `navigator.geolocation` a été mise à jour pour correspondre à la spécification. Il ne renvoie jamais `null`. Lorsque la préférence `geo.enabled` est définie sur `false`, elle renvoie désormais `undefined` ({{bug("884921")}}).
- L'attribut `videoPlaybackQuality` sur l'interface {{domxref("HTMLVideoElement")}} a été remplacé par la méthode `getVideoPlaybackQuality` ({{bug(889205)}}).
- L'interface non standard de `GlobalObjectConstructor` a été supprimée ({{bug(898136)}}). Cette interface a été utilisée pour ajouter des arguments aux constructeursd'APIs que les [add-ons](/fr/Add-ons) de Firefox exposaient sur l'objet global. Cette capacité a été supprimée; Notez qu'à l'heure actuelle, il n'y a pas de remplacement pour cette fonctionnalité.

### MathML

_Pas de changement._

### SVG

_Pas de changement._

## Voir aussi

### Versions plus anciennes

{{Firefox_for_developers('24')}}
