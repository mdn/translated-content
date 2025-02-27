---
title: 빈 요소
slug: Glossary/Void_element
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**빈 요소**는 자식 노드(예, 중첩 요소 또는 텍스트 노드)를 **가질 수 없는** HTML의 {{glossary("element", "요소")}} 요소입니다. 빈 요소에는 시작 태그만 있습니다. 빈 요소에는 종료 태그를 지정해서는 안 됩니다.

HTML에서, 빈 요소에는 종료 태그가 없어야 합니다. 예를 들어, `<input type="text"></input>`은 잘못된 HTML입니다. HTML와는 다르게, 자식 노드를 가질 수 없는 SVG 또는 MathML 요소는 시작 태그에 XML 스스로 닫는 태그 구문 대신 종료 태그를 사용할 수 있습니다.

[HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), [MathML](https://www.w3.org/TR/MathML3/)의 명세는 각각의 요소가 무엇을 담을 수 있는지 매우 정확하게 명시하고 있습니다. 따라 일부 태그의 조합은 아무런 의미도 갖지 않습니다.

빈 요소에 자식이 있는 것으로 표시할 수 있는 방법은 없지만, JavaScript를 사용하여 DOM의 요소에 프로그래밍 방식으로 자식 조드를 추가할 수 있습니다. 그러나 믿을 만한 결과가 아니라, 이 방법은 좋지 않습니다.

HTML의 빈 요소 목록은 다음과 같습니다.

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}} {{deprecated_inline}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## 스스로 닫는 태그

"스스로 닫는 태그(`<tag />`)는 HTML에 존재하지 않습니다."

HTML 요소의 시작 태그에 후행 '/'(슬래시) 문자가 있으면 HTML 구문 분석기는 해당 슬래시 문자를 무시합니다. 이는 {{HTMLElement('script')}} 또는 {{HTMLElement('ul')}}와 같은 요소에 닫는 태그가 필요한 경우를 기억하는 것이 중요합니다. 이 경우에, 시작 태그에 후행 슬래시를 추가해도 요소가 닫히지 않습니다.

그러나, 일부 코드 포맷도구는 빈 요소의 시작 태그에 후행 슬래시 문자를 추가하여 XHTML과 호환되고 더 읽기 쉽게 만들어줍니다. 예를 들어, 일부 코드 포맷도구는 `<input type="text">`를 `<input type="text" />`로 변환합니다.

[XML](/ko/docs/Glossary/XML), [XHTML](/ko/docs/Glossary/XHTML), and [SVG](/ko/docs/Glossary/SVG)의 빈 요소에는 `<circle cx="50" cy="50" r="50" />`와 같이 스스로 닫는 태그가 필요합니다.

SVG 및 MathML에서는 자식 노드를 가질 수 없는 요소는 스스로 닫는 문법으로 표시될 수 있습니다. 이러한 경우 요소의 시작 태그가 스스로 닫는 태그로 표시되면 해당 요소에는 종료 태그가 없어야 합니다.

> [!NOTE]
> 시작 태그의 후행 `/`(슬래시) 문자 바로 앞에 따옴표가 없는 속성 값이 있는 경우(공백 없이) 슬래시는 구문분석 도구에서 삭제 되지 않고 속성 값의 일부가 됩니다. 예를 들어, `<img src=http://www.example.com/logo.svg/>` 마크업은 `src` 속성이 `http://www.example.com/logo.svg/`으로 나타나므로 URL이 잘못됩니다.

## 같이 보기

- [교체된 요소](/ko/docs/Web/CSS/Replaced_element)
