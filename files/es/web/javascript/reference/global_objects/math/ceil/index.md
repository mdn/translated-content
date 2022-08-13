---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Math/ceil
original_slug: Web/JavaScript/Referencia/Objetos_globales/Math/ceil
---
<div>{{JSRef}}</div>

<p>La función <strong><code>Math.ceil()</code></strong> devuelve el entero mayor o igual más próximo a un número dado.</p>

<div>{{EmbedInteractiveExample("pages/js/math-ceil.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code>Math.ceil(<var>x</var>)</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un número.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>El número entero mayor o igual más próximo que el número dado.</p>

<h2 id="Descripción">Descripción</h2>

<p>Como <code>ceil()</code> es un método estático de <code>Math</code>, siempre debe usarlo como <code>Math.ceil()</code>, en lugar de como un método de un objeto que ha creado <code>Math</code> (<code>Math</code> no es un constructor).</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Utilizando_Math.ceil()">Utilizando <code>Math.ceil()</code></h3>

<p>El siguiente ejemplo muestra el uso de <code>Math.ceil()</code>.</p>

<pre class="brush: js">Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
</pre>

<h3 id="Ajuste_decimal">Ajuste decimal</h3>

<pre class="brush: js">// Closure
(function() {
  /**
   * Ajuste decimal de un número.
   *
   * @param {String}  type  El tipo de ajuste.
   * @param {Number}  value El número.
   * @param {Integer} exp   El exponente (El logaritmo de ajuste en base 10).
   * @returns {Number} El valor ajustado.
   */
  function decimalAdjust(type, value, exp) {
    // Si exp es undefined o cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' &amp;&amp; exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Floor
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Ceil
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
</pre>

<h2 id="Espicificaciones">Espicificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.8.2.6', 'Math.ceil')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.ceil', 'Math.ceil')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.ceil', 'Math.ceil')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<p>{{Compat("javascript.builtins.Math.ceil")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.floor()")}}</li>
 <li>{{jsxref("Math.round()")}}</li>
 <li>{{jsxref("Math.sign()")}}</li>
 <li>{{jsxref("Math.trunc()")}}</li>
</ul>
