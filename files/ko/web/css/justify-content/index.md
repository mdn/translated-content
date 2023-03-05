---
title: justify-content
slug: Web/CSS/justify-content
page-type: css-property
browser-compat: css.properties.justify-content
---

{{CSSRef}}

 [CSS](ko/docs/Web/CSS) **`justify-content`** 프로퍼티는 flex 컨테이너의 {{Glossary("Main Axis", "주축")}} 과 grid 컨테이너의 인라인 축을 따라 컨텐츠 사이와 주위의 공간을 브라우저가 분배하는 방법을 정의합니다.

아래 예시는 grid 레이아웃을 이용한 몇 가지 값을 보여줍니다.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

정렬은 length와 auto margin이 적용된 후 이뤄집니다. 즉, [Flexbox layout](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout) 에서 {{cssxref("flex-grow")}} 가 `0`이 아닌 flexible 요소가 하나 이상 있다면, 가용한 공간이 없기 때문에 아무런 영향을 미치지 않을 것입니다.


## 구문

```css
/* 위치 정렬 */
justify-content: center; /* 중앙에 요소들을 위치시킵니다 */
justify-content: start; /* 시작 부분에 요소들을 위치시킵니다 */
justify-content: end; /* 끝 부분에 요소들을 위치시킵니다 */
justify-content: flex-start; /* 시작 부분에  flex요소들을 위치시킵니다 */
justify-content: flex-end; /* 끝 부분에 flex요소들을 위치시킵니다  */
justify-content: left; /* 왼쪽에 요소들을 위치시킵니다 */
justify-content: right; /* 오른쪽에 요소들을 위치시킵니다 */

/* 기준선 정렬 */
/* justify-content 는 기준선 정렬을 하지 않습니다 */

/* 기본 정렬 */
justify-content: normal;

/* 분산 정렬 */
justify-content: space-between; /* 균일하게 요소들을 분산시킵니다
                                  첫 번째 요소는 시작 부분과 같은 선상에 있습니다,
                                  마지막 요소는 끝 부분과 같은 선상에 있습니다 */
justify-content: space-around; /* 균일하게 요소들을 분산시킵니다
                                   요소의 양쪽 끝에 절반 크기의 공간을 가집니다 */
justify-content: space-evenly; /* 균일하게 요소들을 분산시킵니다
                                   요소들은 주변에 동일한 공간을 가집니다 */
justify-content: stretch; /* 균일하게 요소들을 분산시킵니다
                             컨테이너에 맞게끔 '자동'크기의 요소를 늘립니다   */

/* Overflow 정렬 */
justify-content: safe center;
justify-content: unsafe center;

/* 전역 값 */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### 값

- `start`
  - : 요소들이 주축을 기준으로 컨테이너의 시작 부분을 향해 같은 높이를 가진 채로 위치합니다.
- `end`
  - : 요소들이 주축을 기준으로 컨테이너의 끝 부분을 향해 같은 높이를 가진 채로 위치합니다.
- `flex-start`
  - : 요소들이 컨테이너의 가장자리를 향해 같은 높이를 가진 채로 위치합니다. 가장자리는 flex 컨테이너의 시작 부분에 따라 결정됩니다.
    이는 flex layout 요소에만 적용됩니다. flex 컨테이너의 자식이 아닌 요소의 경우에는, 이 값은 `start` 와 같이 취급됩니다.
- `flex-end`
  - : 요소들이 컨테이너의 가장자리를 향해 같은 높이를 가진 채로 위치합니다. 가장자리는 flex 컨테이너의 끝 부분에 따라 결정됩니다.
    이는 flex layout 요소에만 적용됩니다. flex 컨테이너의 자식이 아닌 요소의 경우에는, 이 값은 `end` 와 같이 취급됩니다.
- `center`
  - : 요소들이 주축을 기준으로 컨테이너의 중간 부분을 향해 같은 높이를 가진 채로 위치합니다.
- `left`
  - : 요소들이 주축을 기준으로 컨테이너의 왼쪽 부분을 향해 같은 높이를 가진 채로 위치합니다. 프로퍼티의 축이 인라인 축과 평행하지 않은 경우, 이 값은 `start` 처럼 동작합니다.
- `right`
  - : 요소들이 주축을 기준으로 컨테이너의 오른쪽 부분을 향해 같은 높이를 가진 채로 위치합니다. 프로퍼티의 축이 인라인 축과 평행하지 않은 경우, 이 값은 `start` 처럼 동작합니다.
- `normal`
  - : `justify-content` 값이 정해지지 않은 것처럼 요소들이 자신의 원래 위치에 위치합니다. flex 컨테이너와 grid 컨테이너 안에서는 `stretch` 와 같이 동작합니다.
- `baseline first baseline`
  `last baseline`
  - : 첫 번째 또는 마지막 기준선 정렬에 관한 위치를 지정합니다: 박스의 첫 번째 또는 마지막 기준선 세트의 정렬 기준선을 기준선 공유 그룹에 있는 모든 상자의 공유 첫 번째 또는 마지막 기준선 세트에 있는 해당 기준선에 맞춥니다.
  `first baseline`에 대한 대체 정렬 값은 `start`이며, `last baseline` 은 `end`이 대체합니다.
- `space-between`
  - : 요소들이 주축을 따라 컨테이너 안에서 균등하게 분산됩니다. 인접한 요소 간의 거리는 같습니다. 첫번째 요소는 주 시작선과 같은 선상에 위치하며, 마지막 요소는 주 끝선과 같은 선상에 위치합니다.
- `space-around`
  - : 요소들이 주축을 따라 컨테이너 안에서 균등하게 분산됩니다. 인접한 요소 간의 거리는 같습니다. 첫 번째 요소 앞과 마지막 요소 뒤의 빈 공간은 인접한 각 요소 사이에 대한 거리의 절반에 해당합니다.
- `space-evenly`
  - : 요소들이 주축을 따라 컨테이너 안에서 균등하게 분산됩니다. 인접한 요소 간의 거리, 주 시작선과 첫번째 요소와의 거리, 주 끝선과 마지막 요소와의 거리가 모두 정확히 같습니다.
- `stretch`

  - : 주축에 있는 요소들을 모두 더한 크기가 컨테이너의 크기보다 작은 경우, 모든 `자동으로 조정되는` 크기의 요소는 {{cssxref("max-height")}}/{{cssxref("max-width")}} (또는 동일한 기능)에 의해 부과된 제약 조건을 준수하면서 크기가 균등하게(비례가 아닌) 증가하여 요소들을 모두 더한 크기가 컨테이너를 정확히 채우도록 합니다.

    > **Note:** `stretch` 는 flexible 상자에서는 지원되지 않습니다. (flexbox).

- `safe`
  - : 정렬 키워드와 함께 사용됩니다. 선택한 키워드로 인해 항목이 컨테이너를 초과하여 데이터가 손실되는 경우에, 정렬 모드가 `start` 인 것처럼 항목이 정렬됩니다.
- `unsafe`
  - : 정렬 키워드와 함께 사용됩니다. 요소와 컨테이너의 상대적인 크기와 데이터 손실을 유발하는 오버플로우 발생 여부에 관계없이 지정된 정렬 값이 준수됩니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예시

### flex 요소 분산시키기

#### CSS

```css
#container {
  display: flex;
  justify-content: space-between; /* 실제 샘플에선 변경될 수 있습니다 */
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
