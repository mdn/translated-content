---
title: export
slug: Web/JavaScript/Reference/Statements/export
tags:
  - ECMAScript 2015
  - JavaScript
  - Módulos
  - Sentencia
  - export
translation_of: Web/JavaScript/Reference/Statements/export
original_slug: Web/JavaScript/Referencia/Sentencias/export
---
<div>{{jsSidebar("Statements")}}</div>

<p>La declaración <strong><code>export</code></strong> se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia {{jsxref("Statements/import", "import")}}.</p>

<p>Los módulos exportados están en {{jsxref("Strict_mode","strict mode")}} tanto si se declaran así como si no. La sentencia export no puede ser utilizada en scripts embebidos.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush: js">export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> };
export { <var>variable1</var> as <var>name1</var>, <var>variable2</var> as <var>name2</var>, …, <var>nameN</var> };
export let <var>name1</var>, <var>name2</var>, …, <var>nameN</var>; // también var
export let <var>name1</var> = …, <var>name2</var> = …, …, <var>nameN</var>; // también var, const
export function FunctionName(){...}
export class ClassName {...}

export default <em>expression</em>;
export default function (…) { … } // también class, function*
export default function name1(…) { … } // también class, function*
export { <var>name1</var> as default, … };

export * from …;
export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> } from …;
export { <var>import1</var> as <var>name1</var>, <var>import2</var> as <var>name2</var>, …, <var>nameN</var> } from …;
export { default } from …;
</pre>

<dl>
 <dt><code>nameN</code></dt>
 <dd>Identificador a ser exportado (es posible importarlo a través de {{jsxref("Statements/import", "import")}} en otro script).</dd>
</dl>

<h2 id="Descripción" name="Descripción">Descripción</h2>

<p>Existen dos tipos diferentes de exportación , <strong>nombrada</strong> y <strong>por defecto</strong>. Se pueden tener varias exportaciones nombradas por módulo pero sólo una exportación por defecto. Cada tipo corresponde a una de las sintaxis siguientes:</p>

<ul>
 <li>Exports con nombre:
  <pre class="brush: js">// exporta la función previamente declarada
export { myFunction };

// exporta una constante
export const foo = Math.sqrt(2);</pre>
 </li>
 <li>Exports por defecto (function):
  <pre class="brush: js">export default function() {} </pre>
 </li>
 <li>Exports por defecto (class):
  <pre class="brush: js">export default class {} </pre>
 </li>
</ul>

<p>Los export con nombre son útiles cuando se necesitan exportar múltiples valores. Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.</p>

<p>Pero un export por defecto puede ser importado con cualquier nombre, por ejemplo:</p>

<pre class="brush: js">export default k = 12; // en el archivo test.js

import m from './test' // notese que tenemos la libertad de usar import m en lugar de import k, porque k era el export por defecto

console.log(m); // escribirá 12</pre>

<p>Sólo puede haber un export por defecto.</p>

<p>La siguiente sintaxis no exporta un export por defecto del módulo importado:</p>

<pre class="brush: js">export * from …;</pre>

<p>Si necesita exportar por defecto, escriba lo siguiente en su lugar:</p>

<pre class="brush: js">import mod from 'mod';
export default mod;</pre>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Syntax" name="Syntax">Usando exports con nombre</h3>

<p>En el módulo, podremos usar el siguiente código:</p>

<pre class="brush: js">// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };</pre>

<p>De esta forma, en otro script, podemos tener:</p>

<pre class="brush: js">//You should use this script in html with the type module ,
//eg ''&lt;script type="module" src="demo.js"&gt;&lt;/script&gt;",
//open the page in a httpserver,otherwise there will be a CORS policy error.
//script demo.js

import { cube, foo, graph } from 'my-module';
graph.options = {
    color:'blue',
    thickness:'3px'
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
</pre>

<h3 id="Usando_el_export_por_defecto">Usando el export por defecto</h3>

<p>Si queremos exportar un sólo valor o tener uno por defecto para nuestro módulo, podemos usar un export por defecto:</p>

<pre class="brush: js">// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
</pre>

<p>De esta forma la importación de un export default será sumamemte sencilla:</p>

<pre class="brush: js">import cube from 'my-module';
console.log(cube(3)); // 27</pre>

<p>Tenga en cuenta que no es posible usar <code>var</code>, <code>let</code> o <code>const</code> con <code>export default</code>.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-exports', 'Exports')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-exports', 'Exports')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatiblidad_en_navegadores">Compatiblidad en navegadores</h2>

<p>{{Compat("javascript.statements.export")}}</p>

<h2 id="Vea también" name="Vea también">Vea también</h2>

<ul>
 <li>{{jsxref("Sentencias/import", "import")}}</li>
 <li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth: Modules</a>, publicación del blog de Hacks por Jason Orendorff</li>
 <li><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">ES modules: A cartoon deep-dive</a>, publicación del blog de Hacks por Lin Clark</li>
 <li><a href="http://exploringjs.com/es6/ch_modules.html">Libro de Axel Rauschmayer: "Exploring JS: Modules"</a></li>
</ul>

<p> </p>
