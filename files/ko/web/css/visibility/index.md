---
title: visibility
slug: Web/CSS/visibility
---

{{CSSRef}}

**`visibility`** CSS 속성은 문서의 레이아웃을 변경하지 않고 요소를 보이거나 숨깁니다. `visibility`로 {{htmlelement("table")}}의 행이나 열을 숨길 수도 있습니다.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

문서를 숨기고, **레이아웃에서도 제외**하려면, `visibility`를 사용하는 대신 {{cssxref("display")}} 속성을 `none`으로 설정하세요.

## 구문

```css
/* 키워드 값 */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* 전역 값 */
visibility: inherit;
visibility: initial;
visibility: unset;
```

### 값

- `visible`
  - : 요소가 보임.
- `hidden`

  - : 요소가 숨겨짐(그려지지 않음). 레이아웃에는 숨겨지지 않았을 때와 동일한 영향을 줍니다. `visibility`를 `visible`로 설정한 자손은 화면에 보입니다. 숨겨진 요소는 포커스([탭 인덱스](/ko/docs/Web/HTML/Global_attributes/tabindex)로 탐색 등)를 받을 수 없습니다.

- `collapse`

  - : The `collapse` keyword has different effects for different elements:

    - {{HTMLElement("table")}}의 행, 열, 행 그룹과 열 그룹에 적용하면 {{cssxref("display")}}를 `none`으로 설정한 것과 동일하게 요소를 숨기고 차지하던 공간도 제거합니다. 그러나 다른 행(열)의 크기는 `collapse`를 적용한 행(열)이 보이는 것 처럼 취급해 계산합니다. 따라서 표의 너비나 높이의 재계산 없이 빠르게 행이나 열을 제거할 수 있습니다.
    - 플렉스 아이템에 적용하면 요소를 숨기고 차지하던 공간도 제거합니다.
    - [XUL](/ko/docs/Mozilla/Tech/XUL) 요소에 적용하면 다른 스타일과 관계 없이 크기의 계산값으로 항상 0을 사용합니다. 그러나 {{cssxref("margin")}}은 바뀌지 않습니다.
    - 다른 요소에서는 `hidden`과 동일합니다.

### 형식 구문

{{csssyntax}}

## 보간

가시성은 **보여짐**과 **보이지 않음** 사이에서 보간할 수 있습니다. 따라서 시작이나 종료 값이 `visible`이 아니면 보간할 수 없습니다. 가시성 값은 이산값을 사용하며 `0`은 `hidden`, `0` 초과 `1` 이하의 모든 값은 `visible`에 맵핑됩니다. 범위 밖의 값(`cubic-bezier()` 함수의 y값이 \[0, 1]을 벗어날 때만 트랜지션의 시작과 종료 시 발생)은 `0`과 `1` 중 더 가까운 값으로 취급합니다.

## 예제

### 기본 예제

#### HTML

```html
<p class="visible">첫 번째 문단은 보입니다.</p>
<p class="not-visible">두 번째 문단은 보이지 않습니다.</p>
<p class="visible">
  세 번째 문단은 보입니다. 두 번째 문단이 여전히 공간을 차지하고 있어요.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('기본_예제')}}

### 표 예제

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('표_예제')}}

## 접근성 고려사항

`visibility` 값을 `hidden`으로 설정한 요소는 [접근성 트리](/ko/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs)에서 제외됩니다. 즉 해당 요소와, 그 모든 자손 요소는 스크린 리더가 읽지 않습니다.

## 참고

- 일부 현대 브라우저에서는 `visibility: collapse`를 지원하지 않거나 잘못 지원합니다. 따라서 표의 행과 열이 아닌 요소에 사용했을 때 `visibility: hidden`과 똑같이 취급하지 않을 수도 있습니다.
- `visibility: collapse`를 적용한 칸에 중첩해서 다른 표가 존재하면 바깥 표의 레이아웃이 바뀔 수도 있습니다. 이를 방지하려면 중첩된 표에 `visibility: visible`을 명시해야 합니다.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
