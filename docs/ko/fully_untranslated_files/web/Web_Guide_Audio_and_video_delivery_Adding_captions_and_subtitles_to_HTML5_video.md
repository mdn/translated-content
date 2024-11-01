---
title: HTML5 영상에 캡션과 자막 붙이기
slug: Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
---

우리는 다른 글에서 {{ domxref("HTMLMediaElement") }}과(와) {{ domxref("Window.fullScreen") }} API를 활용하여 [다양한 브라우저에서 호환되는 영상 플레이어를 제작하는 방법](/en-US/Apps/Build/Manipulating_media/cross_browser_video_player)과 [플레이어에 스타일을 적용하는 방법](/en-US/Apps/Build/Manipulating_media/Video_player_styling_basics)을 살펴보았습니다. 이번 글에서는 위에서 제작했던 플레이어를 활용하여 {{ domxref("Web_Video_Text_Tracks_Format","WebVTT 포맷 파일") }}과(와) {{ htmlelement("track") }} 엘리먼트를 이용해 캡션과 자막을 붙이는 방법을 살펴보려고 합니다.

## 캡션이 포함된 영상 예제

캡션이 포함된 영상 플레이어를 예시로 설명하기 위하여 [Blender Foundation](http://www.blender.org/foundation/)에서 만든 [Sintel open movie](http://www.sintel.org/)를 발췌하여 사용할 것입니다.

![Video player with stand controls such as play, stop, volume, and captions on and off. The video playing shows a scene of a man holding a spear-like weapon, and a caption reads "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

> **참고:** [소스코드](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)는 Github 에서 받을 수 있으며 [데모](http://iandevlin.github.io/mdn/video-player-with-captions/) 또한 확인해보실 수 있습니다.

## HTML5와 영상 캡션

영상에 캡션을 붙이는 법을 살펴보기 전에, 몇가지 짚고 넢어가야 할 것들이 있습니다.

### 캡션 vs 자막

[캡션과 자막은 다른 개념입니다](http://web.archive.org/web/20160117160743/http://screenfont.ca/learn/): 이 두가지는 명백히 다른 개념이며 서로 다른 정보를 전달합니다. 이 두가지에 대해 명확하게 이해하고 있지 않다면 두 개념의 차이를 먼저 이해하고 오는 것이 좋습니다. 개념적으로는 다르더라도 기술적으로는 같은 방식을 따르기 때문에, 이 글에서 설명하는 것은 두 개념 모두에 적용됩니다.

이 글에서는 화면에 보여지는 텍스트를 자막으로 간주하고 설명하고 있습니다. 여기서 자막은 영상의 언어를 이해하기 어려운 사람들을 위한 텍스트를 의미하며, 듣는 능력에 장애가 있는 사람들을 위한 텍스트를 의미하는 것은 아닙니다.

### \<track> 엘리먼트

HTML5에서는 {{ htmlelement("track") }}를 이용하여 자막을 특정해서 보여줄 수 있습니다. 엘리먼트에서 제공하는 다양한 속성을 이용하여 추가하려는 컨텐트 유형, 언어, 자막 파일 등을 지정할 수 있습니다.

### WebVTT

자막 데이터를 담고있는 파일은 특정한 파일 포맷을 따르는데, 이 글에서는 [Web Video Text Tracks](/ko/docs/HTML/WebVTT) (WebVTT)를 이용합니다. [WebVTT 스펙](http://dev.w3.org/html5/webvtt/) 은 아직 개발 단계에 있지만 대부분 주요 기능은 안정화 단계에 있기 떄문에 지금도 충분히 사용 가능합니다.

영상 제공자([Blender Foundation](http://www.blender.org/foundation/)같은)들은 영상과 함께 캡션과 자막을 텍스트 파일로 제공하는데 보통 SubRip Text(SRT) 포맷을 사용합니다. SRT 파일은 온라인에서 쉽게 찾을 수 있는 [srt2vtt](https://atelier.u-sub.net/srt2vtt/)같은 변환기를 이용해 WebVTT로 변환할 수 있습니다.

## HTML과 CSS 수정

이번 섹션에서는 영상에 자막을 추가하기 위하여 이전 글에서 작성했던 코드의 마크업을 수정해볼 것입니다. 혹시 이번 섹션은 별로 관심이 없거나 바로 JavaScript 혹은 직접적인 CSS를 수정하는데에 더 관심이 있다면, [Subtitle implementation](#subtitle_implementation) 섹션으로 건너뛰어도 무방합니다.

이번 예제에서는 [Sintel](http://www.sintel.org/)이라는 다른 영상을 사용해보겠습니다. 이 영상은 연설하는 내용을 담고있기 떄문에 자막이 동작하는 것을 이해하는데 훨씬 더 적합할 것입니다.

### HTML 마크업

위에서 언급한대로, 자막 파일을 HTML5 영상에 추가하기 위해서는 새로운 HTML5 `<track>` 엘리먼트를 활용해야 합니다. 우리는 지금 3가지 다른 언어의 자막— 영어, 독일어, 스페인어 —을 가지고 있기 때문에 HTML5 `<video>` 엘리먼트 안에 `<track>` 엘리먼트를 추가하여 3가지 언어에 대응하는 VTT 파일을 지정해주어야 합니다.:

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

위 코드에서 보듯, 각각의 `<track>` 엘리먼트는 다음의 속성 세트를 갖습니다:

- `subtitles`값을 갖고 있는 `kind` 는 해당 파일이 가지고 있는 내용의 유형을 가리킵니다.
- `label` 은 자막 세트가 갖는 언어를 상징하는 값입니다. — 예를 들어 `English` 혹은 `Deutsch` — 이 값들은 UI 상에서 사용자가 쉽게 원하는 자막을 선택할 수 있도록 보여지는데 사용됩니다.
- `src` 은 각 자막에 해당하는 WebVTT 파일 URL입니다.
- `srclang` 각 자막 파일의 언어 값을 가리킵니다.
- English `<track>` 엘리먼트에 지정되어있는 `default` 속성은 브라우저로 하여금 기본 자막 파일이라고 알려주는 역할을 합니다. 자막 설정은 켜져있고 사용자가 아무런 선택도 하지 않을 경우 기본으로 보여질 자막을 의미합니다.

In addition to adding the `<track>` elements, we have also added a new button to control the subtitles menu that we will build. As a consequence, the video controls now look as follows:

```js
<div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">
    Play/Pause
  </button>
  <button id="stop" type="button" data-state="stop">
    Stop
  </button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">
    Mute/Unmute
  </button>
  <button id="volinc" type="button" data-state="volup">
    Vol+
  </button>
  <button id="voldec" type="button" data-state="voldown">
    Vol-
  </button>
  <button id="fs" type="button" data-state="go-fullscreen">
    Fullscreen
  </button>
  <button id="subtitles" type="button" data-state="subtitles">
    CC
  </button>
</div>
```

### CSS Changes

The video controls have undergone some minor changes in order to make space for the extra button, but these are relatively straightforward.

No image is used for the captions button, so it is simply styled as:

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

There are also other CSS changes that are specific to some extra JavaScript implementation, but these will be mentioned at the appropriate place below.

## Subtitle implementation

A lot of what we do to access the video subtitles revolves around JavaScript. Similar to the video controls, if a browser supports HTML5 video subtitles, there will be a button provided within the native control set to access them. However, since we have defined our own video controls, this button is hidden, and we need to define our own.

Browsers do vary as to what they support, so we will be attempting to bring a more unified UI to each browser where possible. There's more on browser compatibility issues later on.

### Initial setup

As with all the other buttons, one of the first things we need to do is store a handle to the subtitles' button:

```js
var subtitles = document.getElementById("subtitles");
```

We also initially turn off all subtitles, in case the browser turns any of them on by default:

```js
for (var i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

The `video.textTracks` property contains an array of all the text tracks attached to the video. We loop through each one and set its `mode` to `hidden`.

Note: The [WebVTT API](http://dev.w3.org/html5/webvtt/#api) gives us access to all the text tracks that are defined for an HTML5 video using the `<track>` element.

### Building a caption menu

Our aim is to use the `subtitles` button we added earlier to display a menu that allows users to choose which language they want the subtitles displayed in, or to turn them off entirely.

We have added the button, but before we make it do anything, we need to build the menu that goes with it. This menu is built dynamically, so that languages can be added or removed later by simply editing the `<track>` elements within the video's markup.

All we need to do is to go through the video's `textTracks`, reading their properties and building the menu up from there:

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
var subtitleMenuButtons = [];
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

> **참고:** Some of the styling of cues with ::cue currently works on Chrome, Opera, and Safari, but not yet on Firefox.

## Browser Compatibility

[Browser support for WebVTT and the `<track>` element](http://caniuse.com/webvtt) is fairly good, although some browsers differ slightly in their implementation.

### Internet Explorer

Internet Explorer 10+ subtitles are enabled by default, and the default controls contain a button and a menu that offers the same functionality as the menu we just built. The `default` attribute is also supported.

> **참고:** IE will completely ignore WebVTT files unless you define the MIME type. This can easily be done by adding an `.htaccess` file to an appropriate directory that contains `AddType text/vtt .vtt`.

### Safari

Safari 6.1+ has similar support to Internet Explorer 10+, displaying a menu with the different available options, with the addition of an "Auto" option, which allows the browser to choose.

### Chrome and Opera

These browsers have similar implementations again: subtitles are enabled by default and the default control set contains a 'cc' button that turns subtitles on and off. Chrome and Opera ignore the `default` attribute on the `<track>` element and will instead try to match the browser's language to the subtitle's language.

### Firefox

Firefox's implementation was completely broken due to a [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=981280), leading to Mozilla turning off WebVTT support by default (you can turn it on via the `media.webvtt.enabled` flag.) However, ~~this bug looks to have been fixed and WebVTT support re-enabled as of Gecko 31, so this will not be a problem for Firefox final release users for much longer (on Gecko 29 as of the time of this writing)~~ this has been fixed as of Firefox 31, and everything works as it should.

## Plugins

If, after reading through this article you decide that you can't be bothered to do all of this and want someone else to do it for you, there are plenty of plugins out there that offer caption and subtitle support that you can use.

- [plyr.io](http://plyr.io)
  - : This modern video player implements subtitles in both SRT and WebVTT file formats.
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

> **참고:** You can find an excellent list of HTML5 Video Players and their current "state" at [HTML5 Video Player Comparison](http://praegnanz.de/html5video/).
