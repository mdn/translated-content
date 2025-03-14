---
title: Firefox 15 pour les développeurs
slug: Mozilla/Firefox/Releases/15
---

{{FirefoxSidebar}}

Firefox 15, basé sur Gecko 15.0, est sorti le 28 août 2012. Cette page résume les principaux changements dans Firefox 15 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'attribut `size` de l'élément {{HTMLElement("font")}} est à présent géré selon la spécification HTML5. Cela signifie que toutes les valeurs entières supérieures à 10 ou inférieure à -10 sont désormais considérées, respectivement, comme équivalentes à 10 et -10.
- Le support pour les attributs `font-weight` et `point-size` de l'élément `<font>` a été supprimé ; ils n'étaient pas standards et Gecko était le seul moteur qui les a supportés.
- Le [codec Opus](http://www.opus-codec.org/) est à présent supporté pour l'audio dans les conteneurs Ogg pour les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}.
- L'élément {{HTMLElement("source")}} supporte désormais l'attribut `media`.
- Les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} supportent désormais l'attribut `played`, qui fournit l'objet {{domxref("TimeRanges")}} listant les plages de temps des médias qui ont été lus jusqu'à présent.

### CSS

- La propriété {{cssxref("font-feature-settings")}} a été mise à jour selon la dernière syntaxe : `font-feature-settings: "lnum" 1;`.
- La propriété CSS {{cssxref("text-transform")}} a été étendue pour gérer correctement les ligatures Unicode (comme `ﬁ`).
- La propriété CSS {{cssxref("word-break")}} a été impémentée.
- La propriété {{cssxref("border-image")}} a été mise à jour selon la dernière spécification et n'a plus de préfixe. ([bug Firefox 713643](https://bugzil.la/713643))
- La fonction `skew()` de {{cssxref("transform")}} retirée dans Firefox 14, a été restaurée pour la compatibilitée avec les sites existants. Toutefois, les auteurs sont invités à utiliser à la place les fonctions `skewX()` et `skewY()`.

### DOM

- Les méthodes [`KeyboardEvent.getModifierState()`](/fr/docs/Web/API/KeyboardEvent/getModifierState) et [`MouseEvent.getModifierState()`](/fr/docs/Web/API/MouseEvent/getModifierState) de DOM Events Level 3, qui vous permettent de demander l'état des touches de modification, comme `Ctrl` ou `Shift`, ont été implémentées ([bug Firefox 630811](https://bugzil.la/630811) et [bug Firefox 731878](https://bugzil.la/731878)). Mais le comportement est conforme au dernier brouillon de D3E. Donc, certains noms de touches de modification diffèrent de IE ([bug Firefox 769190](https://bugzil.la/769190)).
- Sur les évènements de la souris, l'attribut [`MouseEvent.buttons`](/fr/docs/Web/API/MouseEvent) pour interroger l'état des boutons de la souris, a été implémenté.
- Sur les évènements du clavier, l'attribut [KeyboardEvent.location](/fr/docs/Web/API/KeyboardEvent#attributes_location) pour interroger l'emplacement de la clé (standard, à gauche ou à droite de la touche de modification, dans le pavé numérique), a été implémenté ([bug Firefox 166240](https://bugzil.la/166240)).
- Le résultat de KeyboardEvent.keyCode a été calculé à partir de meilleures règles qui étaient presque identiques sous Windows/Linux/Mac. Et désormais elles sont disponibles sur certaines configurations de clavier qui n'ont pas la disposition ASCII sur Linux et Mac, comme l'arabe, le cyrillique, thaï et ainsi de suite. Voir [le document des codes pour les touches virtuelles](/fr/docs/Web/API/KeyboardEvent#virtual_key_codes).
- La méthode [`range.detach()`](/fr/docs/Web/API/range/detach) a été tranformée en no-op et sera probablement supprimée dans le futur.
- La méthode `HTMLVideoElement.mozHasAudio()` a été implémentée. Elle indique si une piste audio est associée à un élément vidéo. ([bug Firefox 480376](https://bugzil.la/480376))
- L'API `Performance` a une nouvelle méthode, `now()`, supportant les horloges haute résolution du type de `DOMHighResTimeStamp`. ([bug Firefox 539095](https://bugzil.la/539095)).
- L'[API WebSMS](/fr/docs/API/WebSMS) a été mise à jour et supporte à présent l'attribut `read` indiquant si un SMS est lu ou non.
- L'[API FileHandle](https://wiki.mozilla.org/WebAPI/FileHandleAPI) a été implémentée.
- Le constructeur [`Blob`](/fr/docs/Web/API/Blob) prend désormais `ArrayBufferView` comme un membre du paramètre `blobParts` en plus de `ArrayBuffer`. ([bug Firefox 752402](https://bugzil.la/752402))
- {{domxref("DeviceLightEvent")}} spécifié dans [Ambient Light Events](https://www.w3.org/TR/ambient-light/) a été implémenté.
- {{domxref("DeviceProximityEvent")}} et {{domxref("UserProximityEvent")}} de [Proximity Events](https://www.w3.org/TR/proximity/) ont été implementés.

### JavaScript

- Le support de l'interface [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) a été ajouté à partir de la spécification des tableaux typés. Cela fournit un accès de bas niveau aux données contenues dans un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
- Le support de [`Number.isNaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) d'ECMAScript Harmony a été ajouté. ([bug Firefox 749818](https://bugzil.la/749818), [bug Firefox 761495](https://bugzil.la/761495), [bug Firefox 761480](https://bugzil.la/761480))
- Le support du paramètre default d'ECMAScript Harmony a été ajouté. ([bug Firefox 757676](https://bugzil.la/757676))
- Le support du paramètre rest d'ECMAScript Harmony a été ajouté. ([bug Firefox 574132](https://bugzil.la/574132))

### WebGL

- Le support de l'extension [`WEBGL_compressed_texture_s3tc`](/fr/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc) a été ajouté. Les textures compressées réduisent la quantité de mémoire nécessaire pour stocker une texture sur le GPU, ce qui permet d'utiliser des textures en plus hautes résolutions ou plus de textures de même résolution.

### MathML

- Les opérateurs mathématiques peuvent désormais utiliser les polices téléchargeables spécifiés avec {{cssxref("@font-face")}}. Cela permet à [l'extension MathML-fonts](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) de travailler également avec les opérateurs extensibles.
- L'attribut `selection` de {{MathMLElement("maction")}} est désormais uniquement pris en compte avec l'actiontype `toggle`.
- [L'obsolète et contraignant namedspace](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) a été supprimé ([bug Firefox 673759](https://bugzil.la/673759)).
- La prise en charge de la syntaxe des valeurs de [Length](/fr/docs/Web/MathML/Values) et {{MathMLElement("mpadded")}} a été améliorée selon la spécification MathML3.
- Les nouveaux opérateurs MathML pour les maths arabes ont été ajoutés au dictionnaire opérateur ([bug Firefox 757125](https://bugzil.la/757125)).

### Réseau

- Le support du protocole SPDY v3 a été lancé. Il est désactivé par défaut et peut être activé en définissant la préférence `network.http.spdy.enabled.v3` sur vrai. ([bug Firefox 737470](https://bugzil.la/737470))

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

- `nsIDOMWindowUtils`
  - : `aModifiers` de `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` et `sendKeyEvent()` supporte toutes les touches de modification qui sont supportées par [`KeyboardEvent.getModifierState()`](/fr/docs/DOM/KeyboardEvent#getModifierState%28%29). Utiliser les valeurs `MODIFIER_*`. Et désormais le 5ème paramètre de `sendKeyEvent()` est changé d'un `boolean` vers un `unsigned long`. Pour la compatibilité ascendante, si l'appelant passe `true` ou `false`, le comportement n'est pas changé. Ce changement permet aux appelants d'indiquer l'emplacement de la touche.
- `nsIBrowserHistory`
  - : La méthode `hidePage()` n'a jamais été implémentée, et a été entièrement supprimée dans cette version. La méthode `addPageWithDetails()` a également été supprimée dans le cadre des travaux pour faire une API [Places](/fr/docs/Places) asynchrone ; à la place, utilisez plutôt `mozIAsyncHistory.updatePlaces()`. De plus, l'attribut `count` a été retiré, il ne renvoyé pas un comptage réel à certain moment (à la place, il indiqué simplement si les entrées existées). Vous pouvez utiliser à la place `nsINavHistoryService.hasHistoryEntries`.

<!---->

- `inIDOMUtils`
  - : La méthode `parseStyleSheet()` permet d'ajouter et d'analyser des feuilles de style.

#### Nouvelles interfaces

- `nsISpeculativeConnect`
  - : Fournit un moyen de suggérer la couche réseau que vous allez être susceptibles de demander l'ouverture d'une connexion à un URI donné dans un futur proche. Cela permet à la couche réseau d'entamer le processus, qui a parfois une forte latence, d'ouvrir une nouvelle connexion réseau à l'avance.

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

- `nsIGlobalHistory`

## Voir aussi

{{Firefox_for_developers('14')}}
