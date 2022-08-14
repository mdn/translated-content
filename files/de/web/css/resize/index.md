---
title: resize
slug: Web/CSS/resize
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/resize
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`resize`** CSS legt fest, ob ein Element größenveränderbar ist, und wenn ja, in welche Richtungen.

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` gilt nicht für die folgenden Elemente:

- Inline Elemente
- Blockelemente, für die die Eigenschaft {{cssxref("overflow")}} auf `visible` gesetzt ist

## Syntax

```css
/* Schlüsselwortwerte */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Globale Werte */
resize: inherit;
resize: initial;
resize: unset;
```

Die Eigenschaft `resize` wird als ein einzelner Schlüsselwortwert aus der folgenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine vom Benutzer steuerbare Möglichkeit zur Größenänderung des Elements.
- `both`
  - : Das Element zeigt eine Möglichkeit an, die es dem Benutzer erlaubt, sowohl die horizontale als auch die vertikale Größe des Elements zu ändern.
- `horizontal`
  - : Das Element zeigt eine Möglichkeit an, die es dem Benutzer erlaubt, die horizontale Größe des Elements zu ändern.
- `vertical`
  - : Das Element zeigt eine Möglichkeit an, die es dem Benutzer erlaubt, die vertikale Größe des Elements zu ändern.
- `block` {{experimental_inline}}
  - : Abhängig von den Werten für {{cssxref("writing-mode")}} und {{cssxref("direction")}}, zeigt das Element eine Möglichkeit an, die es dem Benutzer erlaubt, die horizontale oder vertikale Größe des Elements in Blockrichtung zu ändern.
- `inline` {{experimental_inline}}
  - : Abhängig von den Werten für {{cssxref("writing-mode")}} und {{cssxref("direction")}}, zeigt das Element eine Möglichkeit an, die es dem Benutzer erlaubt, die horizontale oder vertikale Größe des Elements in Inlinerichtung zu ändern.

> **Note:** **Hinweis:** `resize` wird nicht auf Blöcke angewendet, für die die {{cssxref("overflow")}} Eigenschaft auf `visible` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Größenänderungsmöglichkeit von textareas

In vielen Browsern sind {{HTMLElement("textarea")}} Elemente standardmäßig in der Größe veränderbar. Sie können dieses Verhalten mit der `resize` Eigenschaft überschreiben.

#### HTML

```html
<textarea>Type some text here.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Disables resizability */
}
```

```css
textarea {
  resize: none; /* Disables resizability */
}
```

#### Ergebnis

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

### Verwendung von resize bei beliebigen Elementen

Sie können die Eigenschaft `resize` verwenden, um die Größe eines beliebigen Elements zu ändern. Im folgenden Beispiel enthält ein größenveränderbares {{HTMLElement("div")}} einen größenveränderbaren Absatz ({{HTMLElement("p")}} Element).

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because
    the CSS `resize` property is set to `both` on this element.
  </p>
</div>
```

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because
    the CSS `resize` property is set to `both` on this element.
  </p>
</div>
```

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## Spezifikationen

| Spezifikation                                                                    | Status                                           | Kommentar                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| {{SpecName('CSS Logical Properties', '#resize', 'resize')}} | {{Spec2('CSS Logical Properties')}} | Fügt die Werte `block` und `inline` hinzu. |
| {{SpecName('CSS3 Basic UI', '#resize', 'resize')}}             | {{Spec2('CSS3 Basic UI')}}             | Ursprüngliche Definition                   |

## Browser Kompatibilität

{{Compat("css.properties.resize")}}

## Siehe auch

- {{HTMLElement("textarea")}}
