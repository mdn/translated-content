---
title: perspective()
slug: Web/CSS/Reference/Values/transform-function/perspective
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`perspective()`** définit une transformation qui fixe la distance entre l'utilisateur·ice et le plan z=0, soit la perspective depuis laquelle l'interface bidimensionnelle serait perçue comme tridimensionnelle. Son résultat est un type de donnée {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: perspective()")}}

```css interactive-example-choice
transform: perspective(0);
```

```css interactive-example-choice
transform: perspective(none);
```

```css interactive-example-choice
transform: perspective(800px);
```

```css interactive-example-choice
transform: perspective(23rem);
```

```css interactive-example-choice
transform: perspective(6.5cm);
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

La fonction de transformation `perspective()` fait partie de la valeur de {{CSSxRef('transform')}} appliquée à l'élément à transformer. Cela diffère des propriétés {{CSSxRef('perspective')}} et {{CSSxRef('perspective-origin')}} qui s'appliquent à l'élément parent d'un enfant transformé dans un espace 3D.

## Syntaxe

```css
perspective(d)
```

### Valeurs

- _d_
  - : Est une longueur ({{CSSxRef("&lt;length&gt;")}}) représentant la distance entre l'utilisateur·ice et le plan z=0. Le plan z=0 correspond à l'endroit où tout apparaît en vue bidimensionnelle, c'est-à-dire l'écran. Les valeurs inférieures à `1px` (y compris zéro) sont ramenées à `1px`. Les valeurs négatives constituent une erreur de syntaxe.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/fr/docs/Web/CSS/Reference/Values/transform-function#le_système_de_coordonnées_cartésiennes">Coordonnées cartésiennes</a> sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2 <sup>(angl.)</sup></a></th>
      <th scope="col"><a href="https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_homog%C3%A8nes">Coordonnées homogènes</a> sur <a href="https://fr.wikipedia.org/wiki/Plan_projectif_r%C3%A9el">ℝℙ^2</a></th>
      <th scope="col">Coordonnées cartésiennes sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3 <sup>(angl.)</sup></a></th>
      <th scope="col">Coordonnées homogènes sur <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3 <sup>(angl.)</sup></a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        <p>
          Cette transformation s'applique à l'espace 3D et ne peut pas être représentée sur le plan.
        </p>
      </td>
      <td>
        Cette transformation n'est pas une transformation linéaire dans ℝ^3 et ne peut donc pas être représentée par une matrice en coordonnées cartésiennes.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn><mo>/</mo><mi>d</mi></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & -\frac{1}{d} & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Without perspective:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (9cm):</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (4cm):</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

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

### Résultat

{{EmbedLiveSample('Exemples', 250, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- Propriétés individuelles de transformation&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
