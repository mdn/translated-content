---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

La cabecera de respuesta **`Access-Control-Allow-Methods`** especifica el método o los métodos aceptados cuando se accede al recurso en respuesta de un {{glossary("preflight request")}}.

| Tipo de cabecera                      | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
Access-Control-Allow-Methods: <method>, <method>, ...
```

## Directivas

- \<método>
  - : Comma-delimited list of the allowed [HTTP request methods](/es/docs/Web/HTTP/Methods).

## Ejemplos

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
