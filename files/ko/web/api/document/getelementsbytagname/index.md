---
title: Document.getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
---

{{ ApiRef("DOM") }}
{{domxref("Document")}} 인터페이스의 **`getElementsByTagName`** 메소드는 엘리먼트의 {{domxref("HTMLCollection")}} 과 주어진 태그명을 반환합니다. 루트 노드를 포함해 전체 다큐먼트를 대상으로 검색됩니다. 반환된 `HTMLCollection` 은 살아있는데, 이는 `document.getElementsByTagName()` 을 다시 호출하지 않아도 자동으로 업데이트하여 DOM 트리와 동기화된 상태를 유지함을 의미합니다.

## 구문

```js
var elements = document.getElementsByTagName(name);
```

- _elements_ 는 트리에 나타난 순서대로 발견된 살아있는 {{domxref("HTMLCollection")}} 입니다(하지만 아래 노트를 보세요).
- _name_ 은 엘리먼트의 이름을 나타내는 문자열입니다. 특수 문자 "\*" 은 모든 엘리먼트를 나타냅니다.

> **참고:** [최신 W3C 명세](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html)에서는 _elements_ 가 `HTMLCollection` 라고 하지만, WebKit 브라우저에서는 {{domxref("NodeList")}} 를 반환합니다. 자세한 내용은 [Firefox bug 14869](https://bugzil.la/14869) 버그를 확인하시기 바랍니다.

## 예시

다음 예시에서, `getElementsByTagName()` 는 특정 부모 엘리먼트에서 시작해 그 부모 엘리먼트의 DOM 을 거쳐 위에서 아래로 재귀 탐색을하고, 태그 `name` 파라미터에 일치하는 모든 자손 엘리먼트의 집합을 생성합니다. 여기에서는 `document.getElementsByTagName()` 과 기능적으로 동일하며 DOM 트리의 특정 엘리먼트를 시작으로하여 탐색하는 {{domxref("Element.getElementsByTagName()")}} 모두를 시연합니다.

버튼 클릭은 `getElementsByTagName()` 을 사용해 특정 부모의 자손 문단(p) 엘리먼트를 셉니다(다큐먼트 자체 또는 중첩된 {{HTMLElement("div")}} 엘리먼트 중 하나).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByTagName example</title>
    <script>
      function getAllParaElems() {
        var allParas = document.getElementsByTagName("p");
        var num = allParas.length;
        alert("There are " + num + " paragraph in this document");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagName("p");
        var num = div1Paras.length;
        alert("There are " + num + " paragraph in #div1");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagName("p");
        var num = div2Paras.length;
        alert("There are " + num + " paragraph in #div2");
      }
    </script>
  </head>
  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button
    ><br />

    <button onclick="div1ParaElems();">
      show all p elements in div1 element</button
    ><br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## 노트

HTML 다큐먼트에서 호출될 때, getElementsByTagName() 은 처리전에 인수를 소문자로 변환합니다. 이는 HTML 다큐먼트의 하위 트리에 속한 낙타 표기법의 SVG 엘리먼트를 찾으려할 때 바람직하지 않습니다. 그런 경우에는 {{Domxref("document.getElementsByTagNameNS()")}} 가 유용합니다.[Firefox bug 499656](https://bugzil.la/499656) 버그도 확인하시기 바랍니다.

`document.getElementsByTagName()` 은 전체 다큐먼트를 포함하여 탐색한다는 점만 제외하고 {{domxref("Element.getElementsByTagName()")}} 와 유사합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("Element.getElementsByTagName()")}}
- {{domxref("document.getElementById()")}} 는 `id` 로 엘리먼트의 참조를 반환합니다
- {{domxref("document.getElementsByName()")}} 은 `name` 으로 엘리먼트의 참조를 반환합니다
- {{domxref("document.querySelector()")}} 는 `'div.myclass'` 같은 쿼리를 사용할 수 있는 강력한 셀렉터입니다.
