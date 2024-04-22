---
title: 202 Accepted
slug: Web/HTTP/Status/202
---

O código resposta HyperText Transfer Protocol (HTTP) **`202 Accepted`** indica que a requisição foi recebida, mas não pode atuar ainda. Ela é sem compromisso, significando que não há maneira de o HTTP enviar posteriormente uma resposta assíncrona indicando a saída do processamento da requisição. A intenção desta resposta é para os casos onde outro processo ou, ainda, servidor lida com a requisição ou para processamentos _batch._

## Status

```
202 Accepted
```

## Especificações

| Especificação                             | Título                                                        |
| ----------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "202 Accepted" , "6.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja também

- {{HTTPHeader("Accept")}}
