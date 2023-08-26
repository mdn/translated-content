---
title: Запись медиа элемента
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
---

{{DefaultAPISidebar("MediaStream Recording")}}

В статье Использование интерфейса MediaStream Recording API демонстрируется использование объекта типа {{domxref("MediaRecorder")}} для захвата потока, представляющего объект типа {{domxref("MediaStream")}} , сгенерированного аппаратными средствами устройства и возвращаемого методом {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}, но можно также использовать HTML медиа элемент (а именно {{HTMLElement("audio")}} или {{HTMLElement("video")}}) в качестве источника потока `MediaStream` для его записи. В этой статье рассматривается пример выполняющий это.

## HTML содержимое

```html hidden
<p>
  Click the "Start" button to begin video recording for a few seconds. You can
  stop the video by clicking the creatively-named "Stop" button. The "Download"
  button will download the received data (although it's in a raw, unwrapped form
  that isn't very useful).
</p>
<br />
```

Рассмотрим ключевые моменты кода HTML. Это только небольшой отрывок, относящийся к информационной части приложения.

```html
<div class="left">
  <div id="startButton" class="button">Start</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

Основной интерфейс представляется в двух колонках. В левой находиться кнопка старта и элемент {{HTMLElement("video")}} , который отображает предварительный просмотр видео. Это видео, воспроизводится камерой устройства. Заметьте, что используется атрибут [`autoplay`](/ru/docs/Web/HTML/Element/video#autoplay), что бы поток начал воспроизводиться немедленно, снимаясь прямо с камеры. Атрибут [`muted`](/ru/docs/Web/HTML/Element/video#muted) гарантирует отключение звука с микрофона, для предотвращения цикличного эхо эффекта.

```html
<div class="right">
  <div id="stopButton" class="button">Stop</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button"> Download </a>
</div>
```

Справа мы видим кнопку остановки и элемент `<video>,` который будет использоваться для воспроизведения записанного видео. Обратите внимание, что на панели воспроизведения не установлен режим автозапуска (поэтому воспроизведение не начинается сразу после поступления мультимедиа), а также установлен атрибут [`controls`](/ru/docs/Web/HTML/Element/video#controls), что говорит о необходимости показывать пользовательские элементы управления для воспроизведения, паузы и т. д.

Под элементом воспроизведения находится кнопка для загрузки записанного видео.

```html hidden
<div class="bottom">
  <pre id="log"></pre>
</div>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 2px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  display: block;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  text-decoration: none;
}

h2 {
  margin-bottom: 4px;
}

.left {
  margin-right: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.right {
  margin-left: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.bottom {
  clear: both;
  padding-top: 10px;
}
```

## JavaScript

Теперь давайте посмотрим на код JavaScript

### Установка глобальных переменных

Мы начнём с установления некоторых глобальных переменных, которые нам понадобятся.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

Большинство из них являются ссылками на элементы, с которыми нам нужно работать. Последняя, `recordingTimeMS`, установлена на 5000 миллисекунд (5 секунд);.

### Используемые функции

Далее мы создадим несколько служебных функций, которые будут использованы позже.

```js
function log(msg) {
  logElement.innerHTML += msg + "\n";
}
```

Функция `log ()` используется для вывода текстовых строк в {{HTMLElement ("div")}}, чтобы мы могли делиться информацией с пользователем.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

The `wait()` function returns a new {{jsxref("Promise")}} which resolves once the specified number of milliseconds have elapsed. It works by using an [arrow function](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which calls {{domxref("window.setTimeout()")}}, specifying the promise's resolution handler as the timeout handler function. That lets us use promise syntax when using timeouts, which can be very handy when chaining promises, as we'll see later.

### Starting media recording

The `startRecording()` function handles starting the recording process:

```js
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.start();
  log(recorder.state + " for " + lengthInMS / 1000 + " seconds...");

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = (event) => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop(),
  );

  return Promise.all([stopped, recorded]).then(() => data);
}
```

`startRecording()` takes two input parameters: a {{domxref("MediaStream")}} to record from and the length in milliseconds of the recording to make. We always record no more than the specified number of milliseconds of media, although if the media stops before that time is reached, {{domxref("MediaRecorder")}} automatically stops recording as well.

- Line 2
  - : Creates the `MediaRecorder` that will handle recording the input `stream`.
- Line 3
  - : Creates an empty array, `data`, which will be used to hold the {{domxref("Blob")}}s of media data provided to our {{domxref("MediaRecorder.ondataavailable", "ondataavailable")}} event handler.
- Line 5
  - : Sets up the handler for the {{event("dataavailable")}} event. The received event's `data` property is a {{domxref("Blob")}} that contains the media data. The event handler simply pushes the `Blob` onto the `data` array.
- Lines 6-7
  - : Starts the recording process by calling {{domxref("MediaRecorder.start", "recorder.start()")}}, and outputs a message to the log with the updated state of the recorder and the number of seconds it will be recording.
- Lines 9-12
  - : Creates a new {{jsxref("Promise")}}, named `stopped`, which is resolved when the `MediaRecorder`'s {{domxref("MediaRecorder.onstop", "onstop")}} event handler is called, and is rejected if its {{domxref("MediaRecorder.onerror", "onerror")}} event handler is called. The rejection handler receives as input the name of the error that occurred.
- Lines 14-16
  - : Creates a new `Promise`, named `recorded`, which is resolved when the specified number of milliseconds have elapsed. Upon resolution, it stops the `MediaRecorder` if it's recording.
- Lines 18-22
  - : These lines create a new `Promise` which is fulfilled when both of the two `Promise`s (`stopped` and `recorded`) have resolved. Once that resolves, the array data is returned by `startRecording()` to its caller.

### Stopping the input stream

The `stop()` function simply stops the input media:

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

This works by calling {{domxref("MediaStream.getTracks()")}}, using {{jsxref("Array.forEach", "forEach()")}} to call {{domxref("MediaStreamTrack.stop()")}} on each track in the stream.

### Getting an input stream and setting up the recorder

Now let's look at the most intricate piece of code in this example: our event handler for clicks on the start button:

```js
startButton.addEventListener(
  "click",
  function () {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        downloadButton.href = recording.src;
        downloadButton.download = "RecordedVideo.webm";

        log(
          "Successfully recorded " +
            recordedBlob.size +
            " bytes of " +
            recordedBlob.type +
            " media.",
        );
      })
      .catch(log);
  },
  false,
);
```

When a {{event("click")}} event occurs, here's what happens:

- Lines 2-4
  - : {{domxref("navigator.mediaDevices.getUserMedia()")}} is called to request a new {{domxref("MediaStream")}} that has both video and audio tracks. This is the stream we'll record.
- Lines 5-9
  - : When the Promise returned by `getUserMedia()` is resolved, the preview {{HTMLElement("video")}} element's {{domxref("HTMLMediaElement.srcObject","srcObject")}} property is set to be the input stream, which causes the video being captured by the user's camera to be displayed in the preview box. Since the `<video>` element is muted, the audio won't play. The "Download" button's link is then set to refer to the stream as well. Then, in line 8, we arrange for `preview.captureStream()` to call `preview.mozCaptureStream()` so that our code will work on Firefox, on which the {{domxref("MediaRecorder.captureStream()")}} method is prefixed. Then a new {{jsxref("Promise")}} which resolves when the preview video starts to play is created and returned.
- Line 10
  - : When the preview video begins to play, we know there's media to record, so we respond by calling the [`startRecording()`](#starting_media_recording) function we created earlier, passing in the preview video stream (as the source media to be recorded) and `recordingTimeMS` as the number of milliseconds of media to record. As mentioned before, `startRecording()` returns a {{jsxref("Promise")}} whose resolution handler is called (receiving as input an array of {{domxref("Blob")}} objects containing the chunks of recorded media data) once recording has completed.
- Lines 11-15

  - : The recording process's resolution handler receives as input an array of media data `Blob`s locally known as `recordedChunks`. The first thing we do is merge the chunks into a single {{domxref("Blob")}} whose MIME type is `"video/webm"` by taking advantage of the fact that the {{domxref("Blob.Blob", "Blob()")}} constructor concatenates arrays of objects into one object. Then {{domxref("URL.createObjectURL()")}} is used to create an URL that references the blob; this is then made the value of the recorded video playback element's [`src`](/ru/docs/Web/HTML/Element/video#src) attribute (so that you can play the video from the blob) as well as the target of the download button's link.

    Then the download button's [`download`](/ru/docs/Web/HTML/Element/a#download) attribute is set. While the `download` attribute can be a Boolean, you can also set it to a string to use as the name for the downloaded file. So by setting the download link's `download` attribute to "RecordedVideo.webm", we tell the browser that clicking the button should download a file named `"RecordedVideo.webm"` whose contents are the recorded video.

- Lines 17-18
  - : The size and type of the recorded media are output to the log area below the two videos and the download button.
- Line 20
  - : The `catch()` for all the `Promise`s outputs the error to the logging area by calling our `log()` function.

### Handling the stop button

The last bit of code adds a handler for the {{event("click")}} event on the stop button using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
stopButton.addEventListener(
  "click",
  function () {
    stop(preview.srcObject);
  },
  false,
);
```

This simply calls the [`stop()`](#stopping_the_input_stream) function we covered earlier.

## Result

When put all together with the rest of the HTML and the CSS not shown above, it looks and works like this:

{{ EmbedLiveSample('Example', 600, 440, "", "", "", "camera;microphone") }}

You can {{LiveSampleLink("Example", "take a look at all the code")}}, including the parts hidden above because they aren't critical to the explanation of how the APIs are being used.

## See also

- [MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API)
- [Using the MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API)
