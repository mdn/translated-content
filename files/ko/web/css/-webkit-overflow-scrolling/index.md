---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}} {{Non-standard_header}}

[CSS](/ko/docs/Web/CSS) **`-webkit-overflow-scrolling`** 속성은 터치 단말기에서 주어진 요소의 모멘텀 기반 스크롤 활성화 여부를 결정합니다.

{{cssinfo}}

## 값

- `auto`
  - : "일반적"인 스크롤을 사용합니다. 즉 손가락을 터치 화면에서 떼는 순간 스크롤이 멈춥니다.
- `touch`
  - : 모멘텀 기반 스크롤을 사용합니다. 스크롤 제스쳐가 끝나고 손가락을 터치 화면에서 떼어도 잠시 스크롤이 지속됩니다. 지속 속도와 시간은 스크롤 제스쳐의 세기에 따라 달라집니다. 또한 새로운 {{glossary("stacking context", "쌓임 맥락")}}을 생성합니다.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div class="scroll-touch">
  <p>This paragraph has momentum scrolling</p>
</div>
<div class="scroll-auto">
  <p>This paragraph does not.</p>
</div>
```

### CSS

```css
div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* Stops scrolling immediately */
}
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

명세에 속하지 않습니다. Apple의 [Safari CSS Reference에 설명이 있습니다](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling).

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS-Tricks article with demo](http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
