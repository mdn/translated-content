---
title: Propriété CSS `scale`
short-title: scale
slug: Web/CSS/Reference/Properties/scale
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scale`** permet de définir des transformations de mise à l'échelle individuellement et indépendamment de la propriété {{CSSxRef("transform")}}. Cela correspond mieux à l'utilisation typique de l'interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformation à définir dans la valeur `transform`.

{{InteractiveExample("Démonstration CSS&nbsp;: scale")}}

```css interactive-example-choice
scale: none;
```

```css interactive-example-choice
scale: 1.5;
```

```css interactive-example-choice
scale: 1.7 50%;
```

```css interactive-example-choice
scale: 1 -1;
```

```css interactive-example-choice
scale: 1.2 1.2 2;
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
/* Valeurs avec un mot-clé */
scale: none;

/* Une seule valeur */
/* Les valeurs supérieures à 1 agrandissent l'élément */
scale: 2;
/* Les valeurs inférieures à 1 rétrécissent l'élément */
scale: 0.5;

/* Deux valeurs */
scale: 2 0.5;

/* Trois valeurs */
scale: 200% 50% 200%;

/* Valeurs globales */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Valeurs

- Valeur simple
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) définissant un facteur d'échelle permettant de redimensionner l'élément concerné selon le même facteur sur les axes X et Y. Cela équivaut à la fonction `scale()` (redimensionnement 2D) avec une seule valeur définie.
- Deux valeurs
  - : Deux nombres ({{CSSxRef("&lt;number&gt;")}}) ou pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) qui définissent respectivement les valeurs de mise à l'échelle des axes X et Y d'une mise à l'échelle 2D. Équivaut à une fonction `scale()` (mise à l'échelle 2D) avec deux valeurs définies.
- Trois valeurs
  - : Trois nombres ({{CSSxRef("&lt;number&gt;")}}) ou pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) qui définissent respectivement les valeurs de mise à l'échelle des axes X, Y et Z d'une mise à l'échelle 3D. Équivaut à une fonction `scale3d()` (mise à l'échelle 3D) avec trois valeurs définies.
- `none`
  - : Définit qu'aucun redimensionnement ne doit être appliqué.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Redimensionner un élément au survol

L'exemple suivant montre comment redimensionner un élément au survol.
Deux boîtes sont affichées, l'une avec une seule valeur `scale` qui redimensionne l'élément sur les deux axes.
La deuxième boîte a deux valeurs `scale` qui redimensionnent l'élément sur les axes X et Y de manière indépendante.

#### HTML

```html
<div class="box" id="box1">valeur unique</div>
<div class="box" id="box2">deux valeurs</div>
```

#### CSS

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
}
```

#### Résultat

{{EmbedLiveSample("Redimensionner un élément au survol", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('translate')}}
- La propriété {{CSSxRef('rotate')}}
- La propriété {{CSSxRef('transform')}}

Note&nbsp;: `skew` n'est pas une valeur de transformation indépendante
