---
title: Types de données CSS
short-title: Types de données
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Les **types de données CSS** définissent des valeurs typiques (y compris des mots-clés et des unités) acceptées par les propriétés et les fonctions CSS. Ils sont un type spécial de [type de valeur du composant <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#component-types).

Les types les plus couramment utilisés sont définis dans le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units). Ce module définit également des [notations fonctionnelles](/fr/docs/Web/CSS/Reference/Values/Functions), qui permettent des types ou des traitements plus complexes. D'autres types sont définis dans les spécifications auxquelles ils s'appliquent.

Vous trouverez ci-dessous une référence aux types que vous êtes le plus susceptible de rencontrer, mais ce n'est pas une référence complète pour tous les types définis dans chaque spécification CSS.

## Syntaxe

Dans la syntaxe CSS formelle, les types de données sont désignés par un mot-clé placé entre les chevrons `<` et `>`. Ils ne correspondent à aucune entité de code CSS tangible.

## Types de données textuelles

Ces types incluent des mots-clés et des identifiants ainsi que des chaînes de caractères et des URL.

- Mots-clés prédéfinis
  - : Mots-clés ayant une signification prédéfinie, par exemple, la valeur de `collapse` pour la propriété {{CSSxRef("border-collapse")}}.
- Mots-clés globaux CSS
  - : Toutes les propriétés, y compris les propriétés personnalisées, acceptent les mots-clés globaux CSS&nbsp;:
    - {{CSSxRef("initial")}}
      - : La valeur définie comme valeur initiale de la propriété.
    - {{CSSxRef("inherit")}}
      - : La valeur calculée de la propriété sur l'élément parent.
    - {{CSSxRef("revert")}}
      - : Rétablit la cascade à la valeur de l'origine antérieure.
    - {{CSSxRef("revert-layer")}}
      - : Rétablit la cascade à la valeur de la {{CSSxRef("@layer", "couche de cascade")}} antérieure.
    - {{CSSxRef("revert-rule")}}
      - : Rétablit la cascade à la valeur d'une règle de style correspondante antérieure.
    - {{CSSxRef("unset")}}
      - : Agit comme `inherit` ou `initial` en fonction de la propriété héritée ou non.
- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Un identifiant défini par l'utilisateur·ice, par exemple le nom attribué à l'aide de la propriété {{CSSxRef("grid-area")}}.
- {{CSSxRef("&lt;dashed-ident&gt;")}}
  - : Un `<custom-ident>` avec la restriction supplémentaire qu'il doit commencer par deux tirets, par exemple avec les [propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{CSSxRef("&lt;string&gt;")}}
  - : Une chaîne de caractères entre guillemets, comme utilisée pour une valeur de la propriété {{CSSxRef("content")}}.
- {{CSSxRef("url_value", "&lt;url&gt;")}}
  - : Un pointeur vers une ressource, par exemple comme valeur de {{CSSxRef("background-image")}}.

## Types de données numériques

Ces types de données sont utilisés pour indiquer des quantités, des index et des positions. La majorité d'entre eux sont définis dans le module des valeurs et unités CSS, cependant d'autres types sont décrits dans d'autres modules où ils sont spécifiques à cette spécification seule - par exemple l'unité `fr` dans le module [Grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

- {{CSSxRef("&lt;integer&gt;")}}
  - : Un ou plusieurs chiffres décimaux de 0 à 9.
- {{CSSxRef("&lt;number&gt;")}}
  - : Des nombres réels qui peuvent également avoir une composante fractionnaire, par exemple 1 ou 1.34.
- {{CSSxRef("&lt;dimension&gt;")}}
  - : Un nombre avec une unité attachée, par exemple 23px ou 15em.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un nombre avec un signe de pourcentage attaché, par exemple 10%.
- {{CSSxRef("&lt;ratio&gt;")}}
  - : Un rapport, écrit avec la syntaxe `<number> / <number>`.
- {{CSSxRef("&lt;flex&gt;")}}
  - : Une longueur flexible introduite pour [Grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout), écrite comme un `<number>` avec l'unité `fr` attachée et utilisée pour le dimensionnement des pistes de grille.

## Quantités

Ces types sont utilisés pour définir des distances et d'autres quantités.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les longueurs sont une `<dimension>` et se réfèrent à des distances.
- {{CSSxRef("&lt;angle&gt;")}}
  - : Les angles sont utilisés dans des propriétés telles que {{CSSxRef("linear-gradient()")}} et sont une `<dimension>` avec l'une des unités `deg`, `grad`, `rad` ou `turn` attachées.
- {{CSSxRef("&lt;time&gt;")}}
  - : Les unités de durée sont une `<dimension>` avec une unité `s` ou `ms`.
- {{CSSxRef("&lt;frequency&gt;")}}
  - : Les fréquences sont une `<dimension>` avec une unité `Hz` ou `kHz` attachée.
- {{CSSxRef("&lt;resolution&gt;")}}
  - : Une `<dimension>` avec un identifiant d'unité de `dpi`, `dpcm`, `dppx` ou `x`.

## Combinaisons de types

Certaines propriétés CSS peuvent accepter une dimension ou une valeur de pourcentage. Dans ce cas, la valeur de pourcentage sera résolue en une quantité qui correspond à la dimension autorisée. Les propriétés qui peuvent accepter un pourcentage en plus d'une dimension utiliseront l'un des types énumérés ci-dessous.

- {{CSSxRef("&lt;length-percentage&gt;")}}
  - : Un type qui peut accepter une longueur ou un pourcentage comme valeur.
- {{CSSxRef("&lt;frequency-percentage&gt;")}}
  - : Un type qui peut accepter une fréquence ou un pourcentage comme valeur.
- {{CSSxRef("&lt;angle-percentage&gt;")}}
  - : Un type qui peut accepter un angle ou un pourcentage comme valeur.
- {{CSSxRef("&lt;time-percentage&gt;")}}
  - : Un type qui peut accepter une durée ou un pourcentage comme valeur.

## Couleur

Le module [Couleur CSS](/fr/docs/Web/CSS/Guides/Colors) définit le type de données {{CSSxRef("&lt;color&gt;")}}, ainsi que d'autres types liés à la couleur en CSS.

- {{CSSxRef("&lt;color&gt;")}}
  - : Définit comme un mot-clé ou une valeur numérique de couleur.
- {{CSSxRef("&lt;alpha-value&gt;")}}
  - : Définit la transparence d'une couleur. Peut être un `<number>`, auquel cas 0 est complètement transparent et 1 est complètement opaque, ou un `<percentage>`, auquel cas 0% est complètement transparent et 100% complètement opaque.
- {{CSSxRef("&lt;hue&gt;")}}
  - : Définit l'`<angle>`, avec un identifiant d'unité de `deg`, `grad`, `rad` ou `turn`, ou un `<number>` sans unité interprété comme `deg`, de la {{Glossary("color wheel")}} spécifique aux `<absolute-color-functions>` dont il est un composant.

## Images

Le module [Images CSS](/fr/docs/Web/CSS/Guides/Images) définit les types de données qui traitent des images, y compris les dégradés.

- {{CSSxRef("&lt;image&gt;")}}
  - : Une référence d'URL à une image ou à un dégradé de couleur.
- `<color-stop-list>`
  - : Une liste de deux ou plusieurs arrêts de couleur avec des informations de transition optionnelles utilisant un indice de couleur.
- `<linear-color-stop>`
  - : Un `<color>` et un `<length-percentage>` pour indiquer l'arrêt de couleur pour cette partie du dégradé.
- `<linear-color-hint>`
  - : Un `<length-percentage>` pour indiquer comment la couleur s'interpole.
- `<ending-shape>`
  - : Utilisé pour les dégradés radiaux&nbsp;; peut avoir une valeur de mot-clé de `circle` ou `ellipse`.
- `<size>`
  - : Détermine la taille de la forme de fin du dégradé radial. Cela accepte une valeur de mot-clé ou un `<length>` mais pas un pourcentage.

## Positionnement 2D

Le type de données {{CSSxRef("&lt;position&gt;")}} est interprété comme défini pour la propriété {{CSSxRef("&lt;background-position&gt;")}}.

- {{CSSxRef("&lt;position&gt;")}}
  - : Définit la position d'une zone d'objet. Accepte une valeur de mot-clé telle que `top` ou `left`, ou un `<length-percentage>`.

## Types de données de calcul

Ces types de données sont utilisés dans les calculs de [fonction mathématique CSS](/fr/docs/Web/CSS/Reference/Values/Functions#fonctions_mathématiques).

- {{CSSxRef("&lt;calc-sum&gt;")}}
  - : Un calcul qui est une séquence de valeurs de calcul entrecoupées d'opérateurs d'addition (`+`) et de soustraction (`-`). Ce type de données nécessite que les deux valeurs aient des unités.
- {{CSSxRef("&lt;calc-product&gt;")}}
  - : Un calcul qui est une séquence de valeurs de calcul entrecoupées d'opérateurs de multiplication (`*`) et de division (`/`). Lors de la multiplication, une valeur doit être sans unité. Lors de la division, la deuxième valeur doit être sans unité.
- {{CSSxRef("&lt;calc-value&gt;")}}
  - : Définit les valeurs acceptées pour les calculs, des valeurs telles que {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;calc-keyword&gt;")}} ou des calculs imbriqués {{CSSxRef("&lt;calc-sum&gt;")}}.
- {{CSSxRef("&lt;calc-keyword&gt;")}}
  - : Définit un certain nombre de mots-clés CSS représentant des constantes numériques telles que `e` et `π`, qui peuvent être utilisés dans les fonctions mathématiques CSS.

## Types de données de forme

Les modules [formes CSS](/fr/docs/Web/CSS/Guides/Shapes) et [bordures et décorations de boîtes CSS](/fr/docs/Web/CSS/CSS_borders_and_box_decorations) définissent des types de données de forme&nbsp;:

- {{CSSxRef("&lt;basic-shape&gt;")}}
  - : Décrit les fonctions de forme utilisées dans les propriétés {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}} et {{CSSxRef("offset-path")}}.
- {{CSSxRef("&lt;corner-shape-value&gt;")}}
  - : Décrit la forme d'un coin de conteneur. Il est utilisé par la propriété abrégée {{CSSxRef("corner-shape")}} et ses [propriétés constitutives](/fr/docs/Web/CSS/Reference/Properties/corner-shape#propriétés_constitutives) pour définir la forme appliquée aux coins de conteneur affectés.

## Index alphabétique des types de données

- {{CSSxRef("&lt;absolute-size&gt;")}}
- {{CSSxRef("&lt;alpha-value&gt;")}}
- {{CSSxRef("&lt;angle&gt;")}}
- {{CSSxRef("&lt;angle-percentage&gt;")}}
- {{CSSxRef("&lt;axis&gt;")}}
- {{CSSxRef("&lt;baseline-position&gt;")}}
- {{CSSxRef("&lt;basic-shape&gt;")}}
- {{CSSxRef("&lt;blend-mode&gt;")}}
- {{CSSxRef("&lt;box-edge&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;color&gt;")}}
- {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- {{CSSxRef("&lt;content-distribution&gt;")}}
- {{CSSxRef("&lt;content-position&gt;")}}
- {{CSSxRef("&lt;corner-shape-value&gt;")}} {{Experimental_Inline}}
- {{CSSxRef("&lt;custom-ident&gt;")}}
- {{CSSxRef("&lt;dashed-function&gt;")}} {{Experimental_Inline}}
- {{CSSxRef("&lt;dashed-ident&gt;")}}
- {{CSSxRef("&lt;dimension&gt;")}}
- {{CSSxRef("&lt;display-box&gt;")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
- {{CSSxRef("&lt;display-outside&gt;")}}
- {{CSSxRef("&lt;easing-function&gt;")}}
- {{CSSxRef("&lt;filter-function&gt;")}}
- {{CSSxRef("flex_value", "&lt;flex&gt;")}}
- {{CSSxRef("&lt;frequency&gt;")}}
- {{CSSxRef("&lt;frequency-percentage&gt;")}}
- {{CSSxRef("&lt;generic-family&gt;")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;hex-color&gt;")}}
- {{CSSxRef("&lt;hue&gt;")}}
- {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- {{CSSxRef("&lt;ident&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("&lt;integer&gt;")}}
- {{CSSxRef("&lt;length&gt;")}}
- {{CSSxRef("&lt;length-percentage&gt;")}}
- {{CSSxRef("&lt;line-style&gt;")}}
- {{CSSxRef("&lt;named-color&gt;")}}
- {{CSSxRef("&lt;number&gt;")}}
- {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}
- {{CSSxRef("&lt;overflow-position&gt;")}}
- {{CSSxRef("&lt;percentage&gt;")}}
- {{CSSxRef("position_value", "&lt;position&gt;")}}
- {{CSSxRef("position-area_value", "&lt;position-area&gt;")}}
- {{CSSxRef("&lt;ratio&gt;")}}
- {{CSSxRef("&lt;relative-size&gt;")}}
- {{CSSxRef("&lt;resolution&gt;")}}
- {{CSSxRef("&lt;self-position&gt;")}}
- {{CSSxRef("&lt;shape&gt;")}} {{Deprecated_Inline}}
- {{CSSxRef("&lt;string&gt;")}}
- {{CSSxRef("&lt;system-color&gt;")}}
- {{CSSxRef("&lt;text-edge&gt;")}}
- {{CSSxRef("&lt;time&gt;")}}
- {{CSSxRef("&lt;timeline-range-name&gt;")}}
- {{CSSxRef("&lt;time-percentage&gt;")}}
- {{CSSxRef("&lt;transform-function&gt;")}}
- {{CSSxRef("url_value", "&lt;url&gt;")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Fonctions de valeur CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
