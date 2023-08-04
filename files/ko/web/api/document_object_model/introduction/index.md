---
title: DOM 소개
slug: Web/API/Document_Object_Model/Introduction
---

이 문서는 {{glossary("DOM")}}에 대한 개념을 간략하게 소개하는 문서이다: DOM 이 무엇이며, 그것이 어떻게 {{glossary("HTML")}}, {{glossary("XML")}} 문서들을 위한 구조를 제공하는지, 어떻게 DOM 에 접근하는지, API 가 어떻게 사용되는지에 대한 참조 정보와 예제들을 제공한다.

## DOM 이란?

문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 nodes와 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

웹 페이지는 일종의 문서(document)다. 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 HTML 소스 자체로 나타나기도 한다. 동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다. DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다. DOM 은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다.

[W3C DOM](http://www.w3.org/DOM/), [WHATWG DOM](https://dom.spec.whatwg.org) 표준은 대부분의 브라우저에서 DOM 을 구현하는 기준이다. 많은 브라우저들이 표준 규약에서 제공하는 기능 외에도 추가적인 기능들을 제공하기 때문에 사용자가 작성한 문서들이 각기 다른 DOM 이 적용된 다양한 브라우저 환경에서 동작할 수 있다는 사실을 항상 인지하고 있어야 한다.

예를 들어, 표준 DOM 에서는 문서 안에서 모든 `<P>` elements 에 대한 list 를 리턴하는 `getElementsByTagName` method 를 정의하고 있다:

```js
var paragraphs = document.getElementsByTagName("P");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

웹 페이지를 수정하거나 생성하는데 사용되는 모든 property, method, event 들은 objects 로 구성된다. 예를 들어 document object 는 document 자체를 의미하며, table object 는 HTML table 에 접근하기 위한 `HTMLTableElement` DOM 인터페이스를 구현한 것이다. 이 문서는 Gecko 기반의 브라우저에서 구현된 DOM 에 대한 object-by-object reference 를 제공한다.

## DOM 과 자바스크립트

이 문서의 대부분의 예제와 같이, 위에서 사용된 예제는 {{glossary("JavaScript")}}이다. 위의 예제는 자바스크립트로 작성되었지만 문서(document) 와 문서의 요소(element) 에 접근하기 위해 DOM 이 사용되었다. DOM 은 프로그래밍 언어는 아니지만 DOM 이 없다면 자바스크립트 언어는 웹 페이지 또는 XML 페이지 및 요소들과 관련된 모델이나 개념들에 대한 정보를 갖지 못하게 된다. 문서의 모든 element - 전체 문서, 헤드, 문서 안의 table, table header, table cell 안의 text - 는 문서를 위한 document object model 의 한 부분이다. 때문에, 이러한 요소들을 DOM 과 자바스크립트와 같은 스크립팅 언어를 통해 접근하고 조작할 수 있는 것이다.

초창기에는 자바스크립트와 DOM 가 밀접하게 연결되어 있었지만, 나중에는 각각 분리되어 발전해왔다. 페이지 콘텐츠(the page content)는 DOM 에 저장되고 자바스크립트를 통해 접근하거나 조작할 수 있다. 이것을 방정식으로 표현하면 아래와 같다:

API (web or XML page) = DOM + JS (scripting language)

DOM 은 프로그래밍 언어와 독립적으로 디자인되었다. 때문에 문서의 구조적인 표현은 단일 API 를 통해 이용가능하다. 이 문서에서는 자바스크립트를 주로 사용하였지만, DOM 의 구현은 어떠한 언어에서도 가능하다. 아래는 파이썬을 사용한 예제이다:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # DOM property of document object;
p_list = doc.getElementsByTagName("para");
```

웹에서 자바스크립트 사용하기와 관련된 기술에 대한 추가정보는 [자바스크립트 기술 개요](/ko/docs/Web/JavaScript/JavaScript_technologies_overview) 문서를 참조하라.

## DOM 에 어떻게 접근할 수 있는가?

DOM 을 사용하기 위해 특별히 해야할 일은 없다. 각각의 브라우저는 자신만의 방법으로 DOM 구현하였으며, 이로 인해 실제 DOM 기준을 따르는지 확인해야 하는 번거로움이 발생하였다. (이 문제는 이 문서에서 피하고 싶어하는 주제이기도 하다.) 모든 웹 브라우저는 스크립트가 접근할 수 있는 웹 페이지를 만들기 위해 어느 정도의 DOM 을 항상 사용한다.

스크립트를 작성할 때(인라인 `<script>` 요소를 사용하거나 웹 페이지 안에 있는 스크립트 로딩 명령을 사용하여), 문서 자체를 조작하거나 문서의 children 을 얻기 위해 {{domxref("document")}} 또는 [`window`](/ko/docs/DOM/window) elements 를 위한 API 를 즉시 사용할 수 있다. DOM 프로그래밍은 아래처럼 [`window`](/ko/docs/DOM/window) object 로 부터 [`alert()`](/ko/docs/DOM/window.alert) 함수를 사용하여 alert message 를 표시하는 매우 간단한 것일 수도 있고 다음번 예제처럼 새로운 content 를 작성하는 복잡한 DOM 이 될 수도 있다.

```html
<body onload="window.alert('welcome to my home page!');"></body>
```

아래의 자바스크립트는 문서가 로드될 때(모든 DOM을 사용할 수 있게 되는 때임) 실행되는 함수를 정의하였다. 이 함수는 새로운 H1 element 를 생성하고, element 에 text 를 추가하며, H1 을 이 문서의 트리에 추가한다.

```html
<html>
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = function () {
        // create a couple of elements in an otherwise empty HTML page
        var heading = document.createElement("h1");
        var heading_text = document.createTextNode("Big Head!");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## 중요한 데이터 타입들

이 문서는 objects 와 types 을 최대한 간단하게 설명하려 한다. API 에는 우리가 반드시 알고 있어야 할 수많은 data types 이 있다는 사실을 염두해 두기 바란다. 이 문서에서는 nodes 는 `element`s 로, 노드의 arrays 는 `nodeList`s(또는 `element`s), attribute 노드들은 `attribute`s 로 표현하였다.

아래의 표는 이러한 data types 에 대한 간략한 설명이다.

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>document</code></td>
      <td>
        <p>
          member 가 document type 의 object 를 리턴할 때(예를 들어 element의
          <strong><code>ownerDocument</code></strong> property 는 그것이 속해
          있는 document 를 return 한다. ), 이 object 는 root document object
          자체이다. 는 <code>document</code> object 에 대한 설명은
          <a href="/ko/docs/DOM/document" title="DOM/document"
            >DOM <code>document</code> Reference</a
          >
          챕터를 참조하라.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>element</code></td>
      <td>
        <p>
          <code>element</code> 는 DOM API 의 member 에 의해 return 된 element
          또는 <code>element</code> type 의 node 를 의미한다.
          <a href="/ko/docs/Web/API/Document/createElement"
            >document.createElement()</a
          >
          method 가 <code>node</code> 를 참조하는 object 를 리턴한다고 말하는
          대신, 이 method 가 DOM 안에서 생생되는 <code>element</code> 를
          리턴한다고 좀 더 단순하게 말할 수 있다. <code>element</code> 객체들은
          DOM <code>Element</code> interface 와 함께 좀 더 기본적인
          <code>Node</code> interface 를 구현한 것이기 때문에 이 reference 에는
          두 가지가 모두 포함되었다고 생각하면 된다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>nodeList</code></td>
      <td>
        <p>
          <code>nodeList</code> 는 elements 의 배열이다. (<a
            href="/ko/docs/Web/API/Document/getElementsByTagName"
            >document.getElementsByTagName()</a
          >
          method 에 의해 리턴된 것과 같은) nodeList의 Items 은 index 를 통해
          접근 가능하며, 다음과 같이 두 가지 방식이 있다:
        </p>
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        위의 방식들은 동일한 것이다. <strong><code>item()</code></strong
        >method는 <code>nodeList</code> object 의 단일 method 이다. 두번째
        방식은 list 에서 두번째 item 을 fetch 하는 전형적인 array syntax 이다.
      </td>
    </tr>
    <tr>
      <td><code>attribute</code></td>
      <td>
        <p>
          attribute 가 member 에 의해 리턴되는 것은(예를 들어
          <strong><code>createAttribute()</code></strong> method 호출에 의한
          리턴), attribute 에 대한 특별한 인터페이스를 노출하는 object reference
          이다. attributes 는 DOM 에서 elements 와 같은 nodes 이다. elements
          만큼 많이 사용되지는 않는다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>namedNodeMap</code></td>
      <td>
        <p>
          <code>namedNodeMap</code> 는 array 와 유사하지만 items 은 name 또는
          index 에 의해 접근 가능하다. 리스트는 특별한 정렬이 적용되지 않았기
          enumeration 할 때 index 를 주로 사용한다. <code>namedNodeMap</code> 는
          이를 위해 item() method 가 있으며, <code>namedNodeMap</code> 에 item
          을 추가하거나 삭제할 수 있다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## DOM interfaces

이 문서는 objects 와 DOM 에서 조작가능한 것들에 대해 설명하고 있다. 사람들은 HTML FORM element 가 `HTMLFormElement` interface 로부터 **`name`** property 를 얻고, **`className`** property 는 `HTMLElement` interface 로부터 얻는 것에 대해 별로 관심을 보이지 않는 것 같다. 두가지 경우 모두, property 는 form object 안에 있는 것이다.

하지만 DOM 안에 구현된 objects 와 interfaces 사이의 관계는 혼동될 수 있다. 이 섹션에서는 DOM specification 안의 실제 interfaces 와 그들을 어떻게 활용할 수 있는지에 대해 살펴보도록 하겠다.

### Interfaces 와 Objects

많은 objects 가 여러 개의 다른 interfaces 와 연관되어 있다. 예를 들어, table object 는 `createCaption`, `insertRow` method 들이 포함된 {{domxref("HTMLTableElement")}} 을 구현한 것이다. table object 는 HTML element 이기도 하기 때문에, `table` 은 `Element` interface(DOM {{domxref("Element")}} Reference 챕터 참조)도 구현한다. 마지막으로, HTML element 는 DOM 이 연관되어 있는 한 nodes 트리(tree)에서 하나의 node 이다. nodes 트리는 웹 페이지 또는 XML 페이지를 위한 object model 을 구성한다. 때문에 table element 는 보다 기본적인 `Element` 에서 파생된 `Node` interface 를 구현하고 있다.

아래의 예제처럼, `table` object 를 참조하게 되면, 기본적으로 이들 3 가지 interfaces 를 사용할 수 있게 된다.

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if (tableAttrs[i].nodeName.toLowerCase() == "border") table.border = "1";
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### DOM 의 핵심 Interfaces

이 섹션은 DOM 에서 가장 많이 사용되는 interfaces 를 정리해보았다. 여기에서는 이들 API 가 실제로 어떤 일을 하는지 설명하는 대신 DOM 을 사용하면서 자주 만나게 되는 methods 와 properties 를 보여줄 것이다. 이들 API 는 이 책의 마지막에 소개된 [DOM 예제](/ko/docs/Gecko_DOM_Reference/Examples)에서도 사용되었다.

`Document` 와 `window` objects 는 DOM 프로그래밍에서 가장 자주 사용하는 objects 이다. 간단하게 설명하자면, `window` object 는 브라우저와 같다고 할 수 있으며, `document` object 는 root document 자체라고 할 수 있다. generic `Node` interface 로부터 상속받은 `Element` 와 `Node`, `Element` interfaces 가 협력하여 각각의 elements 에서 사용할 수 있는 수많은 methods 와 properties 를 제공한다. 이러한 elements 는 이전 섹션에서 설명한 `table` object 예제에서도 살펴봤듯이, elements 가 보유한 데이터를 처리할 수 있는 특정한 interfaces 도 가지고 있다.

아래는 웹 페이지, XML 페이지 스크립팅에서 DOM 을 사용하는 공통적인 API 들의 간략한 목록이다.

- `document.getElementById(id)`
- `document.getElementsByTagName(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute`
- `element.getAttribute`
- `element.addEventListener`
- [`window.content`](/ko/docs/DOM/window.content)
- [`window.onload`](/ko/docs/DOM/window.onload)
- [`window.dump`](/ko/docs/DOM/window.dump)
- [`window.scrollTo`](/ko/docs/DOM/window.scrollTo)

## DOM API 테스팅

이 문서는 사용자가 웹 개발에 사용할 수 있는 모든 interface 에 대한 예제를 제공한다. 예제는 `<script>` element 안에서 DOM 에 접근하는 완벽한 HTML 페이지 형태인 것도 있고, form 에서 script 를 실행하기 위해 버튼과 같은 interface 가 필요한 경우도 있으며, DOM 이 목록화되어 수행되는 HTML elements 도 있을 것이다. 사용자들은 이러한 예제를 새로운 HTML 문서에 복사하여 브라우저에서 실행할 수 있다.

어떤 예제는 매우 간단할 수도 있다. HTML elements 에 대한 interface의 기본적인 관계만 보여주는 이러한 예제를 실행할 때는, 스크립트에서 쉽게 접근할 수 있는 test page 를 설정할 수도 있다. 아래의 예제는 interface를 테스트 할 수 있는 함수가 위치할 수 있는 header 안에 `<script>` element 제공한다. 이 함수는 retrieve, set, 조작할 수 있는 attributes 가 포함된 HTML elements 가 사용되었으며, 브라우저에서 이들 함수를 호출하기 위해 웹 UI 를 제공한다.

사용자는 자신이 관심있어 하는 DOM interfaces 를 테스트 하기 위해, 이 test page 를 사용하거나 이와 비슷한 것을 만들어 브라우저에서 어떻게 동작하는지 확인할 수 있다. 사용자는 `test()` 함수 내용을 필요에 따라 업데이트할 수 있다. (버튼 추가, elements 추가 등)

```html
<html>
  <head>
    <title>DOM Tests</title>
    <script type="application/javascript">
      function setBodyAttr(attr, value) {
        if (document.body) eval("document.body." + attr + '="' + value + '"');
        else notSupported();
      }
    </script>
  </head>
  <body>
    <div style="margin: .5in; height: 400;">
      <p>
        <b><tt>text</tt>color</b>
      </p>
      <form>
        <select
          onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);">
          <option value="black">black</option>
          <option value="darkblue">darkblue</option>
        </select>
        <p>
          <b><tt>bgColor</tt></b>
        </p>
        <select
          onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);">
          <option value="white">white</option>
          <option value="lightgrey">gray</option>
        </select>
        <p>
          <b><tt>link</tt></b>
        </p>
        <select
          onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);">
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
        <small>
          <a href="http://www.brownhen.com/dom_api_top.html" id="sample">
            (sample link)</a
          ></small
        ><br />
      </form>
      <form>
        <input type="button" value="version" onclick="ver()" />
      </form>
    </div>
  </body>
</html>
```

단일 페이지(예를 들어, 웹 페이지의 색상에 영향을 주는 property 설정하는) 안의 수많은 interfaces 를 테스트하기 위해 설정 버튼, textfield, 또는 다른 HTML elements를 사용하여 유사한 테스트 페이지를 만들 수 있다. 아래의 스크린샷은 테스트를 위해 어떻게 interfaces를 그룹화하는지에 대한 아이디어를 제공하고 있다.

이 예제에서 드롭다운 메뉴는 웹 페이지에서 DOM 접근가능한 배경색상(`bgColor`), 하이퍼링크 색상(`aLink`), 텍스트 색상(`text`)을 동적으로 업데이트한다. 어떻게 자신의 test pages 를 디자인하더라도, interface 테스트는 DOM 을 효과적으로 사용하는 법을 배우는 데 매우 중요한 수단임을 명심하라.

## Subnav

- [DOM Reference](/ko/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/ko/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/ko/docs/Web/API/Document_Object_Model/Events)
- [Examples](/ko/docs/Web/API/Document_Object_Model/Examples)

{{DefaultAPISidebar("DOM")}}
