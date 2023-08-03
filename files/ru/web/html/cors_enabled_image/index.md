---
title: Разрешение использования изображений из разных источников и canvas
slug: Web/HTML/CORS_enabled_image
---

HTML предоставляет атрибут [`crossorigin`](/ru/docs/Web/HTML/Element/img#crossorigin) для изображений, которые в сочетании с соответствующим заголовком {{Glossary("CORS")}} позволяют использовать изображения, определённые элементом {{ HTMLElement("img") }}, загруженные из внешних источников, в {{HTMLElement("canvas")}} , как если бы они были загружены из текущего источника.

Дополнительные сведения об использовании атрибута `crossorigin` смотрите в разделе [атрибуты параметров CORS](/ru/docs/Web/HTML/CORS_settings_attributes).

## Безопасность и испорченные холсты canvas

Поскольку пиксели в растровом изображении canvas могут поступать из различных источников, включая изображения или видео, полученные с других хостов, неизбежно могут возникнуть проблемы с безопасностью.

Как только вы рисуете на холсте любые данные, которые были загружены из другого источника без одобрения CORS, холст становится **испорченным**. Испорченный холст - это тот, который больше не считается безопасным, и любые попытки получить данные изображения с холста вызовут исключение.

Если источником внешнего содержимого является элемент HTML {{HTMLElement("img")}} или SVG {{SVGElement("svg")}}, то попытка извлечения содержимого холста не допускается.

Если внешнее содержимое поступает из изображения, полученного либо из {{domxref("HTMLCanvasElement")}}, либо из {{domxref("ImageBitMap")}}, и источник изображения не соответствует тем же правилам происхождения, попытки прочитать содержимое холста блокируются.

Вызов любого из следующих методов на испорченном холсте приведёт к ошибке:

- Вызов {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} в контексте canvas
- Вызов {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}} на самом элементе {{HTMLElement("canvas")}}
- Вызов {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} на canvas

Попытка обратиться к ним, когда холст испорчен, приведёт к возникновению ошибки безопасности `SecurityError`. Это защищает пользователей от доступа к личным данным с помощью изображений для извлечения информации с удалённых веб-сайтов без разрешения.

## Хранение изображений из внешнего источника

В этом примере мы хотим разрешить извлечение изображений из внешнего источника и сохранение их в локальном хранилище. Реализация этого требует настройки сервера, а также написания кода для самого веб-сайта.

### Конфигурация веб-сервера

Первое, что нам нужно, - это сервер, настроенный на размещение изображений с заголовком {{HTTPHeader("Access-Control-Allow-Origin")}}, настроенным на разрешение доступа к файлам изображений из разных источников.

Давайте предположим, что мы обслуживаем наш сайт с помощью [Apache](https://httpd.apache.org/). Рассмотрим [стандартный файл конфигурации сервера Apache HTML5 для образов CORS](https://github.com/h5bp/server-configs-apache/blob/master/src/cross-origin/images.conf), показанный ниже:

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Вкратце, это настраивает сервер на разрешение графических файлов (тех, что с расширениями ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" и ".webp") для получения доступа из любой точки интернета.

### Реализация возможности сохранения

Теперь, когда сервер настроен так, чтобы разрешить извлечение изображений из разных источников, мы можем написать код, который позволяет пользователю сохранять их в [локальном хранилище](/ru/docs/Web/API/Web_Storage_API), как если бы они обслуживались из того же домена, на котором выполняется код.

Ключевым моментом является использование атрибута [`crossorigin`](/ru/docs/Web/HTML/Global_attributes#crossorigin) путём установки {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} в элементе {{domxref("HTMLImageElement")}} , на который будет загружено изображение. Это даёт браузеру команду на запрос доступа к другому источнику при попытке загрузить данные изображения.

#### Запуск загрузки

Код, который запускает загрузку (скажем, когда пользователь нажимает кнопку "Загрузить"), выглядит следующим образом:

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}
```

Здесь мы используем жёстко закодированный URL-адрес (`imageURL`), но он запросто может поступать откуда угодно. Чтобы начать загрузку изображения, мы создаём новый объект {{domxref("HTMLImageElement")}} с помощью конструктора {{domxref("HTMLImageElement.Image", "Image()")}}. Затем изображение настраивается так, чтобы разрешить загрузку из другого источника. Для этого его атрибут `crossOrigin` устанавливается на `"Anonymous"` (то есть разрешение неавторизованной загрузки изображения из перекрёстного источника). Обработчик событий добавляется к событию {{event("load")}}, запускаемому на элементе изображения, что означает, что данные изображения были получены.

Наконец, атрибут {{domxref("HTMLImageElement.src", "src")}} изображения устанавливается в URL-адрес загружаемого изображения; это инициирует начало загрузки.

#### Получение и сохранение изображения

Код, обрабатывающий недавно загруженные изображения, находится в методе `imageReceived()`:

```js
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log("Error: " + err);
  }
}
```

`imageReceived()` вызывается для обработки события `"load"` в элементе `HTMLImageElement`, который получает загруженное изображение. Это событие срабатывает, как только все загруженные данные становятся доступными. Он начинается с создания нового элемента {{HTMLElement("canvas")}}, который мы будем использовать для преобразования изображения в URL-адрес данных и получения доступа к контексту 2D-рендеринга холста ({{domxref("CanvasRenderingContext2D")}}) в переменной `context`.

Размер холста настраивается в соответствии с полученным изображением, затем изображение рисуется на холсте с помощью {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}. Затем холст вставляется в документ, чтобы изображение было видно.

Теперь пришло время действительно сохранить изображение локально. Для этого мы используем механизм локального хранения Web Storage API, доступ к которому осуществляется через {{domxref("Window.localStorage", "localStorage")}} глобально. Метод canvas {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} используется для преобразования изображения в data:// URL, представляющий изображение PNG, которое затем сохраняется в локальном хранилище с помощью {{domxref("Storage.setItem", "setItem()")}}.

Вы можете [проверить](https://cors-image-example.glitch.me/) или [переделать](https://glitch.com/edit/#!/remix/cors-image-example) этот пример на Glitch.

## Смотрите также

- [Using Cross-domain images in WebGL and Chrome 13](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](http://whatwg.org/html#attr-img-crossorigin)
- [Веб хранилище (API)](/ru/docs/Web/API/Web_Storage_API)

{{QuickLinksWithSubpages("/ru/docs/Web/HTML/")}}
