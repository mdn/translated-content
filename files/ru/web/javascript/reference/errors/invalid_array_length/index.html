---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - JavaScript
  - Диапазон
  - Массив
  - Ошибка
  - Размер массива
translation_of: Web/JavaScript/Reference/Errors/Invalid_array_length
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Ошибка, связанная с размером массива может произойти в следующих случаях:</p>

<ul>
 <li>При создании {{jsxref("Array")}} или {{jsxref("ArrayBuffer")}}, размер оказался либо отрицательным, либо равным или превышающим 2<sup>32</sup>, или</li>
 <li>при установке свойства {{jsxref("Array.length")}} значение оказалось либо отрицательным, либо равным или превышающим 2<sup>32</sup>.</li>
</ul>

<p>Поскольку свойство <code>length</code> в  <code>Array</code> или <code>ArrayBuffer</code> представлено в виде беззнакового 32-битного целого числа (integer), значение этого свойства находится в диапазоне от 0 до 2<sup>32</sup>-1.</p>

<p>В конструкторе (<code>new Array()</code>) первым аргументом является длина массива, поэтому при создании можно задать нужное значение. Так же, можно задать размер массива, обратившись к свойству <code>length</code> напрямую.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js example-bad">new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // установка длинны -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // установка длинны 2^32
</pre>

<h3 id="sect1"> </h3>

<pre class="brush: js example-good">[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff является шестнадцатеричным представлением
// 2^32 - 1, которое также можно записать в виде (-1 &gt;&gt;&gt; 0)</pre>

<p> </p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.length")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
