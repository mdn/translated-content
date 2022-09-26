---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Массив
  - метод
translation_of: Web/JavaScript/Reference/Global_Objects/Array/join
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>join()</strong></code> объединяет все элементы массива (или <a href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects">массивоподобного объекта</a>) в строку.</p>

<p>{{EmbedInteractiveExample("pages/js/array-join.html")}}</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>arr</var>.join(<var>[separator]</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>separator</code> {{optional_inline}}</dt>
 <dd>Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя приводится к типу Строка. Если он не задан, элементы массива разделяются запятой '<strong>,</strong>'. Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Строка, содержащая все элементы массива. Если <em><code>arr.length</code></em> == <code>0</code>,  то будет возвращена пустая строка.</p>

<h2 id="Description">Описание</h2>

<p>Преобразует все элементы массива в строки и объединяет их в одну большую строку. Элемент массива с типом <code>undefined</code> или <code>null </code>преобразуется в пустую строку.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Joining_an_array_three_different_ways">Соединение массива четырьмя различными способами</h3>

<p>В следующем примере создаётся массив <code>a</code> с тремя элементами, затем они четыре раза объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, плюса, окружённого пробелами, и пустой строки.</p>

<pre class="brush: js">var a = ['Ветер', 'Дождь', 'Огонь'];
var myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
var myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
var myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
var myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4
</pre>

<h3 id="Соединение_элементов_массивоподобного_объекта">Соединение элементов массивоподобного объекта</h3>

<p>В следующем примере соединяется массивоподобный объект (в данном случае список <a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments">аргументов</a> функции) с использованием вызова {{jsxref("Function.prototype.call")}} <code>для Array.prototype.join</code>.</p>

<pre class="brush: js">function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("Array.prototype.toString()")}}</li>
 <li>{{jsxref("TypedArray.prototype.join()")}}</li>
</ul>
