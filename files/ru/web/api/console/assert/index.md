---
title: console.assert()
slug: Web/API/Console/assert
tags:
  - API
  - Debugging
  - console
  - web console
  - Отладка
translation_of: Web/API/console/assert
---
<div>{{APIRef("Console API")}}{{Non-standard_Header}}</div>

<p>Метод <code><strong>console.assert()</strong></code> записывает сообщение об ошибке в консоль в случае, если утверждение ложно. Если утверждение истинно - ничего не происходит.</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>Важно:</strong> Реализация м<em>етода <code>console.assert()</code> в браузере и Node.js отличается.</em></p>

<p>В браузере, вызов console.assert() с ложным утверждением вызовет печать ошибки в консоль без прерывания текущего выполнения скрипта, а в Node.js в аналогичном случае будет выброшена ошибка - AssertionError.</p>
</div>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">console.assert(<em>assertion</em>, <em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.assert(<em>assertion</em>, <em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]); // си-подобное форматирование строк
</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>assertion</code></dt>
 <dd>Любое логическое утверждение. Если утверждение ложно - сообщение об ошибке записывается в консоль.</dd>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Список JavaScript объектов для вывода. Строковое представление этих объектов добавляются в порядке, указанном в списке, и выводятся.</dd>
 <dt><code>msg</code></dt>
 <dd>Строка JavaScript, содержащая ноль или более строк подстановки.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Объекты JavaScript, которыми нужно заменить строки подстановки в рамках параметра <strong>msg</strong>. Этот параметр даёт дополнительный контроль над форматированием вывода.</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<p>В следующем примере кода демонстрируется использование объекта JavaScript после утверждения:</p>

<pre class="brush: js">const errorMsg = '# не чётное число';
for (let number = 2; number &lt;= 5; number += 1) {
    console.log('# равно ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // или, при использовании {{jsxref("Operators/Object_initializer", "сокращения имён свойств в ECMAScript 2015", "Новая_нотация_в_ECMAScript_2015")}}:
    // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// # равно 2
// # равно 3
// Assertion failed: {number: 3, errorMsg: "# не чётное число"}
// # равно 4
// # равно 5
// Assertion failed: {number: 5, errorMsg: "# не чётное число"}
</pre>

<p>Обратите внимание, что хотя строка, содержащая строку подстановки, работает как параметр для <code>console.log</code> в Node и многих, если не большинстве, браузерах...</p>

<pre>console.log('слово %s', 'foo');
// output: слово foo
</pre>

<p>...использование такой строки в настоящее время не работает в качестве параметра для <code>console.assert</code> во всех браузерах:</p>

<pre class="brush: js">console.assert(false, 'слово %s', 'foo');
// корректный вывод в Node.js и некоторых браузерах
//     (например Firefox v60.0.2):
// Assertion failed: слово foo
// некорректный вывод в некоторых браузерах
//     (например Chrome v67.0.3396.87):
// Assertion failed: слово %s foo</pre>

<p>Смотрите также <a href="/ru/docs/Web/API/console#Outputting_text_to_the_console">Вывод текста в консоль</a> в документации {{domxref("console")}} для более детальной информации.</p>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>



<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
 <li><a href="https://developer.chrome.com/devtools/docs/console#assertions">Chrome Developer Tools: Using the Console</a></li>
</ul>
