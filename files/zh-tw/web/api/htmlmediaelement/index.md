---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement`** interface adds to {{domxref("HTMLElement")}} the properties and methods needed to support basic media-related capabilities that are common to audio and video. The {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} elements both inherit this interface.

{{InheritanceDiagram(600, 120)}}

## 屬性

_這個介面從{{domxref("HTMLElement")}}、{{domxref("Element")}}、{{domxref("Node")}}，和{{domxref("EventTarget")}}繼承了屬性_

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{domxref("AudioTrackList")}} 會列出包含在該媒體元素內部的{{domxref("AudioTrack")}}物件。
- {{domxref("HTMLMediaElement.autoplay")}}

  - : 是一個布林值，表達了 HTML 中是否有[`autoplay`](/zh-TW/docs/Web/HTML/Element/video#autoplay)屬性；意即；表明是否只要在媒體可以播放且不中斷的時候，能夠自動播放。

    > **備註：** 在網站上自動播放音訊（或是有音訊的影片），可能是惱人的使用者體驗；因此，應該盡可能地避免。如果你必須要有自動播放的功能，你應該讓它是可選擇的（讓使用者特地去啟動）。 However, this can be useful when creating media elements whose source will be set at a later time, under user control.

- {{domxref("HTMLMediaElement.buffered")}} {{readonlyinline}}
  - : 回傳一個{{domxref("TimeRanges")}}物件，表示媒體當下`buffered`屬性被瀏覽器存取時的緩存（如果有的話）區間。
- {{domxref("HTMLMediaElement.controller")}}
  - : Is a {{domxref("MediaController")}} object that represents the media controller assigned to the element, or `null` if none is assigned.
- {{domxref("HTMLMediaElement.controls")}}
  - : Is a {{jsxref('Boolean')}} that reflects the [`controls`](/zh-TW/docs/Web/HTML/Element/video#controls) HTML attribute, indicating whether user interface items for controlling the resource should be displayed.
- {{domxref("HTMLMediaElement.controlsList")}} {{readonlyinline}}
  - : Returns a {{domxref("DOMTokenList")}} that helps the user agent select what controls to show on the media element whenever the user agent shows its own set of controls. The `DOMTokenList` takes one or more of three possible values: `nodownload`, `nofullscreen`, and `noremoteplayback`.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : Is a {{domxref("DOMString")}} indicating the [CORS setting](/zh-TW/docs/Web/HTML/CORS_settings_attributes) for this media element.
- {{domxref("HTMLMediaElement.currentSrc")}} {{readonlyinline}}
  - : Returns a {{domxref("DOMString")}} with the absolute URL of the chosen media resource.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : Is a `double` indicating the current playback time in seconds. Setting this value seeks the media to the new time.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : Is a {{jsxref('Boolean')}} that reflects the [`muted`](/zh-TW/docs/Web/HTML/Element/video#muted) HTML attribute, which indicates whether the media element's audio output should be muted by default.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : Is a `double` indicating the default playback rate for the media.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Is a {{jsxref('Boolean')}} that sets or returns the remote playback state, indicating whether the media element is allowed to have a remote playback UI.
- {{domxref("HTMLMediaElement.duration")}} {{readonlyinline}}
  - : Returns a `double` indicating the length of the media in seconds, or 0 if no media data is available.
- {{domxref("HTMLMediaElement.ended")}} {{readonlyinline}}
  - : Returns a {{jsxref('Boolean')}} that indicates whether the media element has finished playing.
- {{domxref("HTMLMediaElement.error")}} {{readonlyinline}}
  - : Returns a {{domxref("MediaError")}} object for the most recent error, or `null` if there has not been an error.
- {{domxref("HTMLMediaElement.loop")}}
  - : Is a {{jsxref('Boolean')}} that reflects the [`loop`](/zh-TW/docs/Web/HTML/Element/video#loop) HTML attribute, which indicates whether the media element should start over when it reaches the end.
- {{domxref("HTMLMediaElement.mediaGroup")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`mediagroup`](/zh-TW/docs/Web/HTML/Element/video#mediagroup) HTML attribute, which indicates the name of the group of elements it belongs to. A group of media elements shares a common {{domxref('MediaController')}}.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("MediaKeys")}} object or `null`. MediaKeys is a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{readonlyinline}} {{non-standard_inline}}
  - : Returns a {{jsxref('Boolean')}}. Related to audio stream capture.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{non-standard_inline}}
  - : Is a `double` that provides access to the fragment end time if the media element has a fragment URI for `currentSrc`, otherwise it is equal to the media duration.
- {{domxref("HTMLMediaElement.mozFrameBufferLength")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Is a `unsigned long` that indicates the number of samples that will be returned in the framebuffer of each `MozAudioAvailable` event. This number is a total for all channels, and by default is set to be the number of channels \* 1024 (e.g., 2 channels \* 1024 samples = 2048 total).The `mozFrameBufferLength` property can be set to a new value for lower latency, larger amounts of data, etc. The size given _must_ be a number between 512 and 16384. Using any other size results in an exception being thrown. The best time to set a new length is after the [loadedmetadata](/zh-TW/docs/Web/Events/loadedmetadata) event fires, when the audio info is known, but before the audio has started or `MozAudioAvailable` events have begun firing.
- {{domxref("HTMLMediaElement.mozSampleRate")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a `double` representing the number of samples per second that will be played. For example, 44100 samples per second is the sample rate used by CD audio.
- {{domxref("HTMLMediaElement.muted")}}
  - : Is a {{jsxref('Boolean')}} that determines whether audio is muted. `true` if the audio is muted and `false` otherwise.
- {{domxref("HTMLMediaElement.networkState")}} {{readonlyinline}}
  - : Returns a `unsigned short` (enumeration) indicating the current state of fetching the media over the network.
- {{domxref("HTMLMediaElement.paused")}} {{readonlyinline}}
  - : Returns a {{jsxref('Boolean')}} that indicates whether the media element is paused.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : Is a `double` that indicates the rate at which the media is being played back.
- {{domxref("HTMLMediaElement.played")}} {{readonlyinline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the ranges of the media source that the browser has played, if any.
- {{domxref("HTMLMediaElement.preload")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`preload`](/zh-TW/docs/Web/HTML/Element/video#preload) HTML attribute, indicating what data should be preloaded, if any. Possible values are: `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}}
  - : Is a {{jsxref('Boolean')}} that determines if the pitch of the sound will be preserved. If set to `false`, the pitch will adjust to the speed of the audio. This is implemented with prefixes in Firefox (`mozPreservesPitch`) and WebKit (`webkitPreservesPitch`).
- {{domxref("HTMLMediaElement.readyState")}} {{readonlyinline}}
  - : Returns a `unsigned short` (enumeration) indicating the readiness state of the media.
- {{domxref("HTMLMediaElement.seekable")}} {{readonlyinline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the time ranges that the user is able to seek to, if any.
- {{domxref("HTMLMediaElement.seeking")}} {{readonlyinline}}
  - : Returns a {{jsxref('Boolean')}} that indicates whether the media is in the process of seeking to a new position.
- {{domxref("HTMLMediaElement.sinkId")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("DOMString")}} that is the unique ID of the audio device delivering output, or an empty string if it is using the user agent default. This ID should be one of the `MediaDeviceInfo.deviceid` values returned from {{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or `id-communications`.
- {{domxref("HTMLMediaElement.src")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`src`](/zh-TW/docs/Web/HTML/Element/video#src) HTML attribute, which contains the URL of a media resource to use.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : Is a {{domxref('MediaStream')}} representing the media to play or that has played in the current `HTMLMediaElement`, or `null` if not assigned.
- {{domxref("HTMLMediaElement.textTracks")}} {{readonlyinline}}
  - : Returns the list of {{domxref("TextTrack")}} objects contained in the element.
- {{domxref("HTMLMediaElement.videoTracks")}} {{readonlyinline}}

  - : Returns the list of {{domxref("VideoTrack")}} objects contained in the element.

    > **備註：** Gecko supports only single track playback, and the parsing of tracks' metadata is only available for media with the Ogg container format.

- {{domxref("HTMLMediaElement.volume")}}
  - : Is a `double` indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

### Event handlers

- {{domxref("HTMLMediaElement.onencrypted")}}

  - : Sets the {{domxref('EventHandler')}} called when the media is encrypted.

- {{domxref("HTMLMediaElement.onwaitingforkey")}}
  - : Sets the {{domxref('EventHandler')}} called when playback is blocked while waiting for an encryption key.

## Obsolete attributes

These attributes are obsolete and should not be used, even if a browser still supports them.

- {{domxref("HTMLMediaElement.initialTime")}} {{readonlyinline}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Returns a `double` that indicates the initial playback position in seconds.
- {{domxref("HTMLMediaElement.mozChannels")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a `double` representing the number of channels in the audio resource (e.g., `2` for stereo).

### Obsolete event handlers

- {{domxref("HTMLMediaElement.onmozinterruptbegin")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Sets the event handler called when the media element is interrupted because of the Audio Channel manager. This was Firefox-specific, having been implemented for Firefox OS, and was removed in Firefox 55.
- {{domxref("HTMLMediaElement.onmozinterruptend")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Sets the {{domxref('EventHandler')}} called when the interruption is concluded. This was Firefox-specific, having been implemented for Firefox OS, and was removed in Firefox 55.

## Methods

_This interface also inherits methods from its ancestors {{domxref("HTMLElement")}}, {{domxref('Element')}}, {{domxref('Node')}}, and {{domxref('EventTarget')}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Adds a text track (such as a track for subtitles) to a media element.
- {{domxref("HTMLMediaElement.captureStream()")}} {{experimental_inline}}
  - : Returns {{domxref("MediaStream")}}, captures a stream of the media content.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Determines whether the specified media type can be played back.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Directly seeks to the given time.
- {{domxref("HTMLMediaElement.load()")}}
  - : Resets the media element and restarts the media resource. Any pending events are discarded. How much media data is fetched is still affected by the `preload` attribute. This method can be useful for releasing resources after any `src` attribute and `source` element descendants have been removed. Otherwise, it is usually unnecessary to use this method, unless required to rescan `source` element children after dynamic changes.
- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{non-standard_inline}}
  - : Returns {{jsxref('Object')}}, which contains properties that represent metadata from the playing media resource as `{key: value}` pairs. A separate copy of the data is returned each time the method is called. This method must be called after the [loadedmetadata](/zh-TW/docs/Web/Events/loadedmetadata) event fires.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Pauses the media playback.
- {{domxref("HTMLMediaElement.play()")}}
  - : Begins playback of the media.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{non-standard_inline}} {{experimental_inline}}
  - : Seeks to the next frame in the media. This non-standard, experimental method makes it possible to manually drive reading and rendering of media at a custom speed, or to move through the media frame-by-frame to perform filtering or other operations.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{experimental_inline}}
  - : Returns {{jsxref("Promise")}}. Sets the {{domxref("MediaKeys")}} keys to use when decrypting media during playback.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{experimental_inline}}
  - : Sets the ID of the audio device to use for output and returns a {{jsxref("Promise")}}. This only works when the application is authorized to use the specified device.

## Obsolete methods

These methods are obsolete and should not be used, even if a browser still supports them.

- {{domxref("HTMLMediaElement.mozLoadFrom()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : This method, available only in Mozilla's implementation, loads data from another media element. This works similarly to `load()` except that instead of running the normal resource selection algorithm, the source is simply set to the `other` element's `currentSrc`. This is optimized so this element gets access to all of the `other` element's cached and buffered data; in fact, the two elements share downloaded data, so data downloaded by either element is available to both.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- References

  - {{HTMLElement("video")}} and {{HTMLElement("audio")}} HTML elements.
  - {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} interfaces, derived from `HTMLMediaElement`.

- Articles

  - [Using HTML5 audio and video](/zh-TW/docs/Using_HTML5_audio_and_video)
  - [Media formats supported by the audio and video elements](/zh-TW/docs/Media_formats_supported_by_the_audio_and_video_elements)
  - [Web Audio API](/zh-TW/docs/Web_Audio_API)
