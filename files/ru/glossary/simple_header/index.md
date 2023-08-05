---
title: Простой заголовок
slug: Glossary/Simple_header
---

_Простой заголовок (или заголовок запроса с поддержкой безопасности CORS_) - это один из следующих [HTTP заголовков](/ru/docs/Web/HTTP/Заголовки):

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}} с MIME-типом, найденным в этом значении (исключая параметры), либо `application/x-www-form-urlencoded`, `multipart/form-data` или `text/plain`.

Или один из этих клиентских заголовков:

- {{HTTPHeader("DPR")}}
- {{HTTPHeader("Downlink")}}
- {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Viewport-Width")}}
- {{HTTPHeader("Width")}}

Если они содержат только простые заголовки, запросы считаются простыми и не нужно отправлять {{glossary("preflight request")}} в контексте {{glossary("CORS")}}.

## Смотрите также

- [HTTP заголовки](/ru/docs/Web/HTTP/Заголовки)
- {{Glossary("Simple response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
