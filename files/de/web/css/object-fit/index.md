---
title: object-fit
slug: Web/CSS/object-fit
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Image
  - Grafik
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/object-fit
---
{{ CSSRef }}

## Übersicht

Die `object-fit` CSS Eigenschaft gibt an, wie die Inhalte eines ersetzten Elements an die Box angepasst werden, die durch dessen verwendeter Höhe und Breite erzeugt wird.

{{cssinfo}}

## Syntax

{{csssyntax}}

    object-fit: fill
    object-fit: contain
    object-fit: cover
    object-fit: none
    object-fit: scale-down

### Werte

- `fill`
  - : Der ersetzte Inhalt wird in der Größe angepasst, sodass er die Inhaltsbox des Elements ausfüllt: die konkrete Objektgröße entspricht der verwendeten Breite und Höhe des Elements.
- `contain`
  - : Der ersetzte Inhalt wird in der Größe angepasst, sodass das Seitenverhältnis beibehalten wird während es an die Inhaltsbox des Elements angepasst wird: die konkrete Objektgröße wird als eine Inhaltsbeschränkung auf die verwendete Breite und Höhe des Elements bestimmt.
- `cover`
  - : Der ersetzte Inhalt wird in der Größe angepasst, sodass das Seitenverhältnis beibehalten wird während die gesamte Inhaltsbox des Elements ausgefüllt wird: die konkrete Objektgröße wird als eine Abdeckbeschränkung auf die verwendete Breite und Höhe des Elements bestimmt.
- `none`
  - : Der ersetzte Inhalt wird nicht in der Größe angepasst, um in die Inhaltsbox des Elements zu passen: die konkrete Objektgröße wird durch den Standardalgorithmus zur Größenanpassung und eine Standardobjektgröße gleich der verwendeten Breite und Höhe des ersetzten Elements bestimmt.
- `scale-down`
  - : Der Inhalt wird in der Größe geändert als ob none oder contain angegeben wäre, je nachdem welches in einer kleineren konkreten Objektgröße resultieren würde.

## Beispiel

### HTML Inhalt

```html
<div>
  <h2>object-fit: fill</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill"/>

  <h2>object-fit: contain</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain"/>

  <h2>object-fit: cover</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover"/>

  <h2>object-fit: none</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none"/>

  <h2>object-fit: scale-down</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down"/>
</div>
```

### CSS Inhalt

```css
h2 {
  font-family: Courier New, monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 450px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

### Ausgabe

{{ EmbedLiveSample('Beispiel', 500, 450) }}

## Spezifikationen

| Spezifikation                                                                    | Status                           | Kommentar                                                       |
| -------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| {{SpecName('CSS4 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS4 Images')}} | Die Schlüsselwörter `from-image` und `flip` wurden hinzugefügt. |
| {{SpecName('CSS3 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS3 Images')}} | Ursprüngliche Spezifikation                                     |

## Browser Kompatibilität

{{Compat("css.properties.object-fit")}}

## Siehe auch

- Andere Bild bezogene CSS Eigenschaften: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
