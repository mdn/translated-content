---
title: WebGLRenderingContext.getActiveAttrib()
slug: Web/API/WebGLRenderingContext/getActiveAttrib
translation_of: Web/API/WebGLRenderingContext/getActiveAttrib
---
{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getActiveAttrib() `**Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein {{domxref("WebGLActiveInfo")}} Objekt zurück, welches die Größe, den Typ und den Namen eines Vertex-Attributes an der gegebenen Position in einem {{domxref("WebGLProgram")}} enthält.

## Syntax

    WebGLActiveInfo gl.getActiveAttrib(program,index);

### Parameter

- program
  - : Ein {{domxref("WebGLProgram")}}, welches das Vertex-Attribut enthält
- index
  - : Ein {{domxref("GLuint")}}, welcher den Index des Vertex-Attributes angibt

### Rückgabewert

Ein {{domxref("WebGLActiveInfo")}} Objekt.

## Beispiele

```js
gl.getActiveAttrib(program, i);
```

## Spezifikationen

| Spezifikation                                                                                        | Status                               | Kommentar               |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------- |
| {{SpecName('WebGL', "#5.14.10", "getActiveAttrib")}}                                 | {{Spec2('WebGL')}}             | Erstmalige Definition   |
| {{SpecName('OpenGL ES 2.0', "glGetActiveAttrib.xml", "glGetActiveAttrib")}} | {{Spec2('OpenGL ES 2.0')}} | Man page der OpenGL API |

## Browser-Kompatibilität

{{Compat}}

## Weiterführendes

- {{domxref("WebGLActiveInfo")}}
