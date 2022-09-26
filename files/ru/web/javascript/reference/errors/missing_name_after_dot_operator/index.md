---
title: 'SyntaxError: missing name after . operator(отсутствует имя после. оператора)'
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
translation_of: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing name after . operator
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Оператор точки (.) используется для доступа к свойству. Необходимо указать имя свойства, к которому требуется получить доступ. Для доступа к вычисляемому свойству может потребоваться изменить доступ к свойству с точки на квадратные скобки. Это позволит вычислить выражение. Может быть, вы собирались сделать конкатенацию вместо этого? В этом случае необходим оператор plus ( + ). См. примеры ниже.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Доступ_к_свойствам">Доступ к свойствам</h3>

<p>Методы доступа к свойствам в JavaScript используют точку (.) или квадратные скобки ([]), но не оба. Квадратные скобки обеспечивают доступ к вычисляемым свойствам.</p>

<pre class="brush: js example-bad">var obj = { foo: { bar: "baz", bar2: "baz2" } };
var i = 2;

obj.[foo].[bar]
// SyntaxError: отсутствует имя после оператора .

obj.foo."bar"+i;
// SyntaxError: отсутствует имя после оператора .
</pre>

<p>Чтобы исправить этот код, необходимо получить доступ к объекту следующим образом:</p>

<pre class="brush: js example-good">obj.foo.bar; // "baz"
//или же
obj["foo"]["bar"]; // "baz"

//вычисляемые свойства требуют квадратных скобок
obj.foo["bar" + i]; // "baz2"
</pre>

<h3 id="Доступ_к_свойствам_против_конкатенации">Доступ к свойствам против конкатенации</h3>

<p>Если вы пришли из другого языка программирования (например, {{Glossary("PHP")}}), также легко перепутать оператор точки (.) и оператор конкатенации (+).</p>

<pre class="brush: js example-bad">console.log("Hello" . "world");

// SyntaxError: missing name after . operator</pre>

<p>Вместо этого необходимо использовать знак плюс для объединения:</p>

<pre class="brush: js example-good">console.log("Hello" + "World");</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a>(доступ к свойствам)</li>
</ul>
