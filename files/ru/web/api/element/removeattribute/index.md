---
title: "Element: метод removeAttribute()"
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Метод **`removeAttribute()`** интерфейса {{domxref("Element")}} удаляет у элемента атрибут с указанным именем.

## Синтаксис

```js-nolint
removeAttribute(attrName)
```

### Параметры

- `attrName`
  - : Строка с именем атрибута для удаления. Если указанный атрибут не существует, метод `removeAttribute()` отработает без ошибки.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примечания по использованию

Следует использовать `removeAttribute()` вместо установки атрибуту значения `null`.
Многие атрибуты будут вести себя не так, как ожидается, если задать им значение `null`.

## Примеры

```js
// До: <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// После: <div id="div1" width="200px">
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
