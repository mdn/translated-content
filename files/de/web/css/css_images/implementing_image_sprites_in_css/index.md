---
title: Implementing image sprites in CSS
slug: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
tags:
  - Anleitung
  - CSS
  - CSS Bilder
  - Fortgeschrittene
  - Grafik
  - NeedsContent
  - Sprites
  - Web
translation_of: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
---
{{APIRef}}

Image Sprites werden in zahlreichen Webanwendungen verwendet, wo mehrere Bilder verwendet werden. Statt jedes Bild als eine eigene Bilddatei einzubinden, ist es wesentlich speicher- und bandbreitenfreundlicher, sie als ein einzelnes Bild zu schicken, um die Anzahl an HTTP Anfragen zu verringern.

## Implementierung

Angenommen, jedem Element mit der Klasse `toolbtn` wird ein Bild zugewiesen:

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine Hintergrundposition kann entweder über zwei x- und y-Werte nach der {{cssxref("url()")}} dem Hintergrund hinzugefügt werden oder als {{cssxref("background-position")}}. Als Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies verschiebt das Element mit der ID 'btn1' um 20 Pixel nach links und das Element mit der ID 'btn2' um 40 Pixel nach links (unter Annahme, dass diesen die Klasse `toolbtn` zugewiesen wurde und durch die obere CSS Regel beeinflusst werden).

Ebenso können Hover-Status erstellt werden mit:

```css
#btn:hover {
  background-position: <nach rechts verschobene Pixel>px <nach unten verschobene Pixel>px;
}
```

## Siehe auch

[Voll funktionsfähige Demo bei CSS Tricks](http://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
