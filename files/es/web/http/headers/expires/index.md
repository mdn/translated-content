---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}

El encabezado **`Expires`** contiene la fecha y hora en la que se considerará la respuesta caducada.

Fechas inválidas, como el valor 0, representan una fecha en el pasado, esto significa que el recurso ya ha expirado.

Si existe un encabezado {{HTTPHeader("Cache-Control")}} con la directiva "max-age" o "s-max-age" en la respuesta, el encabezado `Expires` será ignorado.

| Encabezado                                                                | {{Glossary("Response header")}} |
| ------------------------------------------------------------------------- | ------------------------------- |
| {{Glossary("Nombre de encabezado Prohibido")}}                            | no                              |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | si                              |

## Sintaxis

```
Expires: <http-date>
```

## Directivas

- \<http-date>
  - : Una estampa de tiempo HTTP.

## Ejemplo

```
Expires: Jue, 21 Oct 2017 07:28:00 GMT
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
