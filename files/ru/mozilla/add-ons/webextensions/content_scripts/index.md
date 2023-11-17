---
title: Встраиваемый скрипт
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---

{{AddonSidebar}}

Встраиваемый скрипт - это часть расширения, которая выполняется в контексте отдельной веб-страницы (в отличии от фоновых скриптов, выполняющихся в контексте целого браузера).

[Фоновые скрипты](/ru/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B) имеют доступ ко всем методам [WebExtension JavaScript APIs](/ru/docs/Mozilla/Add-ons/WebExtensions/API), но они не имеют доступа к контенту отдельных веб-страниц. Так что если вашему расширению необходимо взаимодействие с контентом веб-страницы, вам нужен встраиваемый скрипт.

Точно так же, как скрипты загружаемые веб-страницами, встраиваемый скрипт может читать и изменять контент веб-страницы, используя DOM API.

Встраиваемые скрипты имеют доступ только к [небольшому подмножеству методов WebExtension API](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D1%81_%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0%D0%BC%D0%B8), но они могут [взаимодействовать с фоновыми скриптами](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D1%81_%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0%D0%BC%D0%B8), используя систему передачи сообщений, таким образом опосредовано имея доступ ко всему WebExtension API.

> **Примечание:** Обратите внимание, что встраивание скриптов блокируется на следующих доменах:
>
> - accounts-static.cdn.mozilla.net
> - accounts.firefox.com
> - addons.cdn.mozilla.net
> - addons.mozilla.org
> - api.accounts.firefox.com
> - content.cdn.mozilla.net
> - content.cdn.mozilla.net
> - discovery.addons.mozilla.org
> - input.mozilla.org
> - install.mozilla.org
> - oauth.accounts.firefox.com
> - profile.accounts.firefox.com
> - support.mozilla.org
> - sync.services.mozilla.com
> - testpilot.firefox.com
>
> Если вы попытаетесь встроить скрипт на страницы, находящиеся на вышеперечисленных доменах, у вас ничего не выйдет, и веб-страница сделает запись о [CSP](/ru/docs/Web/HTTP/CSP) ошибке.
>
> По причине того, что список запрещённых доменов включает в себя addons.mozilla.org, пользователи, которые попытаются испытать ваше расширение прямо на странице загрузки, могут посчитать, что расширение не работает! В связи с этим вы могли бы предоставить им соответствующее предупреждение или [onboarding page](/ru/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices) чтобы немедленно переадресовать их с addons.mozilla.org.

> **Примечание:** Значения, определённые в глобальной области видимости встраиваемого скрипта с помощью `var foo` или `window.foo = "bar"` могут исчезать по причине бага [1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996).

## Загрузка встраиваемого скрипта

Загрузка встраиваемых скриптов на веб-страницу происходит следующими тремя способами:

1. **Автоматическая загрузка скрипта на страницах с определёнными URL, объявленными при установке:** используя [`content_scripts`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) ключ в manifest.json, вы можете запросить браузер загружать встраиваемый скрипт каждый раз, когда браузер загружает веб-страницу, чей URL [совпадает с объявленными шаблонами](/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. **Автоматическая загрузка скрипта на страницах с определёнными URL, объявленными в момент работы расширения:** используя {{WebExtAPIRef("contentScripts")}} API, вы можете запросить браузер загружать встраиваемый скрипт каждый раз, когда браузер загружает веб-страницу, чей URL [совпадает с объявленными шаблонами](/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Это очень похоже на первый метод, но позволяет добавлять и удалять правила динамически во время работы расширения.
3. **Загрузка скрипта расширением в конкретную вкладку:** используя [`tabs.executeScript()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/executeScript) API, вы можете загружать встраиваемые скрипты в определённые вкладки когда захотите: например, в ответ на нажатие пользователя на [browser action](/ru/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action).

Существует только одна глобальная область видимости _для одного фрейма, для одного расширения_. Это означает, что значения из одного встраиваемого скрипта могут быть доступны для другого встраиваемого скрипта, не зависимо от того, как встраиваемый скрипт был загружен на страницу.

Используя методы (1) и (2), вы можете загружать скрипты на страницы, чьи URL могут быть представлены, используя [шаблон совпадения](/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

Используя метод (3), вы к тому же можете загружать скрипты на страницы вашего расширения, но вы не можете загружать скрипты на привилегированные страницы браузеры (например "about:debugging" или "about:addons").

## Условия работы встраиваемого скрипта

### Доступ к DOM

Встраиваемые скрипты имеют доступ и могут изменять DOM на веб-странице, так же как и обычные скрипты. Так же они могут видеть любые изменения сделанные с DOM страничными скриптами.

При этом, встраиваемые скрипты имеют "чистое DOM представление". Это значит:

- Встраиваемые скрипты не могут видеть JavaScript переменных, определённых страничными скриптами.
- Если страничный скрипт переназначит встроенное свойство DOM, встраиваемый скрипт всё равно будет видеть его изначальное значение, а не переназначенное.

В Firefox это поведение называется [Xray vision](/ru/docs/Mozilla/Tech/Xray_vision).

Например, рассмотрите эту веб-страницу:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

Скрипт "page-script.js" делает следующее:

```js
// page-script.js

// добавляет новый элемент к DOM
var p = document.createElement("p");
p.textContent = "Этот параграф был добавлен страничным скриптом.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// определяет новое свойство на объекте window
window.foo = "Эта глобальная переменная была добавлена страничным скриптом";

// переопределяет встроенную window.confirm() функцию
window.confirm = function () {
  alert("Страничный скрипт так же переопределил 'confirm'");
};
```

Теперь расширение загружает встраиваемый скрипт на страницу:

```js
// content-script.js

// получает доступ и изменяет DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// не может видеть свойств определённых страничным скриптом
console.log(window.foo); // undefined

// видит изначальное значение свойства, переопределённого страничным скриптом
window.confirm("Вы уверены?"); // вызывает оригинальный window.confirm()
```

Те же самые правила применяются и наоборот: страничный скрипт не может видеть JavaScript свойств, добавленных встраиваемым скриптом.

Это означает, что встраиваемый скрипт может полагаться на то, что DOM свойства всегда будут вести себя предсказуемо, и не беспокоиться о том, что его переменные будут иметь конфликт с переменными из страничного скрипта.

Одно из последствий такого поведения состоит в том, что встраиваемый скрипт не будет иметь доступ к JavaScript библиотекам, загруженным страничным скриптом. Например, если веб-страница загружает jQuery, встраиваемый скрипт не сможет увидеть эту библиотеку.

Если встраиваемому скрипту необходимо использовать какую-либо JavaScript библиотеку, тогда эта библиотека должна быть загружена, тем же способом, как и встраиваемый скрипт вместе с ним:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> **Примечание:** Firefox предоставляет некоторое API, позволяющее встраиваемому скрипту иметь доступ к JavaScript объектам, созданным страничным скриптом, и предоставлять свои собственные JavaScript объекты страничному скрипту.
>
> Смотрите [совместное использование объектов со страничным скриптом](/ru/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) для получения дополнительной информации.

### Доступные WebExtension API

В дополнение стандартному DOM API, встраиваемый скрипт может использовать следующие методы WebExtension APIs:

Из [`extension`](/ru/Add-ons/WebExtensions/API/extension):

- [`getURL()`](</ru/Add-ons/WebExtensions/API/extension#getURL()>)
- [`inIncognitoContext`](/ru/Add-ons/WebExtensions/API/extension#inIncognitoContext)

Из [`runtime`](/ru/Add-ons/WebExtensions/API/runtime):

- [`connect()`](</ru/Add-ons/WebExtensions/API/runtime#connect()>)
- [`getManifest()`](</ru/Add-ons/WebExtensions/API/runtime#getManifest()>)
- [`getURL()`](</ru/Add-ons/WebExtensions/API/runtime#getURL()>)
- [`onConnect`](/ru/Add-ons/WebExtensions/API/runtime#onConnect)
- [`onMessage`](/ru/Add-ons/WebExtensions/API/runtime#onMessage)
- [`sendMessage()`](</ru/Add-ons/WebExtensions/API/runtime#sendMessage()>)

Из [`i18n`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n):

- [`getMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

Из [`menus`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus):

- [`getTargetElement`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

Ко всему из [`storage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/storage).

### Работа с XHR и Fetch

Встраиваемые скрипты могут делать запросы используя [`window.XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) и [`window.fetch()`](/ru/docs/Web/API/Fetch_API) API.

> **Примечание:** В Firefox, запросы, совершаемые из встраиваемого скрипта (например, используя [fetch()](/ru/docs/Web/API/Fetch_API/Using_Fetch)) происходят в контексте расширения, так что вам необходимо предоставлять полный URL для доступа к контенту страниц. В Chrome, эти запросы совершаются в контексте страницы, так что URL может быть относительным, например `/api` будет трансформирован в `https://[current page URL]/api`.

Встраиваемый скрипт имеет точно такие же кросс-доменные привилегии, как и всё остальное расширение: так что если расширение запросило кросс-доменный доступ на какой-либо домен используя [`permissions`](/ru/Add-ons/WebExtensions/manifest.json/permissions) ключ в manifest.json, тогда его встраиваемый скрипт тоже будет иметь доступ к этому домену.

Это достигается, предоставляя встраиваемому скрипту более привилегированные XHR and fetch объекты. Что имеет побочный эффект, связанный с отсутствием [`Origin`](/ru/docs/Web/HTTP/Headers/Origin) и [`Referer`](/ru/docs/Web/HTTP/Headers/Referer) заголовков, которые имел бы запрос, выполняемый из страничного скрипта. Зачастую это предпочитаемо, для того чтобы предотвратить раскрытие кросс-доменной натуры запроса. Начиная с версии 58 и дальше, расширения, которым необходимо выполнять запросы, которые должны выглядеть будто они отправлены встраиваемым скриптом, могут использовать `content.XMLHttpRequest` и `content.fetch()`. Кросс-браузерные расширения должны проверять присутствие этих методов.

## Взаимодействие с фоновыми скриптами

Хотя встраиваемые скрипты не могут напрямую использовать большинство методов из WebExtension APIs, они могут взаимодействовать с фоновыми скриптами расширения, используя систему сообщений, и таким образом могут опосредованно иметь доступ к тем же самым API, что и фоновые скрипты.

Существует два способа общения между фоновым и встраиваемым скриптами: вы можете посылать одиночные сообщения, ожидая необязательного ответа, или вы можете установить долгосрочное соединение на двух сторонах и использовать это соединение для обмена сообщениями.

### Одиночные сообщения

Для отправки одиночного сообщения и ожидания необязательного ответа, вы можете использовать следующее API:

|                     | Во встраиваемом скрипте                                                                           | В фоновом скрипте                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Отправка сообщения  | [`browser.runtime.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) | [`browser.tabs.sendMessage()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| Получение сообщения | [`browser.runtime.onMessage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)       | [`browser.runtime.onMessage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) |

Например, представьте встраиваемый скрипт, который обрабатывает нажатие левой кнопки мыши на веб-странице.

Если нажатие было произведено по ссылке, встраиваемый скрипт отправляет сообщение фоновому скрипту со значение URL в ссылке:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

Фоновый скрипт ожидает эти сообщения и, при их получении, отображает уведомления, используя [`notifications`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "Вы нажали на ссылку!",
    message: message.url,
  });
}
```

(Этот пример кода частично взят из [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) примера на GitHub.)

### Обмен сообщениями через постоянное соединение

Отправка одиночных сообщений может стать довольно обременительной, если вы пересылаете много сообщений между встраиваемым и фоновым скриптами. Альтернативное решение в этой ситуации будет установить постоянное соединение между двумя скриптами, и использовать его для обмена сообщениями.

Каждая из сторон имеет [`runtime.Port`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) объект, который они могут использовать для обмена сообщениями.

Для создания постоянного соединения:

- Одна из сторон должна ждать соединений, используя [`runtime.onConnect`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Другая сторона должна вызвать:

  - [`tabs.connect()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (при соединении со встраиваемым скриптом); или
  - [`runtime.connect()`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (при соединении с фоновым скриптом).

Результатом вызова этих методов будет возвращение [`runtime.Port`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) объекта.

- [`runtime.onConnect`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) методу передаётся аргумент, являющийся собственным портом этого скрипта, [`runtime.Port`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) объект.

Как только обе стороны имеют порт, они могут:

- отправлять сообщения, используя `runtime.Port.postMessage()`, и
- получать сообщения используя `runtime.Port.onMessage()`

Например, сразу после загрузки, нижерасположенный встраиваемый скрипт:

- Соединяется с фоновым скриптом
- Сохраняет `Port` в переменную `myPort`
- Начинает ожидать и записывать сообщения приходящие на `myPort`
- Использует `myPort` для отправки сообщений на фоновый скрипт, когда пользователь нажимает левую кнопку мыши на документе

```js
// content-script.js

var myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "Привет из встраиваемого скрипта" });

myPort.onMessage.addListener(function (m) {
  console.log(
    "Во встраиваемом скрипте, получено сообщение из фонового скрипта: ",
  );
  console.log(m.greeting);
});

document.body.addEventListener("click", function () {
  myPort.postMessage({ greeting: "Они кликнули по странице!" });
});
```

Соответствующий фоновый скрипт:

- Ожидает попытки соединения от встраиваемого скрипта
- Когда он получает эту попытку соединения:

  - сохраняет свой порт в переменную `portFromCS`
  - отправляет сообщение встроенному скрипту, используя этот порт
  - начинает ожидать сообщений, приходящих на порт, и записывать их

- Отправляет сообщения на встраиваемый скрипт, используя `portFromCS`, когда пользователь нажимает кнопку расширения в браузере

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "Привет, встраиваемый скрипт!" });
  portFromCS.onMessage.addListener(function (m) {
    console.log(
      "В фоновом скрипте, получено сообщение от встраиваемого скрипта",
    );
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  portFromCS.postMessage({ greeting: "Они нажали кнопку!" });
});
```

#### Несколько встраиваемых скриптов

Если вы имеете несколько встраиваемых скриптов, с которыми вы обращаетесь в одно и то же время, вы бы могли сохранять каждое соединение в массиве.

```js
// background-script.js

var ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  //...
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  ports.forEach((p) => {
    p.postMessage({ greeting: "Они нажали на кнопку!" });
  });
});
```

## Взаимодействие с веб-страницей

Хотя по умолчанию встраиваемые скрипты не имеют доступ к объектам, которые созданы страничными скриптами, они могут взаимодействовать со страничными скриптами, используя [`window.postMessage`](/ru/docs/Web/API/Window/postMessage) и [`window.addEventListener`](/ru/docs/Web/API/EventTarget/addEventListener) API.

Например:

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Сообщение со страницы"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function (event) {
  if (
    event.source == window &&
    event.data &&
    event.data.direction == "from-page-script"
  ) {
    alert(
      'Встраиваемый скрипт получил сообщение: "' + event.data.message + '"',
    );
  }
});
```

Для просмотра законченного и полностью рабочего примера, [посетите эту страницу на GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) и следуйте инструкциям.

> **Предупреждение:** Заметьте, при взаимодействии с непроверенными страницами этим способом, вам нужно быть очень осторожными . Расширения имеют возможность запускать привилегированный код, который может обладать серьёзными возможностями, и вредоносные веб-страницы легко могут обмануть ваше расширение, ради доступа к этим возможностям.
>
> Как простейший пример, представим встраиваемый скрипт, который получает сообщение от веб-страницы и делает что-то вроде этого:
>
> ```js
> // content-script.js
>
> window.addEventListener("message", function (event) {
>   if (
>     event.source == window &&
>     event.data.direction &&
>     event.data.direction == "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> Теперь страничный скрипт может запускать любой код со всеми привилегиями встраиваемого скрипта.

## Использование `eval()` во встраиваемых скриптах

В Chrome, [`eval()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval) всегда выполняет код в контексте встраиваемого скрипта, а не в контексте веб-страницы.

В Firefox:

- Если вы вызываете `eval()`, код выполняется в контексте **встраиваемого скрипта**.
- Если вы вызываете `window.eval()`, код выполняется в контексте **страничного скрипта**.

Например, рассмотрите этот встраиваемый скрипт:

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`Во встраиваемом скрипте, window.x: ${window.x}`);
console.log(`Во встраиваемом скрипте, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

Этот код создаёт переменные `x` and `y`, используя `window.eval()` и `eval()`, затем записывает их значения, и отправляет сообщение на веб-страницу.

Получая сообщение, страничный скрипт записывает те же самые переменные:

```js
window.addEventListener("message", function (event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

В Chrome, в консоли будут записаны следующие строки:

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

В Firefox, будут записаны следующие строки:

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Те же правила применимы к [`setTimeout()`](/ru/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`setInterval()`](/ru/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), и [`Function()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function).

> **Предупреждение:** Будьте очень осторожны, запуская код в контексте страничного скрипта. Окружение страничного скрипта может контролироваться потенциально зловредным веб-страницей, которая может переопределить объекты, с которыми вы взаимодействуете, так что их поведение станет совершенно непредсказуемым:
>
> ```js
> // page.js переопределяет console.log
>
> var original = console.log;
>
> console.log = function () {
>   original(true);
> };
> ```
>
> ```js
> // content-script.js вызывает переопределённую версию
>
> window.eval("console.log(false)");
> ```
