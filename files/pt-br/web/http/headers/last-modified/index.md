---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
---

{{HTTPSidebar}}

A linha de cabeçalho **`Last-Modified`** do cabeçalho de resposta HTTP contém a data e a hora em que o servidor de origem acredita que o recurso foi modificado pela última vez. É usado como um validador para determinar se um recurso recebido ou armazenado é o mesmo. Menos preciso do que um cabeçalho {{HTTPHeader("ETag")}}, é um mecanismo de retorno. Os pedidos condicionais {{HTTPHeader("If-Modified-Since")}} or {{HTTPHeader("If-Unmodified-Since")}} fazem uso deste campo.

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
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case sensitive).
- \<year>
  - : 4 digit year number, e.g. "1990" or "2016".
- \<hour>
  - : 2 digit hour number, e.g. "09" or "23".
- \<minute>
  - : 2 digit minute number, e.g. "04" or "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- `GMT`
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

| Specification                           | Title                                                        |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.Last-Modified")}}

## See also

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
