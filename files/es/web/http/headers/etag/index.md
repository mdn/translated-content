---
title: ETag
slug: Web/HTTP/Headers/ETag
---

{{HTTPSidebar}}

El encabezado de respuesta de HTTP **`ETag`** es un identificador para una versión específica de un recurso. Permite a la memoria caché ser más eficiente, y ahorrar ancho de banda, en tanto que un servidor web no necesita enviar una respuesta completa si el contenido no ha cambiado. Por otro lado, si el contenido cambió, los etags son útiles para ayudar a prevenir actualizaciones simultáneas de un recurso de sobre-escribirlo por otro ("colisiones en el aire").

Si el recurso en una URL dada cambia, un valor Etag debe ser generado. De esta forma los Etags son muy similares a las huellas digitales y pueden también usarse para propósitos de rastreo por algunos servidores. Un comparativo de ellos permite rápidamente determinar cuándo dos representaciones de un recurso son las mismas, pero podrían también configurarse para persistir indefinidamente por un servidor en rastreo.

| Tipo de Encabezado                    | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
ETag: W/"<valor_etag>"
ETag: "<valor_etag>"
```

## Directivas

- `W/` {{optional_inline}}
  - : `'W/'` (sensible a mayúsculas) indica que se usa un [validador débil](/es/docs/Web/HTTP/Conditional_requests#Weak_validation). Los validadores débiles son fáciles de generar pero son menos útiles para realizar comparativos. Los validadores fuertes son ideales para realizar comparativos pero pueden ser muy difíciles de generar de forma eficiente. Los valores Etag débiles de dos representaciones de los mismos recursos podrían ser semánticamente equivalentes, pero no idénticos byte por byte. Esto significa que los Etag débiles previenen el almacenamiento en caché cuando el [range request por byte](/es/docs/Web/HTTP/Headers/Accept-Ranges) es usado, a su vez los Etag fuertes permiten que los range request puedan utilizar el almacenamiendo en caché.
- "\<valor_etag>"
  - : Las Etiquetas de Entidad (ETags) representan de forma única a los recursos. Son una cadena de caracteres ASCII puestas entre comillas dobles (Como `"675af34563dc-tr34"`). El método por el cual se generan los valores `ETag` no está especificado. Muchas veces, se usa una etiqueda del contenido, una etiqueta de la fecha y hora de la última modificación, o sólo una revisión. Por ejemplo, MDN usa una etiqueda de dígitos hexadecimales para el contenido wiki.

## Ejemplos

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Evitando las colisiones en el aire

Con la ayuda del `ETag` y los encabezados {{HTTPHeader("If-Match")}} se puede ser capaz de detectar las colisiones de edición en el aire.

Por ejemplo cuando se edita MDN, el contenido wiki actual es etiquetado y puesto en un `Etag` en la respuesta:

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Cuando se guarda los cambios de una página a una página wiki (datos posteados), la petición {{HTTPMethod("POST")}} contendrá el encabezado que contiene los valores `ETag` para revisar la frescura entre ellas.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Si las etiquetas no concuerdan, significa que el documento ha sido editado de por sí y se lanza un error {{HTTPStatus("412")}} `Precondition Failed`.

### Caching de los recursos invariados

Otro caso típico del uso del encabezado `ETag` es el cacheo de recursos que no han variado. Si un usuario visita una URL dada nuevamente (la que tiene un conjunto `ETag`), y está _viciado_, es decir que es muy viejo para considerarlo usable, el cliente enviará el valor de su `ETag` a través de un campo de encabezado {{HTTPHeader("If-None-Match")}}:

```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

El servidor compara el `ETag` del cliente (enviado con un `If-None-Match`) con el `ETag` para su versión actual del recurso y si ambos valores concuerdan (esto es, el recurso no ha cambiado), el servidor envió un estado {{HTTPStatus("304")}} `Not Modified`, sin ningún cuerpo, lo cual le dice al cliente que la versión cacheada de la respuesta todavía es buena para usar (_refrescar_).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
