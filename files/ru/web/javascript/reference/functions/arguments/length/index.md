---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
translation_of: Web/JavaScript/Reference/Functions/arguments/length
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>arguments.length</code></strong>  свойство, содержащее число аргументов переданных в функцию.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">arguments.length</pre>

<h2 id="Описание">Описание</h2>

<p>arguments.length свойство содержащее число аргументов переданных в функцию. Оно может быть больше или меньше опряденного параметра count (см. {{jsxref("Function.length")}}).</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Использование_arguments.length"><code>Использование arguments.length</code></h3>

<p>В этом примере мы определяем функцию, которая может сложить 2 или более чисел вместе.</p>

<pre class="brush: js">function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i &lt; arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
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
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition. Implemented in JavaScript 1.1</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Function.length")}}</li>
</ul>
