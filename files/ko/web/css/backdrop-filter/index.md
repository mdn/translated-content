---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`backdrop-filter`** 는 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다. 요소 "뒤"에 적용하기 때문에, 효과를 확인하려면 요소나 요소의 배경을 적어도 반투명하게는 설정해야 합니다.

```css
/* 키워드 값 */
backdrop-filter: none;

/* SVG 필터를 가리키는 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 값 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 다중 필터 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 전역 값 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

## 구문

### 값

- `none`
  - : 뒤에 아무런 필터도 적용하지 않습니다.
- `<filter-function-list>`
  - : 뒤에 적용할 {{cssxref("&lt;filter-function&gt;")}} 또는 [SVG필터](/ko/docs/Web/SVG/Element/filter)의 공백 구분 목록입니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574),
    linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### 결과

{{EmbedLiveSample("예제", 600, 400)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("filter")}}
