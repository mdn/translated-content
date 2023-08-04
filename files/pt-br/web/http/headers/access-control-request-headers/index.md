---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
---

{{HTTPSidebar}}

O cabeçalho da solicitação **`Access-Control-Request-Headers`** é usado ao emitir um {{glossary("preflight request")}} para permitir que o servidor saiba quais cabeçalhos HTTP serão usados quando a solicitação real for feita.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Access-Control-Request-Headers: <header-name>, <header-name>, ...
```

## Diretivas

- \<header-name>
  - : Uma lista delimitada por vírgula [HTTP headers](/pt-BR/docs/Web/HTTP/Headers) incluídos na solicitação.

## Exemplos

```
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## Especificações

| Specification                                                                                  | Status             | Comment            |
| ---------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| {{SpecName('Fetch','#http-access-control-request-headers', 'Access-Control-Request-Headers')}} | {{Spec2("Fetch")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Request-Headers")}}

## Veja também

- {{HTTPHeader("Access-Control-Request-Method")}}
