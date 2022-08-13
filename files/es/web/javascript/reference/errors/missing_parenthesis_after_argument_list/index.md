---
title: 'SyntaxError: missing ) after argument list'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">SyntaxError: missing ) after argument list
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="¿Cuál_es_el_problema">¿Cuál es el problema?</h2>

<p>Hay un error en cómo la función es llamada. Esto puede ser un typo, la falta de un operador, o un string no escapado, por ejemplo.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Debido a que no se encuentra el operador "<code>+</code>" para concatenar el string, JavaScript espera que el argumento de la función <code>log</code> sea solo <code>"PI: "</code>. En tal caso, debería terminar con el paréntesis de cierre.</p>

<pre class="brush: js example-bad">console.log('PI: ' Math.PI);
// SyntaxError: missing ) after argument list
</pre>

<p>Puedes corregir la llamada del <code>log</code>, agregando el operador "<code>+</code>":</p>

<pre class="brush: js example-good">console.log('PI: ' + Math.PI);
// "PI: 3.141592653589793"</pre>



<h3 id="Strings_sin_cierre">Strings sin cierre</h3>

<pre class="brush: js example-bad">console.log('"Java" + "Script" = \"' + 'Java' + 'Script\");
// SyntaxError: missing ) after argument list
</pre>

<p>Aquí JavaScript  piensa que tienes <code>);</code> dentro del string y lo ignora, y termina no sabiendo que quisiste utilizar <code>);</code> para cerrar la función <code>console.log</code>. Para solucionar esto, podemos poner un <code>'</code>  después del string "Script":</p>

<pre class="brush: js example-good">console.log('"Java" + "Script" = \"' + 'Java' + 'Script\"');
// '"Java" + "Script" = "JavaScript"'</pre>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="/es/docs/Web/JavaScript/Guide/Funciones">Funciones</a></li>
</ul>
