---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

**`grid-template-columns`** CSS 속성은 {{glossary("grid column", "grid columns")}}의 열 이름과 트랙 크기 조정 함수들을 정의합니다.

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## 구문

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### 값

- `none`

  - 명시적 그리드가 없음을 의미합니다. 모든 열은 암시적으로 생성되고 각 열의 크기는 {{cssxref("grid-auto-columns")}} 속성에 의해 결정됩니다.

- `[linename]`

  - 해당 위치의 각 열에 대한 이름을 명시하는 [`<custom-ident>`](/ko/docs/Web/CSS/custom-ident) 입니다. ident는 예약어인 `span` 이나 `auto`를 제외한 어떤 문자열이든 올 수 있습니다. 행에는 `[line-name-a line-name-b]`와 같이 대괄호 안에 공백으로 구분된 여러 이름을 가질 수 있습니다.

- {{cssxref("&lt;length&gt;")}}

  - 음수가 아닌 길이, 열의 너비를 나타냅니다.

- {{cssxref("&lt;percentage&gt;")}}

  - 음수가 아닌 그리드 컨테이너의 내부 크기에 상대적인 {{cssxref("percentage", "&lt;percentage&gt;")}} 값입니다. 만약 그리드 컨테이너의 크기가 트랙의 크기에 따라 달라지는 경우, 백분율을 `auto`로 처리해야 합니다.

    트랙의 본질적인 크기 기여는 그리드 컨테이너의 크기로 조정될 수 있으며, 트랙의 최종 크기를 백분율에 맞는 최소 크기 만큼 증가시킬 수 있습니다.

- {{cssxref("&lt;flex&gt;")}}

  - 트랙의 Flex 요소를 지정하는 `fr` 단위를 가지는 음이 아닌 치수입니다. 각각의 `<flex>`에 크기가 정해진 트랙은 flex 요소에 비례하여 나머지 공간을 차지합니다.

    `minmax()` 외부에서 사용하면, 이는 자동 최소값 즉 `minmax(auto, <flex>)`를 의미합니다.

- {{cssxref("max-content")}}

  - 그리드 트랙을 차지하는 그리드 항목의 가장 큰 [최대 콘텐츠 기여도](https://www.w3.org/TR/css-sizing-3/#max-content)를 의미합니다. 예를 들어, 만약 그리드 트랙의 첫번째 요소가 "Repetitio est mater studiorum"라는 문장을 포함하고, 두번째 요소가 "Dum spiro, spero"라는 문장을 포함한다면, 최대 콘텐츠 기여는 모든 그리드 요소 중에서 가장 긴 "Repetitio est mater studiorum"의 크기로 지정됩니다.

- {{cssxref("min-content")}}

  - 그리드 트랙을 차지하는 그리드 항목의 가장 큰 [최소 콘텐츠 기여도](https://www.w3.org/TR/css-sizing-3/#min-content) 를 나타냅니다. 예를 들어 그리드 트랙의 첫번째 요소가 "Repetitio est mater studiorum"라는 문장을 포함하고, 두번째 요소가 "Dum spiro, spero"라는 문장을 포함한다면, 최소 콘텐츠 기여는 모든 그리드 요소 중에서 가장 긴 단어인 "studiorum"의 크기로 지정됩니다.

- {{cssxref("minmax", "minmax(min, max)")}}

  - min 이상 max 이하의 사이즈 범위를 정의하는 함수 표기입니다. max가 min보다 작다면, max는 무시되고 이 함수는 min으로 처리됩니다. 최대값으로서 `<flex>` 값은 트랙의 flex 요소를 설정합니다. `<flex>` 값은 최소값으로는 유효하지 않습니다.

- `auto`

  - 최대값으로 트랙 내 모든 아이템 중 가장 큰 {{cssxref("max-content")}} 를 나타냅니다.

    최소값으로 트랙 내 모든 아이템 중 최대 최소 크기를 나타냅니다. (아이템들의 {{cssxref("min-width")}}/{{cssxref("min-height")}}로 명시되어있습니다.) 이것은 항상은 아니지만 주로 {{cssxref("min-content")}} 크기 값입니다.

    만약 {{cssxref("minmax", "minmax()")}} notation 외부에서 사용된다면, `auto`는 위에 명시된것과 같이 최소, 최대값 사이의 범위를 나타냅니다. 이것은 대부분 `minmax(min-content,max-content)`와 유사하게 동작합니다.

    > **참고:** `auto` 트랙 크기는 (그리고 오직 `auto` 트랙 크기만) {{cssxref("align-content")}} 과 {{cssxref("justify-content")}} 요소에 의해 확장될 수 있습니다. 그러므로 기본적으로 `auto`에 크기가 지정된 트랙은 그리드 컨테이너의 나머지 공간을 차지합니다.

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`

  - `max(minimum, min(limit, max-content))` 공식을 의미합니다. minimum이 `auto` 최소값(항상은 아니지만 주로 {{cssxref("min-content")}}의 최소값과 동일한), limit은 fit-content()의 인자로 전달되는 트랙 크기를 결정하는 함수입니다. 이 값은 주로 `minmax(auto, max-content)` 와 `minmax(auto, limit)`에서 작은 값으로 계산됩니다.

- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}

  - 트랙 목록에서 반복되는 조각을 의미합니다. 반복 패턴을 나타내는 많은 수의 열을 보다 간결한 형태로 작성할 수 있습니다.

- [`masonry`](/ko/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) {{Experimental_Inline}}

  - masonry 값은 이 축이 masonry 알고리즘에 따라 배치되어야 함을 나타냅니다.

- [`subgrid`](/ko/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - `subgrid` 값은 그리드가 해당 축에서 부모 그리드의 spanned 부분을 채택함을 나타냅니다. 그리드 행/열의 크기는 명시적으로 지정되지 않고 상위 그리드의 정의에서 가져옵니다.

> **경고** `masonry` 값은 그리드 명세서의 3 단계에 있으며 현재 파이어 폭스의 flag에는 실험적인 기능만 구현되어 있습니다.
>
> `subgrid` 값은 그리드 명세서의 2 단계에 있으며 현재 Firefox 71 이상에서만 구현되어 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예시

### 그리드 열 크기 지정하기

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### 결과

{{EmbedLiveSample("Specifying_grid_column_sizes", "100%", "20px")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 연관 CSS 속성: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- 그리드 레이아웃 안내서: [Basic concepts of grid layout - Grid Tracks](/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#grid_tracks)
- 영상 설명서: [Defining a Grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/ko/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
