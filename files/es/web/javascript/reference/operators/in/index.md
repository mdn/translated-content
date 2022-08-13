---
title: in
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Operator
  - Relational Operators
translation_of: Web/JavaScript/Reference/Operators/in
original_slug: Web/JavaScript/Referencia/Operadores/in
---
<div>{{jsSidebar("Operators")}}</div>

<div>El <strong>operador <code>in</code></strong> devuelve <code>true</code> si la propiedad especificada está en el objeto especificado o su prototipo.</div>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre><code><em>prop</em> in <em>object</em></code></pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Una cadena o expresión númerica que representa el nombre de una propiedad o el índice de un array (lo que no sea un símbolo se forzará a string).</dd>
</dl>

<dl>
 <dt><code>object</code></dt>
 <dd>El objeto (o su cadena de prototipo) sobre el que comprobar si contiene la propiedad con el nombre especificado.</dd>
</dl>

<h2 id="Description" name="Description">Descripción</h2>

<p>Los siguientes ejemplos muestran algunos de los usos del operador <code>in</code>.</p>

<pre class="brush:js">// Arrays
var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
0 in arboles        // devuelve true
3 in arboles        // devuelve true
6 in arboles        // devuelve false
"pino" in arboles   // devuelve false (debe especificar el número de índice,
                    // no el valor del índice)
"length" in arboles // devuelve true (length es una propiedad de Array)

// Objetos predefinidos
"PI" in Math        // devuelve true

// Objetos personalizados
var micoche = {marca: "Honda", modelo: "Accord", año: 1998};
"marca" in micoche  // devuelve true
"modelo" in micoche // devuelve true
</pre>

<p>Debe especificar un objeto en el lado derecho del operador <code>in</code>. Por ejemplo, puede especificar una cadena creada con el constructor <code>String</code> , pero no puede especificar una cadena literal.</p>

<pre class="brush:js">var color1 = new String("verde");
"length" in color1 // devuelve true

var color2 = "coral";
"length" in color2 // genera un error (color2 no es un objeto String)
</pre>

<h3 id="Using_in_with_deleted_or_undefined_properties" name="Using_in_with_deleted_or_undefined_properties">Usando <code>in</code> con propiedades eliminadas o no definidas</h3>

<p>Si se elimina una propiedad con el operador {{jsxref("Operadores/delete", "delete")}}, el operador <code>in</code> devuelve <code>false</code> para esa propiedad.</p>

<pre class="brush:js">var micoche= {marca: "Honda", modelo: "Accord", año: 1998};
delete micoche.marca;
"marca" in micoche;  // devuelve false

var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
delete arboles[3];
3 in arboles; // devuelve false
</pre>

<p>Si se cambia una propiedad a {{jsxref("Objetos_globales/undefined", "undefined")}} pero no se elimina, el operador <code>in</code> devuelve true para esa propiedad.</p>

<pre class="brush:js">var micoche = {marca: "Honda", modelo: "Accord", año: 1998};
micoche.marca = undefined;
"marca" in micoche;  // devuelve true
</pre>

<pre class="brush:js">var arboles = new Array("secayo", "pino", "cedro", "roble", "arce");
arboles[3] = undefined;
3 in arboles; // devuelve true
</pre>

<h3 id="Inherited_properties" name="Inherited_properties">Propiedades heredadas</h3>

<p>El operador <code>in</code> devuelve <code>true</code> para propiedades en la cadena del prototipo.</p>

<pre class="brush:js">"toString" in {}; // devuelve true
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
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-relational-operators', 'Relational Operators')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.8.7', 'The in Operator')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.8.7', 'The in Operator')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.4.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("javascript.operators.in")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li><code><a href="/es-ES/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code></li>
 <li><code><a href="/es-ES/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Reflect.has()")}}</li>
 <li><a href="/en-US/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
</ul>
