---
title: border-image-source
slug: Web/CSS/Reference/Properties/border-image-source
original_slug: Web/CSS/border-image-source
---

**`border-image-source`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 [테두리 이미지](/ko/docs/Web/CSS/Reference/Properties/border-image)로 사용할 원본 이미지를 지정합니다.

{{InteractiveExample("CSS Demo: border-image-source")}}

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-diamonds.png");
```

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-stars.png");
```

```css interactive-example-choice
border-image-source: repeating-linear-gradient(
  45deg,
  transparent,
  #4d9f0c 20px
);
```

```css interactive-example-choice
border-image-source: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

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
