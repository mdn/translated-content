---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
translation_of: Web/JavaScript/Reference/Statements/Empty
---
<div>{{jsSidebar("Statements")}}</div>

<p>Uma <strong>declaração vazia</strong> é usada para fornecer nenhuma declaração, embora a sintaxe do JavaScript esperasse uma.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-empty.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">;
</pre>

<h2 id="Descrição">Descrição</h2>

<p>A instrução vazia é um ponto-e-vírgula (;) indicando que nenhuma instrução será executada, mesmo se a sintaxe do JavaScript exigir uma.</p>

<p>O comportamento oposto, em que você deseja várias instruções, mas o JavaScript permite apenas uma única, é possível usando uma <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block">instrução de bloco</a> ; combina várias declarações em uma única.</p>

<h2 id="Exemplos">Exemplos</h2>

<p>A instrução vazia às vezes é usada com instruções de loop. Veja o exemplo a seguir com um corpo de loop vazio:</p>

<pre class="brush: js notranslate">var arr = [1, 2, 3];

// Assign all array values to 0
for (i = 0; i &lt; arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr)
// [0, 0, 0]
</pre>

<p><strong>Nota:</strong> É uma boa ideia comentar o uso intencional da declaração vazia, pois não é realmente óbvio distinguir entre um ponto e vírgula normal. No exemplo a seguir, o uso provavelmente não é intencional:</p>

<pre class="brush: js notranslate">if (condition);       // Caution, this "if" does nothing!
   killTheUniverse()  // So this gets always executed!!!
</pre>

<p>Outro Exemplo: Uma declaração <a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a> declaração sem chaves ({ }). Se três for verdadeiro, nada acontecerá, quatro não importa e também a função launchRocket ( ) no caso contrário não será executada.</p>

<pre class="brush: js notranslate">if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-empty-statement', 'Empty statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browsers_compatíveis">Browsers compatíveis</h2>



<p>{{Compat("javascript.statements.empty")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Statements/block", "Block statement")}}</li>
</ul>
