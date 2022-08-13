---
title: Formen zeichnen mit Canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
translation_of: Web/API/Canvas_API/Tutorial/Drawing_shapes
original_slug: Web/Guide/HTML/Canvas_Tutorial/Formen_zeichnen
---
{{CanvasSidebar}}

## Koordinatensystem

![](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)Bevor wir mit dem Zeichnen beginnen können, müssen wir über das _canvas grid_ oder Koordinatensystem sprechen. Unser HTML-Skelett von der vorigen Seite hatte ein canvas-Element mit den Maßen 150 Pixel Höhe und 150 Pixel Breite. Zur Rechten sieht man diesen canvas, über den das Standard-Grid gelegt wurde. Normalerweise entspricht eine Einheit einem Pixel auf dem canvas. Der Ursprung dieses Rasters befindet sich in der oberen linken Ecke, im Punkt (0,0). Alle Elemente werden relativ zum Ursprung positioniert. Die Position des blauen Quadrates ist also x Pixel vom linken Rand und y Pixel vom oberen Rand entfernt, am Punkt (x,y). Später in diesem Tutorial werden wir sehen, wie wir den Ursprung an eine andere Position verschieben, das Koordinatensystem rotieren und sogar skalieren können, aber für's Erste behalten wir die Standardeinstellungen bei.

## Rechtecke zeichnen

Nicht wie in [SVG](/de/docs/SVG "en/SVG"), unterstützt {{HTMLElement("canvas")}} nur eine einfache Form: das Rechteck. Andere Formen werden mithilfe von Pfaden gezeichnet, dazu später mehr.

Es gibt drei Funktionen, welche auf verschiedenste Art Rechtecke zeichnen:

- `fillRect(x, y, breite, höhe)`
  - : Zeichnet ein gefülltes Rechteck
- `strokeRect(x, y, breite, höhe)`
  - : Zeichnet den Rahmen eines Rechteckes
- `clearRect(x, y, breite, höhe)`
  - : Der Bereich des Rechteckes wird transparent

Alle drei Funktionen benötigen die selben drei Argumente. `x` und `y` beschreibt die Position (_siehe Koordinatensystem_). `breite` und `höhe` beschreiben die Größe des Rechteckes.

### Beispiel mit Rechtecken

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
      }
    }

Demo:

{{EmbedLiveSample("Beispiel_mit_Rechtecken", 160, 160, "https://mdn.mozillademos.org/files/245/Canvas_rect.png")}}

Die `fillRect()`-Methode zeichnet ein 100px großes, schwarzes Quadrat. Die `clearRect()`-Methode löscht danach ein 60px großes Quadrat in der Mitte des schwarzen Quadrates. Anschließend zeichnet die `strokeRect()`-Methode einen 50px großen schwarzen Rahmen in der Mitte.

Später werden wir zwei alternative Methoden für `clearRect()` behandeln und sehen, wie man die Füll- und Konturfarbe ändern kann.

Anders als die Pfadmethoden zeichnen diese drei Rechteckmethoden sofort auf den canvas.

## Pfade zeichnen

Um andere Formen mithilfe von Pfaden zu zeichnen, benötigt man einige weitere Schritte. Zuerst muss man einen Pfad beginnen. Danach kommen die Pfadbefehle. Zuletzt wird dieser gezeichnet oder gefüllt. Diese Methoden werden hierfür genutzt:

- `beginPath()`
  - : Erstellt einen Pfad und beendet ggf. einen älteren.
- `closePath()`
  - : Beendet den Pfad und verbindet den Startpunkt mit dem Endpunkt.
- `stroke()`
  - : Zeichnet die Kontur des Pfades.
- `fill()`
  - : Zeichnet die Füllung des Pfades.

Zuerst wird also die `beginPath()`-Methode ausgeführt. Danach kommen weitere Pfadanweisung wie Linien oder Kurven. Ein weiterer Aufruf der Methode `beginPath()` oder ein Aufruf der Methode `closePath()` löscht die Pfadanweisungen. Optional kann nun `closePath()` ausgeführt werden.

> **Hinweis:** Wenn `fill()` ausgeführt wird, wird automatisch der Pfad beendet, sodass `closePath()` nicht mehr ausgeführt werden muss. Da ist **nicht** der Fall wenn `stroke()` ausgeführt wird.

### Ein Dreieck zeichnen

So sähe zum Beispiel der Code aus, um ein Dreieck zu zeichnen:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
      }
    }

Demo:

{{EmbedLiveSample("Ein_Dreieck_zeichnen", 160, 160)}}

### Stift bewegen

Eine sehr sinnvolle Methode ist `moveTo()`. Sie zeichnet zwar nichts, verändert allerdings die Position des Stiftes, sodass spätere Methoden nicht beim Punkt (0, 0) anfangen.

- `moveTo(x, y)`
  - : Bewegt den Stift zu der Koordinate (x , y).

Meist wird direkt nach dem Aufruf von `beginPath()` `moveTo()` ausgeführt. Außerdem kann man `moveTo()` für nichtverbundene Pfade benutzen. Beispiel (`moveTo()`-Aufrufe sind rote Linien):

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
         var ctx = canvas.getContext('2d');

         ctx.beginPath();
         ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
         ctx.moveTo(110, 75);
         ctx.arc(75, 75, 35, 0, Math.PI, false);    // Mund
         ctx.moveTo(65, 65);
         ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Linkes Auge
         ctx.moveTo(95, 65);
         ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Rechtes Auge
         ctx.stroke();
      }
    }

Demo:

{{EmbedLiveSample("Stift_bewegen", 160, 160, "https://mdn.mozillademos.org/files/252/Canvas_smiley.png")}}

> **Hinweis:** `arc()` zeichnet einen Kreisbogen. Mehr dazu: [Kreisbögen](#kreisbögen).

### Linien

Für Linien verwendet man die `lineTo()`-Methode:

- `lineTo(x, y)`
  - : Zeichnet eine Linie von der aktuellen Stiftposition zu dem Punkt (x, y).

Diese Methode erwartet wie `moveTo()` zwei Argumente: x und y, welche die Koordinate des Linienendes ist. Der Startpunkt wurde Mithilfe anderer Methoden schon festgelegt. Anschließend ist das Linienende der neue Startpunkt.

Beispiel mit zwei Dreiecken:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
      }
    }

Es beginnt mit der Ausführung von `beginPath()` um eine neue Form zu beginnen. Danach wird mit `moveTo()` der Startpunkt festgelegt. Danach werden die Linien gezeichnet.

{{EmbedLiveSample("Linien", 160, 160, "https://mdn.mozillademos.org/files/238/Canvas_lineTo.png")}}

### Kreisbögen

Um Kreise oder Kreisbögen zu zeichnen, benutzt man die `arc()`-Methode.

- `arc(x, y, radius, startWinkel, endWinkel, uhrzeigersinn)`
  - : Zeichnet einen Kreisbogen.

Diese Methode benötigt sechs Parameter: `x` und `y` sind die Koordinaten des Mittelpunktes des Kreisbogens. `radius` ist der Radius des Kreisbogens. `startWinkel` und `endWinkel` definieren die Punkte auf dem Kreis in rad. Der `uhrzeigersinn`-Parameter ist `true`, wenn der Kreisbogen gegen den Uhrzeigersinn und `false` wenn er im Uhrzeigersinn gezeichnet werden soll.

> **Hinweis:** Die Winkelzahlen werden in rad angegeben, nicht in deg. Die Umrechnungsformel lautet: `rad = (Math.PI / 180) * deg`.

Dieses Beispiel zeigt Kreisbügen mit den unterschiedlichsten Parametern:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="200"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            var x = 25 + j * 50; // x coordinate
            var y = 25 + i * 50; // y coordinate
            var radius = 20; // Arc radius
            var startAngle = 0; // Starting point on circle
            var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
            var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if (i > 1) {
              ctx.fill();
            } else {
              ctx.stroke();
            }
          }
        }
      }
    }

{{EmbedLiveSample("Kreisbögen", 160, 210, "https://mdn.mozillademos.org/files/204/Canvas_arc.png")}}

### Bezier und quadratische Kurven

[Bézierkurven](http://de.wikipedia.org/wiki/B%C3%A9zierkurve) sind in kubischer und quadratischer Form enthalten. Damit kann man ziemlich komplexe Strukturen zeichnen.

- `quadraticCurveTo(cp1x, cp1y, x, y)`
  - : Zeichnet eine quadratische Bézierkurve von der aktuellen Stiftposition zu `x` und `y`, mithilfe des Kontrollpunktes mit den Koordinaten (`cp1x`, `cp1y`).
- `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
  - : Zeichnet eine quadratische Bézierkurve von der aktuellen Stiftposition zu `x` und `y`, mithilfe der Kontrollpunkte mit den Koordinaten (`cp1x`, `cp1y`) und (`cp2x`, `cp2y`).

![](https://mdn.mozillademos.org/files/223/Canvas_curves.png)Den Unterschied zwischen den beiden Funktionen lässt sich am Besten durch die beiden Bilder rechts erklären: Oben die quadratische und unten die kubische.

Die Kontrollpunkte sind hier rot, die Start- und Endpunkte blau gekennzeichnet.

#### Quadratische Bézierkurven

Dieses Beispiel zeichnet Mithilfe von Bézierkurven eine Sprechblase:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
      }
    }

{{EmbedLiveSample("Quadratische_Bézierkurven", 160, 160, "https://mdn.mozillademos.org/files/243/Canvas_quadratic.png")}}

#### Kubische Bézierkurven

Dieses Beispiel zeichnet ein Herz Mithilfe von kubischen Bézierkurven.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Cubic curves example
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
      }
    }

{{EmbedLiveSample("Kubische_Bézierkurven", 160, 160, "https://mdn.mozillademos.org/files/207/Canvas_bezier.png")}}

### Rechtecke

Es gibt auch eine Rechtecksmethode für Pfade:

- `rect(x, y, width, height)`
  - : Zeichnet ein Rechteck.

Nachdem diese Methode ausgeführt wurde, wird automatisch `moveTo(0, 0)` ausgeführt.

### Kombinationen

Mit Kombinationen all dieser Pfadmethoden können die komplexesten Formen gezeichnet werden. In diesem letzten Beispiel wird ein Spielcharakter gezeichnet:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

        for (var i = 0; i < 8; i++) {
          ctx.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (i = 0; i < 6; i++) {
          ctx.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (i = 0; i < 8; i++) {
          ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
      }
    }

    // A utility function to draw a rectangle with rounded corners.

    function roundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.stroke();
    }

Demo:

{{EmbedLiveSample("Kombinationen", 160, 160)}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Basic_usage", "Web/Guide/HTML/Canvas_tutorial/Using_images")}}
