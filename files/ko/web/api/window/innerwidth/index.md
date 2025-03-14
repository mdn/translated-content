---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
---

{{APIRef}}

읽기 전용인 {{domxref("Window")}} 속성 **`innerWidth`** 은 픽셀로 창 내부의 너비를 반환합니다. 하나가 존재하는 경우, 수직 스크롤 막대의 너비를 포함합니다.

더 정확하게는, `innerWidth`은 창의 {{Glossary("layout viewport")}}의 너비를 반환합니다. 창 내부의 높이, 레이아웃 뷰포트의 높이는 {{domxref("Window.innerHeight", "innerHeight")}} 속성으로부터 얻을 수 있습니다.

## 값

창의 레이아웃 뷰포트 너비를 픽셀로 나타낸 정수 값입니다. 속성은 읽기 전용이며, 기본 값이 없습니다.

창의 너비를 변경하려면, {{domxref("Window.resizeBy", "resizeBy()")}}나 {{domxref("Window.resizeTo", "resizeTo()")}}와 같은 크기를 조정하는 메서드 중 하나를 사용해야합니다.

## 사용 일람

스크롤 막대와 테두리를 제외한 창의 너비를 구하려면, 루트 {{HTMLElement("html")}} 요소의 {{domxref("Element.clientWidth", "clientWidth")}} 속성을 대신 사용하십시오.

`innerWidth` 속성은 탭이나 프레임같은 창처럼 행동하는 모든 창이나 모든 객체에서 사용할 수 있습니다.

## 예제

```js
// 뷰포트의 너비를 기록합니다.
console.log(window.innerWidth);

// 프레임셋 내의 프레임 뷰포트의 너비를 기록합니다.
console.log(self.innerWidth);

// 가장 가까운 프레임셋의 뷰포트의 너비를 기록합니다.
console.log(parent.innerWidth);

// 가장 먼 프레임셋의 뷰포트의 너비를 기록합니다.
console.log(top.innerWidth);
```

## 데모

### HTML

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### 결과

{{EmbedLiveSample('Demo')}}

당신은 또한 {{LiveSampleLink('Demo', '별도의 페이지에서 데모 코드의 결과를 볼 수 있습니다')}}.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
