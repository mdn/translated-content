---
title: Использование интерфейса записи медиапотока
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
---

{{DefaultAPISidebar("MediaStream Recording")}}

Интерфейс [MediaStream Recording](/ru/docs/Web/API/MediaStream_Recording_API) позволяет записывать аудио и видео потоки. При использовании с методом {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}, предлагает простой способ записи данных с устройств пользователя, и немедленное их использование в веб приложениях.И аудио и видео могут быть записаны вместе или по отдельности.Цель данной статьи - предоставить базовое руководство о том как использовать объект `MediaRecorder`, реализующий такой программный интерфейс.

## Пример приложения: Веб диктофон

![An image of the Web dictaphone sample app - a sine wave sound visualization, then record and stop buttons, then an audio jukebox of recorded tracks that can be played back.](web-dictaphone.png)

Для демонстрации основной функциональности интерфейса `MediaRecorder API`, мы создали веб диктофон, позволяющий записывать отрывки аудио и проигрывать их после записи. Он визуализирует устройства ввода звука, используя интерфейс `Web Audio API`. В этой статье будем концентрироваться на функциональности записи и воспроизведения.

Посмотрите получившуюся [работающую демонстрацию](https://mdn.github.io/web-dictaphone/), или [скачайте исходники](https://github.com/mdn/web-dictaphone) на GitHub.

## CSS плюшки

Разметка HTML довольно проста, поэтому не будем её рассматривать подробно, но есть более интересные места в CSS, которые стоило бы отметить, и о которых поговорим ниже. Если вам не интересна тема CSS , и хотите сразу приступить к JavaScript, то перейдите к части основных настроек приложения [Basic app setup](#basic_app_setup).

### Сохраняйте интерфейс ограниченным областью просмотра, независимо от высоты устройства, с функцией calc()

Функция {{cssxref("calc")}} одна из полезных утилит возникших в CSS, которая не выглядеть чем-то выдающимся, но вскоре заставит вас думать о том, почему вы не использовали её раньше?; и почему CSS2 макет такой неуклюжий? Она позволяет выполнять вычисления для определения значений из различных CSS единиц измерений, смешивая их в процессе вычисления.

К примеру, в приложении веб диктофона мы создали три области интерфейса, расположенные вертикально. Первые две имеют фиксированную высоту (заголовок и элементы управления):

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Третья область (содержащая записываемые образцы, которые можно воспроизвести) должна занимать оставшуюся от первых двух область, независимо от высоты устройства пользователя. Задача может быть решена, установкой высоты третьей области равной 100% родительской высоты, минус высоты и отступы первых двух.

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.1);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

> **Примечание:** Функция `calc()` имеет хорошую поддержку среди современных браузеров, даже в устаревшем Internet Explorer 9.

### Хак чекбокса для отображение/скрытия

Он уже хорошо документирован, но думаем его можно упомянуть, заключающийся в том, что можно кликнуть на элемент {{htmlelement("label")}} , содержащий элемент чекбокса для переключения самого чекбокса. В нашем приложении веб диктофона он управляет отображением блока информации о приложении, при нажатии на иконку знака вопроса в правом верхнем углу. Сначала мы стилизуем элемент `<label>` , тем, что мы хотим, убеждаясь в том, что он имеет достаточно высокий `z-index` , всегда находящийся выше других элементов :

```css
label {
  font-family: "NotoColorEmoji";
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

Затем скрываем настоящий чекбокс, избегая неразберихи в интерфейсе :

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Затем стилизуем блок информации (обёрнутый в элемент {{htmlelement("aside")}}) по вкусу, давая ему фиксированную позицию, так что бы он не показывался в потоке разметки и влиял на основной интерфейс, трансформируем его позицию функцией трансформации, определяя его место по умолчанию, и меняем значение функции трансформации для плавного его отображения/скрытия:

```css
aside {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 1px 1px 1px black;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: 0.6s all;
  background-color: #999;
  background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
}
```

Наконец определяем правило при нажатии чекбокса . Когда он выбран (когда нажат элемент `label`) соседний элемент `<aside>` получит значение горизонтального перехода и переместится в представление:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Основные настройки приложения

Для получения медиапотока, который нужно захватить используется метод `getUserMedia()`. Затем используется интерфейс `MediaRecorder`, для записи потока и вывода каждого отрывка записи в атрибут элемента {{htmlelement("audio")}} для воспроизведения.

Объявим некоторые переменные для кнопок начала записи и остановки, а так же элемент {{htmlelement("article")}} , который будет содержать аудио плееры:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Наконец, для этого раздела создадим базовую структуру `getUserMedia` :

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // Установим ограничение на получение только аудио потока
      {
        audio: true,
      },
    )
    // Функция успешного получения потока
    .then(function (stream) {})
    // Функция ошибок
    .catch(function (err) {
      console.log("The following getUserMedia error occured: " + err);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}
```

Все обёрнуто в условный тест, проверяющий поддержку `getUserMedia` до запуска чего нибудь. Затем вызываем `getUserMedia()` и внутри определяем:

- **Ограничения** : Приложению нужен только аудиопоток .
- **Функция успешного вызова**: Запускается при успешном получении потока функцией `getUserMedia` .
- **Функция обработки ошибок**: Если функция `getUserMedia` по какой либо причине завершиться с ошибкой.

> **Примечание:** Весь код ниже помещается внутрь функции успешного вызова `getUserMedia.`

## Захват медиа потока

Как только функция `getUserMedia` успешно получила медиапоток, создаём новый объект типа Media Recorder конструктором `MediaRecorder()` и передаём ему поток, полученный функцией. Это точка входа использования интерфейса MediaRecorder — теперь поток готов для захвата и упаковки в объект {{domxref("Blob")}}, в формате по умолчанию, установленного для браузера.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Существуют несколько методов объекта {{domxref("MediaRecorder")}} , позволяющие контролировать запись медиапотока; в приложении веб диктофон используется два и прослушиваем некоторые события. Прежде всего используем метод {{domxref("MediaRecorder.start()")}} , для запуска записи потока, после нажатия кнопки старта:

```js
record.onclick = function () {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Когда объект `MediaRecorder` приступает к записи его свойство {{domxref("MediaRecorder.state")}} получает значение "`recording`".

По мере записи, нам нужно получать аудио данные. Для этого регистрируем обработчик события {{domxref("mediaRecorder.ondataavailable")}}:

```js
let chunks = [];

mediaRecorder.ondataavailable = function (e) {
  chunks.push(e.data);
};
```

> **Примечание:** Браузер будет запускать события `dataavailable` по необходимости (когда внутренний буфер объекта будет переполняться), но если разработчику нужно вмешаться, в вызов метода `start()` можно включить параметр `timeslice`, определяющий диапазон захвата в миллисекундах — к примеру, `start(10000)`, или вызывать функцию запроса данных {{domxref("MediaRecorder.requestData()")}}, запуская событие по необходимости.

Наконец используем метод {{domxref("MediaRecorder.stop()")}} при нажатии кнопки остановки записи и завершения упаковки объекта {{domxref("Blob")}} для его использования в приложении.

```js
stop.onclick = function () {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Обратите внимание, что запись потока может остановиться естественно, если медиапоток кончился(к примеру, если захватывается музыкальный трек и он кончился, или пользователь отключил использование микрофона, чей поток захватывается).

## Получение и использования объекта blob

Когда запись останавливается, свойство `state` получает значение "`inactive`", и запускается событие `stop`. Мы устанавливаем обработчик этого события, используя свойство {{domxref("mediaRecorder.onstop")}}, завершая запись всех полученных порций объекта `blob` на момент остановки:

```js
mediaRecorder.onstop = function (e) {
  console.log("recorder stopped");

  const clipName = prompt("Enter a name for your sound clip");

  const clipContainer = document.createElement("article");
  const clipLabel = document.createElement("p");
  const audio = document.createElement("audio");
  const deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.innerHTML = "Delete";
  clipLabel.innerHTML = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = function (e) {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  };
};
```

Пройдём весь код выше и посмотрим, что он делает.

Сначала отображаем пользователю диалог с запросом имени будущей записи.

Затем создаём структуру HTML , вставляя её в контейнер, представляющийся элементом {{htmlelement("article")}} .

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

После этого создаём объект {{domxref("Blob")}} с комбинацией наших записанных частей аудио и создаём объект URL ссылающийся на него, используя метод `window.URL.createObjectURL(blob)`. Затем устанавливаем значение атрибута [`src`](/ru/docs/Web/HTML/Element/audio#src) элемента {{HTMLElement("audio")}} в созданный объект URL, так, что бы при нажатии на кнопку воспроизведения объект `Blob` передал свои данные элементу.

Наконец, устанавливаем обработчик события `onclick` на кнопке удаления, для удаления всей структуры HTML проигрывания результата записи (элемент clip).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Страница [MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API)
- `{{domxref("Navigator.getUserMedia()")}}`
- Интерфейс [MediaRecorder теперь поддерживают 65% веб-сайтов](https://addpipe.com/blog/media-recorder-api-is-now-supported-by-65-of-all-desktop-internet-users/)
