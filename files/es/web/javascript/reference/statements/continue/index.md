---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/continue
original_slug: Web/JavaScript/Referencia/Sentencias/continue
---
<div>
 {{jsSidebar("Statements")}}</div>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox">continue [ <em>etiqueta</em> ];</pre>
<dl>
 <dt>
  <code>label</code></dt>
 <dd>
  Identificador asociado con la etiqueta de la sentencia.</dd>
</dl>
<h3 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h3>
<p>En contraste con la sentencia {{jsxref("Sentencias/break", "break")}}, <code>continue</code> no termina la ejecución del bucle por completo; en cambio,</p>
<ul>
 <li>En un bucle {{jsxref("Sentencias/while", "while")}}, salta de regreso a la condición.</li>
</ul>
<ul>
 <li>En un bucle {{jsxref("Sentencias/for", "for")}}, salta a la expresión actualizada.</li>
</ul>
<p>La sentencia <code>continue</code> puede incluir una etiqueta opcional que permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En este caso, la sentencia <code>continue</code> necesita estar anidada dentro de esta sentecia etiquetada.</p>
<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_continue_con_while" name="Ejemplo:_Usando_continue_con_while">Ejemplo: Usando <code>continue</code> con <code>while</code></h3>
<p>El siguiente ejemplo muestra un bucle {{jsxref("Sentencias/while", "while")}} que tiene una sentencia <code>continue</code> que se ejecuta cuando el valor de <code>i</code> es 3. Así, <code>n</code> toma los valores 1, 3, 7 y 12.</p>
<pre class="brush: js">i = 0;
n = 0;
while (i &lt; 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
</pre>
<h3 id="Ejemplo:_Usando_continue_con_una_etiqueta" name="Ejemplo:_Usando_continue_con_una_etiqueta">Ejemplo: Usando <code>continue</code> con una etiqueta</h3>
<p>En el siguiente ejemplo, una sentencia etiquetada <code>checkiandj</code> contiene una sentencia etiquetada <code>checkj</code>. Si se encuentra <code>continue</code>, el programa continua hasta encima de la sentencia <code>checkj</code>. Cada vez que se encuentra <code>continue</code>, <code>checkj</code> se reitera hasta que su condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia <code>checkiandj</code> se completa.</p>
<p>Si <code>continue</code> tuviese una etiqueta <code>checkiandj</code>, el programa continuaría hasta encima de la sentencia <code>checkiandj</code>.</p>
<pre>checkiandj:
while (i &lt; 4) {
   document.write(i + "&lt;br&gt;");
   i += 1;

   checkj:
   while (j &gt; 4) {
      document.write(j + "&lt;br&gt;");
      j -= 1;
      if ((j % 2) == 0)
         continue checkj;
      document.write(j + " is odd.&lt;br&gt;");
   }
   document.write("i = " + i + "&lt;br&gt;");
   document.write("j = " + j + "&lt;br&gt;");
}
</pre>
<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>
<ul>
 <li>{{jsxref("Sentencias/break", "break")}}</li>
 <li>{{jsxref("Sentencias/label", "label")}}</li>
</ul>
