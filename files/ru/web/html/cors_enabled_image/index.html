---
title: Разрешение использования изображений из разных источников и canvas
slug: Web/HTML/CORS_enabled_image
tags:
  - Advanced
  - Canvas
  - HTML
  - Reference
  - Security
translation_of: Web/HTML/CORS_enabled_image
---
<p><span class="seoSummary">HTML предоставляет атрибут {{ htmlattrxref("crossorigin", "img") }} для изображений, которые в сочетании с соответствующим заголовком {{Glossary("CORS")}} позволяют использовать изображения, определённые элементом {{ HTMLElement("img") }}, загруженные из внешних источников, в {{HTMLElement("canvas")}} , как если бы они были загружены из текущего источника. </span></p>

<p>Дополнительные сведения об использовании атрибута <code>crossorigin</code> смотрите в разделе <a href="/ru/docs/Web/HTML/CORS_settings_attributes">атрибуты параметров CORS</a>.</p>

<h2 id="Безопасность_и_испорченные_холсты_canvas">Безопасность и испорченные холсты canvas</h2>

<p>Поскольку пиксели в растровом изображении canvas могут поступать из различных источников, включая изображения или видео, полученные с других хостов, неизбежно могут возникнуть проблемы с безопасностью.</p>

<p>Как только вы рисуете на холсте любые данные, которые были загружены из другого источника без одобрения CORS, холст становится <strong>испорченным</strong>. Испорченный холст - это тот, который больше не считается безопасным, и любые попытки получить данные изображения с холста вызовут исключение.</p>

<p>Если источником внешнего содержимого является элемент HTML {{HTMLElement("img")}} или SVG {{SVGElement("svg")}}, то попытка извлечения содержимого холста не допускается.</p>

<p>Если внешнее содержимое поступает из изображения, полученного либо из {{domxref("HTMLCanvasElement")}}, либо из {{domxref("ImageBitMap")}}, и источник изображения не соответствует тем же правилам происхождения, попытки прочитать содержимое холста блокируются.</p>

<p>Вызов любого из следующих методов на испорченном холсте приведёт к ошибке:</p>

<ul>
 <li>Вызов {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} в контексте canvas</li>
 <li>Вызов {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}} на самом элементе {{HTMLElement("canvas")}}</li>
 <li>Вызов {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} на canvas</li>
</ul>

<p>Попытка обратиться к ним, когда холст испорчен, приведёт к возникновению ошибки безопасности <code>SecurityError</code>. Это защищает пользователей от доступа к личным данным с помощью изображений для извлечения информации с удалённых веб-сайтов без разрешения.</p>

<h2 id="Хранение_изображений_из_внешнего_источника">Хранение изображений из внешнего источника</h2>

<p>В этом примере мы хотим разрешить извлечение изображений из внешнего источника и сохранение их в локальном хранилище. Реализация этого требует настройки сервера, а также написания кода для самого веб-сайта.</p>

<h3 id="Конфигурация_веб-сервера">Конфигурация веб-сервера</h3>

<p>Первое, что нам нужно, - это сервер, настроенный на размещение изображений с заголовком {{HTTPHeader("Access-Control-Allow-Origin")}}, настроенным на разрешение доступа к файлам изображений из разных источников.</p>

<p>Давайте предположим, что мы обслуживаем наш сайт с помощью <a href="https://httpd.apache.org/">Apache</a>. Рассмотрим <a href="https://github.com/h5bp/server-configs-apache/blob/master/src/cross-origin/images.conf">стандартный файл конфигурации сервера Apache HTML5 для образов CORS</a>, показанный ниже:</p>

<pre class="brush: xml">&lt;IfModule mod_setenvif.c&gt;
  &lt;IfModule mod_headers.c&gt;
    &lt;FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$"&gt;
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    &lt;/FilesMatch&gt;
  &lt;/IfModule&gt;
&lt;/IfModule&gt;</pre>

<p>Вкратце, это настраивает сервер на разрешение графических файлов (тех, что с расширениями ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" и ".webp") для получения доступа из любой точки интернета.</p>

<h3 id="Реализация_возможности_сохранения">Реализация возможности сохранения</h3>

<p>Теперь, когда сервер настроен так, чтобы разрешить извлечение изображений из разных источников, мы можем написать код, который позволяет пользователю сохранять их в <a href="/ru/docs/Web/API/Web_Storage_API">локальном хранилище</a>, как если бы они обслуживались из того же домена, на котором выполняется код.</p>

<p>Ключевым моментом является использование атрибута {{htmlattrxref("crossorigin")}} путём установки {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}}  в элементе {{domxref("HTMLImageElement")}} , на который будет загружено изображение. Это даёт браузеру команду на запрос доступа к другому источнику при попытке загрузить данные изображения.</p>

<h4 id="Запуск_загрузки">Запуск загрузки</h4>

<p>Код, который запускает загрузку (скажем, когда пользователь нажимает кнопку "Загрузить"), выглядит следующим образом:</p>

<pre class="brush: js">function startDownload() {
  let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image;
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}</pre>

<p>Здесь мы используем жёстко закодированный URL-адрес (<code>imageURL</code>), но он запросто может поступать откуда угодно. Чтобы начать загрузку изображения, мы создаём новый объект {{domxref("HTMLImageElement")}} с помощью конструктора {{domxref("HTMLImageElement.Image", "Image()")}}. Затем изображение настраивается так, чтобы разрешить загрузку из другого источника. Для этого его атрибут <code>crossOrigin</code> устанавливается на <code>"Anonymous"</code> (то есть разрешение неавторизованной загрузки изображения из перекрёстного источника). Обработчик событий добавляется к событию {{event("load")}}, запускаемому на элементе изображения, что означает, что данные изображения были получены.</p>

<p>Наконец, атрибут {{domxref("HTMLImageElement.src", "src")}} изображения устанавливается в URL-адрес загружаемого изображения; это инициирует начало загрузки.</p>

<h4 id="Получение_и_сохранение_изображения">Получение и сохранение изображения</h4>

<p>Код, обрабатывающий недавно загруженные изображения, находится в методе <code>imageReceived()</code>:</p>

<pre class="brush: js">function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  }
  catch(err) {
    console.log("Error: " + err);
  }
}</pre>

<p><code>imageReceived()</code> вызывается для обработки события <code>"load"</code> в элементе <code>HTMLImageElement</code>, который получает загруженное изображение. Это событие срабатывает, как только все загруженные данные становятся доступными. Он начинается с создания нового элемента {{HTMLElement("canvas")}}, который мы будем использовать для преобразования изображения в URL-адрес данных и получения доступа к контексту 2D-рендеринга холста ({{domxref("CanvasRenderingContext2D")}}) в переменной <code>context</code>.</p>

<p>Размер холста настраивается в соответствии с полученным изображением, затем изображение рисуется на холсте с помощью {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}. Затем холст вставляется в документ, чтобы изображение было видно.</p>

<p>Теперь пришло время действительно сохранить изображение локально. Для этого мы используем механизм локального хранения Web Storage API, доступ к которому осуществляется через {{domxref("Window.localStorage", "localStorage")}} глобально. Метод canvas {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} используется для преобразования изображения в data:// URL, представляющий изображение PNG, которое затем сохраняется в локальном хранилище с помощью {{domxref("Storage.setItem", "setItem()")}}.</p>

<p>Вы можете <a href="https://cors-image-example.glitch.me/">проверить</a> или <a href="https://glitch.com/edit/#!/remix/cors-image-example">переделать</a> этот пример на Glitch.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a class="external" href="http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html">Using Cross-domain images in WebGL and Chrome 13</a></li>
 <li><a class="external" href="http://whatwg.org/html#attr-img-crossorigin">HTML Specification - the <code>crossorigin</code> attribute</a></li>
 <li><a href="ru/docs/Web/API/Web_Storage_API">Веб хранилище (API)</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}</div>
