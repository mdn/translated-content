---
title: 'SyntaxError: missing : after property id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing : after property id
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>При создании объекта с помощью <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer">инициализатора объекта</a>, двоеточие (<code>:</code>) разделяет ключи и значения свойств объекта.</p>

<pre class="brush: js">var obj = { propertyKey: 'value' };
</pre>

<h2 id="Примеры">Примеры</h2>

<h3 id="Двоеточие_vs._знака_равенства">Двоеточие vs. знака равенства</h3>

<p>Этот код не работает, потому что знак равенства не может быть использован при инициализации объекта.</p>

<pre class="brush: js example-bad">var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
</pre>

<p>Корректно будет использовать двоеточие или квадратные скобки для назначения нового свойства после того, как объект уже был создан.</p>

<pre class="brush: js example-good">var obj = { propertyKey: 'value' };

// or alternatively

var obj = { };
obj['propertyKey'] = 'value';
</pre>

<h3 id="Пустые_свойства">Пустые свойства</h3>

<p>Вы не можете создать пустые свойства, подобные этому:</p>

<pre class="brush: js example-bad">var obj = { propertyKey; };
// SyntaxError: missing : after property id
</pre>

<p>Если вам необходимо задать свойство без значения, то вы можете использовать {{jsxref("null")}}.</p>

<pre class="brush: js example-good">var obj = { propertyKey: null };</pre>

<h3 id="Вычисляемые_свойства">Вычисляемые свойства</h3>

<p>Если вы создаёте ключ свойства из выражения, то вам необходимо использовать квадратные скобки. В противном случае имя свойства не будет вычислено:</p>

<pre class="brush: js example-bad">var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
</pre>

<p>Поместите выражение в скобки <code>[]</code>:</p>

<pre class="brush: js example-good">var obj = { ['b'+'ar']: 'foo' };</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer">Инициализатор объекта</a></li>
</ul>
