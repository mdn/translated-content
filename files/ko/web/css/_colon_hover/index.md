---
title: ":hover"
slug: Web/CSS/:hover
---

{{ CSSRef }}

**`:hover`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 사용자가 포인팅 장치를 사용해 상호작용 중인 요소를 선택합니다. 보통 사용자의 커서(마우스 포인터)가 요소 위에 올라가 있으면 선택됩니다.

```css
/* "호버링" 중인 <a> 요소 선택 */
a:hover {
  color: orange;
}
```

`:hover` 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":active")}})가 덮어씁니다. 링크를 적절히 디자인하려면 LVHA-순서(`:link` — `:visited` — `:hover` — `:active`)를 따라, `:hover` 규칙을 `:link`와 `:visited` 뒤, `:active` 앞에 배치하세요.

> **참고:** `:hover` 의사 클래스는 터치스크린에서 문제가 많습니다. 브라우저에 따라서 :hover를 절대 활성화하지 않을 수도 있지만, 요소를 터치한 직후에만, 아니면 터치한 이후 다른 요소를 다시 터치하기 전까지 계속 활성화할 수도 있습니다. 웹 개발자는 호버링이 제한적이거나 아예 불가능한 장치에서도 콘텐츠에 접근할 수 있도록 개발해야 합니다.

## 구문

{{csssyntax}}

## 예제

### HTML

```html
<a href="#">이 링크를 가리켜보세요.</a>
```

### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Chromium 버그 #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium 버그 #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://code.google.com/p/chromium/issues/detail?id=306581)
