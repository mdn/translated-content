---
title: <audio>
slug: Web/HTML/Element/audio
tags:
  - Element
  - HTML
  - HTML embedded content
  - HTML5
  - Media
  - Multimedia
  - Reference
  - Web
  - 소리
  - 오디오
translation_of: Web/HTML/Element/audio
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;audio&gt;</code> 요소</strong>는 문서에 소리 콘텐츠를 포함할 때 사용합니다.</span> <code>src</code> 특성 또는 {{htmlelement("source")}} 요소를 사용해 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고릅니다. {{domxref("MediaStream")}}을 사용하면 미디어 스트림을 바라볼 수도 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

<h2 id="특성">특성</h2>

<p><span style="line-height: 21px;">이 요소는 </span><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<dl>
 <dt>{{htmlattrdef("autoplay")}}</dt>
 <dd>지정한 경우, 전체 오디오 파일의 다운로드를 기다리지 않고 가능한 빠른 시점에 재생을 시작합니다.
 <div class="note"><strong>참고</strong>: 오디오 및 오디오를 가진 비디오를 자동으로 재생하는 사이트는 사용자 경험에 악영향을 끼칠 수 있으므로 피해야 합니다. 반드시 자동 재생을 제공해야 한다면 사용자의 명시적인 동의를 얻어야 하도록 해야 합니다. 그러나, 미디어 소스가 사용자의 선택에 의해 나중에 정해지는 경우라면 자동 재생이 유용할 수 있습니다. <a href="/ko/docs/Web/Media/Autoplay_guide">자동 재생 안내서</a>를 방문하고 추가 정보와 적절한 사용법을 알아보세요.</div>
 </dd>
 <dt>{{htmlattrdef("controls")}}</dt>
 <dd>지정한 경우 오디오 재생, 볼륨, 탐색, 일시 정지 컨트롤을 브라우저에서 제공합니다.</dd>
 <dt>{{htmlattrdef("crossorigin")}}</dt>
 <dd>CORS를 사용해 지정한 오디오 파일을 가져올지 나타내는 열거형 특성. <a href="/ko/docs/Web/HTML/CORS_enabled_image">교차 출처 활성화 리소스</a>는 {{HTMLElement("canvas")}} 요소에 사용해도 캔버스를 "오염"시키지 않습니다. 가능한 값은 다음과 같습니다.
 <dl>
  <dt><code>anonymous</code></dt>
  <dd>자격 증명 없이 교차 출처 요청을 전송합니다. 즉, <code>Origin:</code> HTTP 헤더를 쿠키, X.509 인증서, HTTP Basic 인증 없이 전송합니다. 서버에서 <code>Access-Control-Allow-Origin:</code> HTTP 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.</dd>
  <dt><code>use-credentials</code></dt>
  <dd>자격 증명과 함께 교차 출처 요청을 전송합니다. 즉, <code>Origin:</code> HTTP 헤더를 쿠키, X 509 인증서, 또는 HTTP Basic 이증과 함께 전송합니다. 서버에서 <code>Access-Control-Allow-Origin:</code> HTTP 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.</dd>
 </dl>
 특성이 존재하지 않으면 리소스를 CORS 요청 없이(<code>Origin:</code> HTTP 헤더 없이) 가져오므로, {{htmlelement("canvas")}}를 오염시키게 됩니다. 유효하지 않은 값의 경우 anonymous 키워드를 사용한 것으로 간주합니다.</dd>
 <dt>{{htmlattrdef("currentTime")}}</dt>
 <dd>
 <p>Reading <code>currentTime</code> returns a double-precision floating-point value indicating the current playback position, in seconds, of the audio. If the audio's metadata isn't available yet—thereby preventing you from knowing the media's start time or duration—<code>currentTime</code> instead indicates, and can be used to change, the time at which playback will begin. Otherwise, setting <code>currentTime</code> sets the current playback position to the given time and seeks the media to that position if the media is currently loaded.</p>

 <p>If the audio is being streamed, it's possible that the {{Glossary("user agent")}} may not be able to obtain some parts of the resource if that data has expired from the media buffer. Other audio may have a media timeline that doesn't start at 0 seconds, so setting <code>currentTime</code> to a time before that would fail. For example, if the audio's media timeline starts at 12 hours, setting <code>currentTime</code> to 3600 would be an attempt to set the current playback position well before the beginning of the media, and would fail. The {{domxref("HTMLMediaElement.getStartDate", "getStartDate()")}} method can be used to determine the beginning point of the media timeline's reference frame.</p>
 </dd>
 <dt>{{htmlattrdef("disableRemotePlayback")}} {{experimental_inline}}</dt>
 <dd>A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc). See <a href="https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute">this proposed specification</a> for more information.
 <p class="note">In Safari, you can use <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html"><code>x-webkit-airplay="deny"</code></a> as a fallback.</p>
 </dd>
 <dt>{{htmlattrdef("duration")}} {{ReadOnlyInline}}</dt>
 <dd>A double-precision floating-point value which indicates the duration (total length) of the audio in seconds, on the media's timeline. If no media is present on the element, or the media is not valid, the returned value is <code>NaN</code>. If the media has no known end (such as for live streams of unknown duration, web radio, media incoming from <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a>, and so forth), this value is <code>+Infinity</code>.</dd>
 <dt>{{htmlattrdef("loop")}}</dt>
 <dd>A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.</dd>
 <dt>{{htmlattrdef("muted")}}</dt>
 <dd>A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is <code>false</code>.</dd>
 <dt>{{htmlattrdef("preload")}}</dt>
 <dd>This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:
 <ul>
  <li><code>none</code>: Indicates that the audio should not be preloaded.</li>
  <li><code>metadata</code>: Indicates that only audio metadata (e.g. length) is fetched.</li>
  <li><code>auto</code>: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.</li>
  <li><em>empty string</em>: A synonym of the <code>auto</code> value.</li>
 </ul>

 <p>The default value is different for each browser. The spec advises it to be set to <code>metadata</code>.</p>

 <div class="note"><strong>Usage notes:</strong>

 <ul>
  <li>The <code>autoplay</code> attribute has precedence over <code>preload</code>. If <code>autoplay</code> is specified, the browser would obviously need to start downloading the audio for playback.</li>
  <li>The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>The URL of the audio to embed. This is subject to <a href="/en-US/docs/HTTP_access_control">HTTP access controls</a>. This is optional; you may instead use the {{htmlelement("source")}} element within the audio block to specify the audio to embed.</dd>
</dl>

<p>Time offsets are specified as float values indicating the number of seconds to offset.</p>

<div class="note"><strong>Note:</strong> The time offset value definition has not yet been completed in the HTML5 specification and is subject to change.</div>

<h2 id="이벤트">이벤트</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">이벤트 이름</th>
   <th scope="col">발생 조건</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{Event("audioprocess")}}</td>
   <td>The input buffer of a {{DOMxRef("ScriptProcessorNode")}} is ready to be processed.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.canplay_event", 'canplay')}}</td>
   <td>The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}</td>
   <td>The browser estimates it can play the media up to its end without stopping for content buffering.</td>
  </tr>
  <tr>
   <td>{{Event("complete")}}</td>
   <td>The rendering of an {{DOMxRef("OfflineAudioContext")}} is terminated.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}</td>
   <td>The <code>duration</code> attribute has been updated.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.emptied_event", 'emptied')}}</td>
   <td>The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the <a href="/en-US/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement" rel="internal"><code>load()</code></a> method is called to reload it.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.ended_event", 'ended')}}</td>
   <td>Playback has stopped because the end of the media was reached.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}</td>
   <td>The first frame of the media has finished loading.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}</td>
   <td>The metadata has been loaded.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.pause_event", 'pause')}}</td>
   <td>Playback has been paused.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.play_event", 'play')}}</td>
   <td>Playback has begun.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.playing_event", 'playing ')}}</td>
   <td>Playback is ready to start after having been paused or delayed due to lack of data.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}</td>
   <td>The playback rate has changed.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.seeked_event", 'seeked')}}</td>
   <td>A <em>seek</em> operation completed.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.seeking_event", 'seeking')}}</td>
   <td>A <em>seek</em> operation began.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.stalled_event", 'stalled')}}</td>
   <td>The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.suspend_event", 'suspend')}}</td>
   <td>Media data loading has been suspended.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}</td>
   <td>The time indicated by the <code>currentTime</code> attribute has been updated.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}</td>
   <td>The volume has changed.</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.waiting_event", 'waiting')}}</td>
   <td>Playback has stopped because of a temporary lack of data</td>
  </tr>
 </tbody>
</table>

<h2 id="사용_일람">사용 일람</h2>

<p>Browsers don't all support the same <a href="/en-US/docs/Web/Media/Formats/Containers">file types</a> and <a href="/en-US/docs/Web/Media/Formats/Audio_codecs">audio codecs</a>; you can provide multiple sources inside nested {{htmlelement("source")}} elements, and the browser will then use the first one it understands:</p>

<pre class="brush: html">&lt;audio controls&gt;
  &lt;source src="myAudio.mp3" type="audio/mpeg"&gt;
  &lt;source src="myAudio.ogg" type="audio/ogg"&gt;
  &lt;p&gt;Your browser doesn't support HTML5 audio. Here is
     a &lt;a href="myAudio.mp4"&gt;link to the audio&lt;/a&gt; instead.&lt;/p&gt;
&lt;/audio&gt;</pre>

<p>We offer a substantive and thorough <a href="/en-US/docs/Web/Media/Formats">guide to media file types</a> and the <a href="/en-US/docs/Web/Media/Formats/Audio_codecs">audio codecs that can be used within them</a>. Also available is <a href="/en-US/docs/Web/Media/Formats/Video_codecs">a guide to the codecs supported for video</a>.</p>

<p>Other usage notes:</p>

<ul>
 <li>If you don't specify the <code>controls</code> attribute, the audio player won't include the browser's default controls. You can, however, create your own custom controls using JavaScript and the {{domxref("HTMLMediaElement")}} API.</li>
 <li>To allow precise control over your audio content, <code>HTMLMediaElement</code>s fire many different <a href="/en-US/docs/Web/Guide/Events/Media_events">events</a>. This also provides a way to monitor the audio's fetching process so you can watch for errors or detect when enough is available to begin to play or manipulate it.</li>
 <li>You can also use the <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> to directly generate and manipulate audio streams from JavaScript code rather than streaming pre-existing audio files.</li>
 <li><code>&lt;audio&gt;</code> elements can't have subtitles or captions associated with them in the same way that <code>&lt;video&gt;</code> elements can. See <a href="https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio">WebVTT and Audio</a> by Ian Devlin for some useful information and workarounds.</li>
</ul>

<p>A good general source of information on using HTML <code>&lt;audio&gt;</code> is the <a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Video and audio content</a> beginner's tutorial.</p>

<h3 id="Styling_with_CSS">Styling with CSS</h3>

<p>The <code>&lt;audio&gt;</code> element has no intrinsic visual output of its own unless the <code>controls</code> attribute is specified, in which case the browser's default controls are shown.</p>

<p>The default controls have a {{cssxref("display")}} value of <code>inline</code> by default, and it is often a good idea set the value to <code>block</code> to improve control over positioning and layout, unless you want it to sit within a text block or similar.</p>

<p>You can style the default controls with properties that affect the block as a single unit, so for example you can give it a {{cssxref("border")}} and {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. You can't however style the individual components inside the audio player (e.g. change the button size or icons, change the font, etc.), and the controls are different across the different browsers.</p>

<p>To get a consistent look and feel across browsers, you'll need to create custom controls; these can be marked up and styled in whatever way you want, and then JavaScript can be used along with the {{domxref("HTMLMediaElement")}} API to wire up their functionality.</p>

<p><a href="/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics">Video player styling basics</a> provides some useful styling techniques — it is written in the context of <code>&lt;video&gt;</code>, but much of it is equally applicable to <code>&lt;audio&gt;</code>.</p>

<h3 id="Detecting_addition_and_removal_of_tracks">Detecting addition and removal of tracks</h3>

<p>You can detect when tracks are added to and removed from an <code>&lt;audio&gt;</code> element using the {{event("addtrack")}} and {{event("removetrack")}} events. However, these events aren't sent directly to the <code>&lt;audio&gt;</code> element itself. Instead, they're sent to the track list object within the <code>&lt;audio&gt;</code> element's {{domxref("HTMLMediaElement")}} that corresponds to the type of track that was added to the element:</p>

<dl>
 <dt>{{domxref("HTMLMediaElement.audioTracks")}}</dt>
 <dd>An {{domxref("AudioTrackList")}} containing all of the media element's audio tracks. You can add a listener for <code>addtrack</code> to this object to be alerted when new audio tracks are added to the element.</dd>
 <dt>{{domxref("HTMLMediaElement.videoTracks")}}</dt>
 <dd>Add an <code>addtrack</code> listener to this {{domxref("VideoTrackList")}} object to be informed when video tracks are added to the element.</dd>
 <dt>{{domxref("HTMLMediaElement.textTracks")}}</dt>
 <dd>Add an <code>addtrack</code> event listener to this {{domxref("TextTrackList")}} to be notified when new text tracks are added to the element.</dd>
</dl>

<div class="note">
<p><strong>Note:</strong> Even though it's an <code>&lt;audio&gt;</code> element, it still has video and text track lists, and can in fact be used to present video, although the use interface implications can be odd.</p>
</div>

<p>For example, to detect when audio tracks are added to or removed from an <code>&lt;audio&gt;</code> element, you can use code like this:</p>

<pre class="brush: js">var elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = function(event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function(event) {
  trackEditor.removeTrack(event.track);
};
</pre>

<p>This code watches for audio tracks to be added to and removed from the element, and calls a hypothetical function on a track editor to register and remove the track from the editor's list of available tracks.</p>

<p>You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for the {{event("addtrack")}} and {{event("removetrack")}} events.</p>

<h2 id="예제">예제</h2>

<h3 id="Basic_usage">Basic usage</h3>

<p>The following example shows simple usage of the <code>&lt;audio&gt;</code> element to play an OGG file. It will autoplay due to the <code>autoplay</code> attribute—if the page has permission to do so—and also includes fallback content.</p>

<pre class="brush: html">&lt;!-- Simple audio playback --&gt;
&lt;audio
  src="AudioTest.ogg"
  autoplay&gt;
  Your browser does not support the &lt;code&gt;audio&lt;/code&gt; element.
&lt;/audio&gt;
</pre>

<p>For details on when autoplay works, how to get permission to use autoplay, and how and when it's appropriate to use autoplay, see our <a href="/en-US/docs/Web/Media/Autoplay_guide">autoplay guide</a>.</p>

<h3 id="&lt;audio>_element_with_&lt;source>_element">&lt;audio&gt; element with &lt;source&gt; element</h3>

<p>This example specifies which audio track to embed using the <code>src</code> attribute on a nested <code>&lt;source&gt;</code> element rather than directly on the <code>&lt;audio&gt;</code> element. It is always useful to include the file's MIME type inside the <code>type</code> attribute, as the browser is able to instantly tell if it can play that file, and not waste time on it if not.</p>

<pre class="brush: html">&lt;audio controls&gt;
  &lt;source src="foo.wav" type="audio/wav"&gt;
  Your browser does not support the &lt;code&gt;audio&lt;/code&gt; element.
&lt;/audio&gt;
</pre>

<h3 id="&lt;audio>_with_multiple_&lt;source>_elements">&lt;audio&gt; with multiple &lt;source&gt; elements</h3>

<p>This example includes multiple <code>&lt;source&gt;</code> elements. The browser tries to load the first source element (Opus) if it is able to play it; if not it falls back to the second (Vorbis) and finally back to MP3:</p>

<pre class="brush: html">&lt;audio controls&gt;
 &lt;source src="foo.opus" type="audio/ogg; codecs=opus"/&gt;
 &lt;source src="foo.ogg" type="audio/ogg; codecs=vorbis"/&gt;
 &lt;source src="foo.mp3" type="audio/mpeg"/&gt;
&lt;/audio&gt;</pre>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. Captions, which are specified using <a href="/en-US/docs/Web/API/WebVTT_API">WebVTT</a>, allow people who are experiencing hearing loss to understand an audio recording's content as the recording is being played, while transcripts allow people who need additional time to be able to review the recording's content at a pace and format that is comfortable for them.</p>

<p>If automatic captioning services are used, it is important to review the generated content to ensure it accurately represents the source audio.</p>

<p>The <code>&lt;audio&gt;</code> element doesn't directly support WebVTT. You will have to find a library or framework that provides the capability for you, or write the code to display captions yourself. One option is to play your audio using a {{HTMLElement("video")}} element, which does support WebVTT.</p>

<p>In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information. This includes emotion and tone. For example, in the WebVTT below, note the use of square brackets to provide tone and emotional insight to the viewer; this can help establish the mood otherwise provided using music, nonverbal sounds and crucial sound effects, and so forth.</p>

<pre>1
00:00:00 --&gt; 00:00:45
[Energetic techno music]

2
00:00:46 --&gt; 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --&gt; 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
</pre>

<p>Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the <code>&lt;audio&gt;</code> element is not supported:</p>

<pre class="brush: html">&lt;audio controls&gt;
  &lt;source src="myAudio.mp3" type="audio/mpeg"&gt;
  &lt;source src="myAudio.ogg" type="audio/ogg"&gt;
  &lt;p&gt;
    Your browser doesn't support HTML5 audio.
    Here is a &lt;a href="myAudio.mp4"&gt;link to download the audio&lt;/a&gt; instead.
  &lt;/p&gt;
&lt;/audio&gt;

</pre>

<ul>
 <li><a href="/en-US/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions">MDN Subtitles and closed caption — Plugins</a></li>
 <li><a href="/en-US/docs/Web/API/WebVTT_API">Web Video Text Tracks Format (WebVTT)</a></li>
 <li><a href="https://webaim.org/techniques/captions/">WebAIM: Captions, Transcripts, and Audio Descriptions</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.2_—_Providing_text_alternatives_for_time-based_media">MDN Understanding WCAG, Guideline 1.2 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html">Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html">Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="기술_요약">기술 요약</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠">내장 콘텐츠</a>. {{htmlattrxref("controls", "audio")}} 특성을 가진 경우, <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠">대화형 콘텐츠</a> 및 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>
    <p>{{htmlattrxref("src", "audio")}} 특성을 가진 경우 0개 이상의 {{htmlelement("track")}} 요소와 그 이후의 투명한 콘텐츠. 단, 다른 {{htmlelement("audio")}}와 {{htmlelement("video")}} 요소는 불가능.</p>

    <p>그 외의 경우 0개 이상의 {{HTMLElement("source")}} 요소와 0개 이상의 {{HTMLElement("track")}} 요소, 그리고 이후의 투명한 콘텐츠. 단, 다른 {{htmlelement("audio")}}와 {{htmlelement("video")}} 요소는 불가능.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠">내장 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">암시적 ARIA 역할</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">대응하는 역할 없음</a></td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>{{ARIARole("application")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLAudioElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.audio")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/Media">Web media technologies</a>

  <ul>
   <li><a href="/en-US/docs/Web/Media/Formats/Containers">Media container formats (file types)</a></li>
   <li><a href="/en-US/docs/Web/Media/Formats/Audio_codecs">Guide to audio codecs used on the web</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web_Audio_API">Web Audio API</a></li>
 <li>{{domxref("HTMLAudioElement")}}</li>
 <li>{{htmlelement("source")}}</li>
 <li>{{htmlelement("video")}}</li>
 <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Learning area: Video and audio content</a></li>
 <li><a href="/en-US/Apps/Fundamentals/Audio_and_video_delivery/Cross-browser_audio_basics">Cross-browser audio basics</a></li>
</ul>
