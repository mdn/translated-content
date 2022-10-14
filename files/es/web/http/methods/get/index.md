---
title: GET
slug: Web/HTTP/Methods/GET
translation_of: Web/HTTP/Methods/GET
---
{{HTTPSidebar}}

El método HTTP **`GET`** solicita una representación del recurso especificado. Las solicitudes que usan **`GET`** solo deben usarse para recuperar datos (no deben incluir datos).

| Petición con cuerpo                  | No  |
| ------------------------------------ | --- |
| Respuesta válida con cuerpo          | Sí  |
| {{Glossary("Seguro")}}         | Sí  |
| {{Glossary("idempotente")}} | Sí  |
| {{Glossary("Cacheable")}}     | Sí  |
| Permitido en HTML forms              | Sí  |

## Sintaxis

```
GET /index.html
```

## Especificaciones

| Especificación                           | Título                                                        |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidad con Navegadores

{{Compat("http.methods.GET")}}

## Ver también

- {{HTTPHeader("Range")}}
