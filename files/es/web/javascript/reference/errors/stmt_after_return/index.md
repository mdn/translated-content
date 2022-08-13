---
title: 'Advertencia: codigo inaccesible despues de sentencia de retorno'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
translation_of: Web/JavaScript/Reference/Errors/Stmt_after_return
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">Advertencia: código inaccesible después de sentencia de retorno (Firefox)
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>Advertencia</p>

<h2 id="Qué_va_mal">Qué va mal?</h2>

<p>Código inalcanzable después de una sentencia de retorno puede ocurrir en estas situaciones:</p>

<ul>
 <li>Cuando se usa una expresión despues de una sentencia {{jsxref("Statements/return", "return")}}</li>
 <li>Cuando se usa una sentencia de retorno sin punto y coma pero inluye una expresion directamente despues.</li>
</ul>

<p>Cuando una expresion existe después de una sentencia de retorno válida, se da una advertencia para indicar que el código después de la sentencia de retorno es inalcanzable, lo que significa que nunca será ejecutado.</p>

<p>¿Porqué deberia tener un punto y coma despues de la sentencia de retorno? En el caso de sentencias sin punto y coma, estas pueden no ser claras, puede que el desarrollador intentara retornar el resultado de la sentencia en la siguiente línea, o detener la ejecución y retornar. La advertencia indica que hay una ambiguedad en la forma en la que la sentencia de retorno está escrita.</p>

<p>Advertencias no seran mostradas por retornos sin punto y coma si la sentencia lo sigue:</p>

<ul>
 <li>{{jsxref("Statements/throw", "throw")}}</li>
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/var", "var")}}</li>
 <li>{{jsxref("Statements/function", "function")}}</li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Casos_invalidos">Casos invalidos</h3>

<pre class="brush: js example-bad">function f() {
  var x = 3;
  x += 4;
  return x;   // return sale de la funcion inmediatamente
  x -= 3;     // esta linea nunca se ejecutara ; es inalcanzable
}

function f() {
  return     // es tratado como `return;`
    3 + 4;   //la funcion regresa, y esta linea nunca es alcanzada
}
</pre>

<h3 id="Casos_validos">Casos validos</h3>

<pre class="brush: js example-good">function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK: regreso despues de todas las otras declaraciones
}

function f() {
  return 3 + 4  // OK: sin punto y coma regresa la expresion en la misma linea
}
</pre>

<h2 id="Ve_tambien">Ve tambien</h2>

<ul>
 <li>{{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}</li>
</ul>
