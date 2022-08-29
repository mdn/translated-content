---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - ECMAScript7
  - Experimental
  - Expérimental(2)
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
original_slug: Web/JavaScript/Reference/Global_Objects/Array/contains
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Sumário">Sumário</h2>

<p><span class="seoSummary">O método includes<code>()</code> determina se um array contém um determinado elemento, retornando <code>true</code> ou <code>false</code> apropriadamente.</span></p>

<p><strong style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">Sintaxe</strong></p>

<pre class="syntaxbox"><code><var>array</var>.includes(<var>searchElement</var>[, <var>fromIndex</var>])</code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>O elemento a buscar</dd>
 <dt><code>fromIndex</code></dt>
 <dd>Opcional. A posição no array de onde a busca pelo <code>searchElement </code>se iniciará. Por padrão, 0.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="brush: js">[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n &lt; 0,
      //  a. Let k be len + n.
      //  b. If k &lt; 0, let k be 0.
      var k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
</pre>

<h2 id="Especificações">Especificações</h2>

<p>Proposta ES7: <a href="https://github.com/domenic/Array.prototype.contains/blob/master/spec.md">https://github.com/domenic/Array.prototype.contains/blob/master/spec.md</a></p>

<h2 id="Compatibilidade">Compatibilidade</h2>

<div>{{Compat("javascript.builtins.Array.includes")}}</div>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
