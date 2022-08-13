---
title: CSS Transformationen verwenden
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
tags:
  - CSS
  - CSS Transformationen
  - CSS3
  - Fortgeschritten
  - Guide
translation_of: Web/CSS/CSS_Transforms/Using_CSS_transforms
original_slug: Web/CSS/CSS_Transforms/CSS_Transformationen_verwenden
---
{{CSSRef}}

Durch Modifizierung des Koordinatenraums ändern **CSS Transformationen** den Umriss und die Position des betreffenden Inhalts ohne den normalen Dokumentfluss zu unterbrechen. Diese Anleitung bietet eine Einführung in die Verwendung von Transformationen.

CSS Transformationen sind als eine Reihe von CSS Eigenschaften implementiert, die es erlauben, affine lineare Transformationen auf HTML Elemente anzuwenden. Diese Transformationen beinhalten Drehung, Verzerrung, Skalierung und Verschiebung sowohl im ebenen als auch im 3D Raum.

> **Warning:** Nur Elemente, die durch das Box-Modell positioniert werden, können transformiert werden. Als Faustregel gilt, dass ein Element durch das Box-Modell positioniert wird, wenn es `display: block` hat.

## CSS Transformationseigenschaften

Zwei Haupteigenschaften werden dazu verwendet, CSS Transformationen zu definieren: {{cssxref("transform")}} und {{cssxref("transform-origin")}}.

- {{cssxref("transform")}}
  - : Bestimmt die Transformationen, die auf das Element angewendet werden. Sie ist eine leerzeichenseparierte Liste von Transformationen, welche eine nach der anderen angewendet werden, wie durch die Zusammensetzungsoperation verlangt.
- {{cssxref("transform-origin")}}
  - : Bestimmt die Position des Ursprungs. Standardmäßig ist dieser in der Mitte des Elements und kann verschoben werden. Er wird von mehreren Transformationen verwendet wie Drehung, Skalierung oder Verzerrung, die einen bestimmten Punkt als Parameter benötigen.

## Beispiele

Hier ist ein unverändertes Bild des MDN-Logos:

![MDN Logo](https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png)

### Drehung

Dieses Beispiel erstellt einen iframe, der Googles Homepage beinhaltet, die um 90 Grad um die linke untere Ecke gedreht wurde.

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### Verzerrung und Verschiebung

Dieses Beispiel erstellt einen iframe, der Googles Homepage beinhaltet, verzerrt um 10 Grad und verschoben um 150 Pixel auf der x-Achse.

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D-spezifische CSS Eigenschaften

Die Anwendung von CSS Transformationen im dreidimensionalen Raum ist ein wenig komplexer. Zunächst muss der 3D Raum konfiguriert werden, indem ihm eine Perspektive gegeben wird. Anschließend muss konfiguriert werden, wie die 2D Elemente sich in diesem Raum verhalten.

### Eine Perspektive einrichten

Das erste zu setzende Element ist die {{cssxref("perspective")}}. Die Perspektive ist das, was uns den 3D-Eindruck vermittelt. Je weiter die Elemente vom Betrachter entfernt sind, desto kleiner sind sie.

{{page("/en-US/docs/Web/CSS/perspective", "Setting perspective", 0, 0, 3)}}

Das zweite Element, das konfiguriert werden muss, ist die Position des Betrachters mit der Eigenschaft {{ cssxref("perspective-origin") }}. Standardmäßig ist die Perspektive auf den Betrachter zentriert, was nicht immer ausreichend ist.

{{page("/en-US/docs/Web/CSS/perspective-origin", "Changing the perspective origin", 0, 0, 3)}}

Sobald Sie dies getan haben, können Sie das Element im 3D-Raum bearbeiten.

## Siehe auch

- [Gerätausrichtung mit 3D Transformationen verwenden](/de/docs/Web/Guide/Events/Gerätausrichtung_mit_3D_Transformationen_verwenden)
- [Einführung in CSS 3D Transformationen](http://desandro.github.com/3dtransforms/) (Blogeintrag von David DeSandro in Englisch)
- [CSS Transform Playground](https://css-transform.moro.es/) (Online-Tool zur Visualisierung von CSS Transformationsfunktionen)
