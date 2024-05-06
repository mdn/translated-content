---
title: ":-moz-broken"
slug: Web/CSS/:-moz-broken
---

{{CSSRef}}{{Non-standard_header}}

**`:-moz-broken`** [CSS](/en-US/docs/Web/CSS) [의사 클래스](/en-US/docs/Web/CSS/Pseudo-classes)는 깨진 이미지 링크를 나타내는 요소와 일치하는 [Mozilla 확장 프로그램](/en-US/docs/Web/CSS/Mozilla_Extensions).

> **참고:** 이 선택기는 주로 테마 개발자가 사용하도록 고안되었습니다.

## 문법

```css
:-moz-broken {
  /* ... */
}
```

## 예시

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(" />
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세

Not part of any standard.

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- [Firefox bug 11011](https://bugzil.la/11011)