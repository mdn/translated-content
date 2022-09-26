---
title: >-
  TypeError: Reduce of empty array with no initial value(Тип ошибки: уменьшение
  пустого массива без начального значения)
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
translation_of: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: уменьшение пустого массива без начального значения
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>В JavaScript существует несколько уменьшающих функций :</p>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} и</li>
 <li>{{jsxref("TypedArray.prototype.reduce()")}},  {{jsxref("TypedArray.prototype.reduceRight()")}}).</li>
</ul>

<p>Эти функции дополнительно принимают значение initialValue (которое будет использоваться в качестве первого аргумента для первого вызова колбэка). Однако если начальное значение не указано, будет использоваться первый элемент {{jsxref("Array")}} или {{jsxref("TypedArray")}} в качестве начального значения. Эта ошибка возникает, когда предоставляется пустой массив, так как в этом случае не может быть возвращено начальное значение.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неправильные_примеры">Неправильные примеры</h3>

<p>Эта проблема часто возникает в сочетании с фильтром ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}) который удалит все элементы списка. Таким образом, не оставляя ни одного для использования в качестве начального значения.</p>

<pre class="brush: js example-bad">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // удаление всех элементов
    .reduce((x, y) =&gt; x + y)    // no more elements to use for the initial value.</pre>

<p>Аналогично, та же проблема может возникнуть, если в селекторе есть опечатка или непредвиденное количество элементов в списке:</p>

<pre class="brush: js example-bad">var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
</pre>

<h3 id="Правильные_примеры">Правильные примеры</h3>

<p> </p>

<p>Эти проблемы могут быть решены двумя различными способами.</p>

<p>Один из способов - фактически предоставить initialValue в качестве нейтрального элемента оператора, например 0 для сложения, 1 для умножения или пустую строку для объединения</p>

<p> </p>

<pre class="brush: js example-good">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &lt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y, 0) // the initial value is the neutral element of the addition
</pre>

<p>Другим способом было бы два для обработки пустого случая, или перед вызовом reduce, или в обратном вызове после добавления неожиданного фиктивного начального значения.</p>

<pre class="brush: js example-good">var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length &gt;= 1)
  name_list1 = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(names, (acc, name) =&gt; {
  if (acc == "") // initial value
    return name;
  return acc + ", " + name;
}, "");
// name_list2 == "" when names is empty.
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
 <li>{{jsxref("TypedArray.prototype.reduce()")}}</li>
 <li>{{jsxref("TypedArray.prototype.reduceRight()")}}</li>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
 <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
</ul>
