---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
---

{{HTTPSidebar}}

O código de resposta de erro de servidor **`503 Service Unavailable`** do HTTP indica que o servidor não está pronto para lidar com a requisição.

Causas comuns são um servidor que está em manutenção ou sobrecarregado. Esta resposta deve ser usada para condições temporárias, e o cabeçalho HTTP {{HTTPHeader("Retry-After")}} deve, se possível, conter o tempo estimado para restabelecimento do serviço.

> **Nota:** Juntamente com esta resposta deve ser enviada uma página de fácil compreensão para explicar o problema.

Os cabeçalhos relativos ao armazenamento em cache que são enviados juntamente com esta resposta devem ser atendidos, pois um status 503 geralmente é uma condição temporária e tal resposta não deve ser armazenada em cache.

## Status

```
503 Service Unavailable
```

## Especificações

| Especificação                                        | Título                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "503 Service Unavailable" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

A informação mostrada acima está sendo servida do MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.503")}}

## Veja também

- {{HTTPHeader("Retry-After")}}
- [503 Service Unavailable](https://www.exai.com/blog/503-service-unavailable)
