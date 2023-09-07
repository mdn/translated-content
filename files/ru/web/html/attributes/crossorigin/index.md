---
title: CORS settings attributes
slug: Web/HTML/Attributes/crossorigin
---

В HTML5 некоторые теги поддерживают [CORS](/ru/docs/HTTP/Access_control_CORS), например {{ HTMLElement("img") }} или {{ HTMLElement("video") }}, имеют атрибут `crossorigin` (`crossOrigin` свойство), которое позволяет настроить CORS запросы для данных получаемых элементом. Эти атрибуты могут иметь следующие значения:

| Ключевое слово    | Описание                                                           |
| ----------------- | ------------------------------------------------------------------ |
| `anonymous`       | CORS запросы от этого элемента не будут передавать учётные данные. |
| `use-credentials` | CORS запросы от этого элемента будут передавать учётные данные.    |

По умолчанию (если значение атрибута не задано), CORS не используется вообще. Ключевое слово "anonymous" означает что не будет обмена **учётных данных**(user credentials) через cookies, client-side SSL сертификаты или HTTP аутентификацию как описано в [Секции Терминология CORS спецификации](http://www.w3.org/TR/cors/#user-credentials).

Неправильное ключевое слово или пустая строка, будет обработано как `anonymous`.

### Пример: crossorigin с тегом script

Используя тег {{HTMLElement("script")}} вы можете указать браузеру выполнять код `https://example.com/example-framework.js` без передачи user-credentials.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

## Спецификации

| Specification                                                                                           | Status                   | Comment |
| ------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}                | {{Spec2('HTML WHATWG')}} |         |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [HTTP access control](/En/HTTP_access_control)
