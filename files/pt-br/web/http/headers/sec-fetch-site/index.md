---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
translation_of: Web/HTTP/Headers/Sec-Fetch-Site
---
{{HTTPSidebar}}

O cabeçalho de busca de metadados **`Sec-Fetch-Site`** indica a relação entre a origem do iniciador da requisição e a origem do recurso.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes, since it has prefix <code>Sec-</code></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td></td>
    </tr>
  </tbody>
</table>

## Syntax

```
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## Values

- `cross-site`
  - : …
- `same-origin`
  - : …
- `same-site`
  - : …
- `none`
  - : This request does not relate to any context like site, origin, or frame. This can happen when user had initiated this request by, e.g. directly entering a URL in the address bar, opening a bookmark, or draging-and-dropping a file into the browser window.

## Examples

TODO

## Specifications

| Specification                                                                                           | Title                                  |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [Fetch Metadata Request Headers](https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-site-header) | The Sec-Fetch-Site HTTP Request Header |

## Compatibilidade com navegadores

{{Compat("http.headers.Sec-Fetch-Site")}}

## See also

- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}
