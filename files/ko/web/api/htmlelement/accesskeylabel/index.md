---
title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.accessKeyLabel`** 읽기 전용 속성은 엘리먼트의 할당된 접근키를 나타내는 {{jsxref("String")}} 를 반환합니다. 존재하지 않는 경우 빈 문자열을 반환합니다.

## 구문

```js
label = element.accessKeyLabel;
```

## 예시

### JavaScript

```js
var node = document.getElementById("btn1");
if (node.accessKeyLabel) {
  node.title += " [" + node.accessKeyLabel + "]";
} else {
  node.title += " [" + node.accessKey + "]";
}

node.onclick = function () {
  var p = document.createElement("p");
  p.textContent = "Clicked!";
  node.parentNode.appendChild(p);
};
```

### HTML

```html
<button accesskey="h" title="Caption" id="btn1">Hover me</button>
```

### Result

{{ EmbedLiveSample('Example') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("element.accessKey")}}
- [accesskey](/ko/docs/Web/HTML/Global_attributes/accesskey) 전역 속성.
