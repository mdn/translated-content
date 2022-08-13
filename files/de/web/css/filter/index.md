---
title: filter
slug: Web/CSS/filter
tags:
  - Benötigt Browserunterstützung
  - CSS
  - CSS Eigenschaft
  - CSS Funktion
  - Grafik
  - Layout
  - Referenz
  - SVG
  - SVG Filter
  - Web
translation_of: Web/CSS/filter
---
{{ CSSRef() }}

{{ SeeCompatTable() }}

## Übersicht

Die `filter` CSS Eigenschaft erlaubt es, Effekte wie Unschärfe oder Farbverschiebungen auf Elemente anzuwenden, bevor sie angezeigt werden. Filter werden normalerweise dazu benutzt, die Darstellung eines Bildes, eines Hintergrunds oder eines Rahmens anzupassen.

Im CSS Standard inbegriffen sind mehrere Funktionen, die vordefinierte Effekte ermöglichen. Es können auch Filter verwendet werden, die über SVG mit Hilfe des [SVG Filter Elements](/de/docs/Web/SVG/Element/filter "/en/SVG/Element/filter") angegeben wurden.

> **Hinweis:** Ältere Versionen (4.0 bis einschließlich 9.0) des Internet Explorers unterstützten eine nicht standardisierte ["filter"](<http://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx>) Eigenschaft, die mittlerweile missbilligt wird.

{{cssinfo}}

## Syntax

Angabe einer Funktion:

    filter: <filter-function> [<filter-function>]* | none

Für eine Referenz zu einem SVG {{ SVGElement("filter") }} Element:

    filter: url(svg-url#element-id)

## Beispiele

Beispiele zur Benutzung der vordefinierten Funktionen. Siehe die jeweilige Funktion für ein spezifisches Beispiel.

```css
.mydiv { filter: grayscale(50%) }

/* Graut alle Bilder um 50% aus und macht sie um 10px unscharf */
img {
  filter: grayscale(0.5) blur(10px);
}
```

Beispiele zur Benutzung der URL Funktion mit einer SVG Ressource.

```css
.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }
```

## Funktionen

Um die `filter` Eigenschaft zu verwenden, muss ein Wert für die folgenden Funktionen angegeben werden. Falls der Wert ungültig ist, gibt die Funktion `none` zurück. Falls nicht anders angegeben, akzeptieren Funktionen, die eine Wertangabe mit Prozentzeichen (wie z. B. `34%`) akzeptieren, auch einen dezimalen Wert (wie z. B. `0.34`).

### `url(url)`

Die `url()` Funktion erlaubt die Angabe einer XML Datei, die einen SVG Filter definiert, und kann auch einen Anker zu einem bestimmten Element beinhalten.

```css
filter: url(resources.svg#c1)
```

### `blur(radius)`

Wendet eine Gaußsche Unschärfe auf das Ursprungsbild an. Der Radiuswert gibt die Standardabweichung der Gaußschen Funktion an, oder wie viele Pixel auf dem Bildschirm mit einander vermischt werden. Ein höherer Wert erzeugt daher eine stärkere Unschärfe. Falls kein Parameter angegeben wird, wird 0 verwendet. Der Parameter wird dabei als {{cssxref("&lt;length&gt;")}} angegeben, akzeptiert jedoch keine Prozentwerte.

```css
filter: blur(5px)
```

```html hidden
  <table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg id="img3" viewbox="0 0 233 176">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%" >
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
  <image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" x="5%" y="5%" width="212px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /></td>
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
  -moz-filter:blur(5px);
  -webkit-filter:blur(5px);
  -o-filter:blur(5px);
  -ms-filter:blur(5px);
  filter:blur(5px); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
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

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
  </filter>
</svg>
```

{{EmbedLiveSample('blur_example','100%','236px','')}}

### `brightness(amount)`

Wendet eine lineare Multiplikation auf das Ursprungsbild an, sodass es dunkler oder heller erscheint. Ein Wert von `0%` erzeugt ein Bild, das komplett schwarz ist. Ein Wert von `100%` lässt das Bild unverändert. Andere Werte sind lineare Multiplikationen dieses Effekts. Werte über `100%` sind erlaubt und erzeugen hellere Ergebnisse. Falls der `amount` Parameter fehlt, wird ein Wert von `100%` verwendet.

```css
filter: brightness(0.5)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
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
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3709/Test_Form_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('brightness_example','100%','231px','')}}

### `contrast(amount)`

Passt den Kontrast des Ursprungsbildes an. Ein Wert von 0% erzeugt ein Bild, dass komplett schwarz ist. Ein Wert von `100%` lässt das Bild unverändert. Werte über `100%` sind erlaubt und erzeugen Ergebnisse mit weniger Kontrast. Falls der `amount` Parameter fehlt, wird ein Wert von `100%` verwendet.

```css
filter: contrast(200%)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
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
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_3.jpeg" id="img1" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_3.jpg" id="img2" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('contrast_example','100%','203px','')}}

### `drop-shadow(<shadow>)`

Fügt dem Ursprungsbild einen Schlagschatteneffekt hinzu. Ein Schlagschatten ist dabei eigentlich eine unscharfe, versetzte Version der Alphamaske eines Bildes, die in einer bestimmten Farbe dargestellt wird und unterhalb des Bildes angezeigt wird. Die Funktion akzeptiert einen Parameter des Typs `<shadow>` (definiert in CSS3 Backgrounds), mit der Ausnahme, dass das Schlüsselwort `inset` nicht erlaubt ist. Diese Funktion ähnelt der verbreiteteren [`box-shadow`](/de/docs/Web/CSS/box-shadow "/en/CSS/box-shadow") Eigenschaft; der Unterschied besteht darin, dass manche Browser für Filter Hardwarebeschleunigung für eine höhere Geschwindigkeit unterstützen. Die Parameter des `<shadow>` Wertes lauten wie folgt:

- `<offset-x>` `<offset-y>` (benötigt)
  - : Dies sind die zwei {{cssxref("&lt;length&gt;")}} Werte, die den Schattenversatz angeben. `<offset-x>` gibt die horizontale Distanz an. Negative Werte positionieren den Schatten links von dem Element. `<offset-y>` gibt die vertikale Distanz an. Negative Werte positionieren den Schatten oberhalb des Elements. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
    Falls beide Werte `0` sind, wird der Schatten hinter dem Element platziert (und erzeugt möglicherweise einen Unschärfeeffekt, falls `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
- `<blur-radius>` (optional)
  - : Dies ist ein dritter {{cssxref("&lt;length&gt;")}} Wert. Je größer dieser Wert ist, desto größer ist die Unschärfe, d. h. der Schatten wird größer und unschärfer. Negative Werte sind nicht erlaubt. Falls nicht angegeben, wird `0` verwendet (der Schattenrand wird scharf dargestellt).
- `<spread-radius>` (optional)
  - : Dies ist ein vierter {{cssxref("&lt;length&gt;")}} Wert. Positive Werte erweitern den Schatten und lassen ihn größer erscheinen, negative Werte verkleinern den Schatten. Falls nicht angegeben, wird `0` verwendet (der Schatten hat die gleiche Größe wie das Element).
    _Hinweis:_ WebKit und evtl. andere Browser unterstützen diesen vierten Wert nicht. Er wird nicht dargestellt, falls er angegeben wird.
- `<color>` (optional)
  - : Siehe {{cssxref("&lt;color&gt;")}} für mögliche Schlüsselwörter und Angaben.
    Falls nicht angegeben, bestimmt der Browser die Farbe. In Gecko (Firefox), Presto (Opera bis Version 12) und Trident (Internet Explorer) wird der Wert der {{ cssxref("color") }} Eigenschaft verwendet. WebKit (Opera ab Version 15, Chrome) verwendet einen transparenten Schatten und ist daher nutzlos, falls `<color>` nicht angegeben wird.

```css
filter: drop-shadow(16px 16px 10px black)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
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
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_4.jpeg" id="img1" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4.jpg" id="img2" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_4_s.jpg" id="img4" class="internal default" src="/files/3715/Test_Form_4_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('shadow_example','100%','238px','')}}

### `grayscale(amount)`

Konvertiert das Ursprungsbild in Graustufen. Der Wert von `amount` bestimmt den Anteil der Konvertierung. Ein Wert von `100%` erzeugt ein komplett graues Ergebnis. Ein Wert von `0%` lässt das Bild unverändert. Werte zwischen `0%` und `100%` sind lineare Multiplikationen dieses Effekts. Falls der `amount` Parameter nicht angegeben wird, wird `100%` verwendet.

```css
filter: grayscale(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_5.jpeg" id="img1" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_5.jpg" id="img2" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_5_s.jpg" id="img4" class="internal default" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('grayscale_example','100%','209px','')}}

### `hue-rotate(angle)`

Wendet eine Farbtonrotation auf das Ursprungsbild an. Der Wert von `angle` gibt die Gradzahl um den Farbkreis an, um den die Ursprungsfarben verschoben werden. Ein Wert von `0deg` lässt das Bild unverändert. Falls der `angle` Parameter fehlt, wird `0deg` verwendet. Der Maximalwert ist `360deg`.

```css
filter: hue-rotate(90deg)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_6.jpeg" id="img1" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_6.jpg" id="img2" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img alt="Test_Form_6_s.jpg" id="img4" class="internal default" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('huerotate_example','100%','221px','')}}

### `invert(amount)`

Invertiert die Ursprungsfarben des Ursprungsbildes. Der Wert von `amount` gibt den Anteil der Konvertierung an. Ein Wert von `100%` erzeugt ein komplett invertiertes Ergebnis. Ein Wert von `0%` lässt das Bild unverändert. Werte zwischen `0%` und `100%` sind lineare Multiplikationen dieses Effekts. Falls der `amount` Parameter nicht angegeben wird, wird `100%` verwendet.

```css
filter: invert(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_7.jpeg" id="img1" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_7.jpg" id="img2" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_7_s.jpg" id="img4" class="internal default" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('invert_example','100%','407px','')}}

### `opacity(amount)`

Fügt den Farben des Ursprungsbildes eine Transparenz hinzu. Der Wert von `amount` gibt den Anteil der Konvertierung an. Ein Wert von `0%` erzeugt ein komplett transparentes Ergebnis. Ein Wert von `100%` lässt das Bild unverändert. Werte zwischen `0%` und `100%` sind lineare Multiplikationen dieses Effekts. Dies ist equivalent zur Multiplikation der Ursprungsfarben mit amount. Falls der `amount` Parameter nicht angegeben wird, wird `100%` verwendet. Diese Funktion ist ähnlich zu der verbreiteteren [opacity](/de/docs/Web/CSS/opacity "/en/CSS/opacity") Eigenschaft; der Unterschied besteht darin, dass manche Browser für Filter Hardwarebeschleunigung für eine höhere Geschwindigkeit unterstützen.

```css
filter: opacity(50%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_14.jpeg" id="img1" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_14.jpg" id="img2" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" />
</svg><div></td>
      <td><img alt="Test_Form_14_s.jpg" id="img4" class="internal default" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('opacity_example','100%','210px','')}}

### `saturate(amount)`

Sättigt das Ursprungsbild. Der Wert von `amount` gibt den Anteil der Konvertierung an. Ein Wert von `0%` erzeugt ein komplett ungesättigtes Ergebnis. Ein Wert von `100%` lässt das Bild unverändert. Andere Werte sind lineare Multiplikationen dieses Effekts. Werte für `amount` über 100% sind erlaubt und erzeugen übersättigte Ergebnisse. Falls der `amount` Parameter nicht angegeben wird, wird `100%` verwendet.

```css
filter: saturate(200%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_9.jpeg" id="img1" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_9.jpg" id="img2" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" />
</svg><div></td>
      <td><img alt="Test_Form_9_s.jpg" id="img4" class="internal default" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('saturate_example','100%','332px','')}}

### `sepia(amount)`

Konvertiert das Ursprungsbild in Sepiafarben. Der Wert von `amount` bestimmt den Anteil der Konvertierung. Ein Wert von `100%` erzeugt ein komplett sepiafarbenes Ergebnis. Ein Wert von `0%` lässt das Bild unverändert. Werte zwischen `0%` und `100%` sind lineare Multiplikationen dieses Effekts. Falls der `amount` Parameter nicht angegeben wird, wird `100%` verwendet.

```css
filter: sepia(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_12.jpeg" id="img1" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_12.jpg" id="img2" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
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
      <td><img alt="Test_Form_12_s.jpg" id="img4" class="internal default" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('sepia_example','100%','229px','')}}

## Kombinierte Funktionen

Eine beliebige Anzahl an Funktionen kann kombiniert werden, um die Ausgabe zu verändert. Das folgende Beispiel verstärkt den Kontrast und die Helligkeit des Bildes.

```css
filter: contrast(175%) brightness(3%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example (may need to reload)</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_8.jpeg" id="img1" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8.jpg" id="img2" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8_s.jpg" id="img4" class="internal default" src="/files/3730/Test_Form_8_s.jpeg" style="width: 100%;" /></td>
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

{{EmbedLiveSample('combination_example','100%','209px','')}}

## Spezifikation

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('Filters 1.0', '#FilterProperty', 'filter') }} | {{ Spec2('Filters 1.0') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.filter")}}

## Siehe auch

- [Applying SVG effects to HTML content](/de/docs/SVG_Filtereffekte_auf_HTML_Inhalte_anwenden "En/Applying SVG effects to HTML content")
- Die {{ Cssxref("mask") }} Eigenschaft
- [SVG](/de/docs/Web/SVG "En/SVG")
- [Understanding CSS filters](https://www.html5rocks.com/en/tutorials/filters/understanding-css/), HTML5Rocks! Artikel
- [CSS 3 filters](https://techstream.org/Web-Design/CSS3-Image-Filters "CSS filters") Tech Stream Artikel
- [CSS filters](https://davidwalsh.name/css-filters "CSS filters") von David Walsh
