---
title: 빈 요소
slug: Glossary/Void_element
---

**빈 요소**는 HTML, SVG, MathML의 {{glossary("element", "요소")}} 중 자식 노드를 가질 수 **없는** 요소입니다.

[HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), [MathML](https://www.w3.org/TR/MathML3/)의 명세는 각각의 요소가 무엇을 담을 수 있는지 매우 정확하게 명시하고 있습니다. 많은 수의 조합은 {{htmlelement("hr")}} 안의 {{htmlelement("audio")}}와 같이, 아무런 의미도 갖지 않습니다.

HTML의 빈 요소에 닫는 태그를 사용하는 건 보통 유효하지 않습니다. 예를 들어 `<input type="text"></input>`는 유효하지 않은 HTML입니다.

HTML의 빈 요소 목록은 다음과 같습니다.

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}(HTML 5.2 초안에서 제거)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}
