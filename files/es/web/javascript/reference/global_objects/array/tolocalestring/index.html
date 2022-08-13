---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/toLocaleString
---
<div>{{JSRef}}</div>

<p>El método <code><strong>toLocaleString()</strong></code> devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su método <code>toLocaleString</code>  y dichos Strings son separados por un caracter específico para la localidad (como una coma para la separación de decimales “,”).</p>

<div>{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.toLocaleString([<var>locales[</var>, <var>options]]</var>);
</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>locales</code> {{optional_inline}}</dt>
 <dd>Una cadena de texto con una etiqueta de idioma BCP 47, o un array de dichos strings. Para la forma general e interpretación the los argumentos <code>locales</code>, ver la página {{jsxref("Intl")}}.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Un objeto con las configuraciones, para números ver {{jsxref("Number.prototype.toLocaleString()")}}, y para fechas ver {{jsxref("Date.prototype.toLocaleString()")}}.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Una cadena de texto representando los elementos del array.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_locales_y_options">Usando <code>locales</code> y <code>options</code></h3>

<p>Los elementos del array son convertidos a strings usando sus métodos <code>toLocaleString</code>.</p>

<ul>
 <li><code>Object</code>: {{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li><code>Number</code>: {{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li><code>Date</code>: {{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>

<p>Siempre mostrar la moneda para los strings y números en el array <code>precios</code>:</p>

<pre class="brush: js">var precios = ['$7', 500, 8123, 12];
precios.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

// "$7, $500, $8.123, $12"
</pre>

<p>Para más ejemplos, ver también {{jsxref("Intl")}}, {{jsxref("NumberFormat")}}, y {{jsxref("DateTimeFormat")}}.</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length &gt;&gt;&gt; 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ',';

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    }
  });
}
</pre>

<p>Si necesitas soportar motores de JavaScript obsoletos que no compatibilizan con <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>, es mejor no utilizar los métodos <code>Array.prototype</code>, ya que no se pueden hacer no-enumerables.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>La definicion original fue en ECMAScript 3.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Esta definición reemplaza la proporcionada en ECMA-262.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.toLocaleString")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.toString()")}}</li>
 <li>{{jsxref("Intl")}}</li>
 <li>{{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>
