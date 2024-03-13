---
title: Seguridad en Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
---

{{FirefoxSidebar}}

[Firefox 2](/es/Firefox_2) tiene tanto SSLv2 como la débil "exportación" de juegos de claves desactivados por defecto, en favor de SSLv3. Esto proporciona mejoras en la seguridad.

Los métodos preferidos de encriptación son `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` y `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Algunos sevidores se refieren a ellos como `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` y `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Si el soporte SSLv2 tuviera que ser activado, puede hacerse cambiando en las preferencias de usuario el valor `security.ssl2.*` deseado a `true`.
