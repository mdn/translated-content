---
title: Primitive
slug: Glossary/Primitive
tags:
  - CodingScripting
  - Glossary
  - JavaScript
translation_of: Glossary/Primitive
original_slug: Глоссарий/Primitive
---
<p><strong>Примитив</strong> (значение примитивного типа, примитивный тип данных) это данные, которые не являются {{glossary("object", "объектом")}} и не имеют {{glossary("method","методов")}}. В {{Glossary("JavaScript")}} 7 простых типов данных: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("boolean")}}, {{Glossary("null")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}} (новое в {{Glossary("ECMAScript")}} 2015), {{Glossary("bigint")}}.</p>

<p>Чаще всего значение примитивного типа представлено в низкоуровневой реализации языка.</p>

<p>Все<strong> </strong>примитивы <strong>неизменяемы (immutable)</strong>, то есть они не могут быть изменены. <span id="result_box" lang="ru"><span>Важно не путать сам примитив с переменной, которой присвоено значение примитивного типа.</span> <span>Переменной может быть переприсвоено новое значение, но существующее значение примитивного типа не может быть изменено подобно объектам, массивам и функциям.</span></span></p>

<h2 id="Пример">Пример</h2>

<p><span id="result_box" lang="ru"><span>Этот пример поможет понять, что значения примитивных типов неизменяемы </span></span><strong>(immutable)</strong><span lang="ru"><span>.</span></span></p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
</pre>

<p><span id="result_box" lang="ru"><span>Примитив может быть заменён, но он не может быть напрямую изменён.</span></span></p>

<h2 id="Другой_пример_Step-by-step">Другой пример [ Step-by-step ]</h2>

<p><span id="result_box" lang="ru"><span>Следующий пример поможет разобраться как JavaScript </span></span><span lang="ru"><span>работает с примитивами.</span></span></p>

<h3 class="highlight-spanned" id="JavaScript_2"><span class="highlight-span">JavaScript</span></h3>

<pre class="brush: js line-numbers  language-js">// The Primitive
let foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
   num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
   foo += 2;
}

// Calling our first function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5

// Trying again with our second function...
addTwo_v2(foo);
console.log(foo);   // 5
</pre>

<p><span id="result_box" lang="ru"><span>Вы ожидали, что будет 7 вместо 5?</span> <span>Если так, тогда прочитайте, как работает этот код:</span></span></p>

<ul>
 <li>При вызове обеих функций <code>addTwo</code> <code>и addTwo_v2</code>, JavaScript ищет <span class="short_text" id="result_box" lang="ru"><span>значение для идентификатора</span></span> <code>foo</code>. JavaScript <span id="result_box" lang="ru"><span>правильно определяет нашу переменную, созданную с помощью первого оператора</span></span></li>
 <li><span id="result_box" lang="ru"><span>После этого JavaScript передаёт найденный аргумент в функцию в качестве параметра</span></span></li>
 <li>Перед выполнением операторов в теле функции, <strong>JavaScript берёт исходный переданный аргумент </strong>(который является примитивом) и создаёт его локальную копию. <span id="result_box" lang="ru"><span>Эти копии, существующие только внутри областей функций, доступны через идентификаторы, указанные в определениях функций</span></span> (<code>num</code> для <code>addTwo</code>, <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">foo</span></font> для <code>addTwo_v2</code>)</li>
 <li><span class="short_text" id="result_box" lang="ru"><span>Затем выполняются операторы функций</span></span>:
  <ul>
   <li>В первой функции был создан локальный аргумент <code>num</code>. <span id="result_box" lang="ru"><span>Мы увеличиваем его значение на 2</span></span> (а не значение исходной переменной <code>foo</code>).</li>
   <li>Во второй функции был создан локальный аргумент<code> foo</code>. Мы увеличиваем его значение на 2 (а не значение исходной (внешней) переменной <code>foo</code>).  <span id="result_box" lang="ru"><span>Кроме того, в этой ситуации, внешняя переменная</span></span> <code>foo</code> является недоступной <strong>никаким</strong> способом. Это связано с лексическими областями JavaScript и, как следствие, с затенением переменных. Локальная переменная <code>foo</code> скрывает внешнюю переменную <code>foo</code>. Чтобы получить больше информации, смотри <a href="/en-US/docs/Web/JavaScript/Closures">Closures</a>.</li>
  </ul>
 </li>
 <li>Таким образом, никакие изменения внутри наших функций <strong>не будут</strong> влиять на ИСХОДНУЮ <code>foo</code> вообще, так как мы работаем с её <strong>копиями</strong></li>
</ul>

<p><span id="result_box" lang="ru"><span>Вот почему примитивы неизменяемы </span></span><strong>(immutable)</strong><span lang="ru"><span>.</span> <span>Потому что мы не работаем над ними напрямую. Мы создаём копию и продолжаем работать с ней, не касаясь исходных значений.</span></span></p>

<h2 id="Обёртки_примитивных_типов_в_JavaScript">Обёртки примитивных типов в JavaScript</h2>

<p>За исключением <code>null</code> и <code>undefined</code>, все примитивные значения имеют объектный аналог, который оборачивает значение примитивного типа:</p>

<ul>
 <li>{{jsxref("String")}} для string примитива.</li>
 <li>{{jsxref("Number")}} для number примитива.</li>
 <li>{{jsxref("BigInt")}} для bigint примитива.</li>
 <li>{{jsxref("Boolean")}} для boolean примитива.</li>
 <li>{{jsxref("Symbol")}} для symbol примитива.</li>
</ul>

<p>Метод <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>valueOf()</code></a> типа обёртки возвращает значение примитивного типа.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<h3 id="Общие_сведения">Общие сведения</h3>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Введение в типы данных JavaScript</a></li>
 <li> <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D1%82%D0%B8%D0%BF">Примитивный тип</a> на Wikipedia</li>
</ul>
