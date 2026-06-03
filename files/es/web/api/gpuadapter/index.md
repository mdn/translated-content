---
title: GPUAdapter
slug: Web/API/GPUAdapter
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La interfaz **`GPUAdapter`** de la {{domxref("WebGPU API", "API de WebGPU", "", "nocode")}} representa un adaptador de GPU. Desde aquí puedes solicitar un {{domxref("GPUDevice")}}, información del adaptador, características y límites.

Un objeto `GPUAdapter` se solicita usando el método {{domxref("GPU.requestAdapter()")}}.

{{InheritanceDiagram}}

## Propiedades de la instancia

- {{domxref("GPUAdapter.features", "features")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("GPUSupportedFeatures")}} que describe las funcionalidades adicionales soportadas por el adaptador.
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Un valor booleano. Devuelve `true` si el adaptador es un [adaptador de respaldo](/es/docs/Web/API/GPU/requestAdapter#fallback_adapters), y `false` si no lo es.
- {{domxref("GPUAdapter.info", "info")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("GPUAdapterInfo")}} que contiene información identificativa sobre el adaptador.
- {{domxref("GPUAdapter.limits", "limits")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("GPUSupportedLimits")}} que describe los límites soportados por el adaptador.

## Métodos de la instancia

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve con un objeto {{domxref("GPUAdapterInfo")}} que contiene información identificativa sobre el adaptador.
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve con un objeto {{domxref("GPUDevice")}}, que es la interfaz principal para comunicarse con la GPU.

## Ejemplos

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
