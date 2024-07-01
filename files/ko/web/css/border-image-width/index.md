---
title: border-image-width
slug: Web/CSS/border-image-width
---

{{CSSRef}}

**`border-image-width`** [CSS](/ko/docs/Web/CSS) 속성은 요소 [테두리 이미지](/ko/docs/Web/CSS/border-image)의 너비를 설정합니다.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

속성의 값이 {{cssxref("border-width")}}보다 크다면 테두리 이미지는 안쪽 여백(과 콘텐츠) 영역을 침범하여 그려집니다.

## 구문

```css
/* 키워드 값 */
border-image-width: auto;

/* <length> 값 */
border-image-width: 1rem;

/* <percentage> 값 */
border-image-width: 25%;

/* <number> 값 */
border-image-width: 3;

/* 세로방향 | 가로방향 */
border-image-width: 2em 3em;

/* 위 | 가로방향 | 아래 */
border-image-width: 5% 15% 10%;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-image-width: 5% 2em 10% auto;

/* 전역 값 */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

`border-image-width` 속성은 한 개, 두 개, 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. 음수는 유효하지 않습니다.

- **한 개의 값**은 모든 네 면의 테두리 너비를 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 테두리 너비를 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 테두리 너비를 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 테두리 너비를 지정합니다. (시계방향)

### 값

- `<length-percentage>`
  - : {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}로 지정한 테두리 너비. 백분율 값은 왼쪽과 오른쪽 테두리에 대해선 테두리 이미지 영역의 너비, 위쪽과 아래쪽에 대해선 테두리 이미지 영역의 높이를 사용해 계산합니다.
- `<number>`
  - : 테두리 너비로 {{cssxref("border-width")}}의 배수 사용
- `auto`
  - : 방향과 일치하는 {{cssxref("border-image-slice")}}가 가진 원래 너비 또는 높이 사용. 이미지가 원래 크기를 가지고 있지 않으면 방향과 일치하는 `border-width` 크기를 사용합니다.

### 형식 구문

{{csssyntax}}

## 예제

다음 예제는 아래의 가로 90픽셀, 세로 90픽셀 이미지를 사용해 테두리 이미지를 생성합니다.

![](border.png)

원본 이미지의 각 원은 가로 30픽셀, 세로 30픽셀입니다.

### HTML

```html
<p>
  밤을 쉬이 봄이 무성할 릴케 듯합니다. 토끼, 써 이런 하나에 듯합니다. 이네들은
  나는 패, 듯합니다. 나는 보고, 딴은 토끼, 이런 멀리 듯합니다. 청춘이 가을로 둘
  버리었습니다. 걱정도 밤이 나는 애기 오는 언덕 경, 계십니다. 멀리 까닭이요,
  나는 별빛이 듯합니다. 소녀들의 벌레는 걱정도 까닭이요, 북간도에 쓸쓸함과 오면
  것은 어머님, 까닭입니다.
</p>
```

### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

### 결과

{{EmbedLiveSample('예제', 200, 240)}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
