---
title: "-webkit-line-clamp"
slug: Web/CSS/-webkit-line-clamp
---

{{CSSRef}}

**`-webkit-line-clamp`** CSS 속성은 {{Glossary("block container", "블록 컨테이너")}}의 콘텐츠를 지정한 줄 수만큼으로 제한합니다.

{{cssxref("display")}} 속성을 `-webkit-box` 또는 `-webkit-inline-box`로, 그리고 {{cssxref("-webkit-box-orient")}} 속성을 `vertical`로 설정한 경우에만 동작합니다.

`-webkit-line-clamp`만 사용하는 경우, 말줄임표는 노출되나 넘친 콘텐츠가 숨겨지지 않으므로 대개 {{cssxref("overflow")}} 속성 또한 `hidden`으로 설정해야 합니다.

앵커 요소에 적용한 경우 텍스트의 끝이 아니라 중앙에서 잘리는 경우도 있습니다.

> **참고:** `-webkit-line-clamp`는 원래 WebKit이 구현했었으며 몇몇 문제점을 가지고 있으나 레거시 지원을 위해 표준화를 거쳤습니다. [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#propdef--webkit-line-clamp) 명세의 {{cssxref("line-clamp")}}가 `-webkit-line-clamp`를 대체하기 위해 정의된 속성입니다.

## 구문

```css
/* 키워드 값 */
-webkit-line-clamp: none;

/* <integer> 값 */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* 전역 값 */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
```

- `none`
  - : 콘텐츠를 자르지 않습니다.
- {{cssxref("integer")}}
  - : 몇 줄 뒤에 콘텐츠를 자를지 지정합니다. 0보다 커야 합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{CSSSyntax}}

## 예제

### 문단 자르기

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### 결과

{{EmbedLiveSample("예제", "100%", "100")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("line-clamp")}}
