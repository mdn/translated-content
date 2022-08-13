---
title: WebGLRenderingContext.getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
translation_of: Web/API/WebGLRenderingContext/getAttribLocation
---
{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.getAttribLocation()`** aus der [WebGL API](/de/docs/Web/API/WebGL_API) gibt die Position einer At­tri­but Variable innerhalb eines gegebenen {{domxref("WebGLProgram")}} zurück.

## Syntax

    GLint gl.getAttribLocation(program, name);

### Parameter

- program
  - : Ein {{domxref("WebGLProgram")}} das die At­tri­but Variable enthält.
- name
  - : Ein {{domxref("DOMString")}} der den Namen des Attributes angibt, dessen Position gesucht wird.

### Rückgabewert

Wenn gefunden, wird die Position der Variable als {{domxref("GLint")}}, andernfalls -1 zurückgegeben.

## Beispiele

```js
gl.getAttribLocation(program, 'vColor');
```

## Spezifikationen

| Spezifikation                                                                                            | Status                               | Kommentar                  |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------- |
| {{SpecName('WebGL', "#5.14.10", "getAttribLocation")}}                                 | {{Spec2('WebGL')}}             | Ursprüngliche Definition.  |
| {{SpecName('OpenGL ES 2.0', "glGetAttribLocation.xml", "glGetAttribLocation")}} | {{Spec2('OpenGL ES 2.0')}} | Hauptseite der OpenGL API. |

## Browserkompatibilität

{{Compat("api.WebGLRenderingContext.getAttribLocation")}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
