---
title: window.navigator.geolocation
slug: Web/API/Navigator/geolocation
translation_of: Web/API/Navigator/geolocation
original_slug: Web/API/NavigatorGeolocation/geolocation
---
{{APIRef("Geolocation API")}}
La propiedad de sólo lectura **`Navigator.geolocation`** devuelve un objeto [`Geolocation`](/es/docs/Web/API/Geolocation "La interfaz Geolocalización representa un objeto capaz de obtener mediante programación la posición del dispositivo. Se da acceso Web de la ubicación del dispositivo. Esto permite a un sitio Web o aplicación ofrecer resultados personalizados basados ​​en la ubicación del usuario.") que proporciona acceso web a la ubicación de un dispositivo. Esto permite ofrecer al sitio web o aplicación resultados personalizados basados en la ubicación del usuario.

> **Nota:** Por motivos de seguridad, cuando una página web trata de acceder a la información de ubicación, se solicita permiso al usuario. Cada navegador tiene sus propias reglas sobre cómo y cuándo obtener dicho permiso.

## Sintaxis

    geo = navigator.geolocation

## Métodos

- {{domxref("geolocation.getCurrentPosition", "geolocation.getCurrentPosition()")}}
  - : Utilizado para obtener la posición actual.
- {{domxref("geolocation.watchPosition", "geolocation.watchPosition()")}}
  - : Utilizado para asignar un manejador para dar seguimiento a cualquier cambio de ubicación.
- {{domxref("geolocation.clearWatch", "geolocation.clearWatch()")}}
  - : Utilizado para eliminar un manejador asignado a los cambios de ubicación.

## Especificaciones

| Especificación                       | Estado                           | Comentario             |
| ------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName('Geolocation')}} | {{Spec2('Geolocation')}} | Especificación inicial |

## Compatibilidad en navegadores

{{Compat("api.Navigator.geolocation")}}

## Ver también

- [Utilizando la geolocalización](/docs/WebAPI/Using_geolocation "/en-US/docs/WebAPI/Using_geolocation")
