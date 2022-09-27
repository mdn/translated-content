---
title: Window.confirm()
slug: Web/API/Window/confirm
translation_of: Web/API/Window/confirm
---
{{ApiRef("Window")}}

El método **`Window.confirm()`** muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar y Cancelar.

## Sintaxis

```js
result = window.confirm(message);
```

- `message` es la cadena que se muestra opcionalmente en el diálogo.
- `result` es un valor booleano indicando si se ha pulsado Aceptar o Cancelar (Aceptar devuelve true).

## Ejemplo

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Da como resultado:

![firefox confirm](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

## Notas

The following text is shared between this article, DOM:window\.prompt and DOM:window\.alert Las cajas de diálogo son ventanas modales - ello impide al usuario continuar accediendo al resto del interfaz del programa hasta que la ventana modal haya sido cerrada. Por esta razón no se debería usar en exceso funciones que creen cajas de diálogo (o ventanas modales). No obstante, hay muy buenas razones para [evitar el uso de cajas de diálogo para confirmaciones](http://alistapart.com/article/neveruseawarning).

Los usuarios de [Mozilla Chrome](/en-US/Chrome) users (e.g. Firefox extensions) deberían usar métodos de `nsIPromptService` en vez de cajas de diálogo.

A partir de la versión {{CompatChrome(46.0)}} de Chrome este método es bloqueado dentro de un {{htmlelement("iframe")}} a no ser que el atributo sandbox tenga el valor `allow-modal`.

{{gecko_minversion_inline("23.0")}} El argumento es opcional y no requerido por la especificación.

## Especificación

| Especificación                                                                           | Estado                                       | Comentarios         |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('HTML5 Web application', '#dom-confirm', 'confirm()')}} | {{Spec2('HTML5 Web application')}} | Definición inicial. |

## Ver también

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
