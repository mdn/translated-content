---
title: Timeouts e intervalos
slug: conflicting/Learn/JavaScript/Asynchronous_ae5a561b0ec11fc53c167201aa8af5df
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

Este tutorial é sobre os métodos tradicionais que o JavaScript tem disponíveis para executar códigos assíncronamente depois que um dado período de tempo tenha passado, ou em um intervalo (um número de segundos por segundo), discute suas utilidades e considera seus problemas.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Entendimento básico sobre informáticas e fundamentos do JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender loops e intervalos assíncronos e para o que eles servem.</td>
    </tr>
  </tbody>
</table>

## Introdução

Por um longo tempo, a plataforma web tem oferecido à programadores JavaScript um número de funções que permitem que eles executem código assíncronamente depois de um determinado intervalo de tempo, e executar um bloco de código de modo assíncrono repetidamente até que você o mande parar.

Essas funções são:

- [`setTimeout()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
  - : Executa um bloco específico uma vez depois de um determinado tempo
- [`setInterval()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
  - : Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.
- [`requestAnimationFrame()`](/pt-BR/docs/Web/API/window/requestAnimationFrame)
  - : Uma versão moderna de `setInterval()`. Ela executa um bloc de código específico antes do navegador renderizar a tela novamento, permitindo que seja executada em uma taxa de quadros adequada, independentemente do ambiente em que está sendo executado.

O código executado por estas funções é executado na main thread (depois do dado intervalo).

É importante saber que você pode (e irá) executar outros códigos antes que uma chamada `setTimeout()` é executada, ou entre iterações de `setInterval()`. Dependendo de como essas operações são intensas, elas podem atrasar o seu código async ainda mais, já que o código async só é executado depois que a main thread terminar seu processamento (ou seja, quando a fila estiver vazia). Você aprenderá mais sobre isso enquanto fazemos nosso progresso neste artigo.

De qualquer forma, essas funções são usadas para executar animações constantes e outros processamentos em um web site ou aplicação. Nas seções a seguir, nós vamos te mostrar como elas podem ser usadas.

## setTimeout()

Como foi dito anteriormente, o [`setTimeout()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) executa um bloco de código particular depois que um determinado período de tempo passou. Ele toma os seguintes parâmetros:

- Uma função a ser executada, ou uma referência de uma função definida em outro lugar.
- Um número representando o intervalo de tempo em milissegundos (1000 milissegundos equivalem a 1 segundo) para esperar antes de executar o código. Se você especificar um valor de 0 (ou simplesmente omitir o valor), a função será executada assim que possível (mas não imediatamente).
- Zero ou mais valores que representam quaisquer parâmetros que você quiser passar para a função quando ela for executada.

> **Nota:** **NOTA:** O tempos especificafo **não** é o tempo garantido de execução, mas sim o tempo míniimo de execução. As callback que você passa para essas funções não podem ser executadas até que a main thread esteja vazia.
>
> Como consequência, códigos como `setTimeout(fn, 0)`\_ \_serão executados assim que a fila estiver vazia, **não** imediatamente. Se você executar código como `setTimeout(fn, 0)` e depois imediatamente executar um loop que conta de 1 a 10 bilhões, sua callback será executada depois de alguns segundos.

No exemplo a seguir, o navegador vai esperar dois segundos antes de executar a função anônima, e depois vai mostrar a mensagem de alerta ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html), e [veja o código](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html)):

```js
let myGreeting = setTimeout(function() {
  alert('Hello, Mr. Universe!');
}, 2000)
```

As funções especificadas não tem que ser anônimas. Você pode dar o nome da função, e até mesmo definir ela em outro lugar e passar uma referência para o timeout `setTimeout()`. As versões a seguir do código são equivalentes à primeira:

```js
// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000)

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
```

Isso pode ser útil se você tem uma função que precisa ser chamada de um timeout e também em resposta à um evento, por exemplo. Mas também pode servir para manter seu código organizado, especialmente se a callback timetout é mais do que algumas linhas de código.

`setTimeout()` retorna um valor identificador que pode ser usado para se referir ao timeout depois, como em quando você que pará-lo. Veja [Cancelando timetous](#cancelando_timetous) (abaixo) e aprenda como fazer isso.

### Passando parâmetros para uma função setTimeout()

Quaisquer parâmetros que você quiser passar para a função sendo executada dentro do `setTimeout()` devem ser passados como parâmetros adicionais no final da lista.

Por exemplo, você pode mudar a função anterior para que ela diga oi para qualquer nome que foi passada para ela:

```js
function sayHi(who) {
  alert(`Hello ${who}!`);
}
```

Agora, você pode passar o nome da pessoa no `setTimeout()` como um terceiro parâmetro:

```js
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
```

### Cancelando timeouts

Finalmente, se um timeout foi criado, você pode cancelá-lo antes que o tempo especificado tenha passado chamando [`clearTimeout()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), passando para o identificador a chamada `setTimeout()` como um parâmetreo. então para cancelar o timeout acima, você fará isso:

```js
clearTimeout(myGreeting);
```

> **Nota:** Veja [`greeter-app.html`](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/greeter-app.html) para uma demonstração mais desenvolvida que te permite colocar o nome da pessoa a dizer oi em um formulário, e cancelar a saudação usando um botão separado ([veja aqui o código fonte](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/greeter-app.html)).

## setInterval()

`setTimeout()` funciona perfeitamento quando você precisa executar algum código depois de um período de tempo. Mas o que acontece quando voc\~e precisa executar o código de novo e de novo — por exemplo, no caso de uma animação?

É aí que o [`setInterval()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) entra. Ele funciona de uma maneira muito similar à `setTimeout()`, exceto que a função que você passar como primeiro parâmetro é executada repetidamente em não menos que um número determinado de milissegundos dado no segundo parâmetro, ao invés de apenas uma vez. Você também pode passar qualquer parâmetro sendo executado como um parâmetro subsequente da chamada de `setInterval()`.

Vamos dar uma olhada em um exemplo. A função a seguir cria um novo objeto [`Date()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date), tira uma string de tempo usando [`toLocaleTimeString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), e depois a mostra naUI. Em seguida, ela executa a função uma vez por segundo usando `setInterval()`, criando o efeito de um relógio digital que é atualizado uma vez por segundo ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), e também [veja o código](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html)):

```js
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```

Assim como o `setTimeout()`, o `setInterval()` também retorna um valor identificador que você pode usar depois para cancelar o intervalo.

### Cancelando intervalos

`setInterval()` continua sua execução para sempre, a menos que você faça algo sobre isso. Você provavelmente quer um jeito de parar tais tarefas, do contrário você pode acabar com error quando o navegador não puder completar outras versões futuras da tarefa, ou se a animação acabar. Você pode fazer isso do mesmo jeito que você para timeouts — passando o identificador retornado por `setInterval()` para a função [`clearInterval()`](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval):

```js
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```

#### Aprendizado ativo: Criando seu próprio cronômetro!

Com tudo isso dito, nós temos um desafio para você. Faça uma cópia do nosso exemplo [`setInterval-clock.html`](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), e o modifique para criar seu próprio cronômetro.

Você precisa mostrar um tempo na tela como antes, mas nesse exemplo você vai precisar de:

- Um botão de "início" para fazer o cronômetro começar a contar.
- Um botão de "parar" para parar ou pausar o tempo.
- Um botão de "reset" para resetar o tempo em 0.
- O display do tempo para mostrar o número de segundos passados.

Here's a few hints for you:

- You can structure and style the button markup however you like; just make sure you use semantic HTML, with hooks to allow you to grab the button references using JavaScript.
- You probably want to create a variable that starts at `0`, then increments by one every second using a constant loop.
- It is easier to create this example without using a `Date()` object, like we've done in our version, but less accurate — you can't guarantee that the callback will fire after exactly `1000`ms. A more accurate way would be to run `startTime = Date.now()` to get a timestamp of exactly when the user clicked the start button, and then do `Date.now() - startTime` to get the number of milliseconds after the start button was clicked.
- You also want to calculate the number of hours, minutes, and seconds as separate values, and then show them together in a string after each loop iteration. From the second counter, you can work out each of these.
- How would you calculate them? Have a think about it:

  - The number of seconds in an hour is `3600`.
  - The number of minutes will be the amount of seconds left over when all of the hours have been removed, divided by `60`.
  - The number of seconds will be the amount of seconds left over when all of the minutes have been removed.

- You'll want to include a leading zero on your display values if the amount is less than `10`, so it looks more like a traditional clock/watch.
- To pause the stopwatch, you'll want to clear the interval. To reset it, you'll want to set the counter back to `0`, clear the interval, and then immediately update the display.
- You probably ought to disable the start button after pressing it once, and enable it again after you've stopped/reset it. Otherwise multiple presses of the start button will apply multiple `setInterval()`s to the clock, leading to wrong behavior.

> **Nota:** If you get stuck, you can [find our version here](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html) also).

## Coisas para se manter em mente sobre o setTimeout() e o setInterval()

Existem algumas coisinhas que devemos sempre lembrar quando estamos trabalhando com `setTimeout()` e`setInterval()`:

### Timeouts recursivos

Há outra maneira de usar o `setTimeout()`: você pode chamá-lo recusivamnete para executar o mesmo código repetidas vezes, ao invés de usar o `setInterval()`.

O exemplo abaixo usa um `setTimeout()` recursivo para executar a função passada a cada `100` millissegundos:

```js
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

Compare the above example to the following one — this uses `setInterval()` to accomplish the same effect:

```js
let i = 1;

setInterval(function run() {
  console.log(i);
  i++
}, 100);
```

#### Qual a diferença entre o `setTimeout()` recursivo e o `setInterval()`?

A diferença entre as duas versões é bem sútil.

- O `setTimeout()` recursivo garante que o mesmo intervalo entre as execuções (por exemplo, `100`ms no exemplo acima). O código será executado, depois esperar `100` milissegundos antes de fazer isso de novo— então o intervalo será o mesmo, idependente do tempo que o código leva para ser executado.
- O exemplo usando `setInterval()` faz as coisas um pouco diferentes.O intervalo escolhido inclui o tempo necessário para executar o código que você deseja executar. Digamos que o código leva `40` milissegundos de execução — o intervalo acaba levando apenas `60` milissegundos.
- Quando usamos o `setTimeout()` recursivamente, cada iteração pode calcular um delay diferente antes de executar a próxima iteração. Em outras palavras, o valor do segundo parâmetro pode especificar um tempo diferente em milissegundos para esperar antes de rodar o código de novo.

Quando seu código tem o potencial para levar mais tempo do que lhe foi atribuido, é melhor usar o `setTimeout()` recursivo — isso irá manter o intervalo de tempo constant entre execuções independente do quanto tempo o código levar para ser executado, e você não terá erros.

### Timeouts imediatos

Usar zero como o valor para `setTimeout()` faz a execução da callback ser o mais rápido o possível, mas apenas depois que a main thread for terminada.

Por exemplo, o código abaixo ([veja funcionar aqui](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/zero-settimeout.html)) mostra um alert que contém um `"Hello"`, depois um alert que contém `"World"` assim que você clicar em OK no primeiro alerta.

```js
setTimeout(function() {
  alert('World');
}, 0);

alert('Hello');
```

Isso pode ser útil em casos onde você quer fazer um bloco de código ser executado assim que a main thread acabar o seu processamento — colocar no loop de eventos async, assim ele vai ser executado logo depois.

### Cancelando com clearTimeout() ou clearInterval()

`clearTimeout()` e `clearInterval()` usam a mesma lista de entradas para cancelamento. Isso significa que você pode usar os dois para cancelar um `setTimeout()` ou `setInterval()`.

Mas mesmo assim, você deve usar o `clearTimeout()` para entradas `setTimeout()` e `clearInterval()` para entradas `setInterval()`. Isso evita confusões.

## requestAnimationFrame()

[`requestAnimationFrame()`](/pt-BR/docs/Web/API/window/requestAnimationFrame) é uma função de loop especializada criada para executar animações com eficiência no navegador. Ela é basicamente a versão moderna de `setInterval()` — ela executa um bloco de código específico antes que o navegador renove o display, permitindo que uma animação seja executada em um framerate adequado independente do ambiente em que está sendo executada.

Ela foi criada em resposta à problemas ocorridos com `setInterval()`, que por exemplo não roda em uma taxa de quadros otimizada para o dispositivo, e às vezes diminui os frames, continua a rodar mesmo se a guia não esiver ativa ou se a animação for rolada para fora da página, etc.

([Leia mais sobre isso em CreativeJS](http://creativejs.com/resources/requestanimationframe/index.html).)

> **Nota:** Você pode encontrar exemplos do uso de `requestAnimationFrame()` em outros lugares do curso — por exemplo em [Drawing graphics](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics), e [Object building practice](/pt-BR/docs/Learn/JavaScript/Objects/Object_building_practice).

O método toma como argumentos uma callback a ser invocada antes da renovação. Esse é o padrão geral que você verá usado em:

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}

draw();
```

A ideia é definir uma função em que sua animação é atualizada (e.g. seus spritas se movem, a pontuação é atualizada, dados são recarregados, etc). Depois, você inicia o processo. No final do bloco da função você chama `requestAnimationFrame()` com a referência da função passada como parâmetro, e isso instrui o navegador a chamar a função de novo na próxima renovação. Isso é executado continuamente, já que o código está chamando `requestAnimationFrame()` recursivamente.

> **Nota:** Se você quer realizar algum tipo de animação na DOM constantemente, [Animações CSS](/pt-BR/docs/Web/CSS/CSS_Animations) são provavelemente mais rápidas. elas são calculadas diretamente pelo código interno do navegador, ao invés de JavaScript.
>
> Se, no entanto, você está fazendo algo mais complexo e envolvendo objetos que não são diretamente assessados da DOM (como [2D Canvas API](/pt-BR/docs/Web/API/Canvas_API) ou objetos [WebGL](/pt-BR/docs/Web/API/WebGL_API)), `requestAnimationFrame()` é a melhor opção na maioria dos casos

### Qual a velocidade da sua animação?

A suavidade da sua animação é diretamente dependente na frame rate da sua animação e é medida em frames per second (fps). The smoothness of your animation is directly dependent on your animation's frame rate and it is measured in frames per second (fps). Quanto maior esse número, mais suave será a sua animação, até certo ponto.

Já que a maioria das tela tem uma taxa de atualização de 60Hz, a frame rate mais rápida que você pode ter é de 60fps quando trabalhando com web browsers. No entanto, mais frames significa mais processamento, o que pode ser causar uma queda de quadros e travamento.

Se você tem um monitos com uma taxa de atualização de 60Hz e você quer atingir 60FPS você tem pelo menos 16.7 milissegundos (`1000 / 60`) para executar sua animação em cada frame. Isso é um lembrete de que você vai precisar estar atento à quantidade de código que você vai tentar executar em cada iteração do loop de animação.

`requestAnimationFrame()` sempre tenta ficar o mais próximo possível de 60 FPS. Às vezes, isso não é possível — se você tem uma animação bem complexa e você está executando ela em um computador lento, sua frame rate será menor. Em todos os casos, o `requestAnimationFrame()` sempre vai fazer o melhor que pode com o que ele tem dísponivel.

### Como o requestAnimationFrame() se diferencia de setInterval() e setTimeout()?

Vamos falar um pouco sobre como o método `requestAnimationFrame()` se diferencia dos outros métodos vistos anteriormente. Olhando com o código anterior:

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}

draw();
```

Vamos ver isso usando o `setInterval()`:

```js
function draw() {
   // Drawing code goes here
}

setInterval(draw, 17);
```

Como foi dito anteriormente, você não especifica um intervalo de tempo para `requestAnimationFrame()`. O método se executa o mais rápido e suave o possível nas condições atuais. O navegador também não perde tempo executando uma animação se ela está fora da tela por algum motivo, etc.

`setInterval()`, por outro lado, exige que um intervalo de tempo seja especificado. Nós chegamos ao valor final de 17 por meio da formula _1000 milliseconds / 60Hz_, e depois arredondamos o resultado. Arredondar é uma boa ideia; se você tivesse arredondado para baixo, o navegador pode tentar executar a animação mais rápido do que 60 FPS, e não faria nenhuma diferênça na suavidade da animação de qualquer forma. Como foi dito antes, 60Hz é a taxa de atualização padrão.

### Incluindo um timestamp

A callback passada para a função `requestAnimationFrame()` pode ser dada um parâmetro támbem: um valor _timestamp_, que representa o tempo desde que o `requestAnimationFrame()` começou a rodar.

Isso é útil, permite que você execute coisas em um tempo específico e em passo constante, independente do quão rápido ou lento é o seu dispositivo. O padão geral que você usaria se parece um pouco com isso:

```js
let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Do something based on current time

   requestAnimationFrame(draw);
}

draw();
```

### Suporte do navegador

`requestAnimationFrame()` é suportado em navegadores mais recentes do que `setInterval()`/`setTimeout()`. Curiosamente, está disponível no Internet Explorer 10 e além.

Então, você não precisa dar suporte para versões mais velhas do IE, não há poruqe não usar o `requestAnimationFrame()`.

### Um exemplo simples

Enough with the theory! Let's build your own personal `requestAnimationFrame()` example. You're going to create a simple "spinner animation"—the kind you might see displayed in an app when it is busy connecting to the server, etc.

> **Nota:** In a real world example, you should probably use CSS animations to run this kind of simple animation. However, this kind of example is very useful to demonstrate `requestAnimationFrame()` usage, and you'd be more likely to use this kind of technique when doing something more complex such as updating the display of a game on each frame.

1. Grab a basic HTML template ([such as this one](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)).
2. Put an empty {{htmlelement("div")}} element inside the {{htmlelement("body")}}, then add a ↻ character inside it. This is circular arrow character will act as our spinner for this example.
3. Apply the following CSS to the HTML template (in whatever way you prefer). This sets a red background on the page, sets the `<body>` height to `100%` of the {{htmlelement("html")}} height, and centers the `<div>` inside the `<body>`, horizontally and vertically.

    ```css
    html {
      background-color: white;
      height: 100%;
    }

    body {
      height: inherit;
      background-color: red;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      display: inline-block;
      font-size: 10rem;
    }
    ```

4. Insert a {{htmlelement("script")}} element just above the `</body>` tag.
5. Insert the following JavaScript inside your `<script>` element. Here, you're storing a reference to the `<div>` inside a constant, setting a `rotateCount` variable to `0`, setting an uninitialized variable that will later be used to contain a reference to the `requestAnimationFrame()` call, and setting a `startTime` variable to `null`, which will later be used to store the start time of the `requestAnimationFrame()`.

    ```js
    const spinner = document.querySelector('div');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    ```

6. Below the previous code, insert a `draw()` function that will be used to contain our animation code, which includes the `timestamp` parameter:

    ```js
    function draw(timestamp) {

    }
    ```

7. Inside `draw()`, add the following lines. They will define the start time if it is not defined already (this will only happen on the first loop iteration), and set the `rotateCount` to a value to rotate the spinner by (the current timestamp, take the starting timestamp, divided by three so it doesn't go too fast):

    ```js
      if (!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;
    ```

8. Below the previous line inside `draw()`, add the following block — this checks to see if the value of `rotateCount` is above `359` (e.g. `360`, a full circle). If so, it sets the value to its modulo of 360 (i.e. the remainder left over when the value is divided by `360`) so the circle animation can continue uninterrupted, at a sensible, low value. Note that this isn't strictly necessary, but it is easier to work with values of 0–359 degrees than values like `"128000 degrees"`.

    ```js
    if (rotateCount > 359) {
      rotateCount %= 360;
    }
    ```

9. Next, below the previous block add the following line to actually rotate the spinner:

    ```js
    spinner.style.transform = `rotate(${rotateCount}deg)`;
    ```

10. At the very bottom inside the `draw()` function, insert the following line. This is the key to the whole operation — you are setting the variable defined earlier to an active `requestAnimation()` call, which takes the `draw()` function as its parameter. This starts the animation off, constantly running the `draw()` function at a rate as near 60 FPS as possible.

    ```js
    rAF = requestAnimationFrame(draw);
    ```

> **Nota:** You can find this [example live on GitHub](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html). (You can see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html), also.)

### Clearing a requestAnimationFrame() call

Clearing a `requestAnimationFrame()` call can be done by calling the corresponding `cancelAnimationFrame()` method. (Note that the function name starts with "cancel", not "clear" as with the "set..." methods.)

Just pass it the value returned by the `requestAnimationFrame()` call to cancel, which you stored in the variable `rAF`:

```js
cancelAnimationFrame(rAF);
```

### Active learning: Starting and stopping our spinner

In this exercise, we'd like you to test out the `cancelAnimationFrame()` method by taking our previous example and updating it, adding an event listener to start and stop the spinner when the mouse is clicked anywhere on the page.

Some hints:

- A `click` event handler can be added to most elements, including the document `<body>`. It makes more sense to put it on the `<body>` element if you want to maximize the clickable area — the event bubbles up to its child elements.
- You'll want to add a tracking variable to check whether the spinner is spinning or not, clearing the animation frame if it is, and calling it again if it isn't.

> **Nota:** Try this yourself first; if you get really stuck, check out of our [live example](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html) and [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html).

### Throttling a requestAnimationFrame() animation

One limitation of `requestAnimationFrame()` is that you can't choose your frame rate. This isn't a problem most of the time, as generally you want your animation to run as smoothly as possible. But what about when you want to create an old school, 8-bit-style animation?

This was a problem, for example, in the Monkey Island-inspired walking animation from our [Drawing Graphics](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) article:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}

In this example, you have to animate both the position of the character on the screen, and the sprite being shown. There are only 6 frames in the sprite's animation. If you showed a different sprite frame for every frame displayed on the screen by `requestAnimationFrame()`, Guybrush would move his limbs too fast and the animation would look ridiculous. This example therefore throttles the rate at which the sprite cycles its frames using the following code:

```js
if (posX % 13 === 0) {
  if (sprite === 5) {
    sprite = 0;
  } else {
    sprite++;
  }
}
```

So the code only cycles the sprite once every 13 animation frames.

...Actually, it's about every 6.5 frames, as we update `posX` (character's position on the screen) by two each frame:

```js
if (posX > width/2) {
  newStartPos = -( (width/2) + 102 );
  posX = Math.ceil(newStartPos / 13) * 13;
  console.log(posX);
} else {
  posX += 2;
}
```

This is the code that calculates how to update the position in each animation frame.

The method you use to throttle your animation will depend on your particular code. For instance, in the earlier spinner example, you could make it appear to move slower by only increasing `rotateCount` by one on each frame, instead of two.

## Active learning: a reaction game

For the final section of this article, you'll create a 2-player reaction game. The game will have two players, one of whom controls the game using the <kbd>A</kbd> key, and the other with the <kbd>L</kbd> key.

When the _Start_ button is pressed, a spinner like the one we saw earlier is displayed for a random amount of time between 5 and 10 seconds. After that time, a message will appear saying `"PLAYERS GO!!"` — once this happens, the first player to press their control button will win the game.

{{EmbedGHLiveSample("learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html", '100%', 500)}}

Let's work through this:

1. First of all, download the [starter file for the app](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game-starter.html). This contains the finished HTML structure and CSS styling, giving us a game board that shows the two players' information (as seen above), but with the spinner and results paragraph displayed on top of one another. You just have to write the JavaScript code.
2. Inside the empty {{htmlelement("script")}} element on your page, start by adding the following lines of code that define some constants and variables you'll need in the rest of the code:

    ```js
    const spinner = document.querySelector('.spinner p');
    const spinnerContainer = document.querySelector('.spinner');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    const btn = document.querySelector('button');
    const result = document.querySelector('.result');
    ```

    In order, these are:

    1. A reference to the spinner, so you can animate it.
    2. A reference to the {{htmlelement("div")}} element that contains the spinner, used for showing and hiding it.
    3. A rotate count. This determines how much you want to show the spinner rotated on each frame of the animation.
    4. A null start time. This will be populated with a start time when the spinner starts spinning.
    5. An uninitialized variable to later store the {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} call that animates the spinner.
    6. A reference to the Start button.
    7. A reference to the results paragraph.

3. Next, below the previous lines of code, add the following function. It simply takes two numbers and returns a random number between the two. You'll need this to generate a random timeout interval later on.

    ```js
    function random(min,max) {
      var num = Math.floor(Math.random()*(max-min)) + min;
      return num;
    }
    ```

4. Next add the `draw()` function, which animates the spinner. This is very similar to the version from the simple spinner example, earlier:

    ```js
    function draw(timestamp) {
      if(!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;

      if(rotateCount > 359) {
        rotateCount %= 360;
      }

      spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
      rAF = requestAnimationFrame(draw);
    }
    ```

5. Now it is time to set up the initial state of the app when the page first loads. Add the following two lines, which simply hide the results paragraph and spinner container using `display: none;`.

    ```js
    result.style.display = 'none';
    spinnerContainer.style.display = 'none';
    ```

6. Next, define a `reset()` function, which sets the app back to the original state required to start the game again after it has been played. Add the following at the bottom of your code:

    ```js
    function reset() {
      btn.style.display = 'block';
      result.textContent = '';
      result.style.display = 'none';
    }
    ```

7. Okay, enough preparation! It's time to make the game playable! Add the following block to your code. The `start()` function calls `draw()` to start the spinner spinning and display it in the UI, hides the _Start_ button so you can't mess up the game by starting it multiple times concurrently, and runs a `setTimeout()` call that runs a `setEndgame()` function after a random interval between 5 and 10 seconds has passed. The following block also adds an event listener to your button to run the `start()` function when it is clicked.

    ```js
    btn.addEventListener('click', start);

    function start() {
      draw();
      spinnerContainer.style.display = 'block';
      btn.style.display = 'none';
      setTimeout(setEndgame, random(5000,10000));
    }
    ```

    > **Nota:** You'll see this example is calling `setTimeout()` without storing the return value. (So, not `let myTimeout = setTimeout(functionName, interval)`.)
    >
    > This works just fine, as long as you don't need to clear your interval/timeout at any point. If you do, you'll need to save the returned identifier!

    The net result of the previous code is that when the _Start_ button is pressed, the spinner is shown and the players are made to wait a random amount of time before they are asked to press their button. This last part is handled by the `setEndgame()` function, which you'll define next.

8. Add the following function to your code next:

    ```js
    function setEndgame() {
      cancelAnimationFrame(rAF);
      spinnerContainer.style.display = 'none';
      result.style.display = 'block';
      result.textContent = 'PLAYERS GO!!';

      document.addEventListener('keydown', keyHandler);

      function keyHandler(e) {
        console.log(e.key);
        if(e.key === 'a') {
          result.textContent = 'Player 1 won!!';
        } else if(e.key === 'l') {
          result.textContent = 'Player 2 won!!';
        }

        document.removeEventListener('keydown', keyHandler);
        setTimeout(reset, 5000);
      };
    }
    ```

    Stepping through this:

    1. First, cancel the spinner animation with {{domxref("window.cancelAnimationFrame", "cancelAnimationFrame()")}} (it is always good to clean up unneeded processes), and hide the spinner container.
    2. Next, display the results paragraph and set its text content to "PLAYERS GO!!" to signal to the players that they can now press their button to win.
    3. Attach a [`keydown`](/pt-BR/docs/Web/API/Document/keydown_event) event listener to the document. When any button is pressed down, the `keyHandler()` function is run.
    4. Inside `keyHandler()`, the code includes the event object as a parameter (represented by `e`) — its {{domxref("KeyboardEvent.key", "key")}} property contains the key that was just pressed, and you can use this to respond to specific key presses with specific actions.
    5. Log `e.key` to the console, which is a useful way of finding out the `key` value of different keys you are pressing.
    6. When `e.key` is "a", display a message to say that Player 1 won, and when `e.key` is "l", display a message to say Player 2 won. (**Note:** This will only work with lowercase a and l — if an uppercase A or L is submitted (the key plus&#x20;

        <kbd>Shift</kbd>

        ), it is counted as a different key!)

    7. Regardless of which one of the player control keys was pressed, remove the `keydown` event listener using {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} so that once the winning press has happened, no more keyboard input is possible to mess up the final game result. You also use `setTimeout()` to call `reset()` after 5 seconds — as explained earlier, this function resets the game back to its original state so that a new game can be started.

That's it—you're all done!

> **Nota:** If you get stuck, check out [our version of the reaction game](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game.html) also).

## Conclusion

So that's it — all the essentials of async loops and intervals covered in one article. You'll find these methods useful in a lot of situations, but take care not to overuse them! Because they still run on the main thread, heavy and intensive callbacks (especially those that manipulate the DOM) can really slow down a page if you're not careful.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises)
- [Making asynchronous programming easier with async and await](/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/pt-BR/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
