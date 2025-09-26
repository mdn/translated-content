---
title: animation-composition
slug: Web/CSS/animation-composition
l10n:
  sourceCommit: 70ee2d938e88ea59098a51076be5acc0a0920319
---

{{CSSRef}}{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`animation-composition`** définit une [opération composite](/fr/docs/Glossary/Composite_operation) à utiliser lorsque plusieurs animations touchent simultanément la même propriété.

## Syntaxe

```css
/* Une seule animation */
animation-composition: replace;
animation-composition: add;
animation-composition: accumulate;

/* Plusieurs animations */
animation-composition: replace, add;
animation-composition: add, accumulate;
animation-composition: replace, add, accumulate;

/* Valeurs globales */
animation-composition: inherit;
animation-composition: initial;
animation-composition: revert;
animation-composition: revert-layer;
animation-composition: unset;
```

> [!NOTE]
> Lorsqu'on indique plusieurs valeurs, séparées par des virgules, à une propriété `animation-*`, celles-ci seront appliquées aux animations selon leur ordre d'apparition dans [`animation-name`](/fr/docs/Web/CSS/animation-name). Si le nombre d'animations et de compositions est différent, les valeurs de `animation-composition` seront réutilisées en bouclant depuis le début, jusqu'à ce que toutes les animations aient reçue une valeur `animation-composition`. Pour plus d'informations, voir [définir les valeurs de propriétés pour plusieurs animations](/fr/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Valeurs

- `replace`
  - : La valeur d'effet remplace la valeur sous-jacente de la propriété. Il s'agit de la valeur par défaut.
- `add`
  - : La valeur d'effet est construite à partir de la valeur sous-jacente de la propriété. L'opération produit un effet additif. Pour les types d'animation pour lesquels l'opération d'addition n'est pas commutative, le premier opérande est la valeur sous-jacente et le second opérande est la valeur d'effet.
- `accumulate`
  - : La valeur d'effet et la valeur sous-jacente sont combinées. Pour les types d'animation où l'opération d'addition n'est pas commutative, le premier opérande est la valeur sous-jacente et le second opérande est la valeur d'effet.

## Description

Chaque propriété ciblée par une règle @ [`@keyframes`](/fr/docs/Web/CSS/@keyframes) est associée avec une pile d'effets. La valeur de la pile d'effets est calculée en combinant la valeur _sous-jacente_ d'une propriété CSS dans une règle de style avec la valeur _d'effet_ de cette propriété dans l'image-clé (<i lang="en">keyframe</i>). La propriété `animation-composition` aide à indiquer la façon dont sont combinées la valeur sous-jacente et la valeur d'effet.

Par exemple, dans le fragment CSS qui suit, `blur(5px)` est la valeur sous-jacente, et `blur(10px)` est la valeur d'effet. La propriété `filter` est modifiée par les deux animations, `pulse` et `brightness-pulse`. La propriété `animation-composition` indique l'opération à réaliser afin de produire l'effet final, après avoir combiné l'effet de la valeur sous-jacente et de la valeur d'effet.

```css
.icon:hover {
  filter: blur(5px);
  animation: 3s infinite pulse;
  animation-composition: add;
}

@keyframes pulse {
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(20px);
  }
}
```

Prenons l'hypothèse d'autres valeurs que celle utilisée avant pour `animation-composition` afin d'illustrer l'impact final&nbsp;:

- Avec `animation-composition: replace;`, `blur(10px)` aurait remplacé `blur(5px)` pour l'image-clé à `0%`. C'est le comportement par défaut de la propriété.
- Avec `animation-composition: add;`, l'effet de la valeur composite pour l'image-clé à `0%` aurait été `blur(5px) blur(10px)`.
- Avec `animation-composition: accumulate`, l'effet de la valeur composite pour l'image-clé à `0%` aurait été `blur(15px)`.

> [!NOTE]
> Une opération composite peut également être indiquée dans une image-clé donnée. Dans ce cas, l'opération composite indiquée est utilisée pour chaque propriété, d'abord pour celles de l'image-clé courante, puis sur chaque propriété de l'image-clé suivante.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Comprendre les valeurs de `animation-composition`

L'exemple qui suit illustre les effets des différentes valeurs de `animation-composition`.

#### HTML

```html
<div class="container">
  <code>replace</code>
  <div id="replace" class="target"></div>
</div>
<div class="container">
  <code>add</code>
  <div id="add" class="target"></div>
</div>
<div class="container">
  <code>accumulate</code>
  <div id="accumulate" class="target"></div>
</div>
```

#### CSS

Ici, la valeur sous-jacente est `translateX(50px) rotate(45deg)`.

```css
@keyframes slide {
  20%,
  40% {
    transform: translateX(100px);
    background: yellow;
  }
  80%,
  100% {
    transform: translateX(150px);
    background: orange;
  }
}
.container {
  width: 240px;
  height: 220px;
  background: cyan;
  display: inline-block;
}
.target {
  width: 20px;
  height: 50px;
  background: green;
  border-radius: 10px;
  transform: translateX(50px) rotate(45deg);
  animation: slide 5s linear infinite;
}
.target:hover {
  animation-play-state: paused;
}
#replace {
  animation-composition: replace;
}
#add {
  animation-composition: add;
}
#accumulate {
  animation-composition: accumulate;
}
```

#### Résultat

{{EmbedLiveSample("","100%","450")}}

- Avec `replace`, la valeur d'effet finale pour la propriété `transform` pour l'image-clé `20%, 40%` est `translateX(100px)` (qui remplace complètement la valeur sous-jacente `translateX(50px) rotate(45deg)`). Dans ce cas, l'élément pivote de `45deg` vers `0deg`, car l'animation part de la valeur par défaut pour l'élément jusqu'à la valeur d'absence de rotation, comme défini à la progression de 20%. Il s'agit du comportement par défaut.
- Avec `add`, la valeur d'effet finale pour la propriété `transform` pour l'image-clé `20%, 40%` est `translateX(50px) rotate(45deg)`, suivie par `translateX(100px)`. L'élément est donc déplacé de `50px` vers la droite, tourné de `45deg`, puis translaté de `100px` supplémentaires le long de l'axe X nouvellement orienté.
- Avec `accumulate`, la valeur d'effet finale pour l'image-clé `20%, 40%` est `translateX(150px) rotate(45deg)`. Cela signifie que les deux translations sur l'axe X, avec les valeurs `50px` et `100px`, sont combinées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des animations CSS](/fr/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [La propriété `composite` de l'interface `KeyFrameEffect` de l'API Web Animations](/fr/docs/Web/API/KeyframeEffect/composite)
