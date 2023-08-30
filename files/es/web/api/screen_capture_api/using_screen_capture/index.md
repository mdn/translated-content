---
title: Uso de la API de captura de pantalla
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
l10n:
  sourceCommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{DefaultAPISidebar("Screen Capture API")}}

En este artículo, examinaremos cómo utilizar la API de captura de pantalla y su método {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} para capturar parte o la totalidad de una pantalla para transmitir, grabar o compartir durante una sesión de conferencia [WebRTC](/es/docs/Web/API/WebRTC_API).

> **Nota:** Puede ser útil tener en cuenta que las versiones recientes [adapter.js shim de WebRTC](https://github.com/webrtcHacks/adapter) incluyen implementaciones de `getDisplayMedia()` para habilitar el uso compartido de pantalla en navegadores que lo admiten pero no implementar la API estándar actual. Esto funciona al menos con Chrome, Edge y Firefox.

## Captura de contenido de la pantalla

La captura del contenido de la pantalla como {{domxref("MediaStream")}} en vivo se inicia llamando a {{domxref("MediaDevices.getDisplayMedia", "navigator.mediaDevices.getDisplayMedia()")}}, que devuelve una promesa que resuelve una transmisión que contiene el contenido de la pantalla en vivo.

### Captura de pantalla inicial: estilo `async`/`await`

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}
```

Puede escribir este código usando una función asíncrona y el operador [`await`](/es/docs/Web/JavaScript/Reference/Operators/await), como se muestra arriba, o usando una {{jsxref("Promise", "Promesa")}} directamente, como se ve a continuación.

### Captura de pantalla inicial: estilo `Promise`

```js
function startCapture(displayMediaOptions) {
  return navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
```

De cualquier manera, el {{Glossary("user agent")}} responde presentando una interfaz de usuario que solicita al usuario que elija el área de la pantalla para compartir. Ambas implementaciones de `startCapture()` devuelven un {{domxref("MediaStream")}} que contiene las imágenes de visualización capturadas.

Consulte [Opciones y restricciones](#opciones_y_restricciones), a continuación, para obtener más información sobre cómo especificar el tipo de superficie que desea y otras formas de ajustar el flujo resultante.

### Ejemplo de una ventana que permite al usuario seleccionar una superficie de visualización para capturar

[![Captura de pantalla de la ventana de Chrome para elegir una superficie de origen](chrome-screen-capture-window.png)](chrome-screen-capture-window.png)

Luego puede usar el flujo capturado, `captureStream`, para cualquier cosa que acepte un flujo como entrada. Los [ejemplos](#ejemplos) a continuación muestran algunas formas de utilizar la transmisión.

### Superficies de visualización visibles y lógicas

A los efectos de la API de captura de pantalla, una **superficie de visualización** es cualquier objeto de contenido que la API puede seleccionar para compartir. Las superficies compartidas incluyen el contenido de una pestaña del navegador, una ventana completa y un monitor (o un grupo de monitores combinados en una sola superficie).

Hay dos tipos de superficie de visualización. Una **superficie de visualización visible** es una superficie que es completamente visible en la pantalla, como la ventana o pestaña más frontal, o la pantalla completa.

Una **superficie de visualización lógica** es aquella que está parcialmente o completamente oculta, ya sea porque otro objeto la superpone hasta cierto punto, o porque está completamente oculta o fuera de la pantalla. La forma en que la API de captura de pantalla los maneja varía. En general, el navegador proporcionará una imagen que oscurecerá la parte oculta de la superficie de visualización lógica de alguna manera, por ejemplo, difuminándola o reemplazándola con un color o patrón. Esto se hace por razones de seguridad, ya que el contenido que el usuario no puede ver puede contener datos que no desea compartir.

Un _user agent_ podría permitir la captura de todo el contenido de una ventana oculta después de obtener el permiso del usuario para hacerlo. En este caso, el _user agent_ puede incluir el contenido oculto, ya sea obteniendo el contenido actual de la parte oculta de la ventana o presentando el contenido visible más recientemente si el contenido actual no está disponible.

### Opciones y restricciones

El objeto de opciones pasado a {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} se usa para establecer opciones para la transmisión resultante.

Los objetos `video` y `audio` pasados al objeto de opciones también pueden contener restricciones adicionales particulares a esas pistas de medios. Consulte [Propiedades de las pistas de pantalla compartidas](/es/docs/Web/API/MediaTrackConstraints#instance_properties_of_shared_screen_tracks) para obtener detalles sobre restricciones adicionales para configurar un flujo de captura de pantalla que se agregan a {{domxref("MediaTrackConstraints")}}, {{domxref("MediaTrackSupportedConstraints")}} y {{domxref("MediaTrackSettings")}}).

Ninguna de las restricciones se aplica de ninguna manera hasta que se haya seleccionado el contenido a capturar. Las restricciones alteran lo que ve en el flujo resultante. Por ejemplo, si especifica una restricción {{domxref("MediaTrackConstraints.width", "width")}} para el video, se aplica escalando el video después de que el usuario seleccione el área para compartir. No establece una restricción sobre el tamaño de la fuente en sí.

> **Nota:** Las restricciones _nunca_ causan cambios en la lista de fuentes disponibles para la captura por parte de la API de uso compartido de pantalla. Esto garantiza que las aplicaciones web no puedan obligar al usuario a compartir contenido específico restringiendo la lista de fuentes hasta que solo quede un elemento.

Mientras la captura de pantalla está en uso, la máquina que comparte el contenido de la pantalla mostrará algún tipo de indicador para que el usuario sepa que se está compartiendo.

> **Nota:** Por motivos de privacidad y seguridad, las fuentes de pantalla compartida no se pueden enumerar mediante {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}. Relacionado con esto, el evento {{domxref("MediaDevices/devicechange_event", "devicechange")}} nunca se envía cuando hay cambios en las fuentes disponibles para `getDisplayMedia()`.

### Captura de audio compartido

{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} se usa más comúnmente para capturar video de la pantalla de un usuario (o partes de la misma). Sin embargo, el {{Glossary("user agent")}} puede permitir la captura de audio junto con el contenido de video. La fuente de este audio puede ser la ventana seleccionada, todo el sistema de audio de la computadora o el micrófono del usuario (o una combinación de todos los anteriores).

Antes de comenzar un proyecto que requerirá compartir audio, asegúrese de verificar la [compatibilidad del navegador](/es/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility) para `getDisplayMedia()` para ver si los navegadores que desea compatibilidad con soporte para audio en secuencias de pantalla capturadas.

Para solicitar que la pantalla se comparta con el audio incluido, las opciones que se pasan a `getDisplayMedia()` podrían verse así:

```js
const gdmOptions = {
  video: true,
  audio: true,
};
```

Esto le permite al usuario total libertad para seleccionar lo que quiera, dentro de los límites de lo que admite el _user agent_. Esto podría refinarse aún más especificando opciones adicionales y restricciones dentro de los objetos `audio` y `video`:

```js
const gdmOptions = {
  video: {
    displaySurface: "window",
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
    suppressLocalAudioPlayback: true,
  },
  surfaceSwitching: "include",
  selfBrowserSurface: "exclude",
  systemAudio: "exclude",
};
```

En este ejemplo, la superficie de visualización capturada será la ventana completa. Idealmente, la pista de audio debería tener habilitadas las funciones de supresión de ruido y cancelación de eco, así como una frecuencia de muestreo de audio ideal de 44,1 kHz y la supresión de la reproducción de audio local.

Además, la aplicación le está insinuando al _user agent_ que debería:

- Proporcionar un control durante el uso compartido de la pantalla para permitir que el usuario cambie dinámicamente la pestaña compartida.
- Ocultar la pestaña actual de la lista de opciones presentadas al usuario cuando se solicita la captura.
- No incluir el audio del sistema entre las posibles fuentes de audio ofrecidas al usuario.

La captura de audio siempre es opcional, e incluso cuando el contenido web solicita una transmisión con audio y video, el {{domxref("MediaStream")}} devuelto puede tener solo una pista de video, sin audio.

## Uso de la transmisión capturada

La {{jsxref("promise","promesa")}} devuelta por {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} se resuelve en un {{domxref("MediaStream")}} que contiene al menos un flujo de video que contiene la pantalla o el área de la pantalla, y que se ajusta o filtra según las restricciones especificadas cuando se llamó a `getDisplayMedia()`.

### Riesgos potenciales

Los problemas de privacidad y seguridad relacionados con el uso compartido de la pantalla no suelen ser demasiado graves, pero existen. El mayor problema potencial es que los usuarios compartan sin darse cuenta contenido que no deseaban compartir.

Por ejemplo, las violaciones de privacidad y/o seguridad pueden ocurrir fácilmente si el usuario está compartiendo su pantalla y una ventana de fondo visible contiene información personal, o si su administrador de contraseñas está visible en la transmisión compartida. Este efecto se puede amplificar al capturar superficies de visualización lógica, que pueden contener contenido que el usuario no conoce en absoluto, y mucho menos ver.

Los _user agent_ que se toman en serio la privacidad deben ofuscar el contenido que no es realmente visible en la pantalla, a menos que se haya otorgado autorización para compartir ese contenido específicamente.

### Autorización de captura de contenido de visualización

Antes de que pueda comenzar la transmisión del contenido de la pantalla capturada, el {{Glossary("user agent")}} le pedirá al usuario que confirme la solicitud para compartir y que seleccione el contenido para compartir.

## Ejemplos

### Captura de pantalla de transmisión

En este ejemplo, el contenido del área de la pantalla capturada se transmite a un elemento {{HTMLElement("video")}} en la misma página.

#### JavaScript

No se necesita tanto código para que esto funcione, y si está familiarizado con el uso de {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} para capturar video de una cámara, encontrará {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} muy familiar.

##### Configuración

En primer lugar, se configuran algunas constantes para hacer referencia a los elementos de la página a los que necesitaremos acceder: el {{HTMLElement("video")}} en el que se transmitirán los contenidos de la pantalla capturados, un cuadro en el que se registrará la salida se dibujará, y los botones de inicio y detención que activarán y desactivarán la captura de imágenes de pantalla.

El objeto `displayMediaOptions` contiene las opciones para pasar a `getDisplayMedia()`; aquí, la propiedad {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} se establece en `window`, lo que indica que se debe capturar toda la ventana.

Finalmente, se establecen detectores de eventos para detectar los clics de los usuarios en los botones de inicio y detención.

```js
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Opciones para getDisplayMedia()

const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  audio: false,
};

// Establecer detectores de eventos para los botones de inicio y detención
startElem.addEventListener(
  "click",
  (evt) => {
    startCapture();
  },
  false,
);

stopElem.addEventListener(
  "click",
  (evt) => {
    stopCapture();
  },
  false,
);
```

##### Registro de contenido

Este ejemplo anula ciertos métodos {{domxref("console")}} para enviar sus mensajes al bloque {{HTMLElement("pre")}} cuyo ID es `log`.

```js
console.log = (msg) => (logElem.textContent = `${logElem.textContent}\n${msg}`);
console.error = (msg) =>
  (logElem.textContent = `${logElem.textContent}\nError: ${msg}`);
```

Esto nos permite usar {{domxref("console.log()")}} y {{domxref("console.error()")}} para registrar información en el cuadro de registro del documento.

##### Iniciar captura de pantalla

El método `startCapture()`, a continuación, inicia la captura de un {{domxref("MediaStream")}} cuyos contenidos se toman de un área de la pantalla seleccionada por el usuario. `startCapture()` se llama cuando se hace clic en el botón "Iniciar captura".

```js
async function startCapture() {
  logElem.innerHTML = "";

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    dumpOptionsInfo();
  } catch (err) {
    console.error(err);
  }
}
```

Después de borrar el contenido del registro para deshacerse de cualquier texto sobrante del intento anterior de conexión, `startCapture()` llama a {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, pasando en él, el objeto de restricciones definido por `displayMediaOptions`. Usando {{jsxref("Operators/await", "await")}}, la siguiente línea de código no se ejecuta hasta que se resuelve la {{jsxref("promise","promesa")}} devuelta por `getDisplayMedia()`. Tras la resolución, la promesa devuelve un {{domxref("MediaStream")}}, que transmitirá el contenido de la pantalla, ventana u otra región seleccionada por el usuario.

La transmisión se conecta al elemento {{HTMLElement("video")}} almacenando el `MediaStream` devuelto en el {{domxref("HTMLMediaElement.srcObject", "srcObject")}} del elemento.

La función `dumpOptionsInfo()`, que veremos en un momento, descarga información sobre la transmisión en el cuadro de registro con fines educativos.

Si algo de eso falla, la cláusula [`catch()`](/es/docs/Web/JavaScript/Reference/Statements/try...catch) genera un mensaje de error en el cuadro de registro.

##### Deteniendo la captura de pantalla

El método `stopCapture()` se llama cuando se hace clic en el botón "Detener captura". Detiene la transmisión al obtener su lista de pistas usando {{domxref("MediaStream.getTracks()")}}, luego llama al método {{domxref("MediaStreamTrack.stop", "stop()")}} de cada pista. Una vez hecho esto, `srcObject` se establece en `null` para asegurarse de que cualquier persona interesada entienda que no hay una transmisión conectada.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Volcar información de configuración

Para fines informativos, el método `startCapture()` que se muestra arriba llama a un método llamado `dumpOptions()`, que genera la configuración actual de la pista, así como las restricciones que se impusieron a la transmisión cuando se creó.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Ajustes de pista:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Restricciones de pista:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

La lista de pistas se obtiene llamando a {{domxref("MediaStream.getVideoTracks", "getVideoTracks()")}} en el {{domxref("MediaStream")}} de la pantalla capturada. Los ajustes actualmente en vigor se obtienen usando {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} y las restricciones establecidas se obtienen con {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}

#### HTML

El HTML comienza con un párrafo introductorio, luego entra en el meollo de las cosas.

```html
<p>
  Este ejemplo le muestra el contenido de la parte seleccionada de su pantalla.
  Haga clic en el botón Iniciar captura para comenzar.
</p>

<p>
  <button id="start">Iniciar captura</button>&nbsp;<button id="stop">
    Detener captura
  </button>
</p>

<video id="video" autoplay></video>
<br />

<strong>Registro:</strong>
<br />
<pre id="log"></pre>
```

Las partes clave del HTML son:

1. Un {{HTMLElement("button")}} etiquetado como "Iniciar captura" que, cuando se hace clic, llama a la función `startCapture()` para solicitar acceso y comenzar a capturar el contenido de la pantalla.
2. Un segundo botón, "Detener captura", que al hacer clic llama a `stopCapture()` para finalizar la captura del contenido de la pantalla.
3. Un {{HTMLElement("video")}} en el que se transmiten los contenidos de la pantalla capturados.
4. Un bloque {{HTMLElement("pre")}} en el que el método interceptado {{domxref("console")}} coloca el texto registrado.

#### CSS

El CSS es completamente cosmético en este ejemplo. El video tiene un borde y su ancho se establece para ocupar casi todo el espacio horizontal disponible (`ancho: 98%`). {{cssxref("max-width")}} se establece en `860px` para establecer un límite superior absoluto en el tamaño del video.

```css
#video {
  border: 1px solid #999;
  width: 98%;
  max-width: 860px;
}

#log {
  width: 25rem;
  height: 15rem;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### Resultado

El producto final se ve así. Si su navegador es compatible con la API de captura de pantalla, al hacer clic en "Iniciar captura" se presentará la interfaz del {{Glossary("user agent")}} para seleccionar una pantalla, ventana o pestaña para compartir.

{{EmbedLiveSample("", 640, 800)}}

## Seguridad

Para poder funcionar cuando la [Política de permisos](/es/docs/Web/HTTP/Permissions_Policy) está habilitada, necesitarás el permiso `display-capture`. Esto se puede hacer usando el encabezado {{Glossary("HTTP")}} {{HTTPHeader("Permissions-Policy")}} o, si está usando la API de captura de pantalla en un {{HTMLElement("iframe") }}, el atributo [`allow`](/es/docs/Web/HTML/Element/iframe#allow) del elemento `<iframe>`.

Por ejemplo, esta línea en los encabezados HTTP habilitará la API de captura de pantalla para el documento y cualquier elemento {{HTMLElement("iframe")}} incrustado que se cargue desde el mismo origen:

```http
Permissions-Policy: display-capture=(self)
```

Si está realizando una captura de pantalla dentro de un `<iframe>`, puede solicitar permiso solo para ese marco, lo que claramente es más seguro que solicitar permiso en general:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de captura de pantalla](/es/docs/Web/API/Screen_Capture_API)
- [API de transmisión y captura de medios](/es/docs/Web/API/Media_Capture_and_Streams_API)
- [Tomar fotos fijas con WebRTC](/es/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)
- {{domxref("HTMLCanvasElement.captureStream()")}} para obtener un {{domxref("MediaStream")}} con los contenidos en vivo de un {{HTMLElement("canvas")}}
