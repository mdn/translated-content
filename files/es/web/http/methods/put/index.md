---
title: PUT
slug: Web/HTTP/Methods/PUT
---

{{HTTPSidebar}}

La **petición HTTP PUT** crea un nuevo elemento o reemplaza una representación del elemento de destino con los datos de la petición.

La diferencia entre el método `PUT` y el método {{HTTPMethod("POST")}} es que `PUT` es un método idempotente: llamarlo una o más veces de forma sucesiva tiene el mismo efecto (sin efectos secundarios), mientras que una sucesión de peticiones `POST` idénticas pueden tener efectos adicionales, como envíar una orden varias veces.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Petición con cuerpo</th>
      <td>Sí</td>
    </tr>
    <tr>
      <th scope="row">Respuesta (correcta) con cuerpo</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Seguro")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido en <a href="/es/docs/Web/Guide/HTML/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
PUT /nuevo.html HTTP/1.1
```

## Ejemplos

### Petición

```
PUT /nuevo.html HTTP/1.1
Host: ejemplo.com
Content-type: text/html
Content-length: 16

<p>Nuevo Archivo</p>
```

### Respuestas

Si el elemento de destino no existe y la petición `PUT` lo crea de forma satisfactoria, entonces el servidor debe informar al usuario enviando una respuesta {{HTTPStatus("201")}} (`Created`) .

```
HTTP/1.1 201 Created
Content-Location: /nuevo.html
```

Si el elemento existe actualmente y es modificado de forma satisfactoria, entonces el servidor de origen debe enviar una respuesta {{HTTPStatus("200")}} (`OK`) o una respuesta {{HTTPStatus("204")}} (`No Content`) para indicar que la modificación del elemento se ha realizado sin problemas.

```
HTTP/1.1 204 No Content
Content-Location: /existente.html
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
