---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - JavaScript
  - Objeto
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Object/values
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/values
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Object.values()</strong></code><strong> </strong>devuelve un array con los valores correspondientes a las propiedades <strong>enumerables</strong> de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle {{jsxref("Statements/for...in", "for...in")}} (la única diferencia es que un bucle <code>for-in</code> también enumera las propiedades en la cadena de prototipo de un objeto).</p>

<p>{{EmbedInteractiveExample("pages/js/object-values.html")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Object.values(<var>obj</var>)</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>Objeto cuyas propiedades enumerables serán devueltas.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un <code>array</code><strong> </strong>con las propiedades enumerables del objeto pasado como parámetro.</p>

<h2 id="Descripción">Descripción</h2>

<p>El método <code>Object.values()</code><strong> </strong>devuelve un array cuyos elementos son valores de propiedades enumarables que se encuentran en el objeto. El orden de las propiedades es el mismo que el dado cuando se recorre el objeto de forma manual.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto con una ordenación aleatoria de las claves
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo no es una propiedade enumerable, por lo que como se observa, no se devuelve
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// parámetros que no son Objetos<strong> </strong>se fuerzan a que se comporten como tal
console.log(Object.values('foo')); // ['f', 'o', 'o']
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Para dar soporte compatible con  <code>Object.values()</code> a entornos antiguos que no la soportan de forma nativa, puedes encontrar un Polyfill<strong> </strong>en <a href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> o en los repositorios <a href="https://github.com/es-shims/Object.values">es-shims/Object.values</a>.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.values', 'Object.values')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-object.values', 'Object.values')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<div>{{Compat("javascript.builtins.Object.values")}}</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/es/docs/Web/JavaScript/enumeracion_y_propietario_de_propiedades">Enumeración y propietarios de propiedades</a></li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.entries()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
</ul>
