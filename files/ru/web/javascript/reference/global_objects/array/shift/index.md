---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/shift
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>shift()</strong></code> удаляет <strong>первый</strong> элемент из массива и возвращает его значение. Этот метод изменяет длину массива.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>arr</var>.shift()</code></pre>

<h2 id="Description">Описание</h2>

<p>Метод <code>shift</code> удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство {{jsxref("Array.length", "length")}} массива равно 0, вернётся значение {{jsxref("Global_Objects/undefined", "undefined")}}.</p>

<p>Метод <code>shift</code> не является привязанным к типу; этот метод может быть {{jsxref("Function.call", "вызван", "", 1)}} или {{jsxref("Function.apply", "применён", "", 1)}} к объектам, напоминающим массив. Объекты, не содержащие свойство <code>length</code>, отражающее последний элемент в серии последовательных числовых, начинающихся с нуля, свойств, могут повести себя неправильным образом.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Removing_an_element_from_an_array">Пример: удаление элемента из массива</h3>

<p>Следующий код показывает массив <code>myFish</code> до и после удаления его первого элемента. Также он показывает удалённый элемент:</p>

<pre class="brush: js">var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted);
//Удалён этот элемент: ангел
</pre>

<p>Вывод этого примера будет следующим:</p>

<pre class="brush: js">myFish до: ангел,клоун,мандарин,хирург
myFish после: клоун,мандарин,хирург
Удалён этот элемент: ангел
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Array.prototype.push()")}}</li>
 <li>{{jsxref("Array.prototype.pop()")}}</li>
 <li>{{jsxref("Array.prototype.unshift()")}}</li>
</ul>
