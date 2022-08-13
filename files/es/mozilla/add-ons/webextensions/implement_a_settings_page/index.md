---
title: Implementar una página de configuración
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
tags:
  - JavaScript
translation_of: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---
<div>{{AddonSidebar}}</div>

<p>Una página de configuración ofrece a los usuarios una manera de ver y cambiar los ajustes (algunas veces también llamados "preferencias" u "opciones") para el complemento.</p>

<p>Con WebExtensions, los ajustes generalmente se almacenan utilizando la  API <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code> . La implementación de una página de configuración se realiza en un proceso de tres pasos:</p>

<ul>
 <li>Escribir un archivo HTML que muestre los ajustes y permita al usuario cambiarlos.</li>
 <li>Escribir un script, incluido desde el archivo HTML , que establece la página de configuración desde su almacenamiento y actualiza los ajustes seleccionados cuando el usuario los modifica.</li>
 <li>Establecer la ruta al archivo HTML como la clave  <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui </a></code> en manifest.json. Haciendo esto, el documento HTML  se mostrará en el administrador de complementos del navegador, junto al nombre del complemento y su descripción.</li>
</ul>

<div class="note">
<p>También puedes abrir esta página mediante programación utilizando la función <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code> .</p>
</div>

<h2 id="Una_sencilla_ExtensionWeb">Una sencilla  ExtensionWeb</h2>

<p>En primer lugar, vamos a escribir una extensión que añada un borde azul a todas las páginas que el usuario visita.</p>

<p>Crea un nuevo directorio llamado "configuración", a continuación crea un archivo llamado"manifest.json" en su interior ,con el siguiente contenido:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ],

  "applications": {
    "gecko": {
      "id": "settings-example@mozilla.org"
    }
  }

}</pre>

<p>Este complemento da instrucciones al navegador para cargar un script de contenido llamado "borderify.js" en todas las páginas web que el usuario visita.</p>

<p>Ten en cuenta que también hemos incluido la clave <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> .  Necesitaremos esto (solamente en Firefox ) porque si hay un error, debemos establecer explícitamente (la identidad del complemento) <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID">add-on ID</a> , y también incluimos la clave de manifiesto <code>options_ui</code>. Aunque no utilicemos la clave <code>options_ui</code> en ese momento, lo haremos en la siguiente sección. Ver el  <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1269454">bug 1269545</a>.</p>

<p>A continuación, crea un archivo llamado "borderify.js" en el directorio "configuración" , y añade el siguiente contenido :</p>

<pre class="brush: js">document.body.style.border = "10px solid blue";</pre>

<p>Esto solo añade un borde azul a la página.</p>

<p>Ahora <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">instala WebExtension</a> y comprueba — abre cualquier página web que te guste:</p>

<p>{{EmbedYouTube("E-WUhihF8fw")}}</p>

<h2 id="Añadir_ajustes">Añadir ajustes</h2>

<p>Ahora vamos a crear una página de configuración que permita al usuario establecer el color del borde.</p>

<p>En primer lugar, actualiza "manifest.json" para que tenga este contenido:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["&lt;all_urls&gt;"],
      "js": ["borderify.js"]
    }
  ],

  "applications": {
    "gecko": {
      "id": "settings-example@mozilla.org"
    }
  },

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"]

}
</pre>

<p>Hemos añadido dos nuevas claves de manifiesto:</p>

<ul>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code>: Esta establece un documento HTML  que es la página de configuración (tambien llamada página de opciones) para este complemento.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code>: utilizaremos la API <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code>  para almacenar los ajustes, y necesitaremos pedir permiso para utilizar esta API.</li>
</ul>

<p>A continuacion, como hemos prometido  crear "options.html", vamos a realizarlo. Crea un archivo con ese nombre en el directorio "configuración" , y añade el siguiente contenido:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;

  &lt;body&gt;

    &lt;form&gt;
        &lt;label&gt;Border color&lt;input type="text" id="color" &gt;&lt;/label&gt;
        &lt;button type="submit"&gt;Save&lt;/button&gt;
    &lt;/form&gt;

    &lt;script src="options.js"&gt;&lt;/script&gt;

  &lt;/body&gt;

&lt;/html&gt;
</pre>

<p>Esto define un elemento HTML {{htmlelement("form")}} con un texto etiquetado {{htmlelement("input")}} y un botón de envio {{htmlelement("button")}}. también incluye un script llamado "options.js".</p>

<p>Crea "options.js", de nuevo en el directorio "configuración" , y añade el siguiente contenido:</p>

<pre class="brush: js">function saveOptions(e) {
  chrome.storage.local.set({
    color: document.querySelector("#color").value
  });
}

function restoreOptions() {
  chrome.storage.local.get("color", (res) =&gt; {
    document.querySelector("#color").value = res.color || "blue";
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);</pre>

<p>Esto hace dos cosas:</p>

<ul>
 <li>Cuando el documento ha sido cargado, se obtiene el valor "color" desde el almacenamiento utilizando <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get">storage.local.get()</a></code>. Si el valor no se ha establecido, utiliza por defecto "azul".</li>
 <li>Cuando el usuario envía el formulario haciendo click en "guardar", se almacena el valor del cuadro de texto utilizando <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set">storage.local.set()</a></code>.</li>
</ul>

<p>Finalmente, actualiza "borderify.js" para leer el color del borde del almacenamiento:</p>

<pre class="brush: js">chrome.storage.local.get(null, (res) =&gt; {
  var color = "blue";
  if (res.color) {
    color = res.color;
  }
  document.body.style.border = "10px solid " + color;
});</pre>

<p>En este punto, el complemento completo debe tener este aspecto:</p>

<pre>settings/
    borderify.js
    manifest.json
    options.html
    options.js</pre>

<p>Ahora:</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">recarga WebExtension.</a></li>
 <li>carga una página web.</li>
 <li>abre la página de configuración y cambia el color del borde.</li>
 <li>recarga la página web para ver la diferencia.</li>
</ul>

<p>En Firefox se puede accededer a la página de configuración visitando : complementos y haciendo click en el botón "Preferencias" junto a la entrada del complemento.</p>

<p>{{EmbedYouTube("ECt9cbWh1qs")}}</p>

<h2 id="Aprende_más">Aprende más</h2>

<ul>
 <li>Documentación de referencia de la clave de manifiesto.<a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui.</a></li>
 <li>Documentación de referencia de la API  <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage.</a></li>
 <li>Abrir la página de configuración directamente desde el complemento utilizando la API <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage().</a></code></li>
 <li>Página de ejemplo de configuraciones:
  <ul>
   <li><a href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">color-favorito.</a></li>
  </ul>
 </li>
</ul>

<p> </p>
