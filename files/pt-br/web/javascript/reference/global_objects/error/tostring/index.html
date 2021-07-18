---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Method
  - Prototipo
  - Prototype
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
---
<div>{{JSRef}}</div>

<p>O método <code><strong>toString()</strong></code> retorna uma string representando o objeto {{jsxref("Error")}}.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>e</var>.toString()</code></pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>A string representando o objeto {{jsxref("Error")}} especificado.</p>

<h2 id="Descrição">Descrição</h2>

<p>O objeto {{jsxref("Error")}} sobrescreve o método {{jsxref("Object.prototype.toString()")}} herdado por todos os objetos. Sua semântica é a seguinte (assumindo que {{jsxref("Object")}} e {{jsxref("String")}} tem seus valores originais):</p>

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

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_toString">Usando toString()</h3>

<pre class="brush: js notranslate">var e = new Error('fatal error');
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = '';
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // ''

e.name = 'hello';
console.log(e.toString()); // 'hello'
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Error.toString")}}</p>
</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Error.prototype.toSource()")}}</li>
</ul>
