---
title: "Document: append() method"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

**`Document.append()`** 메서드는
{{domxref("Node")}} 객체 혹은 문자열의 집합을
문서의 마지막 요소에 삽입합니다.
문자열은 {{domxref("Text")}} 노드들과 동등하게 삽입됩니다.

이 메서드는 `Document` 의 자식 메서드입니다. 트리에 임의의 요소를 삽입하려면 {{domxref("Element.append()")}} 를 참고하세요.

## 구문

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### 매개변수

- `param1`, …, `paramN`
  - : 삽입하려는 {{domxref("Node")}} 객체 혹은 문자열의 집합입니다.

### 반환 값

({{jsxref("undefined")}}) 이 아닙니다.

### 예외

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 노드가 계층의 특정 지점에 삽입될 수 없을 때 발생합니다.

## 예제

### 문서의 최상위 요소에 추가하기

HTML 문서에 요소를 추가하려 하면 주어진 {{HTMLElement("html")}} 요소가 이미 존재한다는
`HierarchyRequestError` {{domxref("DOMException")}} 예외가 발생할 수 있습니다.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

기존에 요소가 존재하지 않는 새 문서를 생성하려고 한다면 최상위 HTML 요소(혹은 최상휘 SVG 요소)를 추가할 수 있습니다.

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Document.prepend()")}}
- {{domxref("Element.append()")}}
