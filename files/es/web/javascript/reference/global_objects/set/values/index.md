---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
translation_of: Web/JavaScript/Reference/Global_Objects/Set/values
original_slug: Web/JavaScript/Referencia/Objetos_globales/Set/values
---
<div>{{JSRef}}</div>

<p>El método <code><strong>values()</strong></code> retorna un objeto de tipo <code>Iterator</code> que contiene los valores para cada elemento en el objecto <code>Set</code> en orden de inserción.</p>

<p>El metodo <strong><code>keys()</code></strong> es un alias para este metodo (por similaridad con objetos {{jsxref("Map")}}); se comporta exactamente igual y retorna <strong>valores</strong> para cada elemento de un <code>Set</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}</div>



<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><em>mySet</em>.values();
</code></pre>

<h3 id="Return_value">Return value</h3>

<p>Un nuevo objeto <code><strong>Iterator</strong></code> que contiene los valores para cada elemento en el <code>Set</code> dado,  en orden de inserción.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_values">Using <code>values()</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-set.prototype.values', 'Set.prototype.values')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-set.prototype.values', 'Set.prototype.values')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("javascript.builtins.Set.values")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Set.prototype.entries()")}}</li>
</ul>
