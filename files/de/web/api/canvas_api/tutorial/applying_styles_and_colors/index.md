---
title: Stile und Farben verwenden
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
translation_of: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
original_slug: Web/Guide/HTML/Canvas_Tutorial/Applying_styles_and_colors
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

Im Kapitel über das [Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes "Web/Guide/HTML/Canvas_tutorial/Drawing_shapes") haben wir zum Einstieg nur die Standard-Stile für Linien und Füllungen benutzt. Nun möchten wir uns etwas näher mit Möglichkeiten beschäftigen, unsere Zeichnungen etwas attraktiver zu gestalten. Wir werden lernen, unterschiedliche Farben, Linienstile, Verläufe, Muster und Schatten in unseren Zeichnungen anzuwenden.

## Farben

Bis jetzt haben wir nur Methoden im unmittelbaren Zusammenhang mit dem Zeichnen gelernt. Möchten wir einer Form eine Farbe zuordnen, stehen uns folgenden zwei Eigenschaften zur Verfügung: `fillStyle` und `strokeStyle`.

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : Bestimmt den Stil in dem die Form gefüllt wird.
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : Bestimmt den Stil der Umrandungslinien.

`color` steht entweder für einen CSS {{cssxref("&lt;color&gt;")}} Farbwert, ein Gradienten-Objekt, oder ein Muster-Objekt. Auf letztere gehen wir später noch ein. Standardmäßig sind Strich- und Füllfarbe auf Schwarz eingestellt (CSS-Farbwert #000000).

> **Note:** **Anmerkung:** Nach dem Setzen von `strokeStyle` und/oder `fillStyle` wird der neue Wert zum Standardwert für alle nachfolgend gezeichneten Formen. Für jede in einer abweichenden Farbe gewünschte Form müssen `fillStyle` bzw. `strokeStyle` neu definiert werden.

Der String `color` sollte, entsprechend der Spezifikation, ein gültiger CSS {{cssxref("&lt;color&gt;")}} -Wert sein. Alle folgenden Beispiele definieren die selbe Farbe.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

### Beispiel für `fillStyle`

In diesem Beispiel nutzen wir wieder zwei Schleifen um ein Gitter aus gefüllten Quadraten zu zeichnen, jedes in einer anderen Farbe. Das resultierende Bild sollte etwa dem Screenshot unten entsprechen. Außergewöhnliches passiert hier nicht, wir nutzen einfach die beiden Variablen i und j um jedem Quadrat eine eigene Farbe zu geben, wobei wir nur die Werte für den Rot- und Grünanteil ändern; der Blauwert bleibt unverändert. Durch Modifikation der Farbkanäle können Sie verschiedene Paletten erzeugen; eine Erhöhung der Schrittweite erzeugt z.B. ein Muster, das an die Farbpaletten in Photoshop erinnert.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       Math.floor(255-42.5*j) + ',0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}
```

```js hidden
draw();
```

Das Ergebnis:

{{EmbedLiveSample("A_fillStyle_example", 160, 160, "https://mdn.mozillademos.org/files/5417/Canvas_fillstyle.png")}}

### Beispiel für `strokeStyle`

Dieses Beispiel ähnelt dem vorangegangenen, nutzt aber die `strokeStyle` Eigenschaft, um die Farben der Umrisslinien zu ändern. Mit der Methode `arc()` zeichnen wir Kreise an Stelle der Quadrate.

```js
  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
  }
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

The result looks like this:

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "https://mdn.mozillademos.org/files/253/Canvas_strokestyle.png")}}

## Transparenz

Zusätzlich zu deckenden Formen können wir auch teiltransparente (oder durchscheinende) Formen zeichnen. Dies geschieht entweder durch das Setzen der Eigenschaft `globalAlpha` oder die Zuordnung einer teiltransparenten Farbe zu einem Zeichen- oder Füllstil.

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}
  - : Wendet den angegebenen Transparenz-Wert auf alle nachfolgend gezeichneten Formen an. Der Wert muss zwischen 0.0 (vollständig transparent) und 1.0 (vollständig deckend) liegen. Der Standardwert ist 1.0.

Die Eigenschaft `globalTransparency` ist nützlich, wenn man viele Formen mit gleicher Transparenz zeichnen möchte; meist ist es aber praktischer, die Transparenz jeder einzelnen Form gemeinsam mit ihrer Farbe zu definieren.

Die Eigenschaften `strokeStyle` und `fillStyle` akzeptieren CSS rgba Farbwerte, daher kann die Transparenz direkt bei der Zuordnung einer Farbe wie folgt gesetzt werden:

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

Die rgba()-Funktion entspricht der rgb()-Funktion, allerdings mit einem zusätzlichen Parameter am Ende. Dieser Wert bestimmt die Transparenz dieser bestimmten Farbe. Der Gültigkeitsbereich umfasst Werte zwischen 0.0 (völlig transpartent) und 1.0 (vollständig deckend).

### Beispiel für `globalAlpha`

In diesem Beispiel zeichnen wir einen Hintergrund aus vier unterschiedlich gefärbten Quadraten. Über diese legen wir dann einige transparente Kreise. Die Eigenschaft `globalAlpha` wird auf den Wert 0.2 gesetzt, der dann für alle folgend gezeichneten Formen verwendet wird. Jeder Durchlauf der `for`-Schleife zeichnet einen Satz Kreise mit zunehmendem Radius. Das Endresultat ist ein kreisförmiger Verlauf. Durch das Übereinanderlagern von immer mehr Kreisen reduzieren wir letztlich die Transparenz bereits gezeichneter Kreise. Erhöhen wir die Anzahl der Durchläufe (und damit der gezeichneten Kreise) weiter, wird der Hintergrund in der Bildmitte irgendwann völlig überdeckt.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // draw background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,75,75);
  ctx.fillStyle = '#FFF';

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (i=0;i<7;i++){
    ctx.beginPath();
    ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "180", "180", "https://mdn.mozillademos.org/files/232/Canvas_globalalpha.png")}}

### Beispiel für die Verwendung von `rgba()`

Das zweite Beispiel ist ähnlich dem ersten, aber hier überlagern wir farbige Flächen mit schmalen, weißen Rechtecken zunehmender Deckkraft. Die Verwendung von rgba() an Stelle von `globalAlpha` erlaubt uns mehr Kontrolle und Flexibilität, weil wir damit Strich- und Füllstil unterschiedlich behandeln können.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Draw background
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0,0,150,37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0,37.5,150,37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0,75,150,37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0,112.5,150,37.5);

  // Draw semi transparent rectangles
  for (var i=0;i<10;i++){
    ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
    for (var j=0;j<4;j++){
      ctx.fillRect(5+i*14,5+j*37.5,14,27.5);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("An_example_using_rgba()", "180", "180", "https://mdn.mozillademos.org/files/246/Canvas_rgba.png")}}

## Linienstile

Mehrere Eigenschaften ermöglichen den Zugriff auf Linienstile:

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : Setzt die Breite später gezeichneter Linien.
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : Definiert die Form der Linienenden.
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : Definiert die Form der „Ecken“, an denen sich Linien treffen.
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : Definiert einen Grenzwert für die Gehrung (Schräge) am spitzen Winkel zwischen zwei Linien; damit wird die Dicke des Verbindungsbereichs begrenzt.

<!---->

- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : Gibt den aktuellen Array für das Strichlierungsmuster zurück (eine gerade Anzahl nicht-negativer Zahlen).
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : Definiert das aktuelle Strichlierungsmuster.
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : Beschreibt wo das Strichlierunsmuster startet.

Die Beispiele unten sollen Ihnen das Verständnis dieser Angaben erleichtern.

### Beispiel für `lineWidth`

Diese Eigenschaft bestimmt die aktuelle Linienbreite. Der Standardwert ist 1.0, und es sind nur positive Zahlen erlaubt.

Die Linienbreite entspricht der Dicke des Strichs, zentriert über der Strecke zwischen den Punkten. Anders ausgedrückt dehnt sich die Fläche der gezeichneten Linie je zur Hälfte links und rechts der Strecke aus. Weil Canvas-Koordinaten sich nicht unmittelbar auf Pixel beziehen müssen, sollte man etwas Sorgfalt walten lassen um „scharfe“ bzw. definierte horizontale und vertikale Linien zu erhalten.

Im folgenden Beispiel werden zehn gerade Linien zunehmender Breite gezeichnet. Die Linie ganz links ist 1.0 Einheiten breit. Allerdings erscheint diese Linie - und auch alle anderen Linien mit einem ungeraden Wert für die Liniendicke - nicht wirklich scharf; schuld daran ist die Positionierung.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 10; i++){
    ctx.lineWidth = 1+i;
    ctx.beginPath();
    ctx.moveTo(5+i*14,5);
    ctx.lineTo(5+i*14,140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "180", "180", "https://mdn.mozillademos.org/files/239/Canvas_linewidth.png")}}

Um scharfe Linien zu erzeugen muss man erst verstehen, wie Linien gezeichnet werden. In den Bildern unten steht das Gitter für das Koordinatensystem im Canvas. Die Quadrate zwischen den Gitterlinien entsprechen reellen Pixeln der Bildschirmdarstellung. Im ersten Bild wird ein Rechteck zwischen (2,1) und (5,5) gefüllt. Das gesamte Rechteck zwischen diesen Koordinaten (im Bild hellrot) fällt mit den Pixelgrenzen zusammen, und es resultiert eine Rechteckfläche mit scharfen Abgrenzungen.

![](https://mdn.mozillademos.org/files/201/Canvas-grid.png)

Stellen wir uns jetzt einen Pfad von (3,1) nach (3,5) mit einer Linienbreite von 1.0 vor, dann erhalten wir die Situation im zweiten Bild. Die zu füllende Fläche erstreckt sich jeweils nur zur Hälfte über die links und rechts angrenzenden Pixel. Dieser Zustand kann nur näherungsweise umgesetzt werden, so dass die betroffenen Pixel nur in der halben Intensität gefüllt werden. Genau das passierte mit der 1.0 Einheiten breiten Linie im vorhergehenden Programm.

Um das zu korrigieren muss man bei der Definition der Verbindungsstrecke besonders genau sein. Mit dem Wissen, dass eine Linie der Breite 1.0 sich jeweils zur Hälfte auf beide Seiten ausdehnt, kann man die Strecke von (3.5,1) bis (3.5,5) legen und erhält die Situation im dritten Bild - die eine Einheit breite Linie füllt exakt eine Pixelreihe.

> **Note:** **Anmerkung:** Bitte beachten Sie, dass in dem Beispiel der vertikalen Linie die Y-Position sich immer noch auf eine ganzzahlige Position bezieht - andernfalls würden an den Endpunkten die Pixel nur halb gedeckt.(Beachten Sie aber auch, dass dieses Verhalten zusätzlich vom `lineCap`-Stil abhängt, der standardmäßig auf `butt` eingestellt ist. Möchten Sie einheitliche Striche mit Koordinaten in halben Pixeln für ungerade Liniendicken berechnen, können Sie dafür den `lineCap`-Sti auf `square` setzten, wodurch der Aussenrand des Strichs am Endpunkt automatisch über den ganzen Pixel ausgedehnt wird.)Beachten Sie auch, dass nur der Start- und Zielpunkt einer Strecke betroffen ist. Bei einer mit `closePath() `geschlossenen Strecke git es keinen solchen Start- bzw. Zielpunkt, stattdessen werden alle Endpunkte mit den vorhergehenden und nachfolgenden Segmenten entsprechend dem aktuellen `lineJoin`-Stil verbunden; dessen Standardwert ist `miter`, was eine automatische Ausweitung der äußeren Linienränder bis zu ihrem Schnittpunkt bewirkt, so dass der gezeichnete Strich an jedem Endpunkt exakt volle Pixel abdeckt, wenn die verbundenen Segmente horizontal und/oder vertikal verlaufen. Die folgenden zwei Abschnitte demonstrieren das Verhalten dieser zusätzlichen Linien-Stile.

Für scharfe Ränder bei geradzahligen Linienbreiten definieren wir den Pfad zwischen den Pixeln (z.B. (3,1) bis (3,5)), so dass jede Hälfte des Strichs einer ganzzahligen Anzahl von Pixeln entspricht.

Wenn die sorgfältige Arbeit mit dem Pixelraster in 2D-Grafiken anfangs auch noch etwas anstrengend erscheinen mag, so gewährleistet sie letztlich eine korrekte Abbildung der Grafiken, unabhänging von Skalierungen oder anderen Transformationen. Eine korrekt positionierte Linie mit einer Breite von 1.0 wird nach einer Vergrößerung um den Faktor 2 eine Linie der Breite 2.0 ergeben, wiederum scharf umrissen und an der richtigen Position.

### Beispiel für `lineCap`

Die Eigenschaft `lineCap` bestimmt das Erschinungsbild der Linienenden. Sie kann drei verschiedene Werte annehmen: `butt` (Standardwert), `round` und `square`.

![](https://mdn.mozillademos.org/files/236/Canvas_linecap.png)

- `butt`
  - : Glatte Enden an den Endpunkten.
- `round`
  - : Abgerundete Enden.
- `square`
  - : Die Enden werden glatt abgeschnitten, es wird aber vorher ein Rechteck angefügt, gleicher Breite wie die Linie und halb so lang wie breit.

In diesem Beispiel ziehen wir drei Linien, jede davon mit einem unterschiedlichen Wert für `lineCap`. Zwei Hilfslinien helfen dabei die Unterschiede zu verdeutlichen. Jede Linie beginnt und endet exakt an den Hilfslinien.

Die linke Linie verwendet die Option `butt`. Sie sehen, dass sie exakt an den Hilfslinien endet. Die zweite Linie verwendet die Option `round`, es wird dadurch ein Halbkreis mit einem Radius entsprechend der halben Linienbreite angehängt. Die recht Linie verwendet die Option `square`. Diese hängt ein Rechteck von gleicher Breite und einer Länge der halben Linienbreite an.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineCap = ['butt','round','square'];

  // Draw guides
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10,10);
  ctx.lineTo(140,10);
  ctx.moveTo(10,140);
  ctx.lineTo(140,140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = 'black';
  for (var i=0;i<lineCap.length;i++){
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25+i*50,10);
    ctx.lineTo(25+i*50,140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "180", "180", "https://mdn.mozillademos.org/files/236/Canvas_linecap.png")}}

### Beispiel für `lineJoin`

Die Eigenschaft `lineJoin` bestimmt, wie zwei zusammenhängende Segmente (Linien-, Kurven- oder Kreissegmente) länger als Null in einer Form verbunden werden („degenerierte“ Elemente mit zusammenfallenden Start- und Zielpunkten, also mit der Länge Null, werden dabei übersprungen).

Diese Eigenschaft kann drei mögliche Werte annehmen: `round`, `bevel` und `miter` (Standardeinstellung). Beachten Sie, dass die `lineJoin`-Einstellung keine Auswirkungen hat wenn die Segemente in gleicher Richtung verlaufen, da in diesem Falle keine Verbindungsfläche eingefügt wird.

![](https://mdn.mozillademos.org/files/237/Canvas_linejoin.png)

- `round`
  - : Rundet die Ecke ab indem ein zusätzlicher Kreisausschnitt am gemeinsamen Endpunkt der verbundenen Segmente eingefügt wird. Der Radius entspricht der halben Liniendicke.
- `bevel`
  - : Füllt die Fläche zwischen dem gemeinsamen Endpunkt und den beiden getrennten äußeren Ecken der Segmente mit einem Dreieck.
- `miter`
  - : Verlängert die Aussenränder der Segmente bis sie sich in einem Punkt schneiden, wobei eine rautenförmige Fläche eingefügt wird. Diese Einstellung wird durch die Eigenschaft `miterLimit` beeinflusst, welche später erklärt wird.

Das folgenden Beispielprogramm verdeutlicht die Auswirkungen der drei Varianten von `lineJoin` anhand von drei Linienzügen; das Ergebnis sehen Sie oben.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineJoin = ['round','bevel','miter'];
  ctx.lineWidth = 10;
  for (var i=0;i<lineJoin.length;i++){
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5,5+i*40);
    ctx.lineTo(35,45+i*40);
    ctx.lineTo(75,5+i*40);
    ctx.lineTo(115,45+i*40);
    ctx.lineTo(155,5+i*40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "180", "180", "https://mdn.mozillademos.org/files/237/Canvas_linejoin.png")}}

### Beispiel für die Eigenschaft `miterLimit`

Wie wir im vorhergehenden Beispiel gesehen haben, werden mit der Option `miter` die äußeren Kanten von zwei schneidenden Linien bis zu ihrem Schnittpunkt verlängert. Schneiden sich die Linien unter einem großen Winkel, liegt dieser äußere Schnittpunkt nicht allzu weit vom inneren entfernt. Mit kleiner werdendem Winkel vergrößert sich die Länge dieses Bereichs (genannt Gehrung = engl. _miter_) aber exponentiell.

Die Eigenschaft `miterLimit` bestimmt, wie weit der äußere Verbindungspunkt maximal vom inneren entfernt sein darf. Wird dieser Wert überschritten, wird stattdessen eine Fase gezogen, ähnlich der Einstellung `bevel`. Beachten Sie: Die maximale Gehrungslänge ist das Produkt aus der Liniendicke, gemessen im aktuellen Koordinatensystem, und dem Wert von `miterLimit` (Standardwert 10.0 im HTML {{HTMLElement("canvas")}}). Daher kann `miterLimit` unabhängig vom aktuellen Vergrößerungsmaßstab oder irgendeiner affinen Transformation der Strecke gesetzt werden; es beeinflusst nur die reell abgebildete Form der Kanten.

Präziser gesagt ist beschreibt `miterLimit` das maximale Verhältnis der Ausdehnung der Verlängerung nach außen (diese wird im HTML Canvas zwischen dem Schnittpunkt der äußeren Kanten der schneidenden Linien und dem gemeinsamen Endpunkt der Strecken gemessen) zur halben Liniendicke. Dazu gleichwertig ist die Definition als das maximal erlaubte Verhältnis der Entfernung zwischen dem inneren und äußeren Eckpunkt der Verbindung und der vollen Liniendicke. Er entspricht mathematisch dem Kosekans des halben minimalen Innenwinkels zwischen den verbundenen Segmenten, unterhalb dessen nur eine Fase ohne weitere Ausdehnung gezeichnet wird.

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Der Standardwert von `miterLimit` = `10.0` schneidet alle Überhänge von Winkeln kleiner als 11° ab.
- Ein Wert von √2 ≈ 1.4142136 (aufgerundet) stutzt Überhänge bei spitzen Winkeln, und belässt nur bei stumpfen und rechten Winkeln zusätzlich Raum für die Gehrung.
- Ein Wert von 1.0 ist erlaubt, schneidet aber alle Überhänge ab.
- Werte kleiner als 1.0 sind nicht erlaubt.

In dieser einfachen Demonstration können Sie den Wert für `miterLimit` dynamisch einstellen und dabei verfolgen, wie sich die Form der Ecken ändert. Die blauen Linien zeigen an wo Start- und Zielpunkt jedes Zickzack-Segments liegen.

Stellen Sie in diesem Programm ein `miterLimit` kleiner als 4.2 ein, wird an keiner der sichtbaren Ecken zu einer zusätzlichen Ausdehnung durch die Gehrung kommen; stattdessen entsteht an der blauen Linie eine Fase. Ist `miterLimit` größer als zehn, verbinden sich die meisten Linien in diesem Beispiel in einer Gehrung die weit über die blauen Linie hinausreicht, wobei sich die Höhe von links nach rechts wegen der zunehmenden Winkel verringert. Für dazwischenliegende Werte bilden die linken Elemente eine ausgedehnte Gehrung, während nach rechts die Spitzen durch Fasen ersetzt werden.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Clear canvas
  ctx.clearRect(0,0,150,150);

  // Draw guides
  ctx.strokeStyle = '#09f';
  ctx.lineWidth   = 2;
  ctx.strokeRect(-5,50,160,50);

  // Set line styles
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 10;

  // check input
  if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
  } else {
    alert('Value must be a positive number');
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0,100);
  for (i=0;i<24;i++){
    var dy = i%2==0 ? 25 : -25 ;
    ctx.lineTo(Math.pow(i,1.5)*2,75+dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>Change the <code>miterLimit</code> by entering a new value below and clicking the redraw button.<br><br>
      <form onsubmit="return draw();">
        <label>Miter limit</label>
        <input type="text" size="3" id="miterLimit"/>
        <input type="submit" value="Redraw"/>
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById('miterLimit').value = document.getElementById('canvas').getContext('2d').miterLimit;
draw();
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "400", "180", "https://mdn.mozillademos.org/files/240/Canvas_miterlimit.png")}}

## Strichlierte Linien verwenden

Die Methode `setLineDash` und die Eigenschaft `lineDashOffset` definieren die Strichlierung von Linien. `setLineDash` akzeptiert eine Liste von Zahlenwerten, die abwechselnd die Abstände von Strichen und Zwischenräumen definieren, wobei `lineDashOffset` einen Versatz am Start des Musters definiert.

In diesem Beispiel erzeugen wir einen „marschierende Ameisen“-Effekt. Diese Animation finden wir oft bei Auswahlwerkzeugen von Bildbearbeitungsprogrammen. Es macht dort die Grenze zwischen Auswahlbereich und Hintergrund sichtbar. Später werden Sie in diesem Tutorial noch lernen solche oder ähnliche [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) zu erzeugen.

```html hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
var ctx = document.getElementById('canvas').getContext('2d');
var offset = 0;

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10,10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Using_line_dashes", "120", "120", "https://mdn.mozillademos.org/files/9853/marching-ants.png")}}

## Gradienten

Wie in jedem anderen Zeichenprogramm können wir auch im Canvas linien- und kreisförmige Verläufe zum Zeichnen und Füllen von Formen verwenden. Mit den folgenden Befehlen können wir ein {{domxref("CanvasGradient")}}-Objekt erzeugen; dieses ordnen wir dann einer `fillStyle`- oder `strokeStyle`-Eigenschaft zu.

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : Erzeugt eine lineares Verlaufsobjekt mit Startpunkt (`x1`, `y1`) und Zielpunkt (`x2`, `y2`).
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : Erzeugt einen kreisförmige Verlauf. Die Parameter beschreiben zwei Kreise, der erste mit dem Mittelpunkt bei (`x1`, `y1`) und einem Radius von `r1`, der zweite mit Mittelpunkt (`x2`, `y2`) und demRadius `r2`.

For example:

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Sobald wir ein `canvasGradient`-Objekt erzeugt haben, können wir mit der Methode `addColorStop()` Farben zuordnen.

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : Erzeugt einen neuen Farbwert am Verlaufsobjekt. Das Positionsargument ist eine Zahl zwischen 0.0 und 1.0, und es definiert die relative Position der Farbe innerhalb der Verlaufsstrecke. Das Farbargument ist eine Zeichenkette für eine CSS {{cssxref("&lt;color&gt;")}} und beschreibt den Farbwert, den der Farbverlauf bis zur angegebenen Position erreicht hat.

Die Anzahl der Farbschritte ist beliebig. Es folgt ein Beispiel für einen einfachen Verlauf von Weiss nach Schwarz.

```js
var lineargradient = ctx.createLinearGradient(0,0,150,150);
lineargradient.addColorStop(0, 'white');
lineargradient.addColorStop(1, 'black');
```

### Beispiel für `createLinearGradient`

In diesem Beispiel erzeugen wir zwei unterschiedliche Verläufe. Wie Sie sehen, akzeptieren sowohl `strokeStyle` als auch `fillStyle` ein `canvasGradient`-Objekt als Eingabe.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Create gradients
  var lingrad = ctx.createLinearGradient(0,0,0,150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0,50,0,95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // draw shapes
  ctx.fillRect(10,10,130,130);
  ctx.strokeRect(50,50,50,50);

}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Der erste Teil beschreibt den Hintergrundverlauf. Wie Sie sehen, haben wir an der gleichen Position zwei unterschiedliche Farben definiert. Das dient zur Erzeugung sprunghafter Farbänderungen - hier von weiss nach grün. Üblicherweise spielt es keine Rolle in welcher Reihenfolge die Farbstufen definiert werden, in diesem speziellen Fall ist die Reihenfolge aber wichtig. Nehmen Sie die Zuordnungen am besten in der tatsächlichen Reihenfolge vor, so beugen Sie möglichen Problemen vor.

Beim zweiten Verlauf haben wir an der Startposition (0,0) keinen Farbwert definiert, was auch nicht unbedingt nötig ist, weil dann automatisch die Farbe der nächsten Farbstufe verwendet wird. Daher bewirkt die Zuordnung der Farbstufe „schwarz“ an der Position 0.5 automatisch eine einheitliche Schwarzfärbung vom Start Null bis zur Position 0.5.

{{EmbedLiveSample("A_createLinearGradient_example", "180", "180", "https://mdn.mozillademos.org/files/235/Canvas_lineargradient.png")}}

### Beispiel für `createRadialGradient`

In diesem Beispiel werden wir vier kreisförmige Verläufe definieren. Weil wir volle Kontrolle über die Start- und Zielpunkte der Verläufe haben, können wir komplexere Verläufe erzeugen als z.B. die einfacheren Radialverläufe in Photoshop, die uns nur Verläufe mit einem gemeinsamen Mittelpunkt und radial gleichmäßig verteilten Farben erlauben würden.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Create gradients
  var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');

  var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

  var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

  var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0,0,150,150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Wir haben die Mittelpunkte von Start- und Zielkreis etwas gegeneinander versetzt, was einen kugelförmigen 3D-Effekt erzeugt. Man sollte vermeiden, dass sich die Begrenzungen des inneren und des äußeren Kreises schneiden, weil das unberechenbare Effekte erzeugen kann.

Die letzte Farbstufe in jedem der vier Verläufe verwendet eine völlig transparente Farbe. Für einen gelungenen Übergang zur vorhergehenden Stufe sollten die Farbwerte identisch sein. Das ist im obigen Programm nicht gleich erkennbar, weil unterscheidliche Schreibweisen für die Farbwerte verwendet wurden. Berücksichtigen Sie, dass z.B. beim ersten Farbverlauf `#019F62` auch als `rgba(1,159,98,1)` geschrieben werden könnte.

{{EmbedLiveSample("A_createRadialGradient_example", "180", "180", "https://mdn.mozillademos.org/files/244/Canvas_radialgradient.png")}}

## Muster

In einem der Beispiele auf der vorhergehenden Seite haben wir mehrere Schleifen verwendet, um Bilder in Form eines Musters anzuordnen. Allerdings gibt es auch eine weit einfachere Methode: `createPattern()`

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : Erzeugt ein neues Muster-Objekt in Canvas und gibt es zurück. `image` ist eine {{domxref("CanvasImageSource")}} (ein {{domxref("HTMLImageElement")}}, ein weiterer Canvas, ein {{HTMLElement("video")}} Element, oder ähnliches). Der String `image` gibt an wie das Bild benutzt wird.

`type` enthält eine der folgenden Zeichenketten und bestimmt, wie aus dem Bild ein Muster erzeugt wird.

- `repeat`
  - : Wiederhole („kachle“) das Bild horizontal und vertikal.
- `repeat-x`
  - : Wiederhole das Bild nur horizontal.
- `repeat-y`
  - : Nur vertikale Wiederholung.
- `no-repeat`
  - : Keine Wiederholung, das Bild wird nur einmal benutzt.

Wir verwenden eine Methode ähnlich den vorhergehenden Beispielen zu Verläufen, um ein {{domxref("CanvasPattern")}}-Objekt zu erzeugen. Haben wir das Muster erst erzeugt, können wir es einer `fillStyle`- oder `strokeStyle`-Eigenschaft zuordnen.

```js
var img = new Image();
img.src = 'someimage.png';
var ptrn = ctx.createPattern(img,'repeat');
```

> **Note:** **Anmerkung:** Wie bei `drawImage()` müssen Sie auch hier sicherstellen, dass das Bild vollständig geladen wurde bevor Sie die Methode aufrufen; andernfalls kann das Muster inkorrekt dargestellt werden.

### Beispiel für `createPattern`

Im abschließenden Beispiel erzeugen wir ein Muster um es dann dem `fillStyle` zuzuordnen. Bemerkenswert ist hierbei die Verwendung des `onload()`-Handlers, um zu gewährleisten, dass die Bilddatei erst dann dem Muster zugeordnet wird, wenn sie vollständig geladen wurde.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // create new image object to use as pattern
  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function(){

    // create pattern
    var ptrn = ctx.createPattern(img,'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0,0,150,150);

  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_createPattern_example", "180", "180", "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png")}}

## Schatten

An der Erzeugung von Schatten sind vier Eignschaften beteiligt:

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : Definiert die horizontale Ausdehnung des Schattens vom Objekt weg. Dieser Wert wird nicht durch die Transforamtionsmatrix beeinflusst. Standardwert ist 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : Wie `shadowOffsetY`, aber in vertikaler Richtung.
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : Definiert das Ausmaß der Unschärfe; der Wert beschreibt dabei nicht eine bestimmte Anzahl von Pixeln. Er wird nicht durch die Transformationsmatrix beeinflusst. Standardwert ist 0.
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : Eine CSS Farbdefinition der Schattenfarbe. Standardwert ist voll tranparentes Schwarz.

Die Eigenschaften `shadowOffsetX` und `shadowOffsetY` bestimmen wie weit weg vom Objekt sich der Schatten in x- und y-Richtung erstrecken soll; diese Werte werden nicht von der aktuellen Tranformationsmatrix beeinflusst. Mit negative Werten verläuft der Schatten nach links und oben, mit positiven nach rechts und unten. Standardwert für beide Parameter ist 0.

Die Eigenschaft `shadowBlur` definiert die Ausdehnung der Unschärfezone; der Wert beschreibt dabei keine bestimmte Anzahl von Pixeln und wird durch die Transformationsmatrix nicht verändert. Standardwert: 0.

Die Eigenschaft `shadowColor` ist ein regulärer CSS-Farbwert, der die Farbe des Schatteneffektes definiert. Standardwert: voll-transparentes Schwarz.

> **Note:** Schatten werden nur bei `source-over` [compositing operations](/de/docs/Web/API/Canvas_API/Tutorial/Compositing "Web/Guide/HTML/Canvas_tutorial/Compositing") gezeichnet.

### Beispiel für Text mit Schatteneffekt

Dieses Beispiel zeichnet eine Buchstabenfolge mit einem Schatteneffekt.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example", "180", "100", "https://mdn.mozillademos.org/files/2505/shadowed-string.png")}}

Wir werden uns die `font`-Eigenschaft und die `fillText`-Methode im nächsten Kapitel über das [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) genauer ansehen.

## Canvas Füllregeln

Bei der Verwendung von `fill` ( oder {{domxref("CanvasRenderingContext2D.clip", "clip")}} und {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointinPath")}}) kann man wahlweise eine Füllregel angeben, mit der man über die Berechnung der Windungszahl bestimmt ob ein Punkt innerhalb oder ausserhalb der Strecke liegt und ob die Fläche dementsprechend gefüllt wird oder nicht. Das ist nützlich wenn eine Strecke sich selbst schneidet oder in eine andere eingeschrieben ist.

Zwei Werte sind möglich:

- **`"nonzero`**": Die [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule), der Standardwert.
- **`"evenodd"`**: Die [even-odd rule](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In diesem Beispiel verwenden wir die `evenodd`-Regel.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules", "110", "110", "https://mdn.mozillademos.org/files/9855/fill-rule.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
