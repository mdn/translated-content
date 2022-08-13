---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
translation_of: Web/JavaScript/Reference/Global_Objects/Object/entries
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/entries
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Object.entries()</strong></code> devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por {{jsxref("Sentencias/for...in", "for...in")}} (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Object.entries(<var>obj</var>)</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>The object whose enumerable own property <code>[key, value]</code> pairs are to be returned.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>An array of the given object's own enumerable property <code>[key, value]</code> pairs.</p>

<h2 id="Descripción">Descripción</h2>

<p><code>Object.entries()</code> returns an array whose elements are arrays corresponding to the enumerable property <code>[key, value]</code> pairs found directly upon <code>object</code>. The ordering of the properties is the same as that given by looping over the property values of the object manually.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) =&gt; {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});
</pre>

<h3 id="Converting_an_Object_to_a_Map">Converting an <code>Object</code> to a <code>Map</code></h3>

<p>The {{jsxref("Map", "new Map()")}} constructor accepts an iterable of <code>entries</code>. With <code>Object.entries</code>, you can easily convert from {{jsxref("Object")}} to {{jsxref("Map")}}:</p>

<pre class="brush: js">var obj = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>To add compatible <code>Object.entries</code> support in older environments that do not natively support it, you can find a Polyfill in the <a href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> or in the <a href="https://github.com/es-shims/Object.entries">es-shims/Object.entries</a> repositories.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-object.entries', 'Object.entries')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("javascript.builtins.Object.entries")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.values()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
</ul>
