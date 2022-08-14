---
title: Beleuchtung in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Beleuchtung_in_WebGL
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Texturen_in_WebGL_verwenden", "Web/API/WebGL_API/Tutorial/Animierte_Texturen_in_WebGL")}}

Als Erstes sollten wir verstehen, dass WebGL nicht wie OpenGL über eine eigene Unterstützung für die Beleuchtung verfügt. Das müssen wir selbst machen. Glücklicherweise ist es nicht sehr schwer und dieser Artikel versucht Ihnen die Grundlagen dazu näher zu bringen.

## Beleuchtung und Schattierung simulieren

Obwohl wir nicht weiter ins Detail über die Theorie hinter simulierter Beleuchtung in 3D Grafiken gehen wollen, was außerdem weit über diesen Artikel hinaus gehen würde, ist es gut zu wissen wie es ungefähr funktioniert. Anstatt hier nun in aller Tiefe zu diskutieren, sollten Sie einen Blick auf den [»Phong Shading« Artikel](http://de.wikipedia.org/wiki/Phong_Shading) auf Wikipedia werfen, welcher einen guten Überblick über das meist genutzte Beleuchtungsmodell liefert.

Es gibt drei grundlegende Typen zur Beleuchtung:

**Umgebungslicht** ist das Licht, das die Szene umgibt. Es weist in keine Richtung und bestrahlt jede Oberfläche in gleicher Weise, egal in welche Richtung es zeigt.

**Gerichtetes Licht** ist das Licht, das von einer festgelegten Richtung ausgestrahlt wird. Dieses Licht ist so weit weg, sodass sich jeder Photon parallel zu jedem anderen Photon bewegt. Sonnenlicht ist zum Beispiel gerichtetes (direktionales) Licht.

**Punktbeleuchtung** ist das Licht, das von einem Punkt ausgestrahlt wird und von dort radial in alle Richtungen verläuft. So funktionieren zum Beispiel die Glühbirnen im Alltag.

Für unsere Zwecke vereinfachen wir das Beleuchtungsmodell, indem wir nur gerichtetes Licht und Umgebungslicht betrachten. Wir haben hier keine Highlights, die wir mit Punktbeleuchtung oder Glanzlicht in dieser Szene hervorheben wollen. Stattdessen werden wir Umgebungslicht mit einem einzelnen, gerichteten Licht verwenden, welches auf den rotierenden Würfel aus der [vorherigen Demo](/de/WebGL/Texturen_in_WebGL_verwenden) zeigt.

Wenn Sie die Konzepte der Punktbeleuchtung und des Glanzlichtes hinter sich gelassen haben, gibt es dennoch zwei kleine Informationen, die Sie benötigen werden, wenn wir unser gerichtetes Licht implementieren:

1.  Wir müssen die **Oberflächennormale** mit jedem Vertex verbinden. Das ist ein Vektor, der senkrecht zur Oberfläche des Vertex ist.
2.  Wir müssen die Richtung in welche das Licht strahlt wissen. Diese wird durch den **Richtungsvektor** angegeben.

Dann aktualisieren wir den Vertex-Shader, um die Farbe jedes Vertices, unter Berücksichtigung des Umgebungslichts und dem Effekt des gerichteten Lichts (sowie dessen Winkel mit dem es auf die Oberfläche trifft), einzustellen. Wir werden sehen, wie genau wir das machen, wenn wir einen Blick auf den Code für den Shader werfen.

## Die Normalen für die Vertices erstellen

Als Erstes müssen wir einen Array für die Normalen für alle Vertices erstellen, die unseren Würfel umfassen. Da ein Würfel ein sehr einfaches Objekt ist, ist dies auch sehr einfach zu erstellen. Für komplexere Objekte wird das Berechnen der Normalen schon umfassender.

```js
  cubeVerticesNormalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

  var vertexNormals = [
    // vorne
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // hinten
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // oben
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // unten
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // rechts
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // links
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new WebGLFloatArray(vertexNormals), gl.STATIC_DRAW);
```

Das sollte Ihnen schon bekannt vorkommen: Wir erstellen einen neuen Buffer, verknüpfen den Array damit und senden dann unseren Vertex-Normalen-Array in den Buffer, indem wir `bufferData()` aufrufen.

Dann fügen wir Code zu `drawScene()` hinzu, um das Normalen-Array mit einem Shader-Attribut zu verknüpfen, sodass der Shader-Code darauf zugreifen kann:

```js
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
  gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
```

Schließlich müssen wir den Code aktualisieren, welcher die Einheitsmatrizen erstellt, um eine **Normalenmatrix** zu generieren und zum Shader auszuliefern. Diese wird verwendet, um die Normalen umzuwandeln, wenn die aktuelle Orientierung des Würfels in Beziehung zur Lichtquelle behandelt wird:

```js
  var normalMatrix = mvMatrix.inverse();
  normalMatrix = normalMatrix.transpose();
  var nUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");
  gl.uniformMatrix4fv(nUniform, false, new WebGLFloatArray(normalMatrix.flatten()));
```

## Die Shader aktualisieren

Jetzt sind alle Daten, die von den Shadern gebraucht werden, verfügbar. Wir müssen nun den Code in den Shadern selbst aktualisieren.

### Der Vertex-Shader

Zunächst aktualisieren wir den Vertex-Shader, sodass dieser einen Schattenwert für jeden Vertex auf Basis des Umgebungslichts sowie des direktionalen Lichts berechnet. Werfen wir einen Blick auf den Code:

```html
    <script id="shader-vs" type="x-shader/x-vertex">
      attribute vec3 aVertexNormal;
      attribute vec3 aVertexPosition;
      attribute vec2 aTextureCoord;

      uniform mat4 uNormalMatrix;
      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      varying vec2 vTextureCoord;
      varying vec3 vLighting;

      void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vTextureCoord = aTextureCoord;

        // Beleuchtungseffekt anwenden

        vec3 ambientLight = vec3(0.6, 0.6, 0.6);
        vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
        vec3 directionalVector = vec3(0.85, 0.8, 0.75);

        vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

        float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
        vLighting = ambientLight + (directionalLightColor * directional);
      }
    </script>
```

Sobald die Position des Vertex berechnet wurde und wir die Koordinaten des Texels (welcher passend zum Vertex ist) erhalten haben, können wir den Schatten für den Vertex berechnen.

Als Erstes wandeln wir die Normale auf Basis der aktuellen Position und Orientierung des Würfels um, indem wir die Normale des Vertexes mit der Normalenmatrix multiplizieren. Dann können wir den Betrag an direktionalem Licht, welcher auf den Vertex angewendet werden soll, berechnen, indem wir das Skalarprodukt der umgewandelten Normalen und des direktionalen Vektors (Richtung aus der das Licht kommt) bilden. Wenn dieser Wert kleiner als Null ist, setzen wir den Wert auf Null fest, da man nicht weniger als Null Licht haben kann.

Wenn der Betrag des direktionalen Lichts berechnet wurde, können wir den Beleuchtungswert generieren, indem wir das Umgebungslicht nehmen und das Produkt der Farbe des direktionalen Lichts und den Betrag an direktionalem Licht bereitstellen. Als Ergebnis haben wir nun einen RGB-Wert, welcher vom Fragment-Shader verwendet wird, um die Farbe jedes Pixels den wir rendern einzustellen.

### Der Fragment-Shader

Der Fragment-Shader muss nun aktualisiert werden, um den berechneten Beleuchtungswert vom Vertex-Shader zu berücksichtigen:

```js
    <script id="shader-fs" type="x-shader/x-fragment">
      varying vec2 vTextureCoord;
      varying vec3 vLighting;

      uniform sampler2D uSampler;

      void main(void) {
        vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

        gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
      }
    </script>
```

Hier erhalten wir nun die Farbe des Texels, genau so wie wir es im vorherigen Beispiel getan haben. Bevor wir die Farbe der Fragmente aber festlegen, multiplizieren wir die Texel-Farbe mit dem Beleuchtungswert, um die Texel-Farbe so einzustellen, dass diese den Effekt der Lichtquelle berücksichtigt.

Und das war's! Wenn Sie einen Browser verwenden, der WebGL unterstützt, können Sie [einen Blick auf die Live-Demo werfen](/samples/webgl/sample7/index.html "https://developer.mozilla.org/samples/webgl/sample7/index.html").

## Übungen für den Leser

Dies ist natürlich ein sehr einfaches Beispiel, welches eine Beleuchtung pro Vertex implementiert. Für fortgeschrittene Grafiken, möchten Sie sicher eine Beleuchtung pro Pixel implementieren, aber dies wird Sie in die Richtung leiten.

Sie können nun also versuchen mit der Richtung der Lichtquelle zu experimentieren, die Farbe der Leuchtquelle zu ändern und so weiter.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Texturen_in_WebGL_verwenden", "Web/API/WebGL_API/Tutorial/Animierte_Texturen_in_WebGL")}}
