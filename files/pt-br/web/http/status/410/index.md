---
title: 410 Gone
slug: Web/HTTP/Status/410
---

{{HTTPSidebar}}

O código de resposta HTTP **`410 Gone`** de erro do cliente indica que o acesso ao recurso não está mais disponível no servidor de origem, e que esta condição tende a ser permanente.

Se você não sabe se a ausência do recurso é temporária ou permanente, o código de status {{HTTPStatus(404)}} deverá ser utilizado.

> **Nota:**Uma resposta 410 response é armazenada em cache por default.

## Status

```
410 Gone
```

## Especificações

| Especificação                         | Título                                                        |
| ------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "410 Gone" , "6.5.9")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

A informação mostrada abaixo está sendo servida do MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.410")}}

## Veja também

- {{HTTPStatus(404)}}
