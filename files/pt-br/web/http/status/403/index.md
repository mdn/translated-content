---
title: 403 Forbidden
slug: Web/HTTP/Status/403
---

{{HTTPSidebar}}

O código de resposta de status de erro do cliente HTTP **`403 Forbidden`** indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo.

Esse status é semelhante ao [`401`](/pt-BR/docs/Web/HTTP/Status/401) , mas neste caso, a re-autenticação não fará diferença. O acesso é permanentemente proibido e vinculado à lógica da aplicação (como uma senha incorreta).

## Status

```
403 Forbidden
```

## Exemplo de resposta

```
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificações

| Especificação                             | Título                         |
| ----------------------------------------- | ------------------------------ |
| {{RFC("7231", "403 Proibido" , "6.5.3")}} | HTTP/1.1: Semântica e Conteúdo |

## Compatibilidade com navegadores

{{Compat("http.status.403")}}

## Veja também

- {{HTTPStatus("401")}}
