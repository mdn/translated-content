---
title: Запрещённое имя заголовка
slug: Glossary/Forbidden_header_name
---

**Запрещённое имя заголовка** (Forbidden header name) – это имя какого-либо [HTTP заголовка](/ru/docs/Web/HTTP/Headers), который нельзя изменить программно.

Изменение этих заголовков запрещено, потому что пользовательский агент (браузер) удерживает полный контроль над ними. Заголовки, чьи имена начинаются с `Sec-`, зарезервированы для создания новых заголовков, безопасных (отделённых) от {{glossary("API","APIs")}}, используемого [Fetch](/ru/docs/Web/API/Fetch_API), которое даёт разработчику контроль над заголовками. Утверждение также верно и для {{domxref("XMLHttpRequest")}}.

Запрещённые имена заголовков начинаются с `Proxy-` или `Sec-`, или содержат следующие имена:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Примечание:** Заголовок `User-Agent` более не запрещён, [как указано в спецификации](https://fetch.spec.whatwg.org/#terminology-headers) — посмотрите список запрещённых заголовков (он был реализован в Firefox 43,) так что `User-Agent` может быть установлен через в объект [Headers](/ru/docs/Web/API/Headers) под Fetch через вызов метода [setRequestHeader()](/ru/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29).
