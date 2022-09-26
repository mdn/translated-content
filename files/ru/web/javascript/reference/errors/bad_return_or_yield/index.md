---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
tags:
  - JavaScript
  - SyntaxError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/Bad_return_or_yield
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: 'return' statement outside of function (Edge)
SyntaxError: return not in function (Firefox)
SyntaxError: yield not in function (Firefox)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Вызов оператора <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code> или <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> был осуществлён вне <a href="/ru/docs/Web/JavaScript/Guide/Functions">функции</a>. Может, где-то пропущена фигурная скобка? Операторы <code>return</code> и <code>yield</code> не могут существовать вне функции, поскольку они завершают (или останавливают и возобновляют) её исполнение и указывают значение, возвращаемое в место, откуда она была вызвана.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js example-bad">var cheer = function(score) {
  if (score === 147)
    return 'Максимум!';
  };
  if (score &gt; 100) {
    return 'Столетие!';
  }
}

// SyntaxError: return not in function</pre>

<p>На первый взгляд кажется, что фигурные скобки расставлены правильно, но в данном примере пропущена <code>{</code> после первого оператора <code>if</code>. Правильный вариант:</p>

<pre class="brush: js example-good">var cheer = function(score) {
  if (score === 147) {
    return 'Максимум!';
  }
  if (score &gt; 100) {
    return 'Столетие!';
  }
};</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/return">return</a></code></li>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code></li>
</ul>
