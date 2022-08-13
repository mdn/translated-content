---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
translation_of: Web/API/WebGLActiveInfo
---
{{APIRef("WebGL")}}

Das **WebGLActiveInfo**-Interface ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Informationen der Rückgabewerte von den {{domxref("WebGLRenderingContext.getActiveAttrib()")}} und {{domxref("WebGLRenderingContext.getActiveUniform()")}} Methoden.

## Eigenschaften

- {{domxref("WebGLActiveInfo.name")}}
  - : Der schreibgeschützte Name von der abgefragten Variable
- {{domxref("WebGLActiveInfo.size")}}
  - : Die schreibgeschützte Größe der abgefragten Variable
- {{domxref("WebGLActiveInfo.type")}}
  - : Der schreibgeschützte Typ der abgefragten Variable

## Beispiele

Ein `WebGLActiveInfo`-Objekt wird von den folgenden Funktionen zurück gegeben:

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}

```js
WebGLActiveInfo? getActiveAttrib(WebGLProgram? program, GLuint index);
WebGLActiveInfo? getActiveUniform(WebGLProgram? program, GLuint index);
WebGLActiveInfo? getTransformFeedbackVarying(WebGLProgram? program, GLuint index)
```

## Spezifikationen

| Specification                                                    | Status                   | Comment               |
| ---------------------------------------------------------------- | ------------------------ | --------------------- |
| {{SpecName('WebGL', "#5.11", "WebGLActiveInfo")}} | {{Spec2('WebGL')}} | Erstmalige Definition |

## Browser compatibility

{{Compat}}

\[1] Dieses Feature ist durch eine Voreinstellung deaktiviert. Zur Aktivierung setzt man in about:config den Wert gfx.offscreencanvas.enabled auf true.

## See also

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
