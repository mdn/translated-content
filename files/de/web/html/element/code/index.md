---
title: <code>
slug: Web/HTML/Element/code
tags:
  - Code
  - Element
  - HTML
  - HTML Text-Level Semantik
  - Referenz
  - Web
translation_of: Web/HTML/Element/code
---
## Übersicht

Das _HTML Code Element_ (`<code>`) repräsentiert ein Fragment von Computer Code. Standardmäßig wird dieses Element in der Monospace Schriftart des Browsers dargestellt.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), fühlbarer Inhalt. |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content").                                                                                                                              |
| Tag Wegfall                                                                     | {{no_tag_omission}}                                                                                                                                                                                                                          |
| Erlaubte Elternelemente                                                         | Jedes Element, das [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") akzeptiert.                                                                                                |
| DOM-Schnittstelle                                                               | {{domxref("HTMLElement")}} bis einschließlich Gecko 1.9.2 (Firefox 4) hat Firefox die {{domxref("HTMLSpanElement")}} Schnittstelle für dieses Element implementiert.                                                          |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
<p>Normaler Text. <code>Das ist Code.</code> Normaler Text.</p>
```

### Ergebnis

Normaler Text. `Das ist code.` Normaler Text.

## Anmerkung

Für den `code` Selektor kann eine CSS Regel definiert werden, um die Standard Schriftart des Browsers zu überschreiben. Vom Benutzer gesetzte Einstellungen haben Vorrang vor den CSS spezifischen Einstellungen.

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-code-element', '&lt;code&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-code-element', '&lt;code&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;code&gt;')}}                             | {{Spec2('HTML4.01')}}     |           |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("command")}}
- {{HTMLElement("var")}}

{{HTMLRef}}
