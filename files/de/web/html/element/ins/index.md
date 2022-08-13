---
title: <ins>
slug: Web/HTML/Element/ins
tags:
  - Element
  - HTML
  - HTML edits
  - Referenz
  - Web
translation_of: Web/HTML/Element/ins
---
## Übersicht

Das **HTML `<ins>` Element** (oder _HTML Inserted Text_) repräsentiert eine Menge an Text, die nachträglich in das Dokument eingefügt wurde.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content") oder [fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"). |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Transparent](/de/docs/HTML/Content_categories#Transparent "HTML/Content categories#Transparent").                                                                                                                                  |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                            |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt.                                                                                    |
| DOM Schnittstelle                                                               | {{domxref("HTMLModElement")}}                                                                                                                                                                                            |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("cite")}}
  - : Dieses Attribut definiert die URI einer Quelle, die die Änderung ausgelöst hat, wie zum Beispiel eine Ticketnummer in einem Bugtrack-System.
- {{htmlattrdef("datetime")}}
  - : Dieses Attribut indiziert das Datum und die Uhrzeit, wann der Text geändert wurde und muss ein [gültiges Datum mit optionaler Uhrzeit](http://www.w3.org/TR/2011/WD-html5-20110525/common-microsyntaxes.html#valid-date-string-with-optional-time) sein. Wenn der Wert nicht als Datum mit optionaler Zeitangabe erkannt werden kann, hat dieses Element keinen Bezug zur Zeit.

## Beispiel

```html
<ins>Dieser Text wurde hinzugefügt.</ins>
```

### Ergebnis

{{EmbedLiveSample("Beispiel", 300, 300)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'edits.html#the-ins-element', '&lt;ins&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'edits.html#the-ins-element', '&lt;ins&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.4', '&lt;ins&gt;')}}         | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("del")}} Element um gelöschten Inhalt zu markieren

{{HTMLRef}}
