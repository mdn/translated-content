---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{ APIRef("Geolocation API") }}

El método **`Geolocation.getCurrentPosition()`** es usado para obtener la ubicación actual del dispositivo.

## Sintaxis

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### Parámetros

- `success`
  - : La función devuelta tiene como único parámetro de entrada un objeto de tipo {{domxref("GeolocationPosition")}}.
- `error` {{optional_inline}}
  - : La función opcional devuelta tiene como parámetro de entrada un objeto de tipo {{domxref("GeolocationPositionError")}}.
- `options` {{optional_inline}}
  - : Un objeto opcional que puede incluir las siguientes propiedades:
    - `maximumAge`
      - : Un valor positivo de tipo `long` que indica el tiempo máximo en milisegundos que una posible ubicación almacenada en caché puede ser devuelta. Si se establece en 0, eso significa que el dispositivo no podrá usar la ubicación almacenada en caché y debe intentar recuperar la ubicación real y actual. Si se establece como [`Infinity`](/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity) el dispositivo deberá regresar la ubicación almacenada en caché independientemente de su antigüedad. Predeterminado: 0.
    - `timeout`
      - : Un valor positivo de tipo `long` que representa el tiempo máximo en milisegundos en que el dispositivo tiene permitido recuperar la ubicación. El valor predeterminado es [`Infinity`](/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity), esto significa que `getCurrentPosition()` regresará un valor hasta que la ubicación este disponible.
    - `enableHighAccuracy`
      - : Un valor de tipo `boolean` que indica que a la aplicación le gustaría obtener el resultado más preciso posible. Si es `true` y el dispositivo es capaz de proveer una ubicación más precisa, lo hará. Tenga en cuenta que este resultado puede necesitar de más tiempo de respuesta o incrementar el consumo de energía (con un chip GPS en un dispositivo móvil por ejemplo). Por otro lado, si es `false`, el dispositivo puede tomarse la libertad de usar menos recursos y responder más rápido y/o usando menos energía. Predeterminado: `false`

### Valor devuelto

Ninguno ({{jsxref("undefined")}}).

## Ejemplos

```js
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Tu ubicación actual es:");
  console.log(`Latitud : ${crd.latitude}`);
  console.log(`Longitud: ${crd.longitude}`);
  console.log(`Más o menos ${crd.accuracy} metros.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando la API de Geolocalización](/es/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
