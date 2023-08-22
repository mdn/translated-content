---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
---

{{HTTPSidebar}}

**`Retry-After`** заголовок HTTP ответа показывает, как долго клиент должен подождать перед последующим запросом. Есть три основных случая, в которых следует использовать этот заголовок:

- Когда отправлен с кодом {{HTTPStatus(503)}} (Service Unavailable), отображая примерное время, через которое сервис будет доступен.
- Когда отправлен с кодом {{HTTPStatus(429)}} (Too Many Requests), отображая, сколько ждать перед следующим запросом.
- Когда отправлен с кодом переадресации (например, {{HTTPStatus(301)}} (Moved Permanently)), отображает минимальное время, которое клиент должен подождать перед переадресацией.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>
        {{Glossary("Ответный заголовок")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Директивы

- \<http-date>
  - : Дата, после которой пытаться ещё раз. За документацией к HTTP дате, обратитесь сюда: {{HTTPHeader("Дата")}}.
- \<delay-seconds>
  - : Неотрицательное число секунд, показывающее время ожидания перед новым запросом.

## Примеры

### Работа с запланированным временем простоя

Поддержка `Retry-After` реализована ещё не везде. Впрочем, некоторые боты, к примеру Googlebot, понимает заголовок `Retry-After`. В данном случае полезно отправлять его с кодом {{HTTPStatus(503)}} (Service Unavailable), чтобы поисковики продолжили индексировать после простоя

```
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Спецификации

| Specification                           | Title                                                         |
| --------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Retry-After", "7.1.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Поддержка браузеров

{{Compat}}

## Смотрите также

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
