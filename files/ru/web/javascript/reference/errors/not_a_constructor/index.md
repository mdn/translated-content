---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Была попытка использовать объект или переменную как конструктор, однако этот объект или переменная - не конструктор. Смотрите {{Glossary("constructor")}}  или <a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a>, чтобы получить больше информации о том, что такое конструктор.</p>

<p>Существует множество глобальных объектов, таких как {{jsxref("String")}} или {{jsxref("Array")}}, которые можно построить с использованием <code>new</code>. Однако, некоторые глобальные объекты - нельзя, т.к. их свойства и методы статичны. Следующие стандартные встроенные объекты JavaScript - не конструкторы: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.</p>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Функции-генераторы</a> также не могут быть использованы как конструкторы.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неправильное_использование">Неправильное использование</h3>

<pre class="brush: js example-bad">var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

<h3 id="Конструктор_car_(автомобиль)">Конструктор "car" (автомобиль)</h3>

<p>Представьте, что вы хотите создать тип объекта для автомобилей. Вы хотите, чтобы этот тип объектов назывался <code>car</code>, и вы хотите, чтобы были свойства для производителя, модели и года выпуска. Чтобы сделать это, вы должны написать следующую функцию:</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>Теперь вы можете создать объект, который называется <code>mycar</code> (мой автомобиль) следующим образом:</p>

<pre class="brush: js">var mycar = new Car('Лада', 'Самара', 1993);</pre>

<h3 id="В_Промисах">В Промисах</h3>

<p>В случае, когда возвращается незамедлительно разрешённый или незамедлительно отклонённый промис, вам не нужно создавать новый промис <em>new Promise(...)</em> и работать с ним.</p>

<p>Это неправильно (<a href="/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor">конструктор Promise</a> вызывается неправильно) и будет вызывать исключение <code>TypeError: this is not a constructor</code>:</p>

<pre class="brush: js example-bad">return new Promise.resolve(true);
</pre>

<p>Вместо этого используйте <a href="https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods">статические методы</a> - <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">Promise.resolve()</a> или <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">Promise.reject()</a> :</p>

<pre class="brush: js">// Это допустимо, но слишком длинно, в этом нет необходимости:
return new Promise((resolve, reject) =&gt; { resolve(true); })

// Вместо этого, возвращайте статический метод:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{Glossary("constructor")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a></li>
</ul>
