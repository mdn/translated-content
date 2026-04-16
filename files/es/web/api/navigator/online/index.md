---
title: Navigator.onLine
slug: Web/API/Navigator/onLine
---

{{ApiRef("HTML DOM")}}

Devuelve el estado en línea del navegador. La propiedad retorna un valor booleano; `true` significa **en línea** y `false` significa **desconectado**. La propiedad envía actualizaciones siempre que el navegador tenga la capacidad de conectarse a los cambios de red. La actualización se produce cuando un usuario sigue un enlace o cuando se pide una página externa. Por ejemplo, la propiedad debe retornar `false` cuando los usuarios hacen clic en un enlace poco después de perder la conexión a internet.

Los navegadores implementan esta propiedad de forma diferente.

En Chrome y Safari, si el navegador no puede conectarse a la red de área local (LAN) o al router, está `desconectado`; todas las otras condiciones retornan `true`. Así que, aunque puedes suponer que el navegador está desconectado cuando devuelve `false`, no puedes suponer que un valor `true` signifique que el navegador puede acceder a internet. Podrías estar recibiendo falsos positivos, como cuando el ordenador está ejecutando un software de virtualización que tiene los adaptadores Ethernet virtuales siempre "conectados" o cuando la señal es demasiado débil como para hacer nada. Por lo tanto, si quieres determinar el estado en línea del navegador, debes desarrollar medios adicionales, como por ejemplo usar [response.ok](/es/docs/Web/API/Response/ok). Para más información, consulte el artículo HTML5 Rocks article, [Working Off the Grid](https://www.html5rocks.com/en/mobile/workingoffthegrid.html).

En Firefox e Internet Explorer, cambiar el navegador al modo desconectado devuelve `false`. Hasta Firefox 41, todas las demás condiciones retornaban un valor `true`; desde Firefox 41, en OS X y Windows, el valor sigue la actual conectividad de red.

Puedes ver los cambios en el estado de red escuchando los eventos `window.ononline` y `window.onoffline`.

## Sintaxis

```js
online = window.navigator.onLine;
```

### Valor

`online` devuelve un booleano.

## Ejemplo

Ver [ejemplo de navigator.onLine](http://html5-demos.appspot.com/static/navigator.onLine.html).

Para comprobar una conexión a una red, usa `window.navigator.onLine`, de la siguiente manera:

```js
console.log(navigator.onLine ? "online" : "offline");
```

Si el navegador no tiene soporte para `navigator.onLine`, el ejemplo anterior siempre devolverá `false`/`undefined`.

Para ver los cambios en el estado de la red, usa [`addEventListener`](/es/docs/Web/API/EventTarget/addEventListener) para escuchar los eventos `window.ononline` y `window.onoffline`, como en el siguiente ejemplo:

```js
window.addEventListener("offline", function (e) {
  console.log("offline");
});

window.addEventListener("online", function (e) {
  console.log("online");
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## Notas

See [Online/Offline Events‎](/es/docs/Web/API/Navigator/onLine) for a more detailed description of this property as well as new offline-related features introduced in Firefox 3.

## Véase también

- [HTML5 Rocks: Working Off the Grid With HTML5 Offline](https://www.html5rocks.com/en/mobile/workingoffthegrid.html)
- [HTML5 Rocks: "Offline": What does it mean and why should I care?](https://www.html5rocks.com/en/tutorials/offline/whats-offline/)
- [Mozilla Blog: Offline Web Applications](https://hacks.mozilla.org/2010/01/offline-web-applications/)
