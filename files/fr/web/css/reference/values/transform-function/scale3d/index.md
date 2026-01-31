---
title: scale3d()
slug: Web/CSS/Reference/Values/transform-function/scale3d
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`scale3d()`** définit une transformation qui redimensionne un élément dans l'espace 3D.
Comme la quantité de mise à l'échelle est définie par un vecteur [sx, sy, sz], elle peut redimensionner chaque dimension à des échelles différentes. Son résultat est un type de donnée {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: scale3d()")}}

```css interactive-example-choice
transform: scale3d(1, 1, 1);
```

```css interactive-example-choice
transform: scale3d(1.3, 1.3, 1.3);
```

```css interactive-example-choice
transform: scale3d(0.5, 1, 1.7);
```

```css interactive-example-choice
transform: scale3d(-1.4, 0.4, 0.7);
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

Cette transformation de mise à l'échelle est caractérisée par un vecteur tridimensionnel. Ses coordonnées définissent l'ampleur de la mise à l'échelle dans chaque direction. Si les trois coordonnées sont égales, la mise à l'échelle est uniforme (_isotrope_) et le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'élément est préservé (il s'agit d'une [transformation homothétique](https://fr.wikipedia.org/wiki/Homoth%C3%A9tie)).

Lorsqu'une valeur de coordonnée est en dehors de l'intervalle \[-1, 1], l'élément grandit selon cette dimension&nbsp;; lorsqu'elle est à l'intérieur, il rétrécit. Une valeur négative entraîne une [symétrie centrale](https://fr.wikipedia.org/wiki/Sym%C3%A9trie_centrale) selon cette dimension. La valeur `1` n'a aucun effet.

## Syntaxe

```css
scale3d(sx, sy, sz)
```

### Valeurs

- `sx`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant l'abscisse (composante horizontale, x) du vecteur d'échelle.
- `sy`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant l'ordonnée (composante verticale, y) du vecteur d'échelle.
- `sz`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant la composante z du vecteur d'échelle.

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
        Cette transformation s'applique à l'espace 3D et ne peut pas être représentée sur le plan.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & sz \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & sz & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Sans déplacement de l'origine

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
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Sans déplacement de l'origine", 200, 200)}}

### Déplacement de l'origine de la transformation

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
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Déplacement de l'origine de la transformation","200","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- La fonction {{CSSxRef("transform-function/scaleZ" "scaleZ()")}}
- La fonction {{CSSxRef("transform-function/translate3d" "translate3d()")}}
- La fonction {{CSSxRef("transform-function/rotate3d" "rotate3d()")}}
- Autres propriétés individuelles de transformation&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
