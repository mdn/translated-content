---
title: border-image-outset
slug: Web/CSS/border-image-outset
---

{{CSSRef}}

**`border-image-outset`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 테두리 상자와 [테두리 이미지](/ko/docs/Web/CSS/border-image)의 거리를 설정합니다.

`border-image-outset`으로 인해 요소 바깥에 그려지는 테두리로는 스크롤이 생기지 않으며 마우스 이벤트를 잡아낼 수도 없습니다.

{{EmbedInteractiveExample("pages/css/border-image-outset.html")}}

## 구문

```css
/* <length> 값 */
border-image-outset: 1rem;

/* <number> 값 */
border-image-outset: 1.5;

/* 세로방향 | 가로방향 */
border-image-outset: 1 1.2;

/* 위 | 가로방향 | 아래 */
border-image-outset: 30px 2 45px;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-image-outset: 7px 12px 14px 5px;

/* 전역 값 */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: unset;
```

`border-image-outset` 속성은 한 개, 두 개, 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. 각 값은 {{cssxref("&lt;length&gt;")}}나 {{cssxref("&lt;number&gt;")}}입니다. 음수는 유효하지 않습니다.

- **한 개의 값**은 모든 네 면의 거리를 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 거리를 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 거리를 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 거리를 지정합니다. (시계방향)

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 테두리 거리의 크기로 고정값 사용.
- {{cssxref("&lt;number&gt;")}}
  - : 테두리 거리의 크기로 {{cssxref("border-width")}}의 배수 사용.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div id="outset">밖으로 나간 테두리를 가지고 있어요!</div>
```

### CSS

```css
#outset {
  width: 10rem;
  background: #cef;
  border: 1.4rem solid;
  border-image: radial-gradient(#ff2, #55f) 40;
  border-image-outset: 1.5; /* = 1.5 * 1.4rem = 2.1rem */
  margin: 2.1rem;
}
```

### 결과

{{EmbedLiveSample("예제", "auto", 200)}}

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}
