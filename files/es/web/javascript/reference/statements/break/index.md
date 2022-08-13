---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/break
original_slug: Web/JavaScript/Referencia/Sentencias/break
---
<div>
 {{jsSidebar("Statements")}}</div>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la siguiente sentencia a la sentecia de terminación de éstos elementos.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox">break [<em>etiqueta</em>];</pre>
<dl>
 <dt>
  <code>etiqueta</code></dt>
 <dd>
  Identificador asociado con la etiqueta de la sentencia.</dd>
</dl>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>La sentencia <code>break</code> incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada. La sentencia <code>break</code> necesita estar anidada dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier tipo de sentencia; no tiene que ser una sentencia de bucle.</p>
<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>
<h4 id="Ejemplo:_Usando_break" name="Ejemplo:_Usando_break">Ejemplo: Usando <code>break</code></h4>
<p>La siguiente función tiene una sentencia que termina el bucle {{jsxref("Sentencias/while", "while")}} cuando <code>i</code> es 3, y entonces devuelve el valor 3 * <code>x</code>.</p>
<pre class="brush: js">function comprobarBreak(x) {
   var i = 0;
   while (i &lt; 6) {
      if (i == 3)
         break;
      i++;
   }
   return i * x;
}
</pre>
<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>
<ul>
 <li>{{jsxref("Sentencias/continue", "continue")}}</li>
 <li>{{jsxref("Sentencias/label", "label")}}</li>
 <li>{{jsxref("Sentencias/switch", "switch")}}</li>
</ul>
