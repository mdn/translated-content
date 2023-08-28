---
title: "@page"
slug: Web/CSS/@page
---

{{CSSRef}}

**`@page`** CSS @규칙은 문서를 인쇄할 때 일부 CSS 속성을 수정하는 데 쓰입니다. `@page`로 모든 CSS 속성을 바꿀 수는 없습니다. 문서의 margin, orphan, widow(앞단에서 넘어온 짤막한 행) 및 page break만 바꿀 수 있습니다. 다른 CSS 속성을 바꾸려는 시도는 무시됩니다.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

`@page` @규칙은 CSS 객체 모델 인터페이스 {{domxref("CSSPageRule")}}를 통해 액세스될 수 있습니다.

> **참고:** **주의:** W3C은 viewport 관련 {{cssxref("&lt;length&gt;")}} 단위, `vh`, `vw`, `vmin` 및 `vmax` 처리법을 논의 중입니다. 그 동안에 `@page` @규칙 내에서 사용하지 마세요.

## 구문

### 서술자

- [`size`](/ko/docs/Web/CSS/@page/size)
  - : 페이지 박스 내 포함 블록의 대상(target) 크기 및 방향을 지정합니다. 한 페이지 박스가 한 페이지 시트에 렌더링 되는 일반적인 경우에, 또한 대상(destination) 페이지 시트의 크기를 나타냅니다.
- [`marks`](/ko/docs/Web/CSS/@page/marks)
  - : 문서에 crop 및/또는 registration 마크를 추가합니다.
- [`bleed`](/ko/docs/Web/CSS/@page/bleed)
  - : 페이지 렌더링이 잘리는(clip) 페이지 박스 너머 범위를 지정합니다.

### 형식 구문

{{csssyntax}}

## 예제

예제를 위한 `@page`의 다양한 [가상 클래스](/ko/docs/Web/CSS/Pseudo-classes) 참조해 주세요.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
