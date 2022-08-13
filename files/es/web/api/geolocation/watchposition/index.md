---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
translation_of: Web/API/Geolocation/watchPosition
---
{{ APIref("Geolocation API") }}

El método **`Geolocation.watchPosition()`** se utiliza para registrar una función de controlador que se llamará automáticamente cada vez que la posición del dispositivo cambia. También puede, opcionalmente, especificar una función de devolución de la gestión de errores.

Este método devuelve un valor de ID de seguimiento que se puede utilizar para anular el registro del controlador pasándolo al método [Geolocation.clearWatch()](/es/docs/Web/API/Geolocation.clearWatch).

## Sintaxis

    id = navigator.geolocation.watchPosition(success, error, options)

### Parámetros

- _success_
  - : Una función de devolución de llamada que toma un objeto de posición({{domxref("Position")}}) como parámetro de entrada.
- _error_ {{optional_inline}}
  - : Una función de devolución de llamada opcional que toma un objeto {{domxref("PositionError")}} como parámetro de entrada.
- _options_ {{optional_inline}}
  - : Un objeto opcional {{domxref("PositionOptions")}}.

## Ejemplo

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulation, you reach the target');
    navigator.geolocation.clearWatch(id);
  }
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

target = {
  latitude : 0,
  longitude: 0,
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Especificacines

| Especificación                                                                                           | Estado                           | Comentario             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| {{SpecName('Geolocation', '#watch-position', 'Geolocation.watchPosition()')}} | {{Spec2('Geolocation')}} | Especificación inicial |

## Compatibilidad de navegador

{{Compat("api.Geolocation.watchPosition")}}

## Ver también

- [Uso de la geolocalización](/es/docs/Usar_la_Geolocalizaci%C3%B3n)
- [Geolocalización](/es/docs/Web/API/Geolocalizaci%C3%B3n).
- [Geolocation.clearWatch()](/es/docs/Web/API/Geolocation.clearWatch)
- [Geolocation.getCurrentPosition()](/es/docs/Web/API/Geolocation.getCurrentPosition)
