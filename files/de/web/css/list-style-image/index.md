---
title: list-style-image
slug: Web/CSS/list-style-image
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Liste
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/list-style-image
---
{{CSSRef}}

## Übersicht

Die `list-style-image` CSS Eigenschaft gibt das Bild an, das als Aufzählungszeichen verwendet wird.

Es ist oft einfacher, die Kurzform Eigenschaft {{ cssxref("list-style") }} zu verwenden.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
list-style-image: none;

/* <url> Werte */
list-style-image: url('starsolid.gif');

/* Globale Werte */
list-style-image: inherit;
list-style-image: initial;
list-style-image: unset;
```

### Werte

- `<uri>`
  - : Adresse des Bildes, das als Aufzählungszeichen verwendet werden soll.
- `none`
  - : Gibt an, dass kein Bild als Aufzählungszeichen verwendet werden soll. Falls dieser Wert gesetzt ist, wird das in {{ Cssxref("list-style-type") }} definierte Aufzählungszeichen verwendet.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### CSS

```css
ul {
  list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif")
}
```

### Result

{{EmbedLiveSample('Beispiele')}}

## Spezifikationen

| Spezifikation                                                                                                        | Status                           | Anmerkung                                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| {{ SpecName('CSS3 Lists', '#list-style-image', 'list-style-image') }}                         | {{ Spec2('CSS3 Lists') }} | Erweitert die Unterstützung auf beliebige {{cssxref("&lt;image&gt;")}} Datentypen. |
| {{ SpecName('CSS2.1', 'generate.html#propdef-list-style-image', 'list-style-image') }} | {{ Spec2('CSS2.1') }}     | Ursprüngliche Definition                                                                   |

## Browser Kompatibilität

{{Compat("css.properties.list-style-image")}}

## Siehe auch

- {{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-position") }}
