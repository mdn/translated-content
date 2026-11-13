---
title: "GPUAdapter: Propiedad info"
slug: Web/API/GPUAdapter/info
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`info`** de la interfaz {{domxref("GPUAdapter")}} devuelve un objeto {{domxref("GPUAdapterInfo")}} que contiene información identificativa sobre el adaptador.

## Valor

Una instancia del objeto {{domxref("GPUAdapterInfo")}}.

## Ejemplos

### Uso básico de la información

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
