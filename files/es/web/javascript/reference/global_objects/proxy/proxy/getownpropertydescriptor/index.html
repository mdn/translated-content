---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Proxy
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<div>El método <strong><code>handler.getOwnPropertyDescriptor()</code></strong> captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush: js">var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) {
  }
});
</pre>

<h3 id="Parámetros">Parámetros</h3>

<p>El método <code>getOwnPropertyDescriptor</code> recibe los siguiente parámetros. <code>this</code> está asociado al handler del proxy.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>El objeto destino.</dd>
 <dt><code>prop</code></dt>
 <dd>El nombre de la propiedad cuya descripción ha de ser devuelta.</dd>
</dl>

<h3 id="Valor_Devuelto">Valor Devuelto</h3>

<p>El método <code>getOwnPropertyDescriptor</code> debe devolver un objeto o  <code>undefined</code>.</p>

<h2 id="Descripción">Descripción</h2>

<p>El método <code><strong>handler.getOwnPropertyDescriptor()</strong></code> captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<h3 id="Intercepciones">Intercepciones</h3>

<p>Este método intercepta las siguientes operaciones:</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>

<h3 id="Invariantes">Invariantes</h3>

<p>Si los siguientes invariantes son violados, el proxy lanzará {{jsxref("TypeError")}}:</p>

<ul>
 <li><code>getOwnPropertyDescriptor</code> debe devolver un objeto o  <code>undefined</code>.</li>
 <li>No puede devolver que una propiedad no existe si está presente en el objeto como no configurable.</li>
 <li>No puede devolver que una propiedad no existe si esta está presente como una propiedad propia del objeto destino y el objeto no es extensible.</li>
 <li>No puede devolver que una propuedad existe, si esta no está presente en el objeto destino y el objeto no es extensible. </li>
 <li>No puede devolver que una propiedad es no configurable si esta no existe en el objeto destino o si existe pero sí es configurable.</li>
 <li>El resultado de  <code>Object.getOwnPropertyDescriptor(target)</code> puede ser aplicado al objeto destino mediante <code>Object.defineProperty </code>y no lanzará ningún tipo de excepción.</li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<p>El siguiente código captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<pre class="brush: js">var p = new Proxy({ a: 20}, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log('called: ' + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // "called: a"
                                                            // 10
</pre>

<p>El siguiente código viola uno de los invariantes definidos previamente.</p>

<pre class="brush: js">var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function(target, prop) {
    return undefined;
  }
});

Object.getOwnPropertyDescriptor(p, 'a'); // TypeError is thrown
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p', '[[GetOwnProperty]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición Inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p', '[[GetOwnProperty]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_buscadores">Compatibilidad con buscadores</h2>

<div>


<p>{{Compat("javascript.builtins.Proxy.handler.getOwnPropertyDescriptor")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
