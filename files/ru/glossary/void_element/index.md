---
title: Пустой элемент
slug: Glossary/Void_element
---

**Пустой элемент** — {{Glossary("element", "элемент")}} HTML, SVG или MathML, который **не может** иметь дочерних узлов (т.е. вложенных элементов или текста внутри себя).

Спецификации [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/) и [MathML](https://www.w3.org/TR/MathML3/) спецификации очень строго определяют, какой элемент что может содержать. Многие комбинации семантически не имеют смысла, например элемент {{HTMLElement("audio")}} внутри элемента {{HTMLElement("hr")}}.

В HTML использование закрывающего тега для пустого элемента обычно ошибочно. Например, `<input type="text"></input>` является недопустимым HTML.

Пустые элементы в HTML:

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}(Удалён в HTML 5.2 Draft)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}
