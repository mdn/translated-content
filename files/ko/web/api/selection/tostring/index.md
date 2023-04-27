---
title: Selection.toString()
slug: Web/API/Selection/toString
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`Selection.toString()`** 메소드는 selection 객체가 현재 나타내는 문자열을 반환합니다. 즉, 현재 선택된 텍스트의 문자열.

## Syntax

```js
str = sel.toString()
```

### Return value

A string representing the selection.

## Description

This method returns the currently selected text.

In [JavaScript](en/JavaScript), this method is called automatically when a function the selection object is passed to requires a string:

```js
alert(window.getSelection()) // What is called
alert(window.getSelection().toString())  // What is actually being effectively called.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
