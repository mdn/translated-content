---
title: 'Ошибка Ссылки: устаревший вызывающий объект или использование аргументов'
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
tags:
  - JavaScript
  - Ошибки
  - Строгий режим
  - предупреждение
translation_of: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Messageсообщение">Message(сообщение)</h2>

<pre class="syntaxbox">TypeError(Ошибка Типа): 'arguments', 'callee' и 'caller' являются ограниченными свойствами функции и не могут быть доступны в этом контексте (EDGE)
Warning: ReferenceError(Ошибка Ссылки): deprecated caller usage (устаревшие использование вызывающего абонента Firefox)
Warning: ReferenceError(Ошибка Ссылки): deprecated arguments usage (использование устаревших аргументов Firefox)
TypeError(Ошибка Типа): 'callee' и 'caller' (не может быть доступен в строгом режиме safari)
</pre>

<h2 id="Error_type_Тип_ошибки">Error type (Тип ошибки)</h2>

<p>Предупреждение строгого режима, при котором произошла операция {{jsxref("ReferenceError")}} выполнение JavaScript не будет остановлено.</p>

<h2 id="What_went_wrongЧто_пошло_не_так">What went wrong?(Что пошло не так?)</h2>

<p>В строгом режиме используются свойства {{jsxref("Function.caller")}} или {{jsxref("Function.arguments")}} которых не должны быть. Они являются устаревшими, потому что они утечка вызывающей функции, являются нестандартными, и их трудно оптимизировать, и это потенциально опасный для производительности компонент. </p>

<h2 id="ExamplesПримеры">Examples(Примеры)</h2>

<h3 id="Устаревшая_function.caller_или_arguments.callee.caller">Устаревшая <code>function.caller</code> или <code>arguments.callee.caller</code></h3>

<p>{{jsxref("Function.caller")}} и <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code> являются устаревшими (Дополнительные сведения см. в справочных статьях).</p>

<pre class="brush: js example-bad">'use strict';

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: устаревшее использование вызывающего абонента
// "функция была вызвана сверху!"</pre>

<h3 id="Function.arguments"><code>Function.arguments</code></h3>

<p>{{jsxref("Function.arguments")}} является устаревшим (Дополнительные сведения см. в справочной статье).</p>

<pre class="brush: js example-bad">'use strict';

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n &gt; 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: использование устаревших аргументов
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features">Deprecated and obsolete features</a> (Устаревшие функции)</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a> (строгий режим)</li>
 <li>{{jsxref("Function.arguments")}}</li>
 <li>{{jsxref("Function.caller")}} и <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code></li>
</ul>
