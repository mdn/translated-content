---
title: JavaScript APIs
slug: Mozilla/Add-ons/WebExtensions/API
tags:
  - Web-расширение
  - Расширение
translation_of: Mozilla/Add-ons/WebExtensions/API
---
<div>{{AddonSidebar}}</div>

<div>
<p>WebExtension JavaScript API может быть использован в <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B">фоновых скриптах</a> расширения, а так же в любых других документах, поставляемых вместе с расширением, таких как  документы во всплывающих окнах после нажатия<a href="/en-US/Add-ons/WebExtensions/User_interface_components#Browser_actions"> </a>кнопок активации расширения <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">browser action </a>на панели инструментов<a href="/en-US/Add-ons/WebExtensions/User_interface_components#Browser_actions"> </a>или <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions">page action</a> в строке адреса, <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">боковой панели</a>, <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">страницах настроек</a> или <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides">новых открытых вкладках</a>. Некоторые из этих API могут быть доступны на <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%92%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B">встраиваемых в страницу скриптах</a> (см. <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">список в руководстве по встраиваемым скриптам</a>).</p>

<p>Для использования отдельных более продвинутых API, необходимо <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">запросить разрешения</a> в manifest.json вашего дополнения.</p>

<p>Вы можете получить доступ к API, используя пространство имён <code>browser</code>:</p>

<pre class="brush: js">function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({currentWindow: true}, logTabs);</pre>
</div>

<div>
<p>Многие API выполняются асинхронно, возвращая <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>:</p>

<pre class="brush: js">function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set(
  {url: "/"}
);
setCookie.then(logCookie, logError);</pre>
</div>

<div>Обратите внимание, что это отличается от расширений Google Chrome, которые используют пространство имён <code>chrome</code> вместо <code>browser</code> и колбэки для асинхронных функций вместо промисов.

<p>Для поддержки портирования, реализация Firefox WebExtensions API так же поддерживает пространство имён <code>chrome</code> и использование колбэков. Это позволяет в большинстве случаев не изменять код, изначально написанный для Chrome.</p>

<p>Mozilla так же предоставляет полифил, который позволяет коду, использующему <code>browser</code> и промисы, работать без изменений в Chrome: <a class="external external-icon" href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<p>Microsoft Edge использует пространство имён <code>browser</code>, но ещё не поддерживает, основанный на промисах асинхронный API. В Edge на данный момент асинхронные вызовы API должны использовать колбэки.</p>

<p>Не все браузеры поддерживают все API: детали см. <a href="/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser support for JavaScript APIs</a>.</p>
</div>

<div>{{SubpagesWithSummaries}}</div>
