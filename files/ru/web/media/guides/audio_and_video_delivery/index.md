---
title: Воспроизведение аудио и видео в вебе
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 15a768b7d90550b0d90811a52d031674a3b84011
---

Существует множество способов воспроизведения аудио и видео в интернете — от статичных медиафайлов до адаптивной потоковой трансляции в реальном времени. Эта статья служит отправной точкой для изучения различных подходов к воспроизведению мультимедиа через веб и их совместимости с популярными браузерами.

## Элементы аудио и видео в HTML

Будь то заранее записанные аудиофайлы или прямые трансляции, способ отображения этих данных в браузере с помощью элементов {{ htmlelement("audio")}} и {{ htmlelement("video")}} остаётся практически одинаковым. В настоящее время, для поддержки всех браузеров, как правило, требуется указывать два формата, однако с внедрением поддержки MP3 и MP4 в Firefox и Opera ситуация меняется. Сведения о совместимости доступны в [Руководстве по типам и форматам медиа в Интернете](/ru/docs/Web/Media/Guides/Formats).

Обычно процесс передачи медиафайлов состоит из следующих этапов:

1. Проверьте, какие форматы поддерживает браузер (обычно два варианта, как указано выше).
2. Если браузер не поддерживает воспроизведение ни одного из предложенных форматов, отобразите неподвижную картинку или используйте резервную технологию для воспроизведения видео.
3. Решите, как вы хотите воспроизвести или создать элемент — например, использовать {{ htmlelement("video") }} или `document.createElement('video')`.
4. Передайте выбранный медиафайл в плеер и запустите воспроизведение.

### HTML-аудио

```html
<audio controls preload="auto">
  <source src="audio-file.mp3" type="audio/mpeg" />

  <!-- Альтернатива для браузеров без поддержки MP3-->
  <source src="audio-file.ogg" type="audio/ogg" />

  <!-- Альтернатива для браузеров без поддержки элемента audio -->
  <a href="audio-file.mp3">download audio</a>
</audio>
```

Этот код создаёт аудиоплеер, который попытается предварительно загрузить как можно больше данных для плавного воспроизведения.

> [!NOTE]
> Некоторые мобильные браузеры могут игнорировать атрибут `preload`.

Дополнительную информацию см. в [Основах кросс-браузерного аудио (HTML Audio подробно)](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

### HTML-видео

```html
<video
  controls
  width="640"
  height="480"
  poster="initial-image.png"
  autoplay
  muted>
  <source src="video-file.mp4" type="video/mp4" />

  <!-- запасной вариант для браузеров без поддержки mp4 -->
  <source src="video-file.webm" type="video/webm" />

  <!-- добавление субтитров -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- запасной вариант для браузеров без поддержки элемента video -->
  <a href="video-file.mp4">download video</a>
</video>
```

Приведённый выше код создаёт видеоплеер с размерами 640x480 пикселей, отображающий заставку, пока видео не начнёт воспроизводиться. Мы задаём автоматический запуск видео, но по умолчанию без звука.

> [!NOTE]
> Некоторые мобильные браузеры могут игнорировать `autoplay`, поэтому его использование требует осторожности. Рекомендуется ознакомиться с [Руководством по автозапуску медиа и Web Audio API](/ru/docs/Web/Media/Guides/Autoplay), чтобы узнать, как разумно использовать автозапуск.

Дополнительную информацию см. в статьях [\<video> element](/ru/docs/Web/HTML/Reference/Elements/video) и [Создание кроссбраузерного видеоплеера](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

### Аудио на JavaScript

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audio-file.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audio-file.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

Мы устанавливаем источник аудиофайла в зависимости от того, какой формат поддерживает браузер. Затем устанавливаем позицию воспроизведения на отметку 5 секунд и пытаемся запустить воспроизведение.

> [!NOTE]
> Метод play() будет проигнорирован большинством браузеров, если его вызов не был инициирован действием пользователя.

Также возможно использовать элемент {{ htmlelement("audio") }} с WAV-файлом, закодированным в base64 — это позволяет генерировать звук в реальном времени:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) применяет этот подход.

### Видео на JavaScript

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "video-file.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "video-file.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

Мы устанавливаем источник видеоролика в зависимости от того, какой формат поддерживает браузер, а затем задаём ширину и высоту элемента видео.

## Web Audio API

В этом примере мы получаем MP3-файл с помощью API {{domxref("Window/fetch", "fetch()")}}, загружаем его в источник и воспроизводим:

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Загрузка аудиофайла
    const response = await fetch("viper.mp3");
    // Декодирование аудиоданных
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

const play = document.getElementById("play");
play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
  play.disabled = true;
});
```

Вы можете [запустить полный пример онлайн](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), или [посмотреть исходный код](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Больше информации об основах Web Audio API см. в [руководстве по использованию Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Вы также можете получить поток в реальном времени с веб-камеры и/или микрофона с помощью `getUserMedia` и Stream API. Это является частью более широкой технологии, известной как WebRTC (Web Real-Time Communications), и совместимо с последними версиями Chrome, Firefox и Opera.

Чтобы получить поток с веб-камеры, сначала создайте элемент {{htmlelement("video")}}:

```html
<video id="webcam" width="480" height="360"></video>
```

Затем, если поддерживается, подключите поток веб-камеры к видеоэлементу:

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function onSuccess(stream) {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(function onError() {
      alert(
        "Произошла ошибка при получении потока — вы запускаете файл локально (file:///), либо запретили доступ?",
      );
    });
} else {
  alert("getUserMedia не поддерживается в этом браузере.");
}
```

Больше информации — на странице {{domxref("MediaDevices.getUserMedia")}}.

## Запись потока MediaStream

Вводятся новые стандарты, позволяющие браузеру получать медиа с микрофона или камеры с помощью `getUserMedia` и сразу записывать его с помощью нового API MediaStream Recording. Вы получаете поток из `getUserMedia`, передаёте его объекту `MediaRecorder`, а затем сохраняете результат и передаёте его в аудио- или видеоэлемент\*.

Основной механизм показан ниже:

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function onSuccess(stream) {
    const recorder = new MediaRecorder(stream);

    const data = [];
    recorder.ondataavailable = (e) => {
      data.push(e.data);
    };
    recorder.start();
    recorder.onerror = (e) => {
      throw e.error || new Error(e.name); // e.name — нестандартное в Firefox
    };
    recorder.onstop = (e) => {
      const audio = document.createElement("audio");
      audio.src = window.URL.createObjectURL(new Blob(data));
    };
    setTimeout(() => {
      rec.stop();
    }, 5000);
  })
  .catch(function onError(error) {
    console.log(error.message);
  });
```

Подробнее см. [API для записи MediaStream](/ru/docs/Web/API/MediaStream_Recording_API.)

## Расширения источников мультимедиа (MSE)

[Расширения источников мультимедиа](https://w3c.github.io/media-source/) это рабочий черновик W3C, который расширяет {{domxref("HTMLMediaElement")}}, позволяя JavaScript создавать медиапотоки для воспроизведения. Это открывает возможности, такие как адаптивная потоковая передача и управление временным сдвигом в прямых трансляциях.

### Расширения для зашифрованного медиаконтента (EME)

[Расширения для зашифрованного медиаконтента](https://w3c.github.io/encrypted-media/)—предложение W3C, расширяющее `HTMLMediaElement`, предоставляющее API для управления воспроизведением зашифрованного контента.

API поддерживает сценарии использования от простой дешифровки «чистым» ключом до видео высокого качества (при наличии соответствующей поддержки со стороны браузера). Обмен лицензиями и ключами контролируется приложением, что облегчает разработку надёжных плееров, поддерживающих различные технологии защиты и дешифрования контента.

Одна из ключевых задач EME — позволить браузерам реализовать DRM ([Управление цифровыми правами](https://en.wikipedia.org/wiki/Digital_rights_management)), что помогает предотвратить несанкционированное копирование защищённого веб-контента (особенно видео).

### Адаптивная потоковая передача

Внедряются новые форматы и протоколы, упрощающие адаптивную потоковую передачу. Это позволяет автоматически менять пропускную способность и качество потока в реальном времени в зависимости от доступной у пользователя ширины канала. Адаптивная потоковая передача особенно востребована при прямых трансляциях, где плавность воспроизведения имеет первостепенное значение.

Основные форматы, используемые для такой передачи — это [HLS](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) и [MPEG-DASH](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE была разработана с учетом DASH. Она определяет байтовые потоки по спецификациям [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) и [M2TS](https://en.wikipedia.org/wiki/M2ts) (оба поддерживаются в DASH, а M2TS также поддерживается HLS). Если вам важны стандарты, гибкость и поддержка современных браузеров — скорее всего, вам подойдёт именно формат DASH.

> [!NOTE]
> В настоящий момент Safari не поддерживает DASH, хотя библиотека dash.js работает в новых версиях Safari, которые выйдут с macOS Yosemite.

DASH также предлагает несколько профилей, в том числе onDemand-профили, которые не требуют предварительной обработки и разбивки медиафайлов. Существуют также облачные сервисы, позволяющие конвертировать ваши медиа в форматы HLS и DASH.

Дополнительно см. [Потоковая передача аудио и видео в реальном времени](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Кастомизация медиаплеера

Возможно, вы захотите, чтобы ваш аудио- или видеоплеер выглядел одинаково во всех браузерах или просто подстроить его под дизайн вашего сайта. Для этого обычно убирают атрибут `controls` , чтобы скрыть стандартные элементы управления браузера, создают собственный интерфейс с помощью HTML и CSS, а затем с помощью JavaScript связывают эти элементы с API аудио/видео.

Если вам нужны дополнительные возможности, можно добавить функции, отсутствующие в стандартных плеерах — например, управление скоростью воспроизведения, переключение потокового качества или даже отображение аудиоспектра. Вы также сами решаете, как сделать плеер адаптивным — например, при определённых условиях скрывать полосу прогресса.

Вы можете реагировать на клики, касания и нажатия клавиш, чтобы запускать такие действия, как воспроизведение, пауза и перемотка. Очень важно предусмотреть управление с клавиатуры для удобства пользователей и доступности.

Простой пример — сначала создаём аудиоэлемент и кастомную кнопку управления в HTML:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Добавьте небольшой JavaScript-код, который отслеживает пользовательские действия для запуска и приостановки воспроизведения аудио:

```js
window.onload = () => {
  const myAudio = document.getElementById("my-audio");
  const myControl = document.getElementById("my-control");

  function switchState() {
    if (myAudio.paused) {
      myAudio.play();
      myControl.textContent = "pause";
    } else {
      myAudio.pause();
      myControl.textContent = "play";
    }
  }

  function checkKey(e) {
    if (e.code === "Space") {
      // пробел
      switchState();
    }
  }

  myControl.addEventListener(
    "click",
    () => {
      switchState();
    },
    false,
  );

  window.addEventListener("keypress", checkKey, false);
};
```

Вы можете [попробовать этот пример здесь](https://jsbin.com/jujeladu/2/edit). Подробнее см. [Как создать собственный аудиоплеер](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Другие советы по работе с аудио и видео

### Остановка загрузки медиа

Хотя остановить воспроизведение медиа можно просто вызвав метод `pause()` элемента, браузер продолжит загружать файл до тех пор, пока медиаэлемент не будет удалён сборщиком мусора.

Вот приём, который сразу прекращает загрузку:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Удалив у тега `<video>` атрибут `src` и вызвав метод load(), вы освобождаете ресурсы, связанные с видео, и прекращаете сетевую загрузку. Метод `load()` необходимо вызвать после удаления `src`, иначе алгоритм загрузки не будет инициирован. Если элемент `<video>` содержит вложенные `<source>`, их тоже нужно удалить до вызова `load()`.

Обратите внимание: если просто задать `src` пустую строку, браузер воспримет это как относительный путь и попытается загрузить файл, которого, скорее всего, не существует.

### Перемотка в медиа

Медиаэлементы позволяют перемещать текущую позицию воспроизведения на конкретный момент. Для этого нужно установить значение свойства `currentTime` в секундах. Дополнительную информацию о свойствах элемента см. в {{ domxref("HTMLMediaElement") }}. Установите значение `currentTime` в секунды, на которые вы хотите переместить воспроизведение.

Свойство `seekable` позволяет определить, какие временные диапазоны доступны для перемотки. Оно возвращает объект {{ domxref("TimeRanges") }} с доступными интервалами.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Возвращает начальное время (в секундах)
mediaElement.seekable.end(0); // Возвращает конечное время (в секундах)
mediaElement.currentTime = 122; // Перемотка на 122 секунду
mediaElement.played.end(0); // Возвращает количество секунд, которое воспроизводилось
```

### Указание диапазона воспроизведения

При указании URI мультимедиа для элемента {{ HTMLElement("audio") }} или{{ HTMLElement("video")}}, вы можете дополнительно указать, какую часть мультимедиа следует воспроизводить. Для этого добавьте к ссылке символ решётки («#») и описание фрагмента.

Диапазон времени указывается с помощью следующего синтаксиса:

```plain
#t=[starttime][,endtime]
```

Время можно задать как число в секундах (включая дробные значения) или в формате часы:минуты:секунды (например, 2:05:01 — это 2 часа, 5 минут и 1 секунда).

Примеры:

- `http://example.com/video.ogv#t=10,20`
  - : воспроизвести с 10-й по 20-ю секунду.
- `http://example.com/video.ogv#t=,10.5`
  - : воспроизвести с начала до 10.5 секунды.
- `http://example.com/video.ogv#t=,02:00:00`
  - : воспроизвести с начала до двух часов.
- `http://example.com/video.ogv#t=60`
  - : начать воспроизведение с 60-й секунды до конца.

## Обработка ошибок

Ошибки передаются дочерним элементам {{ HTMLElement("source") }}, соответствующим источникам, вызвавшим ошибку.

Это позволяет определить, какие из источников не удалось загрузить. Например:

```html
<video>
  <source
    id="mp4_src"
    src="video.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source
    id="3gp_src"
    src="video.3gp"
    type='video/3gpp; codecs="mp4v.20.8, samr"' />
  <source
    id="ogg_src"
    src="video.ogv"
    type='video/ogv; codecs="theora, vorbis"' />
</video>
```

Поскольку Firefox не поддерживает MP4 и 3GP на некоторых платформах из-за патентных ограничений, элементы {{ HTMLElement("source") }} с ID получат ошибку (`error`) до того, как будет предпринята попытка загрузить ресурс Ogg. Источники проверяются по очереди, и как только один из них загружается успешно, остальные не используются.

### Проверка поддержки форматов браузером

Используйте следующие проверенные источники в элементах audio и video, чтобы проверить поддержку:

- MP3-ауио (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([воспроизвести MP3-аудио онлайн](https://jsbin.com/gekatoge/1/edit).)
- MP4-аудио (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([воспроизвести MP4-аудио онлайн](https://jsbin.com/gekatoge/2/edit).)
- Ogg-аудио (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([воспроизвести OGG-аудио онлайн](https://jsbin.com/gekatoge/4/edit).)
- MP4-видео (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([воспроизвести MP4-видео онлайн](https://jsbin.com/gekatoge/5/edit).)
- WebM-видео (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([воспроизвести WebM-видео онлайн](https://jsbin.com/gekatoge/6/edit).)
- Ogg-видео (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([воспроизвести OGG-видео онлайн](https://jsbin.com/gekatoge/7/edit).)

Если эти файлы не воспроизводятся, браузер не поддерживает данный формат. Попробуйте другой формат или настройте запасной вариант.

Если эти файлы работают, а ваши нет, возможны две причины:

#### 1. Медиасервер не передаёт правильные MIME-типы вместе с файлом

Хотя это обычно поддерживается, вам, возможно, придётся добавить следующее в файл `.htaccess` вашего медиа-сервера:

```plain
# AddType TYPE/SUBTYPE EXTENSION

AddType audio/mpeg mp3
AddType audio/mp4 m4a
AddType audio/ogg ogg
AddType audio/ogg oga

AddType video/mp4 mp4
AddType video/mp4 m4v
AddType video/ogg ogv
AddType video/webm webm
AddType video/webm webmv
```

#### 2. Ваши файлы были некорректно закодированы

Возможно, файлы были некорректно закодированы — попробуйте использовать один из следующих инструментов, которые зарекомендовали себя как надёжные:

- [Audacity](https://sourceforge.net/projects/audacity/) — Бесплатный редактор и рекордер аудио
- [Miro](https://www.getmiro.com/) — Бесплатный, с открытым исходным кодом, аудио- и видеоплеер
- [Handbrake](https://handbrake.fr/) — Открытый видеоконвертер
- [Firefogg](https://www.firefogg.org/) — Кодирование видео и аудио для Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Полнофункциональный командный кодировщик
- [Vid.ly](https://m.vid.ly/) — Видеоплеер, перекодировка и доставка видео
- [Internet Archive](https://archive.org/) — Бесплатная перекодировка и хранение

### Обнаружение отсутствия загруженных источников

Чтобы определить, что все дочерние элементы {{ HTMLElement("source") }} не удалось загрузить, проверьте значение атрибута медиа-элемента `networkState`. Если оно равно `HTMLMediaElement.NETWORK_NO_SOURCE`, это означает, что ни один из источников не удалось загрузить.

Если в этот момент вы добавите новый источник — например, вставите новый элемент {{ HTMLElement("source") }} в медиа-элемент, Gecko (движок Firefox) попытается загрузить указанный ресурс.

### Отображение запасного контента, если источник не может быть декодирован

Другой способ отобразить запасной (fallback) контент видео, когда ни один из источников не может быть воспроизведен в текущем браузере — добавить обработчик ошибок к последнему элементу `<source>`. В этом случае можно заменить видео его запасным содержимым:

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4" />
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS" />
  </a>
  <p>
    Нажмите на изображение, чтобы посмотреть видеодемонстрацию динамического
    поиска приложений
  </p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastSource = sources[sources.length - 1];
lastSource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## JavaScript-библиотеки для аудио и видео

Существует множество JavaScript-библиотек для работы с аудио и видео. Наиболее популярные из них позволяют использовать единый дизайн плеера во всех браузерах и предоставляют запасной вариант для браузеров, которые не поддерживают аудио и видео нативно. Ранее в качестве запасных решений использовались устаревшие плагины, такие как Adobe Flash или Microsoft Silverlight, однако современные компьютеры больше не поддерживают эти технологии. Дополнительный функционал, например элемент [`<track>`](/ru/docs/Web/HTML/Reference/Elements/track) для субтитров, также может быть реализован через медиа-библиотеки.

### Только аудио

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Только видео

- [flowplayer](https://flowplayer.com/): Бесплатен с водяным знаком логотипа flowplayer. Открытый исходный код (лицензия GPL).
- [JWPlayer](https://jwplayer.com/): Требуется регистрация для загрузки. Открытая версия (лицензия Creative Commons).
- [SublimeVideo](https://www.sublimevideo.net/): Требуется регистрация. Настройка через форму и получение доменно-специфической ссылки на библиотеку с CDN.
- [Video.js](https://videojs.com/): Бесплатен и с открытым исходным кодом (лицензия Apache 2).

### Аудио и видео

- [jPlayer](https://jPlayer.org/): Бесплатен и с открытым исходным кодом (лицензия MIT).
- [mediaelement.js](https://www.mediaelementjs.com/): Бесплатен и с открытым исходным кодом (лицензия MIT).

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Полифилл для старых версий Web Audio API; открытый исходный код (лицензия Apache 2).

## Руководства

- [Создание кроссбраузерного видеоплеера](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Руководство по созданию базового кроссбраузерного видеоплеера с использованием элемента {{ htmlelement("video") }}.
- [Основы стилизации видеоплеера](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Продолжение предыдущего руководства, в котором рассматриваются основы адаптивной стилизации плеера.
- [Основы кроссбраузерного аудио](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Базовое руководство по созданию HTML-аудиоплеера, который работает во всех браузерах. Объясняются все соответствующие атрибуты, свойства и события, а также даётся краткое руководство по созданию пользовательских элементов управления с помощью Media API.
- [Буферизация, перемотка и диапазоны времени в медиа](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Иногда бывает полезно знать, сколько {{ htmlelement("audio") }} или {{ htmlelement("video") }} уже загружено и может воспроизводиться без задержек. В этой статье объясняется, как реализовать индикатор буфера и перемотки с использованием интерфейса [TimeRanges](/ru/docs/Web/API/TimeRanges), и других функций Media API.
- [Объяснение свойства playbackRate в HTML](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Свойство `playbackRate` позволяет изменять скорость воспроизведения аудио или видео. В статье подробно объясняется его работа.
- [Использование Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Основы использования Web Audio API для захвата, обработки и воспроизведения аудиопотока.

### Потоковая передача медиа (Streaming media)

- [Прямая трансляция веб-аудио и видео](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Технологии прямой трансляции часто используются для передачи в реальном времени таких событий, как спортивные матчи, концерты, а также телепередачи и радиопрограммы. Часто это называют просто «стримингом». Часто сокращаемый до «стриминга», live streaming представляет собой процесс передачи медиаконтента «в прямом эфире» на компьютеры и устройства. Это довольно сложная и молодую область с множеством переменных, поэтому в этой статье мы познакомим вас с основами и расскажем, как начать работу.
- [Настройка источников адаптивного потокового медиа](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Предположим, вы хотите настроить адаптивный источник потокового видео для использования внутри HTML-медиа-элемента. Как это сделать? В этой статье объясняется процесс настройки, включая два наиболее популярных формата: MPEG-DASH и HLS (HTTP Live Streaming).
- [Адаптивная потоковая передача DASH для HTML5-видео](/ru/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Подробное руководство по настройке адаптивного стриминга с использованием формата DASH и контейнера WebM.

### Углублённые темы

- [Добавление субтитров и надписей к HTML-видео](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Эта статья объясняет, как добавить субтитры и надписи к HTML-элементу {{ htmlelement("video") }}, используя [формат текстовых дорожек WebVTT (Web Video Text Tracks Format)](/ru/docs/Web/API/WebVTT_API) и элемент {{ htmlelement("track") }}.
- [Кроссбраузерная поддержка Web Audio API](/ru/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Руководство по написанию кода с использованием Web Audio API, который будет работать во всех браузерах.
- [Простая запись аудио с помощью MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Объясняются основы использования API записи медиапотока (MediaStream Recording API) для прямой записи аудио.

## Справочник

- [Элемент video](/ru/docs/Web/HTML/Reference/Elements/video)
- [API HTMLVideoElement](/ru/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/ru/docs/Web/API/MediaSource)
- [Web Audio API](/ru/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia — доступ к камере и микрофону](/ru/docs/Web/API/MediaDevices/getUserMedia)
- [Справочник событий: Медиа](/ru/docs/Web/Events#media)
