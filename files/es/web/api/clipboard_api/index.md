---
title: API del portapapeles
slug: Web/API/Clipboard_API
translation_of: Web/API/Clipboard_API
original_slug: Web/API/API_del_portapapeles
---
<div>{{DefaultAPISidebar("Clipboard API")}}</div>

<p>La <strong>API del portapapeles </strong>permite acceder los comandos del portapapeles (cortar, copiar y pegar), así como leer y escribir de manera asíncrona el portapapeles del sistema. Acceder al contenido del portapapeles está sujeta a la <a href="/es/docs/Web/API/Permissions_API">API de permisos</a>: El permiso <code>clipboard-write</code> es concedido automáticamente a las páginas cuando están en la pestaña activa. El permiso <code>clipboard-read</code> debe ser solicitado, lo que se puede hacer intentando leer directamente el portapapeles.</p>

<p>Esta API está diseñada para reemplazar el acceso al portapapeles usando {{domxref("document.execCommand()")}}.</p>

<h2 id="Accediendo_al_portapapeles">Accediendo al portapapeles</h2>

<p>En vez de instanciar un objeto <code>Clipboard</code>, se puede acceder al portapapeles del sistema a través de la variable global {{domxref("Navigator.clipboard")}}:</p>

<pre class="brush: js notranslate">navigator.clipboard.readText().then(
  clipText =&gt; document.querySelector(".editor").innerText += clipText);</pre>

<p>Esta pieza de código lee el texto que hay en el portapapeles y lo añade al primer elemento que tenga la clase <code>editor</code>. Desde que {{domxref("Clipboard.readText", "readText()")}} (y también {{domxref("Clipboard.read", "read()")}}, de hecho) devuelve una cadena de texto vacía si el contenido del portapapeles no es texto, este código es seguro.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("Clipboard")}} {{securecontext_inline}}</dt>
 <dd>Proporciona una interfaz para leer y escribir texto y datos. La especificación se refiere a esto como 'Async Clipboard API.'</dd>
 <dt>{{domxref("ClipboardEvent")}} {{securecontext_inline}}</dt>
 <dd>Representa la información del evento que se ha disparado. Los eventos que se pueden disparar son: {{domxref("Element/cut_event", "cortar")}}, {{domxref("Element/copy_event", "copiar")}}, y {{domxref("Element/paste_event", "pegar")}}. La especificación se refiere a esto como 'Clipboard Event API'.</dd>
 <dt>{{domxref("ClipboardItem")}} {{securecontext_inline}}</dt>
 <dd>Representa uno de los objetos del portapapeles, usado en la lectura y escritura de datos.</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Observaciones</th>
  </tr>
  <tr>
   <td>{{SpecName('Clipboard API')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
   <td>Definición primitiva.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<h3 id="Clipboard">Clipboard</h3>

<div>


<p>{{Compat("api.Clipboard")}}</p>

<h3 id="ClipboardEvent">ClipboardEvent</h3>



<p>{{Compat("api.ClipboardEvent")}}</p>

<h3 id="ClipboardItem">ClipboardItem</h3>



<p>{{Compat("api.ClipboardItem")}}</p>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="/es/docs/Web/API/Permissions">Permissions API</a></li>
 <li><a href="/es/docs/Web/API/Permissions_API/Using_the_Permissions_API">Using the Permissions API</a></li>
</ul>
</div>
