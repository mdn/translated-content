---
title: element.addEventListener
slug: Web/API/EventTarget/addEventListener
---

{{apiref("DOM Events")}}

## Resumen

`addEventListener()` Registra un evento a un objeto en específico. El [Objeto especifico](/es/docs/DOM/EventTarget) puede ser un simple [elemento](/es/docs/DOM/element) en un archivo, el mismo [`documento`](/es/docs/DOM/document) , una [`ventana`](/es/docs/DOM/window) o un [`XMLHttpRequest`](/es/docs/DOM/XMLHttpRequest).

Para registrar más de un eventListener, puedes llamar `addEventListener()` para el mismo elemento pero con diferentes tipos de eventos o parámetros de captura.

## Sintaxis

```
target.addEventListener(tipo, listener[, useCapture]);
target.addEventListener(tipo, listener[, useCapture, wantsUntrusted {{ Non-standard_inline() }}]); // Gecko/Mozilla only
```

- `tipo`
  - : Una cadena representando el [tipo de evento](/es/docs/DOM/event.type) a escuchar.
- `listener`
  - : El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz [`EventListener`](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener) o solo una [function](/es/docs/JavaScript/Guide/Functions) en JavaScript.
- `useCapture` {{ optional_inline() }}

  - : Si es `true`, `useCapture` indica que el usuario desea iniciar la captura. Después de iniciar la captura, todos los eventos del tipo especificado serán lanzados al `listener` registrado antes de comenzar a ser controlados por algún `EventTarget` que esté por debajo en el arbol DOM del documento.

    > **Nota:** For event listeners attached to the event target; the event is in the target phase, rather than capturing and bubbling phases. Events in the target phase will trigger all listeners on an element regardless of the `useCapture` parameter.

    > **Nota:** `useCapture` became optional only in more recent versions of the major browsers; for example, it was not optional prior to Firefox 6. You should provide that parameter for broadest compatibility.

<!---->

- wantsUntrusted {{Non-standard_inline}}
  - : If `true`, the listener receives synthetic events dispatched by web content (the default is `false` for chrome and `true` for regular web pages). This parameter is only available in Gecko and is mainly useful for the code in add-ons and the browser itself. See [Interaction between privileged and non-privileged pages](/es/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages) for an example.

## Ejemplo

```html
<!doctype html>
<html>
  <head>
    <title>DOM Event Example</title>

    <style>
      #t {
        border: 1px solid red;
      }
      #t1 {
        background-color: pink;
      }
    </style>

    <script>
      // Function to change the content of t2
      function modifyText() {
        var t2 = document.getElementById("t2");
        t2.firstChild.nodeValue = "three";
      }

      // Function to add event listener to t
      function load() {
        var el = document.getElementById("t");
        el.addEventListener("click", modifyText, false);
      }

      document.addEventListener("DOMContentLoaded", load, false);
    </script>
  </head>
  <body>
    <table id="t">
      <tr>
        <td id="t1">one</td>
      </tr>
      <tr>
        <td id="t2">two</td>
      </tr>
    </table>
  </body>
</html>
```

[Ver en el JSFiddle](https://jsfiddle.net/madBYK/UumUP)

En el ejemplo anterior , `modifyText()` es una listener para los eventos `click` registrados utilzando `addEventListener()`. Un click en cualquier parte de la tabla notificara al handler y ejecutara la función `modifyText()`.

Si quieres pasar parámetros a la función del listener, debes utilizar funciones anónimas.

```html
<!doctype html>
<html>
  <head>
    <title>DOM Event Example</title>

    <style>
      #t {
        border: 1px solid red;
      }
      #t1 {
        background-color: pink;
      }
    </style>

    <script>
      // Function to change the content of t2
      function modifyText(new_text) {
        var t2 = document.getElementById("t2");
        t2.firstChild.nodeValue = new_text;
      }

      // Function to add event listener to t
      function load() {
        var el = document.getElementById("t");
        el.addEventListener(
          "click",
          function () {
            modifyText("four");
          },
          false,
        );
      }
    </script>
  </head>
  <body onload="load();">
    <table id="t">
      <tr>
        <td id="t1">one</td>
      </tr>
      <tr>
        <td id="t2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## Notas

### ¿Porqué utilizar `addEventListener`?

`addEventListener` es la forma de registrar un listener de eventos, como se especifica en W3C DOM. Sus beneficios son los siguientes:

- Permite agregar mas de un listener a un solo evento. Esto es particularmente útil para las librerias [DHTML](/es/docs/DHTML) o las [Extensiones de Mozilla](/es/docs/Extensions) que deben funcionar bien, incluso si se utilizan otras librerias/extensiones.
- Da un control mas detallado de la fase en la que el listener se activa (capturing vs. bubbling)
- Funciona en cualquier elemento del DOM, no únicamente con elementos de HTML.

La alternativa, [Antigua forma de registrar event listeners](#Older_way_to_register_event_listeners) es descrita a continuación.

### Adding a listener during event dispatch

If an `EventListener` is added to an `EventTarget` while it is processing an event, it will not be triggered by the current actions but may be triggered during a later stage of event flow, such as the bubbling phase.

### Multiple identical event listeners

If multiple identical `EventListener`s are registered on the same `EventTarget` with the same parameters, the duplicate instances are discarded. They do not cause the `EventListener` to be called twice, and since the duplicates are discarded, they do not need to be removed manually with the [removeEventListener](/es/docs/Web/API/EventTarget/removeEventListener) method.

### The value of `this` within the handler

It is often desirable to reference the element from which the event handler was fired, such as when using a generic handler for a series of similar elements. When attaching a function using `addEventListener()` the value of `this` is changed—note that the value of `this` is passed to a function from the caller.

In the example above, the value of `this` within `modifyText()` when called from the click event is a reference to the table 't'. This is in contrast to the behavior that occurs if the handler is added in the HTML source:

```html
<table id="t" onclick="modifyText();">
  . . .
</table>
```

The value of `this` within `modifyText()` when called from the onclick event will be a reference to the global (window) object.

> **Nota:** JavaScript 1.8.5 introduces the [`Function.prototype.bind()`](/es/docs/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called. Note, however, that you'll need to keep a reference to the listener around so you can later remove it.

This is an example with and without `bind`:

```js
var Something = function (element) {
  this.name = "Something Good";
  this.onclick1 = function (event) {
    console.log(this.name); // undefined, as this is the element
  };
  this.onclick2 = function (event) {
    console.log(this.name); // 'Something Good', as this is the binded Something object
  };
  element.addEventListener("click", this.onclick1, false);
  element.addEventListener("click", this.onclick2.bind(this), false); // Trick
};
```

A problem in the example above is that you cannot remove the listener with `bind`. Another solution is using a special function called `handleEvent` to catch any events:

```js
var Something = function (element) {
  this.name = "Something Good";
  this.handleEvent = function (event) {
    console.log(this.name); // 'Something Good', as this is the Something object
    switch (event.type) {
      case "click":
        // some code here...
        break;
      case "dblclick":
        // some code here...
        break;
    }
  };

  // Note that the listeners in this case are this, not this.handleEvent
  element.addEventListener("click", this, false);
  element.addEventListener("dblclick", this, false);

  // You can properly remove the listners
  element.removeEventListener("click", this, false);
  element.removeEventListener("dblclick", this, false);
};
```

### Legacy Internet Explorer and attachEvent

In Internet Explorer versions prior to IE 9, you have to use [`attachEvent`](<http://msdn.microsoft.com/en-us/library/ms536343(VS.85).aspx>) rather than the standard `addEventListener`. To support IE, the example above can be modified to:

```js
if (el.addEventListener) {
  el.addEventListener("click", modifyText, false);
} else if (el.attachEvent) {
  el.attachEvent("onclick", modifyText);
}
```

There is a drawback to `attachEvent`, the value of `this` will be a reference to the `window` object instead of the element on which it was fired.

### Older way to register event listeners

`addEventListener()` was introduced with the DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events) specification. Before then, event listeners were registered as follows:

```js
// Pass a function reference — do not add '()' after it, which would call the function!
el.onclick = modifyText;

// Using a function expression
element.onclick = function () {
  // ... function logic ...
};
```

This method replaces the existing `click` event listener(s) on the element if there are any. Similarly for other events and associated event handlers such as `blur` (`onblur`), `keypress` (`onkeypress`), and so on.

Because it was essentially part of DOM 0, this method is very widely supported and requires no special cross–browser code; hence it is normally used to register event listeners dynamically unless the extra features of `addEventListener()` are needed.

### Memory issues

```js
var i;
var els = document.getElementsByTagName('*');

// Case 1
for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", function(e){/*do something*/}, false});
}

// Case 2
function processEvent(e){
  /*do something*/
}

for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", processEvent, false});
}
```

In the first case, a new (anonymous) function is created at each loop turn. In the second case, the same previously declared function is used as an event handler. This results in smaller memory consumption. Moreover, in the first case, since no reference to the anonymous functions is kept, it is not possible to call [`element.removeEventListener`](/es/docs/Web/API/EventTarget/removeEventListener) because we do not have a reference to the handler, while in the second case, it's possible to do `myElement.removeEventListener("click", processEvent, false)`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See Also

- [element.removeEventListener()](/es/docs/DOM/element.removeEventListener)
- [Creating and triggering custom events](/es/docs/DOM/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](http://www.quirksmode.org/js/this.html)
