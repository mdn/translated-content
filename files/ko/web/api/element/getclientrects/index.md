---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
---

{{APIRef("DOM")}}

{{domxref("Element")}} 인터페이스의 **`getClientRects()`** 메서드는 클라이언트에 있는 각 [CSS 테두리 박스](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)에 대한 경계 사각형을 나타내는 {{DOMxRef("DOMRect")}} 객체의 컬렉션을 반환합니다.

대부분의 엘리먼트는 각각 하나의 border box만을 갖지만, 여러 줄의 [인라인 엘리먼트](/ko/docs/Web/HTML/Inline_elements)(예를 들면, 여러 줄의 {{HTMLElement("span")}} 엘리먼트)는 각각의 줄을 감싸는 테두리 박스를 갖습니다.

## 구문

```js
let rectCollection = object.getClientRects();
```

### 반환 값

반환 값은 각 엘리먼트와 관계된 CSS 테두리 박스인 {{DOMxRef("DOMRect")}} 객체의 컬렉션입니다. 각각의 {{DOMxRef("DOMRect")}} 객체는 뷰포트의 top-left에 상대적인 top-left인 픽셀 단위의 테두리 박스를 나타내는 읽기 전용 `left`, `top`, `right`, `bottom` 프로퍼티를 갖습니다. 캡션이 있는 테이블의 경우, 캡션이 테이블의 테두리 영역 밖에 있더라도 포함됩니다. 외부-`<svg>` 이외의 SVG 엘리먼트에서 호출될 때, 결과 사각형이 상대적인 "뷰포트"는 엘리먼트의 외부-`<svg>`가 설정하는 뷰포트입니다(명확히 하자면, 사각형은 외부-`<svg>`의 `viewBox` transform이 존재할 경우, 이에 의해 변형되기도 합니다).

원래 Microsoft는 각각의 텍스트 _줄_ 에 대한 `TextRectangle` 객체를 반환하기 위해 이 메서드를 만들었습니다. 하지만 CSSOM 작업 초안은 이 메서드가 각각의 _테두리 박스_ 에 대한 {{DOMxRef("DOMRect")}}를 반환하도록 명세합니다. 인라인 엘리먼트의 경우 두 정의가 동일합니다. 하지만 블록 엘리먼트의 경우 Mozilla는 단 하나의 사각형만 반환합니다.

> **참고:** Firefox 3.5는 `width`와 `height` 속성을 `TextRectangle` 객체에 추가합니다.

뷰포트 영역(또는 기타 스크롤 가능한 엘리먼트)에서 수행된 스크롤 양은 사각형을 계산할 때 고려됩니다.

반환된 사각형은 오버플로우가 발생할 수도 있는 모든 하위 엘리먼트의 경계를 포함하지 않습니다.

HTML {{HtmlElement("area")}} 엘리먼트, 스스로는 어떠한 것도 렌더링 하지 않는 SVG 엘리먼트, `display:none` 엘리먼트 및 일반적으로 직접 렌더링 되지 않는 엘리먼트의 경우, 빈 목록이 반환됩니다.

테두리 박스가 비어있는 CSS 박스의 경우에도 사각형은 반환됩니다. `left`, `top`, `right`, `bottom` 좌표는 여전히 의미가 있습니다.

소수점 단위의 픽셀 오프셋도 가능합니다.

## 예제

다음 예제들은 다양한 색상으로 클라이언트 사각형을 그립니다. 클라이언트 사각형을 칠하는 JavaScript 함수는 `withClientRectsOverlay` 클래스를 통해 마크업과 연결되어 있음을 참고하세요.

### HTML

예제 1: 다음 HTML은 세 개의 단락을 생성합니다. 각각은 `<div>` 블록 안에 있고, `<span>`을 안쪽에 포함하고 있습니다. 클라이언트 사각형은 두 번째 블록의 단락과 세 번째 블록의 `<span>` 엘리먼트를 칠합니다.

```html
<h3>span을 안쪽에 포함하는 단락</h3>
<p>
  span과 단락 모두 테두리가 설정되어 있습니다. 클라이언트 사각형은 빨간색입니다.
  p는 단 하나의 테두리 박스를 갖는 반면 span은 여러 테두리 박스를 갖는다는 점을
  유의하세요.
</p>

<div>
  <strong>원본</strong>
  <p>
    <span>여러 줄에 걸쳐있는 단락</span>
  </p>
</div>

<div>
  <strong>p의 사각형</strong>
  <p class="withClientRectsOverlay">
    <span>여러 줄에 걸쳐있는 단락</span>
  </p>
</div>

<div>
  <strong>span의 사각형</strong>
  <p>
    <span class="withClientRectsOverlay">여러 줄에 걸쳐있는 단락</span>
  </p>
</div>
```

예제 2: 다음 HTML은 세 개의 정렬된 목록을 생성합니다. 클라이언트 사각형은 두 번째 블록의 `<ol>`, 세 번째 블록의 각 `<li>` 엘리먼트를 칠합니다.

```html
<h3>목록</h3>
<p>
  테두리 박스는 숫자를 포함하지 않으므로 클라이언트 사각형에 대해서도 숫자를
  포함하지 않음을 유의하세요.
</p>

<div>
  <strong>원본</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol의 사각형</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>각 li의 사각형</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

예제 3: 다음 HTML은 캡션을 갖는 두 개의 테이블을 생성합니다. 클라이언트 사각형은 두 번째 블록의 `<table>`을 칠합니다.

```html
<h3>캡션을 갖는 테이블</h3>
<p>
  테이블의 테두리 박스가 캡션을 포함하지는 않지만, 클라이언트 사각형은 캡션을
  포함합니다.
</p>

<div>
  <strong>원본</strong>
  <table>
    <caption>
      캡션
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <strong>table의 사각형</strong>
  <table class="withClientRectsOverlay">
    <caption>
      캡션
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

CSS는 첫 번째 예제에서 각 `<div>` 블록 안쪽의 `<span>`과 문단을 감싸는 테두리를, 두 번째 예제에서 `<ol>`과 `<li>`를 감싸는 테두리를, 세 번째 예제에서 `<table>`, `<th>`, `<td>` 엘리먼트를 감싸는 테두리를 그립니다.

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p,
ol,
table {
  border: 1px solid blue;
}
span,
li,
th,
td {
  border: 1px solid green;
}
```

### JavaScript

JavaScript 코드는 `withClientRectsOverlay` CSS 클래스가 할당된 모든 HTML 엘리먼트에 대해 클라이언트 사각형을 그립니다.

```js
function addClientRectsOverlay(elt) {
  /* 각 클라이언트 사각형에서 div를 절대적으로 배치하였기 때문에 div의 테두리 너비는 사각형의 너비와 동일합니다.
     Note: 유저가 크기를 조정하거나 확대/축소하는 경우 오버레이가 제 위치를 벗어날 수 있습니다. */
  var rects = elt.getClientRects();
  for (var i = 0; i != rects.length; i++) {
    var rect = rects[i];
    var tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = rect.top + scrollTop + "px";
    tableRectDiv.style.left = rect.left + scrollLeft + "px";
    // rect.width가 테두리 너비가 되어야 하므로 콘텐츠 너비는 2px 더 작습니다.
    tableRectDiv.style.width = rect.width - 2 + "px";
    tableRectDiv.style.height = rect.height - 2 + "px";
    document.body.appendChild(tableRectDiv);
  }
}

(function () {
  /* "withClientRectsOverlay" 클래스가 할당된 모든 엘리먼트에 대해 addClientRectsOverlay(elt) 함수를 호출합니다 */
  var elt = document.getElementsByClassName("withClientRectsOverlay");
  for (var i = 0; i < elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();
```

### 결과

{{EmbedLiveSample('예제', 680, 650)}}

## 명세

{{Specifications}}

### 노트

`getClientRects()`는 MS IE DHTML 객체 모델에서 처음으로 소개되었습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{DOMxRef("Element.getBoundingClientRect()")}}
