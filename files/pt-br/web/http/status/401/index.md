---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
---

{{HTTPSidebar}}

O código de resposta de status de erro do cliente HTTP **`401 Unauthorized`** indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.

Esse status é enviado com um cabeçalho {{HTTPHeader("WWW-Authenticate")}} que contém informações sobre como autorizar corretamente.

Esse status é semelhante a {{HTTPStatus("403")}}, mas neste caso, a autenticação é possível.

## Status

```
401 Unauthorized
```

## Exemplo de resposta

```
HTTP/1.1 401 Não autorizado
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Acesso intermediário ao site"
```

## Especificações

| Especificação                                 | Título                 |
| --------------------------------------------- | ---------------------- |
| {{RFC("7235", "401 Não autorizado" , "3.1")}} | HTTP/1.1: Autenticação |

## Compatibilidade com navegadores

{{Compat("http.status.401")}}

## Veja também

- [HTTP authentication](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
