---
title: while
slug: Web/JavaScript/Reference/Statements/while
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/while
original_slug: Web/JavaScript/Referencia/Sentencias/while
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">while (<em>condicion</em>)
  <em>sentencia</em>
</pre>

<dl>
 <dt><code>condicion</code></dt>
 <dd>Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta <code>sentencia</code>. Cuando la condición se evalúa como false, la ejecución continúa con la <code>sentencia </code>posterior al bucle <code>while</code>.</dd>
</dl>

<dl>
 <dt><code>sentencia</code></dt>
 <dd>Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia {{jsxref("Sentencias/block", "block")}} (<code>{ ... }</code>) para agrupar esas sentencias.</dd>
</dl>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<p>El siguiente bucle <code>while</code> itera mientras <code>n</code> es menor que tres.</p>

<pre class="brush: js">n = 0;
x = 0;
while (n &lt; 3) {
  n ++;
  x += n;
}
</pre>

<p>Cada interación, el bucle incrementa <code>n</code> y la añade a <code>x</code>. Por lo tanto, <code>x</code> y <code>n</code> toman los siguientes valores:</p>

<ul>
 <li>Después del primer pase: <code>n</code> = 1 y <code>x</code> = 1</li>
 <li>Después del segundo pase: <code>n</code> = 2 y <code>x</code> = 3</li>
 <li>Después del tercer pase: <code>n</code> = 3 y <code>x</code> = 6</li>
</ul>

<p>Después de completar el tercer pase, la condición <code>n</code> &lt; 3 no será verdadera más tiempo, por lo que el bucle terminará.</p>

<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("Sentencias/do...while", "do...while")}}</li>
 <li>{{jsxref("Sentencias/for", "for")}}</li>
</ul>
