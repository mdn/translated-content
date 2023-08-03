---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

Конструктор **`URL()`** возвращает вновь созданный {{domxref("URL")}} объект, отражающий URL, определяемый параметрами.

Если предоставленный базовый URL-адрес или итоговый URL-адрес не является валидным, то будет сгенерировано JavaScript исключение {{jsxref("TypeError")}}.

{{AvailableInWorkers}}

## Синтаксис

```js
const url = new URL(url [, base])
```

### Параметры

- `url`
  - : Строка типа {{domxref("USVString")}} или любой объект, который может быть [преобразован в строку](/ru/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#stringifiers), включая, например, элементы {{htmlelement("a")}} и {{htmlelement("area")}}, представляющие абсолютный и относительный URL-адрес соответственно. Если `url` это относительный URL-адрес, то параметр `base` становится обязательным, так как он будет использован в качестве базового URL-адреса. Если же `url` — абсолютный URL-адрес, то значение параметра `base` будет проигнорировано.
- `base` {{optional_inline}}
  - : Строка типа {{domxref("USVString")}}. Используется в качестве базового адреса, когда `url` это относительный URL-адрес. Значение по умолчанию: `undefined`.

> **Note:** Как и в случае с любым другим Web API,
> которое принимает на вход строку типа {{domxref("USVString")}},
> аргументы `url` и `base` будут преобразованы в строку
> независимо от исходного типа переданного значения.
> В частности, вы можете использовать существующий {{domxref("URL")}} объект в качестве аргумента
> и он будет преобразован в строку значение которой равно значению свойства
> {{domxref("URL.href", "href")}} переданного объекта.

### Исключения

| Исключение              | Объяснение                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("TypeError")}} | `url` (в случае с абсолютным URL-адресом) или `base` + `url` (в случае с относительным URL-адресом) является невалидным URL-адресом. |

## Примеры

```js
// Базовые URL-адреса
let m = "https://developer.mozilla.org";
let a = new URL("/", m); // => 'https://developer.mozilla.org/'
let b = new URL(m); // => 'https://developer.mozilla.org/'

new URL("en-US/docs", b); // => 'https://developer.mozilla.org/en-US/docs'
let d = new URL("/en-US/docs", b); // => 'https://developer.mozilla.org/en-US/docs'
new URL("/en-US/docs", d); // => 'https://developer.mozilla.org/en-US/docs'
new URL("/en-US/docs", a); // => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", ""); // Генерирует TypeError исключение так как '' не является валидным URL-адресом
new URL("/en-US/docs"); // Генерирует TypeError исключение так как '/en-US/docs' не является валидным URL-адресом
new URL("http://www.example.com"); // => 'http://www.example.com/'
new URL("http://www.example.com", b); // => 'http://www.example.com/'

new URL("//foo.com", "https://example.com"); // => 'https://foo.com' (см. относительные URL-адреса)
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Полифил для `URL` доступен в [core-js](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Этот интерфейс принадлежит: {{domxref("URL")}}.
