---
title: "Window: Método confirm() "
slug: Web/API/Window/confirm
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("Window")}}

`window.confirm()` le indica al navegador que muestre una ventana de diálogo con un mensaje opcional, y que espere hasta que el usuario acepte o cancele la ventana de confirmación.

Bajo algunas condiciones por ejemplo, cuando el usuario cambia de pestaña es posible que el navegador no muestre un cuadro de diálogo, ó que no espere a que el usuario confirme o cancele el cuadro de diálogo.

## Sintaxis

```js
confirm(message);
```

### Parámetros

- `message`
  - : Una cadena de texto que se va a mostrar en la ventana de diálogo de confirmación.

### Valor devuelto

Un valor booleano que indica si seleccionó OK (`true`) o Cancel (`false`). Si un navegador esta ignorando cuadros de diálogo, entonces el valor devuelto siempre será `false`.

## Ejemplos

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Produce:

![Firefox confirm](firefox_confirm_dialog.png)

## Notas

Los cuadros de diálogo son ventanas modales, ellos impiden al usuario acceder al resto de la interfaz del programa hasta que no se cierre. Por esta razón, no debería abusar de ninguna función que cree un cuadro de diálogo (o ventana modal). No obstante, hay buenas razones para [evitar el uso de cuadros de diálogo para confirmaciones](https://alistapart.com/article/neveruseawarning/).

Como alternativa, puede usar el elemento {{HTMLElement("dialog")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elemento {{HTMLElement("dialog")}}
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
