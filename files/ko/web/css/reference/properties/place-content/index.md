---
title: place-content
slug: Web/CSS/Reference/Properties/place-content
original_slug: Web/CSS/place-content
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`place-content`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties) 은 [그리드](/ko/docs/Web/CSS/CSS_grid_layout) 혹은 [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout) 같은 관계형 레이아웃 시스템에서 블록 방향과 인라인 방향에서 한번에 콘텐츠를 정렬합니다. (예를 들어, {{CSSxRef("align-content")}} 와 {{CSSxRef("justify-content")}} 속성)

{{InteractiveExample("CSS Demo: place-content")}}

```css interactive-example-choice
place-content: end space-between;
```

```css interactive-example-choice
place-content: space-around start;
```

```css interactive-example-choice
place-content: start space-evenly;
```

```css interactive-example-choice
place-content: end center;
```

```css interactive-example-choice
place-content: end;
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
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  height: 180px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 구성 속성

이 속성은 다음 CSS의 단축형입니다.

- [`align-content`](/ko/docs/Web/CSS/Reference/Properties/align-content)
- [`justify-content`](/ko/docs/Web/CSS/Reference/Properties/justify-content)

## 구문

```css
/* 위치 정렬 */
/* align-content 속성은 left 혹은 right 값을 사용하지 않습니다. */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* 기준선 정렬 */
/* justify-content 속성은 기준선 값을 사용하지 않습니다.*/
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* 균일한 분배 */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* 전역 값 */
place-content: inherit;
place-content: initial;
place-content: revert;
place-content: revert-layer;
place-content: unset;
```

첫번째 값은 {{CSSxRef("align-content")}} 속성 값이고, 두번째 값은 {{CSSxRef("justify-content")}} 의 속성 값입니다.

> [!NOTE]
> 만일 두번째 값이 설정되지 않았다면, 그리고 첫번째 값이 두 경우 모두에 대해 유효한 값이라면 첫번째 값이 첫번째 값과 두번째 값 모두에 사용됩니다. 만약 두 경우에 대해 모두 유효한 값이 아니라면 전체 값이 무효가 됩니다.

### 값

- `start`
  - : 요소들이 적절한 중심축을 따라 정렬 컨테이너의 시작 가장자리를 향하여 서로 밀착하여 배치됩니다.
- `end`
  - : 요소들이 적절한 중심축을 따라 정렬 컨테이너의 끝 가장자리를 향하여 서로 밀착하여 배치됩니다.
- `flex-start`
  - : 요소들이 플렉스 컨테이너의 주축 시작 혹은 교차축 시작에 따라 정렬 컨테이너의 가장자리를 향하여 서로 밀착하여 배치됩니다.
    이 속성은 플렉스 레이아웃 요소에만 적용됩니다. 요소가 플렉스 컨테이너의 자식에 해당하지 않는다면 이 값은 `start` 값으로 취급됩니다.
- `flex-end`
  - : 요소들이 플렉스 컨테이너의 주축 끝 혹은 교차축 끝에 따라 정렬 컨테이너의 가장자리를 향하여 서로 밀착하여 배치됩니다.
    이 속성은 플렉스 레이아웃 요소에만 적용됩니다. 요소가 플렉스 컨테이너의 자식에 해당하지 않는다면 이 값은 `end` 값으로 취급됩니다.
- `center`
  - : 요소들이 정렬 컨테이너의 중앙을 향하여 서로 밀착하여 배치됩니다.
- `left`
  - : 요소들이 정렬 컨테이너의 왼쪽 가장자리를 향하여 서로 밀착하여 배치됩니다. 만일 속성의 축이 인라인 축과 평행하지 않다면, 이 속성은 `start` 값으로 취급됩니다.
- `right`
  - : 요소들이 적절한 중심축을 따라 정렬 컨테이너의 오른쪽 가장자리를 향하여 서로 밀착하여 배치됩니다. 만일 속성의 축이 인라인 축과 평행하지 않다면, 이 속성은 `start` 값으로 취급됩니다.
- `space-between`
  - : 요소들이 정렬 컨테이너 내부에서 고르게 분포됩니다. 각 요소가 인접한 다른 요소들 사이의 간격은 동일합니다. 첫번째 요소는 주축 시작 가장자리에 밀착하고, 마지막 요소는 주축 끝 가장자리에 밀착합니다.
- `baseline`, `first baseline`, `last baseline`
  - : 첫번째 혹은 마지막 기준선 정렬에 참여를 지정합니다. 박스의 첫번째 혹은 마지막 기준선 세트의 정렬 기준선을 해당 기준선을 공유하는 그룹의 모든 박스의 공유 첫번째 혹은 마지막 기준선 세트에 있는 기준선과 맞추어 정렬합니다.
    `first baseline` 의 대체 정렬은 `start` 이며, `last baseline` 의 대체 정렬은 `end` 입니다.
- `space-around`
  - : 요소들이 정렬 컨테이너 내부에서 균등하게 분포됩니다. 각 요소가 인접한 다른 요소 쌍 사이의 간격은 동일합니다. 첫번째 요소 앞 빈 공간과 마지막 요소 뒤 빈 공간은 각 요소가 인정합 다른 요소 쌍 사이 공간의 절반과 같습니다.
- `space-evenly`
  - : 요소들이 정렬 컨테이너 내부에서 균등하게 분포됩니다. 각 요소가 인접한 다른 요소 쌍 사이의 간격, 주축 시작 가장자리와 첫번째 요소 사이, 그리고 주축 끝 가장자리와 마지막 요소의 사이 간격은 모두 일정하게 동일합니다.
- `stretch`
  - : 요소들의 결합된 크기가 정렬 컨테이너보다 작은 경우, `auto` 크기의 요소는 크기를 동등하게 (비례적이지 않게) 증가시키는 반면, {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (혹은 동등한 기능)에 의해 발생하는 제약들을 존중하며 요소들의 결합된 크기가 정렬 컨테이너를 알맞게 채우도록 합니다.
- `safe`
  - : 정렬 키워드와 함께 사용됩니다. 만일 선택된 키워드의 요소가 정렬 컨테이너를 넘어 데이터 손실을 발생하는 경우, 아이템은 대신 정렬 모드가 `start` 일 때처럼 정렬됩니다.
- `unsafe`
  - : 정렬 키워드와 함께 사용됩니다. 요소의 상대적인 크기와 정렬 컨테이너의 크기에 관계 없이, 그리고 데이터 손실을 유발하는 오버플로우 여부와 관계 없이 주어진 정렬 값이 존중됩니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 플렉스 컨테이너에 콘텐츠 배치하기

#### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />

<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />

<code>place-content:</code
><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
function update() {
  document.getElementById("container").style.placeContent =
    `${document.getElementById("alignContentAlignment").value} ` +
    `${document.getElementById("justifyContentAlignment").value}`;
}

const alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change", update);

const justifyContentAlignment = document.getElementById(
  "justifyContentAlignment",
);
justifyContentAlignment.addEventListener("change", update);

const writingM = document.getElementById("writingMode");
writingM.addEventListener("change", (evt) => {
  document.getElementById("container").style.writingMode = evt.target.value;
});

const direction = document.getElementById("direction");
direction.addEventListener("change", (evt) => {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* 라이브 샘플에서 변경할 수 있습니다. */
  direction: ltr; /* 라이브 샘플에서 변경할 수 있습니다. */
  place-content: flex-end center; /* 라이브 샘플에서 변경할 수 있습니다. */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### 결과

{{EmbedLiveSample("Placing_content_in_a_flex_container", "370", "300")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- CSS 플렉스박스 가이드: [Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS 플렉스박스 가이드: [Aligning items in a flex container](/ko/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- CSS 그리드 가이드: [Box alignment in CSS Grid layouts](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/ko/docs/Web/CSS/CSS_box_alignment)
- {{CSSxRef("align-content")}} 속성
- {{CSSxRef("justify-content")}} 속성
