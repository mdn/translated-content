---
title: Pragma
slug: Web/HTTP/Headers/Pragma
---

{{HTTPSidebar}}

El **`Pragma`** encabezado general HTTP / 1.0 es un encabezado específico de la implementación que puede tener varios efectos a lo largo de la cadena de solicitud-respuesta. Se utiliza para la compatibilidad con versiones anteriores de las memorias caché HTTP / 1.0 en las que el `Cache-Control` encabezado HTTP / 1.1 aún no está presente.

> **Nota:** `Pragma` no se especifica para las respuestas HTTP y, por lo tanto, no es un reemplazo confiable para el `Cache-Control` encabezado HTTP / 1.1 general , aunque se comporta de la misma manera que `Cache-Control: no-cache`, si el `Cache-Control` campo del encabezado se omite en una solicitud. Utilice `Pragma`solo para compatibilidad con versiones anteriores con clientes HTTP / 1.0.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de encabezado</th>
      <td>
        {{Glossary("General header")}}, pero el comportamiento de
        respuesta no se especifica y, por lo tanto, es específico de la
        implementación.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>si</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Pragma: no-cache
```

## Directiva

- no-cache
  - : Igual que `Cache-Control: no-cache`. Hace que las cachés envíen la solicitud al servidor de origen para su validación antes de liberar una copia en caché.

## Ejemplos

```
Pragma: no-cache
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
