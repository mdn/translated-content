---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`background-clip`** 속성은 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정합니다.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

요소가 {{cssxref("background-image")}} 또는 {{cssxref("background-color")}}를 가지지 않으면, `background-clip`은 ({{cssxref("border-style")}} 또는 {{cssxref("border-image")}} 등으로 인해) 테두리에 투명하거나 반투명한 부분이 존재하는 경우에만 시각적 차이가 발생합니다. 그렇지 않은 경우 테두리가 차이점을 가립니다.

## 구문

```css
/* 키워드 값 */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* 전역 값 */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### 값

- `border-box`
  - : 배경이 테두리의 바깥 경계까지 차지합니다. (Z축 순서 상 테두리 아래 위치)
- `padding-box`
  - : 배경이 안쪽 여백의 바깥 경계까지 차지합니다. 테두리 밑에는 배경을 그리지 않습니다.
- `content-box`
  - : 배경을 콘텐츠 상자에 맞춰 그립니다.
- `text` {{experimental_inline}}
  - : 배경을 전경 텍스트 위에만 그립니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<p class="border-box">The background extends behind the border.</p>
<p class="padding-box">
  The background extends to the inside edge of the border.
</p>
<p class="content-box">
  The background extends only to the edge of the content box.
</p>
<p class="text">The background is clipped to the foreground text.</p>
```

### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0.2);
}
```

### 결과

{{EmbedLiveSample('예제', 600, 580)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("clip-path")}} 속성은 배경 뿐 아니라 하나의 **요소 전체**에서 표시할 부분을 지정하는 클리핑 영역을 생성합니다.
- 배경 속성: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
