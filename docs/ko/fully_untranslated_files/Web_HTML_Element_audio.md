---
title: <audio>
slug: Web/HTML/Element/audio
---

{{HTMLSidebar}}

**HTML `<audio>` 요소**는 문서에 소리 콘텐츠를 포함할 때 사용합니다. `src` 특성 또는 {{htmlelement("source")}} 요소를 사용해 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고릅니다. {{domxref("MediaStream")}}을 사용하면 미디어 스트림을 바라볼 수도 있습니다.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("autoplay")}}

  - : 지정한 경우, 전체 오디오 파일의 다운로드를 기다리지 않고 가능한 빠른 시점에 재생을 시작합니다.

    > **참고:** 오디오 및 오디오를 가진 비디오를 자동으로 재생하는 사이트는 사용자 경험에 악영향을 끼칠 수 있으므로 피해야 합니다. 반드시 자동 재생을 제공해야 한다면 사용자의 명시적인 동의를 얻어야 하도록 해야 합니다. 그러나, 미디어 소스가 사용자의 선택에 의해 나중에 정해지는 경우라면 자동 재생이 유용할 수 있습니다. [자동 재생 안내서](/ko/docs/Web/Media/Autoplay_guide)를 방문하고 추가 정보와 적절한 사용법을 알아보세요.

- {{htmlattrdef("controls")}}
  - : 지정한 경우 오디오 재생, 볼륨, 탐색, 일시 정지 컨트롤을 브라우저에서 제공합니다.
- {{htmlattrdef("crossorigin")}}

  - : CORS를 사용해 지정한 오디오 파일을 가져올지 나타내는 열거형 특성. [교차 출처 활성화 리소스](/ko/docs/Web/HTML/CORS_enabled_image)는 {{HTMLElement("canvas")}} 요소에 사용해도 캔버스를 "오염"시키지 않습니다. 가능한 값은 다음과 같습니다.

    - `anonymous`
      - : 자격 증명 없이 교차 출처 요청을 전송합니다. 즉, `Origin:` HTTP 헤더를 쿠키, X.509 인증서, HTTP Basic 인증 없이 전송합니다. 서버에서 `Access-Control-Allow-Origin:` HTTP 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.
    - `use-credentials`
      - : 자격 증명과 함께 교차 출처 요청을 전송합니다. 즉, `Origin:` HTTP 헤더를 쿠키, X 509 인증서, 또는 HTTP Basic 이증과 함께 전송합니다. 서버에서 `Access-Control-Allow-Origin:` HTTP 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.

    특성이 존재하지 않으면 리소스를 CORS 요청 없이(`Origin:` HTTP 헤더 없이) 가져오므로, {{htmlelement("canvas")}}를 오염시키게 됩니다. 유효하지 않은 값의 경우 anonymous 키워드를 사용한 것으로 간주합니다.

- {{htmlattrdef("currentTime")}}

  - : Reading `currentTime` returns a double-precision floating-point value indicating the current playback position, in seconds, of the audio. If the audio's metadata isn't available yet—thereby preventing you from knowing the media's start time or duration—`currentTime` instead indicates, and can be used to change, the time at which playback will begin. Otherwise, setting `currentTime` sets the current playback position to the given time and seeks the media to that position if the media is currently loaded.

    If the audio is being streamed, it's possible that the {{Glossary("user agent")}} may not be able to obtain some parts of the resource if that data has expired from the media buffer. Other audio may have a media timeline that doesn't start at 0 seconds, so setting `currentTime` to a time before that would fail. For example, if the audio's media timeline starts at 12 hours, setting `currentTime` to 3600 would be an attempt to set the current playback position well before the beginning of the media, and would fail. The {{domxref("HTMLMediaElement.getStartDate", "getStartDate()")}} method can be used to determine the beginning point of the media timeline's reference frame.

- {{htmlattrdef("disableRemotePlayback")}} {{experimental_inline}}

  - : A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). See [this proposed specification](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) for more information.

    > **참고:** In Safari, you can use [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) as a fallback.

- {{htmlattrdef("duration")}} {{ReadOnlyInline}}
  - : A double-precision floating-point value which indicates the duration (total length) of the audio in seconds, on the media's timeline. If no media is present on the element, or the media is not valid, the returned value is `NaN`. If the media has no known end (such as for live streams of unknown duration, web radio, media incoming from [WebRTC](/ko/docs/Web/API/WebRTC_API), and so forth), this value is `+Infinity`.
- {{htmlattrdef("loop")}}
  - : A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.
- {{htmlattrdef("muted")}}
  - : A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.
- {{htmlattrdef("preload")}}

  - : This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:

    - `none`: Indicates that the audio should not be preloaded.
    - `metadata`: Indicates that only audio metadata (e.g. length) is fetched.
    - `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
    - _empty string_: A synonym of the `auto` value.

    The default value is different for each browser. The spec advises it to be set to `metadata`.

    > **참고:** **Usage notes:**- The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.
    >
    > - The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.

- {{htmlattrdef("src")}}
  - : The URL of the audio to embed. This is subject to [HTTP access controls](/ko/docs/HTTP_access_control). This is optional; you may instead use the {{htmlelement("source")}} element within the audio block to specify the audio to embed.

Time offsets are specified as float values indicating the number of seconds to offset.

> **참고:** The time offset value definition has not yet been completed in the HTML5 specification and is subject to change.

## 이벤트

| 이벤트 이름                                                            | 발생 조건                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{Event("audioprocess")}}                                              | The input buffer of a {{DOMxRef("ScriptProcessorNode")}} is ready to be processed.                                                                                                                                                   |
| {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}               | The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.                                                          |
| {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} | The browser estimates it can play the media up to its end without stopping for content buffering.                                                                                                                                    |
| {{Event("complete")}}                                                  | The rendering of an {{DOMxRef("OfflineAudioContext")}} is terminated.                                                                                                                                                                |
| {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} | The `duration` attribute has been updated.                                                                                                                                                                                           |
| {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}               | The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the [`load()`](/ko/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement) method is called to reload it. |
| {{domxref("HTMLMediaElement.ended_event", 'ended')}}                   | Playback has stopped because the end of the media was reached.                                                                                                                                                                       |
| {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}         | The first frame of the media has finished loading.                                                                                                                                                                                   |
| {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} | The metadata has been loaded.                                                                                                                                                                                                        |
| {{domxref("HTMLMediaElement.pause_event", 'pause')}}                   | Playback has been paused.                                                                                                                                                                                                            |
| {{domxref("HTMLMediaElement.play_event", 'play')}}                     | Playback has begun.                                                                                                                                                                                                                  |
| {{domxref("HTMLMediaElement.playing_event", 'playing ')}}              | Playback is ready to start after having been paused or delayed due to lack of data.                                                                                                                                                  |
| {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}         | The playback rate has changed.                                                                                                                                                                                                       |
| {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}                 | A _seek_ operation completed.                                                                                                                                                                                                        |
| {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}               | A _seek_ operation began.                                                                                                                                                                                                            |
| {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}               | The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.                                                                                                                                              |
| {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}               | Media data loading has been suspended.                                                                                                                                                                                               |
| {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}         | The time indicated by the `currentTime` attribute has been updated.                                                                                                                                                                  |
| {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}     | The volume has changed.                                                                                                                                                                                                              |
| {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}               | Playback has stopped because of a temporary lack of data                                                                                                                                                                             |

## 사용 일람

Browsers don't all support the same [file types](/ko/docs/Web/Media/Formats/Containers) and [audio codecs](/ko/docs/Web/Media/Formats/Audio_codecs); you can provide multiple sources inside nested {{htmlelement("source")}} elements, and the browser will then use the first one it understands:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to the audio</a> instead.
  </p>
</audio>
```

We offer a substantive and thorough [guide to media file types](/ko/docs/Web/Media/Formats) and the [audio codecs that can be used within them](/ko/docs/Web/Media/Formats/Audio_codecs). Also available is [a guide to the codecs supported for video](/ko/docs/Web/Media/Formats/Video_codecs).

Other usage notes:

- If you don't specify the `controls` attribute, the audio player won't include the browser's default controls. You can, however, create your own custom controls using JavaScript and the {{domxref("HTMLMediaElement")}} API.
- To allow precise control over your audio content, `HTMLMediaElement`s fire many different [events](/ko/docs/Web/Guide/Events/Media_events). This also provides a way to monitor the audio's fetching process so you can watch for errors or detect when enough is available to begin to play or manipulate it.
- You can also use the [Web Audio API](/ko/docs/Web/API/Web_Audio_API) to directly generate and manipulate audio streams from JavaScript code rather than streaming pre-existing audio files.
- `<audio>` elements can't have subtitles or captions associated with them in the same way that `<video>` elements can. See [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio) by Ian Devlin for some useful information and workarounds.

A good general source of information on using HTML `<audio>` is the [Video and audio content](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) beginner's tutorial.

### Styling with CSS

The `<audio>` element has no intrinsic visual output of its own unless the `controls` attribute is specified, in which case the browser's default controls are shown.

The default controls have a {{cssxref("display")}} value of `inline` by default, and it is often a good idea set the value to `block` to improve control over positioning and layout, unless you want it to sit within a text block or similar.

You can style the default controls with properties that affect the block as a single unit, so for example you can give it a {{cssxref("border")}} and {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. You can't however style the individual components inside the audio player (e.g. change the button size or icons, change the font, etc.), and the controls are different across the different browsers.

To get a consistent look and feel across browsers, you'll need to create custom controls; these can be marked up and styled in whatever way you want, and then JavaScript can be used along with the {{domxref("HTMLMediaElement")}} API to wire up their functionality.

[Video player styling basics](/ko/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics) provides some useful styling techniques — it is written in the context of `<video>`, but much of it is equally applicable to `<audio>`.

### Detecting addition and removal of tracks

You can detect when tracks are added to and removed from an `<audio>` element using the {{event("addtrack")}} and {{event("removetrack")}} events. However, these events aren't sent directly to the `<audio>` element itself. Instead, they're sent to the track list object within the `<audio>` element's {{domxref("HTMLMediaElement")}} that corresponds to the type of track that was added to the element:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : An {{domxref("AudioTrackList")}} containing all of the media element's audio tracks. You can add a listener for `addtrack` to this object to be alerted when new audio tracks are added to the element.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Add an `addtrack` listener to this {{domxref("VideoTrackList")}} object to be informed when video tracks are added to the element.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Add an `addtrack` event listener to this {{domxref("TextTrackList")}} to be notified when new text tracks are added to the element.

> **참고:** Even though it's an `<audio>` element, it still has video and text track lists, and can in fact be used to present video, although the use interface implications can be odd.

For example, to detect when audio tracks are added to or removed from an `<audio>` element, you can use code like this:

```js
var elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = function (event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function (event) {
  trackEditor.removeTrack(event.track);
};
```

This code watches for audio tracks to be added to and removed from the element, and calls a hypothetical function on a track editor to register and remove the track from the editor's list of available tracks.

You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for the {{event("addtrack")}} and {{event("removetrack")}} events.

## 예제

### Basic usage

The following example shows simple usage of the `<audio>` element to play an OGG file. It will autoplay due to the `autoplay` attribute—if the page has permission to do so—and also includes fallback content.

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
```

For details on when autoplay works, how to get permission to use autoplay, and how and when it's appropriate to use autoplay, see our [autoplay guide](/ko/docs/Web/Media/Autoplay_guide).

### \<audio> element with \<source> element

This example specifies which audio track to embed using the `src` attribute on a nested `<source>` element rather than directly on the `<audio>` element. It is always useful to include the file's MIME type inside the `type` attribute, as the browser is able to instantly tell if it can play that file, and not waste time on it if not.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  Your browser does not support the <code>audio</code> element.
</audio>
```

### \<audio> with multiple \<source> elements

This example includes multiple `<source>` elements. The browser tries to load the first source element (Opus) if it is able to play it; if not it falls back to the second (Vorbis) and finally back to MP3:

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## 접근성 고려사항

Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. Captions, which are specified using [WebVTT](/ko/docs/Web/API/WebVTT_API), allow people who are experiencing hearing loss to understand an audio recording's content as the recording is being played, while transcripts allow people who need additional time to be able to review the recording's content at a pace and format that is comfortable for them.

If automatic captioning services are used, it is important to review the generated content to ensure it accurately represents the source audio.

The `<audio>` element doesn't directly support WebVTT. You will have to find a library or framework that provides the capability for you, or write the code to display captions yourself. One option is to play your audio using a {{HTMLElement("video")}} element, which does support WebVTT.

In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information. This includes emotion and tone. For example, in the WebVTT below, note the use of square brackets to provide tone and emotional insight to the viewer; this can help establish the mood otherwise provided using music, nonverbal sounds and crucial sound effects, and so forth.

```
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the `<audio>` element is not supported:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to download the audio</a> instead.
  </p>
</audio>
```

- [MDN Subtitles and closed caption — Plugins](/ko/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions)
- [Web Video Text Tracks Format (WebVTT)](/ko/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.2_—_Providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠"
          >내장 콘텐츠</a
        >. <a href="/ko/docs/Web/HTML/Element/audio#controls"><code>controls</code></a> 특성을 가진 경우,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >
        및 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <p>
          <a href="/ko/docs/Web/HTML/Element/audio#src"><code>src</code></a> 특성을 가진 경우 0개
          이상의 {{htmlelement("track")}} 요소와 그 이후의 투명한
          콘텐츠. 단, 다른 {{htmlelement("audio")}}와
          {{htmlelement("video")}} 요소는 불가능.
        </p>
        <p>
          그 외의 경우 0개 이상의 {{HTMLElement("source")}} 요소와 0개
          이상의 {{HTMLElement("track")}} 요소, 그리고 이후의 투명한
          콘텐츠. 단, 다른 {{htmlelement("audio")}}와
          {{htmlelement("video")}} 요소는 불가능.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠"
          >내장 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/application_role'><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web media technologies](/ko/docs/Web/Media)

  - [Media container formats (file types)](/ko/docs/Web/Media/Formats/Containers)
  - [Guide to audio codecs used on the web](/ko/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/ko/docs/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Learning area: Video and audio content](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Cross-browser audio basics](/en-US/Apps/Fundamentals/Audio_and_video_delivery/Cross-browser_audio_basics)
