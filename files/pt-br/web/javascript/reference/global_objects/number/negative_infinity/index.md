---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Número
  - Property
  - Propriedade
  - Referencia
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---
<div>{{JSRef}}</div>

<p>A propriedade <strong><code>Number.NEGATIVE_INFINITY</code></strong> representa o valor Infinito negativo.</p>

<div>{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}</div>



<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Descrição">Descrição</h2>

<p>O valor de <code>Number.NEGATIVE_INFINITY</code> é o mesmo que o valor negativo da propriedade do objeto global {{jsxref("Infinity")}}.</p>

<p>O valor se comporta um pouco diferente do que o infinito matemático:</p>

<ul>
 <li>Qualquer valor positivo, incluindo {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, mutiplicado por <code>NEGATIVE_INFINITY</code> é <code>NEGATIVE_INFINITY</code>.</li>
 <li>Qualquer valor negativo, incluindo <code>NEGATIVE_INFINITY</code>, multiplicado por <code>NEGATIVE_INFINITY</code> é {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.</li>
 <li>Qualquer valor positivo dividido por <code>NEGATIVE_INFINITY</code> é zero negativo.</li>
 <li>Qualquer valor negativo dividido por <code>NEGATIVE_INFINITY</code> é zero positivo.</li>
 <li>Zero multiplicado por <code>NEGATIVE_INFINITY</code> é {{jsxref("NaN")}}.</li>
 <li>{{jsxref("NaN")}} multiplicado por <code>NEGATIVE_INFINITY</code> é {{jsxref("NaN")}}.</li>
 <li><code>NEGATIVE_INFINITY</code>, dividido por qualquer valor negativo exceto <code>NEGATIVE_INFINITY</code>, é {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.</li>
 <li><code>NEGATIVE_INFINITY</code>, divido por qualquer valor positivo exceto {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, é <code>NEGATIVE_INFINITY</code>.</li>
 <li><code>NEGATIVE_INFINITY</code>, divido por ou <code>NEGATIVE_INFINITY</code> ou {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, é {{jsxref("NaN")}}.</li>
</ul>

<p>Você pode usar a propriedade <code>Number.NEGATIVE_INFINITY</code> para indicar uma condição de erro que retorna um número finito em caso de sucesso. Nota que, usar {{jsxref("isFinite")}} seria mais apropriado neste caso.</p>

<p>Por <code>NEGATIVE_INFINITY</code> ser uma propriedade estática de {{jsxref("Number")}}, você sempre a usa como <code>Number.NEGATIVE_INFINITY</code>, ao invés de ser uma propriedade do objeto {{jsxref("Number")}} que você criou.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_NEGATIVE_INFINITY">Usando <code>NEGATIVE_INFINITY</code></h3>

<p>No seguinte exemplo, a variável <code>smallNumber</code> é atribuída um valor que é menor que o valor mínimo. Quando o {{jsxref("Statements/if...else", "if")}} executa, <code>smallNumber</code> tem o valor <code>-Infinity</code>, então é colocado em <code>smallNumber</code> um valor mais manejável antes de continuar.</p>

<pre class="brush: js notranslate">var smallNumber = (-Number.MAX_VALUE) * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Number.NEGATIVE_INFINITY")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Number.POSITIVE_INFINITY")}}</li>
 <li>{{jsxref("Number.isFinite()")}}</li>
 <li>{{jsxref("Global_Objects/Infinity", "Infinity")}}</li>
 <li>{{jsxref("Global_Objects/isFinite", "isFinite()")}}</li>
</ul>
