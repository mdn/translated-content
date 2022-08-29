---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - JavaScript
  - Выражение
  - Цикл
translation_of: Web/JavaScript/Reference/Statements/for...in
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code><font face="Open Sans, Arial, sans-serif">Цикл </font>for...in</code></strong> проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">for (<var>variable</var> in <var>object</var>) {<em>...</em>
}</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>Другое (очередное) имя свойства назначается переменной на каждой итерации.</dd>
 <dt><code>object</code></dt>
 <dd>Объект, по чьим свойствам мы проходим</dd>
</dl>

<h2 id="Описание">Описание</h2>

<p>Цикл <code>for...in</code> проходит только по перечисляемым свойствам. Объекты, созданные встроенными конструкторами, такими как <code>Array</code> и <code>Object</code> имеют неперечисляемые свойства от <code>Object.prototype</code> и <code>String.prototype</code>, например, от {{jsxref("String")}}-это {{jsxref("String.indexOf", "indexOf()")}}, а от {{jsxref("Object")}} - метод {{jsxref("Object.toString", "toString()")}}. Цикл пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа).</p>

<h3 id="Удаление_добавление_и_модификация_свойств">Удаление, добавление и модификация свойств</h3>

<p>Цикл <code>for...in</code> проходит по свойствам в произвольном порядке (см. оператор {{jsxref("Operators/delete", "delete")}} для того, чтобы узнать почему порядок прохода может отличаться в зависимости от браузера). Если свойство изменяется за одну итерацию, а затем изменяется снова, его значением в цикле является его последнее значение. Свойство, удалённое до того, как до него дошёл цикл, не будет участвовать в нём. Свойства добавленные в объекты в цикле могут быть пропущены. В общем, лучше не добавлять, изменять или удалять свойство из объекта во время итерации, если по нему ещё не прошли. Нет гарантии, что добавленное свойство будет посещено циклом, низменное после проведения изменений, а удалённое после удаления.</p>

<h3 id="Проход_по_массиву_и_for...in"><code>Проход по массиву и for...in</code></h3>

<div class="note">
<p><strong>Замечание:</strong> <code>for...in</code> не следует использовать для {{jsxref("Array")}}, где важен порядок индексов.</p>
</div>

<p>Индексы массива - это перечисляемые свойства с целочисленными именами, в остальном они аналогичны свойствам объектов. Нет гарантии, что <code>for...in</code> будет возвращать индексы в конкретном порядке. Цикл <code>for...in</code> возвращает все перечисляемые свойства, включая имеющие нецелочислиненные имена и наследуемые.</p>

<p>Так как порядок прохода зависит от реализации, проход по массиву может не произойти в правильном порядке. Следовательно лучше с числовыми индексами использовать циклы {{jsxref("Statements/for", "for")}}, {{jsxref("Array.prototype.forEach()")}} или {{jsxref("Statements/for...of", "for...of")}}, когда проходим по массивам, где важен порядок доступа к свойствам.</p>

<h3 id="Проход_только_через_собственные_свойства.">Проход только через собственные свойства.</h3>

<p>Если вы хотите рассматривать только свойства самого объекта, а не его прототипов, используйте {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}}, {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} или {{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable")}}. Кроме того, если вы знаете, что не будет вмешательства в код извне, вы можете расширить встроенные прототипы методом проверки.</p>

<h2 id="Примеры">Примеры</h2>

<p>Следующее выражение берёт аргументом объект. Затем проходит по всем перечислимым свойствам объекта и возвращает строку содержащую имена свойств и их значения.</p>

<pre class="brush: js">var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Выведет:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"</pre>

<p>Следующая функция иллюстрирует использование {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}: наследуемые свойства не отображаются</p>

<pre class="brush: js">var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  }
}

// Выведет:
// "obj.color = red"
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-12.6.4', 'for...in statement')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Изначальное определение</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Поддержка_инициализатор_переменных">Поддержка: инициализатор переменных</h2>

<p>До SpiderMonkey 40 {{geckoRelease(40)}}, можно было инициализировать переменные (<code>i=0</code>) в цикле <code>for...in</code>:</p>

<pre class="brush: js example-bad">var obj = {a:1, b:2, c:3};
for(var i=0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
</pre>

<p>Это нестандартное поведение игнорируется в версии 40 и более поздних, оно бросит предупреждение {{jsxref("SyntaxError")}} ("for-in loop head declarations may not have initializers") в консоль ({{bug(748550)}} и {{bug(1164741)}}).</p>

<p>Другие движки, такие как v8 (Chrome), Chakra (IE/Edge) и JSC (WebKit/Safari) также собираются удалить это нестандартное поведение.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Statements/for...of", "for...of")}} - похожий цикл, проходящий по значениям свойств</li>
 <li>{{jsxref("Statements/for_each...in", "for each in")}} - похожее выражение, но перебирает значения свойств, а не их имена (устарело)</li>
 <li>{{jsxref("Statements/for", "for")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Генераторы</a> (использующие синтаксис <code>for...in</code>)</li>
 <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Перечислимость и владение свойствами</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
</ul>
