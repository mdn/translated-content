---
title: Aplicando estilos e cores
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

No capítulo sobre [desenhando formas com canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), usamos apenas os estilos padrões de preenchimento e linha. Aqui vamos explorar as opções do canvas que temos à nossa disposição para tornar nossos desenhos um pouco mais atraentes. Você aprenderá a adicionar cores diferentes, estilos de linhas, gradientes, padrões e sombras aos seus desenhos.

## Cores

Até agora só vimos métodos do contexto de desenho. Se quisermos aplicar cores a uma forma, existem duas propriedades importantes que podemos utilizar: `fillStyle` e `strokeStyle`.

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : Define o estilo usado ao preencher (fill) formas.
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : Define o estilo para os contornos (strokes) das formas.

`color` é uma string que representa um CSS {{cssxref("&lt;color&gt;")}}, um objeto gradiente, ou um objeto padrão. Examinaremos sobre objetos de gradiente e padrão mais tarde. Por padrão, a cor do contorno (stroke color) e a cor de preenchimento (fill color) estão definidos como preto (valor de cor no CSS é `#000000`).

> **Nota:** Quando você definir as propriedades `strokeStyle` e/ou `fillStyle` , o novo valor será o padrão para todas as formas desenhadas a partir de então. Para toda forma que você quiser uma cor diferente, você vai precisar alterar o valor da propriedade `fillStyle` ou `strokeStyle`.

As strings validas que você pode inserir devem, de acordo com a especificação ser valores CSS {{cssxref("&lt;color&gt;")}}. Cada um dos exemplos a seguir, descrevem a mesma cor.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255, 165, 0)";
ctx.fillStyle = "rgba(255, 165, 0, 1)";
```

### Um `fillStyle` exemplo

Neste exemplo, nós vamos mais uma vez utilizar dois `for` loops para desenhar uma grade de retângulos, cada um com uma cor diferente. A imagem do resultado, deve parecer como a captura de tela. Não existe nada de muito espetacular acontecendo aqui. Nós usamos as duas variéveis `i` and `j` para gerar uma única cor em RGB para cada quadrado, e apenas modificando os valores vermelho e verde. O canal azul possui um valor fixo. Modificando os canais, você pode gerar todos os tipos de paletas. Aumentando os passos, você pode alcançar algo que se parece com a paleta de cores dos usuários de Photoshop.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ",0)";
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

O resultado se parece com isto:

{{EmbedLiveSample("A_fillStyle_example", 160, 160, "canvas_fillstyle.png")}}

### Um `strokeStyle` exemplo

Este exemplo é similar com o anterior, porém utiliza a propriedade `strokeStyle` para alterar a cor de contorno das formas. Nós usamos o método `arc()` para desenhar círculos ao invés de quadrados.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle =
        "rgb(0," +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ")";
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

O resultado se parece com isto:

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "canvas_strokestyle.png")}}

## Transparência

Além de desenhar formas opacas na tela, também podemos desenhar formas semi-transparentes (ou translúcidas). Isso é feito definindo a propriedade globalAlpha ou atribuindo uma cor semitransparente ao estilo de stroke e / ou fill style.

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}

  - : Aplica o valor de transparência especificado a todas as formas futuras desenhadas na tela. O valor deve estar entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco). Este valor é 1.0 (totalmente opaco) por padrão.

A propriedade globalAlpha pode ser útil se você quiser desenhar muitas formas na tela com transparência semelhante, mas, caso contrário, geralmente é mais útil definir a transparência em formas individuais ao definir suas cores.

Como as propriedades strokeStyle e fillStyle aceitam os valores de cor CSS rgba, podemos usar a notação a seguir para atribuir uma cor transparente a eles.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
```

A função rgba () é semelhante à função rgb (), mas possui um parâmetro extra. O último parâmetro define o valor da transparência dessa cor específica. O intervalo válido é novamente entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco).

### Um exemplo globalAlpha

Neste exemplo, desenharemos um plano de fundo de quatro quadrados coloridos diferentes. Além disso, desenharemos um conjunto de círculos semi-transparentes. A propriedade globalAlpha é configurada em 0.2, que será usada para todas as formas a partir desse ponto. Cada passo no loop for desenha um conjunto de círculos com um raio crescente. O resultado final é um gradiente radial. Ao sobrepor cada vez mais círculos um sobre o outro, reduzimos efetivamente a transparência dos círculos que já foram desenhados. Ao aumentar a contagem de etapas e, com efeito, desenhar mais círculos, o plano de fundo desapareceria completamente do centro da imagem.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  // draw background
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "180", "180", "canvas_globalalpha.png")}}

### Um exemplo usando o `rgba()`

Neste segundo exemplo, fazemos algo semelhante ao anterior, mas em vez de desenhar círculos uns sobre os outros, desenhei pequenos retângulos com crescente opacidade. O uso de rgba () oferece um pouco mais de controle e flexibilidade, pois podemos definir o estilo de preenchimento e traçado/stroke individualmente.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Draw background
  ctx.fillStyle = "rgb(255, 221, 0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102, 204, 0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0, 153, 255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255, 51, 0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(255, 255, 255, " + (i + 1) / 10 + ")";
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("An_example_using_rgba()", "180", "180", "canvas_rgba.png")}}

## Line styles

Existem várias propriedades que permitem estilizar linhas.

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : Define a largura das linhas desenhadas no futuro.
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : Define a aparência dos fins das linhas.
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : Define a aparência dos "cantos" onde as linhas se encontram.
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : Estabelece um limite na mitra quando duas linhas se juntam em um ângulo agudo, para permitir controlar a espessura da junção.
- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : Retorna a matriz de padrão de traço de linha atual que contém um número par de números não negativos
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : Define o padrão de traço da linha atual.
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : Especifica onde iniciar uma matriz de traços em uma linha.

Você entenderá melhor o que eles fazem observando os exemplos abaixo.

### Um exemplo lineWidth

A largura da linha é a espessura do traçado centralizado no caminho especificado. Em outras palavras, a área desenhada se estende até a metade da largura da linha em ambos os lados do caminho.

Como as coordenadas da tela não fazem referência direta aos pixels, deve-se tomar cuidado especial para obter linhas horizontais e verticais nítidas.

No exemplo abaixo, 10 linhas retas são desenhadas com larguras de linhas crescentes. A linha na extrema esquerda tem 1,0 unidades de largura. No entanto, as linhas de espessura à esquerda e todas as outras linhas com número inteiro ímpar não aparecem nítidas, devido ao posicionamento do caminho.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "180", "180", "canvas_linewidth.png")}}

A obtenção de linhas nítidas requer a compreensão de como os caminhos são traçados. Nas imagens abaixo, a grade representa a grade de coordenadas da tela. Os quadrados entre as linhas de grade são pixels reais na tela. Na primeira imagem da grade abaixo, um retângulo de (2,1) a (5,5) é preenchido. A área inteira entre eles (vermelho claro) cai nos limites dos pixels, portanto, o retângulo preenchido resultante terá bordas nítidas.
![](canvas-grid.png)

Se você considerar um caminho de (3,1) a (3,5) com uma espessura de linha de 1,0, você terminará com a situação na segunda imagem. A área real a ser preenchida (azul escuro) se estende apenas até a metade dos pixels dos dois lados do caminho. Uma aproximação disso deve ser renderizada, o que significa que esses pixels são sombreados apenas parcialmente e resultam em toda a área (azul claro e azul escuro) sendo preenchida com uma cor apenas metade da escuridão da cor real do traço. É o que acontece com a linha de largura 1.0 no código de exemplo anterior.

Para corrigir isso, você precisa ser muito preciso na criação do seu caminho. Sabendo que uma linha de largura 1,0 estenderá meia unidade para ambos os lados do caminho, criar o caminho de (3,5,1) a (3,5,5) resulta na situação da terceira imagem - a largura da linha 1,0 termina completamente e preenchendo com precisão uma única linha vertical de pixel.

> **Nota:** **Nota: Esteja ciente de que, no nosso exemplo de linha vertical, a posição Y ainda faz referência a uma posição de linha de grade inteira - se não tivesse, veríamos pixels com meia cobertura nos pontos de extremidade (mas observe também que esse comportamento depende do estilo lineCap atual cujo valor padrão é butt; você pode calcular traçados consistentes com coordenadas de meio pixel para linhas de largura ímpar, configurando o estilo lineCap como quadrado, para que a borda externa do traçado ao redor do ponto de extremidade seja estendida automaticamente para cobrir o pixel inteiro exatamente).**
>
> Observe também que apenas os pontos de extremidade inicial e final de um caminho são afetados: se um caminho for fechado com closePath (), não haverá ponto inicial e final; em vez disso, todos os pontos de extremidade no caminho são conectados ao segmento anterior e ao próximo anexado usando a configuração atual do estilo lineJoin, cujo valor padrão é mitra, com o efeito de estender automaticamente as bordas externas dos segmentos conectados ao seu ponto de interseção. que o traçado renderizado cobrirá exatamente os pixels completos centralizados em cada ponto final se esses segmentos conectados forem horizontais e / ou verticais). Veja as próximas duas seções para demonstrações desses estilos de linha adicionais.

Para linhas de largura uniforme, cada metade acaba sendo uma quantidade inteira de pixels, portanto, você deseja um caminho entre pixels (ou seja, (3,1) a (3,5)), em vez de no meio dos pixels .

Embora seja um pouco doloroso ao trabalhar inicialmente com gráficos 2D escalonáveis, prestar atenção à grade de pixels e à posição dos caminhos garante que seus desenhos pareçam corretos, independentemente da escala ou de qualquer outra transformação envolvida. Uma linha vertical de 1,0 largura desenhada na posição correta se tornará uma linha nítida de 2 pixels quando aumentada em 2 e aparecerá na posição correta.

### Exemplo lineCap

A propriedade lineCap determina como os pontos finais de cada linha são desenhados. Existem três valores possíveis para essa propriedade e são: bunda, redondo e quadrado. Por padrão, essa propriedade está configurada para butt.![](canvas_linecap.png)

- `butt`
  - : As extremidades das linhas são quadradas nos pontos finais.
- `round`
  - : As extremidades das linhas são arredondadas.
    arredondadas.
- `square`
  - : As extremidades das linhas são ajustadas ao quadrado, adicionando uma caixa com a mesma largura e metade da altura da espessura da linha.

Neste exemplo, desenharemos três linhas, cada uma com um valor diferente para a propriedade lineCap. Também adicionei dois guias para ver as diferenças exatas entre os três. Cada uma dessas linhas começa e termina exatamente nesses guias.

A linha à esquerda usa a opção de topo padrão. Você notará que está desenhado completamente alinhado com as guias. O segundo está definido para usar a opção redonda. Isso adiciona um semicírculo ao final que tem um raio com metade da largura da linha. A linha à direita usa a opção quadrada. Isso adiciona uma caixa com largura igual e metade da altura da espessura da linha.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineCap = ["butt", "round", "square"];

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = "black";
  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "180", "180", "canvas_linecap.png")}}

### Um exemplo de lineJoin

A propriedade lineJoin determina como dois segmentos de conexão (de linhas, arcos ou curvas) com comprimentos diferentes de zero em uma forma são unidos (segmentos degenerados com comprimentos zero, cujos pontos finais e pontos de controle especificados são exatamente na mesma posição, são ignorados) .

Existem três valores possíveis para essa propriedade: round, chanfro e mitra. Por padrão, essa propriedade está configurada para mitra. Observe que a configuração lineJoin não terá efeito se os dois segmentos conectados tiverem a mesma direção, porque nenhuma área de junção será adicionada neste caso.![](canvas_linejoin.png)

- `round`
  - : Arredonda os cantos de uma forma preenchendo um setor adicional de disco centralizado no ponto final comum dos segmentos conectados. O raio desses cantos arredondados é igual à metade da largura da linha.
- `bevel`
  - : Preenche uma área triangular adicional entre o ponto final comum dos segmentos conectados e os cantos retangulares externos separados de cada segmento.
- `miter`
  - : Os segmentos conectados são unidos estendendo suas bordas externas para se conectarem em um único ponto, com o efeito de preencher uma área adicional em forma de losango. Essa configuração é efetuada pela propriedade miterLimit, explicada abaixo.

O exemplo abaixo desenha três caminhos diferentes, demonstrando cada uma dessas três configurações de propriedade lineJoin; a saída é mostrada acima.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineJoin = ["round", "bevel", "miter"];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "180", "180", "canvas_linejoin.png")}}

### Uma demonstração da propriedade miterLimit

Como você viu no exemplo anterior, ao unir duas linhas com a opção de esquadria, as bordas externas das duas linhas de junção são estendidas até o ponto em que elas se encontram. Para linhas com ângulos amplos entre si, esse ponto não está longe do ponto de conexão interno. No entanto, à medida que os ângulos entre cada linha diminuem, a distância (comprimento da mitra) entre esses pontos aumenta exponencialmente.

A propriedade miterLimit determina a que distância o ponto de conexão externo pode ser colocado do ponto de conexão interno. Se duas linhas excederem esse valor, uma junção de chanfro será desenhada. Observe que o comprimento máximo da esquadria é o produto da largura da linha medida no sistema de coordenadas atual, pelo valor dessa propriedade miterLimit (cujo valor padrão é 10.0 no HTML {{HTMLElement ("canvas")}}}), portanto, o O miterLimit pode ser definido independentemente da escala de exibição atual ou de quaisquer transformações afins de caminhos: apenas influencia a forma efetivamente renderizada das arestas da linha.

Mais exatamente, o limite da mitra é a proporção máxima permitida do comprimento da extensão (na tela HTML, é medida entre o canto externo das arestas unidas da linha e o ponto de extremidade comum dos segmentos de conexão especificados no caminho) pela metade do espessura da linha. Pode ser definido de maneira equivalente como a proporção máxima permitida da distância entre os pontos interno e externo da junção das arestas e a largura total da linha. Em seguida, é igual ao coecante da metade do ângulo interno mínimo dos segmentos de conexão abaixo dos quais nenhuma junção de esquadria será renderizada, mas apenas uma junção de chanfro:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- O limite padrão de esquadria de 10.0 removerá todos os mitros para ângulos agudos abaixo de 11 graus.
- Um limite de esquadria igual a √2 ≈ 1.4142136 (arredondado para cima) retira os mitros para todos os ângulos agudos, mantendo as juntas de esquadria apenas para ângulos obtusos ou retos.
- Um limite de mitra igual a 1,0 é válido, mas desativará todos os atenuadores.
- Valores abaixo de 1,0 são inválidos para o limite de mitra.

Aqui está uma pequena demonstração na qual você pode definir o mitreLimit dinamicamente e ver como isso afeta as formas na tela. As linhas azuis mostram onde estão os pontos inicial e final de cada uma das linhas no padrão em zigue-zague.

Se você especificar um valor de miterLimite abaixo de 4.2 nesta demonstração, nenhum dos cantos visíveis poderá ser uma extensão de mitra, mas apenas com um pequeno canal próximo às linhas azuis; com um limite máximo acima de 10, a maioria dos cantos nesta demonstração deve ser levada a uma meia-esquadria das linhas azuis e a altura está diminuindo entre os cantos da esquerda para a direita porque eles estão conectados com ângulos crescentes; com valores intermediários, os cantos do lado esquerdo ou apenas um canto próximo às linhas azuis e os cantos do lado direito com uma extensão de esquadria (também com uma altura decrescente).

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;

  // check input
  if (document.getElementById("miterLimit").value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById("miterLimit").value);
  } else {
    alert("Value must be a positive number");
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (i = 0; i < 24; i++) {
    var dy = i % 2 == 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>
      Change the <code>miterLimit</code> by entering a new value below and
      clicking the redraw button.<br /><br />
      <form onsubmit="return draw();">
        <label>Miter limit</label>
        <input type="text" size="3" id="miterLimit" />
        <input type="submit" value="Redraw" />
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "400", "180", "canvas_miterlimit.png")}}

### Usando linhas tracejadas

`O método setLineDash` e a propriedade `lineDashOffset` especificam o padrão de traço para as linhas. O método `setLineDash` aceita uma lista de números que especificam distâncias para desenhar alternadamente entre uma linha e uma lacuna. Já a propriedade `lineDashOffset` define a distância até onde se deve iniciar a linha.

Neste exemplo, criaremos um efeito de formigas caminhando. É uma técnica de animação frequentemente usada em computação gráfica, pois ajuda o usuário a fazer uma distinção entre a borda e o plano de fundo animando a borda. Mais tarde neste tutorial, você aprenderá como fazer [animações básicas](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Basic_animations).

```html hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Using_line_dashes", "120", "120", "marching-ants.png")}}

## Gradients

Just like any normal drawing program, we can fill and stroke shapes using linear and radial gradients. We create a {{domxref("CanvasGradient")}} object by using one of the following methods. We can then assign this object to the `fillStyle` or `strokeStyle` properties.

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : Creates a linear gradient object with a starting point of (`x1`, `y1`) and an end point of (`x2`, `y2`).
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : Creates a radial gradient. The parameters represent two circles, one with its center at (`x1`, `y1`) and a radius of `r1`, and the other with its center at (`x2`, `y2`) with a radius of `r2`.

For example:

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Once we've created a `CanvasGradient` object we can assign colors to it by using the `addColorStop()` method.

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : Creates a new color stop on the `gradient` object. The `position` is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the `color` argument must be a string representing a CSS {{cssxref("&lt;color&gt;")}}, indicating the color the gradient should reach at that offset into the transition.

You can add as many color stops to a gradient as you need. Below is a very simple linear gradient from white to black.

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### A `createLinearGradient` example

In this example, we'll create two different gradients. As you can see here, both the `strokeStyle` and `fillStyle` properties can accept a `canvasGradient` object as valid input.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgba(0, 0, 0, 0)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

The first is a background gradient. As you can see, we assigned two colors at the same position. You do this to make very sharp color transitions—in this case from white to green. Normally, it doesn't matter in what order you define the color stops, but in this special case, it does significantly. If you keep the assignments in the order you want them to appear, this won't be a problem.

In the second gradient, we didn't assign the starting color (at position 0.0) since it wasn't strictly necessary, because it will automatically assume the color of the next color stop. Therefore, assigning the black color at position 0.5 automatically makes the gradient, from the start to this stop, black.

{{EmbedLiveSample("A_createLinearGradient_example", "180", "180", "canvas_lineargradient.png")}}

### A `createRadialGradient` example

In this example, we'll define four different radial gradients. Because we have control over the start and closing points of the gradient, we can achieve more complex effects than we would normally have in the "classic" radial gradients we see in, for instance, Photoshop (that is, a gradient with a single center point where the gradient expands outward in a circular shape).

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgba(1, 159, 98, 0)");

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgba(255, 1, 136, 0)");

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0, 201, 255, 0)");

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgba(228, 199, 0, 0)");

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

In this case, we've offset the starting point slightly from the end point to achieve a spherical 3D effect. It's best to try to avoid letting the inside and outside circles overlap because this results in strange effects which are hard to predict.

The last color stop in each of the four gradients uses a fully transparent color. If you want to have a nice transition from this to the previous color stop, both colors should be equal. This isn't very obvious from the code because it uses two different CSS color methods as a demonstration, but in the first gradient `#019F62 = rgba(1,159,98,1)`.

{{EmbedLiveSample("A_createRadialGradient_example", "180", "180", "canvas_radialgradient.png")}}

## Patterns

In one of the examples on the previous page, we used a series of loops to create a pattern of images. There is, however, a much simpler method: the `createPattern()` method.

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : Creates and returns a new canvas pattern object. `image` is a {{domxref("CanvasImageSource")}} (that is, an {{domxref("HTMLImageElement")}}, another canvas, a {{HTMLElement("video")}} element, or the like. `type` is a string indicating how to use the image.

The type specifies how to use the image in order to create the pattern, and must be one of the following string values:

- `repeat`
  - : Tiles the image in both vertical and horizontal directions.
- `repeat-x`
  - : Tiles the image horizontally but not vertically.
- `repeat-y`
  - : Tiles the image vertically but not horizontally.
- `no-repeat`
  - : Doesn't tile the image. It's used only once.

We use this method to create a {{domxref("CanvasPattern")}} object which is very similar to the gradient methods we've seen above. Once we've created a pattern, we can assign it to the `fillStyle` or `strokeStyle` properties. For example:

```js
var img = new Image();
img.src = "someimage.png";
var ptrn = ctx.createPattern(img, "repeat");
```

> **Nota:** Like with the `drawImage()` method, you must make sure the image you use is loaded before calling this method or the pattern may be drawn incorrectly.

### A `createPattern` example

In this last example, we'll create a pattern to assign to the `fillStyle` property. The only thing worth noting is the use of the image's `onload` handler. This is to make sure the image is loaded before it is assigned to the pattern.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  var img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = function () {
    // create pattern
    var ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_createPattern_example", "180", "180", "canvas_createpattern.png")}}

## Shadows

Using shadows involves just four properties:

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

The properties `shadowOffsetX` and `shadowOffsetY` indicate how far the shadow should extend from the object in the X and Y directions; these values aren't affected by the current transformation matrix. Use negative values to cause the shadow to extend up or to the left, and positive values to cause the shadow to extend down or to the right. These are both 0 by default.

The `shadowBlur` property indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.

The `shadowColor` property is a standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

> **Nota:** Shadows are only drawn for `source-over` [compositing operations](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Compositing).

### A shadowed text example

This example draws a text string with a shadowing effect.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example", "180", "100", "shadowed-string.png")}}

We will look at the `font` property and `fillText` method in the next chapter about [drawing text](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

## Canvas fill rules

When using `fill` (or {{domxref("CanvasRenderingContext2D.clip", "clip")}} and {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointinPath")}}) you can optionally provide a fill rule algorithm by which to determine if a point is inside or outside a path and thus if it gets filled or not. This is useful when a path intersects itself or is nested.

Two values are possible:

- `nonzero`
  - : The [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule), which is the default rule.
- `evenodd`
  - : The [even-odd winding rule](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In this example we are using the `evenodd` rule.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules", "110", "110", "fill-rule.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
