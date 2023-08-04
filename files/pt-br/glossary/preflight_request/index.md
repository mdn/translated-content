---
title: Requisição Preflight
slug: Glossary/Preflight_request
---

Uma requisição _preflight_ de [CORS](/pt-BR/docs/Glossary/CORS) é uma requisição de {{Glossary ("CORS")}} que verifica se o protocolo {{Glossary ("CORS")}} é entendido e se o servidor aguarda o método e cabeçalhos('headers') especificados.

É uma requisição {{HTTPMethod("OPTIONS")}}, que usa três cabeçalhos de solicitação HTTP: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, e o cabeçalho {{HTTPHeader("Origin")}}.

Uma requisição _preflight_ é emitida automaticamente por um navegador, quando necessário. Geralmente, os desenvolvedores front-end não precisam criar essas solicitações. Ela acontece quando a requisição é qualificada ["para ser preflighted"](/pt-BR/docs/Web/HTTP/CORS#Preflighted_requests) e omitida para [requisições simples](/pt-BR/docs/Web/HTTP/CORS#Simple_requests).

Por exemplo, o cliente pode perguntar ao servidor se este permitiria uma requisição {{HTTPMethod ("DELETE")}}, antes de enviá-la, usando uma requisição _preflight_:

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

Se o servidor permitir, ele responderá à requisição _preflight_: com um cabeçalho de resposta {{HTTPHeader ("Access-Control-Allow-Methods")}}, que lista DELETE:

```
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

A resposta da requisição _preflight_ pode ser opcionalmente cacheada para requisições realizadas na mesma url usando o cabeçalho [Access-Control-Max-Age](/pt-BR/docs/Web/HTTP/Headers/Access-Control-Max-Age) como no exemplo acima.

## Veja também

- [CORS](/pt-BR/docs/Glossary/CORS)
- {{HTTPMethod("OPTIONS")}}
