---
title: <noscript>
slug: Web/HTML/Element/noscript
tags:
  - Element
  - HTML
  - HTML scripting
  - Referenz
  - Web
translation_of: Web/HTML/Element/noscript
---
{{HTMLRef}}

Das **HTML Element `<noscript>` **definiert einen HTML Abschnitt, der eingefügt werden soll, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn Skripting nicht aktiviert ist.

| [lnhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Metadaten](/de/docs/HTML/Content_categories#Metadata_content "HTML/Content_categories#Metadata_content"), [flow content](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content").                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Wenn skripten deaktiviert ist und es ein Element im {{HTMLElement("head")}} Element ist: ohne bestimmte Reihenfolge, mehrere oder kein {{HTMLElement("link")}} Elemente, kein oder mehrere {{HTMLElement("style")}} Elemente, und kein oder mehrere {{HTMLElement("meta")}} Elemente. Wenn skripten deaktiviert ist und es kein Element im {{HTMLElement("head")}} Element ist: jedes nicht-darstellbare Element, aber kein `<noscript>` Element darf unter den Unterelementen sein. Sonst: flow content oder phrasing content. |
| Tageinschränkungen                                                              | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Erlaubte Überelemente                                                           | Jedes Element, welches [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt, wenn es kein `<noscript>` Element ist, oder in einem {{HTMLElement("head")}} Element (ausser für ein HTML Dokument), hier auch: nur, wenn es kein `<noscript>` Element ist.                                                                                                                                                                                                                                       |
| Erlaubte ARIA Rollen                                                            | Keine                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Attribute

Dieses Element inkludiert [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

## Beispiel

```html
<noscript>
  <!-- Anker Link zu einer externe Datei -->
  <a href="http://www.mozilla.com/">Externer Link</a>
</noscript>
<p>Rockt!</p>
```

### Resultat wenn skripten aktiviert ist

Rockt!

### Resultat wenn skripten deaktiviert ist

[Externer Link](http://www.mozilla.com/)

Rockt!

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}}             | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-noscript-element.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'scripts.html#h-18.3.1', '&lt;noscript&gt;')}}                                     | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{Compat("html.elements.noscript")}}
