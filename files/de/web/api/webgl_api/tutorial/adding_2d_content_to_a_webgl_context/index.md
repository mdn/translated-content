---
title: Hinzufügen von 2D Inhalten in einen WebGL-Kontext
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
tags:
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
original_slug: Web/API/WebGL_API/Tutorial/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Einführung_in_WebGL", "Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen")}}

Sobald der [WebGL-Kontext](/de/WebGL/Einführung_in_WebGL "de/WebGL/Einführung in WebGL") erfolgreich erstellt wurde, können wir anfangen darin zu rendern. Am einfachsten beginnen wir mit einem einfachen, zweidimensionalen, untextuierten Objekt. Fangen wir also damit an, ein Stück Code zu schreiben, um ein Quadrat zu zeichnen.

### Hinweis zur deutschen Übersetzung dieses Abschnitts

Die deutsche Übersetzung bezieht sich auf ältere Version des Beispielcodes als der englische Originaltext. Der im deutschen Text beschriebene Code hat einige Probleme:

- Er ist unvollständig (die makePerspective() Funktion fehlt).
- Er verwendet globale Variablen die in der einen Funktion gesetzt, in der anderen wieder gelesen werden. Dies gilt als schlechte Programmierpraxis.
- Die Shader werden aus dem HTML DOM geladen, anstatt als Strings in JavaScript erzeugt. Diese Design-Entscheidung wird nicht begründet.

Um das Beispiel selber nachzuprogrammieren ist es daher empfehlenswert, [auf die englische Version des Tutorials](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context) zu wechseln. Vielleicht haben Sie ja auch Lust, [diese Version ins Deutsche zu übersetzen](/de/docs/Web/API/WebGL_API/Tutorial/Hinzuf%C3%BCgen_von_2D_Inhalten_in_einen_WebGL-Kontext$edit)?

## Beleuchtung der Szene

Das Wichtigste, das wir verstehen müssen bevor wir anfangen können, ist, dass wir, uns bereits in einer dreidimensionalen Umgebung befinden, obwohl wir nur ein zweidimensionales Objekt in diesem Beispiel rendern wollen. Das heißt, wir müssen jetzt bereits Shader einsetzen, die unsere einfache Szene beleuchten und solche erstellen, die unser Objekt zeichnen. Diese Shader werden festlegen wie unser Quadrat später beleuchtet sein wird.

### Initialisierung der Shader

Shader sind durch die [OpenGL ES Shading Language (pdf)](http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf) spezifiziert. Damit es einfacher ist unsere Inhalte zu warten und zu aktualisieren, können wir unseren Code so schreiben, dass die Shader im HTML Dokument gefunden werden, anstatt alles mittels JavaScript zu bauen. Werfen wir einen Blick auf unsere `initShaders()` Routine, welche diese Aufgabe übernimmt:

```js
function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  // Erzeuge Shader

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // Wenn die das Aufrufen der Shader fehlschlägt,
  // gib eine Fehlermeldung aus:

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Initialisierung des Shaderprogramms nicht möglich.");
  }

  gl.useProgram(shaderProgram);

  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(vertexPositionAttribute);
}
```

Es werden zwei Shader in dieser Routine geladen; der Erste, der `fragmentShader`, wird vom [`script`](/de/HTML/Element/Script "de/HTML/Element/Script") Element mit der Id "shader-fs" geladen. Der Zweite, der `vertexShader`, wird vom [`script`](/de/HTML/Element/Script "de/HTML/Element/Script") Element mit der Id "shader-vs" geladen. Wir werden im nächsten Abschnitt noch näher auf die `getShader()` Funktion eingehen. Diese Routine holt sich dann die Shader aus dem DOM.

In diesem Teil erstellen wir noch das Shaderprogramm, in dem wir die Funktion `createProgram()` aufrufen, die beiden Shader anhängen und das Shaderprogramm verlinken. Danach wird der Zustand des `LINK_STATUS` Parameters überprüft, um sicher zu gehen, dass das Programm erfolgreich verlinkt wurde. Wenn das der Fall ist, aktivieren wir das neue Shaderprogramm.

### Shader aus dem DOM laden

Die `getShader()` Routine ruft ein Shaderprogramm mit dem festgelegtem Namen aus dem DOM auf, gibt das kompilierte Shaderprogramm zurück oder ist leer, wenn nichts geladen oder kompiliert worden konnte.

```js
function getShader(gl, id) {
  var shaderScript = document.getElementById(id);

  if (!shaderScript) {
    return null;
  }

  var theSource = "";
  var currentChild = shaderScript.firstChild;

  while(currentChild) {
    if (currentChild.nodeType == 3) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }
```

Wenn das Element mit der festgelegten Id gefunden wurde, wird der Text in die Variable `theSource` gespeichert.

```js
  var shader;

  if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;  // Unbekannter Shadertyp
  }
```

Jetzt wo der Code für die Shader gelesen wurde, können wir uns die MIME Typen der Shader angucken, um festzulegen, ob es ein Vertex-Shader (MIME Typ: "x-shader/x-vertex") oder ein Fragment-Shader (MIME Typ: "x-shader/x-fragment") ist. Danach werden dann die entsprechenden Shadertypen erstellt.

```js
  gl.shaderSource(shader, theSource);

  // Kompiliere das Shaderprogramm

  gl.compileShader(shader);

  // Überprüfe, ob die Kompilierung erfolgreich war

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert("Es ist ein Fehler beim Kompilieren der Shader aufgetaucht: " + gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}
```

Schließlich wird der Shader kompiliert. Falls ein Fehler während der Kompilierung auftritt, zeigen wir die Fehlermeldung an und geben null zurück. Andernfalls wird der kompilierte Shader zurückgegeben.

### Die Shader

Nun müssen wir die eigentlichen Shaderprogramme in unser HTML schreiben. Wie genau diese Shader arbeiten, übersteigt das Ziel dieses Tutorials, wir gehen daher nur auf das Wesentliche ein.

#### Fragment-Shader

Jeder Pixel in einem Vieleck wird **Fragment** in der GL-Fachsprache genannt. Die Aufgabe des Fragment-Shaders ist es, die Farbe für jeden Pixel bereitzustellen. In unserem Fall ordnen wir einfach jedem Pixel eine weiße Farbe zu.

`gl_FragColor` ist eine eingebaute GL Variable, die für die Farbe des Fragments verwendet wird.

```html
<script id="shader-fs" type="x-shader/x-fragment">

  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

#### Vertex-Shader

Der Vertex-Shader definiert die Position und Form von jedem Punkt.

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;


  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  }
</script>
```

## Das Objekt erstellen

Bevor wir unser Quadrat rendern können, müssen wir einen Puffer erstellen, der unsere Punkte enthält. Das werden wir mittels einer Funktion machen, die wir `initBuffers()` nennen. Wenn wir zu mehr fortgeschrittenen WebGL-Konzepten kommen, wird diese Routine vergrößert, um mehr - und komplexere - 3D-Objekte zu erstellen.

```js
var horizAspect = 480.0/640.0;

function initBuffers() {
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  var vertices = [
    1.0,  1.0,  0.0,
    -1.0, 1.0,  0.0,
    1.0,  -1.0, 0.0,
    -1.0, -1.0, 0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}
```

Diese Routine ist, durch die einfache Art der Szene in diesem Beispiel, sehr einfach gehalten. Es geht los mit dem Aufruf der `createBuffer()` Methode, die einen Puffer erstellt in dem wir die Punkte speichern können. Der Puffer wird, durch Aufrufen der `bindBuffer()` Methode, mit dem Kontext verbunden.

Wenn das erledigt ist, erstellen wir einen JavaScript Array, der die Koordinaten für jeden Punkt des Quadrats enthält. Dieser wird dann in einen WebGL FloatArray umgewandelt und durch die `bufferData()` Methode werden die Punkte für das Objekt festgelegt.

## Die Szene zeichnen

Jetzt sind die Shader aufgebaut und das Objekt ist erstellt. Wir können die Szene rendern lassen. Da wir in dieser Szene nichts animieren, ist unsere `drawScene()` Funktion sehr einfach. Es werden einige nützliche Routinen verwendet, die wir uns kurz anschauen.

```js
function drawScene() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0);

  loadIdentity();
  mvTranslate([-0.0, 0.0, -6.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

Als Erstes wird der Kontext auf unsere Hintergrundfarbe gesetzt und die Kameraperspektive festgelegt. Wir definieren ein Blickfeld von 45°, mit einem Höhen-/Breitenverhältnis von 640 zu 480 (die Größe unseres Canvas). Außerdem legen wir fest, dass wir nur Objekte zwischen 0.1 und 100 Einheiten gerendert haben wollen.

Dann wird die Position des Quadrats, über das Laden der ursprünglichen Position und der Verschiebung um 6 Einheiten von der Kamera weg, ermittelt. Danach, verbinden wir den Puffer des Quadrats mit dem Kontext, konfigurieren es, und zeichnen das Objekt, in dem wir die `drawArrays()` Methode aufrufen.

Das Ergebnis [kann hier ausprobiert werden](/samples/webgl/sample2/index.html "https://developer.mozilla.org/samples/webgl/sample2/index.html"), wenn Sie einen Browser verwenden, der WebGL unterstützt.

## Matrix Operationen

Matrix Operationen sind schon kompliziert genug. Keiner möchte wirklich den ganzen Code selbst schreiben, der benötigt wird um die Berechnungen selber durchzuführen. Glücklicherweise gibt es [Sylvester](http://sylvester.jcoglan.com/), eine sehr handliche Bibliothek, die bestens mit Vektor und Matrix Operationen in JavaScript umgehen kann.

Die `glUtils.js` Datei, die in dieser Demo benutzt wird, wird bei einer ganzen Reihe von WebGL-Demos, die Web zu finden sind, verwendet. Keiner scheint sich völlig sicher zu sein, woher diese Bibliothek ursprünglich herkommt, aber es vereinfacht den Gebrauch von Sylvester noch weiter, in dem Methoden hinzugefügt werden, die auch spezielle Matrizentypen ermöglichen und HTML ausgegeben werden kann, um die Matrizen anzeigen zu lassen.

Zusätzlich, definiert diese Demo ein paar hilfreiche Routinen, um an diese Bibliothek für spezielle Aufgaben anzukoppeln. Was genau gemacht wird, ist kein Teil dieses Artikels, aber es gibt einige gute Referenzen zu Matrizen, die online verfügbar sind. Siehe unter [Siehe auch](/de/WebGL/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext#Siehe_auch "de/WebGL/Hinzufügen_von_2D_Inhalten_in_einen_WebGL-Kontext#Siehe_auch"), um ein paar aufzulisten.

```js
function loadIdentity() {
  mvMatrix = Matrix.I(4);
}

function multMatrix(m) {
  mvMatrix = mvMatrix.x(m);
}

function mvTranslate(v) {
  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
}
```

## Siehe auch

- [Matrizen](http://mathworld.wolfram.com/Matrix.html) auf Wolfram MathWorld (Englisch).
- [Matrix](http://de.wikipedia.org/wiki/Matrix_%28Mathematik%29) auf Wikipedia.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Einführung_in_WebGL", "Web/API/WebGL_API/Tutorial/Farben_mittels_Shader_in_einen_WebGL-Kontext_hinzufügen")}}
