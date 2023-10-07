---
title: 100 Continue
slug: Web/HTTP/Status/100
---

{{HTTPSidebar}}

O Status HTTP **`100 Continue`** indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado.

Para ter uma verificação pelo servidor o cliente deve enviar o header {{HTTPHeader("Expect")}}: `100-continue` na requisição inicial e receber o status `100 Continue` antes de enviar o body da requisição.

## Status

```
100 Continue
```

## Specifications

| Specification                             | Title                                                         |
| ----------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "100 Continue" , "6.2.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.100")}}

## See also

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
