---
title: Set-Cookie2
slug: conflicting/Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

O obsoleto cabeçalho de resposta HTTP **`Set-Cookie2`** usado para enviar _cookies_ do servidor para o agente de usuário, mas ele foi depreciado por especificação. Use {{HTTPHeader("Set-Cookie")}} ao invés disso.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Set-Cookie2: <cookie-name>=<cookie-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Comment=<value>
Set-Cookie2: <cookie-name>=<cookie-value>; CommentURL=<http-url>
Set-Cookie2: <cookie-name>=<cookie-value>; Discard
Set-Cookie2: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie2: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Port=<port-number>
Set-Cookie2: <cookie-name>=<cookie-value>; Secure
Set-Cookie2: <cookie-name>=<cookie-value>; Version=<version-number>

// Múltiplas diretivas também são possíveis, por exemplo:
Set-Cookie2: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure

// Múltiplos cookies são separados por vírgula
Set-Cookie2: <cookie-name>=<cookie-value>, <cookie-name>=<cookie-value>, ...
```

## Especificações

| Especificação                            | Título                                                                                                                                                                                                      |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{RFC("2965", "Set-Cookie2")}} | Especificação histórica do Mecanismo de Gerenciamento de Estado do HTTP, obsoleto por {{RFC("6265")}} (_Historic specification of HTTP State Management Mechanism, obsoleted by_ {{RFC("6265")}}) |

## Compatibilidade com navegadores

{{Compat("http.headers.Set-Cookie2")}}

## Veja também

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
