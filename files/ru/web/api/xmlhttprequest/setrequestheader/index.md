---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

Метод **XMLHttpRequest.setRequestHeader()** устанавливает значения HTTP заголовков. Метод `setRequestHeader()` следует вызывать только после `open()`, но до `send()`. Если метод вызывается несколько раз подряд, значения присоединяется к одному и тому же заголовку.

Если заголовок {{HTTPHeader("Accept")}} не был установлен, то он будет передан в запросе со значением `*/*` когда будет вызван метод {{domxref("XMLHttpRequest.send", "send()")}}.

В целях безопасности, некоторые заголовки не могут быть установлены программно. Для более подробной информации, смотрите {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} и {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

> **Примечание:** Для ваших собственных полей, вы можете увидеть исключение "**not allowed by Access-Control-Allow-Headers in preflight response**", когда вы делаете кросс-доменный запрос. В этом случае, вам нужно установить заголовок "Access-Control-Allow-Headers" в ответе на стороне сервера.

## Синтаксис

```
XMLHttpRequest.setRequestHeader(header, value)
```

### Параметры

- `header`
  - : Имя устанавливаемого заголовка
- `value`
  - : Значение, которое будет установлено как тело заголовка

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

[Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
