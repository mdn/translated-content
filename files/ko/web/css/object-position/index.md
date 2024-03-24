---
title: object-position
slug: Web/CSS/object-position
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`object-position`** 속성은 [대체 요소](/ko/docs/Web/CSS/Replaced_element)의 콘텐츠 정렬 방식을 지정합니다. 대체 요소의 객체가 덮지 않은 부분은 요소의 배경이 보이게 됩니다.

대체 요소 객체의 고유 크기(수정을 가하지 않은 원래 크기)를 조정해 요소 박스에 맞추는 방법은 {{cssxref("object-fit")}} 속성으로 지정할 수 있습니다.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## 구문

```css
/* <position> 값 */
object-position: center top;
object-position: 100px 50px;

/* 전역 값 */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### 값

- {{cssxref("&lt;position&gt;")}}
  - : 객체의 2D 위치를 지정하는 한 개에서 네 개의 값. 상대와 절대 오프셋을 사용할 수 있습니다.

> **참고:** 콘텐츠가 대체 요소의 박스 바깥으로 나가도록 지정할 수도 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 이미지 콘텐츠 위치 지정

#### HTML

두 개의 {{htmlelement("img")}} 요소가 MDN 로고를 가리키는 코드입니다.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

다음 CSS는 두 `<img>` 요소 모두에 적용할 스타일과 함께, 각각 별도로 적용할 `object-position` 속성도 지정하고 있습니다.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

첫 번째 이미지는 요소 박스의 왼쪽 경계로부터 10픽셀 떨어진 곳으로 배치됩니다. 두 번째 이미지는 요소 박스의 오른쪽 경계와 자신의 오른쪽 모서리를 서로 겹치고, 박스의 위쪽 경계로부터 박스 높이의 10% 떨어진 지점으로 배치됩니다.

#### 결과

{{ EmbedLiveSample('이미지_콘텐츠_위치_지정', '100%','600px') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이미지 관련 다른 CSS 속성: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
