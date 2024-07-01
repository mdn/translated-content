---
title: isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

**`isolation`** [CSS](/ko/docs/Web/CSS) 속성은 요소가 새로운 {{glossary("stacking context", "쌓임 맥락")}}을 생성해야 하는지 지정합니다.

{{EmbedInteractiveExample("pages/css/isolation.html")}}

{{cssxref("mix-blend-mode")}}와 함께 사용했을 때 특히 유용합니다.

## 구문

```css
/* 키워드 값 */
isolation: auto;
isolation: isolate;

/* 전역 값 */
isolation: inherit;
isolation: initial;
isolation: unset;
```

`isolation` 속성은 다음 키워드 값 중 하나를 사용해 지정합니다.

### 값

- `auto`
  - : 요소에 적용한 속성 중 새로운 쌓임 맥락을 요구하는 속성이 있을 때만 쌓임 맥락을 생성합니다.
- `isolate`
  - : 항상 새로운 쌓임 맥락을 생성합니다.

### 형식 구문

{{csssyntax}}

## 예제

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

{{ EmbedLiveSample('예제', 230, 230) }}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
