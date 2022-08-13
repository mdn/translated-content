---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
translation_of: Web/API/Geolocation/getCurrentPosition
---
{{ APIref("Geolocation API") }}

## Resumen

El método **`Geolocation.getCurrentPosition()`** se utiliza para obtener la posición de un dispositivo.

## Sintaxis

    navigator.geolocation.getCurrentPosition(success, error, options)

### Parámetros

- _success_
  - : Una función de devolución de llamada que toma un objeto de posición({{domxref("Position")}}) como único parámetro de entrada.
- _error_ {{optional_inline}}
  - : Una función de devolución de llamada opcional que toma un objeto {{domxref("PositionError")}} como único parámetro de entrada.
- _options_ {{optional_inline}}
  - : Un objeto opcional {{domxref("PositionOptions")}}.

## Ejemplo

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Especificaciones

| Especificación                       | Estado                           | Comentario             |
| ------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName('Geolocation')}} | {{Spec2('Geolocation')}} | Especificación inicial |

## Compatibilidad de navegador

{{Compat("api.Geolocation.getCurrentPosition")}}

## Ver también

- [Usar la geolocalización](/es/docs/Usar_la_Geolocalizaci%C3%B3n)
- [Geolocalización](/es/docs/Web/API/Geolocalizaci%C3%B3n)
- [watchPosition()](/es/docs/Web/API/Geolocation.watchPosition)
