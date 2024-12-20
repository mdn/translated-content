---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**종속형 스타일 시트**(Cascading Style Sheets, CSS)는 {{glossary("browser", "브라우저")}}에서 웹페이지의 외형을 결정하는 선언형 언어입니다.

브라우저는 선택한 요소에 CSS 스타일 선언을 적용해 화면에 적절히 표현합니다. 하나의 스타일 선언은 웹 페이지의 모양을 결정하는 속성과 그 값으로 이루어져 있습니다.

CSS는 {{Glossary("HTML")}}, {{Glossary("JavaScript")}}와 함께 웹의 3대 핵심 기술을 이룹니다. 보통 {{Glossary("Element", "HTML 요소")}}의 스타일을 결정하지만, {{Glossary("SVG")}}와 {{Glossary("XML")}} 등 다른 마크업 언어에도 사용할 수 있습니다.

하나의 CSS 규칙은 {{Glossary("CSS selector", "선택자")}}에 연결된 {{Glossary("property/CSS","속성")}} 세트로 구성됩니다. HTML의 모든 문단을 검은색 배경에 노란색 글자색으로 만드는 예제를 확인해보세요.

```css
/* 선택자 "p"는 문서의 모든 단락이 해당 규칙의 영향을 받는다는 것을 나타냅니다. */
p {
  /* The "color" 속성은 텍스트 색상(이 경우, 노란색)을 정의합니다. */
  color: yellow;

  /* "background-color" 속성은 배경색(이 경우, 검은색)을 정의합니다. */
  background-color: black;
}
```

"종속형"은 페이지의 외형을 결정할 때 선택자의 우선순위를 결정하는 법을 가리킵니다. 복잡한 웹사이트의 CSS 규칙은 수천 개에 달할 수 있으므로 종속은 매우 중요한 특성입니다.

## 같이 보기

- [CSS 배우기](/ko/docs/Learn/CSS)
- 위키백과의 [CSS](https://ko.wikipedia.org/wiki/CSS)
- [MDN의 CSS 문서](/ko/docs/Web/CSS)
- [CSS Working Group의 현재 작업사항](https://www.w3.org/Style/CSS/current-work)
