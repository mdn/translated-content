---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:fullscreen`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 전체 화면 모드에 진입한 모든 요소와 일치합니다. 다수의 요소가 전체 화면 중이라면 그 요소 모두 선택합니다.

## 구문

{{csssyntax}}

## 사용 참고

`:fullscreen` 의사 클래스는 요소가 전체 화면과 일반적인 모습을 넘나들 때마다 크기, 스타일, 레이아웃 등을 조정하도록 스타일시트를 설정할 수 있습니다.

## 예제

이번 예제에서는 문서의 전체 화면 여부에 따라 버튼의 색을 변경합니다. 스타일 변경은 JavaScript 없이 CSS에서만 처리합니다.

### HTML

페이지의 HTML 구조는 다음과 같습니다.

```html
<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

<p>
  This demo uses the <code>:fullscreen</code> pseudo-class to automatically
  change the style of a button used to toggle full-screen mode on and off,
  entirely using CSS.
</p>

<button id="fs-toggle">Toggle Fullscreen</button>
```

ID가 `"fs-toggle"`인 {{htmlelement("button")}}은 문서가 전체 화면이면 흐릿한 빨강, 그렇지 않으면 흐릿한 초록으로 색이 바뀝니다.

### CSS

스타일 마법은 CSS에서 일어납니다. 두 가지 규칙을 사용할 것으로, 첫 번째는 전체 화면이 아닐 때 전체 화면 버튼의 배경색을 설정합니다. 중요한 것은 `:not(:fullscreen)`으로, `:fullscreen` 의사 클래스와 일치하지 않는 요소를 선택합니다.

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

문서가 전체 화면에 들어간 경우, 대신 아래의 CSS를 적용하여 버튼 배경을 흐릿한 빨강으로 바꿉니다.

```css
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Fullscreen API](/ko/docs/Web/API/Fullscreen_API)
- [Fullscreen API 안내서](/ko/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref(":not")}}
- {{cssxref("::backdrop")}}
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/ko/docs/Web/HTML/Element/iframe#allowfullscreen) 특성
