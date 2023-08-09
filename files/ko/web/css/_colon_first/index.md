---
title: ":first"
slug: Web/CSS/:first
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:first`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 {{cssxref("@page")}} [@-규칙](/ko/docs/Web/CSS/At-rule)과 함께 사용되며, 출력 시의 첫 페이지를 나타냅니다.

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> **참고:** first 의사 클래스 안에서는 CSS 속성의 사용이 제한됩니다. 바깥 여백, {{cssxref("orphans")}}, {{cssxref("widows")}}와 페이지 넘김만 바꿀 수 있으며, 여백 지정 시 [절대길이 단위](/ko/docs/Web/CSS/length#절대길이_단위)만 사용할 수 있습니다. 다른 모든 속성은 무시합니다.

## 구문

{{csssyntax}}

## 예제

### HTML

```html
<p>First Page.</p>
<p>Second Page.</p>
<button>출력!</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

### 결과

"출력!" 버튼을 눌러 페이지 출력 화면을 확인해보세요. 첫 번째 페이지의 콘텐츠는 중앙 어딘가에 위치하고, 두 번째 페이지의 콘텐츠는 기본 위치에 존재해야 합니다.

{{ EmbedLiveSample('예제', '80%', '150px') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("@page")}}
- 페이지 관련 다른 의사 클래스: {{Cssxref(":left")}}, {{Cssxref(":right")}}
