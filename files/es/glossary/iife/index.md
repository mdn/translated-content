---
title: 'IIFE: Expresión de función ejecutada inmediatamente'
slug: Glossary/IIFE
tags:
  - Funciones
translation_of: Glossary/IIFE
---
<p>Las expresiones de función ejecutadas inmediatamente (<strong>IIFE</strong> por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.</p>

<pre class="brush: js">(function () {
    statements
})();</pre>

<p>Es un patrón de diseño también conocido cómo <strong>función autoejecutable </strong>({{glossary("Self-Executing Anonymous Function")}}  ) y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el  {{jsxref("Operadores/Grouping", "Operador de Agrupación")}} <code>()</code>. Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global. </p>

<p>La segunda parte crea la expresión de función cuya ejecución es inmediata <code>()</code>, siendo interpretado directamente en el engine de JavaScript.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no puede ser accesada desde afuera.</p>

<pre class="brush: js"><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
    var aName = "Barry";
<span class="p">})();
// Variable name is not accessible from the outside scope
aName </span>// throws "Uncaught ReferenceError: aName is not defined"
</pre>

<p>Asignar el IIFE a una variable almacena el valor de retorno, no la definición de la función.</p>

<pre class="brush: js"><span class="p">var result = (</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
    var name = "Barry";
    return name;
<span class="p">})();
// Immediately creates the output:
result; // "Barry"</span></pre>

<p> </p>

<h2 id="Aprende_mas">Aprende mas</h2>

<h3 id="Aprende_acerca_de">Aprende acerca de</h3>

<ul>
 <li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Ben Alman's blog post defining IIFEs</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions">Quick example</a> "Ejemplo Rápido"(al final de la sección "Functions" , justo despues de "Custom objects")</li>
</ul>

<h3 id="General_knowledge">General knowledge</h3>

<ul>
 <li>{{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}} on Wikipedia</li>
</ul>
