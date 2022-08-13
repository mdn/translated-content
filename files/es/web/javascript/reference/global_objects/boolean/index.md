---
title: Booleano
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Clase
  - Class
  - Constructor
  - JavaScript
  - Referencia
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
original_slug: Web/JavaScript/Referencia/Objetos_globales/Boolean
---
<div>{{JSRef}}</div>

<p>El objeto <strong><code>Boolean</code></strong> es un objeto contenedor para un valor booleano.</p>

<h2 id="Descripción">Descripción</h2>

<p>El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si el valor se omite o es <code>0</code>, <code>-0</code>, {{jsxref("null")}}, <code>false</code>, {{jsxref("NaN")}}, {{jsxref("undefined")}}, o la cadena vacía (<code>""</code>), el objeto tiene un valor inicial de <code>false</code>. Todos los demás valores, incluido cualquier objeto, un arreglo vacío (<code>[]</code>) o la cadena "<code>false</code>", crean un objeto con un valor inicial de <code>true</code>.</p>

<p>No confundas los valores del <code>Boolean</code> {{Glossary("Primitive", "primitivo")}}, <code>true</code> y <code>false</code> con los valores <code>true</code> y <code>false</code> del objeto <code>Boolean</code>.</p>

<p><strong>Cualquier</strong> objeto cuyo valor no sea {{jsxref("undefined")}} o {{jsxref("null")}}, incluido un objeto <code>Boolean</code> cuyo valor es <code>false</code>, se evalúa como <code>true</code> cuando se pasa a una declaración condicional. Por ejemplo, la condición en la siguiente declaración {{jsxref("Statements/if...else", "if")}} se evalúa como <code>true</code>:</p>

<pre class="brush: js notranslate">var x = new Boolean(false);
if (x) {
  // este código se ejecuta
}
</pre>

<p>Este comportamiento no se aplica a los <code>Boolean</code> primitivos. Por ejemplo, la condición en la siguiente instrucción {{jsxref("Statements/if...else", "if")}} se evalúa como <code>false</code>:</p>

<pre class="brush: js notranslate">var x = false;
if (x) {
  // este código no se ejecuta
}
</pre>

<p>No utilices un objeto <code>Boolean</code> para convertir un valor no booleano en un valor booleano. Para realizar esta tarea, en su lugar, usa <code>Boolean</code> como función, o un <a href="/es/docs/Web/JavaScript/Reference/Operators/Logical_NOT">operador <code>NOT</code> doble</a>:</p>

<pre class="brush: js notranslate">var x = Boolean(expression);     // usa esta...
var x = !!(expression);          // ... o esta
var x = new Boolean(expression); // ¡no uses esta!
</pre>

<p>Si especificas cualquier objeto, incluido un objeto <code>Boolean</code> cuyo valor es <code>false</code>, como valor inicial de un objeto <code>Boolean</code>, el nuevo objeto <code>Boolean</code> tiene un valor de <code>true</code>.</p>

<pre class="brush: js notranslate">var myFalse = new Boolean(false);   // valor inicial de false
var g = Boolean(myFalse);           // valor inicial de true
var myString = new String('Hola');  // objeto string
var s = Boolean(myString);          // valor inicial de true
</pre>

<p>No utilices un objeto <code>Boolean</code> en lugar de un <code>Boolean</code> primitivo.</p>

<div class="note">
<p><strong>Nota</strong> Cuando la propiedad no estándar <a href="/es/docs/Web/API/Document#Properties"><code>document.all</code></a> se usa como argumento para este constructor, el resultado es un objeto <code>Boolean</code> con el valor <code>false</code>. Esta propiedad es heredada y no estándar y no se debe usar.</p>
</div>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}</dt>
 <dd>Crea un nuevo objeto <code>Boolean</code>.</dd>
</dl>

<h2 id="Métodos_de_instancia">Métodos de instancia</h2>

<dl>
 <dt>{{jsxref("Boolean.prototype.toString()")}}</dt>
 <dd>Devuelve una cadena de <code>true</code> o <code>false</code> dependiendo del valor del objeto. Redefine el método {{jsxref("Object.prototype.toString()")}}.</dd>
 <dt>{{jsxref("Boolean.prototype.valueOf()")}}</dt>
 <dd>Devuelve el valor primitivo del objeto {{jsxref("Boolean")}}. Redefine el método {{jsxref("Object.prototype.valueOf()")}}.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Creación_de_objetos_Boolean_con_un_valor_inicial_de_false">Creación de objetos <code>Boolean</code> con un valor inicial de <code>false</code></h3>

<pre class="brush: js notranslate">var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
</pre>

<h3 id="Creación_de_objetos_Boolean_con_un_valor_inicial_de_true">Creación de objetos <code>Boolean</code> con un valor inicial de <code>true</code></h3>

<pre class="brush: js notranslate">var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-boolean-objects', 'Boolean')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<div>


<p>{{Compat("javascript.builtins.Boolean")}}</p>
</div>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li><a href="/es/docs/Glossary/Boolean">Boolean</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">Boolean primitivo</a></li>
 <li><a href="https://es.wikipedia.org/wiki/Tipo_de_dato_lógico">Tipo de dato <code>Boolean</code> (Wikipedia)</a></li>
</ul>
