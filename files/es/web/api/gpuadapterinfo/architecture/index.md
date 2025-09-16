---
title: "GPUAdapterInfo: Propiedad architecture"
slug: Web/API/GPUAdapterInfo/architecture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`architecture`** de la interfaz {{domxref("GPUAdapterInfo")}} devuelve el nombre de la familia o clase de GPU a la que pertenece el adaptador, o una cadena de texto vacía si no está disponible.

## Valor

Una cadena de texto.

## Ejemplos

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.architecture);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
