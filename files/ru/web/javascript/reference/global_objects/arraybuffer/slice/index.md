---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---
<div>{{JSRef}}</div>

<p>Метод <code><strong>slice()</strong></code> вернёт новый <code>ArrayBuffer</code>, содержимое которого, будет копией содержимого, содержащегося в исходом ArrayBuffer, начиная с begin (включительно), и до end(не включая).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">arraybuffer.slice(begin[, end])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>begin</code></dt>
 <dd>Указывает с какого индекса начинать slice, начинается с нуля.</dd>
</dl>

<dl>
 <dt><code>end</code></dt>
 <dd>Указывает до какого индекса делать slice. Если не указан - slice будет выполнен до конца <code>ArrayBuffer. Разница между begin и end должна быть положительной и быть не более длины ArrayBuffer, в противном случае будет выставлен 0.</code></dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Новый  объект <code>ArrayBuffer</code>.</p>

<h2 id="Description">Description</h2>

<p>Метод <code>slice</code> копирует, до индекса в параметре end (не включительно) .  В случае если <code>begin</code> или <code>end</code> негативен, то индекс считается с конца массива.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Копируем_ArrayBuffer">Копируем <code>ArrayBuffer</code></h3>

<pre class="brush: js">var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Superseded by EMCAScript 6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
