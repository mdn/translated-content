---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Speech API")}}

**Web Speech API**를 사용하면 음성 데이터를 웹 앱에 통합할 수 있습니다. Web Speech API는 두 부분으로 구성됩니다. `SpeechSynthesis` (텍스트 음성 변환) 및 `SpeechRecognition` (비동기 음성 인식)입니다.

## Web Speech API의 개념과 사용법

Web Speech API를 사용하면 웹 앱에서 음성 데이터를 처리할 수 있습니다. 이 API에는 두 가지 구성 요소가 있습니다.

- 음성인식은 음성 입력(일반적으로 장치의 기본 음성 인식 서비스를 통해)에서 음성 맥락을 인식하고 적절하게 응답하는 기능을 제공하는 {{domxref("SpeechRecognition")}} 인터페이스를 통해 접근합니다. 일반적으로 인터페이스의 생성자를 사용하여 장치의 마이크를 통해 음성이 입력될 때, 이를 감지하는 데 사용할 수 있는 여러 이벤트 핸들러가 있는 새 {{domxref("SpeechRecognition")}} 객체를 생성합니다. {{domxref("SpeechGrammar")}} 인터페이스는 앱이 인식해야 하는 특정 문법 집합을 위한 컨테이너를 나타냅니다. 문법은 [JSpeech 문법 형식](https://www.w3.org/TR/jsgf/)(**JSGF**)을 사용하여 정의됩니다.
- 음성 합성은 프로그램이 (일반적으로 장치의 기본 음성 합성기를 통해) 텍스트 콘텐츠를 읽을 수 있게 해주는 텍스트 음성 변환 컴포넌트인 {{domxref("SpeechSynthesis")}} 인터페이스를 통해 접근합니다. 다양한 음성 유형은 {{domxref("SpeechSynthesisVoice")}} 객체로 표현되고, 말하고자 하는 텍스트의 다른 부분은 {{domxref("SpeechSynthesisUtterance")}} 객체로 표현됩니다. 이러한 객체를 {{domxref("SpeechSynthesis.speak()")}} 메서드에 전달하여 음성을 가져올 수 있습니다.

이러한 기능 사용에 대한 자세한 내용은 [Web Speech API 사용하기](/ko/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) 문서를 참조하세요.

## Web Speech API 인터페이스

### 음성 인식(Speech recognition)

- {{domxref("SpeechRecognition")}}
  - : 인식 서비스를 위한 컨트롤러 인터페이스로, 인식 서비스에서 전송된 {{domxref("SpeechRecognitionEvent")}}도 처리합니다.
- {{domxref("SpeechRecognitionAlternative")}}
  - : 음성 인식 서비스에서 인식한 단일 단어를 나타냅니다.
- {{domxref("SpeechRecognitionErrorEvent")}}
  - : 인식 서비스의 오류 메시지를 표시합니다.
- {{domxref("SpeechRecognitionEvent")}}
  - : {{domxref("SpeechRecognition.result_event", "result")}} 및 {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} 이벤트에 대한 이벤트 객체로, 중간 또는 최종 음성 인식 결과와 관련된 모든 데이터를 포함합니다.
- {{domxref("SpeechGrammar")}}
  - : 인식 서비스에서 인식하기를 원하는 단어 또는 단어 패턴입니다.
- {{domxref("SpeechGrammarList")}}
  - : {{domxref("SpeechGrammar")}} 객체 목록을 나타냅니다.
- {{domxref("SpeechRecognitionResult")}}
  - : 단일 인식 일치를 나타내며, 여러 개의 {{domxref("SpeechRecognitionAlternative")}} 객체를 포함할 수 있습니다.
- {{domxref("SpeechRecognitionResultList")}}
  - : {{domxref("SpeechRecognition.continuous","continuous")}} 모드에서 결과를 캡처하는 경우, {{domxref("SpeechRecognitionResult")}} 객체 목록 또는 단일 객체를 나타냅니다.

### 음성 합성(Speech synthesis)

- {{domxref("SpeechSynthesis")}}
  - : 음성 서비스를 위한 컨트롤러 인터페이스로, 기기에서 사용할 수 있는 합성 음성에 대한 정보를 검색하고, 음성을 시작 및 일시 중지하고, 기타 명령을 내리는 데 사용할 수 있습니다.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : 음성 서비스에서 {{domxref("SpeechSynthesisUtterance")}} 객체를 처리하는 동안 발생하는 오류에 대한 정보가 들어있습니다.
- {{domxref("SpeechSynthesisEvent")}}
  - : 음성 서비스에서 처리된 {{domxref("SpeechSynthesisUtterance")}} 객체의 현재 상태에 대한 정보가 들어 있습니다.
- {{domxref("SpeechSynthesisUtterance")}}
  - : 음성 요청을 나타냅니다. 여기에는 음성 서비스가 읽어야 하는 콘텐츠와 읽기 방법에 대한 정보(e.g. 언어, 높낮이, 음량 등)가 포함됩니다.
- {{domxref("SpeechSynthesisVoice")}}
  - : 시스템이 지원하는 음성을 나타냅니다. 모든 `SpeechSynthesisVoice`에는 언어, 이름 및 URI에 대한 정보를 포함한 고유한 상대 음성 서비스가 있습니다.
- {{domxref("Window.speechSynthesis")}}
  - : `SpeechSynthesisGetter`라는 `[NoInterfaceObject]` 인터페이스의 일부로 지정되고 `Window` 객체에 의해 구현되는 `speechSynthesis` 속성은 음성 합성 컨트롤러에 대한 접근을 제공하므로 음성 합성 기능의 진입점이 됩니다.

## 에러

Speech API에는 보고되는 오류(예를 들면, `"language-not-supported"` 및 `"language-unavailable"`)에 대한 자세한 대용은 다음 문서를 참조하세요.

- [`SpeechRecognitionErrorEvent` 객체의 `error` 속성](/ko/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`SpeechSynthesisErrorEvent` 객체의 `error` 속성](/ko/docs/Web/API/SpeechSynthesisErrorEvent/error)

## 예제

Github의 [Web Speech API 예제](https://github.com/mdn/dom-examples/tree/main/web-speech-api)에는 음성 인식 및 합성을 설명하는 데모가 포함되어 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Speech API 사용하기](/ko/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint 글](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks 글](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
