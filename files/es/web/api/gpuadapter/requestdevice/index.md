---
title: "GPUAdapter: Método requestDevice()"
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

El método **`requestDevice()`** de la interfaz {{domxref("GPUAdapter")}} devuelve una {{jsxref("Promise")}} que se resuelve con un objeto {{domxref("GPUDevice")}}, que es la interfaz principal para comunicarse con la GPU.

## Sintaxis

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parámetros

- `descriptor` {{optional_inline}}
  - : Un objeto que contiene las siguientes propiedades:
    - `defaultQueue` {{optional_inline}}
      - : Un objeto que proporciona información sobre la {{domxref("GPUQueue")}} predeterminada del sistema (tal como se devuelve en {{domxref("GPUDevice.queue")}}). Este objeto tiene una sola propiedad —`label`— que proporciona la cola predeterminada con un valor {{domxref("GPUQueue.label", "label")}}. Si no se proporciona ningún valor, se usa un objeto vacío por defecto, y la etiqueta de la cola predeterminada será una cadena de texto vacía.
    - `label` {{optional_inline}}
      - : Una cadena de texto que proporciona una etiqueta que se puede usar para identificar el {{domxref("GPUDevice")}}, por ejemplo en mensajes de {{domxref("GPUError")}} o advertencias de la consola.
    - `requiredFeatures` {{optional_inline}}
      - : Un arreglo de cadenas de texto que representa funcionalidades adicionales que deseas que el {{domxref("GPUDevice")}} devuelto soporte. La llamada a `requestDevice()` fallará si el `GPUAdapter` no puede proporcionar estas características. Consulta {{domxref("GPUSupportedFeatures")}} para una lista completa de posibles características. Se usa una cadena de texto por defecto si ningún valor es proporcionado.
    - `requiredLimits` {{optional_inline}}
      - : Un objeto que contiene propiedades que representan los límites que quieres que el {{domxref("GPUDevice")}} devuelto soporte. La llamada a `requestDevice()` fallará si el `GPUAdapter` no puede proporcionar esos límites. Cada clave con un valor distinto a `undefined` debe ser el nombre de un miembro de {{domxref("GPUSupportedLimits")}}.
        > [!NOTE]
        > Puedes solicitar límites desconocidos al solicitar un dispositivo de GPU sin causar un error. Tales límites serán `undefined`. Esto es útil porque hace que el código de WebGPU sea menos frágil, una base de código no dejará de funcionar porque un límite ya no exista en el adaptador.

No todas las características y límites estarán disponibles en WebGPU en todos los navegadores que lo soportan, incluso si están soportadas por el hardware subyacente. Consulta las paginas de {{domxref("GPUAdapter.features", "features")}} y {{domxref("GPUAdapter.limits", "limits")}} para más información.

### Valor devuelto

Una {{jsxref("Promise")}} que se resuelve con una instancia del objeto {{domxref("GPUDevice")}}.

Si haces una llamada duplicada, es decir, llamas a `requestDevice()` en un {{domxref("GPUAdapter")}} sobre el cual `requestDevice()` ya se había llamado, la promesa se resuelve con un dispositivo que es inmediatamente perdido. Luego, puedes obtener información sobre cómo se perdió el dispositivo a través de {{domxref("GPUDevice.lost")}}.

### Excepciones

- `OperationError` {{domxref("DOMException")}}
  - : La promesa se rechaza con un `OperationError` si los límites incluidos en la propiedad `requiredLimits` no están soportados por el {{domxref("GPUAdapter")}}, ya sea porque no son límites válidos o porque sus valores son más altos que los valores del adaptador para esos límites.
- `TypeError` {{domxref("DOMException")}}
  - : La promesa se rechaza con un `TypeError` si las funciones incluidas en la propiedad `requiredFeatures` no están soportadas por el {{domxref("GPUAdapter")}}.

## Ejemplos

### Ejemplo básico

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

### Solicitar características y límites específicos

En el siguiente código:

1. Comprobamos si un {{domxref("GPUAdapter")}} tiene disponible la característica `texture-compression-astc`. De ser así, la insertamos en el arreglo `requiredFeatures`.
2. Consultamos el valor `GPUAdapter.limits` de `maxBindGroups` para ver si es igual o mayor que 6. Nuestra aplicación teórica de ejemplo necesita idealmente 6 grupos de enlace, así que si el valor devuelto es >= 6, añadimos un límite máximo de 6 al objeto `requiredLimits`.
3. Solicitamos un dispositivo con esos requisitos de característica y límite, más una etiqueta `defaultQueue`.

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

  const requiredLimits = {};

  // La aplicación necesita idealmente 6 grupos de enlace,
  // así que intentaremos solicitar lo que la aplicación requiere
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    defaultQueue: {
      label: "my_queue",
    },
    requiredFeatures,
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
