---
title: Compositing and clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

Em todo os nossos [exemplos prévios](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Transformations), formas estavam sempre desenhadas uma em cima das outras. Este é mais do que adequado para a maioria das situações, mas é limita a ordem no qual a composição das formas são construídas.

Nós podemos, no entanto, mudar este comportamento por configurar a propriedade `globalCompositeOperation`. Além disto, a propriedade clipe permite-nos esconder indesejáveis partes da forma.

## `globalCompositeOperation`

Nós podemos somente desenhar novas formas atrás das existentes formas mas nós podemos também usar isto para mascarar certas áreas, limpar seções do canvas(não limitado para retângulos como o {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} métodos faz) e mais.

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : Este conjunto de operações compostas para aplicar quando desenha novas formas, onde type é uma string identificando quais das 12 operações compostas usar.

Veja os seguintes [exemplos de composição](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Compositing/Example) para o código dos seguintes exemplos.

{{ EmbedLiveSample('Exemplo_de_composição', '', '', '', 'Web/Guide/HTML/Canvas_tutorial/Compositing/Exemplo') }}

## Caminhos de recorte (Clipping path)

![](canvas_clipping_path.png)Um caminho de recorte (Clipping path) é como uma forma normal canvas mas isto age como uma máscara para esconder indesejáveis partes de formas. Isto é visualizado na imagem na direita. A forma da estrela vermelha é nosso caminho de recorte. Tudo que cai do lado de fora deste caminho não sai desenhado no canvas.

Se nós compararmos caminho de recorte para a propriedade `globalCompositeOperation` nós temos visto acima, nós veremos dois modelos de composição que alcança mais ou menos o mesmo efeito no source-in e source-atop. A mais importante diferença entre os dois é que o caminho de recorte nunca desenha algo na tela e o caminho de recorte nunca afeta por adicionar novas formas. Isto faz o caminho do recorte ideal para desenhar múltiplos na área restrita.

No capítulo sobre [formas de desenho (drawing shapes)](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) eu somente mencionei os métodos stroke() e fill(), mas há um método que nós podemos usar com caminhos chamado clip().

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : Volta o caminho atualmente sendo construído no caminho de recorte atual.

Você usou clip() em vez de closePath() para fechar um caminho e voltar para dentro de um caminho de recorte em vez de contornar (stroking) ou completar (filling) o caminho.

Por padrão o elemento {{HTMLElement("canvas")}} tem um caminho de recorte que é exatamente o mesmo tamanho do canvas em si. Em outras palavras, nenhum recorte ocorreu.

### Um exemplo do recorte

Neste exemplo, Nós usaremos um recorte circular para restringir o desenho do conjunto de inícios randômicos para uma região particular

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
canvas id="canvas" width="150" height="150" /canvas
```

```js hidden
draw();
```

Nas primeiras linhas de código, nós desenhamos um retângulo negro do tamanho do canvas como um pano de fundo, então traduzido da origem para o centro. Próximo, nós criamos o recorte circular do caminho recortado para desenhar um arco e chamá-lo clip(). Caminho de recortes são também parte do canvas com estado salvo. Se nós procuramos guardar o caminho do recorte original nós podemos ter salvo o estado do canvas antes de criar mais um.

Tudo que for desenhado depois de criado o caminho de recorte somente aparecerá dentro daquele caminho. Você pode ver isto claramente no gradiente linear que está desenhado adiante. Depois deste conjunto de de 50 randomicamente posicionadas e escaladas estrelas for desenhada. Usando a função customizada drawStar(). De novo as estrelas somente aparecerão dentro do caminho de recorte definido.

Um exemplo de recorte:

![](canvas_clip.png)

{{EmbedLiveSample("A_clip_example", "180", "180", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
