---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef("DOM")}}

{{domxref("Element")}} 속성(property) **`innerHTML`** 은 요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정합니다.

> **참고:** **주의:** {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("noembed")}} 노드가 (&), (<), (>) 문자를 포함하는 텍스트 노드를 자식으로 가지고 있다면, `innerHTML`은 이러한 문자들을 각각 `"&amp;"`, `"&lt;"` ,`"&gt;"`로 반환합니다. {{domxref("Node.textContent")}}를 사용하여 이러한 텍스트 노드 내용의 원본을 복사할 수 있습니다.

요소(element)의 내용을 변경하는 대신 HTML을 문서(document)에 삽입하려면, {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}} 메서드를 사용하십시오.

## Syntax

```js
const content = element.innerHTML;

element.innerHTML = htmlString;
```

### Value

요소(element)의 자손의 HTML 직렬화를 포함하는 {{domxref("DOMString")}} 입니다. Setting the value of `innerHTML` 의 값을 설정(대입)하면 요소의 모든 자손이 제거되고, 문자열 htmlString에 지정된 HTML을 파싱하고, 생성된 노드로 대체합니다.

### Exceptions

- `SyntaxError`
  - : HTML의 양식에 맞지 않는 문자열을 사용하여, `innerHTML` 의 값을 설정하려는 시도가 있었습니다.
- `NoModificationAllowedError`
  - : 부모가 {{domxref("Document")}}인 노드에 HTML을 삽입하려고 했습니다.

## Usage notes

`innerHTML` 속성(property)은 페이지가 처음 로드 된 이후의 모든 변경 사항을 포함하여, 페이지의 현재 HTML 소스를 검사하는데 사용할 수 있습니다.

### Reading the HTML contents of an element

`innerHTML` 를 읽으면 유저 에이전트(user agent)가 요소의 자손으로 구성된 HTML 또는 XML조각을 직렬화 합니다. 그 결과는 문자열로 반환합니다.

```js
let contents = myElement.innerHTML;
```

이를 통해 요소의 컨텐트 노드에 대한 HTML 마크업을 볼 수 있습니다.

> **참고:** **주의:** 반환 된 HTML, XML 파편은 요소의 현재 내용일 기반으로 생성됩니다. 따라서 반환 된 마크업과 양식이 본래의 페이지 마크업과 일치하지 않을 수 있습니다.

### Replacing the contents of an element

`innerHTML` 값을 설정하면 요소의 기존 내용(content)을 새 내용으로 쉽게 변경할 수 있습니다.

예를 들어, 문서(document)의 {{domxref("Document.body", "body")}} 속성(attribute)을 지우면, 문서의 전체 내용을 지울 수 있습니다.

```js
document.body.innerHTML = "";
```

이 예제는 문서의 현재 HTML 마크업을 가져오고, `"<"` 문자를 HTML 엔터티 `"&lt;"` 로 대체하합니다. 그러면 HTML을 원시 텍스트(raw text - 파싱 이전의 모습)로 반환합니다. 이것을 {{HTMLElement("pre")}} 요소로 래핑합니다. 그러면 `innerHTML` 값은 새 문자열로 변경됩니다. 그 결과, 문서의 내용은 페이지의 전체 소스 코드의 출력으로 대체됩니다.

```js
document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
```

#### Operational details

`innerHTML` 값을 설정할 때, 정확히 어떤 일이 발생하나요? 값을 설정하면, 유저 에이전트는 다음 단계를 따르게 됩니다.

1. 지정한 값은 HTML 또는 XML(문서 타입에 따라)로 파싱되어, {{domxref("DocumentFragment")}} 객체가 새 요소에 대한 새로운 노드 DOM 노드 집합을 나타냅니다.
2. 내용이 대체되는 요소가 {{HTMLElement("template")}} 요소 인 경우, `<template>` 요소의 {{domxref("HTMLTemplateElement.content", "content")}} 속성(attribute)은 1단계에서 작성한 새 `DocumentFragment` 로 대체됩니다.
3. 다른 모든 요소의 경우, 요소의 내용은 새 `DocumentFragment` 의 노드로 대체됩니다.

### Security considerations

`innerHTML` 이 웹 페이지에 텍스트를 삽입하는데 사용되는 것은 종종 볼 수 있습니다. 이것은 사이트의 공격 경로가 되어 잠재적인 보안 위험이 발생할 수 있습니다.

```js
const name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

이것은 [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) 공격처럼 보일 수 있지만, 결과는 무해합니다. HTML5 는 `innerHTML` 과 함께 삽입된 {{HTMLElement("script")}} 태그가 [실행되지 않도록](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0) 지정합니다.

그러나 {{HTMLElement("script")}} 요소를 사용하지 않고, 자바스크립트를 실행하는 방법이 있으므로, `innerHTML` 을 사용하여 제어할 수 없는 문자열을 설정할 때 마다 여전히 보안위험이 있습니다. 예를들어:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

따라서 일반 텍스트를 삽입 할 때는 `innerHTML` 을 사용하지 않는 것이 좋습니다. 대신 {{domxref("Node.textContent")}}를 사용하십시오. 이것은 전달 된 내용을 HTML로 파싱하지 않고 원시 텍스트(raw text)로 삽입합니다.

> **경고:** 프로젝트가 보안 점검을 거치게 되는 프로젝트인 경우, `innerHTML` 을 사용하면 코드가 거부 될 가능성이 높습니다. 예를 들어, [브라우저 확장](/ko/docs/Mozilla/Add-ons/WebExtensions)에서 [`innerHTML`을 사용하고](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) [addons.mozilla.org](https://addons.mozilla.org/)에 확장을 제출하면 자동 검토 프로세스를 통과하지 못합니다.

## Example

이 예제에서는 `innerHTML` 을 사용하여 메시지를 웹 페이지의 상자에 기록하는 매커니즘을 만듭니다.

### JavaScript

```js
function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");
```

`log()` 함수는 {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}}을 사용하여 {{jsxref("Date")}} 객체에서 현재 시간을 가져 오고, 타임 스탬프와 메시지 텍스트가 있는 문자열을 작성하여 로그 출력을 만듭니다. 그런 다음 메시지는 클래스 `"log"`가 있는 상자에 추가됩니다.

{{domxref("MouseEvent")}} 기반 이벤트 ({{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/click_event", "click")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}와 같은) 정보를 기록하는 두 번째 메서드를 추가합니다:

```js
function logEvent(event) {
  var msg =
    "Event <strong>" +
    event.type +
    "</strong> at <em>" +
    event.clientX +
    ", " +
    event.clientY +
    "</em>";
  log(msg);
}
```

그리고나서, 우리의 로그가 들어있는 상자에 여러 마우스 이벤트에 대한 이벤트 핸들러로 사용합니다.

```js
var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

HTML은 우리의 예제에서 아주 간단합니다.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

클래스 `"box"`를 갖는 {{HTMLElement("div")}} 는 레이아웃을 위한 컨테이너 입니다. class가 `"log"` 인 `<div>` 는 로그 텍스트 자체의 컨테이너 입니다.

### CSS

다음 CSS는 우리의 예제 내용을 꾸밉니다.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### Result

결과 컨텐츠는 다음과 같습니다. 마우스를 상자 안팎으로 움직이거나 클릭하고 로그에서 출력을 볼 수 있습니다.

{{EmbedLiveSample("Example", 640, 350)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Node.textContent")}} 과 {{domxref("Node.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- DOM 트리에 HTML 파싱하기: {{domxref("DOMParser")}}
- XML 또는 HTML을 DOM 트리로 직렬화 하기: {{domxref("XMLSerializer")}}
