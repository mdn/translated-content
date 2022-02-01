---
title: transform
slug: Web/SVG/Attribute/transform
tags:
  - Attribut
  - SVG
translation_of: Web/SVG/Attribute/transform
---
{{SVGRef}}

L'attribut **`transform`** définit une liste de définitions de transformation qui sont appliquées à l'élément ainsi qu'à ses éléments fils.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-40 0 150 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g fill="grey"
     transform="rotate(-10 50 100)
                translate(-36 45.5)
                skewX(40)
                scale(1 0.5)">
    <path id="heart" d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  </g>

  <use xlink:href="#heart" fill="none" stroke="red"/>
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

> **Note :** Pour SVG2, `transform` est un attribut de présentation et peut donc être utilisé comme une propriété CSS. Attention toutefois aux différences de syntaxe entre la propriété CSS et cet attribut. Voir la documentation de la propriété {{cssxref('transform')}} pour la syntaxe .

En tant qu'attribut de présentation, **`transform`** peut être utilisé par n'importe quel élément (en SVG 1.1, seuls les 16 éléments suivants pouvaient l'utiliser : {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('switch')}}, {{SVGElement('text')}} et {{SVGElement('use')}}).

Pour des raisons historiques liées à SVG 1.1, {{SVGElement('linearGradient')}} et {{SVGElement('radialGradient')}} prennent en charge l'attribut `gradientTransform` et {{SVGElement('pattern')}} permet d'utiliser `patternTransform`. Ces deux attributs sont exactement synonymes de l'attribut `transform`.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code
          ><strong
            ><a href="/fr/docs/Web/SVG/Content_type#Transform-list"
              >&#x3C;transform-list></a
            ></strong
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Fonctions de transformation

Les fonctions de transformation suivantes peuvent être utilisées par l'attribut `transform`.

> **Attention :** Selon la spécification, on devrait également pouvoit utiliser les fonctions CSS {{cssxref('transform-function', 'transform functions')}} mais la compatibilité n'est pas assurée.

### `matrix()`

La fonction de transformation `matrix(<a> <b> <c> <d> <e> <f>)` permet d'appliquer une transformation géométrique décrite par 6 coefficients et `matrix(a,b,c,d,e,f)` sera équivalent à la matrice de transformation mathématique :<math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>Le calcul des coordonnées s'obtient de la façon suivante :<math display="block"><semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{newCoordSys}} \\ y*{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x*{\mathrm{prevCoordSys}} \\ y*{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x*{\mathrm{prevCoordSys}} + c y*{\mathrm{prevCoordSys}} + e \\ b x*{\mathrm{prevCoordSys}} + d y*{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics></math>

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="20" fill="green" />

  <!--
  Dans l'exemple suivant, on applique la matrice suivante:
  [a c e]    [3 -1 30]
  [b d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  qui transforme le rectangle de cette façon:

  top left corner: oldX=10 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 10 + 30 = 50
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 10 + 40 = 80

  top right corner: oldX=40 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 10 + 30 = 140
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 10 + 40 = 110

  bottom left corner: oldX=10 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 30 + 30 = 30
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 30 + 40 = 140

  bottom right corner: oldX=40 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 30 + 30 = 120
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 30 + 40 = 170
  -->
  <rect x="10" y="10" width="30" height="20" fill="red"
        transform="matrix(3 1 -1 3 30 40)" />
</svg>
```

{{EmbedLiveSample('matrix()', '100%', 200)}}

### `translate()`

La fonction de transformation `translate(<x> [<y>])` permet de déplacer un objet de `x` sur l'axe horizontal et de `y` sur l'axe vertical (i.e. `xnew = xold + <x>, ynew = yold + <y>`). Si `y` n'est pas fourni, la valeur par défaut est 0.

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Pas de translation -->
  <rect x="5" y="5" width="40" height="40" fill="green" />

  <!-- Translation horizontale -->
  <rect x="5" y="5" width="40" height="40" fill="blue"
        transform="translate(50)" />

  <!-- Translation verticale -->
  <rect x="5" y="5" width="40" height="40" fill="red"
        transform="translate(0 50)" />

  <!-- Translation horizontale et verticale -->
  <rect x="5" y="5" width="40" height="40" fill="yellow"
         transform="translate(50,50)" />
</svg>
```

{{EmbedLiveSample('translate()', '100%', 200)}}

### `scale()`

La fonction de transformation `scale(<x> [<y>])` définit une homothétie d'un facteur `x` en horizontal et d'un facteur `y` en vertical. Si la valeur `y` n'est pas fournie, on considère qu'elle est égale à `x`.

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- uniform scale -->
  <circle cx="0" cy="0" r="10" fill="red"
          transform="scale(4)" />

  <!-- vertical scale -->
  <circle cx="0" cy="0" r="10" fill="yellow"
          transform="scale(1,4)" />

  <!-- horizontal scale -->
  <circle cx="0" cy="0" r="10" fill="pink"
          transform="scale(4,1)" />

  <!-- No scale -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('scale()', '100%', 200)}}

### `rotate()`

La fonction de transformation `rotate(<a> [<x> <y>])` définit une rotation de `a` degrés autour d'un point de coordonnées `x` et `y`. Si les paramètres optionnels `x` et `y` ne sont pas fournis, la rotation est effectuée autour de l'origine dans le système de coordonnés actuel.

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-12 -2 34 14" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" />

  <!-- rotation is done around the point 0,0 -->
  <rect x="0" y="0" width="10" height="10" fill="red"
        transform="rotate(100)" />

  <!-- rotation is done around the point 10,10 -->
  <rect x="0" y="0" width="10" height="10" fill="green"
        transform="rotate(100,10,10)" />
</svg>
```

{{EmbedLiveSample('rotate()', '100%', 200)}}

### `skewX()`

La fonction de transformation `skewX(<a>)` définit une distorsion horizontale de `a` degrés.

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red"
        transform="skewX(30)" />
</svg>
```

{{EmbedLiveSample('skewX()', '100%', 200)}}

### `skewY()`

La fonction de transformation `skewY(<a>)` définit une distorsion verticale de `a` degrés.

#### Exemples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red"
        transform="skewY(30)" />
</svg>
```

{{EmbedLiveSample('skewY()', '100%', 200)}}

## Spécifications

| Spécification                                                                                | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS Transforms 2', '#svg-transform', 'transform')}}         | {{Spec2('CSS Transforms 2')}} |                      |
| {{SpecName('CSS3 Transforms', '#svg-transform', 'transform')}}         | {{Spec2('CSS3 Transforms')}}     |                      |
| {{SpecName("SVG2", "coords.html#TransformProperty", "transform")}}     | {{Spec2("SVG2")}}                 |                      |
| {{SpecName("SVG1.1", "coords.html#TransformAttribute", "transform")}} | {{Spec2("SVG1.1")}}                 | Définition initiale. |
