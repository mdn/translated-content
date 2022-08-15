---
title: Agregar botón a la barra de herramientas
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
translation_of: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
---
<div>{{AddonSidebar}}</div>

<p>La barra de herramientas es una de las principales componentes UI disponibles para las extensiones. Toolbar buttons live in the main browser toolbar y contienen un icono. Cuando el usuario da click en el icono, dos cosas pueden suceder:</p>

<ul>
 <li>Si tu tienes especificado un popup para el icono, se va a mostrar. Popups son  transitorios cuadros de diálogos creados usando  HTML, CSS, y JavaScript.</li>
 <li>Si no tu tienes especificado un popup, un evento del click es generado,el cual puede ser detectado en tu codigo para realizar alguna acción  y responderla.</li>
</ul>

<p>Con las  APIs de WebExtension, este tipo de botón es se llaman "browser actions", y son  configurados de la siguiente manera:</p>

<ul>
 <li>La clave  <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code>  en manifest.json es usada para definir el  botón.</li>
 <li>La API de JavaScript <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a></code> es usada para escuchar los  clicks y cambiar el botón o realizar alguna acción en el codigo.</li>
</ul>

<h2 id="Un_simple_botón">Un simple botón</h2>

<p>En esta sección vamos a crear una extension que agrega un botón a la barra de herramientas. Cuando el usuario de click en el botón, vamos abrir <a href="https://developer.mozilla.org">https://developer.mozilla.org </a>en una nueva pestaña.</p>

<p>Primero, crear una nueva carpeta "botón", y crea un archivo con el nombre de "manifest.json"  con el siguiente contenido:</p>

<pre class="brush: json">{

  "description": "Demostrando botones de la barra de herramientas",
  "manifest_version": 2,
  "name": "botón-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }

}</pre>

<p>Esto especifica que tenemos un  <a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">background script</a>  llamado "background.js",  y un <strong>browser action</strong> (butón) cuyo icono va a estar en la carpeta "icons".</p>

<div class="pull-aside">
<div class="moreinfo">Estos iconos son de  <a href="https://www.iconfinder.com/iconsets/bitsies">bitsies!</a> conjunto de iconos creados por Recep Kütük.</div>
</div>

<p>Despues, dentro del folder "botón"  crea la carpeta "icons"  y dentro de el guarda estos dos iconos:</p>

<ul>
 <li>"page-16.png" (<img alt="" src="https://mdn.mozillademos.org/files/13476/page-16.png" style="height: 16px; width: 16px;">)</li>
 <li>"page-32.png" (<img alt="" src="https://mdn.mozillademos.org/files/13478/page-32.png" style="height: 32px; width: 32px;">).</li>
</ul>

<div style=""> </div>

<p>Tenemos dos iconos entonces podemos usar el mas grande para las <span id="result_box" lang="es"><span>pantallas de alta densidad</span></span>. El navegador se va encargar de seleccionar el correcto para cada pantalla.</p>

<p>Despues, crea "background.js" en la raiz del folder de la extension, y agrega el siguiente contenido:</p>

<pre class="brush: js">function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
}

browser.browserAction.onClicked.addListener(openPage);</pre>

<p>Esto esta a la espera de de el navegador se de click; cuando el evento se dispara, la funcion <code>openPage()</code> comienza a ejecutarse,  el cual abre la página especificada usando la API de <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs">tabs</a></code>.</p>

<p>En este momento la extension debe de mirarse asi:</p>

<pre class="line-numbers  language-html"><code class="language-html">button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json</code></pre>

<p>Ahora  <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">instala la extensión</a>  y da  click en el botón:</p>

<p>{{EmbedYouTube("kwwTowgT-Ys")}}</p>

<h2 id="Agregando_un_popup">Agregando un popup</h2>

<p>Vamos a intentar agregar un popup al botón.  Remplaza el manifest.json con este contenido:</p>

<pre class="brush: json">{

  "description": "Demostrando botones de la barra de herramientas",
  "manifest_version": 2,
  "name": "botón-demo",
  "version": "1.0",

  "browser_action": {
    "browser_style": true,
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }

}</pre>

<p>Realizamos tres cambios:</p>

<ul>
 <li>Ya no hacemos referencia a  "background.js",  porque ahora nosotros vamos a controlar la lógica de la extensión en el script del popup (También es posible background.js  como un popup,  es solo qu no lo necesitamos en este caso).</li>
 <li>Agregamos <code>"browser_style": true</code>, cual nos ayuda a dar estiloa nuestro popup y luzca mas integrado al navegador.</li>
 <li>Finalmente, agregamos <code>"default_popup": "popup/choose_page.html"</code>, cual le dice al navegador que esta acción ahora va a mostar un popup cuando se haga click , usando el documento que se encuentra en "popup/choose_page.html".</li>
</ul>

<p>Entonces ahora necesitamos crear el  popup. Crea un folder llamado "popup"  y crea adentro el archivo  "choose_page.html" . agregale el siguiente contenido:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="choose_page.css"/&gt;
  &lt;/head&gt;

&lt;body&gt;
  &lt;div class="page-choice"&gt;developer.mozilla.org&lt;/div&gt;
  &lt;div class="page-choice"&gt;support.mozilla.org&lt;/div&gt;
  &lt;div class="page-choice"&gt;addons.mozilla.org&lt;/div&gt;
  &lt;script src="choose_page.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;</pre>

<p>Puedes notar que es un nomal archivo HTML que contiene tres elementos {{htmlelement("div")}}, con direcciones de Mozilla. También incluye archivos de CSS y  JavaScript, en los cuales vamos agregar lo siguiente.</p>

<p>Crea el archivo "choose_page.css"  adentro de la carpeta "popup" , con el siguiente contenido:</p>

<pre class="brush: css">html, body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.page-choice:hover {
  background-color: #CFF2F2;
}</pre>

<p>Es solo un poco de estilo a nuestro popup.</p>

<p>Ahora, crea un  archivo "choose_page.js" dentro del folder "popup" con el siguiente contenido:</p>

<pre class="brush: js">document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "https://" + e.target.textContent;
  browser.tabs.create({
    url: chosenPage
  });

});</pre>

<p>En nuestro JavaScript,  esta a la espera de clicks en las opciones de nuestro popup. Primero revisa si el click fue en una de nuestras elecciones, si no, no realizamos nada mas. Se seleccion una carga una página elegida,  en una nueva pestaña con la correspondiente página. Nota que podemos usar las APIs WebExtension  en el script del popup, como también scripts de fondo.</p>

<p>La  estructura de la extensión final debe ser como esta:</p>

<pre>button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json</pre>

<p>Ahora vamos a recargar la extensión, click en el botón  otra vez e intenta dar click en las opciones del popup:</p>

<p>{{EmbedYouTube("QPEh1L1xq0Y")}}</p>

<h2 id="Acciones_de_página">Acciones de página</h2>

<p><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Page_actions">Acciones de página</a> son como las acciones del navegador, excepto que son acciones relevantes solo para algunas página en particular.</p>

<p>Mientras de las acciones del navegaro siembre son mostradas, las acciones de página son solo mostradas en pestañas donde son relevantes. Los botones de las acciones de página son mostradas en la barra URL , en vez de la barra de herramientas del navegador.</p>

<h2 id="Aprende_más">Aprende más</h2>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> manifest key</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a></code> API</li>
 <li>Ejemplos de acciones del navegador:
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a></li>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/bookmark-it">Bookmark it!</a></li>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">favourite-colour</a></li>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/inpage-toolbar-ui">inpage-toolbar-ui</a></li>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/open-my-page-button">open-my-page-button</a></li>
  </ul>
 </li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> manifest key</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a></code> API</li>
 <li>Ejemplos de Acciones de página:
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/chill-out">chill-out</a></li>
  </ul>
 </li>
</ul>
