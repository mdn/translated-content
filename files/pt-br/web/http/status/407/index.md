---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
---

{{HTTPSidebar}}

O código de resposta HTTP **`407 Proxy Authentication Required` **indica um erro do lado cliente, informando que uma solicitação não está sendo bem aplicada. Isso ocorre porque falta a validar as credencias de autenticação para um {{Glossary("proxy server")}} que intermedia o navegador e o servidor que pode acessar o recurso solicitado.

Este erro é enviado com um cabeçalho {{HTTPHeader("Proxy-Authenticate")}} que contém informações de como fazer uma autorização correta.

## Status

```
407 Proxy Authentication Required
```

## Exemplo de resposta

```
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Especificações

| Epecificação                                                 | Título                   |
| ------------------------------------------------------------ | ------------------------ |
| {{RFC("7235", "407 Proxy Authentication Required" , "3.2")}} | HTTP/1.1: Authentication |

## Compatibilidade com navegadores

{{Compat("http.status.407")}}

## Veja também

- [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
