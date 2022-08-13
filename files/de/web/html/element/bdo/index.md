---
title: <bdo>
slug: Web/HTML/Element/bdo
tags:
  - BiDi
  - Element
  - HTML
  - HTML Text-Level Semantik
  - NeedsCompatTable
  - Referenz
  - Web
translation_of: Web/HTML/Element/bdo
---
## Übersicht

Das **HTML `<bdo>` Element** (oder _HTML bidirectional override element_) wird genutzt um die Laufrichtung von Texten zu überschreiben. Die Richtungsabhängigkeit der einzelnen Buchstaben wird ignoriert, stattdessen wird die spezifische Richtungsabhängigkeit favorisiert.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), greifbarer Inhalt. |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content").                                                                                                                               |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                           |
| Erlaubte Elternelemente                                                         | Jedes Element, das [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") akzeptiert.                                                                                                 |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4) hat Firefox die [HTMLSpanElement](/de/docs/DOM/span "DOM/span") Schnittstelle für dieses Element implementiert.                                                    |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("dir")}}
  - : Textausrichtung in diesem Element. Mögliche Werte sind:\* `ltr`: Indiziert, dass der Text von links-nach-rechts ausgerichtet wird.
    - `rtl`: Indiziert, dass der Text von rechts-nach-links ausgerichtet wird.
    - `auto`: Der Browser entscheidet über die Ausrichtung, basierend auf den Inhalt des Elements.

## Beispiele

```html
<!-- Ändere die Textrichtung -->
<p>Dieser Text wird von links nach rechts gehen.</p>
<p><bdo dir="rtl">Dieser Text wird von rechts nach links gehen.</bdo></p>
```

### Ergebnis

Dieser Text wird von links nach rechts gehen.

.neheg sknil hcan sthcer nov driw txeT reseiD

## Bemerkung

In der HTML 4 Spezifikation werden keine Events für dieses Element beschrieben; diese wurden in XHTML hinzugefügt. Dies wird oftmals übersehen.

## Spezifikationen

| Spezifikation                                                                                                        | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-bdo-element', '&lt;bdo&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-bdo-element.html#the-bdo-element', '&lt;bdo&gt;')}}         | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'dirlang.html#h-8.2.4', '&lt;bdo&gt;')}}                                 | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

{{HTMLRef}}
