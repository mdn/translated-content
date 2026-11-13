---
title: Firefox 15 note de version pour les développeurs
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 15 est sorti le 28 août 2012. Cet article répertorie les principaux changements qui sont utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s Firefox et Gecko ainsi qu'aux développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### HTML

- L'attribut `size` de l'élément {{HTMLElement("font")}} est à présent géré selon la spécification HTML5. Cela signifie que toutes les valeurs entières supérieures à 10 ou inférieure à -10 sont désormais considérées, respectivement, comme équivalentes à 10 et -10.
- La prise en charge des attributs `font-weight` et `point-size` de l'élément `<font>` a été supprimée&nbsp;; ils n'étaient pas standards et Gecko était le seul moteur à les prendre en charge.
- Le [codec Opus <sup>(angl.)</sup>](https://www.opus-codec.org/) est à présent pris en charge pour l'audio dans les conteneurs Ogg pour les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}.
- L'élément {{HTMLElement("source")}} supporte désormais l'attribut `media`.
- Les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} prend désormais en charge l'attribut `played`, qui fournit l'objet {{DOMxRef("TimeRanges")}} listant les plages de temps des médias qui ont été lus jusqu'à présent.

### CSS

- La propriété {{CSSxRef("font-feature-settings")}} a été mise à jour selon la dernière syntaxe&nbsp;: `font-feature-settings: "lnum" 1;`.
- La propriété CSS {{CSSxRef("text-transform")}} a été étendue pour gérer correctement les ligatures Unicode (comme `ﬁ`).
- La propriété CSS {{CSSxRef("word-break")}} a été implémentée.
- La propriété {{CSSxRef("border-image")}} a été mise à jour selon la dernière spécification et n'a plus de préfixe. ([bogue Firefox 713643 <sup>(angl.)</sup>](https://bugzil.la/713643))
- La fonction `skew()` de {{CSSxRef("transform")}} retirée dans Firefox 14, a été restaurée pour la compatibilité avec les sites existants. Toutefois, les auteur·ice·s sont invités à utiliser à la place les fonctions `skewX()` et `skewY()`.

### DOM

- Les méthodes {{DOMxRef("KeyboardEvent.getModifierState()")}} et {{DOMxRef("MouseEvent.getModifierState()")}} de DOM Events Level 3, qui vous permettent de demander l'état des touches de modification, comme `Ctrl` ou `Shift`, ont été implémentées ([bogue Firefox 630811 <sup>(angl.)</sup>](https://bugzil.la/630811) et [bogue Firefox 731878 <sup>(angl.)</sup>](https://bugzil.la/731878)). Mais le comportement est conforme au dernier brouillon de D3E. Donc, certains noms de touches de modification diffèrent de IE ([bogue Firefox 769190 <sup>(angl.)</sup>](https://bugzil.la/769190)).
- Sur les évènements de la souris, l'attribut {{DOMxRef("MouseEvent.buttons")}} pour interroger l'état des boutons de la souris, a été implémenté.
- Sur les évènements du clavier, l'attribut {{DOMxRef("KeyboardEvent.location")}} pour interroger l'emplacement de la clé (standard, à gauche ou à droite de la touche de modification, dans le pavé numérique), a été implémenté ([bogue Firefox 166240 <sup>(angl.)</sup>](https://bugzil.la/166240)).
- Le résultat de `KeyboardEvent.keyCode` a été calculé à partir de meilleures règles qui étaient presque identiques sous Windows/Linux/Mac. Et désormais elles sont disponibles sur certaines configurations de clavier qui n'ont pas la disposition ASCII sur Linux et Mac, comme l'arabe, le cyrillique, thaï et ainsi de suite. Voir [le document des codes pour les touches virtuelles](/fr/docs/Web/API/UI_Events/Keyboard_event_key_values).
- La méthode {{DOMxRef("Range.detach()")}} a été transformée en no-op et sera probablement supprimée dans le futur.
- La méthode `HTMLVideoElement.mozHasAudio()` a été implémentée. Elle indique si une piste audio est associée à un élément vidéo. ([bogue Firefox 480376 <sup>(angl.)</sup>](https://bugzil.la/480376))
- L'API `Performance` a une nouvelle méthode, `now()`, supportant les horloges haute résolution du type de `DOMHighResTimeStamp`. ([bogue Firefox 539095 <sup>(angl.)</sup>](https://bugzil.la/539095)).
- [L'API WebSMS <sup>(angl.)</sup>](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Mobile_Messaging_API) a été mise à jour et supporte à présent l'attribut `read` indiquant si un SMS est lu ou non.
- [L'API FileHandle](https://wiki.mozilla.org/WebAPI/FileHandleAPI) a été implémentée.
- Le constructeur {{DOMxRef("Blob")}} prend désormais `ArrayBufferView` comme un membre du paramètre `blobParts` en plus de `ArrayBuffer`. ([bogue Firefox 752402 <sup>(angl.)</sup>](https://bugzil.la/752402))
- `DeviceLightEvent` défini dans [Ambient Light Events <sup>(angl.)</sup>](https://w3c.github.io/ambient-light/) a été implémenté.
- `DeviceProximityEvent` et `UserProximityEvent` de [Proximity Events <sup>(angl.)</sup>](https://w3c.github.io/proximity/) ont été implémentés.
- La propriété `lastModifiedDate` de {{DOMxRef("File")}} a été implémentée. ([bogue Firefox 673586 <sup>(angl.)</sup>](https://bugzil.la/673586))

### JavaScript

- La prise en charge de l'interface {{JSxRef("DataView")}} a été ajoutée à partir de la spécification des tableaux typés. Cela fournit un accès de bas niveau aux données contenues dans un {{JSxRef("ArrayBuffer")}}.
- La prise en charge de {{JSxRef("Number.isNaN()")}} d'ECMAScript Harmony a été ajoutée. ([bogue Firefox 749818 <sup>(angl.)</sup>](https://bugzil.la/749818), [bogue Firefox 761495 <sup>(angl.)</sup>](https://bugzil.la/761495), [bogue Firefox 761480 <sup>(angl.)</sup>](https://bugzil.la/761480))
- La prise en charge du paramètre default d'ECMAScript Harmony a été ajoutée. ([bogue Firefox 757676 <sup>(angl.)</sup>](https://bugzil.la/757676))
- La prise en charge du paramètre rest d'ECMAScript Harmony a été ajoutée. ([bogue Firefox 574132 <sup>(angl.)</sup>](https://bugzil.la/574132))

### WebGL

- Le support de l'extension [`WEBGL_compressed_texture_s3tc`](/fr/docs/Web/API/WEBGL_compressed_texture_s3tc) a été ajouté. Les textures compressées réduisent la quantité de mémoire nécessaire pour stocker une texture sur le GPU, ce qui permet d'utiliser des textures en plus hautes résolutions ou plus de textures de même résolution.

### MathML

- Les opérateurs mathématiques peuvent désormais utiliser les polices téléchargeables définies avec {{CSSxRef("@font-face")}}. Cela permet à [l'extension MathML-fonts <sup>(angl.)</sup>](https://addons.mozilla.org/fr/firefox/addon/mathml-fonts/) de travailler également avec les opérateurs extensibles.
- L'attribut `selection` de {{MathMLElement("maction")}} est désormais uniquement pris en compte avec l'actiontype `toggle`.
- [L'obsolète et contraignant namedspace <sup>(angl.)</sup>](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) a été supprimé ([bogue Firefox 673759 <sup>(angl.)</sup>](https://bugzil.la/673759)).
- La prise en charge de la syntaxe des valeurs de [Length](/fr/docs/Web/MathML/Reference/Values) et {{MathMLElement("mpadded")}} a été améliorée selon la spécification MathML3.
- Les nouveaux opérateurs MathML pour les maths arabes ont été ajoutés au dictionnaire opérateur ([bogue Firefox 757125 <sup>(angl.)</sup>](https://bugzil.la/757125)).

### SVG

- Prise en charge de l'élément {{SVGElement("view")}} ([bogue Firefox 512525 <sup>(angl.)</sup>](https://bugzil.la/512525)).

### Réseau

- Prise en charge du protocole SPDY v3 a été lancée. Il est désactivé par défaut et peut être activé en définissant la préférence `network.http.spdy.enabled.v3` sur `true`. ([bogue Firefox 737470 <sup>(angl.)</sup>](https://bugzil.la/737470))

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIDOMWindowUtils`
  - : `aModifiers` de `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` et `sendKeyEvent()` supporte toutes les touches de modification qui sont supportées par {{DOMxRef("KeyboardEvent.getModifierState()")}}. Utiliser les valeurs `MODIFIER_*`. Et désormais le 5ème paramètre de `sendKeyEvent()` est changé d'un `boolean` vers un `unsigned long`. Pour la compatibilité ascendante, si l'appelant passe `true` ou `false`, le comportement n'est pas changé. Ce changement permet aux appelants d'indiquer l'emplacement de la touche.
- `nsIBrowserHistory`
  - : La méthode `hidePage()` n'a jamais été implémentée, et a été entièrement supprimée dans cette version. La méthode `addPageWithDetails()` a également été supprimée dans le cadre des travaux pour faire une «&nbsp;API Places&nbsp;» asynchrone&nbsp;; à la place, utilisez plutôt `mozIAsyncHistory.updatePlaces()`. De plus, l'attribut `count` a été retiré, il ne renvoyé pas un comptage réel à certain moment (à la place, il indiqué simplement si les entrées existées). Vous pouvez utiliser à la place `nsINavHistoryService.hasHistoryEntries`.
- `inIDOMUtils`
  - : La méthode `parseStyleSheet()` permet d'ajouter et d'analyser des feuilles de style.
- `nsIINIParserWriter`
  - : La méthode `nsIINIParserWriter.writeFile()` accepte désormais une propriété `flags`. Cela offre actuellement une seule option&nbsp;: vous pouvez maintenant lui indiquer d'écrire le fichier au format UTF-16 au lieu de UTF-8, pour une meilleure compatibilité avec Windows et certains installateurs.

#### Nouvelles interfaces

- `nsISpeculativeConnect`
  - : Fournit un moyen de suggérer la couche réseau que vous allez être susceptibles de demander l'ouverture d'une connexion à un URI donné dans un futur proche. Cela permet à la couche réseau d'entamer le processus, qui a parfois une forte latence, d'ouvrir une nouvelle connexion réseau à l'avance.

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées&nbsp;:

- `nsIGlobalHistory`
