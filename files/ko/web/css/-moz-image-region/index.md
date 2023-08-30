---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
---

{{CSSRef}}{{Non-standard_header}}

XUL 요소와 가상요소들에 대하여 {{ Cssxref("list-style-image") }} 속성을 사용할때 이 속성은 전체이미지에서 사용되는 부분의 령역을 지정합니다. 이것은 요소들이 성능을 향상시키기 위해 같은 이미지의 서로다른 부분을 사용할수 있게 합니다.

```css
/* Keyword value */
-moz-image-region: auto;

/* <shape> value */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Global values */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

문법은 {{ Cssxref("clip") }}속성과 류사합니다. 4개의 값은 모두 이미지의 외쪽 웃모서리로부터 상대적입니다.

{{cssinfo}}

## 구문

```
-moz-image-region: rect(top, right, bottom, left);
```

### 형식 구문

{{CSSSyntax}}

## 예제

```
#example-button {
  /* display only the 4x4 area from the top left of this image */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* use the 4x4 area to the right of the first for the hovered button */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## 브라우저 호환성

{{Compat}}
