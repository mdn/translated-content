---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: 26aaa0b6f92933d915563b1d1210cc46f4ec0e09
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

**Document Picture-in-Picture API**를 사용하면 임의의 HTML 컨텐츠로 채울 수 있는 항상 최상위 창을 열 수 있습니다. 예를 들어 사용자 정의 컨트롤이 가능한 비디오 또는 화상 회의 참가자를 보여주는 스트림 집합을 의미합니다. 이 기능은 이전의 [`<video>`를 위한 Picture-in-Picture API](/ko/docs/Web/API/Picture-in-Picture_API) 기능을 확장한 것으로, 특히 HTML {{htmlelement("video")}} 요소를 항상 최상위 창에 배치할 수 있도록 합니다.

## 개념과 사용법

애플리케이션이 실행중인 메인 창 외에 추가적으로 웹 애플리케이션이 사용가능한 별도의 창이 있는 것이 종종 유용합니다. 특정 애플리케이션 콘텐츠를 화면에 표시한 상태로 다른 창을 탐색하고 싶을 수도 있고, 해당 콘텐츠에 전용 공간을 할당하면서 메인 애플리케이션 창은 다른 콘텐츠를 표시할 수 있도록 비워두고 싶을 수도 있습니다. 일반적인 새 브라우저 창을 열어서 해결할 수도 있지만, 이 방법에는 두 가지 주요 문제가 있습니다.

1. 두 창 사이의 상태 정보 공유를 처리해야 합니다.
2. 추가 애플리케이션 창이 항상 최상위에 고정되어 있지 않아 다른 창에 가려질 수 있습니다.

이러한 문제를 해결하기 위해, 웹 브라우저에서는 애플리케이션들이 동일한 세션의 일부로 항상 최상위 창을 생성할 수 있는 API를 도입했습니다. 최초로 인정된 사용 사례는 별도의 창에서 동영상 콘텐츠를 재생하여 사용자가 다른 콘텐츠를 보면서도 계속해서 동영상을 시청할 수 있도록 하는 것이었습니다. 이는 [`<video>`를 위한 Picture-in-Picture API](/ko/docs/Web/API/Picture-in-Picture_API)를 사용해서 처리되며, {{htmlelement("video")}} 요소에 직접 적용되어 별도의 창에 배치됩니다.

그러나, 이 API는 다소 제한적이라는 것을 발견했습니다. 항상 최상위 창에는 하나의 `<video>` 요소만을 둘 수 있고, 브라우저에서 제공하는 컨트롤이 최소한으로만 제공됩니다. 더 많은 유연성을 제공하기 위해서, **Document Picture-in-Picture API**가 도입되었습니다. 이는 다음과 같은 더 넓은 범위의 사용 사례를 위해 항상 최상위 창에 어떤 컨텐츠든 배치할 수 있게 합니다.

- 사용자 정의 컨트롤과 스타일을 적용한 하나 이상의 동영상을 항상 최상위에 표시하는 사용자 정의 동영상 플레이어.
- 사용자가 항상 상대방의 스트림을 볼 수 있고, 추가로 발표 내용 제어, 음소거, 통화 종료 등의 컨트롤을 제공하는 비디오 화상 회의 시스템.
- 타이머, 메모, 할 일 목록, 메신저 도구 등 항상 표시되는 생산성 도구.
- 메인 애플리케이션 창을 깔끔하게 유지하면서 추가 콘텐츠를 보관할 수 있는 분리된 창. 예를 들어, 액션 또는 롤플레잉 게임을 실행 중일 때 게임 컨트롤, 지침 또는 배경 이야기를 추가 창에 표시하고 메인 창은 게임 위치와 지도를 표시하는 데 사용할 수 있습니다.

### 이것이 어떻게 동작하나요?

현재 문서 맥락에 대한 항상 최상위 Picture-in-Picture 창을 나타내는 새로운 {{domxref("DocumentPictureInPicture")}} 객체 인스턴스는 {{domxref("Window.documentPictureInPicture")}}를 통해 사용할 수 있습니다. Picture-in-Picture 창은 {{domxref("DocumentPictureInPicture.requestWindow()")}} 메서드에 의해서 호출되어 열리고, 창 자체의 {{domxref("Window")}} 객체로 채워진 {{jsxref("Promise")}}를 반환합니다.

Picture-in-Picture 창은 {{domxref("Window.open()")}}를 통해 열리는 동일 출처의 빈 창과 유사하지만, 몇가지 차이점이 있습니다.

- Picture-in-Picture 창은 다른 창들의 위에 떠 있습니다.
- Picture-in-Picture 창은 열려있는 창보다 오래 지속되지 않습니다.
- Picture-in-Picture 창은 탐색할 수 없습니다.
- Picture-in-Picture 창 위치는 웹 사이트에서 설정할 수 없습니다.
- Picture-in-Picture 창은 브라우저 탭당 하나로 제한돼 있으며, 사용자 에이전트가 전역적으로 열 수 있는 Picture-in-Picture 창 수를 잠재적으로 더 제한할 수 있습니다.

그 외에도, Picture-in-Picture 창의 `Window` 객체를 원하는대로 조작할 수 있습니다. 예를 들어 추가된 컨텐츠를 표시하고자 하는 콘텐츠를 해당 DOM에 추가하고, 스타일시트를 복사하여 추가된 콘텐츠가 메인 창에 있을 때와 동일한 방식으로 스타일링되도록 합니다.
Picture-in-Picture 창을 닫을수도 있습니다. (브라우저에서 제공하는 컨트롤을 클릭하거나, {{domxref("Window.close()")}}를 실행하여서), 그런 다음 표준 [`pagehide`](/ko/docs/Web/API/Window/pagehide_event)를 사용해서 창이 닫히는 것에 반응할 수 있습니다. 창이 닫히면, 해당 컨텐츠를 다시 메인 애플리케이션 창에 다시 표시되도록 해야합니다.

자세한 사용 안내서는 [Picture-in-Picture API 사용 문서](/ko/docs/Web/API/Document_Picture-in-Picture_API/Using)에서 확인할 수 있습니다.

## 인터페이스

- {{domxref("DocumentPictureInPicture")}}
  - : 문서의 Picture-in-Picture 창을 만들고 조작하기 위한 진입점.
- {{domxref("DocumentPictureInPictureEvent")}}
  - : {{domxref("DocumentPictureInPicture/enter_event", "enter")}} 이벤트를 위한 이벤트 객체로, Picture-in-Picture창이 열릴 때 실행됩니다.

## 다른 인터페이스를 위한 확장

- {{domxref("Window.documentPictureInPicture")}}
  - : 현재 문서 맥락에 대한 {{domxref("DocumentPictureInPicture")}} 객체의 참조를 반환합니다.

## CSS 추가 사항

- {{cssxref("@media/display-mode", "display-mode")}}, `picture-in-picture` 값
  - : 개발자가 Picture-in-Picture 모드로 표시되는지 여부에 따라 문서에 CSS를 적용할 수 있도록 하는 [CSS](/ko/docs/Web/CSS) [media 기능](/ko/docs/Web/CSS/@media#media_features) 값.

## 예시

전체 동작 데모를 [Document Picture-in-Picture API 예시](https://mdn.github.io/dom-examples/document-picture-in-picture/)에서 확인할 수 있습니다. (전체 [소스 코드](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) 또한 확인할 수 있습니다).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
