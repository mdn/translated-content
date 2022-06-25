---
title: Vary
slug: Web/HTTP/Headers/Vary
tags:
- HTTP
- Reference
- Response
- Response Header
- header
  browser-compat: http.headers.Vary
---
{{HTTPSidebar}}

El encabezado de respuesta HTTP **`Vary`** describe las partes del mensaje de solicitud
además del método y la URL que influyeron en el contenido de la respuesta
en la que se produce. La mayoría de las veces, esto se usa para crear una clave de caché
cuando se usa la [negociación de contenido](/en-US/docs/Web/HTTP/Content_negotiation).

Se debe usar el mismo valor de encabezado `Vary` en todas las respuestas para una URL determinada, incluidas las respuestas {{HTTPStatus("304")}} `Not Modified` y la respuesta "default".

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directivas

- \*
    - : Indica que factores distintos a los encabezados de solicitud influyeron en la generación de esta respuesta. Implica que la respuesta no se puede almacenar en caché.
- \<nombre-de-cabecera>
    - : Una lista separada por comas de nombres de encabezados de solicitudes que podrían haber influido en la generación de esta respuesta.
## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

### Notas sobre la compatibilidad

- [Vary with care – Vary header problems in IE6-9](https://docs.microsoft.com/es-es/archive/blogs/ieinternals/vary-with-care)

## Ver también

- [Entendiendo el encabezado Vary - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Buenas prácticas en el uso del encabezado Vary – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Negociación de contenido](/en-US/docs/Web/HTTP/Content_negotiation)
