---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---
<div>{{JSRef}}</div>

<p>Статический метод <code><strong>Atomics</strong></code><strong><code>.sub()</code></strong> вычитает представленное значение из текущего по указанной позиции в массиве и возвращает предыдущее значение в этой позиции. Эта атомарная операция гарантирует, что никакой другой записи не произойдёт, пока изменённое значение не будет записано обратно.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">Atomics.sub(typedArray, index, value)
</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>Разделённый массив целых чисел. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} или {{jsxref("Uint32Array")}}.</dd>
 <dt><code>index</code></dt>
 <dd>Позиция в <code>typedArray</code> для добавления <code>value</code>.</dd>
 <dt><code>value</code></dt>
 <dd>Число для вычитания.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Предыдущее значение в указанной позиции (<code>typedArray[index]</code>).</p>

<h3 id="Исключения">Исключения</h3>

<ul>
 <li>Выбрасывает {{jsxref("TypeError")}},  если тип <code>typedArray</code> не является одним из допустимых целочисленных типов.</li>
 <li>Выбрасывает {{jsxref("TypeError")}}, если тип <code>typedArray</code> не общего типа.</li>
 <li>Выбрасывает {{jsxref("RangeError")}}, если <code>index</code> вне <code>typedArray</code>.</li>
</ul>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // возвращает 48, предыдущее значение
Atomics.load(ta, 0); // 36
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.sub', 'Atomics.sub')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Initial definition in ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.add()")}}</li>
</ul>
