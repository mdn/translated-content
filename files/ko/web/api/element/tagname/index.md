---
title: Element.tagName
slug: Web/API/Element/tagName
---

{{ApiRef("DOM")}}

{{domxref("Element")}} 인터페이스의 **`tagName`** 읽기 전용 속성은 요소에 호출된 태그 명을 가져온다. 예를 들면, 만약 {{HTMLElement("img")}} 요소일 경우, 해당 요소의 `tagName` 속성의 내용은 `"IMG"` 가 된다 (이것은 HTML인 경우에 대한 내용이고, XML/XHTML 문서에서는 대소문자가 다르게 나올 수 있다).

## 구문

```js
elementName = Element.tagName;
```

### Value

태그 명이 명시된 문자열을 가져온다, 이 때, 아래 경우에 따라 대소문자가 달라질 수 있다.

- HTML 문서에 설계된 DOM 구조에서 가져온 요소는 항시 대소문자로만 이루어진 값을 가져오게 된다.예를 들면, {{HTMLElement("div")}} 객체로 생성한 요소의 `tagName` 값은 `"DIV"`가 된다.
- XML 문서에 설계된 요소 구조의 경우 문서에 작성된 태그 명을 그대로 가져오게 된다. `"<SomeTag>"` 이라는 명칭으로 태그를 작성하였을 경우, `tagName` 속성 값은 `"SomeTag"`이 된다.

{{domxref("Element")}} 객체에서 사용하는 `tagName` 속성의 값은 {{domxref("Node")}} 객체의 {{domxref("Node.nodeName", "nodeName")}} 속성과 동일한 값을 가져온다.

## 예시

### HTML

```html
<span id="born">내가 어렸을 적...</span>
```

### JavaScript

```js
var span = document.getElementById("born");
console.log(span.tagName);
```

XHTML (또는 여느 XML 방식) 문서의 경우, 정의한 태그 명 그대로 가져오기 때문에, `"span"` 같은 소문자 태그명을 가져오게 될 것이다.그에 반해 HTML 문서에서는, 원본 문서에 정의된 태그명과 달리 대소문자를 무시하면서 대문자로만 이루어진 `"SPAN"` 값을 가져오게 된다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
