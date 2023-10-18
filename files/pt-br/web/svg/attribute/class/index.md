---
title: class
slug: Web/SVG/Attribute/class
---

« [Página inicial da referência de atributos do SVG](/pt-BR/SVG/Attribute)

Atribui um nome de classe ou um conjunto de nomes de classe a um elemento. Você pode atribuir o mesmo nome ou nomes de classe para qualquer número de elementos. Se você especificar vários nomes de classe, estes devem ser separados por caracteres de espaço em branco.

O nome de classe de um elemento tem duas funções principais:

- Como um seletor de folha de estilo, para a utilização quando um autor quiser atribuir informações de estilo a um conjunto de elementos.
- Para utilizações gerais do navegador.

A classe pode ser utilizada pra estilizar o conteúdo do SVG com CSS.

## Utilização

| Categorias          | Nenhuma                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| Valor               | [\<list-of-class-names>](/pt-BR/SVG/Content_type#List-of-Ts)                                   |
| Animável            | Sim                                                                                            |
| Documento normativo | [SVG 1.1 (2ª Edição): O atributo class](https://www.w3.org/TR/SVG/styling.html#ClassAttribute) |

{{ page("/pt-BR/SVG/Content_type","List-of-Ts") }}

## Exemplo

```html
<html>
  <body>
    <svg
      width="120"
      height="220"
      viewPort="0 0 120 120"
      version="1.1"
      xmlns="https://www.w3.org/2000/svg">
      <style type="text/css">
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

      <rect class="rectClass" x="10" y="10" width="100" height="100" />
      <circle class="circleClass" cx="40" cy="50" r="26" />
    </svg>
  </body>
</html>
```

## Elementos

Os seguintes elementos podem utilizar o atributo `class`:

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

## Compatibilidade com navegadores

{{Compat("svg.attributes.style.class")}}
