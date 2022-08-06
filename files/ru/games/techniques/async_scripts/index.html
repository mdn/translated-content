---
title: Асинхронные скрипты для asm.js
slug: Games/Techniques/Async_scripts
tags:
  - Games
  - JavaScript
  - asm.js
  - async
translation_of: Games/Techniques/Async_scripts
---
<div>
<p><font><font>Каждая средняя или большая игра должна компилировать </font><font>код </font></font><a href="https://developer.mozilla.org/en-US/docs/Games/Tools/asm.js"><font><font>asm.js</font></font></a><font><font> как часть асинхронного скрипта, чтобы дать браузеру максимальную гибкость для оптимизации процесса компиляции. </font><font>В Gecko асинхронная компиляция позволяет движку JavaScript компилировать asm.js из основного потока когда игра загружается, и кешировать сгенерированный машинный код, так что игру не нужно компилировать при последующих загрузках (начиная с Firefox 28) , </font><font>Чтобы увидеть разницу, переключите </font></font><code>javascript.options.parallel_parsing</code><font><font>в </font></font><code>about:config</code><font><font>.</font></font></p>
</div>

<h2 id="Написание_асинхронного_скрипта"><font><font> Написание асинхронного скрипта</font></font></h2>

<p><font><font>Получить асинхронную компиляцию легко: при написании JavaScript просто используйте </font></font><code>async</code><font><font>атрибут следующим образом:</font></font></p>

<pre><code>&lt;script async src="file.js"&gt;&lt;/script&gt;</code></pre>

<p><font><font>или, чтобы сделать то же самое через скрипт:</font></font></p>

<pre><code>var script = document.createElement('script');
script.src = "file.js";
document.body.appendChild(script);</code></pre>

<p><font><font>(скрипты создаются из скрипта по умолчанию </font></font><code>async</code><font><font>.) Стандартная оболочка HTML, которую генерирует Emscripten, создаёт последнее.</font></font></p>

<h2 id="Когда_асинхронный_не_асинхронный"><font><font>Когда асинхронный не асинхронный?</font></font></h2>

<p><font><font>Две распространённые ситуации, в которых сценарий * не * асинхронен (как </font></font><a href="http://www.w3.org/TR/html5/scripting-1.html"><font><font>определено спецификацией HTML</font></font></a><font><font> ):</font></font></p>

<pre><code>&lt;script async&gt;code&lt;/script&gt;</code></pre>

<p><font><font>а также</font></font></p>

<pre><code>var script = document.createElement('script');
script.innerHTML = "code";
document.body.appendChild(script);</code></pre>

<p><font><font>Оба считаются «встроенными» скриптами, компилируются и запускаются сразу</font></font></p>

<p><font><font>Что если ваш код находится в строке JS? </font><font>Вместо использования </font></font><code>eval</code><font><font>или </font></font><code>innerHTML</code><font><font>, оба из которых запускают синхронную компиляцию, вы должны использовать BLOB-объект с URL объекта:</font></font></p>

<pre><code>var blob = new Blob([codeString]);
var script = document.createElement('script');
var url = URL.createObjectURL(blob);
script.onload = script.onerror = function() { URL.revokeObjectURL(url); };
script.src = url;
document.body.appendChild(script);</code></pre>

<p><font><font>Настройка </font></font><code>src</code><font><font>вместо настройки </font></font><code>innerHTML </code><font><font>делает этот скрипт асинхронным.</font></font></p>
