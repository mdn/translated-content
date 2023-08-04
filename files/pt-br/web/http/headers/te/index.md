---
title: TE
slug: Web/HTTP/Headers/TE
---

{{HTTPSidebar}}

O cabeçalho de requisição **`TE`** especifica a codificação de transferência que o agente de usuário está propício a aceitar (você poderia informalmente chamar ele de `Accept-Transfer-Encoding`, o que seria mais intuitivo).

> **Nota:** [Em HTTP/2 - o cabeçalho `TE` somente é aceito se o valor `trailers` é colocado.](https://tools.ietf.org/html/rfc7540#section-8.1.2.2)

Veja também o cabeçalho de resposta {{HTTPHeader("Transfer-Encoding")}} para maiores detalhes sobre codificações de transferência. Note que `chunked` é sempre aceito para receptores HTTP/1.1 e você não precisa especificar `"chunked"` usando o cabeçalho `TE`. Entretanto, ele é útil para configurar se o cliente está aceitando campos de rabeira (_trailer fields_) em uma codificação de transferência fragmentada usando os valores "_trailers_".

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

## Sintaxe

```
TE: compress
TE: deflate
TE: gzip
TE: trailers

// Multiple directives, weighted with the {{glossary("quality values", "quality value")}} syntax:
TE: trailers, deflate;q=0.5
```

## Diretivas

- `compress`
  - : Um formato usando o algoritmo de [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) é aceito como nome de codificação de transferência.
- `deflate`
  - : Usar a estrutura [zlib](http://en.wikipedia.org/wiki/Zlib) é aceito como nome da codificação de transferência.
- `gzip`
  - : Um formato usando a [codificação Lempel-Ziv](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), com um CRC 32-bit é aceito como nome da codificação de transferência.
- `trailers`
  - : Indica que o cliente está sujeito a aceitar campos _trailer_ em uma codificação de transferência fragmentada.
- `q`
  - : Quando múltiplas codificações de transferência são aceitas, o parâmetro `q` da sintaxe de [valor de qualidade](/pt-BR/docs/Glossary/Quality_values) pode elencar codificações por preferência.

## Especificações

| Especificação                | Título                                                             |
| ---------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "TE", "4.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat("http.headers.TE")}}

## Veja também

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Codificação de transferência fragmentada (_Chunked transfer encoding_)](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
