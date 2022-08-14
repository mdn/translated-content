---
title: <br>
slug: Web/HTML/Element/br
translation_of: Web/HTML/Element/br
---
## Zusammenfassung

Das HTML Element _line break_ `<br>` produziert einen Zeilenumbruch in (Fließ-)Text (Wagenrücklauf). Es ist z.B nützlich beim Notieren eines Gedichtes oder einer Adresse, wo die Aufteilung der Zeilen von Bedeutung ist.

## Gebrauch

| Zulässiger Inhalt        | Keiner, es handelt sich um ein "void" Element.                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tag Platzierung          | Muss ein Start-Tag und darf kein Ende-Tag besitzen. In XHTML Dokumenten wird das Element als `<br/>` notiert.                                                                     |
| Zulässige Elternelemente | Alle Elemente die [formulierten Inhalt](/de/docs/HTML/Content_categories#phrasing_content "HTML/Content categories#phrasing content") akzeptieren.                                |
| Normatives Dokument      | [HTML5, section 4.6.23](http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element); [HTML 4.01, section 9.3.2](http://www.w3.org/TR/html401/struct/text.html#h-9.3.2.1) |

## Attribute

Wie alle anderen HTML Elemente besitzt dieses Element die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{ htmlattrdef("clear") }} {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}
  - : Zeigt an, wo die nächste Zeile nach dem Zeilenumbruch beginnt.> **Note:** **Gebrauchshinweis:** Dieses Attribut ist veraltet in {{ HTMLVersionInline(5) }} und **sollte nicht verwendet werden**. Stattdessen sollte die CSS-Eigenschaft {{CSSxref('clear')}} verwendet werden.

## Beispiel

```html
Mozilla Foundation<br>
1981 Landings Drive<br>
Building K<br>
Mountain View, CA 94043-0801<br>
USA
```

Ausgabe:

Mozilla Foundation
1981 Landings Drive
Building K
Mountain View, CA 94043-0801
USA

## DOM_Interface

- [HTMLBRElement](/de/docs/DOM/HTMLBRElement "DOM/HTMLBRElement")

## Anmerkungen

`<br>` _nicht_ verwenden um die Lücken zwischen Text zu vergrößern; stattdessen sollte die [CSS](/de/docs/CSS "CSS") {{cssxref('margin')}} Eigenschaft oder das {{ HTMLElement("p") }} Element verwendet werden.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("address") }} element
- {{ HTMLElement("p") }} element

{{HTMLRef}}
