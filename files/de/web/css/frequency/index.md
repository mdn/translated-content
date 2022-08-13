---
title: <frequency>
slug: Web/CSS/frequency
translation_of: Web/CSS/frequency
---
{{ CSSRef() }}

## Übersicht

Der [CSS](/de/docs/Web/CSS "CSS") Datentyp `<frequency>` steht für eine Frequenz, wie sie bspw. bei Audio Inhalten gebraucht wird. Der Wert setzt sich susammen aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer Einheit. Dazwischen darf kein Leerzeichen sein.

Die folgenden Einheiten können gewählt werden:

- [`Hz`]()
  - : Für eine Frequenz in Hertz.
- [`kHz`]()
  - : Für eine Frequenz in Kilohertz.

Alle Einheiten können auch den Wert `0` (`0kHz` oder `0Hz`` )`annehmen, welcher unabhängig der Einheit immer dasselbe Ergebnis erzielt. Ein Wert ohne angabe einer Einheit (`0`) ist nicht zulässig.

## Beispiele

Gültige Werte:

    12Hz        Positive integer.
    -456kHz     Negative integer.
    4.3Hz       Non-integer.
    14KhZ       The unit is case-insensitive, though non-SI capitalization is not recommended.
    +0Hz        Zero, with a leading + and the unit.
    -0kHz       Zero, with a leading - and the unit (Though strange, this is an allowed value).

Ungültige Werte:

    12.0        This is a <number>, not an <frequency>, it must have a unit.
    7 Hz        No space is allowed between the <number> and the unit.
    0           Zero values can be written without a unit only if there are <length> values, not <frequency>.

## Spezifikation

| Spezifikation                                                                        | Status                               | Anmerkung |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------- |
| {{ SpecName('CSS3 Values', '#frequency', '&lt;frequency&gt;') }} | {{ Spec2('CSS3 Values') }} |           |

## Browser Kompatibilität

{{Compat}}

\[\*] Einige Versionen von Opera unterstützten den Datentyp teilweise in einer veralteten Spezifikation.
