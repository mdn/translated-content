---
title: API de geolocalización
slug: Web/API/Geolocation_API
translation_of: Web/API/Geolocation_API
original_slug: WebAPI/Using_geolocation
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

La **API de geolocalización** permite al usuario compartir su ubicación a las aplicaciones web si así lo desea.
Por razones de privacidad, al usuario se le pide que confirme el permiso para proporcionar información de ubicación.

Las `WebExtensions` que deseen utilizar el objeto `Geolocation` deben agregar el permiso `"geolocation"` a su manifiesto.
El sistema operativo del usuario le indicará que permita el acceso a la ubicación la primera vez que se solicite.

## Conceptos y uso

A menudo querrá recuperar la información de ubicación de un usuario en su aplicación web,
por ejemplo, para trazar su ubicación en un mapa o mostrar información personalizada relevante para su ubicación.

Se accede a la API de geolocalización a través de una llamada a {{domxref("Navigator.geolocation", "navigator.geolocation")}};
esto hará que el navegador del usuario le pida permiso para acceder a sus datos de ubicación.
Si aceptan, el navegador utilizará la mejor funcionalidad disponible en el dispositivo para acceder a esta información (por ejemplo, GPS).

El desarrollador ahora puede acceder a esta información de ubicación de dos maneras diferentes:

- {{domxref("Geolocation.getCurrentPosition()")}}: Recupera la ubicación actual del dispositivo.
- {{domxref("Geolocation.watchPosition()")}}: Registra una función de controlador que se llamará automáticamente cada vez que cambie la posición del dispositivo, devolviendo la ubicación actualizada.

En ambos casos, la llamada al método toma hasta tres argumentos.

- Una función obligatoria que será llamada en caso de éxito: si la recuperación de la ubicación es exitosa, la función se ejecuta con un objeto {{domxref("GeolocationPosition")}} como su único parámetro, proporcionando acceso a los datos de ubicación.
- Una función opcional que será llamada en caso de error: si la recuperación de la ubicación no tiene éxito, la función se ejecuta con un objeto {{domxref("GeolocationPositionError")}} como su único parámetro, proporcionando información de acceso sobre lo que salió mal.
- Un objeto opcional que proporciona opciones para la recuperación de los datos de posición.

Para obtener más información sobre el uso de la geolocalización, lea [Uso de la API de geolocalización](/es/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

## Interfaces

- {{domxref("Geolocation")}}
  - : La clase principal de esta API: contiene métodos para recuperar la posición actual del usuario, observar cambios en su posición y borrar una observación establecida previamente.
- {{domxref("GeolocationPosition")}}
  - : Representa la posición de un usuario. Una instancia de `GeolocationPosition` es devuelta por una llamada exitosa a uno de los métodos contenidos dentro de {{domxref("Geolocation")}}, dentro de una devolución de llamada exitosa, y contiene una marca de tiempo más una instancia de objeto {{domxref("GeolocationCoordinates")}}.
- {{domxref("GeolocationCoordinates")}}
  - : Representa las coordenadas de la posición de un usuario; una instancia de `GeolocationCoordinates` contiene latitud, longitud y otra información relacionada importante.
- {{domxref("GeolocationPositionError")}}
  - : Un `GeolocationPositionError` es devuelto por una llamada fallida a uno de los métodos contenidos dentro de {{domxref("Geolocation")}}, dentro de una devolución de llamada de error, y contiene un código y un mensaje de error.
- {{domxref("Navigator.geolocation")}}
  - : El punto de entrada a la API. Devuelve una instancia de objeto {{domxref("Geolocation")}}, desde la cual se puede acceder a todas las demás funciones.

## Ejemplo

Consulte [Uso de la API de geolocalización](/es/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) para obtener un código de ejemplo.

## Especificaciones

{{Specifications("api.Geolocation")}}

## Compatibilidad con navegadores

{{Compat("api.Geolocation")}}

### Disponibilidad

Dado que Google suele proporcionar la ubicación basada en Wi-Fi, es posible que la API _vanilla_ de Geolocalización no esté disponible en China. Puede utilizar proveedores externos locales como [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), o [Tencent](https://lbs.qq.com/tool/component-geolocation.html). Estos servicios utilizan la dirección IP del usuario y/o una aplicación local para proporcionar un mejor posicionamiento.

## Véase también

- [Uso de la API de geolocalización](/es/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [API de geolocalización en w3.org](https://www.w3.org/TR/geolocation-API/)
- [¿Quién movió mi geolocalización?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
