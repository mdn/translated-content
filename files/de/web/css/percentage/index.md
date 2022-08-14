---
title: <percentage>
slug: Web/CSS/percentage
tags:
  - CSS
  - CSS Datentypen
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/percentage
---
{{ CSSRef() }}

## Übersicht

Der `<percentage>` [CSS](/de/docs/Web/CSS "CSS") Datentyp repräsentiert einen Prozentwert. Viele [CSS Eigenschaften](/de/docs/Web/CSS/CSS_Referenz "en/CSS_Reference") akzeptieren Prozentwerte, oft um Größen bezüglich Elternobjekten zu definieren. Prozentwerte werden durch einen {{cssxref("&lt;number&gt;")}} Wert unmittelbar gefolgt von einem Prozentzeichen `%` angegeben. Wie bei allen Einheiten in CSS wird kein Leerzeichen zwischen der Zahl und dem '%' geschrieben.

Viele Längeneigenschaften verwenden Prozentwerte, wie {{ Cssxref("width") }}, {{ Cssxref("margin") }} und {{ Cssxref("padding") }}. Prozentwerte können auch in {{ Cssxref("font-size") }} vorkommen, wo die Größe des Texts direkt von der Textgröße des Elternelements abhängt.

> **Note:** **Hinweis:** Nur berechnete Werte werden vererbt. D. h. auch wenn ein Prozentwert für eine Elterneigenschaft verwendet wird, wird für die vererbte Eigenschaft ein realer Wert, wie beispielsweise eine Breite in Pixeln für einen {{cssxref("&lt;length&gt;")}} Wert, verwendet, nicht der Prozentwert.

## Interpolation

Werte des `<percentage>` CSS Datentyps können interpoliert werden, um Animationen zu erlauben. In diesem Fall werden sie als reale Fließkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die [Timingfunktion](/de/docs/Web/CSS/timing-function) bestimmt, die mit der Animation verbunden ist.

## Beispiele

```html
<div style="background-color:#0000FF;">
  <div style="width:50%;margin-left:20%;background-color:#00FF00;">Breite: 50%, linker Außenabstand: 20%</div>
  <div style="width:30%;margin-left:60%;background-color:#FF0000;">Breite: 30%, linker Außenabstand: 60%</div>
</div>
```

Ergibt:

{{ EmbedLiveSample('Beispiel_1','600','70') }}

```html
<div style="font-size:18px;">
  Text in Normalgröße (18px)
  <span style="font-size:50%;">50%</span>
  <span style="font-size:200%;">200%</span>
</div>
```

Ergibt:

{{ EmbedLiveSample('Beispiel_2','600','50') }}

## Spezifikation

| Spezifikation                                                                                            | Status                               | Kommentar                                               |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------- |
| {{ SpecName('CSS3 Values', '#percentages', '&lt;percentage&gt;') }}                 | {{ Spec2('CSS3 Values') }} | Keine signifikante Änderung zu CSS Level 2 (Revision 1) |
| {{ SpecName('CSS2.1', 'syndata.html#percentage-units', '&lt;percentage&gt;') }} | {{ Spec2('CSS2.1') }}         | Keine Änderung zu CSS Level 1                           |
| {{ SpecName('CSS1', '#percentage-units', '&lt;percentage&gt;') }}                 | {{ Spec2('CSS1') }}             |                                                         |

## Browser Kompatibilität

{{Compat("css.types.percentage")}}
