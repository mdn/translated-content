---
title: "GPU: Método getPreferredCanvasFormat()"
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

El método **`getPreferredCanvasFormat()`** de la interfaz {{domxref("GPU")}} devuelve el formato óptimo de textura para el canvas para renderizar contenido de 8 bits y rango dinámico estándar en el sistema actual.

Esto es comúnmente usado para proporcionar una llamada a {{domxref("GPUCanvasContext.configure()")}} con el valor de `format` óptimo para el sistema actual. Esto es recomendable, si no usas el formato preferido al configurar el contexto del canvas, es posible que incurras en gastos innecesarios, como copias de texturas adicionales, dependiendo de la plataforma.

## Sintaxis

```js-nolint
getPreferredCanvasFormat()
```

### Parámetros

Ninguno.

### Valor devuelto

Una cadena de texto indicando un formato de textura del canvas. El valor puede ser `rgba8unorm` o `bgra8unorm`.

### Excepciones

Ninguna.

## Ejemplos

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
