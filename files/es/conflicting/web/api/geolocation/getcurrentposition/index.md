---
title: PositionOptions
slug: conflicting/Web/API/Geolocation/getCurrentPosition
tags:
  - Geolocalización
  - Interfaz
  - Referencia
translation_of: Web/API/PositionOptions
original_slug: Web/API/PositionOptions
browser-compat: api.Geolocation.getCurrentPosition
---
{{APIRef("Geolocation API")}}

La interfaz **`PositionOptions`** describe las opciones disponibles cuando invocamos el "backend" de geolocalización. El navegador no crea este objeto directamente: es el script que invoca quien lo crea y usa como un parámetro de {{domxref("Geolocation.getCurrentPosition()")}} y {{domxref("Geolocation.watchPosition()")}}.

## Propiedades

_La interfaz `PositionOptions` no hereda ninguna propiedad_.

- {{domxref("PositionOptions.enableHighAccuracy")}}
  - : Es un {{domxref("Boolean")}} que indica que la aplicación quiere recibir los mejores resultados posibles. Si es `true` y si el dispositivo es capaz de proporcionar una posición más precisa, así lo hará. Ten en cuenta que esto puede resultar en tiempos de respuesta más lentos o en un incremento del uso de energía (con un chip GPS en un teléfono móvil por ejemplo). Por otro lado, si es `false` (el valor por defecto), el dispositivo tiene libertad para decidir ahorrar recursos respondiendo más rápido y/o usando menos energía.
- {{domxref("PositionOptions.timeout")}}
  - : Es un valor `long` positivo que representa el máximo período de tiempo (en millisegundos) que se le permite tomar al dispositivo para retornar a una posición. El valor por defecto es [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity), y significa que `getCurrentPosition()` no retornará hasta que esté disponible la posición.
- {{domxref("PositionOptions.maximumAge")}}
  - : Es un valor `long` positivo que indica la edad máxima en milisegundos de una posible posición "cacheada" que es aceptable retornar. Si es `0`, significa que el dispositivo no puede usar posiciones "cacheadas" y debe intentar conseguir la posición real actual. Si es [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) el dispositivo debe retornar una posición previamente "cacheada" independientemente de su edad.

## Métodos

**La interfaz `PositionOptions` no implementa ni hereda ningún método*.***

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## Ver también

- [Using geolocation](/es/docs/WebAPI/Using_geolocation)
- La interfaz {{domxref("Geolocation")}} que la usa.
