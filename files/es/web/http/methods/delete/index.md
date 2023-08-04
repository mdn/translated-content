---
title: DELETE
slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

El **método de solicitud HTTP `DELETE`** elimina el recurso especificado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Petición con cuerpo</th>
      <td>Puede</td>
    </tr>
    <tr>
      <th scope="row">Respuesta válida con cuerpo</th>
      <td>Puede</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Seguro")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","Idempotente")}}</th>
      <td>Si</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","Se puede almacenar en Cache")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido en <a href="/es/docs/Learn/Forms">formularios HTML</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```http
DELETE /file.html HTTP/1.1
```

## Ejemplo

### Petición

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

### Respuestas

Si se aplica correctamente el método `DELETE`, hay varios códigos de estado de respuesta posibles:

- Un código de estado {{HTTPStatus("202")}} (`Accepted`) si la acción ha sido
  exitosa pero aún no se ha ejecutado.
- Un código de estado {{HTTPStatus("204")}} (`No Content`) si la acción se ha
  ejecutado y no se debe proporcionar más información.
- Un código de estado {{HTTPStatus("200")}} (`OK`) si la acción se ha ejecutado
  y el mensaje de respuesta incluye una representación que describe el estado.

```http
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>Archivo eliminado.</h1>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Estado HTTP: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
