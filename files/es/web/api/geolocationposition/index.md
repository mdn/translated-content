---
title: Position
slug: Web/API/GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

La interfaz **`Position`** representa la posición del dispositivo en cuestión en un momento dado. La posición, representada por el objeto {{domxref("Coordinates")}}, comprende la posición en dos dimensiones del dispositivo en un esferoide representando la Tierra y además su altitud y velocidad.

## Propiedades

_La interfaz `Position` no hereda ninguna propiedad._

- {{domxref("Position.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : Devuelve un objeto {{domxref("Coordinates")}} que indica la posición actual.
- {{domxref("Position.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : Devuelve un {{domxref("DOMTimeStamp")}} indicando el momento en que la localización ha sido recuperada.

## Métodos

La interfaz `Position` no implementa ni hereda ningún método.

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

{{Compat}}

## Ver también

- [Using geolocation](/es/docs/Web/API/Geolocation_API)
- La interfaz {{domxref("Geolocation")}} que la usa.
