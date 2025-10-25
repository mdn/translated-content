---
title: "GPUAdapter: Propiedad features"
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`features`** de la interfaz {{domxref("GPUAdapter")}} devuelve un objeto {{domxref("GPUSupportedFeatures")}} que describe las funcionalidades adicionales soportadas por el adaptador.

Deberías tener en cuenta que no todas las características estarán disponibles en WebGPU en todos los navegadores que lo soportan, incluso si las características están soportadas por el hardware subyacente. Esto podría deberse a limitaciones al sistema subyacente, navegador o adaptador. Por ejemplo:

- El sistema subyacente podría no ser capaz de garantizar la exposición de una característica de una manera que sea compatible con ciertos navegadores.
- El proveedor del navegador podría no tener una forma segura de implementar el soporte para esa característica, o simplemente aún no lo haya hecho.

Si quieres aprovechar una característica adicional en una aplicación WebGPU, se recomienda realizar pruebas exhaustivas.

## Valor

Una instancia del objeto {{domxref("GPUSupportedFeatures")}}. Este es un objeto [setlike](/es/docs/Web/JavaScript/Reference/Global_Objects/Set).

## Ejemplos

En el siguiente código comprobamos si un {{domxref("GPUAdapter")}} tiene la característica `texture-compression-astc` disponible. En ese caso, lo agregamos al arreglo de `requiredFeatures`, y solicitamos un dispositivo con esa característica usando {{domxref("GPUAdapter.requestDevice()")}}

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU no está soportado.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("No se pudo solicitar un adaptador de WebGPU.");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const device = await adapter.requestDevice({
    requiredFeatures,
  });

  // …
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
