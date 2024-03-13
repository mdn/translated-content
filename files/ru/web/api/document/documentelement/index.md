---
title: Document.documentElement
slug: Web/API/Document/documentElement
---

{{ ApiRef("DOM") }}

**`Document.documentElement`** - свойство только для чтения, которое возвращает элемент [`Element`](/ru/docs/DOM/element) , который является коренным элементом документа [`document`](/ru/docs/DOM/document) (например элемент `<html>` для HTML документов).

## Синтаксис

```
var element = document.documentElement;
```

## Пример

```js
var rootElement = document.documentElement;
var firstTier = rootElement.childNodes;

// firstTier -переменная объекта NodeList непосредственных потомков корневого элемента
for (var i = 0; i < firstTier.length; i++) {
  // что-то делает с каждым прямым потомком корневого элемента
  // как и firstTier[i]
}
```

## Примечания

Это свойство удобно только для чтения для получения корневого элемента, связанного с любым документом.

HTML документ обычно содержит один дочерний узел - `<html>`, возможно с объявлением DOCTYPE перед ним. XML документы часто содержат множественные дочерние узлы: корневой элемент, объявление DOCTYPE, и [инструкции по обработке](/ru/docs/DOM/ProcessingInstruction).

Поэтому вам стоит использовать `document.documentElement` вместо {{Domxref("document.firstChild")}} для доступа к корневому элементу.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
