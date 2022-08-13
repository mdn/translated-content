---
title: class
slug: Web/SVG/Attribute/class
translation_of: Web/SVG/Attribute/class
---
« [SVG Eigenschaft Referenz](/en/SVG/Attribute "en/SVG/Attribute")

Weist einen Klassennamen oder eine Reihe von Klassennamen einem Element zu. Sie können den Klassennamen mehrfach einem Element zuweisen, oder auch zu mehreren Elementen zuweisen. Jedoch müssen Klassennamen mit einem Leerzeichen getrennt sein.

Der Klassenname eines Elements hat zwei Schlüsselfunktionen:

- Als Stil-Selektor, wenn ein Autor einen Satz von Elementen Stil-Informationen zuweist.
- Als generelle Funktion für den Browser.

Sie können die Klasse verwenden um SVG mithilfe von CSS zu formatieren.

## Nutzungskontext

| Kategorien          | Keine                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Wert                | [<liste-von-klassen-namen>](/en/SVG/Content_type#List-of-Ts "en/SVG/Content type#List-of-Ts")      |
| Animierbar          | Ja                                                                                                 |
| Normatives Dokument | [SVG 1.1 (2nd Edition): The class attribute](http://www.w3.org/TR/SVG/styling.html#ClassAttribute) |

{{ page("/en/SVG/Content_type","List-of-Ts") }}

## Beispiel

```html
<html>
    <body>
        <svg width="120" height="220"
            viewPort="0 0 120 120" version="1.1"
            xmlns="http://www.w3.org/2000/svg">

            <style type="text/css" >
                <![CDATA[
                    rect.rectClass {
                        stroke: #000066;
                        fill:   #00cc00;
                    }
                    circle.circleClass {
                        stroke: #006600;
                        fill:   #cc0000;
                    }
                ]]>
            </style>

            <rect class="rectClass" x="10" y="10" width="100" height="100"/>
            <circle  class="circleClass"   cx="40" cy="50" r="26"/>
        </svg>
    </body>
</html>
```

## Elemente

Die folgenden ELemente können das `class` Attribut verwenden:

- {{ SVGElement("a") }}
- {{ SVGElement("altGlyph") }}
- {{ SVGElement("circle") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("desc") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("glyph") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("image") }}
- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("missing-glyph") }}
- {{ SVGElement("path") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("radialGradient") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("text") }}
- {{ SVGElement("textPath") }}
- {{ SVGElement("title") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}
- {{ SVGElement("use") }}

## Browser-Kompatibilität

{{Compat}}
