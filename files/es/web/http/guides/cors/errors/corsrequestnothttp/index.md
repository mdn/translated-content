---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
original_slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

## Razón

```
Reason: CORS request not HTTP
```

## ¿Qué está mal?

{{Glossary("CORS")}} Las peticiones solo pueden usar el esquema de direcciones HTTPS , pero la dirección especificada por la petición es de un tipo diferente. Esto a menudo ocurre si la petición especifica un archivo local, usando una dirección `file:///`.

Para resolver este problema, simplemente asegúrate de usar direciones HTTPS cuando el emisor involucre CORS.

## Ver también

- Errores de CORS
- Glosario: {{Glossary("CORS")}}
- [Introducción a CORS](/es/docs/Web/HTTP/Guides/CORS)
- [¿Qué es una direccion?](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
