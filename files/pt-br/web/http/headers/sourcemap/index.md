---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
translation_of: Web/HTTP/Headers/SourceMap
---
{{HTTPSidebar}}

The **`SourceMap`** [HTTP](/pt-BR/docs/Web/HTTP) response header links generated code to a [source map](/pt-BR/docs/Tools/Debugger/How_to/Use_a_source_map), enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Diretivas

- `<url>`
  - : A relative (to the request URL) or absolute URL pointing to a source map file.

## Exemplos

```
SourceMap: /path/to/file.js.map
```

## Especificações

| Especificação                                                                                     | Titulo                         |
| ------------------------------------------------------------------------------------------------- | ------------------------------ |
| [Draft document](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k) | Source Map Revision 3 Proposal |

## Compatibilidade com navegadores

{{Compat("http.headers.SourceMap")}}

## Veja Também

- [Firefox Developer Tools: using a source map](/pt-BR/docs/Tools/Debugger/How_to/Use_a_source_map)
