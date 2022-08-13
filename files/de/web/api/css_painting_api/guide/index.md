---
title: Die CSS Painting API verwenden
slug: Web/API/CSS_Painting_API/Guide
translation_of: Web/API/CSS_Painting_API/Guide
---
Die CSS Paint API wurde entworfen, um Entwicklern zu ermöglichen, programmatisch Bilder festzulegen, die überall dort verwendet werden können, wo ein CSS Bild aufgerufen werden kann, wie in CSS [`background-image`](/en-US/docs/Web/CSS/background-image), [`border-image`](/en-US/docs/Web/CSS/border-image-source), [`mask-image`](/en-US/docs/Web/CSS/mask-image), etc.

Um programmatisch ein Bild zu erstellen, das von einem CSS stylesheet verwendet wird, müssen wir folgende Schritte abarbeiten:

1. Lege ein "paint worklet" mit der [`registerPaint()`](/en-US/docs/Web/API/PaintWorklet/registerPaint) Funktion fest.
2. Melde das worklet an.
3. Binde mit Include die `{{cssxref('paint()','paint()')}}` CSS Funktion ein.

Zum besseren Verständnis dieser einzelnen Schritte werden wir eine halbhohe farbliche Markierung wie in folgender Titelzeile erstellen:

![Text reading 'My Cool Header' with a solid yellow background image block on the bottom left two thirds of the header](https://mdn.mozillademos.org/files/16774/mycoolheader.png)

## CSS paint worklet

In einer externen Skript-Datei nutzen wir die [`registerPaint()`](/en-US/docs/Web/API/PaintWorklet/registerPaint) Funktion, um unser [CSS Paint worklet](/de/docs/Web/API/PaintWorklet) zu benennen. Diese benötigt zwei Parameter. Der erste ist der Name, den wir dem worklet geben — diesen Namen werden wir als einen Parameter von der paint() Funktion verwenden, wenn wir das Bild einem Element hinzufügen wollen. Der zweite Parameter ist die Klasse, die die ganze Magie ausführt: die die Kontext-Entscheidungen festlegt und natürlich das Bild, das wir auf unsere Oberfläche malen wollen.

```js
registerPaint('headerHighlight', class {

  /*
       definiere dies, wenn die Alphatransparenz erlaubt ist;
       alpha ist standardmäßig true; wenn auf false gesetzt, sind
       alle Farben, die auf der Canvas genutzt werden, opak
    */
  static get contextOptions() {
           return { alpha: true };
    }

    /*
        ctx ist der 2D Zeichen Kontext
        eine Untermenge der HTML5 Canvas API.
    */
  paint(ctx) {
        ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
        ctx.fillRect(0, 15, 200, 20);     /* order: x, y, w, h */
  }
});
```

In diesem Klassenbeispiel haben wir die Umstände (options) eines einzelnen Kontexts mit der `contextOptions()` Funktion festgelegt: wir haben ein einfaches Objekt zurückgegeben, das aussagt, dass die Alphatransparenz erlaubt ist.

Wir haben dann die `paint()` Funktion verwendet, um unser Objekt auf die Canvas zu zeichnen.

Die `paint()` Funktion kann drei Parameter aufnehmen. Hier übergeben wir nur ein Argument: den Rendering Kontext (wir schauen uns das im weiteren Verlauf noch genauer an), der oftmals mit dem Variablennamen `ctx` bezeichnet wird. Der 2D Rendering Context ist eine Untermenge der [HTML5 Canvas API](/de/docs/Web/API/Canvas_API); die Version, die für CSS Houdini verfügbar is (auch `PaintRenderingContext2D genannt`), ist eine weitere Untermenge, die über die meisten Zusätze verfügt, die auch in der Canvas API vorhanden sind, mit Ausnahme von `CanvasImageData`, `CanvasUserInterface`, `CanvasText`, und `CanvasTextDrawingStyles` APIs.

Wir weisen mit [`fillStyle`](/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) den Wert `hsla(55, 90%, 60%, 1.0)` zu, ein blasses Gelb, und rufen dann `fillRect()` auf, um ein farbiges Rechteck zu erstellen. Die Parameter von [`fillRect()`](/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) sind, in der Abfolge, x-Achse und y-Achse (und zugleich die feste Koordinate), Breite und Höhe. `fillRect(0, 15, 200, 20)` erstellt ein Rechteck von 200 Einheiten Breite und 20 Einheiten Höhe, die 0 Einheiten von der linken und 15 Einheiten von der oberen Seite der Box entfernt sind, in der das Rechteck eingezeichnet wird.

Wir können die CSS [`background-size`](/en-US/docs/Web/CSS/background-size) and [`background-position`](/en-US/docs/Web/CSS/background-position) Eigenschaften (properties) verwenden, um das Hintergrundbild in seiner Größe und Position zu verändern, aber die oben festgelegten Werte sind die Standardwerte der gelben Box, die wir in unserem paint worklet definiert haben.

Wir haben dieses Beispiel einfach gehalten. Für mehr Möglichkeiten werfen Sie bitte einen Blick in die [Canvas Dokumentation](/de/docs/Web/HTML/Element/canvas). Wir werden weiter unten im Tutorial auch komplexere Beispiele nutzen.

## Das paint worklet verwenden

Um das paint worklet zu verwenden, müssen wir dies mit [`addModule()`](/en-US/docs/Web/API/Worklet/addModule) anmelden und in unsere CSS einfügen, wobei wir sicherstellen müssen, dass der CSS Selektor zu einem DOM Knoten in unserem HTML-Code passt.

### Das worklet anmelden

Wir haben unser paint worklet in einer externen script-Datei erstellt, wie oben geziegt. Wir müssen jetzt unser [worklet](/de/docs/Web/API/PaintWorklet) in unserer Hauptanwendung anmelden:

```js
CSS.paintWorklet.addModule('nameOfPaintWorkletFile.js');
```

Dazu benutzen wir die von Paint Worklet bereitgestellte Funktion `addModule()` in einem `<script>`-Block innerhalb unseres HTML oder in einer externen JavaScript-Datei, die dann seinerseits von der Hauptanwendung aufgerufen werden muss.

In unserem Beispiel ist das worklet auf GitHub gespeichert.

```js
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/01partOne/header-highlight.js');
```

### Auf das paint worklet in CSS verweisen

Haben wir das paint worklet angemeldet, können wir es in CSS benutzen. Dabei kann man die Funktion `paint()` so benutzen, wie man auch jeden anderen `<image>` Typ verwendet. In `paint()` wird als Parameter derselbe Name des worklets übergeben, den wir bei `registerPaint()` eingetragen haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Alles zusammensetzen

Nun können wir die fancy-Klasse aus CSS einem HTML-Element ganz normal in der Property class übergeben, um die gelbe Box als Hintergrundbild erscheinen zu lassen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird wie das obige Beispiel in einem [Browsers, der die CSS Painting API unterstützt](/Web/API/CSS/paintWorklet#Browser_compatibility), aussehen.

{{EmbedLiveSample("paintapi", 120, 120)}}

Während Sie vom HTML aus das worklet nicht mehr (innerlich) verändern können, können Sie trotzdem mit CSS über `background-size` und `background-position` Größe und Position des Bildes anpassen.

## PaintSize

Im Beispiel oben haben wir eine Box aus 20x200 Einheiten erstellt, die 15 Einheiten vom oberen Rand der umgebenen Box - eines HTML-Elements - entfernt liegt, gleichgültig, welche Größe die umhüllende Box selbst hat. Ist der Text klein, sieht die Box wie eine große Unterstreichung aus, ist er groß und lang, ist die Box gleich einem Balken unter den ersten Buchstaben. Günstiger wäre aber, wenn das Hintergrundbild relativ zur Größe des umhüllenden Elementes wäre. Dafür können wir die `paintSize` Property, bzw. `size.width` und `size.height`, verwenden. Diese übernimmt die Breite und Höhe des umliegenden Elements und rechnet die Größe des worklets dafür aus.

![The background is 50% of the height and 60% of the width of the element](https://mdn.mozillademos.org/files/16783/mycoolheadersized.png)

In diesem Beispiel-Bild ist der Hintergrund proportional zu der Größe des umhüllenden Elements. Das dritte Beispiel hat als Breite `width: 50%`; das Hintergrundbild passt sich in den ersten beiden Beispielen der Größe der Schrift an und damit der Höhe des Blocks, im dritten Beispiel sieht man aber auch deutlich, dass die Breite ebenfalls passend gemacht wird.

Der Code, mit dem das möglich ist, sieht dann folgendermaßen aus:

```js
registerPaint('headerHighlight', class {

  static get contextOptions() {
           return { alpha: true };
  }

    /*
        ctx is the 2D drawing context
        size is the paintSize, the dimensions (height and width) of the box being painted
    */

  paint(ctx, size) {
        ctx.fillStyle = 'hsla(55, 90%, 60%, 1.0)';
        ctx.fillRect( 0, size.height / 3, size.width * 0.4, size.height * 0.6 );
  }
});
```

Der Code unterscheidet sich an zwei Stellen vom ersten Beispiel:

1. Wir haben ein zweites Argument in `paint()` eingefügt, die Größe `size`.
2. Wir berechnen die Dimensionen und die Position unseres Rechtecks relativ zu dieser Größe `size` und nicht mehr mit absoluten Werten, mit Hilfe der Properties `.width` und `.height`.

Unsere HTML-Elemente haben nur ein Hintergrundbild, welches sich in Größe und Breite ändert.

```js hidden
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/02partTwo/header-highlight.js');
```

```css hidden
.fancy {
  background-image: paint(headerHighlight);
}
.half {
    width: 50%;
}
```

```html hidden
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

Wenn du mit diesem worklet herumspielst, kannst du dessen Größe über die Eigenschaften `font-size` und `width` des umhüllenden Elements ändern.

In Browsern, die CSS Paint API unterstützen, erscheint das unten aufgeführte Beispielt wie das Bild oben.

{{EmbedLiveSample("example2", 300, 300)}}

## Properties anpassen

Zusätzlich zu der Größe des Elements kann ein worklet auch auf andere CSS-Eigenschaften zugreifen.

```js
registerPaint('cssPaintFunctionName', class {
     static get inputProperties() { return ['PropertyName1', '--customPropertyName2']; }
     static get inputArguments() { return ['<color>']; }
     static get contextOptions() { return {alpha: true}; }

     paint(drawingContext, elementSize, styleMap) {
         // Paint code goes here.
     }
});
```

Die drei Parameter der Funktion `paint()` enthalten den Zeichenkontext, die Größe des Malgrundes (meist des umgebenden Elements) und Eigenschaften (properties). Um auf die Eigenschaften zugreifen zu können, muss man die statische Methode `inputProperties()` aufrufen, die den Zugriff auf die CSS properties ermöglicht, sowohl der regulären als auch [angepasster Eigenschaften](/de/docs/Web/CSS/CSS_Variables). Diese liefert ein [`array`](/en-US/docs/Glossary/array) mit den Namen der Eigenschaften zurück (wir werfen im letzten Abschnitt einen näheren Blick auf `inputArguments).`

### Example

Legen wir dazu eine Liste an, deren Hintergrundbild zwischen drei verschiedenen Farben und drei unterschiedlichen Breiten wechselt.

![The width and color of the background image changes based on the custom properties](https://mdn.mozillademos.org/files/16784/boxbg.png)

In unserer CSS weisen wir verschiedene Farben und eine Anpassung der Breite des worklets über die `--boxColor` und `--widthSubtractor` Eigenschaften zu.

```html hidden
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
    <li>item 11</li>
    <li>item 12</li>
    <li>item 13</li>
    <li>item 14</li>
    <li>item 15</li>
    <li>item 16</li>
    <li>item 17</li>
    <li>item</li>
</ul>
```

```js hidden
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js');
```

```css
li {
   background-image: paint(boxbg);
   --boxColor: hsla(55, 90%, 60%, 1.0);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   --widthSubtractor: 20;
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   --widthSubtractor: 40;
}
```

Beachte, dass wir im CSS Eigenschaften verwenden, die nicht zum normalen CSS gehören, sondern von uns selbst definiert worden sind: `boxColor` und `widthSubtractor`. Auf diese können wir im worklet zugreifen, wenn wir diese über `inputProperties()` zugänglich machen.

```js
registerPaint('boxbg', class {

  static get contextOptions() { return {alpha: true}; }

  /*
     use this function to retrieve any custom properties (or regular properties, such as 'height')
     defined for the element, return them in the specified array
  */
  static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

  paint(ctx, size, props) {
    /*
       ctx -> drawing context
       size -> paintSize: width and height
       props -> properties: get() method
    */

    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);
  }
});
```

Wir haben die Methode `inputProperties()` in der `registerPaint()` Klasse verwendet, um die Werte der beiden von uns definierten Eigenschaften zu erhalten, die das worklet `boxbg` anwenden. Mit `inputProperties()` legen wir uns einen Array an, der normale CSS-Eigenschaften wie auch selbst definierte erhalten kann.

In unserem `<script>`-Block melden wir das worklet an:

```js
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklet/boxbg.js');
```

{{EmbedLiveSample("example3", 300, 300)}}

In der Anwendung können wir zwar nicht das Script des worklets verändern, aber alle Werte, die über CSS übergeben werden und die vom worklet verarbeitet werden.

## Komplexität hinzufügen

Das obenstehende Beispiel ist nicht sonderlich aufregend, da man es ebenso mit CSS in wenigen Schritten und ohne den Aufwand eines worklets programmieren kann, etwa, indem man [dekorative Inhalte](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before hinzufügt` oder mit `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` - Was die CSS Painting API so interessant und machtvoll macht, ist die Möglichkeit, komplexe Bilder zu erstellen und Variablen zu übergeben.

Werfen wir einen Blick auf ein komplexeres Beispiel.

```js
registerPaint('headerHighlight', class {
  static get inputProperties() { return ['--highColour']; }
  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props) {

  /* set where to start the highlight & dimensions */
  const x = 0;
  const y = size.height * 0.3;
  const blockWidth = size.width * 0.33;
  const highlightHeight = size.height * 0.85;
        const color = props.get('--highColour');

  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo( x, y );
  ctx.lineTo( blockWidth, y );
  ctx.lineTo( blockWidth + highlightHeight, highlightHeight );
  ctx.lineTo( x, highlightHeight );
  ctx.lineTo( x, y );
  ctx.closePath();
  ctx.fill();

  /* create the dashes */
  for (let i = 0; i < 4; i++) {
   let start = i * 2;
   ctx.beginPath();
   ctx.moveTo( (blockWidth) + (start * 10) + 10, y );
   ctx.lineTo( (blockWidth) + (start * 10) + 20, y );
   ctx.lineTo( (blockWidth) + (start * 10) + 20 + (highlightHeight), highlightHeight );
   ctx.lineTo( (blockWidth) + (start * 10) + 10 + (highlightHeight), highlightHeight );
   ctx.lineTo( (blockWidth) + (start * 10) + 10, y );
   ctx.closePath();
   ctx.fill();
  }
  } // paint
});
```

Wir können dann einige Zeilen HTML mit der entsprechenden Klasse aus CSS schreiben:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Dann geben wir den einzelnen HTML-Elementen je einen verschiedenen Wert für die [von uns definierte Eigenschaft](/de/docs/Web/CSS/CSS_Variables) `--highColour:`

```css
.fancy {
  background-image: paint(headerHighlight);
}
h1 { --highColour: hsla(155, 90%, 60%, 0.7); }
h3 { --highColour: hsla(255, 90%, 60%, 0.5); }
h6 { --highColour: hsla(355, 90%, 60%, 0.3); }
```

Und wir melden das worklet an:

```js
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/03partThree/header-highlight.js');
```

{{EmbedLiveSample("example4", 300, 300)}}

Während man das worklet selbst nicht ändern kann, kann man mit CSS und HTML jedoch herumspielen. Vielleicht probieren Sie mal [`float`](/en-US/docs/Web/CSS/float) und [`clear`](/en-US/docs/Web/CSS/clear) bei den Titelzeilen `<h1>`, `<h3>` und `<h6>` aus.

Man kann natürlich auch Hintergrundbilder ohne CSS paint API erstellen. Das kann allerdings zu einem großen Mehraufwand und wesentlich mehr Code führen. Mit CSS Paint API kann ein worklet immer wieder verwendet werden und über eine Parameter-Übergabe rasch angepasst werden.

## Parameter übergeben

Mit der CSS Paint API können wir nicht nur auf selbstdefinierte Eigenschaften zugreifen, sondern auch über die CSS-Funktion `paint()` auch Parameter übergeben.

Nehmen wir an, wir wollen ab und zu den Hintergrund nur mit einem Strich statt vollständig füllen. Dafür können wir ein Extra-Argument übergeben, welches dann im worklet abgefragt und entsprechend verarbeitet wird.

```css
li {
 background-image: paint(hollowHighlights, stroke);
}
```

Mit der Methode `inputArguments()` in der Klasse `registerPaint()` machen wir das zusätzliche Argument aus der CSS-Funktion `paint()` zugänglich:

```js
static get inputArguments() { return ['*']; }
```

Und wenn wir darauf zugreifen wollen:

```js
paint(ctx, size, props, args) {

 // use our custom arguments
 const hasStroke = args[0].toString();

 // if stroke arg is 'stroke', don't fill
 if (hasStroke === 'stroke') {
  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = colour;
 }
 ...
}
```

Wir können auch mehr als ein Argument übergeben:

```css
li {
 background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wir können auch den Datentyp genau angeben. Wenn wir die Werte der Argumente mit `get` holen, fragen wir dann speziell nach einer `<length>` Einheit.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir spezifisch nach einem `<length>` Attribut gefragt. Das erste Element des Arrays wird dann als [`CSSUnparsedValue`](/en-US/docs/Web/API/CSSUnparsedValue), das zweite als [`CSSStyleValue`](/en-US/docs/Web/API/CSSStyleValue) übergeben.

Wenn das selbstdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Maßeinheit, können wir die Typed OM CSSStyleValue Klasse (und deren Unterklassen) aufrufen, indem wir das Schlüsselwort für diesen Typen in der Methode `inputArguments()` nutzen.

Fügen wir einfach ein weiteres Argument für die Pixel-Breite unserer Hintergrundlinie hinzu:

```css
li {
 background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir mit `get` unsere Argumentenliste holen, können wir direkt nach der `<length>` Einheit fragen.

```js
static get inputArguments() { return ['*', '<length>']; }
```

Nun können wir Typen und Werte der Properties übergeben, was bedeutet: wir können die Anzahl der Pixel und den Typ Nummer direkt verwenden (zugegeben nimmt `ctx.lineWidth` einen Float als Wert und eigentlich keinen Wert mit Längeneinheiten, aber um des Beispiels willen ...).

```js
paint(ctx, size, props, args) {

  const strokeWidth = args[1];

  if (strokeWidth.unit === 'px') {
   ctx.lineWidth = strokeWidth.value;
  } else {
   ctx.lineWidth = 1.0;
  }

 ...
}
```

Es ist wichtig, hier den Unterschied zwischen selbsterstellten Properties und den Argumenten zu erwähnen. Selbsterstellte Properties (und auch alle Properties für einen bestimmten Selektor) sind global - sie können überall in unserem CSS und JS verwendet werden.

Wenn Sie zum Beispiel ein `--mainColor` definiert haben, der dazu dient, eine Farbe mit der Funktion `paint()` zu setzen, kann dieser auch dazu verwendet werden, anderswo im CSS Farben zu setzen. Wenn Sie diesen Wert speziell für paint ändern wollen, kann sich das als schwierig erweisen. Hier kommt dann das angepasste Argument ins Spiel. Argumente dienen dazu, das zu kontrollieren, was man aktuell zeichnet, während Properties dazu dienen, den Stil zu kontrollieren.

![The list items have a background image that is either pink, purple or green, with different stroke widths, and the green one being filled.](https://mdn.mozillademos.org/files/16786/hollowfilled.png)

Nun können wir die Vorteile dieser API sehen: wir können zahlreiche selbsterstellte Properties und Argumente dafür verwenden, um wiederverwendbare und vollkommen kontrollierbare Styling-Funktionen zu erstellen.

```js
registerPaint('hollowHighlights', class {

  static get inputProperties() { return ['--boxColor']; }
  // Input arguments that can be passed to the `paint` function
  static get inputArguments() { return ['*','']; }

  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props, args) {
    // ctx   -> drawing context
    // size  -> size of the box being painted
    // props -> list of custom properties available to the element
 // args  -> list of arguments set when calling the paint() function in the css

  // where to start the highlight & dimensions
  const x = 0;
  const y = size.height * 0.3;
  const blockWidth = size.width * 0.33;
  const blockHeight = size.height * 0.85;

  // the values passed in the paint() function in the CSS
  const colour = props.get( '--boxColor' );
  const strokeType = args[0].toString();
  const strokeWidth = parseInt(args[1]);


  // set the stroke width
  if ( strokeWidth ) {
   ctx.lineWidth = strokeWidth;
  } else {
   ctx.lineWidth = 1.0;
  }
  // set the fill type
  if ( strokeType === 'stroke' ) {
   ctx.fillStyle = 'transparent';
   ctx.strokeStyle = colour;
  } else if ( strokeType === 'filled' ) {
   ctx.fillStyle = colour;
   ctx.strokeStyle = colour;
  } else {
   ctx.fillStyle = 'none';
   ctx.strokeStyle = 'none';
  }

  // block
  ctx.beginPath();
  ctx.moveTo( x, y );
  ctx.lineTo( blockWidth, y );
  ctx.lineTo( blockWidth + blockHeight, blockHeight );
  ctx.lineTo( x, blockHeight );
  ctx.lineTo( x, y );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // dashes
  for (let i = 0; i < 4; i++) {
   let start = i * 2;
   ctx.beginPath();
   ctx.moveTo( blockWidth + (start * 10) + 10, y);
   ctx.lineTo( blockWidth + (start * 10) + 20, y);
   ctx.lineTo( blockWidth + (start * 10) + 20 + blockHeight, blockHeight);
   ctx.lineTo( blockWidth + (start * 10) + 10 + blockHeight, blockHeight);
   ctx.lineTo( blockWidth + (start * 10) + 10, y);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
  }

  } // paint
});
```

Wir können verschiedene Farbe und Strichstärken setzen und entscheiden, ob das Hintergrundbild gefüllt oder leer ist:

```css
li {
   --boxColor: hsla(155, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, stroke, 5px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(255, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(355, 90%, 60%, 0.5);
   background-image: paint(hollowHighlights, stroke, 1px);
}
```

```html hidden
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
    <li>item 11</li>
    <li>item 12</li>
    <li>item 13</li>
    <li>item 14</li>
    <li>item 15</li>
    <li>item 16</li>
    <li>item 17</li>
    <li>item</li>
</ul>
```

In unserem `<script>`-Block melden wir das Worklet an:

```js
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hollow.js');
```

{{EmbedLiveSample("example5", 300, 300)}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model API](/de/docs/Web/Houdini/CSS_Typed_OM)
