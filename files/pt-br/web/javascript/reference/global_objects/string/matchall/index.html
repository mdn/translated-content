---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
  - Expressões Regulares
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - matchAll()
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/matchAll
---
<div>{{JSRef}}</div>

<p>O método <code>matchAll()</code> retorna um iterador de todos os resultados correspondentes a uma string em relação a uma <a href="/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions">expressão regular</a>, incluindo <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">grupos de captura</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/string-matchall.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>str</var>.matchAll(<var>regexp</var>)</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code><var>regexp</var></code></dt>
 <dd>
 <p>Um objeto de expressão regular.</p>

 <p>Se um objeto <em><code>obj</code></em> não-RegExp for passado, ele será convertido implicitamente em um {{jsxref("RegExp")}} usando <code>new RegExp(<em>obj</em>)</code>.</p>

 <p>O objeto <code>RegExp</code> deve ter o sinalizador (flag) <code>/g</code>, caso contrário, um <code>TypeError</code> será retornado.</p>
 </dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Um <a href="/pt-BR/docs/Web/JavaScript/Guide/Iteratores_e_geradores">iterador</a> (que não é um iterável reinicializável).</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Regexp.exec_e_matchAll">Regexp.exec() e matchAll()</h3>

<p>Antes da adição do <code>matchAll()</code> ao JavaScript, era possível usar chamadas <a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec">regexp.exec</a> (e regexes com a sinalização (flag) <code>/g</code>) em um loop para obter todas as correspondências:</p>

<pre class="brush: js notranslate">const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Encontrou ${match[0]} início=${match.index} fim=${regexp.lastIndex}.`);
  // retorna "Encontrou football início=6 fim=14."
  // retorna "Encontou foosball início=16 fim=24."
}</pre>

<p>Com o <code>matchAll()</code> disponível, você pode evitar o loop {{jsxref("Statements/while", "while")}} e executar com <code>g</code>.</p>

<p>Em vez disso, usando o <code>matchAll()</code>, você obtém um iterador para usar com o mais conveniente {{jsxref ("Statements/for ... of", "for...of")}}, {{jsxref ("Operators/Spread_syntax" , "array spread")}} ou construções {{jsxref ("Array.from()")}}:</p>

<pre class="brush: js notranslate">const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Encontrou ${match[0]} início=${match.index} fim=${match.index + match[0].length}.`);
}
// retorna "Encontrou football início=6 fim=14."
// retorna "Encontrou foosball início=16 fim=24."

// O iterador de correspondências se esgota após a iterção for..of
// Chame matchAll novamente para criar um novo iterador
Array.from(str.matchAll(regexp), m =&gt; m[0]);
// Array [ "football", "foosball" ]</pre>

<p><code>matchAll()</code> retornará uma exceção se o sinalizador (flag) <code>g</code> estiver ausente.</p>

<pre class="brush: js notranslate">const regexp = RegExp('[a-c]','');
const str = 'abc';
str.matchAll(regexp);
// retorna TypeError
</pre>

<p><code>matchAll()</code> cria internamente um clone da <code>regexp</code> - portanto, ao contrário de {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}}, o <code>lastIndex</code> não muda conforme a string é verificada.</p>

<pre class="brush: js notranslate">const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m =&gt; `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]</pre>

<h3 id="Melhor_acesso_para_capturar_grupos_do_que_String.prototype.match">Melhor acesso para capturar grupos (do que String.prototype.match())</h3>

<p>Outra razão convincente para usar <code>matchAll()</code> é o acesso aprimorado para capturar grupos.</p>

<p>Os grupos de captura são ignorados ao usar {{jsxref("Global_Objects/String/match", "match()")}} com o sinalizador global <code>/g</code>:</p>

<pre class="brush: js notranslate">let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']</pre>

<p>Usando o <code>matchAll()</code>, você pode acessar os grupos de captura facilmente:</p>

<pre class="brush: js notranslate">let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.matchall', 'String.prototype.matchAll')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.matchAll")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Using regular expressions in JavaScript</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Capturing groups</a></li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
