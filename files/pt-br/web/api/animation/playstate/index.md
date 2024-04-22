---
title: Animation.playState
slug: Web/API/Animation/playState
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

A propriedade **`Animation.playState`** do [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API) retorna e altera um valor enumerado que descreve o estado de reprodução da animação.

> **Nota:** Essa propriedade é apenas de leitura para Animações CSS e Transições.

## Sintaxe

```
var estadoAtualDaReproducao = Animation.playState;

Animation.playState =novoEstado;
```

### Valor

- `idle`
  - : O tempo atual da animação não está acertado e não há tarefas pendentes.
- `pending`
  - : A animação está aguardando a realização de algumas tarefas para ser completada.
- `running`
  - : A animação está rodando.
- `paused`
  - : A animação está parada e a propriedade {{domxref("Animation.currentTime")}} não está sendo atualizada.
- `finished`
  - : A animação alcançou um de seus finais e a propriedade {{domxref("Animation.currentTime")}} não está sendo atualizada.

## Exemplo

No [jogo](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) [Growing/Shrinking Alice Game](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) , os jogadores podem chegar ao final com a [Alice chorando em uma poça de lágrimas](http://codepen.io/rachelnabors/pen/EPJdJx?editors=0010). No jogo, por razões de performance, as lágrimas só são animadas quando estão visiveis. Então elas devem ficar pausadas enquanto a animação ocorre, como no exemplo:

```js
// Configurando a animação das lágrimas

tears.forEach(function (el) {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // aleatório para cada lágrima
    duration: getRandomMsRange(2000, 6000), // aleatório para cada lágrima
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.playState = "paused";
});

// Rodar as lágrimas caindo quando o final precisa aparecer.

tears.forEach(function (el) {
  el.playState = "playing";
});

// Reseta a animação e coloca o estado em pause.

tears.forEach(function (el) {
  el.playState = "paused";
  el.currentTime = 0;
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} para outros métodos e propriedades que você pode usar para controlar a animação da página web.
- Os métodos {{domxref("Animation.play()")}}, {{domxref("Animation.pause()")}}, {{domxref("Animation.finish()")}} conseguem alterar o `Animation`'s `playState`.
