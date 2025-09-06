---
title: "GPUAdapter: Propiedad limits"
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`limits`** de la interfaz {{domxref("GPUAdapter")}} devuelve un objeto {{domxref("GPUSupportedLimits")}} que describe los límites soportados por el adaptador.

Deberías tener en cuenta que, en lugar de reportar los límites exactos de cada GPU, los navegadores probablemente reporten diferentes niveles para distintos límites con el fin de reducir la información única disponible para el drive-by fingerprinting. Por ejemplo, los niveles de un cierto límite podrían ser de 2048, 8192 y 32768. Si el límite real de tu GPU es 16384, el navegador seguirá reportando 8192.

Dado que los diferentes navegadores gestionarán esto de diferentes formas y los niveles pueden cambiar sobre el tiempo, es difícil proporcionar una cantidad precisa de qué valores límite esperar, se recomienda realizar pruebas exhaustivas.

## Valor

Una instancia del objeto {{domxref("GPUSupportedLimits")}}.

## Ejemplos

En el siguiente código consultamos el valor `GPUAdapter.limits` de `maxBindGroups` para ver si es igual o mayor que 6. Nuestra aplicación de ejemplo necesita idealmente 6 grupos de enlace, así que si el valor devuelto es >= 6, añadimos un límite máximo de 6 al objeto `requiredLimits`, y solicitamos un dispositivo con ese requerimiento de límite usando {{domxref("GPUAdapter.requestDevice()")}}:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU no está soportado.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("No se pudo solicitar un adaptador de WebGPU.");
  }

  const requiredLimits = {};

  // La aplicación necesita idealmente 6 grupos de enlace,
  // así que intentaremos solicitar lo que la aplicación requiere
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
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
