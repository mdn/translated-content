---
title: all
slug: Web/CSS/all
tags:
  - CSS
  - CSS Cascade
  - CSS Eigenschaft
  - Layout
  - Referenz
translation_of: Web/CSS/all
---
{{CSSRef}}

## Übersicht

Die `all` [CSS](/de/docs/Web/CSS "CSS") Kurzform Eigenschaft setzt alle Eigenschaften mit Ausnahme von {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} auf ihren ursprünglichen oder vererbten Wert zurück.

{{cssinfo}}

## Syntax

```css
all: initial;
all: inherit;
all: unset;
```

### Werte

- `initial`
  - : Dieses Schlüsselwort gibt an, dass alle dem Element oder dem Elternelement zugewiesenen Eigenschaften auf deren ursprünglichen Wert geändert werden sollen. {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} Werte sind davon nicht betroffen.
- `inherit`
  - : Dieses Schlüsselwort gibt an, dass alle dem Element oder dem Elternelement zugewiesenen Eigenschaften auf den Wert des Elternelements geändert werden sollen. {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} Werte sind davon nicht betroffen.
- `unset`
  - : Dieses Schlüsselwort gibt an, dass alle dem Element oder dem Elternelement zugewiesenen Eigenschaften auf den Wert des Elternelements geändert werden sollen, falls sie vererbbar sind, ansonsten auf ihren ursprünglichen Wert. {{cssxref("unicode-bidi")}} und {{cssxref("direction")}} Werte sind davon nicht betroffen.

### Formale Syntax

{{csssyntax}}

## Beispiele

**HTML**

```html
<blockquote id="quote">Lorem ipsum dolor sit amet.</blockquote> Phasellus eget velit sagittis.
```

**CSS**

```css
html {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

Ergibt:

#### Keine `all` Eigenschaft

```css
html { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
```

{{EmbedLiveSample("Beispiel0", "200", "125")}}

Das {{HTMLElement("blockquote")}} Element verwendet die Standarddarstellung des Browsers zusammen mit einer angepassten Hintergrund- und Textfarbe. Es verhält sich auch wie ein _Blockelement_: Der Text, der ihm folgt, wird unter ihm angezeigt.

#### `all:unset`

```css
html { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }
```

{{EmbedLiveSample("Beispiel1", "200", "125")}}

Das {{HTMLElement("blockquote")}} Element verwendet nicht die Standarddarstellung des Browsers: Es ist jetzt ein _Inlineelement_ (ursprünglicher Wert), seine {{cssxref("background-color")}} Eigenschaft ist `transparent` (ursprünglicher Wert), aber seine {{cssxref("font-size")}} Eigenschaft ist immer noch `small` (vererbter Wert) und seine {{cssxref("color")}} Eigenschaft ist `blue` (vererbter Wert).

#### `all:initial`

```css
html { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }
```

{{EmbedLiveSample("Beispiel2", "200", "125")}}

Das {{HTMLElement("blockquote")}} Element verwendet nicht die Standarddarstellung des Browsers: Es ist jetzt ein _Inlineelement_ (ursprünglicher Wert), seine {{cssxref("background-color")}} Eigenschaft ist `transparent` (ursprünglicher Wert), seine {{cssxref("font-size")}} Eigenschaft ist `normal` (ursprünglicher Wert) und seine {{cssxref("color")}} Eigenschaft ist `black` (ursprünglicher Wert).

#### `all:inherit`

```css
html { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }
```

{{EmbedLiveSample("Beispiel3", "200", "125")}}

Das {{HTMLElement("blockquote")}} Element verwendet nicht die Standarddarstellung des Browsers: Es ist jetzt ein _Blockelement_ (vererbter Wert seines beinhaltenden {{HTMLElement("div")}}), seine {{cssxref("background-color")}} Eigenschaft ist `transparent` (vererbter Wert), seine {{cssxref("font-size")}} Eigenschaft ist `small` (vererbter Wert) und seine {{cssxref("color")}} Eigenschaft ist `blue` (vererbter Wert).

## Spezifikationen

| Spezifikation                                                            | Status                               | Anmerkung                |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Cascade', '#all-shorthand', 'all') }} | {{ Spec2('CSS3 Cascade') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.all")}}

## Siehe auch

Die CSS-weiten Eigenschaften {{cssxref("initial")}}, {{cssxref("inherit")}} und {{cssxref("unset")}}.
