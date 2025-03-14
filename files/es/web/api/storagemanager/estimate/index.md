---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
---

{{securecontext_header}}{{APIRef("Storage")}}

El método **`estimate()`** de la interfaz {{domxref("StorageManager")}} solicita al Gestor de Almacenamiento la información de cuota y uso para el origen actual. Este método opera de forma asíncrona, por lo que devuelve una {{jsxref("Promise")}} que se resuelve una vez que la información esté disponible. La función que controla el cumplimiento de la promesa recibe un {{domxref("StorageEstimate")}} como entrada con la informción de uso y cuota.

## Sintaxis

```
var estimatePromise = StorageManager.estimate();
```

### Parámetros

Ninguno.

### Valor devuelto

Una {{jsxref('Promise')}} que se resuelve como un objeto que se ajusta al diccionario {{domxref('StorageEstimate')}}. Este diccionario contiene estimaciones sobre la cantidad de espacio disponible para el origen o aplicación (en {{domxref("StorageEstimate.quota")}}, así como la cantidad que se usa en ese momento (in {{domxref("StorageEstimate.usage")}}). Estos no son números exactos; entre la compresión, la deduplicación y la ofuscación por razones de seguridad, no serán precisos.

Es posible que la `quota` varíe de una aplicación a otra en función de factores como la frecuencia con la que el usuario la visita, los datos de popularidad del sitio, etc.

## Ejemplo

En este ejemplo, obtenemos las estimaciones de uso y presentamos el porcentaje de la capacidad de almacenamiento utilizada actualmente al usuario.

### HTML

```html
<p>
  You're currently using about <span id="percent"> </span>% of your available
  storage.
</p>
```

### JavaScript

```js
navigator.storage.estimate().then(function (estimate) {
  document.getElementById("percent").innerHTML = (
    estimate.usage / estimate.quota
  ).toFixed(2);
});
```

### Resultado

{{ EmbedLiveSample('Example', 600, 40) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Storage API
- {{domxref("Storage")}}, el objeto devuelto por {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
