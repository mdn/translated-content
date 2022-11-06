---
title: GlobalEventHandlers.onkeyup
slug: conflicting/Web/API/Element/keyup_event
translation_of: Web/API/GlobalEventHandlers/onkeyup
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

## Especificaciones

| Specification                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onkeyup','onkeyup')}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilidad con navegadores

{{Compat("api.GlobalEventHandlers.onkeyup")}}
