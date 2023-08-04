---
title: Canvas
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

A **Canvas API** provê maneiras de desenhar gráficos via [JavaScript](/pt-BR/docs/Web/JavaScript) e via elemento [HTML](/pt-BR/docs/Web/HTML) {{HtmlElement("canvas")}}. Entre outras coisas, ele pode ser utilizado para animação, gráficos de jogos, visualização de dados, manipulação de fotos e processamento de vídeo em tempo real.

A Canvas API foca amplamente em gráficos 2D. A [WebGL API](/pt-BR/docs/Web/WebGL), que também usa o elemento `<canvas>`, desenha gráficos 2D e 3D acelerados por hardware.

## Exemplo básico

Este exemplo simples desenha um retângulo verde para um canvas.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

O método {{domxref("Document.getElementById()")}} pega uma referência para o elemento HTML `<canvas>`. Em seguida, o método {{domxref("HTMLCanvasElement.getContext()")}} pega o contexto daquele elemento - a coisa sobre a qual o desenho será renderizado.

O desenho atual é feito usando a interface {{domxref("CanvasRenderingContext2D")}}. A propriedade {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} faz o retângulo verde. O método {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} coloca seu canto superior direito em (10, 10) e dá a ele o tamanho de 150 unidades de largura e 100 de altura.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### Resultado

{{ EmbedLiveSample('Exemplo_básico', 700, 180) }}

## Referência

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasImageSource")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RenderingContext")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}} {{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> **Nota:** As interfaces relacionadas ao `WebGLRenderingContext` são referenciadas sob [WebGL](/pt-BR/docs/Web/WebGL).

{{domxref("CanvasCaptureMediaStream")}} é uma interface relacionada.

## Guias e Tutoriais

- [Tutorial Canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial)

  - : Um tutorial compreensivo abordando o uso básico da API de Canvas e suas funcionalidades avançadas.

- [Mergulhando no Canvas HTML5](http://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Uma introdução prática e extensa à API Canvas e WebGL.
- [Guia Canvas](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Uma referência acessível para a API Canvas.
- [Demonstração: Um _ray-caster_ básico](/pt-BR/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Uma demonstração de animação _ray-tracing_ usando canvas.
- [Manipulando vídeos usando canvas](/pt-BR/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Combinando {{HTMLElement("video")}} e {{HTMLElement("canvas")}} para manipular dados de vídeo em tempo real.

## Bibliotecas

A API Canvas é extremamente poderosa, mas nem sempre é simples de usar. As bibliotecas listadas abaixo podem fazer a criação de projetos baseados em canvas mais rápida e fácil.

- [EaselJS](http://www.createjs.com/easeljs) é uma biblioteca de código aberto que facilita criações de jogos, arte generativa e outras experiências altamente gráficas.
- [Fabric.js](http://fabricjs.com/) é uma biblioteca código aberto em canvas com suporte à SVG.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) é uma biblioteca de código aberto para criar mapas de calor (heatmaps) baseados em canvas.
- [JavaScript InfoVis Toolkit](http://thejit.org/) cria visualizações de dados interativas.
- [Konva.js](https://konvajs.github.io/) é uma biblioteca de canvas 2D para aplicações _desktop_ e móveis.
- [p5.js](https://p5js.org/) tem um conjunto completo de funcionalidades de desenho canvas para artistas, _designers_, educadores e iniciantes.
- [Paper.js](http://paperjs.org/) é um framework de código-aberto para scripting de vetores gŕaficos que funciona sobre o Canvas HTML5.
- [Phaser](https://phaser.io/) é um framework de código-aberto rápido, grátis e divertido para jogos de navegador desenvolvidos com Canvas e WebGL.
- [Processing.js](http://processingjs.org/) é um conversor da linguagem de visualização Processing.
- [Pts.js](https://ptsjs.org/) é uma biblioteca para codificação criativa e visualização em canvas e SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) é uma API de animação _key-framing_ para Canvas.
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/) é uma biblioteca JavaScript de código aberto para criação e manipulação de elementos canvas 2D.
- O framework [ZIM](http://zimjs.com/) provê conveniências, componentes e controles para programar criatividade no canvas - inclui acessibilidade e centenas de tutoriais cheios de cores.

> **Nota:** Veja a [WebGL API](/pt-BR/docs/Web/WebGL) para bibliotecas 2D e 3D que usam WebGL.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [WebGL](/pt-BR/docs/Web/WebGL)
