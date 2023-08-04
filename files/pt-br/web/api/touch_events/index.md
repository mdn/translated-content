---
title: Eventos do Toque
slug: Web/API/Touch_events
---

Com a finalidade de fornecer suporte de qualidade para interfaces baseadas em toque (touch), os eventos de touch oferecem a capacidade de interpretar a atividade em telas sensíveis ao toque ou trackpads.

## Definições

- Surface
  - : A superfície sensível ao toque. Pode ser uma tela ou trackpad.
- Touch point
  - : Um ponto de contato com a superfície. Pode ser um dedo (ou cotovelo, orelha, nariz, o que seja, mas provavelmente, um dedo) ou uma caneta.

## Interfaces

- {{ domxref("TouchEvent") }}
  - : Representa um evento quando ocorre o estado de toque na superfície.
- {{ domxref("Touch") }}
  - : Representa um único ponto de contato entre o usuário e a superfície sensível a toque.
- {{ domxref("TouchList") }}
  - : Representa um grupo de toques, isto é usado quando usuário tem por exemplo, vários dedos ao mesmo tempo sobre a superfície.
- {{ domxref("DocumentTouch") }}
  - : Contém métodos de conveniência para criar {{ domxref("Touch") }} e objetos {{ domxref("TouchList") }} .

## Exemplo

Este exemplo acompanha múltiplos pontos de contato de cada vez, permitindo o usuário desenhe em um {{ HTMLElement("canvas") }} com mais de um dedo por vez. Ele só funcionará em um browser que tenha suporte a eventos de toque.

> **Nota:** O texto a seguir utiliza o termo "finger" quando descreve o contato com a superfície, mas poderia, é claro, ser também uma caneta ou outro método de contato.

### Crie um canvas

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Seu browser não tem suporte ao elemento canvas.
</canvas>
<br />
<button onclick="startup()">Initialize</button>
<br />
Log:
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

### Configurado os eventos

Quando uma página é carregada, a função `startup()` mostrada abaixo deve ser chamada pelo nosso elemento {{ HTMLElement("body") }} através do atributo `onload` (Mas no exemplo usamos um botão para adicioná-lo, devido as limitações do MDN live example system).

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleEnd, false);
  el.addEventListener("touchmove", handleMove, false);
  log("initialized.");
}
```

Define simplesmento todos os ouvintes dos eventos do nosso elemento {{ HTMLElement("canvas") }} para que possamos trabalhar com os eventos de toque quando eles ocorrerem.

#### Rastreando novos toques

Vamos acompanhar os toques em seu progresso.

```js
var ongoingTouches = new Array();
```

Quando ocorre um evento `touchstart`, indicando que um novo toque na superfície tenha ocorrido, a função abaixo `handleStart()` é chamada.

```js
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:" + i + ".");
  }
}
```

A chamada {{ domxref("event.preventDefault()") }} mantem o browser a processa o evento de toque ( isso também previne que um mouse event seja despachado). Então, temos o contexto e puxamos a lista de pontos de contato disparados noa propriedade do evento {{ domxref("TouchEvent.changedTouches") }}.

Depois disso, nós iteramos sobre todos os objetos {{ domxref("Touch") }} da lista e os adicionamos em um array de pontos de contatos ativos e definimos o ponto inicial para desenhar um pequeno circulo; estamos usando um raio de 4 pixels, então um círculo de 4 pixels irá aparecer em nosso canvas.

#### Desenhando movimento do toque

Cada vez que um ou mais dedos se movem, um evento de TouchMove é disparado, assim chamando nossa função handleMove(). A sua responsabilidade neste exemplo é atualizar as informações armazenadas e desenhar uma linha a partir da posição anterior para a atual de cada toque.

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log("continuing touch " + idx);
      ctx.beginPath();
      log(
        "ctx.moveTo(" +
          ongoingTouches[idx].pageX +
          ", " +
          ongoingTouches[idx].pageY +
          ");",
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
      log(".");
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
```

Esta interação sobre os toques também muda, mas parece em cache as informações em um array para cada toque anterior, a fim de determinar um pont de partida e o destino para o desenho do trajeto. Isto é feito para olhar cada touch da propriedade {{ domxref("Touch.identifier") }}. Esta propriedade é um número inteiro único para cada toque, e mantém-se consistente para cada evento durante o tempo de contato de cada dedo como a superfície.

Isto permite obter as coordenadas da posição anterior de cada contato e usar os métodos de contexto apropriado para desenhar uma linha que une as duas posições.

Depois de desenhar a linha, nós chamamos [`Array.splice()`](/pt-BR/JavaScript/Reference/Global_Objects/Array/splice) para substituir as informações previas sobre o ponto de toque com a informação atual no array `ongoingTouches`.

#### Gerenciando o final do evento de toque

Quando o usuário retira o dedo da superfície , um evento `touchend` é disparado. Da mesma forma, se o dedo deslisa para fora do canvas, nós teremos um evento `touchleave` disparado. Nós tratamos da mesma forma em ambos os casos: chamamos a função `handleEnd()`. A sua missão é desenhar uma linha para o final do ponto de toque e remover o ponto de toque da lista ongoing.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend/touchleave.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
      ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    }
  }
}
```

Isto é muito semelhante a função anterior, as únicas diferenças reais são o desenho de um pequeno quadrado para marcar o fim e quando chamamos [`Array.splice()`](/pt-BR/JavaScript/Reference/Global_Objects/Array/splice), nós simplesmente removemos a antiga entrada da lista de toque do ongoing, sem adição das informações atualizadas. O resultado é que paramos o tracking do ponto de contato.

#### Tratando toques cancelados

Se o dedo do usuário deslisa em uma UI de um navegador, ou o toque de outra forma precisa ser cancelado, o evento touchcancel é disparado e nos chamamaos a função `handleCancel()`.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    ongoingTouches.splice(i, 1); // remove it; we're done
  }
}
```

Uma vez que a idéia dé cancelar imediatamento o toque, nós simplesmente removemos da lista de ongoing sem desenhar uma linha final.

### Funções de conveniência

Este exemplo usa duas funções de conveniência que deve ser olhado rapidamente para ajudar a fazer o resto do código mais claro

#### Selecionando a cor para cada toque

A fim de fazer cada toque desenhar com uma cor diferente, a função `colorForTouch()` é usada para escolher uma cor com base em um identificador único do toque, Este identificador é um número opaco, mas pelo menos podemos conta com ele diferindo entre os toques ativos no momento.

```js
function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
```

O resultado desta função é uma string que pode ser usada ao chamar as funções {{ HTMLElement("canvas") }} para setar a cor do desenho. Por exemplo, para um valor {{ domxref("Touch.identifier") }} de 10, o resultado será a string "#aaa".

#### Copiando touch objects

Alguns browsers (mobile Safari, por exemplo) re-usa touch objects entre os eventos, por isso é melhor ter cuidado para copiar os bits, em vez de fazer referência a todo objeto.

```js
function copyTouch(touch) {
  return {
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
  };
}
```

#### Encontrando um toque ongoing

A função `ongoingTouchIndexById()` abaixo verifica através do array `ongoingTouches` para encontrar o toque correspondente ao indentificador passado, então ele retorna o índice do touch no array.

```js
function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1; // não econtrado
}
```

#### Mostrando o que está acontecendo

```js
function log(msg) {
  var p = document.getElementById("log");
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

If your browser supports it, you can {{ LiveSampleLink('Example', 'see it live') }}.

[jsFiddle example](http://jsfiddle.net/Darbicus/z3Xdx/10/)

## Additional tips

This section provides additional tips on how to handle touch events in your web application.

### Handling clicks

Since calling `preventDefault()` on a `touchstart` or the first `touchmove` event of a series prevents the corresponding mouse events from firing, it's common to call `preventDefault()` on `touchmove` rather than `touchstart`. That way, mouse events can still fire and things like links will continue to work. Alternatively, some frameworks have taken to refiring touch events as mouse events for this same purpose. (This example is oversimplified and may result in strange behavior. It is only intended as a guide.)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (
    evt.touches.length > 1 ||
    (evt.type == "touchend" && evt.touches.length > 0)
  )
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;
  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }
  newEvt.initMouseEvent(
    type,
    true,
    true,
    evt.originalTarget.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    evt.ctrlKey,
    evt.altKey,
    evt.shirtKey,
    evt.metaKey,
    0,
    null,
  );
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Calling preventDefault() only on a second touch

One technique for preventing things like `pinchZoom` on a page is to call `preventDefault()` on the second touch in a series. This behavior is not well defined in the touch events spec, and results in different behavior for different browsers (i.e., iOS will prevent zooming but still allow panning with both fingers; Android will allow zooming but not panning; Opera and Firefox currently prevent all panning and zooming.) Currently, it's not recommended to depend on any particular behavior in this case, but rather to depend on meta viewport to prevent zooming.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
