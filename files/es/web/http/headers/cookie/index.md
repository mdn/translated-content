---
title: Cookie
slug: Web/HTTP/Headers/Cookie
---

{{HTTPSidebar}}

El encabezado **`Cookie`** de una solicitud HTTP contiene [cookies HTTP](/es/docs/Web/HTTP/Cookies) almacenadas y enviadas previamente por el servidor con el encabezado (**`header`**) {{HTTPHeader("Set-Cookie")}}

Los encabezados `Cookie` puede ser omitidos por completo, si las preferencias de privacidad del navegador están configuradas para bloquearlos, por ejemplo.

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## Sintaxis

```
Cookie: <cookie-lista>
Cookie: nombre=valor
Cookie: nombre=valor; nombre2=valor2...nombreN=valorN;
```

- \<cookie-lista>
  - : Una lista de pares `nombre:valor` definidos como `<nombre-de-cookie>=<valor-de-cookie>`. Los pares en la lista son separados por un punto y coma seguido de un espacio `('; ')`.

## Ejemplos

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
