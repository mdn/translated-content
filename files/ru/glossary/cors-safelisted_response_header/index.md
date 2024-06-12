---
title: CORS-безопасный заголовок ответа
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: fea9eb7420e6d70772144854242c30e421898415
---

{{GlossarySidebar}}

**CORS-безопасный заголовок ответа** (также известный как «простой заголовок ответа») — это [HTTP-заголовок](/ru/docs/Web/HTTP/Headers) в ответе [CORS](/ru/docs/Web/HTTP/CORS), который считается _безопасным_ для доступа к клиентским скриптам. Веб-страницам доступны только заголовки ответа из списка безопасных.

По умолчанию этот список включает следующие заголовки ответов:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Дополнительные заголовки можно добавить с помощью {{HTTPHeader("Access-Control-Expose-Headers")}}.

> **Примечание:** {{HTTPHeader("Content-Length")}} не входил в исходный набор безопасных заголовков [[ref](https://github.com/whatwg/fetch/pull/626)]

## Примеры

### Расширение безопасного списка

Расширить список CORS-безопасных заголовков ответа можно используя заголовок {{HTTPHeader("Access-Control-Expose-Headers")}}:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Смотрите также

- [HTTP](/ru/docs/Web/HTTP)
- [Заголовки HTTP](/ru/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- [Глоссарий](/ru/docs/Glossary)

  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-безопасный заголовок запроса")}}
  - {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
  - {{Glossary("Request header", "Заголовок запроса")}}
