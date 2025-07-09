---
title: Accept
slug: Web/HTTP/Reference/Headers/Accept
original_slug: Web/HTTP/Headers/Accept
---

`La cabecera de pedido Accept` anuncia que tipo de contenido el cliente puede procesar, expresado como un tipo [MIME](/es/docs/Web/HTTP/Guides/MIME_types). Usando [negociación de contenido](/es/docs/Web/HTTP/Content_negotiation), el servidor selecciona una de las propuestas , la utiliza e informa al cliente de la elección a través de la cabecera de respuesta {{HTTPHeader("Content-Type")}} .

Los navegadores configuran los valores adecuados en dependencia del contexto donde se ha hecho el pedido, por ejemplo: al solicitar una hoja de estilos CSS es configurado un valor diferente que cuando se solicita una imagen, un video o un script.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de Cabecera</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>si</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiples tipos, priorizados con {{glossary("quality values", "quality value")}} sintaxis:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Directivas

- `<MIME_type>/<MIME_subtype>`
  - : Un único y preciso tipo [MIME](/es/docs/Web/HTTP/Guides/MIME_types), como `text/html`.
- `<MIME_type>/*`
  - : Un tipo MIME, pero con cualquier subtipo.
    Por ejmplo, image/\* comincide con:
    - image/png
    - image/svg
    - image/gif

- `*/*`
  - : Culaquier tipo MIME
- `;q=` (donde _q_ es la importancia o peso)
  - : Culaquier valor es colocado en orden de preferencia, expresada usando un [valor de calidad](/es/docs/Glossary/Quality_values) llamado _weight_ (_peso_ en español).

## Ejemplos

```
Accept: text/html

Accept: image/*

Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Tambien Ver

- [Negociación de Contenido HTTP](/es/docs/Web/HTTP/Content_negotiation)
- Cabecera con el resultado de la negociación de contenido: {{HTTPHeader("Content-Type")}}
- Otras cabeceras similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
