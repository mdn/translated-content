---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript6
  - JavaScript
  - Итератор
  - Функция
  - Экспериментальный
translation_of: Web/JavaScript/Reference/Statements/function*
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Summary">Сводка</h2>

<p><code><strong>function*</strong></code> (ключевое слово <code>function</code> со звёздочкой) определяет <em>функцию-генератор</em>.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre>function* <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) { <em>statements</em> }
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>Имя функции.</dd>
 <dt><code>param</code></dt>
 <dd>Именованные аргументы функции (параметры). Функция-генератор может иметь 255 аргументов.</dd>
 <dt><code>statements</code></dt>
 <dd>Инструкции составляющие тело функции.</dd>
</dl>

<h2 id="Описание">Описание</h2>

<p>Генераторы являются функциями с возможностью выхода и последующего входа. Их контекст исполнения (значения переменных) сохраняется при последующих входах.</p>

<p>Когда вызывается функция-генератор, её тело исполняется не сразу; вместо этого возвращается объект-<a href="/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol">итератор</a>. При вызове метода <code>next() </code>итератора тело функции-генератора исполняется до первого встреченного оператора <a href="/ru/docs/Web/JavaScript/Reference/Operators/yield"><code><strong>yield</strong></code></a>, который определяет возвращаемое значение или делегирует дальнейшее выполнение другому генератору при помощи <code><strong>yield*</strong> anotherGenerator()</code>. Метод <code>next()</code> возвращает объект со свойством <code>value</code>, содержащим отданное значение, и свойством <code>done</code>, которое указывает, что генератор уже отдал своё последнее значение. Вызов метода <code>next()</code> с аргументом прекращает выполнение функции-генератора, и заменяет инструкцию yield на которой было приостановлено выполнение  на аргумент переданный в <code>next().</code></p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Простой_пример">Простой пример</h3>

<pre class="brush: js">function* idMaker() {
  var index = 0;
  while (index &lt; 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...</pre>

<h3 id="Пример_с_yield*">Пример с yield*</h3>

<pre class="brush: js">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20</pre>

<h3 id="Передача_аргументов_в_генератор">Передача аргументов в генератор</h3>

<pre class="brush: js">function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// первый вызов next выполняется от начала функции
// и до первого оператора yield
gen.next();
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise</pre>

<h3 id="Инструкция_return_в_генераторе">Инструкция return в генераторе</h3>

<pre class="brush: js">function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }</pre>

<h3 id="Генераторы_не_могут_быть_инстанцированы_(not_constructable)">Генераторы не могут быть инстанцированы (not constructable)</h3>

<pre class="brush: js example-bad">function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol">Протокол итераторов</a></li>
 <li>Оператор <a href="/ru/docs/Web/JavaScript/Reference/Operators/yield">yield</a></li>
 <li>Оператор <a href="/ru/docs/Web/JavaScript/Reference/Statements/function">function</a></li>
 <li>Другие ресурсы:
  <ul>
   <li>Компилятор <a href="http://facebook.github.io/regenerator/">Regenerator</a> из ES2015 в ES5</li>
   <li><a href="http://www.youtube.com/watch?v=qbKWsbJ76-s">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</a></li>
   <li><a href="http://taskjs.org/">Task.js</a></li>
  </ul>
 </li>
</ul>
