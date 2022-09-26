---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
translation_of: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Константа это значение, которое не может быть изменено программой в процессе своего выполнения. Оно не может меняться посредством повторного назначения, и не может быть переопределено. В JavaScript константы объявляются с использованием ключевого слова <code>const</code>. Инициализация для константы является обязательной; то есть вы должны указать значение сразу же при её объявлении (что имеет смысл, учитывая, что оно не может быть изменено позже).</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Отсутствие_инициализатора_константы">Отсутствие инициализатора константы</h3>

<p>В отличие от <code>var</code> или <code>let</code>, вы должны указать значение при объявлении <code>const</code>. В противном случае возникнет ошибка:</p>

<pre class="brush: js example-bad">const COLUMNS;
// SyntaxError: missing = in const declaration</pre>

<h3 id="Исправление_ошибки">Исправление ошибки</h3>

<p>Существует несколько вариантов исправления этой ошибки. Проверьте, что должно быть достигнуто с помощью данной константы.</p>

<h4 id="Добавление_значения_константы">Добавление значения константы</h4>

<p>Укажите значение константы при её объявлении.</p>

<pre class="brush: js example-good">const COLUMNS = 80;</pre>

<h4 id="const_let_или_var"><code>const</code>, <code>let</code> или <code>var</code>?</h4>

<p>Не используйте <code>const</code>, если вы не хотели объявить константу. Возможно, вы подразумевали объявление переменную с блочной областью видимости с помощью <code>let</code> или глобальную переменную с помощью <code>var</code>. Оба варианта не требуют начального значения.</p>

<pre class="brush: js example-good">let columns;
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
</ul>
