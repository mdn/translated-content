---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

El método **`watchPosition()`** de {{domxref("Geolocation")}} se usa para registrar una función que será llamada automáticamente cada vez que el dispositivo cambie de ubicación. También puede, opcionalmente, especificar una función que maneje los errores.

## Sintaxis

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### Parámetros

- `success`
  - : La función devuelta tiene como parámetro de entrada un objeto de tipo {{domxref("GeolocationPosition")}}.
- `error` {{optional_inline}}
  - : La función opcional devuelta tiene como parámetro de entrada un objeto de tipo {{domxref("GeolocationPositionError")}}.
- `options` {{optional_inline}}
  - : Un objeto opcional que provee de configuraciones a la monitorización de la ubicación.
    Consulte {{domxref("Geolocation.getCurrentPosition()")}} para obtener más detalles acerca de las posibles opciones.

### Valor devuelto

Un valor numérico ID que identifica a la función que se encuentra monitoreando la ubicación.
Este ID puede ser pasado al método {{domxref("Geolocation.clearWatch()")}} para detener el monitoreo de la ubicación.

## Ejemplos

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Felicidades, has llegado a tu destino.");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando la API de Geolocalización](/es/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- La interfaz pertenece a {{domxref("Geolocation")}}, y puede ser accedida mediante {{domxref("Navigator.geolocation")}}.
- La operación contraria: {{domxref("Geolocation.clearWatch()")}}
- Un método similar: {{domxref("Geolocation.getCurrentPosition()")}}
