---
title: Document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}

현재 document와 연관된 DTD(Document Type Declaration)를 반환합니다. 반환된 object는 {{domxref("DocumentType")}} 인터페이스를 구현합니다. `DocumentType` 을 작성하려면 {{domxref("DOMImplementation.createDocumentType()")}}를 사용합니다.

## Syntax

```js
doctype = document.doctype;
```

- doctype은 읽기만 가능한 property입니다.

## Example

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

## Notes

현재 document와 연관된 DTD가 없으면, 이 property는 null을 반환합니다.

DOM level 2는 document type 선언 편집을 지원하지 않습니다. (read-only)

## 명세서

{{Specifications}}
