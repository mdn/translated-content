---
title: Fullscreen API
slug: Web/API/Fullscreen_API
---

{{DefaultAPISidebar("Fullscreen API")}}

La **`API Fullscreen`** provee una manera fácil de presentar contenido web usando la pantalla completa del usuario. La API permite indicar al navegador que un elemento y sus hijos, si los tiene, ocupar la pantalla completa, ocultando toda la interfaz del usuario y otras aplicaciones de la pantalla mientras se esté en pantalla completa.

> **Nota:** De momento, no todos los navegadores usan la versión sin prefijo de la API. Consulta la [tabla que resume las diferencias de prefijos y nombres](#Prefijado).

## Activando modo de pantalla completa

Para cualquier elemento que quieras presentar en pantalla completa (como por ejemplo, un elemento {{ HTMLElement("video") }}), puedes presentarlo en pantalla completa, simplemente invocando a su método `requestFullscreen()`.

Consideremos este elemento {{ HTMLElement("video") }}:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Podemos poner este video en pantalla completa con un script como éste:

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

### Diferencias de presentación

Cabe aclarar una diferencia clave entre las implementaciones de Gecko y WebKit: Gecko automáticamente añade reglas CSS al elemento para ajustarlo a las dimensiones de la pantalla: "`width: 100%; height: 100%`". WebKit no hace esto; en su lugar, centra el elemento con su mismo tamaño original en un fondo negro. Para obtener el mismo comportamiento en WebKit, necesitas añadir manualmente las reglas CSS "`width: 100%; height: 100%;`" al elemento:

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

Por otro lado, si quieres emular el comportamiento de WebKit en Gecko, necesitarías colocar el elemento a presentar dentro de otro elemento, con las reglas CSS necesarias para ajustarlo a la apariencia requerida, y será dicho elemento contenedor el que se establecerá para aparecer en pantalla completa.

### Notificación

Cuando el modo de pantalla completa sea invocado exitosamente, el documento que contiene al elemento recibe un evento [`fullscreenchange`](/es/docs/Web/Reference/Events/fullscreenchange). Cuando se sale del modo de pantalla completa, el documento recibe de nuevo un evento [`fullscreenchange`](/es/docs/Web/Reference/Events/fullscreenchange). Nótese que el evento [`fullscreenchange`](/es/docs/Web/Reference/Events/fullscreenchange) no provee información alguna sobre si el documento está entrando o saliendo a modo de pantalla completa, pero puedes saber si está en dicho modo si la propiedad {{ domxref("document.fullscreenElement", "fullscreenElement") }} del documento no es nula.

### Cuando la solicitud de pantalla completa falla

No es garantía que se pueda cambiar a modo de pantalla completa. Por ejemplo, los elementos {{ HTMLElement("iframe") }} tienen un atributo [`allowfullscreen`](/es/docs/Web/HTML/Element/iframe#allowfullscreen) para decidir si se permitirá que el contenido se muestre en pantalla completa. Además, ciertos tipos de contenido, como plug-ins en ventana, no pueden ser presentados en modo de pantalla completa. Intentar hacerlo con elementos que no lo permitan (o el padre o descendente de un elemento así), no funcionará. En su lugar, el elemento que solicitó la pantalla completa recibirá un evento `fullscreenerror`. En Firefox, cuando falla una solicitud de pantalla completa, el navegador registrará un mensaje de error en la consola, explicando la falla de la solicitud. En Chrome y versiones recientes de Opera, sin embargo, no se genera ninguna advertencia.

> **Nota:** Las solicitudes de pantalla completa necesitan ser invocadas dentro de un manejador de eventos, o de otro modo, serán denegadas.

## Saliendo del modo de pantalla completa

El usuario siempre tendrá la habilidad de salir del modo de pantalla completa por su propia cuenta; véase [Cosas que los usuarios querrán saber](#things_your_users_want_to_know). Incluso se puede hacer programáticamente, llamando al método {{domxref("exitFullscreen()")}}.

## Otra información

El objeto {{ domxref("document") }} provee información adiciional que puede ser útil al desarrollar aplicaciones de pantalla completa:

- {{ domxref("document.fullscreenElement", "fullscreenElement") }}
  - : El atributo `fullscreenElement` apunta al {{ domxref("element", "elemento") }} actualmente en modo pantalla. Si no es nulo, el documento está en pantalla completa, y si es nulo, no lo está.
- {{ domxref("document.fullscreenEnabled", "fullscreenEnabled") }}
  - : El atributo `fullscreenEnabled` indica si el documento está actualmente en un estado que permitiría solicitudes al modo de pantalla completa.

## Cosas que los usuarios querrán saber

Puedes asegurarte de hacer saber a los usuarios que pueden presionar la tecla <kbd>ESC</kbd> (o <kbd>F11</kbd>) para salir del modo de pantalla completa.

Adicionalmente, navegando a otra página, cambiando de pestaña, o cambiando a otra aplicación(usando, por ejemplo, <kbd>Alt</kbd>-<kbd>Tab</kbd>) mientras se está en pantalla completa, también se saldrá de dicho modo.

## Ejemplo

En este ejemplo, se presenta un video en una página web. Presionando la tecla <kbd>Return</kbd> o <kbd>Enter</kbd> el usuario podrá moverse entre modo de ventana o de pantalla completa para la presentación del video.

[Ver ejemplo en vivo](/samples/domref/fullscreen.html)

### Observando la tecla <kbd>Enter</kbd>

Cuando la página se carga, este código se ejecuta para establecer un evento para cuando se presione la tecla <kbd>Enter</kbd>.

```js
document.addEventListener(
  "keydown",
  function (e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  },
  false,
);
```

### Cambiando entre modo de pantalla completa y modo de ventana

Este código es llamado cuando el usuario presiona la tecla <kbd>Enter</kbd>, como se ve arriba.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

En este código, primero se observa si el atributo `fullscreenElement` de {{ domxref("document") }} (comprobando si tiene prefijo `moz`, `ms`, o `webkit`). Si es `null`, el documento está en modo de ventana actualmente, así que necesitamos cambiarlo a modo de pantalla completa. Esto se hace llamando a la función {{ domxref("element.requestFullscreen()") }}.

Si el modo de pantalla completa está activado (`fullscreenElement` no es `null`), llamamos a la función {{ domxref("document.exitFullscreen()") }}.

## Prefijado

De momento, no todos los navegadores están implementando la versión sin prefijo de la API. Aquí está la tabla que resume los prefijos y diferencias de nombres entre ellos:

| Estándar                                   | Blink (Chrome y Opera)      | Gecko (Firefox)          | Internet Explorer 11    | Edge                        | Safari (WebKit)             |
| ------------------------------------------ | --------------------------- | ------------------------ | ----------------------- | --------------------------- | --------------------------- |
| {{domxref("Document.fullscreen")}}         | `webkitIsFullScreen`        | `mozFullScreen`          | _-_                     | `webkitIsFullScreen`        | `webkitIsFullScreen`        |
| {{domxref("Document.fullscreenEnabled")}}  | `webkitFullscreenEnabled`   | `mozFullScreenEnabled`   | `msFullscreenEnabled`   | `webkitFullscreenEnabled`   | `webkitFullscreenEnabled`   |
| {{domxref("Document.fullscreenElement")}}  | `webkitFullscreenElement`   | `mozFullScreenElement`   | `msFullscreenElement`   | `webkitFullscreenElement`   | `webkitFullscreenElement`   |
| {{domxref("Document.onfullscreenchange")}} | `onwebkitfullscreenchange`  | `onmozfullscreenchange`  | `onmsfullscreenchange`  | `onwebkitfullscreenchange`  | `onwebkitfullscreenchange`  |
| {{domxref("Document.onfullscreenerror")}}  | `onwebkitfullscreenerror`   | `onmozfullscreenerror`   | `onmsfullscreenerror`   | `onwebkitfullscreenerror`   | `onwebkitfullscreenerror`   |
| {{domxref("Document.exitFullscreen()")}}   | `webkitExitFullscreen()`    | `mozCancelFullScreen()`  | `msExitFullscreen()`    | `webkitExitFullscreen()`    | `webkitExitFullscreen()`    |
| {{domxref("Element.requestFullscreen()")}} | `webkitRequestFullscreen()` | `mozRequestFullScreen()` | `msRequestFullscreen()` | `webkitRequestFullscreen()` | `webkitRequestFullscreen()` |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}, {{cssxref("::backdrop")}}
- [`allowfullscreen`](/es/docs/Web/HTML/Element/iframe#allowfullscreen)
