---
title: >-
  SyntaxError: test for equality (==) mistyped as assignment (=)?(тест на
  равенство (==) опечатка как присваивание (=)?)
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
translation_of: Web/JavaScript/Reference/Errors/Equal_as_assign
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">Warning: SyntaxError: тест на равенство (==) опечатка как присваивание (=)?
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>(Только в Firefox) {{jsxref("SyntaxError")}} предупреждение, в котором сообщается, только если <code>javascript.options.strict</code> предпочтение установлено в<code>true</code>.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Было присвоение ( = ), когда вы обычно ожидали тест на присвоение (==). Чтобы помочь отладке, JavaScript (с включёнными строгими предупреждениями) предупреждает об этом шаблоне.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Задание_в_условных_выражениях">Задание в условных выражениях</h3>

<p>Рекомендуется не использовать простые назначения в условном выражении (например, if...else), поскольку при просмотре кода назначение можно спутать с равенством. Например, не используйте следующий код:</p>

<pre class="brush: js example-bad">if (x = y) {
  // делать правильные вещи
}
</pre>

<p>Если необходимо использовать присваивание в условном выражении, то обычно вокруг него ставят дополнительные скобки. Например:</p>

<pre class="brush: js">if ((x = y)) {
  // делать правильные вещи
}</pre>

<p>В противном случае вы, вероятно, хотели использовать оператор сравнения (например, = = или ===):</p>

<pre class="brush: js">if (x == y) {
  // делать правильные вещи
}</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Comparison operators</a></li>
</ul>
