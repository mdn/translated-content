---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
---

{{HTTPSidebar}}

A resposta com status HTTP **`203 Non-Authoritative Information`** indica que a requisição foi realizada com sucesso porém o conteúdo foi modificado por um {{Glossary("Proxy server", "proxy")}} da resposta com status {{HTTPStatus("200")}} (`OK`) do servidor de origem.

A resposta `203` é similar a resposta com cabeçalho de {{HTTPHeader("Warning")}} [`214`](/pt-BR/docs/Web/HTTP/Headers/Warning#Warning_codes), significando `Transformação Aplicada`, o qual tem uma vantagem adicional que pode ser aplicado a respostas com qualquer código de status.

## Status

```
203 Non-Authoritative Information
```

## Specifications

| Specification                                                  | Title                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
