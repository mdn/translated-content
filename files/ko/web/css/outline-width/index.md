---
title: outline-width
slug: Web/CSS/outline-width
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`outline-width`** 속성은 요소 외곽선의 두께를 설정합니다. 외곽선은 요소의 [테두리](/ko/docs/Web/CSS/border) 바깥에 그려지는 선입니다.

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

외곽선 외형을 설정할 땐 {{cssxref("outline")}} 단축 속성을 사용하는게 편리한 상황이 많습니다.

## 구문

```css
/* 키워드 값 */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> 값 */
outline-width: 1px;
outline-width: 0.1em;

/* 전역 값 */
outline-width: inherit;
```

`outline-width` 속성은 다음 값 중 하나를 사용해 지정합니다.

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 외곽선의 두께를 `<length>`로 설정합니다.
- `thin`
  - : 사용자 에이전트마다 다릅니다. 데스크톱 브라우저에서는 보통 `1px`입니다.
- `medium`
  - : 사용자 에이전트마다 다릅니다. 데스크톱 브라우저에서는 보통 `3px`입니다.
- `thick`
  - : 사용자 에이전트마다 다릅니다. 데스크톱 브라우저에서는 보통 `5px`입니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 요소의 외곽선 두께 설정하기

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### 결과

{{EmbedLiveSample('요소의_외곽선_두께_설정하기', '100%', '80')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
