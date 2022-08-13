---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
tags:
  - Array
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@species
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/@@species
---
<div>{{JSRef}}</div>

<p>La propiedad de acceso <code><strong>Array[@@species]</strong></code> devuelve el constructor de <code>Array</code>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Array[Symbol.species]
</pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>El constructor {{jsxref("Array")}}.</p>

<h2 id="Descripción">Descripción</h2>

<p>La propiedad de acceso <code>species</code> devuelve el constructor predeterminado para objetos <code>Array</code>. Los constructores de subclase pueden anularlo para cambiar la asignación del constructor.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>La propiedad <code>species</code> devuelve la función de constructor predeterminada, que es el constructor <code>Array</code> para objetos <code>Array</code>:</p>

<pre class="brush: js">Array[Symbol.species]; // function Array()</pre>

<p>In a derived collection object (e.g. your custom array <code>MyArray</code>), the <code>MyArray</code> species is the <code>MyArray</code> constructor. However, you might want to overwrite this, in order to return parent <code>Array</code> objects in your derived class methods:</p>

<pre class="brush: js">class MyArray extends Array {
  // Overwrite MyArray species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-get-array-@@species', 'get Array [ @@species ]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-array-@@species', 'get Array [ @@species ]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.@@species")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
