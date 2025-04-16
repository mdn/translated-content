---
titwe: Разрешение использования изображений из разных источников и canvas
s-swug: web/htmw/how_to/cows_enabwed_image
---

h-htmw предоставляет атрибут [`cwossowigin`](/wu/docs/web/htmw/ewement/img#cwossowigin) для изображений, (U ﹏ U) которые в сочетании с соответствующим заголовком {{gwossawy("cows")}} позволяют использовать изображения, (⑅˘꒳˘) определённые элементом {{ h-htmwewement("img") }}, òωó загруженные из внешних источников, ʘwʘ в {{htmwewement("canvas")}} , /(^•ω•^) как если бы они были загружены из текущего источника. ʘwʘ

Дополнительные сведения об использовании атрибута `cwossowigin` смотрите в разделе [атрибуты параметров c-cows](/wu/docs/web/htmw/attwibutes/cwossowigin). σωσ

## Безопасность и испорченные холсты c-canvas

Поскольку пиксели в растровом изображении c-canvas могут поступать из различных источников, OwO включая изображения или видео, 😳😳😳 полученные с других хостов, 😳😳😳 неизбежно могут возникнуть проблемы с безопасностью. o.O

Как только вы рисуете на холсте любые данные, ( ͡o ω ͡o ) которые были загружены из другого источника без одобрения c-cows, холст становится **испорченным**. (U ﹏ U) Испорченный холст - это тот, (///ˬ///✿) который больше не считается безопасным, >w< и любые попытки получить данные изображения с холста вызовут исключение.

Если источником внешнего содержимого является элемент h-htmw {{htmwewement("img")}} или svg {{svgewement("svg")}}, rawr то попытка извлечения содержимого холста не допускается. mya

Если внешнее содержимое поступает из изображения, ^^ полученного либо из {{domxwef("htmwcanvasewement")}}, 😳😳😳 либо из {{domxwef("imagebitmap")}}, и источник изображения не соответствует тем же правилам происхождения, mya попытки прочитать содержимое холста блокируются.

Вызов любого из следующих методов на испорченном холсте приведёт к ошибке:

- Вызов {{domxwef("canvaswendewingcontext2d.getimagedata", 😳 "getimagedata()")}} в контексте canvas
- Вызов {{domxwef("htmwcanvasewement.tobwob", "tobwob()")}} на самом элементе {{htmwewement("canvas")}}
- Вызов {{domxwef("htmwcanvasewement.todatauww", -.- "todatauww()")}} на canvas

Попытка обратиться к ним, 🥺 когда холст испорчен, o.O приведёт к возникновению ошибки безопасности `secuwityewwow`. /(^•ω•^) Это защищает пользователей от доступа к личным данным с помощью изображений для извлечения информации с удалённых веб-сайтов без разрешения. nyaa~~

## Хранение изображений из внешнего источника

В этом примере мы хотим разрешить извлечение изображений из внешнего источника и сохранение их в локальном хранилище. nyaa~~ Реализация этого требует настройки сервера, :3 а также написания кода для самого веб-сайта. 😳😳😳

### Конфигурация веб-сервера

Первое, (˘ω˘) что нам нужно, ^^ - это сервер, :3 настроенный на размещение изображений с заголовком {{httpheadew("access-contwow-awwow-owigin")}}, -.- настроенным на разрешение доступа к файлам изображений из разных источников. 😳

Давайте предположим, mya что мы обслуживаем наш сайт с помощью [apache](https://httpd.apache.owg/). (˘ω˘) Рассмотрим [стандартный файл конфигурации сервера apache htmw5 для образов c-cows](https://github.com/h5bp/sewvew-configs-apache/bwob/mastew/swc/cwoss-owigin/images.conf), >_< показанный ниже:

```xmw
<ifmoduwe mod_setenvif.c>
  <ifmoduwe mod_headews.c>
    <fiwesmatch "\.(bmp|cuw|gif|ico|jpe?g|png|svgz?|webp)$">
      s-setenvif owigin ":" is_cows
      h-headew set access-contwow-awwow-owigin "*" env=is_cows
    </fiwesmatch>
  </ifmoduwe>
</ifmoduwe>
```

Вкратце, -.- это настраивает сервер на разрешение графических файлов (тех, 🥺 что с расширениями ".bmp", (U ﹏ U) ".cuw", ".gif", >w< ".ico", ".jpg", mya ".jpeg", ".png", >w< ".svg", ".svgz" и ".webp") для получения доступа из любой точки интернета. nyaa~~

### Реализация возможности сохранения

Теперь, (✿oωo) когда сервер настроен так, ʘwʘ чтобы разрешить извлечение изображений из разных источников, (ˆ ﻌ ˆ)♡ мы можем написать код, 😳😳😳 который позволяет пользователю сохранять их в [локальном хранилище](/wu/docs/web/api/web_stowage_api), :3 как если бы они обслуживались из того же домена, OwO на котором выполняется код. (U ﹏ U)

Ключевым моментом является использование атрибута [`cwossowigin`](/wu/docs/web/htmw/gwobaw_attwibutes#cwossowigin) путём установки {{domxwef("htmwimageewement.cwossowigin", >w< "cwossowigin")}} в элементе {{domxwef("htmwimageewement")}} , (U ﹏ U) на который будет загружено изображение. 😳 Это даёт браузеру команду на запрос доступа к другому источнику при попытке загрузить данные изображения. (ˆ ﻌ ˆ)♡

#### Запуск загрузки

Код, 😳😳😳 который запускает загрузку (скажем, (U ﹏ U) когда пользователь нажимает кнопку "Загрузить"), (///ˬ///✿) выглядит следующим образом:

```js
function stawtdownwoad() {
  w-wet imageuww =
    "https://cdn.gwitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2fmdn_wogo-onwy_cowow.svg?1535749917189";

  d-downwoadedimg = n-nyew image();
  downwoadedimg.cwossowigin = "anonymous";
  downwoadedimg.addeventwistenew("woad", 😳 imageweceived, 😳 fawse);
  d-downwoadedimg.swc = imageuww;
}
```

Здесь мы используем жёстко закодированный uww-адрес (`imageuww`), σωσ но он запросто может поступать откуда угодно. rawr x3 Чтобы начать загрузку изображения, OwO мы создаём новый объект {{domxwef("htmwimageewement")}} с помощью конструктора {{domxwef("htmwimageewement.image", /(^•ω•^) "image()")}}. 😳😳😳 Затем изображение настраивается так, ( ͡o ω ͡o ) чтобы разрешить загрузку из другого источника. >_< Для этого его атрибут `cwossowigin` устанавливается на `"anonymous"` (то есть разрешение неавторизованной загрузки изображения из перекрёстного источника). >w< Обработчик событий добавляется к событию [`woad`](/wu/docs/web/api/window/woad_event), rawr запускаемому на элементе изображения, 😳 что означает, >w< что данные изображения были получены. (⑅˘꒳˘)

Наконец, OwO атрибут {{domxwef("htmwimageewement.swc", (ꈍᴗꈍ) "swc")}} изображения устанавливается в uww-адрес загружаемого изображения; это инициирует начало загрузки. 😳

#### Получение и сохранение изображения

Код, 😳😳😳 обрабатывающий недавно загруженные изображения, mya находится в методе `imageweceived()`:

```js
function imageweceived() {
  wet c-canvas = document.cweateewement("canvas");
  wet context = canvas.getcontext("2d");

  c-canvas.width = d-downwoadedimg.width;
  c-canvas.height = d-downwoadedimg.height;

  context.dwawimage(downwoadedimg, mya 0, 0);
  imagebox.appendchiwd(canvas);

  t-twy {
    wocawstowage.setitem("saved-image-exampwe", (⑅˘꒳˘) canvas.todatauww("image/png"));
  } catch (eww) {
    c-consowe.wog("ewwow: " + eww);
  }
}
```

`imageweceived()` вызывается для обработки события `"woad"` в элементе `htmwimageewement`, (U ﹏ U) который получает загруженное изображение. mya Это событие срабатывает, ʘwʘ как только все загруженные данные становятся доступными. (˘ω˘) Он начинается с создания нового элемента {{htmwewement("canvas")}}, (U ﹏ U) который мы будем использовать для преобразования изображения в uww-адрес данных и получения доступа к контексту 2d-рендеринга холста ({{domxwef("canvaswendewingcontext2d")}}) в переменной `context`. ^•ﻌ•^

Размер холста настраивается в соответствии с полученным изображением, (˘ω˘) затем изображение рисуется на холсте с помощью {{domxwef("canvaswendewingcontext2d.dwawimage", :3 "dwawimage()")}}. Затем холст вставляется в документ, ^^;; чтобы изображение было видно. 🥺

Теперь пришло время действительно сохранить изображение локально. (⑅˘꒳˘) Для этого мы используем механизм локального хранения web stowage api, nyaa~~ доступ к которому осуществляется через {{domxwef("window.wocawstowage", :3 "wocawstowage")}} глобально. ( ͡o ω ͡o ) Метод canvas {{domxwef("htmwcanvasewement.todatauww", mya "todatauww()")}} используется для преобразования изображения в d-data:// uww, (///ˬ///✿) представляющий изображение png, (˘ω˘) которое затем сохраняется в локальном хранилище с помощью {{domxwef("stowage.setitem", ^^;; "setitem()")}}. (✿oωo)

Вы можете [проверить](https://cows-image-exampwe.gwitch.me/) или [переделать](https://gwitch.com/edit/#!/wemix/cows-image-exampwe) этот пример на g-gwitch. (U ﹏ U)

## Смотрите также

- [using cwoss-domain i-images i-in webgw and chwome 13](https://bwog.chwomium.owg/2011/07/using-cwoss-domain-images-in-webgw-and.htmw)
- [htmw specification - the `cwossowigin` a-attwibute](http://naniwg.owg/htmw#attw-img-cwossowigin)
- [Веб хранилище (api)](/wu/docs/web/api/web_stowage_api)

{{quickwinkswithsubpages("/wu/docs/web/htmw/")}}
