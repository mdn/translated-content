---
title: "멀티미디어: 비디오"
slug: Learn/Performance/video
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

이전 섹션에서 살펴본 것처럼 미디어, 즉 이미지 및 비디오는 평균 웹사이트 다운로드 바이트의 70%를 차지합니다. 이미지를 최적화하는 방법은 이미 살펴봤습니다. 이 기사는 웹 성능 향상을 위한 동영상 최적화에 대해 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        기본 컴퓨터 활용능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn/Getting_started_with_the_web"
          >클라이언트 사이드 웹 기술들</a
        >의 기본적인 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        성능에 영향을 미치는 다양한 비디오 형식, 그리고 각 브라우저의 파일 형식 지원에 따라 가장 작은 동영상 파일 크기를 제공하면서 전체 페이지 로드 시간에 비디오가 미치는 영향을 줄이는 방법에 대해 학습합니다.
      </td>
    </tr>
  </tbody>
</table>

## 왜 멀티미디어를 최적화 해야할까요?

평균적인 웹사이트는 [비디오에서 25%의 대역폭을 사용합니다](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). 비디오를 최적화하는 것은 대역폭을 크게 아낄 수 있고, 더 나은 웹 성능으로 이어질 수 있습니다.

## 비디오 전송 최적화하기

아래 섹션에서는 다음과 같은 최적화 기법에 대해 설명합니다.

- [모든 비디오를 압축하기](#모든_비디오를_압축하기)
- [`<source>` 순서 최적화](#source_순서_최적화)
- [비디오 자동 재생](#비디오_자동_재생)
- [음 소거된 영웅 비디오에서 소리 제거하기](#음_소거된_영웅_비디오에서_소리_제거하기)
- [비디오 미리 불러오기](#비디오_미리_불러오기)
- [스트리밍 고려하기](#스트리밍_고려하기)

### 모든 비디오를 압축하기

대부분의 비디오 압축은 비디오 내의 인접한 프레임을 비교하여 두 프레임에서 동일한 부분을 의도적으로 제거하는 것입니다. 동영상을 압축하고 WebM, MPEG-4/H.264, Ogg/Theora등 여러 비디오 포맷으로 내보낼 수 있습니다.

비디오 편집 소프트웨어는 파일 크기를 줄일 수 있는 기능이 있을 것입니다. 만약 그렇지 않다면, [FFmpeg](https://www.ffmpeg.org/)같은 (아래 섹션에서 설명됩니다) 인코드, 디코드, 변환 및 다른 최적화 기능들을 수행하는 온라인 도구가 있습니다.

### `<source>` 순서 최적화

비디오 소스의 순서를 작은 것부터 큰 것으로 정렬하세요. 예를 들어, 10MB, 12MB, 13MB의 세 가지 다른 형식의 동영상 압축이 주어지면 가장 작은 것을 먼저 선언하고 가장 큰 것을 마지막으로 선언합니다.

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
  <!-- Ogg/Theora: 13 MB -->
  <source src="video.ogv" type="video/ogv" />
</video>
```

브라우저는 이해할 수 있는 첫 번째 형식을 먼저 다운로드 합니다. 목표는 큰 버전보다 작은 버전을 먼저 제공하는 것입니다. 가장 작은 버전을 사용하면, 압축된 비디오가 여전히 잘 보이는지 확인합니다. 일부 압축 알고리즘은 동영상을 animated GIF처럼 (좋지 않게) 보이게 만들 수 있습니다. 128Kb 비디오는 10MB 다운로드보다 더 나은 사용자 경험을 제공하는 것처럼 보일 수 있지만, 거친 GIF 같은 비디오는 브랜드 또는 프로젝트에 악영향을 끼칠 것입니다.

[CanIUse.com](https://caniuse.com/#search=video)에서 현재 브라우저의 비디오 및 다른 미디어 타입들의 지원을 확인하세요.

### 비디오 자동 재생

반복되는 배경 동영상이 자동 재생되도록 하려면 비디오에 반드시 `autoplay`, `muted` 및 `playsinline` 같은 몇몇 속성들을 추가해야 합니다.

```html
<video
  autoplay=""
  loop=""
  muted="true"
  playsinline=""
  src="backgroundvideo.mp4"></video>
```

`loop` 및 `autoplay`는 비디오를 반복하고 자동재생 하는것에 적합하지만, `muted` 속성은 모바일 브라우저에서 자동재생에 필요한 속성입니다.

`Playsinline`은 모바일 사파리에 필요합니다. 전체화면 모드를 강제하지 않고 비디오를 실행시킬 수 있습니다.

### 음 소거된 영웅 비디오에서 소리 제거하기

영웅 동영상이나 오디오가 없는 동영상의 경우, 오디오를 제거하는것이 현명합니다.

```html
<video autoplay="" loop="" muted="true" playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

위에 있는 영웅 비디오 코드는 컨퍼런스 웹사이트와 기업 홈페이지에서 일반적으로 사용됩니다. 자동 재생, 반복 및 음 소거를 포함하는 비디오 입니다. 제어할 수 있는 인터페이스가 없어서 오디오를 들을 수 있는 방법이 없습니다. 오디오는 종종 비어있지만 여전히 존재합니다. 그리고 대역폭을 사용합니다. 항상 음 소거가 되어있는 비디오에 오디오를 제공할 이유가 없습니다. **오디오를 제거하는것은 20%의 대역폭을 절약할 수 있습니다**

선택한 소프트웨어에 따라, 내보내기 및 압축 중에 오디오를 제거할 수도 있습니다. 그렇지 않다면 무료 유틸리티 [FFmpeg](https://www.ffmpeg.org/) 을 사용할 수 있습니다. 아래 예시는 오디오를 제거하기 위한 일반적인 FFmpeg 명령어입니다.

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### 비디오 미리 불러오기

preload 속성에는 `auto`|`metadata`|`none`라는 3개의 가능한 옵션이 있습니다. 기본 설정은 `metadata`입니다. 이러한 설정들은 페이지를 불러올 때 얼마나 많은 비디오 파일을 다운로드 할지 제어합니다. 인기가 낮은 비디오들의 다운로드를 연기하여 데이터를 절약할 수 있습니다.

`preload="none"`으로 설정하는 것은 재생하기 전까지 비디오를 다운로드 하지 않는 속성입니다. 시작이 지연되기는 하지만, 실행 확률이 낮은 비디오의 경우 상당한 양의 데이터를 절약할 수 있습니다.

대역폭을 조금 더 절약할 수 있는 `preload="metadata"`로 설정하는것은 페이지를 불러올 때 비디오의 3%까지만 다운로드 할 수 있습니다. 이 옵션은 작거나 일반 크기의 일부 파일들에 유용합니다.

설정을 `auto`로 바꾸는 것은 브라우저가 자동으로 전체 비디오를 다운로드하게 합니다. 재생이 매우 자주 일어날 것 같을 때 사용하세요. 그렇지 않으면 대역폭을 많이 낭비하게 됩니다.

### 스트리밍 고려하기

[비디오 스트리밍을 사용하면 적절한 비디오 크기와 대역폭을](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (네트워크 속도에 기반해서) 최종 사용자에게 전달할 수 있습니다. 반응형 이미지와 비슷하게, 올바른 크기의 비디오가 브라우저에 전달되고 빠른 시작, 낮은 버퍼링 및 최적화된 재생을 보장해 줍니다.

## 결론

비디오를 최적화하는 것은 웹 성능을 상당히 개선할 수 있는 잠재력을 가지고 있습니다. 비디오 파일들은 상대적으로 다른 웹사이트 파일에 비해 용량이 커서 항상 주의가 필요합니다. 이 기사는 파일 크기를 줄이고, (HTML) 다운로드 설정 및 스트리밍을 통해서 어떻게 웹사이트 비디오를 최적화할 수 있는지 설명합니다.

{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}
