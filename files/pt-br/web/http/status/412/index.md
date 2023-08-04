---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
---

{{HTTPSidebar}}

O código de resposta de erro de cliente HTTP **`412 Precondition Failed`** indica que o acesso ao recurso especificado foi negado. Isso acontece com requisições condicionais em métodos que não {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} quando a condição definida pelo cabeçalho {{HTTPHeader("If-Unmodified-Since")}} ou {{HTTPHeader("If-None-Match")}} não é satisfeita. Nesse caso, a requisição, geralmente um upload ou modificação de um recurso, não pode ser feita e o código de error de resposta é enviado de volta.

## Status

```
412 Precondition Failed
```

## Especificações

| Especificação                                      | Título                                                       |
| -------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "412 Precondition Failed" , "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

A informação abaixo foi retirada do GitHub da MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.412")}}

## Veja também

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
