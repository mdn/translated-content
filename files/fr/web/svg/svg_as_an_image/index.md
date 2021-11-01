---
title: SVG en tant qu'image
slug: Web/SVG/SVG_as_an_Image
tags:
  - Images
  - SVG
translation_of: Web/SVG/SVG_as_an_Image
original_slug: Web/SVG/SVG_en_tant_qu_image
---
{{SVGRef}}

Le format SVG peut être utilisé en tant qu'image dans de nombreux contextes. Beaucoup de navigateurs prennent en charge les images au format SVG avec :

- les balises HTML {{HTMLElement("img")}} ou {{HTMLElement("svg")}}
- l'attribut CSS {{cssxref("background-image")}}

## Contexte spécifique à Gecko

De plus, Gecko 2.0 {{geckoRelease("2.0")}} prend en charge l'usage du format [SVG](/fr/docs/SVG) dans ces contextes:

- la propriété CSS {{cssxref("list-style-image")}}
- la propriété CSS {{cssxref("content")}}
- l'élément SVG {{SVGElement("image")}}
- l'élément SVG {{SVGElement("feImage")}}
- la fonction Canvas [`drawImage`](/fr/docs/HTML/Canvas/Tutorial/Using_images#drawImage)

### Restrictions

Pour plusieurs raisons, Gecko fixe quelques restrictions sur le format SVG lorsqu'il est utilisé en tant qu'image :

- [JavaScript](/fr/docs/Web/JavaScript "JavaScript") est désactivé.
- Les ressources externes (p. ex. images, stylesheets) ne peuvent pas être chargées, cependant elles peuvent être utilisées en étant déclaré à travers des URLs de données.
- Les liens stylistiques {{cssxref(":visited")}}  ne sont pas interprété.
- Les widgets stylistiques natifs aux plateformes (basés sur le thème de l'OS) sont désactivés.

A noter que les restrictions précédentes sont spécifiques à l'usage de SVG en tant qu'image; elles ne s'appliquent pas lorsque le contenu SVG est vu directement, ou lorsque il est embarqué en tant que document via les éléments {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, ou {{HTMLElement("embed")}}

## Spécifications

| Specification                                                                                                                            | Status                                   | Comment                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName("HTML5 W3C", "embedded-content-0.html#the-img-element", "SVG within &lt;img&gt; element")}} | {{Spec2("HTML5 W3C")}}             | Définit l'usage de SVG dans les éléments {{HTMLElement("img")}}.             |
| {{SpecName("CSS3 Backgrounds", "#the-background-image", "SVG within 'background-image' CSS property")}} | {{Spec2("CSS3 Backgrounds")}} | Définit l'usage de SVG dans la propriété {{cssxref("background-image")}}. |



## Voir aussi



- [Introduction à SVG dans HTML](/fr/docs/Introduction_à_SVG_dans_HTML)
