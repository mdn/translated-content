---
title: Работа с SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}

Теперь, когда мы рассмотрели основы SVG, мы рассмотрим некоторые инструменты для работы с SVG файлами.

## Inkscape

URL: [www.inkscape.org](http://www.inkscape.org)

Очень важно иметь в инструментарии приличную графическую программу. Inkscape предлагает современную векторную графику с открытым исходным кодом.

Кроме того, SVG является её родным форматом. Для хранения специфичных для Inkscape данных, файл SVG расширяется элементами и атрибутами в пользовательском пространстве имён, что не мешает выбрать экспорт и в виде простого SVG.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](http://www.adobe.com/products/illustrator/)

Before Adobe acquired Macromedia, it was the most prominent promoter of SVG. From this time stems the good support of SVG in Illustrator. However, the resulting SVG often shows some quirks, that make it necessary to post-process it for general applicability.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](http://xmlgraphics.apache.org/batik/)

Batik is a set of open source tools under the roof of the Apache Software Foundation. The toolkit is written in Java and offers almost complete SVG 1.1 support, as well as some features that were originally planned for SVG 1.2.

Batik offers a viewer (Squiggle), a rasterizer for PNG output, an SVG pretty printer to format SVG files, and a TrueType-to-SVG-Font converter.

Together with [Apache FOP](http://xmlgraphics.apache.org/fop/) Batik can transform SVG to PDF.

### Other renderers

Several projects exist that can create a raster image from an SVG source. [ImageMagick](http://ImageMagick.org) is one of the most famous command-line image processing tools. The Gnome library [rsvg](http://library.gnome.org/devel/rsvg/) is used by the Wikipedia to raster their SVG graphics. Usage of headless browsers such as SlimerJS and PhantomJS are also popular for this purpose, as the image produced is closer to what the SVG will look like in the browser.

## Raphael JS

URL: [raphaeljs.com](http://raphaeljs.com/)

This is a JavaScript library, that acts as an abstraction layer between browser implementations. Notably older versions of Internet Explorer are supported by generating VML, a vector markup language, that is one of two ancestors of SVG and exists since IE 5.5.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

A newer JavaScript abstraction layer from the same author of Raphael JS. Snap.svg is designed for modern browsers and therefore supports the newest SVG features like masking, clipping, patterns, full gradients, groups. It does not support the older browsers that Raphael does.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](http://www.google.com/google-d-s/drawings/)

Drawings from Google Docs can be exported as SVG.

## Science

The well-known plotting tools xfig and gnuplot both support exporting as SVG. To render graphs on the web [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/) supports VML, SVG and canvas, automatically deciding which technology to use based on browser capabilities.

In GIS (Geographic Information System) applications SVG is often used as both storage and rendering format. See [carto.net](http://carto.net) for details.

## Больше программ!

W3C предлагает [список программ](http://www.w3.org/Graphics/SVG/WG/wiki/Implementations), которые поддерживают SVG.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}
