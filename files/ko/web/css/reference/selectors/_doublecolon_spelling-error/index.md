---
title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
original_slug: Web/CSS/::spelling-error
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

**`::spelling-error`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 {{glossary("user agent", "사용자 에이전트")}}가 철자가 틀린 것으로 표기한 텍스트 세그먼트를 나타냅니다.

## 허용되는 속성

CSS 속성의 일부만이 `::spelling-error` 과 해당 선택자 내에서 함께 사용될 수 있습니다.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} 와 하위 속성들
- {{cssxref("text-decoration")}} 및 그에 연관된 속성들
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## 구문

```css
::spelling-error {
  /* ... */
}
```

## 예제

### 간단한 문서 철자 확인

이 예제에서는 지원하는 브라우저는 표시된 스타일로 모든 철자 오류를 강조 표시해야 합니다.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends are coegdfgfddffbgning to the party tonight.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### 결과

{{EmbedLiveSample('Simple_document_spell_check', '100%', 60)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("::grammar-error")}}
