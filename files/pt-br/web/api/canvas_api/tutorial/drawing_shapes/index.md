---
title: Desenhando formas com canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Agora que criamos nosso [ambiente em canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Basic_usage), podemos entrar nos detalhes de como desenhar no canvas. No final deste artigo, você terá aprendido a desenhar retângulos, triângulos, linhas, arcos e curvas, proporcionando familiaridade com algumas das formas básicas. Trabalhar com caminhos (_shapes_) é essencial ao desenhar objetos na tela e veremos como isso pode ser feito.

## A grade

![](canvas_default_grid.png)Antes que possamos começar a desenhar, precisamos falar sobre a grade de tela ou **espaço de coordenadas**. O modelo HTML na página anterior tinha um elemento canvas de 150 pixels de largura e 150 pixels de altura. À direita, você verá este canvas com a grade padrão sobreposta. Normalmente 1 unidade na grade corresponde a um pixel na tela. A origem desta grade está posicionada no canto superior esquerdo (coordenadas (0,0)). Todos os elementos são colocados em relação a esta origem. Assim, a posição do canto superior esquerdo do quadrado azul, se torna x pixels dos pixels da esquerda e y a partir do topo (coordenadas (x,y)). Mais tarde nesse tutorial vamos ver como podemos traduzir a origem para uma posição diferente, girar a grade e até mesmo escaloná-la. Por enquanto vamos ficar com o padrão.

## Desenhando retângulos

Diferente do {{Glossary("SVG")}} , o {{HTMLElement("canvas")}} suporta somente formas primitivas: retângulos. Todas as outras formas são criadas a partir da combinação de um ou mais caminhos (_paths_), lista de pontos conectados por uma linha. Felizmente, temos uma variedade de funções de desenho que tornam possíveis criar formas muito complexas.

Primeiramente vamos olhar o retângulo. Aqui está listado três funções para desenhar retângulos pelo canvas:

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}
  - : Desenha um retângulo preenchido.
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}
  - : Desenha a borda do retângulo.
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}
  - : Limpa um retângulo específico, tornando-o totalmente transparente.

Cada umas das funções recebem os mesmos parâmetros. `x` e `y` determinam a posição no canvas (em relação a origem) no canto superior esquerdo do retângulo. O `width` (largura) e o `height` (altura) definem o tamanho do retângulo.

Abaixo esta listado a função `draw()` da página anterior, porém utilizando as três funções.

### Exemplo de forma retangular

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

O resultado desse exemplo é mostrado abaixo.

{{EmbedLiveSample('Exemplo_de_forma_retangular', 160, 160, "canvas_rect.png")}}

A função `fillRect()` desenha um grande quadrado preto de 100 pixels. A função `clearRect()` por sua vez apaga um quadrado de 60x60 pixels a partir do centro, por fim, a função `strokeRect()` é chamada para criar uma borda de 50x50 pixels em volta do quadrado apagado.

Posteriormente veremos duas alternativas à função `clearRect()`, nós também aprenderemos como alterar a cor e o estilo das linhas nas camadas renderizadas.

Ao contrário das funções de _paths_ que veremos na próxima seção, todas as três funções de retângulo desenham imediatamente no canvas.

## Desenhando caminhos/regiões (paths)

Para criar uma camada usando caminhos (regiões ou _paths_) é necessário alguns passos extras. Primeiro, cria-se a região de desenho. Depois usa-se comandos de desenho para desenhar nesta região. Por fim, você limita a região (path). Uma vez que a região de desenho está criada, você pode traçar ou preencher o caminho para que seja renderizado. Aqui estão as funções utilizadas para isso:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : Cria um novo path. Uma vez criado, futuros comandos de desenho são direcionados do path atual para a construção de um novo path no canvas.
- [Métodos de Caminhos (Path)](/pt-BR/docs/Web/API/CanvasRenderingContext2D#Paths)
  - : Métodos para manipuliar diferentes paths para objetos.
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : Finaliza o path para futuros comandos de desenho, fazendo com que voltem a ser direcionados ao contexto.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : Desenha uma borda na camada.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : Desenha uma forma sólida através de preenchimento.

O primeiro passo para criar um caminho é chamar o `beginPath()`. Internamente, caminhos são armazenados como uma lista de sub-caminhos (linhas, arcos, etc.) que juntos formam uma forma (_shape_). Sempre que esse método é chamado, a lista é redefinida e podemos começar a desenhar novas formas.

> **Nota:** Quando o caminho atual está vazio, assim como imediatamente depois de chamar `beginPath()`, ou em uma tela recém-criada, o primeiro comando de construção de caminho é sempre tratado como um `moveTo()`, independentemente do que ele seja realmente. Por essa razão, você quase sempre vai precisar definir especificamente sua posição inicial após redefinir um caminho.

A segunda etapa é chamar os métodos que realmente especificam os caminhos a serem desenhados. Vamos ver isso em breve.

O terceiro, e um passo opcional, é chamar `closePath()`. Este método tenta fechar a forma desenhando uma linha reta do ponto atual para o início. Se a forma (_shape_) já foi fechada ou existe apenas um ponto na lista, esta função não faz nada.

> **Nota:** Quando você chama `fill()`, todas as formas abertas são fechadas automaticamente, assim você não precisa chamar `closePath()`. Isso **não acontece** quando você chamar `stroke()`.

### Desenhando um triângulo

Por exemplo, o código para desenhar um triângulo seria algo parecido com isto:

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

O resultado se parece com isso:

{{EmbedLiveSample('Desenhando_um_triângulo', 160, 160, "triangle.png")}}

### Desenhando

Uma função muito útil, que na verdade não desenha nada, mas torna-se parte da lista de caminhos descritos acima, é a função `moveTo()`. Você provavelmente pode imaginar melhor isso como se fosse o levantar uma caneta ou lápis de um ponto em um pedaço de papel e colocá-lo no próximo ponto.

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : Move a caneta (_pen_) para as coordenadas especificadas por `x` e `y`.

Quando o canvas é inicializado ou `beginPath()` é chamado, você normalmente vai querer usar a função `moveTo()` para colocar o ponto inicial em outro lugar. Poderíamos também usar `moveTo()` para desenhar caminhos não conectados. Dê uma olhada no rosto sorridente abaixo. Eu marquei os lugares onde eu usei o método `moveTo()` (as linhas vermelhas).

Caso queira tentar fazer isso, você pode usar o snippet de código abaixo. Basta colá-lo na função `draw()` que vimos anteriormente.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (sentido horário)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Olho esquerdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Olho direito
    ctx.stroke();
  }
}
```

O resultado aparece como:

{{EmbedLiveSample("Desenhando", 160, 160, "canvas_smiley.png")}}

Se você não gosta de ver linhas conectadas, você pode remover as linhas que chamam a função `moveTo()`.

> **Nota:** Para aprender mais sobre a função `arc()`, veja sobre [Arcos](#arcos).

### Linhas

Para desenhar linhas retas, use o método `lineTo().`

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : Desenha uma linha do ponto atual a até a posição especificada por `x` e `y`.

Esse método recebe dois argumentos, `x` e `y`, que são as coordenadas do ponto final da linha. O ponto inicial é dependente de caminhos previamente desenhados, onde o ponto final do caminho anterior é o ponto inicial para o seguinte, e assim por diante. O ponto inicial também pode ser alterado usando o método `moveTo()`.

O exemplo abaixo desenha dois triângulos, um preenchido e um delineado.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

Isso começa chamando o método `beginPath()` para iniciar um novo _shape path_. Em seguida, usamos o método `moveTo()` para mover o ponto inicial para a posição desejada. Logo abaixo, duas linhas, que compõem os dois lados do triângulo, são desenhadas.

{{EmbedLiveSample("Linhas", 160, 160, "canvas_lineto.png")}}

Você notará a diferença entre o triângulo preenchido (_filled_) e não prenchido (_stroked_). Isto ocorre, como mencionado acima, porque as formas são automaticamente fechadas quando um caminho é preenchido, mas não quando são não preenchidos. Se deixássemos de fora o `closePath()` para os triângulos não preenchidos, apenas duas linhas teriam sido desenhadas, não um triângulo completo.

### Arcos

Para desenhar arcos, nós usamos os métodos `arc()` ou `arcTo()`.

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, anticlockwise)")}}
  - : Desenha um arco centralizado na posição _(x, y)_ com um raio _r_ iniciando em _startAngle e_ terminando em _endAngle_ apontando na direção indicada pelo sentido anti-horário (padronizando para o sentido horário).
- {{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}
  - : Desenha um arco com os pontos de controle e raio, conectados ao ponto anterior por uma linha reta.

Vamos dar uma olhada mais detalhada sobre o método `arc`, que tem seis parâmetros: `x` e `y` são as coordenadas do centro do círculo em que o arco deve ser desenhado. `radius` é o raio. Os parâmetros `startAngle` e `endAngle` definem os pontos inicial e final do arco em radianos, ao longo da curva do círculo. Estes são medidos a partir do eixo `x`. O parâmetro `anticlockwise` é um valor Booleano que, quando verdadeiro, desenha o arco no sentido anti-horário; Caso contrário, o arco é desenhado no sentido horário.

> **Nota:** Os ângulos na função `arc` são medidos em radianos, não em graus. Para converter graus em radianos você pode usar a seguinte expressão JavaScript: `radians = (Math.PI/180)*degrees`.

O exemplo a seguir é um pouco mais complexo do que os que vimos anteriormente. Ele desenha 12 arcos diferentes, todos com diferentes ângulos e preenchimentos.

Os dois laços `for` são para iterar através das linhas e colunas de arcos. Para cada arco, é criado um novo caminho chamando `beginPath()`. No código, cada um dos parâmetros para o arco estão em uma variável somente para demonstração, assim você não precisa fazer isso na vida real.

As coordenadas `x` e `y` devem ser suficientemente claras. O parâmetros `radius` e `startAngle` são fixos. O `endAngle` começa em 180 graus (metade de um círculo) na primeira coluna e aumenta gradualmente em 90 graus, culminando em um círculo completo na última coluna.

A manipulação do parâmetro `clockwise` faz com que a primeira e terceira linhas sejam desenhadas como arcos no sentido horário, e a segunda e quarta linhas como arcos no sentido anti-horário. Finalmente, a instrução `if` faz com que a metade superior dos arcos não sejam preenchidos e a metade inferior dos arcos sejam.

> **Nota:** Este exemplo requer um canvas um pouco maior que as outras desta página: 150 x 200 pixels.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // coordenada x
        var y = 25 + i * 50; // coordenada y
        var radius = 20; // Raio do Arco
        var startAngle = 0; // Ponto inicial no círculo
        var endAngle = Math.PI + (Math.PI * j) / 2; // Ponto final no círculo
        var anticlockwise = i % 2 == 0 ? false : true; // horário ou anti-horário

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Arcos", 160, 210, "canvas_arc.png")}}

### Curvas de Bézier Cúbicas e Quadráticas

O próximo tipo de caminhos disponíveis são as Curvas de Bézier, disponíveis nas variedades cubícas e quadráticas. Elas são geralmente usadas para desenhar complexas formas orgânicas.

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : Desenha uma curva de Bézier quadrática da posição atual indicada pelo cursor, até a posição final especificada por `x` e `y`, usando o controle de pontos guiados por `cp1x` `e cp1y`.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : Desenha uma curva de Bézier cúbica partindo da posição atual indicada pelo cursor, até a posição final especificada por `x` e `y`, usando o controle de pontos guiados por (`cp1x`, `cp1y`) e (cp2x, cp2y).

![](canvas_curves.png)A diferença entre estes métodos pode ser descrita de forma melhor usando a imagem à direita. Uma curva quadrática de Bézier tem um ponto inicial e final (pontos azuis) e apenas um ponto de controle (indicado pelo ponto vermelho) enquanto que uma curva cúbica de Bézier utiliza dois pontos de controles.

Os parâmetros `x` e `y` em ambos os métodos são as coordenadas do ponto final. `cp1x` e `cp1y` são as coordenadas do primeiro ponto de controle, e `cp2x` e `cp2y` são as coordenadas do segundo ponto de controle.

Usando curvas de Bézier quadráticas e cúbicas pode ser algo bastante desafiador, porque ao contrário de um software de desenho vetorial, como o Adobe Illustrator, não temos resultados visuais imediatos sobre o que estamos fazendo. Isso torna bastante difícil desenhar formas complexas. No exemplo a seguir, vamos desenhar algumas formas orgânicas simples, mas se você tiver tempo e, acima de tudo, paciência, formas muito mais complexas podem ser criadas.

Não há nada muito difícil nestes exemplos. Em ambos os casos vemos uma sucessão de curvas sendo desenhadas, resultando no fim, em uma forma (_shape_) completa.

#### Curvas de Bézier Quadráticas

Este exemplo usa múltiplas curvas de Bézier quadráticas para renderizar um balão de fala.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Exemplo de curvas de Bézier quadráticas
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample('Curvas_de_Bézier_Quadráticas', 160, 160, "canvas_quadratic.png")}}

#### Curvas de Bézier Cúbicas

Este exemplo desenha um coração usando curvas de Bézier cúbicas.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Exemplo de curvas de Bézier cúbicas
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample('Curvas_de_Bézier_Cúbicas', 160, 160, "canvas_bezier.png")}}

### Retângulos

Além dos três métodos que vimos em [Desenhando retângulos](#desenhando_retângulos), que desenham formas retangulares diretamente no canvas, há também o método `rect()`, que adiciona uma forma retangular a um caminho (_path_) atualmente aberto.

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}
  - : Desenha um retângulo cujo canto superior esquerdo é especificado por (`x`, `y`) com base em uma largura (`width`) e uma altura (`height`).

Quando este método é executado, o método `moveTo()` é automaticamente chamado com os parâmetros (0,0). Em outras palavras, a posição atual do cursor é automaticamente redefinida para as coordenadas padrões.

### Combinando Elementos

Até agora, em cada exemplo dessa página foi usada apenas um tipo de função de caminho (_path_) para cada forma (_shape_). No entanto, não há nenhuma limitação para o número ou tipos de caminhos que você pode usar para criar um _shape_. Então, neste exemplo final, vamos combinar todas as funções de caminho para fazer um conjunto de personagens de jogo muito conhecido.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// Uma função útil para desenhar um retângulo com cantos arredondados.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.stroke();
}
```

O resultado é:

{{EmbedLiveSample("Combinando_Elementos", 160, 160, "combinations.png")}}

Não vamos discutir isso em detalhes, uma vez que é realmente muito simples. As coisas mais importantes a serem observadas são o uso da propriedade `fillStyle` no contexto de desenho e o uso de uma função auxiliar (neste caso `roundedRect()`). Usando funções auxiliares para construir um desenho frequentemente pode ser muito útil, além de reduzir a quantidade de código que você precisa, bem como a sua complexidade.

Vamos dar uma nova olhada em `fillStyle`, em mais detalhes, mais adiante neste tutorial. Aqui, tudo o que estamos fazendo é apenas usando-o para alterar sucessivamente a cor de preenchimento dos caminhos (_paths_) de cor preta (padrão) para branca.

## Path2D

Como vimos no último exemplo, pode haver uma série de _paths_ e comandos de desenho para desenhar objetos em sua tela. Para simplificar o código e melhorar o desempenho, o objeto {{domxref("Path2D")}}, disponível em versões recentes dos navegadores, permite armazenar em cache ou gravar esses comandos de desenho. Com ele, você pode construir seus _paths_ rapidamente.
Vamos ver como podemos construir um objeto de `Path2D`:

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : O construtor de **`Path2D()`** retorna um objeto `Path2D` instanciado recentemente, opcionalmente através de um outro objeto `Path2D` como argumento (cria uma cópia) ou, opcionalmente, com uma _string_ que representam dados de [_paths_ em SVG](/pt-BR/docs/Web/SVG/Tutorial/Paths).

```js
new Path2D(); // objeto vazio de Path2D
new Path2D(path); // cópia de outro objeto de Path2D
new Path2D(d); // objeto criado a partir de paths em SVG
```

Todos os [métodos de caminho (path methods)](/pt-BR/docs/Web/API/CanvasRenderingContext2D#Paths) como `moveTo`, `rect`, `arc` ou `quadraticCurveTo`, etc., que temos de saber acima, estão disponíveis em `Path2D`.

A API `Path2D` também adiciona uma maneira de combinar caminhos usando o método `addPath`. Isso pode ser útil quando você deseja criar objetos com vários componentes, por exemplo.

- {{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}
  - : Adiciona um `path` para o `path` atual através de uma matriz de transformação opcional.

### Exemplo de Path2D

Neste exemplo, estamos criando um retângulo e um círculo. Ambos são armazenados como um objeto de `Path2D`, de modo que eles estão disponíveis para uso posterior. Com a nova API `Path2D`, vários métodos foram atualizados como, por exemplo, opcionalmente usar um objeto `Path2D` em vez do `path` atual. Aqui, os métodos `stroke` e `fill` são usados, com um argumento de _path_, para desenhar ambos os objetos na tela, por exemplo.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

{{EmbedLiveSample("Exemplo_de_Path2D", 140, 110, "path2d.png")}}

### Usando _paths_ em SVG

Outro recurso poderoso da nova API de Path2D é a utilização de dados de _path_ em SVG para inicializar caminhos (_paths_) no canvas. Isso permite que você crie dados de _paths_ que possam ser utilizados tanto no SVG como no canvas.

O caminho se moverá para o ponto `(M10 10)` e então se moverá horizontalmente 80 pontos para a direita `(h 80)`, depois 80 pontos para baixo `(v 80)`, então 80 pontos para a esquerda (h -80) e, por fim, volta para o início (`z`). Você pode ver este exemplo na página do [construtor do Path2D](/pt-BR/docs/Web/API/Path2D.Path2D#Using_SVG_paths).

```js
var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
