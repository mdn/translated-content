---
title: 'TypeError: ''x'' is not iterable (Тип ошибки  ''x'' не является итерационным)'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
translation_of: Web/JavaScript/Reference/Errors/is_not_iterable
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: "x" не является итерационным (Firefox, Chrome)
TypeError: 'x' не является функцией или её возвращаемое значение не является итерационным (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Значение, которое даётся как правая сторона for...of или как аргумент функции, такой как {{jsxref("Promise.all")}} или {{jsxref("TypedArray.from")}}, не является итерационным объектом.  Повторяемое может быть, встроенный итератор типа, такие как {{jsxref("Array")}}, {{jsxref("String")}} или {{jsxref("Map")}}, генератор результатом, или объект, реализующий итератор протокол.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Итерация_по_свойствам_объекта">Итерация по свойствам объекта</h3>

<p>В JavaScript, {{jsxref("object")}} не повторяется, если они реализуют итерационный протокол . Поэтому нельзя использовать for...of для перебора свойств объекта.</p>

<pre class="brush: js example-bad">var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj не является итерационным
    // …
}
</pre>

<p>Вместо этого вы должны использовать {{jsxref("Object.keys")}} или {{jsxref("Object.entries")}}, для итерации по свойствам или записям объекта.</p>

<pre class="brush: js example-good">var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
    console.log(country, capital);


</pre>

<p>Другим вариантом для этого варианта использования может быть использование  {{jsxref("Map")}}:</p>

<pre class="brush: js example-good">var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// Iterate over the property names:
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
</pre>

<h3 id="Итерация_по_генератору">Итерация по генератору</h3>

<p>Генераторы - это функции, вызываемые для создания итерационного объекта.</p>

<pre class="brush: js example-bad">function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: генерация не является итерационной
    console.log(x);
</pre>

<p>Если они не вызываются, то объект {{jsxref("Function")}}, соответствующий генератору, можно вызвать, но нельзя выполнить итерацию. Вызов генератора создаёт итерационный объект, который будет выполнять итерацию по значениям, полученным во время выполнения генератора.</p>

<pre class="brush: js example-good">function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable protocol</a> </li>
 <li>{{jsxref("Object.keys")}}</li>
 <li>{{jsxref("Object.entries")}}</li>
 <li>{{jsxref("Map")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators">generators</a> </li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of</a></li>
</ul>
