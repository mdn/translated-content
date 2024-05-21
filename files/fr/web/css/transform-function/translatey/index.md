---
title: translateY()
slug: Web/CSS/transform-function/translateY
---

{{CSSRef}}

La fonction **`translateY()`** permet de déplacer un élement verticalement sur le plan. Cette transformation est caractérisée par une longueur (type [`<length>`](/fr/docs/Web/CSS/length)) qui définit l'amplitude du déplacement. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

{{EmbedInteractiveExample("pages/css/function-translateY.html")}}

> **Note :** `translateY(ty)` est équivalent à `translate(0, ty)` ou `translate3d(0, ty, 0)`.

## Syntaxe

```css
/* Valeurs de type <length-percentage> */
transform: translateY(200px);
transform: translateY(50%);
```

### Valeurs

- `<length-percentage>`
  - : Valeur de type [`<length>`](/fr/docs/Web/CSS/length) ou [`<percentage>`](/fr/docs/Web/CSS/percentage) représentant l'ordonnée (verticale, coordonnée y) du vecteur de translation [0, ty]. Dans [le système de coordonnées cartésiennes](/fr/docs/Web/CSS/transform-function#le_système_de_coordonnées_cartésiennes), elle représente le déplacement le long de l'axe y. Une valeur en pourcentage fait référence à la hauteur de la boîte de référence définie par la propriété [`transform-box`](/fr/docs/Web/CSS/transform-box).

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
      <td colspan="1" rowspan="2">
        <p>
          Une translation n'est pas une transformation linéaire sur ℝ<sup
            >2</sup
          >
          et on ne peut donc pas la représenter en utilisant une matrice
          exprimée dans le système cartésien.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><math
            ><mfenced
              ><mtable
                ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
                ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
                ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

### Syntaxe formelle

```css
translateY({{cssxref("&lt;length-percentage&gt;")}})
```

## Exemples

### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateY(10px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","250")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`translate()`](/fr/docs/Web/CSS/transform-function/translate)
- [`translateX()`](/fr/docs/Web/CSS/transform-function/translateX)
- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
