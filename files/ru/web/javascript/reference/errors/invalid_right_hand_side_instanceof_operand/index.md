---
title: >-
  TypeError: invalid 'instanceof' operand 'x'(Тип ошибки:  неверный
  'экземпляром' операнд 'х')
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
translation_of: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: недопустимый операнд "instanceof" "x" (Firefox)
TypeError: "x" не является функцией (Firefox)
TypeError: правая часть "instanceof" не является объектом (Chrome)
TypeError: правая часть "instanceof" не вызывается (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_не_так">Что не так?</h2>

<p>The <a href="/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code> operator</a> ожидает, что операнды правой стороны будут объектом конструктора, т. е. объектом, который имеет свойство прототипа и является вызываемым.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js example-bad">"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0;      // TypeError: invalid 'instanceof' operand 0

function Foo() {}
var f = Foo();        // Foo() is called and returns undefined
var x = new Foo();

x instanceof f;       // TypeError: invalid 'instanceof' operand f
x instanceof x;       // TypeError: x is not a function
</pre>

<p>Чтобы исправить эти ошибки, необходимо либо заменить оператор <code>instanceof </code>оператором <code>typeof</code>, либо убедиться, что вместо результата его вычисления используется имя функции.</p>

<pre class="brush: js example-good">typeof "test" == "string"; // true
typeof 42 == "number"      // true

function Foo() {}
var f = Foo;               // Do not call Foo.
var x = new Foo();

x instanceof f;            // true
x instanceof Foo;          // true
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code> operator</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof"><code>typeof</code> operator</a></li>
</ul>

<p> </p>
