---
title: 'Canvas: Contexto de Renderização em "2D"'
slug: Web/API/CanvasRenderingContext2D
---

{{APIRef}}A interface **Canvas Renderização de Contexto de duas Dimensões (** **CanvasRenderingContext2D**) é usada para desenhar retangulos, textos, imagens e outros objetos na tag ou elemento canvas. Fornece o contexto de renderização em 2D para a superfície de desenho do elemento {{ HTMLElement("canvas") }}.

Para obter um objeto desta interface, chama-se {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} em um `elemento <canvas>`, adicionando "2d" como argumento, veja o exemplo abaixo:

```js
var canvas = document.getElementById("meuCanvas"); // em seu HTML esse elemento se parece com <canvas id="meuCanvas"></canvas>
var ctx = canvas.getContext("2d");
```

Agora que você possui o contexto de renderização 2D, você pode desenhar dentro deste canvas. Por exemplo:

```js
ctx.fillStyle = "rgb(200,0,0)"; // define a cor de preenchimento do retângulo
ctx.fillRect(10, 10, 55, 50); // desenha o retângulo na posição 10, 10 com 55 pixels de largura e uma altura de 50
```

Veja as propriedades e métodos no menu lateral e abaixo. O [tutorial canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial) tem mais informações, exemplos e recursos.

## Desenhando Retângulos

Existem três métodos que imediatamente desenham retângulos ao canvas.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Determina todos os pixels no retângulo definido, pelo ponto inicial (_x, y_) e tamanho (_largura_, _altura_) para preto transparente, apagando qualquer conteúdo desenhado anteriormente.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Desenha um retângulo preenchido na posição (_x, y_) com tamanho definido pela _largura_ e _altura_
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Pinta um retângulo o qual possui um ponto inicial em _(x, y)_ e possui um _w_ _width_(largura) e um _h_ _height_(altura) dentro da tela(canvas), usando o estilo de traçado(stroke) atual.

## Desenhando Textos

Os métodos seguintes são fornecidos para desenhar texto. Veja também o objeto {{domxref("TextMetrics")}} para propriedades de texto.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Desenha(preenche) um texto fornecido, em uma posição fornecida(_x,y_).
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Desenha(traçados) um texto fornecido, em uma posição fornecida(_x,y_).
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Retorna um objeto {{domxref("TextMetrics")}} .

## Estilos de linha

Os seguintes métodos e propriedades, controlam como as linhas são desenhadas.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Largura das linhas. Padrão: `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Tipos de pontas no final das linhas. Valores possíveis: `butt` (padrão), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Define o tipo de encontro entre duas linhas. Possíveis valores: `round`, `bevel`, `miter` (default).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Relação do limite de esquadria. Padrão: `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Retorna a matriz de padrão de traço de linha atual contendo um número par de números não negativos.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Define o padrão de traço de linha atual.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Especifica onde iniciar uma matriz de traços em uma linha.

## Estilos de textos

As propriedades abaixo controlam a estilização do texto a ser apresentado:

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Configuração da fonte. Valor padrão: `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Alinhamento do texto. Possíveis valores: `start` (padrão), `end`, `left`, `right` or `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Configuração de alinhamento da linha de base (Baseline). Possíveis valores: `top`, `hanging`, `middle`, `alphabetic` (padrão), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Direção do texto. Possívels valores: `ltr, rtl`, `inherit` (padrão).

## Estilos de preenchimento e traço

O estilo de preenchimento é usado para cores e estilos dentro das formas e o estilo de traço é usado para as linhas ao redor das formas.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Cor ou estilo para usar formas internas. Padrão `#000` (preto).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Cor ou estilo a ser usado para as linhas em torno das formas. Padrão: `#000` (preto).

## Gradientes e padrões

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Cria um gradiente linear ao longo da linha fornecida pelas coordenadas representadas pelos parâmetros.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Cria um gradiente radial dado pelas coordenadas dos dois círculos representados pelos parâmetros.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Cria um padrão usando a imagem especificada (uma {{domxref("CanvasImageSource")}}). Ele repete a fonte nas direções especificadas pelo argumento de repetição. Este método retorna um {{domxref("CanvasPattern")}}.

## Sombras

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
  - : Especifica o efeito de desfoque. Padrão: `0`.
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Cor da sombra. Padrão: fully-transparent black (preto totalmente transparente).
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Distância horizontal em que a sombra será deslocada. Padrão: `0`.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Distância vertical em que a sombra será deslocada. Padrão: `0`.

## Caminhos

Os seguintes métodos podem ser usados para manipular caminhos de desenhos.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Inicia um novo caminho esvaziando a lista de subcaminhos. Chame esse método quando você quiser criar um novo caminho.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Faz com que a ponta da caneta se mova de volta para o início do subcaminho atual. Ele tenta traçar uma linha reta do ponto atual ao início. Se o desenho já foi fechado ou tem apenas um ponto, este método não faz nada.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Move o ponto inicial de um novo subcaminho para as coordenadas (x, y).
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Conecta o último ponto do caminho atual com as coordenadas (x, y) com linha reta.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Adiciona uma curva de Bézier ao caminho atual.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Adiciona uma curva de Bézier quadrática ao caminho atual.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Adiciona um arco circular ao caminho atual.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Adiciona um arco no caminho atual com os pontos de controle e raio fornecidos, conectado ao ponto anterior por uma linha reta.
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : Adiciona um arco elíptico ao caminho atual.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Cria um caminho de retângulo na posição (x, y) com o tamanho determinado por _width_ e _height_.

## Drawing paths

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the subpaths with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the subpaths with the current stroke style.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : Scrolls the current path or a given path into the view.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Creates a clipping path from the current sub-paths. Everything drawn after `clip()` is called appears inside the clipping path only. For an example, see [Clipping paths](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Compositing) in the Canvas tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Reports whether or not the specified point is contained in the current path.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Reports whether or not the specified point is inside the area contained by the stroking of a path.

## Transformações

Objects in the `CanvasRenderingContext2D` rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("SVGMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.

- {{domxref("CanvasRenderingContext2D.currentTransform")}}
  - : Current transformation matrix ({{domxref("SVGMatrix")}} object).
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Adds a translation transformation by moving the canvas and its origin x horzontally and y vertically on the grid.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multiplies the current transformation matrix with the matrix described by its arguments.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Resets the current transform to the identity matrix, and then invokes the `transform()` method with the same arguments.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}
  - : Resets the current transform by the identity matrix.

## Compositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas. Default `1.0` (opaque).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied this sets how shapes and images are drawn onto the existing bitmap.

## Desenhando imagens

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

## Manipulação de pixels

See also the {{domxref("ImageData")}} object.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at _(sx, sy)_ and has an _sw_ width and _sh_ height.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

## Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.

## The canvas state

The `CanvasRenderingContext2D` rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.

## Hit regions

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Adds a hit region to the canvas.
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Removes the hit region with the specified `id` from the canvas.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Removes all hit regions from the canvas.

## Non-standard APIs

### Blink and WebKit

Most of these APIs are [deprecated and will be removed in the future](https://code.google.com/p/chromium/issues/detail?id=363198).

- {{non-standard_inline}} `CanvasRenderingContext2D.clearShadow()`
  - : Removes all shadow settings like {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.drawImageFromRect()`
  - : This is redundant with an equivalent overload of `drawImage`.
- {{non-standard_inline}} `CanvasRenderingContext2D.setAlpha()`
  - : Use {{domxref("CanvasRenderingContext2D.globalAlpha")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setCompositeOperation()`
  - : Use {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineWidth()`
  - : Use {{domxref("CanvasRenderingContext2D.lineWidth")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineJoin()`
  - : Use {{domxref("CanvasRenderingContext2D.lineJoin")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineCap()`
  - : Use {{domxref("CanvasRenderingContext2D.lineCap")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setMiterLimit()`
  - : Use {{domxref("CanvasRenderingContext2D.miterLimit")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setStrokeColor()`
  - : Use {{domxref("CanvasRenderingContext2D.strokeStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setFillColor()`
  - : Use {{domxref("CanvasRenderingContext2D.fillStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setShadow()`
  - : Use {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDash`
  - : Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDashOffset`
  - : Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitImageSmoothingEnabled`
  - : Use {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} instead.

### Blink only

- {{non-standard_inline}} `CanvasRenderingContext2D.getContextAttributes()`
  - : Inspired by the same `WebGLRenderingContext` method it returns an `Canvas2DContextAttributes` object that contains the attributes "storage" to indicate which storage is used ("persistent" by default) and the attribute "alpha" (`true` by default) to indicate that transparency is used in the canvas.
- {{non-standard_inline}} `CanvasRenderingContext2D.isContextLost()`
  - : Inspired by the same `WebGLRenderingContext` method it returns `true` if the Canvas context has been lost, or `false` if not.

### WebKit only

- {{non-standard_inline}} `CanvasRenderingContext2D.webkitBackingStorePixelRatio`
  - : The backing store size in relation to the canvas element. See [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitGetImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitPutImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.

### Gecko only

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.

#### Prefixed APIs

- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransform`
  - : Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransformInverse`
  - : Sets or gets the current inversed transformation matrix.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).
- {{non-standard_inline}} `CanvasRenderingContext2D.mozImageSmoothingEnabled`
  - : See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDash`
  - : An array which specifies the lengths of alternating dashes and gaps . Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDashOffset`
  - : Specifies where to start a dash array on a line. Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextStyle`
  - : Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozDrawText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozMeasureText()`
  - : This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozPathText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozTextAlongPath()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.

#### Internal APIs (chrome-context only)

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.asyncDrawXULElement()")}}
  - : Renders a region of a XUL element into the `canvas`.
- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}
  - : Renders a region of a window into the `canvas`. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.
- {{non-standard_inline}} `CanvasRenderingContext2D.demote()`
  - : This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("HTMLCanvasElement")}}
