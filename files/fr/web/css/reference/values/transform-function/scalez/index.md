---
title: scaleZ()
slug: Web/CSS/Reference/Values/transform-function/scaleZ
original_slug: Web/CSS/transform-function/scaleZ
---

{{CSSRef}}

La fonction **`scaleZ()`** modifie la coordonnée en Z de chaque point de l'élément avec un facteur multiplicateur donné. Si ce facteur vaut 1, l'opération appliquée sera l'identité. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function).

{{InteractiveExample("CSS Demo: scaleZ()")}}

```css interactive-example-choice
transform: scaleZ(1);
```

```css interactive-example-choice
transform: scaleZ(1.4);
```

```css interactive-example-choice
transform: scaleZ(0.5);
```

```css interactive-example-choice
transform: scaleZ(-1.4);
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
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

`scaleZ(sz)` est une notation raccourcie équivalente à `scale3d(1, 1, sz)`.

`scaleZ(-1)` définit une symétrie axiale selon l'axe Z qui passe par l'origine (définie grâce à la propriété [`transform-origin`](/fr/docs/Web/CSS/Reference/Properties/transform-origin)).

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants dans cet espace 3D.

## Syntaxe

```css
scaleZ(s)
```

### Valeurs

- `s`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number) qui représente le facteur d'échelle à appliquer sur la côte (coordonnées en Z) de chaque point de l'élément.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Cette transformation s'applique sur l'espace en trois dimensions et ne
        peut donc être représentée sous la forme d'une transformation plane.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<div>Normal</div>
<div class="perspective">Avec translation</div>
<div class="scaled-translated">Avec mise à l'échelle</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`scaleX()`](/fr/docs/Web/CSS/Reference/Values/transform-function/scaleX)
- [`scaleY()`](/fr/docs/Web/CSS/Reference/Values/transform-function/scaleY)
- [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function)
- [`transform-origin`](/fr/docs/Web/CSS/Reference/Properties/transform-origin)
