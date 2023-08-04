---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
---

{{HTTPSidebar}}

O código de resposta de erro HTTP **`504 Gateway Timeout`** indica que o servidor, enquanto atuando como gateway ou proxy, não conseguiu responder em tempo.

Um [Gateway](https://pt.wikipedia.org/wiki/Gateway) pode referir-se a diferentes elementos de rede e um erro 504 geralmente é algo que você não pode consertar, mas solicitar uma correção no servidor web ou proxy no qual você está tentando acessar.

## Estado

```
504 Gateway Timeout
```

## Especificações

| Especificação                                    | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "504 Gateway Timeout" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.504")}}

## Veja também

- {{HTTPStatus(502)}}
