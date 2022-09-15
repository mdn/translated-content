---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Prototipo
  - Prototype
  - Referencia
  - data
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---
<div>{{JSRef}}</div>

<p>O método <strong><code>getUTCMinutes()</code></strong> retorna os minutos na data especificada de acordo com o tempo universal.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>dateObj</var>.getUTCMinutes()</code></pre>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Um número inteiro, entre 0 e 59, representando os minutos na data especificada de acordo com o horário universal (UTC).</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_getUTCMinutes">Usando <code>getUTCMinutes()</code></h3>

<p>O seguinte exemplo atribui a parte dos minutos do tempo atual para a variável <code>minutes</code>.</p>

<pre class="brush: js notranslate">var today = new Date();
var minutes = today.getUTCMinutes();
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Date.getUTCMinutes")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMinutes()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMinutes()")}}</li>
</ul>
