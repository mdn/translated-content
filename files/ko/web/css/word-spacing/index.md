---
title: word-spacing
slug: Web/CSS/word-spacing
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`word-spacing`** 속성은 단어와 단어 사이, 태그와 태그 사이의 거리를 설정합니다.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## 구문

```css
/* 키워드 값 */
word-spacing: normal;

/* <length> 값 */
word-spacing: 3px;
word-spacing: 0.3em;

/* <percentage> 값 */
word-spacing: 50%;
word-spacing: 200%;

/* 전역 값 */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
```

### 값

- `normal`
  - : 현재 글씨체와 브라우저가 결정한 일반적인 단어 간격을 사용합니다.
- {{cssxref("length")}}
  - : 지정한 길이를 기본 단어 간격에 더합니다.
- {{cssxref("percentage")}}
  - : 영향 받는 문자 최대 폭의 백분율만큼을 기본 단어 간격에 더합니다.

## 예제

### HTML

```html
<div id="mozdiv1">다양한 단어...</div>
<div id="mozdiv2">...더 많은 단어</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('예제') }}

## 접근성 고려사항

큰 절댓값의 `word-spacing`을 적용한 문장은 거의 읽기 힘들어집니다. 큰 양의 값을 적용하면 단어의 사이가 너무나도 멀어져서 문장처럼 보이지 않습니다. 반면 지나친 음의 값을 적용하면 단어끼리 서로 겹쳐서 어느 단어의 시작과 끝을 알아차리지 못하게 됩니다.

글씨체마다 문자 너비가 다르므로, 가독성을 확보하는 수준의 `word-spacing` 역시 상황에 맞춰 결정해야 합니다. 모든 글씨체에서 가독성을 유지하는 단 하나의 값은 존재하지 않습니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("letter-spacing")}}
