---
title: Объект arguments
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Functions
  - JavaScript
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments
---
<div>{{jsSidebar("Functions")}}</div>

<p>Объект <code><strong>arguments</strong></code> — это подобный массиву объект, который содержит аргументы, переданные в функцию.</p>

<div class="blockIndicator note">
<p><strong>Примечание:</strong> Если вы пишете ES6-совместимый код, то лучше использовать <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточные параметры</a>.</p>
</div>

<div class="blockIndicator note">
<p><strong>Примечание:</strong> "Подобный массиву" означает, что <code>arguments</code> имеет свойство {{jsxref("Functions/arguments/length", "length")}}, а элементы индексируются начиная с нуля. Но при этом он не может обращаться к встроенным методам {{JSxRef("Array")}}, таким как {{jsxref("Array.forEach", "forEach()")}} или {{jsxref("Array.map", "map()")}}. Подробнее об этом в <a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments#Описание">§Описании</a>.</p>
</div>

<p>{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">arguments</pre>

<h2 id="Описание">Описание</h2>

<p>Объект <code>arguments</code> - это локальная переменная, доступная внутри любой (нестрелочной) функции. Объект <code>arguments</code> позволяет ссылаться на аргументы функции внутри неё. Он состоит из переданных в функцию аргументов, индексация начинается с 0. Например, если в функцию было передано 3 аргумента, обратиться к ним можно следующим образом:</p>

<pre class="brush: js">arguments[0]
arguments[1]
arguments[2]
</pre>

<p>Аргументам может быть присвоено значение:</p>

<pre class="brush: js">arguments[1] = 'new value';</pre>

<p>Объект <code>arguments</code> не является {{jsxref("Array")}}. Он похож на массив, но не обладает ни одним из его свойств, кроме <code><a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments/length" title="JavaScript/Reference/Functions_and_function_scope/arguments/length">length</a></code>. Например, у него нет метода <code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="JavaScript/Reference/Global_Objects/Array/pop">pop</a></code>. Однако, он может быть преобразован в обычный массив:</p>

<pre class="brush: js">var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
</pre>

<div class="warning">
<p>Использование <code>slice</code> на объекте <code>arguments</code> не позволяет сделать оптимизации в некоторых JavaScript движках (например, V8 — <a href="https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments">подробнее</a>). Если они важны, можно попробовать вместо этого создать новый массив с аналогичной длиной и заполнить его элементами объекта <code>arguments.</code> Альтернативный вариант — использовать конструктор <code>Array</code> как функцию:</p>

<pre class="brush: js">var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));</pre>
</div>

<p>Объект <code>arguments</code> можно использовать при вызове функции с бо́льшим количеством аргументов, чем было предусмотрено в её объявлении. Такой способ удобен для функций, в которые допустимо передавать переменное количество аргументов. Можно воспользоваться <code><a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments/length" title="JavaScript/Reference/Functions_and_function_scope/arguments/length">arguments.length</a></code>, чтобы определить количество переданных в функцию аргументов, а затем обработать каждый из них с помощью объекта <code>arguments</code>. Чтобы определить количество параметров функции, описанных в её <a href="/en-US/docs/Glossary/Signature/Function">сигнатуре</a>, можно использовать свойство <code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/length" title="JavaScript/Reference/Global_Objects/Function/length">Function.length</a></code>.</p>

<h3 id="Использование_typeof_с_объектом_arguments">Использование <code>typeof</code> с объектом <code>arguments</code></h3>

<p>Применение оператора <code>typeof</code> к <code>arguments</code> вернёт 'object'.</p>

<pre>console.log(typeof arguments); // 'object'</pre>

<p>Определение типов аргументов может быть выполнено применением оператора <code>typeof</code> и индексацией.</p>

<pre>// выведет тип первого аргумента
console.log(typeof arguments[0]);</pre>

<h3 id="Использование_оператора_расширения_для_объекта_arguments">Использование оператора расширения для объекта <code>arguments</code></h3>

<p>Как и с обычными массива-подобными объектами, для преобразования объекта <code>arguments</code> в обычный массив можно использовать метод {{jsxref("Array.from()")}} или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator">оператор расширения:</a></p>

<pre class="brush: js">var args = Array.from(arguments);
var args = [...arguments];</pre>

<h2 id="Свойства">Свойства</h2>

<dl>
 <dt><code><a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments/callee" title="JavaScript/Reference/Functions_and_function_scope/arguments/callee">arguments.callee</a></code></dt>
 <dd>Ссылка на функцию, которая выполняется в текущий момент.</dd>
 <dt><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller" title="JavaScript/Reference/Functions_and_function_scope/arguments/caller">arguments.caller</a></code> {{ Obsolete_inline() }}</dt>
 <dd>Ссылка на функцию, которая вызвала функцию, выполняющуюся в текущий момент.</dd>
 <dt><code><a href="/ru/docs/Web/JavaScript/Reference/Functions/arguments/length" title="JavaScript/Reference/Functions_and_function_scope/arguments/length">arguments.length</a></code></dt>
 <dd>Количество переданных в функцию аргументов.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator">arguments[@@iterator]</a></code></dt>
 <dd>Возвращает новый объект <code>Array Iterator</code>, содержащий значения для каждого индекса в массиве.</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<h3 id="Создание_функции_соединяющей_несколько_строк">Создание функции, соединяющей несколько строк</h3>

<p>Данный пример описывает функцию, которая соединяет несколько строк. Для этой функции объявлен только один аргумент, определяющий символ-разделитель соединяемых элементов. Функция определена следующим образом:</p>

<pre class="brush:js">function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}</pre>

<p>Вы можете передать любое количество аргументов в эту функцию. Она создаёт строку, используя каждый аргумент:</p>

<pre class="brush:js">// возвращает "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// получает "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// выводит "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");</pre>

<h3 id="Функция_создающая_HTML_списки"> Функция, создающая HTML списки</h3>

<p>В данном примере приведена функция, которая создаёт строку с HTML-разметкой для списка. Единственный её аргумент — строка, определяющая вид списка: если его значение равно "u", формируется неупорядоченный (маркированный) список, а если "o" — то упорядоченный (нумерованный):</p>

<pre class="brush:js">function list(type) {
  var result = "&lt;" + type + "l&gt;&lt;li&gt;";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("&lt;/li&gt;&lt;li&gt;");
  result += "&lt;/li&gt;&lt;/" + type + "l&gt;"; // конец списка

  return result;
}</pre>

<p>Вы можете использовать любое количество аргументов, а функция добавит каждый элемент в список заданного первым аргументом типа. Например:</p>

<pre class="brush:js">var listHTML = list("u", "One", "Two", "Three");

/* listHTML:

"&lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;li&gt;Three&lt;/li&gt;&lt;/ul&gt;"

*/</pre>

<h3 id="Остаточные_деструктурированные_и_параметры_по_умолчанию">Остаточные, деструктурированные и параметры по умолчанию</h3>

<p>Объект <code>arguments</code> может использоваться совместно с <a href="/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточными параметрами</a>, <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметрами по умолчанию </a>или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">деструктурированными параметрами</a>.</p>

<pre class="brush: js">function foo(...args) {
  return arguments;
}
foo(1, 2, 3); // { "0": 1, "1": 2, "2": 3 }</pre>

<p>Тем не менее, в нестрогих функциях <strong>соответствие между их аргументами и объектом <code>arguments</code></strong> существует только в том случае, если функция <strong>не</strong> содержит никаких <a href="/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточных параметров</a>, <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметров по умолчанию</a> или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">деструктурированных параметров</a>. Например, в функции, приведённой ниже, используется параметр по умолчанию, и в данном случае возвращаемый результат будет равен 10, а не 100:</p>

<pre class="brush: js">function bar(a=1) {
  arguments[0] = 100;
  return a;
}
bar(10); // 10</pre>

<p>В следующем примере возвращается 100, поскольку здесь нет <a href="/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточных параметров</a>, <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметров по умолчанию</a> или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">деструктурированных параметров</a>:</p>

<pre class="brush: js">function zoo(a) {
  arguments[0] = 100;
  return a;
}
zoo(10); // 100</pre>

<p>На самом деле, если <a href="/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточные параметры</a>, <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметры по умолчанию</a> или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">деструктурированные параметры</a> не используются, формальные аргументы будут ссылаться на последние значения объекта <strong><code>arguments</code></strong>, при считывании значений формальных аргументов будут считаны последние данные из <strong><code>arguments</code></strong>, а при изменении значений формальных аргументов будет обновлён и объект <strong><code>arguments</code></strong>. Пример приведён в коде ниже:</p>

<pre class="brush: js">function func(a, b) {
    arguments[0] = 90;
    arguments[1] = 99;
    console.log(a + " " + b);
}

func(1, 2); //90, 99</pre>

<p>или</p>

<pre class="brush: js">function func(a, b) {
    a = 9;
    b = 99;
    console.log(arguments[0] + " " + arguments[1]);
}

func(3, 4); //9, 99</pre>

<p>Но в случае, когда применяются <a href="/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters">остаточные параметры</a>, <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметры по умолчанию</a> или <a href="/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">деструктурированные параметры</a>, будет обработано нормальное поведение, как в случае <a href="/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters">параметров по умолчанию</a>:</p>

<pre class="brush: js">function func(a, b, c=9) {
    arguments[0] = 99;
    arguments[1] = 98;
    console.log(a + " " + b);
}

func(3, 4); //3, 4</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
