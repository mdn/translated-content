---
title: "Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---

{{HTTPSidebar}}

## Motivo

```
Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’
```

## O que houve de errado?

A requisição {{Glossary("CORS")}} foi realizada com a flag de credenciais definida, mas o servidor está configurado para usar o coringa (`"*"`) como valor do cabeçalho {{HTTPHeader("Access-Control-Allow-Origin")}}, o que não permite o uso de credenciais.

Para corrigir o problema do lado do cliente, assegure que a flag de credenciais é `false` ao fazer a requisição CORS.

- Se a requisição foi realizada usando {{domxref("XMLHttpRequest")}}, assegure-se que você não setou {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} para `true`.
- Usando [Server-sent events](/pt-BR/docs/Web/API/Server-sent_events), verifique se {{domxref("EventSource.withCredentials")}} está `false` (é o valor padrão).
- Se usar a [Fetch API](/pt-BR/docs/Web/API/Fetch_API), assegure-se que {{domxref("Request.credentials")}} está como `"omit"`.

Se, em vez disso, você precisar ajustar o comportamento do servidor, você deverá alterar o valor de `Access-Control-Allow-Origin` para permitir acesso para a origem do qual o cliente é carregado.

## Veja também

- [CORS errors](/pt-BR/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/pt-BR/docs/Web/HTTP/CORS)
