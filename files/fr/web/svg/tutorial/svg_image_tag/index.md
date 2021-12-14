---
title: 'SVG: Elément image'
slug: Web/SVG/Tutorial/SVG_Image_Tag
tags:
  - Débutant
  - SVG
  - Tutoriel
translation_of: Web/SVG/Tutorial/SVG_Image_Tag
original_slug: Web/SVG/Tutoriel/SVG_Image_Tag
---
{{ PreviousNext("Web/SVG/Tutoriel/polices_SVG", "Web/SVG/Tutoriel/Tools_for_SVG") }}

L'élément SVG {{ SVGElement("image") }} permet d'afficher des images pixélisées au sein d'un objet SVG.

Dans cet exemple basique, une image JPG liée par l'attribut {{ SVGAttr("xlink:href") }} sera rendue à l'intérieur d'un objet SVG.

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
	<image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

Il faut prendre note de quelques point essentiels (donnés par les [spécifications W3](http://www.w3.org/TR/SVG/struct.html#ImageElement)):

- Si les attributs x ou y ne sont pas spécifiés, ils vaudront 0.
- Si les attributs height ou width ne sont pas spécifiés, ils vaudront 0.
- Si l'attribut height ou l'attribut width est initialisé à 0, cela désactivera l'affichage de l'image.

{{ PreviousNext("Web/SVG/Tutoriel/polices_SVG", "Web/SVG/Tutoriel/Tools_for_SVG") }}
