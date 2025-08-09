---
title: Range.selectNodeContents()
slug: Web/API/Range/selectNodeContents
---

{{ApiRef("DOM")}}

**`Range.selectNodeContents()`** 는 {{domxref("Node")}}의 내용을 포함하는 {{domxref("Range")}}를 설정합니다.

부모 {{ domxref("Node") }} 의 start, end 값이 Reference가 됩니다. `startOffset` 은 0이고, `endOffset` 은 Child Node의 수 혹은 Reference Node에 포함되어 있는 Child Node의 수가 됩니다.

## 구문

```js
range.selectNodeContents(referenceNode);
```

### 매개변수

- `referenceNode`
  - : {{ domxref("Range") }} 로 선택될 내용의 {{ domxref("Node") }}

## 예제

```js
range = document.createRange();
referenceNode = document.getElementsByTagName("div")[0];
range.selectNodeContents(referenceNode);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [The DOM interfaces index](/ko/docs/Web/API/Document_Object_Model)
