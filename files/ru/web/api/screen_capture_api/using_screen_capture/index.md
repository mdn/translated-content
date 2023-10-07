---
title: Использование интерфейса Screen Capture API
slug: Web/API/Screen_Capture_API/Using_Screen_Capture
---

{{DefaultAPISidebar("Screen Capture API")}}

В этой статье изучается использование программного интерфейса Screen Capture и его метода {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} для захвата потока экрана (всего или его части), его записи или передачи через сессию [WebRTC](/ru/docs/Web/API/WebRTC_API) .

> **Примечание:** Полезно отметить, что последние версии библиотеки [WebRTC adapter.js](https://github.com/webrtcHacks/adapter) включают реализацию метода `getDisplayMedia()` для обмена изображениями с экрана на браузерах, которые его поддерживают, но ещё не реализуют текущий стандартный интерфейс, который реализован в последних версиях Chrome, Edge, и Firefox.

## Захват содержимого экрана

Захват содержимого экрана, как живого потока {{domxref("MediaStream")}} запускается вызовом метода {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getDisplayMedia()")}}, и возвращает экземпляр объекта промиса , который разрешается объектом потока, текущих медиаданных с экрана.

**_Запуск захвата с экрана : в стиле `async`/`await`_**

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error("Error: " + err);
  }
  return captureStream;
}
```

Можно написать этот код, используя асинхронную функцию и оператор [`await`](/ru/docs/Web/JavaScript/Reference/Operators/await) , как показано выше, или использовать тип {{jsxref("Promise")}} непосредственно, пример ниже.

**_Запуска захвата с экрана: в стиле `Promise`_**

```js
function startCapture(displayMediaOptions) {
  let captureStream = null;

  return navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .catch((err) => {
      console.error("Error:" + err);
      return null;
    });
}
```

В любом случае {{Glossary("user agent")}} ответить отображением интерфейса диалога, запрашивающий у пользователя размер области захвата экрана. Обе реализации функции `startCapture()` возвращают объект типа {{domxref("MediaStream")}} , содержащий захваченное с экрана изображение (съёмку ?).

Смотрим [Options and constraints](#options_and_constraints), ниже, подробнее о том, как указать желаемый тип поверхности, а также о других способах настройки результирующего потока.

**_Пример окна, позволяющего пользователю выбрать поверхность дисплея для захвата_**

[![Screenshot of Chrome's window for picking a source surface](chrome-screen-capture-window.png)](chrome-screen-capture-window.png)

Затем можно использовать захваченный поток `captureStream`, везде, где принимается тип потока в качестве входных параметров. Пример [examples](#examples) ниже показывает несколько способов использования полученного типа потока

### Видимые или логические поверхности отображения

Для целей интерфейса Screen Capture API, **поверхность отображения** - это любой объект контента, который может быть выбран API для целей совместного (общего) использования.Поверхности общего доступа включают в себя содержимое вкладки браузера, полное окно, все приложения окна, объединённые в одну поверхность, и монитор (или группу мониторов, объединённых в одну поверхность).

Есть два типа поверхности дисплея. **Видимая поверхность отображения** - это поверхность, которая полностью видна на экране, например, переднее окно или вкладка или весь экран.

**Логическая поверхность отображения** - это поверхность, которая частично или полностью скрыта, либо в некоторой степени перекрывается другим объектом, либо полностью скрытая или находиться вне экрана. Эти поверхности обрабатываются по другому. Как правило, браузер предоставляет изображение, которое каким-то образом скрывает скрытую часть поверхности логического дисплея, например размытие или замена цветом или рисунком. Это сделано из соображений безопасности, поскольку контент, который не может быть просмотрен пользователем, может содержать данные, которыми они не хотят делиться.

Браузер может разрешить захват всего содержимого скрытого окна после получения разрешения от пользователя на это. В этом случае браузер может содержать затушёванный контент, либо путём получения текущего содержимого скрытой части окна, либо путём предоставления самого последнего видимого содержимого, если текущее содержимое недоступно.

### Свойства и ограничения

Объект ограничений, передающийся в метод {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} является объектом типа {{domxref("DisplayMediaStreamConstraints")}} , который используется для конфигурации получаемого объекта потока.

> **Примечание:** В отличие от большинства применений ограничений в медиа-API, здесь он используется исключительно для определения конфигурации потока, а не для фильтрации доступных вариантов.

Существуют три новых ограничения, добавленные в объект типа `MediaTrackConstraints` (а так же в {{domxref("MediaTrackSupportedConstraints")}} и {{domxref("MediaTrackSettings")}}) для конфигурирования потока захвата экрана:

- {{domxref("MediaTrackConstraints.cursor", "cursor")}}

  - : Указывает, следует ли захватывать курсор мыши и, если да, делать это постоянно или только во время движения мыши. Возможные значения:

    - `always`
      - : (всегда) Курсор мыши всегда захватывается в результирующий поток.
    - `motion`
      - : (в движении) Курсор должен быть видимым при его движении, и (на усмотрение {{Glossary("user agent")}} ) на короткое время до и после движения. В покое курсор удаляется из потока.
    - `never`
      - : (никогда) Курсор не появляется в результирующем потоке..

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}
  - : Тип `Boolean` , при истинном значении определяет, что захват должен включать область за пределами экрана, если имеется.

Ни одно из ограничений никак не применяется до тех пор, пока не будет выбран контент для захвата. Ограничения изменяют то, что вы видите в полученном потоке

К примеру, если определить ограничение {{domxref("MediaTrackConstraints.width", "width")}} для видео, оно применится как масштабирование видео, после того, как пользователь выберет область, и не устанавливает ограничение на размер самого источника.

> **Примечание:** Ограничения никогда не вызывают изменений в списке источников, доступных для захвата API Sharing Screen. Это гарантирует, что веб-приложения не могут заставить пользователя делиться определённым контентом, ограничивая исходный список, пока не останется только один элемент.

В процессе захвата экрана машина, которая обменивается содержимым экрана, будет отображать какую-то форму индикатора, чтобы пользователь знал, что обмен находиться в процессе.

> **Примечание:** Из соображений конфиденциальности и безопасности источники совместного использования экрана не перечисляются с использованием метода {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}. По той-же причине, событие {{event("devicechange")}} никогда не вызывается, когда есть изменения в доступных источниках при выполнении `getDisplayMedia()`.

### Захват передаваемого аудио

Метод {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} в основном используется для захвата видео пользовательского экрана или его части. Однако {{Glossary("user agent", "user agents")}} может позволить захватить аудио вместе с видео контентом. Источником аудио может быть выбранное окно, вся аудио система компьютера, или пользовательский микрофон (или их комбинация) .

До запуска скрипта, который будет запрашивать возможность обмена аудио, проверьте реализацию [Browser compatibility](/ru/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility), для понимания браузерной совместимости с функциональностью захвата аудио в поток захвата экрана.

Чтобы запросить доступ к экрану с включённым звуком, параметры ниже передаются в метод `getDisplayMedia()`:

```js
const gdmOptions = {
  video: true,
  audio: true,
};
```

Это даёт пользователю полную свободу выбора того, что он хочет, в пределах того, что поддерживает пользовательский агент. Это можно уточнить, указав дополнительную информацию для каждого свойства `audio` и `video`:

```js
const gdmOptions = {
  video: {
    cursor: "always",
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
  },
};
```

В этом примере курсор всегда будет виден при захвате, и на звуковой дорожке в идеале должны быть включены функции подавления шума и эхоподавления, а также идеальная частота дискретизации звука 44,1 кГц

Захват аудио всегда необязателен, и даже когда веб-контент запрашивает поток с аудио и видео, возвращаемый {{domxref ("MediaStream")}} может по-прежнему иметь только одну видеодорожку без звука.

> **Примечание:** Некоторые свойства не реализованы широко и могут не использоваться движком. К примеру, `cursor` [имеет ограниченную поддержку](/ru/docs/Web/API/MediaTrackConstraints/cursor#Browser_compatibility).

## Using the captured stream

The {{jsxref("promise")}} returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} resolves to a {{domxref("MediaStream")}} that contains at least one video stream that contains the screen or screen area, and which is adjusted or filtered based upon the constraints specifed when `getDisplayMedia()` was called.

## Security

As is always the case when sharing content over a network, it's important to consider the privacy and safety implications of screen sharing.

### Potential risks

Privacy and security issues surrounding screen sharing are usually not overly serious, but they do exist. The largest potential issue is users inadvertently sharing content they did not wish to share.

For example, privacy and/or security violations can easily occur if the user is sharing their screen and a visible background window happens to contain personal information, or if their password manager is visible in the shared stream. This effect can be amplified when capturing logical display surfaces, which may contain content that the user doesn't know about at all, let alone see.

User agents which take privacy seriously should obfuscate content that is not actually visible onscreen, unless authorization has been given to share that content specifically.

### Authorizing capture of display contents

Before streaming of captured screen contents can begin, the {{Glossary("user agent")}} will ask the user to confirm the sharing request, and to select the content to share.

## Examples

### Simple screen capture

In this example, the contents of the captured screen area are simply streamed into a {{HTMLElement("video")}} element on the same page.

#### JavaScript

There isn't all that much code needed in order to make this work, and if you're familiar with using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to capture video from a camera, you'll find {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to be very familiar.

##### Setup

First, some constants are set up to reference the elements on the page to which we'll need access: the {{HTMLElement("video")}} into which the captured screen contents will be streamed, a box into which logged output will be drawn, and the start and stop buttons that will turn on and off capture of screen imagery.

The object `displayMediaOptions` contains the {{domxref("MediaStreamConstraints")}} to pass into `getDisplayMedia()`; here, the {{domxref("MediaTrackConstraints.cursor", "cursor")}} property is set to `always`, indicating that the mouse cursor should always be included in the captured media.

> **Примечание:** Some properties are not widely implemented and might not be used by the engine. `cursor`, for example, [has limited support](/ru/docs/Web/API/MediaTrackConstraints/cursor#Browser_compatibility).

Finally, event listeners are established to detect user clicks on the start and stop buttons.

```js
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()

var displayMediaOptions = {
  video: {
    cursor: "always",
  },
  audio: false,
};

// Set event listeners for the start and stop buttons
startElem.addEventListener(
  "click",
  function (evt) {
    startCapture();
  },
  false,
);

stopElem.addEventListener(
  "click",
  function (evt) {
    stopCapture();
  },
  false,
);
```

##### Logging content

To make logging of errors and other issues easy, this example overrides certain {{domxref("Console")}} methods to output their messages to the {{HTMLElement("pre")}} block whose ID is `log`.

```js
console.log = (msg) => (logElem.innerHTML += `${msg}<br>`);
console.error = (msg) =>
  (logElem.innerHTML += `<span class="error">${msg}</span><br>`);
console.warn = (msg) =>
  (logElem.innerHTML += `<span class="warn">${msg}<span><br>`);
console.info = (msg) =>
  (logElem.innerHTML += `<span class="info">${msg}</span><br>`);
```

This allows us to use the familiar {{domxref("console.log()")}}, {{domxref("console.error()")}}, and so on to log information to the log box in the document.

##### Starting display capture

The `startCapture()` method, below, starts the capture of a {{domxref("MediaStream")}} whose contents are taken from a user-selected area of the screen. `startCapture()` is called when the "Start Capture" button is clicked.

```js
async function startCapture() {
  logElem.innerHTML = "";

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    dumpOptionsInfo();
  } catch (err) {
    console.error("Error: " + err);
  }
}
```

After clearing the contents of the log in order to get rid of any leftover text from the previous attempt to connect, `startCapture()` calls {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, passing into it the constraints object defined by `displayMediaOptions`. Using {{jsxref("await")}}, the following line of code does not get executed until after the {{jsxref("promise")}} returned by `getDisplayMedia()` resolves. Upon resolution, the promise returns a {{domxref("MediaStream")}}, which will stream the contents of the screen, window, or other region selected by the user.

The stream is connected to the {{HTMLElement("video")}} element by storing the returned `MediaStream` into the element's {{domxref("HTMLMediaElement.srcObject", "srcObject")}}.

The `dumpOptionsInfo()` function—which we will look at in a moment—dumps information about the stream to the log box for educational purposes.

If any of that fails, the [`catch()`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch) clause outputs an error message to the log box.

##### Stopping display capture

The `stopCapture()` method is called when the "Stop Capture" button is clicked. It stops the stream by getting its track list using {{domxref("MediaStream.getTracks()")}}, then calling each track's {domxref("MediaStreamTrack.stop, "stop()")}} method. Once that's done, `srcObject` is set to `null` to make sure it's understood by anyone interested that there's no stream connected.

```js
function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}
```

##### Dumping configuration information

For informational purposes, the `startCapture()` method shown above calls a method named `dumpOptions()`, which outputs the current track settings as well as the consrtaints that were placed upon the stream when it was created.

```js
function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.info("Track settings:");
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info("Track constraints:");
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
```

The track list is obtained by calling {{domxref("MediaStream.getVideoTracks", "getVideoTracks()")}} on the capture'd screen's {{domxref("MediaStream")}}. The settings currentoly in effect are obtained using {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} and the established constraints are gotten with {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}

#### HTML

The HTML starts with a simple introductory paragraph, then gets into the meat of things.

```html
<p>
  This example shows you the contents of the selected part of your display.
  Click the Start Capture button to begin.
</p>

<p>
  <button id="start">Start Capture</button>&nbsp;<button id="stop">
    Stop Capture
  </button>
</p>

<video id="video" autoplay></video>
<br />

<strong>Log:</strong>
<br />
<pre id="log"></pre>
```

The key parts of the HTML are:

1. A {{HTMLElement("button")}} labeled "Start Capture" which, when clicked, calls the `startCapture()` function to request access to, and begin capturing, screen contents.
2. A second button, "Stop Capture", which upon being clicked calls `stopCapture()` to terminate capture of screen contents.
3. A {{HTMLElement("video")}} into which the captured screen contents are streamed.
4. A {{HTMLElement("pre")}} block into which logged text is placed by the intercepted {{domxref("Console")}}method.

#### CSS

The CSS is entirely cosmetic in this example. The video is given a border, and its width is set to occupy nearly the entire available horizontal space (`width: 98%`). {{cssxref("max-width")}} is set to `860px` to set an absolute upper limit on the video's size,

The `error`, `warn`, and `info` classes are used to style the corresponding console output types.

```css
#video {
  border: 1px solid #999;
  width: 98%;
  max-width: 860px;
}

.error {
  color: red;
}

.warn {
  color: orange;
}

.info {
  color: darkgreen;
}
```

#### Result

The final product looks like this. If your browser supports Screen Capture API, clicking "Start Capture" will present the {{Glossary("user agent", "user agent's")}} interface for selecting a screen, window, or tab to share.

{{EmbedLiveSample("Simple_screen_capture", 640, 680, "", "", "", "display-capture")}}

## Security

In order to function when [Feature Policy](/ru/docs/Web/HTTP/Feature_Policy) is enabled, you will need the `display-capture` permission. This can be done using the {{HTTPHeader("Feature-Policy")}} {{Glossary("HTTP")}} header or—if you're using the Screen Capture API in an {{HTMLElement("iframe")}}, the `<iframe>` element's [`allow`](/ru/docs/Web/HTML/Element/iframe#allow) attribute.

For example, this line in the HTTP headers will enable Screen Capture API for the document and any embedded {{HTMLElement("iframe")}} elements that are loaded from the same origin:

```
Feature-Policy: display-capture 'self'
```

If you're performing screen capture within an `<iframe>`, you can request permission just for that frame, which is clearly more secure than requesting a more general permission:

```html
<iframe src="https://mycode.example.net/etc" allow="display-capture"> </iframe>
```

## See also

- [Screen Capture API](/ru/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API)
- [Taking still photos with WebRTC](/ru/docs/Web/API/WebRTC_API/Taking_still_photos)
- {{domxref("HTMLCanvasElement.captureStream()")}} to obtain a {{domxref("MediaStream")}} with the live contents of a {{HTMLElement("canvas")}}
