---
title: window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}
O método **`window.requestAnimationFrame()`** fala para o navegador que deseja-se realizar uma animação e pede que o navegador chame uma função específica para atualizar um quadro de animação antes da próxima repaint (repintura). O método tem como argumento uma callback que deve ser invocado antes da repaint.

> **Nota:**A rotina callback deve chamar `requestAnimationFrame()` se quiser animar outro quadro na próxima repaint.

Deve-se chamar esse método sempre que estiver pronto para atualizar a animação na tela. Isso irá requisitar que a função de animação seja chamada antes que o navegador realize a próxima repaint. O número de callbacks é normalmente 60 por segundo, mas geralmente acompanha a taxa de atualização do display na maioria dos navegadores, como recomenda a W3C. A taxa de callbacks é reduzida quando executados em aba de fundo ou em {{ HTMLElement("iframe") }} escondidos para melhorar performance e vida de bateria.

Um único argumento é passado para o método callback, um {{domxref("DOMHighResTimeStamp")}}, que indica o tempo atual no qual callbacks enfileiradas por `requestAnimationFrame` começam a disparar. Múltiplos callbacks em um único quadro, assim, cada um recebe o mesmo carimbo de data/hora . Esse carimbo de data/hora é um número decimal, em milisegundos, mas com precisão mínima de 1ms (1000 µs).

## Sintaxe

```
window.requestAnimationFrame(callback);
```

### Parâmetros

- `callback`
  - : Parâmetro especificando uma função a ser chamada quando chegar a hora de atualizar a animação para a próxima repaint. O callback possui um único argumento, um {{domxref("DOMHighResTimeStamp")}}, que indica a hora atual (a hora retornada de {{domxref('Performance.now()')}} ) para quando `requestAnimationFrame` começar a disparar callbacks.

### Valor de retorno

Um valor inteiro `long`, a id da requisição, que identifica unicamente a entrada na lista de callbacks. Esse é um valor não-zero, mas não deve-se assumir mais nada sobre esse valor. Esse valor pode ser passado para {{domxref("window.cancelAnimationFrame()")}} para cancelar a requisição da atualização do callback.

## Exemplo

```js
var start = null;
var element = document.getElementById("ElementoQueVcQuerAnimar");
element.style.position = "absolute";

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Window.mozAnimationStartTime")}}
- {{domxref("Window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html) - Post do blog
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - Post do blog
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Post do blog
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1](http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx) - Post do blog
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](http://www.testufo.com/#test=animation-time-graph)
- Paul Irish: [requestAnimationFrame for Smart Animating](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
- Paul Irish: [requestAnimationFrame API: now with sub-millisecond precision](http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision)
