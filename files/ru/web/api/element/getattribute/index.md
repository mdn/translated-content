---
title: "Element: метод getAttribute()"
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Метод **`getAttribute()`** интерфейса {{domxref("Element")}} возвращает значение указанного атрибута.

Если атрибут не существует, то вернётся значение `null` или `""` (пустая строка), подробности смотрите в разделе «[Несуществующие атрибуты](#несуществующие_атрибуты)».

Если необходимо получить {{domxref("Attr", "свойства узла")}}, то можно использовать метод {{domxref("Element.getAttributeNode()", "getAttributeNode()")}}.

## Синтаксис

```js-nolint
getAttribute(attributeName)
```

### Параметры

- `attributeName`
  - : имя атрибута, значение которого необходимо получить.

### Возвращаемое значение

Строка, содержащая значение `attributeName`.

## Примеры

```html
<div id="div1">Привет!</div>
```

```js
const div1 = document.getElementById("div1");
// <div id="div1">Привет!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const align = div1.getAttribute("align");
// null
```

## Описание

### Приведение к нижнему регистру

При вызове у HTML-элемента в HTML-документе `getAttribute()` приводит аргумент к нижнему регистру.

### Несуществующие атрибуты

Все современные браузеры возвращают `null`, если у элемента нет указанного атрибута.

### Получение значений криптографических одноразовых номеров

По [соображениям безопасности](/ru/docs/Web/HTTP/CSP) получение криптографических одноразовых номеров («nonce») из источников, отличных от скриптов (таких как CSS селекторы и вызовы `.getAttribute("nonce")`), недоступно.

```js example-bad
let nonce = script.getAttribute("nonce");
// вернёт пустую строку
```

Вместо этого следует использовать свойство {{domxref("HTMLElement/nonce", "nonce")}}:

```js
let nonce = script.nonce;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
