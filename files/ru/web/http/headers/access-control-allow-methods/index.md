---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

**`Access-Control-Allow-Methods`** это заголовок ответа, который определяет метод или методы доступа к ресурсам {{glossary("preflight request")}}.

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
Access-Control-Allow-Methods: <method>, <method>, ...
```

## Директивы

- \<method>
  - : Разделённый запятыми список доступных [методов HTTP запросов](/ru/docs/Web/HTTP/Methods).

## Примеры

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

## Спецификации

| Спецификация                                                                               | Статус             | Комментарий           |
| ------------------------------------------------------------------------------------------ | ------------------ | --------------------- |
| {{SpecName('Fetch','#http-access-control-allow-methods', 'Access-Control-Allow-Methods')}} | {{Spec2("Fetch")}} | Начальное определение |

## Совместимость с браузерами

{{Compat}}

## Замечания по совместимости

- Подстановочное значение (\*), которое упоминается в последней спецификации ещё не реализовано в браузерах:

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: {{bug(1309358)}}
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)

## See also

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
