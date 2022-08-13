---
title: SVG image element
slug: Web/SVG/Tutorial/SVG_Image_Tag
tags:
  - Einsteiger
  - JPG-Bilder einfügen
  - SVG
translation_of: Web/SVG/Tutorial/SVG_Image_Tag
---
{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

Das SVG {{ SVGElement("image") }}-Element erlaubt es, Rasterbilder innerhalb von SVG-Objekten einzufügen.

In diesem Beispiel wird ein .jpg-Bild, aufgerufen durch das {{ SVGAttr("xlink:href") }}-Attribut, in ein SVG-Objekt eingefügt:

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
	<image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

Folgende wichtige Punkte müsse beachtet werden (festgelegt in den [W3-Spezifikationen](http://www.w3.org/TR/SVG/struct.html#ImageElement)):

- Wurde kein Attribut x (oder y) angegeben, wird dafür automatisch 0 gesetzt.
- Wurde kein Attribut height (oder width) angegeben, wird dafür automatisch 0 gesetzt.
- Ist das Attribut height (oder width) 0, wird das Rendern des Bildes deaktiviert.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}
