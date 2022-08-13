---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
translation_of: Web/HTTP/Headers/Content-Length
---
<div>{{HTTPSidebar}}</div>

<p>El encabezado de entidad <strong><code>Content-Length</code></strong> indica el tamaño de la entidad-cuerpo, en bytes, enviado al destinatario.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabecera</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Nombre de cabecera prohibido")}}</th>
   <td>si</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate">Content-Length: &lt;longitud&gt;
</pre>

<h2 id="Directivas">Directivas</h2>

<dl>
 <dt>&lt;length&gt;</dt>
 <dd>La longitud en número decimal de octetos.</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Content-Length", "3.3.2")}}</td>
   <td>Protocolo de Transferencia de Hipertexto (HTTP/1.1): Sintaxis y enrutamiento de mensajes</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("http.headers.Content-Length")}}</p>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
