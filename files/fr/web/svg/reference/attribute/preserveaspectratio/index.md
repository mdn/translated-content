---
title: preserveAspectRatio
slug: Web/SVG/Reference/Attribute/preserveAspectRatio
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

L'attribut **`preserveAspectRatio`** indique comment un élément doté d'une `viewBox`, et donc d'un {{glossary("aspect ratio", "rapport largeur-hauteur")}} donné, doit s'ajuster dans une zone d'affichage dont le rapport largeur-hauteur diffère.

Le rapport largeur-hauteur d'une image SVG est défini par l'attribut {{SVGAttr('viewBox')}}. Par conséquent, si `viewBox` n'est pas défini, l'attribut `preserveAspectRatio` n'a aucun effet sur la mise à l'échelle du SVG (sauf dans le cas de l'élément {{SVGElement('image')}}, où `preserveAspectRatio` se comporte différemment, comme décrit ci-dessous).

## Syntaxe

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

La valeur de l'attribut `preserveAspectRatio` se compose d'au plus deux mots-clés&nbsp;: une valeur d'alignement obligatoire, et un mot-clé `meet` ou `slice` facultatif.

La valeur d'alignement indique s'il faut forcer une mise à l'échelle uniforme et, le cas échéant, la méthode d'alignement à utiliser lorsque le rapport largeur-hauteur de la {{SVGAttr("viewBox")}} ne correspond pas à celui de la zone d'affichage. `xMidYMid` est la valeur par défaut. La valeur d'alignement doit être l'un des mots-clés suivants&nbsp;:

- `none`
  - : Ne force pas de mise à l'échelle uniforme. Met à l'échelle le contenu graphique de l'élément de façon non uniforme si nécessaire, afin que la boîte englobante de l'élément corresponde exactement au rectangle de la zone d'affichage. À noter que si `<align>` vaut `none`, la valeur facultative `<meetOrSlice>` est ignorée.

- `xMinYMin`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur X de la zone d'affichage.
    Aligne le `<min-y>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur Y de la zone d'affichage.

- `xMidYMin`
  - : Force une mise à l'échelle uniforme.
    Aligne la valeur X médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur X médiane de la zone d'affichage.
    Aligne le `<min-y>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur Y de la zone d'affichage.

- `xMaxYMin`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>+<width>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur X de la zone d'affichage.
    Aligne le `<min-y>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur Y de la zone d'affichage.

- `xMinYMid`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur X de la zone d'affichage.
    Aligne la valeur Y médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur Y médiane de la zone d'affichage.

- `xMidYMid`
  - : Force une mise à l'échelle uniforme.
    Aligne la valeur X médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur X médiane de la zone d'affichage.
    Aligne la valeur Y médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur Y médiane de la zone d'affichage. C'est la valeur par défaut.

- `xMaxYMid`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>+<width>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur X de la zone d'affichage.
    Aligne la valeur Y médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur Y médiane de la zone d'affichage.

- `xMinYMax`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus petite valeur X de la zone d'affichage.
    Aligne le `<min-y>+<height>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur Y de la zone d'affichage.

- `xMidYMax`
  - : Force une mise à l'échelle uniforme.
    Aligne la valeur X médiane de la {{SVGAttr("viewBox")}} de l'élément sur la valeur X médiane de la zone d'affichage.
    Aligne le `<min-y>+<height>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur Y de la zone d'affichage.

- `xMaxYMax`
  - : Force une mise à l'échelle uniforme.
    Aligne le `<min-x>+<width>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur X de la zone d'affichage.
    Aligne le `<min-y>+<height>` de la {{SVGAttr("viewBox")}} de l'élément sur la plus grande valeur Y de la zone d'affichage.

Les deux mots-clés suivants déterminent comment le SVG doit être mis à l'échelle par rapport aux limites de son conteneur. Indiquer `meet` ou `slice` est facultatif et, le cas échéant, il ne peut s'agir que de l'un de ces deux mots-clés. `meet` est la valeur par défaut.

- `meet`
  - : Met le graphique à l'échelle de sorte que&nbsp;:
    - le rapport largeur-hauteur soit préservé&nbsp;;
    - la {{SVGAttr("viewBox")}} soit entièrement visible dans la zone d'affichage&nbsp;;
    - la {{SVGAttr("viewBox")}} soit agrandie autant que possible, tout en respectant les autres critères.

    Dans ce cas, si le rapport largeur-hauteur du graphique ne correspond pas à celui de la zone d'affichage, une partie de la zone d'affichage s'étendra au-delà des limites de la {{SVGAttr("viewBox")}} (autrement dit, la zone dans laquelle la {{SVGAttr("viewBox")}} sera dessinée sera plus petite que la zone d'affichage).

- `slice`
  - : Met le graphique à l'échelle de sorte que&nbsp;:
    - le rapport largeur-hauteur soit préservé&nbsp;;
    - la zone d'affichage soit entièrement couverte par la {{SVGAttr("viewBox")}}&nbsp;;
    - la {{SVGAttr("viewBox")}} soit réduite autant que possible, tout en respectant les autres critères.

    Dans ce cas, si le rapport largeur-hauteur de la {{SVGAttr("viewBox")}} ne correspond pas à celui de la zone d'affichage, une partie de la {{SVGAttr("viewBox")}} s'étendra au-delà des limites de la zone d'affichage (autrement dit, la zone dans laquelle la {{SVGAttr("viewBox")}} sera dessinée sera plus grande que la zone d'affichage).

## Exemples

### Utiliser `meet` quand la largeur est supérieure à la hauteur

Cet exemple montre l'usage de `meet` lorsque la largeur (`width`) de l'élément est supérieure à sa hauteur (`height`). Il présente trois variantes, avec trois valeurs d'alignement différentes&nbsp;: `xMidYMid`, `xMinYMid` et `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* Place un élément flex sur le body de chaque iframe, pour l'adaptabilité aux différentes tailles d'écran */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="60" height="30">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="60" height="30">
  <title>xMinYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMinYMid meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="140" y="0" width="60" height="30">
  <title>xMaxYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMaxYMid meet"
  x="140"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Utiliser meet quand la largeur est supérieure à la hauteur', '100%', 200)}}

### Utiliser `slice` quand la largeur est supérieure à la hauteur

Cet exemple montre l'usage de `slice` lorsque la largeur (`width`) de l'élément est supérieure à sa hauteur (`height`). Il présente trois variantes, avec trois valeurs d'alignement différentes&nbsp;: `xMidYMin`, `xMidYMid` et `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* Place un élément flex sur le body de chaque iframe, pour l'adaptabilité aux différentes tailles d'écran */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 57" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="15" width="60" height="30">
  <title>xMidYMin slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMin slice"
  x="0"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="15" width="60" height="30">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid slice"
  x="70"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="140" y="15" width="60" height="30">
  <title>xMidYMax slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMax slice"
  x="140"
  y="15">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Utiliser slice quand la largeur est supérieure à la hauteur', '100%', 200)}}

### Utiliser `meet` quand la hauteur est supérieure à la largeur

Cet exemple montre l'usage de `meet` lorsque la hauteur (`height`) de l'élément est supérieure à sa largeur (`width`). Il présente trois variantes, avec trois valeurs d'alignement différentes&nbsp;: `xMidYMin`, `xMidYMid` et `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* Place un élément flex sur le body de chaque iframe, pour l'adaptabilité aux différentes tailles d'écran */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMidYMin meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMin meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid meet"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="30" height="75">
  <title>xMidYMax meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMax meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Utiliser meet quand la hauteur est supérieure à la largeur', '100%', 200)}}

### Utiliser `slice` quand la hauteur est supérieure à la largeur

Cet exemple montre l'usage de `slice` lorsque la hauteur (`height`) de l'élément est supérieure à sa largeur (`width`). Il présente trois variantes, avec trois valeurs d'alignement différentes&nbsp;: `xMinYMid`, `xMidYMid` et `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* Place un élément flex sur le body de chaque iframe, pour l'adaptabilité aux différentes tailles d'écran */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMinYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMinYMid slice"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid slice"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="30" height="75">
  <title>xMaxYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMaxYMid slice"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Utiliser slice quand la hauteur est supérieure à la largeur', '100%', 200)}}

### Utiliser la valeur d'alignement `none`

Cet exemple montre un élément dont la valeur d'alignement vaut `none`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* Place un élément flex sur le body de chaque iframe, pour l'adaptabilité aux différentes tailles d'écran */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 192 62" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<!-- none -->
<rect x="0" y="0" width="160" height="60">
  <title>none</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="160"
  height="60"
  preserveAspectRatio="none"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample("Utiliser la valeur d'alignement none", '100%', 200)}}

## Éléments

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("image")}}
- {{SVGElement("feImage")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("view")}}

### feImage

Pour {{SVGElement('feImage')}}, `preserveAspectRatio` définit la façon dont l'image référencée doit s'ajuster dans le rectangle défini par l'élément `<feImage>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### image

Pour {{SVGElement('image')}}, `preserveAspectRatio` définit la façon dont l'image référencée doit s'ajuster dans le rectangle défini par l'élément `<image>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### marker

Pour {{SVGElement('marker')}}, `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être appliquée pour s'ajuster à la zone d'affichage de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### pattern

Pour {{SVGElement('pattern')}}, `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être appliquée pour s'ajuster à la zone d'affichage de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### svg

Pour {{SVGElement('svg')}}, `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être appliquée pour s'ajuster à la zone d'affichage de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### symbol

Pour {{SVGElement('symbol')}}, `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être appliquée pour s'ajuster à la zone d'affichage de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### view

Pour {{SVGElement('view')}}, `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être appliquée pour s'ajuster à la zone d'affichage de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}
