---
title: Отладка HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
tags:
  - Debugging
  - Guide
  - HTML
  - Валидация
  - Отладка
translation_of: Learn/HTML/Introduction_to_HTML/Debugging_HTML
original_slug: Learn/HTML/Введение_в_HTML/Debugging_HTML
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">Написать HTML — здорово, но как понять, где ошибка, когда что-то не работает? В этой статье описаны несколько инструментов, которые помогают искать и исправлять ошибки в HTML.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Что нужно знать:</th>
   <td>Базовые знания HTML на уровне <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B">Начало работы с HTML</a>, <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals">Основы редактирования текста в HTML</a>, и <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA">Создание гиперссылок</a>.</td>
  </tr>
  <tr>
   <th scope="row">Чему вы научитесь:</th>
   <td>Искать проблемы в HTML с помощью инструментов отладки.</td>
  </tr>
 </tbody>
</table>

<h2 id="Отладка_—_это_не_страшно">Отладка — это не страшно</h2>

<p>Во время написания какого-нибудь кода, обычно все идёт хорошо, пока не появляется тот момент, когда вы совершаете ошибку. Итак, ваш код не работает, или работает не так, как вы задумывали. Если вы попытаетесь скомпилировать неработающую программу на языке <a href="https://www.rust-lang.org/">Rust</a>, компилятор укажет на ошибку:</p>

<p><img alt="A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string." src="https://mdn.mozillademos.org/files/12435/error-message.png" style="display: block; height: 520px; margin: 0px auto; width: 711px;">В данном случае, сообщение об ошибке понять относительно просто — "unterminated double quote string". Если вы внимательно посмотрите на <code>println!(Hello, world!");</code> , то заметите, что здесь отсутствует двойная кавычка. Разумеется, сообщения об ошибках могут становиться куда более сложными для понимания по мере роста вашего кода, и даже самые простые случаи могут показаться пугающими для тех, кто ничего не знает о Rust.</p>

<p>Но не бойтесь отладки! Чтобы комфортно писать и отлаживать любой код, нужно понимать язык и его инструменты.</p>

<h2 id="HTML_и_отладка">HTML и отладка</h2>

<p>HTML не так сложен к пониманию, как Rust. HTML не компилируется в какую-либо другую форму перед тем, как браузер проанализирует это и покажет результат (он является <em>интерпретируемым</em>, а не <em>компилируемым</em>). Синтаксис HTML элементов  намного понятнее, чем у "настоящих языков программирования", таких как Rust, {{glossary("JavaScript")}}, или {{glossary("Python")}}. Способ, которым браузеры читают HTML более <strong>толерантен</strong>, чем у языков программирования, интерпретирующих свой код строже. Это одновременно и плохо, и хорошо.</p>

<h3 id="Толерантный_код">Толерантный код</h3>

<p>Так что же означает толерантный? В общих чертах, когда вы напортачили в коде, есть два типа ошибок, с которыми вы столкнётесь:</p>

<ul>
 <li><strong>Синтаксические ошибки (Syntax errors)</strong>: Это ошибки в правильности написания, как это было выше, в примере с Rust. Такие обычно легко исправлять, в той мере, в какой вы знакомы с синтаксисом языка и знаете, что означают сообщения об ошибках.</li>
 <li><strong>Логические ошибки (Logic errors)</strong>: Это ошибки, появляющиеся в том случае, если синтаксис корректен, но код не выполняет своего предназначения, то есть программа выполняется неверно. Такие исправлять сложнее, чем синтаксические, поскольку не выводится сообщений, указывающих место, где вы ошиблись.</li>
</ul>

<p>HTML не страдает от синтаксических ошибок, потому что браузер читает код толерантно, в том смысле, что страницы могут отображаться даже если синтаксические ошибки присутствуют. Браузеры имеют встроенные правила по интерпретации неверно написанной разметки, и вы можете запустить что-либо, даже если вы имели в виду другое. Это может стать настоящей проблемой!</p>

<div class="note">
<p><strong>На заметку</strong>: HTML читается толерантно, потому что когда веб только появился, было решено позволить людям публиковать контент даже при условии некорректностей в коде, так как это куда более важно, чем уверенность в абсолютно верном синтаксисе. Веб не был бы сейчас так популярен, если бы относился к новичкам строго.</p>
</div>

<h3 id="Активное_обучение_Знакомство_с_толерантным_кодом">Активное обучение: Знакомство с толерантным кодом</h3>

<p>Время изучить природу толерантного кода в HTML.</p>

<ol>
 <li>Для начала, скачайте наш <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">пример отладки</a> и сохраните локально. Эта демонстрация намеренно написана с ошибками, которые нам предстоит обнаружить.</li>
 <li>Далее, откройте её в браузере. Вы увидите нечто вроде этого :<img alt="A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. " src="https://mdn.mozillademos.org/files/12437/badly-formed-html.png" style="display: block; margin: 0 auto;"></li>
 <li>Сейчас документ выглядит не особо хорошо; Давайте посмотрим в код и выясним почему (Показано только тело документа):
  <pre class="brush: html">&lt;h1&gt;HTML debugging examples&lt;/h1&gt;

&lt;p&gt;What causes errors in HTML?

&lt;ul&gt;
  &lt;li&gt;Unclosed elements: If an element is &lt;strong&gt;not closed properly,
      then its effect can spread to areas you didn't intend

  &lt;li&gt;Badly nested elements: Nesting elements properly is also very important
      for code behaving correctly. &lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt;
      what is this?&lt;/em&gt;

  &lt;li&gt;Unclosed attributes: Another common source of HTML problems. Let's
      look at an example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla
      homepage&lt;/a&gt;
&lt;/ul&gt;</pre>
 </li>
 <li>Рассмотрим проблемы:
  <ul>
   <li>У {{htmlelement("p","параграфа")}} и {{htmlelement("li","элемента списка")}} не закрыты теги. На изображении выше видно, что разметка не пострадала, так как браузеру легко сделать вывод о том, где заканчивается один элемент и начинается другой.</li>
   <li>Первый {{htmlelement("strong")}} элемент также не имеет закрывающего тега. Это уже более проблематично, так как сложно сказать, где элемент должен заканчиваться. На деле, весь оставшийся текст был выделен жирным.</li>
   <li>Следующая часть нарушает правила вложенности: <code>&lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt; what is this?&lt;/em&gt;</code>. В этом случае код тоже сложно проинтерпретировать по причине, описанной выше.</li>
   <li>В атрибуте {{htmlattrxref("href","a")}} отсутствует закрывающая двойная кавычка. Это послужило причиной крупной проблемы — ссылка не воспроизвелась вовсе.</li>
  </ul>
 </li>
 <li>Сейчас же посмотрим, как браузер сгенерировал собственную разметку, в противовес исходной разметке документа. Чтобы сделать это, воспользуемся инструментами разработчика. Если вы не знакомы с инструментами разработчика, потратьте несколько минут на <a href="/en-US/docs/Learn/Discover_browser_developer_tools">Обзор инструментов разработки в браузерах</a>.</li>
 <li>В DOM инспекторе вы можете увидеть как сгенерировалась новая разметка: <img alt="The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text &quot;What causes errors in HTML?&quot; Here you can see that the paragraph element has been closed by the browser." src="https://mdn.mozillademos.org/files/12439/html-inspector.png" style="display: block; margin: 0 auto;"></li>
 <li>Используя DOM инспектор, давайте рассмотрим детали нашего кода, чтобы увидеть, как браузер пытается исправить наши ошибки в HTML (мы обозреваем в Firefox; другой современный браузер должен выдать те же результаты):
  <ul>
   <li>Параграфы и элементы списка получены с закрывающими тегами.</li>
   <li>Было неочевидно, где элемент <code>&lt;strong&gt;</code> должен был закрыться, так что браузер обернул каждый отдельный блок текста своими собственными тегами strong, причём до самого низа документа!</li>
   <li>Некорректная вложенность была исправлена браузером следующим образом:
    <pre class="brush: html">&lt;strong&gt;strong
  &lt;em&gt;strong emphasised?&lt;/em&gt;
&lt;/strong&gt;
&lt;em&gt; what is this?&lt;/em&gt;</pre>
   </li>
   <li>Ссылка с отсутствующими двойными кавычками была удалена насовсем. Последний элемент списка будет выглядеть так:
    <pre class="brush: html">&lt;li&gt;
  &lt;strong&gt;Unclosed attributes: Another common source of HTML problems.
  Let's look at an example: &lt;/strong&gt;
&lt;/li&gt;</pre>
   </li>
  </ul>
 </li>
</ol>

<h3 id="Валидация_HTML">Валидация HTML</h3>

<p>Из примера выше ясно, что стоит проверять валидность HTML. В простом примере сверху можно просто просмотреть весь код и найти ошибки, но как быть с огромными, сложными страницами?</p>

<p>Лучше всего проверить страницу в  <a href="https://validator.w3.org/">сервисе валидации разметки</a>. Его создал и поддерживает W3C — организация, которая занимается спецификациями HTML, CSS и других веб-технологий. Сервис проверит ваш HTML и составит отчёт по ошибкам в нем.</p>

<p><img alt="The HTML validator homepage" src="https://mdn.mozillademos.org/files/12441/validator.png" style="display: block; margin: 0 auto;"></p>

<p>HTML можно проверить по адресу, загрузив файл или напрямую ввести код HTML.</p>

<h3 id="Активное_обучение_Валидируем_HTML-документ">Активное обучение: Валидируем HTML-документ</h3>

<p>Попробуем проверить <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">документ-пример</a>.</p>

<ol>
 <li>Откройте <a href="https://validator.w3.org/">сервис валидации разметки</a> в браузере.</li>
 <li>Перейдите в режим <a href="https://validator.w3.org/#validate_by_input">Validate by Direct Input</a>.</li>
 <li>Скопируйте весь код документа (не только body) и вставьте в место для ввода.</li>
 <li>Нажмите на <em>Check (проверить)</em>.</li>
</ol>

<p>Вы увидите список ошибок и другую информацию.</p>

<p><img alt="A list of of HTML validation results from the W3C markup validation service" src="https://mdn.mozillademos.org/files/12443/validation-results.png" style="display: block; margin: 0 auto;"></p>

<h4 id="Работа_с_сообщениями_об_ошибках">Работа с сообщениями об ошибках</h4>

<p>Обычно сразу ясно, что значат сообщения, но иногда приходится постараться, чтобы понять, в чем дело. Сейчас мы пройдёмся по всем ошибкам и разберём, что они значат. Обратите внимание, что в сообщениях указаны строка и столбец кода, чтобы ошибки было проще искать.</p>

<ul>
 <li>"End tag <code>li</code> implied, but there were open elements" (2 instances): Нет явного закрывающего тега, хотя браузер догадывается, где он должен быть. Сообщение указывает на строку после той, на которой ожидался закрывающий тег, но вы найдёте нужное место.</li>
 <li>"Unclosed element <code>strong</code>":  Это очень простая ошибка — элемент {{htmlelement("strong")}} не закрыт, и сообщение указывает прямо на открывающий тег.</li>
 <li>"End tag <code>strong</code> violates nesting rules": Элемент неправильно вложен — на этом уровне нет парного открывающего тега.</li>
 <li>"End of file reached when inside an attribute value. Ignoring tag": Загадочное сообщение. Дело в том, что где-то (скорее всего, в конце документа) неправильно прописано свойство элемента, и конец файла оказался внутри этого свойства. В браузере не видно ссылки — скорее всего, проблема рядом с ней.</li>
 <li>"End of file seen and there were open elements": Файл закончился, но некоторые элементы не закрыты. Сообщение указывает на конец файла, в данном случае не закрыт элемент
  <pre>example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla homepage&lt;/a&gt; ↩ &lt;/ul&gt;↩ &lt;/body&gt;↩&lt;/html&gt;</pre>

  <div class="note">
  <p><strong>Примечание</strong>: Свойство без закрывающей кавычки может проглотить закрывающий тег — браузер считает его частью значения этого свойства.</p>
  </div>
 </li>
 <li>"Unclosed element <code>ul</code>": Странно, ведь элемент {{htmlelement("ul")}} закрыт. Настоящая проблема всё там же — элемент {{htmlelement("a")}} не закрыт из-за недостающей кавычки в свойстве.</li>
</ul>

<p>Если некоторые ошибки кажутся вам странными, начните исправление с остальных и проверьте документ ещё раз. Иногда одна ошибка ломает большую часть документа.</p>

<p>Когда вы увидите эту надпись, в вашем документе больше нет ошибок:</p>

<p><img alt='Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."' src="https://mdn.mozillademos.org/files/12445/valid-html-banner.png" style="display: block; margin: 0 auto;"></p>

<h2 id="Заключение">Заключение</h2>

<p>Теперь вы умеете отлаживать HTML. С новыми знаниями вам будет проще разобраться и в отладке более сложных языков — например, CSS и JavaScript. На этом мы заканчиваем вводный модуль курса HTML — время попробовать свои силы в упражнениях.</p>

<p>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="В_этом_модуле">В этом модуле</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B">Начало работы с HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/The_head_metadata_in_HTML">Что такое заголовок? Метаданные в HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals">Основы редактирования текста в HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA">Создание гиперссылок</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Advanced_text_formatting">Углублённое форматирование текста</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%B0">Структура документа и веб-сайта</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Debugging_HTML">Отладка HTML</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Marking_up_a_letter">Разметка письма</a></li>
 <li><a href="https://developer.mozilla.org/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Structuring_a_page_of_content">Структурируем страницу</a></li>
</ul>
