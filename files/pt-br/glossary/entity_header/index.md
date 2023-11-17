---
title: Cabeçalho de entidade
slug: Glossary/Entity_header
---

Um cabeçalho de entidade é um {{glossary("header", "HTTP header")}} descrevendo o conteúdo do corpo da mensagem. Cabeçalhos da entidade são usados em ambos, respostas e requerimentos HTTP. Cabeçalhos como {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}} são cabeçalhos de entidade.

Mesmo se cabeçalhos de entidade não sejam requerimentos ou cabeçalhos de resposta, eles são muitas vezes incluídos nestes termos.

No exemplo a seguir, {{HTTPHeader("Content-Length")}} é um cabeçalho de entidade, enquanto {{HTTPHeader("Host")}} e {{HTTPHeader("User-Agent")}} são {{glossary("request header", "request headers")}}:

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Aprenda mais

### Conhecimento técnico

- [List of all HTTP headers](/pt-BR/docs/Web/HTTP/Headers)
