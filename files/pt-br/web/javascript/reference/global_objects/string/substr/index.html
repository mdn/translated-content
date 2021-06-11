---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Descontinuado
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - metodo
  - substr()
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
---
<div>{{JSRef}}</div>

<p>O método <code>substr()</code> retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.</p>

<div>{{EmbedInteractiveExample("pages/js/string-substr.html")}}</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>str</var>.substr(<var>start</var>[, <var>length</var>])</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>Local para começar a extrair os caracteres.</dd>
 <dt><code>length</code></dt>
 <dd>Opcional. O número de caracteres a serem extraídos.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Uma nova string contendo a seção extraída da string fornecida.</p>

<h2 id="Descrição">Descrição</h2>

<p>O <code>substr()</code> extrai caracteres de comprimento de uma <code>str</code>, contando a partir do índice inicial.</p>

<ul>
 <li>Se o <code>start</code> for um número positivo, o índice começa a contar no início da string. Seu valor é limitado ao tamanho da string (<code>str.length</code>).</li>
 <li>Se o <code>start</code> for um número negativo, o índice começa a contar a partir do final da string. Seu valor é limitado ao tamanho da string (<code>-str.length</code>).</li>
</ul>

<div class="blockIndicator note">
<p><strong>Nota</strong>: No Microsoft JScript, valores negativos no argumento <code>start</code> não são considerados como referência ao final da string.</p>
</div>

<ul>
 <li>Se <code>length</code> for omitido, <code>substr()</code> extrairá caracteres até o final da string.</li>
 <li>Se <code>length</code> for {{jsxref("undefined")}}, <code>substr()</code> extrai os caracteres até o final da string.</li>
 <li>Se <code>length</code> for um número negativo, ele será tratado como <code>0</code>.</li>
 <li>Para <code>start</code> e <code>length</code>, {{jsxref("NaN")}} é tratado como 0.</li>
</ul>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_substr">Usando <code>substr()</code></h3>

<pre class="brush: js notranslate">var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>JScript da Microsoft não suporta valores negativos para o índice de <code>start</code>. Se você deseja usar esse recurso, você pode usar o seguinte código de compatibilidade para evitar esse erro:</p>

<pre class="brush: js notranslate">// only run when the substr() function is broken
if ('ab'.substr(-1) != 'b') {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // call the original method
      return substr.call(this,
      	// did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start &lt; 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Defined in the (informative) Compatibility Annex B. Implemented in JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-B.2.3', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Defined in the (informative) Compatibility Annex B</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.substr', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.substr', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.substr")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("String.prototype.slice()")}}</li>
 <li>{{jsxref("String.prototype.substring()")}}</li>
</ul>
