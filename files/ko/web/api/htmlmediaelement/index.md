---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement`** 는 오디오와 비디오에 통용되는 미디어 관련 확장성을 제공하기 위해 {{domxref("HTMLElement")}}에 메소드와 프로퍼티를 추가한 인터페이스입니다. {{domxref("HTMLVideoElement")}} 와 {{domxref("HTMLAudioElement")}} 는 이 인터페이스를 상속합니다.

{{InheritanceDiagram(600, 120)}}

## 속성(Properties)

_이 인터페이스는 {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}의 프로퍼티들도 모두 상속합니다._

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{domxref("AudioTrackList")}}는 엘레먼트의 {{domxref("AudioTrack")}} 객체의 목록입니다.
- {{domxref("HTMLMediaElement.autoplay")}}
  - : 미디어가 준비된 즉시 재생할 것인지 결정하는 [`autoplay`](/ko/docs/Web/HTML/Element/video#autoplay) 속성에 연결된 {{jsxref("Boolean")}}값입니다..> **참고:** 오디오(또는 오디오가 있는 비디오)를 자동으로 재생하는 사이트는 사용자에게 그리 탐탁치 않은 경험일 수 있습니다, 그러므로 가능한 한 지양해야합니다. 자동 재생 기능을 제공하려면, 사전 동의(사용자에게 기능을 켜도록 함)를 받아야 합니다. 의외로 이 점은 사용자의 조작에 의해 미디어 엘레먼츠를 늦게 생성하는 경우 유용할 수 있습니다.
- {{domxref("HTMLMediaElement.buffered")}} {{readonlyinline}}
  - : `buffered` 프로퍼티에 접근한 시점에 브라우저가 버퍼에 담고 있는 미디어 소스의 구간 데이터를 나타내는 {{domxref("TimeRanges")}} 객체를 반환합니다.
- {{domxref("HTMLMediaElement.controller")}}
  - : 미디어 엘레먼트에 할당된 {{domxref("MediaController")}} 객체를 반환하거나 없다면 null을 반환합니다.
- {{domxref("HTMLMediaElement.controls")}}
  - : 미디어 엘레먼트에 컨트롤를 표시할지 결정하는 [`controls`](/ko/docs/Web/HTML/Element/video#controls) HTML 속성 값을 {{jsxref('Boolean')}}으로 반환합니다.
- {{domxref("HTMLMediaElement.controlsList")}} {{readonlyinline}}
  - : 브라우저가 미디어 엘레먼트에 자체 컨트롤을 표시할 때 어떤 컨트롤을 보여주거나 숨길 지 결정하는 {{domxref("DOMTokenList")}}를 반환합니다. `DOMTokenList` 는 `nodownload`, `nofullscreen`, `noremoteplayback` 값을 가질 수 있습니다.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : {{domxref("DOMString")}}미디어 엘레먼트의 [CORS 설정](/ko/docs/Web/HTML/CORS_settings_attributes)값을 반환합니다.
- {{domxref("HTMLMediaElement.currentSrc")}} {{readonlyinline}}
  - : 현재 선택된 미디어 소스 URL의 절대 경로를 {{domxref("DOMString")}}로 반환합니다.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : 현재 재생 시점을 초 단위로 표현한 `double`값입니다. 이 값을 세팅하여 재생 시점을 변경할 수 있습니다.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : {{jsxref('Boolean')}} 기본적으로 음소거 상태인지 표시하는 [`muted`](/ko/docs/Web/HTML/Element/video#muted) HTML 속성 값을 {{jsxref('Boolean')}}으로 반환합니다.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : 미디어 기본 재생 배속을 `double` 값으로 반환합니다.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Is a {{jsxref('Boolean')}} that sets or returns the remote playback state, indicating whether the media element is allowed to have a remote playback UI.
- {{domxref("HTMLMediaElement.duration")}} {{readonlyinline}}
  - : 미디어의 전체 길이를 초 단위로 `double` 값으로 반환합니다. 재생 가능한 미디어가 없을 경우 0을 반환합니다.
- {{domxref("HTMLMediaElement.ended")}} {{readonlyinline}}
  - : 미디어 재생 완료 여부를 {{jsxref('Boolean')}} 값으로 반환합니다.
- {{domxref("HTMLMediaElement.error")}} {{readonlyinline}}
  - : 마지막으로 발생한 {{domxref("MediaError")}} 객체를 반환합니다. 발생한 에러가 없을 경우 `null`을 반환합니다.
- {{domxref("HTMLMediaElement.loop")}}
  - : 미디어의 반복 재생을 결정하는 HTML 속성 [`loop`](/ko/docs/Web/HTML/Element/video#loop) 값을{{jsxref('Boolean')}}으로 반환합니다.
- {{domxref("HTMLMediaElement.mediaGroup")}}
  - : 미디어가 속한 그룹을 나타내는 [`mediagroup`](/ko/docs/Web/HTML/Element/video#mediagroup) 속성을 {{domxref("DOMString")}} 값으로 반환합니다. 같은 그룹에 속한 미디어들은 동일한 {{domxref('MediaController')}}에 의해 제어됩니다.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("MediaKeys")}} 객체 또는 `null`을 반환합니다. MediaKeys는 재생할 미디어 데이터를 복호화 하는데 사용합니다.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{readonlyinline}} {{non-standard_inline}}
  - : 오디오 스트림 캡쳐 여부를 {{jsxref('Boolean')}} 값으로 반환합니다. (Mozilla 전용 비표준 속성.)
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{non-standard_inline}}
  - : MediaElement의 `currentSrc`에 fragment URI가 존재하는 경우 fragment end time을 `double` 값으로 반환합니다. 없을 경우 미디어 길이를 반환합니다. (Mozilla 전용 비표준 속성)
- {{domxref("HTMLMediaElement.mozFrameBufferLength")}} {{non-standard_inline}} {{deprecated_inline}}
  - : `MozAudioAvailable` 이벤트 발생시마다 반환된 framebuffer의 샘플 숫자를 `unsigned long` 로 반환한다. 이 숫자는 모든 오디오 채널의 총합이며, 기본값은 채널 수 \* 1024(예, 2 채널 \* 1024 샘플 = 2048)이다.레이턴시가 낮은 경우 `mozFrameBufferLength` 를 더 큰 값으로 지정할 수도 있습니다. 범위는 512에서 16384 사이입니다. 범위를 넘어서는 값은 Error를 발생시킵니다. [loadedmetadata](/ko/docs/Web/Events/loadedmetadata) 이벤트가 발생할 때 새 값을 지정하는 것이 적절합니다. 오디오 정보는 알고 있지만 재생 시작 전 또는 `MozAudioAvailable` 이벤트가 발생하기 전 시점이죠.
- {{domxref("HTMLMediaElement.mozSampleRate")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : 디지털 샘플링 주파수 값을 `double`로 반환합니다. 예를 들어 CD 오디오의 경우 초당 44100 샘플을 가집니다.
- {{domxref("HTMLMediaElement.muted")}}
  - : 오디오 음소거 여부를 {{jsxref('Boolean')}} 값으로 반환합니다. 음소거라면 `true` 반대는 `false` 를 반환합니다..
- {{domxref("HTMLMediaElement.networkState")}} {{readonlyinline}}
  - : 네트워크를 통한 미디어 데이터 전송 상태를 `unsigned short` (enumeration)으로 반환합니다.
- {{domxref("HTMLMediaElement.paused")}} {{readonlyinline}}
  - : 미디어 일시 정지 여부를 {{jsxref('Boolean')}} 값으로 반환합니다.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : 재생 속도를 `double` 값으로 반환합니다.
- {{domxref("HTMLMediaElement.played")}} {{readonlyinline}}
  - : 브라우저에서 재생된 미디어 소스 범위를 포함한 {{domxref('TimeRanges')}} 객체를 반환합니다.
- {{domxref("HTMLMediaElement.preload")}}
  - : 프리로드 할 데이터 타입을 명시하는 [`preload`](/ko/docs/Web/HTML/Element/video#preload) attribute를 {{domxref("DOMString")}} 값으로 반환한다. 가능한 값들 : `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}}
  - : 사운드 피치 유지 여부를 {{jsxref('Boolean')}} 값으로 반환합니다. `false` 일 경우, 오디오 재생 속도에 따라 변하게 됩니다. Firefox의 (`mozPreservesPitch`)와 WebKit의 (`webkitPreservesPitch`)로 구현되어 있습니다.
- {{domxref("HTMLMediaElement.readyState")}} {{readonlyinline}}
  - : 미디어 대기 상태를 `unsigned short` (enumeration)으로 반환합니다.
- {{domxref("HTMLMediaElement.seekable")}} {{readonlyinline}}
  - : 탐색(seeking) 가능한 범위를 포함한 {{domxref('TimeRanges')}} 객체를 반환합니다.
- {{domxref("HTMLMediaElement.seeking")}} {{readonlyinline}}
  - : 탐색(seeking) 중 여부를 {{jsxref('Boolean')}} 값으로 반환합니다.
- {{domxref("HTMLMediaElement.sinkId")}} {{readonlyinline}} {{experimental_inline}}
  - : 별도의 오디오 재생 장치로 출력중이라면 장치의 unique ID를 {{domxref("DOMString")}} 으로 반환합니다. 브라우저로 재생 중이라면 빈 문자열입니다. 이 ID는 {{domxref("MediaDevices.enumerateDevices()")}}에서 반환된 `MediaDeviceInfo.deviceid`, `id-multimedia`, `id-communications` 중 하나입니다.
- {{domxref("HTMLMediaElement.src")}}
  - : 미디어 리소스 URL이 포함된 [`src`](/ko/docs/Web/HTML/Element/video#src) attribute를 {{domxref("DOMString")}} 값으로 반환합니다.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : 현재 `HTMLMediaElement` 객체에서 재생 중이거나 재생 되었던 미디어를 표현하는 {{domxref('MediaStream')}} 객체를 반환합니다. 없는 경우, `null` 을 반환합니다.
- {{domxref("HTMLMediaElement.textTracks")}} {{readonlyinline}}
  - : {{domxref("TextTrack")}} 리스트를 반환합니다.
- {{domxref("HTMLMediaElement.videoTracks")}} {{readonlyinline}}
  - : {{domxref("VideoTrack")}} 리스트를 반환합니다..> **참고:** Gecko는 싱글 트랙 재생만을 지원합니다. 또한 트랙 메타데이터 파싱은 Ogg 컨테이너 포맷에서만 가능합니다..
- {{domxref("HTMLMediaElement.volume")}}
  - : 오디오 볼륨을 `double` 값으로 반환합니다. 0.0 (무음)에서 1.0 (최대크기) 사이 값을 가집니다..

### 이벤트 핸들러(Event handlers)

- {{domxref("HTMLMediaElement.onencrypted")}}

  - : 미디어 암호화 시 호출되는 {{domxref('EventHandler')}}를 설정합니다.

- {{domxref("HTMLMediaElement.onwaitingforkey")}}
  - : 재생하기 위해 복호화 키가 필요한 경우 호출되는 {{domxref('EventHandler')}}를 설정합니다..

## 폐기된 속성(Obsolete attributes)

아래 속성들은 폐기되었으며 브라우저가 지원하더라도 사용되지 않아야 합니다.

- {{domxref("HTMLMediaElement.initialTime")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : 최초 재생 지점을 초 단위로 `double` 값으로 반환합니다.
- {{domxref("HTMLMediaElement.mozChannels")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : 오디오 채널 수를 `double` 값으로 반환합니다. (예, 스테레오인 경우 `2`).

### 폐기된 이벤트 핸들러(Obsolete event handlers)

- {{domxref("HTMLMediaElement.onmozinterruptbegin")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Audio Channel manager에 의해 재생이 인터럽트 된 경우 호출되는 {{event("Event_handlers", "event handler")}} 를 설정합니다. Firefox 전용 기능으로 Firefox OS에서 추가되었으며 Firefox 55 버전에서 제거되었습니다.
- {{domxref("HTMLMediaElement.onmozinterruptend")}} {{non-standard_inline}} {{deprecated_inline}}
  - : 재생 인터럽트가 해결된 경우 호출되는 {{domxref('EventHandler')}}를 설정합니다. Firefox 전용 기능으로 Firefox OS에서 추가되었으며 Firefox 55 버전에서 제거되었습니다.

## 메소드

_This interface also inherits methods from its ancestors {{domxref("HTMLElement")}}, {{domxref('Element')}}, {{domxref('Node')}}, and {{domxref('EventTarget')}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : 미디어 엘리먼트에 본문 트랙(자막 등)을 추가합니다.
- {{domxref("HTMLMediaElement.captureStream()")}} {{experimental_inline}}
  - : 미디어 콘텐트의 스트림을 캡쳐하여 {{domxref("MediaStream")}} 객체로 반환합니다.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : 현재 지정된 미디어 타입을 재생할 수 있는지 확인합니다.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : 입력된 시간으로 바로 이동합니다.
- {{domxref("HTMLMediaElement.load()")}}
  - : 미디어를 처음으로 리셋하고 [`src`](/ko/docs/Web/HTML/Element/video#src) 어트리뷰트 또는 {{HTMLElement("source")}} 엘리먼트로 전달된 소스 중 최적의 소스를 선택합니다.
- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{non-standard_inline}}
  - : Returns {{jsxref('Object')}}, which contains properties that represent metadata from the playing media resource as `{key: value}` pairs. A separate copy of the data is returned each time the method is called. This method must be called after the [loadedmetadata](/ko/docs/Web/Events/loadedmetadata) event fires.
- {{domxref("HTMLMediaElement.pause()")}}
  - : 미디어 재생을 일시 정지합니다.
- {{domxref("HTMLMediaElement.play()")}}
  - : 미디어를 재생합니다.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{non-standard_inline}} {{experimental_inline}}
  - : 미디어의 다음 프레임으로 이동합니다. 비표준이며 실험적인 이 기능은 미디어를 읽고 렌더링 하는 속도를 조절할 수 있게 하거나 프레임별로 필터링 등 추가적인 기능을 수행할 수 있게 합니다.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{experimental_inline}}
  - : 미디어 복호화에 필요한 키를 지정합니다. {{jsxref("Promise")}} 객체를 반환합니다.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{experimental_inline}}
  - : 오디오를 출력할 장치의 ID를 지정합니다. {{jsxref("Promise")}} 객체를 반환합니다. 어플리케이션이 특정 장치를 사용할 수 있는 경우에만 동작합니다.

## 폐기된 메소드

아래 메소드들은 폐기되었습니다. 브라우저가 지원하더라도 사용하면 안됩니다.

- {{domxref("HTMLMediaElement.mozLoadFrom()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Mozilla 구현체에서만 동작하는 이 메소드는 다른 미디어 엘리먼트에서 데이터를 로드합니다. `load()` 메소드와 유사하게 동작하지만 리소스 선택 알고리즘만 다릅니다. 엘리먼트의 소스를 다른 엘리먼트의 `currentSrc`를 바라보게 합니다. 지정된 엘리먼트의 캐시 및 버퍼에 담긴 데이터에도 모두 접근할 수 있으며 이 말은 즉 다운로드 된 모든 데이터를 공유한다는 의미입니다.

## 이벤트

_부모 엘리먼트 {{domxref("HTMLElement")}}에서 상속받은 이벤트와_ {{domxref('GlobalEventHandlers')}}에 정의된 이벤트를 믹스인합니다. [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 통해 이벤트를 수신하거나 `oneventname` 프로퍼티에 리스터를 할당하여 수신합니다.

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : 에러 외의 원인으로 전체 리소스가 로드 되지 못했을 때 발생합니다.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : User agent가 미디어를 재생 가능한 시점에 발생합니다. 다만 전체 미디어를 재생하기 위해서는 콘텐츠의 버퍼링이 더 필요할 수 있습니다.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : 추가 버퍼링 없이 전체 미디어를 재생할 수 있는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : duration 속성이 변경된 시점에 발생합니다..
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : 미디어가 제거된 시점에 발생합니다. 예를 들어 미디어가 이미 (부분적으로라도) 로드 되었는데. {{domxref("HTMLMediaElement.load()")}} 메소드 호출로 재 로드할 경우 발생합니다.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : (\<audio> or \<video>) 미디어가 끝까지 재생 완료 된 시점에 발생합니다.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : 에러가 발생하여 리소스를 로드할 수 없는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : 미디어의 첫번째 프레임이 로딩 완료된 시점에 발생합니다.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : 메타데이터가 로드 된 시점에 발생합니다.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : 브라우저가 리소스를 로드하기 시작하는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : 미디어 일시 정지를 요청하고 paused 상태로 진입하는 시점에 발생합니다. 일반적으로 {{domxref("HTMLMediaElement.pause()")}} 메소드가 호출되는 시점입니다.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : {{domxref("HTMLMediaElement.play()")}} 메소드 호출이나 `autoplay` 속성에 의해 `paused` 프로퍼티가 `true` 에서 `false`로 전환되는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : 일시 정지 되거나 버퍼 부족으로 재생 정지 된 이후 재생 가능한 시점에 발생합니다.
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : 브라우저가 리소르를 로딩 중일 때 주기적으로 발생합니다.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : 재생 속도가 변경될 때 발생합니다.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked ')}}
  - : 미디어 시킹이 완료되는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : 미디어 시킹이 시작되는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : User agent가 미디어 데이터를 fetch 하였지만 전송되지 않은 경우 발생합니다.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : 미디어 로딩이 중지된 시점에 발생합니다.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : currentTime 속성이 변경되는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : 볼륨이 변경되는 시점에 발생합니다.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : 일시적인 버퍼 부족으로 재생이 정지된 시점에 발생합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 참고 자료

  - {{HTMLElement("video")}} and {{HTMLElement("audio")}} HTML elements.
  - {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} interfaces, derived from `HTMLMediaElement`.

- 문서

  - [Using HTML5 audio and video](/ko/docs/Using_HTML5_audio_and_video)
  - [Media formats supported by the audio and video elements](/ko/docs/Media_formats_supported_by_the_audio_and_video_elements)
  - [Web Audio API](/ko/docs/Web_Audio_API)
