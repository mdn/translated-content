---
title: Basic animations
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

Já que estamos usando JavaScript para controlar {{HTMLElement("canvas")}} elementos, também é muito fácil criar animações interativas. Fazer animações mais complexas pode levar um tempo extra; esperamos introduzir um novo artigo para auxiliar sobre isso em breve.

Provavelmente a maior limitação é que uma vez que uma forma é desenhada, ela permanece assim. Se precisarmos mover, temos que redesenhar-lá e tudo que foi desenhado antes. Demora muito tempo pra redesenhar frames complexos e a desempenho depende altamente da velocidade do computador em que está rodando.

## Passos para animação básica

Estes são os passos que você precisa para desenhar um frame:

1. **Limpe o canvas**
   A menos que a forma que você vai desenhar preencha o canvas completo(por exemplo, uma imagem de fundo), você precisa limpar todas as formas que foram desenhadas anteriormente. O caminho mais fácil para fazer isso é usando o método clearRect().
2. **Salve o estado da tela**
   Se você estiver mudando alguma configuração(como estilos, transformações, etc.) que afete o estado do canvas e você quer garantir que o estado original seja usado sempre que um quadro é desenhado, você precisa salvar esse estado original.
3. **Desenhe formas animadas**
   A etapa em que você faz a renderização real do quadro.
4. **Restaure o estado do canvas**
   Se você salvou o estado, restaure-o antes de desenhar um novo quadro.

## Controlando uma animação

Formas são desenhos na tela usando os canvas métodos diretamente ou chamando personalizadas. Em circunstancias normais, nós somente vemos esses resultados aparecerem na tela quando o script termina de ser executado. Por exemplo, não é possível fazer uma animação dentro de um loop for.

Isso significa que precisamos de um jeito para executar nossas funções de desenho durante um período de tempo. Existem dois jeitos para controlar uma animação como essa.

### Atualizações agendadas

Primeiramente há as funções {{domxref("window.setInterval()")}} e {{domxref("window.setTimeout()")}}, que podem ser usadas para chamar uma função específica durante um certo período definido de tempo.

> **Nota:** Nota: O método {{domxref("window.requestAnimationFrame()")}} agora é a maneira recomendada de programar animações. Vamos atualizar esse tutorial para abortar isso em breve.

- `setInterval(função,atraso)`
  - : Inicia repetidamente executando a função específica pela função a cada milissegundo de atraso.
- `setTimeout(função,atraso)`
  - : Executa a função especificada pela função em milissegundos de atraso.

Se você não quer nenhuma interação do usuário, é melhor usar a função setInterval() que executa repeditamente o código fornecido.

### Atualizar na interação do usuário

O segundo método que nós podemos usar para controlar uma animação é a entrada do usuário. Se nós quiséssimos criar um jogo, nós poderiamos usar os eventos do teclado ou mouse para controlar a animação. Ao definir {{domxref("EventListener")}}s, nós pegamos qualquer interação do usuário e executamos nossas funções da animação.

Se você quer a interação do usuário, você pode usar uma versão menor ou a versão principal do nosso framework pra animação:

```
var myAnimation = new MiniDaemon(null, animateShape, 500, Infinity);
```

ou

```
var myAnimation = new Daemon(null, animateShape, 500, Infinity);
```

Nos exemplos abaixo, no entanto, usamos o método {{domxref("window.setInterval()")}} para controlar a animação. Na parte inferior dessa página há alguns links de exemplos que usam {{domxref("window.setTimeout()")}}.

#### Um sistema solar animado

Esse exemplo anima um pequeno modelo do nosso sistema solar.

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  setInterval(draw, 100);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);
}
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("An_animated_solar_system", "310", "310", "canvas_animation1.png")}}

#### Um relógio animado

Esse exemplos desenha um relógio animado, mostrando sua hora atual.

```js
function init() {
  clock();
  setInterval(clock, 1000);
}

function clock() {
  var now = new Date();
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("An_animated_clock", "180", "180", "canvas_animation2.png")}}

#### Um panorama em loop

Nesse exemplos, um panorama é rolado da esquerda pra direita. Nós estamos usando uma imagem do Parque Nacional de Yosemite que tiramos da Wikipedia, mas você pode usar qualquer imagem que fosse maior que a tela.

```js
var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = "capitan_meadows,_yosemite_national_park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  } // image larger than canvas
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } // image larger than canvas
  else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } // image larger than canvas
  else {
    clearY = CanvasYSize;
  }
  //Get Canvas Element
  ctx = document.getElementById("canvas").getContext("2d");
  //Set Refresh Rate
  return setInterval(draw, speed);
};

function draw() {
  //Clear Canvas
  ctx.clearRect(0, 0, clearX, clearY);
  //If image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = 0;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
    }
  }
  //If image is > Canvas Size
  else {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  //draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  //amount to move
  x += dx;
}
```

Abaixo é o {{HTMLElement("canvas")}} em que a imagem é rolada. Note que a largura e a altura especificadas aqui devem corresponder aos valores das variáveis CanvasXZSize e CanvasYSize no código JavaScript.

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

**Live sample**

{{EmbedLiveSample("A_looping_panorama", "830", "230")}}

## Outros exemplos

- [Gartic](http://www.gartic.net/)
  - : Jogo de desenho para multiplayers.
- [Canvascape](http://www.abrahamjoffe.com.au/ben/canvascape/)
  - : Um jogo de aventura 3D (tiro em primeira pessoa).
- [A basic ray-caster](/pt-BR/docs/Web/Guide/HTML/A_basic_ray-caster)
  - : Um bom exemplo de como fazer animações usando os controles do teclado.
- [canvas adventure](http://andrewwooldridge.com/canvas/canvasgame001/canvasgame002.html)
  - : Outro bom exemplo que usa controles de teclado.
- [An interactive Blob](http://www.blobsallad.se/)
  - : Divirta-se com Blob.
- [Flying through a starfield](http://arapehlivanian.com/wp-content/uploads/2007/02/canvas.html)
  - : Voe através de estrelas, círculos ou quadrados.
- [iGrapher](http://igrapher.com/)
  - : Um exemplo que ilustra os dados do mercado de ações.

## Veja também

- [JavaScript timers](/pt-BR/docs/JavaScript/Timers)
- [`setInterval` – A little framework](/pt-BR/docs/DOM/window.setInterval#A_little_framework)
- [JavaScript Daemons Management](/pt-BR/docs/JavaScript/Timers/Daemons)
- [HTMLCanvasElement](/pt-BR/docs/DOM/HTMLCanvasElement)

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Compositing", "Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas")}}
