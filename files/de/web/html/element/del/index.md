---
title: <del>
slug: Web/HTML/Element/del
tags:
  - Element
  - HTML
  - HTML edits
  - Referenz
  - Web
translation_of: Web/HTML/Element/del
---
{{HTMLRef}}

## Übersicht

Das **HTML `<del> E`lement** (oder _HTML Deleted Text Element_) repräsentiert eine Textmenge, die aus einem Dokument gelöscht wurde. Dieses Element wird oftmals als durchgestrichener Text dargestellt.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content") oder [fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"). |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Transparent](/de/docs/HTML/Content_categories#Transparent "HTML/Content categories#Transparent").                                                                                                                                  |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                            |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt.                                                                                    |
| DOM Schnittstelle                                                               | {{domxref("HTMLModElement")}}                                                                                                                                                                                            |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("cite")}}
  - : Eine URI als Quelle, die erläutert, warum der Text geändert wurde.
- {{htmlattrdef("datetime")}}
  - : Dieses Attribut indiziert das Datum und die Uhrzeit, wann der Text geändert wurde und muss ein [gültiges Datum mit optionaler Uhrzeitangabe](http://www.w3.org/TR/html5/common-microsyntaxes.html#valid-date-string-with-optional-time) sein. Wenn der Wert nicht als Datum mit optionaler Zeitangabe erkannt werden kann, hat dieses Element keinen Bezug zur Zeit.

## Beispiel

```html
<p><del>Dieser Text wurde gelöscht.</del></p>
```

### Ergebnis

~~Dieser Text wurde gelöscht.~~

##

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'edits.html#the-del-element', '&lt;del&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'edits.html#the-del-element', '&lt;del&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.4', '&lt;del&gt;')}}         | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("ins")}} Element für das Einfügen in einen Text.
