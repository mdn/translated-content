---
title: <resolution>
slug: Web/CSS/resolution
translation_of: Web/CSS/resolution
---
{{CSSRef}}

## Übersicht

Der `<resolution>` [CSS](/de/docs/Web/CSS) Datentyp, der in [Media Queries](/de/docs/Web/Guide/CSS/Media_Queries) verwendet wird, kennzeichnet die Pixeldichte eines Ausgabemediums, seine Auflösung. Er ist eine {{cssxref("&lt;number&gt;")}}, der direkt eine Auflösungseinheit (`dpi`, `dpcm`, ...) folgt. Wie bei allen CSS Einheiten gibt es kein Leerzeichen zwischen der Einheit und der Zahl.

Auf Bildschirmen ist die Länge relativ zu CSS Zoll, Zentimetern oder Pixeln, nicht zu physikalischen Werten.

Auch wenn alle Einheiten die gleiche Auflösung für den Wert `0` darstellen, darf die Einheit in diesem Fall nicht weggelassen werden, da sie keine {{cssxref("&lt;length&gt;")}} ist: `0` ist ungültig und repräsentiert weder `0dpi`, `0dpcm`, noch `0dppx`.

## Einheiten

- [`dpi`]()
  - : Diese Einheit repräsentiert die Anzahl an Punkten pro Zoll. Ein Bildschirm hat typischerweise 72 oder 96dpi; ein gedrucktes Dokument erreicht normalerweise weit höhrere dpi Zahlen. Da 1 Zoll 2.54cm entspricht, `1dpi ≈ 0.39dpcm`.
- [`dpcm`]()
  - : Diese Einheit repräsentiert die Anzahl an Punkten pro Zentimeter. Da 1 Zoll 2.54cm entspricht, `1dpcm ≈ 2.54dpi`.
- [`dppx`]()
  - : Diese Einheit repräsentiert die Anzahl an Punkten pro `px` Einheit. Wegen dem festen 1:96 Verhältnis von CSS `in` zu CSS `px`, ist `1dppx` äquivalent zu `96dpi`, dies enspricht der Standardauflösung von Bildern, die in CSS dargestellt werden, wie in {{cssxref("image-resolution")}} definiert.

## Beispiele

Hier sind einige korrekte Verwendungen von `<resolution>` Werten:

    96dpi                                              Korrekte Verwendung: ein {{cssxref("&lt;number&gt;")}} Wert (hier ein {{cssxref("&lt;integer&gt;")}}) gefolgt von einer Einheit.
    @media print and (min-resolution: 300dpi) { ... }  Korrekte Verwendung im Kontext einer Media Query.

Hier sind einige inkorrekte Verwendungen:

    72 dpi                                             Falsch: Keine Leerzeichen erlaubt zwischen {{cssxref("&lt;number&gt;")}} und der Einheit.
    ten dpi                                            Falsch: Nur Ziffern dürfen verwendet werden.
    0                                                  Falsch: Die Einheit kann nur für 0 Werte weggelassen werden, die einen {{cssxref("&lt;length&gt;")}} Wert darstellen.

## Spezifization

| Spezifikation                                                                                    | Status                                   | Kommentar                                                                     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#resolution', '&lt;resolution&gt;')}}             | {{Spec2('CSS3 Values')}}         | Faktorisierung des Typs in einer allgemeineren Spezifikation. Keine Änderung. |
| {{SpecName('CSS3 Images', '#resolution-units', '&lt;resolution&gt;')}}     | {{Spec2('CSS3 Images')}}         | `dppx` Einheit hinzugefügt                                                    |
| {{SpecName('CSS3 Media Queries', '#resolution', '&lt;resolution&gt;')}} | {{Spec2('CSS3 Media Queries')}} | Ursprüngliche Definition                                                      |

## Browser Kompatibilität

{{Compat}}

\[\*] Die Webkit Engine unterstützt die CSS Auflösungsabfrage, wie sie in der Spezifikation definiert wird, nicht. Die Benutzung der nicht standardisierten `device-pixel-ratio` Abfrage wird für Safari Browser benötigt, siehe [Bug 16832](https://bugs.webkit.org/show_bug.cgi?id=16832).

\[\*\*] Vor Firefox 8 (Gecko 8.0) hat die Eigenschaft fälschlicherweise nur CSS {{cssxref("&lt;integer&gt;")}} Größenangaben erlaubt, gefolgt von der Einheit. Ab dieser Version werden alle gültigen CSS Größenangaben unterstützt ({{cssxref("&lt;number&gt;")}} direkt gefolgt von der Einheit).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/Guide/CSS/Media_Queries)
