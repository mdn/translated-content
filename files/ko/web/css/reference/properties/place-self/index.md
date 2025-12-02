---
title: place-self
slug: Web/CSS/Reference/Properties/place-self
original_slug: Web/CSS/place-self
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

**`place-self`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties) 은 [그리드](/ko/docs/Web/CSS/CSS_grid_layout) 혹은 [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout) 와 같은 관계형 레이아웃 시스템에서 블록 방향과 인라인 방향에서 한번에 개별 요소를 정렬합니다 (예시. {{CSSxRef("align-items")}} 와 {{CSSxRef("justify-items")}} 속성). 만일 두번째 값이 지정되지 않는다면, 첫번째 값이 두번째 값으로도 사용됩니다.

{{InteractiveExample("CSS Demo: place-self")}}

```css interactive-example-choice
place-self: stretch center;
```

```css interactive-example-choice
place-self: center start;
```

```css interactive-example-choice
place-self: start end;
```

```css interactive-example-choice
place-self: end center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 220px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 구성 속성

이 속성은 다음 CSS의 단축형입니다.

- [`align-self`](/ko/docs/Web/CSS/align-self)
- [`justify-self`](/ko/docs/Web/CSS/justify-self)

## 구문

```css
/* 키워드 값 */
place-self: auto center;
place-self: normal start;

/* 위치 정렬 */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;

/* 기준선 정렬 */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* 전역 값 */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### 값

- `auto`
  - : 부모 속성의 {{cssxref("align-items")}} 값으로 계산됩니다.
- `normal`
  - : 이 키워드의 효과는 우리가 만든 레이아웃 모드에 따라 달라집니다.
    - 절대 위치로 지정된 레이아웃의 경우, 이 키워드는 대체된 절대 위치 박스에서 `start` 처럼 동작하고, 다른 모든 절대 위치 박스에서는 `stretch` 처럼 동작합니다.
    - 플렉스 요소들에서, 이 키워드는 `stretch` 처럼 동작합니다.
    - 그리드 요소들에서, 이 키워드는 `stretch` 와 비슷한 동작을 하지만, {{glossary("aspect ratio")}} 박스 형태 혹은 고유한 크기를 가진 박스에서는 `start` 처럼 동작합니다.
    - 이 속성은 블록 레벨의 박스나 표 셀에 적용되지 않습니다.

- `self-start`
  - : 요소를 교차 축의 시작 지점에 해당하는 정렬 컨테이너의 가장자리에 맞게 정렬합니다.
- `self-end`
  - : 요소를 교차 축의 끝 지점에 해당하는 정렬 컨테이너의 가장자리에 맞게 정렬합니다.
- `flex-start`
  - : 플렉스 요소의 교차 시작 마진 가장자리가 선의 교차 시작 가장자리에 맞닿습니다.
- `flex-end`
  - : 플렉스 요소의 교차 끝 마진 가장자리가 선의 교차 끝 가장자리에 맞닿습니다.
- `center`
  - : 플렉스 요소의 마진 박스가 교차 축의 선 중앙에 위치합니다. 만일 요소의 교차 크기가 플렉스 컨테이너보다 큰 경우, 요소는 양쪽 방향으로 균등하게 넘칩니다.
- `baseline`, `first baseline`. `last baseline`
  - : 첫번째 혹은 마지막 기준선 정렬에 참여를 지정합니다. 박스의 첫번째 혹은 마지막 기준선 세트의 정렬 기준선을 해당 기준선을 공유하는 그룹의 모든 박스의 공유 첫번째 혹은 마지막 기준선 세트에 있는 기준선과 맞추어 정렬합니다.
    `first baseline` 의 대체 정렬은 `start` 이며, `last baseline` 의 대체 정렬은 `end` 입니다.

- `stretch`
  - : 교차 축을 따라 결합된 요소들의 크기가 정렬 컨테이너보다 작고 크기가 `auto`로 지정된 경우, 해당 요소의 크기는 동일하게 (비례하지 않게) 증가하는 반면, {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (혹은 동등한 기능)에 의해 발생하는 제약들을 준수하여 모든 `auto` 크기의 요소들의 결합된 크기가 교차 축을 따라 정렬 컨테이너를 정확히 채웁니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 간단히 시연해보기

다음은 2 x 2 그리드 레이아웃 예제입니다. 초기에 그리드 컨테이너의 [`justify-items`](/ko/docs/Web/CSS/justify-items) 와 [`align-items`](/ko/docs/Web/CSS/Reference/Properties/align-items)는 기본 값인 `stretch` 로 설정되어 있어 그리드 요소가 해당 셀의 전체 너비만큼 늘어납니다.

두번째, 세번째, 그리고 네번째 그리드 요소는 기본 각기 다른 `place-self` 값을 부여하여, 이러한 값들이 기본 배치를 어떻게 재정의하는지를 나타냅니다. 이 값들은 그리드 요소가 콘텐츠의 너비/높이에 맞추어 너비/높이를 조정하고, 블록 방향과 인라인 방향에서 셀 내 다른 위치에 정렬될 수 있도록 합니다.

#### HTML

```html
<article class="container">
  <span>첫번째</span>
  <span>두번째</span>
  <span>세번쨰</span>
  <span>네번째</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### 결과

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 가이드: [플렉스박스의 기본 개념](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS 플렉스박스 가이드: [플렉스 컨테이너에서의 요소 정렬](/ko/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- CSS 그리드 가이드: [CSS 그리드 레이아웃 에서의 박스 정렬](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS 박스 정렬](/ko/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-self")}} 속성
- {{cssxref("justify-self")}} 속성
