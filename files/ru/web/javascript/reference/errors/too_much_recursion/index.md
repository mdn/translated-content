---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
  - Errors
  - InternalError
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Too_much_recursion
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">InternalError: too much recursion
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("InternalError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Функция, вызывающая сама себя, называется <em>рекурсивной функцией</em>. В некотором смысле рекурсия аналогична циклу. Оба выполняют один и тот же код несколько раз, и оба требуют условия (чтобы избежать бесконечного цикла или, вернее, бесконечной рекурсии в этом случае). Когда функция вызывается рекурсивно слишком много раз или бесконечно, JavaScript выдаёт эту ошибку<span class="seoSummary">.</span></p>

<h2 id="Примеры">Примеры</h2>

<p>Функция выполняется рекурсивно 10 раз, в соответствии с условием выхода:</p>

<pre class="brush: js">function loop(x) {
  if (x &gt;= 10) // "x &gt;= 10" это условие выхода
    return;
  // do stuff
  loop(x + 1); // рекурсивный вызов
}
loop(0);</pre>

<p>В условии установлено слишком большое значение, не будет работать:</p>

<pre class="brush: js example-bad">function loop(x) {
  if (x &gt;= 1000000000000)
    return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{Glossary("Recursion")}}</li>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Functions#Рекурсия">Рекурсия</a></li>
</ul>
