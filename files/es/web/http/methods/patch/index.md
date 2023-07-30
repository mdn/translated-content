---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

El **método HTTP PATCH** aplica modificaciones parciales a un recurso.

El método HTTP PUT únicamente permite reemplazar completamente un documento. A diferencia de `PUT`, el método `PATCH` no es idempotente, esto quiere decir que peticiones identicas sucesivas _pueden_ tener efectos diferentes. Sin embargo, es posible emitir peticiones `PATCH` de tal forma que sean idempotentes.

`PATCH` (al igual que `POST`) _puede_ provocar efectos secundarios a otros recursos.

Para averiguar si un servidor soporta `PATCH`, el servidor puede notificar su compatibilidad al añadirlo a la lista en el header: {{HTTPHeader("Allow")}} o {{HTTPHeader("Access-Control-Allow-Methods")}} (para CORS).

Otra indicación (implícita) de que las peticiones PATCH son permitidas, es la presencia del header: {{HTTPHeader("Accept-Patch")}}, el cual especifica los formatos de documento patch aceptados por el servidor.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Petición con cuerpo</th>
      <td>Sí</td>
    </tr>
    <tr>
      <th scope="row">Respuesta exitosa con cuerto</th>
      <td>Sí</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Seguro")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido en
        <a href="/es/docs/Web/Guide/HTML/Forms">formularios HTML</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
PATCH /file.txt HTTP/1.1
```

## Ejemplo

### Petición

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### Respuesta

Una respuesta exitosa es indicada con un código de respuesta {{HTTPStatus("204")}}, porque la respuesta no tiene mensaje en el body. (el cual tendría una respuesta con el código 200). Tenga en cuenta que también se pueden utilizar otros códigos.

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Especificaciones

| Especificación           | Título                |
| ------------------------ | --------------------- |
| {{RFC("5789", "PATCH")}} | PATCH Method for HTTP |

## Ver también

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – specifies the patch document formats accepted by the server.
