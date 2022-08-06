---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Prototipo
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/push
---
<div>{{JSRef}}</div>

<p>El método <code><strong>push()</strong></code> añade uno o más elementos al final de un array y devuelve la nueva longitud del array.</p>

<div>{{EmbedInteractiveExample("pages/js/array-push.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.push(<var>element1</var>[, ...[, <var>elementN</var>]])</pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>Los elementos a añadir al final del array.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>La nueva propiedad {{jsxref("Array.length", "length")}} del objeto sobre el cual se efectuó la llamada.</p>

<h2 id="Description" name="Description">Descripción</h2>

<p>El método <code>push</code> es muy práctico para añadir valores a un array.</p>

<p><code>push</code> es genérico intencionadamente. Este método puede ser {{jsxref("Function.call", "call()")}} o {{jsxref("Function.apply", "apply()")}} a objetos que representen arrays. El método <code>push</code> depende de la propiedad <code>length</code> para decidir donde empezar a insertar los valores dados. Si el valor de la propiedad <code>length</code> no puede ser convertido en numérico, el índice 0 es usado. Esto permite la posibilidad de que la propiedad <code>length</code> sea inexistente, y en este caso <code>length</code> será creado.</p>

<p>Los únicos objetos nativos que se asemejen al array son {{jsxref("Global_Objects/String", "strings", "", 1)}} objetos, aunque estos no se puedan usar en la aplicación de este método ya que son inmutables.</p>

<h2 id="Examples" name="Examples">Ejemplos</h2>

<h3 id="Ejemplo: Añadiendo elementos a un array" name="Ejemplo: Añadiendo elementos a un array">Ejemplo: Añadiendo elementos a un array</h3>

<p>El siguiente código crea el array <code>sports</code> que contiene dos elementos, luego añade 2 elementos más. Tras ejecutar el código, <code>sports</code> contiene 4 elementos: "soccer", "baseball", "football" and "swimming".</p>

<pre class="brush: js">var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
</pre>

<h3 id="Uniendo_dos_arrays">Uniendo dos arrays</h3>

<p>This example uses {{jsxref("Function.apply", "apply()")}} to push all elements from a second array.</p>

<p>Do <em>not</em> use this method if the second array (<code>moreVegs</code> in the example) is very large, because the maximum number of parameters that one function can take is limited in practice. See {{jsxref("Function.apply", "apply()")}} for more details.</p>

<pre class="brush: js">var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
</pre>

<h3 id="Using_an_object_in_an_array-like_fashion">Using an object in an array-like fashion</h3>

<p>Como se menciona anteriormente, <code>push</code> es intencionadamente genérico, y podemos usar eso a nuestro favor. <code>Array.prototype.push</code> puede funcionar bien con un objeto, como muestra este ejemplo. Ten en cuenta que no se crea un array para almacenar una colección de objetos. En su lugar, almacenamos la colección en el propio objeto y se utiliza el método <code>call</code> sobre <code>Array.prototype.push</code> para hacer creer al método que estamos tratando a un array, y simplemente funciona, gracias a la forma en que JavaScript nos permite establecer el contexto de la ejecución.</p>

<pre class="brush: js">var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
</pre>

<p>Tenga en cuenta que aunque <code>obj</code> no es un array, el método <code>push</code> ha incrementado satisfactoriamente la propiedad <code>length</code> de <code>obj</code> tal y como si se tratara de un array.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.7', 'Array.prototype.push')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.push', 'Array.prototype.push')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.push', 'Array.prototype.push')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.push")}}</p>
</div>

<h2 id="Ver también" name="Ver también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.pop()")}}</li>
 <li>{{jsxref("Array.prototype.shift()")}}</li>
 <li>{{jsxref("Array.prototype.unshift()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
