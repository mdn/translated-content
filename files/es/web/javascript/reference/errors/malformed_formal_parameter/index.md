---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
  - JavaScript
  - SyntaxError
  - errores
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---
<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">SyntaxError: Expected {x} (Edge)
SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="¿Qué_salió_mal"><span class="tlid-translation translation" lang="es"><span title="">¿Qué salió mal?</span></span></h2>

<p><span class="tlid-translation translation" lang="es"><span title="">Hay un constructor <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function()</code> </a>con al menos dos argumentos pasados en el código.</span> <span title="">El último argumento es el código fuente de la nueva función que está creando.</span> <span title="">Todo lo demás forma la lista de argumentos de su nueva función.</span><br>
 <br>
 <span title="">La lista de argumentos no es válida de alguna manera.</span> <span title="">Quizás eligió accidentalmente una palabra clave como <code>if</code> o <code>var</code> como nombre de argumento, o tal vez haya algún signo de puntuación en su lista de argumentos.</span> <span title="">O tal vez accidentalmente pasó un valor no válido, como un número u objeto.</span></span></p>

<h2 id="OK_eso_solucionó_mi_problema._Pero_¿Por_qué_no_dijiste_eso_en_primer_lugar"><span class="tlid-translation translation" lang="es"><span title="">OK, eso solucionó mi problema.</span> <span title="">Pero, ¿Por qué no dijiste eso en primer lugar?</span></span></h2>

<p><span class="tlid-translation translation" lang="es"><span title="">Es cierto que la redacción del mensaje de error es un poco extraña.</span> <span title="">El "parámetro formal" es una forma elegante de decir "argumento de función".</span> <span title="">Y usamos la palabra "malformada" porque todos los ingenieros de Firefox son grandes admiradores de las novelas de terror góticas del siglo XIX.</span></span></p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Casos_no_validos">Casos no validos</h3>

<pre class="brush: js example-bad">var f = Function('x y', 'return x + y;');
// SyntaxError (<span class="tlid-translation translation" lang="es"><span title="">Falta una coma</span></span>)

var f = Function('x,', 'return x;');
// SyntaxError (Coma extraña)

var f = Function(37, "alert('OK')");
// SyntaxError (Números no pueden ser nombres de argumentos)
</pre>

<h3 id="Casos_validos">Casos validos</h3>

<pre class="brush: js example-good">var f = Function('x, y', 'return x + y;');  // Correctamente puntuado

var f = Function('x', 'return x;');

// Si puede, evite usar Function - Esto es mucho más rápido
var f = function(x) { return x; };
</pre>

<h2 id="Ver_tambien">Ver tambien</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Sobre functions</a></li>
 <li><a href="https://www.gutenberg.org/ebooks/84"><em>Frankenstein</em> por Mary Wollstonecraft Shelley, texto completo en línea</a> <span class="tlid-translation translation" lang="es"><span title="">("Maldito (aunque me maldiga a mí mismo) ¡sé las manos que te formaron! Me has hecho miserable más allá de toda expresión. No me has dejado ningún poder para considerar si soy justo para ti o no. ¡Fuera! Aléjame de la vista de tu</span> <span title="">forma detestada ")</span></span></li>
</ul>
