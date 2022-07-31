---
title: Notification.dir
slug: Web/API/notification/dir
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - dir
translation_of: Web/API/Notification/dir
browser-compat: api.Notification.dir
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propiedad `dir` de solo lectura de la interfaz {{domxref("Notification")}} indica la direccion del texto en la notificación, como se especifica en la opción `dir` del constructor {{domxref("Notification.Notification","Notification()")}}.

## Sintaxis

```js
var direction = Notification.dir;
```

### Valor

Un {{domxref("DOMString")}} especifica la dirección del texto, los posibles valores pueden ser:

- `auto`: Aplica el comportamiento del idioma del navegador (por defecto).
- `ltr`: El texto es desplegado de izquierda a derecha.
- `rtl`: El texto es desplegado de derecha a izquierda.

> **Nota:** La mayoría de los navegadores parecen ignorar las intrucciones explicitas `ltr` y `rtl`, y solo van a las proveídas por el navegador.

## Ejemplos

El siguiente código ejecuta una notificación; se crea un simple objeto `options`, luego la notificación se dispara usando el constructor `Notification()`.

```js
var options = {
  body: 'Do you like my body?',
  dir: 'rtl'
}

var n = new Notification('Notificación de prueba', options);

console.log(n.dir); // Deberia retornar 'rtl'
```

## Especificaciones

{{Specifications}}

## Navegadores Compatibles

{{Compat}}

## Ver tambien

- [Usando la API de Notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
