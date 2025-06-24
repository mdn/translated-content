---
title: 그리드 트랙 (Grid Tracks)
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**그리드 트랙(grid track)**은 인접한 두 {{glossary("grid lines", "격자 선")}} 사이의 공간입니다. {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}} 속성 또는 약식 {{cssxref("grid")}} 또는 {{cssxref("grid-template")}} 속성을 사용하여 '명시적 그리드'에 정의됩니다. 트랙은 명시적 그리드에서 생성된 트랙 외부에 그리드 요소를 배치하여 '암시적 그리드'에도 생성됩니다.

아래 이미지는 그리드의 첫 번째 행 트랙을 보여줍니다.

![그리드 트랙을 보여주는 다이어그램](1_grid_track.png)

## 명시적 그리드의 트랙 크기

{{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}}을 사용하여 그리드 트랙을 정의할 때, 모든 길이 단위를 사용할 수 있습니다. 또한, 그리드 컨테이너에서 사용 가능한 공간의 일부를 나타내는 플렉스 단위인 `fr`도 사용할 수 있습니다.

## 예제

아래 예는 3개의 열 트랙(200픽셀 중 하나, 1fr의 두 번째 트랙, 3fr의 세 번째 트랙)이 있는 그리드를 보여줍니다. 그리드 컨테이너에서, 사용가능한 공간에서 200픽셀을 빼고 남은 공간을 4로 나눕니다. 한 부분은 2번째 열에, 나머지 3 부분은 3번째 열에 제공됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 3fr;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '230') }}

## 암시적 그리드에서의 트랙 크기

암시적 그리드에서 생성된 트랙은 기본적으로 자동으로 크기가 조절되지만, {{cssxref("grid-auto-rows")}} 및 {{cssxref("grid-auto-columns")}} 속성을 사용해 이러한 트랙의 크기를 정의할 수 있습니다.

## 같이 보기

- [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS 그리드 레이아웃 명세서의 그리드 트랙 정의](https://drafts.csswg.org/css-grid/#grid-track-concept)
- 속성 참고서
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
