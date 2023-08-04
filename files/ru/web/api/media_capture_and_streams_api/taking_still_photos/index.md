---
title: Захват кадров с WebRTC
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
---

{{DefaultAPISidebar("Media Capture and Streams")}}

В этой статье объясняется как использовать WebRTC для получения доступа к камере компьютера или мобильного устройства, и захвата кадров с их помощью. [Ознакомьтесь с примером,](https://mdn-samples.mozilla.org/s/webrtc-capturestill) а затем узнайте как это работает.

![Uz WebRTC balstīta attēla uztveršanas lietotne - kreisajā pusē un bez tīmekļa kameras uzņemšanas video straumē un poga](web-rtc-demo.png)

Перейдите непосредственно [к коду на Github](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill) , при желании.

## Разметка HTML

[Наш HTML интерфейс](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill/index.html) состоит из двух секций : панель отображения видео потока, из которого будет производиться захват и панель отображения результата захвата. Каждая панель имеет свой элемент {{HTMLElement ("div")}}, для облегчения стилизации и управления.

Первая панель слева содержит два компонента : элемент {{HTMLElement ("video")}} , который будет получать поток, отводимый с камеры, и элемент {{HTMLElement("button")}}, который будет использоваться пользователем для активации захвата видео кадра.

```
  <div class="camera">
    <video id="video">Video stream not available.</video>
    <button id="startbutton">Take photo</button>
  </div>
```

Все это просто, и мы увидим как они связаны между собой, когда обратимся к коду JavaScript .

В разметке имеется элемент {{HTMLElement("canvas")}} , который сохраняет захваченный кадр, который может быть дополнительно обработан и конвертируется в выходной файл изображения. Элемент`canvas`является скрытым, в его стиле свойство {{cssxref("display")}}`:none`, во избежании поломки интерфейса, где пользователю совершенно не обязательно видеть служебные элементы.

Для отображения пользователю результата захвата кадра, в интерфейсе расположен элемент {{HTMLElement("img")}}.

```
  <canvas id="canvas">
  </canvas>
  <div class="output">
    <img id="photo" alt="The screen capture will appear in this box.">
  </div>
```

Вот и все, что касается HTML. Остальное - просто пух макета страницы и немного текста, предлагающего ссылку на эту страницу.

## Код JavaScript

Посмотрим на [JavaScript code](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill/capture.js). Разобьём его на части, для упрощения объяснения.

### Инициализация

Начнём с обёртки всего скрипта в анонимную функцию, во избежании конфликтов глобальных переменных, затем инициализируем различные нужные переменные.

```
(function() {
  var width = 320;    // Этим создадим ширину фотографии
  var height = 0;    // Это будет вычисляться на основе входящего потока

  var streaming = false;

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
```

Все переменные выше:

- `width`
  - : Какой бы не был размер входящего видео, мы намерены масштабировать результирующее изображение к ширине в 320 px.
- `height`
  - : Результирующая высота изображения будет вычисляться на основе переданной ширины и соотношению сторон потока с камеры.
- `streaming`
  - : Указывает на текущую активность видеопотока.
- `video`
  - : Будет содержать ссылку на элемент {{HTMLElement("video")}} после загрузки страницы.
- `canvas`
  - : Содержит ссылку на элемент {{HTMLElement("canvas")}} после загрузки страницы.
- `photo`
  - : Содержит ссылку на элемент {{HTMLElement("img")}} после загрузки страницы.
- `startbutton`
  - : Содержит ссылку на элемент {{HTMLElement("button")}} после загрузки страницы, используется для старта захвата.

### Функция startup()

Функция `startup()` запускается, когда страница закончила загрузку, благодаря установке {{domxref("window.addEventListener()")}}. Работа функции состоит в том, что бы запросить доступ у пользователя к его камере, инициализировать элемент {{HTMLElement("img")}} в значение по умолчанию, и установить обработчики событий, необходимых для получения каждого видеокадра с камеры, запускать захват изображения, при нажатии на кнопку.

#### Получаем ссылки на элементы

Сначала, получим ссылки на основные элементы, доступ к которым нам необходим.

```
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
```

#### Получаем медиапоток

Следующая задача - получение медиапотока:

```
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });
```

Здесь мы называем метод {{domxref("MediaDevices.getUserMedia()")}} , запрашивая медиапоток без аудиопотока (`audio : false`). Он возвращает промис, на котором мы определяем методы успешного и не успешного выполнений.

Успешное выполнение промиса передаёт объект потока( `stream` ) в качестве параметра функции метода `then()`., который присваивается свойству `srcObject` элемента {{HTMLElement("video")}}, направляя поток в него.

Как только поток связан с элементом `<video>` , запускаем его воспроизведение, вызовом метода [`HTMLMediaElement.play()`](/ru/docs/Web/API/HTMLMediaElement#play).

Метод обработки ошибки промиса вызывается в случае, если получение потока окажется неудачным, к примеру, когда к устройству подключена несовместимая камера, или пользователь запретил к ней доступ.

#### Обработка события начала воспроизведения

После момента вызова метода [`HTMLMediaElement.play()`](/ru/docs/Web/API/HTMLMediaElement#play) на элементе {{HTMLElement("video")}}, возникает промежуток времени до начала воспроизведения видеопотока. Для недопущения блокирования интерфейса пользователя в это промежуток, нужно установить обработчик события {{event("canplay")}} элемента `video` , который сработает, когда элемент начнёт воспроизведение видеопотока. В этот момент все свойства элемента `video` конфигурируются на основе формата потока.

```
    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);
```

Функциональность обработчика не будет запущена, если он запускается повторно. Это отслеживает переменная `streaming` , которая содержит значение `false` при первом запуске обработчика.

Если это действительно первый запуск, мы устанавливаем высоту видео на основе разницы в размере между фактическим размером видео - `video.videoWidth` и шириной, на которую мы собираемся его визуализировать - `width`

Наконец, свойства `width` и `height` элементов `video` и `canvas` устанавливаются так, чтобы соответствовать друг другу, вызывая метод {{domxref("Element.setAttribute()")}} на каждом из двух свойств каждого элемента, и, при необходимости, устанавливая ширину и высоту. Наконец, мы установили для переменной `streaming` значение `true`, чтобы предотвратить случайное повторное выполнение этого установочного кода.

#### Обработка нажатий кнопки

Для захвата кадра, пользователь каждый раз нажимает кнопку `startbutton`, нужно добавить обработчик события кнопки, для его вызова при возникновении события {{event("click")}} :

```
    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);
```

Метод прост, он вызывает функцию `takepicture()`, определяемую ниже в секции [Capturing a frame from the stream](#capturing_a_frame_from_the_stream), затем вызывает метод {{domxref("Event.preventDefault()")}} на полученном объекте события, для предотвращения действия обработки события более одного раза.

#### Завершение метода startup()

Ещё пара строк кода в методе `startup()`:

```
    clearphoto();
  }
```

Вызов метода `clearphoto()` описывается в секции [Clearing the photo box](#clearing_the_photo_box).

### Отчистка бокса для фотографии

Очистка бокса фотографии включает создание изображения, а затем преобразование его в формат, используемый элементом {{HTMLElement ("img")}}, который отображает последний снятый кадр. Код ниже:

```
  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }
```

Начнём с получения ссылки на скрытый элемент {{HTMLElement ("canvas")}}, который мы используем для рендеринга за пределами экрана. Затем мы устанавливаем свойство `fillStyle` в `#AAA` ( светло-серый) и заполняем весь холст этим цветом, вызывая метод {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}.

Наконец, в этой функции мы конвертируем `canvas` в изображение PNG и вызываем метод `{{domxref("Element.setAttribute", "photo.setAttribute()")}}` отображая захваченный цветовой фон в элементе изображения (бокса для фотографии).

### Захват кадра из видеопотока

Последняя функция, требующая определения и являющаяся основным смыслом всего примера - `takepicture()` , которая захватывает текущий видеокадр, конвертирует его в формат PNG, и отображает его в блоке отображения кадра. Код её ниже:

```
  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }
```

Как и в случае, когда нам нужно работать с содержимым `canvas`, мы начинаем с {{domxref("CanvasRenderingContext2D","2D drawing context")}} для скрытого `canvas`.

Затем, если ширина и высота не равны нулю (имеется в виду, что есть, по крайней мере, потенциально допустимые данные изображения), мы устанавливаем ширину и высоту `canvas`, чтобы они соответствовали ширине захваченного кадра, затем вызываем метод {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} , что бы отрисовать текущий кадр видео в контексте `canvas`, заполнив весь холст изображением кадра.

> **Примечание:** Используется факт того, что интерфейс {{domxref("HTMLVideoElement")}} похож на интерфейс {{domxref("HTMLImageElement")}} для любых API , которые принимают `HTMLImageElement` в качестве параметра, с текущим кадром видео, представленным как содержимое изображения.

Как только `canvas` будет содержать захваченное видео, конвертируем его в PNG формат, вызывая метод {{domxref("HTMLCanvasElement.toDataURL()")}} на нем; наконец вызываем метод {{domxref("Element.setAttribute", "photo.setAttribute()")}} отображая захваченное изображение в элементе изображения (бокса фотографии).

Если подходящее изображение не доступно (то есть, `width` и `height` равны 0), отчищаем содержимое элемента изображения, вызывая метод `clearphoto()`.

## Приколы с фильтрами

Поскольку мы снимаем изображения с веб-камеры пользователя, захватывая кадры из элемента {{HTMLElement("video")}} , можно легко применить фильтры и забавные эффекты к элементу video. Оказывается, любые CSS-фильтры, которые вы применяете к элементу с помощью свойства {{cssxref ("filter")}}, влияют на захваченную фотографию.Эти фильтры могут варьироваться от простых (делая изображение черно-белым) до экстремальных (размытие по Гауссу и вращение оттенка).

Вы можете экспериментировать с этими эффектами, используя, например, инструмент разработчика FirefoxYou [редактор стилей](/ru/docs/Tools/Style_Editor); смотрим [Редактирование с CSS фильтрами](/ru/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters) о подробностях выполнения.

## Использование определённых устройств

При необходимости вы можете ограничить набор разрешённых источников видео, определённым устройством или набором устройств. Для этого нужно вызвать метод {{domxref("navigator.mediaDevices.enumerateDevices()")}}. Когда промис разрешиться массивом объектов {{domxref("MediaDeviceInfo")}} , описывающих доступные устройства , выберите те, которым хотите разрешить доступ и укажите соответствующий идентификатор устройства {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} или несколько `deviceId` в объекте {{domxref("MediaTrackConstraints")}} , переданном в {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

## Смотрите также

- [Пробуем пример](https://mdn-samples.mozilla.org/s/webrtc-capturestill)
- [Примеры на Github](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- {{domxref("Navigator.mediaDevices.getUserMedia()")}}
- [Использование изображений](/ru/docs/Web/API/Canvas_API/Tutorial/Using_images)
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
