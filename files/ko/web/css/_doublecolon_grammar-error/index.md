---
title: ::grammar-error
slug: Web/CSS/::grammar-error
l10n:
  sourceCommit: d6defd737678e99d62bf838ad12eba532567fba5
---

{{CSSRef}}

**`::grammar-error`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 {{glossary("user agent", "사용자 에이전트")}} 가 문법적으로 옳지 않다고 표시한 텍스트 부분을 나타냅니다.

## 허용되는 속성

`::grammar-error` 와 그 선택자 규칙은 다음을 포함한 한정적인 수의 CSS 속성만 사용할 수 있습니다..

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} 및 하위 속성들
- {{cssxref("text-decoration")}} 과 이에 연관된 속성들
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## 구문

```css
::grammar-error {
  /* ... */
}
```

## 얘재

### 간단하게 문서의 문법 확인하기

이 예제에서, 지원되는 브라우저는 문법적으로 오류가 있는 부분을 표시되는 스타일로 강조해야 합니다.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends is coming to the party tonight.
</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### 결과

{{EmbedLiveSample('Simple_document_grammar_check', '100%', 60)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("::spelling-error")}}
