---
title: Allow
slug: Web/HTTP/Headers/Allow
translation_of: Web/HTTP/Headers/Allow
---
<div>{{HTTPSidebar}}</div>

<p>La cabecera <code><strong>Allow</strong></code> enumera el conjunto de métodos admitidos por un recurso.</p>

<p>Esta cabecera debe ser enviada si el servidor responde con un estado {{HTTPStatus("405")}} <code>Method Not Allowed</code> para indicar cual metodo de peticion puede ser usado. Una cabecera <code>Allow</code> vacia indica que el recurso no permite ningún método de solicitud, que podría ocurrir temporalmente para un recurso determinado, por ejemplo.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintáxis">Sintáxis</h2>

<pre class="syntaxbox">Allow: &lt;http-methods&gt;
</pre>

<h2 id="Directivas">Directivas</h2>

<dl>
 <dt>&lt;http-methods&gt;</dt>
 <dd>La lista de métodos de solicitud HTTP permitidos.</dd>
</dl>

<h2 id="Ejemplo">Ejemplo</h2>

<pre>Allow: GET, POST, HEAD</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Allow", "7.4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{HTTPStatus("405")}}</li>
 <li>{{HTTPHeader("Server")}}</li>
</ul>
