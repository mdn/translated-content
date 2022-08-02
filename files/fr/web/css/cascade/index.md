---
title: Introducing the CSS Cascade
slug: Web/CSS/Cascade
translation_of: Web/CSS/Cascade
spec-urls: https://drafts.csswg.org/css-cascade/
l10n:
  sourceCommit: 015dee55b9c6a429fa376955cdf98fbc70233076
---
{{CSSRef}}

La **cascade** est un algorithme qui définit comment les agents utilisateur combinent les valeurs des propriétés selon leurs différentes sources. La cascade défnit l'origine et la couche qui l'emporte lorsque des déclarations présentes dans plusieurs [origines](#types_dorigine) ou [couches de cascade](/fr/docs/Web/CSS/@layer) définissent une valeur pour une propriété sur un élément.

La cascade est au cœur de CSS, et fait même partie de l'acronyme _**<i lang="en">Cascading</i>**_ <i lang="en">Style Sheets</i> qu'on traduit par feuilles de style en cascade. Lorsqu'un [sélecteur](/fr/docs/Web/CSS/CSS_Selectors) cible un élément, la valeur de la propriété avec l'origine qui a la plus haute précédence est appliquée, même si un sélecteur d'une origine avec une précédence moindre ou d'une autre couche a une [spécificité](/fr/docs/Web/CSS/Specificity) supérieure.

Dans cet article, on explique ce qu'est la cascade et l'ordre dans lequel les [déclarations](/fr/docs/Web/API/CSSStyleDeclaration) [CSS](/fr/docs/Glossary/CSS) cascadent. Nous aborderons également les couches de cascade et les types d'origine. Comprendre la précédence des origines est un prérequis fondamental pour comprendre le fonctionnement de la cascade.

## Types d'origine

L'algorithme de la cascade CSS consiste à sélectionner des déclarations CSS afin de déterminer les valeurs correctes des propriétés CSS. Les déclarations CSS proviennent de différents types d'origine&nbsp;:

- **[Les feuilles de style de l'agent utilisateur](#feuilles_de_styles_de_lagent_utilisateur)**,
- **[Les feuilles de style du site](#feuilles_de_style_du_site)**,
- **[Les feuilles de style de l'utilisatrice ou l'utilisateur](#feuilles_de_style_de_lutilisatrice_ou_lutilisateur)**.

Bien que les feuilles de style proviennent de ces différentes origines et que chacune d'entre elles peut avoir différentes [couches](/fr/docs/Web/CSS/@layer), leurs portées se chevauchent. Pour que l'ensemble fonctionne, l'algorithme de la cascade définit comment elles interagissent. Avant d'étudier ces interactions, définissons quelques termes.

### Feuilles de style de l'agent utilisateur

Les agents utilisateur, ou navigateurs, possèdent des feuilles de style de base qui fournissent des styles par défaut pour tout document. Ces feuilles de styles sont appelées **feuilles de style de l'agent utilisateur** (<i lang="en">user-agent stylesheets</i> en anglais). La plupart des navigateurs utilisent des feuilles de style réelles pour cela et d'autres les simulent dans leur code. Le résultat produit est le même.

Certains navigateurs permettent aux utilisatrices et utilisateurs de modifier les feuilles de style de l'agent utilisateur. Il s'agit toutefois de quelque chose de rare, et qui ne peut pas être contrôlé.

Bien que certaines contraintes soient imposées aux navigateurs sur leurs feuilles de style via la spécification HTML, ils ont une grande latitude. Cela signifie qu'il existe certaines différences entre les navigateurs. Pour simplifier le développement web, certaines équipes de développement peuvent utiliser une feuille de style de réinitialisation telle que [normalize.css](https://github.com/necolas/normalize.css), qui définit les valeurs des propriétés communes avec un état connu, avant de procéder à des modifications spécifiques.

À moins que la feuille de style de l'agent utilisateur inclut [`!important`](/fr/docs/Web/CSS/Specificity#lexception_!important) à côté d'une propriété pour la rendre importante, les styles déclarés par le site, y compris les feuilles de style de réinitialisation, l'emporteront sur les styles de l'agent utilisateur, quelle que soit la spécificité du sélecteur associé.

### Feuilles de style du site

Les **feuilles de style du site** (<i lang="en">author stylesheets</i> en anglais) sont les feuilles de style les plus fréquemment rencontrées. Il s'agit des styles écrits par les équipes de développement web. Ces styles peuvent réinitialiser les styles de l'agent utilisateur, comme indiqué avant, et définir les styles pour la conception d'une page ou application web donnée. C'est la personne ou l'équipe qui développe le site web qui définit les styles du document en utilisant une ou plusieurs feuilles de style importées ou liées, des éléments [`<style>`](/fr/docs/Web/HTML/Element/style) ou encore des styles en incise définis avec l'attribut [`style`](/fr/docs/Web/HTML/Global_attributes#attr-style). Ce sont ces styles qui définissent l'aspect du site web, son thème.

### Feuilles de style de l'utilisatrice ou l'utilisateur

Dans la plupart des navigateurs, l'utilisatrice ou l'utilisateur du site web peut choisir de surcharger les styles en utilisant une feuille de style personnalisée (<i lang="en">user stylesheet</i> en anglais), conçue pour adapter l'expérience de navigation selon ses souhaits. Selon l'agent utilisateur, [ces feuilles de styles peuvent être configurées](https://www.thoughtco.com/user-style-sheet-3469931) directement ou ajoutées grâce à des extensions du navigateurs.

### Les couches de la cascade

L'ordre de la cascade est basé sur le type d'origine. La cascade pour chaque type d'origine dépend de l'ordre de déclaration [des couches de cascade layers](/fr/docs/Web/CSS/@layer) pour chaque type. Quelle que soit l'origine (agent utilisateur, site, utilisatrice ou utilisateur), les styles peuvent être déclarés à l'intérieur ou en dehors de couches nommées ou anonymes. Lorsqu'ils sont déclarés avec [`layer`, `layer()`](/fr/docs/Web/CSS/@import) ou [`@layer`](/fr/docs/Web/CSS/@layer), les styles sont placés dans la couche nommée correspondante, ou dans une couche anonyme si aucun nom n'est fourni. Les styles déclarés en dehors d'une couche sont considérés comme faisant partie d'une couche anonyme déclarée en dernier.

Voyons l'interaction de la cascade entre les différents types d'origine avant de voir les couches de chaque type d'origine.

## L'ordre de la cascade

L'algorithme de la cascade détermine quelle valeur s'applique pour chaque propriété de chaque élément du document. Les étapes suivantes s'appliquent à l'algorithme de la cascade&nbsp;:

1. **Pertinence**&nbsp;: Pour commencer, seules les règles qui s'appliquent à un élément sont conservées. Cela signifie les règles dont le sélecteur correspond à l'élément et qui font partie d'une règle @ `media` appropriée.

2. **Origine et importance**&nbsp;: Ensuite, ces règles sont triées selon leur importance, c'est-à-dire si elles sont suivies ou non par `!important`, et selon leur origine. En ignorant les couches pour le moment, on obtient l'ordre suivant pour la cascade&nbsp;:

    |   Ordre (du plus faible au plus élevé)  | Origine                        | Importance   |
    | --------------------------------------- | ------------------------------ | ------------ |
    | 1                                       | Agent utilisateur (navigateur) | normal       |
    | 2                                       | Utilisatrice/utilisateur       | normal       |
    | 3                                       | Site                           | normal       |
    | 4                                       | Animations CSS @keyframe       |              |
    | 5                                       | Site                           | `!important` |
    | 6                                       | Utilisatrice/utilisateur       | `!important` |
    | 7                                       | Agent utilisateur (navigateur) | `!important` |
    | 8                                       | Transitions CSS                |              |

3. **Spécificité**&nbsp;: En cas d'égalité pour une même origine, [la spécificité](/fr/docs/Web/CSS/Specificity) d'une règle est considérée pour déterminer laquelle choisir. La spécificité des sélecteurs est comparée, et c'est la déclaration avec la plus grande spécificité qui l'emporte.
4. **Ordre d'apparence**&nbsp;: Si plusieurs valeurs pour une même propriété sont décrites dans des règles avec des sélecteurs de même spécificité, c'est la dernière déclaration, dans l'ordre des styles, qui est appliquée.

La cascade progresse dans l'ordre croissant des précédence, les animations ont donc la précédence sur les valeurs normales, qu'elles soient déclarées par l'utilisatrice ou l'utilisateur, le site, ou l'agent utilisateur. Les valeurs importantes l'emportent sur les animations, et les transitions l'emportent sur les valeurs importantes.

> **Note :**  **Transitions et animations**
>
> Les valeurs de propriétés définies par une animation avec [`@keyframes`](/fr/docs/Web/CSS/@keyframes) sont plus importantes que celles de styles normaux (c'est-à-dire sans [`!important`](/fr/docs/Web/CSS/Specificity#lexception_!important)).
>
> Les valeurs des propriétés définies dans une transition ([`transition`](/fr/docs/Web/CSS/transition)) l'emportent sur toutes les autres valeurs, y compris celles marquées avec `!important`.

L'algorithme de la cascade est appliqué _avant_ l'algorithme de la spécificité. Cela signifie que si `:root p { color: red;}` est déclaré dans une feuille de style de l'utilisatrice ou de l'utilisateur (ligne 2 du tableau) et si une règle moins spécifique, `p {color: blue;}`, est présente dans la feuille de style du site (ligne 3 du tableau), les paragraphes seront bleu.

## Exemple simple

Avant de voir le rôle des couches dans la cascade, voyons un exemple impliquant différentes sources de CSS parmi ces origines et déroulons l'algorithme de la cascade étape par étape&nbsp;:

Pour cet exemple, nous aurons une feuille de style provenant de l'agent utilisateur, deux pour le site, une feuille de style de l'utilisatrice ou de l'utilisateur, et des styles en incise dans le HTML&nbsp;:

**Feuille de style de l'agent utilisateur**

```css
li { margin-left: 10px }
```

**Feuille de style du site 1**

```css
li { margin-left: 0 } /* Une règle de réinitialisation */
```

**Feuille de style du site 2**

```css
@media screen {
  li { margin-left: 3px }
}

@media print {
  li { margin-left: 1px }
}

@layer namedLayer {
  li {
    margin-left: 5px ;
  }
}
```

**Feuille de style de l'utilisatrice ou de l'utilisateur**

```css
.specific { margin-left: 1em }
```

**HTML**

```html
<ul>
<li class="specific">1<sup>er</sup></li>
<li>2<sup>e</sup></li>
</ul>
```

Dans ce cas, les règles des déclarations pour `li` et `.specific` devraient s'appliquer.

Comme précédemment, on a quatre étapes dans l'algorithme de la cascade, dans cet ordre&nbsp;:

  1. Pertinence
  2. Origine et importance
  3. Spécificité
  4. Ordre d'apparence

La règle avec une marge de `1px` s'applique aux médias imprimés. Par manque de _pertinence_ du type de média, on la retire des règles à considérer.

Aucune déclaration n'est marquée avec `!important`,  l'ordre porté par la précédence indique que les feuilles de style du site l'emportent sur celles de l'utilisatrice ou de l'utilisateur qui l'emportent sur celles de l'agent utilisateur. Selon _l'origine et l'importance_, la règle à `1em` de la feuille de style de l'utilisatrice ou de l'utilisateur, ainsi que la règle à `10px` qui provient de l'agent utilisateur sont retirées des règles à considérer.

Note that even though the user style on `.specific` of `1em` has a higher specificity, it's a normal declaration in a user style sheet. As such, it has a lower precedence than any author styles, and gets removed by the origin and importance step of the algorithm before specificity even comes into play.

There are three declarations in author stylesheets:

```css
li { margin-left: 0 } /* from author css 1 */
```

```css
@media screen {
  li { margin-left: 3px }
}
```

```css
@layer namedLayer {
  li {
    margin-left: 5px ;
  }
}
```

The last one, the `5px` is part of a cascade layer. Normal declarations in layers have lower precedence than normal styles not in a layer within the same origin type. This is also removed by step 2 of the algorithm, _origin and importance_.

This leaves the `0` and the `3px`, which both have the same selector, hence the same _specificity_.

We then look at _order of appearance_. The second one, the last of the two unlayered author styles, wins.

```css
margin-left: 3px
```

> **Note:** The declaration defined in the user CSS, while it may have greater specificity, is not chosen as the cascade algorithm's _origin and importance_ is applied before the _specificity_ algorithm. The declaration defined in a cascade layer, though it may come later in the code, will not have precedence either as normal styles in cascade layers have less precedence than normal unlayered styles.  _Order of appearance_ only matters when both origin, importance, and specificity are equal.

## Author styles: inline styles, layers, and precedence

The [table in Cascading order](#cascading_order) provided a precedence order overview. The table summarized the user-agent, user, and author origin type styles in two lines each with "origin type - normal" and "origin type - !important". The precedence within each origin type is more nuanced. Styles can be contained within layers within their origin type, and, with author styles, there is also the issue of where inline styles land in the cascade order.

The order in which layers are declared is important in determining precedence. Normal styles in a layer take precedence over styles declared in prior layers; with normal styles declared outside of any layer taking precedence over normal layered styles regardless of specificity.

In this example, the author used CSS's [`@import`](/fr/docs/Web/CSS/@import) rule to import five external style sheets within a [`<style>`](/fr/docs/Web/HTML/Element/style) information element.

```html
<style>
  @import unlayeredStyles.css;
  @import AStyles.css layer(A);
  @import moreUnlayeredStyles.css;
  @import BStyles.css layer(B);
  @import CStyles.css layer(C);
  p {
    color: red;
    padding: 1em !important;
  }
</style>
```

and then in the body of the document we have inline styles:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

 In the CSS code block above, three cascade layers named "A", "B", and "C", were created, in that order. Three stylesheets were imported directly into layers and two were imported without creating or being assigned to a layer.
The "All unlayered styles" in the list below (normal author style precedence - order 4) includes styles from these two stylesheets and the additional unlayered CSS style blocks. In addition, there are two inline styles, a normal `line-height` declaration and an important `text-decoration` declaration:

|  Order (low to high)    | Author style      | Importance   |
| --- | ----------- | ------------ |
| 1   | A - first layer | normal       |
| 2   | B - second layer | normal       |
| 3  | C - last layer      | normal       |
| 4   | All unlayered styles       | normal       |
| 5   | inline `style`        | normal       |
| 6   | animations  |              |
| 7   | All unlayered styles      | `!important` |
| 8   | C - last layer   | `!important` |
| 9   |  B - second layer | `!important`       |
| 10   | A - first layer    | `!important` |
| 11   | inline `style`      | `!important` |
| 12   | transitions |              |

In all origin types, the non important styles contained in layers have the lowest precedence. In our example, the normal styles associated with the first declared layer (A) have lower precedence than normal styles in the second declared layer (B), which have lower precedence than normal styles in the third declared layer (C). These layered styles have lower precedence than all normal unlayered styles, which includes normal styles from `unlayeredStyles.css`, `moreUnlayeredStyles.css`, and the `color` of `p` in the `<style>` itself.

If any of the layered styles in A, B, or C, have selectors with higher specificity matching an element, similar to `:root body p { color: black;}`, it doesn't matter. Those declarations are removed from consideration because of _origin_; normal layered styles have less precedence than normal unlayered styles. If, however, the more specific selector `:root body p { color: black;}` was found in `unlayeredStyles.css`, as both _origin and importance_ have the same precedence, _specificity_ would mean the more specific, black declaration would win.

The layer order of precedence is inverted for styles declared as `!important`. Important styles declared in a layer take precedence over important styles declared outside of a layer. Important styles in the first declared layer (A) take precedence over important declarations found in layer B, which takes precedence over C, which have precedence over important declarations in the unlayered styles.

### Inline styles

Only relevant to author styles are inline styles, declared with the `style` attribute. Normal inline styles take precedence over any other normal author styles, no matter the specificity of the selector. If `line-height: 2;` were declared in a `:root body p` selector block in any of the five imported stylesheets, the line height would still be `1.6`.

Normal inline styles take precedence over any other normal author styles unless the property is being altered by a CSS animation.

All important inline styles take precedence over all author styles, important and not, inline and not, layered and not. Important styles also take precedence over animated properties, but not transitioning properties. Three things can override an important inline style: 1) an important user style, 2) an important user agent style, or 3) a property value being transitioned.

### Importance and layers

The origin type precedence order is inverted for important styles. Important styles declared outside of any cascade layer have lower precedence than those declared as part of a layer. Important values that come in early layers have precedence over important styles declared in subsequent cascade layers.

Take for example the following CSS:

```css
p {
  color: red;
}
@layer B {
  :root p {
    color: blue;
  }
}
```

Even though the red is declared first and has a less specific selector, because unlayered CSS takes precedence over layered CSS, the paragraph will be red. Had we included an inline style on the paragraph setting it to a different color, such as `<p style="color: black">`, the paragraph would be black.

When we add `!important` to this bit of CSS, the precedence order is reversed with the stylesheet:

```css
p {
  color: red !important;
}
@layer B {
  :root p {
    color: blue !important;
  }
}
```

Now the paragraph will be blue. The `!important` in the earliest declared layer takes precedence of subsequent layers and unlayered important declarations. If the inline style contained !important, such as `<p style="color: black !important">`, again the paragraph would be black. Inline importance does take precedence over all other author declared `!important` declarations, no matter the specificity.

> **Note:** `!important` reverses the precedence of cascade layers. For this reason, rather than using `!important` to override external styles, import frameworks, third party styles, widget stylesheets, etc., into layers, demoting their precedence. `!important` should only be used sparingly, if ever, to guard required styles against later overrides, in the first declared layer.

Styles that are transitioning take precedence over all important styles, no matter who or how they are declared.

## Complete cascade order

Now that we have a better understanding of origin type and cascade layer precedence, we realize the table in [Cascading order](#cascading_order) could have more accurately been represented by the following table:

<table>
<thead>
  <tr><th>Precedence Order <br/>(low to high)</th><th>Style Origin</th><th>Importance</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>user-agent - first declared layer</td><td rowspan="3">normal</td></tr>
  <tr><td>user-agent - last declared layer</td></tr>
  <tr><td>user-agent - unlayered styles</td></tr>
  <tr><td rowspan="3">2</td><td>user - first declared layer</td><td rowspan="3">normal</td></tr>
  <tr><td>user - last declared layer</td></tr>
  <tr><td>user - unlayered styles</td></tr>
  <tr><td rowspan="4">3</td><td>author - first declared layer</td><td rowspan="4">normal</td></tr>
  <tr><td>author - last declared layer</td></tr>
  <tr><td>author - unlayered styles</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>animations</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>author - unlayered styles</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>author - last declared layer</td></tr>
  <tr><td>author - first declared layer</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>user - unlayered styles</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>user - last declared layer</td></tr>
  <tr><td>user - first declared styles</td></tr>
  <tr><td rowspan="3">7</td><td>user-agent  - unlayered styles</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>user-agent - last declared layer</td></tr>
  <tr><td>user-agent - first declared styles</td></tr>
  <tr><td>8</td><td>transitions</td><td></td></tr>
</tbody>
</table>

## Which CSS entities participate in the cascade

Only CSS property/value pair declarations participate in the cascade. This means that [at-rules](/fr/docs/Web/CSS/At-rule) containing entities other than declarations, such as a {{ cssxref("@font-face")}} rule containing _descriptors_, don't participate in the cascade.

For the most part, the properties and descriptors defined in at-rules don't participate in the cascade. Only at-rules as a whole participate in the cascade. For example, within a `@font-face` rule, font names are identified by [`font-family`](/fr/docs/Web/CSS/@font-face/font-family) descriptors. If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered. If more than one are identically appropriate, the entire `@font-face` declarations are compared using steps 1, 2, and 4 of the algorithm (there is no specificity when it comes to at-rules).

While the declarations contained in most at-rules — such as those in [`@media`](/fr/docs/Web/CSS/@media), [`@document`](/fr/docs/Web/CSS/@document), or [`@supports`](/fr/docs/Web/CSS/@supports) — participate in the cascade, the at-rule may make an entire selector not relevant, as we saw with the print style in the [basic example](#basic-example).

Declarations in [`@keyframes`](/fr/docs/Web/CSS/@keyframes) don't participate in the cascade.  As with `@font-face`, only the `@keyframes` as a whole is selected via the cascade algorithm. The [precedence order of animation is described below](#css-animations-and-the-cascade).

When it comes to [`@import`](/fr/docs/Web/CSS/@import), the `@import` doesn't participate itself in the cascade, but all of the imported styles do participate. If the `@import` defines a [named or anonymous layer](/fr/docs/Web/CSS/@layer), the contents of the imported stylesheet are placed into the specified layer. All other CSS imported with `@import` is which is treated as the last declared layer. This was discussed above.

Finally, [`@charset`](/fr/docs/Web/CSS/@charset) obeys specific algorithms and isn't affected by the cascade algorithm.

## CSS animations and the cascade

[CSS animations](/fr/docs/Web/CSS/CSS_Animations), using {{ cssxref("@keyframes")}} at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single [`@keyframes`](/fr/docs/Web/CSS/@keyframes), and never mixes multiple ones together.

If the several keyframe animations are defined with the same animation name, the last defined `@keyframes` in the origin and layer with the greatest precedence. Only one `@keyframes` definition is used, even if the `@keyframes` animate different property. `@keyframes` with the same name are never combined.

```css
p {
  animation: infinite 5s alternate repeatedName;
}
@keyframes repeatedName {
  from {font-size: 1rem;}
  to {font-size: 3rem;}
}

@layer A {
  @keyframes repeatedName {
    from {background-color: yellow;}
    to {background-color: orange;}
  }
}
@layer B {
  @keyframes repeatedName {
    from {color: white;}
    to {color: black;}
  }
}
```

In this example, there are three separate animation declaration named `repeatedName`. When `animation: infinite 5s alternate repeatedName` is applied to the paragraph, only one animation is applied: the keyframe animation defined in the unlayered CSS takes precedence over the layered keyframe animation declarations based on origin and cascade layer precedence order. In this example, only the element's font size will be animated.

> **Note:** There are no important animations, as property declarations in a [`@keyframes`](/fr/docs/Web/CSS/@keyframes) block that contain `!important` as part of the value are ignored.

## Resetting styles

After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property [`all`](/fr/docs/Web/CSS/all) lets you quickly set (almost) everything in CSS back to a known state.

`all` lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.

## Spécifications

{{Specifications}}

## Voir aussi

- [Une introduction simple à la cascade CSS](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- {{CSS_Key_Concepts}}
