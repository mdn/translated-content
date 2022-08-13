---
title: <title>
slug: Web/HTML/Element/title
tags:
  - Element
  - HTML
  - HTML Dokumentmetadaten
  - Referenz
  - Web
translation_of: Web/HTML/Element/title
---
## Übersicht

Das **HTML \<title> Element** (_HTML Titel Element_) definiert den Titel eines Dokumentes und wird in der Titelleiste des Browsers oder in der Seiten-Registerkarte angezeigt. Der Titel kann nur Text enthalten - enthaltene Tags werden nicht interpretiert.

## Gebrauch

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | Metadata Inhalt.                                                                                                                               |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Text                                                                                                                                           |
| Tag Auslassung                                                                  | Wird zwingend benötigt. Achtung: Wird das `</title>` Tag weggelassen, kann es dazu kommen, dass der Rest der Seite vom Browser ignoriert wird. |
| Erlaubte Elternelemente                                                         | Ein {{ HTMLElement("head") }} Element, das kein anderes {{ HTMLElement("title") }} Element beinhaltet.                        |
| DOM Schnittstelle                                                               | {{domxref("HTMLTitleElement")}}                                                                                                       |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
<title>Das ist der Seiten-Titel</title>
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-title-element', '&lt;title&gt;')}}         | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-title-element', '&lt;title&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.2', '&lt;title&gt;')}}                     | {{Spec2('HTML4.01')}}     |           |

{{HTMLRef}}
