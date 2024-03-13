---
title: Document.createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

HTML 문서에서, **`Document.createElement()`** 메서드는 지정한 `tagName`의 HTML 요소를 만들어 반환합니다. `tagName`을 인식할 수 없으면 {{domxref("HTMLUnknownElement")}}를 대신 반환합니다.

## 구문

```js
let element = document.createElement(tagName[, options]);
```

### 매개변수

- `tagName`
  - : 생성할 요소의 유형을 가리키는 문자열.
- `options` {{optional_inline}}
  - : `is` 속성 하나를 가진 `ElementCreationOptions` 객체. 속성의 값은 `customElements.define()`을 사용해 정의한 사용자 정의 요소입니다.

### 반환 값

새로운 {{domxref("Element")}}.

## 예제

아래 예제는 새로운 `<div>` 엘리먼트를 생성한 후, ID가 "div1" 인 요소 이전에 추가합니다.

#### HTML

```html
<!doctype html>
<html>
  <head>
    <title>||Working with elements||</title>
  </head>
  <body>
    <div id="div1">위의 텍스트는 동적으로 추가했습니다.</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("환영합니다!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("예제", 500, 50)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — to explicitly specify the namespace URI for the element.
