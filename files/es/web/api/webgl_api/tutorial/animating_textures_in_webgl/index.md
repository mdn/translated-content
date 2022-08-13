---
title: Animating textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---
<p>{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

<p>En esta demostración nos basamos en el ejemplo anterior, solo que ahora reemplazaremos nuestra textura estática con los fotogramas de un video Ogg.</p>

<p>Esto es de hecho muy fácil de entender y de hacer, así que vamos a empezar. </p>

<p>Podemos utilizar un código similar para usar, como fuente para las texturas, otros tipos de datos tales como {{ HTMLElement("canvas") }}.</p>

<h2 id="Obteniendo_acceso_al_video">Obteniendo acceso al video</h2>

<p>El primer paso es añadir el HTML para crear el elemento {{ HTMLElement("video") }} que usaremos para obtener los fotogramas de video:</p>

<pre class="brush: js">&lt;video id="video"&gt;
  Parece ser que tu navegador no soporta el elemento HTML5. &lt;code&gt;&amp;lt;video&amp;gt;&lt;/code&gt;
&lt;/video&gt;
</pre>

<p>Esto simplemente crea un elemento para reproducir el archivo de video "Firefox.ogv". Usaremos CSS para ocultar el video</p>

<pre class="brush: css">video {
  display: none;
}
</pre>

<p>Ahora pasamos al código JavasScript, empezando por añadir una línea de código a la función start() para obtener la referencia al elemento de video:</p>

<pre class="brush: js">videoElement = document.getElementById("video");
</pre>

<p>Y reemplazamos el código que configura las llamadas de "interval-driven" en drawScecene() por esto:</p>

<pre class="brush: js">videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
</pre>

<p>Finalmente configuramos el atributo src para empezar a cargar el video. FIXME (bjacob): También se debe configurar preload="auto" o si no, el video nunca ejecuta canplaythrough en Firefox. En Chrome se debería cargar el video aun sin usar preload="auto".</p>

<pre class="brush: js">video.preload = "auto";
videoElement.src = "Firefox.ogv";</pre>

<p>El objetivo aquí es no empezar la animación hasta que una parte suficiente del video se haya cargado de modo que pueda ser reproducido sin interrupciones. Para esto añadimos un event listener para esperar a que el elemento de video nos diga que ya ha cargado los suficientes datos como para reproducir el video puede ser reproducido sin pausas.</p>

<p>The <code>startVideo()</code> quedará así:</p>

<pre class="brush: js">function startVideo() {
  videoElement.play();
  intervalID = setInterval(drawScene, 15);
}
</pre>

<p>Esto simplemente reproduce el video, entonces establece las llamadas "interval-driven" a drawScene() para gestionar el renderizado del cubo.</p>

<p>Añadiremos también un segundo event listener en el "ended" del video de modo que cuando el video haya finalizado de reproducirse nosotros podamos parar la animación.</p>

<pre class="brush: js">function videoDone() {
  clearInterval(intervalID);
}</pre>

<p>La función de videoDone() simplemente llama a {{ domxref("window.clearInterval()") }}  para terminar de llamar a la función de actualizar la animación.</p>

<h2 id="Usando_los_fotogramas_del_video_como_textura">Usando los fotogramas del video como textura</h2>

<p>El siguiente paso es initTexture(), el cual se ha vuelto mucho más simple desde que no es necesario cargar un archivo de imagen. En lugar de esto, todo lo que vamos a hacer es crear un objeto de textura vacío para configurar el filtering cuando lo usemos más tarde:</p>

<pre class="brush: js">function initTextures() {
  cubeTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
</pre>

<div>La función updateTexture() quedaría así; Aquí es donde se realiza el trabajo real.</div>

<pre class="brush: js">function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, videoElement);
}
</pre>

<p>Has visto este código antes. Es prácticamente idéntico a la rutina de handleTextureLoaded() en el ejemplo anterior, excepto que cuando llamamos a texImage2D() en lugar de pasarle un objeto Image, lo pasamos en el elemento {{ HTMLElement("video") }}. Ya que WebGL sabe como obtener el fotograma actual y usarlo como textura.</p>

<p><code>updateTexture()</code> se llama cada vez que estamos preparados para que la función drawScene() redibuje la escena. La única diferencia es que añadimos la llamada de updateTexture() antes de hacer nada más.</p>

<p>¡Esto es todo al respecto!</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8">Ver el código completo</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample8/">Abrir esta demo en una nueva página</a></p>

<h2 id="Artículos_relacionados">Artículos relacionados</h2>

<ul>
 <li><a href="/es/Using_HTML5_audio_and_video">Usar audio y video en Firefox</a></li>
</ul>

<p>{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>
