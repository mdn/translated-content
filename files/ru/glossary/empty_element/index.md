---
title: Пустой элемент
slug: Glossary/Empty_element
tags:
  - CodingScripting
  - Glossary
  - Intermediate
  - Глоссарий
translation_of: Glossary/Empty_element
original_slug: Глоссарий/Empty_element
---
<p><span class="seoSummary"><strong>Пустой элемент</strong> — {{Glossary("element", "элемент")}} HTML, SVG или MathML, который <strong>не может</strong> иметь дочерних узлов (т.е. вложенных элементов или текста внутри себя).</span></p>

<p>Спецификации <a href="https://html.spec.whatwg.org/multipage/">HTML</a>, <a href="https://www.w3.org/TR/SVG2/">SVG</a> и <a href="https://www.w3.org/TR/MathML3/">MathML</a> спецификации очень строго определяют, какой элемент что может содержать. Многие комбинации семантически не имеют смысла, например элемент {{HTMLElement("audio")}} внутри элемента {{HTMLElement("hr")}}.</p>

<p>В HTML использование закрывающего тега для пустого элемента обычно ошибочно. Например, <code>&lt;input type="text"&gt;&lt;/input&gt;</code> является недопустимым HTML.</p>

<p>Пустые элементы в HTML:</p>

<ul>
 <li>{{HTMLElement("area")}}</li>
 <li>{{HTMLElement("base")}}</li>
 <li>{{HTMLElement("br")}}</li>
 <li>{{HTMLElement("col")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("hr")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("keygen")}}(Удалён в HTML 5.2 Draft)</li>
 <li>{{HTMLElement("link")}}</li>
 <li>{{HTMLElement("meta")}}</li>
 <li>{{HTMLElement("param")}}</li>
 <li>{{HTMLElement("source")}}</li>
 <li>{{HTMLElement("track")}}</li>
 <li>{{HTMLElement("wbr")}}</li>
</ul>
