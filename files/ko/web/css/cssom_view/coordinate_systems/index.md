---
title: 좌표계
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 91cc9e7f8ae21665b40ad4c3fa5152cebad119ce
---

{{CSSRef}}

픽셀의 위치를 그래픽 맥락에서 지정할 때(마치 [대수학](https://en.wikipedia.org/wiki/Algebra) 에서 좌표계를 지정하는 것처럼), 그 위치는 맥락의 고정된 점을 기준으로 정의됩니다. 이 고정된 점을 [원점](<https://en.wikipedia.org/wiki/Origin_(mathematics)>) 이라고 합니다. 위치는 맥락의 각 차원을 따라 원점에서 떨어진 픽셀 수로 지정됩니다.

이 안내서는 CSS 객체 모델에서 사용하는 표준 좌표계들을 설명합니다. 이러한 표준 좌표계는 일반적으로 원점이 위치하는 곳에서만 차이가 있습니다.

## 차원

웹 기술에서 사용하는 좌표계에서는 관례에 따라 수평 오프셋을 x-좌표라고 합니다. 여기서 음수 값은 원점의 왼쪽에 있는 위치를 나타내고 양수 값은 원점의 오른쪽에 있는 위치를 나타냅니다. y-좌표는 수직 오프셋을 지정하며, 음수 값은 원점의 위에 있는 위치를, 양수 값은 원점의 아래에 있는 위치를 나타냅니다.

웹에서 기본 원점은 주어진 컨텍스트의 왼쪽 상단 모서리에 위치하며(양의 y-좌표 값은 원점 아래에 위치), 이는 대부분의 수학적 모델과 달리 원점이 왼쪽 하단 모서리에 있고 양의 y-좌표 값이 원점 위에 있다는 점에 유의하세요.

3차원을 사용하여 객체를 앞에서 뒤로 배치할 때는 z축을 사용합니다. z축은 시청자로부터 화면의 표면까지 이어집니다. CSS z-index 속성은 이 축에서 배치된 요소의 위치에 영향을 미쳐 독자로부터 멀어지거나 가까워지는 효과를 제공합니다.

> [!NOTE]
> 실제로 CSS 속성인 {{cssxref("transform")}} 등을 사용하여 이러한 좌표계의 정의와 방향을 변경하는 것이 가능합니다. 그러나 지금은 표준 좌표계에 대해서만 이야기하겠습니다.

## 표준 CSSOM 좌표계

CSS 객체 모델에서 사용되는 네 가지 표준 좌표계가 있습니다. 주요 시스템을 시각화하는 데 도움이 되도록 다음 다이어그램에서는 뷰포트 밖으로 스크롤된 내용이 포함된 브라우저 창이 있는 모니터를 보여줍니다. 뷰포트 밖으로 스크롤된 페이지 콘텐츠는 "페이지" 좌표의 원점이 어디에 있는지를 나타내기 위해, 브라우저 창 위에 반투명하게 표시됩니다. "클라이언트", "페이지" 및 "뷰포트" 좌표계의 원점은 강조 표시됩니다.

![뷰포트 외부의 콘텐츠가 포함된 브라우저 창이 있는 컴퓨터 모니터의 다이어그램. 레이블은 페이지, 화면 및 뷰포트 좌표의 원점을 표시합니다.](css-coords.svg)

### 오프셋

"오프셋" 모델을 사용하여 지정된 좌표는 검사 중인 요소 또는 이벤트가 발생한 요소의 왼쪽 상단 모서리를 사용합니다.

예를 들어, {{domxref("MouseEvent", "마우스 이벤트", "", 1)}}가 발생하면 이벤트의 {{domxref("MouseEvent.offsetX", "offsetX") }}와 {{domxref("MouseEvent.offsetY", "offsetY")}}에 지정된 마우스 위치는 이벤트가 전달된 노드의 왼쪽 상단 모서리를 기준으로 상대적으로 주어집니다. 원점은 {{cssxref("padding-left")}} 및 {{cssxref("padding-top")}}에 의해 지정된 거리만큼 안쪽으로 들어갑니다.

### 뷰포트

"뷰포트"(또는 "클라이언트") 좌표계는 이벤트가 발생한 뷰포트 또는 탐색 맥락의 왼쪽 상단을 원점으로 사용합니다. 이는 문서가 표시되는 전체 보기 영역입니다.

예를 들어 데스크톱 컴퓨터에서는 {{domxref("MouseEvent.clientX")}} 및 {{domxref("MouseEvent.clientY")}} 속성이 이벤트가 발생한 순간의 마우스 커서 위치를 창의 왼쪽 상단 모서리를 기준으로 나타냅니다.
스타일러스나 포인터를 사용할 때 {{domxref("TouchEvent", "터치 이벤트") }}에서의{{domxref("Touch.clientX")}}와 {{domxref("Touch.clientY")}} 좌표는 동일한 원점을 기준으로 합니다.

창의 왼쪽 위 모서리는 문서의 내용이나 수행된 스크롤에 관계없이 항상 (0, 0)입니다. 즉, 문서를 스크롤하면 문서 내 특정 위치의 뷰포트 좌표가 변경됩니다.

### 페이지

"페이지" 좌표계는 렌더링된 전체 {{domxref("Document")}}의 왼쪽 상단 모서리를 기준으로 픽셀의 위치를 제공합니다. 즉, 문서 내의 요소 안에 있는 점은 레이아웃이 변경되어 요소가 이동하지 않는 한 사용자가 문서에서 수평 또는 수직으로 스크롤한 후에도 동일한 좌표를 가집니다.

마우스 이벤트의 {{domxref("MouseEvent.pageX", "pageX")}} 및 {{domxref("MouseEvent.pageY", "pageY")}} 속성은 이벤트가 생성된 시점에서 문서의 왼쪽 상단 모서리를 기준으로 마우스의 위치를 제공합니다. {{domxref("TouchEvent", "터치 이벤트")}}의 {{domxref("Touch.pageX")}} 및 {{domxref("Touch.pageY")}} 좌표는 동일한 원점을 기준으로 합니다.

### 화면

마지막으로 "화면" 모델에서는 원점이 사용자의 화면 공간의 왼쪽 상단 모서리입니다. 이 좌표계에서 각 점은 하나의 논리적 픽셀을 나타내므로 각 축을 따라 값이 정수 단위로 증가하거나 감소합니다. 예를 들어, 포함된 창이 이동하거나 사용자의 화면 구성이 변경될 때 (디스플레이 해상도를 변경하거나 모니터를 추가하거나 제거할 때) 문서 내 주어진 점의 위치가 변경될 수 있습니다.

{{domxref("MouseEvent.screenX")}} 및 {{domxref("MouseEvent.screenY")}} 속성은 화면 원점을 기준으로 마우스 이벤트 위치의 좌표를 제공합니다. {{domxref("TouchEvent", "터치 이벤트")}}의 {{domxref("Touch.screenX")}} 및 {{domxref("Touch.screenY")}} 좌표는 동일한 원점을 기준으로 합니다.

## 예시

요소에서 마우스 좌표를 기록하는 예를 살펴보겠습니다.
마우스가 안쪽 상자에 들어가거나, 내부를 돌아다니거나, 안쪽 상자에서 나갈 때마다 사용 가능한 네 가지 시스템 각각에서 현재 마우스 좌표를 기록하여 이벤트를 처리합니다.

### JavaScript

JavaScript에서는 {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseleave_event", "mouseleave")}} 각 이벤트 유형에 대해 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 를 호출해 내부 상자에 이벤트 처리기를 설정합니다.
각 이벤트에 대해, 각 시스템의 좌표를 `<p>` 요소의 내부 텍스트로 설정하는 setCoords() 함수를 호출합니다.

```js
const log = document.querySelector(".log");
const inner = document.querySelector(".inner");

function setCoords(e) {
  log.innerText = `
    Offset X/Y: ${e.offsetX}, ${e.offsetY}
    Viewport X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Screen X/Y: ${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
```

### HTML

HTML에는 마우스 이벤트의 데이터를 표시하는 `"log"` 클래스를 가진 `<p>`가 포함되어 있으며, 이는 마우스 이벤트에서 데이터를 표시합니다.

```html
<div class="outer">
  <div class="inner">
    <p class="log">이 섹션에 마우스를 올려 좌표를 확인하세요</p>
  </div>
</div>
```

### CSS

포함하는 상자에 대한 `"outer"` 클래스는 내용이 스크롤될 때 마우스 좌표의 효과를 볼 수 있도록 의도적으로 매우 넓습니다. `"inner"` 단락은 마우스 이벤트가 추적되고 기록되는 곳입니다.

```css
.outer {
  width: 1000px;
}

.inner {
  font-family: monospace;
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: darkblue;
  color: white;
  cursor: crosshair;
  user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### 결과

여기서 실제 결과를 볼 수 있습니다. 파란색 상자 안팎으로 마우스를 이동하면서 다양한 좌표계에서 마우스의 X 및 Y 좌표 값이 변경되는 것을 확인하세요.

{{EmbedLiveSample("예시", 600, 250)}}

## 함께 보기

- [CSS 변환 사용하기](/ko/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) : 좌표계를 변경하는 방법
- {{domxref("MouseEvent", "마우스 이벤트")}}의 좌표

  - {{domxref("MouseEvent.offsetX")}} 및 {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} 및 {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} 및 {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} 및 {{domxref("MouseEvent.screenY")}}

- {{domxref("Touch", "터치 이벤트")}}의 좌표:

  - {{domxref("Touch.clientX")}} 및 {{domxref("Touch.clientY")}}
  - {{domxref("Touch.pageX")}} 및 {{domxref("Touch.pageY")}}
  - {{domxref("Touch.screenX")}} 및 {{domxref("Touch.screenY")}}
