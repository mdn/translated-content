---
title: Firefox 16 pour les développeurs
slug: Mozilla/Firefox/Releases/16
tags:
  - Firefox
  - Firefox 16
translation_of: Mozilla/Firefox/Releases/16
original_slug: Mozilla/Firefox/Versions/16
---
{{FirefoxSidebar}}

Firefox 16, basé sur Gecko 16.0, est sorti le 9 octobre 2012. Cette page résume les principaux changements dans Firefox 15 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'élément {{HTMLElement("meter")}} est à présent supporté.
- Le support pour l'API HTML Microdata a été ajouté. ({{bug(591467)}})
- {{HTMLElement("canvas")}} supporte à présent le mot-clé CSS `currentColor` dans tous les cas. ({{bug("629882")}})
- {{HTMLElement("input")}} permet désormais un filtrage basé sur les types MIME abitraires dans `accept`. ({{bug(565274)}})

### CSS

- Le support du standard des [Animations CSS](/fr/docs/CSS/Animations_CSS) a été lancé sans préfixe. ({{bug(762302)}})
- Le support pour l'inversion de la direction de l'animation (mots-clés `reverse` et `alternate-reverse` sur la propriété {{cssxref("animation-direction")}}) a été ajouté. ({{bug(655920)}})
- Vous pouvez désormais animer les propriétés CSS {{cssxref("height")}} et {{cssxref("width")}}.
- Les propriétés CSS {{cssxref("animation-duration")}} et {{cssxref("transition-duration")}} rejettent désormais les valeurs négatives (et ne les traitent plus comme `0s`) ({{bug(773102)}})
- Le support du standard des [Transformations CSS](/fr/docs/CSS/Utilisation_des_transformations_CSS) a été lancé sans préfixe. ({{bug(745523)}})
- Le support du standard des [Dégradés CSS](/fr/docs/CSS/Using_CSS_gradients) a été lancé sans préfixe. Notez que la syntaxe a considérablement évoluée depuis la version préfixée. ({{bug(752187)}})
- L'implémentation de {{cssxref("box-sizing", "-moz-box-sizing")}} a été actualisée pour aussi s'appliquer aux cellules du tableau. ({{bug(338554)}})
- Le support du standard de {{cssxref("calc")}} a été lancé sans préfixe. ({{bug(771678)}})
- Le type de données de {{cssxref("&lt;resolution&gt;")}} a été étendu et supporte le `dppx`. ({{bug(741644)}})
- Sur l'écran, pour les [media queries](/fr/docs/CSS/Media_queries), `dppx`, `dpi` et `dpcm` représentent désormais des valeurs basés sur des pixels CSS et non plus avec les unités physiques. ({{bug(771390)}})
- Trois nouvelles pseudo-classes, `:-moz-meter-optimum`, `:-moz-meter-sub-optimum` et `:-moz-meter-sub-sub-optimum`, ont été ajoutées pour accéder à/styliser un élément {{HTMLElement("meter")}} dans un état particulier. ({{bug(660238)}})
- La propriété {{cssxref("-moz-appearance")}} gagnes deux nouvelles valeurs : `meterbar` et `meterchunk`. Elles représentent des composants dans l'élément {{HTMLElement("meter")}}. ({{bug(659999)}})
- {{cssxref("min-width")}} et {{cssxref("min-height")}} supportent désormais le mot-clé `auto` pour les articles flexibles (et règlent les autres articles à `0` ). ({{bug(763689)}})

### DOM

- Deux nouvelles propriétés, `width` et `height`, ont été ajoutée à l'interface {{domxref("HTMLInputElement")}}. ({{bug(683855)}})
- Les propriétés et méthodes d'IndexedDB n'ont plus de préfixe, depuis que IndexedDB est passé au statut Candidate Recommendation. ({{bug(726378)}})
- [Battery API](/fr/docs/DOM/window.navigator.battery) n'a plus de préfixe.
- L'API Vibration n'a plus de préfixe.
- L'interface {{domxref("Keyboard")}}, qui est toujours préfixée (`mozKeyboard`), a désormais les méthodes {{domxref("Keyboard.setSelectedOption()")}} et {{domxref("Keyboard.setValue()")}}, ainsi que la propriété {{domxref("Keyboard.onfocuschange")}}.
- Les attributs `Window.java` et `Window.packages` ont été supprimés. Ils n'ont jamais été documentés, et nous espérons que vous ne les utilisiez pas !
- `CSSRule.type` associé avec {{domxref("CSSNamespaceRule")}} a été mis à jour à partir de `UNKNOWN_RULE` (`0`) vers `NAMESPACE_RULE` (`10`). ({{bug(765590)}})
- API WebSMS : [SmsRequest](/fr/docs/DOM/SmsRequest) a été remplacé par qui est plus général.

### JavaScript

- L'objet [`Number`](/fr/docs/JavaScript/Reference/Global_Objects/Number) offre désormais les méthodes `isFinite()`, `toInteger()` et `isInteger()`. ({{bug(761480)}}, {{bug(761495)}})
- L'[opérateur de diffusion](http://wiki.ecmascript.org/doku.php?id=harmony:spread) d'Harmony a été ajouté à l'objet [`Array`](/fr/docs/JavaScript/Reference/Global_Objects/Array). ({{bug(574130)}})

### MathML

- Les attributs `lspace` et `rspace` de {{MathMLElement("mo")}} ont désormais la constante `thickmathspace` par défaut.

### Outils de développement

- Il existe à présent une barre de développement très pratique, vous pouvez y accéder en allant dans Outils > Développeur Web > Barre de Développement, ou en appuyant sur Maj+F2. Cette barre d'outils propose une interface en ligne de commande ainsi que des boutons pour accéder rapidement aux outils utiles. L'interface graphique de commande en ligne ([GCLI](/fr/docs/Tools/GCLI)) est facile à étendre et d'autres commandes devraient dans le futur. Tapez "help" pour obtenir la liste des commandes disponibles.
- La console Web affiche désormais le nombre d'erreurs afin que vous voyez rapidement la quantité de travail que vous avez devant vous.
- L'Ardoise propose désormais la liste des fichiers récemments ouverts.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Changements dans les interfaces

`nsIPrivateDOMEvent` a été fusionné dans `nsIDOMEvent`. ({{bug("761613")}})

#### Nouvelles interfaces

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées.

## Voir également

{{Firefox_for_developers('15')}}
