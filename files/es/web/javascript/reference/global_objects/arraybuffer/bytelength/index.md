---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Propiedad
  - Prototipo
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
original_slug: Web/JavaScript/Referencia/Objetos_globales/ArrayBuffer/byteLength
---
<div>{{JSRef}}</div>

<p>La propiedad de acceso <code><strong>byteLength</strong></code> representa la longitud de {{jsxref("ArrayBuffer")}} en bytes.</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>aybuffer.byteLength</pre>

<h2 id="Descripción">Descripción</h2>

<p>La propiedad <code>byteLength</code> es una propiedad de acceso cuya función de acceso de conjunto es <code>undefined</code>, lo que significa que solo puede leer esta propiedad. El valor se establece cuando la matriz se construye y no se puede cambiar. Esta propiedad devuelve <code>0</code> si este <code>ArrayBuffer</code> ha sido separado.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Reemplazado por ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial en un estándar ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
