---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS)의 **`justify-content`** 속성은 브라우저가 콘텐츠 항목 사이와 주변의 공간을 플렉스 컨테이너에서는 {{Glossary("Main Axis", "main-axis")}}, 그리고 그리드 컨테이너에서는 인라인 축을 기준으로 어떻게 정렬할 것인지를 정의합니다.

아래의 상호작용하는 예제는 그리드 레이아웃을 사용할 때의 일부 값들을 설명합니다.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

자동 바깥 여백과 길이가 적용된 이후에 정렬이 적용됩니다. 즉, [Flexbox layout](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout) 안에서 최소 하나의 플렉스 요소가 `0`이 아닌 {{cssxref("flex-grow")}} 값을 갖는다면, 더 이상 사용할 수 있는 공간이 없기 때문에 아무 효과가 없습니다.

## 구문

```css
/* 위치 기준 정렬 */
justify-content: center; /* 항목들을 축의 중심 부분에 정렬합니다. */
justify-content: start; /* 항목들을 축의 시작 부분에 정렬합니다.. */
justify-content: end; /* 항목들을 축의 끝 부분에 정렬합니다. */
justify-content: flex-start; /* 플렉스 항목들을 축의 시작 부분에 정렬합니다. */
justify-content: flex-end; /* 플렉스 항목들을 축의 끝 부분에 정렬합니다. */
justify-content: left; /* 항목들을 축의 왼쪽 부분에 정렬합니다. */
justify-content: right; /* 항목들을 축의 오른쪽 부분에 정렬합니다. */

/* 기준선 정렬 */
/* justify-content은 기준선에 대한 값은 갖지 않습니다. */

/* 기본 정렬 */
justify-content: normal;

/* 분산 정렬 */
justify-content: space-between; /* 항목들을 고르게 정렬합니다.
                                   첫 항목은 시작 부분에 밀착되어 정렬됩니다.
                                   마지막 항목은 끝 부분에 밀착되어 정렬됩니다. */
justify-content: space-around; /* 항목들을 고르게 정렬합니다. 
                                   각 항목들은 양쪽 여백의 절반만큼 나누어 갖습니다. */
justify-content: space-evenly; /* 항목들을 고르게 정렬합니다.
                                   각 항목들은 서로 간에 동일한 여백을 갖습니다. */
justify-content: stretch; /* 항목들을 고르게 정렬합니다.
                                   'auto' 크기로 설정된 항목들을 컨테이너에 맞게 늘립니다. */

/* 오버플로우 정렬 */
justify-content: safe center;
justify-content: unsafe center;

/* 전역 값들 */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### 값

- `start`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 시작 부분의 가장자리에 밀착되어 정렬됩니다.
- `end`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 끝 부분의 가장자리에 밀착되어 정렬됩니다.
- `flex-start`
  - : 항목들은 플렉스 컨테이너의 메인 축을 따라 시작 부분의 가장자리에 밀착되어 정렬됩니다.
    이 값은 플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목들에 대해서 이 값은 `start`와 같이 처리됩니다.
- `flex-end`
  - : 항목들은 플렉스 컨테이너의 메인 축을 따라 끝 부분의 가장자리에 밀착되어 정렬됩니다.
    이 값은 플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목들에 대해서 이 값은 `end`와 같이 처리됩니다.
- `center`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 중앙 부분에 밀착되어 정렬됩니다.
- `left`
  - : 항목들은 정렬 컨테이너의 왼쪽 가장자리에 밀착되어 정렬됩니다. 만약 속성의 축이 인라인 축과 평행이 아닐 경우, 이 값은 `start`와 동일하게 동작합니다.
- `right`
  - : 항목들은 정렬 컨테이너의 적절한 축을 따라 오른쪽 가장자리에 밀착되어 정렬됩니다. 만약 속성의 축이 인라인 축과 평행이 아닐 경우, 이 값은 `start`와 동일하게 동작합니다.
- `normal`
  - : 항목들은 마치 `justify-content` 값이 설정되지 않은 것처럼 자신들의 기본 위치에 정렬됩니다. 이 값은 그리드, 플렉스 컨테이너 안에서 `stretch`와 동일하게 동작합니다.
- `baseline` `first baseline`
  `last baseline`
  - : 첫번째 혹은 마지막 베이스라인 정렬에 참여하는 방식을 명시합니다. 박스의 첫번째 혹은 마지막 기준선 집합의 정렬 기준선을 그룹 내 다른 모든 박스와 공유하는 첫번째 또는 마지막 베이스라인 집합의 선과 일치하여 정렬합니다.
    `first baseline`을 사용하는 것이 불가능 할 때 대체되는 정렬 방식은 `start`이며, `last baseline`에 대한 대체 정렬 방식은 `end`입니다.
- `space-between`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 고르게 분포됩니다. 인접한 항목 사이 공간의 크기는 동일하게 유지됩니다. 첫번째 항목은 메인 축을 따르는 시작 부분의 가장자리에 밀착됩니다. 마지막 항목은 메인 축을 따르는 마지막 부분의 가장자리에 밀착됩니다.
- `space-around`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 고르게 분포됩니다. 인접한 항목 사이 공간의 크기는 동일하게 유지됩니다. 첫번째 항목의 이전과 마지막 항목의 이후에 존재하는 공간은 인접한 항목 간 공간 크기의 절반을 차지합니다.
- `space-evenly`
  - : 항목들은 정렬 컨테이너의 메인 축을 따라 고르게 분포됩니다. 인접항 항목간의 공간, 첫번째 항목 이전 그리고 마지막 항목의 이후 공간은 모두 동일하게 유지됩니다.
- `stretch`
  - : 만약 메인 축을 따라 존재하는 항목들의 크기 합이 정렬 컨테이너의 크기보다 작다면, `auto` 크기가 지정된 아이템은 크기를 동등하게 증가시킵니다. (비례적으로 증가하지는 않습니다.) 이 때, {{cssxref("max-height")}}/{{cssxref("max-width")}} 나 기능적으로 동일한 제약 조건을 준수하여, 메인 축을 따라 전체 크기의 합이 정렬 컨테이너를 정확히 채우도록 맞춰집니다.
    > **참고:** `stretch` 는 플렉스 박스에서는 지원하지 않습니다.
- `safe`
  - : 정렬 키워드와 함께 사용됩니다. 만약 선택된 키워드로 인해 항목들이 정렬 컨테이너를 넘치게 되어서 데이터 손실이 발생하는 경우, 항목은 정렬 모드가 `start`인 것처럼 대체되어 정렬됩니다.
- `unsafe`
  - : 정렬 키워드와 함께 사용됩니다. 항목과 정렬 컨테이너 간의 상대적 크기, 그리고 데이터 손실이 일어났는지 유무와는 무관하게 주어진 정렬 값이 우선됩니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 플렉스 항목 정렬하기

#### CSS

```css
#container {
  display: flex;
  justify-content: space-between; /* 라이브 샘플에서 변경할 수 있습니다. */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="baseline">baseline</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### 결과

{{EmbedLiveSample("Setting_flex_item_distribution", "100%", 180)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS Flexbox Guide: _[플렉스박스의 기본 개념](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[플렉스 컨테이너에서 항목 정렬하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[CSS 그리드 레이아웃에서의 박스 정렬](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS 박스 정렬](/ko/docs/Web/CSS/CSS_Box_Alignment)
