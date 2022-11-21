---
title: console.dirxml()
slug: Web/API/console/dirxml
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.dirxml
---

{{APIRef("Console API")}}

The **`console.dirxml()`** method displays an interactive tree of the descendant elements of the specified XML/HTML
element. If it is not possible to display as an element the JavaScript Object view is
shown instead. The output is presented as a hierarchical listing of expandable nodes
that let you see the contents of child nodes.

**`console.dirxml()`** 메서드는 주어진 XML/HTML 엘리먼트의 자손 엘리먼트를 인터랙티브한 트리로 표시합니다.
엘리먼트를 표시하는 것이 불가능한 경우에는 자바스크립트 객체 보기가 대신 보여집니다.
출력된 결과는 자식 노드의 내용을 볼 수 있는 여닫을 수 있는 노드의 계층적인 목록으로 나타납니다.

## 구문

```js-nolint
dirxml(object)
```

### 매개변수

- `object`
  - : 출력할 속성을 포함한 자바스크립트 객체

### 반환 값

None ({{jsxref("undefined")}}).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
