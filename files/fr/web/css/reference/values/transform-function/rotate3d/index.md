---
title: rotate3d()
slug: Web/CSS/Reference/Values/transform-function/rotate3d
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`rotate3d()`** définit une transformation qui fait pivoter un élément autour d'un axe fixe dans l'espace 3D, sans le déformer. Son résultat est un type de donnée {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: rotate3d()")}}

```css interactive-example-choice
transform: rotate3d(0, 0, 0, 0);
```

```css interactive-example-choice
transform: rotate3d(1, 1, 1, 45deg);
```

```css interactive-example-choice
transform: rotate3d(2, -1, -1, -0.2turn);
```

```css interactive-example-choice
transform: rotate3d(0, 1, 0.5, 3.142rad);
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
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
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

Dans l'espace 3D, les rotations possèdent trois degrés de liberté, qui décrivent ensemble un axe de rotation unique. L'axe de rotation est défini par un vecteur \[x, y, z] et passe par l'origine (définie par la propriété {{CSSxRef("transform-origin")}}).
Si, tel que défini, le vecteur n'est pas _normalisé_ (c'est-à-dire si la somme des carrés de ses trois coordonnées n'est pas égale à 1), l'{{Glossary("user agent", "agent utilisateur")}} le normalisera en interne. Un vecteur non normalisable, comme le vecteur nul \[0, 0, 0], entraînera l'ignorance de la rotation, sans toutefois invalider l'ensemble de la propriété CSS.

> [!NOTE]
> Contrairement aux rotations dans le plan 2D, la composition des rotations 3D n'est généralement pas commutative. Autrement dit, l'ordre dans lequel les rotations sont appliquées a un impact sur le résultat.

## Syntaxe

```css
rotate3d(x, y, z, a)
```

### Valeurs

- `x`
  - : Un {{CSSxRef("&lt;number&gt;")}} décrivant la coordonnée x du vecteur indiquant l'axe de rotation, qui peut être un nombre positif ou négatif.
- `y`
  - : Un {{CSSxRef("&lt;number&gt;")}} décrivant la coordonnée y du vecteur indiquant l'axe de rotation, qui peut être un nombre positif ou négatif.
- `z`
  - : Un {{CSSxRef("&lt;number&gt;")}} décrivant la coordonnée z du vecteur indiquant l'axe de rotation, qui peut être un nombre positif ou négatif.
- `a`
  - : Un {{CSSxRef("&lt;angle&gt;")}} représentant l'angle de la rotation. Un angle positif indique une rotation dans le sens horaire, un angle négatif dans le sens antihoraire.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col"><a href="/fr/docs/Web/CSS/Reference/Values/transform-function#le_système_de_coordonnées_cartésiennes">Coordonnées cartésiennes</a> sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2 <sup>(angl.)</sup></a></th>
      <td rowspan="2">
        Cette transformation s'applique à l'espace 3D et ne peut pas être représentée sur le plan.
      </td>
    </tr>
    <tr>
      <th scope="col"><a href="https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_homog%C3%A8nes">Coordonnées homogènes</a> sur <a href="https://fr.wikipedia.org/wiki/Plan_projectif_r%C3%A9el">ℝℙ^2</a></th>
    </tr>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3 <sup>(angl.)</sup></a></th>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable displaystyle="false" rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix}1 + (1 - \cos(a))(x^2 - 1) & z\cdot \sin(a) + xy(1 - \cos(a)) & -y\cdot \sin(a) + xz(1 - \cos(a))\\-z\cdot \sin(a) + xy(1 - \cos(a)) & 1 + (1 - \cos(a))(y^2 - 1) & x\cdot \sin(a) + yz(1 - \cos(a))\\y\cdot \sin(a) + xz(1 - \cos(a)) & -x\cdot \sin(a) + yz(1 - \cos(a)) & 1 + (1 - \cos(a))(z^2 - 1)\end{pmatrix}</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <th scope="col">Coordonnées homogènes sur <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3 <sup>(angl.)</sup></a></th>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable displaystyle="false" rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix}1 + (1 - \cos(a))(x^2 - 1) & z\cdot \sin(a) + xy(1 - \cos(a)) & -y\cdot \sin(a) + xz(1 - \cos(a)) & 0\\-z\cdot \sin(a) + xy(1 - \cos(a)) & 1 + (1 - \cos(a))(y^2 - 1) & x\cdot \sin(a) + yz(1 - \cos(a)) & 0\\y\cdot \sin(a) + xz(1 - \cos(a)) & -x\cdot \sin(a) + yz(1 - \cos(a)) & 1 + (1 - \cos(a))(z^2 - 1) & 0\\0 & 0 & 0 & 1\end{pmatrix}</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Rotation autour de l'axe y

#### HTML

```html
<div>Normal</div>
<div class="rotated">Tourné</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Rotation autour de l'axe y", "auto", 180)}}

### Rotation autour d'un axe personnalisé

#### HTML

```html
<div>Normal</div>
<div class="rotated">Tourné</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Rotation autour d'un axe personnalisé", "auto", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- La propriété {{CSSxRef("rotate")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
