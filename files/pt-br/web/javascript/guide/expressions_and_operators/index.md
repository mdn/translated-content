---
title: Expressões e operadores
slug: Web/JavaScript/Guide/Expressions_and_Operators
tags:
  - Expressões
  - Guia(2)
  - Guía
  - Iniciante
  - JavaScript
  - Operadores
translation_of: Web/JavaScript/Guide/Expressions_and_Operators
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}</div>

<p class="summary">Este artigo descreve expressões e operadores de JavaScript, incluindo operadores de atribuição, comparação, aritméticos, bit a bit, lógicos, de strings e especiais.</p>

<ul>
</ul>

<h2 id="Operadores">Operadores</h2>

<p>O JavaScript possui os tipos de operadores a seguir. Esta seção descreve os operadores e contém informações sobre precedência de operadores.</p>

<ul>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao">Operadores de atribuição</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_comparacao">Operadores de comparação</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos">Operadores aritméticos</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit">Operadores bit a bit</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos">Operadores lógicos</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_string">Operadores de string</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario">Operador condicional (ternário)</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_virgula">Operador vírgula</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_unario">Operadores unário</a></li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_virgula">Operadores relacionais</a></li>
</ul>

<p>O JavaScript possui tanto operadores <em>binários</em> quanto <em>unários</em> e um operador ternário, o operador condicional. Um operador binário exige dois operandos, um antes do operador e outro depois:</p>

<pre class="notranslate"><em>operando1</em> <em>operador</em> <em>operando2</em>
</pre>

<p>Por exemplo, <code>3+4</code> ou <code>x*y</code>.</p>

<p>Um operador unário exige um único operando, seja antes ou depois do operador:</p>

<pre class="notranslate"><em>operador</em> <em>operando</em>
</pre>

<p>ou</p>

<pre class="notranslate"><em>operando</em> <em>operador</em>
</pre>

<p>Por exemplo, <code>x++</code> ou <code>++x</code>.</p>

<h3 id="Operadores_de_atribuição"><a id="operador_atribuicao" name="operador_atribuicao">Operadores de atribuição</a></h3>

<p>Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita. O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.</p>

<p>Os outros operadores de atribuição são encurtamentos de operadores padrão, como mostrado na tabela a seguir.</p>

<table class="standard-table" style="height: 500px; width: 631px;">
 <caption>Operadores de atribuição composto</caption>
 <thead>
  <tr>
   <th scope="col">Nome</th>
   <th scope="col" style="width: 30%;">Operador encurtado</th>
   <th scope="col">Significado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Atribuição</td>
   <td>x = y</td>
   <td>x = y</td>
  </tr>
  <tr>
   <td>Atribuição de adição</td>
   <td><code>x += y</code></td>
   <td><code>x = x + y</code></td>
  </tr>
  <tr>
   <td>Atribuição de subtração</td>
   <td><code>x -= y</code></td>
   <td><code>x = x - y</code></td>
  </tr>
  <tr>
   <td>Atribuição de multiplicação</td>
   <td><code>x *= y</code></td>
   <td><code>x = x * y</code></td>
  </tr>
  <tr>
   <td>Atribuição de divisão</td>
   <td><code>x /= y</code></td>
   <td><code>x = x / y</code></td>
  </tr>
  <tr>
   <td>Atribuição de resto</td>
   <td><code>x %= y</code></td>
   <td><code>x = x % y</code></td>
  </tr>
  <tr>
   <td>Atribuição exponencial</td>
   <td>x **= y</td>
   <td>x = x ** y</td>
  </tr>
  <tr>
   <td>Atribuição bit-a-bit por deslocamento á esquerda</td>
   <td><code>x &lt;&lt;= y</code></td>
   <td><code>x = x &lt;&lt; y</code></td>
  </tr>
  <tr>
   <td>Atribuição bit-a-bit por deslocamento á direita</td>
   <td><code>x &gt;&gt;= y</code></td>
   <td><code>x = x &gt;&gt; y</code></td>
  </tr>
  <tr>
   <td>Atribuiçãode bit-a-bit deslocamento á direita não assinado</td>
   <td><code>x &gt;&gt;&gt;= y</code></td>
   <td><code>x = x &gt;&gt;&gt; y</code></td>
  </tr>
  <tr>
   <td>Atribuição AND bit-a-bit</td>
   <td><code>x &amp;= y</code></td>
   <td><code>x = x &amp; y</code></td>
  </tr>
  <tr>
   <td>Atribuição XOR bit-a-bit</td>
   <td><code>x ^= y</code></td>
   <td><code>x = x ^ y</code></td>
  </tr>
  <tr>
   <td>Atribuição OR bit-a-bit</td>
   <td><code>x |= y</code></td>
   <td><code>x = x | y</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Operadores_de_comparação"><a id="operador_comparacao" name="operador_comparacao">Operadores de comparação</a></h3>

<p><span class="comment">This seems to me kind of poorly explained, mostly the difference betwen "==" and "==="...</span> Um operador de comparação compara seus operandos e retorna um valor lógico baseado em se a comparação é verdadeira. Os operandos podem ser numéricos, strings, lógicos ou objetos. Strings são comparadas com base em ordenação lexográfica utilizando valores Unicode. Na maioria dos casos, se dois operandos não são do mesmo tipo, o JavaScript tenta convertê-los para um tipo apropriado. Isto geralmente resulta na realização de uma comparação numérica. As únicas exceções a esta regra são os operadores <code>===</code> e o <code>!==</code>, que realizam comparações de igualdade e desigualdade "estritas". Estes operadores não tentam converter os operandos em tipos compatíveis antes de verificar a igualdade. A tabela a seguir descreve os operadores de comparação levando em conta o seguinte código:</p>

<pre class="brush: js notranslate">var var1 = 3;
var var2 = 4;
</pre>

<table class="standard-table">
 <caption>Operadores de comparação</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Descrição</th>
   <th scope="col">Exemplos que retornam verdadeiro</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Igual (<code>==</code>)</td>
   <td>Retorna verdadeiro caso os operandos sejam iguais.</td>
   <td><code>3 == var1</code>
    <p><code>"3" == var1</code></p>
    <code>3 == '3'</code></td>
  </tr>
  <tr>
   <td>Não igual (<code>!=</code>)</td>
   <td>Retorna verdadeiro caso os operandos não sejam iguais.</td>
   <td><code>var1 != 4<br>
    var2 != "3"</code></td>
  </tr>
  <tr>
   <td>Estritamente igual (<code>===</code>)</td>
   <td>Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também <a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is</code></a> e <a href="/pt-BR/docs/Web/JavaScript/Guide/Sameness">igualdade em JS</a>.</td>
   <td><code>3 === var1</code></td>
  </tr>
  <tr>
   <td>Estritamente não igual (<code>!==</code>)</td>
   <td>Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.</td>
   <td><code>var1 !== "3"<br>
    3 !== '3'</code></td>
  </tr>
  <tr>
   <td>Maior que (<code>&gt;</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.</td>
   <td><code>var2 &gt; var1<br>
    "12" &gt; 2</code></td>
  </tr>
  <tr>
   <td>Maior que ou igual (<code>&gt;=</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.</td>
   <td><code>var2 &gt;= var1<br>
    var1 &gt;= 3</code></td>
  </tr>
  <tr>
   <td>Menor que (<code>&lt;</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.</td>
   <td><code>var1 &lt; var2<br>
    "12" &lt; "2"</code></td>
  </tr>
  <tr>
   <td>Menor que ou igual (<code>&lt;=</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.</td>
   <td><code>var1 &lt;= var2<br>
    var2 &lt;= 5</code></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Nota:</strong> (<strong>=&gt;</strong>) não é um operador, mas a notação para <a href="/pt-BR/docs/Web/JavaScript/Guide/Funções#Arrow_functions">função de seta</a></p>
</div>

<h3 id="Operadores_aritméticos"><a name="operadores_aritmeticos">Operadores aritméticos</a></h3>

<p>Operadores aritméticos tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico. Os operadores aritméticos padrão são os de soma (<code>+</code>), subtração (<code>-</code>), multiplicação (<code>*</code>) e divisão (<code>/</code>). Estes operadores trabalham da mesma forma como na maioria das linguagens de programação quando utilizados com números de ponto flutuante (em particular, repare que divisão por zero produz um <a href="/pt-BR/docs/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>). Por exemplo:</p>

<pre class="brush: js notranslate">console.log(1 / 2); /* imprime 0.5 */
console.log(1 / 2 == 1.0 / 2.0); /* isto também é verdadeiro */
</pre>

<p>Em complemento às operações aritméticas padrões (+, -, * /), o JavaScript disponibiliza os operadores aritméticos listados na tabela a seguir.</p>

<table class="fullwidth-table" style="height: 292px; width: 555px;">
 <caption>Operadores aritméticos</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Descrição</th>
   <th scope="col">Exemplo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Módulo (%)</td>
   <td>Operador binário. Retorna o inteiro restante da divisão dos dois operandos.</td>
   <td>12 % 5 retorna 2.</td>
  </tr>
  <tr>
   <td>Incremento (++)</td>
   <td>Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (<code>++x</code>), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (<code>x++</code>), retorna o valor de seu operando antes da adição.</td>
   <td>Se <code>x</code> é 3, então <code>++x</code> define <code>x</code> como 4 e retorna 4, enquanto <code>x++</code> retorna 3 e, somente então, define <code>x</code> como 4.</td>
  </tr>
  <tr>
   <td>Decremento (--)</td>
   <td>Operador unário. Subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.</td>
   <td>Se <code>x</code> é 3, então <code>--x</code> define <code>x</code> como 2 e retorna 2, enquanto <code>x--</code> retorna 3 e, somente então, define <code>x</code> como 2.</td>
  </tr>
  <tr>
   <td>Negação (-)</td>
   <td>Operador unário. Retorna a negação de seu operando.</td>
   <td>
    <p>Se <code>x</code> é 3, então <code>-x</code> retorna -3.</p>
   </td>
  </tr>
  <tr>
   <td>Adição (+)</td>
   <td>Operador unário. Tenta converter o operando em um número, sempre que possível.</td>
   <td>
    <p>+"3" retorna 3.</p>

    <p>+true retorna 1.</p>
   </td>
  </tr>
  <tr>
   <td>Operador de exponenciação (**) {{experimental_inline}}</td>
   <td>Calcula a base elevada á potência do expoente, que é, base<code><sup>expoente</sup></code></td>
   <td>
    <p>2 ** 3 retorna 8.</p>

    <p>10 ** -1 retorna 0.1</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="Operadores_bit_a_bit"><a id="operadores_bit_a_bit" name="operadores_bit_a_bit">Operadores bit a bit</a></h3>

<p>Operadores bit a bit tratam seus operandos como um conjunto de 32 bits (zeros e uns), em vez de tratá-los como números decimais, hexadecimais ou octais. Por exemplo, o número decimal nove possui uma representação binária 1001. Operadores bit a bit realizam suas operações nestas representações, mas retornam valores numéricos padrões do JavaScript.</p>

<p>A tabela a seguir resume os operadores bit a bit do JavaScript.</p>

<table class="standard-table">
 <caption>Operadores bit a bit</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Expressão</th>
   <th scope="col">Descrição</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>AND</td>
   <td><code>a &amp; b</code></td>
   <td>Retorna um 1 para cada posição em que os bits da posição correspondente de ambos operandos sejam uns.</td>
  </tr>
  <tr>
   <td>OR</td>
   <td><code>a | b</code></td>
   <td>Retorna um 0 para cada posição em que os bits da posição correspondente de  ambos os operandos sejam zeros.</td>
  </tr>
  <tr>
   <td>XOR</td>
   <td><code>a ^ b</code></td>
   <td>
    <p>Retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos.<br>
     <br>
     [Retorna um 1 para cada posição em que os bits da posição correspondente sejam diferentes.]</p>
   </td>
  </tr>
  <tr>
   <td>NOT</td>
   <td><code>~ a</code></td>
   <td>Inverte os bits do operando.</td>
  </tr>
  <tr>
   <td>Deslocamento à esquerda</td>
   <td><code>a &lt;&lt; b</code></td>
   <td>Desloca <code>a</code> em representação binária <code>b</code> bits à esquerda, preenchendo com zeros à direita.</td>
  </tr>
  <tr>
   <td>Deslocamento à direita com propagação de sinal</td>
   <td><code>a &gt;&gt; b</code></td>
   <td>Desloca <code>a</code> em representação binária <code>b</code> bits à direita, descartando bits excedentes.</td>
  </tr>
  <tr>
   <td>Deslocamento à direita com preenchimento zero</td>
   <td><code>a &gt;&gt;&gt; b</code></td>
   <td>Desloca <code>a</code> em representação binária <code>b</code> bits à direita, descartando bits excedentes e preenchendo com zeros à esquerda.</td>
  </tr>
 </tbody>
</table>

<h4 id="Bitwise_Logical_Operators" name="Bitwise_Logical_Operators">Operadores bit a bit lógicos</h4>

<p>Conceitualmente, os operadores bit a bit lógicos funcionam da seguinte maneira:</p>

<ul>
 <li>Os operandos são convertidos em inteiros de 32 bits e expressos como uma série de bits (zeros e uns). Números com representação maior que 32 bits terão seus bits truncados. Por exemplo, o seguinte inteiro tem representação binária maior que 32 bits será convertido em um inteiro de 32 bits.</li>
</ul>

<pre class="line-numbers  language-html notranslate">Antes:<code> </code><code class="language-html">11100110111110100000000000000110000000000001
Depois: </code><code class="language-html">           10100000000000000110000000000001</code></pre>

<ul>
 <li>Cada bit do primeiro operando é pareado com o bit correspondente do segundo operando: primeiro bit com primeiro bit, segundo bit com segundo bit e assim por diante.</li>
 <li>O operador é aplicado a cada par de bits e o resultado é construído bit a bit.</li>
</ul>

<p>Por exemplo, a representação binária de nove é 1001 e a representação binária de quinze é 1111. Desta forma, quando operadores bit a bit são aplicados a estes valores, os resultados são como se segue:</p>

<table class="standard-table">
 <caption>Exemplo de operação bit a bit</caption>
 <thead>
  <tr>
   <th scope="col">Expressão</th>
   <th scope="col">Resultado</th>
   <th scope="col">Descrição binária</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>15 &amp; 9</code></td>
   <td><code>9</code></td>
   <td><code>1111 &amp; 1001 = 1001</code></td>
  </tr>
  <tr>
   <td><code>15 | 9</code></td>
   <td><code>15</code></td>
   <td><code>1111 | 1001 = 1111</code></td>
  </tr>
  <tr>
   <td><code>15 ^ 9</code></td>
   <td><code>6</code></td>
   <td><code>1111 ^ 1001 = 0110</code></td>
  </tr>
  <tr>
   <td><code>~15</code></td>
   <td><code>-16</code></td>
   <td><code>~</code><code>00000000...</code><code>00001111 = </code><code>1111</code><code>1111</code><code>...</code><code>11110000</code></td>
  </tr>
  <tr>
   <td><code>~9</code></td>
   <td><code>-10</code></td>
   <td><code>~</code><code>00000000</code><code>...</code><code>0000</code><code>1001 = </code><code>1111</code><code>1111</code><code>...</code><code>1111</code><code>0110</code></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Nota</strong>: No quadro acima perceba que todos os 32 bits são invertidos quando usa-se o operador bit a bit NOT, e que os bits mais significativos (extrema esquerda) são definidos com 1 que representam valores negativos (representação complemento de dois).</p>
</div>

<h4 id="Bitwise_Shift_Operators" name="Bitwise_Shift_Operators">Operadores de deslocamento bit a bit</h4>

<p>Os operadores de deslocamento bit a bit possui dois operandos: o primeiro é uma quantidade a ser deslocada e o segundo especifica o número de posições binárias as quais o primeiro operando deverá ser deslocado. A direção da operação de deslocamento é controlada pelo operador utilizado.</p>

<p>Operadores de deslocamento convertem seus operandos em inteiros de 32 bits e retornam um resultado do tipo do operando à esquerda.</p>

<p>Os operadores de deslocamento são listados na tabela a seguir.</p>

<table class="fullwidth-table">
 <caption>Operadores bit a bit de deslocamento</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Descrição</th>
   <th scope="col">Exemplo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Deslocamento à esquerda (&lt;&lt;)</code></td>
   <td>Este operador desloca o primeiro operando pelo número especificado de bits à esquerda. Bits excedentes deslocados para fora do limite à esquerda são descartados. Bits zero são inseridos à direita.</td>
   <td><code>9&lt;&lt;2</code> produz 36 porque 1001 deslocado 2 bits à esquerda se torna 100100, que é 36.</td>
  </tr>
  <tr>
   <td>Deslocamento à direita com propagação de sinal<br>
    (<code>&gt;&gt;</code>)</td>
   <td>Este operador desloca o primeiro operando pelo número especificado de bits à direita. Bits excedentes deslocados para fora do limite à direita são descartados. Cópias dos bits mais à esquerda são deslocadas a partir da esquerda.</td>
   <td><code>9&gt;&gt;2</code> produz 2 porque 1001 deslocado 2 bits à direita se torna 10, que é 2. De forma similar, <code>-9&gt;&gt;2</code> produz -3 porque o sinal é preservado.</td>
  </tr>
  <tr>
   <td>Deslocamento à direita com preenchimento zero<br>
    (<code>&gt;&gt;&gt;</code>)</td>
   <td>Este operador desloca o primeiro operando pelo número especificado de bits à direita. Bits excedentes deslocados para fora do limite à direita são descartados. Bits zero são inseridos à esquerda.</td>
   <td><code>19&gt;&gt;&gt;2</code> produz 4 porque 10011 deslocado 2 bits à direita se torna 100, que é 4. Para números não negativos o deslocamento à direita com propagação de sinal e o deslocamento à direita com preenchimento zero produzem o mesmo resultado.</td>
  </tr>
 </tbody>
</table>

<h3 id="Operadores_lógicos"><a name="operadores_logicos">Operadores lógicos</a></h3>

<p><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos">Operadores lógicos</a> são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano. Entretanto, os operadores &amp;&amp; e || na verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não-booleano. Os operadores lógicos são descritos na seguinte tabela.</p>

<table class="fullwidth-table">
 <caption>Operadores lógico</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Utilização</th>
   <th scope="col">Descrição</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>AND lógico (&amp;&amp;)</code></td>
   <td><code>expr1 &amp;&amp; expr2</code></td>
   <td>(E lógico) - Retorna <code>expr1</code> caso possa ser convertido para falso; senão, retorna <code>expr2</code>. Assim, quando utilizado com valores booleanos, <code>&amp;&amp;</code> retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.</td>
  </tr>
  <tr>
   <td><code>OU lógico (||)</code></td>
   <td><code>expr1 || expr2</code></td>
   <td>(OU lógico) -  Retorna <code>expr1</code> caso possa ser convertido para verdadeiro; senão, retorna <code>expr2</code>. Assim, quando utilizado com valores booleanos, <code>||</code> retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.</td>
  </tr>
  <tr>
   <td><code>NOT lógico (!)</code></td>
   <td><code>!expr</code></td>
   <td>(Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.</td>
  </tr>
 </tbody>
</table>

<p>Exemplos de expressões que podem ser convertidas para falso são aquelas que são avaliados como nulo, 0, string vazia ("") ou <code>undefined</code>.</p>

<p>O código a seguir mostra exemplos do operador &amp;&amp; (E lógico).</p>

<pre class="brush: js notranslate">var a1 =  true &amp;&amp; true;     // t &amp;&amp; t retorna true
var a2 =  true &amp;&amp; false;    // t &amp;&amp; f retorna false
var a3 = false &amp;&amp; true;     // f &amp;&amp; t retorna false
var a4 = false &amp;&amp; (3 == 4); // f &amp;&amp; f retorna false
var a5 = "Gato" &amp;&amp; "Cão";   // t &amp;&amp; t retorna Cão
var a6 = false &amp;&amp; "Gato";   // f &amp;&amp; t retorna false
var a7 = "Gato" &amp;&amp; false;   // t &amp;&amp; f retorna false
</pre>

<p>O código a seguir mostra exemplos do operador || (OU lógico).</p>

<pre class="brush: js notranslate">var o1 =  true || true;     // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 =  true || false;    // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato
</pre>

<p>O código a seguir mostra exemplos do operador ! (negação lógica).</p>

<pre class="brush: js notranslate">var n1 = !true;   // !t retorna false
var n2 = !false;  // !f retorna true
var n3 = !"Gato"; // !t retorna false
</pre>

<h4 id="Short-Circuit_Evaluation" name="Short-Circuit_Evaluation">Avaliação de curto-circuito</h4>

<p>Como expressões lógicas são avaliadas da esquerda para a direita, elas são testadas como possíveis avaliações de "curto-circuito" utilizando as seguintes regras:</p>

<ul>
 <li><code>false</code> &amp;&amp; <em>qualquercoisa</em> é avaliado em curto-circuito como falso.</li>
 <li><code>true</code> || <em>qualquercoisa</em> é avaliado em curto-circuito como verdadeiro.</li>
</ul>

<p>As regras de lógica garantem que estas avaliações estejam sempre corretas. Repare que a parte <em>qualquercoisa</em> das expressões acima não é avaliada, de forma que qualquer efeito colateral de fazê-lo não produz efeito algum.</p>

<h3 id="Operadores_de_string"><a name="operadores_string">Operadores de string</a></h3>

<p>Além dos operadores de comparação, que podem ser utilizados em valores string, o operador de concatenação (+) concatena dois valores string, retornando outra string que é a união dos dois operandos.</p>

<p>Por exemplo,</p>

<pre class="notranslate"> console.log(<code>"minha " + "string"</code>); // exibe a string <code>"minha string"</code>.</pre>

<p>O operador de atribuição encurtado += também pode ser utilizado para concatenar strings.</p>

<p>Por exemplo,</p>

<pre class="notranslate">var minhaString = "alfa";
minhaString += "beto"; // É avaliada como "alfabeto" e atribui este valor a <code>minhastring</code>.</pre>

<h3 id="Operador_condicional_ternário"><a name="operador_condicional_ternario">Operador condicional (ternário)</a></h3>

<p>O operador condicional é o único operador JavaScript que utiliza três operandos. O operador pode ter um de dois valores baseados em uma condição. A sintaxe é:</p>

<pre class="notranslate"><em>condicao</em> ? <em>valor1</em> : <em>valor2</em>
</pre>

<p>Se <code>condicao</code> for verdadeira, o operador terá o valor de <code>valor1</code>. Caso contrário, terá o valor de <code>valor2</code>. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.</p>

<p>Por exemplo,</p>

<pre class="brush: js notranslate">var status = (idade &gt;= 18) ? "adulto" : "menor de idade";
</pre>

<p>Esta declaração atribui o valor "adulto" à variável <code>status</code> caso <code>idade</code> seja dezoito ou mais. Caso contrário, atribui o valor "menor de idade".</p>

<h3 id="comma_operator" name="comma_operator"><a id="operador_virgula" name="operador_virgula">Operador vírgula</a></h3>

<p>O operador vírgula (<code>,</code>) simplesmente avalia ambos de seus operandos e retorna o valor do segundo. Este operador é utilizado primariamente dentro de um laço <code>for</code> para permitir que multiplas variáveis sejam atualizadas cada vez através do laço.</p>

<p>Por exemplo, se <code>a</code> é uma matriz bidimensional com 10 elementos em um lado, o código a seguir utiliza o operador vírgula para incrementar duas variáveis de uma só vez. O código imprime os valores dos elementos diagonais da matriz:</p>

<pre class="brush: js notranslate">for (var i = 0, j = 9; i &lt;= 9; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
</pre>

<h3 id="delete" name="delete"><a name="operadores_unario">Operadores unário</a></h3>

<p>Um operador unário é uma operação com apenas um operando.</p>

<h4 id="delete" name="delete"><code>delete</code></h4>

<p>O operador <code>delete</code> apaga um objeto, uma propriedade de um objeto ou um elemento no índice especificado de uma matriz. A sintaxe é:</p>

<pre class="brush: js notranslate">delete nomeObjeto;
delete <span style="font-size: 1rem;">nomeObjeto</span><span style="font-size: 1rem;">.propriedade;</span>
delete nomeObjeto[indice];
delete propriedade; // válido apenas dentro de uma declaração with
</pre>

<p>onde <code>nomeObjeto</code> é o nome de um objeto, <code>propriedade</code> é uma propriedade existente e <code>indice</code> é um inteiro que representa a localização de um elemento em uma matriz.</p>

<p>A quarta forma é permitida somente dentro de uma declaração <code>with</code> para apagar uma propriedade de um objeto.</p>

<p>Você pode utilizar o operador <code>delete</code> para apagar variáveis declaradas implicitamente mas não aquelas declaradas com <code>var</code>.</p>

<p>Se o operador <code>delete</code> for bem-sucedido, ele define a propriedade ou elemento para <code>undefined</code>. O operador <code>delete</code> retorna verdadeiro se a operação for possível; ele retorna falso se a operação não for possível.</p>

<pre class="brush: js notranslate">x = 42;
var y = 43;
meuobj = new Number();
meuobj.h = 4;    // cria a propriedade h
delete x;        // retorna true (pode apagar se declarado implicitamente)
delete y;        // retorna false (não pode apagar se declarado com var)
delete Math.PI;  // retorna false (não pode apagar propriedades predefinidas)
delete meuobj.h; // retorna true (pode apagar propriedades definidas pelo usuário)
delete meuobj;   // retorna true (pode apagar se declarado implicitamente)
</pre>

<h5 id="Apagando_elementos_de_array">Apagando elementos de array</h5>

<p>Quando você apaga um elemento de um array, o tamanho do array não é afetado. Por exemplo, se você apaga <code>a[3]</code>, o valor de <code>a[4]</code> ainda estará em <code>a[4]</code> e <code>a[3]</code> passa a ser <code>undefined</code>.</p>

<p>Quando o operador <code>delete</code> remove um elemento do array, aquele elemento não pertence mais ao array. No exemplo a seguir, <code>arvores[3]</code> é removido com <code>delete</code>. Entretanto, <code>arvores[3]</code> ainda é endereçável e retorna <code>undefined</code>.</p>

<pre class="brush: js notranslate">var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
delete arvores[3];
if (3 in arvores) {
  // isto não é executado
}
</pre>

<p>Se você quer que um elemento do array exista, mas tenha um valor indefinido, utilize a palavra-chave <code>undefined</code> em vez do operador <code>delete</code>. No exemplo a seguir, o valor <code>undefined</code> é atribuído a <code>arvores[3]</code>, mas o elemento da matriz ainda existe:</p>

<pre class="brush: js notranslate">var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
arvores[3] = undefined;
if (3 in arvores) {
  // isto será executado
}
</pre>

<h4 id="typeof" name="typeof"><code>typeof</code></h4>

<p>O operador <code>typeof</code> é utilizado em qualquer uma das seguintes formas:</p>

<pre class="brush: js notranslate">typeof operando
typeof (operando)
</pre>

<p>O operador <code>typeof</code> retorna uma string indicando o tipo do operando sem avaliação. <code>operando</code> é uma string, variável, palavra-chave ou objeto cujo tipo deve ser retornado. Os parênteses são opcionais.</p>

<p>Suponha que você defina as seguintes variáveis:</p>

<pre class="brush: js notranslate">var meuLazer = new Function("5 + 2");
var forma = "redondo";
var tamanho = 1;
var hoje = new Date();
</pre>

<p>O operador <code>typeof</code> retornaria o seguinte resultado para aquelas variáveis:</p>

<pre class="brush: js notranslate">typeof meuLazer;  // retorna "function"
typeof forma;     // retorna "string"
typeof tamanho;   // retorna "number"
typeof hoje;      // retorna "object"
typeof naoExiste; // retorna "undefined"
</pre>

<p>Para as palavras-chave <code>true</code> e <code>null</code>, o <code>typeof</code> retorna os seguintes resultados:</p>

<pre class="brush: js notranslate">typeof true; // retorna "boolean"
typeof null; // retorna "object"
</pre>

<p>Para um número ou uma string, o <code>typeof</code> retorna os seguintes resultados:</p>

<pre class="brush: js notranslate">typeof 62;          // retorna "number"
typeof 'Olá mundo'; // retorna "string"
</pre>

<p>Para valores de propriedades, o <code>typeof</code> retorna o tipo do valor que a propriedade possui:</p>

<pre class="brush: js notranslate">typeof document.lastModified; // retorna "string"
typeof window.length;         // retorna "number"
typeof Math.LN2;              // retorna "number"
</pre>

<p>Para métodos e funções, o <code>typeof</code> retorna os seguintes resultados:</p>

<pre class="brush: js notranslate">typeof blur;        // retorna "function"
typeof eval;        // retorna "function"
typeof parseInt;    // retorna "function"
typeof forma.split; // retorna "function"
</pre>

<p>Para objetos predefinidos, o <code>typeof</code> retorna os seguintes resultados:</p>

<pre class="brush: js notranslate">typeof Date;     // retorna "function"
typeof Function; // retorna "function"
typeof Math;     // retorna "object"
typeof Option;   // retorna "function"
typeof String;   // retorna "function"
</pre>

<h4 id="typeof" name="typeof"><code>void</code></h4>

<p>O operador <code>void</code> é utilizado de qualquer uma das seguintes formas:</p>

<pre class="brush: js notranslate">void (expressao)
void expressao
</pre>

<p>O operador <code>void</code> especifica que uma expressão deve ser avaliada sem retorno de valor. <code>expressao</code> é uma expressão JavaScript que deve ser avaliada. Os parênteses em torno da expressão são opcionais, mas é uma boa prática utilizá-los.</p>

<p>Você pode utilizar o operador <code>void</code> para especificar uma expressão como um link de hipertexto. A expressão é avaliada mas não é carregada no lugar do documento atual.</p>

<p>O código a seguir cria um link de hipertexto que não faz coisa alguma quando clicado pelo usuário. Quando o usuário clica no link, <code>void(0)</code> é avaliado como indefinido, que não tem efeito em JavaScript.</p>

<pre class="brush: html notranslate">&lt;a href="javascript:void(0)"&gt;Clique aqui para fazer nada&lt;/a&gt;
</pre>

<p>O código a seguir cria um link de hipertexto que submete um formulário quando clicado pelo usuário.</p>

<pre class="brush: html notranslate">&lt;a href="javascript:void(document.form.submit())"&gt;
Clique aqui para enviar&lt;/a&gt;</pre>

<h3 id="in" name="in"><a name="operadores_relacionais">Operadores relacionais</a></h3>

<p>Um operador relacional compara seus operando e retorna um valor booleano baseado em se a comparação é verdadeira.</p>

<h4 id="in" name="in"><code>in</code></h4>

<p>O operador <code>in</code> retorna verdadeiro se a propriedade especificada estiver no objeto especificado. A sintaxe é:</p>

<pre class="brush: js notranslate">nomePropriedadeOuNumero in nomeObjeto
</pre>

<p>onde <code>nomePropriedadeOuNumero</code> é uma string ou uma expressão numérica que representa um nome de propriedade ou um índice de um array, e <code>nomeObjeto</code> é o nome de um objeto.</p>

<p>Os exemplos a seguir mostram alguns usos do operador <code>in</code>.</p>

<pre class="brush: js notranslate">// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;        // retorna verdadeiro
3 in arvores;        // retorna verdadeiro
6 in arvores;        // retorna falso
"cedro" in arvores;  // retorna falso (você deve especificar o número do índice,
                     // não o valor naquele índice)
"length" in arvores; // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;            // retorna verdadeiro
var minhaString = new String("coral");
"length" in minhaString; // retorna verdadeiro

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;  // retorna verdadeiro
"modelo" in meucarro; // retorna verdadeiro
</pre>

<h4 id="instanceof" name="instanceof"><code>instanceof</code></h4>

<p>O operador <code>instanceof</code> retorna verdadeiro se o objeto especificado for do tipo de objeto especificado. A sintaxe é:</p>

<pre class="brush: js notranslate">nomeObjeto instanceof tipoObjeto
</pre>

<p>onde <code>nomeObjeto</code> é o nome do objeto a ser comparado com <code>tipoObjeto</code>, e <code>tipoObjeto</code> é um tipo de objeto como <code>Date</code> ou <code>Array</code>.</p>

<p>Utilize o <code>instanceof</code> quando você precisar confirmar o tipo de um objeto em tempo de execução. Por exemplo, ao capturar exceções você pode desviar para um código de manipulação de exceção diferente dependendo do tipo de exceção lançada.</p>

<p>Por exemplo, o código a seguir utiliza o <code>instanceof</code> para determinar se <code>dia</code> é um objeto <code>Date</code>. Como <code>dia</code> é um objeto <code>Date</code>, as declarações do <code>if</code> são executadas.</p>

<pre class="brush: js notranslate">var dia = new Date(1995, 12, 17);
if (dia instanceof Date) {
  // declarações a serem executadas
}
</pre>

<h3 id="typeof" name="typeof"><a name="precedencia_de_operadores">Precedência de operadores</a></h3>

<p>A <em>precedência</em> de operadores determina a ordem em que eles são aplicados quando uma expressão é avaliada. Você pode substituir a precedência dos operadores utilizando parênteses.</p>

<p>A tabela a seguir descreve a precedência de operadores, da mais alta para a mais baixa.</p>

<table class="standard-table">
 <caption>Precedência de operadores</caption>
 <thead>
  <tr>
   <th scope="col">Tipo de operador</th>
   <th scope="col">Operadores individuais</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>membro</td>
   <td><code>. []</code></td>
  </tr>
  <tr>
   <td>chamada / criação de instância</td>
   <td><code>() new</code></td>
  </tr>
  <tr>
   <td>negação / incremento</td>
   <td><code>! ~ - + ++ -- typeof void delete</code></td>
  </tr>
  <tr>
   <td>multiplicação / divisão / resto ou módulo</td>
   <td><code>* / %</code></td>
  </tr>
  <tr>
   <td>adição / subtração</td>
   <td><code>+ -</code></td>
  </tr>
  <tr>
   <td>deslocamento bit a bit</td>
   <td><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></td>
  </tr>
  <tr>
   <td>relacional</td>
   <td><code>&lt; &lt;= &gt; &gt;= in instanceof</code></td>
  </tr>
  <tr>
   <td>igualdade</td>
   <td><code>== != === !==</code></td>
  </tr>
  <tr>
   <td>E bit a bit</td>
   <td><code>&amp;</code></td>
  </tr>
  <tr>
   <td>OU exclusivo bit a bit</td>
   <td><code>^</code></td>
  </tr>
  <tr>
   <td>OU bit a bit</td>
   <td><code>|</code></td>
  </tr>
  <tr>
   <td>E lógico</td>
   <td><code>&amp;&amp;</code></td>
  </tr>
  <tr>
   <td>OU lógico</td>
   <td><code>||</code></td>
  </tr>
  <tr>
   <td>condicional</td>
   <td><code>?:</code></td>
  </tr>
  <tr>
   <td>atribuição</td>
   <td><code>= += -= *= /= %= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;= &amp;= ^= |=</code></td>
  </tr>
  <tr>
   <td>vírgula</td>
   <td><code>,</code></td>
  </tr>
 </tbody>
</table>

<p>Uma versão mais detalhada desta tabela, com links adicionais para detalhes de cada operador, pode ser vista em <a href="/pt-BR/docs/JavaScript/Reference/Operators/Operator_Precedence#Table">Referência do JavaScript</a>.</p>

<h2 id="Expressões">Expressões</h2>

<p>Uma <em>expressão</em> consiste em qualquer unidade válida de código que é resolvida como um valor.</p>

<p>Conceitualmente, existem dois tipos de expressões: aquelas que atribuem um valor a uma variável e aquelas que simplesmente possuem um valor.</p>

<p>A expressão <code>x = 7</code> é um exemplo do primeiro tipo. Esta expressão utiliza o <em>operador</em> = para atribuir o valor sete à variável <code>x</code>. A expressão em si é avaliada como sete.</p>

<p>O código <code>3 + 4</code> é um exemplo do segundo tipo de expressão. Esta expressão utiliza o operador + para somar três e quatro sem atribuir o resultado, sete, a uma variável.</p>

<p>O JavaScript possui as seguintes categorias de expressão:</p>

<ul>
 <li>Aritmética: é avaliada como um número, por exemplo 3.14159. (Geralmente utiliza <a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos">operadores aritméticos</a>).</li>
 <li>String: é avaliada como uma string de caracteres, por exemplo, "Fred" ou "234". (Geralmente utiliza <a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_string">operadores de string</a>).</li>
 <li>Lógica: é avaliada como verdadeira ou falsa. (Costuma envolver<a href="/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos"> operadores lógicos</a>).</li>
 <li>Expressões primárias: Palavras reservadas e expressões gerais do JavaScript.</li>
 <li>Expressão lado esquerdo: atribuição à esquerda de valores.</li>
</ul>

<h3 id="Expressões_primárias">Expressões primárias</h3>

<p>Palavras reservadas e expressões gerais do JavaScript.</p>

<h4 id="this" name="this"><code>this</code></h4>

<p>Utilize a palavra reservada <code>this</code> para se referir ao objeto atual. Em geral, o <code>this</code> se refere ao objeto chamado em um método. Utilize o <code>this</code> das seguintes formas:</p>

<pre class="brush: js notranslate">this["nomePropriedade"]
this.nomePropriedade
</pre>

<p>Suponha uma função chamada <code>valide</code> que valida a propriedade <code>valor</code> de um objeto, dado o objeto e os valores máximo e mínimo:</p>

<pre class="brush: js notranslate">function valide(obj, minimo, maximo){
  if ((obj.valor &lt; minimo) || (obj.valor &gt; maximo))
    alert("Valor inválido!");
}
</pre>

<p>Você poderia chamar <code>valide</code> em cada manipulador de evento <code>onChange</code> de um formulário utilizando <code>this</code> para passar o elemento do formulário, como no exemplo a seguir:</p>

<pre class="brush: html notranslate">&lt;b&gt;Informe um número entre 18 e 99:&lt;/b&gt;
&lt;input type="text" name="idade" size=3
   onChange="valide(this, 18, 99);"&gt;
</pre>

<h4 id="new" name="new">Operador de agrupamento</h4>

<p>O operador de agrupamento <code>( )</code> controla a precedência de avaliação de expressões. Por exemplo, você pode substituir a precedência da divisão e multiplicação para que a adição e subtração sejam avaliadas primeiro.</p>

<pre class="brush:js line-numbers  language-js notranslate"><code class="language-js"><span class="keyword token">var</span> a <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> b <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> c <span class="operator token">=</span> <span class="number token">3</span><span class="punctuation token">;</span>

<span class="comment token">// Precedência padrão</span>
a <span class="operator token">+</span> b <span class="operator token">*</span> c     <span class="comment token">// 7</span>
<span class="comment token">// a avaliação padrão pode ser assim</span>
a <span class="operator token">+</span> <span class="punctuation token">(</span>b <span class="operator token">*</span> c<span class="punctuation token">)</span>   <span class="comment token">// 7</span>

<span class="comment token">// Agora substitui a precedência</span>
<span class="comment token">// soma antes de multiplicar   </span>
<span class="punctuation token">(</span>a <span class="operator token">+</span> b<span class="punctuation token">)</span> <span class="operator token">*</span> c   <span class="comment token">// 9</span>

<span class="comment token">// o que é equivalente a</span>
a <span class="operator token">*</span> c <span class="operator token">+</span> b <span class="operator token">*</span> c <span class="comment token">// 9</span></code></pre>

<h4 id="new" name="new">Comprehensions</h4>

<p>Comprehensions são uma característica experimental de JavaScript, marcada para ser inclusa em uma versão futura do ECMAScript. Existem duas versões de Comprehensions:</p>

<p>{{experimental_inline}}<strong><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Array_comprehensions" title="The array comprehension syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one. Comprehensions exist in many programming languages."><code>[for (x of y) x]</code></a></strong><br>
        Comprehensions de array.</p>

<p>{{experimental_inline}}<strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions" title="The generator comprehension syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages."><code>(for (x of y) y) </code></a><br>
 <code>  </code></strong><code> gerador de </code>comprehensions</p>

<p>Comprehensions existem em muitas linguagens de programação e permitem que você rapidamente monte um novo array com base em um existente, por exemplo:</p>

<pre class="brush:js line-numbers  language-js notranslate"><code class="language-js"><span class="punctuation token">[</span><span class="keyword token">for</span> <span class="punctuation token">(</span>i <span class="keyword token">of</span> <span class="punctuation token">[</span> <span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span> <span class="punctuation token">]</span><span class="punctuation token">)</span> i<span class="operator token">*</span>i <span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="comment token">// [ 1, 4, 9 ]</span>

<span class="keyword token">var</span> abc <span class="operator token">=</span> <span class="punctuation token">[</span> <span class="string token">"A"</span><span class="punctuation token">,</span> <span class="string token">"B"</span><span class="punctuation token">,</span> <span class="string token">"C"</span> <span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="punctuation token">[</span><span class="keyword token">for</span> <span class="punctuation token">(</span>letras <span class="keyword token">of</span> abc<span class="punctuation token">)</span> letras<span class="punctuation token">.</span><span class="function token">toLowerCase</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="comment token">// [ "a", "b", "c" ]</span></code></pre>

<h3 id="new" name="new">Expressão lado esquerdo</h3>

<p>Atribuição à esquerda de valores.</p>

<h4 id="new" name="new"><code>new</code></h4>

<p>Você pode utilizar o <a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/new">operador new</a> para criar uma instância de um tipo de objeto definido pelo usuário ou de um dos tipos de objeto predefinidos: <code>Array</code>, <code>Boolean</code>, <code>Date</code>, <code>Function</code>, <code>Image</code>, <code>Number</code>, <code>Object</code>, <code>Option</code>, <code>RegExp </code>ou <code>String</code>. No servidor, você pode também utilizar <code>DbPool</code>, <code>Lock</code>, <code>File </code>ou <code>SendMail</code>. Utilize o operador <code>new</code> da seguinte forma:</p>

<pre class="brush: js notranslate">var nomeObjeto = new tipoObjeto([parametro1, parametro2, ..., parametroN]);
</pre>

<h4 id="super"><code>super</code></h4>

<p>A palavra <a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/super">reservada super</a> é utilizada para chamar a função pai de um objeto. É útil para nas classes para a chamada do construtor pai, por exemplo:</p>

<pre class="syntaxbox notranslate">super([argumentos]); //chama o construtor pai.
super.funcaoDoPai([argumentos]);</pre>

<h4 id="Operador_spread"><code>Operador spread</code></h4>

<p>O operador <code>spread</code> permite que uma expressão seja expandido em locais onde são esperados vários argumentos (para chamadas de função) ou vários elementos (para arrays).</p>

<p>Exemplo: Se você tem um array e deseja criar um novo array com os elementos do array já existente sendo parte do novo array, a sintaxe do array não será suficiente e você terá de usar uma combinação de push, splice, concat, etc. Com a sintaxe <code>spread</code>, isto torna-se muito mais sucinto:</p>

<pre class="brush: js line-numbers  language-js notranslate"><code class="language-js"><span class="keyword token">var</span> partes <span class="operator token">=</span> <span class="punctuation token">[</span><span class="string token">'ombro'</span><span class="punctuation token">,</span> <span class="string token">'joelhos'</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> musica <span class="operator token">=</span> <span class="punctuation token">[</span><span class="string token">'cabeca'</span><span class="punctuation token">,</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>partes<span class="punctuation token">,</span> <span class="string token">'e'</span><span class="punctuation token">,</span> <span class="string token">'pés'</span><span class="punctuation token">]</span><span class="punctuation token">;</span></code></pre>

<p id="typeof">Da mesma forma, o operador <code>spread</code> funciona com chamadas de função:</p>

<pre class="brush: js line-numbers  language-js notranslate"><code class="language-js"><span class="keyword token">function</span> <span class="function token">f</span><span class="punctuation token">(</span>x<span class="punctuation token">,</span> y<span class="punctuation token">,</span> z<span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="punctuation token">}</span>
<span class="keyword token">var</span> args <span class="operator token">=</span> <span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>args<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<div>{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}</div>
