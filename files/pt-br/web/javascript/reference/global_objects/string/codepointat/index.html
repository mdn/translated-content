---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---
<div>{{JSRef}}</div>

<p>O método <code><strong>codePointAt()</strong></code> retorna um número inteiro não negativo que é o valor do ponto de código Unicode.</p>

<div>{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>str</var>.codePointAt(<var>pos</var>)</code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code><var>pos</var></code></dt>
 <dd>A posição de um elemento em uma string a partir do qual retorna o valor do ponto de código.</dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Um número que representa o valor do ponto de código do caractere na <code>pos</code> fornecida. Se não houver nenhum elemento na <code>pos</code>, {{jsxref ("undefined")}} é retornado.</p>

<h2 id="Descrição">Descrição</h2>

<p>Se não houver nenhum elemento na posição especificada, é retornado o valor de {{jsxref ("undefined")}}. Se nenhum par substituto UTF-16 começar na <code>pos</code>, a unidade de código na <code>pos</code> será retornada.</p>

<h2 id="Polyfill">Polyfill</h2>

<p>O seguinte código cria no objeto global String a função <code>codePointAt()</code> conforme especificado em ECMAScript 2015 para navegadores sem suporte nativo:</p>

<pre class="brush: js notranslate">/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) &amp;&amp; $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index &lt; 0 || index &gt;= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if ( // check if it’s the start of a surrogate pair
        first &gt;= 0xD800 &amp;&amp; first &lt;= 0xDBFF &amp;&amp; // high surrogate
        size &gt; index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second &gt;= 0xDC00 &amp;&amp; second &lt;= 0xDFFF) { // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_codePointAt">Usando <code>codePointAt()</code></h3>

<pre class="brush: js notranslate">'ABC'.codePointAt(1)           // retorna 66
'\uD800\uDC00'.codePointAt(0)  // retorna 65536

'XYZ'.codePointAt(42)          // retorna undefined
</pre>

<h3 id="Criando_um_loop_com_codePointAt">Criando um loop com <code>codePointAt()</code></h3>

<pre class="brush: js notranslate"><code class="md-code md-lang-javascript"><span class="md-code-keyword">for</span> (<span class="md-code-keyword">let</span> codePoint of <span class="md-code-string">'\ud83d\udc0e\ud83d\udc71\u2764'</span>) {
   <span class="md-code-built_in">console</span>.log(codePoint<mark class="md-mark md-code-mark">.codePointAt(<span class="md-code-number">0</span>).toString(<span class="md-code-number">16</span>)</mark>)
}
// <span class="md-code-comment">retorna '1f40e', '1f471', '2764</span></code>'<code class="md-code md-lang-javascript"><span class="md-code-comment"> </span></code>
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.codePointAt")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
</ul>
