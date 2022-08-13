---
title: <cite>
slug: Web/HTML/Element/cite
tags:
  - Element
  - HTML
  - HTML Text-Level Semantik
  - Referenz
  - Web
translation_of: Web/HTML/Element/cite
---
## Übersicht

Das **HTML `<cite>` Element** (oder _HTML Citation Element_) repräsentiert eine Referenz zu einer kreativen Arbeit. Es muss den Titel der Arbeit, den Namen des Autors oder die URL Referenz, welche in abgekürzter Form als Metadaten vorliegen, zusätzlich zur Zitatangabe beinhalten.

> **Note:** **Hinweis zur Benutzung:\*** Eine kreative Arbeit kann ein Buch, eine Skizze, ein Essay, ein Gedicht, ein Ergebnis, ein Song, ein Script, ein Film, eine TV-Show, ein Spiel, eine Skulptur, ein Bild, eine Theaterproduktion, eine Oper, ein Musical, eine Ausstellung, ein Computer-Programm, eine Website, ein Blogpost, ein Kommentar, ein Forumeintrag, ein Tweet, ein schriftliches Statement, usw. sein.
>
> - Das {{htmlattrxref("cite", "blockquote")}} Attribut innerhalb eines {{HTMLElement("blockquote")}} oder {{HTMLElement("q")}} Elements kann für eine Online-Ressource einer Quelle genutzt werden.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), greifbarer Inhalt. |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content").                                                                                                                                  |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                           |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt.                                                                                                   |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4) hat Firefox dieses Element in die {{domxref("HTMLSpanElement")}} Schnittstelle implementiert.                                                            |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
Mehr Informationen können in <cite>[ISO-0000]</cite> gefunden werden.
```

Der HTML Code liefert folgendes Ergebnis:

Mehr Informationen können in \[ISO-0000] gefunden werden.

## Anmerkungen

Um die standardisierte Kursiv-Darstellung des \<cite> Elements zu umgehen, kann die [CSS](/de/docs/CSS "CSS") {{cssxref("font-style")}} Eigenschaft genutzt werden.

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-cite-element', '&lt;cite&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-cite-element', '&lt;cite&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;cite&gt;')}}                             | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("blockquote")}} Element für lange Zitate.
- Das {{HTMLElement("q")}} Element für einzeilige Zitate.

{{HTMLRef}}
