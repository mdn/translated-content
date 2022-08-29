---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript2015
  - JavaScript
  - Prototype
  - Referencia
  - String
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/repeat
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/repeat
---
<div>{{JSRef}}</div>

<p>El método <strong><code>repeat()</code></strong> construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.</p>

<h2 id="Sintáxis">Sintáxis</h2>

<pre class="syntaxbox"><code><var>str</var>.repeat(<var>count</var>)</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>count</code></dt>
 <dd>Un entero entre 0 y +∞: [0, +∞), indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un nuevo string que contiene el número especificado de copias del string original.</p>

<h3 id="Excepciones">Excepciones</h3>

<ul>
 <li>{{jsxref("Errors/Negative_repetition_count", "RangeError")}}: El número de repeticiones no debe ser negativo.</li>
 <li>{{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: El número de repeticiones debe ser menor que infinito y no desbordar el tamaño máximo para un string.</li>
</ul>

<dl>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError

({ toString: () =&gt; 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Este método ha sido añadido a la especificación ECMAScript 6 y tal vez aún no se encuentre disponible en todas las implementaciones de JavaScript. Sin embargo, usted puede establecer <code>String.prototype.repeat()</code> con el siguiente fragmento de código:</p>

<pre class="brush: js">if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count &lt; 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 &lt;&lt; 28 chars or longer, so:
    if (str.length * count &gt;= 1 &lt;&lt; 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
      if ((count &amp; 1) == 1) {
        rpt += str;
      }
      count &gt;&gt;&gt;= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  }
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.repeat', 'String.prototype.repeat')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_Navegadores">Compatibilidad en Navegadores</h2>

<div>{{Compat("javascript.builtins.String.repeat")}}</div>

<div id="compat-mobile"> </div>
