---
title: encodeURI
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - JavaScript
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
original_slug: Web/JavaScript/Referencia/Objetos_globales/encodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<h2 id="Summary" name="Summary">Sumario</h2>

<p>Codifica un Identificador de Recurso Uniforme (Uniform Resource Identifier, URI) reemplazando cada instancia de ciertos carácteres por uno, dos o tres secuencias de escape representando el carácter codificado en UTF-8.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<p><code>encodeURI(<em>URI</em>) </code></p>

<h3 id="Parameters" name="Parameters">Parámetros</h3>

<dl>
 <dt><code>URI</code></dt>
 <dd>Un Identificador de Recurso Uniforme codificado.</dd>
</dl>

<h2 id="Description" name="Description">Descripción</h2>

<p>Se asume que el URI es un URI completo, a fin de no codificar caracteres reservados que tienen un significado especial en la URI.</p>

<p><code>encodeURI </code>reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8:</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <td class="header">Tipo</td>
   <td class="header">Incluye</td>
  </tr>
  <tr>
   <td>Caracteres reservados</td>
   <td><code>; , / ? : @ &amp; = + $</code></td>
  </tr>
  <tr>
   <td>Caracteres No escape</td>
   <td>Alfabéticos, dígitos decimales, <code>- _ . ! ~ * ' ( )</code></td>
  </tr>
  <tr>
   <td>Almohadilla</td>
   <td><code>#</code></td>
  </tr>
 </tbody>
</table>

<p>Tenga en cuenta que encodeURI por sí sola no puede formar solicitudes correctas HTTP GET y POST, como por XMLHTTPRequests, porque "&amp;", "+", y "=" no están codificados, los cuales son tratados como caracteres especiales en las solicitudes GET y POST. <code><a href="/es/Core_JavaScript_1.5_Reference/Global_Functions/encodeURIComponent" title="es/Core_JavaScript_1.5_Reference/Global_Functions/encodeURIComponent">encodeURIComponent</a></code>, sin embargo, codifica estos caracteres. Lo más probable es que estos comportamientos no sean compatibles en los navegadores Web.</p>

<h2 id="See_also" name="See_also">Ver También</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURIComponent")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
