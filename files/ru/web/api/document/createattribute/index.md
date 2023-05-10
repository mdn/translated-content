---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
translation_of: Web/API/Document/createAttribute
---

{{ ApiRef("DOM") }}

Метод **`Document.createAttribute()`** создаёт новый атрибут узла и возвращает его. Созданный объект узла реализует {{domxref("Attr")}} интерфейс . DOM не указывает, какие атрибуты могут быть добавлены к определённому элементу таким способом.

> **Примечание:** Строка, заданная в параметре, преобразуется в нижний регистр.

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

| Specification                                                                                                        | Status                           | Comment                                 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| {{SpecName('DOM WHATWG','#dom-document-createattribute','Document.createAttribute()')}} | {{Spec2("DOM WHATWG")}} | Точное поведение с прописными символами |
| {{SpecName('DOM3 Core','core.html#ID-1084891198','Document.createAttribute()')}}         | {{Spec2('DOM3 Core')}}     | No change.                              |
| {{SpecName('DOM2 Core','core.html#ID-1084891198','Document.createAttribute()')}}         | {{Spec2('DOM2 Core')}}     | No change.                              |
| {{SpecName('DOM1','level-one-core.html#ID-1084891198','Document.createAttribute()')}}     | {{Spec2('DOM1')}}         | Первоначальное определение.             |

## Совместимость с браузерами

{{Compat}}

## See also

- {{domxref("Document.createElement()")}}
