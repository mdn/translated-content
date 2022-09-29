---
title: Анатомия Расширения
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
tags:
  - Расширение
  - веб расширение
translation_of: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---
<p>{{AddonSidebar}}</p>

<p>Расширение состоит из набора файлов, упакованных для распространения и установки.  В этой статье мы быстро рассмотрим файлы, которые могут присутствовать в расширении.</p>

<h2 id="manifest.json">manifest.json</h2>

<p>Это единственный файл, который должен присутствовать в каждом расширении.  Он содержит основные метаданные, такие как его имя, версию и требуемые разрешения.  Он также предоставляет указатели на другие файлы в расширении.</p>

<p>Этот манифест также может содержать указатели на несколько других типов файлов:</p>

<ul>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">Background pages</a>: Реализует долгоиграющую логику.</li>
 <li>Иконки для расширения и любых кнопок, которые оно может определить.</li>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages">Sidebars, popups, and options pages</a>: HTML-документы, которые предоставляют содержимое для различных компонентов пользовательского интерфейса.</li>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts">Content scripts</a>: JavaScript сценарии вашего расширения, которые будут исполняться на веб-страницах.</li>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Web_accessible_resources">Web-accessible resources</a>: Делает контент вашего расширения видимым для веб-страниц и скриптов.</li>
</ul>

<p><br>
 <img alt="" src="https://mdn.mozillademos.org/files/13669/webextension-anatomy.png" style="display: block; height: 581px; margin-left: auto; margin-right: auto; width: 600px;"></p>

<p>Для получения подробной информации см. справочную страницу  <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a></p>

<p>Помимо ссылок, указанных в манифесте, расширение может включать дополнительные <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Extension_pages">веб-страницы расширения</a> с поддерживающимися файлами.</p>

<h2 id="Фоновые_скрипты">Фоновые скрипты</h2>

<p>Расширения часто должны поддерживать долгосрочное состояние или выполнять долгосрочные операции независимо от срока жизни любой конкретной веб-страницы или окна браузера.  Для этого нужны фоновые сценарии.</p>

<p>Фоновые сценарии загружаются сразу после загрузки расширения и остаются загруженными до тех пор, пока расширение не будет отключено или удалено.  вы можете использовать любой <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/API">API расширений</a> в сценарии, если вы запросили необходимые <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">разрешения</a>.</p>

<h3 id="Спецификации_фоновых_скриптов">Спецификации фоновых скриптов</h3>

<p>Вы можете включить фоновый скрипт, используя <code>background</code> ключ в «manifest.json»:</p>

<pre class="brush: json">// manifest.json

"background": {
  "scripts": ["background-script.js"]
}</pre>

<p>Вы можете указать несколько фоновых сценариев: если вы это сделаете, они выполняются в том же контексте, как и несколько сценариев, загруженных на одной веб-странице.</p>

<p>Вместо указания несколько фоновых сценариев вы можете указать фоновую страницу, которая так же преимущества поддержки ES6 модулей:</p>

<p style="margin-bottom: 0em;"><strong>manifest.json</strong></p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">// manifest.json

"background": {
  "page": "background-page.html"
}</code></pre>

<p style="margin-bottom: 0em;"><strong>background-page.html</strong></p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;script type="module" src="background-script.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
&lt;/html&gt;</code></pre>

<h3 id="Окружение_фоновых_скриптов">Окружение фоновых скриптов</h3>

<h4 id="DOM_APIs">DOM APIs</h4>

<p>Фоновые скрипты запускаются в пространстве специальной страницы, называемой фоновой. Это даёт им доступ к глобальному <code><a href="/en-US/docs/Web/API/Window">window</a></code> объекту, а так же ко всем его DOM APIs.</p>

<h4 id="WebExtension_APIs">WebExtension APIs</h4>

<p>Фоновые скрипты могут использовать любые <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/API">API расширений</a>, если расширение имеет необходимые <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">разрешения</a>.</p>

<h4 id="Многоцелевой_доступ">Многоцелевой доступ</h4>

<p>Фоновые скрипты могут осуществлять XHR запросы к любому домену, если расширение имеет <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">host разрешения</a>.</p>

<h4 id="Web-содержимое">Web-содержимое</h4>

<p>Фоновые скрипты не получают прямого доступа к веб-страницам. Однако они могут загружать <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">скрипты содержимого</a> на веб-страницы и <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts">взаимодействовать с этими скриптами с помощью API передачи сообщений</a>.</p>

<h4 id="Политика_безопасности_содержимого">Политика безопасности содержимого</h4>

<p>Фоновые скрипты ограничены в выполнении потенциально опасных операций, таких как <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>, через политику безопасности содержимого. Подробнее см. <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">Content Security Policy</a>.</p>

<h2 id="Боковые_панели_(sidebar)_всплывающие_окна_(popup)_страницы_настроек">Боковые панели (sidebar), всплывающие окна (popup), страницы настроек</h2>

<p>Ваше расширение может иметь разнообразные компоненты интерфейса, определённые в HTML документах:</p>

<ul>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">Боковая панель (sidebar</a>) - это панель, отображаемая в окне браузера с левой стороны, рядом с веб-страницей</li>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">Всплывающие окна (popup</a>) - диалоговое окно, отображаемое по клику на <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">кнопке</a> на <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">панели инструментов</a> или в адресной строке</li>
 <li><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">Страница настроек</a> открывается, когда пользователь обращается к настройкам расширения на странице менеджера расширений.</li>
</ul>

<p>Для каждого из этих компонентов вы создаёте HTML файл и помещаете специальную информацию в <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a>. HTML файл может в себя включать CSS и JavaScript файлы, как и любая web-страница.</p>

<p>Всё это типы <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages">веб-страниц расширения</a>, и, в отличие от нормальных веб-страниц, ваш JavaScript может использовать все привелегии WebExtension APIs, как и ваши фоновые скрипты. Они даже могут получить доступ к переменным в фоновой странице, используя {{WebExtAPIRef("runtime.getBackgroundPage()")}}.</p>

<h2 id="Веб-страницы_расширения">Веб-страницы расширения</h2>

<p>Вы также можете включить HTML документы в ваше расширение, даже если они не будут включены в какой-либо существующий компонент пользовательского интерфейса. В отличие от документов, которые вы можете предоставить для боковых панелей, всплывающих окон или страниц настроек, эти документы не содержатся в manifest.json. Однако, они также имеют такой же доступ к WebExtension APIs, как и фоновые скрипты.</p>

<p>Вы можете загрузить такую страницу, используя {{WebExtAPIRef("windows.create()")}} или {{WebExtAPIRef("tabs.create()")}}.</p>

<p>Подробнее см. <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages">Extension pages</a>.</p>

<h2 id="Встраиваемые_скрипты">Встраиваемые скрипты</h2>

<p>Используйте встраиваемые скрипты для доступа и изменения веб-страниц. Встраиваемые скрипты загружаются в веб-страницу и исполняются в контексте данной конкретной страницы.</p>

<p>Встраиваемые скрипты предоставляются расширением; этим они отличаются от скриптов, загруженных самой веб-страницей, включая тех, что загружены с помощью {{HTMLElement("script")}} элемента веб-страницы.</p>

<p>Встраиваемые скрипты имеют доступ и могут манипулировать DOM, как и обычные скрипты, загруженные веб-страницей.</p>

<p>В отличие от обычных скриптов, они могут:</p>

<ul>
 <li>Осуществлять XHR запросы.</li>
 <li>Использовать часть <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/API">API расширений</a>.</li>
 <li>Обмениваться сообщениями с их фоновыми скриптами и таким образом иметь доступ ко всему WebExtension APIs.</li>
</ul>

<p>Встраиваемые скрипты не могут напрямую взаимодействовать с обычными скриптами на странице, но они могут обмениваться сообщениями с помощью стандартного <code><a href="/en-US/docs/Web/API/Window/postMessage">window.postMessage()</a></code> API.</p>

<p>Обычно, когда мы говорим о встраиваемых скриптах, мы отсылаемся к JavaScript, но вы так же можете внедрить CSS в веб-страницы, используя этот же механизм.</p>

<p>Подробнее см. <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">content scripts</a>.</p>

<h2 id="Веб-доступные_ресурсы">Веб-доступные ресурсы</h2>

<p>Веб-доступные ресурсы - это ресурсы вроде изображений, HTML, CSS и JavaScript, которые вы включаете в расширение и хотите сделать доступными для встраиваемых скриптов и оригинальных скриптов веб-страницы. Такие ресурсы могут быть доступны скриптам через специальную URI схему.</p>

<p>Например, если встраиваемый скрипт хочет добавить какие-либо изображения в веб-страницу, вы можете включить эти изображения в расширение и сделать их веб-доступными. Тогда встраиваемый скрипт может создать и добавить <code><a href="/en-US/docs/Web/HTML/Element/img">img</a></code> тэги, которые будут ссылаться на эти изображения через <code>src</code> атрибут.</p>

<p>Подробнее см. <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a> секцию manifest.json.</p>

<p> </p>

<p> </p>
