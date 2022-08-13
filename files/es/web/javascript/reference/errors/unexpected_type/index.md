---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="¿Qué_salió_mal">¿Qué salió mal?</h2>

<p>Tipo inesperado. Esto ocurre amenudo con valores {{jsxref("undefined")}} o {{jsxref("null")}} .</p>

<p>Además, ciertos métodos, como {{jsxref ("Object.create ()")}} o {{jsxref("Symbol.keyFor()")}}, requieren de un tipo específico, que debe ser proporcionado, ejemplos</p>

<h3 id="Casos_inválidos">Casos inválidos</h3>

<pre class="brush: js example-bad">// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// Certain methods might require a specific type
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

<h3 id="Cómo_solucionar_el_problema">Cómo solucionar el problema</h3>

<p>Para fijar un puntero nulo a indefinidos o valores nulos, puede utilizar el operador typeof, por ejemplo</p>

<pre class="brush: js">if (typeof foo !== 'undefined') {
  // Ahora sabemos que foo está definido, ahora podemos continuar.
}</pre>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
