---
title: <time>
slug: Web/CSS/time
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/time
---
{{CSSRef}}

## Übersicht

Der `<time>` [CSS](/de/docs/Web/CSS) Datentyp bestimmt eine Zeitangabe in Sekunden oder Millisekunden. Dieser setzt sich aus einem {{cssxref("&lt;number&gt;")}} Wert und der entsprächenden Einheit zusammen. Dazwischen darf sich kein Leerzeichen befinden.

Die verschiedenen Einheiten sind:

- `s` für Sekunden (bspw. `0s`, `1.5s`, `-60s)`
- `ms` für Millisekunden(bspw. `0ms`, `1500ms`, `-60000ms)`

Die Umwandlung zwischen `s` und `ms` folgt dem logischen `1s` = `1000ms`.

Auch wenn alle Einheiten dieselbe Zeit für den Wert `0` repräsentieren, darf die Einheit in diesem Fall nicht ausgelassen werden, da sie keine {{cssxref("&lt;length&gt;")}} ist: `0` ist ungültig und entspricht nicht `0s` oder `0ms`.

## Beispiele

Dies sind gültige Zeitwerte:

    12s         Positive Ganzzahl
    -456ms      Negative Ganzzahl
    4.3ms       keine Ganzzahl
    14mS        Die Einheit ist unabhängig von Groß- und Kleinschreibung, jedoch werden Großbuchstaben für s und ms nicht empfohlen.
    +0s         Null mit einem führenden + und der Einheit
    -0ms        Null mit einem führenden - und der Einheit (obwohl seltsam ist dies ein erlaubter Wert)

Dies sind ungültige Zeitwerte:

    0           Obwohl die einheitenlose Null für {{cssxref("length")}} erlaubt ist, ist sie ungültig für alle anderen Einheiten.
    12.0        Dies ist eine {{cssxref("&lt;number&gt;")}}, keine <time>; sie muss eine Einheit haben.
    7 ms        Leerzeichen zwischen {{cssxref("&lt;number&gt;")}} und Einheit sind nicht erlaubt.

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar                         |
| ---------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName('CSS3 Values','#time','&lt;time&gt;')}}         | {{Spec2('CSS3 Values')}} | Definiert `s` und `ms` normativ   |
| {{SpecName('CSS2.1','aural.html#times','&lt;time&gt;')}} | {{Spec2('CSS2.1')}}         | Definiert `s` und `ms` informativ |

## Browser Kompatibilität

{{Compat("css.types.time")}}
