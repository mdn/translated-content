---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototipo
  - Prototype
  - Referencia
  - data
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---
<div>{{JSRef}}</div>

<p>O método <strong><code>setMonth()</code></strong> atribui o mês para uma data específica de acordo com o ano corrente.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>dateObj</var>.setMonth(<var>monthValue</var>[, <var>dayValue</var>])</code></pre>

<h3 id="Versões_anteriores_ao_JavaScript_1.3">Versões anteriores ao JavaScript 1.3</h3>

<pre class="syntaxbox notranslate"><code><var>dateObj</var>.setMonth(<var>monthValue</var>)</code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>monthValue</code></dt>
 <dd>Um inteiro baseado em zero representando o mês do ano a partir do começo do ano. Então, 0 representa Janeiro, 11 representa Dezembro, -1 representa Dezembro do ano passado, e 12 representa Janeiro do ano seguinte.</dd>
 <dt><code>dayValue</code></dt>
 <dd>Opcional. Um inteiro de 1 a 31, representando o dia do mês.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>O número de milissegundos entre dia 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.</p>

<h2 id="Descrição">Descrição</h2>

<p>Se você não especifica o parâmetro <code>dayValue</code>, o valor retornado do método {{jsxref("Date.prototype.getDate()", "getDate()")}} é utilizado.</p>

<p>Se um parâmetro que você especificou estiver fora do alcance esperado, <code>setMonth()</code> tenta atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usa 15 para <code>monthValue</code>, o ano será incrementado em 1, e 3 será usado para o mês.</p>

<p>O dia corrente do mês terá um impacto no comportamento deste método. Conceitualmente ele irá adicionar o número de dias dado pelo dia corrente do mês ao primeiro dia do novo mês especificado como parâmetro, retornando uma nova data. Por exemplo, se o valor corrente é 31 de agosto de 2016, chamando <code>setMonth()</code> com um valor de 1 irá retornar 2 de Março de 2016. Isso acontece porque Fevereiro de 2016 tem 29 dias.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_setMonth">Usando <code>setMonth()</code></h3>

<pre class="brush: js notranslate">var theBigDay = new Date();
theBigDay.setMonth(6);

//Cuidado com transições de final de mês
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Date.setMonth")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMonth()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMonth()")}}</li>
</ul>
