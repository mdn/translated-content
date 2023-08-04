---
title: Examples
slug: Web/API/Document_Object_Model/Examples
---

{{DefaultAPISidebar("DOM")}}

이 장에서는 DOM을 사용한 웹, XML 개발의 자세한 예제를 제공합니다. 예제는 문서의 객체를 조작하기 위해 가능한 JavaScript의 공통 API, 트릭, 패턴을 사용합니다.

## 예제 1: 높이와 너비

아래의 예제는 다양한 면적의 이미지를 통해 `height` 와 `width` 속성을 사용하는 방법을 보여줍니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>width/height 예제</title>
    <script>
      function init() {
        var arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        var objOutput = document.getElementById("output");
        var strHtml = "<ul>";

        for (var i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>image" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "<\/li>";
        }
        strHtml += "<\/ul>";
        objOutput.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="init();">
    <p>
      이미지 1: 높이, 너비, 스타일 없음
      <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      이미지 2: 높이="50", 너비="500", 스타일 없음
      <img
        id="image2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>
    <p>
      이미지 3: 높이, 너비 없음, 스타일="height: 50px; width: 500px;"
      <img
        id="image3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>
    <div id="output"></div>
  </body>
</html>
```

## 예제 2: 이미지 속성

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>이미지 border 수정</title>

    <script>
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="border 테스트" />
    </p>

    <form name="FormName">
      <input
        type="button"
        value="border를 20px로 만들기"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="border를 5px로 만들기"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## 예제 3: 스타일 조작

아래의 간단한 예제에서 HTML 요소의 일부 기본 스타일 속성들은 요소의 스타일 객체와 DOM에서 검색하고 설정할 수 있는 해당 객체의 CSS 스타일 속성을 사용하여 접근합니다. 이 경우 개별 스타일을 직접 조작합니다. 다음 예제(예제 4)에서는 stylesheet와 해당 규칙을 사용해 전체 문서의 스타일을 변경할 수 있습니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>색상 및 글꼴 크기 변경</title>

    <script>
      function changeText() {
        const p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## 예제 4: Stylesheet 사용

{{domxref("document")}} 객체의 {{domxref("document.styleSheets", "styleSheets")}} 속성은 그 문서에서 로드된 stylesheet 목록을 반환합니다. 이 예제에서처럼 stylesheet, 스타일, {{domxref("CSSRule")}} 객체를 사용해 이러한 stylesheet와 규칙에 개별적으로 접근할 수 있습니다. 다음 코드는 모든 스타일 규칙의 Selector를 콘솔에 출력합니다.

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

다음과 같이 세가지 규칙이 정의된 stylesheet가 있는 경우, 스크립트의 결과물은 다음과 같습니다

```css
body {
  background-color: darkblue;
}
p {
  font-face: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

```
BODY
P
#LUMPY
```

## 예제 5: Event 전파

이번 예제에서는 DOM에서 어떻게 이벤트가 실행되고 처리되는지 매우 간단하게 알아보겠습니다. HTML 문서의 BODY가 로드되면, TABLE의 상단 행에 이벤트 수신기가 등록됩니다. 이벤트 수신기는 이벤트를 처리하기 위해 stopEvent 함수를 실행합니다. stopEvent 함수는 테이블의 하단 셀의 값을 변경합니다.

stopEvent는 이벤트 객체 메서드인 {{domxref("event.stopPropagation")}}도 호출합니다. 이 메서드는 이벤트가 DOM으로 더 이상 버블링(bubbling)되지 않도록 합니다. 테이블이 클릭될 때 메시지를 표시해야 하는 {{domxref("Element.click_event","onclick")}} 이벤트 처리기가 있다는 것에 주의하세요. 하지만 stopEvent 메서드가 전파를 중지했기 때문에 테이블의 데이터가 업데이트된 후 이벤트 단계는 효과적으로 종료되고, 이를 확인하는 alert 창이 표시됩니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>이벤트 전파</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(event) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "안녕하세요";

        // 이벤트가 t-daddy로 전파되지 않도록 합니다.
        ev.stopPropagation();
        alert("이벤트 전파가 중지되었습니다.");
      }

      function load() {
        elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('안녕하세요.');">
      <tr id="tbl1">
        <td id="c1">1</td>
      </tr>
      <tr>
        <td id="c2">2</td>
      </tr>
    </table>
  </body>
</html>
```

## Example 6: getComputedStyle

이번 예제에서는 {{domxref("window.getComputedStyle")}} 메서드가 `style` 속성이나 JavaScript(예시: `elt.style.backgroundColor="rgb(173, 216, 230)"`)를 사용하지 않고 요소의 스타일을 가져오는 방법을 보여줍니다. 후자와 같은 유형의 스타일은 {{domxref("HTMLElement.style", "elt.style")}} 처럼 직접적인 속성으로 가져올 수 있습니다. 자세한 내용은 [DOM CSS Properties List](/ko/docs/Web/CSS/Reference)를 참고하세요.

`getComputedStyle()`은 {{domxref("CSSStyleDeclaration")}} 객체를 반환합니다. 다음 예제에서 알 수 있듯이 이 객체의 개별 스타일 속성은 {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} 메서드를 사용하여 참조할 수 있습니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>getComputedStyle 예제</title>

    <script>
      function cStyles() {
        const RefDiv = document.getElementById("d1");
        const txtHeight = document.getElementById("t1");
        const h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        const txtWidth = document.getElementById("t2");
        const w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        const txtBackgroundColor = document.getElementById("t3");
        const b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");

        txtBackgroundColor.value = b_style;
      }
    </script>

    <style>
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

## Example 7: 이벤트 객체 속성 표시

이번 예제에서는 DOM 메서드를 이용해 {{domxref("window.onload")}} {{domxref("event")}} 객체의 모든 속성과 값들을 테이블에 표시하는 방법과, 객체의 속성을 반복하여 값을 가져오는 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프의 유용한 사용법을 보여줍니다.

이벤트 객체들의 특성은 브라우저 마다 상당히 다르며, 표준 속성은 [WHATWG DOM Standard](https://dom.spec.whatwg.org)에 있습니다. 하지만 많은 브라우저에서 이 기능을 크게 확장하고 있습니다.

아래의 코드를 빈 텍스트 파일에 넣고 여러 브라우저에서 로드하면 속성의 수와 이름들이 다르다는 사실에 놀랄 것입니다. 페이지에 일부 요소를 추가하고 다른 이벤트 처리기에서 이 함수를 호출할 수도 있습니다.

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>이벤트 속성 표시</title>

    <style>
      table {
        border-collapse: collapse;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 2px 10px 2px 10px;
      }

      .odd {
        background-color: #efdfef;
      }
      .even {
        background-color: #ffffff;
      }
    </style>

    <script>
      function showEventProperties(e) {
        function addCell(row, text) {
          const cell = row.insertCell(-1);
          cell.appendChild(document.createTextNode(text));
        }

        const event = e || window.event;
        document.getElementById("eventType").innerHTML = event.type;

        const table = document.createElement("table");
        const thead = table.createTHead();
        let row = thead.insertRow(-1);
        const labelList = ["#", "Property", "Value"];
        const len = labelList.length;

        for (let i = 0; i < len; i++) {
          addCell(row, labelList[i]);
        }

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (var e in event) {
          row = tbody.insertRow(-1);
          row.className = row.rowIndex % 2 ? "odd" : "even";
          addCell(row, row.rowIndex);
          addCell(row, e);
          addCell(row, event[e]);
        }
        document.body.appendChild(table);
      }

      window.onload = (event) => {
        showEventProperties(event);
      };
    </script>
  </head>

  <body>
    <h1>DOM의 특성 <span id="eventType"></span> 이벤트 객체</h1>
  </body>
</html>
```

## Example 8: DOM 테이블 인터페이스 사용하기

DOM {{domxref("HTMLTableElement")}} 인터페이스는 편리하게 테이블을 생성하고 조작해주는 메서드를 제공합니다. 자주 사용되는 메서드는 {{domxref("HTMLTableElement.insertRow")}}와 {{domxref("HTMLTableRowElement.insertCell")}}입니다.

아래 코드에서는 기존 테이블에 행과 셀을 추가하는 방법을 보여줍니다.

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  const table = document.getElementById("table0");
  const row = table.insertRow(-1);
  let cell;
  let text;

  for (var i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### 참고

- 테이블의 {{domxref("element.innerHTML","innerHTML")}} 속성을 사용하여 테이블을 수정하면 안 됩니다. 단, 테이블 전체나 셀의 내용을 작성할 때는 이 속성을 사용할 수 있습니다.

- 만약 DOM의 핵심 메서드인 {{domxref("document.createElement")}}와 {{domxref("Node.appendChild")}}를 이용하여 행과 셀을 작성하는데 사용되는 경우, 인터넷 익스플로어(IE)에서는 해당 메서드를 tbody 요소에 추가해야 하지만 다른 브라우저는 테이블 요소에 추가할 수 있습니다(행은 마지막 tbody 요소에 추가됩니다).

- 테이블을 생성하고 수정하는 데 사용할 수 있는 더 많은 편리한 메서드가 [table interface](/ko/docs/Web/API/HTMLTableElement#Methods)에 있습니다.
