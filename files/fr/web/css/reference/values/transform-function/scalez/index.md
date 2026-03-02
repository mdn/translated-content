---
title: scaleZ()
slug: Web/CSS/Reference/Values/transform-function/scaleZ
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`scaleZ()`** définit une transformation qui redimensionne un élément selon l'axe des z. Son résultat est de type {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: scaleZ()")}}

```css interactive-example-choice
transform: scaleZ(1);
```

```css interactive-example-choice
transform: scaleZ(1.4);
```

```css interactive-example-choice
transform: scaleZ(0.5);
```

```css interactive-example-choice
transform: scaleZ(-1.4);
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
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Cette transformation de mise à l'échelle modifie la coordonnée z de chaque point de l'élément par un facteur constant, sauf lorsque le facteur d'échelle vaut 1, auquel cas il n'y a pas de transformation. La mise à l'échelle n'est pas isotrope et les angles de l'élément ne sont pas conservés. `scaleZ(-1)` définit une [symétrie axiale](https://fr.wikipedia.org/wiki/Sym%C3%A9trie_axiale), avec l'axe z passant par l'origine (tel que défini par la propriété {{CSSxRef("transform-origin")}}).

Dans les exemples interactifs ci-dessus, [`perspective: 550px;`](/fr/docs/Web/CSS/Reference/Properties/perspective) (pour créer un volume 3D) et [`transform-style: preserve-3d;`](/fr/docs/Web/CSS/Reference/Properties/transform-style) (pour que les enfants, les 6 faces du cube, soient aussi positionnés dans un volume 3D) sont appliqués au cube.

> [!NOTE]
> `scaleZ(sz)` est équivalent à
> `scale3d(1, 1, sz)`.

## Syntaxe

```css
scaleZ(s)
```

### Valeurs

- `s`
  - : Est un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant le facteur d'échelle à appliquer sur la coordonnée z de chaque point de l'élément.

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
        This transformation applies to the 3D space and can't be represented on the plane.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & s \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & s & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
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
<div>Normal</div>
<div class="perspective">Déplacé</div>
<div class="scaled-translated">Mis à l'échelle</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* Ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* Ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("transform-function/scaleX", "scaleX()")}}
- La fonction {{CSSxRef("transform-function/scaleY", "scaleY()")}}
- La propriété {{CSSxRef("transform")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- La propriété {{CSSxRef("transform-origin")}}
- Propriétés de transformation individuelles&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
  - Remarque&nbsp;: il n'existe pas de propriété `skew`
