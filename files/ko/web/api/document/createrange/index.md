---
title: Document.createRange()
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

새 {{domxref("Range")}} 객체를 리턴합니다.

## 문법

```js
range = document.createRange();
```

`range` 는 생성된 {{domxref("Range")}} 객체입니다.

## 예제

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 노트

Range 객체의 대부분의 메소드들은 Range 객체가 생성 된 후, 바운더리 포인트를 지정해야 사용할 수 있습니다.

## 명세

{{Specifications}}
