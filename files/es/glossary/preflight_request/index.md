---
title: Preflight petición
slug: Glossary/Preflight_request
---

Una petición preflight CORS es una petición [CORS](/es/docs/Glossary/CORS) realizada para comprobar si el protocolo {{Glossary("CORS")}} es comprendido.

Es una petición {{HTTPMethod("OPTIONS")}}, que emplea tres cabeceras HTTP: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, y la cabecera {{HTTPHeader("Origin")}} .

Las peticiones preflight se lanzan automáticamente desde el navegador cuando son necesarias. Normalmente los desarrolladores front-end no necesitan realizar estas peticiones manualmente.

Por ejemplo, un cliente puede preguntar si el servidor permite una petición {{HTTPMethod("DELETE")}} antes de enviar la petición `DELETE` usando una petición preflight:

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

Si el servidor lo permite responderá a la petición preflight con una cabecera de respuesta {{HTTPHeader("Access-Control-Allow-Methods")}} que incluirá el método `DELETE`:

```
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

## See also

- [CORS](/es/docs/Glossary/CORS)
- {{HTTPMethod("OPTIONS")}}
