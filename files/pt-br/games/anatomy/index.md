---
title: Anatomia de um vídeo game
slug: Games/Anatomy
---

{{GamesSidebar}}

Este artigo analisa a anatomia e o fluxo de trabalho do vídeo game médio de um ponto de vista técnico, em termos de como o loop principal deve ser executado. Isso ajuda os iniciantes da arena do desenvolvimento de jogos modernos a entender o que é necessário ao construir um jogo e como os padrões da web como o JavaScript se prestam como ferramentas. Os programadores de jogos experientes que são novos no desenvolvimento da web também podem se beneficiar.

## Apresentar, aceitar, interpretar, calcular, repetir

O objetivo de todo vídeo game é **apresentar** ao usuário uma situação, **aceitar** sua entrada, **interpretar** estes sinais em ações, e **calcular** uma nova situação resultante dessas ações. Jogos estão constantemente repetindo estes estágios, de novo e de novo, até alguma condição final ocorrer (como vencer, perder, ou sair para ir dormir). Não surpreendentemente, este padrão corresponde a como um mecanismo de jogo está programado.

As especificidades dependem do jogo.

Alguns jogos guiam este ciclo pela entrada do usuário. Imagine que você está desenvolvendo um _"encontre as diferenças entre estas duas imagens similares"_. Esses jogos **apresentam** duas imagens ao usuário, eles **aceitam** seus cliques (ou toques), eles **interpretam** as entradas como um sucesso, falha, pausa, interação com o menu, etc., finalmente, eles **calculam** uma cena atualizada resultante dessas entradas. O ciclo do jogo é avançado pelas entradas do usuário e pela esperas até que ele as forneça. Isso é mais aproximado de um _jogo_ _baseado em turnos_ onde não há demanda de uma constante atualização a cada frame, somente quando o jogador reaje.

Outros jogos demandam controle sobre cada um dos menores intervalos de tempo possíveis. Os mesmos princípios acima aplicam-se com uma pequena diferença: cada frame de animação avança o ciclo e cada mudança na entrada do usuário é capturada no primeiro turno disponível. Este modelo _uma vez por frame_ é implementado em algo chamado **loop principal.** Se o seu jogo é baseado em tempo, então essa será a autoridade a qual as suas simulações irão obedecer.

Mas o jogo pode não precisar de controle por frame. Seu game loop pode ser similar ao exemplo _encontre as diferenças_ e basear-se em eventos de entrada. Ele pode requerer ambos, entrada e tempo simulado. Ele pode até mesmo ter um ciclo baseado em algo totalmente diferente.

JavaScript Moderno — como descrito nas próximas seções — felizmente, facilita o desenvolvimento de um loop principal "execute uma vez por frame". É claro, seu jogo será somente tão otimizado quando o fizer. Se parece que algo deveria estar ligado a um evento menos frequente, seria uma boa ideia implementá-lo fora do loop principal (mas não sempre).

## Contruindo um loop principal em JavaScript

JavaScript trabalha melhor com eventos e chamadas de funções. Navegadores modernos esforçam-se para chamar métodos à medida que são necessários e ociosos (ou fazem suas outras tarefas) nos intervalos. É uma excelente ideia ligar seu código aos momentos apropriados a eles. Pense se a sua função realmente precisa ser chamada em um estrito intervalo de tempo, a cada frame, ou somente após algo acontecer. Ser mais específico com o navegador sobre quando a sua função precisa ser chamada permite que o navegador otimize essa chamada. Além disso, isso facilitará o seu trabalho.

Alguns códigos precisam ser rodados frame por frame, então por quê ligar essas funções a qualquer coisa que não seja a atualização de tela do navegador? Na web, {{ domxref("window.requestAnimationFrame()") }} será a base da maioria dos mais bem programados loops principais do tipo frame por frame. Uma chamada de função deve ser passada dentro da função anterior quando a mesma for chamada. Esta chamada de função será executada em um tempo adequado antes da próxima atualização de tela. Eis um exemplo de um loop principal simples:

```
window.main = function () {
  window.requestAnimationFrame( main );

  // Whatever your main loop needs to do.
};

main(); //Start the cycle.
```

**Nota**: Em cada método do `main()` discutido aqui, nós agendamos uma nova requisição `requestAnimationFrame` antes de executar o conteúdo de nosso loop. Isso não é por acidente, e é considerado boa prática. Chamando o próximo `requestAnimationFrame` anteriormente garante que o navegador receba a chamada a tempo de planejar adequadamente, mesmo que seu frame atual falhe em sua (?VSync window?).

O trecho de código acima possui duas declarações. A primeira cria uma função como uma variável global chamada `main()`. Esta função faz algum trabalho e também diz ao navegador para camá-la na próxima frame com `window.requestAnimationFrame()`. A segunda declaração chama a função `main()`, definida na primeira declaração. Pelo fato do `main()` ser chamado uma vez na segunda declaração e cada chamada dele colocá-lo na lista de coisas a fazer na próxima frame, `main()` é sincronizado com a sua taxa de frame.

É claro que esse loop não é perfeito. Antes de discutirmos maneiras de mudá-lo, vamos discutir o que ele já faz bem.

Cronometrando o loop principal para quando o navegador atualiza a tela o permite rodar o seu loop tão frequentemente quanto o navegador queira atualizar. Você tem controle sobre cada frame de animação. Isso é muito simples por que `main()` é a única função em loop. Um jogo de primeira pessoa (ou um jogo similar) apresenta uma nova cena a cada frame. Você realmente não pode ser mais suave e responsivo do que isso.

Mas não assuma imediatamente que animações requerem controle frame por frame. Animações simples podem ser facilmente desenvolvidas até mesmo com aceleração-GPU, com animações CSS e com outras ferramentas inclusas no navegador. Existem muitas delas que farão sua vida mais fácil.

## Construindo um loop principal _melhor_ em Javascript

Existem dois problemas óbvios com nosso loop principal anterior: `main()` polui o objeto `{{ domxref("window") }}` (onde todas as variáveis globais são armazenadas) e o código de exemplo não nos permite _parar_ o loop a menos que toda a aba seja fechada ou atualizada. Para o primeiro problema, se você quer que o loop principal apenas rode sem precisar de fácil acesso (direto) a ele, você pode criá-lo como uma Função Diretamente Invocada (Immediately-Invoked Function Expression - IIFE).

```
/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*/

;(function () {
  function main() {
    window.requestAnimationFrame( main );

    // Your main loop contents.
  }

  main(); // Start the cycle
})();
```

Quando o browser alcançar este IIFE, ele irá definir o seu próprio loop principal e imediatamente agenda-o para para o próximo frame. Ele não será anexado a nenhum objeto e `main` (ou `main()` para métodos) será um nome válido sem uso no resto da aplicação, livre para ser definido como outra coisa.

Nota: Na prática, é mais comum previnir o próximo `requestAnimationFrame()` com uma declaração `if`, no lugar de chamar `cancelAnimationFrame()`.

Para o próximo problema, parando o loop principal, você precisará cancelar a chamada a `main()` com `window.cancelAnimationFrame()`. Você precisará passar para `cancelAnimationFrame()` o token do ID dado pelo `requestAnimationFrame()` quando ele foi chamado. Vamos assumir que as funções do seu jogo e variáveis estão construídas em um namespace que você chamou de `MyGame`. Expandindo o nosso último exemplo, o loop principal ficaria parecido com isto:

```
/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*
* Let us also assume that MyGame is previously defined.
*/

;(function () {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame( main );

    // Your main loop contents.
  }

  main(); // Start the cycle
})();
```

Nós temos agora uma variável declarada no namespace do nosso `MyGame`, que chamamos de `stopMain`, e que contém o ID retornado pela execução mais recente do `requestAnimationFrame()` do nosso loop principal. Em algum ponto, nós podemos parar o loop principal pedindo ao browser para cancelar a requisição que corresponde ao nosso token.

```
window.cancelAnimationFrame( MyGame.stopMain );
```

A chave para programar um loop principal, no JavaScript, é anexá-lo a qualquer evento que deve estar dirigindo sua ação e prestar atenção a como os diferentes sistemas envolvidos interagem entre si. Você poderá ter múltiplos componentes dirigidos por múltiplos diferentes tipos de eventos. Isto parece complexidade desnecessária mas pode ser só uma boa otimização (não necessária, é claro). O problema é que você não está programando um loop principal típico. No JavaScript, você está usando o loop principal do browser e está tentando fazê-lo efetivamente.

## Construindo um loop principal mais _otimizado_ no JavaScript

Finalmente, no JavaScript, o browser está rodando o seu loop principal e o seu código existe em algum de seus estágios. As seções acima descrevem loops principais que tentam não eliminar o controle do navegador. Esses métodos principais anexam eles mesmos ao `window.requestAnimationFrame()`, que pergunta ao browser por controle sobre o próximo frame. É responsabilidade do browser saber como relacionar esses requests ao loop principal. A [especificação da W3C para o requestAnimationFrame](https://www.w3.org/TR/animation-timing/) não define realmente quando os browsers tem que executar os callbacks do requestAnimationFrame. Isto pode ser uma vantagem por que os fornecedores de browsers podem ter a liberdade de experimentar com as soluções que sintam que seja melhor e podem modifica-la com o passar do tempo.

Versões modernas do Firefox e Google Chrome (e provavelmente outros) tentam conectar os callbacks do `requestAnimationFramea` a sua thread principal no primeiro intervalo de tempo de um frame. A thread principal portanto tenta fazer o seguinte:

1. Começar uma nova frame (enquanto a anterior é tratada pela exibição).
2. Go through the list of `requestAnimationFrame` callbacks and invoke them.
3. Perform garbage collection and other per-frame tasks when the above callbacks stop controlling the main thread.
4. Sleep (unless an event interrupts the browser's nap) until the monitor is ready for your image ([VSync](http://www.techopedia.com/definition/92/vertical-sync-vsync)) and repeat.

Modern versions of Firefox and Google Chrome (and probably others) _attempt_ to connect `requestAnimationFrame` callbacks to their main thread at the very beginning of a frame's timeslice. The browser's main thread thus _tries_ to look like the following:

1. Start a new frame (while the previous frame is handled by the display).
2. Go through the list of `requestAnimationFrame` callbacks and invoke them.
3. Perform garbage collection and other per-frame tasks when the above callbacks stop controlling the main thread.
4. Sleep (unless an event interrupts the browser's nap) until the monitor is ready for your image ([VSync](http://www.techopedia.com/definition/92/vertical-sync-vsync)) and repeat.

You can think about developing realtime applications as having a budget of time to do work. All of the above steps must take place every 16-and-a-half milliseconds to keep up with a 60 Hz display. Browsers invoke your code as early as possible to give it maximum computation time. Your main thread will often start workloads that are not even on the main thread (such as rasterization or shaders in WebGL). Long calculations can be performed on a Web Worker or a GPU at the same time as the browser uses its main thread to manage garbage collection, its other tasks, or handle asynchronous events.

While we are on the topic of budgeting time, many web browsers have a tool called _High Resolution Time_. The {{ domxref("Date") }} object is no longer the recognised method for timing events because it is very imprecise and can be modified by the system clock. High Resolution Time, on the other hand, counts the number of milliseconds since `navigationStart` (when the previous document is unloaded). This value is returned as a decimal number accurate to a thousandth of a millisecond. It is known as a `{{ domxref("DOMHighResTimeStamp") }}` but, for all intents and purposes, consider it a floating point number.

**Note**: Systems (hardware or software) that are not capable of microsecond accuracy are allowed to provide millisecond accuracy as a minimum. They should provide 0.001ms accuracy if they are capable of it, however.

This value is not too useful alone, since it is relative to a fairly uninteresting event, but it can be subtracted from another timestamp to accurately and precisely determine how much time elapsed between those two points. To acquire one of these timestamps, you can call `window.performance.now()` and store the result as a variable.

```
var tNow = window.performance.now();
```

Back to the topic of the main loop. You will often want to know when your main function was invoked. Because this is common, `window.requestAnimationFrame()` always provides a `DOMHighResTimeStamp` to callbacks as an argument when they are executed. This leads to another enhancement to our previous main loops.

```
/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*
* Let us also assume that MyGame is previously defined.
*/

;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );

    // Your main loop contents.
    // tFrame, from "function main ( tFrame )", is now a DOMHighResTimeStamp provided by rAF.
  }

  main(); // Start the cycle
})();
```

Several other optimizations are possible and it really depends on what your game attempts to accomplish. Your game genre will obviously make a difference but it could even be more subtle than that. You could draw every pixel individually on a canvas or you could layer DOM elements (including multiple WebGL canvases with transparent backgrounds if you want) into a complex hierarchy. Each of these paths will lead to different opportunities and constraints.

## It is decision... time

You will need to make hard decisions about your main loop: how to simulate the accurate progress of time. If you demand per-frame control then you will need to determine how frequently your game will update and draw. You might even want update and draw to occur at different rates. You will also need to consider how gracefully your game will fail if the user's system cannot keep up with the workload. Let us start by assuming that you will handle user input and update the game state every time you draw. We will branch out later.

_**Note**:_ Changing how your main loop deals with time is a debugging nightmare, everywhere. Think about your needs, carefully, before working on your main loop.

### What most browser games should look like

If your game can hit the maximum refresh rate of any hardware you support then your job is fairly easy. You can simply update, render, and then do nothing until VSync.

```
/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*
* Let us also assume that MyGame is previously defined.
*/

;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );

    update( tFrame ); //Call your update method. In our case, we give it rAF's timestamp.
    render();
  }

  main(); // Start the cycle
})();
```

If the maximum refresh rate cannot be reached, quality settings could be adjusted to stay under your time budget. The most famous example of this concept is the game from id Software, RAGE. This game removed control from the user in order to keep its calculation time at roughly 16ms (or roughly 60fps). If computation took too long then rendered resolution would decrease, textures and other assets would fail to load or draw, and so forth. This (non-web) case study made a few assumptions and tradeoffs:

- Each frame of animation accounts for user input.
- No frame needs to be extrapolated (guessed) because each draw has its own update.
- Simulation systems can basically assume that each full update is \~16ms apart.
- Giving the user control over quality settings would be a nightmare.
- Different monitors input at different rates: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Systems that are unable to keep up with 60 FPS lose visual quality to keep the game running at optimal speed (eventually it outright fails, if quality becomes too low.)

### Other ways to handle variable refresh rate needs

Other methods of tackling the problem exist.

One common technique is to update the simulation at a constant frequency and then draw as much (or as little) of the actual frames as possible. The update method can continue looping without care about what the user sees. The draw method can view the last update and when it happened. Since draw knows when it represents, and the simulation time for the last update, it can predict a plausible frame to draw for the user. It does not matter whether this is more frequent than the official update loop (or even less frequent). The update method sets checkpoints and, as frequently as the system allows, the render method draws instants of time around them. There are many ways to separate the update method in web standards:

- Draw on `requestAnimationFrame` and update on a {{ domxref("window.setInterval") }} or {{ domxref("window.setTimeout") }}.

  - This uses processor time even when unfocused or minimized, hogs the main thread, and is probably an artifact of traditional game loops (but it is simple.)

- Draw on `requestAnimationFrame` and update on a `setInterval` or `setTimeout` in a [Web Worker](/pt-BR/docs/Web/API/Web_Workers_API/Using_web_workers).

  - This is the same as above, except update does not hog the main thread (nor does the main thread hog it). This is a more complex solution, and might be too much overhead for simple updates.

- Draw on `requestAnimationFrame` and use it to poke a Web Worker containing the update method with the number of ticks to compute, if any.

  - This sleeps until `requestAnimationFrame` is called and does not pollute the main thread, plus you are not relying on old fashioned methods. Again, this is a bit more complex than the previous two options, and _starting_ each update will be blocked until the browser decides to fire rAF callbacks.

Each of these methods have similar tradeoffs:

- Users can skip rendering frames or interpolate extra ones depending on their performance.
- You can count on all users updating non-cosmetic variables at the same constant frequency minus hiccups.
- Much more complicated to program than the basic loops we saw earlier.
- User input is completely ignored until the next update (even if the user has a fast device).
- The mandatory interpolation has a performance penalty.

A separate update and draw method could look like the following example. For the sake of demonstration, the example is based on the third bullet point, just without using Web Workers for readability (and, let's be honest, writeability).

_Note: This example, specifically, is in need of technical review\._

```
/*
* Starting with the semicolon is in case whatever line of code above this example
* relied on automatic semicolon insertion (ASI). The browser could accidentally
* think this whole example continues from the previous line. The leading semicolon
* marks the beginning of our new line if the previous one was not empty or terminated.
*
* Let us also assume that MyGame is previously defined.
*
* MyGame.lastRender keeps track of the last provided requestAnimationFrame timestamp.
* MyGame.lastTick keeps track of the last update time. Always increments by tickLength.
* MyGame.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
*
* timeSinceTick is the time between requestAnimationFrame callback and last update.
* numTicks is how many updates should have happened between these two rendered frames.
*
* render() is passed tFrame because it is assumed that the render method will calculate
*          how long it has been since the most recently passed update tick for
*          extrapolation (purely cosmetic for fast devices). It draws the scene.
*
* update() calculates the game state as of a given point in time. It should always
*          increment by tickLength. It is the authority for game state. It is passed
*          the DOMHighResTimeStamp for the time it represents (which, again, is always
*          last update + MyGame.tickLength unless a pause feature is added, etc.)
*
* setInitialState() Performs whatever tasks are leftover before the mainloop must run.
*                   It is just a generic example function that you might have added.
*/

;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );
    var nextTick = MyGame.lastTick + MyGame.tickLength;
    var numTicks = 0;

    //If tFrame < nextTick then 0 ticks need to be updated (0 is default for numTicks).
    //If tFrame = nextTick then 1 tick needs to be updated (and so forth).
    //Note: As we mention in summary, you should keep track of how large numTicks is.
    //If it is large, then either your game was asleep, or the machine cannot keep up.
    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor( timeSinceTick / MyGame.tickLength );
    }

    queueUpdates( numTicks );
    render( tFrame );
    MyGame.lastRender = tFrame;
  }

  function queueUpdates( numTicks ) {
    for(var i=0; i < numTicks; i++) {
      MyGame.lastTick = MyGame.lastTick + MyGame.tickLength; //Now lastTick is this tick.
      update( MyGame.lastTick );
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; //Pretend the first draw was on first update.
  MyGame.tickLength = 50; //This sets your simulation to run at 20Hz (50ms)

  setInitialState();
  main(performance.now()); // Start the cycle
})();
```

Another alternative is to simply do certain things less often. If a portion of your update loop is difficult to compute but insensitive to time, you might consider scaling back its frequency and, ideally, spreading it out into chunks throughout that lengthened period. An implicit example of this is found over at The Artillery Blog for Artillery Games, where they [adjust their rate of garbage generation](http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) to optimize garbage collection. Obviously, cleaning up resources is not time sensitive (especially if tidying is more disruptive than the garbage itself).

This may also apply to some of your own tasks. Those are good candidates to throttle when available resources become a concern.

## Summary

I want to be clear that any of the above, or none of them, could be best for your game. The correct decision entirely depends on the trade-offs that you are willing (and unwilling) to make. The concern is mostly with switching to another option. Fortunately, I do not have any experience with this but I have heard it is an excruciating game of Whack-a-Mole.

An important thing to remember for managed platforms, like the web, is that your loop may stop execution for significant periods of time. This could occur when the user unselects your tab and the browser sleeps (or slows) its `requestAnimationFrame` callback interval. You have many ways to deal with this situation and this could depend on whether your game is single player or multiplayer. Some choices are:

- Consider the gap "a pause" and skip the time.

  - You can probably see how this is problematic for most multiplayer games.

- You can simulate the gap to catch up.

  - This can be a problem for long drops and/or complex updates.

- You can recover the game state from a peer or the server.

  - This is ineffective if your peers or server are out-of-date too, or they don't exist because the game is single player and doesn't have a server.

Once your main loop has been developed and you have decided on a set of assumptions and tradeoffs which suit your game, it is now just a matter of using your decisions to calculate any applicable physics, AI, sounds, network synchronization, and whatever else your game may require.
