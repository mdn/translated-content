---
title: Страницы расширения
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
tags:
  - UI
  - WebExtensions
  - Веб-расширения
  - Для начинающих
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
---
<div>{{AddonSidebar()}}</div>

<p>В расширение можно добавить HTML-страницы, чтобы предоставить пользователю формы, помощь или другое необходимое содержимое.</p>

<p><img alt="Example of a simple bundled page displayed as a detached panel." src="https://mdn.mozillademos.org/files/15752/bundled_page_as_panel_small.png" style="display: block; height: 216px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>Эти страницы получат доступ к привилегированным средствам JavaScript API — таким же как те, что доступны фоновым скриптам расширения. Но каждая из них будет открыта в своей отдельной вкладке — со своей очередью задач JavaScript, своими глобальными переменными и т. д.</p>

<p>Фоновую страницу можно считать "невидимой страницей расширения".</p>

<h2 id="Определение_страниц_расширения">Определение страниц расширения</h2>

<p>К расширению можно подключить файлы HTML и используемые в них файлы CSS и JavaScript. Можно расположить все эти файлы в корне папки расширения, а можно организовать более сложную структуру каталога.</p>

<pre>/my-extension
    /manifest.json
    /my-page.html
    /my-page.js</pre>

<h2 id="Отображение_страниц_расширения">Отображение страниц расширения</h2>

<p>Есть два способа отобразить страницу расширения: {{WebExtAPIRef("windows.create()")}} и {{WebExtAPIRef("tabs.create()")}}.</p>

<p>Например для того, чтобы создать окно сообщения, можно с помощью функции <code>windows.create()</code> открыть страницу HTML в отсоединённой панели (detached panel) — в окне без строки адреса, полосы закладок и других обычных элементов управления:</p>

<pre class="brush: js">let createData = {
  type: "detached_panel",
  url: "panel.html",
  width: 250,
  height: 100
};
let creating = browser.windows.create(createData);</pre>

<p>Когда окно больше не будет нужно, его можно закрыть программно.</p>

<p>Например, когда пользователь нажмёт на кнопку, можно вызвать функцию {{WebExtAPIRef("windows.remove()")}} и передать ей идентификатор текущего окна:</p>

<pre class="brush: js">document.getElementById("closeme").addEventListener("click", function(){
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
}); </pre>

<h2 id="Страницы_расширения_и_история">Страницы расширения и история</h2>

<p>По умолчанию страницы, открытые таким образом, будут сохранены в истории браузера — точно так же, как и обычные веб-страницы. Если такое поведение не нужно, используйте {{WebExtAPIRef("history.deleteUrl()")}}, чтобы удалить запись:</p>

<pre class="brush: js" id="ct-4">function onVisited(historyItem) {
  if (historyItem.url == browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({url: historyItem.url});
  }
}

browser.history.onVisited.addListener(onVisited);</pre>

<p>Для использования API истории браузера нужно добавить разрешение "<code>history</code>" с помощью элемента <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a> в файле <code><a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a></code>.</p>

<h2 id="Дизайн_веб-страницы">Дизайн веб-страницы</h2>

<p>Подробности о том, как сделать, чтобы дизайн ваших страниц совпадал со стилем Firefox, смотрите на сайте <a href="https://design.firefox.com/photon/index.html">Система дизайна Photon</a> (на английском языке) и в документации <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">browser styles</a>.</p>

<h2 id="Примеры">Примеры</h2>

<p>В репозитории <a class="external external-icon" href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> на GitHub есть пример <a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/window-manipulator">window-manipulator</a>, в котором используются некоторые из возможностей для создания окон.</p>
