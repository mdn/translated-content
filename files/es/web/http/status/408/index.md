---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
translation_of: Web/HTTP/Status/408
---
<div>{{HTTPSidebar}}</div>

<p>El código de estado de la respuesta <code><strong>408 Request Timeout</strong></code> del Protocolo de Transferencia de Hipertexto (HTTP) significa que el servidor desea cerrar esta conexión no usada. Se envía a una conexión inactiva por algunos servidores, incluso sin solicitud previa por parte del cliente.</p>

<p>Un servidor debe enviar "close" en el campo de la cabecera {{HTTPHeader("Connection")}} en la respuesta, ya que <code>408</code> implica que el servidor ha decidido cerrar la conexión en lugar de continuar esperando.</p>

<p>Esta respuesta es usada mucho más desde que algunos navegadores, como Chrome, Firefox 27+, y IE9, usan el mecanizmo de pre-conexión HTTP para acelerar la naveación.</p>

<div class="note">
<p><strong>Nota: </strong><span id="result_box" lang="es">algunos servidores simplemente cierran la conexión sin enviar este mensaje.</span></p>
</div>

<h2 id="Estado">Estado</h2>

<pre class="syntaxbox">408 Request Timeout</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "408 Request Timeout" , "6.5.7")}}</td>
   <td>Protocolo de Transferencia de HiperTexto (HTTP/1.1): Semánticas y Contenido</td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("X-DNS-Prefetch-Control")}}</li>
</ul>
