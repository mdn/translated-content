---
title: border-image-source
slug: Web/CSS/border-image-source
---

{{CSSRef}}

**`border-image-source`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 [테두리 이미지](/ko/docs/Web/CSS/border-image)로 사용할 원본 이미지를 지정합니다.

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

{{cssxref("border-image-slice")}} 속성으로 나뉜 구역을 사용해 최종 테두리 이미지를 생성합니다.

## 구문

```css
/* 키워드 값 */
border-image-source: none;

/* <image> 값 */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* 전역 값 */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
```

### 값

- `none`
  - : 테두리 이미지를 사용하지 않습니다. {{cssxref("border-style")}}이 대신 표시됩니다.
- {{cssxref("&lt;image&gt;")}}
  - : 테두리에 사용할 이미지 참조입니다.

### 형식 구문

{{csssyntax}}

## 예제

{{cssxref("border-image")}}에서 확인할 수 있습니다.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
