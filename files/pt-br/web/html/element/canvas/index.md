---
title: canvas
slug: Web/HTML/Element/canvas
---

## Sumário

O elemento HTML _Canvas_ (`<canvas>`) pode ser utilizado para desenhar gráficos utilizando scripts (geralmente [JavaScript](/pt-BR/JavaScript)). Por exemplo, além de desenhar gráficos, ele pode ser usado para fazer composições de fotos e também para animações. Você poderá colocar conteúdos alternativos dentro do bloco `<canvas>`. Este conteúdo será renderizado também em navegadores antigos e em navegadores com JavaScript desabilitado.

Para mais artigos sobre canvas, veja [canvas topic page](/pt-BR/HTML/Canvas).

## Contexto de uso

| Conteúdo permitido         | Transparente, tanto [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content) ou [flow content](/pt-BR/HTML/Content_categories#flow_content).          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tags            | Nenhuma, tanto a tag de início quanto a de fim devem ser incluídas.                                                                                              |
| Elementos "pai" permitidos | Qualquer elemento que aceite [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content) ou [flow content](/pt-BR/HTML/Content_categories#flow_content). |
| Documento normativo        | [HTML 5, section 4.8.10](https://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element)                                                                 |

## Atributos

Como qualquer outro elemento HTML, este também tem [global attributes](/pt-BR/HTML/Global_attributes).

- {{ htmlattrdef("width") }}
  - : A largura do espaço em pixels CSS. O padrão é 300.
- {{ htmlattrdef("height") }}
  - : A altura do espaço em pixels CSS. O padrão é 150.

> **Nota:** The displayed size of the canvas can be changed using a stylesheet. The image is scaled during rendering to fit the styled size.

## Interface DOM

- [HTMLCanvasElement](/pt-BR/DOM/HTMLCanvasElement)

## Exemplo

```html
<canvas id="canvas" width="300" height="300">
  Desculpe-me, seu navegador não suporta o elemento &lt;canvas&gt;.
</canvas>
```

## Compatibilidade com navegadores

{{Compat("html.elements.canvas")}}

## Veja também

- [MDN canvas portal](/pt-BR/HTML/Canvas)
- Um [canvas tutorial](/pt-BR/Canvas_tutorial)
- [Canvas cheat sheet](http://blog.nihilogic.dk/2009/02/html5-canvas-cheat-sheet.html)
- [Canvas-related demos](/pt-BR/demos/tag/tech:canvas)
