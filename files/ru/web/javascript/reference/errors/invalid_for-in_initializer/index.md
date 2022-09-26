---
title: >-
  SyntaxError: for-in loop head declarations may not have
  initializers(SyntaxError: объявления for-in loop head могут не иметь
  инициализаторов)
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: объявления for-in loop head не могут иметь инициализатора (Edge)
SyntaxError: объявления for-in loop head могут не иметь инициализаторов (Firefox)
SyntaxError: объявление переменной цикла for-in может не иметь инициализатора. (Chrome)

</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}} только в строгом режиме.</p>

<h2 id="Что_пошло_не так">Что пошло не так?</h2>

<p>Глава цикла <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> содержит выражение инициализатора. То есть переменная объявляется и присваивается значение <code>|for (var i = 0 in obj)|</code>. В нестрогом режиме это объявление head игнорируется и ведёт себя как <code>|for (var i in obj)|</code>. Однако в строгом режиме создаётся синтаксическая ошибка.</p>

<h2 id="Примеры">Примеры</h2>

<p>Данный пример даёт SyntaxError:</p>

<pre class="brush: js example-bad">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

 SyntaxError: объявления for-in loop head могут не иметь инициализаторов
</pre>

<h3 id="Правильный_for-in_loop">Правильный for-in loop</h3>

<p>Можно удалить инициализатор (i = 0) в начале цикла for-in.</p>

<pre class="brush: js example-good">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
</pre>

<h3 id="Итерация_массива">Итерация массива</h3>

<p>Цикл for...in не должен использоваться для итерации массива. Вы намеревались использовать цикл for вместо цикла for-in для итерации {{jsxref("Array")}}? Цикл for позволяет также установить инициализатор:</p>

<pre class="brush: js example-good">var arr = [ "a", "b", "c" ]

for (var i = 2; i &lt; arr.length; i++) {
  console.log(arr[i]);
}

// "c"</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> – также запрещает инициализатор как в строгом, так и в нестрогом режиме.</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> –  предпочтительно для итерации массива, позволяет определить инициализатор.</li>
</ul>
