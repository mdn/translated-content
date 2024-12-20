---
title: Geolocalización
slug: Web/API/Geolocation
---

{{APIRef("Geolocation API")}}

La interfaz **Geolocalización** representa un objeto capaz de obtener mediante programación la posición del dispositivo. Se da acceso Web de la ubicación del dispositivo. Esto permite a un sitio Web o aplicación ofrecer resultados personalizados basados en la ubicación del usuario.

Se obtiene un objeto con esta interfaz mediante la propiedad {{domxref("NavigatorGeolocation.geolocation")}} implementado por el objeto {{domxref("Navigator")}}.

> [!NOTE]
> Por razones de seguridad, cuando una página web intenta obtener acceso a la información de ubicación, se notifica al usuario y le pide conceder el permiso. Tenga en cuenta que cada navegador tiene sus propias políticas y métodos para solicitar este permiso.

## Propiedades

La interfaz de Geolocalización no implementa ni hereda propiedades.

## Métodos

_La interfaz `Geolocation` no hereda ningún método._

- [Geolocation.getCurrentPosition()](/es/docs/Web/API/Geolocation/getCurrentPosition)
  - : Determina la ubicación actual del dispositivo y devuelve un objeto de posición({{domxref("Position")}}) con los datos.

[Geolocation.watchPosition()](/es/docs/Web/API/Geolocation/watchPosition)

Devuelve un valor de largo(`long`) que representa la función de devolución de llamada de reciente creación que se invoca cada vez que cambia la ubicación del dispositivo.

- [Geolocation.clearWatch()](/es/docs/Web/API/Geolocation/clearWatch)
  - : Elimina el controlador especial instalado previamente utilizando [`watchPosition()`](/es/docs/Web/API/Geolocation/watchPosition).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usar la geolocalización](/es/docs/Usar_la_Geolocalizaci%C3%B3n)
