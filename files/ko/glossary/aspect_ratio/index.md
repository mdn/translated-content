---
title: 종횡비
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{GlossarySidebar}}

**종횡비**는 요소 또는 {{glossary("viewport")}}의 너비와 높이 사이의 비율 관계입니다. {{cssxref("ratio")}} 데이터 타입으로 표현되며 두 숫자의 비율을 나타냅니다.

종횡비를 가지는 것은, 이미지나 비디오로부터 상속받는 고유 종횡비이든 명시적으로 설정된 종횡비이든 상관없이, 요소의 의도된 비율을 유지하도록 합니다. 요소 또는 뷰포트의 종횡비를 질의할 수 있으며, 유연한 컴포넌트와 레이아웃을 개발하는 데 유용합니다.

CSS에서, {{cssxref("ratio")}} 데이터 타입은 `width / height` 형식으로 작성됩니다. 예를 들어, 정사각형에서는 `1 / 1`, 와이드스크린에서는 `16 / 9`로 설정됩니다. 단일 숫자로 설정할 수도 있으며, 이 경우 숫자는 너비를 나타내고 높이는 `1`로 설정됩니다.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

SVG에서는, 종횡비는 네 가지 값을 가진 [`viewBox`](/ko/docs/Web/SVG/Reference/Attribute/viewBox) 속성으로 정의됩니다. 처음 두 값은 SVG가 가질 수 있는 가장 작은 X와 Y 원점 좌표를 나타내고, 나머지 두 값은 SVG의 종횡비를 설정하는 너비와 높이를 나타냅니다.

```svg
<svg viewBox="0 0 300 100" xmlns="https://www.w3.org/2000/svg"></svg>
```

JavaScript APIs에서는, 종횡비를 질의하면 너비를 높이로 나눈 값인 배정밀도 부동소수점 숫자를 반환합니다. JavaScript를 사용하여 요소의 종횡비를 설정할 수도 있습니다. 예를 들어, {{domxref("MediaStreamTrack")}} 또는 {{domxref("MediaTrackSettings")}} 사전의 [`aspectRatio`](/ko/docs/Web/API/MediaTrackSettings/aspectRatio) 속성을 사용하여 1920x1080 비디오의 종횡비 제약을 설정하는 경우, 16/9 또는 1920/1080으로 계산되며 이 값은 `1.7777777778`입니다.

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## 같이 보기

- CSS {{cssxref("aspect-ratio")}} 속성
- [종횡비 이해하기](/ko/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios) 안내서
- [CSS 박스 크기 조정](/ko/docs/Web/CSS/Guides/Box_sizing) 모듈
- 관련 용어:
  - {{glossary("intrinsic size")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, {{cssxref("fit-content")}} 속성 값
