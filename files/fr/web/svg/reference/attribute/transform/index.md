---
title: transform
slug: Web/SVG/Reference/Attribute/transform
l10n:
  sourceCommit: a65cb1fa4293b1006ac02ce9a19507fd2ab960f7
---

L'attribut **`transform`** définit une liste de définitions de transformation appliquées à un élément et à ses enfants.

> [!NOTE]
> En tant qu'attribut de présentation, `transform` possède une propriété CSS équivalente&nbsp;: {{cssxref("transform")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte. Attention, il existe quelques différences de syntaxe entre la propriété CSS et l'attribut&nbsp;!

## Éléments

En SVG 2, `transform` peut être utilisé sur n'importe quel élément, y compris la racine {{SVGElement('svg')}}.
L'usage de `transform` sur la racine `<svg>` est une fonctionnalité récente, pensez à vérifier la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour connaître sa prise en charge.
Appliquer `transform` sur la racine `<svg>` est pratique pour transformer une image SVG entière, sans élément conteneur supplémentaire ni contournement CSS.

En SVG 1.1, seuls ces 16 éléments pouvaient recevoir un `transform`&nbsp;: {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('switch')}}, {{SVGElement('text')}} et {{SVGElement('use')}}.

Par ailleurs, héritage de SVG 1.1, {{SVGElement('linearGradient')}} et {{SVGElement('radialGradient')}} prennent en charge l'attribut `gradientTransform`, et {{SVGElement('pattern')}} l'attribut `patternTransform`, qui se comportent tous deux exactement comme l'attribut `transform`.

## Valeur

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#liste_de_transformations"
            ><code>&#x3C;transform-list></code></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Exemples

### Appliquer une transformation à un seul élément SVG

Dans cet exemple, on applique un `transform` à un seul élément {{SVGElement("g")}} au sein d'un document SVG&nbsp;:

```css hidden live-sample___transform-single-element live-sample___transform-svg-document
html,
body,
svg {
  height: 100%;
}
```

```html live-sample___transform-single-element
<svg viewBox="-40 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <g
    fill="grey"
    transform="rotate(-10 50 100)
               translate(-36 45.5)
               skewX(40)
               scale(1 0.5)">
    <path
      id="heart"
      d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  </g>

  <use href="#heart" fill="none" stroke="red" />
</svg>
```

{{EmbedLiveSample("transform-single-element", '100%', 200)}}

### Appliquer une transformation à un document SVG entier

Dans cet exemple, on applique un `transform` à l'élément racine {{SVGElement("svg")}}, ce qui revient à transformer le document SVG tout entier&nbsp;:

```html live-sample___transform-svg-document
<svg
  viewBox="-40 0 150 100"
  xmlns="http://www.w3.org/2000/svg"
  transform="rotate(-10 50 100)
               translate(-36 15.5)
               skewX(40)
               scale(1 0.5)">
  <g fill="grey">
    <path
      id="heart"
      d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  </g>

  <use href="#heart" fill="none" stroke="red" />
</svg>
```

{{EmbedLiveSample("transform-svg-document", '100%', 200)}}

## Fonctions de transformation

Les fonctions de transformation suivantes peuvent être utilisées dans la `<transform-list>` de l'attribut `transform`.

> [!WARNING]
> D'après la spécification, les [fonctions de transformation](/fr/docs/Web/CSS/Reference/Values/transform-function) CSS devraient également être utilisables. La compatibilité n'est cependant pas garantie.

### Matrix

La fonction de transformation `matrix(<a> <b> <c> <d> <e> <f>)` décrit une transformation sous la forme d'une matrice de transformation à six valeurs. `matrix(a,b,c,d,e,f)` revient à appliquer la matrice de transformation&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Celle-ci projette les coordonnées d'un système de coordonnées précédent vers un nouveau système, selon les égalités matricielles suivantes&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x_{\mathrm{newCoordSys}} \\ y_{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x_{\mathrm{prevCoordSys}} \\ y_{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x_{\mathrm{prevCoordSys}} + c y_{\mathrm{prevCoordSys}} + e \\ b x_{\mathrm{prevCoordSys}} + d y_{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="20" fill="green" />

  <!--
  Dans l'exemple suivant, on applique la matrice :
  [a c e]    [3 -1 30]
  [b d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  qui transforme le rectangle ainsi :

  coin supérieur gauche : ancienX=10 ancienY=10
  nouveauX = a * ancienX + c * ancienY + e = 3 * 10 - 1 * 10 + 30 = 50
  nouveauY = b * ancienX + d * ancienY + f = 1 * 10 + 3 * 10 + 40 = 80

  coin supérieur droit : ancienX=40 ancienY=10
  nouveauX = a * ancienX + c * ancienY + e = 3 * 40 - 1 * 10 + 30 = 140
  nouveauY = b * ancienX + d * ancienY + f = 1 * 40 + 3 * 10 + 40 = 110

  coin inférieur gauche : ancienX=10 ancienY=30
  nouveauX = a * ancienX + c * ancienY + e = 3 * 10 - 1 * 30 + 30 = 30
  nouveauY = b * ancienX + d * ancienY + f = 1 * 10 + 3 * 30 + 40 = 140

  coin inférieur droit : ancienX=40 ancienY=30
  nouveauX = a * ancienX + c * ancienY + e = 3 * 40 - 1 * 30 + 30 = 120
  nouveauY = b * ancienX + d * ancienY + f = 1 * 40 + 3 * 30 + 40 = 170
  -->
  <rect
    x="10"
    y="10"
    width="30"
    height="20"
    fill="red"
    transform="matrix(3 1 -1 3 30 40)" />
</svg>
```

{{EmbedLiveSample('Matrix', '100%', 200)}}

### Translate

La fonction de transformation `translate(<x> [<y>])` déplace l'objet de `x` et de `y`. Si `y` n'est pas fourni, il vaut `0`.

Autrement dit&nbsp;:

```plain
xNew = xOld + <x>
yNew = yOld + <y>
```

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Aucune translation -->
  <rect x="5" y="5" width="40" height="40" fill="green" />

  <!-- Translation horizontale -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="blue"
    transform="translate(50)" />

  <!-- Translation verticale -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="red"
    transform="translate(0 50)" />

  <!-- Translation horizontale et verticale -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="yellow"
    transform="translate(50 50)" />
</svg>
```

{{EmbedLiveSample('Translate', '100%', 200)}}

### Scale

La fonction de transformation `scale(<x> [<y>])` décrit une mise à l'échelle de `x` et de `y`. Si `y` n'est pas fourni, il est considéré égal à `x`.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Mise à l'échelle uniforme -->
  <circle cx="0" cy="0" r="10" fill="red" transform="scale(4)" />

  <!-- Mise à l'échelle verticale -->
  <circle cx="0" cy="0" r="10" fill="yellow" transform="scale(1, 4)" />

  <!-- Mise à l'échelle horizontale -->
  <circle cx="0" cy="0" r="10" fill="pink" transform="scale(4, 1)" />

  <!-- Aucune mise à l'échelle -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('Scale', '100%', 200)}}

### Rotate

La fonction de transformation `rotate(<a> [<x> <y>])` décrit une rotation de `a` degrés autour d'un point donné. Si les paramètres facultatifs `x` et `y` ne sont pas fournis, la rotation se fait autour de l'origine du système de coordonnées utilisateur courant. S'ils sont fournis, la rotation se fait autour du point `(x, y)`.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-12 -2 34 14" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" />

  <!-- la rotation se fait autour du point 0,0 -->
  <rect x="0" y="0" width="10" height="10" fill="red" transform="rotate(100)" />

  <!-- la rotation se fait autour du point 10,10 -->
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    fill="green"
    transform="rotate(100, 10, 10)" />
</svg>
```

{{EmbedLiveSample('Rotate', '100%', 200)}}

### SkewX

La fonction de transformation `skewX(<a>)` décrit une inclinaison de `a` degrés le long de l'axe x.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewX(30)" />
</svg>
```

{{EmbedLiveSample('SkewX', '100%', 200)}}

### SkewY

La fonction de transformation `skewY(<a>)` décrit une inclinaison de `a` degrés le long de l'axe y.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewY(30)" />
</svg>
```

{{EmbedLiveSample('SkewY', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("transform")}}
