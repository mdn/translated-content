---
title: Leeres Element
slug: Glossary/Empty_element
tags:
  - CodingScripting
  - Fortgeschritten
  - Glossar
translation_of: Glossary/Empty_element
original_slug: Glossary/Leeres_Element
---
Ein **Leeres Element** ist ein {{Glossary("Element")}} aus HTML, SVG oder MathML, welches **keine untergeordneten Elemente** besitzen kann.

Die Spezifikationen von [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), und [MathML](https://www.w3.org/TR/MathML3/) geben sehr genau vor, welches Element was beinhalten kann. Viele Kombinationen ergeben keinen Sinn, zum Beispiel ein {{HTMLElement("audio")}} Element innerhalb eines {{HTMLElement("hr")}} Elements.

In HTML ist es ungültig, solche Elemente zu schließen. Ein Beispiel: `<input type="text"></input>` ist in HTML ungültig.

Die folgenden Elemente sind **leere Elemente**:

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}(HTML 5.2 Entwurf entfernt)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}
