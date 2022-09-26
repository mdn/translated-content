---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/for
---
<div>{{JSRef}}</div>

<p>Метод <code><strong>Symbol.for(key)</strong></code> ищет ранее созданный разделяемый символ по заданному ключу и возвращает его, если он найден. В противном случае создаётся новый разделяемый символ для данного ключа в глобальном реестре символов.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox"><var>Symbol.for(key)</var>;</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt>key</dt>
 <dd>Строка, обязательный. Идентификатор символа (также используется в качестве описания символа).</dd>
</dl>

<h2 id="Описание">Описание</h2>

<p>В противоположность вызову <code>Symbol()</code>, функция <code>Symbol.for()</code> создаёт символ, доступный в глобальном списке реестра символов. <code>Symbol.for()</code> не создаёт новый символ при каждом вызове, вместо этого, метод сначала проверяет, существует ли символ с заданным идентификатором в реестре — и возвращает его, если тот присутствует. Если символ с заданным ключом не найден, <code>Symbol.for()</code> создаст новый глобальный символ.</p>

<h3 id="Глобальный_реестр">Глобальный реестр</h3>

<p>Глобальный реестр символов — это список со следующей структурой записей и пустой при инициализации:</p>

<table class="standard-table">
 <caption>Элемент глобального реестра символов</caption>
 <tbody>
  <tr>
   <th>Поле</th>
   <th>Значение</th>
  </tr>
  <tr>
   <td>[[key]]</td>
   <td>Строка, используемая в качестве идентификатора.</td>
  </tr>
  <tr>
   <td>[[symbol]]</td>
   <td>Символ, хранящийся глобально.</td>
  </tr>
 </tbody>
</table>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js">Symbol.for("foo"); // создаёт новый глобальный символ
Symbol.for("foo"); // возвращает символ, созданный прежде

// Одинаковый глобальный символ, но не локальный
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// Идентификатор также используется в качестве описания
var sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
</pre>

<p>Чтобы предотвратить конфликт имён ваших глобальных символов и глобальных символов из других библиотек, может оказаться неплохой идеей использование префиксов:</p>

<pre class="brush: js">Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-symbol.for', 'Symbol.for')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Изначальное определение.</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Symbol.prototype.keyFor()")}}</li>
</ul>
