---
title: Usando a Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

A Web Animations API nos possibilita criar animações e controlar sua reprodução pelo JavaScript. Esse artigo vai te demonstrar esses conceitos com demonstrações e tutoriais com o temática de Alice no País das Maravilhas.

## Conhecendo a Web Animations API

A [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API) abre a engine de animação do browser para os desenvolvedores manipularem via JavaScript. Esta API foi construída para se basear nas implementações das [Animações CSS](/pt-BR/docs/Web/CSS/CSS_Animations) e [Transições CSS](/pt-BR/docs/Web/CSS/CSS_Transitions), e deixam a porta aberta para futuros efeitos de animação. É um dos métodos mais performáticos para se animar na Web, permitindo que o browser faça internamente suas próprias otimizações, sem precisar depender de hacks, coerções ou {{domxref("Window.requestAnimationFrame()")}}.

Com a Web Animations API, podemos transferir as animações interativas das folhas de estilo para o JavaScript, separando comportamento de apresentação. Não vamos precisar mais depender de técnicas muito dependentes do DOM como propriedades do CSS e escopo de classes para controlar a direção da reprodução. E diferente de CSS puro e declarativo, JavaScript também te possibilita definir dinâmicamente valores: de propriedades à duração. Para criar bibilotecas de animação à criar animações interativas, a Web Animations API pode ser a ferramenta perfeita para o trabalho. Vamos ver o que ela pode fazer!

## Suporte de Navegadores

O suporte básico para as funcionalidades da Web Animations API discutidas neste artigo estão disponíveis no Firefox 48+, Chrome 36+ e Safari 13.1+. Também existe um [polyfill prático](https://github.com/web-animations/web-animations-js) que verifica o suporte e adiciona as funcionalidades onde for necessário.

## Escrevendo Animações CSS com a Web Animations API

Uma das maneiras mais familiares de abordar a Web Animations API é começar com algo que boa parte dos desenvolvedores web já utilizaram antes: Animações CSS. Animações CSS tem uma sintaxe familiar que funciona bem para nossa demonstração.

### A versão CSS

Aqui temos uma animação escrita com CSS mostrando Alice caindo no buraco de coelho que leva ao País das Maravilhas (veja o [código completo no Codepen](http://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](http://codepen.io/rachelnabors/pen/rxpmJL)

Perceba que o fundo se mexe, a Alice gira e sua cor muda em sincronia com o giro. Nós vamos focar somente na Alice para este tutorial. Segue a versão simplificada do CSS que controla a animação da Alice:

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

Isso muda a cor da Alice e a rotação do `transform` por 3 segundos em um ritmo constante (linear) e se repete infinitamente. No bloco do [@keyframes](/pt-BR/docs/Web/CSS/@keyframes) podemos ver que em 30% de cada repetição (por volta dos 900ms), a cor da Alice muda de preto para um vinho, e volta para o preto no final do loop.

### Mudando para o JavaScript

Agora vamos tentar criar a mesma animação usando a Web Animations API.

#### Representando keyframes

A primeira coisa que precisamos fazer é criar um [Objeto Keyframe](/pt-BR/docs/Web/API/Web_Animations_API/Keyframe_Formats) correspondente ao nosso bloco [@keyframes](/pt-BR/docs/Web/CSS/@keyframes) do CSS:

```js
var aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Aqui estávamos utilizando uma array contendo múltiplos objetos. Cada objeto representa uma chave do CSS original. Contudo, diferente do CSS, a Web Animations API não precisa informar explicitamente as porcentagens temporais para cada chave, o JS automaticamente divide a animação em partes iguais baseado no número de chaves que você forneceu. Isso significa que um objeto Keyframe com três chaves vai reproduzir a chave do meio em 50% do tempo de cada loop, exceto se for definido o contrário.

Quando queremos explicitamente definir um timing diferente para essas outras chaves, podemos especificar um offset diretamente no objeto, separado do resto da declaração por uma vírgula. No exemplo acima, para definir que a cor da Alice muda em 30% do tempo (e não 50%), nós definiremos como `offset: 0.3`.

Atualmente, devem ser definidos pelo menos dois keyframes (representando o início e fim de estado das sequências de animação). Se a sua lista de keyframes somente tem uma entrada, {{domxref("Element.animate()")}} pode disparar uma exceção `NotSupportedErro` em alguns browsers até eles serem atualizados.

Então recapitulando: as chaves são espaçadas igualmente por padrão, exceto se você definir um offset para uma chave. Útil, não?

#### Representando propriedades temporais

Nós precisamos criar também um objeto de propriedades temporais (um objeto {{domxref("AnimationEffectTimingProperties")}}) correspondente aos valores da animação da Alice:

```js
var aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Você pode notar algumas diferenças aqui comparando com os valores equivalentes representados no CSS:

- A propriedade `duration` está em milisegundos (`3000`, não `3s`). Assim como {{domxref("WindowTimers.setTimeout()")}} e {{domxref("Window.requestAnimationFrame()")}}, a Web Animations API somente aceita millisegundos.
- A outra diferença é o uso de `iterations` no lugar de `iteration-count`.

> **Nota:** Existem algumas pequenas diferenças de terminologia entre o CSS Animations e o Web Animations. Por exemplo, Web Animations não usa a string `"infinite"`, e sim a keyword JavaScript `Infinity`. E no lugar de `timing-function`, usamos `easing`. Não estamos citando um valor de `easing` aqui pois, diferente das Animações CSS onde o valor padrão do [animation-timing-function](/pt-BR/docs/Web/CSS/animation-timing-function) é `ease`, na Web Animations API o padrão é `linear` — o que nós já queremos para a animação da Alice.

#### Juntando as peças

Agora vamos juntar o que já fizemos com o método {{domxref("Element.animate()")}}:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

E pronto: a animação começa a tocar (veja a [versão final no Codepen](http://codepen.io/rachelnabors/pen/rxpmJL)).

O método `animate()` pode ser chamado em qualquer elemento do DOM que pode ser animado com CSS. E pode ser escrito de algumas maneiras. Ao invés de criar objetos para os keyframes e propriedades temporais, podemos passar seus valores diretamentes, tipo:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

E se nós precisarmos somente especificar a duração da animação e não suas iterações (por padrão, a animação roda uma ), podemos passar só os milisegundos após o array:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

## Controlando a reprodução com play(), pause(), reverse() e updatePlaybackRate()

Por mais que possamos escrever Animações CSS utilizando a Web Animations API, a API realmente mostra seu potencial quando precisamos manipular a reprodução da animação. A Web Animations API fornece vários métodos úteis para controlar a reprodução. Vamos dar uma olhada em como pausar e tocar animações no jogo da Alice Crescendo/Encolhendo (confira o [código completo no Codepen](http://codepen.io/rachelnabors/pen/PNYGZQ)):

[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

Nesse jogo, Alice tem uma animação que a encolhe ou aumenta seu tamanho, que controlamos por uma garrafa e um cupcake. Cada um tem sua própria animação.

### Pausando e tocando animações

Vamos falar sobre a animação da Alice depois, mas por enquanto, vamos dissecar esta animação do cupcake.

```js
var nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );
```

O método {{domxref("Element.animate()")}} vai rodar imediatamente depois de ser chamado. Para evitar que o bolinho se coma sozinho antes da interação do usuário, chamamos o {{domxref("Animation.pause()")}} imediatamente depois de criar a animação:

```js
nommingCake.pause();
```

Agora nós podemos usar o método {{domxref("Animation.play()")}} para rodar assim que for o momento:

```js
nommingCake.play();
```

Especificamente, nós queremos linka-lo à animação da Alice, para ela crescer assim que o cupcake é mordido. Podemos fazer isso com a seguinte função:

```js
var growAlice = function () {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Quando o usuário clicar ou pressionar seu dedo no bolinho em uma tela de toque, podemos chamar a função `growAlice` para fazer todas as animações tocarem:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Outros métodos úteis

- {{domxref("Animation.finish()")}} pula para o final da animação.
- {{domxref("Animation.cancel()")}} aborta a animação e cancela seus efeitos.
- {{domxref("Animation.reverse()")}} define o ({{domxref("Animation.playbackRate")}}) para um valor negativo, então roda ao contrário

Vamos dar uma olhada primeiro no método `playbackRate` — um valor negativo vai fazer a animação tocar ao contrário. Quando Alice bebe da garrafa, ela encolhe. Isso porque a garrafa muda o `playbackRate` da animação de 1 para -1:

```js
var shrinkAlice = function () {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Em [Alice Através do Espelho](https://en.wikipedia.org/wiki/Through_the_Looking-Glass), Alice viaja para um mundo onde ela deve correr para se manter no lugar — e correr com o dobro de velocidade para avançar! No exemplo da Corrida da Rainha Vermelha, Alice e a Rainha Vermelha estão correndo para se manter no lugar (veja o [código completo no Codepen](http://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice and the Red Queen race to get to the next square in this game.](red-queen-race_optimized.gif)](http://codepen.io/rachelnabors/pen/PNGGaV)

Já que crianças pequenas se cansam facilmente, diferente de peças de xadrez autônomas, Alice está constantemente desacelerando. Nós podemos fazer isso definindo uma queda no `playbackRate` da animação dela. Usamos o `updatePlaybackRate()` no lugar de definir manualmente o playbackRate, já que isso produz uma atualização mais suave:

```js
setInterval(function () {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Mas impulsioná-las clicando ou tocando na tela aumenta a velocidade delas por multiplicar o playbackRate:

```js
var goFaster = function () {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Os elementos do fundo também tem `playbackRate`s que também são afetados pelo clique ou toque na tela. O que acontece quando você faz Alice e a Rainha Vermelha correrem com o dobro da velocidade? O que acontece quando você as deixa desacelerar?

## Extraindo informação das animações

Imagine outras maneiras de utilizar o playbackRate, como melhorar a acessibilidade para usuários com disfunções vestibulares permitindo que eles desacelerem as animações do site todo. Isso é impossível de fazer via CSS sem recalcular todas as regras, mas com a Web Animations API, podemos utilizar o método {{domxref("document.getAnimations()")}} para iterar todas animações de uma página e dividir pela metade seu `playbackRate`, como por exemplo:

```js
document.getAnimations().forEach(function (animation) {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Com a Web Animations API, você só precisa mudar uma simples propriedade!

Outra coisa que é difícil de fazer somente com Animações CSS é criar dependências de valores fornecidos por outras animações. Por exemplo, no logo Aumentando e Encolhendo Alice, você pode ter notado algo estranho sobre a duração do bolinho:

```js
duration: aliceChange.effect.getComputedTiming().duration / 2;
```

Para entender o que está acontecendo, vamos dar uma olhada na animação da Alice:

```js
var aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

A animação da Alice a fazia ir de metade de seu tamanho para o dobro em 8 segundos. Então nós a pausamos:

```js
aliceChange.pause();
```

Se pausassemos no início da animação, ela começaria com metade de seu tamanho original, como se já tivesse bebido a garrafa toda! Então nós precisamos definir o estado inicial da animação no meio. Podemos fazer isso definindo o {{domxref("Animation.currentTime")}} para 4 segundos, como no exemplo abaixo:

```js
aliceChange.currentTime = 4000;
```

Mas enquanto trabalhamos nessa animação, vamos mudar bastante a duração da Alice. Não seria melhor definir essa `currentTime` dinamicamente? Assim não precisariamos fazer duas atualizações de uma vez só. Podemos fazer isso referenciando a propriedade {{domxref("Animation.effect")}}, que retorna um objeto que contém todos os detalhes sobre o(s) efeito(s) ativos na Alice:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

O `effect` nos permite acessar os keyframes e propriedades temporais da animação — `aliceChange.effect.getComputedTiming()` aponta para o objeto timing da Alice (cujo tipo é {{domxref("ComputedEffectTiming")}}) — que contem o {{domxref("ComputedEffectTiming.duration")}} dela. Podemos dividir sua duração pela metade para definir a metade da animação para a linha do tempo da animação da Alice, assim ela começaria com o tamanho normal. Então nós podemos reverter e tocar a animação dela em qualquer direção para encolher ou aumentar seu tamanho!

E nós podemos fazer a mesma coisa quando definimos as durações da garrafa e do bolinho:

```js
var drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Agora todas as três animações estão ligadas por apenas um `duration`, que pode ser modificado facilmente em um só lugar do código.

Nós também podemos utilizar a Web Animations API para descobrir o quanto da linha do tempo já foi percorrido. O jogo acaba quando o seu bolinho acaba ou você esvazia a garrafa. A vinheta que é apresentada aos jogadores depende do quão longe a Alice estava em sua animação, seja ficando grande demais pra caber na portinha ou pequena demais pra não conseguir mais alcançar a chave para abrir a porta. Podemos descobrir se ela está nesses extremos pegando o `currentTime` da sua animação e dividir pelo `activeDuration`:

```js
var endGame = function() {

  // get Alice's timeline's playhead location
  var alicePlayhead = aliceChange.currentTime;
  var aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  var aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= .333){
    // Alice got smaller!
    ...

  } else if (aliceHeight >= .666) {
    // Alice got bigger!
    ...

  } else {
    // Alice didn't change significantly
    ...

  }
}
```

> **Nota:** `getAnimations()` e `effect` não estão disponíveis em todos os browsers no momento em que este artigo foi escrito, mas o polyfill possibilita utilizá-los agora.

## Callbacks e promises

Animações e Transições CSS tem seus event listeners próprios, que também são possíveis com a Web Animations API:

- [`onfinish`](/pt-BR/docs/Web/API/Animation/onfinish) é o manipulador de eventos para o evento `finish` e pode ser disparado manualmente com [`finish()`](/pt-BR/docs/Web/API/Animation/finish).
- [`oncancel`](/pt-BR/docs/Web/API/Animation/oncancel) é o manipulador de eventos para o evento `cancel` e pode ser disparado manualmente com [`cancel()`](/pt-BR/docs/Web/API/Animation/cancel).

Aqui nós definimos os callbacks para o bolinho, a garrafa e para Alice para disparar a função `endGame`:

```js
// When the cake or bottle runs out...
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// ...or Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Ainda melhor, a Web Animations API também fornece uma promise [`finished`](/pt-BR/docs/Web/API/Animation/finished) que será resolvida quando a animação é completada, e rejeitada se for cancelada.

## Conclusão

Essas são as funcionalidades básicas da Web Animations API, a maioria delas já estão sendo suportadas pelas últimas versões do Chrome, Firefox e Safari. Agora você está pronto pra "cair na toca do coelho" de animar utilizando o browser e pronto pra escrever e experimentar com sua própria animação! Se você está utilizando a API e deseja compartilha, tente usar a hashtag #WAAPI. Nós estaremos de olho e vamos escrever mais tutoriais para cobrir funcionalidades futuras assim que o suporte aumentar!

## Veja também

- A [coleção completa de demos de Alice no País das Maravilhas](http://codepen.io/collection/bpEza/) no CodePen para você brincar, compartilhar e editar
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (em inglês) — Um ótimo artigo para se ler que explica mais sobre a Web Animations API por baixo dos panos, e por que ela tem uma performance melhor do que os outros métodos de animação web
- [web-animations-js](https://github.com/web-animations/web-animations-js) — O polyfill da Web Animations API
