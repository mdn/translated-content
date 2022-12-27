---
title: Кнопка в панели инструментов
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
tags:
  - Кнопка панели инструментов
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
---
<div>{{AddonSidebar}}</div>

<p>Кнопка на панели инструментов браузера (оригинальное название <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browser action</a>) - это иконка, которую можно вывести в панель инструментов. Пользователь взаимодействует с расширением нажимая на неё как на кнопку.<br>
 <img alt="" src="https://mdn.mozillademos.org/files/12966/browser-action.png" style="display: block; height: 387px; margin-left: auto; margin-right: auto; width: 782px;"></p>

<p>Кнопка на панели инструментов одинаково отображается для любой открытой вкладки. Это предполагает, что расширение единообразно работает со всеми страницами.</p>

<p>Например, предустановленная кнопка "обновить" перезагружает любую страницу в активной вкладке, кнопка "добавить в избранное" добавляет любой адрес активной вкладки в список избранного. Кнопка загрузок показывает единый для всего браузера список скачанных файлов, независимо от того что за страница открыта в активной вкладке.</p>

<p>Применимые лишь к определённым страницам кнопки следует реализовывать с помощью кнопки в адресной строке (<a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Page_actions">page action</a>).</p>

<h2 id="Объявление_в_manifest.json">Объявление в manifest.json</h2>

<p>За кнопку на панели инструментов отвечает свойство манифеста  <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code>:</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}</code></pre>

<p>Свойство кнопки <code>default_icon</code> обязательно, оно определяет внешний вид кнопки - иконку, которая окажется на панели инструментов.</p>

<p>Расширение может иметь только одну кнопку для панели инструментов.</p>

<p>Возможны два способа реакции на нажатие кнопки: отображение <a href="/en-US/Add-ons/WebExtensions/Popups">всплывающего окна</a> (описано в отдельном разделе) или отправка события в background script расширения. В таком случае реакция на нажатие обеспечивают обработчики событий, подключённые к <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked" title="Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup."><code>browserAction.onClicked</code></a>:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser.browserAction.onClicked.addListener(handleClick);</code></pre>

<p>Если же указать в качестве реакции на нажатие всплывающее окно, то событие передано не будет. Вместо этого около кнопки отобразится всплывающее окно - отдельная маленькая страница, дальнейшее взаимодействие с пользователем берёт на себя она. Подробнее этот сценарий описан на отдельной странице, посвящённой <a href="/en-US/Add-ons/WebExtensions/Popups">всплывающим окнам</a>.</p>

<p>Все свойства кнопки на панели инструментов можно изменить программно через API <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a></code>.</p>

<h2 id="Примеры">Примеры</h2>

<p>В GitHub репозитории <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> представлены несколько примеров расширений, которые создают кнопку на панели инструментов:</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/">bookmark-it</a> использует событие browserAction.onClicked.</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a> открывает всплывающее окно.</li>
</ul>
