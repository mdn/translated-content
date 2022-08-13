---
title: title
slug: Web/HTML/Global_attributes/title
tags:
  - Globales Attribut
  - HTML
  - Referenz
  - Referenzen
translation_of: Web/HTML/Global_attributes/title
original_slug: Web/HTML/Globale_Attribute/title
---
{{HTMLSidebar("Global_attributes")}}

Der **title** [globales Attribut](/de/docs/Web/HTML/Global_attributes) beinhaltet einen Text mit Informationen über das Element zu welchem es gehört. Diese Informationen werden dem Benutzer üblicherweise (aber nicht nur) als Tooltip angezeigt. Hier sind einige typische Beispiele für dieses Attribut:

- Link: Der Titel oder die Beschreibung des verlinkten Dokuments
- Media Elemente, (z.B.: ein Bild): eine Beschreibung oder Quellenangabe
- Paragraph: eine Fusszeile oder ein Kommentar über den Paragraphen
- Zitate: Informationen über den Autor, usw.

Wenn dieses Attribut weggelassen wird, ist das `title` Attribut des nächsten Vorgängers des Elements gültig (und kann somit als Tooltip für das Element verwendet werden). Wenn das Attribut als leerer String gesetzt wird, wird das `title` Attribut des Vorgängers explizit außer Kraft gesetzt (und sollte nicht als Tooltip für das Element verwendet werden).

Zusätzliche Semantics sind für die `title` Attribute der {{ HTMLElement("link") }}, {{ HTMLElement("abbr") }}, {{ HTMLElement("input") }} und {{ HTMLElement("menuitem") }} Elemente definiert.

Das `title` Attribut darf Mehrzeilig sein. Jede eingefügte `U+000A LINE FEED` (`LF`) repräsentiert eine solche newline. Aber Achtung! Dies bedeutet, dass:

```html
<p>Newlines in title should be taken into account,like this <abbr title="This is a
multiline title">example</abbr>.</p>
```

einen zweizeiligen Titel definiert.

## Bedenken bezüglich des barrierefreien Internet

Die Nutzung des `title` Attributs ist sehr problematisch für:

- Menschen, die nur Berührungsgeräte benutzen
- Menschen, die das Internet nur mit dem Keyboard navigieren
- Menschen, die mit unterstützenden Technologien wie einem Bildschirmleser auf das Internet zugreifen
- Menschen mit Beeinträchtigungen in der Feinmotorik
- Menschen mit kognitiven Bedenken

Dies kann besonders auf inkonsistenten Browser Support zurückgeführt werden. Dies ist des Weiteren ein Problem, da unterstützende Technologien zu mehr Komplexität beim Browser-Rendering der Seite führen. Falls ein Tooltip Effekt gewollt sein sollte, ist es besser eine der folgenden Browsermethoden zu benutzen.

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://www.w3.org/TR/html/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)

## Spezifikationen

| Specification                                                                                    | Status                           | Comment                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#the-title-attribute", "title")}} | {{Spec2('HTML WHATWG')}} | No change from latest snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                      |
| {{SpecName('HTML5.1', "dom.html#the-title-attribute", "title")}}             | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                     |
| {{SpecName('HTML5 W3C', "dom.html#the-title-attribute", "title")}}         | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName('HTML WHATWG')}}. From {{SpecName("HTML4.01")}}, it is now a true global attribute.                                                                                                                                                                                           |
| {{SpecName('HTML4.01', 'struct/global.html#adef-title', 'title')}}         | {{Spec2('HTML4.01')}}     | Supported on all elements but {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, and {{HTMLElement("title")}}. |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.title")}} welches dieses Attribut reflektiert
