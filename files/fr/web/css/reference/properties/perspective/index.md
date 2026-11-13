---
title: Propriété CSS `perspective`
short-title: perspective
slug: Web/CSS/Reference/Properties/perspective
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`perspective`** détermine la distance entre le plan d'équation `z = 0` et la position de l'utilisateur·ice afin de donner une perspective aux éléments positionnés en 3D.

{{InteractiveExample("Démonstration CSS&nbsp;: perspective")}}

```css interactive-example-choice
perspective: none;
```

```css interactive-example-choice
perspective: 800px;
```

```css interactive-example-choice
perspective: 23rem;
```

```css interactive-example-choice
perspective: 5.5cm;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
perspective: none;

/* Valeurs de type <length> */
perspective: 20px;
perspective: 3.5em;

/* Valeurs globales */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'on n'applique aucune perspective.
- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur qui indique la distance entre l'utilisateur·ice et le plan d'équation `z = 0`. Elle est utilisée pour appliquer une perspective à l'élément et à son contenu. Les valeurs négatives sont des erreurs de syntaxe. Si la valeur est inférieure à `1px`, elle est ramenée à `1px`.

## Description

Chaque élément 3D avec `z>0` devient plus grand&nbsp;; chaque élément 3D avec `z<0` devient plus petit. L'intensité de l'effet est déterminée par la valeur de cette propriété.
Les grandes valeurs de `perspective` provoquent une petite transformation&nbsp;; les petites valeurs de `perspective` provoquent une grande transformation.

Les parties des éléments 3D qui se trouvent derrière l'utilisateur·ice — c'est-à-dire dont les coordonnées sur l'axe z sont supérieures à la valeur de la propriété CSS `perspective` — ne sont pas dessinées.

Le _point de fuite_ est par défaut placé au centre de l'élément, mais sa position peut être modifiée en utilisant la propriété {{CSSxRef("perspective-origin")}}.

L'utilisation de cette propriété avec une valeur autre que `none` crée un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context). De plus, dans ce cas, l'objet agira comme un bloc contenant pour les éléments `position: fixed` qu'il contient.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la perspective

Un exemple montrant comment un cube varie si la `perspective` est définie à différentes positions est donné dans [Utiliser les transformations CSS > Définir la perspective](/fr/docs/Web/CSS/Guides/Transforms/Using#définir_la_perspective).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
