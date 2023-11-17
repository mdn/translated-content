---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

El método **`register()`** de la interfaz {{domxref("ServiceWorkerContainer")}} crea o actualiza un {{domxref("ServiceWorkerRegistration")}} para un `scriptURL`. dado

Si tiene éxito, el registro de un "service worker" relaciona la URL del script proporcionada con un ámbito, que posteriormente se utiliza para la coincidencia de navegación. Puede llamar a este método incondicionalmente desde la página controlada. Es decir, no necesita verificar primero si hay un registro activo.

Existe una confusión frecuente en torno al significado y uso del alcance. Dado que un trabajador de servicio no puede tener un alcance más amplio que su propia ubicación, solo use la opción de ámbito cuando necesite un alcance que sea más estrecho que el predeterminado.

## Sintaxis

```
ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });
```

### Parámetros

- `scriptURL`
  - : La URL del script de trabajador de servicio.
- `options` `{{optional_inline}}`

  - : Un objeto que contiene opciones de registro. Las opciones disponibles actualmente son:

    - `alcance`: {{domxref("USVString")}} representa una URL que define el alcance de registro de un "service worker"; es decir, qué rango de URL puede controlar un "service worker". Esto es generalmente una URL relativa. El valor predeterminado es la URL que obtendría si resolviera './' utilizando la ubicación de la página web como base. No es, como se cree comúnmente, relativo a la ubicación del "service worker". Vea la sección de Ejemplos para más información sobre cómo funciona.

### Valor retornado

A {{domxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}} object.

## Ejemplos

The examples described here should be taken together to get a better understanding of how service workers scope applies to a page.

The following example uses the default value of `scope` (by omitting it). The service worker in this case will control `example.com/index.html` as well as pages underneath it, like `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log("Service worker registration succeeded:", registration);
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}
```

The following code, if included in a page at the root of a site, would apply to exactly the same pages as the example above. Remember the scope, when included, uses the page's location as its base. Alternatively, if this code were included in a page at `example.com/product/description.html`, the scope of `'./'` would mean that the service worker only applies to resources under `example.com/product`. If I needed to register a service worker on `example.com/product/description.html` that applied to all of `example.com`, I would leave off the scope as above.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using a more restrictive scope.
  navigator.serviceWorker
    .register("/sw.js", { scope: "./" })
    .then(function (registration) {
      console.log("Service worker registration succeeded:", registration);
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
