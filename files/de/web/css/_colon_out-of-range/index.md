---
title: ':out-of-range'
slug: Web/CSS/:out-of-range
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:out-of-range
---
{{CSSRef}}

## Übersicht

Die `:out-of-range` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") passt, wenn das value Attribut eines Elements außerhalb der angegebenen Begrenzungen für dieses Element ist. Sie erlaubt der Seite, darauf zu reagieren, dass der aktuell definierte Wert eines Elements außerhalb der Bereichsgrenzen ist. Ein Wert kann außerhalb eines Bereichs sein, wenn er entweder kleiner oder größer als die gesetzten Minimal- und Maximalwerte ist.

> **Note:** **Hinweis:** Diese Pseudoklasse trifft nur auf Elemente zu, die Bereichsbegrenzungen haben. Falls keine solchen Begrenzungen existieren, kann der Wert des Elements weder innerhalb noch außerhalb der Grenzen liegen.

## Beispiel

### HTML

```html
<form action="" id="form1">
    <ul>Werte zwischen 1 und 10 sind gültig.
        <li>
            <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
            <label for="value1">Der Wert ist </label>
        </li>
</form>
```

### CSS

```css
li {
    list-style: none;
    margin-bottom: 1em;
}
input {
    border: 1px solid black;
}
input:in-range {
    background-color: rgba(0, 255, 0, 0.25);
}
input:out-of-range {
    background-color: rgba(255, 0, 0, 0.25);
    border: 2px solid red;
}
input:in-range + label::after {
    content:' OK';
}
input:out-of-range + label::after {
    content:'out of range!';
}
```

{{EmbedLiveSample('Beispielcode',600,140)}}

## Spezifikation

| Spezifikation                                                                        | Status                               | Kommentar                   |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------- |
| {{SpecName('CSS4 Selectors', '#in-range-pseudo', ':in-range')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung              |
| {{SpecName('CSS3 Basic UI', '#pseudo-range', ':in-range')}}     | {{Spec2('CSS3 Basic UI')}} | Ursprüngliche Spezifikation |

## Browser Kompatibilität

{{Compat("css.selectors.out-of-range")}}

## Siehe auch

- Link bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}}, and {{cssxref(":hover")}}.
- [Datenformular Validierungsguide](/de/docs/Web/Guide/HTML/Forms/Datenformular_Validierungsguide)
