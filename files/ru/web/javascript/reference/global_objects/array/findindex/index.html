---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Référence(2)
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>findIndex()</strong></code> возвращает <strong>индекс</strong> в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.</p>

<p>Также смотрите метод {{jsxref("Array.find", "find()")}}, который возвращает <strong>значение</strong> найденного в массиве элемента вместо его индекса.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>arr</var>.findIndex(<var>callback</var>[, <var>thisArg</var>])</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:
 <dl>
  <dt><code>element</code></dt>
  <dd>Текущий обрабатываемый элемент в массиве.</dd>
  <dt><code>index</code></dt>
  <dd>Индекс текущего обрабатываемого элемента в массиве.</dd>
  <dt><code>array</code></dt>
  <dd>Массив, по которому осуществляется проход.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Необязательный параметр. Значение, используемое в качестве <code>this</code> при выполнении функции <code>callback</code>.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Метод <code>findIndex</code> вызывает переданную функцию <code>callback</code> один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт <code>true</code>. Если такой элемент найден, метод <code>findIndex</code> немедленно вернёт индекс этого элемента. В противном случае, метод <code>findIndex</code> вернёт -1. Функция <code>callback</code> вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.</p>

<p>Функция <code>callback</code> вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.</p>

<p>Если в метод <code>findIndex</code> был передан параметр <code>thisArg</code>, при вызове <code>callback</code> он будет использоваться в качестве значения <code>this</code>. В противном случае в качестве значения <code>this</code> будет использоваться значение {{jsxref("Global_Objects/undefined", "undefined")}}.</p>

<p>Метод <code>findIndex</code> не изменяет массив, для которого он был вызван.</p>

<p>Диапазон элементов, обрабатываемых методом <code>findIndex</code>, устанавливается до первого вызова функции <code>callback</code>. Элементы, добавленные в массив после начала выполнения метода <code>findIndex</code>, не будут посещены функцией <code>callback</code>. Если существующие, непосещение элементы массива изменяются функцией <code>callback</code>, их значения, переданные в функцию, будут значениями на тот момент времени, когда метод <code>findIndex</code> посетит их; удалённые элементы посещены не будут.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Find_the_index_of_a_prime_number_in_an_array">Пример: поиск индекса простого числа в массиве</h3>

<p>Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, если в массиве нет простых чисел).</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Этот метод был добавлен в спецификации ECMAScript 6 и пока может быть недоступен во всех реализациях JavaScript. Однако, вы можете использовать следующий кусочек кода в качестве полифила:</p>

<pre class="brush: js">if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length &gt;&gt;&gt; 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i &lt; length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Array.prototype.find()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
