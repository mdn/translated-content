---
title: Types de données numériques
slug: Web/CSS/Guides/Values_and_units/Numeric_data_types
original_slug: Web/CSS/CSS_values_and_units/Numeric_data_types
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Chaque déclaration CSS se compose d'une paire propriété/valeur. La valeur peut inclure divers types de données en fonction de la propriété, tels qu'un seul nombre, un mot-clé, une fonction ou une combinaison de différents types&nbsp;; certaines valeurs ont des unités, tandis que d'autres n'en ont pas. Les types de données numériques incluent {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, et {{cssxref("&lt;percentage&gt;")}}. Ce guide est un aperçu des types de données numériques. Consultez la page de chaque type de valeur pour des informations plus détaillées.

## Entiers

Un entier est un ou plusieurs chiffres décimaux, `0` à `9`, tel que `1024` ou `-55`. Un entier peut être précédé d'un symbole `+` ou `-`, sans espace entre le symbole et l'entier.

## Nombres

Un {{cssxref("&lt;number&gt;")}} représente un nombre réel, qui peut ou non avoir un point décimal avec une composante fractionnaire, par exemple `0.255`, `128` ou `-1.2`. Les nombres peuvent également être précédés d'un symbole `+` ou `-`.

## Dimensions

Un {{cssxref("&lt;dimension&gt;")}} est un `<number>` auquel une unité est attachée, par exemple `45deg`, `100ms` ou `10px`. L'identifiant d'unité attaché est insensible à la casse. Il n'y a jamais d'espace ni d'autres caractères entre le nombre et l'identifiant d'unité&nbsp;: c'est-à-dire que `1 cm` n'est pas valide.

CSS utilise des dimensions pour spécifier&nbsp;:

- {{cssxref("&lt;length&gt;")}} (Unités de distance)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Elles sont toutes couvertes dans les sous-sections suivantes.

### Unités de distance

Lorsqu'une unité de distance, également connue sous le nom de longueur, est autorisée comme valeur pour une propriété, cela est décrit comme le type {{cssxref("&lt;length&gt;")}}. Il existe deux types de longueurs en CSS&nbsp;: relative et absolue. Les unités de longueur relatives spécifient une longueur par rapport à quelque chose d'autre.

Il existe deux types de longueurs relatives&nbsp;: les longueurs relatives à la police et les longueurs relatives au pourcentage de la fenêtre d'affichage. Ces deux types se déclinent en deux catégories. Les unités de longueur relatives à la police sont soit locales, soit racines. Les longueurs relatives au pourcentage de la fenêtre d'affichage sont soit relatives à la hauteur ou à la largeur de la fenêtre d'affichage, soit, comme défini dans le [module de confinement CSS](/fr/docs/Web/CSS/Guides/Containment), relatives à un [conteneur](/fr/docs/Web/CSS/CSS_containment/Container_queries#unités_de_distance_pour_les_requêtes_de_conteneurs).

#### Longueurs relatives à la police locales

Les longueurs relatives à la police locales sont relatives à la taille de police ou à la hauteur de ligne «&nbsp;locale&nbsp;», spécifiant une longueur par rapport à une taille calculée d'une caractéristique de l'[élément](/fr/docs/Web/HTML/Reference/Elements) lui-même, ou relative à la valeur héritée de l'élément dans le cas d'une référence circulaire, comme la valeur `em` pour une propriété {{cssxref("font-size")}} ou une valeur `lh` pour une propriété {{cssxref("line-height")}}.
Par exemple, `em` est relative à la taille de police sur l'élément et `ex` est relative à la hauteur x de la police de l'élément.

| Unité | Relative à                                                                                                                                                            |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap` | Hauteur des majuscules (hauteur nominale des lettres majuscules) de la police de caractères de l'élément.                                                             |
| `ch`  | Avancement moyen des caractères d'un glyphe étroit dans la police de l'élément, tel que représenté par le glyphe «&nbsp;0&nbsp;» (ZERO, U+0030).                      |
| `em`  | Taille de police de la police de l'élément.                                                                                                                           |
| `ex`  | Hauteur x de la police de l'élément.                                                                                                                                  |
| `ic`  | Avancement moyen des caractères d'un glyphe plein dans la police de l'élément, tel que représenté par le glyphe «&nbsp;水&nbsp;» (idéogramme CJK pour l'eau, U+6C34). |
| `lh`  | Hauteur de ligne de l'élément.                                                                                                                                        |

#### Longueurs relatives à la police racine

Les longueurs relatives à la police racine spécifient une longueur par rapport à l'[élément racine](/fr/docs/Web/CSS/Reference/Selectors/:root) de l'élément, tel que {{HTMLElement("HTML")}} ou {{SVGElement("SVG")}}.
Par exemple, `rem` est relative à la taille de police sur l'élément racine et `rex` est la hauteur x de la police de l'élément racine.

| Unité  | Relative à                                                                                                                                                                   |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap` | Hauteur des majuscules (hauteur nominale des lettres majuscules) de la police de caractères de l'élément racine.                                                             |
| `rch`  | Avancement moyen des caractères d'un glyphe étroit dans la police de l'élément racine, tel que représenté par le glyphe «&nbsp;0&nbsp;» (ZERO, U+0030).                      |
| `rem`  | Taille de police de la police de l'élément racine.                                                                                                                           |
| `rex`  | Hauteur x de la police de l'élément racine.                                                                                                                                  |
| `ric`  | Avancement moyen des caractères d'un glyphe plein dans la police de l'élément racine, tel que représenté par le glyphe «&nbsp;水&nbsp;» (idéogramme CJK pour l'eau, U+6C34). |
| `rlh`  | Hauteur de ligne de l'élément racine.                                                                                                                                        |

#### Unités de la vue

Les longueurs d'unité de la vue (<i lang="en">viewport</i> en anglais) spécifient une longueur par rapport aux dimensions de la [vue](/fr/docs/Glossary/Viewport).
Par exemple, `vw` est relative à la largeur de la vue et `vh` est relative à la hauteur de la vue.

| Unité  | Relative à                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------ |
| `dvh`  | 1% de la hauteur de la [vue dynamique](/fr/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units).     |
| `dvw`  | 1% de la largeur de la [vue dynamique](/fr/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units).     |
| `lvh`  | 1% de [large de la hauteur de la vue](/fr/docs/Web/CSS/Reference/Values/length#large_viewport_units).        |
| `lvw`  | 1% de [large de la largeur de la vue](/fr/docs/Web/CSS/Reference/Values/length#large_viewport_units).        |
| `svh`  | 1% de [small de la hauteur de la vue](/fr/docs/Web/CSS/Reference/Values/length#small_viewport_units).        |
| `svw`  | 1% de [small de la largeur de la vue](/fr/docs/Web/CSS/Reference/Values/length#small_viewport_units).        |
| `vb`   | 1% de la taille de la vue dans l'[axe de bloc](/fr/docs/Glossary/Flow_relative_values) de l'élément racine.  |
| `vh`   | 1% de la hauteur de la vue.                                                                                  |
| `vi`   | 1% de la taille de la vue dans l'[axe en ligne](/fr/docs/Glossary/Flow_relative_values) de l'élément racine. |
| `vmax` | 1% de la plus grande dimension de la vue.                                                                    |
| `vmin` | 1% de la plus petite dimension de la vue.                                                                    |
| `vw`   | 1% de la largeur de la vue.                                                                                  |

#### Unités de conteneur

Les unités de longueur de requête de conteneur spécifient une longueur par rapport aux dimensions d'un [conteneur de requête](/fr/docs/Web/CSS/CSS_containment/Container_queries).
Par exemple, `cqw` est relative à la largeur du conteneur de requête et `cqh` est relative à la hauteur du conteneur de requête.

| Unité   | Relative à                                         |
| ------- | -------------------------------------------------- |
| `cqb`   | 1% de la taille de bloc d'un conteneur de requête  |
| `cqh`   | 1% de la hauteur d'un conteneur de requête         |
| `cqi`   | 1% de la taille en ligne d'un conteneur de requête |
| `cqmax` | La plus grande valeur entre `cqi` ou `cqb`         |
| `cqmin` | La plus petite valeur entre `cqi` ou `cqb`         |
| `cqw`   | 1% de la largeur d'un conteneur de requête         |

### Unités de longueur absolue

Les unités de longueur absolue sont fixées à une longueur physique&nbsp;: soit un pouce, soit un centimètre. Beaucoup de ces unités sont donc plus utiles lorsque la sortie est un média de taille fixe, comme l'impression. Par exemple, `mm` est un millimètre physique, 1/10ème de centimètre.

| Unité | Nom                 | Équivalent à        |
| ----- | ------------------- | ------------------- |
| `cm`  | Centimètres         | 1cm = 96px/2.54     |
| `in`  | Pouces              | 1in = 2.54cm = 96px |
| `mm`  | Millimètres         | 1mm = 1/10th of 1cm |
| `pc`  | Picas               | 1pc = 1/6th of 1in  |
| `pt`  | Points              | 1pt = 1/72th of 1in |
| `px`  | Pixels              | 1px = 1/96th of 1in |
| `Q`   | Quart de millimètre | 1Q = 1/40th of 1cm  |

Quand on inclut une valeur de longueur, si la longueur est `0`, l'identifiant d'unité n'est pas requis. Sinon, l'identifiant d'unité est requis, est insensible à la casse et doit venir immédiatement après la partie numérique de la valeur, sans espace entre les deux.

#### Unités d'angle

Les valeurs d'angle sont représentées par le type {{cssxref("&lt;angle&gt;")}} et acceptent les valeurs suivantes&nbsp;:

| Unité  | Nom      | Description                                 |
| ------ | -------- | ------------------------------------------- |
| `deg`  | Degrés   | Il y a 360 degrés dans un cercle complet.   |
| `grad` | Gradians | Il y a 400 gradians dans un cercle complet. |
| `rad`  | Radians  | Il y a 2π radians dans un cercle complet.   |
| `turn` | Tours    | Il y a 1 tour dans un cercle complet.       |

#### Unités de temps

Les valeurs de temps sont représentées par le type {{cssxref("&lt;time&gt;")}}. Lors de l'inclusion d'une valeur temporelle, l'identifiant d'unité — le `s` ou `ms` — est requis. Il accepte les valeurs suivantes.

| Unité | Nom           | Description                                  |
| ----- | ------------- | -------------------------------------------- |
| `ms`  | Millisecondes | Il y a 1 000 millisecondes dans une seconde. |
| `s`   | Secondes      | Il y a 1 seconde dans une seconde.           |

#### Unité de fréquence

Les valeurs de fréquence sont représentées par le type {{cssxref("&lt;frequency&gt;")}}. Il accepte les valeurs suivantes.

| Unité | Nom       | Description                                     |
| ----- | --------- | ----------------------------------------------- |
| `Hz`  | Hertz     | Représente le nombre d'occurrences par seconde. |
| `kHz` | KiloHertz | Un kiloHertz est 1000 Hertz.                    |

`1Hz`, qui peut également être écrit comme `1hz` ou `1HZ`, est un cycle par seconde.

#### Unité flexible

Les unités flexibles sont représentées par le type {{cssxref("&lt;flex&gt;")}}. Il accepte la valeur suivante.

| Unité | Nom  | Description                                                              |
| ----- | ---- | ------------------------------------------------------------------------ |
| `fr`  | Flex | Représente une longueur flexible à l'intérieur d'un conteneur de grille. |

#### Unités de résolution

Les unités de résolution sont représentées par le type {{cssxref("&lt;resolution&gt;")}}. Elles représentent la taille d'un seul point dans une représentation graphique, comme un écran, en indiquant combien de ces points tiennent dans un pouce, un centimètre ou un pixel CSS. Elle accepte les valeurs suivantes&nbsp;:

| Unité       | Description            |
| ----------- | ---------------------- |
| `dpcm`      | Points par centimètre. |
| `dpi`       | Points par pouce.      |
| `dppx`, `x` | Points par unité px.   |

### Pourcentages

Un {{cssxref("&lt;percentage&gt;")}} est un type qui représente une fraction d'une autre valeur.

Les valeurs en pourcentage sont toujours relatives à une autre quantité, par exemple une longueur. Chaque propriété qui permet des pourcentages définit également la quantité à laquelle le pourcentage se réfère. Cette quantité peut être une valeur d'une autre propriété du même élément, la valeur d'une propriété d'un élément ancêtre, une mesure d'un bloc conteneur, ou autre chose.

Par exemple, si vous spécifiez la {{cssxref("width")}} d'une boîte en pourcentage, cela fait référence au pourcentage de la largeur calculée du parent de la boîte&nbsp;:

```css
.box {
  width: 50%;
}
```

## Mélange de pourcentages et de dimensions

Certaines propriétés acceptent une dimension qui pourrait être l'un des deux types, par exemple une `<length>` **ou** un `<percentage>`. Dans ce cas, la valeur autorisée est détaillée dans la spécification comme une unité de combinaison, par exemple {{cssxref("&lt;length-percentage&gt;")}}. D'autres combinaisons possibles sont les suivantes&nbsp;:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Types de données spéciaux (définis dans d'autres spécifications)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Couleur

La valeur {{cssxref("&lt;color&gt;")}} spécifie la couleur d'une caractéristique d'élément (par exemple, sa couleur d'arrière-plan) et est définie dans le [Module CSS Color <sup>(angl.)</sup>](https://drafts.csswg.org/css-color-3/).

### Image

La valeur {{cssxref("&lt;image&gt;")}} spécifie tous les différents types d'images qui peuvent être utilisés en CSS et est définie dans le [Module CSS Image Values and Replaced Content <sup>(angl.)</sup>](https://drafts.csswg.org/css-images-4/).

### Position

Le type {{cssxref("&lt;position&gt;")}} définit le positionnement 2D d'un objet à l'intérieur d'une zone de positionnement, par exemple une image d'arrière-plan à l'intérieur d'un conteneur. Ce type est interprété comme un {{cssxref("background-position")}} et est donc spécifié dans la [spécification CSS Backgrounds and Borders <sup>(angl.)</sup>](https://drafts.csswg.org/css-backgrounds/).

## Notation fonctionnelle

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("attr", "attr()")}}

La [notation fonctionnelle](/fr/docs/Web/CSS/Reference/Values/Functions) est un type de valeur qui peut représenter des types plus complexes ou invoquer un traitement spécial par CSS. La syntaxe commence par le nom de la fonction immédiatement suivi d'une parenthèse gauche `(` suivie de l'argument (ou des arguments) de la notation suivie d'une parenthèse droite `)`. Les fonctions peuvent prendre plusieurs arguments, qui sont formatés de manière similaire à une valeur de propriété CSS.

L'espace blanc est autorisé, mais optionnel à l'intérieur des parenthèses. (Mais voir les notes concernant l'espace blanc dans les pages pour les fonctions `min()`, `max()`, `minmax()`, et `clamp()`.)

Certaines notations fonctionnelles héritées, telles que la syntaxe héritée pour `rgb()`, `rgba()`, `hsl()`, et `hsla()`, utilisaient des virgules, mais les virgules sont généralement utilisées uniquement pour séparer les éléments d'une liste. Si une virgule est utilisée pour séparer les arguments, l'espace blanc est optionnel avant et après la virgule.

La spécification définit également la fonction `toggle()`. Elle n'a pas encore été implémentée nulle part.

## Spécifications

{{Specifications}}

## Voir aussi

- [Types de données textuelles](/fr/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- Le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
