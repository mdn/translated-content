---
title: 'Warning: unreachable code after return statement'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
tags:
  - JavaScript
  - Return
  - Warning
  - Предупреждения
translation_of: Web/JavaScript/Reference/Errors/Stmt_after_return
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Warning: unreachable code after return statement (Firefox)
</pre>

<pre class="syntaxbox">Предупреждение: недоступный код после оператора <code>return </code>(Firefox)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>Предупреждение</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Недоступный код после оператора <code>return</code> может возникнуть в следующих ситуациях:</p>

<ul>
 <li>когда в коде программы есть какие-либо выражения после оператора {{jsxref("Statements/return", "return")}}</li>
 <li>когда используется оператор <code>return</code> без точки с запятой, но далее непосредственно за ним следует выражение.</li>
</ul>

<p>Когда присутствует выражение после оператора <code>return</code>, то выдаётся предупреждение о том, что код программы после <code>return</code> недоступен, то есть он никогда не запустится и не выполнится.</p>

<p>Почему нужно ставить точку с запятой после оператора <code>return</code>? В случае оператора <code>return</code> без точки с запятой, совсем неясно, хотел ли разработчик вернуть результат, вычисляемый в следующей строке, или же он хочет остановиться сейчас и выйти из подпрограммы. Предупреждение указывает на неопределённость результата работы оператора <code>return</code>.</p>

<p>Предупреждение не появится для оператора <code>return</code> без точки с запятой, если за данной строкой следуют:</p>

<ul>
 <li>{{jsxref("Statements/throw", "throw")}}</li>
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/var", "var")}}</li>
 <li>{{jsxref("Statements/function", "function")}}</li>
</ul>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неверные_варианты">Неверные варианты</h3>

<pre class="brush: js example-bad">function f() {
  var x = 3;
  x += 4;
  return x;   //return завершает функцию немедленно,
  x -= 3;     //поэтому эта строка никогда не запустится; она недоступна
}

function f() {
  return     //эта строка трактуется как завершение функции оператором `return;`,
    3 + 4;   //поэтому происходит выход из функции, и эта строка не выполнится
}
</pre>

<h3 id="Верные_варианты">Верные варианты</h3>

<pre class="brush: js example-good">function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  //OK: return находится после всех остальных выражений
}

function f() {
  return 3 + 4  //OK: return без точки с запятой и вычисляемое выражение находятся на одной строке
}
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}</li>
</ul>

<div id="dc_vk_code" class="hidden"> </div>
