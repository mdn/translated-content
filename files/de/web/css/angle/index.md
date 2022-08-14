---
title: <angle>
slug: Web/CSS/angle
tags:
  - CSS
  - CSS Data Type
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/angle
---
{{ CSSRef() }}

## Übersicht

Der [CSS](/de/CSS "CSS") Datentyp `<angle>` steht für einen Winkel. Dieser kann positiv (rechts, im Uhrzeigersinn) oder negativ (links, gegen den Uhrzeigersinn) sein. Ein Winkel besteht immer aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer Einheit (`deg`, `grad`, `rad` or `turn`). Wie auch bei anderen Werten mit Einheiten darf dazwischen kein Leerschlag sein.

Für statische Elemente können mehrere Schreibweisen zum selben Ergebnis führen (bspw. `90deg` und `-270deg` oder `1turn` und `4turn`), bei dynamischen Eigenschaften wie zum Beispiel {{ cssxref("transition") }} kann die Schreibweise jedoch eine Auswirkung auf die Animation haben.

Die folgenden Einheiten können verwendet werden:

- [`deg`]()
  - : definiert einen Winkel in [Grad](<https://de.wikipedia.org/wiki/Grad_(Winkel)>). Ein voller Kreis hat `360deg`.
- [`grad`]()
  - : definiert einen Winkel in [Gon](https://de.wikipedia.org/wiki/Gon). Ein voller Kreis hat `400grad`.> **Warning:** **Achtung:** Nicht zu verwechseln mit [Grad (siehe `deg`)](/de/docs/Web/CSS/angle#deg).
- [`rad`]()
  - : definiert einen Winkel in [Radiant](https://de.wikipedia.org/wiki/Radiant_%28Einheit%29)en. Ein voller Kreis hat 2π Radianten, das entspricht etwa `6.2832rad`. `1rad` entspricht 180/π Grad.
- [`turn`]()
  - : definiert einen Winkel in der Anzahl Umdrehungen. Ein voller Kreis besteht aus `1turn`.

Alle Einheiten können auch den Wert `0` (oder `0deg`, `0grad`, `0rad`, `0turn`) annehmen, welcher unabhängig der Einheit immer dasselbe Ergebnis erzielt.

## Beispiele

| ![Angle90.png](/@api/deki/files/5704/=Angle90.png)           | Ein rechter Winkel (nach rechts, im Uhrzeigersinn): `90deg = 100grad = 0.25turn` `≈`` 1.5708rad`           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ![Angle180.png](/@api/deki/files/5706/=Angle180.png)         | Ein flacher Winkel: `180deg = 200grad = 0.5turn`` ``≈`` 3.1416rad`                                         |
| ![AngleMinus90.png](/@api/deki/files/5707/=AngleMinus90.png) | Ein rechter Winkel (nach links, gegen den Uhrzeigersinn): `-90deg = -100grad = -0.25turn` `≈`` -1.5708rad` |
| ![Angle0.png](/@api/deki/files/5708/=Angle0.png)             | Ein Nullwinkel: `0 = 0deg = 0grad = 0turn`` ``=`` 0rad`                                                    |

## Spezifikation

| Spezifikation                                                                | Status                               | Anmerkung                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Values', '#angles', '&lt;angle&gt;') }} | {{ Spec2('CSS3 Values') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.types.angle")}}
