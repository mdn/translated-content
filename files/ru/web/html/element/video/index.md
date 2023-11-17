---
title: <video>
slug: Web/HTML/Element/video
---

{{HTMLSidebar}}

Для встраивания видео контента в документ используйте **элемент HTML \<video>**. Видео элемент может содержать один или несколько источников видео. Чтобы указать источник видео, необходимо использовать атрибут **src** или элемент {{HTMLElement("source")}}; браузер сам определит наиболее подходящий источник.

Для просмотра списка поддерживаемых форматов, перейдите по ссылке [Поддерживаемые аудио и видео элементами форматы мультимедийных файлов](/ru/docs/Media_formats_supported_by_the_audio_and_video_elements).

## Контекст Использования

- Допустимое содержимое. Если элемент имеет атрибут [`src`](/ru/docs/Web/HTML/Element/video#src): 0 или более элементов {{HTMLElement("track")}}, за которым следует прозрачный контент, который не содержит элементов мультимедиа: {{HTMLElement("audio")}} или {{HTMLElement("video")}}
  Иначе: 0 или более элементов {{HTMLElement("source")}}, за которыми следует 0 или более элементов {{HTMLElement("track")}}, затем прозрачным содержимым, которое не содержит элементы мультимедиа: {{HTMLElement("audio")}} или {{HTMLElement("video")}}.

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#Flow_content), содержание фраз, встроенный контент. Если имеет атрибут [`controls`](/ru/docs/Web/HTML/Element/video#controls): становится интерактивным элементом с осязаемым содержанием. |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tag omission                                               | {{no_tag_omission}}                                                                                                                                                                                                                            |
| Допустимые родительские элементы                           | Любой элемент, который принимает встроенный контент.                                                                                                                                                                                           |
| DOM интерфейс                                              | {{domxref("HTMLVideoElement")}}                                                                                                                                                                                                                |

## Атрибуты

Как и все HTML-элементы, этот элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- {{htmlattrdef("autoplay")}}
  - : Логический атрибут; если указан, то видео начнёт воспроизводится автоматически, как только это будет возможно сделать без остановки, чтобы закончить загрузку данных.
- {{htmlattrdef("autobuffer")}} {{Non-standard_inline}}
  - : Логический атрибут; если указано, видео автоматически начнёт буферизацию, даже если оно не настроено на автоматический запуск. Используйте этот атрибут только тогда, когда очень вероятно, что пользователь будет смотреть видео. Видео буферизуется до тех пор, пока не заполнится кеш мультимедиа.
    > **Примечание:** несмотря на то, что в ранних версиях HTML5 атрибут `autobuffer` присутствовал, в последующих выпусках он был удалён. Также он был удалён из Gecko 2.0 и других браузеров, а в некоторых никогда не реализовывался. Спецификация определяет новый перечислимый атрибут `preload`, вместо `autobuffer` с другим синтаксисом. {{bug(548523)}}
- {{htmlattrdef("buffered")}}
  - : Атрибут для определения временных диапазонов буферизованных носителей. Этот атрибут содержит объект {{domxref("TimeRanges")}}.
- {{htmlattrdef("controls")}}
  - : Если этот атрибут присутствует, тогда браузер отобразит элементы управления, чтобы позволить пользователю управлять воспроизведением видео, регулировать громкость, осуществлять перемотку, а также ставить на паузу и возобновление воспроизведение.
- {{htmlattrdef("crossorigin")}}
  - : This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](/ru/docs/CORS_Enabled_Image) can be reused in the {{HTMLElement("canvas")}} element without being _tainted_. The allowed values are:
    - anonymous
      - : Sends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.
    - use-credentials
      - : Sends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](/ru/docs/HTML/CORS_settings_attributes) for additional information.
- {{htmlattrdef("height")}}
  - : Высота области отображения видео в пикселях.
- {{htmlattrdef("loop")}}
  - : Логический атрибут; если указан, то по окончанию проигрывания, видео автоматически начнёт воспроизведение с начала.
- {{htmlattrdef("muted")}}
  - : Логический атрибут, который определяет значение по умолчания для аудио дорожки, содержащуюся в видео. Если атрибут указан, то аудио дорожка воспроизводиться не будет. Значение атрибута по умолчанию - "ложь", и это означает, что звук будет воспроизводиться, когда видео воспроизводится.
- {{htmlattrdef("played")}}
  - : Атрибут {{domxref("TimeRanges")}}, указывающий все диапазоны воспроизводимого видео.
- {{htmlattrdef("preload")}}

  - : Этот перечислимый атрибут предназначен для того, чтобы дать подсказку браузеру о том, что, по мнению автора, приведёт к лучшему пользовательскому опыту. Он может иметь одно из следующих значений:
    - `none`: указывает, что видео не должно быть предварительно загружено.
    - `metadata`: указывает, что предварительно загружаются метаданные видео (например, длина).
    - `auto`: указывает, что весь видеофайл может быть загружен, даже если пользователь не должен его использовать.
    - _пустая строка_: синоним значения `auto`.Если не задано, значение атрибута определяется браузером по умолчанию (то есть, каждый браузер имеет по умолчанию значение данного атрибута). Спецификация рекомендует использовать `metadata`.
      > **Примечание:**
      >
      > **Usage notes:**
      >
      > - The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the video for playback.
      > - The specification does not force the browser to follow the value of this attribute; it is a mere hint.

- {{htmlattrdef("poster")}}
  - : URL-адрес, указывающий на постера, которое будет использовано, пока загружается видео или пока пользователь не нажмёт на кнопку воспроизведения. Если этот атрибут не указан, ничего не отображается до тех пор, пока не будет доступен первый кадр; то первый кадр отображается как рамка постера.
- {{htmlattrdef("src")}}
  - : The URL of the video to embed. This is optional; you may instead use the {{HTMLElement("source")}} element within the video block to specify the video to embed.
- {{htmlattrdef("width")}}
  - : Ширина области отображения видео в пикселях.

## События

The `<video>` element can fire many different [events](/ru/docs/Web/Guide/Events/Media_events).

## Примеры

```html
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="videofile.ogg">download it</a>
  and watch it with your favorite video player!
</video>

<!-- Video with subtitles -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English" />
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska" />
</video>
```

The first example plays a video, starting playback as soon as enough of the video has been received to allow playback without pausing to download more. Until the video starts playing, the image "posterimage.jpg" is displayed in its place.

The second example allows the user to choose between different subtitles.

## Multiple Sources Example

```html
<video
  width="480"
  controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm" />
  Your browser doesn't support HTML5 video tag.
</video>
```

You can try the preceding example on [HTML5 video demo example](http://dul.web.id/contoh-example/html/tag-element/html5-video.php) with live preview code editor.

## Server support

If the MIME type for the video is not set correctly on the server, the video may not show or show a gray box containing an X (if JavaScript is enabled).

If you use Apache Web Server to serve Ogg Theora videos, you can fix this problem by adding the video file type extensions to "video/ogg" MIME type. The most common video file type extensions are ".ogm", ".ogv", or ".ogg". To do this, edit the "mime.types" file in "/etc/apache" or use the "AddType" configuration directive in httpd.conf.

```
AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
```

If you serve your videos as WebM, you can fix this problem for the Apache Web Server by adding the extension used by your video files (".webm" is the most common one) to the MIME type "video/webm" via the "mime.types" file in "/etc/apache" or via the "AddType" configuration directive in httpd.conf.

```
AddType video/webm .webm
```

Your web host may provide an easy interface to MIME type configuration changes for new technologies until a global update naturally occurs.

## Интерфейс DOM

Этот элемент реализует интерфейс [`HTMLVideoElement`](/ru/docs/Web/API/HTMLVideoElement).

## Совместимость браузера

{{Compat}}

## Смотрите также

- [Media formats supported by the audio and video elements](/ru/docs/Media_formats_supported_by_the_audio_and_video_elements)
- {{htmlelement("audio")}}
- [Using HTML5 audio and video](/ru/docs/Using_HTML5_audio_and_video)
- [Manipulating video using canvas](/ru/docs/Manipulating_video_using_canvas)
- [`nsIDOMHTMLMediaElement`](/ru/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement)
- [TinyVid](http://tinyvid.tv/) - examples using ogg files in HTML5.
- [The `video` element](http://www.whatwg.org/specs/web-apps/current-work/#video) (HTML5 specification)
- [Configuring servers for Ogg media](/ru/docs/Configuring_servers_for_Ogg_media)
- [The state of HTML5 video](http://www.jwplayer.com/html5/)
