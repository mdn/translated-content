---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
---

{{HTTPSidebar}}

O erro HTTP **`415 Unsupported Media Type`** do cliente indica que o servidor se recusou a aceitar a requisição porque o formato do payload não é um formato suportado.

O problema do formato por ter ocorrido pelos valores indicados no {{HTTPHeader("Content-Type")}} ou {{HTTPHeader("Content-Encoding")}}, ou pelo resultado da inspeção do dado em si.

## Status

```
415 Unsupported Media Type
```

## Especificações

| Especificações                                           | Título                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja também

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
