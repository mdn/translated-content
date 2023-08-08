---
title: Страницы расширения
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
---

{{AddonSidebar()}}

В расширение можно добавить HTML-страницы, чтобы предоставить пользователю формы, помощь или другое необходимое содержимое.

![Example of a simple bundled page displayed as a detached panel.](bundled_page_as_panel_small.png)

Эти страницы получат доступ к привилегированным средствам JavaScript API — таким же как те, что доступны фоновым скриптам расширения. Но каждая из них будет открыта в своей отдельной вкладке — со своей очередью задач JavaScript, своими глобальными переменными и т. д.

Фоновую страницу можно считать "невидимой страницей расширения".

## Определение страниц расширения

К расширению можно подключить файлы HTML и используемые в них файлы CSS и JavaScript. Можно расположить все эти файлы в корне папки расширения, а можно организовать более сложную структуру каталога.

```
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Отображение страниц расширения

Есть два способа отобразить страницу расширения: {{WebExtAPIRef("windows.create()")}} и {{WebExtAPIRef("tabs.create()")}}.

Например для того, чтобы создать окно сообщения, можно с помощью функции `windows.create()` открыть страницу HTML в отсоединённой панели (detached panel) — в окне без строки адреса, полосы закладок и других обычных элементов управления:

```js
let createData = {
  type: "detached_panel",
  url: "panel.html",
  width: 250,
  height: 100,
};
let creating = browser.windows.create(createData);
```

Когда окно больше не будет нужно, его можно закрыть программно.

Например, когда пользователь нажмёт на кнопку, можно вызвать функцию {{WebExtAPIRef("windows.remove()")}} и передать ей идентификатор текущего окна:

```js
document.getElementById("closeme").addEventListener("click", function () {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Страницы расширения и история

По умолчанию страницы, открытые таким образом, будут сохранены в истории браузера — точно так же, как и обычные веб-страницы. Если такое поведение не нужно, используйте {{WebExtAPIRef("history.deleteUrl()")}}, чтобы удалить запись:

```js
function onVisited(historyItem) {
  if (historyItem.url == browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Для использования API истории браузера нужно добавить разрешение "`history`" с помощью элемента [permissions](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) в файле [`manifest.json`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

## Дизайн веб-страницы

Подробности о том, как сделать, чтобы дизайн ваших страниц совпадал со стилем Firefox, смотрите на сайте [Система дизайна Photon](https://design.firefox.com/photon/index.html) (на английском языке) и в документации [browser styles](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles).

## Примеры

В репозитории [webextensions-examples](https://github.com/mdn/webextensions-examples) на GitHub есть пример [window-manipulator](https://github.com/mdn/webextensions-examples/tree/master/window-manipulator), в котором используются некоторые из возможностей для создания окон.
