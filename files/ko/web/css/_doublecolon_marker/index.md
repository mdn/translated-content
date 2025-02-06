---
title: ::marker
slug: Web/CSS/::marker
l10n:
  sourceCommit: 679f5893a4734fd136b80140e13262422d76b123
---

{{CSSRef}}

**`::marker`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 일반적으로 불릿 혹은 숫자를 포함하는 목록 요소의 마커 상자를 선택합니다. 이는 {{HTMLElement("li")}}와 {{HTMLElement("summary")}}처럼 [`display: list-item`](/ko/docs/Web/CSS/display)이 설정된 의사 요소나 일반 요소에서 동작합니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## 허용되는 속성

`::marker` 의사 요소는 다음을 포함한 한정적인 수의 CSS 속성을 지원합니다.

- 모든 [폰트 속성](/ko/docs/Web/CSS/CSS_fonts)
- {{CSSxRef("white-space")}} 속성
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, 와 {{CSSxRef("direction")}} 속성
- {{CSSxRef("content")}} 속성
- 모든 [애니메이션](/ko/docs/Web/CSS/CSS_animations#properties) 과 [트랜지션](/ko/docs/Web/CSS/CSS_transitions#properties) 속성

> [!NOTE]
> 추가적인 CSS 속성에 대한 명세서가 추후 지원될 수 있습니다.

## 구문

```css
::marker {
  /* ... */
}
```

## 예제

### HTML

```html
<ul>
  <li>복숭아</li>
  <li>사과</li>
  <li>자두</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### 결과

{{EmbedLiveSample('Examples')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 마커 박스를 기본적으로 가지고 있는 HTML 요소들: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS 생성된 콘텐츠](/ko/docs/Web/CSS/CSS_generated_content) 모듈
- [CSS 목록과 카운터](/ko/docs/Web/CSS/CSS_lists) 모듈
- [CSS 카운터 스타일](/ko/docs/Web/CSS/CSS_counter_styles) 모듈
