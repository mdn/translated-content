---
title: "GPU: Método requestAdapter()"
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

El método **`requestAdapter()`** de la interfaz {{domxref("GPU")}} devuelve una {{jsxref("Promise")}} que se resuelve con una instancia del objeto {{domxref("GPUAdapter")}}. Desde aquí puedes solicitar un {{domxref("GPUDevice")}}, información del adaptador, características y límites.

Ten en cuenta que el agente de usuario es quien decide si devolver un adaptador. De ser así, lo elige según las opciones proporcionadas. Si no se proporcionan opciones, el dispositivo proporcionará acceso al adaptador predeterminado, lo cual suele ser suficiente para la mayoría de los casos.

## Sintaxis

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parámetros

- `options` {{optional_inline}}
  - : Un objeto que contiene las siguientes propiedades:
    - `powerPreference` {{optional_inline}}
      - : Un valor enumerado que se puede usar para proporcionar una pista al agente de usuario que indica qué clase de adaptador se debería escoger entre los adaptadores disponibles del sistema. Los valores disponibles son:
        - `undefined` (o no especificado), que no proporciona ninguna pista.
        - `"low-power"`, lo que indica que se debe priorizar el ahorro de energía frente al rendimiento. Si la aplicación funciona correctamente con esta configuración, se recomienda usarla, ya que puede mejorar significativamente la duración de la batería en dispositivos portátiles. Esta suele ser la opción predeterminada si no se ofrecen opciones.
        - `"high-performance"`, lo que indica que se debe priorizar el rendimiento sobre el consumo de energía. Se recomienda especificar este valor solo si es absolutamente necesario, ya que puede reducir significativamente la duración de la batería en dispositivos portátiles. También puede resultar en una mayor probabilidad de pérdida del {{domxref("GPUDevice")}}, en ocasiones, el sistema optará por usar un adaptador de menor consumo para ahorrar energía.

        El objetivo principal de esta pista es determinar qué GPU se usará en un sistema con varias GPU. Por ejemplo, algunos portátiles tienen una GPU integrada de bajo consumo y una GPU discreta de alto rendimiento. Diversos factores pueden afectar qué adaptador es devuelto, incluyendo el estado de la batería, las pantallas conectadas o las GPU extraíbles.

        > [!NOTE]
        > En Chrome ejecutándose en dispositivos macOS con doble GPU, si se llama a `requestAdapter()` sin una opción `powerPreference`, se devuelve la GPU discreta de alto rendimiento cuando el dispositivo del usuario está conectado a la corriente eléctrica. De lo contrario, se devolverá la GPU integrada de bajo consumo.

### Adaptadores de respaldo

El adaptador proporcionado por el agente de usuario puede ser un **adaptador de respaldo**, si determina que es la opción disponible más apropiada. Un adaptador de respaldo generalmente ofrece limitaciones de rendimiento significativas a cambio de una mayor compatibilidad, un comportamiento más predecible, o una mayor privacidad. Por ejemplo, algunos navegadores pueden ofrecer una implementación de la API basada en el software a través de un adaptador de respaldo. Es posible que un adaptador de respaldo no esté disponible en todos los sistemas.

Si quieres prevenir que tus aplicaciones se ejecuten en adaptadores de respaldo, deberías comprobar el atributo {{domxref("GPUAdapter.isFallbackAdapter")}} antes de solicitar un {{domxref("GPUDevice")}}.

> [!NOTE]
> La especificación incluye una opción `forceFallbackAdapter` para `requestAdapter()`. Esto es un booleano que, si es establecido a `true`, fuerza al agente de usuario a devolver un adaptador de respaldo si uno está disponible. Esto no está soportado por ningún navegador todavía.

### Valor devuelto

Una {{jsxref("Promise")}} que se resuelve con una instancia del objeto {{domxref("GPUAdapter")}} si la petición es exitosa.

`requestAdapter()` resolverá a `null` si no está disponible un adaptador apropiado.

### Excepciones

Ninguna.

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
