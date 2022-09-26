---
title: console.error()
slug: Web/API/Console/error
translation_of: Web/API/Console/error
---
<div>{{APIRef("Console API")}}</div>

<p>Выводит сообщение об ошибке в веб-консоль.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">console.error(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.error(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
console.exception(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.exception(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<div class="note">
<p><strong>Примечание:</strong> <code>console.exception()</code> -- это псевдоним для <code>console.error()</code>; они функционально идентичны.</p>
</div>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Список объектов JavaScript для вывода. Строковое представление каждого из этих объектов объединяются в указанном порядке и выводятся.</dd>
 <dt><code>msg</code></dt>
 <dd>Строка JavaScript, содержащая 0 или более <a href="/ru/docs/Web/API/console#Using_string_substitutions">подстановочных символов</a> для замены.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Объекты JavaScript, с помощью которых произойдёт замена символов в msg. Это предоставляет дополнительный контроль над форматом вывода.</dd>
</dl>

<p>Смотрите раздел <a href="/en-US/docs/Web/API/console#Outputting_text_to_the_console">Вывод текста в консоль</a> в документации {{domxref("console")}} для подробностей.</p>

<h2 id="Спецификация">Спецификация</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings">Chrome Developer Tools: Using the Console</a></li>
</ul>
