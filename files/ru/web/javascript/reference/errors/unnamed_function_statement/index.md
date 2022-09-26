---
title: 'SyntaxError: function statement requires a name(функция оператор требует имя)'
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
translation_of: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: ожидаемый идентификатор (Edge)
SyntaxError: оператор функции требует имя [Firefox]
SyntaxError: непредвиденный токен ( [Chrome]
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>В коде есть оператор function, для которого требуется имя. Вам нужно будет проверить, как определены функции и нужно ли предоставить для них имя, или если рассматриваемая функция должна быть выражением функции, {{Glossary("IIFE")}}, или если код функции вообще правильно размещён в этом контексте.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Операторы_vs_выражения">Операторы vs выражения</h3>

<p>Оператор функции (или объявление функции) требует имя, это не будет работать:</p>

<pre class="brush: js example-bad">function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
</pre>

<p>Вы можете использовать выражение функции (назначат) вместо:</p>

<pre class="brush: js example-good">var greet = function() {
  return 'Hello world';
};</pre>

<p>Или, ваша функция возможно, предназначена для IIFE (немедленно вызываемое выражение функции), которое является функцией, которая запускается, как только она определена. В этом случае вам понадобится ещё несколько брекетов:</p>

<pre class="brush: js example-good">(function () {

})();</pre>

<h3 id="Помеченные_функции">Помеченные функции</h3>

<p>При использовании меток функций после ключевого слова function всё равно потребуется указать имя функции. Это не работает:</p>

<pre class="brush: js example-bad">function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: оператор функции требует имя
</pre>

<p>Это будет работать, например так:</p>

<pre class="brush: js example-good">function Greeter() {
  german: function g() {
    return "Moin";
  }
}</pre>

<h3 id="Методы_объекта">Методы объекта</h3>

<p>Если вы намеревались создать метод объекта, вам нужно будет создать объект. Тогда допустим следующий синтаксис без имени после ключевого слова function.</p>

<pre class="brush: js example-good">var greeter = {
  german: function () {
    return "Moin";
  }
};</pre>

<h3 id="Синтаксис_вызова">Синтаксис вызова</h3>

<p>Кроме того, внимательно следите за синтаксисом при использовании колбэков. Очень легко забыть скобку или запятую.</p>

<pre class="brush: js example-bad">promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
</pre>

<p>как бы было правильно:</p>

<pre class="brush: json example-good">promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions in the JavaScript Guide</a> (функции в javascript"e гайд)</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">Оператор функции</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">Выражение функции</a></li>
 <li><a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">IIFE</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/label">label</a> </li>
</ul>
