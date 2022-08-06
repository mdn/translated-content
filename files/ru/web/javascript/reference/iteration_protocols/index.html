---
title: The Iterator protocol
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - Итератор
translation_of: Web/JavaScript/Reference/Iteration_protocols
---
<div>
<div>{{jsSidebar("More")}}</div>
</div>

<p>Одно из нововведений стандарта ECMAScript 2015 - протоколы перебора, которые могут реализованы любым объектом, соблюдая при этом определённые правила.</p>

<h2 id="Протоколы_перебора">Протоколы перебора</h2>

<p>Протоколы перебора включают <a href="#The_.22iterable.22_protocol">the "iterable" protocol</a> и <a href="#The_.22iterator.22_protocol">the "iterator" protocol</a>.</p>

<h3 id="Протокол_Итерируемый">Протокол "Итерируемый"</h3>

<p>Протокол "<strong>Итерируемый</strong>" позволяет JavaScript объектам определять или настраивать поведение перебора, например, то какие значения перебираются в конструкции {{jsxref("Statements/for...of", "for..of")}}. Некоторые встроенные типы, такие как {{jsxref("Array")}} или {{jsxref("Map")}}, имеют поведение перебора по умолчанию, в то время как другие типы (такие как {{jsxref("Object")}}) его не имеют</p>

<p>Для того, чтобы объект был <strong>итерируемым</strong>, в нем должен быть реализован метод <strong>@@iterator</strong>, т.е. этот объект (или любой из объектов из его <a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">prototype chain</a>) должен иметь свойство с именем {{jsxref("Symbol")}}<code>.iterator</code>:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Свойство</th>
   <th scope="col">Значение</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td>Функция без аргументов, возвращающая объект, соответствующий <a href="#The_.22iterator.22_protocol">iterator protocol</a>.</td>
  </tr>
 </tbody>
</table>

<p>Всякий раз, когда объект подлежит перебору (например, когда в коде встречается цикл <code>for..of</code>), вызывается его метод <code>@@iterator</code> без аргументов, и возвращаемый <strong>iterator</strong> используется для получения перебираемых значений.</p>

<h3 id="Протокол_Итератор">Протокол "Итератор"</h3>

<p>Протокол "<strong>Итератор</strong>" определяет стандартный способ получения последовательности значений  (конечной или бесконечной).</p>

<p>Объект является итератором, если в нем определён метод <strong>next()</strong> , реализующий следующую логику:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Свойство</th>
   <th scope="col">Значение</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>
    <p>Функция без аргументов, возвращающая объект с двумя свойствами:</p>

    <ul>
     <li><code>done</code> (boolean)

      <ul>
       <li>Принимает значение <code>true</code> если итератор достиг конца итерируемой последовательности. В этом случае свойство <code>value</code> может определять <em>возвращаемое значение</em> итератора. Возвращаемые значения объясняются более подробно <a href="http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads">here</a>.</li>
       <li>Принимает значение <code>false</code> если итератор может генерировать следующее значение последовательности. Это эквивалентно не указанному done.</li>
      </ul>
     </li>
     <li><code>value</code> - любое JavaScript значение, возвращаемое итератором. Может быть опущено, если <code>done имеет значение</code> <code>true</code>.</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<p>Некоторые итераторы, в свою очередь, итерабельны:</p>

<pre class="brush: js">var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();           // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator]();    // true
</pre>

<h2 id="Примеры_использования_протокола_итератора">Примеры использования протокола "итератора"</h2>

<p>{{jsxref("String")}} является примером встроенного итерабельного объекта:</p>

<pre class="brush: js">var someString = "hi";
typeof someString[Symbol.iterator]           // "function"
</pre>

<p><font face="Consolas, Liberation Mono, Courier, monospace">По умолчанию итератор строки возвращает символы строки друг за другом:</font></p>

<pre class="brush: js">var iterator = someString[Symbol.iterator]();
iterator + ""                                // "[object String Iterator]"

iterator.next()                              // { value: "h", done: false }
iterator.next()                              // { value: "i", done: false }
iterator.next()                              // { value: undefined, done: true }</pre>

<p>Некоторые встроенные конструкции языка, например, <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a>, используют в своей внутренней реализации тот же протокол итерации:</p>

<pre class="brush: js">[...someString]                              // ["h", "i"]</pre>

<p>Поведение итератора можно переопределить применив собственный <code>@@iterator</code>:</p>

<pre class="brush: js">var someString = new String("hi");          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
</pre>

<p>Notice how redefining <code>@@iterator</code> affects the behavior of built-in constructs, that use the iteration protocol:</p>

<pre class="brush: js">[...someString]                              // ["bye"]
someString + ""                              // "hi"
</pre>

<h2 id="Встроенная_итерируемость">Встроенная итерируемость</h2>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} и {{jsxref("Set")}} итерируемы, так как их прототипы содержат <code>@@</code><code>iterator</code> метод, а {{jsxref("Object")}} нет, так как прототип {{jsxref("Object")}} не содержит метода <code>@@</code><code>iterator</code></p>

<h2 id="Итерируемость_определённая_пользователем">Итерируемость определённая пользователем</h2>

<p>Мы можем создать итерируемый объект сами:</p>

<pre class="brush: js">var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
</pre>

<h2 id="Builtin_APIs_need_iterables">Builtin APIs need iterables</h2>

<p>{{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} and {{jsxref("WeakSet", "WeakSet([iterable])")}}:</p>

<pre class="brush: js">var myObj = {}
new Map([[1,"a"],[2,"b"],[3,"c"]]).get(2)               // "b"
new WeakMap([[{},"a"],[myObj,"b"],[{},"c"]]).get(myObj) // "b"
new Set([1, 2, 3]).has(3)                               // true
new Set("123").has("2")                                 // true
new WeakSet(function*() {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj)                                     // true
</pre>

<p>and {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}}, {{jsxref("Array.from", "Array.from()")}}</p>

<h2 id="Синтаксис_предполагающий_итерируемость">Синтаксис предполагающий итерируемость</h2>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for-of</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread</a>, yield*, destructing  - использование данного синтаксиса возможно только если типы данных, к которым он применяется, итерируемы:</p>

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

<h2 id="Non-well-formed_iterables">Non-well-formed iterables</h2>

<p>If an iterable's <code>@@iterator</code> method doesn't return an iterator object, then it's a non-well-formed iterable, using it as such is likely to result in runtime exceptions or buggy behavior:</p>

<pre class="brush: js">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
</pre>

<h2 id="Объект-генератор_является_итератором_или_итерируемым">Объект-генератор является итератором или итерируемым</h2>

<p>И тем и другим</p>

<pre class="brush: js">var aGeneratorObject = function*(){
    yield 1;
    yield 2;
    yield 3;
}()
typeof aGeneratorObject.next
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator]
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject
// true, because its @@iterator method return its self (an iterator), so it's an well-formed iterable
[...aGeneratorObject]
// [1, 2, 3]
</pre>

<h2 id="Примеры">Примеры</h2>

<h3 id="Простой_итератор">Простой итератор</h3>

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex &lt; array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
</pre>

<h3 id="Бесконечный_итератор">Бесконечный итератор</h3>

<pre class="brush: js">function idMaker(){
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    }
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

<h3 id="С_генератором">С генератором</h3>

<pre class="brush: js">function* makeSimpleGenerator(array){
    var nextIndex = 0;

    while(nextIndex &lt; array.length){
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true



function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
</pre>

<h2 id="Спецификация">Спецификация</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарии</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Изначальное определение.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Дополнительную информацию о генераторах ES 2015 смотри <a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">на отдельной странице.</a></li>
</ul>
