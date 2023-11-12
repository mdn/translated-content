---
title: background-image
slug: Web/CSS/background-image
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`background-image`** 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

여러 개의 배경 이미지는 쌓임 맥락에 따라 서로의 위에 놓입니다. 맨 처음 지정한 이미지가 제일 위에(사용자에게 제일 가까운 것 처럼) 위치합니다.

[테두리](/ko/docs/Web/CSS/border)는 배경 이미지 위에, {{cssxref("background-color")}}는 밑에 그려집니다. 요소 박스와 테두리에 관련하여 배경 이미지를 어떻게 그릴지는 {{cssxref("background-clip")}}과 {{cssxref("background-origin")}} CSS 속성이 정의합니다.

브라우저는 값에 유효하지 않은 URI를 지정하는 등 주어진 이미지를 그릴 수 없을 때 `none` 키워드를 사용한 것처럼 처리합니다.

> **참고:** 지정한 이미지가 불투명해서 아래의 배경색을 볼 수 없더라도 {{cssxref("background-color")}}는 지정해야 합니다. 네트워크가 내려가는 등 이미지를 불러올 수 없는 상황에서 배경 색이 대체할 수 있기 때문입니다,

## 구문

각각의 배경 이미지는 [`none`](#none) 키워드나 {{cssxref("&lt;image&gt;")}} 값으로 지정할 수 있습니다.

여러 개의 배경 이미지를 지정하려면 쉼표로 구분한 다수의 값을 지정하세요.

```css
background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  ), url("catfront.png");
```

### 값

- `none`
  - : 배경 이미지의 부재를 나타내는 키워드입니다.
- {{cssxref("&lt;image&gt;")}}
  - : 배경으로 사용할 이미지입니다. [여러 개의 배경 이미지](/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)를 사용할 땐 쉼표로 구분한 다수의 값을 지정하세요.

## 접근성 고려사항

브라우저는 배경 이미지에 대한 어떠한 추가 정보도 접근성 보조 기술에 제공하지 않습니다. 특히 스크린 리더의 경우 배경 이미지의 존재 유무조차 알려주지 않습니다. 이미지가 페이지 목적의 이해에 필수적인 정보를 갖고 있다면 문서에서 구조적으로 설명하는 편이 좋습니다.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 배경 이미지 레이어링

별 모양 이미지는 배경이 투명하고, 고양이 이미지 위에 위치합니다.

#### HTML

```html
<div>
  <p class="catsandstars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #fe7f88;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-color: transparent;
}
```

#### 결과

{{EmbedLiveSample('배경_이미지_레이어링')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS로 이미지 스프라이트 구현하기](/ko/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}}
- 이미지 관련 자료형: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- 이미지 관련 함수: {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("element")}}, {{cssxref("_image", "image()")}}, {{cssxref("image-set")}}, {{cssxref("url", "url()")}}
