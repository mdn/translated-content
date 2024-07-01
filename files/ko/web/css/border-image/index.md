---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef}}

**`border-image`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 주위에 이미지를 그립니다. 일반 [테두리](/ko/docs/Web/CSS/border)를 대체합니다.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

`border-image`는 {{cssxref("border-image-source")}}, {{cssxref("border-image-slice")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-outset")}}, {{cssxref("border-image-repeat")}}의 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)입니다. 다른 단축 속성과 마찬가지로, 생략한 속성은 [초기값](/ko/docs/Web/CSS/initial_value)으로 설정됩니다.

> **참고:** 테두리 이미지를 불러오는데 실패할 경우에 대비해 {{cssxref("border-style")}} 속성을 설정해야 합니다. 사실 명세에 따르면 필수로 지정해야 하지만 모든 브라우저가 그렇게 구현하지는 않았습니다.

## 구문

```css
/* 이미지 | 슬라이스 */
border-image: linear-gradient(red, blue) 27;

/* 이미지 | 슬라이스 | 반복 */
border-image: url("/images/border.png") 27 space;

/* 이미지 | 슬라이스 | 너비 */
border-image: linear-gradient(red, blue) 27 / 35px;

/* 이미지 | 슬라이스 | 너비 | 거리 | 반복 */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;
```

`border-image` 속성은 아래 나열한 값 중 한 개에서 다섯 개 사이를 사용해 지정할 수 있습니다.

> **참고:** 만약 {{cssxref("border-image-source")}}의 [계산값](/ko/docs/Web/CSS/computed_value)이 `none`이거나 이미지를 그릴 수 없다면 {{cssxref("border-style")}}이 대신 보여집니다.

### 값

- `<'border-image-source'>`
  - : 원본 이미지. {{cssxref("border-image-source")}}를 참고하세요.
- `<'border-image-slice'>`
  - : 이미지를 구역별로 나눌 때 사용할 슬라이스 크기. 네 개 값까지 지정할 수 있습니다. {{cssxref("border-image-slice")}}를 참고하세요.
- `<'border-image-width'>`
  - : 테두리 이미지 너비. 네 개 값까지 지정할 수 있습니다. {{cssxref("border-image-width")}}를 참고하세요.
- `<'border-image-outset'>`
  - : 테두리 이미지와 요소 외곽의 거리. 네 개 값까지 지정할 수 있습니다. {{cssxref("border-image-outset")}}을 참고하세요.
- `<'border-image-repeat'>`
  - : 원본 이미지의 모서리 구역을 테두리의 크기에 맞출 때의 조정 방법. 두 개 값까지 지정할 수 있습니다. {{cssxref("border-image-repeat")}}을 참고하세요.

### 형식 구문

{{csssyntax}}

## 예제

### 비트맵

이번 예제는 요소의 테두리에 마름모 패턴을 적용합니다. 테두리 이미지의 원본은 가로 81픽셀, 세로 81픽셀의 ".png" 파일로, 8개의 마름모가 사각형의 테두리를 이루고 있습니다.

![an example borderimage](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

마름모 하나의 크기에 맞추기 위해, 81을 3으로 나눈 `27`을 슬라이스 크기로 사용하여 원본 이미지를 모서리와 테두리 구역으로 나눕니다. 테두리 이미지의 중앙을 요소 테두리의 가운데로 맞추기 위해 거리도 각 너비의 절반으로 설정합니다. 마지막으로 반복 값에 `round`를 지정해 모서리가 끊기거나 잘리지 않도록 설정합니다.

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### 결과

{{EmbedLiveSample('비트맵', '100%', 200)}}

### 그레이디언트

#### HTML

```html
<div id="gradient">그레이디언트 기반 테두리 이미지에 둘러 쌓인 요소에요!</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### 결과

{{EmbedLiveSample('그레이디언트')}}

## 접근성 고려사항

보조 기술은 테두리 이미지를 읽을 수 없습니다. 이미지가 페이지 목적의 이해에 필수적인 정보를 갖고 있다면 문서에서 구조적으로 설명하는 편이 좋습니다.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()")}} 함수
- 그레이디언트 함수: {{CSSxRef("conic-gradient")}}, {{CSSxRef("linear-gradient")}}, {{CSSxRef("repeating-linear-gradient")}}, {{CSSxRef("radial-gradient")}}, {{CSSxRef("repeating-radial-gradient")}}
