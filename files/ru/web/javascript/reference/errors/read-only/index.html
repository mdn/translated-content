---
title: 'TypeError: "x" is read-only(Ошибка Типа: "x" только для чтения)'
slug: Web/JavaScript/Reference/Errors/Read-only
translation_of: Web/JavaScript/Reference/Errors/Read-only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">TypeError: назначение свойств только для чтения не допускается в строгом режиме (Edge)
TypeError: "x" доступен только для чтения (Firefox)
TypeError: 0 доступен только для чтения (Firefox)
TypeError: не удаётся назначить только для чтения свойство "x" из #&lt;объект&gt; (Chrome)
TypeError: не удаётся назначить только для чтения свойство '0' [массив объектов] (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Назначенное свойство глобальной переменной или объекта является свойством только для чтения. (Технически это свойство данных, недоступное для записи.)</p>

<p>Эта ошибка возникает только в коде строгого режима. В нестрогом коде назначение игнорируется.</p>

<p> </p>

<h2 id="Примеры">Примеры</h2>

<h3 id="недействительные_кейсы">недействительные кейсы</h3>

<p>Свойства только для чтения не очень распространены, но их можно создать с помощью {{jsxref("Object.defineProperty()")}} или {{jsxref("Object.freeze()")}}.</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
obj.score = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
</pre>

<p>В JavaScript также встроено несколько свойств, доступных только для чтения. Возможно, вы пытались переопределить математическую константу.</p>

<pre class="brush: js example-bad">'use strict';
Math.PI = 4;  // TypeError
</pre>

<p> </p>

<p>Прости, ты не можешь этого сделать.</p>

<p>Глобальная переменная undefined также доступна только для чтения, поэтому вы не можете заставить замолчать печально известную ошибку "undefined is not a function:</p>

<p> </p>

<pre class="brush: js example-bad">'use strict';
undefined = function() {};  // TypeError: "undefined" доступен только для чтения
</pre>

<h3 id="Правильные_кейсы">Правильные кейсы</h3>

<pre class="brush: js example-good">'use strict';
var obj = Object.freeze({name: 'Score', points: 157});
obj = {name: obj.name, points: 0};   // замена его на новый работающий объект

'use strict';
var LUNG_COUNT = 2;  // "var` работает, потому что он не только для чтения
LUNG_COUNT = 3;  // ok (анатомически маловероятно, хотя)
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
</ul>
