---
title: translateY()
slug: Web/CSS/transform-function/translateY
translation_of: Web/CSS/transform-function/translateY()
original_slug: Web/CSS/transform-function/translateY()
browser-compat: css.types.transform-function.translateY
---
{{CSSRef}}

La fonction **`translateY()`** permet de déplacer un élement verticalement sur le plan. Cette transformation est caractérisée par une longueur (type [`<length>`](/fr/docs/Web/CSS/length)) qui définit l'amplitude du déplacement. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

![](translatey.png)

`translateY(ty)` est une notation raccourcie équivalente à `translate(0, ty)`.

## Syntaxe

```css
/* Valeurs de type <length-percentage> */
transform: translateY(200px);
transform: translateY(50%);
```

### Valeurs

- `t`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/length) qui représente l'ordonnée du vecteur de translation (la composante en Y).

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
translateY([`<length-percentage>`](/fr/docs/Web/CSS/length-percentage))
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

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
