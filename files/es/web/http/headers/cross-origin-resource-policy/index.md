---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
tags:
  - HTTP
  - Referencia
  - Respuesta de encabezado
  - encabezado
  - encabezado HTTP
translation_of: Web/HTTP/Headers/Cross-Origin-Resource-Policy
---
<div>{{HTTPSidebar}}</div>

<p>La respuesta del encabezado HTTP <strong><code>Cross-Origin-Resource-Policy</code></strong> transmite un deseo de que el navegador bloquee peticiones no-cors cross-origin/cross-site al recurso dado</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de encabezado</th>
   <td>{{Glossary("Response header", "Respuesta del encabezado")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "Nombre prohibido del encabezado")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
</pre>

<h2 id="Ejemplos">Ejemplos</h2>

<p>La respuesta de encabezado debajo puede causar que agentes de usuario compatibles desabiliten peticiones cross-origin no-cors:</p>

<pre>Cross-Origin-Resource-Policy: same-origin
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName("Fetch", '#cross-origin-resource-policy-header')}}</td>
   <td>{{Spec2("Fetch", '#cross-origin-resource-policy-header')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_los_navegadores">Compatibilidad de los navegadores</h2>



<p>{{Compat("http.headers.Cross-Origin-Resource-Policy")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">Explicador de la política de recursos cruzados (Cross-Origin Resource Policy - CORP) </a></li>
</ul>
