---
title: Types de données CSS
slug: Web/CSS/Reference/Values/Data_types
original_slug: Web/CSS/CSS_values_and_units/CSS_data_types
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Les **types de données CSS** définissent des valeurs typiques (y compris des mots-clés et des unités) acceptées par les propriétés et les fonctions CSS. Ils sont un type spécial de [type de valeur du composant <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#component-types).

Les types les plus couramment utilisés sont définis dans le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units). Ce module définit également des [notations fonctionnelles](/fr/docs/Web/CSS/Reference/Values/Functions), qui permettent des types ou des traitements plus complexes. D'autres types sont définis dans les spécifications auxquelles ils s'appliquent.

Vous trouverez ci-dessous une référence aux types que vous êtes le plus susceptible de rencontrer, mais ce n'est pas une référence complète pour tous les types définis dans chaque spécification CSS.

## Syntaxe

Dans la syntaxe CSS formelle, les types de données sont désignés par un mot-clé placé entre les chevrons `<` et `>`. Ils ne correspondent à aucune entité de code CSS tangible.

## Types de données textuelles

Ces types incluent des mots-clés et des identifiants ainsi que des chaînes de caractères et des URL.

- Mots-clés prédéfinis
  - : Mots-clés ayant une signification prédéfinie, par exemple, la valeur de `collapse` pour la propriété {{cssxref("border-collapse")}}.
- Mots-clés globaux CSS
  - : Toutes les propriétés, y compris les propriétés personnalisées, acceptent les mots-clés globaux CSS&nbsp;:
    - {{CSSXref("initial")}}
      - La valeur définie comme valeur initiale de la propriété.
    - {{CSSXref("inherit")}}
      - La valeur calculée de la propriété sur l'élément parent.
    - {{CSSXref("revert")}}
      - Rétablit la cascade à la valeur de l'origine antérieure.
    - {{CSSXref("revert-layer")}}
      - Rétablit la cascade à la valeur de la [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) antérieure.
    - {{CSSXref("unset")}}
      - Agit comme `inherit` ou `initial` en fonction de la propriété héritée ou non.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Un identifiant défini par l'utilisateur·ice, par exemple le nom attribué à l'aide de la propriété {{cssxref("grid-area")}}.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Un `<custom-ident>` avec la restriction supplémentaire qu'il doit commencer par deux tirets, par exemple avec les [propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Une chaîne de caractères entre guillemets, comme utilisée pour une valeur de la propriété {{cssxref("content")}}.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Un pointeur vers une ressource, par exemple comme valeur de {{cssxref("background-image")}}.

## Types de données numériques

Ces types de données sont utilisés pour indiquer des quantités, des index et des positions. La majorité d'entre eux sont définis dans le module des valeurs et unités CSS, cependant d'autres types sont décrits dans d'autres modules où ils sont spécifiques à cette spécification seule - par exemple l'unité `fr` dans le module [Grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Un ou plusieurs chiffres décimaux de 0 à 9.
- {{cssxref("&lt;number&gt;")}}
  - : Des nombres réels qui peuvent également avoir une composante fractionnaire, par exemple 1 ou 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Un nombre avec une unité attachée, par exemple 23px ou 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un nombre avec un signe de pourcentage attaché, par exemple 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Un rapport, écrit avec la syntaxe `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Une longueur flexible introduite pour [Grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout), écrite comme un `<number>` avec l'unité `fr` attachée et utilisée pour le dimensionnement des pistes de grille.

## Quantités

Ces types sont utilisés pour spécifier des distances et d'autres quantités.

- {{cssxref("&lt;length&gt;")}}
  - : Les longueurs sont une `<dimension>` et se réfèrent à des distances.
- {{cssxref("&lt;angle&gt;")}}
  - : Les angles sont utilisés dans des propriétés telles que {{cssxref("gradient/linear-gradient", "linear-gradient()")}} et sont une `<dimension>` avec l'une des unités `deg`, `grad`, `rad` ou `turn` attachées.
- {{cssxref("&lt;time&gt;")}}
  - : Les unités de durée sont une `<dimension>` avec une unité `s` ou `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Les fréquences sont une `<dimension>` avec une unité `Hz` ou `kHz` attachée.
- {{cssxref("&lt;resolution&gt;")}}
  - : Une `<dimension>` avec un identifiant d'unité de `dpi`, `dpcm`, `dppx` ou `x`.

## Combinaisons de types

Certaines propriétés CSS peuvent accepter une dimension ou une valeur de pourcentage. Dans ce cas, la valeur de pourcentage sera résolue en une quantité qui correspond à la dimension autorisée. Les propriétés qui peuvent accepter un pourcentage en plus d'une dimension utiliseront l'un des types énumérés ci-dessous.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Un type qui peut accepter une longueur ou un pourcentage comme valeur.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Un type qui peut accepter une fréquence ou un pourcentage comme valeur.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Un type qui peut accepter un angle ou un pourcentage comme valeur.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Un type qui peut accepter une durée ou un pourcentage comme valeur.

## Couleur

Le module [Couleur CSS](/fr/docs/Web/CSS/Guides/Colors) définit le type de données {{cssxref("&lt;color&gt;")}}, ainsi que d'autres types liés à la couleur en CSS.

- {{cssxref("&lt;color&gt;")}}
  - : Définit comme un mot-clé ou une valeur numérique de couleur.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Définit la transparence d'une couleur. Peut être un `<number>`, auquel cas 0 est complètement transparent et 1 est complètement opaque, ou un `<percentage>`, auquel cas 0% est complètement transparent et 100% complètement opaque.
- {{cssxref("&lt;hue&gt;")}}
  - : Définit l'`<angle>`, avec un identifiant d'unité de `deg`, `grad`, `rad` ou `turn`, ou un `<number>` sans unité interprété comme `deg`, de la {{glossary("color wheel")}} spécifique aux `<absolute-color-functions>` dont il est un composant.

## Images

Le module [Images CSS](/fr/docs/Web/CSS/Guides/Images) définit les types de données qui traitent des images, y compris les dégradés.

- {{cssxref("&lt;image&gt;")}}
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

Le type de données {{cssxref("&lt;position&gt;")}} est interprété comme défini pour la propriété {{cssxref("&lt;background-position&gt;")}}.

- {{cssxref("&lt;position&gt;")}}
  - : Définit la position d'une zone d'objet. Accepte une valeur de mot-clé telle que `top` ou `left`, ou un `<length-percentage>`.

## Types de données de calcul

Ces types de données sont utilisés dans les calculs de [fonction mathématique CSS](/fr/docs/Web/CSS/Reference/Values/Functions#math_functions).

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Un calcul qui est une séquence de valeurs de calcul entrecoupées d'opérateurs d'addition (`+`) et de soustraction (`-`). Ce type de données nécessite que les deux valeurs aient des unités.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Un calcul qui est une séquence de valeurs de calcul entrecoupées d'opérateurs de multiplication (`*`) et de division (`/`). Lors de la multiplication, une valeur doit être sans unité. Lors de la division, la deuxième valeur doit être sans unité.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Définit les valeurs acceptées pour les calculs, des valeurs telles que {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} ou des calculs imbriqués {{cssxref("&lt;calc-sum&gt;")}}.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Définit un certain nombre de mots-clés CSS représentant des constantes numériques telles que `e` et `π`, qui peuvent être utilisés dans les fonctions mathématiques CSS.

## Types de données de forme

Les modules [formes CSS](/fr/docs/Web/CSS/Guides/Shapes) et [bordures et décorations de boîtes CSS](/fr/docs/Web/CSS/CSS_borders_and_box_decorations) définissent des types de données de forme&nbsp;:

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Décrit les fonctions de forme utilisées dans les propriétés {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} et {{cssxref("offset-path")}}.
- {{cssxref("&lt;corner-shape-value&gt;")}}
  - : Décrit la forme d'un coin de conteneur. Il est utilisé par la propriété abrégée {{cssxref("corner-shape")}} et ses [propriétés constitutives](/fr/docs/Web/CSS/corner-shape#constituent_properties) pour spécifier la forme appliquée aux coins de conteneur affectés.

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Fonctions de valeur CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
