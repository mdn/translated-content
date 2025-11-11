---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

El método **`Geolocation.clearWatch()`** es usado para remover funciones que monitorizan
la ubicación o errores, previamente registradas usando **`Geolocation.watchPosition()`**

## Sintaxis

```js-nolint
clearWatch(id)
```

### Parámetros

- `id`
  - : El ID numérico es devuelto cuando se agrega una función para el monitoreo de la ubicación
    usando el método {{domxref("Geolocation.watchPosition()")}}

### Valor devuelto

Ninguno ({{jsxref("undefined")}}).

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
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
