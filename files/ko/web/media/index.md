---
title: 웹 미디어 기술
slug: Web/Media
l10n:
  sourceCommit: 6bff95b8adb7ecb18660320721433525a26360d1
---

{{QuickLinksWithSubpages("/ko/docs/Web/Media")}}

수 년에 걸쳐 오디오, 비디오 및 기타 미디어를 표시, 생성 및 관리하는 웹의 능력은 증가하는 속도로 성장했습니다. 오늘날 HTML 요소, DOM 인터페이스 및 다른 기능들이 이러한 작업을 수행할 수 있을 뿐만 아니라 미디어를 다른 기술과 함께 사용하여 정말 놀라운 일을 수행할 수 있도록 하는 수많은 API가 있습니다. 이 문서에서는 다양한 API를 마스터하는 데 도움이 될 수 있는 문서 링크가 나열되어 있습니다.

## 참조

### HTML

이 문서에서는 미디어 개발자를 위한 HTML 기능을 다룹니다.

- {{HTMLElement("audio")}}
  - : `<audio>` 요소는 웹 환경에서 오디오를 재생하는 데 사용됩니다. 이는 보다 복잡한 미디어의 대상으로 보이지 않게 사용하거나 오디오 파일의 사용자 제어 재생을 위한 보이는 컨트롤과 함께 사용할 수 있습니다. JavaScript에서 {{domxref("HTMLAudioElement")}} 객체로 접근할 수 있습니다.
- {{HTMLElement("video")}}
  - : `<video>` 요소는 웹 환경에서 비디오 콘텐츠의 엔드포인트입니다. 비디오 파일을 표시하거나 스트리밍 비디오 콘텐츠의 대상으로 사용할 수 있습니다. `<video>`는 예를 들어 {{HTMLElement("canvas")}}(프레임 잡기 및 조작용)를 비롯한 다른 HTML 및 DOM 기술과 미디어 API를 연결하는 방법으로도 사용할 수 있습니다. JavaScript에서 {{domxref("HTMLVideoElement")}} 객체로 접근할 수 있습니다.
- {{HTMLElement("track")}}
  - : HTML `<track>` 요소는 {{HTMLElement("audio")}} 또는 {{HTMLElement("video")}} 요소 내에 배치되어 미디어를 재생할 때 사용할 [WebVTT](/ko/docs/Web/API/WebVTT_API) 형식 자막 또는 캡션(caption) 트랙에 대한 참조를 제공할 수 있습니다. JavaScript에서 {{domxref("HTMLTrackElement")}} 객체로 접근할 수 있습니다.
- {{HTMLElement("source")}}
  - : HTML `<source>` 요소는 {{HTMLElement("audio")}} 또는 {{HTMLElement("video")}} 요소 내에서 표시할 소스 미디어를 지정하는 데 사용됩니다. 여러 소스를 사용하여 다양한 형식, 크기 또는 해상도로 미디어를 제공할 수 있습니다. JavaScript에서 {{domxref("HTMLSourceElement")}} 객체로 접근할 수 있습니다.

### API

- [미디어 기능 API](/ko/docs/Web/API/Media_Capabilities_API)
  - : 미디어 기능 API를 사용하면 앱 또는 사이트가 실행 중인 기기의 인코딩 및 디코딩 기능을 결정할 수 있습니다. 이를 통해 어떤 형식을 언제 사용할지 실시간으로 결정할 수 있습니다.
- [미디어 캡쳐 및 스트림 API](/ko/docs/Web/API/Media_Capture_and_Streams_API)
  - : 로컬 및 네트워크에서 미디어를 스트리밍, 기록 및 조작할 수 있도록 하는 API에 대한 참조입니다. 여기에는 로컬 카메라와 마이크를 사용하여 비디오, 오디오 및 정지 이미지를 캡처하는 것이 포함됩니다.
- [미디어 세션 API](/ko/docs/Web/API/Media_Session_API)
  - : 미디어 세션 API는 미디어 알림을 사용자 지정하는 방법을 제공합니다. 웹 앱이 재생중인 미디어에 대해 사용자 에이전트가 표시할 메타데이터를 제공하여 이를 수행합니다. 또한 브라우저가 키보드, 헤드셋, 원격 제어에 있는 하드웨어 키, 알림 영역 및 모바일 잠금 화면에 있는 소프트웨어 키와 같은 플랫폼 미디어 키에 접근하는 데 사용할 수 있는 작업 핸들러를 제공합니다.
- [미디어 스트림 녹화 API](/ko/docs/Web/API/MediaStream_Recording_API)
  - : 미디어 스트림 녹화 API를 사용하면 미디어 스트림을 캡처하여 데이터를 처리 또는 필터링하거나 디스크에 기록할 수 있습니다.
- [웹 오디오 API](/ko/docs/Web/API/Web_Audio_API)
  - : 웹 오디오 API를 사용하면 실시간 및 미리 녹음된 자료에서 사운드 데이터를 생성, 필터링 및 조작한 다음 해당 `<audio>` 요소, 미디어 스트림 또는 디스크와 같은 대상으로 보낼 수 있습니다.
- [WebRTC](/ko/docs/Web/API/WebRTC_API)
  - : WebRTC(Web Real-Time Communication)를 사용하면 중개자 없이 인터넷을 통해 두 피어 간에 라이브 오디오 및 비디오를 스트리밍하고 임의의 데이터를 전송할 수 있습니다.

## 안내서

- [HTML에서 오디오 및 비디오 사용하기](/ko/docs/Web/Media/HTML_media)
  - : `<audio>` 및 `<video>` 요소 사용에 대한 안내서입니다.
- [접근 가능한 멀티미디어](/ko/docs/Learn/Accessibility/Multimedia)
  - : 이 안내서에서는 웹 디자이너와 개발자가 서로 다른 능력을 가진 사람들이 접근할 수 있는 콘텐츠를 만드는 방법을 다룹니다. {{HTMLElement("img")}} 요소에 [`alt`](/ko/docs/Web/HTML/Element/img#alt) 속성을 사용하는 것부터 캡션, 스크린 리더용 미디어 태깅에 이르기까지 다양합니다.
- [웹상의 미디어 유형 및 형식 안내서](/ko/docs/Web/Media/Formats)
  - : 웹에서 이미지, 오디오 및 비디오 미디어에 사용할 수 있는 파일 형식 및 코덱에 대한 안내서입니다. 여기에는 어떤 종류의 콘텐츠에 사용할 형식에 대한 권장 사항, 대체 제공(fallback) 방법 및 미디어 유형의 우선 순위 지정 방법을 포함한 모범 사례가 포함되며 각 미디어 컨테이너 및 코덱에 대한 일부 브라우저 지원 정보도 포함됩니다.
- [스트리밍 오디오 및 비디오](/ko/docs/Web/Media/Streaming)
  - : 오디오 및 비디오를 스트리밍하는 방법과 스트리밍의 최상의 품질 및(또는) 성능을 보장하기 위해 활용할 수 있는 기술을 다룹니다.
- [미디어 및 웹 오디오 API용 자동 재생 가이드](/ko/docs/Web/Media/Autoplay_guide)
  - : 미디어 또는 오디오의 예기치 않은 자동 재생은 사용자에게 좋지않은 경험을 줄 수 있습니다. 자동 재생은 사용하는 목적이 있더라도, 신중하게 사용해야 합니다. 사용자가 이를 제어할 수 있도록 현재 많은 브라우저에서 자동 재생 차단 형식을 제공합니다. 이 문서는 자동 재생에 대한 안내서이며 자동 재생을 사용하는 시기와 방법, 자동 재생 차단을 정상적으로 처리하기 위해 브라우저에서 작업하는 방법에 대한 팁이 포함되어 있습니다.
- [웹 오디오 공간화 기본](/ko/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : 화면에 렌더링된 3D 장면이거나 헤드셋을 사용하여 경험하는 가상현실 3D 환경에서는 소스 방향에서 나오는 것처럼 들리도록 오디오를 수행하는 것이 중요합니다. 이 안내서에서는 이를 수행하는 방법을 다룹니다.

## 다른 주제

흥미로운 방식으로 미디어 API와 함께 사용할 수 있으므로 관심이 있을 수 있는 관련 항목입니다.

- [Canvas API](/ko/docs/Web/API/Canvas_API)
  - : Canvas API를 사용하면 {{HTMLElement("canvas")}}에 그림을 그려 이미지 내용을 조작하고 변경할 수 있습니다. 비디오 프레임을 캡처하고 조작할 수 있도록 `<canvas>` 요소를 비디오 재생 또는 카메라 캡처의 대상으로 설정하는 등 다양한 방법으로 미디어와 함께 사용할 수 있습니다.
- [WebGL](/ko/docs/Web/API/WebGL_API)
  - : WebGL은 기존 Canvas API 위에 OpenGL ES 호환 API를 제공하여 웹에서 강력한 3D 그래픽을 할 수 있도록 합니다. 캔버스를 통해 미디어 콘텐츠에 3D 이미지를 추가하는 데 사용할 수 있습니다.
- [WebXR](/ko/docs/Web/API/WebXR_Device_API)
  - : 현재 사용되지 않는 WebVR API를 대체하는 WebXR은 가상 현실(VR) 및 증강 현실(AR) 콘텐츠 제작을 지원하는 기술입니다. 혼합된 현실 콘텐츠를 장치 화면에 표시하거나 고글 또는 헤드셋을 사용하여 표시할 수 있습니다.
- [WebVR](/ko/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Web Virtual Reality API는 Oculus Rift 또는 HTC Vive와 같은 가상 현실(VR) 장치를 지원하므로 개발자가 사용자의 위치와 움직임을 장치에 표시하는 3D 장면 내에서 움직임으로 변환할 수 있습니다. WebVR은 WebXR로 대체되었으며 곧 브라우저에서 제거될 예정입니다.
