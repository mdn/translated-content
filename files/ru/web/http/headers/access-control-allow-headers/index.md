---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

{{HTTPSidebar}}

Заголовок ответа **`Access-Control-Allow-Headers`** используется в ответ на {{glossary("preflight request")}}, чтобы указать, какие заголовки HTTP могут использоваться во время фактического запроса.

The {{glossary("simple header", "simple headers")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} (но только с MIME-типом, найденным в этом значении (исключая параметры), либо `application/x-www-form-urlencoded`, `multipart/form-data` или `text/plain`), всегда доступны и не должны быть перечислены в этом заголовке.

Этот заголовок обязателен, если запрос содержит заголовок {{HTTPHeader("Access-Control-Request-Headers")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Access-Control-Allow-Headers: <header-name>, <header-name>, ...
```

## Директивы

- \<header-name>
  - : Список поддерживаемых заголовков разделённых запятыми.

## Пример

```
Access-Control-Allow-Headers: X-Custom-Header
```

## Спецификации

| Спецификация                                                                               | Статус             | Комментарий            |
| ------------------------------------------------------------------------------------------ | ------------------ | ---------------------- |
| {{SpecName('Fetch','#http-access-control-allow-headers', 'Access-Control-Allow-Headers')}} | {{Spec2("Fetch")}} | Начальное определение. |

## Совместимость с браузерами

{{Compat}}

## Примечания по совместимости

- Подстановочное значение (\*), указанное в последней спецификации, ещё не реализовано в браузерах:

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: {{bug(1309358)}}
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)
  - WebKit: [Issue 165508](https://bugs.webkit.org/show_bug.cgi?id=165508)

## Смотрите также

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
