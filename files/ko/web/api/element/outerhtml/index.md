---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
---

{{APIRef("DOM")}}

`outerHTML` 속성은 요소(element)의 자식 요소를 포함하여 요소를 나타내는 직렬화된 HTML 파편을 가져옵니다. 또한 주어진 문자열에서 파싱한 노드로 요소를 대체할 수 있습니다.

요소의 내용만을 HTML 형태로 가져오거나 설정하기 위해서는 {{domxref("Element.innerHTML", "innerHTML")}} 속성을 대신 사용하십시오.

## 문법

```js
var content = element.outerHTML;

element.outerHTML = htmlString;
```

### 값

`outerHTML`로 값을 읽어올 때는 요소와 요소의 자식 요소가 직렬화된 HTML이 포함된 {{domxref("DOMString")}}을 반환합니다. `outerHTML`로 값을 설정할 때는 요소와 요소의 모든 자식 요소를 `htmlString` 형태로 파싱된 새로운 DOM 트리 구조로 대체합니다.

### 예외

- `SyntaxError`
  - : 유효하지 않은 HTML 문자열을 사용해 `outerHTML`을 설정하도록 시도할 경우 `SyntaxError` 예외가 발생합니다.
- `NoModificationAllowedError`
  - : {{domxref("Document.documentElement")}}와 같이 {{domxref("Document")}}의 바로 아래 자식 요소에 `outerHTML`을 설정하도록 시도할 경우 `NoModificationAllowedError` 예외가 발생합니다.

## 예제

다음은 요소의 `outerHTML` 속성을 가져오는 예시입니다.

```js
// HTML:
// <div id="d"><p>Content</p><p>Further Elaborated</p></div>

d = document.getElementById("d");
console.log(d.outerHTML);

// '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// 위 문자열이 콘솔창에 출력됩니다.
```

다음은 `outerHTML` 속성으로 노드를 대체하는 예시입니다.

```js
// HTML:
// <div id="container"><div id="d">This is a div.</div></div>

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // "DIV"를 출력합니다.

d.outerHTML = "<p>This paragraph replaced the original div.</p>";
console.log(container.firstChild.nodeName); // "P"를 출력합니다.

// #d의 div 요소가 문서 트리에서 제거되고,
// 새 p 요소로 대체되었습니다.
```

## 참고

부모 요소가 없는 요소에 `outerHTML` 속성을 설정하려고 하면 변경되지 않습니다. 많은 브라우저는 예외를 발생시킵니다. 아래는 예시입니다.

```js
var div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
// 많은 브라우저에서 DOMException 예외를 발생시킵니다.
console.log(div.outerHTML); // 결과: "<div></div>"
```

또한, 문서 내의 요소가 변경되더라도 변수의 `outerHTML` 속성은 원본 요소를 계속 참조합니다.

```js
var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // "P"를 출력합니다.
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // 여전히 "P"를 출력합니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- DOM 트리를 XML이나 HTML으로 직렬화하는 {{domxref("XMLSerializer")}}
- XML이나 HTML을 파싱하여 DOM 트리로 변환하는 {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
