---
title: Farben mittels Shader in einen WebGL-Kontext hinzufügen
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
original_slug: >-
  Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext", "Web/API/WebGL_API/Tutorial/Objekte_mit_WebGL_animieren")}}

Wir haben ein simples Quadrat [im vorherigen Teil](/de/WebGL/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext "de/WebGL/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext") erstellt, im nächsten Schritt wollen wir ein bisschen Farbe ins Spiel bringen. Dafür sind Änderungen an den Shadern erforderlich.

## Farben zu den Eckpunkten hinzufügen

In der Computergrafik werden Objekte mit einer Reihe von Punkten erstellt. Jeder Punkt hat eine Position und eine Farbe. Standardmäßig werden alle anderen Pixelfarben (und alle weiteren Attribute, darunter die Position) über eine lineare Interpolation berechnet, die automatisch glatte Verläufe erstellt. Vorher hat unser Vertex-Shader keine festgelegten Farben auf die Punkte (Vertices) angewendet und der Fragment-Shader legte die feste Farbe weiß für jeden Pixel fest, sodass das gesamte Quadrat komplett weiß gezeichnet wurde.

Nun wollen wir in jeder Ecke des Quadrats einen Verlauf in einer unterschiedlichen Farbe rendern: rot, blau, grün und weiß. Als erstes sollten wir daher diese Farben in den vier Eckpunkten einrichten. Um das zu machen, müssen wir zunächst einen Array der Vertex-Farben erstellen und diesen dann in einen WebGL Buffer speichern. Das erreichen wir durch die folgenden Zeilen in unserer `initBuffers()` Funktion:

```js
var colors = [
  1.0,  1.0,  1.0,  1.0,    // weiß
  1.0,  0.0,  0.0,  1.0,    // rot
  0.0,  1.0,  0.0,  1.0,    // grün
  0.0,  0.0,  1.0,  1.0     // blau
];

squareVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
```

Dieser Code definiert zuerst einen JavaScript Array, welcher die vier Farb-Vektoren mit jeweils vier Werten für die jeweilige Farbe enthält. Dann wird ein neuer WebGL Buffer angewiesen diese Farben zu speichern und der Array wird in WebGL Floats konvertiert und im Buffer gespeichert.

Um die Farben schließlich zu verwenden, muss der der Vertex-Shader aktualisiert werden, um die entsprechende Farbe vom Farb-Buffer zu erhalten:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying vec4 vColor;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
</script>
```

Der wichtigste Unterschied ist hier, dass wir für jeden Punkt (Vertex) die Farbe entsprechend des Farb-Arrays setzen.

## Die Fragmente mit Farben versehen

Als Erinnerung, so sah unser Fragment-Shader vorher aus:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

Um nun die interpolierte Farbe für jeden Pixel aufzugreifen, müssen wir dies einfach so ändern, dass wir den Wert der `vColor` Variable erhalten:

    <script id="shader-fs" type="x-shader/x-fragment">
      varying vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    </script>

Das ist eine sehr einfache Änderung. Anstatt des festen Wertes vorher, erhält jedes Fragment jetzt einfach die interpolierte Farbe, basierend auf der Position relativ zu den Kontenpunkten (Vertices).

## Mit den Farben zeichnen

Als nächstes ist es nötig, Code zur `initShaders()` Routine hinzuzufügen, um das Farbattribut für das Shader-Programm zu initialisieren:

```js
  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
```

Dann wird `drawScene()` abgeändert, um schließlich die Farben zu verwenden, wenn das Quadrat gezeichnet wird:

```js
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
```

Jetzt sollten Sie [das Beispiel in einem WebGL kompatiblen Browser](/samples/webgl/sample3/index.html "https://developer.mozilla.org/samples/webgl/sample3/index.html") sehen und Ihre Ausgabe sollte so wie im Bild unten gezeichnet werden (das Quadrat ist innerhalb eines schwarzen Felds zu sehen):

![screenshot.png](/@api/deki/files/4081/=screenshot.png)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext", "Web/API/WebGL_API/Tutorial/Objekte_mit_WebGL_animieren")}}
