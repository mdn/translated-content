---
title: Cacheable
slug: Glossary/Cacheable
---

{{GlossarySidebar}}

Una respuesta **_cacheable_** es una respuesta HTTP que se puede almacenar en caché, que se almacena para recuperarla y usarla más tarde, guardando una nueva solicitud en el servidor. No todas las respuestas HTTP se pueden almacenar en caché, estas son las siguientes restricciones para que una respuesta HTTP se almacene en caché:

- El método utilizado en la solicitud se puede almacenar en caché, es decir, un método {{HTTPMethod("GET")}} o {{HTTPMethod("HEAD")}}. Una respuesta a una solicitud {{HTTPMethod("POST")}} o {{HTTPMethod("PATCH")}} también se puede almacenar en caché si se indica frescura y el encabezado {{HTTPHeader("Content-Location")}} es establecido, pero esto rara vez se implementa. (Por ejemplo, Firefox no lo admite según <https://bugzilla.mozilla.org/show_bug.cgi?id=109553>.) Otros métodos, como {{HTTPMethod("PUT")}} o {{HTTPMethod("DELETE")}} no se pueden almacenar en caché y su resultado no se puede almacenar en caché.
- El código de estado de la respuesta es conocido por el almacenamiento en caché de la aplicación, y se considera almacenable en caché. El siguiente código de estado se puede almacenar en caché: {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}} , {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}} y {{HTTPStatus("501")}}.
- No hay encabezados específicos en la respuesta, como {{HTTPHeader("Cache-Control")}}, que impide el almacenamiento en caché.

Tenga en cuenta que algunas solicitudes / respuestas no almacenables en caché a un URI específico pueden invalidar las respuestas almacenadas previamente en caché en el mismo URI. Por ejemplo, un {{HTTPMethod("PUT")}} a pageX.html invalidará todas las solicitudes {{HTTPMethod("GET")}} o {{HTTPMethod("HEAD")}} en caché al mismo URI.

Cuando ambos, el método de la solicitud y el estado de la respuesta, se pueden almacenar en caché, la respuesta a la solicitud se puede almacenar en caché:

```
GET /pageX.html HTTP / 1.1
(...)

200 OK
(...)
```

Una solicitud {{HTTPMethod("PUT")}} no se puede almacenar en caché. Además, invalida los datos en caché para solicitarlos al mismo URI realizado a través de {{HTTPMethod("HEAD")}} o {{HTTPMethod("GET")}}:

```
PUT /pageX.html HTTP / 1.1
(...)

200 OK
(...)
```

Un encabezado específico {{HTTPHeader("Cache-Control")}} en la respuesta puede evitar el almacenamiento en caché:

```
GET /pageX.html HTTP / 1.1
(...)

200 OK
Control de caché: sin caché
(...)
```
