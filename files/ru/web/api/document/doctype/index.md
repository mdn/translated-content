---
title: Document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}

Возвращает Описание Типа Документа (Document Type Declaration, DTD) относительно текущего документа. Возвращаемый объект обеспечивает выполнение {{domxref("DocumentType")}} интерфейса. Используйте {{domxref("DOMImplementation.createDocumentType()")}} для создания `DocumentType`.

## Синтаксис

```
doctype = document.doctype;
```

- `doctype` - свойство только для чтения.

## Пример

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: " +
    doctypeObj.name +
    "\n" +
    "doctypeObj.internalSubset: " +
    doctypeObj.internalSubset +
    "\n" +
    "doctypeObj.publicId: " +
    doctypeObj.publicId +
    "\n" +
    "doctypeObj.systemId: " +
    doctypeObj.systemId,
);
```

## Примечания

Свойство возвращает `null`, если не существует DTD связанного с текущим документом.

DOM уровня 2 не поддерживает редактирование описания типа документа.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
