---
title: Document.getElementById()
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

**`Document.getElementById()`** 메서드는 주어진 문자열과 일치하는 {{domxref("Element.id", "id")}} 속성을 가진 요소를 찾고, 이를 나타내는 {{domxref("Element")}} 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용합니다.

ID가 없는 요소에 접근하려면 {{domxref("Document.querySelector()")}}를 사용하세요. 모든 {{Glossary("CSS selector", "선택자")}}를 사용할 수 있습니다.

## 구문

```js
document.getElementById(id);
```

### 매개변수

- **`id`**
  - : 찾으려는 요소 ID. ID는 대소문자를 구분하는 문자열로, 문서 내에서 유일해야 합니다. 즉, 하나의 값은 하나의 요소만 사용할 수 있습니다.

### 반환 값

주어진 ID와 일치하는 DOM 요소를 나타내는 {{domxref("Element")}} 객체. 문서 내에 주어진 ID가 없으면 `null`.

## 예제

### HTML

```html
<html>
  <head>
    <title>getElementById 예제</title>
  </head>
  <body>
    <p id="para">어떤 글</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### 결과

{{ EmbedLiveSample('예제', 250, 100) }}

## 용법

메서드 이름 중 `"Id"`의 대소문자가 정확해야 합니다. `getElementByID()`가 자연스러워 보일지라도 유효하지 않은 이름이기에 사용할 수 없습니다.

{{domxref("Document.querySelector()")}}나 {{domxref("Document.querySelectorAll()")}}과는 달리 `getElementById()`는 전역 `document` 객체의 메서드로만 사용할 수 있고, DOM의 다른 객체는 메서드로 가지고 있지 않습니다. ID 값은 문서 전체에서 유일해야 하며 "국지적"인 버전을 쓸 이유가 없기 때문입니다.

### 예제

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p id="test1">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      var parentDOM = document.getElementById("parent-id");
      var test1 = parentDOM.getElementById("test1");
      //throw error
      //Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

`id`에 맞는 요소가 없을 때 `getElementById()`는 `null`을 반환합니다. 매개변수 `id`가 대소문자를 구분한다는 점을 기억하세요. `document.getElementById("Main")`는 `<div id="main">` 대신 `null`을 반환하는데 "M"과 "m"을 구분하기 때문입니다.

**문서에 없는 요소**는 `getElementById()`가 팀색하지 않습니다. 요소를 동적으로 생성해서 ID를 부여하더라도, {{domxref("Node.insertBefore()")}}나 비슷한 메서드로 문서 트리에 삽입해야 `getElementById()`로 접근할 수 있습니다.

```js
var element = document.createElement("div");
element.id = "testqq";
var el = document.getElementById("testqq"); // el이 null!
```

**HTML이 아닌 문서**. DOM 구현체는 요소의 어떤 속성이 ID인지 알고 있어야 합니다. 문서의 DTD가 정의하고 있지 않으면, 속성명이 "id"라고 해도 ID 유형인건 아닙니다. [XHTML](/ko/docs/XHTML), [XUL](/ko/docs/XUL) 등 자주 쓰이는 문서의 경우 `id` 속성을 ID 유형으로 정의하고 있습니다. ID 유형의 속성이 어떤 것인지 모르는 다른 구현의 경우 `null`을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Document")}}는 문서 안의 요소에 접근할 수 있는 다른 메서드와 속성으로의 참조를 가지고 있습니다.
- {{domxref("Document.querySelector()")}}를 사용하면 `'div.myclass'` 처럼 선택자로 요소를 탐색할 수 있습니다.
- [xml:id](/ko/docs/xml/xml:id) - `getElementById()`가 (Ajax 호출 등으로 받은) XML 문서에서 "xml:id" 속성 값을 사용할 수 있도록 도와주는 메서드를 가지고 있습니다.
