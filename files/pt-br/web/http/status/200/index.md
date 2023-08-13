---
title: 200 OK
slug: Web/HTTP/Status/200
---

{{HTTPSidebar}}

O código HTTP **`200 OK`** é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.

O significado de sucesso depende do método de requisição HTTP:

- {{HTTPMethod("GET")}}: O recurso foi carregado e transmitido no corpo da mensagem.
- {{HTTPMethod("HEAD")}}: Os cabeçalhos da entidade estão no corpo da mensagem.
- {{HTTPMethod("POST")}}: O recurso descrevendo o resultado da ação é transmitido no corpo da mensagem.
- {{HTTPMethod("TRACE")}}: O corpo da mensagem contém a mensagem da requisição tal qual foi recebida pelo servidor.

O resultado de sucesso de um {{HTTPMethod("PUT")}} ou {{HTTPMethod("DELETE")}} geralmente não são `200 OK`, e sim {{HTTPStatus("204")}} `No Content` (ou {{HTTPStatus("201")}} `Created` quando o recurso é carregado pela primeira vez).

## Status

```
200 OK
```

## Especificações

| Especificação                       | Título                                                        |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "200 OK" , "6.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.200")}}

## Veja também

- [HTTP request methods](/pt-BR/docs/Web/HTTP/Methods)
