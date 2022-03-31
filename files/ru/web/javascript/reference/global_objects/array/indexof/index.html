---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Référence(2)
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>indexOf()</strong></code> возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>arr</var>.indexOf(<var>searchElement</var>[, <var>fromIndex</var> = 0])</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>Искомый элемент в массиве.</dd>
 <dt><code>fromIndex</code></dt>
 <dd>Индекс, с которого начинать поиск. Если индекс больше или равен длине массива, возвращается -1, что означает, что массив даже не просматривается. Если индекс является отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от начала к концу. Если рассчитанный индекс оказывается меньше 0, поиск ведётся по всему массиву. Значение по умолчанию равно 0, что означает, что просматривается весь массив.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Метод <code>indexOf()</code> сравнивает искомый элемент <code>searchElement</code> с элементами в массиве, используя <a href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">строгое сравнение</a> (тот же метод используется оператором <code>===</code>, тройное равно).</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_indexOf">Пример: использование <code>indexOf()</code></h3>

<p>В следующем примере <code>indexOf()</code> используется для поиска значений в массиве.</p>

<pre class="brush: js">var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
</pre>

<h3 id="Example:_Finding_all_the_occurrences_of_an_element">Пример: нахождение всех вхождений элемента</h3>

<p>В следующем примере <code>indexOf()</code> используется для поиска всех индексов элемента в указанном массиве, которые с помощью {{jsxref("Array.prototype.push()", "push()")}} добавляются в другой массив.</p>

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices);
// [0, 2, 4]
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Метод <code>indexOf()</code> был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать <code>indexOf()</code> в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 5-го издания; он предполагает, что {{jsxref("Global_Objects/TypeError", "TypeError")}} и {{jsxref("Math.abs()")}} имеют свои первоначальные значения.</p>

<pre class="brush: js">// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.14
// Ссылка (en): http://es5.github.io/#x15.4.4.14
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;

    // 1. Положим O равным результату вызова ToObject с передачей ему
    //    значения this в качестве аргумента.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get
    //    объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. Если len равен 0, вернём -1.
    if (len === 0) {
      return -1;
    }

    // 5. Если был передан аргумент fromIndex, положим n равным
    //    ToInteger(fromIndex); иначе положим n равным 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. Если n &gt;= len, вернём -1.
    if (n &gt;= len) {
      return -1;
    }

    // 7. Если n &gt;= 0, положим k равным n.
    // 8. Иначе, n&lt;0, положим k равным len - abs(n).
    //    Если k меньше нуля 0, положим k равным 0.
    k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

    // 9. Пока k &lt; len, будем повторять
    while (k &lt; len) {
      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода
      //    HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, выполним
      //    i.  Положим elementK равным результату вызова внутреннего метода Get
      //        объекта O с аргументом ToString(k).
      //   ii.  Положим same равным результату применения
      //        Алгоритма строгого сравнения на равенство между
      //        searchElement и elementK.
      //  iii.  Если same равен true, вернём k.
      if (k in O &amp;&amp; O[k] === searchElement) {
        return k;
      }
      k++;
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
 <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
</ul>
