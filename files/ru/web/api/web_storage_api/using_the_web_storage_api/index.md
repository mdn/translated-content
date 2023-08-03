---
title: Использование Web Storage API
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

Web Storage API предоставляет механизм, при помощи которого браузер может безопасно хранить пары ключей/значений в намного более интуитивной форме, чем используя cookies. Эта статья предоставляет пошаговое руководство о том, как использовать эту простую технологию.

## Основные концепции

Storage объекты простые хранилища вида ключ-значение, похожие чем-то на объекты, но они остаются неизменными при загрузке страницы. Ключи и значения всегда являются строками (обратите внимание, что числовые ключи будут автоматически конвертироваться в строку, точно также как объекты). Вы можете получить доступ к этим значениям как в объектах, или getItem() и setItem() методами. Все три строки ниже устанавливают одинаковое значение в colorSetting:

```
localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');
```

В основе Веб хранилища лежат два механизма:

- `(sessionStorage)` обслуживает область хранения данных для каждого домена, доступное на протяжении сессии. (пока браузер открыт, даже в случае перезагрузки страницы)
- `(localStorage)` делает то же самое, но сохраняет данные даже в случае, если переоткрыть браузер.

Оба механизма доступны через {{domxref("Window.sessionStorage")}} и {{domxref("Window.localStorage")}} свойства (если быть более точным, в броузерах, поддерживающих хранилища объект `Window` выполняет объекты `WindowLocalStorage` и `WindowSessionStorage`, которые содержат свойства `localStorage` и `sessionStorage`) — вызов одного из них создаёт экземпляр объекта Storage, через который можно устанавливать, редактировать и удалять данные. Разные Storage объекты будут использовать `sessionStorage` и `localStorage поэтому они используются и управляются раздельно`

Так, например, изначально вызов `localStorage` в документе возвращает {{domxref("Storage")}} объект; вызов `sessionStorage` в документе возвращает другой {{domxref("Storage")}} объект. Оба объекта могут управляться одинаково, но отдельно.

## Функция обнаружения localStorage

Чтобы использовать localStorage, мы должны сперва проверить, что localStorage поддерживается и доступно в текущем браузере.

### Проверка на наличие

Браузеры поддерживаемые localStorage будут иметь свойство localStorage объекта window. Тем не менее по различным причинам, простое утверждение, что это свойство существует, может вызывать исключение. Если localStorage существует это ещё не даёт гарантии, что оно доступно, т.к. различные броузеры обладают настройками которые отключают его. Поэтому браузер может поддерживать localStorage, но не делает его доступным для скриптов на странице. Один из таких примеров браузер Safari, который в Private Browsing mode возвращает нам пустой localStorage объект, фактически делая его непригодным для использования . Наша функция должна принимать во внимание этот сценарий.

Функция, которая проверяет браузеры на поддержку и доступность localStorage:

```js
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
```

Вот как вы бы могли использовать это:

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

Вы можете протестировать sessionStorage вместо этого используйте `storageAvailable('sessionStorage')` Смотрите здесь [краткую историю функции-обнаружения localStorage](https://gist.github.com/paulirish/5558557)

## Пример

Чтобы проиллюстрировать типичное использование Web storage, мы создали простой пример, назвав его **Web Storage Demo.** На [целевой странице](https://mdn.github.io/dom-examples/web-storage/) представлены элементы управления, которые можно использовать для настройки цвета, шрифта и декоративного изображения:

![](landing.png)Когда вы выбираете различные опции, страница немедленно перезагружается; в дополнение, ваш выбор сохраняется в localStorage, таким образом когда вы покидаете страницу и загружаете её снова спустя некоторое время, ваши параметры сохраняются.

Мы также предоставили [страницу вывода событий](https://mdn.github.io/dom-examples/web-storage/event.html) - если вы загрузите эту страницу в другой вкладке, затем сделаете некоторые изменения в landing page, вы увидите обновлённую информацию о хранилище.

![](event-output.png)

> **Примечание:** Помимо просмотра примеров выше, используя приведённые ссылки выше , вы можете также [просмотреть исходный код](https://github.com/mdn/dom-examples/tree/master/web-storage).

## Проверка на заполненность хранилища

Начнём с main.js, мы проверим был ли уже заполнен объект Storage (т.е страница была ранее доступна)

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

Метод {{domxref("Storage.getItem()")}} используется для получения данных из storage; в этом примере мы проверяем, чтобы увидеть существует ли bgcolor; если нет, мы запускаем `populateStorage(), чтобы добавить значение по умолчанию в storage. Если значения уже есть там, мы запускаем setStyles(), для обновления стиля страница с сохранёнными значениями.`
**Примечание**: вы можете также использовать {{domxref("Storage.length")}} для проверки storage object.

## Получение данных из Storage

Как было отмечено выше, значения хранилища могут быть извлечены используя {{domxref("Storage.getItem()")}}. В качестве аргумента функция принимает значение ключа элемента хранилища, а возвращает значение этого элемента. Например:

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Первые три строки извлекают значения элементов локального хранилища. Next, we set the values displayed in the form elements to those values, so that they keep in sync when you reload the page. Finally, we update the styles/decorative image on the page, so your customization options come up again on reload.

## Setting values in storage

{{domxref("Storage.setItem()")}} is used both to create new data items, and (if the data item already exists) update existing values. This takes two arguments — the key of the data item to create/modify, and the value to store in it.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

The `populateStorage()` function sets three items in local storage — the background color, font, and image path. It then runs the `setStyles()` function to update the page styles, etc.

We've also included an `onchange` handler on each form element, so that the data and styling is updated whenever a form value is changed:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

## Responding to storage changes with the StorageEvent

The {{domxref("StorageEvent")}} is fired whenever a change is made to the {{domxref("Storage")}} object. This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.

On the events page (see [events.js](https://github.com/mdn/web-storage-demo/blob/gh-pages/event.js)) the only JavaScript is as follows:

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

Here we add an event listener to the `window` object that fires when the {{domxref("Storage")}} object associated with the current origin is changed. As you can see above, the event object associated with this event has a number of properties containing useful information — the key of the data that changed, the old value before the change, the new value after that change, the URL of the document that changed the storage, and the storage object itself.

## Удаление записанных данных

Web Storage также предоставляет несколько простых методов для удаления данных. Мы не используем эти методы в нашем дёма, но они очень простые, чтобы добавить их в проект:

- {{domxref("Storage.removeItem()")}} принимает единственный аргумент - ключ элемента данных, который вы хотите удалить - и удаляет его из объекта хранения для этого домена.
- {{domxref("Storage.clear()")}} не принимает аргументов, полностью очищает объекта storage для данного домена.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Storage API landing page](/ru/docs/Web/API/Web_Storage_API)
