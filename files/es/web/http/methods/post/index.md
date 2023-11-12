---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

El **método HTTP `POST`** envía datos al servidor. El tipo del cuerpo de la solicitud es indicada por la cabecera {{HTTPHeader("Content-Type")}}.

La diferencia entre `PUT` y {{HTTPMethod("POST")}} es que `PUT` es idempotente: llamarlo una o varias veces sucesivamente tiene el mismo efecto (no tiene efecto secundario // colateral), mientras que varios `POST` idénticos pueden tener efectos adicionales, como pasar una orden muchas veces.

Una solicitud `POST` es tipicamente enviada por un [formulario HTML](/es/docs/Web/Guide/HTML/Forms) y resulta en un cambio en el servidor. En este caso, el tipo de contenido es seleccionado poniendo la cadena de texto adecuada en el atributo [`enctype`](/es/docs/Web/HTML/Element/form#enctype) del elemento {{HTMLElement("form")}} o el atributo [`formenctype`](/es/docs/Web/HTML/Element/input#formenctype) de los elementos {{HTMLElement("input") }} o {{HTMLElement("button")}} :

- `application/`_`x-www-form-urlencoded`: Los valores son codificados en tuplas llave-valor separadas por `'&'`, con un `'='` entre la llave y el valor. Caracteres no-Alfanumericos en ambas (llaves, valores) son {{glossary("percent encoded")}}: Esta es la razón por la cual este tipo no es adecuado para usarse con datos binarios (use `multipart/form-data` en su lugar)_
- `multipart/form-data`_: Cada valor es enviado como un dato de bloque ("input de un formulario"), con un delimitador como separador definido por el usuario ("espacio entre campos"). Éstas llaves son colocadas en el Content-Disposition , la cual es cómo está estructurada cada parte del HEADER en una petición HTTP_
- _`text/plain`_

Cuando la solicitud `POST` es enviada por otro método distinto a un formulario HTML — por ejemplo mediante una {{domxref("XMLHttpRequest")}} — el cuerpo puede aceptar cualquier tipo. Como se describe en la especificación HTTP 1.1, el método `POST` está diseñado para permitir un método uniforme que cubra las siguientes funciones:

- Modificación de recursos existentes.
- Publicar un mensaje en un tablón de anuncios, grupo de noticias, lista de correos, o grupos similares de artículos;
- Agregar un nuevo usuario a través de un modal de suscripciones;
- Proveer un conjunto de datos, como resultado del envío de un formulario, a un proceso data-handling.
- Extender una base de datos a través de una operación de concatenación.

| Pedir como cuerpo                                        | Sí                                |
| -------------------------------------------------------- | --------------------------------- |
| Respuesta válida como cuerpo                             | Sí                                |
| {{Glossary("Seguro")}}                                   | No                                |
| {{Glossary("Idempotente")}}                              | No                                |
| {{Glossary("Cacheable")}}                                | Sólo si incluye nueva información |
| Permitido en [HTML forms](/es/docs/Web/Guide/HTML/Forms) | Sí                                |

## Sintaxis

```
POST /index.html
```

## Ejemplo

Un formulario simple empleando el tipo de contenido por defecto `application/x-www-form-urlencoded`:

```http
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Un formulario usando el tipo de contenido `multipart/form-data`:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
