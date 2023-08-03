---
title: Модификация веб страницы
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---

{{AddonSidebar}}

Одним из наиболее распространённых вариантов использования расширений является внесение изменение в веб-страницу. К примеру, расширение может изменить стиль, применённый к странице, скрыть существующие или вставить на страницу дополнительные DOM-узлы.

Существует два способа сделать это используя WebExtensions API:

- **Декларативно**: объявить шаблон, которому соответствует набор URL-адресов, и загрузить набор скриптов на страницы, которые попадают в под этот шаблон.
- **Программно**: используя JavaScript API, загрузить скрипт на страницу, из определённой вкладки.

В любом случае, эти скрипты называются _контентными скриптами_, и отличаются от других скриптов, которые составляют расширение:

- Они получают доступ к малому подмножеству WebExtension API.
- Они получают прямой доступ к странице, на которой были загружены.
- Они взаимодействуют с остальными скриптами расширения, используя API сообщений.

В этой статье мы рассмотрим оба способа загрузки скрипта.

## Модификация страниц, подпадающих под URL-шаблон

Прежде всего создадим новую директорию, назовём её "modify-page". В этой директории, создадим файл "manifest.json", со следующим содержимым:

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

Ключ [`content_scripts`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) - это как мы загружаем скрипты на страницы, соответствующие URL-шаблону. В нашем случае, `content_scripts` говорит браузеру загрузить скрипт "page-eater.js" на все страницы, начинающиеся с <https://developer.mozilla.org/>.

> **Примечание:** Поскольку свойство `"js"` ключа `content_scripts` это массив, вы можете использовать его, для внедрения более одного скрипта. Если вы сделаете это, страницы получат набор, как если бы эти скрипты были загружены самой страницей, они будут загружены в той же очерёдности, в которой они расположены в массиве.

> **Примечание:** Ключ `content_scripts` также имеет свойство `"css"`, которое вы можете использовать для вставки CSS-таблиц.

Далее, создадим файл "page-eater.js", внутри директории "modify-page":

```js
document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "Эта страница была съедена";
document.body.appendChild(header);
```

Теперь [установим расширение](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), и перейдём на страницу <https://developer.mozilla.org/>:

{{EmbedYouTube("lxf2Tkg6U1M")}}

> **Примечание:** Обратите внимание, несмотря на то, что в указанном видео, на странице [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) всё работает нормально, на текущий момент, для этого сайта, контентные скрипты заблокированы.

## Программная модификация страницы

Что, если вы всё ещё хотите "съедать" страницы, но лишь в тех случаях, когда пользователь попросил об этом? Давайте обновим этот пример таким образом, чтобы мы внедряли контентный скрипт, когда пользователь выбирает соответствующий пункт контентного меню.

Для начала обновим "manifest.json":

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": ["activeTab", "contextMenus"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Мы удалили ключ `content_scripts` и добавили два новых:

- [`permissions (разрешения)`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): для внедрения скрипта, нам нужны разрешения для страниц, которые мы модифицируем. [Разрешение `activeTab`](/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) это способ получить доступ к текущей вкладки. Нам также нужно разрешение `contextMenus`, чтобы добавлять в контекстное меню новые элементы.
- [`background (фоновый)`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): мы используем этот ключ, для загрузки постоянного ["фонового скрипта"](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts), с именем "background.js", в котором мы настроим контекстное меню и внедрим контентный скрипт.

Давайте создадим этот файл. Создадим новый файл "background.js" в директории "modify-page" и поместим в него следующий код:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Съесть эту страницу",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });
  }
});
```

В этом скрипте мы создаём [элемент контекстного меню](/en-US/Add-ons/WebExtensions/API/ContextMenus/create), передавая ему определённый идентификатор и заголовок (текст будет отображаться в элементе контекстного меню). Затем мы настраиваем обработчик событий таким образом, чтобы когда пользователь выбирает пункт контекстного меню, осуществлялась проверка, наш ли это элемент `eat-page`. Если это так - внедряем скрипт "page-eater.js" в текущую вкладку, используя [`tabs.executeScript()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Это API опционально принимает идентификатор вкладки, в качестве аргумента. Мы опустили его, это означает, что скрипт будет внедряться в текущую активную вкладку.

На данном этапе расширение должно иметь следующий вид:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Теперь [перезагрузим расширение](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), откроем страницу (на этот раз любую) активируем контекстное меню и выберем "Съесть эту страницу":

{{EmbedYouTube("zX4Bcv8VctA")}}

> **Примечание:** Обратите внимание, несмотря на то, что в указанном видео, на странице [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) всё работает нормально, на текущий момент, для этого сайта, контентные скрипты заблокированы.

## Обмен сообщениями

Контентные и фоновые скрипты не могут на прямую взаимодействовать друг с другом. Не смотря на это они могут взаимодействовать с помощью обмена сообщениями. Для этого один конец создаёт обработчик сообщений, а другой - может посылать сообщения. В следующей таблице представлены API-интерфейсы, задействованные с каждой стороны:

|                     | В контентном скрипте                                                                        | В фоновом скрипте                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Отправка сообщения  | [`browser.runtime.sendMessage()`](</en-US/Add-ons/WebExtensions/API/runtime#sendMessage()>) | [`browser.tabs.sendMessage()`](/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| Получение сообщения | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime/onMessage)           | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime#onMessage) |

Давайте обновим наш пример, чтобы посмотреть, как послать сообщение из фонового скрипта.

Изменим "background.js" :

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Съесть эту страницу",
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!",
  });
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });

    var querying = browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    querying.then(messageTab);
  }
});
```

Теперь, после внедрения "page-eater.js", мы используем [`tabs.query()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), чтобы получить текущую открытую вкладку и используем [`tabs.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), для отправки сообщения контентному скрипту, загруженному на этой вкладке. Сообщение несёт полезную нагрузку `{replacement: "Message from the extension!"}`.

Далее, обновим "page-eater.js":

```js
function eatPage(request, sender, sendResponse) {
  document.body.textContent = "";

  var header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}

browser.runtime.onMessage.addListener(eatPage);
```

Теперь, вместо простого "поедания страницы", контентный скрипт ждёт сообщение, используя [`runtime.onMessage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Когда сообщение получено, контентный скрипт выполняет в точности такой же код, как и а примере ранее, за исключением того, что заменяющий текст берётся из `request.replacement`.

Если мы хотим отправить сообщение наоборот, из контентного скрипта в фоновый, настройка будет обратной данному примеру, за исключением того, что мы будем использовать [`runtime.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) в контентном скрипте.

> **Примечание:** Все эти примеры внедряют JavaScript; вы можете программно внедрять стилевые таблицы CSS используя функцию [`tabs.insertCSS()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).

## Узнать больше

- Руководство по [Content scripts](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- Ключ манифеста[`content_scripts`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- Ключ манифеста[`permissions`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [`tabs.executeScript()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Примеры использования `content_scripts`:

  - [borderify](https://github.com/mdn/webextensions-examples/tree/master/borderify)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging)

- Примеры использования `tabs.executeScript()`:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [context-menu-demo](https://github.com/mdn/webextensions-examples/tree/master/context-menu-demo)
