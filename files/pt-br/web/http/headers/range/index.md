---
title: Range
slug: Web/HTTP/Headers/Range
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Range`** indica a parte do documento que o servidor deve retornar. Várias partes podem ser requisitadas com um cabeçalho `Range` de uma vez, e o servidor pode mandar de volta estes intervalos em um documento de múltiplas partes. Se o servidor manda de volta os intervalos, ele usa o {{HTTPStatus("206")}} `Partial Content` para resposta. Se os intervalos são inválidos, o servidor retorna o erro {{HTTPStatus("416")}} `Range Not Satisfiable`. O servidor também pode ignorar o cabeçalho `Range` e enviar o documento inteiro com um código de status {{HTTPStatus("200")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## Diretivas

- \<unit>
  - : A unidade no qual os intervalos são especificados. É geralmente em `bytes`.
- \<range-start>
  - : Um inteiro na dada unidade indicando o começo da requisição de intervalo.
- \<range-end>
  - : Um inteiro na dada unidade indicando o fim da requisição de intervalo. Este valor é opcional e, se omitido, o fim do documento é utilizado como fim do intervalo.
- \<suffix-length>
  - : Um inteiro na dada unidade indicando o número de unidades ao fim do arquivo para retornar.

## Exemplos

Requisitando três intervalos deste arquivo.

```
Range: bytes=200-1000, 2000-6576, 19000-
```

Requisitando os primeiros 500 e últimos 500 _bytes_ do arquivo. A requisição pode ser rejeitada pelo servidor se os intervalos se sobrepõem.

```
Range: bytes=0-499, -500
```

## Especificações

| Especificação                   | Título                                                 |
| ------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Range", "3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.Range")}}

## Veja também

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
