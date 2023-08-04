---
title: CORS
slug: Glossary/CORS
---

**CORS** (Cross-Origin Resource Sharing, рус. "Совместное использование ресурсов между разными источниками") - это система, состоящая из отправки [HTTP заголовков](/ru/docs/Web/HTTP/Headers), которые определяют: заблокировать или выполнить запрос к ограниченному ресурсу на веб-странице из другого домена, отличного от домена происхождения запрашиваемого ресурса.

The [same-origin security policy (рус. "правило ограничения домена")](/ru/docs/Web/Security/Same-origin_policy) по умолчанию запрещает междоменные запросы. CORS предоставляет веб-серверам возможность контролировать междоменные запросы и позволяет производить безопасный обмен данными между разными доменами.

## Узнать больше

### Основная база знаний

- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS) на MDN

### CORS заголовки

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Указывает, разрешён ли такой запрос для ресурсов из данного источника.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Указывает, разрешён ли ответ на запрос в случае, если credentials flag выставлен в `true`.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Используется в ответе на запрос в случае "предполётной проверки"({{glossary("preflight request")}}) - проверки, какие из HTTP заголовков могут быть использованы для запроса.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Указывает метод или методы, которые разрешены для доступа к ресурсу в ответ на "предполётный запрос"({{glossary("preflight request")}}).
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Указывает, какие заголовки могут быть предоставлены как часть ответа, перечисляя их имена.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Указывает, как долго могут быть закешированы результаты "предполётного запроса"({{glossary("preflight request")}}).
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Используется для исполнения "предполётного запроса"({{glossary("preflight request")}}), чтобы указать серверу, какие из HTTP заголовков будут использоваться во время реального запроса.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Используется для исполнения "предполётного запроса"({{glossary("preflight request")}}), чтобы указать серверу, какие [HTTP методы](/ru/docs/Web/HTTP/Methods) будут использоваться во время реального запроса.
- {{HTTPHeader("Origin")}}
  - : Указывает, откуда производится запрос.

### Техническая документация

- [Fetch specification](https://fetch.spec.whatwg.org)
