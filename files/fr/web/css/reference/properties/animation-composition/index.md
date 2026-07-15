---
title: Propriété CSS `animation-composition`
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 68bff8f2a51944e80394307c8e5c2879c167b126
---

La propriété [CSS](/fr/docs/Web/CSS) **`animation-composition`** définit une {{Glossary("Composite_operation", "opération composite")}} à utiliser lorsque plusieurs animations touchent simultanément la même propriété.

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
> Lorsqu'on indique plusieurs valeurs, séparées par des virgules, à une propriété `animation-*`, celles-ci sont appliquées aux animations selon leur ordre d'apparition dans {{CSSxRef("animation-name")}}. Si le nombre d'animations et de compositions est différent, les valeurs de `animation-composition` sont réutilisées en bouclant depuis le début, jusqu'à ce que toutes les animations aient reçue une valeur `animation-composition`. Pour plus d'informations, voir [définir plusieurs valeurs de propriétés d'animation](/fr/docs/Web/CSS/Guides/Animations/Using#définir_plusieurs_valeurs_de_propriétés_danimation).

### Valeurs

- `replace`
  - : La valeur d'effet remplace la valeur sous-jacente de la propriété. Il s'agit de la valeur par défaut.
- `add`
  - : La valeur d'effet est construite à partir de la valeur sous-jacente de la propriété. L'opération produit un effet additif. Pour les types d'animation pour lesquels l'opération d'addition n'est pas commutative, le premier opérande est la valeur sous-jacente et le second opérande est la valeur d'effet.
- `accumulate`
  - : La valeur d'effet et la valeur sous-jacente sont combinées. Pour les types d'animation où l'opération d'addition n'est pas commutative, le premier opérande est la valeur sous-jacente et le second opérande est la valeur d'effet.

## Description

Chaque propriété ciblée par une règle {{CSSxRef("@keyframes")}} est associée avec une pile d'effets. La valeur de la pile d'effets est calculée en combinant la valeur _sous-jacente_ d'une propriété CSS dans une règle de style avec la valeur _d'effet_ de cette propriété dans l'image-clé (<i lang="en">keyframe</i>). La propriété `animation-composition` aide à indiquer la façon dont sont combinées la valeur sous-jacente et la valeur d'effet.

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

- Avec `animation-composition: replace;`, `blur(10px)` a remplacé `blur(5px)` pour l'image-clé à `0%`. C'est le comportement par défaut de la propriété.
- Avec `animation-composition: add;`, l'effet de la valeur composite pour l'image-clé à `0%` a été `blur(5px) blur(10px)`.
- Avec `animation-composition: accumulate`, l'effet de la valeur composite pour l'image-clé à `0%` a été `blur(15px)`.

> [!NOTE]
> Une opération composite peut également être indiquée dans une image-clé donnée. Dans ce cas, l'opération composite indiquée est utilisée pour chaque propriété, d'abord pour celles de l'image-clé courante, puis sur chaque propriété de l'image-clé suivante.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comprendre les valeurs de `animation-composition`

L'exemple qui suit illustre les effets des différentes valeurs de `animation-composition`.

#### HTML

```html
<div class="conteneur">
  <code>replace</code>
  <div id="remplacer" class="cible"></div>
</div>
<div class="conteneur">
  <code>add</code>
  <div id="ajouter" class="cible"></div>
</div>
<div class="conteneur">
  <code>accumulate</code>
  <div id="accumuler" class="cible"></div>
</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.conteneur {
  flex: 1;
  min-width: 200px;
  height: 200px;
  background: lightblue;
  display: inline-block;
  text-align: center;
}

.cible {
  width: 20px;
  height: 50px;
  background: green;
  border-radius: 10px;
  margin: 20px 0;
}
```

```css
@keyframes slide {
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateX(150px);
  }
}

.cible {
  transform: translateX(30px) rotate(45deg);
  animation: slide 5s linear infinite;
}
#remplacer {
  animation-composition: replace;
}
#ajouter {
  animation-composition: add;
}
#accumuler {
  animation-composition: accumulate;
}
```

#### Résultat

{{EmbedLiveSample("Comprendre les valeurs de `animation-composition`", "100%", 250)}}

La valeur sous-jacente de la propriété `transform` est, dans tous les cas, `translateX(30px) rotate(45deg)`. Les effets des différentes valeurs de `animation-composition` sont les suivants&nbsp;:

- Avec `replace`, la propriété `transform` de chaque image clé remplace entièrement la propriété `transform` sous-jacente définie sur l'élément animé. La valeur finale de la propriété `transform` à l'image clé `50%` est `translateY(30px)` (sans `rotate` ni `translateX`)&nbsp;; à l'image clé `100%`, elle est `translateX(150px)` (sans `rotate` ni `translateY`).

  La cible commence à `transform: translateX(30px) rotate(45deg)` et s'anime effectivement vers `transform: translateY(30px)`, puis vers `transform: translateX(150px)`.

- Avec `add`, la valeur finale de l'effet à chaque image clé correspond à la valeur `transform` sous-jacente, suivie immédiatement de la valeur de l'effet.

  Ainsi, la cible commence à `transform: translateX(30px) rotate(45deg)` et s'anime effectivement d'abord vers `transform: translateX(30px) rotate(45deg) translateY(30px)` (ce qui correspond à `30px` "vers le bas" sur l'axe Y tourné), puis vers `transform: translateX(30px) rotate(45deg) translateX(150px)`. Comme l'opération additive est relative au `transform` sous-jacent et non à l'image clé précédente, il n'y a pas de `translateY(30px)` à `100%`, plaçant l'élément à `150px` le long de l'axe X tourné par rapport à la position d'origine.

- Avec `accumulate`, la valeur finale de l'effet est la combinaison du `transform` de l'image clé avec le `transform` sous-jacent. À `50%`, `translateY(30px)` se combine avec le `translateX(30px)` d'origine pour former une seule translation (`translate(30px, 30px)`). À `100%`, le `translateX(150px)` se combine avec le `translateX(30px)` d'origine pour créer `translateX(180px)`.

  Ainsi, la cible commence à `transform: translateX(30px) rotate(45deg)` et s'anime effectivement d'abord vers `transform: translate(30px, 30px) rotate(45deg)`, puis vers `transform: translateX(180px) rotate(45deg)`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- [La propriété `composite` de l'interface `KeyFrameEffect` de l'API Web Animations](/fr/docs/Web/API/KeyframeEffect/composite)
- Les autres propriétés d'animation associées&nbsp;: {{CSSxRef("animation")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timeline")}}, {{CSSxRef("animation-timing-function")}}
