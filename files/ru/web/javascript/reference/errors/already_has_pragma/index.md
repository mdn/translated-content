---
title: >-
  Warning: -file- is being assigned a //# sourceMappingURL, but already has
  one(Внимание: -file- является в сущности назначенным //# sourceMappingURL, но
  уже имеет один)
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
translation_of: Web/JavaScript/Reference/Errors/Already_has_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Опасно: Внимание: -file- является в сущности назначенным //# sourceMappingURL, но уже имеет один)</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>Предупреждение. Выполнение скрипта не будет остановлено.</p>

<h2 id="Что_вы_сделали_не_так">Что вы сделали не так?</h2>

<p> </p>

<p>Для данного источника JavaScript исходная карта была указана несколько раз.</p>

<p>Источники JavaScript часто объединяются и минимизируются, чтобы сделать их доставку с сервера более эффективной. С помощью сопоставлений исходного кода отладчик может сопоставить выполняемый код с исходными файлами. Существует два способа назначения исходной карты: с помощью комментария или путём установки заголовка для файла JavaScript.</p>

<p> </p>

<h2 id="Примеры">Примеры</h2>

<p>Настройка исходной карты с помощью комментария в файле:</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>Или, в качестве альтернативы, вы можете установить заголовок, на ваш JavaScript файл :</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">How to use a source map – Firefox Tools documentation</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to source maps – HTML5 rocks</a></li>
</ul>
