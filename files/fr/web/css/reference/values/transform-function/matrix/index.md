---
title: matrix()
slug: Web/CSS/Reference/Values/transform-function/matrix
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`matrix()`** définit une matrice de transformation homogène en 2D. Son résultat est un type de donnée {{CSSxRef("&lt;transform-function&gt;")}}.

> [!NOTE]
> La fonction `matrix(a, b, c, d, tx, ty)` est une forme abrégée de `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

{{InteractiveExample("Démonstration CSS&nbsp;: matrix()")}}

```css interactive-example-choice
transform: matrix(1.2, 0.2, -1, 0.9, 0, 20);
```

```css interactive-example-choice
transform: matrix(0.4, 0, 0.5, 1.2, 60, 10);
```

```css interactive-example-choice
transform: matrix(0, 1, 1, 0, 0, 0);
```

```css interactive-example-choice
transform: matrix(0.1, 1, -0.3, 1, 0, 0);
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

## Syntaxe

```css
matrix(a, b, c, d, tx, ty)
```

### Valeurs

La fonction `matrix()` est définie avec six valeurs. Les valeurs constantes sont implicites et ne sont pas transmises en tant que paramètresénbsp;; les autres paramètres sont décrits dans l'ordre des colonnes.

- _a_ _b_ _c_ _d_
  - : Sont des nombres ({{CSSxRef("&lt;number&gt;")}}) décrivant la transformation linéaire.
- _tx_ _ty_
  - : Sont des nombres ({{CSSxRef("&lt;number&gt;")}}) décrivant la translation à appliquer.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/fr/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates">Cartesian coordinates</a> on <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogeneous coordinates</a> on <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Cartesian coordinates on <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogeneous coordinates on <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c \\ b & d \end{pmatrix}</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} a & c & tx \\ b & d & ty \\ 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} a & c & tx \\ b & d & ty \\ 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} a & c & 0 & tx \\ b & d & 0 & ty \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

Les valeurs représentent les fonctions suivantes&nbsp;:
`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div>Normal</div>
<div class="changed">Modifié</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 350, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La proproiété {{CSSxRef("transform")}}
- Propriétés individuelles de transformation&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- La fonction {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
