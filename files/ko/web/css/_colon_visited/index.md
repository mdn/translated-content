---
title: ":visited"
slug: Web/CSS/:visited
---

{{ CSSRef }}

**`:visited`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 사용자가 방문한 적이 있는 링크를 나타냅니다. `:visited`가 바꿀 수 있는 스타일은 개인정보 보호를 위해 매우 제한적입니다.

```css
/* 방문한 적이 있는 <a> 선택 */
a:visited {
  color: green;
}
```

`:visited` 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":hover")}}, {{cssxref(":active")}})가 덮어씁니다. 링크를 적절히 디자인하려면 _LVHA-순서(_`:link` — `:visited` — `:hover` — `:active`)를 따라, `:visited` 규칙을 `:link` 뒤, `:hover`와 `:active` 앞에 배치하세요.

## 스타일 제한

브라우저는 개인정보 보호를 위해 `:visited`에서 사용할 수 있는 스타일을 엄격히 제한하고 있습니다.

- 사용 가능한 CSS 속성은 {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}입니다.
- 사용 가능한 SVG 속성은 {{SVGAttr("fill")}}과{{SVGAttr("stroke")}}입니다.
- 허용 가능한 속성의 알파 채널 값은 무시하고, 대신 `:visited`가 아닐 때의 알파 채널을 사용합니다. 단, 그 값이 0일 땐 `:visited`의 스타일을 모두 무시합니다.
- 사용자 입장에서는 방문한 링크의 색이 바뀐 것처럼 보일 때도, {{domxref("window.getComputedStyle()")}} 메서드는 거짓으로라도 항상 `:visited`가 아닐 때의 스타일을 반환합니다.

> **참고:** 스타일 제한에 관한 더 많은 정보와 이유에 대해서는 [개인정보와 :visited 선택자](/ko/docs/Web/CSS/Privacy_and_the_:visited_selector) 문서를 참고하세요.

## 구문

{{csssyntax}}

## 예제

기본적으로 색이 없거나 투명한 속성은 `:visited`로 수정할 수 없습니다. `:visited`가 수정 가능한 속성 중 브라우저가 기본값을 지정하는건 보통 `color`와 `column-rule-color` 뿐입니다. 따라서 다른 속성을 수정하고 싶다면 기본값을 직접 지정해야 합니다.

### HTML

```html
<a href="#test-visited-link">링크를 아직 방문하지 않으셨나요?</a><br />
<a href="">이미 방문했습니다.</a>
```

### CSS

```css
a {
  /* 특정 속성에 투명하지 않은 기본값을 지정해
     :visited 상태로 바꿀 수 있도록 설정 */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [개인정보와 :visited 선택자](/ko/docs/Web/CSS/Privacy_and_the_:visited_selector)
- 링크 관련 의사 클래스: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
