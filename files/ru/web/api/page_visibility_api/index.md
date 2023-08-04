---
title: Видимость страницы API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

При переключении между вкладками, web страница переходит в фоновый режим и поэтому не видна пользователю. Page Visibility API предоставляет события, которые вы можете отслеживать, чтобы узнать, когда страница станет видимой или скрытой, а так же возможность наблюдать текущее состояние видимости страницы.

> **Примечание:** The Page Visibility API особенно полезно для сбережения ресурсов и улучшения производительности, позволяя странице остановить выполнение не нужных задач, когда она не видна.

Когда пользователь сворачивает окно или переключается на другую вкладку, API отправляет {{event("visibilitychange")}} событие обработчикам, что состояние страницы изменилось. Вы можете отследить это событие и выполнить какие-то действия. Например, если ваше app проигрывает видео, его можно поставить на паузу, когда пользователь переключил вкладку (страница ушла в фон), а затем возобновить видео, когда пользователь вернулся на вкладку. Пользователь не теряет место на котором остановил просмотр, звук от видео не конфликтует с аудио новой вкладки, пользователь комфортно просмотреть оба видео.

Состояния видимости для {{HTMLElement("iframe")}} такие же как и для родительской страницы. Скрытие `<iframe>` используя CSS стили (такие как {{cssxref("display", "display: none;")}}) не вызывают события видимости и не изменяют состояние документа, содержащегося во фрейме.

### Использование

Давайте рассмотрим несколько способов использования Page Visibility API.

- На сайте есть слайдер изображений с автопрокруткой, которую можно поставить на паузу, когда пользователь перешёл на другую вкладку
- Приложение выводит информацию в реальном времени, которую можно не обновлять, пока страница не видна, тем самым уменьшить количество запросов на сервер
- Странице нужно понять, когда она должна быть отрисована, так что можно вести точный подсчёт количества просмотров
- Сайту нужно выключить звук, когда устройство в режиме ожидания (пользователь нажал кнопку включения, чтобы погасить экран)

Раньше у разработчиков были не удобные способы. Например, обработка {{event("blur")}} и {{event("focus")}} событий на объекте window - помогала узнать когда страница становилась не активной, но это не давало возможность понять когда страница действительно скрыта от пользователя. Page Visibility API решает эту проблему.

> **Примечание:** Когда {{domxref("GlobalEventHandlers.onblur", "onblur")}} и {{domxref("GlobalEventHandlers.onfocus", "onfocus")}} уведомляют, что пользователь переключил окна, это не означает, что оно действительно скрыто. Страница действительно скрыта, когда пользователь переключил вкладки или свернул окно браузера с этой вкладкой.

### Policies in place to aid background page performance

Separately from the Page Visibility API, user agents typically have a number of policies in place to mitigate the performance impact of background or hidden tabs. These may include:

- Most browsers stop sending {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} callbacks to background tabs or hidden {{ HTMLElement("iframe") }}s in order to improve performance and battery life.
- Timers such as {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} are throttled in background/inactive tabs to help improve performance. See [Reasons for delays longer than specified](/ru/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified) for more details.
- Budget-based background timeout throttling is now available in modern browsers (Firefox 58+, Chrome 57+), placing an additional limit on background timer CPU usage. This operates in a similar way across modern browsers, with the details being as follows:

  - In Firefox, windows in background tabs each have their own time budget in milliseconds — a max and a min value of +50 ms and -150 ms, respectively. Chrome is very similar except that the budget is specified in seconds.
  - Windows are subjected to throttling after 30 seconds, with the same throttling delay rules as specified for window timers (again, see [Reasons for delays longer than specified](/ru/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified)). In Chrome, this value is 10 seconds.
  - Timer tasks are only permitted when the budget is non-negative.
  - Once a timer's code has finished running, the duration of time it took to execute is subtracted from its window's timeout budget.
  - The budget regenerates at a rate of 10 ms per second, in both Firefox and Chrome.

Some processes are exempt from this throttling behavior. In these cases, you can use the Page Visibility API to reduce the tabs' performance impact while they're hidden.

- Tabs which are playing audio are considered foreground and aren't throttled.
- Tabs running code that's using real-time network connections ([WebSockets](/ru/docs/Web/API/WebSockets_API) and [WebRTC](/ru/docs/Web/API/WebRTC_API)) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
- [IndexedDB](/ru/docs/Web/API/IndexedDB_API) processes are also left unthrottled in order to avoid timeouts.

## Example

View [live example](http://daniemon.com/tech/webapps/page-visibility/) (video with sound).

The example, which pauses the video when you switch to another tab and plays again when you return to its tab, was created with the following code:

```js
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
  );
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // When the video pauses, set the title.
  // This shows the paused
  videoElement.addEventListener(
    "pause",
    function () {
      document.title = "Paused";
    },
    false,
  );

  // When the video plays, set the title.
  videoElement.addEventListener(
    "play",
    function () {
      document.title = "Playing";
    },
    false,
  );
}
```

## Properties added to the Document interface

The Page Visibility API adds the following properties to the {{domxref("Document")}} interface:

- {{domxref("Document.hidden")}} {{ReadOnlyInline}}
  - : Returns `true` if the page is in a state considered to be hidden to the user, and `false` otherwise.
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}

  - : A {{domxref("DOMString")}} indicating the document's current visibility state. Possible values are:

    - `visible`
      - : The page content may be at least partially visible. In practice this means that the page is the foreground tab of a non-minimized window.
    - `hidden`
      - : The page's content is not visible to the user, either due to the document's tab being in the background or part of a window that is minimized, or because the device's screen is off.
    - `prerender`

      - : The page's content is being prerendered and is not visible to the user. A document may start in the `prerender` state, but will never switch to this state from any other state, since a document can only prerender once.

        > **Примечание:** Not all browsers support prerendering.

    - `unloaded`

      - : The page is in the process of being unloaded from memory.

        > **Примечание:** Not all browsers support the `unloaded` value.

- {{domxref("Document.onvisibilitychange")}}
  - : An {{domxref("EventListener")}} providing the code to be called when the {{event("visibilitychange")}} event is fired.

```js
//startSimulation and pauseSimulation defined elsewhere
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Description of the [Page Visibility API](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) on the IEBlog.
- Description of the [Page Visibility API](http://code.google.com/chrome/whitepapers/pagevisibility.html) by Google
