---
title: scale3d()
slug: Web/CSS/Reference/Values/transform-function/scale3d
original_slug: Web/CSS/transform-function/scale3d
---

{{CSSRef}}

La fonction **`scale3d()`** permet de modifier la taille d'un élément en appliquant une homothétie définie par un vecteur. Les composantes de ce vecteur permettent d'appliquer des échelles différentes selon les différentes dimensions.

{{InteractiveExample("CSS Demo: scale3d()")}}

```css interactive-example-choice
transform: scale3d(1, 1, 1);
```

```css interactive-example-choice
transform: scale3d(1.3, 1.3, 1.3);
```

```css interactive-example-choice
transform: scale3d(0.5, 1, 1.7);
```

```css interactive-example-choice
transform: scale3d(-1.4, 0.4, 0.7);
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

La transformation appliquée est définie par un vecteur dont les coordonnées définissent l'amplitude de l'homothétie dans chaque direction. Si les trois coordonnées du vecteur sont égales, la transformation est isotropique et la forme de l'élément est conservée.

Lorsque les composantes du vecteur sont en dehors de l'intervalle `[-1, 1]`, la transformation agrandit l'élément dans le sens des coordonnées. Lorsque les composantes sont dans cet intervalle, cela réduit l'élément.

## Syntaxe

La fonction `scale3d()` s'utilise avec trois valeurs dont chacune représente l'intensité de la transformation selon chaque direction.

```css
scale3d(sx, sy, sz)
```

### Valeurs

- `sx`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number) qui représente l'abscisse du vecteur définissant l'homothétie.
- `sy`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number) qui représente l'ordonnée du vecteur définissant l'homothétie
- `sz`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number) qui représente la composante, selon l'axe Z, du vecteur définissant l'homothétie

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
        Cette transformation s'applique dans en 3 dimensions et ne peut pas être
        représentée sur le plan.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtr
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

### Avec origine non modifiée

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_non_modifiée","100%","200")}}

### Avec origine translatée

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_translatée","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function)
- [`scaleZ()`](/fr/docs/Web/CSS/Reference/Values/transform-function/scaleZ)
- [`translate3d()`](/fr/docs/Web/CSS/Reference/Values/transform-function/translate3d)
- [`rotate3d()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate3d)
