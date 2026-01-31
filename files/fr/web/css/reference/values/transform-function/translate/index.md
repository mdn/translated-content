---
title: translate()
slug: Web/CSS/Reference/Values/transform-function/translate
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`translate()`** repositionne un élément dans les directions horizontale et/ou verticale. Son résultat est de type {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: translate()")}}

```css interactive-example-choice
transform: translate(0);
```

```css interactive-example-choice
transform: translate(42px, 18px);
```

```css interactive-example-choice
transform: translate(-2.1rem, -2ex);
```

```css interactive-example-choice
transform: translate(3ch, 3mm);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="static-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

```css interactive-example
#static-element {
  opacity: 0.4;
  position: absolute;
}

#example-element {
  position: absolute;
}
```

Cette transformation est caractérisée par un vecteur bidimensionnel [tx, ty]. Ses coordonnées définissent de combien l'élément se déplace dans chaque direction.

## Syntaxe

```css
/* Valeurs simples <length-percentage> */
transform: translate(200px);
transform: translate(50%);

/* Valeurs doubles <length-percentage> */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### Valeurs

- Valeur simple `<length-percentage>`
  - : Cette valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage {{CSSxRef("&lt;percentage&gt;")}} représentant l'abscisse (composante horizontale, x) du vecteur de déplacement [tx, 0]. L'ordonnée (composante verticale, y) du vecteur de déplacement sera fixée à `0`. Par exemple, `translate(2px)` est équivalent à `translate(2px, 0)`. Une valeur en pourcentage fait référence à la largeur de la boîte de référence définie par la propriété {{CSSxRef("transform-box")}}.
- Valeur double `<length-percentage>`
  - : Cette valeur décrit deux longueurs ({{CSSxRef("&lt;length&gt;")}}) ou pourcentages {{CSSxRef("&lt;percentage&gt;")}} représentant à la fois l'abscisse (x) et l'ordonnée (y) du vecteur de déplacement [tx, ty]. Un pourcentage en première position fait référence à la largeur, en seconde à la hauteur de la boîte de référence définie par la propriété {{CSSxRef("transform-box")}}.

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
      <td rowspan="2">
        <p>
          Une translation n'est pas une transformation linéaire dans ℝ^2 et ne peut pas être représentée par une matrice de coordonnées cartésiennes.
        </p>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser un déplacement sur un seul axe

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Équivaut à : translateX(10px) ou translate(10px, 0) */
  transform: translate(10px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser un déplacement sur un seul axe", 250, 250)}}

### Combiner un déplacement sur l'axe y et l'axe x

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Combiner un déplacement sur l'axe y et l'axe x", 250, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- La propriété {{CSSxRef("translate")}}
