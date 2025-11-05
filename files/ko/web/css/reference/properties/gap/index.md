---
title: gap
slug: Web/CSS/Reference/Properties/gap
original_slug: Web/CSS/gap
l10n:
  sourceCommit: 7dea2fa2c2562a8f441dfca779a08ae363334a13
---

[CSS](/ko/docs/Web/CSS) **`gap`** 속성은 행과 열 사이의 간격 ({{glossary("gutters")}})을 설정합니다. {{CSSxRef("row-gap")}}과 {{CSSxRef("column-gap")}}의 [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)입니다.

{{InteractiveExample("CSS Demo: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

`grid-gap` 은 해당 속성의 별칭입니다.

## 구문

```css
/* 단일 <length> 값 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 단일 <percentage> 값 */
gap: 16%;
gap: 100%;

/* 이중 <length> 값 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 이중 또는 혼합 <percentage> 값 */
gap: 16% 100%;
gap: 21px 82%;

/* calc() 값 */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* 전역 값 */
gap: inherit;
gap: initial;
gap: unset;
gap: revert;
gap: revert-layer;
```

`gap`은 `<'row-gap'>` 값을 사용해 지정하며, 선택적으로 `<'column-gap'>`을 추가할 수 있습니다. `<'column-gap'>`을 생략한 경우 `<'row-gap'>`과 동일한 값을 사용합니다.

`<'row-gap'>`과 `<'column-gap'>`은 각각 `<length>` 또는 `<percentage>`를 사용해 지정합니다.

### 값

- {{CSSxRef("&lt;length&gt;")}}
  - : 그리드 선을 분할하는 간격의 너비.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : 그리드 선을 분할하는 간격의 너비. 요소 크기에 상대적입니다.

### 형식 정의

{{cssinfo}}

### 형식 구문

{{CSSSyntax}}

## 예제

### 플렉스 레이아웃

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### 결과

{{EmbedLiveSample("플렉스_레이아웃", "auto", "120px")}}

### 그리드 레이아웃

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 결과

{{EmbedLiveSample("그리드_레이아웃", "auto", "120px")}}

### 다열 레이아웃

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### 결과

{{EmbedLiveSample("다열_레이아웃", "auto", "120px")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 CSS 속성: {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}
- 그리드 레이아웃 안내서: _[Basic concepts of grid layout - Gutters](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)_
