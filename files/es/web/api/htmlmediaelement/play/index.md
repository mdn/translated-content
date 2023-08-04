---
title: HTMLMediaElement.play()
slug: Web/API/HTMLMediaElement/play
---

{{APIRef("HTML DOM")}}

El método `play()` de {{domxref("HTMLMediaElement")}} intenta comenzar la reproducción de los medios. Devuelve una promesa ({{jsxref("Promise")}}) que se resuelve cuando la reproducción se ha iniciado con éxito. Si no se inicia la reproducción por cualquier motivo, como problemas de permisos, la promesa será rechazada.

## Sintaxis

```
var promesa = HTMLMediaElement.play();
```

### Parametros

Ninguno.

### Valor de retorno

Es una promesa({{jsxref("Promise")}}) que se resuelve cuando se inicia la reproducción, o se rechaza si por algún motivo no se puede iniciar la reproducción.

> **Nota:** Los navegadores más antiguos pueden no devolver un valor de `play()`.

### Excepciones

El **controlador de rechazo** de la promesas se llama con un nombre de excepción pasado como su único parámetro de entrada (a diferencia de una excepción tradicional que se lanza). Los posibles errores incluyen:

- `NotAllowedError` ( _Error no permitido_)
  - : El agente de usuario(navegador) o el sistema operativo no permiten la reproducción de medios en el contexto o situación actual. Esto puede suceder, por ejemplo, si el navegador requiere que el usuarion inicie explícitamente la reproducción de medios haciendo clic en el botón "reproducir".
- NotSupportedError( _Error no admitido_)
  - : La fuente de medios (que puede especificarse como {{domxref("MediaStream")}}, {{domxref("MediaSource")}}, {{domxref("Blob")}}, o {{domxref("File")}}) no representa un formato de medios compatible.

Se pueden informar otras excepciones, según los detalles de implementación del navegador, la implementación del reproductor de medios, etc.

## Notas

Aunque generalmente se considera que el término "reproducción automática" se refiere a páginas que comienzan a reproducir contenido multimedia inmediatamente después de cargarse, las políticas de reproducción automática de los navegadores web también se aplican a cualquier reproducción de contenido multimedia que inicia por script, incluidas las llamadas a el método `play()`.

Si el {{Glossary("user agent")}} está configurado para no permitir la reproducción automática o iniciada por script de medios, llamando el método `play()` hara que la promesa devuelta sea rechazada inmediatamente con un `NotAllowedError`. Los sitios web deben estar preparados para manejar esta situación. Por ejemplo, un sitio no debe presentar una interfaz de usuario que suponga que la reproducción ha comenzado automáticamenta, sino que debe actualizar su interfaz de usuario en función de si la promesa devuelta se resulve o se rechaza. Mira el [Ejemplo](#example) abajo para más información.

> **Nota:** El método `play()` puede hacer que se le pida al usuario que otorgue permiso para reproducir medios, lo que puede ocacionar un posible retraso antes de que se resuelva la promesa devuelta. Asegúrese de que su código no espere una respuesta inmediata.

Para obtener información más detallada sobre la reproducción automática y el bloqueo de reproducción automática, consulte nuestro artículo [Guía de reproducción automática para medios y API de audio web](/es/docs/Web/Media/Autoplay_guide).

## Ejemplo

Este ejemplo muestra cómo confirmar que la reproducción ha comenzado y cómo manejar adecuadamente la reproducción automática bloqueada:

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.className = "playing";
  } catch (err) {
    playButton.className = "";
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.className = "";
  }
}
```

En este ejemplo, la reproducción de video se activa y desactiva por la función [`async`](/es/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`. Intenta reproducir el video y, si tiene éxito, establece el nombre de clase del elemento `playButton` en "playing". Si la reproducción no se inicia, la clase del elemento `playButton` se borra, restaurando su apariencia predeterminada. Esto garantiza que el bóton de reproducción coincida con el estado real de reproducción al observar la resolución o el rechazo de {{jsxref("Promise")}} devuelto por el método `play()`.

Cuando se ejecuta este ejemplo, comienza recogiendo referencias al elemento {{HTMLElement("video")}}, así como al {{HTMLElement("button")}} utilizado para activar y desactivar la reproducción. Luego configura un controlador de eventos para el evento [`click`](/es/docs/Web/Reference/Events/click) en el botón de alternancia de reproducción e intenta comenzar automáticamente la reproducción llamando al método `playVideo()`.

Puedes [probar o remezclar este ejemplo en tiempo real en Glitch](https://media-play-promise.glitch.me/).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web media technologies](/es/docs/Web/Media)
- Learning: [Video and audio content](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay guide for media and Web Audio APIs](/es/docs/Web/Media/Autoplay_guide)
- [Using the Web Audio API](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
