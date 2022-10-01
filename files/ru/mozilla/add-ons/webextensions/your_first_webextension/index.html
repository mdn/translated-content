---
title: Ваш первый WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - Beginner
  - Extensions
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
<div>{{AddonSidebar}}</div>

<p>В этой статье мы пройдём весь путь создания WebExtension для Firefox, от начала и до конца. Это дополнение будет просто добавлять красную рамку ко всем страницам, загруженным с "mozilla.org" или любого из его поддоменов.</p>

<p>Исходный код этого дополнения доступен на GitHub: <a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">https://github.com/mdn/webextensions-examples/tree/master/borderify</a>.</p>

<p>Для начала вам нужен Firefox 45 или более поздней версии.</p>

<h2 id="Написание_WebExtension">Написание WebExtension</h2>

<p>Создайте новую директорию (папку) и перейдите в неё:</p>

<pre class="brush: bash">mkdir borderify
cd borderify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>Теперь создайте новый файл, назовите его "manifest.json" в папке "borderify". Вставьте туда следующий код:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a solid red border to all webpages matching mozilla.org.",
  "icons": {
    "48": "icons/border-48.png"
  },

  "applications": {
    "gecko": {
      "id": "borderify@mozilla.org",
      "strict_min_version": "45.0"
    }
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<ul>
 <li>Первые три ключа: <code><a href="/ru/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>, <code><a href="/ru/Add-ons/WebExtensions/manifest.json/name">name</a> и <a href="/ru/Add-ons/WebExtensions/manifest.json/version">version</a></code>, являются обязательными и содержат основные метаданные о дополнении.</li>
 <li><code><a href="/ru/Add-ons/WebExtensions/manifest.json/description">description</a></code> не обязателен, но рекомендуется: это описание отображается в Менеджере Дополнений.</li>
 <li><code><a href="/ru/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> не обязателен, но рекомендуется: позволяет указать значок для дополнения, который будет виден в Менеджере Дополнений.</li>
 <li><code><a href="/ru/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> является обязательным для Firefox, и определяет ID дополнения. Он так же может использоваться для указания минимальной и максимальной версии Firefox, поддерживаемой расширением.</li>
</ul>

<p>Самый интересный ключ здесь - это <code><a href="/en-US/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>, который говорит Firefox загружать скрипт на Web страницах, чей URL совпадает с заданным шаблоном. В нашем случае, мы просим Firefox загрузить скрипт с названием "borderify.js" на всех HTTP или HTTPS страницах, полученных с "mozilla.org" или любого из его поддоменов.</p>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/Content_scripts">Узнать больше content scripts.</a></li>
 <li><a href="/ru/Add-ons/WebExtensions/Match_patterns">Узнать больше о match patterns</a>.</li>
</ul>

<div class="warning">
<p><a href="/ru/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID">В некоторых случаях вам нужно указать ID для вашего дополнения</a>. Если вам нужно указать ID дополнения включите ключ <code><a href="/ru/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> в <code>manifest.json</code> и установите его свойство <code>gecko.id</code>:</p>

<pre class="brush: json">"applications": {
  "gecko": {
    "id": "borderify@example.com"
  }
}</pre>
</div>

<h3 id="iconsborder-48.png">icons/border-48.png</h3>

<p>Дополнение должно иметь иконку (значок). Эта иконка будет показана в списке дополнений в Менеджере Дополнений. Наш файл manifest.json сообщает, что иконка будет находиться в файле  "icons/border-48.png".</p>

<p>Создайте директорию (папку) "icons" внутри директории "borderify" . Сохраните в ней иконку под именем "border-48.png".  Вы можете использовать <a href="https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png">иконку из нашего примера</a>, которая взята из набора иконок Google Material Design, и используется по лицензии <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike</a>.</p>

<p>Вы можете использовать собственную иконку. Её размер должен быть 48x48 пикселей. Вы можете также использовать иконку размером 96x96 пикселей для отображения на мониторах высокого разрешения. В этом случае вам необходимо указать её в качестве свойства "96" объекта "<code>icons"</code> в файле manifest.json:</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}</code></pre>

<p>Также вы можете создать иконку в формате SVG и она будет корректно масштабироваться.</p>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/manifest.json/icons">Узнать больше о ключе icons</a></li>
</ul>

<h3 id="borderify.js">borderify.js</h3>

<p>Наконец, создайте в директории "borderify" файл с именем "borderify.js" и поместите туда следующий код:</p>

<pre class="brush: js">document.body.style.border = "5px solid red";</pre>

<p>Этот скрипт будет встраиваться в страницу, которая совпадает с шаблоном, указанном в ключе <code>content_scripts</code> файла manifest.json. Этот скрипт имеет прямой доступ ко всему документу, как если бы он был загружен самой страницей.</p>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/Content_scripts">Узнать больше о content scripts</a></li>
</ul>

<h2 id="Пробуем">Пробуем</h2>

<p>Сначала внимательно проверьте, что вы правильно разместили файлы и дали им правильные имена:</p>

<pre>borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json</pre>

<h3 id="Установка">Установка</h3>

<p>Начиная с версии Firefox 45 вы можете временно установить WebExtension с локального диска.</p>

<p>Откройте страницу "about:debugging", кликните "Load Temporary Add-on" и выберите файл manifest.json:</p>

<p>{{EmbedYouTube("SKb-CNYpl6Q")}}</p>

<p>Теперь ваше дополнение установлено и останется в браузере до его перезапуска.</p>

<p>Для проверки, зайдите на страницу "about:addons" чтобы открыть Менеджер Дополнений. Вы должны увидеть своё дополнение с именем и иконкой:</p>

<p>{{EmbedYouTube("WpUL3-qmenE")}}</p>

<p>Также, вы можете запускать WebExtension из командной строки, используя <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a>.</p>

<h3 id="Тестирование">Тестирование</h3>

<p>Теперь зайдите на любую страницу домена "mozilla.org" и вы должны будете увидеть красную границу вокруг страницы:</p>

<p>{{EmbedYouTube("exUAH0sIyBw")}}</p>

<p>Поэкспериментируйте немного. Поменяйте цвет границы или сделайте ещё что-нибудь с содержимым на странице. После того, как изменённый скрипт будет сохранён, а страница перезагружена, вы сразу увидите изменения:</p>

<p>{{EmbedYouTube("t6s_4yF8dRk")}}</p>

<div class="note">
<p>Обратите внимание, что после изменения файла manifest.json, вы должны вручную перезагрузить своё дополнение. В настоящий момент это значит, что вам нужно перезагрузить Firefox, а затем снова загрузить своё дополнение на странице "about:debugging". Мы работаем над улучшением этого процесса. </p>
</div>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/Packaging_and_installation#Loading_from_disk">Узнать больше о временной установке дополнений</a></li>
</ul>

<h2 id="Упаковка_и_публикация">Упаковка и публикация</h2>

<p>Чтобы другие люди могли использовать ваше дополнение, вам необходимо запаковать его. Дополнения Firefox в запакованном виде являются XPI файлами, которые представляют собой обычные ZIP архивы с расширением "xpi".</p>

<p>При упаковке необходимо учитывать следующее: в ZIP архиве должны быть только файлы, а не содержащая их директория (директория "borderify" не должна попасть в архив). Для того, чтобы создать правильный XPI файл из вашего дополнения, в командной строке перейдите в директорию "borderify" и выполните следующую команду:</p>

<pre>zip -r ../borderify.xpi *</pre>

<p>Начиная с Firefox 43 все дополнения должны быть подписаны прежде чем они будут установлены в браузер. Вы можете снять это ограничение <em>только</em> в <a class="external external-icon" href="https://www.mozilla.org/en-US/firefox/developer/">Firefox Developer Edition</a> или  <a class="text external external-icon" href="https://nightly.mozilla.org/" rel="nofollow">Firefox Nightly</a> при помощи следующих шагов:  </p>

<ul>
 <li>перейдите на страницу <code>about:config</code> в Firefox</li>
 <li>при помощи строки поиска найдите <code>xpinstall.signatures.required</code></li>
 <li>дважды кликнув на этом свойстве или при помощи локального меню (через клик правой кнопкой мыши), выберите  "Toggle", чтобы установить значение <code>false</code>.</li>
</ul>

<p>{{EmbedYouTube("HgtBYDWtH4w")}}</p>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/Packaging_and_installation">Узнать больше об упаковке и инсталляции</a></li>
 <li><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension">Узнать больше о подписи и распространении</a></li>
</ul>

<h2 id="Что_дальше">Что дальше?</h2>

<p>Теперь, когда вы имеете представление о разработке дополнений для Firefox, вы можете:</p>

<ul>
 <li><a href="/ru/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">Прочитать больше об анатомии WebExtensions</a></li>
 <li><a href="/ru/Add-ons/WebExtensions/Your_second_WebExtension">Создать более сложное WebExtensions</a></li>
 <li><a href="/ru/Add-ons/WebExtensions/API">Прочитать больше об API JavaScript, доступном для WebExtensions</a></li>
</ul>
