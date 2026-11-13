---
title: "GPUAdapterInfo: Propiedad vendor"
slug: Web/API/GPUAdapterInfo/vendor
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`vendor`** de la interfaz {{domxref("GPUAdapterInfo")}} devuelve el nombre del proveedor del adaptador, o una cadena de texto vacía si no está disponible.

## Valor

Una cadena de texto.

## Ejemplos

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
