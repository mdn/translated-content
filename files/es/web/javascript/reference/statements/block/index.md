---
title: block
slug: Web/JavaScript/Reference/Statements/block
tags:
  - JavaScript
  - Referencia
  - Referência(2)
  - Statement
translation_of: Web/JavaScript/Reference/Statements/block
original_slug: Web/JavaScript/Referencia/Sentencias/block
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Una sentencia block se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">{<em> sentencia_1</em><em>; sentencia_2</em>; ...<em> sentencia_n</em>; }
</pre>

<dl>
 <dt><code>sentencia_1</code>, <code>sentencia_2</code>, <code>sentencia_n</code></dt>
 <dd>Sentencias agrupadas dentro de una sentencia block.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>Esta sentencia se utiliza comúnmente para controlar sentencias de flujo (es decir <code>if</code>, <code>for</code>, <code>while</code>). Por ejemplo:</p>

<pre class="brush: js">while (x &lt; 10) {
   x++;
}
</pre>

<p><font><font>Las variables declaradas con </font></font><code>var</code> <strong><font><font>no</font></font></strong><font><font> tienen alcance de bloque(</font></font>block scope<font><font>)</font></font>. Las variables introducidas dentro de un grupo block tienen el alcance de la función que lo contiene o del script, y los efectos de su asignación persisten más allá del grupo block en sí mismo. En otras palabras, las sentencias block no incluyen ningún alcance. Aunque los grupos block "en solitario" (standalone) son una sintaxis válida, usted no querrá utilizar grupos block en solitario en JavaScript, ya que ellos no hacen lo que parecen, si piensa que funcionan de manera similar a los bloques en C o Java. Por ejemplo:</p>

<pre class="brush: js">var x = 1;
{
   var x = 2;
}
alert(x); // resultado 2
</pre>

<p>Este obtiene el resultado 2 ya que la sentencia <code>var x</code> dentro del grupo block tiene el mismo alcance que la sentencia <code>var x</code> antes del mismo. En C o Java, el código equivalente tendría como resultado 1.</p>

<h4 id="Con_let_y_const"><font><font>Con </font></font><code><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let">let</a> </code><font><font>y </font></font><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const">const</a></h4>

<p>Por el contrario, las variables declaradas con <code>let</code> y <code>const</code> tienen alcance de bloque.</p>

<pre><code>let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1</code>
</pre>

<p><font><font>El alcance </font></font><code>x = 2</code><font><font> es limitado solamente al bloque en el que está definido.</font></font></p>

<p><font><font>Lo mismo para  </font></font><code>const</code><font><font>:</font></font></p>

<pre><code>const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1 </code>y no lanza SyntaxError...
</pre>

<p>Tenga en cuenta que la variable  <code>const c = 2 con alcance de bloque, </code><strong><em>no</em> lanza</strong> un  <code>SyntaxError: </code>El identificador 'c' ya ha sido declarado. Esto es porque <strong>se puede declarar de forma única</strong> dentro del bloque, sin interferir con la otra que tiene un  alcance global.</p>

<h4 id="Con_function"><font><font>Con </font></font><code>function</code></h4>

<p>La <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">declaración de una función</a> también tiene un alcance limitado dentro del bloque donde se produce la declaración:</p>

<pre class="brush: js">nacion('frances');  // TypeError: nacion no es una función
{
  function nacion(nacionalidad) {
   console.log('Yo soy ' + nacionalidad);
  }
nacion('español'); // correcto. logs Yo soy español
}</pre>

<p> </p>

<h2 id="Vea_También">Vea También</h2>

<ul>
 <li>{{jsxref("Sentencias/while", "while")}}</li>
</ul>
