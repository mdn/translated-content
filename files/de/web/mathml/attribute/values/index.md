---
title: Werte
slug: Web/MathML/Attribute/Values
tags:
  - MathML
  - Referenz
translation_of: Web/MathML/Attribute/Values
original_slug: Web/MathML/Attribute/Werte
---
## Maßangaben

Für Angaben von Größen und Abständen in den Attributen der Darstellungselemente kennt MathML verschiedene Maßeinheiten und Konstanten:

### Einheiten

| Einheit | Beschreibung                                                                                                                                                                                                           |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`    | Einheit, die sich auf die Schriftgröße bezieht. 1 em entspricht etwa der Breite des Großbuchstabens M. Siehe auch {{ Cssxref("font-size", "font-size") }}.                                                |
| `ex`    | Einheit, die sich auf die Schriftgröße bezieht. 1 ex entspricht etwa der Höhe des Kleinbuchstabens x. In vielen Schriftarten gilt auch `1ex ≈ 0.5em`. Siehe auch {{ Cssxref("font-size", "font-size") }}. |
| `px`    | Pixel (Bildschirmpunkte)                                                                                                                                                                                               |
| `in`    | Zoll (1 Zoll = 2,54 Zentimeter)                                                                                                                                                                                        |
| `cm`    | Zentimeter                                                                                                                                                                                                             |
| `mm`    | Millimeter                                                                                                                                                                                                             |
| `pt`    | Punkt (1 Punkt = 1/72 Zoll)                                                                                                                                                                                            |
| `pc`    | Pica (1 Pica = 12 Punkt)                                                                                                                                                                                               |
| `%`     | Prozent vom Standardwert.                                                                                                                                                                                              |

### Konstanten

<table class="standard-table">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Wert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>veryverythinmathspace</code></td>
      <td>1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythinmathspace</code></td>
      <td>2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thinmathspace</code></td>
      <td>3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>mediummathspace</code></td>
      <td>4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thickmathspace</code></td>
      <td>5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythickmathspace</code></td>
      <td>6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>veryverythickmathspace</code></td>
      <td>7/18<code>em</code></td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colspan="2">
        Negative Konstante, seit Gecko 7.0 {{ geckoRelease("7.0") }}
        ({{ bug(650530) }})
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>negativeveryverythinmathspace</code></td>
      <td>-1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythinmathspace</code></td>
      <td>-2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethinmathspace</code></td>
      <td>-3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativemediummathspace</code></td>
      <td>-4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethickmathspace</code></td>
      <td>-5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythickmathspace</code></td>
      <td>-6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeveryverythickmathspace</code></td>
      <td>-7/18<code>em</code></td>
    </tr>
  </tbody>
</table>

Anmerkung: Namedspace gilt in MathML 3 als veraltet (siehe [Namedspace binding is deprecated](http://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1)) und wird seit Gecko 15.0 nicht mehr unterstützt {{ geckoRelease("15.0") }} ([bug 673759](https://bugzilla.mozilla.org/show_bug.cgi?id=673759)).

## Siehe auch

- [MathML](/de/docs/Web/MathML "/en-US/docs/Web/MathML")
- [MathML Element-Referenz](/de/docs/Web/MathML/Element)
- [MathML Attribut-Referenz](/de/docs/Web/MathML/Attribute)
