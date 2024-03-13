---
title: 블록 레벨 콘텐츠
slug: Glossary/Block-level_content
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

CSS에서, 블록 레이아웃에 속하는 콘텐츠를 **블록 레벨 콘텐츠**라고 합니다.

블록 레이아웃에서, 상자는 둘러싸는 블록의 맨 위에서 시작하여 수직으로 차례로 배치됩니다. 각 상자의 왼쪽 바깥쪽 가장자리는 둘러싸는 블록의 왼쪽 가장자리에 닿게 됩니다. 블록 수준 요소는 항상 새로운 줄에서 시작합니다. 영어나 아랍어 같은 수평 쓰기 모드에서는, 상위 요소(컨테이너)의 전체 가로 공간과 내용의 높이와 같은 세로 공간을 가지게 되어 "블록"을 만듭니다.

**HTML**(Hypertext Markup Language)의 요소는 역사적으로 "블록 레벨" 요소와 ["인라인" 요소](/ko/docs/Web/HTML/Inline_elements)로 분류됐습니다. 기본적으로 블록 레벨 요소는 부모 요소의 전체 공간을 차지하여 "블록"을 만듭니다. 이 글에서 자세한 설명을 읽을 수 있습니다.

> **참고:** 둘러싸는 블록의 [`writing-mode`](/ko/docs/Web/CSS/writing-mode)이 [기본값](/ko/docs/Web/CSS/writing-mode#formal_definition) 이외의 값으로 설정되면, 위의 블록 레이아웃 동작이 변경됩니다.

> **참고:** HTML (_HyperText Markup Language_) 요소는 역사적으로 "블록 레벨" 요소 또는 "인라인" 요소로 분류되었습니다. 프레젠테이션 특성으로 인해, 이제는 CSS에 의해 지정됩니다.

## 예제

이 예제에선, 두 개의 단락 ({{HTMLElement("p")}}) 요소가 {{HTMLElement("div")}} 안에 배치됩니다.

```html
<div>
  <p>
    이 문단은 블록 레벨 요소입니다. 부모 요소와 구분할 수 있도록 배경 색을
    입혔습니다.
  </p>
  <p>이 문단은 두 번째 단락입니다.</p>
</div>
```

단락({{HTMLElement("p")}}) 요소는 기본적으로 블록 레벨 요소이기 때문에, 블록 레이아웃으로 표시됩니다.

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## 같이 보기

- [인라인 레벨 요소](/ko/docs/Web/HTML/Inline_elements)
- [블록 서식 컨텍스트](/ko/docs/Web/Guide/CSS/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/ko/docs/Web/CSS/writing-mode)
