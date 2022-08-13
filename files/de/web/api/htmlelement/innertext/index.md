---
title: Node.innerText
slug: Web/API/HTMLElement/innerText
tags:
  - API DOM Property Reference
translation_of: Web/API/HTMLElement/innerText
original_slug: Web/API/Node/innerText
---
{{APIRef("DOM")}}

## Zusammenfassung

**`Node.innerText`** ist eine Eigenschaft die die "gerenderten" Text Inhalte einer node und ihrer nachfahren representiert. Als getter nähert es sich dem Text an, den ein User erhalten würde wenn sie/er den Inhalt des Elementes mit dem Kursor highlighten und dann zum Clipboard kopieren würde. Dieses Feature wurde ursprünglich von Internet Explorer eingeführt, und wurde förmlich in den HTML standards von 2016 spezifiziert nachdem es von allen Hauptbrowsern übernommen wurde.

{{domxref("Node.textContent")}} ist eine etwas ähnliche Alternative. Es gibt allerdings wichtige Unterschiede zwischen den beiden.

## Spezifikation

| Spezifikation                                                                                                | Status                           | Kommentar                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'dom.html#the-innertext-idl-attribute', 'innerText')}} | {{Spec2('HTML WHATWG')}} | Eingeführt, basiert auf dem [draft of the innerText specification](https://github.com/rocallahan/innerText-spec). Siehe [whatwg/html#465](https://github.com/whatwg/html/issues/465) und [whatwg/compat#5](https://github.com/whatwg/compat/issues/5) für die Historie. |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
