---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
---

{{HTTPSidebar}}

El encabezado HTTP de respuesta **`X-Content-Type-Options`** es un marcador utilizado por el servidor para indicar que los [tipos MIME](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types) anunciados en los encabezados {{HTTPHeader("Content-Type")}} no se deben cambiar ni seguir. Esto permite desactivar el [MIME type sniffing](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing), o, en otras palabras, es una manera de decir que los webmasters sabían lo que estaban haciendo.

Este encabezado fue introducido por Microsoft en IE 8 para que los webmasters bloquearan el rastreo de contenido, pudiendo transformar tipos MIME no ejecutables en tipos MIME ejecutables. Desde entonces, otros navegadores lo han introducido, incluso con algoritmos de detección MIME menos agresivos.

Los evaluadores de seguridad del sitio suelen esperar que este encabezado aparezca.

> **Nota:** `nosniff` solo se aplican a los tipos "`script`" y "`style`". Además la aplicación de `nosniff` a las imágenes resulto ser [incompatible con los sitios web existentes](https://github.com/whatwg/fetch/issues/395).

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
X-Content-Type-Options: nosniff
```

## Directivas

- `nosniff`
  - : Bloquea una solicitud si el tipo solicitado es
    - "`style`" y el tipo MIME no es "`text/css`", o
    - "`script`" y el tipo MIME no es un [JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTTPHeader("Content-Type")}}
- The [original definition](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) of X-Content-Type-Options by Microsoft.
- The [Mozilla Observatory](https://mozilla.github.io/http-observatory-website/) tool testing the configuration (including this header) of Web sites for safety and security
- [Mitigating MIME Confusion Attacks in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
