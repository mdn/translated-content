---
title: pointer
slug: Web/CSS/@media/pointer
translation_of: Web/CSS/@media/pointer
---
{{cssref}}

Das [CSS](/de/docs/CSS) {{cssxref("@media")}} media Merkmal **`pointer`** wird verwendet um Styles abhängig vom primären Eingabemechanismus des Geräts anzuwenden. Es gibt aufschluss darüber ob der primäre Eingabemechanismus ein Zeigegerät ist, und wenn ja, wie präzise es ist.

## Syntax

Die Einstellungsmöglichkeiten für das Merkmal `pointer` sind in der folgenden Liste aufge

- `none`
  - : Das Gerät verfügt nur über Tastatur
- `coarse`
  - : Das Gerät verfügt über ein Eingabegerät mit limitierter Präzision (z.B. Touch)
- `fine`
  - : Das Gerät verfügt über einen sehr präzises Eingabegerät (z.B. Maus, Touchpad, Stift)

## Beispiel

### HTML

```html
<input id="test" type="checkbox" />
<label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### Result

{{EmbedLiveSample("Example")}}

## Spezifikationen

| Specification                                                                | Status                                   | Comment             |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('CSS4 Media Queries', '#pointer', 'pointer')}} | {{Spec2('CSS4 Media Queries')}} | Initial definition. |

## Browser Kompatibilität

{{Compat("css.at-rules.media.pointer")}}

## See also

- [the `any-pointer` media feature](/de/docs/Web/CSS/@media/any-pointer)
