---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
tags:
  - Date
  - JavaScript
  - Method
  - Prototipo
  - Prototype
  - Referencia
  - data
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---
<div>{{JSRef}}</div>

<p>O método <strong><code>toISOString()</code></strong> retorna uma cadeia de caracteres (<em>string</em>) simplificada no formato ISO extendido (<a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>), que é sempre 24 ou 27 caracteres de tamanho (<code><var>YYYY</var>-<var>MM</var>-<var>DD</var>T<var>HH</var>:<var>mm</var>:<var>ss.sss</var>Z</code> ou <code><var>±</var><var>YYYYYY</var>-<var>MM</var>-<var>DD</var>T<var>HH</var>:<var>mm</var>:<var>ss.sss</var>Z</code>, respectivamente). O fuso horário é sempre o deslocamento zero UTC, como denotado pelo sufixo "<code>Z</code>".</p>

<div>{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>dateObj</var>.toISOString()</code></pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Uma <em>string</em> representando a data no formato <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> de acordo com o horário universal.</p>

<h2 id="Polyfill">Polyfill</h2>

<p>Este método foi padronizado na quinta edição da ECMA-262. Motores que não foram atualizados para suportar este método podem funcionar com uma gambiarra na ausência deste método da seguinte forma:</p>

<pre class="brush: js notranslate">if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number &lt; 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  })();
}
</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_toISOString">Usando <code>toISOString()</code></h3>

<pre class="brush: js notranslate">let today = new Date('05 October 2011 14:48 UTC')

console.log(today.toISOString())  // Retorna 2011-10-05T14:48:00.000Z
</pre>

<p>O exemplo acima usa uma conversão de uma <em>string</em> não-padrão que pode não ser convertida corretamente em navegadores que não sejam da Mozilla..</p>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Date.toISOString")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
