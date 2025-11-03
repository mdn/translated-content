---
title: align-items
slug: Web/CSS/Reference/Properties/align-items
original_slug: Web/CSS/align-items
l10n:
  sourceCommit: c4e54c5dec15a1031081e39557af3eb7c754713a
---

[CSS](/ko/docs/Web/CSS) **`align-items`** 속성은 모든 직계 자식에 대해 {{cssxref("align-self")}}값을 그룹으로 설정합니다. 플렉스박스의 {{glossary("Cross Axis", "교차축")}}을 따라 아이템을 정렬합니다. 그리드 레이아웃의 {{glossary("Grid Areas", "그리드 영역")}}내 블록 축을 따라 아이템을 정렬합니다.

아래의 대화형 예제는 그리드 레이아웃을 사용하여 `align-items`의 속성 값을 시연합니다.

{{InteractiveExample("CSS Demo: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 구문

```css
/* 기본 키워드 값 */
align-items: normal;
align-items: stretch;

/* 위치 기준 정렬 */
/* align-items는 좌우 값을 가지지 않습니다. */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* 기준선 정렬 */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* 오버플로우 정렬 (위치 정렬에서만) */
align-items: safe center;
align-items: unsafe center;

/* 전역 값 */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### 값

- `normal`
  - : 현재 사용 중인 레이아웃에 따라 달라집니다.
    - 절대 위치 지정 레이아웃에서 교체된 절대 위치 지정 박스에서는 `start`로 동작하고 다른 모든 절대 위치 지정 박스에서는 `stretch`로 동작합니다.
    - 절대 위치 지정 레이아웃의 정적 위치에서 `stretch`로 동작합니다
    - 플렉스 아이템의 경우 `stretch`로 동작합니다
    - 그리드 아이템의 경우 `stretch`와 유사하게 동작하지만 종횡비나 고유 크기가 있는 박스에서는 `start`로 동작합니다.
    - 이 속성은 블록 레벨 박스 및 테이블 셀에는 적용되지 않습니다.

- `flex-start`
  - : 플렉스 레이아웃에서만 사용되며 플렉스 아이템을 플렉스 컨테이너의 주축 시작 또는 교차 축 시작에 맞춰 정렬합니다.
- `flex-end`
  - : 플렉스 레이아웃에서만 사용되며 플렉스 아이템을 플렉스 컨테이너의 주축 끝 또는 교차 축 끝에 맞춰 정렬합니다.
- `center`
  - : 플렉스 아이템의 마진 박스는 교차 축의 라인에서 가운데 정렬됩니다. 아이템의 교차 크기가 플렉스 컨테이너보다 크다면, 양방향으로 동일하게 오버플로우됩니다.
- `start`
  - : 아이템은 적절한 축에서 정렬 컨테이너 시작 가장자리 쪽으로 밀착하여 정렬됩니다.
- `end`
  - : 아이템은 적절한 축에서 정렬 컨테이너 끝 가장자리 쪽으로 밀착하여 정렬됩니다.
- `self-start`
  - : 아이템은 적절한 축에서 정렬 컨테이너 아이템의 시작 가장자리 쪽에 밀착하여 정렬됩니다.
- `self-end`
  - : 아이템은 적절한 축에서 정렬 컨테이너 아이템의 끝 가장자리 쪽에 밀착하여 정렬됩니다.
- `baseline`, `first baseline`, `last baseline`
  - : 모든 플렉스 아이템은 해당 [플렉스 컨테이너 기준선](https://drafts.csswg.org/css-flexbox-1/#flex-baselines)을 따라 정렬됩니다. 교차 시작 마진 가장자리와 해당 기준선 사이의 거리가 가장 큰 아이템이 선의 교차 시작 가장자리에 밀착하여 정렬됩니다.
- `stretch`
  - : 아이템이 정렬 컨테이너보다 작다면 자동 크기 조정된 아이템은 아이템의 너비와 높이 제한을 고려하여 컨테이너를 채울 수 있도록 동일하게 확대됩니다.
- `safe`
  - : 정렬 키워드 값과 함께 사용됩니다. 선택한 키워드로 인해 아이템이 정렬 컨테이너를 초과하여 데이터 손실을 발생시키는 경우 아이템은 정렬 모드가 `start`일 때 처럼 정렬됩니다.
- `unsafe`
  - : 정렬 키워드 값과 함께 사용됩니다. 아이템과 정렬 컨테이너의 상대적인 크기와 데이터의 손실을 발생시키는 오버플로우의 여부에 관계없이 주어진 값으로 정렬됩니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### 결과

{{EmbedLiveSample("Examples", "260px", "290px")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스의 기본 개념: [flexbox의 기본 개념](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS 플렉스박스 가이드: [Aligning items in a flex container](/ko/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- CSS 그리드 가이드: [Box alignment in CSS Grid layouts](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/ko/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-self")}} 속성
