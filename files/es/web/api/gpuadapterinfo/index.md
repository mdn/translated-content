---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La interfaz **`GPUAdapterInfo`** de la {{domxref("WebGPU API", "API de WebGPU", "", "nocode")}} contiene información identificativa sobre un {{domxref("GPUAdapter")}}.

La `GPUAdapterInfo` de un adaptador se puede obtener usando la propiedad {{domxref("GPUAdapter.info")}} del propio adaptador, o la propiedad {{domxref("GPUDevice.adapterInfo")}} de un dispositivo originado del adaptador.

Este objeto permite a los desarrolladores acceder a detalles específicos de la GPU del usuario para que puedan aplicar soluciones alternativas de forma preventiva o proporcionar diferentes rutas de código para adaptarse mejor a diferentes arquitecturas de GPU. Proporcionar esa información presenta un riesgo de seguridad —se podría usar para obtener huellas digitales— y, por lo tanto, el intercambio de información se mantiene al mínimo, y es probable que los diferentes proveedores de los navegadores compartan distintos tipos de información y granularidades.

{{InheritanceDiagram}}

## Propiedades de la instancia

- {{domxref("GPUAdapterInfo.architecture", "architecture")}} {{ReadOnlyInline}}
  - : El nombre de la familia o clase de GPU a la que pertenece el adaptador. Devuelve una cadena de texto vacía si no está disponible.
- {{domxref("GPUAdapterInfo.description", "description")}} {{ReadOnlyInline}}
  - : Una cadena de texto legible para humanos describiendo el adaptador. Devuelve una cadena de texto vacía si no está disponible.
- {{domxref("GPUAdapterInfo.device", "device")}} {{ReadOnlyInline}}
  - : Un identificador específico del proveedor para el adaptador. Devuelve una cadena de texto vacía si no está disponible.
- {{domxref("GPUAdapterInfo.vendor", "vendor")}} {{ReadOnlyInline}}
  - : El nombre del proveedor del adaptador. Devuelve una cadena de texto vacía si no está disponible.
- {{domxref("GPUAdapterInfo.subgroupMaxSize", "subgroupMaxSize")}} {{ReadOnlyInline}}
  - : El tamaño máximo de [subgrupo](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) soportado por el {{domxref("GPUAdapter")}}.
- {{domxref("GPUAdapterInfo.subgroupMinSize", "subgroupMinSize")}} {{ReadOnlyInline}}
  - : El tamaño mínimo de [subgrupo](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) soportado por el {{domxref("GPUAdapter")}}.

## Ejemplos

### Acceder a GPUAdapterInfo a través de GPUAdapter.info

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

### Access GPUAdapterInfo via GPUDevice.adapterInfo

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("No se pudo solicitar un adaptador de WebGPU.");
}

const myDevice = await adapter.requestDevice();

function optimizeForGpuDevice(device) {
  if (device.adapterInfo.vendor === "amd") {
    // Usa optimizaciones específicas de AMD
  } else if (device.adapterInfo.architecture.includes("turing")) {
    // Optimiza para la arquitectura NVIDIA Turing
  }
}

optimizeForGpuDevice(myDevice);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("GPUAdapter.info")}}
- La [API de WebGPU](/es/docs/Web/API/WebGPU_API)
