---
title: Использование кеширования в Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
---

{{FirefoxSidebar}}

### Введение

[Firefox 1.5](/en/Firefox_1.5_for_developers) использует кеширование целых Web-страниц, включая их JavaScript-состояния, в рамках сессии браузера. Переходы по посещённым страницам вперёд-назад не требуют загрузки страниц, а JavaScript-состояния сохраняются. Эта функция, обозначаемая иногда как **bfcache** (Back-Forward Cache), делает навигацию по страницам очень быстрой. Такое кешированное состояние сохраняется, пока пользователь не закроет браузер.

Есть случаи, в которых Firefox не кеширует страницы. Вот некоторые обычные программные причины того, что страница не кеширована:

- страница использует обработчик `unload` или `beforeunload`;
- страница устанавливает заголовок «cache-control: no-store».
- доступ к сайту происходит по протоколу HTTPS, а страница устанавливает по меньшей мере один из следующих заголовков:

  - «Cache-Control: no-cache»
  - «Pragma: no-cache»
  - с заголовком «Expires: 0» or «Expires» со значением даты, лежащим в прошлом относительно значению заголовка «Date» (если только не указан также заголовок «Cache-Control: max-age=»);

- страница не полностью загрузилась, когда пользователь ушёл с неё, или имеет прерванные сетевые запросы по другим причинам (например, `XMLHttpRequest`));
- страница имеет работающие IndexedDB-транзакции;
- страница верхнего уровня содержит фреймы (например, {{ HTMLElement("iframe") }}), которые не кешируются по одной из перечисленных здесь причин;
- страница находится в фрейме и пользователь загружает новую страницу в этот фрейм (в этом случае, когда пользователь уходит со с этой страницы, последнее загруженное в фреймы содержимое есть то, что закешировано).

Эта новая функция кеширования меняет поведение загрузки страницы, так что Web-авторы могут захотеть:

- узнать, когда на страницу происходит переход (когда она загружается из пользовательского кеша);
- определить поведение страницы, когда пользователь уходит со страницы (позволяя всё же странице быть закешированной).

Это позволяют сделать два новых события браузера.

### Новые события браузера

Если вы используете эти новые события, ваши страницы продолжат правильно отображаться в других браузерах (мы протестировали старые версии Firefox, Internet Explorer, Opera и Safari), а при загрузке в Firefox 1.5 добавится новая функциональность кеширования.

Примечание: по состоянию на октябрь 2009 года разработческие версии Safari добавили поддержку этих новых событий (см. [webkit-баг](https://bugs.webkit.org/show_bug.cgi?id=28758)).

Стандартное поведение для Web-страниц следующее:

1. Пользователь переходит на страницу.
2. По мере загрузки страницы выполняются инлайновые скрипты.
3. Как только страница загрузилась, срабатывает обработчик `onload`.

Некоторые страницы включают четвёртый шаг. Если страница использует обработчик `unload` или `beforeunload` handler, он срабатывает прежде чем пользователь уходит со страницы. Если присутствует обработчик `unload`, эта страница не будет кеширована.

Когда пользователь переходит на кешированную страницу, инлайновые скрипты и обработчик `onload` не запускаются (шаги 2 и 3), так как в большинстве случаев эффекты этих скриптов были сохранены.

Если страница содержит скрипты или иное поведение, запускаемое в течение загрузки, которое вы хотите продолжить выполнять каждый раз, когда пользователь заходит на страницу, или если вы хотите знать, когда пользователь заходит на кешированную страницу, используйте новое событие `pageshow`.

Если у вас есть поведение, запускаемое, когда пользователь уходит со страницы, но вы хотите воспользоваться новой функциональностью кеширования, и поэтому не хотите использовать обработчик unload, используйте новое событие `pagehide`.

#### Событие pageshow

Это событие работает так же, как событие `load`, но срабатывает каждый раз при загрузке страницы (в то время как событие `load` в Firefox 1.5 не срабатывает, когда страница загружается из кеша). При первой загрузке страницы событие `pageshow` срабатывает сразу после события `load`. Событие `pageshow` использует булевское свойство `persisted`, которое выставляется в `false` при начальной загрузке. Оно выставляется в `true`, если это не начальная загрузка (то есть когда страница уже кеширована).

Выполняйте любой JavaScript-код, который должен отработать при каждой загрузке страницы, при срабатывании событий `pageshow`.

Вызывая JavaScript-функции в обработчике события `pageshow`, вы можете обеспечить их вызов при загрузке страницы в браузерах, отличных от Firefox 1.5, вызывая этот обработчик в обработчике события `load`, как показано в примере ниже.

#### Событие pagehide

Если вы хотите определить поведение, которое происходит, когда пользователь уходит со страницы, но не хотите использовать событие `unload` (что воспрепятствовало бы кешированию страницы), вы можете использовать новое событие `pagehide`. Как и `pageshow`, событие `pagehide` использует булевское свойство `persisted`. Оно выставляется в `false`, если страница не кеширована в браузере, а в `true`,— если кеширована. Когда это свойство выставлено в `false`, обработчик `unload`, если он есть, вызывается сразу после события `pagehide`.

Firefox 1.5 пытается имитировать события загрузки в том же порядке, в каком они срабатывают при начальной загрузке страницы. Фреймы обрабатываются таким же образом, что и документ верхнего уровня. Если страница содержит фреймы, то при загрузке кешированной страницы:

- События `pageshow` из каждого фрейма срабатывают перед событием `pageshow` в главном документе.
- Когда пользователь уходит с кешированной страницы, событие `pagehide` из каждого фрейма срабатывает перед событием `pagehide` в главном документе.
- Для навигации, происходящей внутри отдельного фрейма, события срабатывают только в затронутом фрейме.

#### Кеширование страницы несмотря на обработчики `unload` и `beforeunload`

Если вы хотите использовать события `unload` или `beforeunload`, сохранив кеширование страницы, вы можете просто удалить эти события в обработчике события и восстановить их в обработчике `pageshow`, если возвращаетесь на эту страницу:

```js
window.addEventListener("pageshow", PageShowHandler, false);
window.addEventListener("unload", UnloadHandler, false);

function PageShowHandler() {
  window.addEventListener("unload", UnloadHandler, false);
}

function UnloadHandler() {
  window.removeEventListener("unload", UnloadHandler, false);
}
```

### Пример кода

Приведённый ниже пример реализует страницу, которая использует обработчики `load` и `pageshow`. Поведение этой страницы следующее:

- В браузерах, отличных от Firefox 1.5, при каждой загрузке страницы происходит следующее: событие `load` вызывает функцию `onLoad`, которая вызывает функцию `onPageShow` (а также дополнительную функцию).

- В Firefox 1.5 при первой загрузке страницы событие `load` работает так же, как и в других браузерах. Кроме того, срабатывает событие `pageshow`, и, так как `persisted` установлено в `false`, не предпринимается никаких дополнительных действий.

- В Firefox 1.5 при загрузке страницы из кеша срабатывает только событие `pageshow`. Так как `persisted` установлено в `true`, вызывается только JavaScript-код в функции `onPageShow`.

В этом примере:

- Страница вычисляет и отображает текущие дату и время каждый раз при загрузке. Это вычисление включает секунды и миллисекунды, так что вы легко можете протестировать функциональность.
- Курсор помещается в поле Name при первой загрузке страницы. В Firefox 1.5 при возвращении на страницу курсор остаётся в том поле, где он был, когда пользователь ушёл со страницы. В других браузерах курсор опять помещается в поле Name.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query : Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: Verdana, sans-serif;
        font-size: 12px;
      }
    </style>
    <script type="text/javascript">
      function onLoad() {
        loadOnlyFirst();
        onPageShow();
      }

      function onPageShow() {
        //вычисление текущего времени
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var mil = currentTime.getMilliseconds();
        var displayTime =
          month +
          "/" +
          day +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec +
          ":" +
          mil;
        document.getElementById("timefield").value = displayTime;
      }

      function loadOnlyFirst() {
        document.zipForm.name.focus();
      }
    </script>
  </head>
  <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form
      name="zipForm"
      action="http://www.example.com/formresult.html"
      method="get">
      <label for="timefield">Date and time:</label>
      <input type="text" id="timefield" /><br />
      <label for="name">Name:</label>
      <input type="text" id="name" /><br />
      <label for="address">Email address:</label>
      <input type="text" id="address" /><br />
      <label for="order">Order number:</label>
      <input type="text" id="order" /><br />
      <input type="submit" name="submit" value="Submit Query" />
    </form>
  </body>
</html>
```

Напротив, если приведённая выше страница не обрабатывает событие `pageshow` и выполняет все вычисления в обработчике события `load` (если код написан так, как показано в примере ниже), как положение курсора, так и дата/время в Firefox 1.5 будут кешированы, когда пользователь уйдёт со страницы. Когда пользователь вернётся на страницу, отобразятся кешированные дата/время.

```html
<head>
  <script>
    function onLoad() {
      loadOnlyFirst();

      //calculate current time
      var currentTime = new Date();
      var year = currentTime.getFullYear();
      var month = currentTime.getMonth() + 1;
      var day = currentTime.getDate();
      var hour = currentTime.getHours();
      var min = currentTime.getMinutes();
      var sec = currentTime.getSeconds();
      var mil = currentTime.getMilliseconds();
      var displayTime =
        month +
        "/" +
        day +
        "/" +
        year +
        " " +
        hour +
        ":" +
        min +
        ":" +
        sec +
        ":" +
        mil;
      document.getElementById("timefield").value = displayTime;
    }

    function loadOnlyFirst() {
      document.zipForm.name.focus();
    }
  </script>
</head>
<body onload="onLoad();"></body>
```

### Developing Firefox extensions

Firefox 1.5 [extensions](/en/Building_an_Extension) need to allow for this caching functionality. If you are developing a Firefox extension that you want to be compatible with both 1.5 and earlier versions, make sure that it listens for the `load` event for triggers that can be cached and listens for the `pageshow` event for triggers that shouldn't be cached.

For instance, the Google Toolbar for Firefox should listen for the `load` event for the autolink function and to the `pageshow` event for the PageRank function in order to be compatible with both 1.5 and earlier versions.
