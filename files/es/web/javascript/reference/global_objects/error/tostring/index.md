---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Error/toString
---
<div>{{JSRef}}</div>

<p>El método <code><strong>toString()</strong></code> devuelve una cadena que representa el objeto {{JSxRef("Error")}} especificado.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate"><code><var>e</var>.toString()</code></pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Una cadena que representa el objeto {{JSxRef("Error")}} especificado.</p>

<h2 id="Descripción">Descripción</h2>

<p>El objeto {{JSxRef("Error")}} redefine el método {{JSxRef("Object.prototype.toString()")}} heredado por todos los objetos. Su semántica es la siguiente (asumiendo que {{JSxRef("Object")}} y {{JSxRef("String")}} tienen sus valores originales):</p>

<pre class="brush: js notranslate">Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
</pre>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usar_toString">Usar <code>toString()</code></h3>

<pre class="brush: js notranslate">var e = new Error('fatal error');
console.log(e.toString()); // 'Error: error fatal'

e.name = undefined;
console.log(e.toString()); // 'Error: error fatal'

e.name = '';
console.log(e.toString()); // 'error fatal'

e.message = undefined;
console.log(e.toString()); // ''

e.name = 'hola';
console.log(e.toString()); // 'hola'
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
   <td>{{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<div>


<p>{{Compat("javascript.builtins.Error.toString")}}</p>
</div>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{jsxref("Error.prototype.toSource()")}}</li>
</ul>
