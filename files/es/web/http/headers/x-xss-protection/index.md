---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
---

{{HTTPSidebar}}

El encabezado de respuesta HTTP **`X-XSS-Protection`** es una característica de Internet Explorer, Chrome y Safari que impide la carga de una página cuando detecta ataques del tipo Cross-Site ({{Glossary("XSS")}}). Esta protección ya no es necesaria en los navegadores modernos cuando el sitio implementa una fuerte {{HTTPHeader("Content-Security-Policy")}} que deshabilita el uso de Javascript inline (`'unsafe-inline'`). Sin embargo da protección a los usuarios de navegadores más antiguos que no soportan {{Glossary("CSP")}}

| Tipo de encabezado                             | {{Glossary("Response header")}} |
| ---------------------------------------------- | ------------------------------- |
| {{Glossary("Nombre de encabezado prohibido")}} | no                              |

## Sintaxis

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : Desativa el filtro XSS.
- 1
  - : Habilita el filtro XSS (generalmente está predeterminado en los navegadores). En caso de detección de un ataque cross-site scripting, el navegador sanitizará a página (eliminará las partes inseguras).
- 1; mode=block
  - : Habilita el filtrado XSS. En vez de sanitizar la página, el navegador evitará la visualización de la página en caso de que algún ataque sea detectado.
- 1; report=\<reporting-URI> (Chromium solamente)
  - : Habilita el filtro XSS. En caso de que algún ataque de cross-site scripting sea detectado, el navegador sanitizará la página e informará sobre la infracción. Utiliza la funcionalidad de la directiva CSP {{CSP("report-uri")}} para enviar um reporte.

## Ejemplo

Bloquea las páginas en las que se detecta un ataque XSS:

```bash
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Especificaciones

No forma parte de ninguna especificación o borrador.

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](http://blog.innerht.ml/the-misunderstood-x-xss-protection/)
