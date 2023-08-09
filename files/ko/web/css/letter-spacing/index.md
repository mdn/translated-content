---
title: letter-spacing
slug: Web/CSS/letter-spacing
---

{{CSSRef}}

**`letter-spacing`** [CSS](/ko/docs/Web/CSS) 속성은 글자 사이의 간격을 조절합니다.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## 구문

```css
/* 키워드 값 */
letter-spacing: normal;

/* <length> 값 */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* 전역 값 */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### 값

- `normal`
  - : 현재 글꼴의 기본 간격. `0`과 달리, `auto`는 {{glossary("user agent", "사용자 에이전트")}}가 양쪽 정렬을 위해 간격을 임의로 조절할 수 있습니다.
- {{cssxref("&lt;length&gt;")}}
  - : 기본 간격에 **추가**할 글자간 간격. 음수 값을 지정할 수 있지만 구현에 따라 한계가 있을 수 있습니다. 사용자 에이전트가 간격을 줄이거나 늘리지 않습니다.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<p class="normal">글자 간격</p>
<p class="em-wide">글자 간격</p>
<p class="em-wider">글자 간격</p>
<p class="em-tight">글자 간격</p>
<p class="px-wide">글자 간격</p>
```

### CSS

```css
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

### 결과

{{ EmbedLiveSample('예제', 440, 185) }}

## 접근성 고려사항

`letter-spacing` 값의 절댓값이 너무 크면 스타일을 적용한 글을 읽기 힘들어집니다. 지나치게 큰 값으로는 글자 간격이 지나치게 넓어져 단어를 이루지 못하고 따로 따로 보입니다. 반대로 지나친 음숫값은 글자가 서로 겹쳐 알아볼 수 없습니다.

글꼴마다 문자의 너비가 다르므로 읽기에 용이한 간격은 상황에 따라 다릅니다. 모든 글꼴에 적합한 하나의 값은 존재하지 않습니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("font-kerning")}}
