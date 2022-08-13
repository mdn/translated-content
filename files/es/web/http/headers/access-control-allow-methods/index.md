---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
translation_of: Web/HTTP/Headers/Access-Control-Allow-Methods
---
<div>{{HTTPSidebar}}</div>

<p>La cabecera de respuesta <strong><code>Access-Control-Allow-Methods</code></strong> especifica el método o los métodos aceptados cuando se accede al recurso en respuesta de un {{glossary("preflight request")}}.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabecera</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Access-Control-Allow-Methods: &lt;method&gt;, &lt;method&gt;, ...
</pre>

<h2 id="Directivas">Directivas</h2>

<dl>
 <dt>&lt;método&gt;</dt>
 <dd>Comma-delimited list of the allowed <a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a>.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre>Access-Control-Allow-Methods: POST, GET, OPTIONS</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-allow-methods', 'Access-Control-Allow-Methods')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegador">Compatibilidad de navegador</h2>

<p>{{Compat("http.headers.Access-Control-Allow-Methods")}}</p>

<h2 id="Notas_de_compatibilidad">Notas de compatibilidad</h2>

<ul>
 <li>The wildcard value (*) that is mentioned in the latest specification, is not yet implemented in browsers:
  <ul>
   <li>Chromium: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=615313">Issue 615313</a></li>
   <li>Firefox: {{bug(1309358)}}</li>
   <li>Servo: <a href="https://github.com/servo/servo/issues/13283">Issue 13283</a></li>
  </ul>
 </li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Allow-Origin")}}</li>
 <li>{{HTTPHeader("Access-Control-Expose-Headers")}}</li>
 <li>{{HTTPHeader("Access-Control-Allow-Headers")}}</li>
 <li>{{HTTPHeader("Access-Control-Request-Method")}}</li>
</ul>
