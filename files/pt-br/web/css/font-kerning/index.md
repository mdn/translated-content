---
title: font-kerning
slug: Web/CSS/font-kerning
---

{{CSSRef}}

A propriedade CSS **`font-kerning`** controla o o uso da informação de kerning, que é, o controle de como as letras serão espaçadas. A informação de kerning é armazenada na fonte, e se a fonte é _well-kerned_, essa caracteristica permite que o espaçamento entre caracteres seja muito parecido, independente dos caracteres.

![Example of font-kerning](font-kerning.png)

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Global values */
font-kerning: inherit;
font-kerning: initial;
font-kerning: unset;
```

{{cssinfo}}

## Syntax

### Values

- `auto`
  - : This keyword defers to the browser regarding whether to use kerning. When the font size is small, font kerning may look strange and browsers will disable it. This is the default value.
- `normal`
  - : This keyword requires kerning to be applied.
- `none`
  - : This keyword prevents the browser from using the kerning information stored in the font.

### Formal syntax

{{csssyntax}}

## Examples

```css
p {
  font-kerning: none;
}
```

## Specifications

| Specification                                                       | Status                  | Comment            |
| ------------------------------------------------------------------- | ----------------------- | ------------------ |
| {{SpecName('CSS3 Fonts', '#propdef-font-kerning', 'font-kerning')}} | {{Spec2('CSS3 Fonts')}} | Initial definition |

## Browser Compatibility

{{Compat("css.properties.font-kerning")}}

## Kerning Demo

### HTML Content

```html
<div id="kern"></div>
<div id="nokern"></div>
<textarea id="input">AV T. ij</textarea>
```

### CSS Content

```css
#nokern,
#kern {
  font-size: 2rem;
  font-family: serif;
}
#nokern {
  font-kerning: none;
}
#kern {
  font-kerning: normal;
}
```

### JS Content

```js
var input = document.getElementById("input"),
  kern = document.getElementById("kern"),
  nokern = document.getElementById("nokern");
input.addEventListener("keyup", function () {
  kern.textContent = input.value; /* Update content */
  nokern.textContent = input.value;
});
kern.textContent = input.value; /* Initialize content */
nokern.textContent = input.value;
```

{{ EmbedLiveSample('Kerning_Demo') }}

## See also

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("letter-spacing")}}.
