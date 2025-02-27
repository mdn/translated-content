---
title: ::selection
slug: Web/CSS/::selection
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

**`::selection`** CSS [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 (클릭이나 마우스 드래그처럼) 사용자에 의해 하이라이트된 문서의 일부분에 스타일을 적용합니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-selection.html", "tabbed-shorter")}}

## 혀용되는 속성

몇 개의 특정한 CSS 속성만이 `::selection` 과 함께 사용될 수 있습니다.

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} 와 이에 연관된 속성들
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} 와 {{CSSxRef("-webkit-text-stroke-width")}}

부분적으로 {{CSSxRef("background-image")}}는 무시됩니다.

## 구문

```css
::selection {
  /* ... */
}
```

## 예제

### HTML

```html
이 텍스트를 하이라이트하면 특별한 스타일이 적용됩니다.
<p>단락에서 텍스트를 선택해 보세요.</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* 선택된 텍스트를 빨간색 배경 위 금색으로 만듭니다. */
::selection {
  color: gold;
  background-color: red;
}

/* 단락 안의 선택된 텍스트를 파란색 배경 위 흰색으로 만듭니다. */
p::selection {
  color: white;
  background-color: blue;
}
```

### 결과

{{EmbedLiveSample('Examples')}}

## 접근성 고려사항

**순수하게 미학적인 이유만으로 선택된 텍스트 스타일을 변경하지 않아야 합니다.** 사용자는 필요에 의해 텍스트 스타일을 정의할 수 있습니다. 인지 문제를 겪고 있는 사람들이나 기술적으로 익숙하지 않은 사람들의 경우, 예상치 못한 스타일의 변화는 그들의 기능 이해를 저하시킬 수 있습니다.

만일 텍스트가 변경되었다면, 선택 영역의 텍스트와 배경 색상 사이의 **대비 비율**이 저시력을 가진 사람들에게도 충분히 읽을 수 있을 정도로 높아야 한다는 것을 중요하게 생각해야 합니다.

색상 대비 비율은 선택된 텍스트와 선택된 텍스트의 배경 색상의 명도를 비교하여 찾습니다.[웹 콘텐츠 접근성 가이드라인 (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)을 충족시키기 위해서는, 텍스트 콘텐츠에는 4.5:1의 비율이 요구되고 머릿말 같은 큰 텍스트는 3:1 의 비율이 요구됩니다. 큰 텍스트는 18.66px의 [굵은 글씨체](/ko/docs/Web/CSS/font-weight) 혹은 24px 이상으로 정의됩니다.

- [WebAIM: 색상 대비 확인](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("pointer-events")}} - 요소에 활성화된 이벤트를 제어합니다.
