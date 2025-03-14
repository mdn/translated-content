---
title: Firefox 16 pour les développeurs
slug: Mozilla/Firefox/Releases/16
---

{{FirefoxSidebar}}

Firefox 16, basé sur Gecko 16.0, est sorti le 9 octobre 2012. Cette page résume les principaux changements dans Firefox 15 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'élément {{HTMLElement("meter")}} est à présent supporté.
- Le support pour l'API HTML Microdata a été ajouté. ([bug Firefox 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} supporte à présent le mot-clé CSS `currentColor` dans tous les cas. ([bug Firefox 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} permet désormais un filtrage basé sur les types MIME abitraires dans `accept`. ([bug Firefox 565274](https://bugzil.la/565274))

### CSS

- Le support du standard des [Animations CSS](/fr/docs/Web/CSS/CSS_animations) a été lancé sans préfixe. ([bug Firefox 762302](https://bugzil.la/762302))
- Le support pour l'inversion de la direction de l'animation (mots-clés `reverse` et `alternate-reverse` sur la propriété {{cssxref("animation-direction")}}) a été ajouté. ([bug Firefox 655920](https://bugzil.la/655920))
- Vous pouvez désormais animer les propriétés CSS {{cssxref("height")}} et {{cssxref("width")}}.
- Les propriétés CSS {{cssxref("animation-duration")}} et {{cssxref("transition-duration")}} rejettent désormais les valeurs négatives (et ne les traitent plus comme `0s`) ([bug Firefox 773102](https://bugzil.la/773102))
- Le support du standard des [Transformations CSS](/fr/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) a été lancé sans préfixe. ([bug Firefox 745523](https://bugzil.la/745523))
- Le support du standard des [Dégradés CSS](/fr/docs/Web/CSS/CSS_images/Using_CSS_gradients) a été lancé sans préfixe. Notez que la syntaxe a considérablement évoluée depuis la version préfixée. ([bug Firefox 752187](https://bugzil.la/752187))
- L'implémentation de {{cssxref("box-sizing", "-moz-box-sizing")}} a été actualisée pour aussi s'appliquer aux cellules du tableau. ([bug Firefox 338554](https://bugzil.la/338554))
- Le support du standard de {{cssxref("calc")}} a été lancé sans préfixe. ([bug Firefox 771678](https://bugzil.la/771678))
- Le type de données de {{cssxref("&lt;resolution&gt;")}} a été étendu et supporte le `dppx`. ([bug Firefox 741644](https://bugzil.la/741644))
- Sur l'écran, pour les [media queries](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries), `dppx`, `dpi` et `dpcm` représentent désormais des valeurs basés sur des pixels CSS et non plus avec les unités physiques. ([bug Firefox 771390](https://bugzil.la/771390))
- Trois nouvelles pseudo-classes, `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` et `:-moz-meter-sub-sub-optimum`, ont été ajoutées pour accéder à/styliser un élément {{HTMLElement("meter")}} dans un état particulier. ([bug Firefox 660238](https://bugzil.la/660238))
- La propriété {{cssxref("-moz-appearance")}} gagnes deux nouvelles valeurs : `meterbar` et `meterchunk`. Elles représentent des composants dans l'élément {{HTMLElement("meter")}}. ([bug Firefox 659999](https://bugzil.la/659999))
- {{cssxref("min-width")}} et {{cssxref("min-height")}} supportent désormais le mot-clé `auto` pour les articles flexibles (et règlent les autres articles à `0` ). ([bug Firefox 763689](https://bugzil.la/763689))

### DOM

- Deux nouvelles propriétés, `width` et `height`, ont été ajoutée à l'interface {{domxref("HTMLInputElement")}}. ([bug Firefox 683855](https://bugzil.la/683855))
- Les propriétés et méthodes d'IndexedDB n'ont plus de préfixe, depuis que IndexedDB est passé au statut Candidate Recommendation. ([bug Firefox 726378](https://bugzil.la/726378))
- [Battery API](/fr/docs/Web/API/Navigator/getBattery) n'a plus de préfixe.
- L'API Vibration n'a plus de préfixe.
- L'interface {{domxref("Keyboard")}}, qui est toujours préfixée (`mozKeyboard`), a désormais les méthodes {{domxref("Keyboard.setSelectedOption()")}} et {{domxref("Keyboard.setValue()")}}, ainsi que la propriété {{domxref("Keyboard.onfocuschange")}}.
- Les attributs `Window.java` et `Window.packages` ont été supprimés. Ils n'ont jamais été documentés, et nous espérons que vous ne les utilisiez pas !
- `CSSRule.type` associé avec {{domxref("CSSNamespaceRule")}} a été mis à jour à partir de `UNKNOWN_RULE` (`0`) vers `NAMESPACE_RULE` (`10`). ([bug Firefox 765590](https://bugzil.la/765590))
- API WebSMS : [SmsRequest](/fr/docs/DOM/SmsRequest) a été remplacé par qui est plus général.

### JavaScript

- L'objet [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) offre désormais les méthodes `isFinite()`, `toInteger()` et `isInteger()`. ([bug Firefox 761480](https://bugzil.la/761480), [bug Firefox 761495](https://bugzil.la/761495))
- L'[opérateur de diffusion](http://wiki.ecmascript.org/doku.php?id=harmony:spread) d'Harmony a été ajouté à l'objet [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array). ([bug Firefox 574130](https://bugzil.la/574130))

### MathML

- Les attributs `lspace` et `rspace` de {{MathMLElement("mo")}} ont désormais la constante `thickmathspace` par défaut.

### Outils de développement

- Il existe à présent une barre de développement très pratique, vous pouvez y accéder en allant dans Outils > Développeur Web > Barre de Développement, ou en appuyant sur Maj+F2. Cette barre d'outils propose une interface en ligne de commande ainsi que des boutons pour accéder rapidement aux outils utiles. L'interface graphique de commande en ligne ([GCLI](/fr/docs/Tools/GCLI)) est facile à étendre et d'autres commandes devraient dans le futur. Tapez "help" pour obtenir la liste des commandes disponibles.
- La console Web affiche désormais le nombre d'erreurs afin que vous voyez rapidement la quantité de travail que vous avez devant vous.
- L'Ardoise propose désormais la liste des fichiers récemments ouverts.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

`nsIPrivateDOMEvent` a été fusionné dans `nsIDOMEvent`. ([bug Firefox 761613](https://bugzil.la/761613))

#### Nouvelles interfaces

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

## Voir aussi

{{Firefox_for_developers('15')}}
