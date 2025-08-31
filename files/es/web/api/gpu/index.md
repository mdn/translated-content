---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La interfaz **`GPU`** de la {{domxref("WebGPU API", "API de WebGPU", "", "nocode")}} es el punto de entrada para usar WebGPU. Se puede usar para devolver un {{domxref("GPUAdapter")}} desde el cual puedes solicitar dispositivos, configurar características, límites y más.

El objeto `GPU` para el contexto actual se accede mediante las propiedades {{domxref("Navigator.gpu")}} o {{domxref("WorkerNavigator.gpu")}}.

{{InheritanceDiagram}}

## Propiedades de la instancia

- {{domxref("GPU.wgslLanguageFeatures", "wgslLanguageFeatures")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("WGSLLanguageFeatures")}} que reporta las [extensiones del lenguaje WGSL](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) soportadas por la implementación de WebGPU.

## Métodos de la instancia

- {{domxref("GPU.requestAdapter", "requestAdapter()")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve con una instancia del objeto {{domxref("GPUAdapter")}}. Desde aquí puedes solicitar un {{domxref("GPUDevice")}}, que es la interfaz principal para usar la funcionalidad de WebGPU.
- {{domxref("GPU.getPreferredCanvasFormat", "getPreferredCanvasFormat()")}}
  - : Devuelve el formato óptimo de textura para el canvas para renderizar contenido de 8 bits y rango dinámico estándar en el sistema actual.

## Ejemplos

### Solicitar un adaptador y un dispositivo

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU no está soportado.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("No se pudo solicitar un adaptador de WebGPU.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

### Configurar un GPUCanvasContext con el formato de textura óptimo

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
