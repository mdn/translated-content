---
title: Window.prompt()
slug: Web/API/Window/prompt
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
let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"
```

Cuando el usuario hace clic en el botón OK, el valor introducido en el campo de texto es devuelto por el método. Si el usuario da clic al botón OK sin introducir algun texto, se devuelve una cadena vacía. Si el usuario presiona el botón Cancel, la función devuelve `null`.

El ejemplo anterior muestra el siguiente cuadro de diálogo (en Chrome en OS X):

[![prompt() dialog in Chrome on OS X](prompt.png)](prompt.png)

## Notas

Un diálogo prompt contiene un cuadro de texto de una línea, un botón Cancel (Cancelar) un botón OK (Aceptar), y devuelve el texto (posiblemente vacío) que el usuario introdujo en el cuadro de texto.

The following text is shared between this article, DOM:window\.confirm and DOM:window\.alertLos cuadros de diálogo son ventanas modales; previenen que el usuario acceda al resto de la interfaz del programa hasta que el cuadro de diálogo es cerrado. Por esta razón, no se debe abusar de cualquier función que crea un cuadro de diálogo (o ventana modal).

Nótese que el resultado es una cadena de texto. Esto significa que a veces se deberá hacer una conversión al valor introducido por el usuario. Por ejemplo, si la respuesta debe ser un valor numérico, se debe hacer la conversión del valor a tipo Number. `var aNumber = Number(window\.prompt("Type a number", ""))`;

Usuarios de [Mozilla Chrome](/es/Chrome) (p.ej. extensiones de Firefox) deben usar preferentemente métodos de `nsIPromptService`.

A partir de Chrome 46.0 este método está bloqueado para los elementos {{htmlelement("iframe")}}, , a menos que su atributo [sandbox](/es/docs/Web/HTML/Elemento/iframe#attr-sandbox) tenga el valor `allow-modal`.

En Safari, si el usuario presiona el botón Cancel, la función devuelve una cadena vacía. Por lo tanto, no se puede diferenciar si canceló o si mandó una cadena de texto vacía como valor del cuadro de texto.

Esta función no tiene efecto en la versión Modern UI/Metro de Internet Explorer para Windows 8. No se muestra un diálogo al usuario, y siempre devuelve `undefined`. No está claro si esto es un bug o un comportamiento previsto. Las versiones de escritorio de IE sí implementan esta función

## Especificaciones

{{Specifications}}

## Véase también

- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
