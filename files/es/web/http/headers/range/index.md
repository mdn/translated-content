---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

La cabecera de petición HTTP, **`Range`**, indica qué parte de un documento debe devolver el servidor. Varias partes pueden ser solicitadas con una sola cabecera `Range` a la vez, y el servidor puede enviar estas partes en un documento multipartes. Si el servidor devuelve rangos, utiliza {{HTTPStatus("206", "206 Contenido Parcial")}}. Si los rangos son inválidos, el servidor devuelve el error {{HTTPStatus("416", "416 No se puede satisfacer Range")}}. El servidor también puede ignorar el encabezado de Rango y devolver el documento completo con un código de estado {{HTTPStatus("200")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>{{Glossary("Request header", "Encabezado de petición")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Nombre de header prohibido")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintáxis

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## Directivas

- \<unit>
  - : La unidad en la cual los rangos son especificados. Usualmente son `bytes`.
- \<range-start>
  - : Un número entero correspondiente a las unidades especificadas, indicando el principio del rango requerido.
- \<range-end>
  - : Un número entero correspondiente a las unidades especificadas, indicando el final del range requerido. Este valor es opcional, si es omitido el final del documento es considerando como el final del rango.
- \<suffix-length>
  - : Un número entero correspondiente a las unidades especificadas indicando el número de unidades al final del archivo devuelto.

## Ejemplos

Solicitando tres rangos de un archivo.

```http
Range: bytes=200-1000, 2000-6576, 19000-
```

El valor, `19000-`, del tercer rango especificado, indica que `19000` es la primera posición y omite la última posición `-`, para recuperar todos los bytes desde 19000 hasta el final del archivo.

Solicitar los primeros y últimos 500 bytes de un archivo. La petición puede ser rechazada por el servidor si los rangos se superponen.

```http
Range: bytes=0-499, -500
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
