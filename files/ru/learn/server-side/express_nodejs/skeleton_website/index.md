---
title: "Учебник Express часть 2: Создание скелета сайта"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Эта вторая статья в нашем [учебнике Express](/ru/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) показывает, как создать каркас проекта веб-сайта, который позже можно будет заполнить с помощью путей сайта, шаблонов представлений и обращений к базе данных.

| Необходимые знания: | [Установить среду разработки Node](/ru/docs/Learn/Server-side/Express_Nodejs/development_environment). Просмотреть учебник Express. |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Научиться запускать свои проекты используя _Express Application Generator_.                                                         |

## Обзор

В этой статье показано, как создать каркас сайта с помощью средства [Express Application Generator](https://expressjs.com/en/starter/generator.html). Каркас затем можно будет заполнить с помощью путей сайта, шаблонов/представлений и обращений к базе данных. Мы используем это средство для создания основы нашего сайта Local Library. К основе будет добавлен код, необходимый сайту. Создание каркаса чрезвычайно просто — требуется только вызвать генератор в командной строке, указав имя нового проекта, дополнительно можно указать также движок шаблона сайта и генератор CSS.

Далее показано, как вызвать генератор приложений, и даётся небольшое пояснение различных вариантов представлений и CSS. Мы поясним структуру каркаса веб-сайта. В конце мы покажем, как запустить веб-сайт, чтобы убедиться, что он работает.

> **Примечание:** _Express Application Generator_ — не единственный генератор Express-приложений, и созданный проект --не единственный жизнеспособный способ организации ваших файлов и каталогов. Однако созданный сайт имеет модульную структуру, которую легко понять и расширить. О _минимальном_ Express приложении смотрите [Hello world example](https://expressjs.com/en/starter/hello-world.html) в документации Express.

## Применение генератора приложений

Вы уже должны были установить `express-generator`, читая статью установка среды разработки Node. Напомним, что генератор установлен с помощью менеджера пакетов NPM, при выполнении команды:

```bash
npm install express-generator -g
```

`express-generator` имеет ряд параметров, которые можно увидеть, выполнив команду express --help (или express -h):

```bash
> express --help

  Usage: express [options] [dir]

  Options:

    -h, --help           output usage information (информация по применению)
        --version        output the version number (номер версии express)
    -e, --ejs            add ejs engine support (добавить поддержку движка ejs)
        --pug            add pug engine support (добавить поддержку движка pug)
        --hbs            add handlebars engine support (добавить поддержку движка handlebar)
    -H, --hogan          add hogan.js engine support (добавить поддержку движка hogan.js)
    -v, --view <engine>  add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
                         (добавить поддержку движков представлений. По умолчанию - jade)
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
                         (добавить поддержку движков стилей, по умолчанию - простой CSS)
        --git            add .gitignore (добавить поддержку .gitignore)
    -f, --force          force on non-empty directory (работать в каталоге с файлами)
```

Команда `express` создаст проект в _текущем_ каталоге с использованием (устаревшего) движка представления _Jade_ и обычного CSS. Если указать express name, проект будет создан в подкаталоге name текущего каталога.

```bash
express
```

Можно выбрать движок представления (шаблон), используя `--view` параметр `--css` позволяет выбрать движок для создания CSS.

> **Примечание:** Другие опции (`--hogan`, `--ejs`, `--hbs` и пр.) для выбора шаблонизатора устарели. Используйте `--view` (или `-v`)!

### Какой движок представлений следует использовать?

`Express-generator` даёт возможность сконфигурировать несколько популярных движков, включая [EJS](https://www.npmjs.com/package/ejs), [Hbs](http://github.com/donpark/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), и [Vash](https://www.npmjs.com/package/vash), но по умолчанию выбран Jade. Экспресс сразу после установки может поддерживать большое количество и других шаблонизаторов.

> **Примечание:** При желании использовать шаблонизатор, который не поддерживается генератором, просмотрите документацию [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) и документацию для нужного шаблонизатора.

Как правило, следует выбрать шаблонизатор, который имеет всю необходимую вам функциональность и обеспечивает вам высокую производительность - так же, как вы выбираете любой другой компонент! Некоторые критерии для сравнения шаблонизаторов:

- Время до получения результата — если ваша команда уже имела дело с шаблонизатором, то, скорее всего, продуктивнее будет использовать этот шаблонизатор. Если нет, тогда следует учесть все относительные сложности изучения кандидатов в шаблонизаторы.
- Популярность и активность — проверьте популярность движка, возможно, у него есть активное сообщество. Очень важно иметь поддержку для движка, если у вас возникнут проблемы в течении жизни веб-сайта.
- Стиль — некоторые шаблонизаторы используют особую разметку для отображения вставленного контента внутри "обычного" HTML, а другие строят HTML, используя специальный синтаксис (например, используя отступы или блочные имена).
- Производительность и время интерпретации.
- Особенности — следует выбирать движок с учётом таких особенностей:

  - Наследование макета: позволяет определить базовый шаблон и затем наследовать только те части, которые отличаются для конкретной страницы. Это, как правило, лучший подход, чем создание шаблонов путём включения нескольких необходимых компонентов или создания шаблона с нуля каждый раз.
  - Поддержка «Include»: позволяет создавать шаблоны, включая другие шаблоны.
  - Краткий синтаксис управления переменными и циклами.
  - Возможность фильтровать значения переменных на уровне шаблона (например, делать переменные в верхнем регистре или форматировать значение даты).
  - Возможность создавать выходные форматы, отличные от HTML (например, JSON или XML).
  - Поддержка асинхронных операций и потоковой передачи.
  - Возможность использования как на клиенте, так и на сервере. Возможность применения движка шаблона на клиенте позволяет обслуживать данные и выполнять все действия или их большую часть на стороне клиента.

> **Примечание:** В интернете множество ресурсов, которые помогут сравнить различные варианты!

Для этого проекта мы используем шаблонизатор [Pug](https://pugjs.org/api/getting-started.html) (в прошлом назывался Jade) — один из популярнейших Express/JavaScript шаблонизаторов, который поддерживается в Express-generator "из коробки".

### Какие шаблонизаторы CSS следует использовать?

_Express Application Generator_ позволяет создавать проекты, настроенные для применения шаблонизаторов CSS: [LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://stylus-lang.com/).

> **Примечание:** простой CSS имеет некоторые ограничения, затрудняющие выполнение задач. Шаблонизаторы CSS позволяют использовать более эффективный подход для создании таблиц стилей CSS, но требуют компиляции файлов таблиц стилей в стандартный CSS для применения в браузере.

Как и в случае с шаблонизаторами сайта, следует применять шаблонизатор, обеспечивающий высокую производительность работы. В этом проекте мы используем обычный CSS (по умолчанию), поскольку простота наших требований к CSS не оправдает применение чего-то более сложного.

### Какую базу данных следует использовать?

Сгенерированный код не использует и не содержит в себе какой-либо базы данных. _Express_ может использовать любой движок [базы данных](https://expressjs.com/en/guide/database-integration.html), который поддерживается _Node_ (_Express_ не предъявляет каких-либо особых требований к базе данных).

Мы обсудим взаимодействие с базой данных в следующей статье.

## Создание проекта

Разрабатывая пример - приложение _Local Library,_ мы построим проект с именем _express-locallibrary-tutorial._ Используем библиотеку шаблонов Pug, а движок CSS применять не будем.

Выберем место для нового проекта — каталог express-locallibrary-tutorial - и выполним команду:

```bash
express express-locallibrary-tutorial --view=pug
```

Будет создан каталог express-locallibrary-tutorial и выведен список созданных внутри каталога проектных файлов.

```bash
   create : express-locallibrary-tutorial
   create : express-locallibrary-tutorial/package.json
   create : express-locallibrary-tutorial/app.js
   create : express-locallibrary-tutorial/public/images
   create : express-locallibrary-tutorial/public
   create : express-locallibrary-tutorial/public/stylesheets
   create : express-locallibrary-tutorial/public/stylesheets/style.css
   create : express-locallibrary-tutorial/public/javascripts
   create : express-locallibrary-tutorial/routes
   create : express-locallibrary-tutorial/routes/index.js
   create : express-locallibrary-tutorial/routes/users.js
   create : express-locallibrary-tutorial/views
   create : express-locallibrary-tutorial/views/index.pug
   create : express-locallibrary-tutorial/views/layout.pug
   create : express-locallibrary-tutorial/views/error.pug
   create : express-locallibrary-tutorial/bin
   create : express-locallibrary-tutorial/bin/www

   install dependencies:
     > cd express-locallibrary-tutorial && npm install

   run the app:
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

После списка файлов генератор выведет инструкции для установки зависимостей (указанных в файле **package.json**) и запуска приложения (инструкции предназначены для Windows; для Linux/Mac OS X они могут слегка отличаться).

## Запускаем каркас сайта

Сейчас у нас есть готовый каркас проекта. Сайт пока ничего не делает, но его стоит запустить, чтобы убедиться в его работоспособности.

1. Прежде всего установим зависимости (команда `install` запросит все пакеты зависимостей, указанные в файле **package.json**).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Затем запустим приложение.

   - В Windows используйте команду:

     ```bash
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - В Mac OS X или Linux используйте команду:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Откроем <http://localhost:3000/> в браузере. Мы должны увидеть такую страницу:

![Browser for default Express app generator website](expressgeneratorskeletonwebsite.png)

У нас получилось веб-приложение на базе Express, работающее по адресу _localhost:3000_.

> **Примечание:** Можно также запустить приложение командой `npm start`. Переменная DEBUG, указанная в примере, включает логирование в консоль для дальнейшей отладки. Так, при посещении страницы веб-приложения, вы увидите похожий вывод в консоль:
>
> ```bash
> >SET DEBUG=express-locallibrary-tutorial:* & npm start
>
> > express-locallibrary-tutorial@0.0.0 start D:\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 288.474 ms - 170
> GET /stylesheets/style.css 200 5.799 ms - 111
> GET /favicon.ico 404 34.134 ms - 1335
> ```

## Обеспечиваем<br>перезапуск сервера при изменении файлов

Любые изменения, внесённые на веб-сайт Express, не будут отображаться до перезапуска сервера. Остановка (Ctrl-C) и перезапуск сервера каждый раз после внесения изменений быстро становится раздражающей, поэтому стоит автоматизировать перезапуск.

Одно из самых простых средств для этого --
[nodemon](https://github.com/remy/nodemon). Его обычно устанавливают глобально (так как это "инструмент"), но сейчас мы установим его и будем применять локально как зависимость разработки, так что любые разработчики проекта получат его автоматически при установке приложения. Выполним следующую команду (предполагаем, что мы находимся в корневом каталоге):

```bash
npm install --save-dev nodemon
```

Если вы предпочитаете установить nodemon глобально, не только для этого проекта, надо выполнить команду

```
npm install -g nodemon
```

В файле **package.json** проекта появится новый раздел с этой зависимостью (на вашей машине номер версии nodemon может быть другим) :

```json
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
```

Поскольку nodemon не установлен глобально, его нельзя запустить из командной строки (пока мы не добавим его в путь), но его можно вызвать из сценария NPM, так как NPM знает все об установленных пакетах. Раздел `scripts` в файле package.json исходно будет содержать одну строку, которая начинается с `"start"`. Обновите его, поставив запятую в конце строки, и добавьте строку `"devstart",` показанную ниже:

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

Теперь можно запустить сервер почти так же, как и ранее, но командой npm run devstart:

- В Windows:

```bash
SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
```

- Для macOS или Linux:

```
DEBUG=express-locallibrary-tutorial:* npm run devstart
```

> **Примечание:** Сейчас после изменения любого файла проекта сервер будет перезапускаться (или можно самостоятельно перезапустить его, введя `rs` в командной строке). Вам всё равно придётся обновить страницу в браузере .
>
> Теперь мы должны выполнять команду "`npm run` _\<scriptname>_" а не просто `npm start`, поскольку "start", это, по сути, команда NPM, сопоставленная сценарию в файле package.json. Можно заменить команду в сценарии "start", но, так как мы хотим использовать nodemon только во время разработки, разумно создать новую команду сценария.

## Созданный проект

Давайте посмотрим на созданный проект.

### Структура каталогов

После установки зависимостей проект имеет такую структуру файлов (файлы - это элементы **без** префикса"/"). Файл **package.json** определяет имя файла с приложением, сценарии запуска, зависимости и др. Сценарий запуска задаёт точку входа приложения, у нас — файл JavaScript **/bin/www**. Этот файл настраивает некоторые обработчики ошибок приложения, а затем загружает **app.js** для выполнения остальной работы. Пути приложения хранятся в отдельных модулях каталога **routes/**. Шаблоны хранятся в каталоге /**views**.

```
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    /node_modules
        [about 4,500 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

Далее файлы описаны более подробно.

### package.json

Файл **package.json** указывает зависимости приложения и содержит другие данные:

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.14.0",
    "morgan": "~1.7.0",
    "pug": "~2.0.0-beta6",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}
```

Зависимости включают пакет express и пакет для выбранного движка представления (pug). Кроме того, указаны пакеты, полезные во многих веб-приложениях:

- [body-parser](https://www.npmjs.com/package/body-parser): — анализирует часть тела входящего запроса HTTP и облегчает извлечение из него различных частей. Например, мы можно читать `POST-`параметры.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): разбирает заголовок и заполняет `req.cookies` (по сути, даёт удобный метод для доступа к информации cookie).
- [debug](https://www.npmjs.com/package/debug): небольшой отладчик, работающий по образцу методики отладки ядра node.
- [morgan](https://www.npmjs.com/package/morgan): средство логирования запросов HTTP для node.
- [serve-favicon](https://www.npmjs.com/package/serve-favicon): средство обработки [favicon](https://en.wikipedia.org/wiki/Favicon) (значка, используемого для представления сайта на вкладках браузера, закладках и т. д).

Раздел "scripts" определяет скрипт" start", выполняемый при запуске сервера командой `npm start`. Можно видеть, что самом деле выполняется команда node **./bin/www**. Кроме того, определяется script "_devstart_", который вызывается командой `npm run devstart`. Запускается тот же файл **./bin/www** ,но командой _nodemon_ вместо _node_.

```json
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### Файл www

Файл **/bin/www** – это входная точка приложения. Сначала в файле создаётся объект основного приложения, расположенного в app.js — выполняется `app= require(./app)`.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
```

> **Примечание:** `require()` — это глобальная функция node для импорта модулей в текущий файл. Для модуля **app.js** указан относительный путь, а расширение файла по умолчанию (.js) опущено.

Оставшаяся часть кода настраивает порт сервера node для HTTP (определён в переменной среды или 3000, если не определён), и начинает обработку и протоколирование соединений и ошибок сервера. Сейчас вам не требуется дополнительных сведений о коде (все в этом файле шаблонно), но, при желании, его можно посмотреть.

### Файл app.js

Этот файл создаёт объект приложения `express` (с именем `app`, по соглашению), настраивает приложение и промежуточное ПО, а затем экспортирует приложение из модуля. В приведённом ниже коде показаны только те части файла, которые создают и экспортируют объект приложения:

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

Именно этот экспортированный объект использован в рассмотренном ранее файле www.

Рассмотрим детали файла app.js. Сначала при помощи require(...) выполняется импорт некоторых полезных библиотек node: _express,_ s*erve-favicon*, _morgan_, _cookie-parse, body-parser_ (они ранее были загружены для нашего приложения командой npm install), а также path из основной библиотеки node (применяется для разбора путей каталогов и файлов).

```js
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
```

Затем require запрашивает модули из каталога путей route. Эти модули и файлы содержат код для обработки конкретного набора соответствующих путей (URL маршрутов). Если мы расширим каркас приложения, например, чтобы получить список книг библиотеки, нам следует добавить новый файл для обработки пути, связанного с книгами.

```js
var index = require("./routes/index");
var users = require("./routes/users");
```

> **Примечание:** Здесь мы только импортируем модули. В действительности эти пути ещё не используются — это произойдёт в файле несколько позже.

Далее, импортированные модули express применяются для создания объекта app, который потом устанавливает движки-шаблоны представления. Установка движков состоит их двух частей. В первой мы задаём значение 'view', указывая папку, в которой будут размещаться шаблоны (у нас это /views). Во второй мы задаём значение движка 'view engine', указывая на библиотеку шаблона (у нас — "pug").

```js
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Следующие строки вызывают app.use(...), чтобы добавить промежуточные (middleware) библиотеки в цепочку обработки запросов. Кроме сторонних библиотек, импортированных ранее, используем библиотеку Express.static, что позволит обрабатывать статические файлы из папки **/public** корня проекта.

```js
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
```

Теперь, когда промежуточные библиотеки настроены, мы добавляем (импортированный ранее) код обработки путей в цепочку обработки запросов. Импортированный код будет задавать отдельные пути для разных частей сайта:

```js
app.use("/", index);
app.use("/users", users);
```

> **Примечание:** . пути, указанные выше ('/' и '`/users'`) рассматриваются как префиксы путей, определённых в импортированных файлах. Так, например, если импортированный модуль users определяет путь для /profile, для доступа следует указать /users/profile. Мы поговорим подробнее о путях в последующей статье.

Последняя в файле промежуточная библиотека добавляет методы обработки ошибок и ответов 404 от HTTP.

```js
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

Объект app приложения Express теперь полностью настроен. Остался последний шаг - добавить его к экспортируемым элементам модуля (это позволит импортировать его в файле **/bin/www**).

```js
module.exports = app;
```

### Пути (Routes)

Файл путей /routes/users.js приведён ниже (файлы путей имеют сходную структуру, поэтому нет необходимости приводить также index.js). Сначала загружается модуль Express, затем он используется для получения объекта express.Router. После этого для этого объекта задаётся путь, и, наконец, объект-роутер экспортируется из модуля (именно это позволяет импортировать файл в app.js):.

```js
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
```

Путь определяет колбэк-функцию, которая будет вызвана, когда обнаружится HTTP GET-запрос корректного вида. Образец для сопоставления пути задаётся при импорте модуля — ('`/users`') плюс что-то, определяемое в этом файле ('`/`'). Иными словами, этот путь будет использован, когда получен URL-запрос `/users/`.

> **Примечание:** запустите сервер и задайте в браузере URL `http://localhost:3000/users/`. Вы должны увидеть сообщение: 'respond with a resource'.

Стоит отметить, что колбэк-функция имеет третий аргумент - '`next`', т. е. является не простой колбэк-функцией, а колбэк-функцией промежуточного модуля. Пока третий аргумент не используется, но будет полезен в дальнейшем, если мы захотим создать несколько обработчиков пути `'/'`.

### Представления (шаблоны)

Файлы преставлений (шаблонов) хранятся в каталоге **/views** (это указано в **app.js**) и имеют расширение **.pug**. Метод [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) выполняет указанный шаблон, передавая объекту значение именованной переменной, и затем посылает результат как ответ. В коде из **/routes/index.js** (приводится ниже) можно увидеть, что роут отвечает, используя шаблон "index" с переданным значением переменной "title" из шаблона.

```js
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
```

Шаблон для пути '/' приведён ниже (файл **index.pug**). О синтаксисе мы поговорим позже. Сейчас важно знать, что переменная title со значением 'Express' помещена в определённое место шаблона.

```
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Мини-тест

Создайте новый путь в **/routes/users.js**, чтобы выводить текст **"You're so cool"** или **"Ну, вы крутой!"** по URL _`/users/cool/`_. Проверьте его, запустив сервер и посетив в браузере `http://localhost:3000/users/cool/`.

## Итоги

Сейчас создан каркас проекта Local Library. Мы проверили, что он запускается с использованием Node. Но главное, что вы поняли структуру проекта, и знаете, где и как добавить пути и представления для нашей локальной библиотеки.

Далее мы изменим каркас, чтобы он работал как библиотечный веб-сайт

## Смотрите также

- [Express application generator](https://expressjs.com/en/starter/generator.html) (документация Express)
- [Using template engi nes with Express](https://expressjs.com/en/guide/using-template-engines.html) (документация Express)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
