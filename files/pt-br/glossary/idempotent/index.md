---
title: Idempotente
slug: Glossary/Idempotent
---

Um método HTTP é **idempotente** se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, e {{HTTPMethod("DELETE")}} são métodos **idempotentes**, mas não o método {{HTTPMethod("POST")}}. Todos os métodos {{glossary("seguro")}}s também são idempotentes.

Para ser idempotente, somente o estado atual do _back-end_ de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um {{HTTPMethod("DELETE")}} vai provavelmente retornar um {{HTTPStatus("200")}}, enquanto as chamadas sucessivas vão provavelmente retornar {{HTTPStatus("404")}}. Outra implicação do {{HTTPMethod("DELETE")}} ser idempotente é de que os desenvolvedores não deveriam implementar APIs RESTful com a funcionalidade de deleção de última entrada usando o método `DELETE`.

Note que a idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.

`GET /pageX HTTP/1.1` é idempotente. Chamado diversas vezes em sequência, ele vai retornar o mesmo resultado:

```
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
```

`POST /add_row HTTP/1.1` não é idempotente. Se ele for chamado diversas vezes, ele adicionará novas entradas:

```
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adiciona a 2ª linha
POST /add_row HTTP/1.1   -> Adiciona a 3ª linha
```

`DELETE /idX/delete HTTP/1.1` é idempotente, mesmo que o código de status mude entre requisições:

```
DELETE /idX/delete HTTP/1.1   -> Retorna 200 se idX existe
DELETE /idX/delete HTTP/1.1   -> Retorna 404 como ele acabou de ser deletado
DELETE /idX/delete HTTP/1.1   -> Retorna 404
```

## Aprenda mais

### Conhecimento geral

- Definição de [idempotente](https://tools.ietf.org/html/rfc7231#section-4.2.2) na especificação HTTP.

### Conhecimento técnico

- Descrição de métodos idempotentes comuns: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Descrição de métodos não-idempotentes comuns: {{HTTPMethod("POST")}},{{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
