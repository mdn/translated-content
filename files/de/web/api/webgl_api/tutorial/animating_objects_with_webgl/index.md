---
title: Objekte mit WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Objekte_mit_WebGL_animieren
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen", "Web/API/WebGL_API/Tutorial/3D-Objekte_mit_WebGL_erstellen") }}

Unser Code vom vorherigen Beispiel ist bereits so konfiguriert, dass die WebGL-Szene alle 15 Millisekunden neu gezeichnet wird. Bis jetzt wird zu jeder Zeit das gleiche Bild immer neu gezeichnet. Das wollen wir nun ändern, sodass sich unser Quadrat auf der Bildfläche bewegt.

In diesem Beispiel rotieren und verschieben wir unser Quadrat in alle drei Dimensionen, sodass es schon in einem 3D Raum existieren kann (obwohl wir bisher nur ein 2D-Objekt erstellt haben).

## Das Quadrat rotieren lassen

Fangen wir damit an, das Quadrat im Raum zu rotieren. Als erstes brauchen wir dazu eine Variable in welche wir die Rotation des Quadrats verfolgen können:

```js
var squareRotation = 0.0;
```

Jetzt müssen wir die `drawScene()` Funktion ändern, um die aktuelle Rotation auf das Quadrat anzuwenden, wenn dies gezeichnet werden soll. Nach der Umrechnung der Startposition für das Quadrat, wenden wir eine Rotation wie diese an:

```js
mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
```

Das speichert die aktuelle Model-View Matrix und rotiert die Matrix mit dem aktuellen Wert von `squareRotation` um die X und Z Achsen.

Nach dem Zeichen müssen wir die Originalmatrix wiederherstellen:

```js
mvPopMatrix();
```

Wir speichern und stellen die Originalmatrix dann wieder her, um zu verhindern, dass die Rotation auf andere Objekte angewendet wird, die wir vielleicht später noch zeichnen wollen.

Um letztendlich etwas zu animieren, brauchen wir noch ein paar Zeilen Code, welcher den Wert von `squareRotation` über die Zeit verändert. Dafür erstellen wir eine neue Variable, die die Zeit aufzeichnet, welche wir zuletzt animiert haben (wir nennen diese `lastSquareUpdateTime`), dann fügen wir den folgenden Code an das Ende der `drawScene()` Funktion:

```js
var currentTime = (new Date).getTime();
if (lastSquareUpdateTime) {
  var delta = currentTime - lastSquareUpdateTime;
  squareRotation += (30 * delta) / 1000.0;
}
lastSquareUpdateTime = currentTime;
```

Dieser Code benutzt den Betrag der Zeit, die vergangen ist, seitdem wir zum letzten Mal den Wert von `squareRotation` geändert haben, um festzustellen wie weit das Quadrat rotiert werden soll.

## Das Quadrat bewegen

Wir können das Quadrat auch verschieben indem wir eine unterschiedliche Position berechnen lassen, bevor wir es zeichnen. Dieses Beispiel zeigt wie eine grundlegende Animation gemacht werden kann. Allerdings möchten Sie in einer echten Anwendung wohl eher etwas weniger Irrsinniges machen.

Verfolgen wir die Abstände zu jeder Achse für unsere Verschiebung in drei neuen Variablen:

```js
var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
```

Und den Betrag, welcher unsere Postion auf jeder Achse verändern soll, in diesen Variablen:

```js
var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
```

Nun können wir einfach diesen Code zum vorherigen Code, der die Rotation aktualisiert, hinzufügen:

```js
squareXOffset += xIncValue * ((30 * delta) / 1000.0);
squareYOffset += yIncValue * ((30 * delta) / 1000.0);
squareZOffset += zIncValue * ((30 * delta) / 1000.0);

if (Math.abs(squareYOffset) > 2.5) {
  xIncValue = -xIncValue;
  yIncValue = -yIncValue;
  zIncValue = -zIncValue;
}
```

Das bringt unser Quadrat dazu seine Größe zu verändern, sich willkürlich auf der Fläche zu verschieben, sich vom Betrachter weg und zum Betrachter hin zu bewegen und das alles während das Quadrat auch noch rotiert. Das sieht dann schon eher wie ein Bildschirmschoner aus.

Wenn Ihr Browser WebGL unterstützt, [ist hier das Beispiel in Aktion](/samples/webgl/sample4/index.html "https://developer.mozilla.org/samples/webgl/sample4/index.html").

## Weitere Matrixoperationen

Dieses Beispiel verwendet einige zusätzliche Matrixoperationen, darunter zwei Routinen, die die Matrizen verschieben, wiederherstellen und in einem Stack aufbewahren und eine Routine, die die Matrix um eine gewissen Anzahl von Grad rotiert:

```js
var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw("Can't pop from an empty matrix stack.");
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = angle * Math.PI / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
```

Diese Routinen wurden von einem Beispiel ausgeliehen, welches von Vlad Vukićević geschrieben wurde.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen", "Web/API/WebGL_API/Tutorial/3D-Objekte_mit_WebGL_erstellen") }}
