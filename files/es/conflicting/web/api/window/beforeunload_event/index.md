---
title: Window.onbeforeunload
slug: conflicting/Web/API/Window/beforeunload_event
original_slug: Web/API/WindowEventHandlers/onbeforeunload
---

{{ApiRef}}

## Introducción

Evento que se ejecuta antes de abandonar la página, justo antes de que se ejecute {{domxref("window.onunload","window.onunload")}}. El documento aún está visible y {{domxref("event.preventDefault","el evento aún se puede cancelar")}}.

## Sintaxis

```js
window.onbeforeunload = funcRef
```

- `funcRef` es una referencia a una función o una función anónima.
- La función debe asignar una cadena de texto como propiedad `returnValue` del objeto Event y devolver la misma cadena.
- Nota: en Firefox 4 y superiores la cadena de texto no se muestra al usuario (ver [Error 588292 en Firefox](https://bugzil.la/588292)).

## Ejemplo

```js
window.onbeforeunload = function(e) {
  return 'Texto de aviso';
};
```

## Notas

Cuando este evento devuelve un valor que no sea nulo, se solicita al usuario que confirme que quiere abandonar la página. En la mayoría de los navegadores, el valor de retorno del evento se muestra en este cuadro de diálogo.

Desde el 25 de mayo de 2011, los estados de la [especificación HTML5](http://www.w3.org/TR/html5-diff/#changes-2011-05-25) que llaman a los métodos {{domxref("window.showModalDialog()")}}, {{domxref("window.alert()")}}, {{domxref("window.confirm()")}} y {{domxref("window.prompt()")}} pueden ser ignorados en este evento.

Se _puede_ y se _debería_ controlar este evento con {{domxref("EventTarget.addEventListener","window.addEventListener()")}} y el [evento `beforeunload`](/es/docs/Mozilla_event_reference/beforeunload) (más información en los enlaces).

## Ver también

- [MSDN: evento onbeforeunload](<http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx>) (en inglés)
