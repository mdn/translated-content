---
title: Ваш второй WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
tags:
  - Beginner
  - Example
  - Guide
  - WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---
<div>{{AddonSidebar}}
<p>Если вы уже прочитали статью <a dir="ltr" href="/ru/Add-ons/WebExtensions/Your_first_WebExtension" lang="ru-ru">Ваш первый WebExtension</a>, то уже представляете, как создавать WebExtension. В этой статье мы напишем более сложное дополнение, которое демонстрирует ещё несколько API.</p>

<p>Дополнение добавляет новую кнопку на панель инструментов Firefox. Когда пользователь кликает по кнопке, мы показываем ему всплывающую панель с предложением выбрать животное. Когда животное выбрано, мы заменяем содержимое текущей страницы на изображение выбранного животного.</p>

<p>Чтобы реализовать это, мы:</p>

<ul>
 <li><strong>определим <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_action">browser action</a> - кнопку, прикреплённую к панели инструментов Firefox.</strong><br>
  Для кнопки мы предоставим:
  <ul>
   <li>иконку с именем "beasts-32.png"</li>
   <li>всплывающую панель, если кнопка нажата. Панель состоит из HTML, CSS, и JavaScript.</li>
  </ul>
 </li>
 <li><strong>определим иконку для дополнения</strong> с именем "beasts-48.png". Иконка будет показана в Менеджере дополнений.</li>
 <li><strong>напишем сценарий содержимого(content script) "beastify.js", который будет встроен в веб-страницы</strong>.<br>
  Это тот код, который и будет изменять страницы.</li>
 <li><strong>упакуем несколько изображений животных для замены изображений на веб-странице</strong>.<br>
  Мы сделаем изображения "доступными веб-ресурсами"(web accessible resources), чтобы веб-страница могла ссылаться на них.</li>
</ul>

<p>Вы можете представить общую структуру дополнения вот так:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13671/Untitled-1.png" style="display: block; height: 1200px; margin-left: auto; margin-right: auto; width: 860px;"></p>

<p>Это простое дополнение, но показывает множество основных концепций WebExtensions API:</p>

<ul>
 <li>добавление кнопки на панель инструментов</li>
 <li>определение всплывающей панели используя HTML, CSS, и JavaScript</li>
 <li>встраивание контент-скрипта в веб-страницы</li>
 <li>взаимодействие между сценарием содержимого и остальным дополнением</li>
 <li>упаковка ресурсов с вашим дополнением, которые будут использованы веб-страницами</li>
</ul>

<p>Вы можете найти <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">полный исходный код дополнения на GitHub</a>.</p>

<p>Чтобы написать это дополнение, вам нужен Firefox 45 или новее.</p>

<h2 id="Написание_WebExtension">Написание WebExtension</h2>

<p>Создайте новую директорию и перейдите в неё:</p>

<pre class="brush: bash">mkdir beastify
cd beastify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>Теперь создайте файл "manifest.json" и вставьте в него следующее содержимое:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": [
    "activeTab"
  ],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]

}
</pre>

<ul>
 <li>Первые три ключа: <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>, <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name">name</a></code>, <code>и <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version">version</a></code>, являются обязательными и содержат основные мета-данные для дополнения.</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description">description</a></code> <code>и <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url">homepage_url</a></code> необязательны, но рекомендуемы: они предоставляют полезную информацию о дополнении.</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> необязательный, но рекомендуемый: позволяет вам определять иконку для дополнения, которая будет показана в Менеджере Дополнений.</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> перечисляет разрешения для нужд дополнения. Здесь мы просто спрашиваем разрешения для <a href="/ru/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission"><code>activeTab</code> permission</a>.</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> задаёт кнопку на панели инструментов. Здесь мы предоставляем три вида информации:
  <ul>
   <li><code>default_icon</code> это обязательная иконка для кнопки</li>
   <li><code>default_title</code> необязательный заголовок, будет показан в подсказке</li>
   <li><code>default_popup</code> используется, если вы хотите, чтобы всплывающая панель была показана когда пользователь кликает по кнопке. В нашем примере мы использовали этот ключ и он указывает на HTML файл, подключённый к дополнению.</li>
  </ul>
 </li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code> перечисляет файлы, которые мы хотим сделать доступными для веб-страниц. Поскольку дополнение заменяет содержимое страницы на изображения, которые мы упаковали вместе с дополнением, нам нужно сделать эти изображения доступными для страницы.</li>
</ul>

<p>Обратите внимание, что все пути указаны относительно файла manifest.json.</p>

<h3 id="Иконка">Иконка</h3>

<p>Дополнение должно иметь иконку. Она будет показана рядом с дополнением в Менеджере Дополнений (Вы можете открыть менеджер перейдя по ссылке "about:addons"). Наш manifest.json обещает, что у нас будет иконка для панели инструментов по адресу "icons/beasts-48.png".</p>

<p>Создайте папку "icons" и сохраните там иконку с именем "beasts-48.png". Вы можете использовать <a href="https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-48.png">иконку из нашего примера</a>, которая взята из <a href="https://www.iconfinder.com/iconsets/free-retina-icon-set">набора Aha-Soft’s Free Retina</a> и используется на условиях этой <a href="http://www.aha-soft.com/free-icons/free-retina-icon-set/">лицензии</a>.</p>

<p>Если вы выберете свою иконку, она должна быть размером 48x48 пикселей. Вы также можете предоставить иконку размером 96x96 пикселей для дисплеев с высоким разрешением, определив свойство <code>"96"</code> объекта <code>icons</code> в файле manifest.json:</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}</code></pre>

<h3 id="Кнопка_панели_инструментов">Кнопка панели инструментов</h3>

<p>Кнопка панели инструментов также нуждается в иконке, и наш manifest.json обещает, что у нас будет иконка для панели инструментов по адресу "icons/beasts-32.png".</p>

<p>Сохраните иконку с именем "beasts-32.png" в папке "icons". Вы можете использовать <a href="https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png">иконку из нашего примера</a>, которая взята из набора <a href="http://www.iconbeast.com/free">IconBeast Lite </a>и используется на условиях этой <a href="http://www.iconbeast.com/faq/">лицензии</a>.</p>

<p>Если вы не предоставите всплывающую панель, то событие click отправляется в ваше дополнение, когда пользователь кликает кнопку. Если вы предоставите всплывающую панель, то событие click не отправляется, зато появляется всплывающая панель. Мы хотим панель, давайте создадим её.</p>

<h3 id="Всплывающая_панель">Всплывающая панель</h3>

<p>Функция панели - позволить пользователю выбрать одного из трёх зверей.</p>

<p>Создайте новую папку с именем "popup" в корневой папке дополнения. Здесь мы сохраним код для панели. Панель будет состоять из трёх файлов:</p>

<ul>
 <li><strong><code>choose_beast.html</code></strong> определяет содержимое панели</li>
 <li><strong><code>choose_beast.css</code></strong> стили для содержимого</li>
 <li><strong><code>choose_beast.js</code></strong> обрабатывает выбор пользователя, выполняя content script в активной вкладке</li>
</ul>

<h4 id="choose_beast.html">choose_beast.html</h4>

<p>HTML выглядит так:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="choose_beast.css"/&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div class="button beast"&gt;Frog&lt;/div&gt;
    &lt;div class="button beast"&gt;Turtle&lt;/div&gt;
    &lt;div class="button beast"&gt;Snake&lt;/div&gt;
    &lt;div class="button clear"&gt;Reset&lt;/div&gt;

    &lt;script src="choose_beast.js"&gt;&lt;/script&gt;
  &lt;/body&gt;

&lt;/html&gt;</pre>

<p>У нас есть элемент для каждого животного. Обратите внимание, что мы подключаем CSS и JS файлы из HTML файла, как на обыкновенной веб-странице.</p>

<h4 id="choose_beast.css">choose_beast.css</h4>

<p>CSS фиксирует размер всплывающей панели, гарантирует что три варианта заполняют пространство и даёт им основной стиль:</p>

<pre class="brush: css">html, body {
  width: 100px;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #CFF2F2;
}

.beast {
 background-color: #E5F2F2;
}

.clear {
 background-color: #FBFBC9;
}

.clear:hover {
 background-color: #EAEAC9;
}
</pre>

<h4 id="choose_beast.js">choose_beast.js</h4>

<p>В JavaScript для всплывающего окна мы обрабатываем события click. Если click был на одном из трёх вариантов наших животных, мы добавляем content script в активную вкладку. После того, как content script загрузится, мы отправляем ему сообщение с выбранным животным:</p>

<pre class="brush: js">/*
Учитывая имя зверя, получаем URL соответствующего изображения.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return browser.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return browser.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return browser.extension.getURL("beasts/turtle.jpg");
  }
}

/*
Слушаем события клика во всплывающей панели.

Если кликнули одного из зверей:
  Добавляем "beastify.js" к активной вкладке.

  Затем получаем активную вкладку и отправляем сценарию "beastify.js"
  сообщение, содержащее URL к картинке с выбранным зверем.

Если кликнули кнопку, класс которой содержит "clear":
  Перезагрузить страницу.
  Закрыть всплывающую панель. Это необходимо, так как content script
  неисправен после перезагрузки страницы.
*/

document.addEventListener("click", (e) =&gt; {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);

    browser.tabs.executeScript(null, {
      file: "/content_scripts/beastify.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) =&gt; {
      browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});
</pre>

<p>Скрипт использует три функции WebExtension API:</p>

<ul>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript">browser.tabs.executeScript</a></code> добавляет content script, найденный по адресу content_scripts/beastify.js", к активной вкладке</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">browser.tabs.query</a></code> запрашивает активную вкладку</li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">browser.tabs.sendMessage</a></code> отправляет сообщение для content script, который работает в активной вкладке. Сообщение содержит URL изображения выбранного зверя.</li>
</ul>

<h3 id="Content_script">Content script</h3>

<p>Создайте новую папку с именем "content_scripts" в корневой папке дополнения и создайте в ней новый файл с именем "beastify.js", со следующим кодом:</p>

<pre class="brush: js">/*
beastify():
* удаляет каждый узел в document.body,
* затем вставляет выбранного зверя
* затем удаляется как обработчик
*/
function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(request.beastURL);
  browser.runtime.onMessage.removeListener(beastify);
}

/*
Удаляет каждый узел в document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Учитывая URL изображения зверя, создаёт и стилизует узел IMG,
указывающий на это изображение, затем вставляет узел в документ.
*/
function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

/*
Назначает beastify() обработчиком сообщений расширения.
*/
browser.runtime.onMessage.addListener(beastify);
</pre>

<p>Content script добавляет обработчик к сообщениям от дополнения (в частности как в файле "choose_beast.js" выше). В обработчике скрипт:</p>

<ul>
 <li>удаляет каждый элемент из <code>document.body</code></li>
 <li>создаёт <code>&lt;img&gt;</code> элемент, указывающий на переданный URL, и вставляет элемент в DOM</li>
 <li>удаляет обработчик сообщений.</li>
</ul>

<h3 id="Звери">Звери</h3>

<p>Наконец, нам нужно подключить изображения животных.</p>

<p>Создайте новую папку с именем "beasts" и добавьте туда три изображения с соответствующими именами. Вы можете получить изображения из <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts">GitHub репозитория</a>, или прямо здесь:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11459/frog.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11461/snake.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11463/turtle.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"></p>

<h2 id="Тестирование">Тестирование</h2>

<p>Во-первых, дважды проверьте, что у вас все файлы на своих местах:</p>

<pre>beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json</pre>

<p>Начиная с Firefox 45 вы можете временно установить дополнения с жёсткого диска.</p>

<p>Откройте "about:debugging" в Firefox, кликните "Загрузить временное дополнение", и выберете ваш файл manifest.json. После этого вы должны увидеть иконку дополнения на панели инструментов Firefox:</p>

<p>{{EmbedYouTube("sAM78GU4P34")}}</p>

<p>Откройте веб-страницу, затем щёлкните иконку, выберите зверя и посмотрите как страница изменится:</p>

<p>{{EmbedYouTube("YMQXyAQSiE8")}}</p>

<h2 id="Разработка_из_командной_строки">Разработка из командной строки</h2>

<p>Вы можете автоматизировать этап временной установки используя <a href="/ru/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a>. Попробуйте это:</p>

<pre class="brush: bash">cd beastify
web-ext run</pre>
</div>
