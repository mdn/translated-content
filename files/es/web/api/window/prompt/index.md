---
title: Window.prompt()
slug: Web/API/Window/prompt
tags:
  - Referencia
  - metodo
browser-compat: api.Window.prompt
translation_of: Web/API/Window/prompt
---
{{ApiRef("Window")}}

El método `Window.prompt()` muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.

## Sintaxis

```js
result = window.prompt(message, default);
```

- `result` es una cadena de texto que contiene el valor introducido por el usuario, o `null`.
- `message` es una cadena de texto que se mostrará al usuario. Este parámetro es opcional y puede ser omitido si no se necesita mostrar nada en la ventana.
- `default` es una cadena de texto que contiene el valor predeterminado para el texto de entrada. Es un parámetro opcional. Nótese que en Internet Explorer 7 y 8, si no se provee un valor para este parámetro, el valor predeterminado es `"undefined"`.

## Ejemplo

```js
var sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
var sign = window.prompt(); // open the blank prompt window
var sign = prompt();       //  open the blank prompt window
var sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
var sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
```

Cuando el usuario hace clic en el botón OK, el valor introducido en el campo de texto es devuelto por el método. Si el usuario da clic al botón OK sin introducir algun texto, se devuelve una cadena vacía. Si el usuario presiona el botón Cancel, la función devuelve `null`.

El ejemplo anterior muestra el siguiente cuadro de diálogo (en Chrome en OS X):

[![prompt() dialog in Chrome on OS X](https://mdn.mozillademos.org/files/11303/prompt.png)](https://mdn.mozillademos.org/files/11303/prompt.png)

## Notes

A prompt dialog contains a single-line textbox, a Cancel button, and an OK button, and
returns the (possibly empty) text the user entered into that textbox.

Please note that result is a string. That means you should sometimes cast the value
given by the user. For example, if their answer should be a Number, you should cast the
value to Number.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

Dialog boxes are modal windows; they
prevent the user from accessing the rest of the program's interface until the dialog box
is closed. For this reason, you should not overuse any function that creates a dialog
box (or modal window).

Alternatively {{HTMLElement("dialog")}} element can be used to take user inputs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dialog")}} element
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}

