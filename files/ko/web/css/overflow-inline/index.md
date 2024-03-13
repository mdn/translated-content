---
title: overflow-inline
slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`overflow-inline`** [CSS](/ko/docs/Web/CSS) 속성은 콘텐츠가 박스의 인라인 시작과 끝 가장자리를 넘어설 때 어떤 내용을 보여줄지를 설정합니다. 이는 아무 것도 표시하지 않을 수도 있고, 스크롤 바가 나타날 수도 있으며 넘친 콘텐츠가 보일 수도 있습니다.

> **참고:** `overflow-inline` 속성은 문서의 작성 방식에 따라 {{Cssxref("overflow-y")}} 또는 {{Cssxref("overflow-x")}}로 매핑됩니다.

## 구문

```css
/* 키워드 값 */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* 전역 값 */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

`overflow-inline` 속성은 단일한 {{CSSXref("overflow_value", "&lt;overflow&gt;")}} 키워드 값으로 지정됩니다.

### 값

- `visible`
  - : 콘텐츠가 잘리지 않으며 안쪽 여백 상자의 인라인 시작과 끝 가장자리를 벗어나 화면에 렌더링 될 수 있습니다.
- `hidden`
  - : 필요한 경우 콘텐츠가 인라인 크기에 맞게 잘립니다. 이때 스크롤 바는 제공되지 않습니다.
- `clip`
  - : 콘텐츠는 {{CSSXref("overflow-clip-margin")}} 속성을 사용하여 정의된 요소의 오버플로우 클립 가장자리에서 잘립니다.
- `scroll`
  - : 콘텐츠는 필요한 경우 인라인 크기의 안쪽 여백 박스에 맞춰 잘리게 됩니다. 브라우저는 실제로 콘텐츠가 잘린 여부에 관계없이 스크롤바를 표시합니다. (이렇게 하면 콘텐츠가 변경될 때 스크롤바가 나타나거나 사라지는 것을 방지할 수 있습니다.) 프린터에서는 여전히 콘텐츠가 넘치게 출력될 수 있습니다.
- `auto`
  - : 사용자 에이전트에 따라 달라집니다. 만약 콘텐츠가 안쪽 여백 상자 안에 맞는다면, `visible` 과 동일하게 표시되지만, 여전히 새로운 블록 서식 문맥을 생성합니다. 데스크탑 브라우저는 콘텐츠가 넘칠 경우 스크롤 바를 제공합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### Inline Overflow 동작 설정

#### HTML

```html
<ul>
  <li>
    <code>overflow-inline: hidden</code> (박스 외부에 있는 텍스트를 숨깁니다.)
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> (항상 스크롤 바를 추가합니다.)
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> (필요한 경우 박스 외부에 있는 텍스트를
    표시합니다.)
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> (대부분의 브라우저에서
    <code>scroll</code>
    과 동일합니다.)
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> (오버플로우 클립 가장자리를 기준으로 박스
    외부의 텍스트를 숨깁니다.)
    <code>clip</code>
    <div id="div5">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
#div5 {
  overflow-inline: clip;
  overflow-clip-margin: 2em;
}
```

#### 결과

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("clip")}}, {{cssxref("display")}}, {{cssxref("overflow")}}, {{cssxref("overflow-block")}}, {{cssxref("overflow-clip-margin")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS overflow](/ko/docs/Web/CSS/CSS_overflow) module
- [CSS logical properties](/ko/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS writing modes](/ko/docs/Web/CSS/CSS_writing_modes)
- [CSS building blocks: Overflowing content](/ko/docs/Learn/CSS/Building_blocks/Overflowing_content)
