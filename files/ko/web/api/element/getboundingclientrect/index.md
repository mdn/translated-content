---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
---

{{APIRef("DOM")}}

**`Element.getBoundingClientRect()`** 메서드는 엘리먼트의 크기와
[뷰포트](/ko/docs/Glossary/Viewport)에 상대적인 위치 정보를 제공하는
{{domxref("DOMRect")}} 객체를 반환합니다.

## 구문

```js
domRect = element.getBoundingClientRect();
```

### 값

반환 값은 padding과 border-width를 포함해 전체 엘리먼트가 들어 있는 가장 작은 사각형인
{{domxref("DOMRect")}} 객체입니다. `left`, `top`,
`right`, `bottom`, `x`, `y`,
`width`, `height` 프로퍼티는 전반적인 사각형의 위치와 크기를
픽셀 단위로 나타냅니다. `width`와 `height`가 아닌 다른 프로퍼티는
뷰포트의 top-left에 상대적입니다.

![](element-box-diagram.png)

메서드가 반환하는 {{domxref("DOMRect")}} 객체의 `width`와 `height`
프로퍼티는 콘텐츠의 width/height뿐만 아니라 `padding`과 `border-width`도
포함합니다. 표준 박스 모델에서, 이는 엘리먼트 + `padding` + `border-width`의
`width` 또는 `height` 프로퍼티와 동일합니다. 하지만
[`box-sizing: border-box`](/ko/docs/Web/CSS/box-sizing)가
해당 엘리먼트에 설정되어 있으면 이는 `width` 또는 `height`와 직접적으로 동일합니다.

반환 값은 해당 엘리먼트의 {{domxref("Element.getClientRects", "getClientRects()")}}가 반환한
사각형들의 결합으로 생각해볼 수 있습니다. 해당 엘리먼트에 관계된 CSS border-box들을 예로 들어볼 수 있습니다.

빈 border-box들은 완전히 무시합니다. 모든 엘리먼트의 border-box가 비어있다면 `width`와
`height`가 0인 사각형을 반환하며 `top`과 `left`는 해당 엘리먼트의
(콘텐츠 순서에서) 첫 번째 CSS 박스에 대한 border-box의 top-left입니다.

뷰포트 영역(또는 스크롤 가능한 엘리먼트)에서 수행된 스크롤의 정도는 경계 사각형을 계산할 때 고려됩니다.
이는 사각형의 경계 모서리(`top`, `right`,
`bottom`, `left`)는 스크롤링 위치가 변경될 때마다 그 값이 변경됨을 의미합니다(이
값들은 절대적인 것이 아니라 뷰포트에 상대적이기 때문입니다).

문서의 top-left 코너에 상대적인 경계 사각형이 필요하다면, 현재 스크롤링 위치를 `top`과 `left`
프로퍼티에 추가하여(이 값들은 {{domxref("window.scrollX")}}와 {{domxref("window.scrollY")}}를 사용하여
얻을 수 있습니다) 현재 스크롤링 위치로부터 독립적인 경계 사각형을 얻습니다.

### 크로스 브라우저 폴백

높은 크로스 브라우저 호환성이 필요한 스크립트는 `window.scrollX`와 `window.scrollY`
대신에 {{domxref("window.pageXOffset")}}와 {{domxref("window.pageYOffset")}}를 사용하면 됩니다.
이러한 프로퍼티에 접근할 수 없는 스크립트는 다음과 같은 코드를 사용하면 됩니다.

```js
// scrollX의 경우
(((t = document.documentElement) || (t = document.body.parentNode)) &&
typeof t.scrollLeft == "number"
  ? t
  : document.body
).scrollLeft(
  // scrollY의 경우
  ((t = document.documentElement) || (t = document.body.parentNode)) &&
    typeof t.scrollTop == "number"
    ? t
    : document.body,
).scrollTop;
```

## 예제

### 기본

다음 간단한 예제는 간단한 `<div>` 엘리먼트의 경계 클라이언트 사각형을 나타내는 `DOMRect`
객체를 찾고, 해당 객체의 프로퍼티를 그 아래에 출력합니다.

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Basic', '100%', 640)}}

`width`/`height`가
`width`/`height` + `padding`과 어떻게 같은지 확인하세요.

또한 각각의 경우에서 `x`/`left`,
`y`/`top`, `right`, `bottom`의 값이
뷰포트의 관련 모서리부터 엘리먼트의 측면까지의 절대 거리와 어떻게 동일한지 확인하세요.

#### 스크롤링

이 예제는 문서를 스크롤 할 때 바운딩 클라이언트 사각형이 어떻게 변경되는지를 보여줍니다.

```html
<div></div>
<div id="example"></div>
<div id="controls"></div>
```

```css
div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body {
  padding-bottom: 1000px;
}
p {
  margin: 0;
}
```

```js
function update() {
  const container = document.getElementById("controls");
  const elem = document.querySelector("div");
  const rect = elem.getBoundingClientRect();

  container.innerHTML = "";
  for (let key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      container.appendChild(para);
    }
  }
}

document.addEventListener("scroll", update);
update();
```

{{EmbedLiveSample('Scrolling', '100%', 640)}}

## 명세

{{Specifications}}

### 참고

반환된 `DOMRect` 객체는 최신 브라우저에서 수정될 수 있습니다.
`DOMRectReadOnly`를 효과적으로 반환하는 이전 버전의 브라우저에서는 그렇지 않습니다.
IE와 Edge는 그들이 반환하는 [`ClientRect`](<https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx>)
에 누락된 프로퍼티를 추가할 수 없으며, 객체는 `x`와 `y`를 다시 채우는 것을 방지합니다.

호환성 문제로 인해(아래 참고), `left`, `top`, `right`, `bottom`
프로퍼티에만 의존하는 것이 안전합니다.

반환된 `DOMRect` 객체의 프로퍼티는 자신의 프로퍼티가 아닙니다. `in` 연산자와
`for...in`은 반환된 프로퍼티를 찾을 수 있지만 `Object.keys()`와 같은 다른 API들은
그렇지 못합니다. 또한, 예기치 않게 ES2015 및 `Object.assign()`과 객체 레스트/스프레드와 같은
새로운 기능들은 반환된 프로퍼티를 복사하지 못합니다.

```js
rect = elt.getBoundingClientRect()
// emptyObj의 결과는 {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
```

`DOMRect`의 프로퍼티인 `top`, `left`,
`right`, `bottom`은 객체의 다른 프로퍼티의 값을 사용해 계산됩니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN:
  `getBoundingClientRect`](<https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx>)
- [MSDN:
  `ClientRect`](<https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx>), an earlier version of `DOMRect`
