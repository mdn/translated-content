---
title: Einführung in WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Einführung_in_WebGL
---
{{WebGLSidebar("Tutorial")}} {{Next("Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext")}}

Mit [WebGL](http://www.khronos.org/webgl/) steht eine API zur Verfügung, die auf [OpenGL ES 2.0](http://www.khronos.org/opengles/) basiert, um 3D Rendering im HTML [`canvas`](/de/HTML/Element/canvas "de/HTML/canvas") Element zu ermöglichen. WebGL Programme bestehen aus Steuercode in JavaScript und Shadercode (GLSL), der auf dem Grafikprozessor (GPU) des Computers ausgeführt wird. WebGL Elemente können mit anderen HTML Elementen kombiniert werden.

Dieser Artikel ist eine Einführung in die Grundlagen von WebGL. Es wird vorausgesetzt, dass einige mathematischen Kenntnisse im 3D-Bereich (Matrizen) vorhanden sind. Dieser Artikel wird daher keine 3D-Grafik-Konzepte vermitteln. Es gibt einen anfängergeeigneten Leitfaden mit Programmieraufgaben in unserem Lernbereich: [Learn WebGL for 2D and 3D graphics](/de/docs/Learn/WebGL).

DIe hier verwendeten Codebeispiele finden sich auch im [webgl-examples GitHub repository](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial).

## 3D Rendering vorbereiten

Um WebGL benutzen zu können, wird als erstes ein `canvas` Element benötigt. Der folgende HTML-Code definiert eine `canvas` Zeichenfläche.

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### Vorbereitung des WebGL-Kontexts

Die `main()` Funktion im JavaScript Code wird aufgerufen, nachdem das Dokument geladen wurde. Die Aufgabe der Funktion ist, den WebGL-Kontext festzulegen und mit dem Rendering zu beginnen.

```js
main();

function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialisierung des GL Kontexts
  const gl = canvas.getContext("webgl");

  // Nur fortfahren, wenn WebGL verfügbar ist und funktioniert
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Setze clear color auf schwarz, vollständig sichtbar
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Lösche den color buffer mit definierter clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

Als erstes verschaffen wir uns eine Referenz zum `canvas` Element und speichern sie in der `canvas` Variable.

Sobald wir den Bezug zum canvas haben, versuchen wir einen zugehörigen [WebGLRenderingContext](/de/docs/Web/API/WebGLRenderingContext) zu erhalten, indem wir [getContext](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen und dabei den String `"webgl"` mitgeben. Falls der Browser WebGL nicht unterstützt, wird `getContext null` zurückgeben, woraufhin wir den Nutzer benachrichtigen und das Script verlassen.

Wenn der Kontext erfolgreich initialisiert wurde, ist `gl` eine Variable für den Kontext. In diesem Fall setzen wir die clear color auf schwarz, und löschen den zugehörigen Kontext (der canvas wird mit der Hintergrundfarbe neu gezeichnet)

An dieser Stelle ist genug Code vorhanden, um den WebGL-Kontext erfolgreich zu initialisieren. Ein großer, leerer, schwarzer Kasten sollte zu sehen sein, der darauf wartet mit weiteren Inhalten gefüttert zu werden.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample1) | [Demo in neuer Seite öffnen](http://mdn.github.io/webgl-examples/tutorial/sample1/)

## Siehe auch

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/): Verfasst von Luz Caballero, veröffentlicht auf dev.opera.com. Der Artikel behandelt, was WebGL ist, erklärt wie es funktioniert (einschließlich Render Warteschlange) und stellt einige WebGL Bibliotheken vor.
- [WebGL Fundamentals](http://webglfundamentals.org/): WebGL Grundlagen
- [An intro to modern OpenGL:](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) Eine Reihe netter Artikel über OpenGL, verfasst von Joe Groff, die eine verständliche Einführung in OpenGL bieten, von der Geschichte bis zum wichtigen Aspekt der Grafik Pipeline. Außerdem enthält es Beispiele, die demonstrieren, wie OpenGL funktioniert. Wer lernen will, was OpenGL eigentlich ist, findet hier einen guten Ausgangspunkt.

{{Next("Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext")}}
