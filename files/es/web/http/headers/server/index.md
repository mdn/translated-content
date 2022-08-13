---
title: Server
slug: Web/HTTP/Headers/Server
translation_of: Web/HTTP/Headers/Server
---
<div>{{HTTPSidebar}}</div>

<p>La cabecera <code><strong>Server</strong></code> contiene la información acerca del software usado por el servidor original encargado de la solicitud.</p>

<p>La información larga y detallada debe de ser evitada en las cabeceras Server ya que puede revelar detalles de implementación que pueden hacer (un poco) más fácil para los atacantes encontrar y explotar huecos de seguridad.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Server: &lt;producto&gt;
</pre>

<h2 id="Directivas">Directivas</h2>

<dl>
 <dt>&lt;producto&gt;</dt>
 <dd>El nombre del software o (sub) producto que se encargó de las solicitudes.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre>Server: Apache/2.4.1 (Unix)</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Server", "7.4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("http.headers.Server")}}</p>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
</ul>
