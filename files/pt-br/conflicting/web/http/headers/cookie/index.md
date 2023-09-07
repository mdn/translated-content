---
title: Cookie2
slug: conflicting/Web/HTTP/Headers/Cookie
---

{{HTTPSidebar}}

O obsoleto cabeçalho de requisição HTTP **`Cookie2`** costumava aconselhar o servidor que o agente de usuário entende _cookies_ de "novo estilo", mas atualmente os agentes de usuário vão usar o cabeçalho {{HTTPHeader("Cookie")}} ao invés disso, não este.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Exemplos

```
Cookie2: $Version="1"
```

## Especificações

| Especificação                        | Título                                                                                         |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| {{RFC("2965", "Cookie2")}} | Especificação histórica do HTTP State Management Mechanism, obsoleta pela {{RFC("6265")}} |

## Compatibilidade com navegadores

{{Compat("http.headers.Cookie2")}}

## Veja também

- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
