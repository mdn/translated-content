---
title: Window.alert()
slug: Web/API/Window/alert
---

{{ APIRef }}

El método `Window.alert()` muestra un diálogo de alerta con un mensaje opcional,
y aguardará hasta que el usuario cierre la ventana de diálogo.

En algunas condiciones, por ejemplo — cuando el usuario cambia de pestaña,
es posible que el navegador no muestre un cuadro de diálogo o que no espere
a que el usuario cierre el cuadro de diálogo.

## Sintaxis

```js
alert();
alert(message);
```

### Parámetros

- `message` {{optional_inline}}
  - : Es un valor opcional del texto que se desea mostrar en el diálogo de alerta,
    o, alternativamente, un objeto que será convertido a texto y mostrado.

### Valor de retorno

Ninguno ({{jsxref("undefined")}}).

## Ejemplo

```js
window.alert("Hello world!");
alert("Hello world!");
```

Ambos producen:

![](alerthelloworld.png)

## Notas

El diálogo `alert` debe ser usado para mensajes que no requieren respuesta por
parte del usuario, solo el acuse de recibo del mensaje.

Los cuadros de diálogo son ventanas modales - previenen que el usuario acceda
al resto de la interfaz del programa hasta que el diálogo sea cerrado.
Por esta razón, no se debe abusar de cualquier función que crea
cuadros de diálogo (o ventanas modales).

Alternativamente,
se puede usar el elemento {{HTMLElement("dialog")}} para mostrar alertas.

## Especificación

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elemento {{HTMLElement("dialog")}}
- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
