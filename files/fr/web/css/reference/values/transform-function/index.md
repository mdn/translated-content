---
title: <transform-function>
slug: Web/CSS/Reference/Values/transform-function
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<transform-function>`** représente une transformation qui affecte l'apparence d'un élément. Les [fonctions](/fr/docs/Web/CSS/Reference/Values/Functions) de transformation peuvent faire pivoter, redimensionner, déformer ou déplacer un élément en 2D ou 3D. Ce type est utilisé dans la propriété {{CSSxRef("transform")}}.

## Syntaxe

Le type de donnée `<transform-function>` s'utilise avec l'une des fonctions de transformation listées ci-dessous. Chaque fonction applique une opération géométrique en 2D ou 3D.

### Transformation matricielle

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Décrit une matrice de transformation homogène en 2D.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Décrit une transformation 3D sous forme de matrice homogène 4×4.

### Perspective

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Définit la distance entre l'utilisateur·ice et le plan z=0.

### Rotation

- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Fait pivoter un élément autour d'un point fixe sur le plan 2D.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Fait pivoter un élément autour d'un axe fixe dans l'espace 3D.
- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Fait pivoter un élément autour de l'axe horizontal.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Fait pivoter un élément autour de l'axe vertical.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Fait pivoter un élément autour de l'axe z.

### Mise à l'échelle (redimensionnement)

- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Met à l'échelle un élément sur le plan 2D.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Met à l'échelle un élément dans l'espace 3D.
- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Met à l'échelle un élément horizontalement.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Met à l'échelle un élément verticalement.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Met à l'échelle un élément selon l'axe z.

### Inclinaison (distorsion)

- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Incline un élément sur le plan 2D.
- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Incline un élément horizontalement.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Incline un élément verticalement.

### Translation (déplacement)

- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Déplace un élément sur le plan 2D.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Déplace un élément dans l'espace 3D.
- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Déplace un élément horizontalement.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Déplace un élément verticalement.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Déplace un élément selon l'axe z.

## Description

Divers modèles de coordonnées peuvent être utilisés pour décrire la taille et la forme d'un élément HTML, ainsi que les transformations qui lui sont appliquées. Le plus courant est le [système de coordonnées cartésiennes](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_cart%C3%A9siennes), bien que les [coordonnées homogènes](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_homog%C3%A8nes) soient parfois utilisées.

### Coordonnées cartésiennes

Dans le système de coordonnées cartésiennes, un point en deux dimensions est décrit à l'aide de deux valeurs&nbsp;: une coordonnée x (abscisse) et une coordonnée y (ordonnée). Ceci est représenté par la notation vectorielle `(x, y)`.

![Un plan cartésien montrant l'axe Y négatif et l'axe X positif partant de l'origine avec trois points P1, P2 et P3 et leurs valeurs X et Y correspondantes](coord_in_r2.png)

En CSS (et dans la plupart des graphismes informatiques), l'origine `(0, 0)` représente le _coin supérieur gauche_ de tout élément. Les coordonnées positives sont vers le bas et la droite de l'origine, tandis que les négatives sont vers le haut et la gauche. Ainsi, un point situé 2 unités à droite et 5 unités en bas sera `(2, 5)`, tandis qu'un point 3 unités à gauche et 12 unités en haut sera `(-3, -12)`.

### Fonctions de transformation

Les fonctions de transformation modifient l'apparence d'un élément en manipulant les valeurs de ses coordonnées. Une fonction de transformation linéaire est décrite à l'aide d'une matrice 2×2, comme ceci&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c \\ b & d \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

La fonction est appliquée à un élément par multiplication matricielle. Ainsi, chaque coordonnée change en fonction des valeurs de la matrice&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd></mtr><mtr><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX">\left( \begin{array}{cc} a & c \\ b & d \end{array} \right) \left( \begin{array}{c} x \\ y \end{array} \right) = \left( \begin{array}{c} ax + cy \\ bx + dy \end{array} \right)</annotation>
</semantics>
</math>
<!-- prettier-ignore-end -->

Il est même possible d'appliquer plusieurs transformations à la suite&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd><mtd><msub><mi>c</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd><mtd><msub><mi>d</mi><mn>1</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd><mtd><msub><mi>c</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>a</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>d</mi><mn>1</mn></msub><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>b</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>d</mi><mn>1</mn></msub><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX">\left( \begin{array}{cc} a_1 & c_1 \\ b_1 & d_1 \end{array} \right) \left( \begin{array}{cc} a_2 & c_2 \\ b_2 & d_2 \end{array} \right) = \left( \begin{array}{cc} a_1a_2 + c_1b_2 & a_1c_2 + c_1d_2 \\ b_1a_2 + d_1b_2 & b_1c_2 + d_1d_2 \end{array} \right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Avec cette notation, il est possible de décrire, et donc de composer, la plupart des transformations courantes&nbsp;: rotations, mises à l'échelle ou inclinaisons. (En fait, toutes les transformations qui sont des fonctions linéaires peuvent être décrites.) Les transformations composées sont effectivement appliquées de droite à gauche.

Cependant, une transformation majeure n'est pas linéaire et doit donc être traitée à part avec cette notation&nbsp;: la translation. Le vecteur de translation `(tx, ty)` doit être exprimé séparément, comme deux paramètres additionnels.

> [!NOTE]
> Bien que plus complexes que les coordonnées cartésiennes, les [coordonnées homogènes](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_homog%C3%A8nes) en [géométrie projective](https://fr.wikipedia.org/wiki/G%C3%A9om%C3%A9trie_projective) conduisent à des matrices de transformation 3×3, et peuvent exprimer les translations comme des fonctions linéaires.

> [!NOTE]
> Les fonctions de transformation sont utilisées avec la propriété `transform` mais pas avec les propriétés individuelles de transformation — {{CSSxRef("translate")}}, {{CSSxRef("scale")}} et {{CSSxRef("rotate")}}.

## Exemples

### Comparaison des fonctions de transformation

L'exemple suivant propose un cube 3D créé à partir d'éléments DOM et de transformations, ainsi qu'un menu déroulant permettant de choisir différentes fonctions de transformation à appliquer au cube, afin de comparer les effets des différents types.

Choisissez-en une, et la transformation est appliquée au cube&nbsp;; après 2 secondes, le cube revient à son état initial. L'état initial du cube est légèrement incliné avec `transform3d()`, pour permettre de voir l'effet de toutes les transformations.

#### HTML

```html
<main>
  <section id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </section>

  <div class="select-form">
    <label for="transfunction"
      >Sélectionnez une fonction de transformation</label
    >
    <select id="transfunction">
      <option selected>Choisissez une fonction</option>
      <option>rotate(360deg)</option>
      <option>rotateX(360deg)</option>
      <option>rotateY(360deg)</option>
      <option>rotateZ(360deg)</option>
      <option>rotate3d(1, 1, 1, 90deg)</option>
      <option>scale(1.5)</option>
      <option>scaleX(1.5)</option>
      <option>scaleY(1.5)</option>
      <option>scaleZ(1.5)</option>
      <option>scale3d(1, 1.5, 1.5)</option>
      <option>skew(17deg, 13deg)</option>
      <option>skewX(17deg)</option>
      <option>skewY(17deg)</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
      <option>perspective(200px)</option>
      <option>matrix(1, 2, -1, 1, 80, 80)</option>
      <option>matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </select>
  </div>
</main>
```

#### CSS

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(135deg, white, cyan, white);
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
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
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

.select-form {
  margin-top: 50px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const example = document.querySelector("#example-element");

selectElem.addEventListener("change", () => {
  if (selectElem.value === "Choose a function") {
    return;
  }
  example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
  setTimeout(() => {
    example.style.transform = "rotate3d(1, 1, 1, 30deg)";
  }, 2000);
});
```

#### Résultat

{{EmbedLiveSample('Comparaison des fonctions de transformation', '100%', 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Propriétés individuelles de transformation&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
