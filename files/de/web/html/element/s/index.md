---
title: <s>
slug: Web/HTML/Element/s
tags:
  - Element
  - HTML
  - HTML Textlevelsemantiken
  - NeedsCompatTable
  - Referenz
  - Web
translation_of: Web/HTML/Element/s
---
{{HTMLRef}}

## Übersicht

Das _HTML Strikethrough Element_ (`<s>`) stellt Text mit einer durchgestrichenen Linie dar. Benutzt wird das `<s>` Element um zu repräsentieren, dass Dinge nicht länger relevant oder zutreffend sind. `<s>` ist jedoch nicht dafür geeignet, um Dokumentenänderungen anzuzeigen - hierfür sollten das {{HTMLElement("del")}} und das {{HTMLElement("ins")}} Element genutzt werden.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content") oder [fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"). |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Transparent](/de/docs/HTML/Content_categories#Transparent "HTML/Content categories#Transparent").                                                                                                                                  |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                            |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt.                                                                                    |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## DOM Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/en-US/docs/DOM/element "DOM/element") Schnittstelle.

> **Note:** **Hinweis zur Implementierung:** Bis einschließlich Gecko 1.9.2, hat Firefox die [`HTMLSpanElement`](/de/docs/DOM/span "DOM/span") Schnittstelle für dieses Element implementiert.

## Beispiel

```html
<s>Heute im Angebot: Lachs</s> AUSVERKAUFT<br />
<span style="text-decoration:line-through;">Heute im Angebot: Lachs</span> AUSVERKAUFT
```

### Ergebnis

~~Heute im Angebot: Lachs~~ AUSVERKAUFT
~~Heute im Angebot: Lachs~~ AUSVERKAUFT

## Siehe auch

- Das {{HTMLElement("strike")}} Element, der Vorgänger des {{HTMLElement("s")}} Elements ist veraltet und sollte nicht mehr genutzt werden.
- Das {{HTMLElement("del")}} Element, welches genutzt werden sollte, wenn Daten _gelöscht_ wurden.
- Die CSS {{cssxref("text-decoration")}} Eigenschaft um die visuellen Aspekte des {{HTMLElement("s")}} Elements zu archivieren.
