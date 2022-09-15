---
title: Реализация функции обнаружения
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
translation_of: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}</div>

<p class="summary">Обнаружение функций включает определение того, поддерживает ли браузер определённый блок кода, и выполнение другого кода в зависимости от того, поддерживает ли он или нет, так что браузер всегда может обеспечить работу, а не сбой / ошибку в некоторых браузерах. В этой статье подробно описывается, как написать собственное простое обнаружение функций, как использовать библиотеку для ускорения реализации, а также встроенные функции для обнаружения функций, такие как <code>@supports</code>.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Предусловия:</th>
   <td>Знакомство с основными языками <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>, и  <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>; идея высокого уровня <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">принципов кросс-браузерного тестирования.</a>.</td>
  </tr>
  <tr>
   <th scope="row">Задача:</th>
   <td>Понять, что такое концепция выявления функций, и уметь внедрять подходящие решения в CSS и JavaScript.</td>
  </tr>
 </tbody>
</table>

<h2 id="Концепция_обнаружения_функций.">Концепция обнаружения функций.</h2>

<p>Идея обнаружения функции заключается в том, что вы можете запустить тест, чтобы определить, поддерживается ли функция в текущем браузере, а затем условно запустить код, чтобы обеспечить приемлемый опыт как в браузерах, которые поддерживают функцию, так и в браузере, который не поддерживает. Если вы этого не сделаете, браузеры, которые не поддерживают функции, которые вы используете в своём коде, не будут отображать ваши сайты должным образом и просто не сработают, создавая плохой опыт пользователя.</p>

<p>Давайте подведём итоги и посмотрим на пример, который мы затронули в нашем документе <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Feature_detection">Решение самых распространённых проблем JavaScript</a>— <a href="/en-US/docs/Web/API/Geolocation/Using_geolocation">Использование геолокации</a> (который предоставляет доступные данные о местоположении для устройства, на котором работает веб-браузер) есть основная точка входа для его использования, свойство <code>geolocation,</code>  доступное на глобальном объекте <a href="/en-US/docs/Web/API/Navigator">Navigator</a>. Следовательно, вы можете определить, поддерживает ли браузер геолокацию или нет, используя что-то вроде следующего:</p>

<pre class="language-js">if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}</pre>

<p>Однако, вероятно, лучше использовать установленную библиотеку обнаружения объектов, а не писать свою собственную все время. Modernizr - это отраслевой стандарт для тестирования функций, и мы рассмотрим это позже.</p>

<p>Прежде чем мы продолжим, мы хотели бы сразу сказать одну вещь - не путайте обнаружение функций с <strong>перехватом браузера</strong> (обнаружение того, какой конкретный браузер обращается к сайту) - это ужасная практика, от которой следует отказаться любой ценой. См. <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_bad_browser_sniffing_code">Использование плохого кода перехвата браузера</a> для дополнительной информации.</p>

<h2 id="Написание_ваших_собственных_тестов_обнаружения_функций">Написание ваших собственных тестов обнаружения функций</h2>

<p>В этом разделе мы рассмотрим реализацию ваших собственных тестов обнаружения функций как в CSS, так и в JavaScript.</p>

<h3 id="CSS">CSS</h3>

<p>Вы можете написать тесты для функций CSS, протестировав существование <em><a href="/en-US/docs/Web/API/HTMLElement/style">element.style.property</a></em> (например, <code>paragraph.style.transform</code>) в JavaScript.</p>

<p>Классическим примером может быть проверка поддержки <a href="/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a> в браузере; для браузеров, которые поддерживают новейшие спецификации Flexbox, мы могли бы использовать гибкую и надёжную гибкую компоновку. Для браузеров, которые этого не делают, мы могли бы использовать плавающий макет, который работает нормально, хотя он немного более хрупкий и хакерский, и не такой привлекательный.</p>

<p>Давайте реализуем что-то, что демонстрирует это, хотя мы пока оставим это простым.</p>

<ol>
 <li>Начните с создания локальных копий наших файлов <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect.html">css-feature-detect.html</a></code>, <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/flex-layout.css">flex-layout.css</a></code>, <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/float-layout.css">float-layout-css</a></code>, и <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/basic-styling.css">basic-styling.css</a></code>. Сохраните их в новой дирекции.</li>
 <li>Мы добавим HTML5 Shiv и в наш пример, чтобы семантические элементы HTML5 правильно стилизовались в старых версиях IE. Загрузите последнюю версию  (См. <a href="https://github.com/aFarkas/html5shiv#manual-installation">Ручная установка</a>), разархивируйте ZIP, скопируйте файлы <code>html5shiv-printshiv.min.js</code> и <code>html5shiv.min.js</code> в ваш пример дирекции и создайте ссылку на один из файлов, поместив следующее в свой {{htmlelement("title")}} элемент:
  <pre>&lt;script src="html5shiv.min.js"&gt;&lt;/script&gt;</pre>
 </li>
 <li>Посмотрите ваши примеры CSS-файлов - вы увидите, что <code>basic-styling.css</code> обрабатывает все стили, которые мы хотим дать каждому браузеру, тогда как два других CSS-файла содержат CSS, который мы хотим выборочно применять к браузеру в зависимости от  их уровни поддержки. Вы можете посмотреть на различные эффекты этих двух файлов, вручную изменив CSS-файл, на который ссылается второй элемент {{htmlelement("link")}}, но давайте вместо этого реализуем некоторый JavaScript, чтобы автоматически заменять их при необходимости.</li>
 <li>Сначала удалите содержимое атрибута <code>href</code> второго элемента <code>&lt;link&gt;</code> . Мы будем заполнять это динамически позже.</li>
 <li>Затем добавьте элемент <code>&lt;script&gt;&lt;/script&gt;</code> внизу вашего контекста (непосредственно перед закрывающим тегом <code>&lt;/body&gt;</code>).</li>
 <li>Дайте ему следующее содержание:
  <pre class="brush: js">const conditional = document.querySelector('.conditional');
const testElem = document.createElement('div');
if (testElem.style.flex !== undefined &amp;&amp; testElem.style.flexFlow !== undefined) {
  conditional.setAttribute('href', 'flex-layout.css');
} else {
  conditional.setAttribute('href', 'float-layout.css');
}</pre>
 </li>
</ol>

<p>Здесь мы берём ссылку на второй элемент <code>&lt;link&gt;</code> и создаём элемент <code>&lt;div&gt;</code> как часть нашего теста.  В нашем условном выражении мы проверяем, что свойства {{cssxref ("flex")}} и {{cssxref ("flex-flow")}} существуют в браузере. Обратите внимание, что представления JavaScript этих свойств, которые хранятся внутри объекта {{domxref ("HTMLElement.style")}}, используют нижний горбатый регистр, а не дефисы, для разделения слов.</p>

<div class="note">
<p><strong>Примечание: </strong>Если у вас возникли проблемы с выполнением этого, вы можете сравнить его с нашим кодом <a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html">css-feature-detect-finished.html</a> (см. Также <a href="http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html">живую версию</a>).</p>
</div>

<p>Когда вы сохраните все и опробуете свой пример, вы должны увидеть макет flexbox, применённый к странице, если браузер поддерживает современный flexbox, и макет float, если нет.</p>

<div class="note">
<p><strong>Примечание:</strong> Часто такой подход является излишним из-за незначительной проблемы с обнаружением функций - вы часто можете обойтись без использования префиксов нескольких поставщиков и свойств резервирования, как описано в разделе <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#CSS_fallback_behaviour">Поведение CSS-откат</a> и <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes">Обработка префиксов CSS</a>.</p>
</div>

<h4 id="supports">@supports</h4>

<p>Недавно, в CSS появился собственный механизм обнаружения собственных функций — {{cssxref("@supports")}} at-rule. Это работает аналогично <a href="/en-US/docs/Web/CSS/Media_Queries">медиавыражениям</a> (см. Также <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Responsive_design_problems">Адаптивные проблемы дизайна</a>) — за исключением того, что вместо выборочного применения CSS в зависимости от медиа-функции, такой как разрешение, ширина экрана или соотношение сторон, выборочно применяется CSS в зависимости от того, поддерживается ли функция CSS.</p>

<p>Например, мы могли бы переписать наш предыдущий пример для использования <code>@supports</code> — см. <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html">supports-feature-detect.html</a></code> и <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css">supports-styling.css</a></code>. Если вы посмотрите на последнее, вы увидите пару блоков <code>@supports</code> например:</p>

<pre class="brush: css">@supports (flex-flow: row) and (flex: 1) {

  main {
    display: flex;
  }

  main div {
    padding-right: 4%;
    flex: 1;
  }

  main div:last-child {
    padding-right: 0;
  }

}</pre>

<p>Этот блок at-rule применяет правило CSS только в том случае, если текущий браузер поддерживает объявления как <code>flex-flow: row</code> так и <code>flex: 1</code>. Чтобы каждое условие работало, вам необходимо включить полное объявление (а не просто имя свойства) и НЕ включать точку с запятой в конце.</p>

<p><code>@supports</code> также имеет логику <code>OR</code> и <code>NOT</code> — другой блок применяет разметку с плавающей запятой, если свойства flexbox недоступны:</p>

<pre class="brush: css">@supports not (flex-flow: row) and (flex: 1) {

  /* rules in here */

}</pre>

<p>Это может выглядеть намного удобнее, чем в предыдущем примере - мы можем выполнять все наши функции обнаружения в CSS, JavaScript не требуется, и мы можем обрабатывать всю логику в одном файле CSS, сокращая HTTP-запросы. Проблема здесь в поддержке браузера — <code>@supports</code> вообще не поддерживается в IE, а поддерживается только в самых последних версиях Safari / iOS WebKit (9 + / 9.2 +), тогда как версия JavaScript должна работать в гораздо более старых браузерах (вероятно, назад  до IE8 или 9, хотя в более старых версиях IE будут возникать дополнительные проблемы, такие как отсутствие поддержки {{domxref ("Document.querySelector")}} и наличие испорченной блочной модели).</p>

<h3 id="JavaScript">JavaScript</h3>

<p>Мы уже видели пример теста на обнаружение функций JavaScript ранее. Как правило, такие тесты выполняются по одному из следующих общих шаблонов:</p>

<table class="standard-table">
 <caption>Краткое изложение методов обнаружения функций JavaScript</caption>
 <thead>
  <tr>
   <th scope="col">Тип обнаружения функции</th>
   <th scope="col">Объяснение</th>
   <th scope="col">Пример</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><em>Если член в объекте</em></td>
   <td>Проверьте, существует ли определённый метод или свойство (обычно точка входа в использование API или другой функции, которую вы обнаруживаете) в его родительском объекте.</td>
   <td>
    <p><code>if("geolocation" in navigator) { ... }</code></p>
   </td>
  </tr>
  <tr>
   <td><em>Свойство на элементе</em></td>
   <td>Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, а затем проверьте, существует ли свойство для него.  Показанный пример является способом определения поддержки  <a href="/en-US/docs/Web/API/Canvas_API">HTML5 Canvas</a>.</td>
   <td><code>function supports_canvas() {<br>
    return !!document.createElement('canvas').getContext;<br>
    }<br>
    <br>
    if(supports_canvas()) { ... }</code></td>
  </tr>
  <tr>
   <td><em>Метод на возвращаемое значение элемента</em></td>
   <td>Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, а затем проверьте, существует ли метод для него.  Если это так, проверьте, какое значение он возвращает.</td>
   <td>См. <a href="http://diveinto.html5doctor.com/detect.html#video-formats">Dive Into HTML5 Video Formats detection</a>.</td>
  </tr>
  <tr>
   <td><em>Свойство на сохраняемое значение элемента</em></td>
   <td>Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, установите для свойства определённое значение, затем проверьте, сохраняется ли значение.</td>
   <td>См. <a href="http://diveinto.html5doctor.com/detect.html#input-types">Dive into HTML5 <code>&lt;input&gt;</code> types detection</a>.</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Примечание:</strong> Двойное <code>NOT</code> в приведённом выше примере (<code>!!</code>) это способ заставить возвращаемое значение стать «правильным» логическим значением, а не {{glossary("Truthy")}}/{{glossary("Falsy")}} значение, которое может исказить результаты.</p>
</div>

<p>Страница <a href="http://diveinto.html5doctor.com/detect.html">Погружение в HTML5 Обнаружение функций HTML5</a> содержит гораздо больше полезных тестов для обнаружения функций, помимо перечисленных выше, и вы можете найти тест обнаружения функций для большинства вещей, выполнив поиск «обнаружение поддержки для ВАШИ-ФУНКЦИИ-ЗДЕСЬ» в своей любимой поисковой системе. Имейте в виду, однако, что некоторые функции, как известно, не обнаруживаются - см. список Modernizr <a href="https://github.com/Modernizr/Modernizr/wiki/Undetectables">Необнаруживаемые</a>.</p>

<h4 id="matchMedia">matchMedia</h4>

<p>Мы также хотели упомянуть функцию JavaScript {{domxref("Window.matchMedia")}} на этом этапе. Это свойство, которое позволяет вам запускать тесты медиавыражений внутри JavaScript. Это выглядит так:</p>

<pre class="brush: js">if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}</pre>

<p>В качестве примера, наша демо версия <a href="https://github.com/chrisdavidmills/snapshot">Snapshot</a> использует её для выборочного применения библиотеки Brick JavaScript и её использования для обработки макета пользовательского интерфейса, но только для небольшого экрана (шириной 480 пикселей или меньше). Сначала мы используем атрибут <code>media</code>,чтобы применить CSS-код Brick к странице, только если ширина страницы составляет 480px или меньше:</p>

<pre class="brush: css">&lt;link href="dist/brick.css" type="text/css" rel="stylesheet" media="all and (max-width: 480px)"&gt;</pre>

<p>Затем мы используем <code>matchMedia()</code> в JavaScript несколько раз, чтобы запускать функции навигации Brick только в том случае, если мы на маленьком экране (в более широких экранах все можно увидеть сразу, поэтому нам не нужно переходить между различными изображениями).</p>

<pre class="brush: js">if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}</pre>

<h2 id="Использование_Modernizr_для_реализации_обнаружения_функций">Использование Modernizr для реализации обнаружения функций</h2>

<p>Можно реализовать свои собственные тесты обнаружения функций, используя методы, подобные тем, которые подробно описаны выше. Вы можете также использовать специальную библиотеку обнаружения функций, так как она всё упрощает. Основой всех библиотек обнаружения функций является <a href="https://modernizr.com/">Modernizr</a>, и он может обнаружить практически все, что вам когда-либо понадобится. Давайте посмотрим, как его использовать.</p>

<p>Когда вы экспериментируете с Modernizr, вы также можете использовать сборку разработки, которая включает в себя все возможные тесты обнаружения функций. Скачать:</p>

<ol>
 <li>Нажав на ссылку <a href="https://modernizr.com/download?do_not_use_in_production">Сборка разработки</a>.</li>
 <li>Нажав на большую розовую кнопку <em>Build</em> на появившейся странице.</li>
 <li>Нажав на верхнюю ссылку <em>Download</em> в появившемся диалоговом окне.</li>
</ol>

<p>Сохраните его где-нибудь разумно, например, в директории, для которой вы создавали другие примеры в этой статье.</p>

<p>Когда вы используете Modernizr в рабочей среде, вы можете перейти на <a href="https://modernizr.com/download">Страницу скачивания</a> которую вы уже посетили, и нажимать кнопки плюс только для тех функций, которые вам нужны. Затем, когда вы нажмёте кнопку <em>Build</em> вы загрузите пользовательскую сборку, содержащую только те функции, которые обнаружены, что позволит значительно уменьшить размер файла.</p>

<h3 id="CSS_2">CSS</h3>

<p>Давайте посмотрим, как Modernizr работает с точки зрения избирательного применения CSS.</p>

<ol>
 <li>Во-первых, создайте копию <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html">supports-feature-detect.html</a></code> и <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css">supports-styling.css</a></code>. Сохраните их как <code>modernizr-css.html</code> и <code>modernizr-css.css</code>.</li>
 <li>Обновите ваш элемент {{htmlelement ("link")}} в своём HTML-коде, чтобы он указывал на правильный файл CSS (также следует обновить элемент {{htmlelement ("title")}} на что-то более подходящее!):
  <pre class="brush: html">&lt;link href="modernizr-css.css" rel="stylesheet"&gt;</pre>
 </li>
 <li>Над этим элементом <code>&lt;link&gt;</code> добавьте элемент {{htmlelement ("script")}}, чтобы применить библиотеку Modernizr к странице, как показано ниже. Это должно быть применено к странице перед любым CSS (или JavaScript), который может её использовать.
  <pre class="brush: html">&lt;script src="modernizr-custom.js"&gt;&lt;/script&gt;</pre>
 </li>
 <li>Теперь отредактируйте открывающий тег <code>&lt;html&gt;</code>, чтобы он выглядел так:
  <pre class="brush: html">&lt;html class="no-js"&gt;</pre>
 </li>
</ol>

<p>На этом этапе попробуйте загрузить свою страницу, и вы получите представление о том, как Modernizr работает с функциями CSS. Если вы посмотрите на инспектор DOM инструментов разработчика вашего браузера, вы увидите, что Modernizr обновил значение вашего <code>&lt;html&gt;</code> <code>class</code> следующим образом:</p>

<pre>&lt;html class="js no-htmlimports sizes flash transferables applicationcache blobconstructor
blob-constructor cookies cors ...AND LOADS MORE VALUES!&gt;</pre>

<p>Теперь он содержит большое количество классов, которые указывают на состояние поддержки различных функций. Например, если браузер вообще не поддерживает flexbox, <code>&lt;html&gt;</code> будет присвоено имя класса <code>no-flexbox</code>. Если бы он поддерживал современный flexbox, он получил бы имя класса <code>flexbox</code>. Если вы выполните поиск в списке классов, вы также увидите другие, относящиеся к flexbox, например:</p>

<ul>
 <li><code>flexboxlegacy</code> для старой спецификации flexbox (2009).</li>
 <li><code>flexboxtweener</code> для промежуточного синтаксиса 2011 года, поддерживаемого IE10.</li>
 <li><code>flexwrap</code> для свойства {{cssxref ("flex-wrap")}}, которого нет в некоторых реализациях.</li>
</ul>

<div class="note">
<p><strong>Примечание:</strong> вы можете найти список того, что означают все имена классов — см.  <a href="https://modernizr.com/docs#features">Функции, обнаруженные Modernizr</a>.</p>
</div>

<p>Далее, давайте обновим наш CSS, чтобы использовать Modernizr вместо <code>@supports</code>. Перейдите в <code>modernizr-css.css</code>, и замените два блока <code>@supports</code> следующим:</p>

<pre class="brush: css">/* Properties for browsers with modern flexbox */

.flexbox main {
  display: flex;
}

.flexbox main div {
  padding-right: 4%;
  flex: 1;
}

.flexbox main div:last-child {
  padding-right: 0;
}

/* Fallbacks for browsers that don't support modern flexbox */

.no-flexbox main div {
  width: 22%;
  float: left;
  padding-right: 4%;
}

.no-flexbox main div:last-child {
  padding-right: 0;
}

.no-flexbox footer {
  clear: left;
}</pre>

<p>Так как же это работает? Поскольку все эти имена классов были помещены в элемент <code>&lt;html&gt;</code> вы можете настроить таргетинг на браузеры, которые поддерживают или не поддерживают функцию, используя определённые селекторы-потомки. Поэтому здесь мы применяем верхний набор правил только для браузеров, которые поддерживают flexbox, а нижний набор правил - только для браузеров, которые не поддерживают (<code>no-flexbox</code>).</p>

<div class="note">
<p><strong>Примечание:</strong> Имейте в виду, что все тесты функций HTML и JavaScript Modernizr также представлены в этих именах классов, так что вы можете свободно применять CSS выборочно в зависимости от того, поддерживает ли браузер функции HTML или JavaScript, если это необходимо.</p>
</div>

<div class="note">
<p><strong>Примечание:</strong> Если у вас возникли проблемы с выполнением этого, проверьте ваш код по файлам <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html">modernizr-css.html</a></code> и <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.css">modernizr-css.css</a></code> (см. Также этот запуск в реальном времени).</p>
</div>

<h3 id="JavaScript_2">JavaScript</h3>

<p>Modernizr также одинаково хорошо подготовлен для реализации функций обнаружения JavaScript. Это достигается за счёт того, что глобальный объект <code>Modernizr</code> становится доступным для страницы, к которой он применяется, и содержит результаты функции, определяемой как свойства <code>true</code>/<code>false</code>.</p>

<p>Например, загрузите наш пример <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html">modernizr-css.html</a></code> в своём браузере, затем попробуйте перейти на консоль JavaScript и набрать  <code>Modernizr.</code>, а после некоторые из этих имён классов (они тоже здесь одинаковы). Например:</p>

<pre>Modernizr.flexbox
Modernizr.websqldatabase
Modernizr.xhr2
Modernizr.fetch</pre>

<p>Консоль вернёт значения <code>true</code>/<code>false</code>, чтобы указать, поддерживает ли ваш браузер эти функции или нет.</p>

<p>Давайте посмотрим на пример, чтобы показать, как вы бы пользовали эти свойства.</p>

<ol>
 <li>Прежде всего, сделайте локальную копию файла примера <code><a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html">modernizr-js.html</a></code>.</li>
 <li>Присоедините библиотеку Modernizr к HTML, используя элемент <code>&lt;script&gt;</code> , как мы делали в предыдущих демонстрациях. Поместите его над существующим элементом <code>&lt;script&gt;</code> который прикрепляет API Google Maps к странице.</li>
 <li>Затем заполните текст-заполнитель <code>YOUR-API-KEY</code> во втором элементе <code>&lt;script&gt;</code> (как он есть сейчас) действительным ключом API Google Maps. Чтобы получить ключ, войдите в учётную запись Google, перейдите на страницу <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">Получить ключ / Аутентификация</a> затем нажмите синюю кнопку <em>Get a Key</em> и следуйте инструкциям.</li>
 <li>Наконец, добавьте ещё один элемент <code>&lt;script&gt;</code> внизу тела HTML (непосредственно перед тегом <code>&lt;/body&gt;</code> ) и поместите следующий скрипт в теги:
  <pre class="brush: js">if (Modernizr.geolocation) {

  navigator.geolocation.getCurrentPosition(function(position) {

    let latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    let myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  });

} else {
  const para = document.createElement('p');
  para.textContent = 'Argh, no geolocation!';
  document.body.appendChild(para);
}</pre>
 </li>
</ol>

<p>Опробуйте свой пример! Здесь мы используем тест <code>Modernizr.geolocation</code>, чтобы проверить, поддерживается ли геолокация текущим браузером. Если это так, мы запускаем некоторый код, который получает текущее местоположение вашего устройства и отображает его на карте Google.</p>

<h2 id="Подведение_итогов">Подведение итогов</h2>

<p>В этой статье было рассмотрено обнаружение функций с достаточным количеством подробностей, рассмотрены основные концепции и показано, как реализовать свои собственные тесты обнаружения функций и использовать библиотеку Modernizr для более лёгкой реализации тестов.</p>

<p>Далее мы начнём изучать автоматизированное тестирование.</p>

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}</p>

<h2 id="В_этом_модуле">В этом модуле</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Введение в кросс-браузерное тестирование</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies">Стратегии проведения тестирования</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS">Решение распространённых проблем HTML и CSS</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript">Решение распространённых проблем JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility">Решение распространённых проблем доступности</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">Реализация функции обнаружения</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">Введение в автоматизированное тестирование</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment">Настройка собственной среды автоматизации тестирования</a></li>
</ul>
