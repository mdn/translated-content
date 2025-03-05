---
title: CORS-безопасный заголовок запроса
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

[CORS-безопасный заголовок запроса](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (также известный как «простой заголовок») — это один из следующих [HTTP-заголовков](/ru/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Если запрос содержит только эти заголовки (и значения, соответствующие дополнительным требованиям, изложенным ниже), запросу не требуется отправлять {{Glossary("preflight request", "предварительный запрос")}} в контексте [CORS](/ru/docs/Glossary/CORS).

Дополнительные заголовки можно добавить в список безопасных, используя заголовок {{HTTPHeader("Access-Control-Allow-Headers")}}, а также необходимо перечислить указанные выше заголовки, чтобы обойти следующие дополнительные ограничения.

## Дополнительные ограничения

CORS-безопасные заголовки запроса должны соответствовать следующим требованиям:

- {{HTTPHeader("Accept-Language")}} и {{HTTPHeader("Content-Language")}} должны содержать значения, состоящие только из `0-9`, `A-Z`, `a-z`, пробелов и `*,-.;=`.
- {{HTTPHeader("Accept")}} и {{HTTPHeader("Content-Type")}} не должны содержать _CORS-небезопасные байты в заголовках запроса_: `0x00-0x1F` (за исключением `0x09 (HT)`, который допускается), `"():<>?@[\]{}` и `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} должен иметь один из следующих MIME-типов: `application/x-www-form-urlencoded`, `multipart/form-data` или `text/plain`.
- {{HTTPHeader("Range")}} должен иметь однобайтовое значение в виде `bytes=[0-9]+-[0-9]*`. Смотрите документацию заголовка {{HTTPHeader("Range")}} для более подробной информации.
- Для значения любого заголовка не должна превышать 128.

## Смотрите также

- Связанные термины глоссария:
  - {{Glossary("CORS-safelisted response header", "CORS-безопасный заголовок ответа")}}
  - {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
  - {{Glossary("Request header", "Заголовок запроса")}}
