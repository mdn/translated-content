---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}

O código de resposta HTTP **`413 Payload Too Large`** indica que a carga da requisição é mais larga que os limites estabelecidos pelo servidor; o servidor pode encerrar a conexão ou retornar {{HTTPHeader("Retry-After")}} no campo de cabeçalho.

## Status

```
413 Payload Too Large
```

## Especificações

| Specification                                       | Title                                                        |
| --------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1):Semânticas e Conteúdo |

## Veja também

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
