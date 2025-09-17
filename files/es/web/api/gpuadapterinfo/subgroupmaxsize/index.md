---
title: "GPUAdapterInfo: Propiedad subgroupMaxSize"
slug: Web/API/GPUAdapterInfo/subgroupMaxSize
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`subgroupMaxSize`** de la interfaz {{domxref("GPUAdapterInfo")}} devuelve el tamaño máximo de [subgrupo](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) soportado por el {{domxref("GPUAdapter")}}. Esto se puede usar junto la [característica](/es/docs/Web/API/GPUSupportedFeatures) `subgroups`.

## Valor

Un número.

## Ejemplos

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.subgroupMaxSize);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
