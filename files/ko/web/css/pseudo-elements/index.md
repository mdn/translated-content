---
title: 의사 요소
slug: Web/CSS/Pseudo-elements
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **의사 요소**(가상 요소)는 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있습니다. 예를 들어 {{cssxref("::first-line")}}을 사용하면 문단 첫 줄의 글씨체만 바꿀 수 있습니다.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **참고:** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 의사 요소와 달리 요소의 **특정 상태**에 스타일을 적용할 때 사용합니다.

## 구문

```
selector::pseudo-element {
  property: value;
}
```

하나의 선택자에 하나의 의사 요소만 사용할 수 있습니다. 반드시 단순 선택자 뒤에 위치해야 합니다.

> **참고:** 참고: 규칙을 따라 단일 콜론(`:`) 대신 이중 콜론(`::`)을 사용하여 의사 클래스와 의사 요소를 구별해야 합니다. 그러나 과거 W3C 명세에선 이런 구별을 두지 않았으므로 대부분의 브라우저는 기존 의사 요소에 대해 두 구문 모두 지원합니다.

## 표준 의사 요소 색인

- {{CSSxRef("::after", "::after (:after)")}}
- {{CSSxRef("::backdrop")}} {{Experimental_Inline}}
- {{CSSxRef("::before", "::before (:before)")}}
- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}
- {{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}
- {{CSSxRef("::first-line", "::first-line (:first-line)")}}
- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}
- {{CSSxRef("::marker")}} {{Experimental_Inline}}
- {{CSSxRef("::part", "::part()")}} {{Experimental_Inline}}
- {{CSSxRef("::placeholder")}} {{Experimental_Inline}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

## 명세

{{Specifications}}

## 브라우저 호환성

<table class="standard-table">
  <tbody>
    <tr>
      <th>브라우저</th>
      <th>최소 버전</th>
      <th>지원</th>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## 같이 보기

- [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)
