---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
---

{{APIRef("DOM")}}

Метод **`Document.createAttribute()`** создаёт новый атрибут узла и возвращает его. Созданный объект узла реализует {{domxref("Attr")}} интерфейс . DOM не указывает, какие атрибуты могут быть добавлены к определённому элементу таким способом.

> [!NOTE]
> Строка, заданная в параметре, преобразуется в нижний регистр.

## Syntax

```
attribute = document.createAttribute(name)
```

### Parameters

- `name` строка, содержащая имя атрибута.

### Return value

A {{domxref("Attr")}} node.

### Exceptions

- `INVALID_CHARACTER_ERR` если параметр содержит недопустимые символы для атрибута XML.

## Example

```js
var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Document.createElement()")}}
