---
title: skewX()
slug: Web/CSS/Reference/Values/transform-function/skewX
original_slug: Web/CSS/transform-function/skewX
---

{{CSSRef}}

La fonction **`skewX()`** permet d'opérer une distorsion horizontale en étirant chaque point de l'élément d'un certain angle dans la direction horizontale. Pour cela, on augmente l'abscisse d'un élément d'une valeur proportionnelle à l'angle donné et à la distance de l'origine. Plus le point est éloigné de l'origine et loin de l'axe, plus le décalage obtenu sera important.

{{InteractiveExample("CSS Demo: skewX()")}}

```css interactive-example-choice
transform: skewX(0);
```

```css interactive-example-choice
transform: skewX(35deg);
```

```css interactive-example-choice
transform: skewX(-0.06turn);
```

```css interactive-example-choice
transform: skewX(0.352rad);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function).

`skewX(a)` est équivalent à [`skew(a)`](/fr/docs/Web/CSS/Reference/Values/transform-function/skew).

## Syntaxe

```css
skewX(a)
```

### Valeurs

- `a`
  - : Une valeur de type [`<angle>`](/fr/docs/Web/CSS/Reference/Values/angle) qui représente l'angle avec lequel appliquer la distorsion selon l'axe des abscisses (axe horizontal).

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
              ><mtr>1<mtd>tan(ay)</mtd></mtr
              ><mtr>0<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
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
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
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
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<div>Normal</div>
<div class="skewed">Distordu</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skewX(10deg); /* Équivalent à skew(10deg) */
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

- [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function)
