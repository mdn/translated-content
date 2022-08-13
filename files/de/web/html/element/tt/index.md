---
title: <tt>
slug: Web/HTML/Element/tt
translation_of: Web/HTML/Element/tt
---
{{ obsolete_header() }}

## Zusammenfassung

Das HTML Teletype (Fernschreiber) Text Element (`<tt>`) erzeugt ein inline Element das in der standardmässigen Nichtproportionalschrift des Browsers angezeigt wird. Die Absicht hinter diesem Element war, Text so zu präsentieren, als würde er auf einem Bildschirm mit fester Breite angezeigt, wie bei einem Fernschreiber. Es ist vermutlich verbreiteter, Text mit fester Breite mit dem Element {{ HTMLElement("code") }} anzuzeigen.

> **Note:** Dieses Element ist überholt. An seiner Stelle sollte ein angepasstes Element wie Beispielsweise {{ HTMLElement("code") }} oder {{ HTMLElement("span") }} mit [CSS](/de/docs/CSS) benutzt werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/global_attributes "HTML/global attributes"), die alle Elemente verwenden.

## DOM Interface

Dieses Element implementiert das {{domxref('HTMLElement')}} Interface.

> **Note:** **Anmerkung zur Implementation:** Bis und mit Gecko 1.9.2, Firefox implementiert das {{domxref('HTMLSpanElement')}} Interface für dieses Element.

## Beispiel

```html
<p>Geben Sie bei der Eingabeaufforderung des Fernschreibers folgendes Kommando ein: <code>set localecho</code><br />

Der Fernschreiber Client sollte <tt>Local Echo is on</tt> anzeigen</p>
```

### Resultat

Geben Sie bei der Eingabeaufforderung des Fernschreibers folgendes Kommando ein: `set localecho`
Der Fernschreiber Client sollte: `Local Echo is on` anzeigen

## Anmerkungen

- Eine CSS-Regel kann für den `tt` Selektor definiert werden, um die Standardschriftart des Browsers anzupassen. Benutzereinstellungen können Vorrang vor dem spezifizierten CSS haben.
- Obwohl dieses Element nicht für deprecated erklärt wurde, wird mit der HTML 4.01 Spezification davon abgeraten es zu benutzen, stattdessen sollten Style Sheets (CSS) verwendet werden.

## Siehe auch

- {{ HTMLElement("code") }}
- HTML 4.01 Spezifikation: [Schriftstile](http://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{ HTMLRef }}
