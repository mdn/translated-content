---
title: Firefox 16 note de version pour les développeurs
short-title: Firefox 16
slug: Mozilla/Firefox/Releases/16
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 16 est sorti le 9 octobre 2012. Cet article répertorie les principaux changements qui sont utiles non seulement aux développeur·euse·s Web, mais aussi aux développeur·euse·s de Firefox et Gecko ainsi qu'aux développeur·euse·s de modules complémentaires.

## Changements pour les développeur·euse·s Web

### Outils de développement

- Il existe à présent une barre de développement très pratique, vous pouvez y accéder en allant dans Outils > Développeur Web > Barre de Développement, ou en appuyant sur <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>V</kbd> (<kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>V</kbd> sur macOS). Cette barre d'outils propose une interface en ligne de commande ainsi que des boutons pour accéder rapidement aux outils utiles. L'interface graphique de commande en ligne _GCLI_ est facile à étendre et d'autres commandes devraient dans le futur. Tapez «&nbsp;help&nbsp;» pour obtenir la liste des commandes disponibles.
- La console Web affiche désormais le nombre d'erreurs afin que vous voyez rapidement la quantité de travail que vous avez devant vous.
- L'Ardoise propose désormais la liste des fichiers récemment ouverts.

### HTML

- L'élément {{HTMLElement("meter")}} est à présent supporté.
- Le support pour l'API HTML Microdata a été ajouté. ([bogue Firefox 591467 <sup>(angl.)</sup>](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} supporte à présent le mot-clé CSS `currentColor` dans tous les cas. ([bogue Firefox 629882 <sup>(angl.)</sup>](https://bugzil.la/629882))
- {{HTMLElement("input")}} permet désormais un filtrage basé sur les types MIME arbitraires dans `accept`. ([bogue Firefox 565274 <sup>(angl.)</sup>](https://bugzil.la/565274))

### CSS

- Le support du standard des [Animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) a été lancé sans préfixe. ([bogue Firefox 762302 <sup>(angl.)</sup>](https://bugzil.la/762302))
- Le support pour l'inversion de la direction de l'animation (mots-clés `reverse` et `alternate-reverse` sur la propriété {{CSSxRef("animation-direction")}}) a été ajouté. ([bogue Firefox 655920 <sup>(angl.)</sup>](https://bugzil.la/655920))
- Vous pouvez désormais animer les propriétés CSS {{CSSxRef("height")}} et {{CSSxRef("width")}}.
- Les propriétés CSS {{CSSxRef("animation-duration")}} et {{CSSxRef("transition-duration")}} rejettent désormais les valeurs négatives (et ne les traitent plus comme `0s`) ([bogue Firefox 773102 <sup>(angl.)</sup>](https://bugzil.la/773102))
- Le support du standard des [Transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) a été lancé sans préfixe. ([bogue Firefox 745523 <sup>(angl.)</sup>](https://bugzil.la/745523))
- Le support du standard des [Dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) a été lancé sans préfixe. Notez que la syntaxe a considérablement évoluée depuis la version préfixée. ([bogue Firefox 752187 <sup>(angl.)</sup>](https://bugzil.la/752187))
- L'implémentation de {{CSSxRef("box-sizing", "-moz-box-sizing")}} a été actualisée pour aussi s'appliquer aux cellules du tableau. ([bogue Firefox 338554 <sup>(angl.)</sup>](https://bugzil.la/338554))
- Le support du standard de {{CSSxRef("calc")}} a été lancé sans préfixe. ([bogue Firefox 771678 <sup>(angl.)</sup>](https://bugzil.la/771678))
- Le type de données de {{CSSxRef("&lt;resolution&gt;")}} a été étendu et prend en charge le `dppx`. ([bogue Firefox 741644 <sup>(angl.)</sup>](https://bugzil.la/741644))
- Sur l'écran, pour les [media queries](/fr/docs/Web/CSS/Guides/Media_queries/Using), `dppx`, `dpi` et `dpcm` représentent désormais des valeurs basés sur des pixels CSS et non plus avec les unités physiques. ([bogue Firefox 771390 <sup>(angl.)</sup>](https://bugzil.la/771390))
- Trois nouvelles pseudo-classes, `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` et `:-moz-meter-sub-sub-optimum`, ont été ajoutées pour accéder à/mettre en forme un élément {{HTMLElement("meter")}} dans un état particulier. ([bogue Firefox 660238 <sup>(angl.)</sup>](https://bugzil.la/660238))
- La propriété {{CSSxRef("-moz-appearance")}} gagnes deux nouvelles valeurs : `meterbar` et `meterchunk`. Elles représentent des composants dans l'élément {{HTMLElement("meter")}}. ([bogue Firefox 659999 <sup>(angl.)</sup>](https://bugzil.la/659999))
- {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}} prennent désormais en charge le mot-clé `auto` pour les articles flexibles (et règlent les autres articles à `0`). ([bogue Firefox 763689 <sup>(angl.)</sup>](https://bugzil.la/763689))

### DOM

- Deux nouvelles propriétés, `width` et `height`, ont été ajoutée à l'interface {{DOMxRef("HTMLInputElement")}}. ([bogue Firefox 683855 <sup>(angl.)</sup>](https://bugzil.la/683855))
- Les propriétés et méthodes d'IndexedDB n'ont plus de préfixe, depuis que IndexedDB est passé au statut Candidate Recommendation. ([bogue Firefox 726378 <sup>(angl.)</sup>](https://bugzil.la/726378))
- [L'API Battery](/fr/docs/Web/API/Navigator/getBattery) n'a plus de préfixe.
- L'API Vibration n'a plus de préfixe.
- L'interface `Keyboard`, qui est toujours préfixée (`mozKeyboard`), a désormais les méthodes `Keyboard.setSelectedOption()` et `Keyboard.setValue()`, ainsi que la propriété `Keyboard.onfocuschange`. _Cette interface, uniquement disponible pour Firefox OS, a été supprimée dans Firefox 31._
- Les objets globaux [`java` <sup>(angl.)</sup>](https://web.archive.org/web/20201004062409/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect_Reference/java) et [`Packages` <sup>(angl.)</sup>](https://web.archive.org/web/20201031083247/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect_Reference/Packages) ont été supprimés. Voir [LiveConnect <sup>(angl.)</sup>](https://web.archive.org/web/20210516230302/https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect).
- Le `CSSRule.type` associé à {{DOMxRef("CSSNamespaceRule")}} a été mis à jour de `UNKNOWN_RULE` (`0`) à `NAMESPACE_RULE` (`10`) ([bogue Firefox 765590 <sup>(angl.)</sup>](https://bugzil.la/765590)).
- L'API WebSMS&nbsp;: `SmsRequest` a été remplacée par la plus générale `DOMRequest`.
- Les propriétés en lecture seule non standard {{DOMxRef("Element.scrollTopMax")}} et {{DOMxRef("Element.scrollLeftMax")}} ont été ajoutées ([bogue Firefox 766937 <sup>(angl.)</sup>](https://bugzil.la/766937)).
- Le deuxième paramètre de {{DOMxRef("Blob.blob", "Blob()")}}, lorsqu'il est défini sur `null` ou `undefined`, est désormais traité comme un dictionnaire vide ([bogue Firefox 7691119 <sup>(angl.)</sup>](https://bugzil.la/7691119)).

### JavaScript

- L'objet {{JSxRef("Number")}} offre désormais les méthodes `isFinite()`, `toInteger()` et `isInteger()`. ([bogue Firefox 761480 <sup>(angl.)</sup>](https://bugzil.la/761480), [bogue Firefox 761495 <sup>(angl.)</sup>](https://bugzil.la/761495))
- [L'opérateur de diffusion <sup>(angl.)</sup>](ttps://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) d'Harmony a été ajouté à l'objet {{JSxRef("Array")}}. ([bogue Firefox 574130 <sup>(angl.)</sup>](https://bugzil.la/574130))
- La méthode expérimentale `TypedArray.prototype.move()` a été ajoutée (disponible uniquement dans les canaux Aurora et Nightly) ([bogue Firefox 730873 <sup>(angl.)</sup>](https://bugzil.la/730873)).

### WebGL

_Pas de changement._

### SVG

_Pas de changement._

### MathML

- Les attributs `lspace` et `rspace` de {{MathMLElement("mo")}} ont désormais la constante `thickmathspace` par défaut.

## Changements pour les développeur·euse·s d'applications Web ouvertes

- La prise en charge initiale des [applications Web ouvertes <sup>(angl.)</sup>](https://web.archive.org/web/20190117093115/https://developer.mozilla.org/en-US/docs/Web/Apps/Getting_Started) a été mise en œuvre dans les versions de bureau de Firefox (c'est-à-dire sur Windows, Mac OS X et Linux).

## Changements pour les développeur·euse·s de Mozilla

### Changements dans les interfaces

`nsIPrivateDOMEvent` a été fusionné dans `nsIDOMEvent`. ([bogue Firefox 761613 <sup>(angl.)</sup>](https://bugzil.la/761613))
