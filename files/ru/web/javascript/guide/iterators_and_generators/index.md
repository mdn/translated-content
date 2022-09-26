---
title: Итераторы и  генераторы
slug: Web/JavaScript/Guide/Iterators_and_Generators
tags:
  - yield
  - Генераторы
  - Итераторы
translation_of: Web/JavaScript/Guide/Iterators_and_Generators
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}</div>

<p class="summary">Обработка каждого элемента коллекции является весьма распространённой операцией. JavaScript предоставляет несколько способов перебора коллекции, от простого цикла <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for" title="en/Core_JavaScript_1.5_Reference/Statements/for">for</a></code> до <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="en/Core_JavaScript_1.5_Reference/Global_Objects/Array/map">map()</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" title="en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter">filter()</a></code> и <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions" title="en/JavaScript/Guide/Predefined Core Objects#Array comprehensions">array comprehensions</a>. Итераторы и генераторы внедряют концепцию перебора непосредственно в ядро языка и обеспечивают механизм настройки поведения <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of" title="en/Core_JavaScript_1.5_Reference/Statements/for...in">for...of</a></code> циклов.</p>

<p>Подробнее см. также:</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">function*</a></code> и {{jsxref("Generator")}}</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> и <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions">Generator comprehensions</a> {{experimental_inline}}</li>
</ul>

<h2 id="Итераторы">Итераторы</h2>

<p>Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз, при этом отслеживая своё текущее положение внутри этой последовательности. В JavaScript итератор - это объект, который предоставляет метод next(), возвращающий следующий элемент последовательности. Этот метод возвращает объект с двумя свойствами: done и value.</p>

<p>После создания, объект-итератор может быть явно использован, с помощью вызовов метода next().</p>

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex &lt; array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}</pre>

<p>После инициализации, метод next() может быть вызван для поочерёдного доступа к парам ключ-значение в объекте:</p>

<pre class="brush: js">var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true</pre>

<h2 id="Генераторы">Генераторы</h2>

<p>В то время как пользовательские итераторы могут быть весьма полезны, при их программировании требуется уделять серьёзное внимание поддержке внутреннего состояния. <strong>{{jsxref("Global_Objects/Generator","Генераторы","","true")}}</strong> предоставляют мощную альтернативу: они позволяют определить алгоритм перебора, написав единственную функцию, которая умеет поддерживать собственное состояние.</p>

<p>Генераторы - это специальный тип функции, который работает как фабрика итераторов. Функция становится генератором, если содержит один или более {{jsxref("Operators/yield","yield")}} операторов и использует {{jsxref("Statements/function*","function*")}} синтаксис.</p>

<pre class="brush: js">function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...</pre>

<h2 id="Итерируемые_объекты">Итерируемые объекты</h2>

<p>Объект является итерируемым, если в нем определён способ перебора значений, то есть, например, как значения перебираются в конструкции {{jsxref("Statements/for...of", "for..of")}}. Некоторые встроенные типы, такие как {{jsxref("Array")}} или {{jsxref("Map")}}, по умолчанию являются итерируемыми, в то время как другие типы, как, например, {{jsxref("Object")}}, таковыми не являются.</p>

<p>Чтобы быть итерируемым, объект обязан реализовать метод <strong>@@iterator</strong>, что означает, что он (или один из объектов выше по <a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">цепочке прототипов</a>) обязан иметь свойство с именем {{jsxref("Symbol.iterator")}}:</p>

<h3 id="Пользовательские_итерируемые_объекты">Пользовательские итерируемые объекты</h3>

<p>Мы можем создать свои собственные итерируемые объекты так:</p>

<pre class="brush: js">var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
</pre>

<h3 id="Встроенные_итерируемые_объекты">Встроенные итерируемые объекты</h3>

<p>Объекты {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} и {{jsxref("Set")}} являются итерируемыми, потому что их прототипы содержат метод {{jsxref("Symbol.iterator")}}.</p>

<h3 id="Синтаксис_для_итерируемых_объектов">Синтаксис для итерируемых объектов</h3>

<p>Некоторые выражения работают с итерируемыми объектами, например, <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for-of</a></code> циклы, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></code>, и <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring assignment</a>.</p>

<pre class="brush: js">for(let value of ["a", "b", "c"]){
    console.log(value)
}
// "a"
// "b"
// "c"

[..."abc"] // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"]
}

gen().next() // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"])
a // "a"

</pre>

<h2 id="Продвинутые_генераторы">Продвинутые генераторы</h2>

<p>Генераторы вычисляют результаты своих yield выражений по требованию, что позволяет им эффективно работать с последовательностями с высокой вычислительной сложностью, или даже с бесконечными последовательностями, как продемонстрировано выше.</p>

<p><code>Метод</code> {{jsxref("Global_Objects/Generator/next","next()")}} также принимает значение, которое может использоваться для изменения внутреннего состояния генератора. Значение, переданное в next(), будет рассматриваться как результат последнего yield выражения, которое приостановило генератор.</p>

<p>Вот генератор чисел Фибоначчи, использующий <code>next(x)</code> для перезапуска последовательности:</p>

<pre class="brush: js">function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next().value);     // 13
console.log(sequence.next(true).value); // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3</pre>

<div class="note"><strong>Примечание:</strong> Интересно, что вызов <code>next(undefined)</code> равносилен вызову <code>next()</code>. При этом вызов next() для нового генератора с любым аргументом, кроме undefined, спровоцирует исключение <code>TypeError</code>.</div>

<p>Можно заставить генератор выбросить исключение, вызвав его метод {{jsxref("Global_Objects/Generator/throw","throw()")}} и передав в качестве параметра значение исключения, которое должно быть выброшено. Это исключение будет выброшено из текущего приостановленного контекста генератора так, будто текущий приостановленный <code>yield</code> оператор являлся <code>throw</code> оператором.</p>

<p>Если <code>yield</code> оператор не встречается во время обработки выброшенного исключения, то исключение передаётся выше через вызов <code>throw()</code>, и результатом последующих вызовов <code>next()</code> будет свойство <code>done</code> равное <code>true</code>.</p>

<p>У генераторов есть метод  {{jsxref("Global_Objects/Generator/return","return(value)")}}, который возвращает заданное значение и останавливает работу генератора.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}</p>
