---
title: 201 Created
slug: Web/HTTP/Status/201
---

{{HTTPSidebar}}

O status HTTP "**201 Created**" é utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado. Este novo recurso é efetivamente criado antes do retorno da resposta e o novo recurso é enviado no corpo da mensagem (pode vir na URL ou na header {{HTTPHeader("Location")}}).

Comumente, este status é utilizado em requisições do tipo {{HTTPMethod("POST")}}.

## Status

```
201 Created
```

## Especificações

| Especificação                            | Título                                                        |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "201 Created" , "6.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.201")}}

## Veja mais

- [HTTP request methods](/pt-BR/docs/Web/HTTP/Methods)
