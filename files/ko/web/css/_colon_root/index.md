---
title: ":root"
slug: Web/CSS/:root
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:root`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 문서 트리의 루트 요소를 선택합니다 HTML의 루트 요소는 {{htmlelement("html")}} 요소이므로, `:root`의 [명시도](/ko/docs/Web/CSS/Specificity)가 더 높다는 점을 제외하면 `html` 선택자와 똑같습니다.

```css
/* 문서의 루트 요소 선택
   HTML에서는 <html> */
:root {
  background: yellow;
}
```

## 구문

{{csssyntax}}

## 예제

### 전역 CSS 변수 선언하기

`:root`는 전역 [CSS 변수](/ko/docs/Web/CSS/Using_CSS_custom_properties) 선언에 유용하게 사용할 수 있습니다.

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{htmlelement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Node.rootNode")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
