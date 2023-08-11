---
title: Navigator.onLine
slug: Web/API/Navigator/onLine
---

{{ApiRef("HTML DOM")}}

Retorna el estado en línea del navegador. La propiedad retorna un valor booleano, `true` significa **en línea** y `false` significa **desconectado**. La propiedad envía actualizaciones siempre que el navegador tenga la capacidad de conectarse a los cambios de red. La actualización se produce cuando un usuario sigue un enlace o cuando un script pide una pagina remota. Por ejemplo, la propiedad debe retornar `false` cuando los usuarios hacen clic en un enlace poco después de perder la conexión a internet.

Los navegadores implementan esta propiedad de forma diferente.

En Chrome y Safari, si el navegador no puede conectarse a la red de area local (LAN) o al router, está `desconectado`; todas las otras condiciones retornan `true`. Así que puedes suponer que el navegador esta desconectado cuando retorna un valor `false`, no puedes suponer que un valor `true` signifique que el navegador puede acceder a internet. Podrías estar recibiendo falsos positivos, como en los casos en el que el ordenador este ejecutando un software de virtualización que tiene los adaptadores ethernet virtuales siempre "conectados". Por lo tanto, si tu quieres determinar el estado en linea de el navegador, tu debes desarrollar medios adicionales para comprobarlo. Para más información, consulte el artículo HTML5 Rocks article, [Working Off the Grid](http://www.html5rocks.com/en/mobile/workingoffthegrid.html).

En Firefox e Internet Explorer, cambiando el navegador al modo desconectado envía un valor `false`. Hasta Firefox 41, todas las demás condiciones retornaban un valor `true`; desde Firefox 41, en OS X y Windows, el valor sigue la actual conectividad de red.

Puedes ver los cambios en el estado de red escuchando los eventos `window.ononline` y `window.onoffline`.

## Sintaxis

```js
online = window.navigator.onLine;
```

### Valor

`online` es booleano `true` o `false`.

## Ejemplo

Ver [ejemplo en linea](http://html5-demos.appspot.com/static/navigator.onLine.html).

Para comprobar que estas es linea, consulte `window.navigator.onLine`, como en el siguiente ejemplo:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Si el navegador no soporta `navigator.onLine` el ejemplo anterior siempre devolvera `false`/`undefined`.

Para ver los cambios en el estado de la red, use [`addEventListener`](/es/docs/Web/API/EventTarget/addEventListener) para escuchar los eventos `window.ononline` y `window.onoffline`, como en el siguiente ejemplo:

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

See [Online/Offline Events‎](/es/docs/Online_and_offline_events) for a more detailed description of this property as well as new offline-related features introduced in Firefox 3.

## Véase también

- [HTML5 Rocks: Working Off the Grid With HTML5 Offline](http://www.html5rocks.com/en/mobile/workingoffthegrid.html)
- [HTML5 Rocks: "Offline": What does it mean and why should I care?](http://www.html5rocks.com/en/tutorials/offline/whats-offline/)
- [Mozilla Blog: Offline Web Applications](http://hacks.mozilla.org/2010/01/offline-web-applications/)
