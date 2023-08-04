---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{APIRef("Geolocation API")}}

La interfaz **`Coordinates`** representa la posición y altitud del dispositivo en la Tierra, así como la precisión con la cual estas propiedades son calculadas.

## Propiedades

_La interfaz `Coordinates` no hereda ninguna propiedad_.

- {{domxref("Coordinates.latitude")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la latitud de la posición en grados con decimales.
- {{domxref("Coordinates.longitude")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la longitud de la posición en grados con decimales.
- {{domxref("Coordinates.altitude")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la altitud de la posición en metros, relativo al nivel del mar. Este valor puede ser `null` si la implementación no puede proporcionar la información.
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la precisión de las propiedades `latitude` y `longitude`, expresada en metros.
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la precisión de la propiedad `altitude` expresada en metros. Este valor puede ser `null`.
- {{domxref("Coordinates.heading")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la dirección en la que el dispositivo está viajando. Este valor, indicado en grados, indica la distancia real a la que el dispositivo se encuentra del norte. `0` grados representa el norte real, y la dirección se determina en el sentido de la agujas del reloj (lo que significa que el este es `90` grados y el oeste es `270` grados). Si `speed` es `0`, `heading` es [`NaN`](/es/docs/JavaScript/Reference/Global_Objects/NaN). En caso de que el dispositivo no pueda proporcionar la información de `heading`, este valor es `null`.
- {{domxref("Coordinates.speed")}} {{readonlyInline}}
  - : Devuelve un `double` que representa la velocidad del dispositivo en metros por segundo. Este valor puede ser `null`.

## Métodos

La interfaz `Coordinates` no implementa ni edita ningún método.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Utilizando la geolocalización](/es/docs/WebAPI/Using_geolocation)
- La interfaz {{domxref("Geolocation")}} que la utiliza.
