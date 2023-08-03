---
title: JavaScript APIs
slug: Mozilla/Add-ons/WebExtensions/API
---

{{AddonSidebar}}

WebExtension JavaScript API может быть использован в [фоновых скриптах](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B) расширения, а так же в любых других документах, поставляемых вместе с расширением, таких как документы во всплывающих окнах после нажатия кнопок активации расширения [browser action](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)на панели инструментов или [page action](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) в строке адреса, [боковой панели](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [страницах настроек](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) или [новых открытых вкладках](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Некоторые из этих API могут быть доступны на [встраиваемых в страницу скриптах](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%92%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B) (см. [список в руководстве по встраиваемым скриптам](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)).

Для использования отдельных более продвинутых API, необходимо [запросить разрешения](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) в manifest.json вашего дополнения.

Вы можете получить доступ к API, используя пространство имён `browser`:

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

Многие API выполняются асинхронно, возвращая [`Promise`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise):

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "/" });
setCookie.then(logCookie, logError);
```

Обратите внимание, что это отличается от расширений Google Chrome, которые используют пространство имён `chrome` вместо `browser` и колбэки для асинхронных функций вместо промисов.

Для поддержки портирования, реализация Firefox WebExtensions API так же поддерживает пространство имён `chrome` и использование колбэков. Это позволяет в большинстве случаев не изменять код, изначально написанный для Chrome.

Mozilla так же предоставляет полифил, который позволяет коду, использующему `browser` и промисы, работать без изменений в Chrome: <https://github.com/mozilla/webextension-polyfill>.

Microsoft Edge использует пространство имён `browser`, но ещё не поддерживает, основанный на промисах асинхронный API. В Edge на данный момент асинхронные вызовы API должны использовать колбэки.

Не все браузеры поддерживают все API: детали см. [Browser support for JavaScript APIs](/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).

{{SubpagesWithSummaries}}
