---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Prototype
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/get
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakMap/get
---
<div>{{JSRef}}</div>

<p>El método <code><strong>get()</strong></code> devuelve un elemento específico del objeto <code>WeakMap</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code><em>wm</em>.get(key);</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt>key</dt>
 <dd>Requerido. Es la llave del elemento a retornar desde el objeto WeakMap.</dd>
</dl>

<h3 id="Valores_devueltos">Valores devueltos</h3>

<p>El elemento asociado con la llave específica en el objeto WeakMap. Si la llave no está presente, devolverá {{jsxref("undefined")}}.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_el_método_get">Usando el método <code>get</code> </h3>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, 'foo');

wm.get(window); // Devuelve "foo".
wm.get('baz');  // Devuelve undefined.
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("javascript.builtins.WeakMap.get")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakMap.set()")}}</li>
 <li>{{jsxref("WeakMap.has()")}}</li>
</ul>
