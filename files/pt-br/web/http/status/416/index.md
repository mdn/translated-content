---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
---

{{HTTPSidebar}}

O código de erro de resposta HTTP **`416 Range Not Satisfiable`** indica que o servidor não pode servir as sequências solicitadas. A razão mais provável é que o documento não contenha tais sequências, ou que o valor do cabeçalho {{HTTPHeader("Range")}}, apesar de sintaticamente correto, não faça sentido.

A mensagem de resposta `416` contém um cabeçalho {{HTTPHeader("Content-Range")}} indicando uma sequência insatisfatória (que é um `'*'`) seguido por uma `'/'` e o tamanho atual do recurso. E.g. `Content-Range: bytes */12777`

Observando este erro, os navegadores geralmente, ou abortam a operação (por exemplo, o download será considerado não recuperável) ou requisitar o documento inteiro novamente.

## Status

```
416 Range Not Satisfiable
```

## Especificações

| Especificação                                          | Título                                                 |
| ------------------------------------------------------ | ------------------------------------------------------ |
| {{RFC("7233", "416 Request Not Satisfiable" , "4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

A informação abaixo foi buscada do GitHub da MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.416")}}

## Veja também

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
