---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Content-Range`** indica em que lugar uma mensagem parcial pertence em uma mensagem completa no corpo.

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
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## Diretivas

- \<unit>
  - : A unidade nos quais a variação é especificada. Geralmente em `bytes`.
- \<range-start>
  - : Um inteiro na dada unidade indicando o começo da variação da requisitada.
- \<range-end>
  - : Um inteiro na dada unidade indicando o fim da variação requisitada.
- \<size>
  - : O tamanho total do documento (ou `'*'` se desconhecido).

## Exemplos

```
Content-Range: bytes 200-1000/67589
```

## Especificações

| Especificação                           | Título                                                 |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Content-Range", "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Range")}}

## Veja também

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
