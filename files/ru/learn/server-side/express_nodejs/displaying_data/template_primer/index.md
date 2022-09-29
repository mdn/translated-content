---
title: Основы шаблонов
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
---
<p>Шаблон - это текстовый файл, определяющий <em>структуру</em>, или внешний вид выходного файла, с предусмотренными позициями, в которые будут помещаться данные при отображении по шаблону (в <em>Express</em> шаблоны также называют <em>представлениями</em>).</p>

<h2 id="Выбор_шаблонов_Express">Выбор шаблонов Express</h2>

<p>В Express можно использовать много движков отображающих шаблонов ( <a class="external external-icon" href="https://expressjs.com/en/guide/using-template-engines.html" rel="noopener">template rendering engines</a>). В этом руководстве для шаблонов будет использован <a class="external external-icon" href="https://pugjs.org/api/getting-started.html" rel="noopener">Pug</a> (ранее известный как Jade) . Это наиболее популярный в  Node язык шаблонов, который о себе заявляет так: чистый, чувствительный к пробелам синтаксис для написания HTML, на который сильно повлиял <a class="external external-icon" href="http://haml.info/" rel="noopener">Haml</a>.</p>

<p>Разные языки шаблонов используют различные подходы для определения внешнего вида и разметки позиций для данных—некоторые используют HTML для определения внешнего вида, тогда как другие применяют различные форматы разметки, которые затем должны компилироваться в  HTML. Pug - второго типа; он использует <em>представление</em> (<em>representation) </em> HTML, в котором первое слово в каждой строке обычно представляет элемент HTML, а отступы в следующих строках применяются, чтобы представить вложенные элементы. Результатом является определение страницы, которое транслируется непосредственно в HTML, и которое, вероятно, более краткое и легче читается.</p>

<div class="note">
<p><strong>Примечание:</strong> недостаток применения <em>Pug</em> - это чувствительность к отступам и пробелам (если добавить лишний пробел в "плохом" месте, можно получить невразумительный код ошибки). Однако, если ваши шаблоны уже действуют, их очень легко читать и поддерживать.</p>
</div>

<h2 class="highlight-spanned" id="Конфигурация_шаблона">Конфигурация шаблона</h2>

<p>Когда создавался каркас (<a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">the skeleton website</a>) веб-сайта <em>LocalLibrary, </em>он был настроен  на использование <a class="external external-icon" href="https://pugjs.org/api/getting-started.html" rel="noopener">Pug</a> . Можно было заметить, что модуль pug включён в зависимости в файле <strong>package.json</strong>, и установлен (app.set(...)) как движок представлений в файле <strong>app.js</strong>. Эта установка показывает,, что движок представлений -  pug, и что  <em>Express</em> должен искать шаблоны в подкаталоге <strong>/views</strong>.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');</code></pre>

<p>Если посмотреть содержимое каталога <strong>views</strong>, можно увидеть файлы с расширением .pug, в которых шаблоны представлений по умолчанию.  Это представление  для домашней страницы (<strong>index.pug</strong>) и базовый шаблон (<strong>layout.pug</strong>), который следует заменить нашим содержимым.</p>

<pre><code>/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    <strong>index.pug</strong>
    layout.pug</code>
</pre>

<h2 class="highlight-spanned" id="Синтаксис_шаблонов">Синтаксис шаблонов</h2>

<p>Пример файла шаблона (ниже) демонстрирует многие наиболее полезные черты  Pug.</p>

<p>Сначала отметим, что файл отражает структуру типового HTML-файла, причём первое слов в (почти) каждой строке является элементом HTML, а отступы используются, чтобы показать вложенные элементы. Так, например, элемент <code>body</code> находится внутри элемента <code>html</code>, а элементы <code>p</code>  (параграфы) - внутри элемента <code>body,</code> и так далее. Невложенные элементы (т.е. индивидуальные параграфы) располагаются в отдельных строках.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">doctype html
html(lang="en")
  head
    title= title
    script(type='text/javascript').
  body
    h1= title

    p This is a line with #[em some emphasis] and #[strong strong text] markup.
    p This line has un-escaped data: !{'&lt;em&gt; is emphasised&lt;/em&gt;'} and escaped data: #{'&lt;em&gt; is not emphasised&lt;/em&gt;'}.
      | This line follows on.
    p= 'Evaluated and &lt;em&gt;escaped expression&lt;/em&gt;:' + title

    &lt;!-- You can add HTML comments directly --&gt;
    // You can add single line JavaScript comments and they are generated to HTML comments
    //- Introducing a single line JavaScript comment with "//-" ensures the comment isn't rendered to HTML

    p A line with a link
      a(href='/catalog/authors') Some link text
      |  and some extra text.

    #container.col
      if title
        p A variable named "title" exists.
      else
        p A variable named "title" does not exist.
      p.
        Pug is a terse and simple template language with a
        strong focus on performance and powerful features.

    h2 Generate a list

    ul
      each val in [1, 2, 3, 4, 5]
        li= val</code></pre>

<p>Атрибуты элементов определены в скобках после соответствующих элементов. В скобках располагается список пар <em>имя атрибута=значение,</em>причём элементы списка разделяются запятой или пробелом. Например:</p>

<ul>
 <li><code>script(type='text/javascript')</code>, <code>link(rel='stylesheet', href='/stylesheets/style.css')</code></li>
 <li><code>meta(name='viewport' content='width=device-width initial-scale=1')</code></li>
</ul>

<p>Значения всех атрибутов <em>экранируются</em> (т.е. такие символы как "<code>&gt;</code>" заменяются эквивалентными кодами HTML как "<code>&amp;gt;"</code>) , чтобы предотвратить JavaScript инъекции и межсайтовые атаки.</p>

<p>Если после тэга стоит знак = , следующий текст рассматривается как <em>выражение</em> JavaScript. Например, ниже в первой строке, содержимое тэга <code>h1</code> будет <em>переменной </em> <code>title</code> (которая определена в файле или передана в шаблон из Express). Во второй строке содержимое параграфа - это текстовая строка, соединённая с переменной  <code>title</code> . В каждом из случаев поведение по умолчанию - экранировать строки.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">h1= title
p= 'Evaluated and &lt;em&gt;escaped expression&lt;/em&gt;:' + title</code></pre>

<p>Если после тэга знак = отсутствует, тогда содержимое рассматривается как обычный текст. Внутри текста можно вставить экранированные или неэкранированные данные, применяя синтаксис  <code>#{}</code> и<code> !{}</code>, как показано ниже. В простой текст можно также вставлять "сырой" HTML.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'&lt;em&gt; is emphasised&lt;/em&gt;'}, an escaped string: #{'&lt;em&gt; is not emphasised&lt;/em&gt;'}, and escaped variables: #{title}.</code></pre>

<div class="note">
<p><strong>Совет:</strong> Почти всегда желательно экранировать данные, полученные от пользователей (при помощи синтаксиса <strong><code>#{}</code></strong> ). Данные, которым можно верить (т.е. подсчитанное количество  записей,  могут быть выведены без экранирования значений.</p>
</div>

<p>Можно использовать символ конвейера ('<strong>|</strong>') в начале строки, чтобы отметить простой текст ("<a class="external external-icon" href="https://pugjs.org/language/plain-text.html" rel="noopener">plain text</a>"). Например, дополнительный текст, приведённый ниже, будет показан в той же строке, что и предыдущий, но не будет относиться к ссылке.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">a(href='http://someurl/') Link text
| Plain text</code></pre>

<p>Pug позволяет выполнять условные операции <code>if</code>, <code>else</code> , <code>else if</code> и <code>unless</code>— пример приведён ниже:</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">if title
  p Переменная с именем "title" существует
else
  p Переменной с именем "title" не существует</code></pre>

<p>Можно также выполнять циклы (итерации), применяя синтаксис <code>each-in</code> или <code>while</code> . Фрагмент кода (ниже)  содержит цикл по элементам массива, чтобы показать список элементов (отметим применение 'li=' для оценки "val" как переменной). Значение итератора val может быть также передано в шаблон как переменная!</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">ul
  each val in [1, 2, 3, 4, 5]
    li= val</code></pre>

<p>Синтаксис разрешает также комментарии (которые попадут в результат или нет, по вашему желанию), смеси для создания повторно используемых блоков кода, операторы выбора case, и много другого. Более подробная информация - в документации <a class="external external-icon" href="https://pugjs.org/api/getting-started.html" rel="noopener">The Pug docs</a>.</p>

<h2 class="highlight-spanned" id="Расширение_шаблонов">Расширение шаблонов</h2>

<p>Принято иметь общую структуру для всех страниц сайта, включая стандартную HTML-разметку для заголовка, футера, навигации и т.д. Вместо того, чтобы заставлять разработчиков дублировать эти образцы на каждой странице, <em>Pug</em> позволяет объявить базовой шаблон, а затем модифицировать его, заменяя только те небольшие части, которые различны на каждой конкретной странице.</p>

<p>Например, базовый шаблон <strong>layout.pug,</strong> созданный в каркасе проекта, имеет такой вид:</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content</code></pre>

<p>Тэг  <code>block</code> применён для отметки разделов контента, которые могут быть заменены в производных шаблона (если блок не переопределяется, будет использования его реализация в базовом классе).</p>

<p>Умолчание для  <strong>index.pug</strong> (созданный для каркаса проекта) показывает, как можно заменить базовый шаблон. Тэг <code>extends</code> идентифицирует базовый шаблон, который следует использовать, а затем мы используем  <code>block <em>section_name,</em></code> чтобы отметить новый контент раздела, который мы заменяем.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">extends layout

block content
  h1= title
  p Welcome to #{title}</code></pre>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Proceed to the next subarticle of part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template">The LocalLibrary base template</a>.</li>
</ul>
