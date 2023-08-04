---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
---

{{HTTPSidebar}}

## Razón

```
Razón: La solicitud CORS no resultó exitosa
```

## ¿Qué salió mal?

El pedido {{Glossary("HTTP")}} que hace uso de CORS falló porque la conexión HTTP falló a nivel red o protocolo. El error no está relacionado directamente con CORS, pero es un error de red fundamental de algún tipo

En muchos casos, es causado por un complemento del navegador (Ej, un bloqueador de anuncios o un protector de privacidad) que bloquea la solicitud.

Otras causas posibles:

- Intentar acceder a un recurso `https` que tenga un certificado no válido, causará este error.
- Intentar acceder a un recurso `http` desde una página con un origen `https` también causará este error.
- A partir de Firefox 68, las páginas `https` no pueden acceder a `http://localhost`, aunque esto puede ser modificado por el [Error 1488740](https://bugzilla.mozilla.org/show_bug.cgi?id=1488740).
- El servidor no respondió a la solicitud actual (incluso si respondió la [solicitud Preflight](/es/docs/Glossary/Preflight_peticion). Un escenario podría ser un servicio HTTP en desarrollo que "entró en pánico" sin devolver ningún dato.

<!---->

## Véase también

- [Errores CORS](/es/docs/Web/HTTP/CORS/Errors)
- Glosario: {{Glossary("CORS")}}
- [Introducción a CORS](/es/docs/Web/HTTP/CORS)
