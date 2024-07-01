---
title: Prática de construção de objetos
slug: Learn/JavaScript/Objects/Object_building_practice
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

Nos artigos anteriores, analisamos todos os detalhes essenciais da teoria e da sintaxe do objeto JavaScript, fornecendo uma base sólida para começar. Neste artigo, vamos mergulhar em um exercício prático, dando a você mais prática na construção de objetos JavaScript personalizados, com um resultado divertido e colorido.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos de informática, conhecimento básico de HTML e CSS,
        familiaridade com o básico de JavaScript (veja
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">First steps</a> e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >) e o básico de OOJS (veja
        <a href="/pt-BR/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introduction to objects</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Adiquirir alguma prática no uso de objetos e técnicas de orientação a
        objetos num contexto real.
      </td>
    </tr>
  </tbody>
</table>

## Vamos saltitar algumas bolas

Neste artigo, vamos escrever uma demo clássica de "bolas saltitantes", para mostrar o quão úteis os objetos podem ser em JavaScript. Nossas bolinhas vão saltar pela tela e mudam de cor quando se tocam. O exemplo acabado vai parecer um pouco assim:![](bouncing-balls.png)

Este exemplo fará uso da [Canvas API](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics), para desenhar as bolas na tela, e da [requestAnimationFrame](/pt-BR/docs/Web/API/window/requestAnimationFrame) API para animar toda a exibição — você não precisa ter nenhum conhecimento prévio dessas APIs e esperamos que, no momento em que você terminar este artigo, você esteja interessado em explorá-los mais. Ao longo do caminho, faremos uso de alguns objetos bacanas, e mostraremos algumas técnicas legais, como bolas quicando nas paredes, e verificando se elas se chocaram (também conhecidas como **detecção de colisão**).

## Começando

Para começar, faça cópias locais de nossos arquivos [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), e [`main.js`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main.js). Estes contêm o seguinte, respectivamente:

1. Um documento HTML muito simples com um elemento {{HTMLElement("h1")}}, um elemento {{HTMLElement("canvas")}} para desenhar nossas bolas e elementos para aplicar nosso CSS e JavaScript em nosso HTML.
2. Alguns estilos muito simples, que servem principalmente para estilizar e posicionar o `<h1>`, e se livrar de qualquer barra de rolagem ou margem ao redor da borda da página (para que fique bonito e arrumado).
3. Algum JavaScript que serve para configurar o elemento `<canvas>` e fornecer uma função geral que vamos usar.

A primeira parte do script é assim:

```js
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Esse script obtém uma referência ao elemento `<canvas>` e, em seguida, chama o método [`getContext()`](/pt-BR/docs/Web/API/HTMLCanvasElement/getContext) para nos fornecer um contexto no qual podemos começar a desenhar. A variável resultante (`ctx`) é o objeto que representa diretamente a área de desenho da tela e nos permite desenhar formas 2D nela.

Em seguida, definimos variáveis chamadas `width` e `height`, e a largura e altura do elemento canvas (representado pelas propriedades `canvas.width` e `canvas.height`) para igualar a largura e a altura da viewport do navegador (a área em que a página da Web aparece — isso pode ser obtido das propriedades {{domxref("Window.innerWidth")}} e {{domxref("Window.innerHeight")}} ).

Você verá aqui que estamos encadeando várias tarefas juntas, para que as variáveis sejam todas mais rápidas — isso é perfeitamente aceitável.

A última parte do script inicial é a seguinte:

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
```

Essa função usa dois números como argumentos e retorna um número aleatório no intervalo entre os dois.

## Modelando uma bola no nosso programa

Nosso programa contará com muitas bolas saltando ao redor da tela. Como todas essas bolas se comportarão da mesma maneira, faz sentido representá-las com um objeto. Vamos começar adicionando o construtor a seguir ao final do código.

```js
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
```

Aqui incluímos alguns parâmetros que definem as propriedades que cada bola precisa para funcionar em nosso programa:

- coordenadas `x` e `y` — coordenadas horizontal e vertical onde a bola vai começar na tela. Isso pode variar entre 0 (canto superior esquerdo) à largura e altura da janela de visualização do navegador (canto inferior direito).
- velocidade horizontal e vertical (`velX` e `velY`) — cada bola recebe uma velocidade horizontal e vertical; em termos reais, esses valores serão adicionados regularmente aos valores das coordenadas `x`/`y` quando começarmos a animar as bolas, para movê-las tanto em cada quadro.
- `color` — cada bola recebe uma cor.
- `size` — cada bola recebe um tamanho — este será o seu raio, em pixels.

Isso classifica as propriedades, mas e os métodos? Queremos realmente fazer com que nossas bolas façam algo em nosso programa.

### Desenhando a bola

Primeiro adicione o seguinte método `draw()` ao `prototype` do `Ball()`:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

Usando esta função, podemos dizer a nossa bola para desenhar-se na tela, chamando uma série de membros do contexto de tela 2D que definimos anteriormente (`ctx`). O contexto é como o papel, e agora queremos comandar nossa caneta para desenhar algo nela:

- Primeiro, usamos [`beginPath()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/beginPath) para declarar que queremos desenhar uma forma no papel.
- Em seguida, usamos [`fillStyle`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/fillStyle) para definir a cor que queremos que a forma seja — nós a definimos como a propriedade `color` da nossa bola.
- Em seguida, usamos o método [`arc()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/arc) para traçar uma forma de arco no papel. Seus parâmetros são:

  - A posição `x` e `y` do centro do arco — estamos especificando as propriedades `x` e `y` da nossa bola.
  - O raio do nosso arco — estamos especificando a propriedade `size` da nossa bola.
  - Os dois últimos parâmetros especificam o número inicial e final de graus em volta do círculo em que o arco é desenhado entre eles. Aqui nós especificamos 0 graus e `2 * PI`, que é o equivalente a 360 graus em radianos (irritantemente, você tem que especificar isso em radianos). Isso nos dá um círculo completo. Se você tivesse especificado apenas `1 * PI`, você obteria um semicírculo (180 graus).

- Por último, usamos o método [`fill()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/fill), que basicamente diz "terminar de desenhar o caminho que começamos com `beginPath()`, e preencher a área que ocupa com a cor que especificamos anteriormente em `fillStyle`."

Você pode começar a testar seu objeto já.

1. Salve o código até o momento e carregue o arquivo HTML em um navegador.
2. Abra o console JavaScript do navegador e, em seguida, atualize a página para que o tamanho da tela mude para a viewport menor visível deixada quando o console for aberto.
3. Digite o seguinte para criar uma nova instância de bola:

   ```js
   let testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Tente chamar seus membros:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Quando você entra na última linha, você deve ver a bola se desenhando em algum lugar na sua tela.

### Atualizando os dados da bola

Podemos desenhar a bola na posição, mas para começar a mover a bola, precisamos de uma função de atualização de algum tipo. Adicione o seguinte código na parte inferior do seu arquivo JavaScript, para adicionar um método `update()` ao `prototype` do `Ball()`:

```js
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};
```

As primeiras quatro partes da função verificam se a bola atingiu a borda da tela. Se tiver, invertemos a polaridade da velocidade relevante para fazer a bola viajar na direção oposta. Assim, por exemplo, se a bola estava viajando para cima (positivo `velY`), então a velocidade vertical é alterada de forma que ela comece a viajar para baixo (negativo `velY`).

Nos quatro casos, estamos verificando se:

- Se a coordenada `x` é maior que a largura da tela (a bola está saindo da borda direita).
- Se a coordenada `x` é menor que 0 (a bola está saindo da borda esquerda).
- Se a coordenada `y` é maior que a altura da tela (a bola está saindo da borda inferior).
- Se a coordenada `y` é menor que 0 (a bola está saindo da borda superior).

Em cada caso, estamos incluindo o `size` da bola no cálculo, porque as coordenadas `x`/`y` estão no centro da bola, mas queremos que a borda da bola saia do perímetro — não queremos a bola para fique no meio da tela antes de quicar de volta.

As duas últimas linhas adicionam o valor `velX` à coordenada `x`, e o valor `velY` à coordenada `y` — a bola é efitivamente movida cada vez que este método é chamado.

Isso é o que será feito por ora; vamos continuar com alguma animação!

## Animando a bola

Agora vamos tornar isso divertido. Vamos começar a adicionar bolas à tela e a animá-las.

1. Primeiro, precisamos de criar um lugar para armazenar todas as nossas bolas e então preenche-lo. O código a seguir fará esse trabalho — adicione-o ao final do seu código agora:

   ```js
   let balls = [];

   while (balls.length < 25) {
     let size = random(10, 20);
     let ball = new Ball(
       // ball position always drawn at least one ball width
       // away from the edge of the canvas, to avoid drawing errors
       random(0 + size, width - size),
       random(0 + size, height - size),
       random(-7, 7),
       random(-7, 7),
       "rgb(" +
         random(0, 255) +
         "," +
         random(0, 255) +
         "," +
         random(0, 255) +
         ")",
       size,
     );

     balls.push(ball);
   }
   ```

   O laço `while` cria uma nova instância da nossa `Ball()` usando valores aleatórios gerados com nossa função `random()`, então a função `push()` coloca ela no final do nosso array de bolas, mas somente enquanto o número de bolas no array é menor que 25. Então quando nos tivermos 25 bolas na tela mais nenhuma bola aparece. Você pode tentar variar o número em `balls.length < 25` para obter mais ou menos bolas na tela. Dependendo de quanto poder de processamento seu computador/navegador tiver, especificar várias milhares de bolas pode diminuir bastante a velocidade da animação!

2. Adicione o seguinte ao final do seu código agora:

   ```js
   function loop() {
     ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
     ctx.fillRect(0, 0, width, height);

     for (let i = 0; i < balls.length; i++) {
       balls[i].draw();
       balls[i].update();
     }

     requestAnimationFrame(loop);
   }
   ```

   Todos os programas que animam as coisas geralmente envolvem um loop de animação, que serve para atualizar as informações no programa e renderizar a visualização resultante em cada quadro da animação; esta é a base para a maioria dos jogos e outros programas. Nossa função `loop()` faz o seguinte:

   - Define a cor de preenchimento da tela como preto semitransparente e desenha um retângulo com a cor em toda a largura e altura da tela, usando `fillRect()` (os quatro parâmetros fornecem uma coordenada de início e uma largura e altura para o retângulo desenhado ). Isso serve para encobrir o desenho do quadro anterior antes que o próximo seja desenhado. Se você não fizer isso, você verá apenas longas cobras se movimentando ao redor da tela, em vez de mover as bolas! A cor do preenchimento é definida como semitransparente, `rgba(0,0,0,0.25)`, para permitir que os poucos quadros anteriores brilhem levemente, produzindo as pequenas trilhas atrás das bolas à medida que elas se movem. Se você mudou 0,25 para 1, você não vai mais vê-los. Tente variar esse número para ver o efeito que ele tem.
   - Percorre todas as bolas no array `balls` e executa a função `draw()` e `update()` de cada bola para desenhar cada uma delas na tela, depois faz as atualizações necessárias para a posição e a velocidade a tempo para o próximo quadro.
   - Executa a função novamente usando o método `requestAnimationFrame()` — quando esse método é executado constantemente e passa o mesmo nome de função, ele executará essa função um número definido de vezes por segundo para criar uma animação suave. Isso geralmente é feito de forma recursiva — o que significa que a função está chamando a si mesma toda vez que é executada, portanto, ela será executada repetidas vezes.

3. Por último mas não menos importante, adicione a seguinte linha à parte inferior do seu código — precisamos chamar a função uma vez para iniciar a animação.

   ```js
   loop();
   ```

É isso para o básico — tente salvar e atualizar para testar suas bolas quicando!

## Adicionando detecção de colisão

Agora, para um pouco de diversão, vamos adicionar alguma detecção de colisão ao nosso programa, para que nossas bolas saibam quando bateram em outra bola.

1. Primeiro de tudo, adicione a seguinte definição de método abaixo onde você definiu o método `update()` (ou seja, o bloco `Ball.prototype.update`).

   ```js
   Ball.prototype.collisionDetect = function () {
     for (let j = 0; j < balls.length; j++) {
       if (!(this === balls[j])) {
         const dx = this.x - balls[j].x;
         const dy = this.y - balls[j].y;
         const distance = Math.sqrt(dx * dx + dy * dy);

         if (distance < this.size + balls[j].size) {
           balls[j].color = this.color =
             "rgb(" +
             random(0, 255) +
             "," +
             random(0, 255) +
             "," +
             random(0, 255) +
             ")";
         }
       }
     }
   };
   ```

   Esse método é um pouco complexo, então não se preocupe se você não entender exatamente como isso funciona agora. Uma explicação a seguir:

   - Para cada bola, precisamos checar todas as outras bolas para ver se ela colidiu com a bola atual. Para fazer isso, abrimos outro loop `for` para percorrer todas as bolas no array `balls[]`.
   - Imediatamente dentro de nosso loop for, usamos uma instrução `if` para verificar se a bola atual em loop é a mesma bola que estamos verificando no momento. Não queremos verificar se uma bola colidiu consigo mesma! Para fazer isso, verificamos se a bola atual (ou seja, a bola cujo método collisionDetect está sendo invocado) é a mesma que a bola de loop (ou seja, a bola que está sendo referenciada pela iteração atual do loop for no collisionDetect método). Nós então usamos `!` para negar a verificação, para que o código dentro da instrução if seja executado apenas se eles não forem iguais.
   - Em seguida, usamos um algoritmo comum para verificar a colisão de dois círculos. Estamos basicamente verificando se alguma das áreas dos dois círculos se sobrepõe. Isso é explicado ainda mais na [2D collision detection](/pt-BR/docs/Games/Techniques/2D_collision_detection).
   - Se uma colisão for detectada, o código dentro da instrução `if` interna será executado. Neste caso, estamos apenas definindo a propriedade `color` de ambos os círculos para uma nova cor aleatória. Poderíamos ter feito algo muito mais complexo, como fazer com que as bolas saltassem umas das outras de forma realista, mas isso teria sido muito mais complexo de implementar. Para essas simulações físicas, os desenvolvedores tendem a usar jogos ou bibliotecas físicas, como [PhysicsJS](http://wellcaffeinated.net/PhysicsJS/), [matter.js](http://brm.io/matter-js/), [Phaser](http://phaser.io/), etc.

2. Você também precisa chamar esse método em cada quadro da animação. Adicione o seguinte abaixo do `balls[i].update();`:

   ```js
   balls[i].collisionDetect();
   ```

3. Salve e atualize a demonstração novamente, e você verá suas bolas mudando de cor quando colidirem!

> **Nota:** If you have trouble getting this example to work, try comparing your JavaScript code against our [finished version](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) (also see it [running live](http://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Sumário

Esperamos que você tenha se divertido escrevendo seu próprio exemplo de bolas saltitantes aleatórias do mundo real, usando várias técnicas orientadas a objetos e objetos de todo o módulo! Isso deve ter lhe dado alguma prática útil no uso de objetos e um bom contexto do mundo real.

É isso para artigos de objetos — tudo o que resta agora é para você testar suas habilidades na avaliação de objetos.

## Veja também

- [Canvas tutorial](/pt-BR/docs/Web/API/Canvas_API/Tutorial) — um guia para iniciantes sobre o uso de telas (canvas) 2D .
- [requestAnimationFrame()](/pt-BR/docs/Web/API/window/requestAnimationFrame)
- [2D collision detection](/pt-BR/docs/Games/Techniques/2D_collision_detection)
- [3D collision detection](/pt-BR/docs/Games/Techniques/3D_collision_detection)
- [2D breakout game using pure JavaScript](/pt-BR/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — um ótimo tutorial para iniciantes que mostra como criar um jogo 2D.
- [2D breakout game using Phaser](/pt-BR/docs/Games/Tutorials/2D_breakout_game_Phaser) — explica conceitos básicos da criação de um jogo 2D utilizando uma biblioteca JavaScript.

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
