---
title: place-items
slug: Web/CSS/place-items
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) 의 **`place-items`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties) 은 [그리드](/ko/docs/Web/CSS/CSS_grid_layout) 혹은 [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout) 같은 관계형 레이아웃 시스템에서 블록 방향과 인라인 방향에서 (예를 들어, {{CSSxRef("align-items")}} 와 {{CSSxRef("justify-items")}} 속성) 한번에 요소들을 정렬합니다. 만일 두번째 값이 지정되지 않는다면, 첫번째 값이 두번째 값으로도 사용됩니다.

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## 구성 속성

이 속성은 다음 CSS의 단축형입니다.

- [`align-items`](/ko/docs/Web/CSS/align-items)
- [`justify-items`](/ko/docs/Web/CSS/justify-items)

## 구문

```css
/* 키워드 값 */
place-items: center;
place-items: normal start;

/* 위치 정렬 */
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;

/* 기준선 정렬 */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* 전역 값 */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```

### 값

아래 형태 중 하나의 값을 취합니다.

- 블록 방향과 인라인 방향 모두를 설정하기 위한 정렬 단일 {{cssxref("align-items")}} 값.
- 블록 방향의 정렬을 설정하기 위한 {{cssxref("align-items")}} 값, 인라인 방향의 정렬을 설정하기 위한 {{cssxref("justify-items")}} 값.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 플렉스 컨테이너에 요소 배치하기

플렉스박스에서는 주축 요소가 하나의 그룹으로 취급되기 때문에 {{cssxref("justify-self")}} 혹은 {{cssxref("justify-items")}} 가 적용되지 않습니다. 따라서 두번째 값은 무시됩니다.

```css hidden
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
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* 리스트에 있는 다른 옵션을 선택하여 값을 변경할 수 있습니다. */
  background-color: #8c8c8c;
  display: flex;
}
```

#### 결과ㄴ

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

### 그리드 컨테이너에 요소 배치하기

다음 그리드 컨테이너는 요소들이 배치된 그리드 영역보다 작기 때문에 `place-items` 는 요소들을 블록과 인라인 차원에서 요소들을 이동시킵니다.

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="gridcontainer">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="gridvalues">place-items: </label>
  <select id="gridvalues">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("gridvalues");
const container = document.getElementById("gridcontainer");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#gridcontainer {
  height: 200px;
  width: 240px;
  place-items: stretch; /* 리스트에 있는 다른 옵션을 선택하여 값을 변경할 수 있습니다. */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#gridcontainer > div {
  width: 50px;
}
```

#### 결과

{{EmbedLiveSample("Placing_items_in_a_grid_container", 260, 290)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 가이드: [Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS 플렉스박스 가이드: [Aligning items in a flex container](/ko/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- CSS 그리드 가이드: [Box alignment in CSS Grid layouts](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/ko/docs/Web/CSS/CSS_box_alignment)
- {{CSSxRef("align-items")}} 속성
- {{CSSxRef("align-self")}} 속성
- {{CSSxRef("justify-items")}} 속성
- {{CSSxRef("justify-self")}} 속성
