---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/var
original_slug: Web/JavaScript/Referencia/Sentencias/var
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Summary" name="Summary">Resumen</h2>

<p>La sentencia <strong><code>var</code></strong> declara una variable, opcionalmente inicializándola con un valor.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><code><strong>var</strong> <em>nombreDeVariable1 [= valor1] [, nombreDeVariable2 [= valor2] ... [, nombreDeVariableN [=valorN]]]; </em></code></pre>

<dl>
 <dt><code>nombreDeVariableN</code></dt>
 <dd>Representa el nombre que el programador da a la variable. Puede ser cualquier identificador legal.</dd>
</dl>

<dl>
 <dt><code>valorN</code></dt>
 <dd>Valor inicial de la variable. Puede ser cualquier expresión legal. El valor predeterminado es <em>undefined</em> (en español, <em>indefinida</em>).</dd>
</dl>

<h2 id="Description" name="Description">Descripción</h2>

<p>Las  declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada <strong><code>var</code></strong> es su <em>contexto de ejecución</em> en curso<em>,</em> que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.</p>

<p>Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:</p>

<p>1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">x</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  y <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">;</span>   <span class="comment token">// Lanza un error de tipo "ReferenceError" en modo estricto ('use strict')</span>
  <span class="keyword token">var</span> z <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="function token">x</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>y<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Imprime "1" </span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>z<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Lanza un error de tipo "ReferenceError": z no está definida afuera de x</span></code></pre>

<p>2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>a<span class="punctuation token">)</span><span class="punctuation token">;</span>                <span class="comment token">// Lanza un error de tipo "ReferenceError".</span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">'trabajando...'</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Nunca se ejecuta.</span></code></pre>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> a<span class="punctuation token">;</span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>a<span class="punctuation token">)</span><span class="punctuation token">;</span>                <span class="comment token">// Imprime "undefined" o "" dependiendo del navegador.</span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="string token">'trabajando...'</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Imprime "</span><span class="string token">trabajando</span><span class="comment token">...".</span></code></pre>

<p>3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> a <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">;</span>
b <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>

<span class="keyword token">delete</span> <span class="keyword token">this</span><span class="punctuation token">.</span>a<span class="punctuation token">;</span> <span class="comment token">// Lanza un error de tipo "ReferenceError" en modo estricto ('use strict'), de lo contrario falla silenciosamente.</span>
<span class="keyword token">delete</span> <span class="keyword token">this</span><span class="punctuation token">.</span>b<span class="punctuation token">;</span>

console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Lanza un error de tipo "ReferenceError". </span>
<span class="comment token">// La propiedad 'b' se eliminó y ya no existe.</span></code></pre>

<p>Debido a esas tres diferencias, fallar al declarar variables muy probablemente llevará a resultados inesperados. Por tanto <strong>se recomienda siempre declarar las variables, sin importar si están en una función o un ámbito global</strong>. Y en el modo estricto (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">strict mode</a>) de ECMAScript 5, asignar valor a una variable sin declarar lanzará un error.</p>

<h3 id="Elevación_de_variables">Elevación de variables</h3>

<p>Como la declaración de variables (y todas las declaraciones en general) se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es equivalente a declararla al inicio del mismo. Esto también significa que una variable puede parecer usarse antes de ser declarada. Este comportamiento es llamado <em>hoisting </em>(del inglés "elevación"), ya que la declaración de una variable parecer haber sido movida a la cima de la función o código global.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">bla <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> bla<span class="punctuation token">;</span>
<span class="comment token">// ...</span>

<span class="comment token">// Es entendido implicitamente como:</span>

<span class="keyword token">var</span> bla<span class="punctuation token">;</span>
bla <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span></code></pre>

<p>Por esa razón, se recomienda siempre declarar variables al inicio de su ámbito (la cima del código global y la cima del código de función) para que sea claro cuáles variables pertenecen al ámbito de función (local) y cuáles son resueltas en la cadena de ámbito.</p>

<p>Es importante señalar que <strong>la elevación afectará la declaración</strong> de variables, pero <strong>no su inicialización</strong>. El valor será asignado precisamente cuando la sentencia de asignación sea alcanzada:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">haz_algo</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>bar<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// undefined (valor indefinido)</span>
  <span class="keyword token">var</span> bar <span class="operator token">=</span> <span class="number token">111</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>bar<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 111</span>
<span class="punctuation token">}</span>

<span class="comment token">// Se entiende implícitamente como: </span>
<span class="keyword token">function</span> <span class="function token">haz_algo</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> bar<span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>bar<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// undefined (valor indefinido)</span>
  bar <span class="operator token">=</span> <span class="number token">111</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>bar<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 111</span>
<span class="punctuation token">}</span></code></pre>

<p> </p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Declarando_e_inicializando_dos_variables">Declarando e inicializando dos variables</h3>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> a <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">,</span> b <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span></code></pre>

<h3 id="Asignando_dos_variables_con_un_solo_valor_de_cadena">Asignando dos variables con un solo valor de cadena</h3>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> a <span class="operator token">=</span> <span class="string token">'A'</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> b <span class="operator token">=</span> a<span class="punctuation token">;</span>

<span class="comment token">// Equivalente a:</span>

<span class="keyword token">var</span> a<span class="punctuation token">,</span> b <span class="operator token">=</span> a <span class="operator token">=</span> <span class="string token">'A'</span><span class="punctuation token">;</span></code></pre>

<p>Sé consciente del orden:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> x <span class="operator token">=</span> y<span class="punctuation token">,</span> y <span class="operator token">=</span> <span class="string token">'A'</span><span class="punctuation token">;</span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>x <span class="operator token">+</span> y<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Imprimirá "undefinedA"</span></code></pre>

<p>Aquí, '<code>x</code>' &amp; '<code>y</code>' son declaradas antes de ejecutarse cualquier código, y la asignación ocurre después. Al momento de evaluar "<code>x = y</code>", '<code>y</code>' existe así que ningún error "<code>ReferenceError</code>" es lanzado y su valor es '<code>undefined</code>', de modo que '<code>x</code>' también tiene asignada el valor '<code>undefined</code>'. Después, a 'y' se le asigna el valor 'A'. Consecuentemente, luego de la primera línea, '<code>x</code>' es exactamente igual a <code>'undefined</code>' &amp; '<code>y</code>' es igual a <code>'A'</code>, de ahí el resultado.</p>

<h3 id="Initialización_de_muchas_variables">Initialización de muchas variables</h3>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> x <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span>

<span class="keyword token">function</span> <span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> x <span class="operator token">=</span> y <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">;</span> <span class="comment token">// 'x' es declarada localmente, ¡'y' no lo es!</span>
<span class="punctuation token">}</span>
<span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>x<span class="punctuation token">,</span> y<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Lanza un error de tipo "ReferenceError" en modo estricto ('y' no está definida). De lo contrario se imprimiría "0, 1".</span>
<span class="comment token">// En modo no-estricto:</span>
<span class="comment token">// 'x' es la variable global como se esperaría</span>
<span class="comment token">// 'y' sin embargo, se sale de la función</span></code></pre>

<h3 id="Globales_implícitas_y_ámbito_externo_a_una_función">Globales implícitas y ámbito externo a una función</h3>

<p>Las variables que parecen ser globales implícitas pueden ser referencias a variables en un ámbito externo a  la función:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> x <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span>  <span class="comment token">// 'x' es declarada globalmente, luego se le asigna el valor 0</span>.

console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="keyword token">typeof</span> z<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Imprime "undefined", pues 'z' aún no existe</span>.

<span class="keyword token">function</span> <span class="function token">a</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="comment token">// Cuando 'a()' es invocada,</span>
  <span class="keyword token">var</span> y <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>   <span class="comment token">// 'y' es declarada localmente en la function 'a()', después se le asigna el valor 2</span>.

  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>x<span class="punctuation token">,</span> y<span class="punctuation token">)</span><span class="punctuation token">;</span>   <span class="comment token">// Imprime "0, 2</span>".

  <span class="keyword token">function</span> <span class="function token">b</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>       <span class="comment token">// Cuando 'b()' es invocada,</span>
    x <span class="operator token">=</span> <span class="number token">3</span><span class="punctuation token">;</span>  <span class="comment token">// Asigna el valor 3 a la global 'x' ya existente, no crea una nueva variable global.</span>
    y <span class="operator token">=</span> <span class="number token">4</span><span class="punctuation token">;</span>  <span class="comment token">// Asigna 4 a la externa existente 'y', no crea una nueva variable global.</span>
    z <span class="operator token">=</span> <span class="number token">5</span><span class="punctuation token">;</span>  <span class="comment token">// Crea una nueva variable global 'z' y le asigna un valor de 5. </span>
  <span class="punctuation token">}</span>         <span class="comment token">// (Lanza un error de tipo "ReferenceError" en modo estricto.)</span>

  <span class="function token">b</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>     <span class="comment token">// Invocar 'b()' crea 'z' como variable global.</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>x<span class="punctuation token">,</span> y<span class="punctuation token">,</span> z<span class="punctuation token">)</span><span class="punctuation token">;</span>  <span class="comment token">// Imprime "3, 4, 5</span>".
<span class="punctuation token">}</span>

<span class="function token">a</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>                   <span class="comment token">// Invocar 'a()' también llama a 'b</span>()'.
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>x<span class="punctuation token">,</span> z<span class="punctuation token">)</span><span class="punctuation token">;</span>     <span class="comment token">// Imprime "3, 5</span>", porque 'z' ya es una global.
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="keyword token">typeof</span> y<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Imprime 'undefined' porque 'y' es local en la función 'a()'</span></code></pre>
