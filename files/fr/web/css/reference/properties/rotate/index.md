---
title: Propriété CSS `rotate`
short-title: rotate
slug: Web/CSS/Reference/Properties/rotate
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`rotate`** vous permet de définir des transformations de rotation individuellement et indépendamment de la propriété {{CSSxRef("transform")}}. Cela correspond mieux à l'utilisation typique de l'interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformation à spécifier dans la propriété `transform`.

{{InteractiveExample("Démonstration CSS&nbsp;: rotate")}}

```css interactive-example-choice
rotate: none;
```

```css interactive-example-choice
rotate: -45deg;
```

```css interactive-example-choice
rotate: z 45deg;
```

```css interactive-example-choice
rotate: x 45deg;
```

```css interactive-example-choice
rotate: y 45deg;
```

```css interactive-example-choice
rotate: 3 0.5 2 45deg;
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
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
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
rotate: none;

/* Valeur angulaire */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* Un axe x, y, z et l'angle associé */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Un vector et l'angle associé */
rotate: 1 1 1 90deg;

/* Valeurs globales */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

### Valeurs

- Valeur angulaire
  - : Un angle ({{CSSxRef("&lt;angle&gt;")}}) définissant l'angle de rotation de l'élément affecté autour de l'axe Z. Équivalent à une fonction `rotate()` (rotation 2D).
- Nom de l'axe x, y ou z plus valeur angulaire
  - : Le nom de l'axe par rapport auquel on souhaite effectuer la rotation (`x`, `y` ou `z`), plus un angle ({{CSSxRef("&lt;angle&gt;")}}) définissant l'angle de rotation de l'élément affecté autour de cet axe. Équivalent à une fonction `rotateX()`/`rotateY()`/`rotateZ()` (rotation 3D).
- Vecteur plus valeur angulaire
  - : Trois nombres (valeurs {{CSSxRef("&lt;number&gt;")}}) représentant un vecteur centré sur l'origine qui définit la ligne autour de laquelle on souhaite faire tourner l'élément, plus un angle ({{CSSxRef("&lt;angle&gt;")}}) définissant l'angle de rotation de l'élément affecté autour de ce vecteur. Équivalent à une fonction `rotate3d()` (rotation 3D).
- `none`
  - : Définit qu'aucune rotation ne doit être appliquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Rotation d'un élément au survol

L'exemple suivant montre comment utiliser la propriété `rotate` pour faire pivoter un élément autour de différents axes au survol.
La première boîte pivote de 90 degrés sur l'axe Z au survol, la deuxième pivote de 180 degrés sur l'axe Y au survol, et la troisième pivote de 360 degrés au survol autour d'un vecteur défini par des coordonnées.

#### HTML

```html
<div class="box" id="box1">rotation en Z</div>
<div class="box" id="box2">rotation en Y</div>
<div class="box" id="box3">vecteur et angle</div>
```

#### CSS

```css
.box {
  display: inline-block;
  margin: 1em;
  min-width: 6.5em;
  line-height: 6.5em;
  text-align: center;
  transition: 1s ease-in-out;
  border: 0.25em dotted;
}

#box1:hover {
  rotate: 90deg;
}

#box2:hover {
  rotate: y 180deg;
}

#box3:hover {
  rotate: 1 2 1 360deg;
}
```

#### Résultat

{{EmbedLiveSample("Rotation d'un élément au survol", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('translate')}}
- La propriété {{CSSxRef('scale')}}
- La propriété {{CSSxRef('transform')}}

Note&nbsp;: `skew` n'est pas une valeur de transformation indépendante
