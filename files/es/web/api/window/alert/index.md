---
title: Window.alert()
slug: Web/API/Window/alert
tags:
  - Referencia
  - metodo
translation_of: Web/API/Window/alert
browser-compat: api.Window.alert
---
{{ APIRef }}

El método `Window.alert()` muestra un diálogo de alerta con opción de especificar contenido, aguardará hasta que el usuario cierre la ventana de diálogo.

## Sintaxis

```js
alert()
alert(message)
```

### Parametros

- `message` {{optional_inline}}
  - : Es un valor opcional del texto que se desea mostrar en el diálogo de alerta,
    o, alternativamente, un objeto que será convertido a texto y mostrado.

### Valor de retorno

None ({{jsxref("undefined")}}).


## Ejemplo

```js
window.alert("Hola Mundo!");
alert("Hola Mundo!");
```

Ambos producen:

![](alerthelloworld.png)

## Notas

El diálogo `alert` debe ser usado para mensajes que no requieren respuesta por
parte del usuario, solo el acuse de recibido del mensaje.

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

