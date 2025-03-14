---
title: 오디오 및 비디오 전송
slug: Web/Media/Audio_and_video_delivery
l10n:
  sourceCommit: 1adcd073cda78153f7db0e764815ba68c60fe5bb
---

{{QuickLinksWithSubPages("/ko/docs/Web/Media")}}

'정적' 미디어 파일부터 적응형 라이브 스트리밍에 이르기까지 다양한 방식으로 웹에서 오디오와 동영상을 전송할 수 있습니다. 이 문서는 웹 기반 미디어의 다양한 전송 메커니즘과 인기 브라우저와의 호환성을 살펴보기 위한 출발점으로 작성되었습니다.

## 오디오 및 비디오 요소

사전 녹음된 오디오 파일을 다루든 실시간 스트리밍을 다루든 브라우저의 {{ htmlelement("audio")}} 및 {{ htmlelement("video")}} 요소를 통해 사용할 수 있도록 하는 메커니즘은 거의 동일하게 유지됩니다. 현재 모든 브라우저를 지원하려면 두 가지 형식(format)을 지정해야 하지만, Firefox와 Opera에서 MP3 및 MP4 형식을 채택함에 따라 이 방식도 빠르게 변화하고 있습니다. [웹의 미디어 유형 및 형식 가이드](/ko/docs/Web/Media/Formats)에서 호환성 정보를 확인할 수 있습니다.

비디오 및 오디오를 전달하기 위한 일반적인 워크플로우는 일반적으로 다음과 같습니다.

1. 기능 탐지를 통해 브라우저가 지원하는 형식을 확인합니다(일반적으로 위의 두 가지 중 선택 가능).
2. 브라우저가 기본적으로 제공된 형식의 재생을 지원하지 않는 경우 정지 이미지를 표시하거나 폴백(fallback) 기술을 사용하여 동영상을 표시합니다.
3. 미디어를 재생 혹은 인스턴스와 할 방법을 식별합니다(예: {{ htmlelement("video") }} 요소 혹은 `document.createElement('video')` 등).
4. 미디어 파일을 플레이어에 전달합니다.

### HTML 오디오

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg" />

  <!-- mp3를 지원하지 않는 브라우저를 위한 폴백 -->
  <source src="audiofile.ogg" type="audio/ogg" />

  <!-- 오디오 태그를 지원하지 않는 브라우저를 위한 폴백 -->
  <a href="audiofile.mp3">download audio</a>
</audio>
```

위의 코드는 원활한 재생을 위해 가능한 한 많은 오디오를 미리 로드하는 오디오 플레이어를 생성합니다.

> [!NOTE]
> 일부 모바일 브라우저에서는 `preload` 특성이 무시될 수 있습니다.

자세한 내용은 [크로스 브라우저 오디오 기본 사항 (HTML Audio 상세 정보)](/ko/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#html5_audio_in_detail)을 참고하세요.

### HTML 비디오

```html
<video
  controls
  width="640"
  height="480"
  poster="initialimage.png"
  autoplay
  muted>
  <source src="videofile.mp4" type="video/mp4" />

  <!-- mp4를 지원하지 않는 브라우저를 위한 폴백 -->
  <source src="videofile.webm" type="video/webm" />

  <!-- 자막 파일 지정 -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- 비디오 태그를 지원하지 않는 브라우저를 위한 폴백 -->
  <a href="videofile.mp4">download video</a>
</video>
```

위의 코드는 640x480 픽셀 크기의 비디오 플레이어를 생성하여 비디오가 재생될 때까지 포스터 이미지를 표시합니다. 동영상이 자동 재생되지만, 기본적으로 음소거 되도록 지시합니다.

> [!NOTE]
> 일부 모바일 브라우저에서는 `autoplay` 특성이 무시될 수 있습니다. 또한 자동 재생 기능은 오용될 경우 논란이 될 수 있습니다. 자동 재생을 현명하게 사용하는 방법을 배우려면 [미디어 및 Web Audio API 자동 재생 가이드](/ko/docs/Web/Media/Autoplay_guide)를 읽어보시기 바랍니다.

자세한 내용은 [\<video> 요소](/ko/docs/Web/HTML/Element/video) 및 [크로스 브라우저 비디오 플레이어 만들기](/ko/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) 문서를 참고하세요.

### JavaScript 오디오

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audiofile.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audiofile.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

브라우저에서 지원하는 오디오 파일 유형에 따라 오디오 소스를 설정한 다음 재생 시간을 5초로 설정하고 재생을 시도합니다.

> [!NOTE]
> 사용자가 시작한 이벤트가 발생하지 않는 한 대부분의 브라우저에서 재생이 무시됩니다.

또한 {{ htmlelement("audio") }} 요소에 base64로 인코딩 된 WAV 파일을 공급하여 즉석에서 오디오를 생성할 수 있습니다.

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/)는 이 기술을 사용합니다.

### JavaScript 비디오

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "videofile.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "videofile.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

브라우저에서 지원하는 동영상 파일 유형에 따라 동영상 소스를 설정한 다음 동영상의 너비와 높이를 설정합니다.

## Web Audio API

이 예제에서는 {{domxref("fetch()")}}를 사용하여 MP3 파일을 검색합니다. API를 사용하여 파일을 불러와 소스에 로드하고 재생합니다.

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // 오디오 파일을 로드합니다
    const response = await fetch("viper.mp3");
    // 디코딩합니다
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

const play = document.getElementById("play");
play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
  play.disabled = true;
});
```

[전체 예제를 라이브로 실행](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/)하거나 [소스 코드로 볼 수](https://github.com/mdn/webaudio-examples/blob/main/decode-audio-data/promise/) 있습니다.

Web Audio API 기본 사항에 대한 자세한 내용은 [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)에서 확인할 수 있습니다.

## getUserMedia / Stream API

`getUserMedia`와 Stream API를 사용하여 웹캠 및(또는) 마이크에서 실시간 스트림을 검색할 수도 있습니다. 이는 WebRTC(웹 실시간 통신)로 알려진 광범위한 기술의 일부를 구성하며 최신 버전의 Chrome, Firefox 및 Opera와 호환됩니다.

웹캠에서 스트림을 가져오려면 먼저 {{htmlelement("video")}} 요소를 설정합니다.

```html
<video id="webcam" width="480" height="360"></video>
```

그런 다음 지원되는 경우 웹캠 소스를 비디오 요소에 연결합니다.

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function onSuccess(stream) {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(function onError() {
      alert(
        "There has been a problem retrieving the streams - are you running on file:/// or did you disallow access?",
      );
    });
} else {
  alert("getUserMedia is not supported in this browser.");
}
```

자세한 내용은 {{domxref("MediaDevices.getUserMedia")}} 페이지를 참고하세요.

## 미디어스트림 녹화

브라우저가 마이크 또는 카메라의 미디어를 `getUserMedia`로 가져온 다음 새로운 MediaStream Recording API를 사용하여 즉시 녹화할 수 있는 새로운 표준이 출시되고 있습니다. `getUserMedia`에서 받은 스트림을 `MediaRecorder` 객체에 전달하고 결과 출력을 가져와 오디오 또는 비디오 소스\*에 공급합니다.

주요 메커니즘은 아래에 설명되어 있습니다.

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function onSuccess(stream) {
    const recorder = new MediaRecorder(stream);

    const data = [];
    recorder.ondataavailable = (e) => {
      data.push(e.data);
    };
    recorder.start();
    recorder.onerror = (e) => {
      throw e.error || new Error(e.name); // e.name은 FF 비사양입니다
    };
    recorder.onstop = (e) => {
      const audio = document.createElement("audio");
      audio.src = window.URL.createObjectURL(new Blob(data));
    };
    setTimeout(() => {
      rec.stop();
    }, 5000);
  })
  .catch(function onError(error) {
    console.log(error.message);
  });
```

자세한 내용은 [MediaStream Recording API](/ko/docs/Web/API/MediaStream_Recording_API)를 참고하세요.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/)은 {{domxref("HTMLMediaElement")}}를 확장하여 JavaScript가 재생용 미디어 스트림을 생성할 수 있도록 허용하는 W3C 작업 초안입니다. JavaScript가 스트림을 생성할 수 있도록 허용하면 적응형 스트리밍과 시간 이동 라이브 스트림 등 다양한 사용 사례가 용이해집니다.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)는 `HTMLMediaElement`를 확장하는 W3C 제안으로, 보호된 콘텐츠의 재생을 제어하기 위한 API를 제공합니다.

이 API는 간단한 클리어 키 복호화부터 고가치 동영상까지 다양한 사용 사례를 지원합니다(적절한 사용자 에이전트 구현이 전제될 경우). 라이선스/키 교환은 애플리케이션에 의해 제어되므로 다양한 콘텐츠 복호화 및 보호 기술을 지원하는 강력한 재생 애플리케이션을 쉽게 개발할 수 있습니다.

EME의 주요 용도 중 하나는 브라우저에서 웹 기반 콘텐츠(특히 동영상)의 복사를 방지하는 데 도움이 되는 DRM([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management))을 구현할 수 있도록 하는 것입니다.

### 적응형 스트리밍

적응형 스트리밍을 용이하게 하기 위해 새로운 형식과 프로토콜이 출시되고 있습니다. 적응형 스트리밍 미디어는 사용자의 사용 가능한 대역폭에 따라 실시간으로 스트림의 대역폭과 화질이 변경될 수 있음을 의미합니다. 적응형 스트리밍은 오디오 또는 비디오의 원활한 전송이 가장 중요한 라이브 스트리밍과 함께 사용되는 경우가 많습니다.

적응형 스트리밍에 사용되는 주요 형식은 [HLS](/ko/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) 및 [MPEG-DASH](/ko/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash)가 있습니다. MSE는 DASH를 고려하여 설계되었습니다. MSE는 [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) 및 [M2TS](https://en.wikipedia.org/wiki/M2ts)에 따라 바이트 스트림을 정의합니다(둘 다 DASH에서 지원되며, 후자는 HLS에서 지원됩니다). 일반적으로 표준에 관심이 있거나 유연성을 원하거나 대부분의 최신 브라우저를 지원하고자 한다면 DASH를 사용하는 것이 더 나을 것입니다.

> [!NOTE]
> OSX Yosemite와 함께 출시될 예정인 최신 버전의 Safari에서 dash.js가 작동할 예정이지만 현재 Safari는 DASH를 지원하지 않습니다.

또한 DASH는 미디어 파일을 사전 처리하거나 분할할 필요가 없는 간단한 온디맨드 프로필을 비롯한 다양한 프로필을 제공합니다. 또한 미디어를 HLS와 DASH 모두로 변환하는 클라우드 기반 서비스도 다수 있습니다.

자세한 내용은 [라이브 스트리밍 웹 오디오 및 비디오](/ko/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video) 문서를 참고하세요.

## 미디어 플레이어 커스텀하기

오디오 또는 비디오 플레이어가 여러 브라우저에서 일관된 모양을 갖기를 원하거나 사이트에 맞게 조정하고 싶을 수 있습니다. 이를 위한 일반적인 방법은 기본 브라우저 컨트롤이 표시되지 않도록 `controls` 특성을 생략하고 HTML 및 CSS를 사용하여 커스텀 컨트롤을 만든 다음 JavaScript를 사용하여 컨트롤을 오디오/비디오 API에 연결하는 것입니다.

추가 기능이 필요한 경우 재생 속도, 품질 스트림 전환 또는 오디오 스펙트럼과 같이 현재 기본 플레이어에 없는 기능을 추가할 수 있습니다. 특정 조건에서 진행률 표시줄을 제거하는 등 플레이어의 반응성을 높이는 방법도 선택할 수 있습니다.

클릭, 터치 및/또는 키보드 이벤트를 감지하여 재생, 일시 정지, 스크러빙과 같은 동작을 트리거할 수 있습니다. 사용자 편의성과 접근성을 위해 키보드 컨트롤을 기억하는 것이 중요한 경우가 많습니다.

간단한 예제 — 먼저 오디오 및 커스텀 컨트롤을 HTML로 설정합니다.

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

약간의 JavaScript를 추가하여 오디오 재생 및 일시 정지 이벤트를 감지할 수 있습니다.

```js
window.onload = () => {
  const myAudio = document.getElementById("my-audio");
  const myControl = document.getElementById("my-control");

  function switchState() {
    if (myAudio.paused) {
      myAudio.play();
      myControl.textContent = "pause";
    } else {
      myAudio.pause();
      myControl.textContent = "play";
    }
  }

  function checkKey(e) {
    if (e.keycode === 32) {
      // 스페이스바
      switchState();
    }
  }

  myControl.addEventListener(
    "click",
    () => {
      switchState();
    },
    false,
  );

  window.addEventListener("keypress", checkKey, false);
};
```

[여기](https://jsbin.com/jujeladu/2/edit)에서 이 예제를 실행해 볼 수 있습니다. 자세한 내용은 [나만의 커스텀 오디오 플레이어 만들기](/ko/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player) 문서를 참고하세요.

## 오디오/비디오를 위한 기타 팁

### 미디어 다운로드 중지하기

미디어 재생을 중지하는 것은 요소의 `pause()` 메서드를 호출하는 것만큼 간단하지만, 브라우저는 가비지 컬렉션을 통해 미디어 요소가 폐기될 때까지 미디어를 계속 다운로드합니다.

다음은 다운로드를 한 번에 중지하는 트릭입니다.

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

미디어 요소의 `src` 특성을 제거하고 load() 메서드를 호출하면 동영상과 관련된 리소스가 해제되어 네트워크 다운로드가 중지됩니다. 특성만 제거하면 로드 알고리즘이 호출되지 않으므로 특성을 제거한 후 `load()`를 호출해야 합니다. 만약 `<video>` 요소에 `<source>` 요소의 하위 요소도 있는 경우, `load()`를 호출하기 전에 해당 요소도 제거해야 합니다.

`src` 특성을 빈 문자열로 설정하면 브라우저는 실제로 동영상 소스를 상대 경로로 설정하는 것처럼 처리합니다. 이에 따라 브라우저는 유효한 동영상이 아닐 가능성이 있는 다른 경로로 다운로드를 시도하게 됩니다.

### 미디어를 통한 탐색(seeking)

미디어 요소는 현재 재생 위치를 미디어 콘텐츠의 특정 시점으로 이동하는 기능을 지원합니다. 이 작업은 `currentTime` 특성 값을 설정하여 수행합니다. 이 특성에 대한 자세한 내용은 {{ domxref("HTMLMediaElement") }}를 참고하세요. 재생을 계속할 시간(초)으로 값을 설정합니다.

요소의 `seekable` 특성을 사용하여 현재 탐색할 수 있는 미디어의 범위를 결정할 수 있습니다. 그러면 탐색할 수 있는 시간 범위가 나열된 {{ domxref("TimeRanges") }} 객체가 반환됩니다.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // 시작 시간(초)을 반환합니다
mediaElement.seekable.end(0); // 종료 시간(초)을 반환합니다
mediaElement.currentTime = 122; // 122초로 이동
mediaElement.played.end(0); // 브라우저가 재생한 시간(초)을 반환합니다
```

### 재생 범위 지정

{{ HTMLElement("audio") }} 또는 {{ HTMLElement("video") }} 요소에 미디어의 URI를 지정할 때 선택적으로 재생할 미디어 부분을 지정하는 추가 정보를 포함할 수 있습니다. 이렇게 하려면 해시 마크("#") 뒤에 미디어 조각 설명을 추가합니다.

시간 범위는 구문을 사용하여 지정합니다.

```plain
#t=[starttime][,endtime]
```

시간은 초 단위(부동 소수점 값)로 지정하거나 콜론으로 구분한 시/분/초 단위(예: 2시간 5분 1초의 경우 2:05:01)로 지정할 수 있습니다.

몇 가지 예제입니다.

- `http://example.com/video.ogv#t=10,20`
  - : 동영상이 10초에서 20초 범위에서 재생되도록 지정합니다.
- `http://example.com/video.ogv#t=,10.5`
  - : 동영상이 처음부터 10.5초까지 재생되도록 지정합니다.
- `http://example.com/video.ogv#t=,02:00:00`
  - : 동영상이 처음부터 2시간까지 재생되도록 지정합니다.
- `http://example.com/video.ogv#t=60`
  - : 동영상이 60초부터 재생을 시작하여 동영상이 끝날 때까지 재생되도록 지정합니다.

## 에러 처리

에러는 소스에 해당하는 하위 {{ HTMLElement("source") }} 요소에 전달되어 오류를 발생시킵니다.

이를 통해 로드에 실패한 소스를 감지할 수 있으므로 유용할 수 있습니다. 이 HTML을 살펴봅시다.

```html
<video>
<source id="mp4_src"
  src="video.mp4"
  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</source>
<source id="3gp_src"
  src="video.3gp"
  type='video/3gpp; codecs="mp4v.20.8, samr"'>
</source>
<source id="ogg_src"
  src="video.ogv"
  type='video/ogv; codecs="theora, vorbis"'>
</source>
</video>
```

특허로 인해 일부 플랫폼에서 MP4 및 3GP를 지원하지 않는 Firefox에서는 Ogg 리소스가 로드되기 전에 ID가 "mp4_src" 및 "3gp_src"인 {{ HTMLElement("source") }} 요소에 `error` 이벤트가 발생합니다. 소스는 순서대로 시도되며, 한 소스가 성공적으로 로드되면 나머지 소스는 시도되지 않습니다.

### 브라우저에서 제공된 형식을 지원하는지 확인합니다

오디오 및 비디오 요소 내에서 다음과 같은 검증된 소스를 사용하여 지원을 확인하세요.

- 오디오 MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3 오디오 라이브 재생](https://jsbin.com/gekatoge/1/edit).)
- 오디오 MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4 오디오 라이브 재생](https://jsbin.com/gekatoge/2/edit).)
- 오디오 Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG 오디오 라이브 재생](https://jsbin.com/gekatoge/4/edit).)
- 비디오 MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4 비디오 라이브 재생](https://jsbin.com/gekatoge/5/edit).)
- 비디오 WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM 비디오 라이브 재생](https://jsbin.com/gekatoge/6/edit).)
- 비디오 Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG 비디오 라이브 재생](https://jsbin.com/gekatoge/7/edit).)

재생되지 않는다면 테스트 중인 브라우저가 해당 형식을 지원하지 않는 것입니다. 다른 형식을 사용하거나 폴백 형식을 사용해 보세요.

이러한 기능은 작동하지만, 제공 중인 파일이 작동하지 않는다면 두 가지 문제가 있을 수 있습니다.

#### 1. 미디어 서버가 파일과 함께 올바른 MIME 유형을 제공하지 않았습니다

일반적으로 지원되지만 미디어 서버의 `.htaccess` 파일에 다음을 추가해야 할 수도 있습니다.

```plain
# AddType TYPE/SUBTYPE EXTENSION

AddType audio/mpeg mp3
AddType audio/mp4 m4a
AddType audio/ogg ogg
AddType audio/ogg oga

AddType video/mp4 mp4
AddType video/mp4 m4v
AddType video/ogg ogv
AddType video/webm webm
AddType video/webm webmv
```

#### 2. 파일이 잘못 인코딩되었습니다

파일이 잘못 인코딩 되었을 수 있습니다. 신뢰할 수 있는 다음의 도구 중 하나를 사용하여 인코딩해 보세요.

- [Audacity](https://sourceforge.net/projects/audacity/) — 무료 오디오 편집기 및 녹음기
- [Miro](https://www.getmiro.com/) — 무료 오픈 소스 음악 및 동영상 플레이어
- [Handbrake](https://handbrake.fr/) — 오픈 소스 비디오 트랜스코더
- [Firefogg](http://www.firefogg.org/) — Firefox용 비디오 및 오디오 인코딩
- [FFmpeg2](https://www.ffmpeg.org/) — 포괄적인 CLI 인코더
- [Libav](https://libav.org/) — 포괄적인 CLI 인코더
- [Vid.ly](https://m.vid.ly/) — 동영상 플레이어, 트랜스코딩 및 전송
- [Internet Archive](https://archive.org/) — 무료 트랜스코딩 및 저장

### 소스가 로드되지 않은 경우 감지하기

모든 하위 {{ HTMLElement("source") }} 요소가 로드되지 않았는지 확인하려면 `networkState` 특성 값을 확인합니다. 이 값이 `HTMLMediaElement.NETWORK_NO_SOURCE`이면 모든 소스를 로드하지 못한 것입니다.

이 시점에서 다른 소스를 추가하면 미디어 요소의 하위 요소로 새 {{ HTMLElement("source") }} 요소를 삽입하여 Gecko가 지정된 리소스를 로드하려고 시도합니다.

### 소스를 디코딩 할 수 없는 경우 폴백 컨텐츠 표시

현재 브라우저에서 소스를 디코딩할 수 없는 경우 동영상의 대체 콘텐츠를 표시하는 또 다른 방법은 마지막 소스 요소에 에러 핸들러를 추가하는 것입니다. 그런 다음 동영상을 폴백 콘텐츠로 대체할 수 있습니다.

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS">
  </a>
  <p>Click image to play a video demo of dynamic app search</p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastsource = sources[sources.length - 1];
lastsource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## 오디오/비디오 JavaScript 라이브러리

수많은 오디오 및 비디오 JavaScript 라이브러리가 존재합니다. 가장 널리 사용되는 라이브러리를 사용하면 모든 브라우저에서 일관된 플레이어 디자인을 선택할 수 있으며 오디오 및 비디오를 기본적으로 지원하지 않는 브라우저에 대한 폴백 기능을 제공할 수 있습니다. 폴백은 과거에는 Adobe Flash 또는 Microsoft Silverlight 플러그인과 같이 지금은 사용되지 않는 플러그인을 사용하여 비지원 브라우저에서 미디어 플레이어를 제공했지만, 최신 컴퓨터에서는 더 이상 지원되지 않습니다. 자막을 위한 [`<track>`](/ko/docs/Web/HTML/Element/track) 요소와 같은 다른 기능도 미디어 라이브러리를 통해 제공할 수 있습니다.

### 오디오 전용

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### 비디오 전용

- [flowplayer](https://flowplayer.com/): flowplayer 로고 워터마크가 포함된 무료입니다. 오픈 소스 (GPL 라이선스)
- [JWPlayer](https://www.jwplayer.com): 다운로드하려면 등록이 필요합니다. 오픈 소스 에디션 (Creative Commons 라이선스)
- [SublimeVideo](https://www.sublimevideo.net/): 등록이 필요합니다. CDN 호스팅 라이브러리에 대한 도메인별 링크가 포함된 양식 기반 설정입니다.
- [Video.js](https://videojs.com/): 무료 및 오픈 소스 (Apache 2 라이선스)

### 오디오와 비디오

- [jPlayer](https://jPlayer.org): 무료 및 오픈 소스 (MIT 라이선스)
- [mediaelement.js](https://www.mediaelementjs.com/): 무료 및 오픈 소스 (MIT 라이선스)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): 이전 버전의 Web Audio API를 위한 폴리필, 오픈 소스 (Apache 2 라이선스)

## Basic tutorials

- [크로스 브라우저 동영상 플레이어 만들기](/ko/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
  - : {{ htmlelement("video") }} 요소를 사용하여 기본적인 크로스 브라우저 동영상 플레이어를 만드는 방법에 대한 안내서입니다.
- [동영상 플레이어 스타일링 기본 사항](/ko/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
  - : 이전 글에서 크로스 브라우저 비디오 플레이어에 대해 설명했으니, 이번 글에서는 플레이어에 기본적인 반응형 스타일링을 제공하는 방법을 살펴봅니다.
- [크로스 브라우저 오디오 기본 사항](/ko/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : 이 문서에서는 모든 관련 특성, 프로퍼티 및 이벤트에 대한 설명과 함께 크로스 브라우저에서 작동하는 HTML 오디오 플레이어를 만드는 기본 가이드와 미디어 API를 사용하여 만든 커스텀 컨트롤에 대한 빠른 가이드를 제공합니다.
- [미디어 버퍼링, 탐색 및 시간 범위](/ko/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : 오디오 또는 비디오 플레이어의 버퍼링 진행률 표시줄이 좋은 예입니다. {{ htmlelement("audio") }} 또는 {{ htmlelement("video") }}가 얼마나 다운로드 되었는지 또는 지연 없이 재생 가능한지 알고 싶을 때가 있습니다. 이 문서에서는 [TimeRanges](/ko/docs/Web/API/TimeRanges) 및 미디어 API의 다른 기능을 사용하여 버퍼/탐색 줄을 구현하는 방법에 관해 설명합니다.
- [HTML 재생 속도(playbackRate) 설명](/ko/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : `playbackRate` 특성을 사용하면 웹 오디오 또는 동영상이 재생되는 속도 또는 비율을 변경할 수 있습니다. 이 문서에서 자세히 설명합니다.
- [Web Audio API 사용](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Web Audio API를 사용하여 오디오 소스를 가져오고, 조작하고, 재생하는 기본 사항을 설명합니다.

## 스트리밍 미디어 튜토리얼

- [웹 오디오 및 비디오 라이브 스트리밍](/ko/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : 라이브 스트리밍 기술은 스포츠, 콘서트 등 라이브 이벤트를 중계하는 데 사용되며, 더 일반적으로는 실시간으로 출력되는 TV 및 라디오 프로그램을 중계하는 데 사용됩니다. 흔히 스트리밍이라고 줄여서 부르는 라이브 스트리밍은 미디어를 컴퓨터와 디바이스로 '실시간으로' 전송하는 프로세스입니다. 이는 많은 변수가 있는 상당히 복잡하고 초기 단계의 주제이므로 이 글에서는 이 주제에 대해 소개하고 어떻게 시작할 수 있는지 알려드리겠습니다.
- [적응형 스트리밍 미디어 소스 설정](/ko/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : HTML 미디어 요소 내에서 소비되도록 서버에 적응형 스트리밍 미디어 소스를 설정하고 싶다고 가정해 보겠습니다. 어떻게 할까요? 이 문서에서는 가장 일반적인 MPEG-DASH와 HLS 두 가지 형식을 살펴보면서 그 방법(HTTP 라이브 스트리밍)을 설명합니다.
- [HTML 5 비디오용 DASH 적응형 스트리밍](/ko/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : DASH 및 WebM을 사용하여 적응형 스트리밍을 설정하는 방법을 자세히 설명합니다.

## 고급 튜토리얼

- [HTML 동영상에 캡션 및 자막(subtitle) 추가하기](/ko/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : 이 문서에서는 [Web_Video_Text_Tracks_Format](/ko/docs/Web/API/WebVTT_API) 및 {{ htmlelement("video") }} 요소를 사용하여 캡션과 자막을 HTML {{ htmlelement("track") }} 요소에 추가하는 방법에 관해 설명합니다.
  - : 크로스 브라우저 Web Audio API 코드 작성법도 설명합니다.
- [MediaRecorder API를 사용한 간편한 오디오 캡처](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : MediaStream Recording API를 사용하여 미디어 스트림을 직접 녹화하는 방법에 대한 기본 사항을 설명합니다.

> [!NOTE]
> Firefox OS 버전 1.3 이상은 스트리밍 동영상 전송을 위한 [RTSP](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol) 프로토콜을 지원합니다. 이전 버전에 대한 폴백 솔루션은 `<video>`와 함께 Gecko에 적합한 형식(예: WebM)을 사용하여 폴백 콘텐츠를 제공하는 것입니다. 이에 대한 자세한 정보는 적절한 시점에 게시될 예정입니다.

## 참고서

- [비디오 요소](/ko/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/ko/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/ko/docs/Web/API/MediaSource)
- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/ko/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/ko/docs/Web/API/MediaDevices/getUserMedia)
- [Event 참고 > Media](/ko/docs/Web/Events#media)
