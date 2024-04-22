---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
---

{{HTTPSidebar}}

O código de resposta HTTP **`429 Too Many Requests`** indica que o usuário enviou muitos pedidos em um determinado período de tempo.

Um header {{HTTPHeader("Retry-After")}} pode ser incluído na resposta indicando quanto tempo o usuário deve esperar antes de fazer um novo pedido.

## Status

```
429 Too Many Requests
```

## Exemplo

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## Especificações

| Especificações                                 | Título                 |
| ---------------------------------------------- | ---------------------- |
| {{RFC("6585", "429 Too Many Requests" , "4")}} | Status HTTP adicionais |

## Veja também

- {{HTTPHeader("Retry-After")}}
