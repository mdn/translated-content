---
title: WebGLProgram
slug: Web/API/WebGLProgram
tags:
  - WebGL
  - WebGLProgram
translation_of: Web/API/WebGLProgram
---
{{APIRef("WebGL")}}

Das **WebGLProgram** ist ein Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ist eine Kombination aus zwei kompilierten {{domxref("WebGLShader")}}n, bestehend aus einem Vertex-Shader und einem Fragment-Shader (beide in GLSL geschrieben). Diese werden dann zu einem benutzbaren Programm zusammen gelinkt.

```js
var program = gl.createProgram();

// Bereits existierende Shader hinzufügen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
  var info = gl.getProgramInfoLog(program);
  throw "WebGL-Programm konnte nicht kompiliert werden. \n\n" + info;
}
```

Für weitere Informationen über das Erstellen von `vertexShader` und `fragmentShader, lese dir`{{domxref("WebGLShader")}} durch.

## Beispiele

### Das Program benutzen

Hier wird zu erst der GPU mit geteilt, dass sie das Programm benutzen soll. Danach werden die benötigten Daten und Konfigurationen vorgenommen und zuletzt wird etwas auf den Bildschirm gezeichnet.

```js
// Das Programm benutzen
gl.useProgram(program);

// Bereits existierende Attribute binden
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Ein einzelnes Dreieck zeichnen
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Das Programm löschen

Falls es bei dem Linken des Programms zu fehlern kommt oder falls du ein bereits erstelltes Programm einfach nur löschen möchtest, dann kannst du einfach {{domxref("WebGLRenderingContext.deleteProgram()")}} ausführen. Dies löscht den Speicher des gelinkten Programms.

```js
gl.deleteProgram(program);
```

## Spezifikationen

| Spezifikation                                                | Status                   | Kommentar             |
| ------------------------------------------------------------ | ------------------------ | --------------------- |
| {{SpecName('WebGL', "#5.6", "WebGLProgram")}} | {{Spec2('WebGL')}} | Erstmalige Definition |

## Browser-Kompatibilität

{{Compat}}

\[1] This feature is behind a feature preference setting. In about:config, set `gfx.offscreencanvas.enabled` to `true`.

## Weiterführendes

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
