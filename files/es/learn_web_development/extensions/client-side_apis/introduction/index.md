---
title: Introducción a las APIs web
short-title: Introducción
slug: Learn_web_development/Extensions/Client-side_APIs/Introduction
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Primero, empezaremos observando las APIs desde un nivel general: qué son, cómo funcionan, cómo usarlas en tu código y cómo están estructuradas. También veremos cuáles son las diferentes clases principales de APIs y qué tipo de usos tienen.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/es/docs/Learn_web_development/Core/Styling_basics">CSS</a> y <a href="/es/docs/Learn_web_development/Core/Scripting">JavaScript</a>, especialmente <a href="/es/docs/Learn_web_development/Core/Scripting/Object_basics">los fundamentos de objetos en JavaScript</a> y aspectos básicos de APIs como <a href="/es/docs/Learn_web_development/Core/Scripting/DOM_scripting">scripting del DOM</a> y <a href="/es/docs/Learn_web_development/Core/Scripting/Network_requests">solicitudes de red</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué son las APIs web y qué puedes hacer con ellas.</li>
          <li>Cómo se usan las APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué son las APIs?

Las interfaces de programación de aplicaciones (APIs), son construcciones disponibles en los lenguajes de programación para permitir que los desarrolladores creen funcionalidades complejas con mayor facilidad. Abstraen el código más complejo, dándote una sintaxis más sencilla para usar en su lugar.

Como ejemplo del mundo real, piensa en el suministro eléctrico de tu casa, apartamento u otra vivienda. Si quieres usar un electrodoméstico en tu casa, lo conectas a un enchufe y funciona. No intentas conectarlo directamente al suministro eléctrico; hacerlo sería muy ineficiente y, si no eres electricista, difícil y peligroso de intentar.

![Dos regletas multitoma están conectadas a dos enchufes de pared diferentes. Cada regleta tiene una ranura para enchufe en su parte superior y en su lado frontal. Hay dos enchufes conectados a cada regleta.](plug-socket.png)

_Fuente de la imagen: [Enchufe sobrecargado](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) por [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), en Flickr._

De la misma manera, si quieres, por ejemplo, programar gráficos 3D, es mucho más fácil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir directamente código de bajo nivel (por ejemplo, C o C++) que controle directamente la GPU de la computadora u otras funciones gráficas.

> [!NOTE]
> Consulta también la [entrada del glosario sobre API](/es/docs/Glossary/API) para más información.

### APIs en JavaScript del lado del cliente

El JavaScript del lado del cliente, en particular, tiene muchas APIs disponibles; estas no forman parte del lenguaje JavaScript en sí, sino que están construidas sobre el lenguaje base de JavaScript, brindándote superpoderes adicionales para usar en tu código JavaScript. Por lo general, se dividen en dos categorías:

- Las **APIs del navegador** están integradas en tu navegador web y pueden exponer datos del navegador y del entorno informático circundante, y hacer cosas complejas y útiles con ellos. Por ejemplo, la [Web Audio API](/es/docs/Web/API/Web_Audio_API) proporciona construcciones de JavaScript para manipular audio en el navegador: tomar una pista de audio, alterar su volumen, aplicarle efectos, etc. Detrás de escena, el navegador en realidad usa código complejo de más bajo nivel (por ejemplo, C++ o Rust) para realizar el procesamiento de audio real. Pero, una vez más, esta complejidad queda abstraída de ti gracias a la API.
- Las **APIs de terceros** no vienen integradas en el navegador de forma predeterminada, y por lo general debes obtener su código e información desde algún lugar de la Web. Por ejemplo, la [API de Google Maps](https://developers.google.com/maps/documentation/javascript) te permite hacer cosas como mostrar un mapa interactivo de tu oficina en tu sitio web. Proporciona un conjunto especial de construcciones que puedes usar para consultar el servicio de Google Maps y obtener información específica.

![Una captura de pantalla del navegador con la página de inicio del navegador Firefox abierta. Hay APIs integradas en el navegador de forma predeterminada. Las APIs de terceros no están integradas en el navegador de forma predeterminada. Su código e información deben obtenerse de algún lugar de la web para utilizarlos.](browser.png)

### Relación entre JavaScript, las APIs y otras herramientas de JavaScript

Arriba hablamos sobre qué son las APIs de JavaScript del lado del cliente y cómo se relacionan con el lenguaje JavaScript. Repasemos esto para que quede más claro, y mencionemos también dónde encajan otras herramientas de JavaScript:

- JavaScript: un lenguaje de scripting de alto nivel integrado en los navegadores que te permite implementar funcionalidad en páginas web/aplicaciones. Ten en cuenta que JavaScript también está disponible en otros entornos de programación, como [Node](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).
- APIs del navegador: construcciones integradas en el navegador que se sitúan sobre el lenguaje JavaScript y te permiten implementar funcionalidad con mayor facilidad.
- APIs de terceros: construcciones integradas en plataformas de terceros (por ejemplo, Disqus, Facebook) que te permiten usar parte de la funcionalidad de esas plataformas en tus propias páginas web (por ejemplo, mostrar tus comentarios de Disqus en una página web).
- Bibliotecas de JavaScript: normalmente uno o más archivos de JavaScript que contienen [funciones personalizadas](/es/docs/Learn_web_development/Core/Scripting/Functions) que puedes incorporar a tu página web para acelerar o facilitar la escritura de funcionalidad común. Algunos ejemplos son jQuery, Mootools y React.
- Frameworks de JavaScript: el siguiente paso después de las bibliotecas, los frameworks de JavaScript (por ejemplo, Angular y Ember) suelen ser paquetes de HTML, CSS, JavaScript y otras tecnologías que instalas y luego usas para escribir una aplicación web completa desde cero. La diferencia clave entre una biblioteca y un framework es la "inversión de control". Al llamar a un método de una biblioteca, el desarrollador tiene el control. Con un framework, el control se invierte: el framework llama al código del desarrollador.

## ¿Qué pueden hacer las APIs?

Existe una enorme cantidad de APIs disponibles en los navegadores modernos que te permiten hacer una amplia variedad de cosas en tu código. Puedes comprobarlo echando un vistazo a la [página índice de APIs de MDN](/es/docs/Web/API).

### APIs comunes del navegador

En particular, las categorías más comunes de APIs del navegador que usarás (y que cubriremos con mayor detalle en este módulo) son:

- **APIs para manipular documentos** cargados en el navegador. El ejemplo más obvio es la [API DOM (Document Object Model)](/es/docs/Web/API/Document_Object_Model), que te permite manipular HTML y CSS: crear, eliminar y cambiar HTML, aplicar dinámicamente nuevos estilos a tu página, etc. Cada vez que ves aparecer una ventana emergente en una página o algún contenido nuevo mostrarse, por ejemplo, eso es el DOM en acción. Descubre más sobre este tipo de APIs en [Introducción al scripting del DOM](/es/docs/Learn_web_development/Core/Scripting/DOM_scripting).
- Las **APIs que obtienen datos del servidor** para actualizar pequeñas secciones de una página web por sí solas se usan muy comúnmente. Este detalle aparentemente pequeño ha tenido un enorme impacto en el rendimiento y comportamiento de los sitios: si solo necesitas actualizar una cotización de bolsa o una lista de noticias disponibles, hacerlo al instante sin tener que recargar toda la página desde el servidor puede hacer que el sitio o la aplicación se sienta mucho más ágil y "receptiva". La API principal usada para esto es la [Fetch API](/es/docs/Web/API/Fetch_API), aunque el código más antiguo aún podría usar la API [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest). También es posible que te encuentres con el término **AJAX**, que describe esta técnica. Descubre más sobre este tipo de APIs en [Cómo hacer solicitudes de red con JavaScript](/es/docs/Learn_web_development/Core/Scripting/Network_requests).
- Las **APIs para dibujar y manipular gráficos** cuentan con amplio soporte en los navegadores; las más populares son [Canvas](/es/docs/Web/API/Canvas_API) y [WebGL](/es/docs/Web/API/WebGL_API), que te permiten actualizar de forma programática los datos de píxeles contenidos en un elemento HTML {{htmlelement("canvas")}} para crear escenas 2D y 3D. Por ejemplo, podrías dibujar formas como rectángulos o círculos, importar una imagen al canvas y aplicarle un filtro como sepia o escala de grises usando la Canvas API, o crear una escena 3D compleja con iluminación y texturas usando WebGL. Este tipo de APIs suele combinarse con APIs para crear bucles de animación (como {{domxref("window.requestAnimationFrame()")}}) y otras, para producir escenas en constante actualización como caricaturas y juegos.
- **[APIs de audio y video](/es/docs/Web/Media/Guides/Audio_and_video_delivery)** como {{domxref("HTMLMediaElement")}}, la [Web Audio API](/es/docs/Web/API/Web_Audio_API) y [WebRTC](/es/docs/Web/API/WebRTC_API) te permiten hacer cosas realmente interesantes con multimedia, como crear controles de interfaz personalizados para reproducir audio y video, mostrar pistas de texto como subtítulos junto con tus videos, capturar video de tu cámara web para manipularlo mediante un canvas (ver arriba) o mostrarlo en la computadora de otra persona en una videoconferencia, o agregar efectos a pistas de audio (como ganancia, distorsión, paneo, etc.).
- Las **APIs de dispositivo** te permiten interactuar con el hardware del dispositivo: por ejemplo, acceder al GPS del dispositivo para encontrar la ubicación del usuario usando la [Geolocation API](/es/docs/Web/API/Geolocation_API).
- Las **APIs de almacenamiento del lado del cliente** te permiten almacenar datos en el lado del cliente, para que puedas crear una aplicación que guarde su estado entre cargas de página, e incluso funcione cuando el dispositivo esté sin conexión. Hay varias opciones disponibles, por ejemplo, almacenamiento simple de nombre/valor con la [Web Storage API](/es/docs/Web/API/Web_Storage_API), y almacenamiento de bases de datos más complejo con la [IndexedDB API](/es/docs/Web/API/IndexedDB_API).

### APIs comunes de terceros

Las APIs de terceros vienen en una gran variedad; algunas de las más populares que probablemente uses tarde o temprano son:

- APIs de mapas, como [Mapquest](https://developer.mapquest.com/) y la [API de Google Maps](https://developers.google.com/maps/), que te permiten hacer todo tipo de cosas con mapas en tus páginas web.
- El [conjunto de APIs de Facebook](https://developers.facebook.com/docs/), que te permite usar varias partes del ecosistema de Facebook en beneficio de tu aplicación, como proporcionar inicio de sesión mediante Facebook login, aceptar pagos dentro de la aplicación, lanzar campañas publicitarias segmentadas, etc.
- Las [APIs de Telegram](https://core.telegram.org/api), que te permiten insertar contenido de canales de Telegram en tu sitio web, además de brindar soporte para bots.
- La [API de YouTube](https://developers.google.com/youtube/), que te permite insertar videos de YouTube en tu sitio, buscar en YouTube, crear listas de reproducción y más.
- La [API de Pinterest](https://developers.pinterest.com/), que proporciona herramientas para gestionar tableros y pines de Pinterest e incluirlos en tu sitio web.
- La [API de Twilio](https://www.twilio.com/docs), que proporciona un framework para integrar funcionalidad de llamadas de voz y video en tu aplicación, enviar SMS/MMS desde tus aplicaciones y más.
- La [API de Disqus](https://disqus.com/api/docs/), que proporciona una plataforma de comentarios que se puede integrar en tu sitio.
- La [API de Mastodon](https://docs.joinmastodon.org/api/), que te permite manipular funciones de la red social Mastodon de forma programática.
- La [API de IFTTT](https://ifttt.com/developers), que permite integrar múltiples APIs a través de una sola plataforma.

## ¿Cómo funcionan las APIs?

Las diferentes APIs de JavaScript funcionan de maneras ligeramente distintas, pero en general comparten características comunes y temas similares en su funcionamiento.

### Se basan en objetos

Tu código interactúa con las APIs mediante uno o más [objetos de JavaScript](/es/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), que sirven como contenedores para los datos que usa la API (contenidos en las propiedades del objeto) y la funcionalidad que la API pone a disposición (contenida en los métodos del objeto).

> [!NOTE]
> Si aún no estás familiarizado con cómo funcionan los objetos, deberías volver atrás y trabajar en nuestro módulo de [objetos de JavaScript](/es/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) antes de continuar.

Volvamos al ejemplo de la Web Audio API: esta es una API bastante compleja, que consiste en varios objetos. Los más evidentes son:

- {{domxref("AudioContext")}}, que representa un [grafo de audio](/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) que se puede usar para manipular el audio que se reproduce dentro del navegador, y cuenta con varios métodos y propiedades disponibles para manipular ese audio.
- {{domxref("MediaElementAudioSourceNode")}}, que representa un elemento {{htmlelement("audio")}} que contiene el sonido que quieres reproducir y manipular dentro del contexto de audio.
- {{domxref("AudioDestinationNode")}}, que representa el destino del audio, es decir, el dispositivo de tu computadora que realmente lo emitirá, generalmente tus altavoces o audífonos.

Entonces, ¿cómo interactúan estos objetos? Si observas nuestro [ejemplo sencillo de web audio](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/web-audio/index.html) ([también puedes verlo en vivo](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), primero verás el siguiente HTML:

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Reproducir</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

Primero que todo, incluimos un elemento `<audio>` con el que incrustamos un MP3 en la página. No incluimos ningún control predeterminado del navegador. Después incluimos un {{htmlelement("button")}} que usaremos para reproducir y detener la música, y un elemento {{htmlelement("input")}} de tipo range, que usaremos para ajustar el volumen de la pista mientras se reproduce.

A continuación, veamos el JavaScript de este ejemplo.

Comenzamos creando una instancia de `AudioContext` dentro de la cual manipularemos nuestra pista:

```js
const audioCtx = new AudioContext();
```

Luego, creamos constantes que almacenan referencias a nuestros elementos `<audio>`, `<button>` e `<input>`, y usamos el método {{domxref("AudioContext.createMediaElementSource()")}} para crear un `MediaElementAudioSourceNode` que representa la fuente de nuestro audio, el elemento `<audio>` desde el que se reproducirá:

```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

A continuación, incluimos un par de manejadores de eventos que sirven para alternar entre reproducir y pausar cuando se presiona el botón, y para restablecer la pantalla al inicio cuando la canción termina de reproducirse:

```js
// reproducir/pausar audio
playBtn.addEventListener("click", () => {
  // verificar si el contexto está en estado suspendido (política de reproducción automática)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // si la pista está detenida, reproducirla
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pausar";
    // si la pista se está reproduciendo, detenerla
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Reproducir";
  }
});

// si la pista termina
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Reproducir";
});
```

> [!NOTE]
> Algunos de ustedes notarán que los métodos `play()` y `pause()` que se usan para reproducir y pausar la pista no forman parte de la Web Audio API; forman parte de la API {{domxref("HTMLMediaElement")}}, que es diferente pero está estrechamente relacionada.

Luego, creamos un objeto {{domxref("GainNode")}} usando el método {{domxref("BaseAudioContext/createGain", "AudioContext.createGain()")}}, que se puede usar para ajustar el volumen del audio que pasa a través de él, y creamos otro manejador de eventos que cambia el valor de la ganancia (volumen) del grafo de audio cada vez que se cambia el valor del control deslizante:

```js
// volumen
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
```

Lo último que hay que hacer para que esto funcione es conectar los diferentes nodos en el grafo de audio, lo cual se hace usando el método {{domxref("AudioNode.connect()")}} disponible en cada tipo de nodo:

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

El audio comienza en la fuente, que luego se conecta al nodo de ganancia para que se pueda ajustar el volumen del audio. El nodo de ganancia luego se conecta al nodo de destino para que el sonido se pueda reproducir en tu computadora (la propiedad {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} representa cualquiera que sea el {{domxref("AudioDestinationNode")}} predeterminado disponible en el hardware de tu computadora, por ejemplo, tus altavoces).

### Tienen puntos de entrada reconocibles

Al usar una API, debes asegurarte de saber cuál es el punto de entrada de la API. En la Web Audio API, esto es bastante sencillo: es el objeto {{domxref("AudioContext")}}, que se debe usar para realizar cualquier manipulación de audio.

El Document Object Model (DOM) API también tiene un punto de entrada sencillo: sus funciones suelen encontrarse colgando del objeto {{domxref("Document")}}, o de una instancia del elemento HTML que quieras afectar de alguna manera, por ejemplo:

```js
const em = document.createElement("em"); // crear un nuevo elemento em
const para = document.querySelector("p"); // referenciar un elemento p existente
em.textContent = "¡Hola!"; // darle a em algo de contenido de texto
para.appendChild(em); // incrustar em dentro de para
```

La [Canvas API](/es/docs/Web/API/Canvas_API) también depende de obtener un objeto de contexto para manipular cosas, aunque en este caso es un contexto gráfico en lugar de un contexto de audio. Su objeto de contexto se crea obteniendo una referencia al elemento {{htmlelement("canvas")}} sobre el que quieres dibujar, y luego llamando a su método {{domxref("HTMLCanvasElement.getContext()")}}:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

Todo lo que queramos hacer en el canvas se logra entonces llamando a las propiedades y métodos del objeto de contexto (que es una instancia de {{domxref("CanvasRenderingContext2D")}}), por ejemplo:

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> [!NOTE]
> Puedes ver este código en acción en nuestra [demostración de pelotas rebotando](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/bouncing-balls.html) (también puedes [verla en vivo](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html)).

### Frecuentemente usan eventos para manejar cambios de estado

Ya hablamos sobre los eventos anteriormente en el curso, en nuestro artículo [Introducción a los eventos](/es/docs/Learn_web_development/Core/Scripting/Events), que analiza en detalle qué son los eventos web del lado del cliente y cómo se usan en tu código. Si aún no estás familiarizado con cómo funcionan los eventos de las APIs web del lado del cliente, deberías ir a leer ese artículo primero antes de continuar.

Algunas APIs web no contienen eventos, pero la mayoría contiene al menos algunos. Las propiedades de manejador que nos permiten ejecutar funciones cuando se disparan los eventos generalmente se listan en nuestro material de referencia en secciones separadas de "Manejadores de eventos".

Ya vimos varios manejadores de eventos en uso en nuestro ejemplo de la Web Audio API más arriba:

```js
// reproducir/pausar audio
playBtn.addEventListener("click", () => {
  // verificar si el contexto está en estado suspendido (política de reproducción automática)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // si la pista está detenida, reproducirla
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pausar";
    // si la pista se está reproduciendo, detenerla
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Reproducir";
  }
});

// si la pista termina
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Reproducir";
});
```

### Cuentan con mecanismos de seguridad adicionales cuando corresponde

Las funciones de las WebAPI están sujetas a las mismas consideraciones de seguridad que JavaScript y otras tecnologías web (por ejemplo, la [política de mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy)), pero a veces cuentan con mecanismos de seguridad adicionales. Por ejemplo, algunas de las WebAPIs más modernas solo funcionarán en páginas servidas por HTTPS debido a que transmiten datos potencialmente sensibles (algunos ejemplos son [Service Workers](/es/docs/Web/API/Service_Worker_API) y [Push](/es/docs/Web/API/Push_API)).

Además, algunas WebAPIs solicitan permiso para habilitarse por parte del usuario una vez que se realizan llamadas a ellas en tu código. Como ejemplo, la [Notifications API](/es/docs/Web/API/Notifications_API) solicita permiso mediante un cuadro de diálogo emergente:

![Una captura de pantalla del cuadro de diálogo emergente de notificaciones proporcionado por la Notifications API del navegador. El sitio web 'mdn.github.io' está solicitando permisos para enviar notificaciones al user-agent, con una X para cerrar el diálogo y un menú desplegable de opciones con 'recibir siempre notificaciones' seleccionado de forma predeterminada.](notification-permission.png)

Las APIs Web Audio y {{domxref("HTMLMediaElement")}} están sujetas a un mecanismo de seguridad llamado [política de reproducción automática](/es/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy): esto básicamente significa que no puedes reproducir audio automáticamente cuando se carga una página, sino que debes permitir que tus usuarios inicien la reproducción de audio mediante un control como un botón. Esto se hace porque la reproducción automática de audio suele ser realmente molesta y no deberíamos someter a nuestros usuarios a ella.

> [!NOTE]
> Dependiendo de qué tan estricto sea el navegador, este tipo de mecanismos de seguridad podrían incluso impedir que el ejemplo funcione localmente, es decir, si cargas el archivo de ejemplo local en tu navegador en lugar de ejecutarlo desde un servidor web. Al momento de escribir esto, nuestro ejemplo de la Web Audio API no funcionaba localmente en Google Chrome, tuvimos que subirlo a GitHub para que funcionara.

## Resumen

A estas alturas, deberías tener una buena idea de qué son las APIs, cómo funcionan y qué puedes hacer con ellas en tu código JavaScript. Probablemente estés emocionado por empezar a hacer cosas divertidas con APIs específicas, ¡así que vamos! A continuación, veremos las APIs de video y audio.

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
