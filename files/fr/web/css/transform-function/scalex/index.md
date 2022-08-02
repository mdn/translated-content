---
title: scaleX()
slug: Web/CSS/transform-function/scaleX
translation_of: Web/CSS/transform-function/scaleX()
original_slug: Web/CSS/transform-function/scaleX()
browser-compat: css.types.transform-function.scaleX
---
{{CSSRef}}

La fonction **`scaleX()`** permet de modifier l'abscisse de chaque sommet de l'élément par un facteur multiplicateur. L'homothétie obtenue n'est pas isotropique et les angles de l'élément ne sont pas conservés.

![](scalex.png)

`scaleX(sx)` est une notation raccourcie équivalente à `scale(sx, 1)` ou à `scale3d(sx, 1, 1)`.

`scaleX(-1)` définit une symétrie axiale par rapport à un axe vertical passant par l'origine du repère (définie grâce à la propriété [`transform-origin`](/fr/docs/Web/CSS/transform-origin)).

## Syntaxe

```css
scaleX(s)
```

### Valeurs

- `s`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente le facteur d'échelle de l'homothétie.

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
              ><mtr><mtd>s</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### Origine inchangée

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
  transform: scaleX(0.6);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Origine_inchangée","100%","200")}}

### Origine déplacée

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
  transform: scaleX(0.6);
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Origine_déplacée","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`scaleY()`](/fr/docs/Web/CSS/transform-function/scaleY())
- [`scaleZ()`](/fr/docs/Web/CSS/transform-function/scaleZ())
- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`transform-origin`](/fr/docs/Web/CSS/transform-origin)
