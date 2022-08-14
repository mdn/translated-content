---
title: break-after
slug: Web/CSS/break-after
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Fragmentierung
  - NeedsExample
  - Referenz
translation_of: Web/CSS/break-after
---
{{CSSRef}}

## Übersicht

Die `break-after` [CSS](/de/docs/CSS) Eigenschaft gibt an, wie die Seite, die Spalte oder der Abschnitt nach der generierten Box umbricht. Wenn es keine generierte Box gibt, wird die Eigenschaft ignoriert.

Jeder mögliche Brechpunkt, das sind alle Begrenzungen des Elements, ist unter dem Einfluss von drei Eigenschaften: dem `break-after` Wert des vorhergehenden Elements, dem {{cssxref("break-before")}} des nächsten Elements und dem {{cssxref("break-inside")}} Wert von dem beinhaltenden Elements.

Um zu ermitteln ob ein Umbruch erfolgen muss, werden folgende Regeln angwendet:

1.  Wenn einer der drei Betroffenen Werte ein _forced break value_ ist (das sind `always`, `left`, `right`, `page`, `column` oder `region`), hat er Vorrang. Wenn mehrere der betroffenen Werte solch ein Umbruch sind, wird der Wert des Elements, welches als letztes im Flow auftritt, verwendet (der {{cssxref("break-before")}} hat Vorrang gegenüber dem `break-after` Wert, welches wiederum Vorrang gegebüber dem {{cssxref("break-inside")}} Wert hat).
2.  Wenn einer der drei betroffenen Werte ein _avoid break value_ ist (das sind `avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird kein Umbruch gemacht.

Wenn einmal ein gezwungener Umbruch gemacht worden ist, werden bei Bedarf weiche Umbrüche hinzugefügt. Aber nicht auf Elementbegrenzungen, welche zu einem entsprechenden avoid Wert führen.

{{cssinfo}}

## Syntax

```css
break-after: auto;
break-after: always;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;
break-after: page;
break-after: column;
break-after: region;
break-after: avoid;
break-after: avoid-page;
break-after: avoid-column;
break-after: avoid-region;
```

### Werte

- `auto`
  - : Initialwert. Erlaubt (bedeutet kein Verbot oder Zwang) das Einfügen jeden Umbruchs (entweder Seite, Spalte oder Abschnitt) nach der hauptsächlichen Box.
- `always`
  - : Erzwingt immer Umbrüche nach der hauptsächlichen Box. Das ist ein Synonym für `page`, welches beibehalten wurde, um Übergänge von {{cssxref("page-break-after")}} zu ermöglichen, welche eine Teilmenge dieser Eigenschaft sind.
- `avoid`
  - : Verhindert das Einfügen jeglicher Umbrüche für page, column oder region nach der hauptsächlichen Box.
- `left`
  - : Erzwingt immer einen oder zwei Seitenumbrüche direkt nach der hauptsächlichen Box, damit die nächste Seite als linke Seite formatiert wird.
- `right`
  - : Erzwingt immer einen oder zwei Seitenumbrüche direkt nach der hauptsächlichen Box, damit die nächste Seite als rechte Seite formatiert wird.
- `page`
  - : Erzwingt immer einen Seitenumbruch direkt nach der hauptsächlichen Box.
- `column`
  - : Erzwingt immer einen Spaltenumbruch direkt nach der hauptsächlichen Box.
- `region `{{experimental_inline}}
  - : Erzwing immer einen Abschnittsumbruch direkt nach der hauptsächlichen Box.
- `recto` {{experimental_inline}}
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der hauptsächlichen Box, damit die nächste Seite als eine recto Seite (eine rechte Seite in einer links-nach-rechts Ausdehnung oder eine linke Seite in einer rechts-nach-links Ausdehnung) formatiert wird.
- `verso `{{experimental_inline}}
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der hauptsächlichen Box, damit die nächste Seite als eine verso Seite (eine linke Seite in einer links-nach-rechts Ausdehnung oder eine rechte Seite in einer rechts-nach-links Ausdehnung) formatiert wird.
- `avoid-page`
  - : Verhindert jeden Seitenumbruch direkt nach der hauptsächlichen Box.
- `avoid-column`
  - : Verhindert jeden Spaltenumbruch direkt nach der hauptsächlichen Box.
- `avoid-region `{{experimental_inline}}
  - : Verhindert jeden Anschnittsumbruch direkt nach der hauptsächlichen Box.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

| Spezifikation                                                                            | Status                                   | Bemerkung                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-after', 'break-after')}} | {{Spec2('CSS3 Fragmentation')}} | Fügt die Schlüsselwörter `recto` und `verso` hinzu. Ändert dne Medientyp dieser Eigenschaft von `paged` zu {{xref_cssvisual}}. Präzisiert den Algorithmus für verschiedene Arten von Umbrüchen. |
| {{SpecName('CSS3 Regions', '#region-flow-break', 'break-after')}} | {{Spec2('CSS3 Regions')}}         | Erweitert die Eigenschaft, um Abschnittsumbrüche handhaben zu können. Für die Schlüsselwörter `avoid-region` und `region` hinzu.                                                                      |
| {{SpecName('CSS3 Multicol', '#break-after', 'break-after')}}         | {{Spec2('CSS3 Multicol')}}     | Initiale Spezifikation. Erweitert die CSS 2.1 {{cssxref("page-break-after")}} Eigenschaft, um Seiten- und Spaltenumbrüche handhaben zu können.                                               |

## Webbrowserkompatibilität

{{Compat("css.properties.break-after")}}
