---
title: GlobalEventHandlers.onkeyup
slug: conflicting/Web/API/Element/keyup_event
original_slug: Web/API/GlobalEventHandlers/onkeyup
---

{{ApiRef("HTML DOM")}}

La propiedad **onkeyup** devuelve un manejador para el evento onKeyUp del elemento actual.

## Sintaxis

```
element.onkeyup = event handling code
```

## Ejemplo

```js
 <input type="text" onKeyUp="keyWasPressed(event)">
 <script>function keyWasPressed(evt){ console.log(evt.keyCode) }</script>
```

## Notas

El evento keyup se lanza cuando el usuario suelta la tecla que ha sido presionada.
