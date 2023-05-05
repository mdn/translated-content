---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef("DOM")}}

{{domxref("Document")}} 인터페이스의 **`head`** 읽기 전용 속성은 현재 문서의 {{htmlelement("head")}} 요소를 나타냅니다.

## 예제

```html
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>

<script>
  let theHead = document.head;

  console.log(theHead.id); // "my-document-head";
  console.log(theHead === document.querySelector("head")); // true
</script>
```

## 참고

`Document.head`는 읽기 전용입니다. 값을 할당하려고 시도하면 조용히 실패하거나, [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 {{jsxref("TypeError")}}가 발생합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("document.body")}}
