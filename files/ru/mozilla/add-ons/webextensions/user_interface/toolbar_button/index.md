---
title: Кнопка в панели инструментов
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
---

{{AddonSidebar}}

Кнопка на панели инструментов браузера (оригинальное название [browser action](/ru/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)) - это иконка, которую можно вывести в панель инструментов. Пользователь взаимодействует с расширением нажимая на неё как на кнопку.
![](browser-action.png)

Кнопка на панели инструментов одинаково отображается для любой открытой вкладки. Это предполагает, что расширение единообразно работает со всеми страницами.

Например, предустановленная кнопка "обновить" перезагружает любую страницу в активной вкладке, кнопка "добавить в избранное" добавляет любой адрес активной вкладки в список избранного. Кнопка загрузок показывает единый для всего браузера список скачанных файлов, независимо от того что за страница открыта в активной вкладке.

Применимые лишь к определённым страницам кнопки следует реализовывать с помощью кнопки в адресной строке ([page action](/ru/docs/Mozilla/Add-ons/WebExtensions/Page_actions)).

## Объявление в manifest.json

За кнопку на панели инструментов отвечает свойство манифеста [`browser_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action):

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Свойство кнопки `default_icon` обязательно, оно определяет внешний вид кнопки - иконку, которая окажется на панели инструментов.

Расширение может иметь только одну кнопку для панели инструментов.

Возможны два способа реакции на нажатие кнопки: отображение [всплывающего окна](/en-US/Add-ons/WebExtensions/Popups) (описано в отдельном разделе) или отправка события в background script расширения. В таком случае реакция на нажатие обеспечивают обработчики событий, подключённые к [`browserAction.onClicked`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked):

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Если же указать в качестве реакции на нажатие всплывающее окно, то событие передано не будет. Вместо этого около кнопки отобразится всплывающее окно - отдельная маленькая страница, дальнейшее взаимодействие с пользователем берёт на себя она. Подробнее этот сценарий описан на отдельной странице, посвящённой [всплывающим окнам](/en-US/Add-ons/WebExtensions/Popups).

Все свойства кнопки на панели инструментов можно изменить программно через API [`browserAction`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/browserAction).

## Примеры

В GitHub репозитории [webextensions-examples](https://github.com/mdn/webextensions-examples) представлены несколько примеров расширений, которые создают кнопку на панели инструментов:

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/) использует событие browserAction.onClicked.
- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) открывает всплывающее окно.
