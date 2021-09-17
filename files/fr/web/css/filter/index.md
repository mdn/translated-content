---
title: filter
slug: Web/CSS/filter
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/filter
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`filter`** permet d'appliquer des filtres et d'obtenir des effets graphiques de flou, de saturation, etc. Les filtres sont généralement utilisés pour ajuster le rendu d'une image, d'un arrière-plan ou des bordures.

Plusieurs fonctions sont inclues dans le standard CSS et permettent d'obtenir des effets prédéfinis. Il est également possible d'utiliser un filtre SVG via une URL référençant [un élément SVG `filter`](/fr/docs/Web/SVG/Element/filter).

{{EmbedInteractiveExample("pages/css/filter.html")}}

## Syntaxe

```css
/* URL vers un filtre SVG */
filter: url("filters.svg#filter-id");

/* Fonctions de filtre */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* On applique plusieurs filtres */
filter: contrast(175%) brightness(3%);

/* On utilise aucun filtre */
filter: none;

/* Valeurs globales */
filter: inherit;
filter: initial;
filter: unset;
```

Avec une fonction, on utilisera la forme suivante :

    filter: <filter-function> [<filter-function>]* | none

En utilisant un élément SVG {{SVGElement("filter")}}, on utilisera la forme suivante :

    filter: url(file.svg#filter-element-id)

### Interpolation

Si les deux filtres possèdent chacun une liste de même longueur (sans {{cssxref("&lt;url&gt;")}}, chacune des fonctions est interpolée selon ses propres règles. Si les deux listes ont des longueurs différentes, les derniers filtres de la liste la plus longue sont utilisés avec leurs valeurs par défaut afin de compléter la liste la plus courte, ensuite chaque fonction est interpolée selon ses propres règles. Si un filtre vaut `none`, il est remplacé avec la fonction de filtre (avec ses valeurs par défaut) de l'autre liste puis l'ensemble des fonctions est interpolé selon les règles de chacune. Dans les autres cas, on utilise un interpolation discrète.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Voici un rapide exemple de filtre fonctionnel. Chaque fonction est illustrée en détail par la suite.

```css
.mydiv { filter: grayscale(50%) }

/* on applique un niveau de gris à 50% */
/* et un flou dont le rayon vaut 10px  */
img {
  filter: grayscale(0.5) blur(10px);
}
```

Voici un rapide exemple de filtre utilisant une ressource SVG :

```css
.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }
```

## Fonctions prédéfinies

Pour utiliser la propriété CSS `filter`, on utilisera `none` ou une ou plusieurs des fonctions listées ci-après avec, pour chacune, un argument. Si la valeur est invalide, la fonction renverra `none`. Sauf mention contraire, les fonctions qui acceptent des valeurs exprimées en pourcentages (34%) acceptent également des valeurs décimales (0.34).

### `url()`

La fonction `url()` prend comme argument l'emplacement d'un fichier XML qui définit le filtre SVG à appliquer. L'URL peut faire référence à une ancre d'un élément spécifique.

```css
filter: url(resources.svg#c1)
```

### `blur()`

Cette fonction applique un flou gaussien à l'image d'entrée. La valeur du paramètre correspond au rayon de flou (l'écart-type de la gaussienne) utilisé. Plus la valeur est importante, plus le flou sera prononcé. La valeur par défaut du paramètre est 0. Selon la spécification, le paramètre est une valeur de type {{cssxref("&lt;length&gt;")}} mais la fonction n'accepte pas de valeurs exprimées en pourcentages.

```css
filter: blur(5px)
```

```html hidden
  <table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg id="img3" viewbox="0 0 233 176">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%" >
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
  <image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" x="5%" y="5%" width="212px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", Lucida, Arial, Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -webkit-filter:blur(5px);
  -ms-filter:blur(5px);
  filter:blur(5px); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 0 1.286em;
  height: 100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
  </filter>
</svg>
```

{{EmbedLiveSample('blur','100%','236px','')}}

> **Note :** Voir {{cssxref("filter-function/blur()", "blur()")}} pour plus d'informations.

### `brightness()`

La fonction permet de modifier la luminosité d'une image grâce à un facteur linéaire. Un argument égal `0%` créera une image totalement noire et une valeur de `100%` conservera l'image d'entrée telle quelle. Il est possible d'utiliser des valeurs supérieures à `100%` afin d'obtenir des images saturées en luminosité. La valeur par défaut pour l'argument est `1`.

```css
filter: brightness(0.5)
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="[amount]"/>
        <feFuncG type="linear" slope="[amount]"/>
        <feFuncB type="linear" slope="[amount]"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 286 217">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="2"/>
        <feFuncB type="linear" slope="2"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3708/Test_Form.jpg" filter="url(#brightness)" width="286px" height="217px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" src="/files/3709/Test_Form_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:brightness(2);
  -webkit-filter:brightness(2);
  -o-filter:brightness(2);
  -ms-filter:brightness(2);
  filter:brightness(2); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  height:100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('brightness','100%','231px','')}}

> **Note :** Voir {{cssxref("filter-function/brightness()", "brightness()")}} pour plus d'informations.

### `contrast()`

Cette fonction permet d'ajuster le contraste de l'image d'entrée. Une valeur de `0%` créera une image entièrement grise. Une valeur de `100%` conservera l'image d'entrée telle quelle. Il est possible d'utiliser des valeurs supérieures à 100% pour augmenter le contraste. La valeur par défaut de l'argument est `1`.

```css
filter: contrast(200%)
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_3.jpeg" id="img1" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_3.jpg" id="img2" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151">
 <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3712/Test_Form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:contrast(200%);
  -webkit-filter:contrast(200%);
  -o-filter:contrast(200%);
  -ms-filter:contrast(200%);
  filter:contrast(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('contrast','100%','203px','')}}

> **Note :** Voir {{cssxref("filter-function/contrast()", "contrast()")}} pour plus d'informations.

### `drop-shadow()`

Cette fonction permet d'appliquer une ombre portée à l'image d'entrée. Une ombre portée est une version décalée, dans une couleur donnée, du canal alpha de l'image qui est affiché sous celle-ci. La fonction peut accepter une valeur de type {{cssxref("&lt;shadow&gt;")}} (définie dans la spécification CSS3 sur les arrière-plans), une exception : le mot-clé `inset` n'est pas autorisée. Cette fonction est semblable à la propriété {{cssxref("box-shadow")}} plus répandue ; seule différence : les navigateurs utilisent parfois l'accélération matérielle pour les filtres ce qui peut permettre d'obtenir de meilleurs performances. Les paramètres de l'argument `<shadow>` sont les suivants :

- `<offset-x>` `<offset-y>` (nécessaire)
  - : Deux valeurs {{cssxref("&lt;length&gt;")}} qui indiquent le décalage de l'ombre portée. `<offset-x>` définit la distance horizontale : des valeurs négatives décaleront l'ombre à gauche de l'élément. `<offset-y>` définit la distance verticale : des valeurs négatives décaleront l'ombre au-dessus de l'élément. Se référer à la page {{cssxref("&lt;length&gt;")}} pour les différentes unités utilisables.
    Si les deux valeurs sont nulles, l'ombre sera exactement placée sous l'élément (et pourra servir à générer un effet de flou si `<blur-radius>` et/ou `<spread-radius>` sont utilisés).
- `<blur-radius>` (optionnel)
  - : Une troisième valeur de type {{cssxref("&lt;length&gt;")}}. Plus la valeur sera grande, plus le flou sera important (l'ombre sera plus grande et moins prononcée). Les valeurs négatives ne sont pas autorisée. La valeur par défaut est `0`, le bord de l'ombre sera droit.
- `<spread-radius>` (optionnel)
  - : Un quatrième valeur de type {{cssxref("&lt;length&gt;")}}. Des valeurs positives agrandiront l'ombre et les valeurs négatives réduiront l'ombre. La valeur par défaut est `0` (l'ombre aura la même taille que l'élément). Note: Webkit, and maybe other browsers, do not support this 4th length; it will not render if added.
- `<color>` (optionnel)
  - : Voir {{cssxref("&lt;color&gt;")}} pour les mots-clés et notations possibles. Si ce paramètre n'est pas défini, la couleur choisie dépendra du navigateur. Pour Gecko (Firefox), Presto (Opera) et Trident (Internet Explorer), la valeur de la propriété {{cssxref("color")}} est utilisée. Pour WebKit, si la couleur est absente, l'ombre sera transparente (donc inutile).

```css
filter: drop-shadow(16px 16px 10px black)
```

```svg
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/>
    <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
    <feFlood flood-color="[color]"/>
    <feComposite in2="offsetblur" operator="in"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_4.jpeg" id="img1" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4.jpg" id="img2" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 239 187">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
    <feOffset dx="16" dy="16"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
 </filter>
 <image xlink:href="/files/3714/Test_Form_4.jpeg" filter="url(#drop-shadow)" width="213px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_4_s.jpg" id="img4" src="/files/3715/Test_Form_4_s.jpg" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td><img alt="Test_Form_4 distorded border - Original image" id="img11" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4 distorded border - Live example" id="img12" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" id="img13" viewbox="0 0 239 187">
            <filter id="drop-shadow2">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="8" dy="10"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <image xlink:href="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" filter="url(#drop-shadow2)" width="213px" height="161px" />
          </svg>
        <div>
      </td>
      <td><img alt="Test_Form_4 distorded border drop shadow - Static example" id="img14" src="/files/8469/Test_Form_4_irregular-shape_opacity-gradient_drop-shadow.png" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(16px 16px 10px black);
  -webkit-filter: drop-shadow(16px 16px 10px black);
  -o-filter: drop-shadow(16px 16px 10px black);
  -ms-filter: drop-shadow(16px 16px 10px black);
  filter: drop-shadow(16px 16px 10px black);
}
#img12 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -webkit-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -o-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -ms-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
#irregular-shape {
  width: 64%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3, #img13 {
  height:100%;
}
```

{{EmbedLiveSample('drop-shadow','100%','300px','')}}

> **Note :** Voir {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}} pour plus d'informations.

### `grayscale()`

L'image d'entrée est convertie en niveau de gris. La valeur de l'argument définit la force de cette conversion. En utilisant une valeur de `100%` sera complètement en niveaux de gris. `0%` conservera l'image telle quelle. La valeur par défaut du paramètre est `0`.

```css
filter: grayscale(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_5.jpeg" id="img1" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_5.jpg" id="img2" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184">
 <filter id="grayscale">
    <feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </filter>
  <image xlink:href="/files/3716/Test_Form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" />
</svg><div></td>
      <td><img alt="Test_Form_5_s.jpg" id="img4" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:grayscale(100%);
  -webkit-filter:grayscale(100%);
  -o-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  filter:grayscale(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('grayscale','100%','209px','')}}

> **Note :** Voir {{cssxref("filter-function/grayscale()", "grayscale()")}} pour plus d'informations.

### `hue-rotate()`

Cette fonction applique une rotation de teinte à l'image d'entrée. La valeur de l'angle passé en argument définit le nombre de degrés parcouru sur le cercle des couleurs. Une valeur de `0deg` conservera l'image telle quelle. La valeur par défaut du paramètre est `0deg`. Il n'y a pas de valeur maximale pour l'argument, si une valeur supérieure à `360deg` est utilisée, ce sera la mesure de l'angle correspondante qui sera utilisée.

```css
filter: hue-rotate(90deg)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_6.jpeg" id="img1" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_6.jpg" id="img2" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img alt="Test_Form_6_s.jpg" id="img4" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
  -o-filter:hue-rotate(90deg);
  -ms-filter:hue-rotate(90deg);
  filter:hue-rotate(90deg); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```html
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgHueRotate" >
    <feColorMatrix type="hueRotate" values="[angle]" />
  <filter />
</svg>
```

{{EmbedLiveSample('hue-rotate','100%','221px','')}}

> **Note :** Voir {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}} pour plus d'informations.

### `invert()`

Cette fonction permet d'inverser les couleurs de l'image d'entrée. La valeur de l'argument définit la force de cette inversion. Une valeur de `100%` inversera complètement les couleurs (tel un négatif) et une valeur `0%` conservera l'image d'entrée telle quelle. La valeur par défaut de l'argument est `0`.

```css
filter: invert(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_7.jpeg" id="img1" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_7.jpg" id="img2" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276">
 <filter id="invert">
    <feComponentTransfer>
        <feFuncR type="table" tableValues="1 0"/>
        <feFuncG type="table" tableValues="1 0"/>
        <feFuncB type="table" tableValues="1 0"/>
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3720/Test_Form_7.jpeg" filter="url(#invert)" width="183px" height="276px" />
</svg><div></td>
      <td><img alt="Test_Form_7_s.jpg" id="img4" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('invert','100%','407px','')}}

> **Note :** Voir {{cssxref("filter-function/invert()", "invert()")}} pour plus d'informations.

### `opacity()`

Cette fonction permet de régler l'opacité de l'image d'entrée. La valeur de l'argument indique la force de l'opacité. Ainsi, une valeur de `0%` rendra l'image complètement transparente et une valeur de `100%` conservera l'image telle quelle. Les valeurs intermédiaires appliqueront des effets proportionnels. La valeur par défaut de l'argument est `1`. Cette fonction est proche de la propriété {{cssxref("opacity")}}, toutefois, avec les filtres, certains navigateurs utilisent l'accélération matérielle, ce qui permet d'obtenir de meilleures performances.

```css
filter: opacity(50%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_14.jpeg" id="img1" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_14.jpg" id="img2" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" />
</svg><div></td>
      <td><img alt="Test_Form_14_s.jpg" id="img4" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -o-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('opacity','100%','210px','')}}

> **Note :** Voir {{cssxref("filter-function/opacity()", "opacity()")}} pour plus d'informations.

### `saturate()`

L'image d'entrée est saturée. La valeur de l'argument indique la force de la saturation. Une valeur de `0%` fera que l'image sera totalement désaturée et une valeur de `100%` conservera l'image d'entrée telle quelle. Les valeurs intermédiaires auront un effet linéaire. Il est possible d'utiliser des valeurs supérieures à `100%` pour obtenir un effet de sursaturation. La valeur par défaut de l'argument est `1`.

```css
filter: saturate(200%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_9.jpeg" id="img1" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_9.jpg" id="img2" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" />
</svg><div></td>
      <td><img alt="Test_Form_9_s.jpg" id="img4" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -o-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('saturate','100%','332px','')}}

> **Note :** Voir {{cssxref("filter-function/saturate()", "saturate()")}} pour plus d'informations.

### `sepia()`

L'image d'entrée est convertie en sépia. La valeur de l'argument définit la proportion de la conversion. Ainsi, si on utilise un argument égal à 100%, le résultat sera entièrement sépia et si on utilise une valeur de `0%`, l'image d'entrée sera inchangée. Les valeurs comprises entre `0%` et `100%` appliquent l'effet de façon linéaire. La valeur par défaut de l'argument est `0`.

```css
filter: sepia(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">SVG Equivalent</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_12.jpeg" id="img1" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_12.jpg" id="img2" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194">
 <filter id="sepia">
    <feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/>
 </filter>
 <image xlink:href="/files/3727/Test_Form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" />
</svg><div></td>
      <td><img alt="Test_Form_12_s.jpg" id="img4" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -o-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('sepia','100%','229px','')}}

> **Note :** Voir {{cssxref("filter-function/sepia()", "sepia()")}} pour plus d'informations.

## Enchaîner les fonctions

On peut appliquer autant de fonction que nécessaire pour manipuler le rendu obtenu. Dans l'exemple suivant, on augmente le contraste et la luminosité de l'image :

```css
filter: contrast(175%) brightness(103%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th style="text-align: left;" scope="col">Original image</th>
      <th style="text-align: left;" scope="col">Live example</th>
      <th style="text-align: left;" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_8.jpeg" id="img1" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8.jpg" id="img2" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8_s.jpg" id="img4" src="/files/3730/Test_Form_8_s.jpeg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -o-filter: contrast(175%) brightness(103%);
  -ms-filter: contrast(175%) brightness(103%);
  filter: contrast(175%) brightness(103%);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('Enchaîner_les_fonctions','100%','209px','')}}

## Spécifications

| Spécification                                                                | État                             | Commentaires         |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Filters 1.0', '#FilterProperty', 'filter')}} | {{Spec2('Filters 1.0')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.filter")}}

## Voir aussi

- [Appliquer des effets SVG sur du contenu HTML](/fr/docs/Applying_SVG_effects_to_HTML_content)
- La propriété {{cssxref("mask")}}
- [SVG](/fr/docs/Web/SVG)
- [Un article de HTML5 Rocks : _Understanding CSS filters_ (en anglais)](https://www.html5rocks.com/en/tutorials/filters/understanding-css/)
- [Générateur de filtres CSS](https://cssgenerator.org/filter-css-generator.html)
