---
title: 'Date.prototype[@@toPrimitive]'
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
tags:
  - Date
  - JavaScript
  - Method
  - Prototipo
  - Prototype
  - Referencia
  - data
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---
<div>{{JSRef}}</div>

<p>O método <code><strong>[@@toPrimitive]()</strong></code> converte o objeto <code>Date</code> para um valor primitivo.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>Date()[Symbol.toPrimitive](hint);
</var></pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>O valor primitivo do objeto {{jsxref("Date")}}. Dependendo do argumento, o método pode retornar uma cadeia de caracteres (<em>string</em>) ou um número.</p>

<h2 id="Descrição">Descrição</h2>

<p>O método <code>[@@toPrimitive]()</code> do objeto {{jsxref("Date")}} retorna um valor primitivo, que pode ser tanto um tipo numérico quanto uma string.</p>

<p>Se <code>hint</code> é <code>"string"</code> ou <code>"default"</code>, <code>[@@toPrimitive]()</code> tenta chamar o método {{jsxref("Object.prototype.toString()", "toString")}}. Se a propriedade <code>toString</code> não existe, ele tenta chamar o método {{jsxref("Object.prototype.valueOf()", "valueOf")}} e se o <code>valueOf</code> não existir, <code>[@@toPrimitive]()</code> joga um {{jsxref("TypeError")}}.</p>

<p>Se <code>hint</code> é <code>"number"</code>, <code>[@@toPrimitive]()</code> tenta primeiro chamar <code>valueOf</code>, e se ele falha, chama <code>toString</code>.</p>

<p>O JavaScript chama o método <code>[@@toPrimitive]()</code> para converter um objeto para um valor primitivo. Você raramente precisa invocar o método <code>[@@toPrimitive]()</code> em si; JavaScript automaticamente o invoca quando encontra um objeto onde um valor primitivo é esperado.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Retornando_primitivos_de_data">Retornando primitivos de data</h3>

<pre class="brush: js notranslate">const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('string');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('number');
// Returns "1590757517834"

testDate[Symbol.toPrimitive]('default');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Date.@@toPrimitive")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
