---
title: '-moz-image-region'
slug: Web/CSS/-moz-image-region
tags:
  - CSS
  - Non-standard
  - Referenz
translation_of: Web/CSS/-moz-image-region
---
{{Non-standard_header}}{{ CSSRef() }}

_Für ein System, das mit beliebigen Hintergründen funktioniert, siehe {{Cssxref("-moz-image-rect")}}._

## Übersicht

Die `-moz-image-region` Eigenschaft ist für XUL-Elemente und Pseudo-Elemente, welche ein Bild von der [`list-style-image`](/de/CSS/list-style-image "de/CSS/list-style-image") Eigenschaft benutzen, gedacht. Die Eigenschaft gibt einen Bereich des Bildes an, welcher anstelle des ganzen Bildes dargestellt wird. Das erlaubt Elementen verschiedene Stücke des gleichen Bildes zu benutzen, um die Leistung zu steigern.
Die Syntax ist derjenigen der clip-Property ähnlich. Alle vier Werte sind relativ von der oberen linken Ecke des Bildes.

{{cssinfo}}

## Syntax

### Werte

- auto
  - : Standardwert. Es wird nichts ausgeschnitten.
- rect()
  - : Es wird ein Bereich ausgeschnitten, der über die vier Längenangaben definert wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

    #example-button {
      /* Zeige nur einen 4x4 großen Ausschnitt von der oberen, linken Ecke des Bildes */
      list-style-image: url("chrome://example/skin/example.png");
      -moz-image-region: rect(0px, 4px, 4px, 0px);
    }
    #example-button:hover {
      /* Zeige einen anderen 4x4 großen Ausschnitt vom Bild, wenn sich die Maus über dem Button befindet */
      -moz-image-region: rect(0px, 8px, 4px, 4px);
    }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | ---        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | ---        |
| Safari (WebKit)   | ---        |

## Siehe auch

- [`clip`](/de/CSS/clip "de/CSS/clip")
