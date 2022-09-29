---
title: Встраиваемый скрипт
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
tags:
  - Web-расширение
  - Расширение
translation_of: Mozilla/Add-ons/WebExtensions/Content_scripts
---
<div>{{AddonSidebar}}</div>

<p>Встраиваемый скрипт - это часть расширения, которая выполняется в контексте отдельной веб-страницы (в отличии от фоновых скриптов, выполняющихся в контексте целого браузера).</p>

<p><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B">Фоновые скрипты</a> имеют доступ ко всем методам <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API">WebExtension JavaScript APIs</a>, но они не имеют доступа к контенту отдельных веб-страниц. Так что если вашему расширению необходимо взаимодействие с контентом веб-страницы, вам нужен встраиваемый скрипт.</p>

<p>Точно так же, как скрипты загружаемые веб-страницами, встраиваемый скрипт может читать и изменять контент веб-страницы, используя DOM API.</p>

<p>Встраиваемые скрипты имеют доступ только к <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D1%81_%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0%D0%BC%D0%B8">небольшому подмножеству методов WebExtension API</a>, но они могут <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D1%81_%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0%D0%BC%D0%B8">взаимодействовать с фоновыми скриптами</a>, используя систему передачи сообщений, таким образом опосредовано имея доступ ко всему WebExtension API.</p>

<div class="note">
<p>Обратите внимание, что встраивание скриптов блокируется на следующих доменах:</p>

<ul style="display: grid;">
 <li>accounts-static.cdn.mozilla.net</li>
 <li>accounts.firefox.com</li>
 <li>addons.cdn.mozilla.net</li>
 <li>addons.mozilla.org</li>
 <li>api.accounts.firefox.com</li>
 <li>content.cdn.mozilla.net</li>
 <li>content.cdn.mozilla.net</li>
 <li>discovery.addons.mozilla.org</li>
 <li>input.mozilla.org</li>
 <li>install.mozilla.org</li>
 <li>oauth.accounts.firefox.com</li>
 <li>profile.accounts.firefox.com</li>
 <li>support.mozilla.org</li>
 <li>sync.services.mozilla.com</li>
 <li>testpilot.firefox.com</li>
</ul>

<p>Если вы попытаетесь встроить скрипт на страницы, находящиеся на вышеперечисленных доменах, у вас ничего не выйдет, и веб-страница сделает запись о <a href="/ru/docs/Web/HTTP/CSP">CSP</a> ошибке.</p>

<p>По причине того, что список запрещённых доменов включает в себя addons.mozilla.org, пользователи, которые попытаются испытать ваше расширение прямо на странице загрузки, могут посчитать, что расширение не работает! В связи с этим вы могли бы предоставить им соответствующее предупреждение или <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices">onboarding page</a> чтобы немедленно переадресовать их с addons.mozilla.org.</p>
</div>

<div class="note">
<p>Значения, определённые в глобальной области видимости встраиваемого скрипта с помощью <code>var foo</code> или <code>window.foo = "bar"</code> могут исчезать по причине бага <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1408996">1408996</a>.</p>
</div>

<h2 id="Загрузка_встраиваемого_скрипта">Загрузка встраиваемого скрипта</h2>

<p>Загрузка встраиваемых скриптов на веб-страницу происходит следующими тремя способами:</p>

<ol>
 <li><strong>Автоматическая загрузка скрипта на страницах с определёнными URL, объявленными при установке:</strong> используя <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> ключ в manifest.json, вы можете запросить браузер загружать встраиваемый скрипт каждый раз, когда браузер загружает веб-страницу, чей URL <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">совпадает с объявленными шаблонами</a>.</li>
 <li><strong>Автоматическая загрузка скрипта на страницах с определёнными URL, объявленными в момент работы расширения:</strong> используя {{WebExtAPIRef("contentScripts")}} API, вы можете запросить браузер загружать встраиваемый скрипт каждый раз, когда браузер загружает веб-страницу, чей URL <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">совпадает с объявленными шаблонами</a>. Это очень похоже на первый метод, но позволяет добавлять и удалять правила динамически во время работы расширения.</li>
 <li><strong>Загрузка скрипта расширением в конкретную вкладку:</strong> используя <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/executeScript">tabs.executeScript()</a></code> API, вы можете загружать встраиваемые скрипты в определённые вкладки когда захотите: например, в ответ на нажатие пользователя на <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">browser action</a>.</li>
</ol>

<p>Существует только одна глобальная область видимости <em>для одного фрейма, для одного расширения</em>. Это означает, что значения из одного встраиваемого скрипта могут быть доступны для другого встраиваемого скрипта, не зависимо от того, как встраиваемый скрипт был загружен на страницу.</p>

<p>Используя методы (1) и (2), вы можете загружать скрипты на страницы, чьи URL могут быть представлены, используя <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">шаблон совпадения</a>.</p>

<p>Используя метод (3), вы к тому же можете загружать скрипты на страницы вашего расширения, но вы не можете загружать скрипты на привилегированные страницы браузеры (например "about:debugging" или "about:addons").</p>

<h2 id="Условия_работы_встраиваемого_скрипта">Условия работы встраиваемого скрипта</h2>

<h3 id="Доступ_к_DOM">Доступ к DOM</h3>

<p>Встраиваемые скрипты имеют доступ и могут изменять DOM на веб-странице, так же как и обычные скрипты. Так же они могут видеть любые изменения сделанные с DOM страничными скриптами.</p>

<p>При этом, встраиваемые скрипты имеют "чистое DOM представление". Это значит:</p>

<ul>
 <li>Встраиваемые скрипты не могут видеть JavaScript переменных, определённых страничными скриптами.</li>
 <li>Если страничный скрипт переназначит встроенное свойство DOM, встраиваемый скрипт всё равно будет видеть его изначальное значение, а не переназначенное.</li>
</ul>

<p>В Firefox это поведение называется <a href="/ru/docs/Mozilla/Tech/Xray_vision">Xray vision</a>.</p>

<p>Например, рассмотрите эту веб-страницу:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta http-equiv="content-type" content="text/html; charset=utf-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;script src="page-scripts/page-script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Скрипт "page-script.js" делает следующее:</p>

<pre class="brush: js">// page-script.js

// добавляет новый элемент к DOM
var p = document.createElement("p");
p.textContent = "Этот параграф был добавлен страничным скриптом.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// определяет новое свойство на объекте window
window.foo = "Эта глобальная переменная была добавлена страничным скриптом";

// переопределяет встроенную window.confirm() функцию
window.confirm = function() {
  alert("Страничный скрипт так же переопределил 'confirm'");
}</pre>

<p>Теперь расширение загружает встраиваемый скрипт на страницу:</p>

<pre class="brush: js">// content-script.js

// получает доступ и изменяет DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// не может видеть свойств определённых страничным скриптом
console.log(window.foo);  // undefined

// видит изначальное значение свойства, переопределённого страничным скриптом
window.confirm("Вы уверены?"); // вызывает оригинальный window.confirm()</pre>

<p>Те же самые правила применяются и наоборот: страничный скрипт не может видеть JavaScript свойств, добавленных встраиваемым скриптом.</p>

<p>Это означает, что встраиваемый скрипт может полагаться на то, что DOM свойства всегда будут вести себя предсказуемо, и не беспокоиться о том, что его переменные будут иметь конфликт с переменными из страничного скрипта.</p>

<p>Одно из последствий такого поведения состоит в том, что встраиваемый скрипт не будет иметь доступ к JavaScript библиотекам, загруженным страничным скриптом. Например, если веб-страница загружает jQuery, встраиваемый скрипт не сможет увидеть эту библиотеку.</p>

<p>Если встраиваемому скрипту необходимо использовать какую-либо JavaScript библиотеку, тогда эта библиотека должна быть загружена, тем же способом, как и встраиваемый скрипт вместе с ним:</p>

<pre class="brush: json">"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]</pre>

<div class="blockIndicator note">
<p><strong>Примечание:</strong> Firefox предоставляет некоторое API, позволяющее встраиваемому скрипту иметь доступ к JavaScript объектам, созданным страничным скриптом, и предоставлять свои собственные JavaScript объекты страничному скрипту.</p>

<p>Смотрите <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts">совместное использование объектов со страничным скриптом</a> для получения дополнительной информации.</p>
</div>

<h3 id="Доступные_WebExtension_API">Доступные WebExtension API</h3>

<p>В дополнение стандартному DOM API, встраиваемый скрипт может использовать следующие методы WebExtension APIs:</p>

<p>Из <code><a href="/ru/Add-ons/WebExtensions/API/extension">extension</a></code>:</p>

<ul>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/extension#getURL()">getURL()</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/extension#inIncognitoContext">inIncognitoContext</a></code></li>
</ul>

<p>Из <code><a href="/ru/Add-ons/WebExtensions/API/runtime">runtime</a></code>:</p>

<ul>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#connect()">connect()</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#getManifest()">getManifest()</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#getURL()">getURL()</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#onConnect">onConnect</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#onMessage">onMessage</a></code></li>
 <li><code><a href="/ru/Add-ons/WebExtensions/API/runtime#sendMessage()">sendMessage()</a></code></li>
</ul>

<p>Из <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n">i18n</a></code>:</p>

<ul>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage">getMessage()</a></code></li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages">getAcceptLanguages()</a></code></li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage">getUILanguage()</a></code></li>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage">detectLanguage()</a></code></li>
</ul>

<p>Из <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus">menus</a></code>:</p>

<ul>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement">getTargetElement</a></code></li>
</ul>

<p>Ко всему из <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code>.</p>

<h3 id="Работа_с_XHR_и_Fetch">Работа с XHR и Fetch</h3>

<p>Встраиваемые скрипты могут делать запросы используя <code><a href="/ru/docs/Web/API/XMLHttpRequest">window.XMLHttpRequest</a></code> и <code><a href="/ru/docs/Web/API/Fetch_API">window.fetch()</a></code> API.</p>

<div class="blockIndicator note">
<p>В Firefox, запросы, совершаемые из встраиваемого скрипта (например, используя <a href="/ru/docs/Web/API/Fetch_API/Using_Fetch">fetch()</a>) происходят в контексте расширения, так что вам необходимо предоставлять полный URL для доступа к контенту страниц. В Chrome, эти запросы совершаются в контексте страницы, так что URL может быть относительным, например <code>/api</code> будет трансформирован в <code>https://[current page URL]/api</code>.</p>
</div>

<p>Встраиваемый скрипт имеет точно такие же кросс-доменные привилегии, как и всё остальное расширение: так что если расширение запросило кросс-доменный доступ на какой-либо домен используя <code><a href="/ru/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> ключ в manifest.json, тогда его встраиваемый скрипт тоже будет иметь доступ к этому домену.</p>

<p>Это достигается, предоставляя встраиваемому скрипту более привилегированные XHR and fetch объекты. Что имеет побочный эффект, связанный с отсутствием <code><a href="/ru/docs/Web/HTTP/Headers/Origin">Origin</a></code> и <code><a href="/ru/docs/Web/HTTP/Headers/Referer">Referer</a></code> заголовков, которые имел бы запрос, выполняемый из страничного скрипта. Зачастую это предпочитаемо, для того чтобы предотвратить раскрытие кросс-доменной натуры запроса. Начиная с версии 58 и дальше, расширения, которым необходимо выполнять запросы, которые должны выглядеть будто они отправлены встраиваемым скриптом, могут использовать  <code>content.XMLHttpRequest</code> и <code>content.fetch()</code>. Кросс-браузерные расширения должны проверять присутствие этих методов.</p>

<h2 id="Взаимодействие_с_фоновыми_скриптами">Взаимодействие с фоновыми скриптами</h2>

<p>Хотя встраиваемые скрипты не могут напрямую использовать большинство методов из WebExtension APIs, они могут взаимодействовать с фоновыми скриптами расширения, используя систему сообщений, и таким образом могут опосредованно иметь доступ к тем же самым API, что и фоновые скрипты.</p>

<p>Существует два способа общения между фоновым и встраиваемым скриптами: вы можете посылать одиночные сообщения, ожидая необязательного ответа, или вы можете установить долгосрочное соединение на двух сторонах и использовать это соединение для обмена сообщениями.</p>

<h3 id="Одиночные_сообщения">Одиночные сообщения</h3>

<p>Для отправки одиночного сообщения и ожидания необязательного ответа, вы можете использовать следующее API:</p>

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th scope="col">Во встраиваемом скрипте</th>
   <th scope="col">В фоновом скрипте</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Отправка сообщения</th>
   <td><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage">browser.runtime.sendMessage()</a></code></td>
   <td><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/sendMessage">browser.tabs.sendMessage()</a></code></td>
  </tr>
  <tr>
   <th scope="row">Получение сообщения</th>
   <td><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code></td>
   <td><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">browser.runtime.onMessage</a></code></td>
  </tr>
 </tbody>
</table>

<p>Например, представьте встраиваемый скрипт, который обрабатывает нажатие левой кнопки мыши на веб-странице.</p>

<p>Если нажатие было произведено по ссылке, встраиваемый скрипт отправляет сообщение фоновому скрипту со значение URL в ссылке:</p>

<pre class="brush: js">// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}</pre>

<p>Фоновый скрипт ожидает эти сообщения и, при их получении, отображает уведомления, используя <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/notifications">notifications</a></code> API:</p>

<pre class="brush: js">// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "Вы нажали на ссылку!",
    "message": message.url
  });
}
</pre>

<p>(Этот пример кода частично взят из <a href="https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n">notify-link-clicks-i18n</a> примера на GitHub.)</p>

<h3 id="Обмен_сообщениями_через_постоянное_соединение">Обмен сообщениями через постоянное соединение</h3>

<p>Отправка одиночных сообщений может стать довольно обременительной, если вы пересылаете много сообщений между встраиваемым и фоновым скриптами. Альтернативное решение в этой ситуации будет установить постоянное соединение между двумя скриптами, и использовать его для обмена сообщениями.</p>

<p>Каждая из сторон имеет <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> объект, который они могут использовать для обмена сообщениями.</p>

<p>Для создания постоянного соединения:</p>

<ul>
 <li>Одна из сторон должна ждать соединений, используя <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect">runtime.onConnect</a></code></li>
 <li>Другая сторона должна вызвать:
  <ul>
   <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect">tabs.connect()</a></code> (при соединении со встраиваемым скриптом); или</li>
   <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect">runtime.connect()</a></code> (при соединении с фоновым скриптом).</li>
  </ul>
 </li>
</ul>

<p>Результатом вызова этих методов будет возвращение <code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> объекта.</p>

<ul>
 <li><code><a href="/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect">runtime.onConnect</a></code> методу передаётся аргумент, являющийся собственным портом этого скрипта,  <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port">runtime.Port</a></code> объект.</li>
</ul>

<p>Как только обе стороны имеют порт, они могут:</p>

<ul>
 <li>отправлять сообщения, используя <code>runtime.Port.postMessage()</code>, и</li>
 <li>получать сообщения используя <code>runtime.Port.onMessage()</code></li>
</ul>

<p>Например, сразу после загрузки, нижерасположенный встраиваемый скрипт:</p>

<ul>
 <li>Соединяется с фоновым скриптом</li>
 <li>Сохраняет <code>Port</code> в переменную <code>myPort</code></li>
 <li>Начинает ожидать и записывать сообщения приходящие на <code>myPort</code></li>
 <li>Использует <code>myPort</code> для отправки сообщений на фоновый скрипт, когда пользователь нажимает левую кнопку мыши на документе</li>
</ul>

<pre class="brush: js">// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "Привет из встраиваемого скрипта"});

myPort.onMessage.addListener(function(m) {
  console.log("Во встраиваемом скрипте, получено сообщение из фонового скрипта: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "Они кликнули по странице!"});
});</pre>

<p>Соответствующий фоновый скрипт:</p>

<ul>
 <li>Ожидает попытки соединения от встраиваемого скрипта</li>
 <li>Когда он получает эту попытку соединения:
  <ul>
   <li>сохраняет свой порт в переменную <code>portFromCS</code></li>
   <li>отправляет сообщение встроенному скрипту, используя этот порт</li>
   <li>начинает ожидать сообщений, приходящих на порт, и записывать их</li>
  </ul>
 </li>
 <li>Отправляет сообщения на встраиваемый скрипт, используя <code>portFromCS</code>, когда пользователь нажимает кнопку расширения в браузере</li>
</ul>

<pre class="brush: js">// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "Привет, встраиваемый скрипт!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("В фоновом скрипте, получено сообщение от встраиваемого скрипта");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "Они нажали кнопку!"});
});
</pre>

<h4 id="Несколько_встраиваемых_скриптов">Несколько встраиваемых скриптов</h4>

<p>Если вы имеете несколько встраиваемых скриптов, с которыми вы обращаетесь в одно и то же время, вы бы могли сохранять каждое соединение в массиве.</p>

<ul>
</ul>

<pre class="brush: js">// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p =&gt; {
        p.postMessage({greeting: "Они нажали на кнопку!"})
    })
});
</pre>

<ul>
</ul>

<h2 id="Взаимодействие_с_веб-страницей">Взаимодействие с веб-страницей</h2>

<p>Хотя по умолчанию встраиваемые скрипты не имеют доступ к объектам, которые созданы страничными скриптами, они могут взаимодействовать со страничными скриптами, используя <code><a href="/ru/docs/Web/API/Window/postMessage">window.postMessage</a></code> и <code><a href="/ru/docs/Web/API/EventTarget/addEventListener">window.addEventListener</a></code> API.</p>

<p>Например:</p>

<pre class="brush: js">// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Сообщение со страницы"
  }, "*");</pre>

<pre class="brush: js">// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &amp;&amp;
      event.data &amp;&amp;
      event.data.direction == "from-page-script") {
    alert("Встраиваемый скрипт получил сообщение: \"" + event.data.message + "\"");
  }
});</pre>

<p>Для просмотра законченного и полностью рабочего примера, <a href="https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html">посетите эту страницу на GitHub</a> и следуйте инструкциям.</p>

<div class="warning">
<p>Заметьте, при взаимодействии с непроверенными страницами этим способом, вам нужно быть очень осторожными . Расширения имеют возможность запускать привилегированный код, который может обладать серьёзными возможностями, и вредоносные веб-страницы легко могут обмануть ваше расширение, ради доступа к этим возможностям.</p>

<p>Как простейший пример, представим встраиваемый скрипт, который получает сообщение от веб-страницы и делает что-то вроде этого:</p>

<pre class="brush: js">// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &amp;&amp;
      event.data.direction &amp;&amp;
      event.data.direction == "from-page-script") {
    eval(event.data.message);
  }
});</pre>

<p>Теперь страничный скрипт может запускать любой код со всеми привилегиями встраиваемого скрипта.</p>
</div>

<h2 id="Использование_eval()_во_встраиваемых_скриптах">Использование <code>eval()</code> во встраиваемых скриптах</h2>

<p>В Chrome, <code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code> всегда выполняет код в контексте встраиваемого скрипта, а не в контексте веб-страницы.</p>

<p>В Firefox:</p>

<ul>
 <li>Если вы вызываете <code>eval()</code>,  код выполняется в контексте <strong>встраиваемого скрипта</strong>.</li>
 <li>Если вы вызываете <code>window.eval()</code>, код выполняется в контексте <strong>страничного скрипта</strong>.</li>
</ul>

<p>Например, рассмотрите этот встраиваемый скрипт:</p>

<pre class="brush: js">// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`Во встраиваемом скрипте, window.x: ${window.x}`);
console.log(`Во встраиваемом скрипте, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");</pre>

<p>Этот код создаёт переменные <code>x</code> and <code>y</code>, используя <code>window.eval()</code> и <code>eval()</code>, затем записывает их значения, и отправляет сообщение на веб-страницу.</p>

<p>Получая сообщение, страничный скрипт записывает те же самые переменные:</p>

<pre class="brush: js">window.addEventListener("message", function(event) {
  if (event.source === window &amp;&amp; event.data &amp;&amp; event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});</pre>

<p>В Chrome, в консоли будут записаны следующие строки:</p>

<pre>In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined</pre>

<p>В Firefox, будут записаны следующие строки:</p>

<pre>In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined</pre>

<p>Те же правила применимы к <code><a href="/ru/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout()</a></code>, <code><a href="/ru/docs/Web/API/WindowOrWorkerGlobalScope/setInterval">setInterval()</a></code>, и <code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>.</p>

<div class="blockIndicator warning">
<p>Будьте очень осторожны, запуская код в контексте страничного скрипта. Окружение страничного скрипта может контролироваться потенциально зловредным веб-страницей, которая может переопределить объекты, с которыми вы взаимодействуете, так что их поведение станет совершенно непредсказуемым:</p>

<pre class="brush: js">// page.js переопределяет console.log

var original = console.log;

console.log = function() {
  original(true);
}
</pre>


<pre class="brush: js">// content-script.js вызывает переопределённую версию

window.eval('console.log(false)');
</pre>
</div>
