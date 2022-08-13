---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
  - Errors
  - JavaScript
  - Tipo de Error
  - TypeError
  - errores
translation_of: Web/JavaScript/Reference/Errors/More_arguments_needed
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensage">Mensage</h2>

<pre class="syntaxbox">TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create necesita al menos 1 argumento, pero solo only 0 fueron aprovadas.
TypeError: Object.setPrototypeOf necesita al menos 2 argumentos, pero solo 0 fueron aprovados
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="¿Qué_fué_mal">¿Qué fué mal?</h2>

<p>Hay un error con que una funcion es llamada. Más argumentos necesitan ser dados.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>El método {{jsxref("Object.create()")}} necesita al menos un argumento y el método {{jsxref("Object.setPrototypeOf()")}} necesita al menos 2 argumentos.</p>

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create necesita al menos 1 argumento, pero ninguno fue aprovad

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
</pre>

<p>Puedes arreglar esto configurando {{jsxref("null")}} como el prototipo, por ejemplo:</p>

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Funciones</a></li>
</ul>
