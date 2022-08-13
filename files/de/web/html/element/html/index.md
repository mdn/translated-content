---
title: <html>
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - HTML Elemente
  - HTML Referenz
  - HTML Wurzel Element
  - Referenz
  - Web
translation_of: Web/HTML/Element/html
---
## Übersicht

Das _HTML Wurzel Element_ (**`<html>`**) repäsentiert die Wurzel eines HTML Dokuments. Alle anderen Elemente müssen ein Nachfahre dieses Elements sein.

| [Inhalt Kategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | Keine.                                                                                                                                                                     |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Ein {{HTMLElement("head")}} Element, gefolgt von einem {{HTMLElement("body")}} Element.                                                                  |
| Tag Wegfall                                                                     | Der Anfangstag darf weggelassen werden, wenn der erste Code kein Kommentar ist. Der Endtag darf weggelassen werden, wenn auf das Element unmittelbar kein Kommentar folgt. |
| Erlaubte Elternelemente                                                         | Als das Wurzelelement eines Dokuments oder wo auch immer ein Fragment eines Unterdokuments in einem zusammengesetzten Dokument erlaubt ist.                                |
| DOM Schnittstelle                                                               | {{domxref("HTMLHtmlElement")}}                                                                                                                                   |

## Attribute

Dieses Element enhält die [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("manifest")}} {{HTMLVersionInline(5)}} {{Gecko_minversion_inline(1.9)}}
  - : Gibt die URI einer manifesten Quelle an, die Quellen anzeigen, welche lokal gespeichert werden sollen. Siehe [Benutzung des Application Cache](/de/docs/HTML/Using_the_application_cache "/en-US/docs/HTML/Using_the_application_cache") für weitere Details.
- {{htmlattrdef("version")}} {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}
  - : Gibt die Version der Definition des HTML Dokumententyps an, welches das aktuelle Dokument besitzt. Dieses Attribut ist nicht benötigt, weil die Versionsinformation in der Deklaration des Dokumententyps diese Information bereits liefert und ist damit überflüssig.
- {{htmlattrdef("xmlns")}}
  - : Gibt den XML Namensraum des Dokuments an. Der Standardwert ist "http\://www\.w3.org/1999/xhtml". Das ist in XHTML essentiell, doch in HTML5 optional.

## Beispiele

Der benutzte DOCTYPE wird im folgenden Beispiel benutzt, um HTML5 anzuzeigen.

```html
<!DOCTYPE html>
<html>
  <head> ... </head>
  <body> ... </body>
</html>
```

## Notizen

Weil das `<html>` Element das erste Element außer Kommentare in einem Dokument ist, wird es als das Wurzelelement bezeichnet. Obwohl dieser Tag mit [HTML](/de/docs/HTML "HTML") nicht notwendig anzugeben ist oder nur angedeutet werden kann, muss es in [XHTML](/de/docs/XHTML "XHTML") geöffnet und geschlossen sein.

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-html-element', '&lt;html&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'semantics.html#the-html-element', '&lt;html&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.3', '&lt;html&gt;')}}             | {{Spec2('HTML4.01')}}     |           |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- MathML Top-Level Element: {{MathMLElement("math")}}
- SVG Top-Level Element: {{SVGElement("svg")}}

{{HTMLRef}}
