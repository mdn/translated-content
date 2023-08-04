---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyValue()** интерфейс метода, который возвращает {{domxref('DOMString')}}, указанного CSS-свойства.

## Синтаксис

```
var value = style.getPropertyValue(property);
```

### Параметры

- _`property`_ - это {{domxref('DOMString')}} представляющий имя свойства, которое должно быть обработано.

### Возвращаемое значение

- `value` - это {{domxref('DOMString')}} содержащий значение свойства. Если не задано, возвращается пустая строка.

## Пример

Следующий JavaScript-код проверяет отмечен ли margin как important в CSS-правиле селектора:

```js
var declaration = document.styleSheets[0].rules[0].style;
var value = declaration.getPropertyValue("margin"); // "1px 2px"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
