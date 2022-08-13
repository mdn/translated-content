---
title: Tools for SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
translation_of: Web/SVG/Tutorial/Tools_for_SVG
---
{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}

Nachdem nun die Grundlagen von SVG bekannt sind, soll ein Blick auf einige Tools geworfen werden, um mit SVG-Dateien zu arbeiten.

### Browser support

Ab Internet Explorer 9 unterstützen alle großen Browser SVG: IE 9, Mozilla Firefox, Safari, Google Chrome und Opera. Mobile Geräte mit auf Webkit basierenden Browsern unterstützen auch SVG. Auf älteren oder kleineren Geräten besteht die Möglichkeit, dass SVG Tiny unterstützt wird.

## Inkscape

URL: [www.inkscape.org](http://www.inkscape.org)

One of the most important tools for a graphics format is a decent drawing program. Inkscape offers state-of-the-art vector drawing, and it's open source.

Moreover, it uses SVG as its native file format. To store Inkscape specific data, it extends the SVG file with elements and attributes in a custom namespace, but you can also choose to export as plain SVG.

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

Zeichnungen können als SVG aus Google Docs exportiert werden.

## Wissenschaft

Beide gut bekannten Plotting-Werkzeug xfig und gnuplot unterstützen den Export als SVG. Um Graphen online-Hilfe zu rendern, nutze man [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/), es unterstützt VML, SVG und canvas und entscheidet anhand des Browsers automatisch, welche Technologie dabei genutzt wird.

In GIS-Anwendungen (Geographic Information System) wird SVG oft benutzt, um Daten sowohl zu speichern als auch fürs spätere Rendern. Für Näheres siehe [carto.net](http://carto.net).

## Weitere Tools!

Beim W3C findet sich eine [Liste von Programmen](http://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}
