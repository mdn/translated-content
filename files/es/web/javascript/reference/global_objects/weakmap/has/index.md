---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Protocols
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/has
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakMap/has
---
<div>{{JSRef}}</div>

<p>El método <code><strong>has()</strong></code> devuelve un boleano indicando ya sea, si el elemento con la llave específica existe o no en el objeto <code>WeakMap</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code><em>wm</em>.has(key);</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt>identificador (key)</dt>
 <dd>Requerido. La llave del elemento a comprobar en el objeto <code>WeakMap</code>.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<dl>
 <dt>Boolean</dt>
 <dd>Devuelve <code>true</code> si el elemento con la llave específica existe en el objeto <code>WeakMap</code>; de no encontrarse, devolverá <code>false</code>.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Utilización_del_método_has">Utilización del método <code>has</code> </h3>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, 'foo');

wm.has(window); // Devuelve true
wm.has('baz');  // Devuelve false
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
   <td>{{SpecName('ES2015', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("javascript.builtins.WeakMap.has")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakMap.prototype.set()")}}</li>
 <li>{{jsxref("WeakMap.prototype.get()")}}</li>
</ul>
