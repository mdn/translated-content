---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
---

{{APIRef}}

{{domxref("Window")}} 인터페이스의 읽기 전용인 **`innerHeight`** 속성은 존재한다면 수평 스크롤 막대 높이를 포함한 창 내부 높이를 픽셀로 반환합니다.

`innerHeight`의 값은 창의 {{Glossary("layout viewport")}}의 높이에서 가져옵니다. 너비는 {{domxref("Window.innerWidth", "innerWidth")}} 속성을 사용하여 얻을 수 있습니다.

## 값

창의 레이아웃 뷰포트 높이를 픽셀로 나타낸 정수 값입니다. 속성은 읽기 전용이며, 기본 값이 없습니다.

창의 너비를 변경하려면, {{domxref("Window.resizeTo", "resizeTo()")}}이나 {{domxref("Window.resizeBy", "resizeBy()")}}와 같은 크기를 조정하는 메서드 중 하나를 사용해야합니다.

## 사용 일람

수평 스크롤 막대나 모든 테두리를 제외한 창의 높이를 구하려면, 루트 {{HTMLElement("html")}} 요소의 {{domxref("Element.clientHeight", "clientHeight")}} 속성을 대신해서 사용하십시오.

`innerHeight`와 `innerWidth` 둘 다 탭이나 프레임같은 창처럼 행동하는 모든 창이나 모든 객체에서 사용할 수 있습니다.

## 예제

### 프레임셋 가정

```js
console.log(window.innerHeight); // 혹은

console.log(self.innerHeight);
// 프레임셋 내의 프레임 뷰포트의 높이 로그를 기록합니다.

console.log(parent.innerHeight);
// 가장 가까운 프레임셋 뷰포트의 높이 로그를 기록합니다.

console.log(top.innerHeight);
// 가장 바깥쪽 프레임셋 뷰포트의 높이 로그를 기록합니다.
```

창의 크기를 변경하려면 {{domxref("window.resizeBy()")}}와 {{domxref("window.resizeTo()")}}를 참고하십시오.

창의 외부 높이, 즉 전체 브라우저 창의 높이를 구하려면 {{domxref("window.outerHeight")}}를 참고하십시오.

### 그래픽 예제

다음 그림은 `outerHeight`와 `innerHeight` 사이의 차이를 보여줍니다.

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

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

또한 {{LiveSampleLink('Demo', 'view the results of the demo code in a separate page')}}에 방문하여 데모 코드 결과를 볼 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
