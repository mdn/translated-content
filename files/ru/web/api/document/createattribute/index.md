---
title: "Document: метод createAttribute()"
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Метод **`Document.createAttribute()`** создаёт новый атрибут и возвращает его. Созданный объект является узлом и реализует интерфейс {{domxref("Attr")}}. DOM не накладывает ограничений на тип атрибутов, которые могут быть добавлены к определённому элементу таким способом.

> [!NOTE]
> Строка, заданная в параметре, преобразуется в нижний регистр.

## Синтаксис

```js-nolint
createAttribute(name)
```

### Параметры

- `name`
  - : строка, содержащая имя атрибута.

### Возвращаемое значение

Узел {{domxref("Attr")}}.

### Исключения

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Вызывается если значение [`name`](#name) не является корректным [именем XML](https://www.w3.org/TR/REC-xml/#dt-name) (например, начинается с цифры, дефиса или точки, или содержит символы, отличные от букв и цифр, подчёркиваний, дефисов и точек).

## Примеры

```js
const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Document.createElement()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
