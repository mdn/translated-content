---
title: 인라인 요소
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

CSS에서, 인라인 레이아웃에 참여하는 콘텐츠를 **인라인 수준 콘텐츠**라고 합니다. 대부분의 텍스트 시퀀스, 교체된 요소 및 생성된 콘텐츠는 기본적으로 인라인 수준입니다.

인라인 레이아웃에서, 텍스트의 혼합 스트림, [대체된 요소](/ko/docs/Web/CSS/Replaced_element) 및 기타 인라인 상자는 줄 상자 스택으로 조각화하여 배치됩니다. 각 줄 상자 내에서, 인라인 수준의 상자는 쓰기 모드에 따라 수직 또는 수평으로 정렬됩니다. 일반적으로 텍스트의 기준선에 따라 정렬됩니다. 이것은 CSS로 변경할 수 있습니다.

![inline layout](inline_layout.png)

> **참고:** HTML(**Hypertext Markup Language**)의 요소는 역사적으로 "블록 레벨" 요소와 "인라인" 요소로 분류됐습니다. 프리젠테이션 특성으로서, 이것은 이제 CSS에 의해 지정됩니다.

## 예제

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

이런 예제에서, {{HTMLElement("p")}} 요소에는 일부 텍스트가 포함되어 있습니다. 해당 텍스트 내에는 인라인 수준 요소인 {{HTMLElement("span")}} 요소와 {{HTMLElement("input")}} 요소가 있습니다. `<span>`이 두 줄에 걸쳐 있으면, 두 줄 상자가 생성됩니다. 이러한 요소는 인라인이기 때문에, 단락이 끊어지지 않은 텍스트 흐름의 단일 단락으로 렌더링됩니다.

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

{{EmbedLiveSample("Examples")}}

## 같이 보기

- [블록 레벨 요소](/ko/docs/Glossary/Block-level_content)
- [인라인 레이아웃](/ko/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
