---
title: "GPU: Propiedad wgslLanguageFeatures"
slug: Web/API/GPU/wgslLanguageFeatures
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

La propiedad de solo lectura **`wgslLanguageFeatures`** de la interfaz {{domxref("GPU")}} devuelve un objeto {{domxref("WGSLLanguageFeatures")}} que reporta las [extensiones del lenguaje WGSL](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) soportadas por la implementación de WebGPU.

> [!NOTE]
> No todas las extensiones del lenguaje WGSL están disponibles en todos los navegadores que soportan la API. Te recomendamos que pruebes todas las extensiones que quieras usar.

## Valor

Una instancia del objeto{{domxref("WGSLLanguageFeatures")}}. Este es un objeto [setlike](/es/docs/Web/JavaScript/Reference/Global_Objects/Set).

## Ejemplos

```js
if (!navigator.gpu) {
  throw Error("WebGPU no está soportado.");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Devuelve el tamaño del conjunto
console.log(wgslFeatures.size);

// Iterar sobre todos los valores usando values()
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// …
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de WebGPU](/es/docs/Web/API/WebGPU_API)
