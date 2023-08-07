---
title: matrix()
slug: Web/CSS/transform-function/matrix
---

{{CSSRef}}

La fonction **`matrix()`** définit une matrice homogène de transformation, définie par 6 coefficients. Les paramètres de cette fonction sont ces coefficients, dans l'ordre des lignes puis des colonnes, suivis des coefficients de translation.

`matrix(a, b, c, d, tx, ty)` est une notation raccourcie, équivalente à `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

## Syntaxe

La fonction `matrix()` s'utilise avec 6 valeurs. Les valeurs constantes sont implicites et ne sont pas passées comme paramètres. Les autres paramètres sont décrits dans l'ordre suivant d'abord les colonnes.

```css
matrix(a, b, c, d, tx, ty)
```

### Valeurs

- `a` `b` `c` `d`
  - : Les coefficients de la matrice, de type [`<number>`](/fr/docs/Web/CSS/number), qui définissent la transformation linéaire.
- `tx` `ty`
  - : Les coefficients de la matrice, de type [`<number>`](/fr/docs/Web/CSS/number), qui définissent la translation à appliquer.

> **Note :** Jusqu'à Firefox 16, Gecko permettait d'utiliser des valeurs [`<length>`](/fr/docs/Web/CSS/length) pour les coefficients `tx` et `ty`.

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
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd></mtr>
              <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
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
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<p>toto</p>
<p class="transformation">truc</p>
```

### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: matrix(0.87, -0.5, 0, 0.87, 0, 1);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`matrix3d()`](</fr/docs/Web/CSS/transform-function/matrix3d()>)
- [Comprendre les matrices de transformations CSS (en anglais)](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
