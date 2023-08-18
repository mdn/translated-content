---
title: Заголовок сущности
slug: Glossary/Entity_header
---

Заголовок сущности - это {{Glossary("header", "HTTP header")}}, описывающий содержимое тела сообщения. Заголовки сущности используются в HTTP-запросах и ответах. Заголовки, такие как {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}} являются заголовками сущности.

Даже если заголовки сущности не являются заголовками запросов или ответов, они часто включаются в эти понятия.

В следующем примере, {{HTTPHeader("Content-Length")}} - это заголовок сущности, в то время как {{HTTPHeader("Host")}} и {{HTTPHeader("User-Agent")}} представляют собой {{Glossary("request header", "заголовок запроса")}}:

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Узнать больше

### Технические знания

- [Список всех HTTP заголовков](/ru/docs/Web/HTTP/Заголовки)
