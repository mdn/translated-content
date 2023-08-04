---
title: Adding captions and subtitles to HTML5 video
slug: Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
---

> В других статьях мы рассмотрели как [создать cross browser видео плеер](/en-US/Apps/Build/Manipulating_media/cross_browser_video_player) используя {{ domxref("HTMLMediaElement") }} и {{ domxref("Window.fullScreen") }} APIs, а так-же как [стилизовать плеер](/en-US/Apps/Build/Manipulating_media/Video_player_styling_basics). В этой статье мы возьмём тот же плеер и покажем как добавить подписи и субтитры, используя {{ domxref("Web_Video_Text_Tracks_Format","the WebVTT format") }} и {{ htmlelement("track") }} элемент.

## Пример видео с подписями

В этой статье мы сошлёмся на пример плеера с подписями. Этот пример использует отрывок из [Sintel open movie](http://www.sintel.org/), созданного [Blender Foundation](http://www.blender.org/foundation/).

![Video player with stand controls such as play, stop, volume, and captions on and off. The video playing shows a scene of a man holding a spear-like weapon, and a caption reads "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> **Примечание:** вы можете найти [source on Github](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions), а так же [посмотреть пример](http://iandevlin.github.io/mdn/video-player-with-captions/).

## HTML5 и Video Captions

До того как погрузиться в то, как добавить подписи в видео плеер, мы хотели бы упомянуть о некоторых вещах, о которых вы должны знать перед тем как начать.

### Подписи или Субтитры

[Подписи и субтитры не одно и тоже](http://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): они имеют существенные различия для зрителя, и передают различную информацию, мы рекомендуем ознакомится с различиями, если вы не уверены, что они есть. Однако технически они реализуются одинаково, поэтому материал в нашей статье применим к обоим.

В этой статье мы сошлёмся на text tracks, отображаемые как субтистры, т.к их контент направлен на слышащих людей, со сложностью понимания языка в фильме, а не на людей с плохим или отсутствием слуха.

### Элемент \<track>

HTML5 позволяет нам указать субтитры для видео, используя {{ htmlelement("track") }} элемент. Различные атрибуты этого элемента позволяют нам указать такие вещи как тип контента, который мы хотим разместить, язык и конечно ссылку на текстовый файл который содержит информацию о субтитрах.

### WebVTT

Файлы содержащие данные о субтитрах - это простой текстовый файл, который следует специальному формату, такому как [Web Video Text Tracks](/ru/docs/HTML/WebVTT) (WebVTT) формат. [WebVTT specification](http://dev.w3.org/html5/webvtt/) всё ещё работает, по этому основные его части стабильны и мы можем использовать их сегодня.

Поставщики видео контента (такие как [Blender Foundation](http://www.blender.org/foundation/)) предоставляют и подписи и субтитры в текстовом формате с их видео, но они обычно в SubRip Text (SRT) формате. Этот формат может быть легко переконвертирован в WebVTT, используя online конвертер например такой как [srt2vtt](https://atelier.u-sub.net/srt2vtt/).

## Modifications to the HTML and CSS

В этом разделе представлены модификации, сделанные в коде предыдущих статей, для того чтобы облегчить добавление субтитров в видео. Если вам это не интересно и вы просто хотите идти дальше в JavaScript и более соответствующий CSS, пропустите [Subtitle implementation](#subtitle_implementation) раздел.

В этом примере мы используем другое видео, [Sintel](http://www.sintel.org/), так как оно имеет больше речи и следовательно лучше иллюстрирует работу субтитров.

### HTML Markup

Как упоминалось выше, нам необходимо использовать новый HTML5 `<track>` чтобы добавить файл с субтитрами в HTML5 Video. У нас уже имеется субтритры в 3х различных локалях, такие как English, German и Spanish, что ж теперь мы привяжем все 3 соответствующих VTT файла, добавляя `<track>` внутрь нашего HTML5 `<video>` элемента:

```html
<video id="video" controls preload="metadata">
  <source src="video/sintel-short.mp4" type="video/mp4" />
  <source src="video/sintel-short.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="captions/vtt/sintel-en.vtt"
    default />
  <track
    label="Deutsch"
    kind="subtitles"
    srclang="de"
    src="captions/vtt/sintel-de.vtt" />
  <track
    label="Español"
    kind="subtitles"
    srclang="es"
    src="captions/vtt/sintel-es.vtt" />
</video>
```

Как вы можете видеть, каждый `<track>` элемент имеет следующие установленные атрибуты:

- `kind` is given a value of `subtitles`, indicating the type of content the files contain
- `label` is given a value indicating which language that subtitle set is for — for example `English` or `Deutsch` — these labels will appear in the user interface to allow the user to easily select which subtitle language they want to see.
- `src` is assigned a valid URL pointing to the relevant WebVTT subtitle file in each case.
- `srclang` indicates what language each subtitle files' contents are in.
- The `default` attribute is set on the English `<track>` element, indicating to the browser that this is the default subtitle file definition to use when subtitles have been turned on and the user has not made a specific selection.

В дополнении к нашему `<track>` элементу, мы так же добавили новую кнопку контроля меню субтитров. Как следствие, контроллеры видео выглядят следующим образом:

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="volinc" type="button" data-state="volup">Vol+</button>
  <button id="voldec" type="button" data-state="voldown">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
  <button id="subtitles" type="button" data-state="subtitles">CC</button>
</div>
```

### CSS Changes

Видео контроллеры подверглись некоторым изменениям, чтобы сделать пространство для новой кнопки, но эти изменения относительно просты.

В подписи кнопки не использовано никаких изображений, поэтому это просто стилизовано как:

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: #000;
  border-radius: 2px;
}
```

Есть так же и другие CSS изменения, характерные для некоторой дополнительной реализации JavaScript, но об этом будет упомянуто ниже.

## Subtitle implementation

Множество того, что мы делаем для доступа к видео субтитрам, вращается вокруг JavaScript. Аналогично видео контроллерам, если браузер поддерживает HTML5 video субтитры, существует контроллер, входящий в состав встроенного набора управления, чтобы получить доступ к ним. Однако, определив наши собственные элементы управления видео, эта кнопка является скрытой, поэтому мы должны определить свою.

Браузеры различаются в зависимости от того, что они поддерживают, поэтому мы должны попытаться предоставить единый UI, для каждого браузера, где это возможно.

### Initial setup

Как и со всеми другими кнопками, одно из первых вещей, которые мы должны сделать - это получить дескриптор нашей кнопки субтитров:

```js
var subtitles = document.getElementById("subtitles");
```

Мы так же изначально отключаем все субтитры, в случае если браузер включает некоторые из них по умолчанию:

```js
for (var i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

Свойство `video.textTracks` содержит массив всех текстовых треков, присоединённых к видео. Мы проходим по каждому и устанавливаем его `mode` в `hidden`

Примечание: [WebVTT API](http://dev.w3.org/html5/webvtt/#api) даёт нам доступ ко всем текстовым трекам, что определены в HTML5 video, c помощью элемента `<track>`

### Building a caption menu

Наша цель - это использовать кнопку `subtitles` , которую мы добавили ранее, чтобы дать возможность пользователю выбрать тот язык, который он хочет или полностью отключить субтитры.

Мы добавили кнопку, но перед тем как что-то сделать, мы должны создать меню, которое с ней идёт. Это меню создаётся динамически, т.к языки могут быть добавлены или удалены после, простым редактированием элементов `<track>` в разметке видео.

Все что нам необходимо сделать - это пройти через `textTracks`, читая их свойства и строя меню из них:

```js
var subtitlesMenu;
if (video.textTracks) {
  var df = document.createDocumentFragment();
  var subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (var i = 0; i < video.textTracks.length; i++) {
    subtitlesMenu.appendChild(
      createMenuItem(
        "subtitles-" + video.textTracks[i].language,
        video.textTracks[i].language,
        video.textTracks[i].label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

This code creates a {{ domxref("documentFragment") }}, which is used to hold an unordered list containing our subtitles menu. First of all an option is added to allow the user to switch all subtitles off, and then buttons are added for each text track, reading the language and label from each one.

The creation of each list item and button is done by the `createMenuItem()` function, which is defined as follows:

```js
var captionMenuButtons = [];
var createMenuItem = function (id, lang, label) {
  var listItem = document.createElement("li");
  var button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", function (e) {
    // Set all buttons to inactive
    subtitleMenuButtons.map(function (v, i, a) {
      subtitleMenuButtons[i].setAttribute("data-state", "inactive");
    });
    // Find the language to activate
    var lang = this.getAttribute("lang");
    for (var i = 0; i < video.textTracks.length; i++) {
      // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
      if (video.textTracks[i].language == lang) {
        video.textTracks[i].mode = "showing";
        this.setAttribute("data-state", "active");
      } else {
        video.textTracks[i].mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
};
```

This function builds the required {{ htmlelement("li") }} and {{ htmlelement("button") }} elements, and returns them so they can be added to the subtitles menu list. It also sets up the required event listeners on the button to toggle the relevant subtitle set on or off. This is done by simply setting the required subtlte's `mode` attribute to `showing`, and setting the others to `hidden`.

Once the menu is built, it is then inserted into the DOM at the bottom of the videoContainer.

Initially the menu is hidden by default, so an event listener needs to be added to our subtitles button to toggle it:

```js
subtitles.addEventListener("click", function (e) {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display == "block" ? "none" : "block";
  }
});
```

### Subtitle menu CSS

We also added some rudimentary styling for the newly created subtitles menu:

```css
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 14.8%;
  right: 20px;
  background: #666;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Styling the displayed subtitles

One of the less well known about and supported features of WebVTT is the ability to style the individual subtitles (something called text cues) via [CSS Extensions](http://dev.w3.org/html5/webvtt/#css-extensions).

The `::cue` pseudo-element is the key to targetting individual text track cues for styling, as it matches any defined cue. There are only a handful of CSS properties that can be applied to a text cue:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} shorthand properties
- {{ cssxref("outline") }} shorthand properties
- {{ cssxref("font") }} shorthand properties, including {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

For example, to change the text colour of the text track cues you can write:

```css
::cue {
  color: #ccc;
}
```

If the WebVTT file uses [voice spans](http://dev.w3.org/html5/webvtt/#dfn-webvtt-cue-voice-span), which allow cues to be defined as having a particular "voice":

```
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Then this specific 'voice' will be stylable like so:

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> **Примечание:** Some of the styling of cues with ::cue currently works on Chrome, Opera, and Safari, but not yet on Firefox.

## Browser Compatibility

[Browser support for WebVTT and the `<track>` element](http://caniuse.com/webvtt) is fairly good, although some browsers differ slightly in their implementation.

### Internet Explorer

Internet Explorer 10+ subtitles are enabled by default, and the default controls contain a button and a menu that offers the same functionality as the menu we just built. The `default` attribute is also supported.

> **Примечание:** IE will completely ignore WebVTT files unless you define the MIME type. This can easily be done by adding an `.htaccess` file to an appropriate directory that contains `AddType text/vtt .vtt`.

### Safari

Safari 6.1+ has similar support to Internet Explorer 10+, displaying a menu with the different available options, with the addition of an "Auto" option, which allows the browser to choose.

### Chrome and Opera

These browsers have similar implementations again: subtitles are enabled by default and the default control set contains a 'cc' button that turns subtitles on and off. Chrome and Opera ignore the `default` attribute on the `<track>` element and will instead try to match the browser's language to the subtitle's language.

### Firefox

Firefox's implementation was completely broken due to a [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=981280), leading to Mozilla turning off WebVTT support by default (you can turn it on via the `media.webvtt.enabled` flag.) However, ~~this bug looks to have been fixed and WebVTT support re-enabled as of Gecko 31, so this will not be a problem for Firefox final release users for much longer (on Gecko 29 as of the time of this writing)~~ this has been fixed as of Firefox 31, and everything works as it should.

## Plugins

If, after reading through this article you decide that you can't be bothered to do all of this and want someone else to do it for you, there are plenty of plugins out there that offer caption and subtitle support that you can use.

- [playr](http://www.delphiki.com/html5/playr/)
  - : This small plugin implements subtitles, captions, and chapters as well as both WebVTT and SRT file formats.
- [Flowplayer](https://flowplayer.org/player/)
  - : HTML5 player supporting WebVTT.
- [jwplayer](http://www.jwplayer.com/)
  - : This video player is very extensive and does a lot more than simply support video captions. It supports the WebVTT, SRT and DFXP formats.
- [MediaElement.js](http://mediaelementjs.com/)
  - : Another complete video player that also support video captions, albeit only in SRT format.
- [LeanBack Player](http://www.leanbackplayer.com/)
  - : Yet another video player that supports WebVTT captions as well as providing other standard player functionality.
- [SublimeVideo](http://sublimevideo.net)
  - : This player also supports captions through WebVTT and SRT files.
- [Video.js](http://www.videojs.com/)
  - : Supports WebVTT video subtitles.
- [Radiant Media Player](https://www.radiantmediaplayer.com)
  - : Supports multi-languages WebVTT closed captions

> **Примечание:** You can find an excellent list of HTML5 Video Players and their current "state" at [HTML5 Video Player Comparison](http://praegnanz.de/html5video/).
