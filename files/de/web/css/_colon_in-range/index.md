---
title: ':in-range'
slug: Web/CSS/:in-range
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:in-range
---
{{CSSRef}}

Die **`:in-range`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/CSS/Pseudo-classes "Pseudo-classes") entspricht einem {{htmlelement("input")}} Element, dessen aktueller Wert innerhalb eines bestimmten Bereichs liegt. Dieser Bereich wird durch die {{htmlattrxref("min", "input")}} und {{htmlattrxref("max","input")}} Attribute festgelegt.

```css
/* Wählt jedes <input> Element aus, aber nur wenn es eine
   Begrenzung festlegt, und sein Wert innerhalb dieser
   Begrenzung liegt */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
```

Diese Pseudoklasse ist nützlich um den Nutzer visuell darauf hinzuweisen, dass der aktuelle Wert des Feldes innerhalb der erlaubten Begrenzungen liegt.

> **Note:**Diese Pseudoklasse gilt nur für Elemente, die eine Begrenzung haben. Wenn es eine solche Begrenzung nicht gibt, kann der Wert des Elements weder "in-range" (innerhalb der Begrenzung) noch "out-of-range" (außerhalb der Begrenzung) sein.

## Syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<form action="" id="form1">
  <ul>Werte zwischen 1 und 10 sind gültig.
    <li>
      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
      <label for="value1">Der Wert ist </label>
    </li>
  </ul>
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
  content: 'okay.';
}

input:out-of-range + label::after {
  content: 'außerhalb der Begrenzung!';
}
```

### Result

{{EmbedLiveSample('Example', 600, 140)}}

## Spezifikationen

| Specification                                                                                        | Status                               | Comment                                               |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-in-range', ':in-range')}} | {{Spec2('HTML WHATWG')}}     | Definiert wann `:in-range` HTML-Elementen entspricht. |
| {{SpecName('CSS4 Selectors', '#in-range-pseudo', ':in-range')}}                 | {{Spec2('CSS4 Selectors')}} | Standard Wert definiert.                              |

## Browser compatibility

{{Compat("css.selectors.in-range")}}

## See also

- {{cssxref(":out-of-range")}}
- [Form data validation](/de/docs/Learn/HTML/Forms/Form_validation)
