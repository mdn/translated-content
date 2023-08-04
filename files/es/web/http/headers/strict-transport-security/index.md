---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
---

{{HTTPSidebar}}

**HTTP `Strict-Transport-Security`** (a menudo abreviado como {{Glossary("HSTS")}}) es una característica de seguridad que permite a un sitio web indicar a los navegadores que sólo se debe comunicar con HTTPS en lugar de usar HTTP.

| Tipo de Encabezado                             | {{Glossary("Encabezado de Respuesta")}} |
| ---------------------------------------------- | --------------------------------------- |
| {{Glossary("Nombre de Encabezado Prohibido")}} | no                                      |

## Sintaxis

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Directivas

- `max-age=<expire-time>`
  - : Es el tiempo, en segundos, que el navegador debe recordar que el sitio solo debe ser accsible usando HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : Si este parámetro opcional está especificado, la regla aplica para todos los subdominios del sitio.
- `preload` {{optional_inline}}
  - : Ver [Precargando Strict Transport Security](#precargando_strict_transport_security) para mas detalles. No es parte de la especificación.

## Descripción

Si un sitio web acepta una conexión a través de HTTP y redirecciona a HTTPS, el usuario en este caso podría inicialmente hablar a la versión no encriptada del sitio antes de ser redireccionado, si por ejemplo el usuario tipea `http://www.foo.com/` o incluso solo foo.com.

Esto habilita el potencial ataque man-in-the-middle, donde el redireccionamiento podría ser aprovechado para enviar al usuario a un sitio malicioso en lugar de la versión segura de la página original.

El encabezado HTTP Strict Transport Security permite a un sitio web informar al navegador que nunca cargue el sitio usando HTTP y que debe automáticamente convertir todos los intentos de acceso HTTP a HTTPS.

> **Nota:** El encabezado `Strict-Transport-Security` es **ignorado** por el navegador cuando el sitio es accedido usando HTTP; esto es porque un atacante podría interceptar las conexines HTTP e inyectar el encabezado o removerlo. Cuando el sitio es accedido a través de HTTPS con un certificado sin errores, el navegador sabe que el sitio es capaz de usar HTTPS y cumple con lo indicado en el encabezado `Strict-Transport-Security`.

### Un escenario de ejemplo

Tu ingresas a una red WiFi libre en un areopuerto y empiezas a nevegar por el internet visitando tu servicio de banca en linea para revisar tu estado de cuenta y pagar algunas cuentas. Desafortunadamente, el punto de acceso que estás usando es actualmente un computador portátil de un hacker. Ellos están interceptando todas tus solicitudes originales HTTP y redireccionando a un clone del sitio de tu banco en lugar del sitio real. Ahora tus datos privados están expuestos al hacker.

Strict Transport Security resuelve este problema; siempre que hayas ingresado al sitio de tu banco una vez usando HTTPS y el sitio del banco use Strict Transport Security. Tu navegador sabe que debe usar HTTPS, lo cual previene el hacker realizar este tipo de ataque.

### Como el navegador lo maneja

La primera vez que accediste al sitio usando HTTPS y este retornó el encabezado `Strict-Transport-Security`, el navegador registra esta información, de tal manera que en futuros intentos para cargar el sitio usando HTTP va a usar en su lugar HTTPS automáticamente.``

Cuando el tiempo de expiración especificado por el encabezado Strict-Transport-Security haya pasado, el siguiente intento de cargar el sitio a través de HTTP se va a procesar de forma normal.

En cualquier momento que el encabezado Strict-Transport-Security sea entregado el navegador, este actualiza el tiempo de expiración para el sitio, así los sitios pueden refrescar su información y prevenir el tiempo de expiración. Para deshabilitarlo sería necesario configurar max-age a 0 sobre una conexión HTTPS, entonces automáticamente expira el encabezado Strict-Transport-Security permitiendo acceso vía HTTP.

## Precargando Strict Transport Security

Google mantiene un [servicio de precarga HSTS](https://hstspreload.appspot.com/). Siguiendo la siguiente guía y enviando un dominio válido, los navegadores nunca se conectarán a utu dominio usando una conexión insegura. Mientras el servicio esté sobre Google, todos los navegadores tienen determinado intentar usar la lista precargada.

- Información de lista precargada HSTS en Chrome: <https://www.chromium.org/hsts>
- Consulta de lista precargada de Firefox: [nsSTSPreloadList.inc](https://dxr.mozilla.org/comm-central/source/mozilla/security/manager/ssl/nsSTSPreloadList.inc)

## Ejemplos

Todos los presentes y futuros subdominios usarán HTTPS durante 1 año.

This blocks access to pages or sub domains that can only be served over HTTP.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

{{Compat}}

## Ver también

- Blog post: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia: [HTTP Strict Transport Security](http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
