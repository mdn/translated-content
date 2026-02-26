---
title: Создание кроссбраузерного видеоплеера
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
---

В этой статье описывается базовый HTML-видеоплеер, использующий API Media и Fullscreen. Помимо возможности работы в полноэкранном режиме, в плеере реализованы собственные элементы управления вместо стандартных браузерных. Элементы управления плеера будут стилизованы минимально, только для обеспечения их работоспособности; полная стилизация плеера будет рассмотрена в другой статье.

Предлагаемый видеоплеер показывает фрагмент из свободного видео [Tears of Steel](https://mango.blender.org/about/) и включает типичные элементы управления видео.

## HTML-разметка

Для начала рассмотрим HTML-код плеера.

### Видео

Весь плеер заключен в элемент {{ htmlelement("figure") }}.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Внутри мы первым делом определяем элемент {{ htmlelement("video") }}.

```html live-sample___video-player
<video
  id="video"
  controls
  preload="metadata"
  poster="/shared-assets/images/examples/tears-of-steel-battle-clip-medium-poster.jpg">
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    type="video/mp4" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.ogg"
    type="video/ogg" />
  <!-- Offer download -->
  <a href="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    >Скачать MP4</a
  >
</video>
```

Несмотря на то, что в плеере будет реализован собственный набор элементов управления, атрибут `controls` всё равно добавлен в элемент {{ htmlelement("video") }}, набор элементов управления, существующий в плеере по умолчанию, будет отключен позже с помощью JavaScript. Такой подход позволяет пользователям, у которых отключён JavaScript (по любой причине), по-прежнему иметь доступ к встроенным элементам управления браузера.

Для видео задано изображение-заставка (poster), а атрибут `preload` установлен в значение `metadata`. Это указывает браузеру, что изначально следует загружать только метаданные из видеофайла, а не весь файл целиком. Это позволяет получить плееру такие данные, как длительность видео и его формат.

Для плеера предоставлены три различных источника видео: MP4, WebM и Ogg. Использование этих форматов обеспечивает максимальную вероятность поддержки во всех браузерах, поддерживающих воспроизведение HTML-видео. Дополнительную информацию о форматах видео и совместимости с браузерами см. в [выборе видеокодека](/ru/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

Приведённый выше код позволит воспроизводить видео в большинстве браузеров с помощью стандартного набора элементов управления браузера. Следующий шаг — определение собственного набора элементов управления, который будет использоваться для управления видео, также на HTML.

### Набор элементов управления

Стандартные элементы управления видео в большинстве браузеров обладают следующим функционалом:

- Воспроизведение/пауза
- Отключение звука
- Регулировка громкости
- Индикатор прогресса
- Перемотка вперед
- Полноэкранный режим

Собственный набор элементов управления также будет поддерживать все эти функции, с добавлением кнопки остановки.

HTML-разметка довольно проста: для размещения элементов управления используется неупорядоченный список со свойством `list-style-type:none`. Каждый элемент управления представлен элементом списка с примененным стилем `float:left`. Для индикатора прогресса (прогресс-бар) используется элемент `progress`. Этот список размещается сразу после элемента {{ htmlelement("video") }}, но внутри элемента {{ htmlelement("figure") }} (это важно для работы полноэкранного режима, о чем будет рассказано далее).

```html live-sample___video-player
<ul id="video-controls" class="controls" data-state="hidden">
  <li><button id="play-pause" type="button">Воспроизведение/пауза</button></li>
  <li><button id="stop" type="button">Стоп</button></li>
  <li class="progress">
    <progress id="progress" value="0"></progress>
  </li>
  <li><button id="mute" type="button">Звук выкл./вкл.</button></li>
  <li><button id="vol-inc" type="button">Громкость +</button></li>
  <li><button id="vol-dec" type="button">Громкость -</button></li>
  <li><button id="fs" type="button">Полноэкранный режим</button></li>
</ul>
```

Каждой кнопке присвоен `id`, чтобы к ней можно было легко получить доступ через JavaScript.

Элементы управления изначально скрыты с помощью CSS `display:none` и будут показаны с помощью JavaScript. Опять же, если у пользователя отключён JavaScript, собственный набор элементов управления не появится, и можно будет беспрепятственно использовать стандартные элементы управления браузера.

Конечно, этот собственный набор элементов управления на данном этапе бесполезен и ничего не делает. Ситуацию можно исправить с помощью JavaScript.

В конце мы закрываем элемент `<figure>` с помощью {{htmlelement("figcaption")}}, содержащего информацию об авторских правах.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Использование Media API

HTML поставляется c [Media API](/ru/docs/Web/API/HTMLMediaElement) JavaScript, что позволяет разработчикам получить доступ к медиа HTML и управлять ими. Этот API будет использоваться для того, чтобы собственный набор элементов управления, определённый выше, выполнял свои функции. Кроме того, кнопка полноэкранного режима будет использовать [Fullscreen API](/ru/docs/Web/API/Fullscreen_API) — ещё один API W3C, который контролирует возможность веб-браузеров отображать приложения на всём экране компьютера.

### Настройка

Прежде чем работать с отдельными кнопками, требуется выполнить ряд инициализирующих вызовов. Необходимы переменные, указывающие на HTML-элементы:

```js live-sample___video-player
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

С помощью этих ссылок можно «привязать» события к каждой из кнопок собственного набора элементов управления, сделав их интерактивными. Большинству этих кнопок требуется добавить обработчик события `click`, а также метод и/или атрибуты, определенные Media API, которые будут вызываться / проверяться на видео.

Как упоминалось ранее, стандартные элементы управления должны быть отключены, а собственные элементы управления — отображены:

```js live-sample___video-player
// Скрыть стандартные элементы управления
video.controls = false;
// Отобразить собственные элементы управления видео
videoControls.setAttribute("data-state", "visible");
```

### Воспроизведение/Пауза

```js live-sample___video-player
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

При обнаружении события `click` на кнопке воспроизведения/паузы обработчик сначала проверяет, приостановлено ли видео в данный момент или завершилось ли оно (через атрибуты `paused` и `ended` Media API); если да, он использует метод `play()` для воспроизведения видео. В противном случае видео должно воспроизводиться, поэтому оно приостанавливается с помощью метода `pause()`.

### Остановка

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

В Media API нет метода `stop`, поэтому для его имитации видео приостанавливается, а его `currentTime` (т.е. текущая позиция воспроизведения видео) и позиция элемента {{ htmlelement("progress") }} устанавливаются в 0 (подробнее об элементе {{ htmlelement("progress") }} ниже).

### Отключение звука

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Кнопка отключения звука — это переключаемая кнопка, которая использует атрибут `muted` Media API для отключения звука видео: это логическое значение, указывающее: отключён звук видео или нет. Чтобы реализовать переключение, мы устанавливаем его в значение, обратное самому себе.

### Громкость

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Определены две кнопки управления громкостью: одна для увеличения громкости, другая — для уменьшения. Для обработки создана пользовательская функция `alterVolume(direction)`:

```js live-sample___video-player
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

Эта функция использует атрибут `volume` Media API, который хранит текущее значение громкости видео. Допустимые значения для этого атрибута — от 0 до 1 включительно. Функция проверяет параметр `dir`, который указывает: следует увеличить (+) или уменьшить (-) громкость, и действует соответствующим образом. Функция настроена на увеличение или уменьшение атрибута `volume` видео шагами по 0.1, гарантируя, что значение не опустится ниже 0 и не превысит 1.

### Индикатор прогресса

При определении элемента {{ htmlelement("progress") }} в HTML только атрибут `value` был установлен со значением 0. Этот атрибут указывает текущее значение элемента прогресса. Ему также необходимо установить максимальное значение, чтобы он мог правильно отображать свой диапазон, и это можно сделать через атрибут `max`, который нужно установить в максимальное время воспроизведения видео. Это значение получается из атрибута видео `duration`, который также является частью Media API.

В идеале, корректное значение атрибута видео `duration` доступно при возникновении события `loadedmetadata`, которое происходит при загрузке метаданных видео:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

К сожалению, в некоторых мобильных браузерах, когда возникает событие `loadedmetadata` — если оно _вообще_ возникает — `video.duration` может не иметь корректного или даже вообще какого-либо значения. Поэтому нужно сделать что-то ещё. Подробнее об этом ниже.

Другое событие, time`timeupdate`update, возникает периодически во время воспроизведения видео. Это событие идеально подходит для обновления значения индикатора прогресса, устанавливая его в значение атрибута `currentTime` видео, который указывает, насколько далеко продвинулось текущее воспроизведение.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

При каждом возникновении события `timeupdate` атрибут `value` элемента `progress` приближается к значению `currentTime` видео. Фон этого элемента span окрашен в сплошной цвет в CSS, что помогает ему выглядеть как элемент {{ htmlelement("progress") }}.

Возвращаясь к проблеме `video.duration`, упомянутой выше: при возникновении события `timeupdate` в большинстве мобильных браузеров атрибут видео `duration` должен иметь корректное значение. Это можно использовать для установки атрибута `max` элемента `progress`, если он в настоящее время не установлен:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Для получения дополнительной информации и идей об индикаторах прогресса и обратной связи буферизации прочитайте Буферизация медиа, перемотка и диапазоны времени. [Медиа-буферизация, поиск и временные диапазоны](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Перемотка вперёд

Ещё одна функция большинства стандартных наборов элементов управления видео в браузерах — возможность кликнуть по индикатору прогресса видео, чтобы «перемотать вперёд» к другой точке видео. Этого можно добиться, добавив обработчик события `click` к элементу `progress`:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Этот код использует позицию клика, чтобы (приблизительно) определить, где в элементе `progress` пользователь кликнул, и переместить видео в эту позицию, установив его атрибут `currentTime`. Он избегает установки `currentTime`, если продолжительность видео равна {{jsxref("Global_Objects/NaN", "NaN")}} или {{jsxref("Global_Objects/Infinity", "Infinity")}}, что происходит, если видео ещё не загружено.

### Полноэкранный режим

Fullscreen API должен быть прост в использовании: пользователь нажимает кнопку? если видео в полноэкранном режиме — отменить его, иначе — войти в полноэкранный режим.

Кнопка полноэкранного режима скрывается, если Fullscreen API не включён:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Кнопка полноэкранного режима должна что-то делать. Как и для других кнопок, к ней «привязывается» обработчик события `click`, который переключает полноэкранный режим:

```js live-sample___video-player
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // Документ в полноэкранном режиме
    document.exitFullscreen();
  } else {
    // Документ не в полноэкранном режиме
    videoContainer.requestFullscreen();
  }
});
```

Если браузер в полноэкранном режиме — из него нужно выйти, и наоборот. Интересно, что `document` должен использоваться для выхода/отмены полноэкранного режима, тогда как любой HTML-элемент может запросить полноэкранный режим; здесь используется `videoContainer`, так как он также содержит собственные элементы управления, которые также должны отображаться с видео в полноэкранном режиме.

## Результат

CSS-часть скрыта для этого руководства, но вы можете нажать «Play», чтобы увидеть полный исходный код. В следующей части, [Основы стилизации видеоплеера](/ru/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), мы рассмотрим некоторые интересные CSS-техники, использованные здесь, а также добавим новый код CSS, чтобы сделать плеер более привлекательным.

```css hidden live-sample___video-player
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida",
    "Helvetica", "Arial", sans-serif;
}
a {
  color: #0095dd;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2255aa;
  text-decoration: underline;
}
figure {
  max-width: 64rem;
  width: 100%;
  margin: 0;
  padding: 0;
}
figcaption {
  display: block;
  font-size: 1rem;
}
video {
  width: 100%;
}

/* controls */
.controls {
  display: flex;
  gap: 6px;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}
.controls[data-state="hidden"] {
  display: none;
}
.controls li {
  width: max(10%, 3rem);
  margin: 0;
  padding: 0;
}
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
}
.controls button {
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #aaaaaa;
  overflow: hidden;
  border-radius: 2px;
}

/* fullscreen */
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
```

> [!WARNING]
> Видео может быть громким!

{{EmbedLiveSample("video-player", "", 400, "", "", "", "fullscreen")}}

## See also

- {{ htmlelement("video") }} — справочные материалы
- [Видео и аудио контент](/ru/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — дополнительные техники
- [Форматы медиа, поддерживаемые HTML-элементами audio и video](/ru/docs/Web/Media/Guides/Formats)
