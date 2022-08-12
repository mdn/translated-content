---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
tags:
  - Erros
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Read-only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #&lt;Object&gt; (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
</pre>

<h2 id="Tipo_de_Erro">Tipo de Erro</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>A variável global ou propriedade do objeto foi definida como propriedade somente-leitura. (Tecnicamente, esse é um dado de <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute">não-escrita</a>.)</p>

<p>Esse erro ocorre apenas em código no <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>. No modo não strict mode, essa atribuição é ignorada silenciosamente.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Casos_inválidos">Casos inválidos</h3>

<p>Propriedades somente-leitura não são super comuns, mas elas podem ser criadas utilizando {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.freeze()")}}.</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({nome: 'Elsa', pontuacao: 157});
obj.pontuacao = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'CONTADOR_PULMAO', {value: 2, writable: false});
CONTADOR_PULMAO = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
</pre>

<p>Existem também algumas propriedades somente-leitura nativas do Javascript. Talvez você já tentou redefinir um constante matemática.</p>

<pre class="brush: js example-bad">'use strict';
Math.PI = 4;  // TypeError
</pre>

<p>Desculpe, você não pode fazer isso.</p>

<p>A variável global <code>undefined</code> também é somente-leitura, então você não pode silenciar o infame erro "undefined is not a function" fazendo isso:</p>

<pre class="brush: js example-bad">'use strict';
undefined = function() {};  // TypeError: "undefined" is read-only
</pre>

<h3 id="Casos_válidos">Casos válidos</h3>

<pre class="brush: js example-good">'use strict';
var obj = Object.freeze({nome: 'Score', pontos: 157});
obj = {nome: obj.nome, pontos: 0};   // substituindo com o novo objeto funciona

'use strict';
var CONTADOR_PULMAO = 2;  // uma `var` funciona, porque ela não é somente-leitura
CONTADOR_PULMAO = 3;  // ok (anatomicamente improvável, porém...)
</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li><a href="https://www.answers.com/Q/Which_animals_have_three_lungs">"Quais animais tem três pulmões?" no answers.com</a></li>
 <li><a href="https://aliens.wikia.com/wiki/Klingon">Klingons</a> (uma outra resposta para essa pergunta)</li>
</ul>
