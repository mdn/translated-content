---
title: Client-side storage
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Современные веб-браузеры поддерживают несколько способов хранения данных из веб-сайтов на компьютере пользователя - с разрешения пользователя - чтобы потом получать их, когда это необходимо. Это позволяет долгосрочно хранить данные, сохранять сайты или документы для использования без подключения к сети, сохранять пользовательские настройки для вашего сайта и многое другое. В этой статье объясняются основы того, как это все работает.

| Что нужно знать: | JavaScript basics (see [first steps](/ru/docs/Learn/JavaScript/First_steps), [building blocks](/ru/docs/Learn/JavaScript/Building_blocks), [JavaScript objects](/ru/docs/Learn/JavaScript/Objects)), the [basics of Client-side APIs](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель статьи:     | To learn how to use client-side storage APIs to store application data.                                                                                                                                                                                                                            |

## Хранение данных на стороне клиента?

Ранее, мы говорили о разнице между [статическими](/ru/docs/Learn/Server-side/First_steps/Client-Server_overview#Static_sites) и [динамическими сайтами](/ru/docs/Learn/Server-side/First_steps/Client-Server_overview#Dynamic_sites). Большинство современных веб-сайтов являются динамическими - они хранят данные на сервере, используя какую-то базу данных (серверное хранилище), а затем запускают код [на стороне сервера](/ru/docs/Learn/Server-side) чтобы извлечь необходимые данные, вставить их в шаблоны статических страниц и передать полученный HTML-код клиенту для отображения в браузере пользователя.

Хранилище на стороне клиента работает по схожим принципам, но используется по-другому. Оно состоит из API-интерфейсов JavaScript, которые позволяют вам хранить данные на клиенте (то есть на компьютере пользователя), а затем извлекать их при необходимости. Это имеет много разных применений, таких как:

- Персонализация настроек сайта (например, отображение выбранных пользователем виджетов, цветовой схемы или размера шрифта).
- Сохранение предыдущей активности на сайте (например, сохранение содержимого корзины покупок из предыдущего сеанса, запоминание, был ли пользователь ранее авторизован в системе).
- Сохранение данных и ресурсов локально, так что сайт будет быстрее (и, возможно, экономичнее) загружаться или использоваться без подключения к сети.
- Сохранение созданных веб-приложением документов локально для использования в автономном режиме.

Часто, хранилища на сторонах клиента и сервера используются совместно. К примеру, вы должны загрузить из базы данных пакет музыкальных файлов для веб-игры, или музыкальный плеер хранит их в базе данных на стороне клиента, и воспроизводит по мере необходимости.

Пользователь должен будет загрузить музыкальные файлы только один раз - при последующих посещениях они будут извлечены из локальной базы данных.

> **Примечание:** Существуют ограничения на объем данных, которые вы можете хранить с помощью API-интерфейсов на стороне клиента (возможно, как для отдельных API, так и в совокупности). Точный лимит варьируется в зависимости от браузера и, возможно, в зависимости от пользовательских настроек. Смотри [Ограничения хранилища браузера и критерии переполнения](/ru/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) для большей информации.

### Старый подход: куки

Концепция хранения на стороне клиента существует уже давно. С первых дней Интернета, использовали [cookies](/ru/docs/Web/HTTP/Cookies) для хранения информации, чтобы персонализировать пользовательский опыт на веб-сайтах. Это самая ранняя форма хранилища на стороне клиента, обычно используемая в Интернете.

Из-за этого возраста существует ряд проблем - как технических, так и с точки зрения пользовательского опыта - связанных с файлами cookie. Эти проблемы настолько значительны, что при первом посещении сайта людям, живущим в Европе, показываются сообщения, информирующие их о том, будут ли они использовать файлы cookie для хранения данных о них. Это связано с частью законодательства Европейского Союза, известного как [EU Cookie directive](/ru/docs/Web/HTTP/Cookies#EU_cookie_directive).

![](cookies-notice.png)

По этим причинам мы не будем учить вас, как использовать куки в этой статье. Они устарели, у них множество [проблем с безопасностью](/ru/docs/Web/HTTP/Cookies#Security), и неспособны хранить сложные данные. При этом существуют лучшие, более современные, способы хранения более широкого спектра данных на компьютере пользователя.

Единственным преимуществом файлов cookie является то, что они поддерживаются очень старыми браузерами, поэтому, если ваш проект требует, чтобы вы поддерживали устаревшие браузеры (например, Internet Explorer 8 или более ранние версии), файлы cookie могут по-прежнему быть полезными, но для большинства проектов вы не нужно больше прибегать к ним.

> **Примечание:** Почему по-прежнему создаются новые сайты с использованием файлов cookie? Это происходит главным образом из-за привычек разработчиков, использования старых библиотек, которые всё ещё используют куки-файлы, и наличия множества веб-сайтов, предоставляющих устаревшие справочные и учебные материалы для обучения хранению данных.

### Новый подход: Web Storage и IndexedDB

Современные браузеры имеют гораздо более простые и эффективные API для хранения данных на стороне клиента, чем при использовании файлов cookie.

- The [Web Storage API](/ru/docs/Web/API/Web_Storage_API) обеспечивает очень простой синтаксис для хранения и извлечения данных, состоящих из пар 'ключ' : 'значение'. Это полезно, когда вам просто нужно сохранить некоторые простые данные, такие как имя пользователя, вошли ли они в систему, какой цвет использовать для фона экрана и т. д.
- The [IndexedDB API](/ru/docs/Web/API/IndexedDB_API) обеспечивает браузер полной базой данных для хранения сложных данных. Это может быть использовано для хранения полных наборов записей клиентов и даже до сложных типов данных, таких как аудио или видео файлы.

Вы узнаете больше об этих API ниже.

### Что нас ждёт в будущем: Cache API

Некоторые современные браузеры поддерживают новое {{domxref("Cache")}} API. Этот API предназначен для хранения HTTP-ответов на конкретные запросы и очень полезен для таких вещей, как хранение ресурсов сайта в автономном режиме, чтобы впоследствии сайт можно было использовать без сетевого подключения. Cache обычно используется в сочетании с [Service Worker API](/ru/docs/Web/API/Service_Worker_API), однако это не обязательно.

Использование Cache и Service Workers - сложная тема, и мы не будем подробно останавливаться на ней в этой статье, хотя приведём простой пример [Offline asset storage](#offline_asset_storage) в разделе ниже.

## Хранение простых данных — web storage

[Web Storage API](/ru/docs/Web/API/Web_Storage_API) очень легко использовать — вы храните простые пары данных имя/значение (только строки, цифры и т.п.) и получаете их, когда необходимо.

### Базовый синтаксис

Посмотрите:

1. Во-первых, посмотрите наши [web storage шаблоны](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) на GitHub (откройте в новой вкладке).
2. Откройте консоль инструментов JavaScript разработчика вашего браузера.
3. Все данные вашего веб-хранилища содержатся в двух объектоподобных структурах внутри браузера: {{domxref("Window.sessionStorage", "sessionStorage")}} и {{domxref("Window.localStorage", "localStorage")}}. Первый сохраняет данные до тех пор, пока браузер открыт (данные теряются при закрытии браузера), а второй сохраняет данные даже после того, как браузер закрыт, а затем снова открыт. Мы будем использовать второй в этой статье, так как он, как правило, более полезен.

   {{domxref("Storage.setItem()")}} метод позволяет сохранить элемент данных в хранилище - он принимает два параметра: имя элемента и его значение. Попробуйте ввести это в свою консоль JavaScript (измените значение на своё собственное имя, если хотите!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. {{domxref("Storage.getItem()")}} метод принимает один параметр - имя элемента данных, который вы хотите получить - и возвращает значение элемента. Теперь введите эти строки в вашу консоль JavaScript:

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   После ввода во второй строке вы должны увидеть, что переменная `myName` теперь содержит значение элемента данных `name`.

5. {{domxref("Storage.removeItem()")}} метод принимает один параметр - имя элемента данных, который вы хотите удалить, - и удаляет этот элемент из веб-хранилища. Введите следующие строки в вашу консоль JavaScript:

   ```js
   localStorage.removeItem("name");
   var myName = localStorage.getItem("name");
   myName;
   ```

   Третья строка должна теперь возвращать ноль - элемент `name` больше не существует в веб-хранилище.

### Данные сохраняются!

Одной из ключевых особенностей веб-хранилища является то, что данные сохраняются между загрузками страниц (и даже в случае закрытия браузера, в случае `localStorage`). Давайте посмотрим на это в действии.

1. Снова откройте пустой шаблон нашего веб-хранилища, но на этот раз в другом браузере, отличном от того, в котором вы открыли этот учебник! Так будет удобнее.
2. Введите эти строки в консоль JavaScript браузера:

   ```js
   localStorage.setItem("name", "Chris");
   var myName = localStorage.getItem("name");
   myName;
   ```

   Вы должны увидеть возвращённое имя элемента.

3. Теперь закройте браузер и откройте его снова.
4. Введите следующий код:

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   Вы должны увидеть, что значение всё ещё доступно, даже после закрытия / открытия браузера.

### Для каждого домена отдельное хранилище

Существуют отдельные хранилища данных для каждого домена (каждый отдельный веб-адрес загружается в браузер). Вы увидите, что если вы загрузите два веб-сайта (например, google.com и amazon.com) и попытаетесь сохранить элемент на одном веб-сайте, он не будет доступен для другого веб-сайта.

Это имеет смысл - вы можете представить себе проблемы безопасности, которые могут возникнуть, если веб-сайты смогут видеть данные друг друга!

### Более развёрнутый пример

Давайте применим эти новые знания, написав простой рабочий пример, чтобы дать вам представление о том, как можно использовать веб-хранилище. Наш пример позволит вам ввести имя, после чего страница обновится, чтобы дать вам персональное приветствие. Это состояние также будет сохраняться при перезагрузке страницы / браузера, поскольку имя хранится в веб-хранилище.

Вы можете найти пример HTML на [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — он содержит простой веб-сайт с заголовком, контентом и нижним колонтитулом, а также форму для ввода вашего имени.

![](web-storage-demo.png)

Давайте создадим пример, чтобы вы могли понять, как он работает.

1. Во-первых, сделайте локальную копию нашего [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) файла в новом каталоге на вашем компьютере.
2. Далее обратите внимание, как наш HTML ссылается на файл JavaScript с именем `index.js` (см. строку 40). Нам нужно создать его, и записать в него наш код JavaScript. Создайте файл `index.js` в том же каталоге, что и ваш HTML-файл.
3. Мы начнём с создания ссылок на все функции HTML, которыми мы должны манипулировать в этом примере - мы создадим их все как константы, поскольку эти ссылки не нужно изменять в жизненном цикле приложения. Добавьте следующие строки в ваш файл JavaScript:

   ```js
   // create needed constants
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Далее нам нужно включить небольшой обработчик событий, чтобы форма фактически не отправляла себя при нажатии кнопки отправки, так как это не то поведение, которое нам нужно. Добавьте этот фрагмент ниже вашего предыдущего кода:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", function (e) {
     e.preventDefault();
   });
   ```

5. Теперь нам нужно добавить обработчик событий, функция-обработчик которого будет запускаться при нажатии кнопки «Say hello». В комментариях подробно объясняется, что делает каждый бит, но в сущности здесь мы берём имя, которое пользователь ввёл в поле ввода текста, и сохраняем его в веб-хранилище с помощью `setItem()`, затем запускаем функцию `nameDisplayCheck()`, которая будет обрабатывать обновление фактического текста сайта. Добавьте это в конец:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", function () {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the
     // personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. На этом этапе нам также необходим обработчик событий для запуска функции при нажатии кнопки «Forget» — она будет отображена только после того как кнопка «Say hello» будет нажата (две формы состояния для переключения между ними). В этой функции мы удаляем переменную `name` из веб-хранилища используя `removeItem()`, затем снова запускаем `nameDisplayCheck()` для обновления. Добавьте этот код в конец:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", function () {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the
     // generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Самое время для определения самой функции `nameDisplayCheck()`. Здесь мы проверяем была ли переменная `name` сохранена в веб-хранилище с помощью `localStorage.getItem('name')` в качестве условия. Если переменная `name` была сохранена, то вызов вернёт - `true`; если же нет, то - `false`. Если `true`, мы показываем персональное приветствие, отображаем кнопку «Forget», и скрываем кнопку «Say hello». Если же `false`, мы отображаем общее приветствие и делаем обратное. Опять же, добавьте следующий код в конец:

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       let name = localStorage.getItem("name");
       h1.textContent = "Welcome, " + name;
       personalGreeting.textContent =
         "Welcome to our website, " +
         name +
         "! We hope you have fun while you are here.";
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Последнее но не менее важное, нам необходимо запускать функцию `nameDisplayCheck()` при каждой загрузке страницы. Если мы не сделаем этого, персональное приветствие не будет сохранятся после перезагрузки страницы. Добавьте следующий фрагмент в конец вашего кода:

   ```js
   document.body.onload = nameDisplayCheck;
   ```

Ваш пример закончен — отличная работа! Всё что теперь осталось это сохранить ваш код и протестировать вашу HTML страницу в браузере. Вы можете посмотреть нашу [завершённую версию работающую здесь](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> **Примечание:** Есть и другой, немного более комплексный пример описываемый в [Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

## Храним более сложную информацию в IndexedDB

[IndexedDB API](/ru/docs/Web/API/IndexedDB_API) (иногда сокращают до IDB) это полная база данных, доступная в браузере, в которой вы можете хранить сложные связанные данные, типы которых не ограничиваются простыми значениями, такими как строки или числа.

Вы можете сохранить видео, фото, и почти все остальные файлы с IndexedDB.

Однако это обходится дорого: IndexedDB гораздо сложнее в использовании, чем Web Storage API.

В этом разделе мы действительно только коснёмся того, на что он способен, но мы дадим вам достаточно, чтобы начать.

### Работа с примером хранения заметок

Here we'll run you through an example that allows you to store notes in your browser and view and delete them whenever you like, getting you to build it up for yourself and explaining the most fundamental parts of IDB as we go along.

The app looks something like this:

![](idb-demo.png)

Each note has a title and some body text, each individually editable. The JavaScript code we'll go through below has detailed comments to help you understand what's going on.

### Предустановка

1. First of all, make local copies of our [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/style.css), and [`index-start.js`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) files into a new directory on your local machine.
2. Have a look at the files. You'll see that the HTML is pretty simple: a web site with a header and footer, as well as a main content area that contains a place to display notes, and a form for entering new notes into the database. The CSS provides some simple styling to make it clearer what is going on. The JavaScript file contains five declared constants containing references to the {{htmlelement("ul")}} element the notes will be displayed in, the title and body {{htmlelement("input")}} elements, the {{htmlelement("form")}} itself, and the {{htmlelement("button")}}.
3. Rename your JavaScript file to `index.js`. You are now ready to start adding code to it.

### Настраиваем базу данных

Now let's look at what we have to do in the first place, to actually set up a database.

1. Below the constant declarations, add the following lines:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Here we are declaring a variable called `db` — this will later be used to store an object representing our database. We will use this in a few places, so we've declared it globally here to make things easier.

2. Next, add the following to the bottom of your code:

   ```js
   window.onload = function () {};
   ```

   We will write all of our subsequent code inside this `window.onload` event handler function, called when the window's {{event("load")}} event fires, to make sure we don't try to use IndexedDB functionality before the app has completely finished loading (it could fail if we don't).

3. Inside the `window.onload` handler, add the following:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see onupgradeneeded below)
   let request = window.indexedDB.open("notes", 1);
   ```

   This line creates a `request` to open version `1` of a database called `notes`. If this doesn't already exist, it will be created for you by subsequent code. You will see this request pattern used very often throughout IndexedDB. Database operations take time. You don't want to hang the browser while you wait for the results, so database operations are {{Glossary("asynchronous")}}, meaning that instead of happening immediately, they will happen at some point in the future, and you get notified when they're done.

   To handle this in IndexedDB, you create a request object (which can be called anything you like — we called it `request` so it is obvious what it is for). You then use event handlers to run code when the request completes, fails, etc., which you'll see in use below.

   > **Примечание:** The version number is important. If you want to upgrade your database (for example, by changing the table structure), you have to run your code again with an increased version number, different schema specified inside the `onupgradeneeded` handler (see below), etc. We won't cover upgrading databases in this simple tutorial.

4. Now add the following event handlers just below your previous addition — again inside the `window.onload` handler:

   ```js
   // onerror handler signifies that the database didn't open successfully
   request.onerror = function () {
     console.log("Database failed to open");
   };

   // onsuccess handler signifies that the database opened successfully
   request.onsuccess = function () {
     console.log("Database opened successfully");

     // Store the opened database object in the db variable. This is used a lot below
     db = request.result;

     // Run the displayData() function to display the notes already in the IDB
     displayData();
   };
   ```

   The {{domxref("IDBRequest.onerror", "request.onerror")}} handler will run if the system comes back saying that the request failed. This allows you to respond to this problem. In our simple example, we just print a message to the JavaScript console.

   The {{domxref("IDBRequest.onsuccess", "request.onsuccess")}} handler on the other hand will run if the request returns successfully, meaning the database was successfully opened. If this is the case, an object representing the opened database becomes available in the {{domxref("IDBRequest.result", "request.result")}} property, allowing us to manipulate the database. We store this in the `db` variable we created earlier for later use. We also run a custom function called `displayData()`, which displays the data in the database inside the {{HTMLElement("ul")}}. We run it now so that the notes already in the database are displayed as soon as the page loads. You'll see this defined later on.

5. Finally for this section, we'll add probably the most important event handler for setting up the database: {{domxref("IDBOpenDBRequest.onupgradeneeded", "request.onupdateneeded")}}. This handler runs if the database has not already been set up, or if the database is opened with a bigger version number than the existing stored database (when performing an upgrade). Add the following code, below your previous handler:

   ```js
   // Setup the database tables if this has not already been done
   request.onupgradeneeded = function (e) {
     // Grab a reference to the opened database
     let db = e.target.result;

     // Create an objectStore to store our notes in (basically like a single table)
     // including a auto-incrementing key
     let objectStore = db.createObjectStore("notes", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   };
   ```

   This is where we define the schema (structure) of our database; that is, the set of columns (or fields) it contains. Here we first grab a reference to the existing database from `e.target.result` (the event target's `result` property), which is the `request` object. This is equivalent to the line `db = request.result;` inside the `onsuccess` handler, but we need to do this separately here because the `onupgradeneeded` handler (if needed) will run before the `onsuccess` handler, meaning that the `db` value wouldn't be available if we didn't do this.

   We then use {{domxref("IDBDatabase.createObjectStore()")}} to create a new object store inside our opened database. This is equivalent to a single table in a conventional database system. We've given it the name notes, and also specified an `autoIncrement` key field called `id` — in each new record this will automatically be given an incremented value — the developer doesn't need to set this explicitly. Being the key, the `id` field will be used to uniquely identify records, such as when deleting or displaying a record.

   We also create two other indexes (fields) using the {{domxref("IDBObjectStore.createIndex()")}} method: `title` (which will contain a title for each note), and `body` (which will contain the body text of the note).

So with this simple database schema set up, when we start adding records to the database each one will be represented as an object along these lines:

```js
{
  title: "Buy milk",
  body: "Need both cows milk and soya.",
  id: 8
}
```

### Добавляем данные в базу данных

Now let's look at how we can add records to the database. This will be done using the form on our page.

Below your previous event handler (but still inside the `window.onload` handler), add the following line, which sets up an `onsubmit` handler that runs a function called `addData()` when the form is submitted (when the submit {{htmlelement("button")}} is pressed leading to a successful form submission):

```js
// Create an onsubmit handler so that when the form is submitted the addData() function is run
form.onsubmit = addData;
```

Now let's define the `addData()` function. Add this below your previous line:

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  let newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  let transaction = db.transaction(["notes"], "readwrite");

  // call an object store that's already been added to the database
  let objectStore = transaction.objectStore("notes");

  // Make a request to add our newItem object to the object store
  var request = objectStore.add(newItem);
  request.onsuccess = function () {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  };

  // Report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function () {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  };

  transaction.onerror = function () {
    console.log("Transaction not opened due to error");
  };
}
```

This is quite complex; breaking it down, we:

- Run {{domxref("Event.preventDefault()")}} on the event object to stop the form actually submitting in the conventional manner (this would cause a page refresh and spoil the experience).
- Create an object representing a record to enter into the database, populating it with values from the form inputs. note that we don't have to explicitly include an `id` value — as we expained early, this is auto-populated.
- Open a `readwrite` transaction against the `notes` object store using the {{domxref("IDBDatabase.transaction()")}} method. This transaction object allows us to access the object store so we can do something to it, e.g. add a new record.
- Access the object store using the {{domxref("IDBTransaction.objectStore")}} property, saving it in the `objectStore` variable.
- Add the new record to the database using {{domxref("IDBObjectStore.add()")}}. This creates a request object, in the same fashion as we've seen before.
- Add a bunch of event handlers to the `request` and the `transaction` to run code at critical points in the lifecycle. Once the request has succeeded, we clear the form inputs ready for entering the next note. Once the transaction has completed, we run the `displayData()` function again to update the display of notes on the page.

### Отображаем данные

We've referenced `displayData()` twice in our code already, so we'd probably better define it. Add this to your code, below the previous function definition:

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you ddn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  let objectStore = db.transaction("notes").objectStore("notes");
  objectStore.openCursor().onsuccess = function (e) {
    // Get a reference to the cursor
    let cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      let listItem = document.createElement("li");
      let h3 = document.createElement("h3");
      let para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      let deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.onclick = function (e) {
        deleteItem(e);
      };

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        let listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  };
}
```

Again, let's break this down:

- First we empty out the {{htmlelement("ul")}} element's content, before then filling it with the updated content. If you didn't do this, you'd end up with a huge list of duplicated content being added to with each update.
- Next, we get a reference to the `notes` object store using {{domxref("IDBDatabase.transaction()")}} and {{domxref("IDBTransaction.objectStore")}} like we did in `addData()`, except here we are chaining them together in one line.
- The next step is to use {{domxref("IDBObjectStore.openCursor()")}} method to open a request for a cursor — this is a construct that can be used to iterate over the records in an object store. We chain an `onsuccess` handler on to the end of this line to make the code more concise — when the cursor is successfully returned, the handler is run.
- We get a reference to the cursor itself (an {{domxref("IDBCursor")}} object) using let `cursor = e.target.result`.
- Next, we check to see if the cursor contains a record from the datastore (`if(cursor){ ... }`) — if so, we create a DOM fragment, populate it with the data from the record, and insert it into the page (inside the `<ul>` element). We also include a delete button that, when clicked, will delete that note by running the `deleteItem()` function, which we will look at in the next section.
- At the end of the `if` block, we use the {{domxref("IDBCursor.continue()")}} method to advance the cursor to the next record in the datastore, and run the content of the `if` block again. If there is another record to iterate to, this causes it to be inserted into the page, and then `continue()` is run again, and so on.
- When there are no more records to iterate over, `cursor` will return `undefined`, and therefore the `else` block will run instead of the `if` block. This block checks whether any notes were inserted into the `<ul>` — if not, it inserts a message to say no note was stored.

### Удаляем данные

As stated above, when a note's delete button is pressed, the note is deleted. This is achieved by the `deleteItem()` function, which looks like so:

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying it use it with IDB; IDB key
  // values are type-sensitive.
  let noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  let transaction = db.transaction(["notes"], "readwrite");
  let objectStore = transaction.objectStore("notes");
  let request = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.oncomplete = function () {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log("Note " + noteId + " deleted.");

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      let listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  };
}
```

- The first part of this could use some explaining — we retrieve the ID of the record to be deleted using `Number(e.target.parentNode.getAttribute('data-note-id'))` — recall that the ID of the record was saved in a `data-note-id` attribute on the `<li>` when it was first displayed. We do however need to pass the attribute through the global built-in [Number()](/ru/docs/Web/JavaScript/Reference/Global_Objects/Number) object, as it is currently a string, and otherwise won't be recognized by the database.
- We then get a reference to the object store using the same pattern we've seen previously, and use the {{domxref("IDBObjectStore.delete()")}} method to delete the record from the database, passing it the ID.
- When the database transaction is complete, we delete the note's `<li>` from the DOM, and again do the check to see if the `<ul>` is now empty, inserting a note as appropriate.

So that's it! Your example should now work.

If you are having trouble with it, feel free to [check it against our live example](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.js) also).

### Храним сложные данные через IndexedDB

As we mentioned above, IndexedDB can be used to store more than just simple text strings. You can store just about anything you want, including complex objects such as video or image blobs. And it isn't much more difficult to achieve than any other type of data.

To demonstrate how to do it, we've written another example called [IndexedDB video store](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/indexeddb/video-store) (see it [running live here also](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). When you first run the example, it downloads all the videos from the network, stores them in an IndexedDB database, and then displays the videos in the UI inside {{htmlelement("video")}} elements. The second time you run it, it finds the videos in the database and gets them from there instead befoire displaying them — this makes subsequent loads much quicker and less bandwidth-hungry.

Let's walk through the most interesting parts of the example. We won't look at it all — a lot of it is similar to the previous example, and the code is well-commented.

1. For this simple example, we've stored the names of the videos to fetch in an array of objects:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. To start with, once the database is successfully opened we run an `init()` function. This loops through the different video names, trying to load a record identified by each name from the `videos` database.

   If each video is found in the database (easily checked by seeing whether `request.result` evaluates to `true` — if the record is not present, it will be `undefined`), its video files (stored as blobs) and the video name are passed straight to the `displayVideo()` function to place them in the UI. If not, the video name is passed to the `fetchVideoFromNetwork()` function to ... you guessed it — fetch the video from the network.

   ```js
   function init() {
     // Loop through the video names one by one
     for (let i = 0; i < videos.length; i++) {
       // Open transaction, get object store, and get() each video by name
       let objectStore = db.transaction("videos").objectStore("videos");
       let request = objectStore.get(videos[i].name);
       request.onsuccess = function () {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(videos[i]);
         }
       };
     }
   }
   ```

3. The following snippet is taken from inside `fetchVideoFromNetwork()` — here we fetch MP4 and WebM versions of the video using two separate {{domxref("fetch()", "WindowOrWorkerGlobalScope.fetch()")}} requests. We then use the {{domxref("blob()", "Body.blob()")}} method to extract each response's body as a blob, giving us an object representation of the videos that can be stored and displayed later on.

   We have a problem here though — these two requests are both asynchronous, but we only want to try to display or store the video when both promises have fulfilled. Fortunately there is a built-in method that handles such a problem — {{jsxref("Promise.all()")}}. This takes one argument — references to all the individual promises you want to check for fulfillment placed in an array — and is itself promise-based.

   When all those promises have fulfilled, the `all()` promise fulfills with an array containing all the individual fulfillment values. Inside the `all()` block, you can see that we then call the `displayVideo()` function like we did before to display the videos in the UI, then we also call the `storeVideo()` function to store those videos inside the database.

   ```js
   let mp4Blob = fetch("videos/" + video.name + ".mp4").then((response) =>
     response.blob(),
   );
   let webmBlob = fetch("videos/" + video.name + ".webm").then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then(function (values) {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Let's look at `storeVideo()` first. This is very similar to the pattern you saw in the previous example for adding data to the database — we open a `readwrite` transaction and get an object store reference our `videos`, create an object representing the record to add to the database, then simply add it using {{domxref("IDBObjectStore.add()")}}.

   ```js
   function storeVideo(mp4Blob, webmBlob, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
     // Create a record to add to the IDB
     let record = {
       mp4 : mp4Blob,
       webm : webmBlob,
       name : name
     }

     // Add the record to the IDB using add()
     let request = objectStore.add(record);

     ...

   };
   ```

5. Last but not least, we have `displayVideo()`, which creates the DOM elements needed to insert the video in the UI and then appends them to the page. The most interesting parts of this are those shown below — to actually display our video blobs in a `<video>` element, we need to create object URLs (internal URLs that point to the video blobs stored in memory) using the {{domxref("URL.createObjectURL()")}} method. Once that is done, we can set the object URLs to be the vaues of our {{htmlelement("source")}} element's `src` attributes, and it works fine.

   ```js
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     let mp4URL = URL.createObjectURL(mp4Blob);
     let webmURL = URL.createObjectURL(webmBlob);

     ...

     let video = document.createElement('video');
     video.controls = true;
     let source1 = document.createElement('source');
     source1.src = mp4URL;
     source1.type = 'video/mp4';
     let source2 = document.createElement('source');
     source2.src = webmURL;
     source2.type = 'video/webm';

     ...
   }
   ```

## Офлайн-хранение данных

Пример ниже показывает, как создать приложение, которое будет хранить данные большого объёма в хранилище IndexedDB, избегая необходимости скачивать их повторно. Это важное улучшение пользовательского опыта, но есть одно замечание — основной HTML, CSS, и файлы JavaScript все ещё нужно загружать каждый раз при запросе сайта, это значит, что данный пример не будет работать при отсутствии сетевого соединения.

![](ff-offline.png)

Это тот случай, когда [Service workers](/ru/docs/Web/API/Service_Worker_API) и [Cache API](/ru/docs/Web/API/Cache) приходят на помощь.

Сервис-воркер это файл JavaScript, который регистрируется на конкретном источнике (веб-сайте или части сайта на конкретном домене) при обращении браузером. После регистрации, он может управлять страницами на этом источнике. Воркер находится между загруженной страницей и сетевым соединением, перехватывая сетевые запросы источника.

Когда worker перехватывает запрос, он может делать многие вещи (смотри [идеи для использования сервис-воркеров](/ru/docs/Web/API/Service_Worker_API#Other_use_case_ideas)), но классический пример это сохранение сетевых ответов и затем доступ к ним при запросе, вместо запросов по сети. В результате, это позволяет сделать веб-сайт полностью работающим в офлайне.

[Cache API](/ru/docs/Web/API/Cache) это ещё один механизм хранения данных на клиенте с небольшим отличием — он разработан для хранения HTTP ответов, и прекрасно работает с сервис-воркерами.

> **Примечание:** Service workers и Cache доступны в большинстве современных браузеров. В момент написания статьи, Safari ещё не имел реализации, но скоро должна быть.

### Пример сервис воркера

Давайте взглянем на пример, чтобы дать вам немного мыслей о том, что из этого может выйти. Мы создали другую версию примера хранения видео, который использовался в предыдущей секции — эта функциональность идентична, за исключением того, что этот пример также сохраняет HTML, CSS, и JavaScript в Cache API посредством сервис-воркеров, что позволяет приложению работать полностью в офлайне!

Смотри пример [хранилище видео с IndexedDB и сервис-воркером](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), и его [исходный код](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Регистрируем сервис воркер

Первое, что нужно заметить, это дополнительный кусок кода, расположенный в основном JavaScript файле (см. [index.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Первое,что мы делаем, это проверка на то, что `serviceWorker` доступен в объекте {{domxref("Navigator")}}. Если этот так, тогда мы знаем, что как минимум, базовые функции сервис-воркера доступны. Внутри проверки мы используем метод {{domxref("ServiceWorkerContainer.register()")}} для регистрации сервис-воркера, находящегося в файле `sw.js` на текущем источнике, таким образом, он может управлять страницами в текущей или внутренних директориях. Когда промис выполнится, сервис-воркер считается зарегистрированным.

```js
// Регистрация сервис-воркера для обеспечения доступности сайта в офлайне

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(function () {
      console.log("Service Worker зарегистрирован");
    });
}
```

> **Примечание:** Путь к файлу `sw.js` указан относительно корня сайта, а не JavaScript файла, содержащего основной код. Полный путь - `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Корень - `https://mdn.github.io`, и следовательно указываемый путь должен быть `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Если вы хотите использовать данный пример на своём сервере, вы также должны изменить путь к скрипту. Это довольно запутанно, но обязано так работать по причинам безопасности.

#### Устанавливаем сервис воркер

В следующий раз, когда страница с сервис-воркером будет запрошена (например когда страница будет перезагружена), сервис-воркер запустится на этой странице и начнёт контролировать её. Когда это произойдёт, событие `install` будет вызвано в сервис-воркере; вы можете написать код внутри сервис-воркера, который будет вызван в процессе установки.

Давайте взглянем на файл сервис-воркера [sw.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js). Вы можете видеть, что обработчик события `install` зарегистрирован на `self`. Ключевое слово `self` это способ ссылки на глобальную область видимости сервис-воркера из файла с сервис-воркером.

Внутри обработчика `install` мы используем метод {{domxref("ExtendableEvent.waitUntil()")}}, доступном в объекте события, чтобы сигнализировать, что работа продолжается, и браузер не должен завершать установку, пока все задачи внутри блока не будут выполнены.

Здесь мы видим Cache API в действии. Мы используем метод {{domxref("CacheStorage.open()")}} для открытия нового объекта кеша, в котором ответы могут быть сохранены (похоже на объект хранилища IndexedDB). Промис выполнится с объектом {{domxref("Cache")}}, представляющим собой кеш `video-store` . Затем мы используем метод {{domxref("Cache.addAll()")}} для получения ресурсов и добавления ответов в кеш.

```js
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
      ]);
    }),
  );
});
```

На этом установка завершена.

#### Отвечаем на последующие запросы

Когда сервис-воркер зарегистрирован и установлен на странице HTML и сопутствующие ресурсы добавлены в кеш, все практически готово. Нужно сделать ещё одну вещь - написать код для ответа на дальнейшие сетевые запросы.

Это то, что делает вторая часть кода файла `sw.js`. Мы добавили ещё один обработчик к сервис-воркеру в глобальной области видимости, который запускает функцию-обработчик при событии `fetch`. Это происходит всякий раз, когда браузер делает запрос ресурса в директорию, где зарегистрирован сервис-воркер.

Внутри обработчика, мы сначала выводим в консоль URL запрашиваемого ресурса. Затем отдаём особый ответ на запрос, используя метод {{domxref("FetchEvent.respondWith()")}}.

Внутри блока мы используем {{domxref("CacheStorage.match()")}} чтобы проверить, можно ли найти соответствующий запрос (т.е. совпадение по URL) в кеше. Промис возвращает найденный ответ или `undefined`, если ничего не нашлось.

Если совпадение нашлось, то просто возвращаем его как особый ответ. В противном случае, используем [fetch()](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch) для запроса ресурса из сети.

```js
self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
```

На этом все для нашего простого сервис-воркера. Используя подобный метод, вы можете сделать гораздо больше вещей — для получения доп. информации смотрите [рецепты использования сервис-воркеров](https://github.com/mdn/serviceworker-cookbook/). Спасибо Paul Kinlan за его статью [Adding a Service Worker and Offline into your Web App](https://developers.google.com/web/fundamentals/codelabs/offline/), которая вдохновила на написание данного примера.

#### Тестируем наш пример офлайн

Для тестирования [примера](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), вам нужно загрузить его несколько раз, чтобы быть уверенным, что сервис-воркер точно установлен. Когда это сделано, вы можете:

- отключиться от сетевого соединения.
- нажмите _Файл > Перейти в офлайн,_ если вы используете Firefox.
- перейдите в инструменты разработчика, выберите _Application > Service Workers_, нажмите галочку _Offline_, если используете Chrome.

Если обновите страницу с примером снова, вы увидите, что все работает как обычно. Все данные хранятся в офлайн хранилище — ресурсы страницы в кеше, а видео в базе данных IndexedDB.

## Итого

Это всё, пока что. Мы надеемся наш краткий обзор `client-side storage` окажется полезным для вас.

## Также стоит почитать

- [Web storage API](/ru/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/ru/docs/Web/API/IndexedDB_API)
- [Cookies](/ru/docs/Web/HTTP/Cookies)
- [Service worker API](/ru/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## В этом модуле

- [Introduction to web APIs](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Manipulating documents](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Fetching data from the server](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Third party APIs](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Drawing graphics](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Video and audio APIs](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Client-side storage](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
