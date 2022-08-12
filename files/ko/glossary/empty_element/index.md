---
title: 빈 요소
slug: Glossary/Empty_element
tags:
  - CodingScripting
  - Glossary
  - Intermediate
translation_of: Glossary/Empty_element
---
<p><strong>빈 요소</strong>는 HTML, SVG, MathML의 {{glossary("element", "요소")}} 중 자식 노드를 가질 수 <strong>없는</strong> 요소입니다.</p>

<p><a href="https://html.spec.whatwg.org/multipage/">HTML</a>, <a href="https://www.w3.org/TR/SVG2/">SVG</a>, <a href="https://www.w3.org/TR/MathML3/">MathML</a>의 명세는 각각의 요소가 무엇을 담을 수 있는지 매우 정확하게 명시하고 있습니다. 많은 수의 조합은 {{htmlelement("hr")}} 안의 {{htmlelement("audio")}}와 같이, 아무런 의미도 갖지 않습니다.</p>

<p>HTML의 빈 요소에 닫는 태그를 사용하는 건 보통 유효하지 않습니다. 예를 들어 <code>&lt;input type="text"&gt;&lt;/input&gt;</code>는 유효하지 않은 HTML입니다.</p>

<p>HTML의 빈 요소 목록은 다음과 같습니다.</p>

<ul>
 <li>{{HTMLElement("area")}}</li>
 <li>{{HTMLElement("base")}}</li>
 <li>{{HTMLElement("br")}}</li>
 <li>{{HTMLElement("col")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("hr")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("keygen")}}(HTML 5.2 초안에서 제거)</li>
 <li>{{HTMLElement("link")}}</li>
 <li>{{HTMLElement("meta")}}</li>
 <li>{{HTMLElement("param")}}</li>
 <li>{{HTMLElement("source")}}</li>
 <li>{{HTMLElement("track")}}</li>
 <li>{{HTMLElement("wbr")}}</li>
</ul>
