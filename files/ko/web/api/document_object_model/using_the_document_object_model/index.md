---
title: W3C DOM Level 1 Core 사용하기
slug: Web/API/Document_object_model/Using_the_Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

The W3C's DOM Level 1 Core 는 documents의 콘텐츠 트리를 변경하기 위한 강력한 객체형 모델입니다. 웹 스크립팅을 위한 초석이기도 한 이 모델은 Mozilla Firefox and Microsoft Internet Explorer를 포함한 주요 브라우저에서 지원합니다.

## What is a content tree?

많은 HTML 웹 페이지 저자(이하 개발자)는 HTML를 - 태그와 글자로 버무려진 - 평평한 무언가라고 생각할 수 있습니다. 하지만 HTML은, 그 이상의 의미를 가지고 있습니다. 모든 HTML 문서 (SGML document or XML document 또한) 트리 구조를 가지고 있습니다. 예를 들면 아래의 문서와 도면의 구조는 굉장히 유사합니다. (완전히 같지는 않습니다! [whitespace in the DOM](/ko/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM) 문서를 참조하세요.)

```html
<html>
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

![내용을 포함하는 루트 및 노드 요소가 있는 문서의 트리 형식의 DOM](using_the_w3c_dom_level_1_core-doctree.jpg)

모질라에서 어떤 HTML 문서를 파싱할 때, 컨텐츠 트리를 만들고 이를 HTML 보여줄 때 사용합니다.

DOM Level 1 Core에 대해서 설명하기 위한 용어에 대한 설명입니다. 위 도면에서 나온 모든 박스는 트리의 노드입니다. 한 노드 위의 선은 노드 간의 부모 - 자식 관계를 설명합니다. 상위 노드가 부모 노드이고, 하위 노드는 자식 노드입니다. 두 자식 노드를 같은 부모 노드를 가지고 있기 때문에 형제자매 노드라고 부를 수 있습니다. 비슷하게, ancestors와 descendants라는 용어를 사용할 수도 있습니다.

## What does the DOM Level 1 Core let me do?

The W3C DOM Level 1은 컨텐츠 트리를 웹 페이지 **개발자가 원하는 어떤 방식으로든** 바꿀 수 있게 합니다. 백지 상태에서 HTML 문서를 제작할 수 있을 만큼 강력합니다. 또한 스크립트 언어를 통해 언제 어디서든 HTML 문서를 개발자가 조작할 수 있도록 합니다. 자바스크립트를 통해서 개발자는 동적으로 DOM을 가장 쉽게 변경할 수 있습니다. 자바스크립트는 전역 객체의 `document` 객체를 통해 오래된 브라우저가 접근했던 그 방식대로, HTML 문서에 접근 가능합니다, 이 `document` 객체는 the W3C's DOM Level 1 spec의 [Document interface](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document) 가 적용되어 있습니다.

## A simple example

개발자가 상단의 HTML 문서에서 header의 내용을 바꾸고, 한 문단(Paragraph) 대신 두 문단으로 적용하고 싶다면, 아래와 같은 스크립트를 작성할 수 있습니다.

### HTML Content

```html
<body>
  <input type="button" value="Change this document." onclick="change()" />
  <h2>Header</h2>
  <p>Paragraph</p>
</body>
```

### JavaScript Content

```js
function change() {
  // document.getElementsByTagName("H2") 는 <h2> 엘리먼트의
  // NodeList를 반환(return)합니다. 0부터 시작합니다.

  var header = document.getElementsByTagName("H2").item(0);
  // 헤더의 첫번째 자식 노드는 Text 노드입니다.
  header.firstChild.data = "A dynamic document";
  // 이제 헤더는 "A dynamic document"가 되었습니다.

  var para = document.getElementsByTagName("P").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // 두번째 문단을 만들기 위한 새로운 Text 노드를 만들었습니다.
  var newText = document.createTextNode("This is the second paragraph.");
  // 두번째 문단을 만들기 위한 새로운 p 엘리먼트를 만들었습니다.
  var newElement = document.createElement("P");
  // 새로운 p 엘리먼트에 텍스트를 넣어 문단을 만듭니다.
  newElement.appendChild(newText);
  // 생성한 문단을 HTML 문서 마지막에 넣기 위해
  // (para의 부모인) HTML BODY에 append합니다.
  para.parentNode.appendChild(newElement);
}
```

{{ EmbedLiveSample('A_simple_example', 800, 300) }}

[여기](using_the_w3c_dom_level_1_core-doctree.jpg)에서 완성된 예시를 확인할 수 있습니다.

## How can I learn more?

이제 DOM의 기본적인 개념에 대한 설명이 끝났습니다. [DOM Level 1 fundamental methods](/ko/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces) 에 대해서 궁금하시다면, 더 자세히 공부하실 수 있습니다.

더욱 정확하고 엄밀한 설명은 W3C [DOM Level 1 Core specification](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) 에서 확인하실 수 있습니다. 개발자에게 정보는 DOM 객체에 대한 설명과, 객체의 특성과 메소드에 대한 설명이 특히 유용합니다. [MDN의 다른 DOM 관련 문서](/ko/docs/Web/API/Document_Object_Model)도 참고 부탁 드립니다.

**Original Document Information**

- Author(s): L. David Baron \<dbaron at dbaron dot org>
- Copyright Information: © 1998-2005 by individual mozilla.org contributors; content available under a [Creative Commons license](https://www.mozilla.org/foundation/licensing/website-content.html)
