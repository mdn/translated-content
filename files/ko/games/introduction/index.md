---
title: 웹 게임 개발에 대해
slug: Games/Introduction
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

현대의 웹은 뛰어나고 고품질의 게임을 만들 뿐 만 아니라 이 게임들을 배급 하는 플랫폼으로 성장하였습니다.

제작되는 게임의 범위는 데스크탑이나 기본OS용 게임들에도 필적합니다다. 현대의 웹 기술과 최신 브라우저로 최고 사양의 웹 게임을 만드는게 가능해졌습니다. 우리는 예전에 Flash® 가지고 하던 가벼운 카드 게임이나 멀티플레이 소셜 게임을 말하는 게 아닙니다. 끝내주는 고사양의 3D 액션 슈팅 게임, RPG 게임, 그 이상을 말하는 것이죠. 자바 스크립트의 실시간 컴파일러 기술과 새로운 API의 대대적인 퍼포먼스 개선으로 이런게 가능해졌습니다. 브라우저로 (또는 HTML5를 사용하는 장비에서, 예시로 파이어폭스 OS로 운영되는 장치에서 ) 운영되는 게임을 제작할 수 있게 되었습니다.

## HTML5 게임 플랫폼

우리는 웹을 우리의 게임에 더 좋은 타깃 플레폼이라고 생각합니다. 우리가 앞서 얘기했듯이 "웹이 곧 플랫폼이다." 라고 할 수 있죠. 아래의 웹 플랫폼의 핵심을 살펴보도록 합시다:

| 기능                      | 기술                                                                                                                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio (오디오)**        | [Web Audio API](/ko/docs/Web_Audio_API)                                                                                                                                                                                                              |
| **Graphics (그래픽)**     | [WebGL](/ko/docs/WebGL) ([OpenGL ES](http://www.khronos.org/opengles/) 2.0)                                                                                                                                                                          |
| **Input (입력)**          | [Touch events](/ko/docs/DOM/Touch_events), [Gamepad API](/ko/docs/API/Gamepad/Using_Gamepad_API), device sensors, [WebRTC](/ko/docs/WebRTC), [Full Screen API](/ko/docs/DOM/Using_fullscreen_mode), [Pointer Lock API](/ko/docs/WebAPI/Pointer_Lock) |
| **Language (언어)**       | [JavaScript](/ko/docs/JavaScript) (or C/C++ using [Emscripten](https://github.com/kripken/emscripten/wiki) to compile to JavaScript)                                                                                                                 |
| **Networking (네트워킹)** | [WebRTC](/ko/docs/WebRTC) and/or [WebSockets](/ko/docs/WebSockets)                                                                                                                                                                                   |
| **Storage (저장공간)**    | [IndexedDB](/ko/docs/IndexedDB) or the "cloud"                                                                                                                                                                                                       |
| **Web (웹)**              | [HTML](/ko/docs/HTML), [CSS](/ko/docs/CSS), [SVG](/ko/docs/SVG), [Social API](/ko/docs/Social_API) (and much more!)                                                                                                                                  |

## 비즈니스 예시

개인이든 대형 게임 제작사든 게임 개발자라면, 당신의 다음 게임 개발 프로젝트로 왜 웹을 타킷으로 설정해야 하는지 알고 싶을 것입니다. 웹이 어떻게 당신에게 도움이 될 수 있는지 알아봅시다:

1. 웹의 범위는 방대하죠. 어디에든 있습니다. HTML5로 만들어진 게임은 스마트폰, 태블릿, PC, 심지어 스마트 TV에서도 작동합니다.
2. 마케팅과 검색 가능성이 향상되었습니다. 다른 앱 스토어에만 국한되지 않고 어느 곳에서나 당신의 앱을 홍보할 수 있습니다. 웹 고유 특성인 링크와 공유 덕분에 새로운 고객에게 전세계 웹은 물론 다른 미디어에서도 광고나 홍보가 가능합니다.
3. 가장 중요한것을 당신이 관리 할 수 있습니다: 바로 결제 시스템 입니다 . 당신의 게임이 다른 이의 앱 생태계에 들어있다는 이유만으로 수익의 30%를 넘겨주지 않아도 됩니다. 대신, 당신이 원하는 만큼 가격을 책정하고 원하는 결제 방식을 사용할 수 있죠.
4. 당신이 관리 할 수 있는 더 중요한 부분이 있습니다. 당신이 원할 때 게임을 업데이트할 수 있다는 것입니다. 다른 회사의 누군가가 버그 수정을 오늘 올릴지, 내일 올릴지 결정하는 것을 숨 막히게 기다리지 않아도 됩니다.
5. 게임에 대한 분석을 관리할 수 있다. 당신이 필요한 분석 자료에 대해 다른 누군가에게 의존하지 않아도 된다. 매출이나 게임의 영향력에 대한 정보를 모으기 위해 당신 스스로 분석 자료를 수집하거나 선호하는 서드파티를 선택할 수 있다.
6. 고객 관계를 보다 면밀하게 관리 할 수 있습니다. 고객 피드백을 앱 스토어의 제한된 방식을 통해 받지 않아도 됩니다. 중매인이 없이 원하는 방식으로 고객과 소통하십시오. \[주의: 현재 번역이 완벽하지 않습니다]
7. 게임 플레이어들이 어디서든, 언제든지 당신의 게임을 할 수 있다. 웹이 보편적이기 때문에, 당신의 고객들은 그들의 게임 현황을 폰에서든, 타플렛에서든, 랩탑에서든, 업무용 데스크탑에서든, 혹은 어디서든 확인할 수 있다.

## 게임 개발자들을 위한 웹 기술

게임개발을 하는 우리의 개발자 친구들을 위해 게임을 실현케 하는 몇가지 API들을 알아봅시다. 여기에 웹으로 할 수 있는 간략한 리스트를 보여드리겠습니다:

- [Full Screen API](/ko/docs/DOM/Using_fullscreen_mode)
  - : 이 간단한 API는 당신의 게임이 스크린 전체를 차지하도록 하여 플레이어가 집중하도록 도와줍니다.
- [Gamepad API](/ko/docs/API/Gamepad/Using_Gamepad_API)
  - : 당신 게임의 유저가 게임패드를 사용 가능하기를 원한다면, 아니면 다른 게임 컨트롤러를 게임에 적용시키고자 한다면 이 API가 필요할 것 입니다.
- [HTML](/ko/docs/HTML) and [CSS](/ko/docs/CSS)
  - : 이 두 기술이 게임 개발, 스타일, 레이아웃, 유저 인터페이스를 가능하게 할것입니다. HTML중 {{HTMLElement("canvas")}} 부분은 2D 그래픽을 가능하게 하는 방법중 하나입니다.
- [HTML audio](/ko/docs/HTML/Element/audio)
  - : {{HTMLElement("audio")}} 는 쉽게 간단한 음향 효과나 음악을 가능하게 해줍니다. 이보다 더 한 음향 효과를 필요로 한다면 제대로된 오디오 프로세싱 파워를 가진 [Web Audio API](/ko/docs/Web_Audio_API) 를 확인해 보세요!
- [IndexedDB](/ko/docs/IndexedDB)
  - : 사용자 데이터를 사용자 기기에 저장시키는 강력한 데이터 저장 API 입니다. 로컬데이터로 저장하여 매번 다운로드 받을 필요 없이 게임 state와 다른 정보들 필요할 때 마다 저장 할 수 있습니다. 또한 당신의 게임이 오프라인 상에서도 실행이 가능하도록 하는데 도움이 됩니다. ( 유저가 비행모드 일 때 등등 말이죠)
- [JavaScript](/ko/docs/JavaScript)
  - : 자바스크립트, 웹 개발에 사용되는 언어, 이는 최신 브라우저에서 아주 빠르고 매번 더욱 빨라지고 있습니다. 이 강력한 언어를 당신의 게임을 위해 사용 해보시고, 현재 이미 만들어진 게임에 [Emscripten](https://github.com/kripken/emscripten/wiki) 혹은 [Asm.js](http://asmjs.org/spec/latest/) 과같은 기술들을 사용해보세요.
- [Pointer Lock API](/ko/docs/WebAPI/Pointer_Lock)
  - : The Pointer Lock API lets you lock the mouse or other pointing device within your game's interface so that instead of absolute cursor positioning you receive coordinate deltas that give you more precise measurements of what the user is doing, and prevent the user from accidentally sending their input somewhere else, thereby missing important action.
- [SVG](/ko/docs/SVG) (Scalable Vector Graphics)
  - : Lets you build vector graphics that scale smoothly regardless of the size or resolution of the user's display.
- [Typed Arrays](/ko/docs/JavaScript/Typed_arrays)
  - : JavaScript typed arrays give you access to raw binary data from within JavaScript; this lets you manipulate GL textures, game data, or anything else, even if it's not in a native JavaScript format.
- [Web Audio API](/ko/docs/Web_Audio_API)
  - : This API for controlling the playback, synthesis, and manipulation of audio from JavaScript code lets you create awesome sound effects as well as play and manipulate music in real time.
- [WebGL](/ko/docs/WebGL)
  - : Lets you create high-performance, hardware-accelerated 3D (and 2D) graphics from Web content. This is a Web-supported implementation of [OpenGL ES](http://www.khronos.org/opengles/) 2.0.
- [WebRTC](/ko/docs/WebRTC)
  - : The WebRTC (Real-Time Communications) API gives you the power to control audio and video data, including teleconferencing and transmitting other application data back and forth between two users. Want your players to be able to talk to each other while blowing up monsters? This is the API for you.
- [WebSockets](/ko/docs/WebSockets)
  - : The WebSocket API lets you connect your app or site to a server to transmit data back and forth in real-time. Perfect for multiplayer gaming action, chat services, and so forth.
- [Web Workers](/ko/docs/DOM/Using_web_workers)
  - : Workers give you the ability to spawn background threads running their own JavaScript code, to take advantage of modern, multi-core processors.
- [XMLHttpRequest](/ko/docs/DOM/XMLHttpRequest) and [File API](/ko/docs/DOM/File_API)
  - : The combination of XMLHttpRequest and the File API lets you send and receive any kind of data you want (don't let the "XML" throw you!) from a Web server. This is a great way to do anything from downloading new game levels and artwork to transmitting non-real-time game status information back and forth.
