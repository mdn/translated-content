---
title: perspective()
slug: Web/CSS/transform-function/perspective
---

{{CSSRef}}

La fonction **`perspective()`** définit la distance entre le plan d'équation z = 0 et l'œil de l'utilisateur afin de fournir une perspective aux éléments positionnés dans l'espace (3D). Chaque élément pour lequel z est positif apparaîtra plus grand et chaque élément pour lequel z est négatif apparaîtra plus petit. La « force » de cet effet est déterminée par la valeur de cette propriété. La valeur obtenue comme résultat de cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

Le résultat de cette fonction est une valeur de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

{{EmbedInteractiveExample("pages/css/function-perspective.html")}}

La fonction de transformation `perspective()`s'applique à l'élément qu'on veut transformer. En revanche, les propriétés [`perspective`](/fr/docs/Web/CSS/perspective) et [`perspective-origin`](/fr/docs/Web/CSS/perspective-origin) s'appliquent sur l'élément parent de l'enfant qu'on veut placer dans un espace 3D.

## Syntaxe

```
perspective(l)
```

### Valeurs

- _l_
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/length) qui définit la distance entre l'œil de l'utilisateur et le plan décrit par l'équation `z = 0`. Si la valeur est nulle ou négative, aucune perspective ne sera appliquée.

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
        <p>
          Cette transformation s'applique dans l'espace (3D) et ne peut pas être
          représentée en deux dimensions.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        Une perspective n'est pas une transformation linéaire de ℝ<sup>3</sup>
        et ne peut donc pas être représentée en utilisant une matrice du système
        cartésien.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd><mo>−</mo>1<mo>/</mo>d</mtd
                ><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Appliquer une perspective sur un objet 3D

#### CSS

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

#### HTML

```html
<p>Sans perspective :</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>Avec une perspective (9cm) :</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>Avec une perspective (4cm) :</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

#### Résultat

{{EmbedLiveSample('Appliquer_une_perspective_sur_un_objet_3D', '100%', '600')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
