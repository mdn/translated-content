---
title: Modify a web page
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
translation_of: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---
<div>{{AddonSidebar}}</div>

<div>Uno de los usos más comunes para las extensiones es modificar páginas web.  Por ejemplo, una extension puede querer cambiar el estilo de la página, esconder determinados nodos DOM o incluir otros nuevos.</div>

<div> </div>

<div>Existen dos maneras de hacer esto con extensiones Web y APIs:</div>

<div> </div>

<ul>
 <li><strong>Declarativamente</strong>: Define un patrón que encaja con un conjunto de URLs y carga un conjunto de scripts a las páginas cuyos URL encajen con ese patrón.</li>
 <li><strong>Programaticamente</strong>: Usando una Javascript API, carga una script en la página alojada en una lengüeta específica.</li>
</ul>

<p>De ambas formas, estos scripts se llaman scripts de contenido y son distintos del resto de scripts que constituyen una extensión. </p>

<ul>
 <li>Solamente tienen acceso a un grupo pequeño de extensiones web y APIs.</li>
 <li>Obtienen acceso directo a la página web en la que han sido cargadas.</li>
 <li>Se comunican con el resto de la extensión usando una API de mensajería.</li>
</ul>

<p>En este artículo hablaremos de los dos métodos para cargar una script..</p>

<h2 id="Modificando_páginas_que_encajen_con_un_patrón_URL">Modificando páginas que encajen con un patrón URL</h2>

<p>Para empezar, crea un nuevo directorio llamado "modify-page". En este directorio, crea un archivo llamado "manifest.json", con el siguiente contenido:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]

}</pre>

<p>La llave <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> es el método de carga de scripts a páginas cuya URL encaje con los patrones. En este caso, <code>content_scripts</code> le dice al navegador que cargue una script llamada "page-eater.js" en todas las páginas con <a href="https://developer.mozilla.org/">https://developer.mozilla.org/</a>.</p>

<div class="note">
<p>Debido a que el atributo <code>"js"</code> de <code>content_scripts</code> es una array, puedes usarla para inyectar más de una script a las páginas que encajen con el patrón. Si haces esto las páginas compartiran el mismo campo de aplicación, igual que múltiples scripts cargadas por una página, y son cargadas en el mismo orden en las que están dispuestas en la array.</p>
</div>

<div class="note">
<p>La llave <code>content_scripts</code> tambien tiene un atributo de <code>"css"</code> que puedes usar para inyectar código CSS. </p>
</div>

<p>Después, crea un archivo llamado "page-eater.js" dentro del directorio "modify-page" e introduce el contenido de a continuación:</p>

<pre class="brush: js">document.body.textContent = "";

var header = document.createElement('h1');
header.textContent = "This page has been eaten";
document.body.appendChild(header);</pre>

<p> Ahora, <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">instala la extensión</a> y visita <a href="https://developer.mozilla.org/">https://developer.mozilla.org/</a>:</p>

<p>{{EmbedYouTube("lxf2Tkg6U1M")}}</p>

<div class="note">
<p>Ten en cuenta que aunque este video muestra el contenido de la script operando en <a href="https://addons.mozilla.org/en-US/firefox/">addons.mozilla.org</a>, las scripts de contenido están bloqueadas en esta página por el momento.</p>
</div>

<h2 id="Modificando_las_páginas_programaticamente">Modificando las páginas programaticamente</h2>

<p>Y si quieres comer páginas, pero solo cuando el usuario te lo pida?  Actualicemos este ejemplo para que podamos enyectar el contenido de la script cuando el usuario haga click en un item del menu de contexto.</p>

<p>Primero actualiza "manifest.json" para que incluya el contenido a continuación:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": [
    "activeTab",
    "contextMenus"
  ],

  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<p>Aquí, hemos eliminado la llave <code>content_scripts</code>  y hemos añadido dos nuevas llaves:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code>: Para inyectar scripts a las páginas necesitamos los permisos para la página que estamos modificando. El permiso <a href="/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission"><code>activeTab</code> </a>es una manera de obtener el permiso temporalmente para la lengüeta que esté actualmente abierta. También necesitamos el permiso <code>contextMenus</code> para poder añadir items al menu de contexto.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background">background</a></code>: Usamos esto para cargar un <a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">"background script"</a> persistente llamado "background.js", en el cual montamos el menu de contexto e inyectamos el script de contenido.</li>
</ul>

<p>Ahora generaremos este archivo. Crea un archivo llamado "background.js" en el directorio "modify-page" e introduce el siguiente contenido: </p>

<pre class="brush: js">browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js"
    });
  }
});
</pre>

<p>En esta script estamos creando un <a href="/en-US/Add-ons/WebExtensions/API/ContextMenus/create">item del menu de contexto</a>  y dándole una ID y un título específico (el texto que se estará expuesto en el menu de contexto). Después configuramos un evento de escucha para que cuando el usuario haga click en uno de los items del menu podamos comprobar si se trata de nuestro item <code>eat-page</code> . En caso afirmativo, inyectaremos "page-eater.js" a la lengüeta actual usando la API <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript">tabs.executeScript()</a></code>. Alternativamente, esta API puede tomar como argumento una ID. En este caso la hemos omitido lo cual quiere decir que la script es inyectada en la lengüeta que está actualmente abierta.</p>

<p>Ahora mismo la extensión debería ser algo como esto:</p>

<pre class="line-numbers  language-html"><code class="language-html">modify-page/
    background.js
    manifest.json
    page-eater.js</code></pre>

<p>Ahora <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">recarga la extensión</a>, abre la página (cualquier página en esta ocasión), activa el menu de contexto y selecciona "Eat this page" (Comer esta página):</p>

<p>{{EmbedYouTube("zX4Bcv8VctA")}}</p>

<div class="note">
<p>Ten en cuenta que aunque este video muestra el contenido de la script operando en <a href="https://addons.mozilla.org/en-US/firefox/">addons.mozilla.org</a>, las scripts de contenido están bloqueadas en esta página por el momento.</p>
</div>

<h2 id="Mensajería">Mensajería</h2>

<p>Scripts de contenido y scripts de fondo no pueden acceder directamente al estado del otro. Sin embargo, pueden comunicarse mediante el uso de mensajes. Una terminal configura un escuchador de mensajes y la otra terminal puede mandarle un mensaje. La siguente tabla resume las APIs involucradas en cada parte:</p>

<table class=" fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="row"> </th>
   <th scope="col">En el script de contenido</th>
   <th scope="col">En el script de fondo</th>
  </tr>
  <tr>
   <th scope="row">Mandar un mensaje</th>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#sendMessage()">browser.runtime.sendMessage()</a></code></td>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage">browser.tabs.sendMessage()</a></code></td>
  </tr>
  <tr>
   <th scope="row">Recibir un mensaje</th>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code></td>
   <td><code><a href="/en-US/Add-ons/WebExtensions/API/runtime#onMessage">browser.runtime.onMessage</a></code></td>
  </tr>
 </thead>
</table>

<p>Actualicemos nuestro ejemplo para ilustrar como mandar un mensaje desde una script de fondo.</p>

<p>Primero, hemos de editar "background.js" para que tenga el siguiente contenido:</p>

<pre class="brush: js">browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!"
  });
}

function onExecuted(result) {
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    let executing = browser.tabs.executeScript({
      file: "page-eater.js"
    });
    executing.then(onExecuted);
  }
});
</pre>

<p>Ahora, después de inyectar "page-eater.js", hemos de usar <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">tabs.query()</a></code>  para obtener la lengüeta actualmente activa y entonces usar <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">tabs.sendMessage()</a></code> para mandar un mensaje a las scripts de contenido cargadas en la lengüeta. El mensaje tiene el contenido <code>{replacement: "Message from the extension!"}</code>.</p>

<p>Después, actualiza "page-eater.js" de esta forma:</p>

<pre class="brush: js">function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  var header = document.createElement('h1');
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
</pre>

<p>Ahora, en vez de simplemente comer la página, el contenido espera a un mensaje usando <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">runtime.onMessage</a></code>.  Cuando el mensaje llega, el script de contenido ejecuta el mismo código de antes, exceptuando que el  texto de reemplazo se obtenido de <code>request.replacement</code>.</p>

<p>Debido a que <code><a href="/en-US/Add-ons/WebExtensions/API/tabs/executeScript">tabs.executeScript()</a></code> es una función asincrónica y para asegurarnos de que mandamos el mensaje solo cuando el escuchador ha sido añadido en "page-eater.js", usamos <code>onExecuted</code> que sera llamado después de que "page-eater.js" se ejecute.</p>

<div class="note">
<p>Pulsa Ctrl+Shift+J (o Cmd+Shift+J en el Mac)  o <code>web-ext run --bc</code> para abrir la consola de navegación para ver <code>console.log</code> en la script de fondo. Alternativamente puedes usar el <a href="/en-US/Add-ons/Add-on_Debugger">Add-on Debugger</a>, el cual te permite poner un breakpoint.  De momento no hay forma de iniciar un <a href="https://github.com/mozilla/web-ext/issues/759">Add-on Debugger directamente de una extensión web</a>.</p>
</div>

<p>Si queremos enviar mensajes directamente desde el contenido script de vuelta a la página de fondo, podríamos usar<code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage">runtime.sendMessage()</a></code> en vez de  <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">tabs.sendMessage()</a></code>. Por ejemplo:</p>

<pre class="brush: js">browser.runtime.sendMessage({
    title: "from page-eater.js"
});</pre>

<div class="note">
<p>Todos estos ejemplos inyectan Javascript; también puedes inyectar CSS programaticamente usando la función<code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS">tabs.insertCSS()</a></code>.</p>
</div>

<h2 id="Aprende_más">Aprende más</h2>

<ul>
 <li>La guía de <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">scripts de contenido</a></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> llave de manifiesto</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> llave de manifiesto</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript">tabs.executeScript()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS">tabs.insertCSS()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">tabs.sendMessage()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage">runtime.sendMessage()</a></code></li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">runtime.onMessage</a></code></li>
 <li>Ejemplos con<code>content_scripts</code>:
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">borderify</a></li>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n">notify-link-clicks-i18n</a></li>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging">page-to-extension-messaging</a></li>
  </ul>
 </li>
 <li>Ejemplos con<code>tabs.executeScript()</code>:
  <ul>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a></li>
   <li><a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-demo">context-menu-demo</a></li>
  </ul>
 </li>
</ul>

<p> </p>
