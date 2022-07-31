---
title: Transformations de base
slug: Web/SVG/Tutorial/Basic_Transformations
tags:
  - Intermediate
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Basic_Transformations
original_slug: Web/SVG/Tutoriel/Transformations_de_base
---
{{ PreviousNext("Web/SVG/Tutoriel/Texts", "Web/SVG/Tutoriel/Découpages_et_masquages") }}

Maintenant, nous sommes prêts à tordre nos images dans tous les sens. Mais avant toute chose, il faut vous présenter l'élément `<g>`. Cet assistant va vous permettre d'assigner des attributs à un ensemble d'éléments. En fait, c'est bien son seul rôle. Par exemple :

## Exemple

```html
<svg width="30" height="10">
    <g fill="red">
        <rect x="0" y="0" width="10" height="10" />
        <rect x="20" y="0" width="10" height="10" />
    </g>
</svg>
```

{{ EmbedLiveSample('Exemple', '30', '10') }}

Toutes les transformations suivantes sont résumées dans l'attribut `transform` de l'élément. Les transformations peuvent être mises les unes à la suite des autres, tout simplement en les écrivant toutes dans cet attribut, séparées par des espaces.

## Translation

Il peut être nécessaire de décaler un élément, même s'il est possible de définir sa position dans ses attributs. Pour ce faire, la fonction `translate()` est parfaite.

```html
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

Cet exemple a pour résultat un rectangle, qui est déplacé du point (0,0) au point (30,40).

{{ EmbedLiveSample('Translation', '40', '50') }}

Si la deuxième valeur de `translate()` n'est pas définie, elle sera pas défaut assignée à 0.

## Rotation

Appliquer une rotation à un élément est assez simple : il suffit d'utiliser la fonction `rotate()`.

```html
<svg width="31" height="31">
    <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

Cet exemple montre un carré pivoté de 45°. La valeur de la rotation doit être définie en degrés.

{{ EmbedLiveSample('Rotation', '31', '31') }}

## Transformations multiples

Les transformations peuvent être concaténées, séparées par des espaces. Par exemple, `translate()` et `rotate()` sont couramment utilisées ensemble:

```html
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40) rotate(45)" />
</svg>
```

{{ EmbedLiveSample('Transformations_multiples', '40', '50') }}

Cet exemple montre un carré déplacé et pivoté de 45 degrés.

## Déformation

Pour transformer un rectangle en un losange, vous pouvez utiliser les fonctions `skewX()` et `skewY()`. Chacun prend pour attribut un angle qui détermine le biais de l'élément transformé.

## Agrandissement et réduction

`scale()` modifie la taille d'un élément. Cette fonction prend en paramètre 2 valeurs de transformation, la première pour celle des X et la deuxième pour celle des Y. Ces valeurs sont écrites sous forme de ratio : 0.5 correspond à une réduction à 50%, 1.5 à une augmentation de 50%. Attention, c'est le système de chiffre anglo-saxon qui est ici utilisé, il faut donc déclarer un nombre réel en utilisant un point et non une virgule. _Si la deuxième valeur n'est pas déclarée, elle est considérée par défaut comme égale à la première._

## Transformations complexes avec matrice

Toutes les transformations détaillées ci-dessous peuvent être décrites dans une matrice de passage 3 par 3. Il est alors possible de combiner plusieurs transformations en appliquant directement la matrice de transformation `matrix(a, b, c, d, e, f)` qui mappe les coordonnées d'un système de coordonnées précédent en un nouveau système de coordonnées par

<math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x*{\mathrm{prevCoordSys}} = a x*{\mathrm{newCoordSys}} + c y*{\mathrm{newCoordSys}} + e \\ y*{\mathrm{prevCoordSys}} = b x*{\mathrm{newCoordSys}} + d y*{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics></math>

Voici un [exemple concret sur la documentation de transformation SVG](/fr/docs/Web/SVG/Attribute/transform#General_Transformation). Pour plus de renseignements, veuillez vous référer à [la page de recommandation SVG](http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined).

## Effets sur les systèmes de coordonnées

Quand vous utilisez une transformation, vous définissez un nouveau système de coordonnées dans l'élément que vous transformez. Cela signifie que vous appliquez la transformation à tous les attributs de l'élément transformé et donc que cet élément n'est plus dans une carte de pixel d'échelle 1:1. Cette carte est également déplacée, déformée, agrandie ou réduite selon la transformation qui lui est appliquée.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

Cet exemple aura pour résultat un rectangle de 100 par 100 pixels. Les effets les plus étonnants apparaissent lorsque vous utilisez des attributs tels que `userSpaceOnUse`.

{{ EmbedLiveSample('Effets_sur_les_systèmes_de_coordonnées', '100', '100') }}

## Embarquer du SVG dans SVG

Par opposition au HTML, le SVG peut embarquer d'autres éléments `svg` déclarés de manière tout à fait transparente. De cette façon, vous pouvez très simplement créer de nouveaux systèmes de coordonnées en utilisant `viewBox`, `width` et `height` de l'élément `svg`.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

Cet exemple a le même effet que celui vu précédemment, soit un rectangle deux fois plus grand que ce qu'il est défini.

{{ EmbedLiveSample('Embarquer_du_SVG_dans_SVG', '100', '100') }}

{{ PreviousNext("Web/SVG/Tutoriel/Texts", "Web/SVG/Tutoriel/Découpages_et_masquages") }}

Interwiki Languages Links
