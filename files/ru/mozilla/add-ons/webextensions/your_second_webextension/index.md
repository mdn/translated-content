---
title: Ваш второй WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---

{{AddonSidebar}}

Если вы уже прочитали статью [Ваш первый WebExtension](/ru/Add-ons/WebExtensions/Your_first_WebExtension), то уже представляете, как создавать WebExtension. В этой статье мы напишем более сложное дополнение, которое демонстрирует ещё несколько API.

Дополнение добавляет новую кнопку на панель инструментов Firefox. Когда пользователь кликает по кнопке, мы показываем ему всплывающую панель с предложением выбрать животное. Когда животное выбрано, мы заменяем содержимое текущей страницы на изображение выбранного животного.

Чтобы реализовать это, мы:

- **определим [browser action](/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_action) - кнопку, прикреплённую к панели инструментов Firefox.**
  Для кнопки мы предоставим:

  - иконку с именем "beasts-32.png"
  - всплывающую панель, если кнопка нажата. Панель состоит из HTML, CSS, и JavaScript.

- **определим иконку для дополнения** с именем "beasts-48.png". Иконка будет показана в Менеджере дополнений.
- **напишем сценарий содержимого(content script) "beastify.js", который будет встроен в веб-страницы**.
  Это тот код, который и будет изменять страницы.
- **упакуем несколько изображений животных для замены изображений на веб-странице**.
  Мы сделаем изображения "доступными веб-ресурсами"(web accessible resources), чтобы веб-страница могла ссылаться на них.

Вы можете представить общую структуру дополнения вот так:

![](untitled-1.png)

Это простое дополнение, но показывает множество основных концепций WebExtensions API:

- добавление кнопки на панель инструментов
- определение всплывающей панели используя HTML, CSS, и JavaScript
- встраивание контент-скрипта в веб-страницы
- взаимодействие между сценарием содержимого и остальным дополнением
- упаковка ресурсов с вашим дополнением, которые будут использованы веб-страницами

Вы можете найти [полный исходный код дополнения на GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify).

Чтобы написать это дополнение, вам нужен Firefox 45 или новее.

## Написание WebExtension

Создайте новую директорию и перейдите в неё:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Теперь создайте файл "manifest.json" и вставьте в него следующее содержимое:

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

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
```

- Первые три ключа: [`manifest_version`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), `и version`, являются обязательными и содержат основные мета-данные для дополнения.
- [`description`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) `и homepage_url` необязательны, но рекомендуемы: они предоставляют полезную информацию о дополнении.
- [`icons`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) необязательный, но рекомендуемый: позволяет вам определять иконку для дополнения, которая будет показана в Менеджере Дополнений.
- [`permissions`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) перечисляет разрешения для нужд дополнения. Здесь мы просто спрашиваем разрешения для [`activeTab` permission](/ru/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).
- [`browser_action`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) задаёт кнопку на панели инструментов. Здесь мы предоставляем три вида информации:

  - `default_icon` это обязательная иконка для кнопки
  - `default_title` необязательный заголовок, будет показан в подсказке
  - `default_popup` используется, если вы хотите, чтобы всплывающая панель была показана когда пользователь кликает по кнопке. В нашем примере мы использовали этот ключ и он указывает на HTML файл, подключённый к дополнению.

- [`web_accessible_resources`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) перечисляет файлы, которые мы хотим сделать доступными для веб-страниц. Поскольку дополнение заменяет содержимое страницы на изображения, которые мы упаковали вместе с дополнением, нам нужно сделать эти изображения доступными для страницы.

Обратите внимание, что все пути указаны относительно файла manifest.json.

### Иконка

Дополнение должно иметь иконку. Она будет показана рядом с дополнением в Менеджере Дополнений (Вы можете открыть менеджер перейдя по ссылке "about:addons"). Наш manifest.json обещает, что у нас будет иконка для панели инструментов по адресу "icons/beasts-48.png".

Создайте папку "icons" и сохраните там иконку с именем "beasts-48.png". Вы можете использовать [иконку из нашего примера](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-48.png), которая взята из [набора Aha-Soft's Free Retina](https://www.iconfinder.com/iconsets/free-retina-icon-set) и используется на условиях этой [лицензии](http://www.aha-soft.com/free-icons/free-retina-icon-set/).

Если вы выберете свою иконку, она должна быть размером 48x48 пикселей. Вы также можете предоставить иконку размером 96x96 пикселей для дисплеев с высоким разрешением, определив свойство `"96"` объекта `icons` в файле manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Кнопка панели инструментов

Кнопка панели инструментов также нуждается в иконке, и наш manifest.json обещает, что у нас будет иконка для панели инструментов по адресу "icons/beasts-32.png".

Сохраните иконку с именем "beasts-32.png" в папке "icons". Вы можете использовать [иконку из нашего примера](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png), которая взята из набора [IconBeast Lite](http://www.iconbeast.com/free) и используется на условиях этой [лицензии](http://www.iconbeast.com/faq/).

Если вы не предоставите всплывающую панель, то событие click отправляется в ваше дополнение, когда пользователь кликает кнопку. Если вы предоставите всплывающую панель, то событие click не отправляется, зато появляется всплывающая панель. Мы хотим панель, давайте создадим её.

### Всплывающая панель

Функция панели - позволить пользователю выбрать одного из трёх зверей.

Создайте новую папку с именем "popup" в корневой папке дополнения. Здесь мы сохраним код для панели. Панель будет состоять из трёх файлов:

- **`choose_beast.html`** определяет содержимое панели
- **`choose_beast.css`** стили для содержимого
- **`choose_beast.js`** обрабатывает выбор пользователя, выполняя content script в активной вкладке

#### choose_beast.html

HTML выглядит так:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div class="button beast">Frog</div>
    <div class="button beast">Turtle</div>
    <div class="button beast">Snake</div>
    <div class="button clear">Reset</div>

    <script src="choose_beast.js"></script>
  </body>
</html>
```

У нас есть элемент для каждого животного. Обратите внимание, что мы подключаем CSS и JS файлы из HTML файла, как на обыкновенной веб-странице.

#### choose_beast.css

CSS фиксирует размер всплывающей панели, гарантирует что три варианта заполняют пространство и даёт им основной стиль:

```css
html,
body {
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
  background-color: #cff2f2;
}

.beast {
  background-color: #e5f2f2;
}

.clear {
  background-color: #fbfbc9;
}

.clear:hover {
  background-color: #eaeac9;
}
```

#### choose_beast.js

В JavaScript для всплывающего окна мы обрабатываем события click. Если click был на одном из трёх вариантов наших животных, мы добавляем content script в активную вкладку. После того, как content script загрузится, мы отправляем ему сообщение с выбранным животным:

```js
/*
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);

    browser.tabs.executeScript(null, {
      file: "/content_scripts/beastify.js",
    });

    var gettingActiveTab = browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { beastURL: chosenBeastURL });
    });
  } else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});
```

Скрипт использует три функции WebExtension API:

- [`browser.tabs.executeScript`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) добавляет content script, найденный по адресу content_scripts/beastify.js", к активной вкладке
- [`browser.tabs.query`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) запрашивает активную вкладку
- [`browser.tabs.sendMessage`](/ru/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) отправляет сообщение для content script, который работает в активной вкладке. Сообщение содержит URL изображения выбранного зверя.

### Content script

Создайте новую папку с именем "content_scripts" в корневой папке дополнения и создайте в ней новый файл с именем "beastify.js", со следующим кодом:

```js
/*
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
```

Content script добавляет обработчик к сообщениям от дополнения (в частности как в файле "choose_beast.js" выше). В обработчике скрипт:

- удаляет каждый элемент из `document.body`
- создаёт `<img>` элемент, указывающий на переданный URL, и вставляет элемент в DOM
- удаляет обработчик сообщений.

### Звери

Наконец, нам нужно подключить изображения животных.

Создайте новую папку с именем "beasts" и добавьте туда три изображения с соответствующими именами. Вы можете получить изображения из [GitHub репозитория](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts), или прямо здесь:

![](frog.jpg)![](snake.jpg)![](turtle.jpg)

## Тестирование

Во-первых, дважды проверьте, что у вас все файлы на своих местах:

```
beastify/

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

    manifest.json
```

Начиная с Firefox 45 вы можете временно установить дополнения с жёсткого диска.

Откройте "about:debugging" в Firefox, кликните "Загрузить временное дополнение", и выберете ваш файл manifest.json. После этого вы должны увидеть иконку дополнения на панели инструментов Firefox:

{{EmbedYouTube("sAM78GU4P34")}}

Откройте веб-страницу, затем щёлкните иконку, выберите зверя и посмотрите как страница изменится:

{{EmbedYouTube("YMQXyAQSiE8")}}

## Разработка из командной строки

Вы можете автоматизировать этап временной установки используя [web-ext](/ru/Add-ons/WebExtensions/Getting_started_with_web-ext). Попробуйте это:

```bash
cd beastify
web-ext run
```
