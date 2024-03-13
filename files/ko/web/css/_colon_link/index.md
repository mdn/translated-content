---
title: ":link"
slug: Web/CSS/:link
---

{{ CSSRef }}

**`:link`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 아직 방문하지 않은 요소를 나타냅니다. `href` 속성을 가진 {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}} 중 방문하지 않은 모든 요소를 선택합니다.

```css
/* 아직 방문하지 않은 <a> 요소를 선택 */
a:link {
  color: red;
}
```

`:link` 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":active")}}, {{cssxref(":hover")}}, {{cssxref(":visited")}})가 덮어씁니다. 링크를 적절히 디자인하려면 LVHA-순서(`:link` — `:visited` — `:hover` — `:active`)를 따라, `:active` 규칙을 다른 모든 링크 규칙들보다 앞에 배치하세요.

> **참고:** 방문 여부에 상관하지 않고 요소를 선택하려면 {{cssxref(":any-link")}}를 사용하세요.

## 구문

{{csssyntax}}

## 예제

대부분의 브라우저는 방문한 링크에 기본값으로 특별한 {{cssxref("color")}} 값을 지정합니다. 따라서 다음 예제의 링크를 방문한 적이 없을 때만 글자 색이 적용된 모습을 볼 수 있고, 방문한 적이 있으면 브라우저 기록을 지워서 확인할 수 있습니다. 그러나 방문한 링크의 배경색은 보통 브라우저가 지정하지 않으므로 {{cssxref("background-color")}}는 계속 확인할 수 있습니다.

### HTML

```html
<a href="#ordinary-target">평범한 링크입니다.</a><br />
<a href="">이 링크는 이미 방문했습니다.</a><br />
<a>플레이스홀더 링크 (스타일 적용 안됨)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 링크 관련 의사 클래스: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
