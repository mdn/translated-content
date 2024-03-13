---
title: object-fit
slug: Web/CSS/object-fit
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`object-fit`** 속성은 {{HTMLElement("img")}}나 {{HTMLElement("video")}} 요소와 같은 [대체 요소](/ko/docs/Web/CSS/Replaced_element)의 콘텐츠 크기를 어떤 방식으로 조절해 요소에 맞출 것인지 지정합니다.

{{cssxref("object-position")}} 속성을 사용해 대체 요소 콘텐츠가 콘텐츠 박스 내에 위치할 지점을 바꿀 수 있습니다.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## 구문

`object-fit` 속성은 다음 목록 중 하나의 키워드를 사용해 지정합니다.

### 값

- `contain`
  - : 대체 콘텐츠의 가로세로비를 유지하면서, 요소의 콘텐츠 박스 내부에 들어가도록 크기를 맞춤 조절합니다. 콘텐츠가 콘텐츠 박스 크기에 맞도록 하면서도 가로세로비를 유지하게 되므로, 서로의 가로세로비가 일치하지 않으면 객체가 ["레터박스"](https://ko.wikipedia.org/wiki/%EB%A0%88%ED%84%B0%EB%B0%95%EC%8A%A4)처럼 됩니다.
- `cover`
  - : 대체 콘텐츠의 가로세로비를 유지하면서, 요소 콘텐츠 박스를 가득 채웁니다. 서로의 가로세로비가 일치하지 않으면 객체 일부가 잘려나갑니다.
- `fill`
  - : 요소 콘텐츠 박스 크기에 맞춰 대체 콘텐츠의 크기를 조절합니다. 콘텐츠가 콘텐츠 박스를 가득 채웁니다. 서로의 가로세로비가 일치하지 않으면 콘텐츠가 늘어납니다.
- `none`
  - : 대체 콘텐츠의 크기를 조절하지 않습니다.
- `scale-down`
  - : `none`과 `contain` 중 대체 콘텐츠의 크기가 더 작아지는 값을 선택합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 이미지에 `object-fit` 지정

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />
</section>
```

#### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### 결과

{{ EmbedLiveSample('이미지에_object-fit_지정', 500, 1100) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이미지 관련 다른 CSS 속성: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
