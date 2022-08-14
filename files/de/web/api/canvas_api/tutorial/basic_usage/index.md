---
title: Grundlagen Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
tags:
  - Canvas
  - Graphics
  - HTML
  - Intermediate
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Basic_usage
original_slug: Web/Guide/HTML/Canvas_Tutorial/Grundlagen
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir diese Einführung mit einem Blick auf das {{Glossary("HTML")}}-Element {{HTMLElement("canvas")}} an sich. Am Ende wirst du in einem Canvas einen 2D-Context anlegen können und ein erstes Beispiel im Browser gezeichnet haben.

## Das `<canvas>`-Element

Beginnen wir mit dem {{HTMLElement("canvas")}}-Element:

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}} wie ein {{HTMLElement("img")}}-Element aus, mit dem Unterschied, dass es die Attribute `src` und `alt` nicht besitzt. Das `<canvas>`-Element hat nur zwei Attribute - {{htmlattrxref("width", "canvas")}} und {{htmlattrxref("height", "canvas")}}. Diese sind optional und können auch über {{Glossary("DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn die Attribute nicht gesetzt sind, bekommt das Element eine Breite von **300px** und eine Höhe von **150px**. Die Maße des canvas können auch über {{Glossary("CSS")}} gesetzt werden, allerdings wird das Bild dann auf die gesetzte Größe skaliert. Wenn das Verhältnis der CSS-Maße nicht zur ursprünglichen Größe passt, wird das Bild verzerrt.

> **Note:** **Hinweis:** Wenn das Ergebnis des Renderings verzerrt wirkt, dann setze bitte die Attribute `width` und `height` explizit im `<canvas>` und nicht über CSS.

Das [id](/de/docs/Web/HTML/Globale_Attribute#id)-Attribut ist eines der [globalen Attribute](/de/docs/Web/HTML/Globale_Attribute) in HTML, welche auf alle HTML-Elemente anwendbar sind (sein sollen). Es empfiehlt sich eine `id` zu vergeben, dadurch wird der Zugriff mit JavaScript/CSS vereinfacht.

Auch wenn man nicht mit CSS die Maße des canvas festlegen sollte, kann man jegliche andere CSS-Eigenschaften auf das {{HTMLElement("canvas")}}-Element anwenden (margin, border, background etc). Diese CSS-Regeln haben keinen Effekt auf das eigentliche Zeichnen (anders bei [SVG](/de/docs/SVG))

### Fallback

Einige ältere Browser unterstützen das {{HTMLElement("canvas")}}-Element nicht, deshalb sollte man einen sogenannten Fallback schreiben, welcher nur den Browsern angezeigt wird, welche das {{HTMLElement("canvas")}}-Element nicht unterstützen. Browser, die das {{HTMLElement("canvas")}}-Element unterstützen zeigen diesen Fallback nicht.

Beispiele:

```html
<canvas id="stockGraph" width="150" height="150">
  aktueller Wechselkurs: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

### Benötigter `</canvas>`-Tag

Im Unterschied zu dem {{HTMLElement("img")}}-Element, **benötigt** das {{HTMLElement("canvas")}}-Element den Endtag (`</canvas>`).

Wenn kein Fallback definiert wird, reicht ein `<canvas id="foo" ...></canvas>` völlig aus.

## Der Kontext

{{HTMLElement("canvas")}} stellt mehrere Kontexte zum Zeichnen auf dem canvas zur Verfügung. Der Standardkontext ist der 2D-Kontext. Es gibt noch [WebGL](/de/docs/Web/WebGL) (3D context) basierend auf [OpenGL ES](http://www.khronos.org/opengles/).

Zuerst ist das canvas leer. Mithilfe von JavaScript definiert man den Kontext und zeichnet mit diesem. Das {{HTMLElement("canvas")}}-Element hat eine [Methode](/de/docs/Web/API/HTMLCanvasElement#Methods) `getContext()`, mit der der Kontext definiert wird. `getContext()` benötigt nur einen String als Argument, den Typ des Kontextes. Für 2D-Grafiken ist dieser String "2d".

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

Die erste Zeile speichert in der Variablen `canvas` den DOM-Knoten unseres canvas mithilfe der {{domxref("document.getElementById()")}}-Methode. Danach wird die `getContext()`-Methode aufgerufen, um den Kontext in der Variablen `ctx` zu speichern.

## Browserkompatibilität prüfen

Nicht nur der Fallback kann die Browserkompatibilität prüfen. Auch mit JavaScript ist dies möglich, in dem die Existenz der `getContext()`-Methode überprüft wird. Beispiel:

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // weiterer Code
} else {
  alert("Dein Browser unterstützt das <canvas> Element nicht")
}
```

## HTML-Struktur

Eine einfache HTML-Struktur reicht für unser Tutorial erst einmal völlig aus.

> **Note:** **Hinweis**: Es gilt als schlechter Stil, Skripte direkt in HTML einzubetten. Wir tun das hier nur aus Gründen der Kompaktheit.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    <style type="text/css">
      canvas { border: 1px solid black; }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

Das Skript enthält eine Funktion `draw()`, die nach dem Laden der Seite ausgeführt wird; dies geschieht durch Hören auf das {{event("load")}}-Ereignis des Dokuments. Diese oder eine ähnliche Funktion könnte auch durch {{domxref("WindowTimers.setTimeout", "window.setTimeout()")}}, {{domxref("WindowTimers.setInterval", "window.setInterval()")}} oder jeden anderen Ereignisbehandler aufgerufen werden, solange die Seite vorher geladen wurde.

So sieht die Vorlage in Aktion aus. Wie man hier sehen kann, ist sie anfangs leer.

{{EmbedLiveSample("HTML-Struktur", 160, 160)}}

## Einfaches Beispiel

Im einfachen Beispiel werden zwei Rechtecke gezeichnet, eins mit Transparenz.

```html
<!DOCTYPE html>
<html>
 <head>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

Demo:

{{EmbedLiveSample("Einfaches_Beispiel", 160, 160, "https://mdn.mozillademos.org/files/228/canvas_ex1.png")}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial", "Web/Guide/HTML/Canvas_tutorial/Drawing_shapes")}}
