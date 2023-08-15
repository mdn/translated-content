---
title: background
slug: Web/CSS/background
---

{{CSSRef("CSS Background")}}

[CSS](/ko/docs/Web/API/CSS) **`background`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정합니다.

{{EmbedInteractiveExample("pages/css/background.html")}}

## 구성 속성

`background`는 단축 속성으로서 다음의 하위 속성을 포함합니다.

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## 구문

```css
/* <background-color> 사용 */
background: green;

/* <bg-image>와 <repeat-style> 사용 */
background: url("test.jpg") repeat-y;

/* <box>와 <background-color> 사용 */
background: border-box red;

/* 단일 이미지, 중앙 배치 및 크기 조절 */
background: no-repeat center/80% url("../img/image.png");
```

`background` 속성을 쉼표로 구분해서 배경 레이어를 여러 개 지정할 수 있습니다.

각 레이어의 구문은 다음과 같습니다.

- 각 레이어는 다음 값을 가지거나 가지지 않을 수 있습니다.

  - [`<attachment>`](#attachment)
  - [`<bg-image>`](#bg-image)
  - [`<position>`](#position)
  - [`<bg-size>`](#bg-size)
  - [`<repeat-style>`](#repeat-style)

- [`<bg-size>`](#bg-size) 값은 [`<position>`](#position) 바로 뒤에만 위치할 수 있으며 '/' 문자로 구분해야 합니다. 예를 들면 "`center/80%`" 처럼 사용합니다.
- [`<box>`](#box) 값은 2개까지 가지거나 가지지 않을 수 있습니다. 1개 가진다면 {{cssxref("background-origin")}}과 {{cssxref("background-clip")}}을 모두 설정합니다. 2개 가진다면 처음 값은 {{cssxref("background-origin")}}, 두 번째 값은 {{cssxref("background-clip")}}을 설정합니다.
- [`<background-color>`](#background-color) 값은 마지막 레이어만 가질 수 있습니다.

### 값

- `<attachment>`
  - : {{cssxref("background-attachment")}}
- `<box>`
  - : {{cssxref("background-clip")}}, {{cssxref("background-origin")}}
- `<background-color>`
  - : {{cssxref("background-color")}}
- `<bg-image>`
  - : {{Cssxref("background-image")}}
- `<position>`
  - : {{cssxref("background-position")}}
- `<repeat-style>`
  - : {{cssxref("background-repeat")}}
- `<bg-size>`
  - : {{cssxref("background-size")}}

## 접근성 고려사항

브라우저는 배경 이미지에 대한 어떠한 추가 정보도 접근성 보조 기술에 제공하지 않습니다. 특히 스크린 리더의 경우 배경 이미지의 존재 유무조차 알려주지 않습니다. 이미지가 페이지 목적의 이해에 필수적인 정보를 갖고 있다면 문서에서 구조적으로 설명하는 편이 좋습니다.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 색상 키워드와 이미지를 사용한 배경

#### HTML

```html
<p class="topbanner">
  작은 별<br />
  반짝 반짝<br />
  작은 별
</p>
<p class="warning">문단 하나</p>
<p></p>
```

#### CSS

```css
.warning {
  background: pink;
}

.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```

#### 결과

{{EmbedLiveSample("색상_키워드와_이미지를_사용한_배경")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("box-decoration-break")}}
- [CSS 그레이디언트 사용하기](/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [한 번에 여러 배경 사용하기](/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
