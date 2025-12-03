---
title: 사용자 활성화로 제어되는 기능
slug: Web/Security/Defenses/User_activation
original_slug: Web/Security/User_activation
l10n:
  sourceCommit: 199c317d91bf506a81a6f68f53d6c63499651dff
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

원하지 않은 동작으로 나쁜 사용자 경험을 제공할 수 있는 API를 애플리케이션이 남용할 수 없도록 하기 위해 일부 API는 사용자가 현재 웹 페이지와 상호 작용 중임을 의미하는 "상호 작용 활성" 상태에 있을 때, 혹은 한 번 이상 페이지와 상호 작용을 한 경우에만 사용할 수 있습니다. 브라우저는 악의적인 스크립트가 이러한 기능을 남용하지 못하도록 팝업, 전체 화면 또는 진동 API와 같은 민감한 API에 대한 액세스를 활성 사용자 상호 작용으로 제한합니다. 이 페이지에는 사용자 활성화 후에만 사용할 수 있는 웹 플랫폼 기능이 나열되어 있습니다.

사용자 활성화는 사용자가 현재 페이지와 상호 작용 중이거나 페이지 로드 이후 상호 작용을 완료했음을 의미합니다. 일반적으로 이것은 버튼 클릭 또는 UI와의 다른 사용자 상호 작용입니다.

보다 정확하게, **활성화 트리거 입력 이벤트**는 다음과 같은 이벤트입니다.

- [`isTrusted`](/ko/docs/Web/API/Event/isTrusted) 속성이 `true`로 설정되어 있고
- 다음 유형의 이벤트인 경우
  - [`keydown`](/ko/docs/Web/API/Element/keydown_event)(<kbd>Esc</kbd> 키나 사용자 에이전트가 예약한 바로 가기 키 제외)
  - [`mousedown`](/ko/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/ko/docs/Web/API/Element/pointerdown_event) (`pointerType`이 "mouse"인 경우)
  - [`pointerup`](/ko/docs/Web/API/Element/pointerup_event) (`pointerType`이 "mouse"가 아닌 경우)
  - [`touchend`](/ko/docs/Web/API/Element/touchend_event)

활성화가 트리거된 경우, 사용자 에이전트는 사용자 활성화 창 상태를 고정과 임시라는 두 가지 유형으로 구분합니다.

## 임시 활성화

{{Glossary("Transient activation", "임시 활성화")}}는 사용자가 최근에 버튼을 눌렀거나, 마우스를 이동했거나, 메뉴를 사용했거나, 다른 사용자 상호 작용을 수행했음을 나타내는 창 상태입니다. 임시 활성화는 추가 상호 작용으로 갱신되지 않는한 시간 초과 후 만료되며 {{domxref("Window.open()")}}과 같은 일부 API에서 사용할 수도 있습니다.

임시 활성화가 필요한 예시 API는 다음과 같습니다.

- [`beforeunload` 이벤트](/ko/docs/Web/API/Window/beforeunload_event)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- `GPUAdapter.requestAdapterInfo()`
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLInputElement.showPicker()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector.requestPermission()")}}
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationRequest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- `Window.getScreenDetails()`
- `Window.queryLocalFonts()`
- {{domxref("XRSystem.requestSession()")}}

## 고정 활성화

{{Glossary("Sticky activation", "고정 활성화")}}는 사용자가 버튼을 눌렀거나, 마우스를 이동했거나, 메뉴를 사용했거나, 다른 사용자 상호 작용을 수행했음을 나타내는 창 상태입니다. 임시 활성화와 달리 처음 설정한 후에는 다시 설정되지 않습니다.

고정 활성화가 필요한 예시 API는 다음과 같습니다.

- {{domxref("Navigator.vibrate()")}}
- `navigator.getAutoplayPolicy()`
- `navigator.virtualKeyboard.show()`

## UserActivation API

창에 고정 또는 일시적 사용자 활성화가 있는지 프로그래밍적으로 확인하기 위해 {{domxref("UserActivation")}} API는 {{domxref("navigator.userActivation")}}을 사용하여 얻을 수 있는 두 가지 속성을 제공합니다.

- {{domxref("UserActivation.hasBeenActive")}}는 창에 고정 사용자 활성화 여부를 나타냅니다.
- {{domxref("UserActivation.isActive")}}는 창에 임시 사용자 활성화 여부를 나타냅니다.

## 같이 보기

- {{Glossary("Transient activation")}}
- {{Glossary("Sticky activation")}}
- {{domxref("UserActivation")}} API
- [보안 컨텍스트로 제한된 기능들](/ko/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
