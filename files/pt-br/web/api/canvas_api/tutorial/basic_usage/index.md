---
title: Utilização básica do Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}Vamos começar este tutorial olhando para o elemento {{HTMLElement("canvas")}} {{Glossary("HTML")}} em si. No final desta página, você saberá como configurar um contexto de canvas 2D e desenhar um primeiro exemplo em seu navegador.

## O elemento `<canvas>`

Vamos começar esse tutorial olhando o elemento {{HTMLElement("canvas")}} em si.

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Se parece muito com o elemento `<img>`com a diferença de não possuir os atributos `src` e `alt`. O elemento `<canvas>` tem apenas dois atributos - **width** e **height**. Ambos são opcionais e podem ser aplicados utilizando as propriedades [DOM](/pt-BR/docs/DOM) respectivas. Se não forem especificados, o canvas será iniciado com **300 _pixels_** de largura por **150 _pixels_** de altura. O elemento pode ser redimensionado por [CSS](/pt-BR/docs/Web/CSS), mas durante a renderização a imagem é escalonada para caber no tamanho do layout.

> **Nota:** Se as suas renderizações parecerem distorcidas, tente especificar os atributos `width` e `height` no `<canvas>` e não usando CSS.

O atributo `id` não é específico do elemento `<canvas>` mas um dos atributos padrão do HTML que pode ser aplicado em (quase) todos os elementos HTML (como o _`class`_ por exemplo). É sempre uma boa ideia inserir um `id` pois fica muito mais fácil de capturar o elemento no seu _script._

O elemento `<canvas>` pode ser estilizado como qualquer imagem (margem, borda, fundo, etc). Contudo, essas regras não afetarão o desenho no canvas. Nós veremos como isso é feito a seguir nesse tutorial. Quando nenhuma regra de estilo for aplicada, o canvas iniciará totalmente transparente.

### Conteúdo alternativo

Uma vez que alguns navegadores mais antigos (em particular, versões do Internet Explorer anteriores a 9) não suportam o elemento {{HTMLElement("canvas")}}, você precisará prover um conteúdo alternativo para ser mostrado nesses navegadores.

Isto é muito simples: basta inserir o conteúdo alternativo dentro do elemento `<canvas>`. Navegadores que não suportam o `<canvas>` irão renderizar o conteúdo alternativo. Já os navegadores que suportam `<canvas>` irão ignorar o conteúdo alternativo, renderizando o canvas normalmente.

Por exemplo, podemos prover um texto descritivo do canvas ou uma imagem estática do conteúdo. Algo como isto:

```html
<canvas id="stockGraph" width="150" height="150">
  preço das ações: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

### Tag `</canvas>` é necessária

Ao contrário do elemento {{HTMLElement("img")}}, o elemento {{HTMLElement("canvas")}} a tag de fechamento (`</canvas>`) é necessária.

> **Nota:** Embora as primeiras versões do navegador Safari da Apple não exijam a tag de fechamento, a especificação indica que ela é necessária para que haja maior compatibilidade, portanto não se esqueça de incluí-la. Essas versões do Safari (antes da versão 2.0) irão processar o conteúdo do alternativo, além da própria tela, a menos que você use o CSS para mascará-lo. Felizmente, os usuários dessas versões do Safari são raros hoje em dia.

Se o conteúdo alternativo não for necessário, um simples `<canvas id="foo" ...></canvas>` é totalmente compatível com todos os navegadores que suportam canvas.

## O contexto de renderização

{{HTMLElement("canvas")}} cria uma superfície de desenho de tamanho fixo que expõe um ou mais contextos de renderização, que são usados para criar e manipular o conteúdo mostrado. Vamos nos concentrar no contexto de renderização 2D. Outros contextos podem fornecer diferentes tipos de renderização; por exemplo, [WebGL](/pt-BR/docs/Web/WebGL) usa um contexto 3D ("experimental-WebGL") baseado em [OpenGL ES](http://www.khronos.org/opengles/).

Inicialmente o canvas é branco. Para mostrar alguma coisa, primeiro um _script_ precisa acessar o contexto de renderização e desenhar sobre ele. O elemento {{HTMLElement("canvas")}} tem um [método](/pt-BR/docs/Web/API/HTMLCanvasElement#Methods) chamado `getContext()`, usado para obter o contexto de renderização e suas funções de desenho. `getContext()` recebe o tipo de contexto como parâmetro. Para gráficos 2D, que serão abrangidos nesse tutorial, deverá ser especificado "2d".

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

A primeira linha recupera o nó DOM do elemento {{HTMLElement ("canvas")}} chamando o método {{domxref ("document.getElementById()")}}. Depois de ter o nó do elemento, podemos acessar o contexto de desenho usando o método `getContext()`.

## Verificação de suporte

O conteúdo alternativo é mostrado nos navegadores que não suportam o elemento {{HTMLElement("canvas")}}, mas essa checagem pode ser feita através de um _script_ simplesmente testando a presença do método `getContext()`:

```js
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // codigo de desenho aqui
} else {
  // codigo para quando o canvas nao for suportado aqui
}
```

## Um modelo de estrutura

Aqui, um modelo minimalista, que vamos usar como ponto de partida para os exemplos posteriores:

> **Nota:** não é uma boa prática incorporar um script dentro do HTML. Nós fazemos isso aqui para manter o exemplo conciso.

```html
<html>
  <head>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

O _script_ inclui a função chamada draw(), que é executada uma vez ao término do carregamento da página; este exemplo usa o evento _onload_ do documento. Essa função, ou uma parecida, poderia usar {{domxref("window.setTimeout()")}}, {{domxref("window.setInterval()")}}, ou qualquer outro manipulador de evento, contanto que a página tenha sido carregada primeiro.

{{EmbedLiveSample("Um_modelo_de_estrutura", 160, 160)}}

## Um simples exemplo

Para começar, vamos dar uma olhada num exemplo simples que desenha a interseção de dois retângulos, dos quais um deles tem uma transparência. Exploraremos em mais detalhes o funcionamento nos exemplos posteriores.

```html
<html>
  <head>
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 55, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 55, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

Este exemplo parece assim:

{{EmbedLiveSample("Um_simples_exemplo", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial", "Web/Guide/HTML/Canvas_tutorial/Drawing_shapes")}}
