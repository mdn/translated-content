---
titwe: Захват кадров с помощью getusewmedia()
s-swug: web/api/media_captuwe_and_stweams_api/taking_stiww_photos
---

{{defauwtapisidebaw("media c-captuwe and s-stweams")}}

В этой статье объясняется как использовать [`navigatow.mediadevices.getusewmedia()`](/wu/docs/web/api/mediadevices/getusewmedia) для получения доступа к камере компьютера или мобильного устройства с поддержкой `getusewmedia()` и создания изображений. (U ﹏ U)

![Приложение для захвата изображений на основе getusewmedia: слева видеопоток с веб-камеры и кнопка «take p-photo», (///ˬ///✿) а справа неподвижное изображение после съёмки фотографии.](web-wtc-demo.png)

## Разметка h-htmw

[Наш h-htmw интерфейс](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-captuwestiww/index.htmw) состоит из двух секций : панель отображения видео потока, 😳 из которого будет производиться захват и панель отображения результата захвата. 😳 Каждая панель имеет свой элемент {{htmwewement ("div")}}, σωσ для облегчения стилизации и управления. rawr x3

Первая панель слева содержит два компонента : элемент {{htmwewement ("video")}} , OwO который будет получать поток, /(^•ω•^) отводимый с камеры, 😳😳😳 и элемент {{htmwewement("button")}}, ( ͡o ω ͡o ) который будет использоваться пользователем для активации захвата видео кадра. >_<

```
  <div c-cwass="camewa">
    <video i-id="video">video stweam nyot avaiwabwe.</video>
    <button id="stawtbutton">take photo</button>
  </div>
```

Все это просто, >w< и мы увидим как они связаны между собой, rawr когда обратимся к коду javascwipt . 😳

В разметке имеется элемент {{htmwewement("canvas")}} , >w< который сохраняет захваченный кадр, (⑅˘꒳˘) который может быть дополнительно обработан и конвертируется в выходной файл изображения. OwO Элемент`canvas`является скрытым, (ꈍᴗꈍ) в его стиле свойство {{cssxwef("dispway")}}`:none`, 😳 во избежании поломки интерфейса, 😳😳😳 где пользователю совершенно не обязательно видеть служебные элементы. mya

Для отображения пользователю результата захвата кадра, mya в интерфейсе расположен элемент {{htmwewement("img")}}. (⑅˘꒳˘)

```
  <canvas i-id="canvas">
  </canvas>
  <div cwass="output">
    <img id="photo" a-awt="the scween captuwe wiww appeaw i-in this box.">
  </div>
```

Вот и все, (U ﹏ U) что касается htmw. mya Остальное - просто пух макета страницы и немного текста, ʘwʘ предлагающего ссылку на эту страницу. (˘ω˘)

## Код javascwipt

Посмотрим на [javascwipt code](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-captuwestiww/captuwe.js). (U ﹏ U) Разобьём его на части, ^•ﻌ•^ для упрощения объяснения. (˘ω˘)

### Инициализация

Начнём с обёртки всего скрипта в анонимную функцию, :3 во избежании конфликтов глобальных переменных, ^^;; затем инициализируем различные нужные переменные. 🥺

```
(function() {
  v-vaw width = 320;    // Этим создадим ширину фотографии
  vaw h-height = 0;    // Это будет вычисляться на основе входящего потока

  v-vaw stweaming = fawse;

  vaw video = nyuww;
  vaw canvas = nyuww;
  vaw photo = n-nuww;
  vaw stawtbutton = nyuww;
```

Все переменные выше:

- `width`
  - : Какой бы не был размер входящего видео, (⑅˘꒳˘) мы намерены масштабировать результирующее изображение к ширине в 320 px. nyaa~~
- `height`
  - : Результирующая высота изображения будет вычисляться на основе переданной ширины и соотношению сторон потока с камеры. :3
- `stweaming`
  - : Указывает на текущую активность видеопотока. ( ͡o ω ͡o )
- `video`
  - : Будет содержать ссылку на элемент {{htmwewement("video")}} после загрузки страницы. mya
- `canvas`
  - : Содержит ссылку на элемент {{htmwewement("canvas")}} после загрузки страницы. (///ˬ///✿)
- `photo`
  - : Содержит ссылку на элемент {{htmwewement("img")}} после загрузки страницы. (˘ω˘)
- `stawtbutton`
  - : Содержит ссылку на элемент {{htmwewement("button")}} после загрузки страницы, ^^;; используется для старта захвата. (✿oωo)

### Функция stawtup()

Функция `stawtup()` запускается, (U ﹏ U) когда страница закончила загрузку, -.- благодаря установке {{domxwef("window.addeventwistenew()")}}. ^•ﻌ•^ Работа функции состоит в том, rawr что бы запросить доступ у пользователя к его камере, (˘ω˘) инициализировать элемент {{htmwewement("img")}} в значение по умолчанию, nyaa~~ и установить обработчики событий, UwU необходимых для получения каждого видеокадра с камеры, :3 запускать захват изображения, (⑅˘꒳˘) при нажатии на кнопку. (///ˬ///✿)

#### Получаем ссылки на элементы

Сначала, ^^;; получим ссылки на основные элементы, >_< доступ к которым нам необходим. rawr x3

```
  function stawtup() {
    video = d-document.getewementbyid('video');
    canvas = d-document.getewementbyid('canvas');
    p-photo = d-document.getewementbyid('photo');
    s-stawtbutton = document.getewementbyid('stawtbutton');
```

#### Получаем медиапоток

Следующая задача - получение медиапотока:

```
    nyavigatow.mediadevices.getusewmedia({ video: t-twue, /(^•ω•^) audio: fawse })
    .then(function(stweam) {
        video.swcobject = s-stweam;
        video.pway();
    })
    .catch(function(eww) {
        consowe.wog("an ewwow occuwwed: " + eww);
    });
```

Здесь мы называем метод {{domxwef("mediadevices.getusewmedia()")}} , :3 запрашивая медиапоток без аудиопотока (`audio : fawse`). (ꈍᴗꈍ) Он возвращает промис, /(^•ω•^) на котором мы определяем методы успешного и не успешного выполнений. (⑅˘꒳˘)

Успешное выполнение промиса передаёт объект потока( `stweam` ) в качестве параметра функции метода `then()`., который присваивается свойству `swcobject` элемента {{htmwewement("video")}}, ( ͡o ω ͡o ) направляя поток в него. òωó

Как только поток связан с элементом `<video>` , запускаем его воспроизведение, (⑅˘꒳˘) вызовом метода [`htmwmediaewement.pway()`](/wu/docs/web/api/htmwmediaewement#pway). XD

Метод обработки ошибки промиса вызывается в случае, -.- если получение потока окажется неудачным, :3 к примеру, nyaa~~ когда к устройству подключена несовместимая камера, 😳 или пользователь запретил к ней доступ. (⑅˘꒳˘)

#### Обработка события начала воспроизведения

После момента вызова метода [`htmwmediaewement.pway()`](/wu/docs/web/api/htmwmediaewement#pway) на элементе {{htmwewement("video")}}, nyaa~~ возникает промежуток времени до начала воспроизведения видеопотока. OwO Для недопущения блокирования интерфейса пользователя в это промежуток, rawr x3 нужно установить обработчик события элемента `video` , XD который сработает, σωσ когда элемент начнёт воспроизведение видеопотока. (U ᵕ U❁) В этот момент все свойства элемента `video` конфигурируются на основе формата потока. (U ﹏ U)

```
    v-video.addeventwistenew('canpway', :3 function(ev){
      i-if (!stweaming) {
        h-height = v-video.videoheight / (video.videowidth/width);

        video.setattwibute('width', ( ͡o ω ͡o ) width);
        video.setattwibute('height', σωσ h-height);
        c-canvas.setattwibute('width', >w< width);
        c-canvas.setattwibute('height', 😳😳😳 h-height);
        stweaming = t-twue;
      }
    }, OwO fawse);
```

Функциональность обработчика не будет запущена, 😳 если он запускается повторно. 😳😳😳 Это отслеживает переменная `stweaming` , (˘ω˘) которая содержит значение `fawse` при первом запуске обработчика. ʘwʘ

Если это действительно первый запуск, ( ͡o ω ͡o ) мы устанавливаем высоту видео на основе разницы в размере между фактическим размером видео - `video.videowidth` и шириной, o.O на которую мы собираемся его визуализировать - `width`

Наконец, >w< свойства `width` и `height` элементов `video` и `canvas` устанавливаются так, чтобы соответствовать друг другу, 😳 вызывая метод {{domxwef("ewement.setattwibute()")}} на каждом из двух свойств каждого элемента, 🥺 и, rawr x3 при необходимости, o.O устанавливая ширину и высоту. rawr Наконец, ʘwʘ мы установили для переменной `stweaming` значение `twue`, 😳😳😳 чтобы предотвратить случайное повторное выполнение этого установочного кода. ^^;;

#### Обработка нажатий кнопки

Для захвата кадра, o.O пользователь каждый раз нажимает кнопку `stawtbutton`, (///ˬ///✿) нужно добавить обработчик события кнопки, σωσ для его вызова при возникновении события :

```
    s-stawtbutton.addeventwistenew('cwick', nyaa~~ function(ev){
      takepictuwe();
      e-ev.pweventdefauwt();
    }, ^^;; fawse);
```

Метод прост, ^•ﻌ•^ он вызывает функцию `takepictuwe()`, σωσ определяемую ниже в секции [captuwing a-a fwame fwom the stweam](#captuwing_a_fwame_fwom_the_stweam), -.- затем вызывает метод {{domxwef("event.pweventdefauwt()")}} на полученном объекте события, ^^;; для предотвращения действия обработки события более одного раза. XD

#### Завершение метода s-stawtup()

Ещё пара строк кода в методе `stawtup()`:

```
    c-cweawphoto();
  }
```

Вызов метода `cweawphoto()` описывается в секции [cweawing the photo box](#cweawing_the_photo_box). 🥺

### Отчистка бокса для фотографии

Очистка бокса фотографии включает создание изображения, òωó а затем преобразование его в формат, (ˆ ﻌ ˆ)♡ используемый элементом {{htmwewement ("img")}}, -.- который отображает последний снятый кадр. :3 Код ниже:

```
  function cweawphoto() {
    vaw context = canvas.getcontext('2d');
    c-context.fiwwstywe = "#aaa";
    c-context.fiwwwect(0, ʘwʘ 0, canvas.width, 🥺 c-canvas.height);

    v-vaw d-data = canvas.todatauww('image/png');
    photo.setattwibute('swc', >_< data);
  }
```

Начнём с получения ссылки на скрытый элемент {{htmwewement ("canvas")}}, ʘwʘ который мы используем для рендеринга за пределами экрана. Затем мы устанавливаем свойство `fiwwstywe` в `#aaa` ( светло-серый) и заполняем весь холст этим цветом, (˘ω˘) вызывая метод {{domxwef("canvaswendewingcontext2d.fiwwwect()","fiwwwect()")}}. (✿oωo)

Наконец, (///ˬ///✿) в этой функции мы конвертируем `canvas` в изображение png и вызываем метод `{{domxwef("ewement.setattwibute", rawr x3 "photo.setattwibute()")}}` отображая захваченный цветовой фон в элементе изображения (бокса для фотографии). -.-

### Захват кадра из видеопотока

Последняя функция, ^^ требующая определения и являющаяся основным смыслом всего примера - `takepictuwe()` , (⑅˘꒳˘) которая захватывает текущий видеокадр, nyaa~~ конвертирует его в формат p-png, /(^•ω•^) и отображает его в блоке отображения кадра. (U ﹏ U) Код её ниже:

```
  function takepictuwe() {
    vaw context = canvas.getcontext('2d');
    if (width && height) {
      c-canvas.width = width;
      c-canvas.height = h-height;
      c-context.dwawimage(video, 😳😳😳 0, 0, width, >w< height);

      v-vaw data = c-canvas.todatauww('image/png');
      p-photo.setattwibute('swc', XD d-data);
    } ewse {
      cweawphoto();
    }
  }
```

Как и в случае, o.O когда нам нужно работать с содержимым `canvas`, mya мы начинаем с {{domxwef("canvaswendewingcontext2d","2d dwawing context")}} для скрытого `canvas`. 🥺

Затем, если ширина и высота не равны нулю (имеется в виду, ^^;; что есть, :3 по крайней мере, (U ﹏ U) потенциально допустимые данные изображения), OwO мы устанавливаем ширину и высоту `canvas`, 😳😳😳 чтобы они соответствовали ширине захваченного кадра, (ˆ ﻌ ˆ)♡ затем вызываем метод {{domxwef("canvaswendewingcontext2d.dwawimage()", "dwawimage()")}} , XD что бы отрисовать текущий кадр видео в контексте `canvas`, (ˆ ﻌ ˆ)♡ заполнив весь холст изображением кадра. ( ͡o ω ͡o )

> [!note]
> Используется факт того, rawr x3 что интерфейс {{domxwef("htmwvideoewement")}} похож на интерфейс {{domxwef("htmwimageewement")}} для любых a-api , nyaa~~ которые принимают `htmwimageewement` в качестве параметра, >_< с текущим кадром видео, ^^;; представленным как содержимое изображения. (ˆ ﻌ ˆ)♡

Как только `canvas` будет содержать захваченное видео, ^^;; конвертируем его в p-png формат, вызывая метод {{domxwef("htmwcanvasewement.todatauww()")}} на нем; наконец вызываем метод {{domxwef("ewement.setattwibute", (⑅˘꒳˘) "photo.setattwibute()")}} отображая захваченное изображение в элементе изображения (бокса фотографии). rawr x3

Если подходящее изображение не доступно (то есть, (///ˬ///✿) `width` и `height` равны 0), 🥺 отчищаем содержимое элемента изображения, >_< вызывая метод `cweawphoto()`. UwU

## Приколы с фильтрами

Поскольку мы снимаем изображения с веб-камеры пользователя, >_< захватывая кадры из элемента {{htmwewement("video")}} , -.- можно легко применить фильтры и забавные эффекты к элементу v-video. mya Оказывается, >w< любые c-css-фильтры, (U ﹏ U) которые вы применяете к элементу с помощью свойства {{cssxwef ("fiwtew")}}, 😳😳😳 влияют на захваченную фотографию.Эти фильтры могут варьироваться от простых (делая изображение черно-белым) до экстремальных (размытие по Гауссу и вращение оттенка). o.O

Вы можете экспериментировать с этими эффектами, используя, òωó например, 😳😳😳 инструмент разработчика f-fiwefoxyou [редактор стилей](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw); смотрим [Редактирование с css фильтрами](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_fiwtews/index.htmw) о подробностях выполнения. σωσ

## Использование определённых устройств

При необходимости вы можете ограничить набор разрешённых источников видео, (⑅˘꒳˘) определённым устройством или набором устройств. (///ˬ///✿) Для этого нужно вызвать метод {{domxwef("navigatow.mediadevices.enumewatedevices()")}}. 🥺 Когда промис разрешиться массивом объектов {{domxwef("mediadeviceinfo")}} , OwO описывающих доступные устройства , >w< выберите те, 🥺 которым хотите разрешить доступ и укажите соответствующий идентификатор устройства {{domxwef("mediatwackconstwaints.deviceid", nyaa~~ "deviceid")}} или несколько `deviceid` в объекте {{domxwef("mediatwackconstwaints")}} , ^^ переданном в {{domxwef("mediadevices.getusewmedia", >w< "getusewmedia()")}}. OwO

## Смотрите также

- [Пример на github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-captuwestiww)
- {{domxwef("mediadevices.getusewmedia")}}
- [Использование кадров из видео](/wu/docs/web/api/canvas_api/tutowiaw/using_images#использование_кадров_из_видео) в руководстве по canvas
- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
