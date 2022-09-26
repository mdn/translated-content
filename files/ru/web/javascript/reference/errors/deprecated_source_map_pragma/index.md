---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Explorer
  - JavaScript
  - SyntaxError
  - Ошибки
  - карты кода
translation_of: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>Предупреждение о том, что произошла ошибка {{jsxref("SyntaxError")}}. Выполнение скрипта не будет остановлено.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Есть устаревший синтаксис карты кода в исходном коде JavaScript.</p>

<p>Файлы JavaScript нередко объединяются и сокращаются, чтобы доставлять их с сервера более эффективно. С <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">картой кода</a>, отладчик может сопоставить код выполнения для исходных файлов.</p>

<p>Спецификация карты кода меняет синтаксис из-за конфликта с IE всякий раз, когда он был найден в странице после <code>//@cc_on</code> было интерпретировано для включения условной компиляции в IE JScript engine. <a href="https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx">Комментарий условной компиляции</a> для IE малоизвестен, и это разбивает карты кода <a href="https://bugs.jquery.com/ticket/13274">jQuery</a> и других библиотек.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Устаревший_синтаксис">Устаревший синтаксис</h3>

<p>Синтаксис с использованием знака "@" устарел.</p>

<pre class="brush: js example-bad">//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
</pre>

<h3 id="Стандартный_синтаксис">Стандартный синтаксис</h3>

<p>Используйте знак "#".</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>Или, в качестве альтернативы, вы можете установить заголовок для вашего JavaScript-файла чтобы избежать комментирования:</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="sect1"> </h2>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">Как использовать карты кода – документация Firefox Tools</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Введение в карты кода – HTML5 rocks</a></li>
</ul>
