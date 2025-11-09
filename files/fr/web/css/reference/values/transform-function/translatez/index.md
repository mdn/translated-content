---
title: translateZ()
slug: Web/CSS/Reference/Values/transform-function/translateZ
original_slug: Web/CSS/transform-function/translateZ
---

{{CSSRef}}

La fonction **`translateZ()`** permet de déplacer un élément selon l'axe z de l'espace tridimensionnel. Cette transformation est caractérisée par une valeur de longueur (type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)) qui définit l'amplitude du mouvement. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function).

{{InteractiveExample("CSS Demo: translateZ()")}}

```css interactive-example-choice
transform: translateZ(0);
```

```css interactive-example-choice
transform: translateZ(42px);
```

```css interactive-example-choice
transform: translateZ(-9.7rem);
```

```css interactive-example-choice
transform: translateZ(-3ch);
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

`translateZ(tz)` est un raccourci équivalent à `translate3d(0, 0, tz)`.

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants (les 6 faces du cube) dans cet espace 3D.

## Syntaxe

```css
translateZ(tz)
```

### Valeurs

- `t`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length) qui représente la composante en Z du vecteur de translation appliqué. Cet argument ne peut pas être de type [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage), si c'est le cas, la propriété qui contient la transformation est considérée comme invalide.

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
      <td colspan="2" rowspan="2">
        Cette transformation s'applique en trois dimensions et ne peut donc être
        représentée sur un plan.
      </td>
      <td colspan="1" rowspan="2">
        Une translation n'est pas une transformation linéaire sur ℝ<sup>3</sup>
        et ne peut donc pas être représentée avec une matrice dans le système
        cartésien.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr
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
<div>Statique</div>
<div class="moved">Déplacé</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  /* On ajoute une perspective pour créer un */
  /* espace 3D. L'utilisateur regarde « depuis »*/
  /* 500px et on avance l'élément vers l'utili- */
  /* sateur de 200px */
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

Si la valeur fournie à `perspective()` est inférieure à l'argument de `translateZ()` (ex. `transform: perspective(200px) translateZ(300px);`), l'élément transformé ne sera pas visible, car il sera situé au-delà de l'espace projeté sur l'écran. Plus l'écart entre ces deux arguments est faible, plus l'élément paraîtra proche de l'utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function)
- [Les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform)
- [`translateX()`](/fr/docs/Web/CSS/Reference/Values/transform-function/translateX) et [`translateY()`](/fr/docs/Web/CSS/Reference/Values/transform-function/translateY)
