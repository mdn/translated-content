---
title: Cabeçalho de Requisição
slug: Glossary/Request_header
---

Um **cabeçalho de requisição** é um {{glossary("header", "cabeçalho HTTP")}} que pode ser utilizado em uma requisição HTTP, e não é relacionado ao conteúdo da mensagem. Cabeçalhos de requisição, como {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language", "Accept-*")}}, ou ainda {{HTTPHeader("If-Modified-Since", "If-*")}} permitem realizar requisições condicionais; outros como {{HTTPHeader("Cookie")}}, {{HTTPHeader("User-Agent")}} ou {{HTTPHeader("Referer")}} deixa o contexto mais preciso para que o servidor possa adaptar melhor a resposta.

Nem todos os cabeçalhos exibidos em uma requisição são _cabeçalhos de requisição._ Por exemplo, o {{HTTPHeader("Content-Length")}} exibido em uma requisição {{HTTPMethod("POST")}} é na realidade uma {{glossary("entity header")}}, que referencia o tamanho do corpo da mensagem de requisição. Porém, esses _cabeçalhos de entidade_ muitas vezes são chamados de _cabeçalhos de requisição_.

Adicionalmente, o sistema [CORS](/pt-BR/docs/Glossary/CORS) define um subconjunto de cabeçalhos de requisição como {{glossary('simple header', 'simple headers')}}, cabeçalhos de requisição que sempre são considerados como autorizados e não são explicitamente listados em respostas de requisições {{glossary("preflight request", "preflight")}}.

Um certo número de cabeçalhos de requisição após uma requisição {{HTTPMethod("GET")}}:

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

Estritamente, o cabeçalho {{HTTPHeader("Content-Length")}} neste exemplo não é um cabeçalho de requisição como os outros, mas sim uma {{glossary("entity header")}}:

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Learn more

### Technical knowledge

- [List of all HTTP headers](/pt-BR/docs/Web/HTTP/Headers)
