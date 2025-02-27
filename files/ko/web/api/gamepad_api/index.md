---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

**게임패드 API**는 게임패드와 다른 게임 제어장치의 신호에 쉬운 일관된 방식으로 접근하고 응답하는 개발자들을 위한 수단이다. 게임패드 API는 세 가지 인터페이스와연결, 연결 해제되고 게임 패드 자체에 대한 다른 정보에 접근하고 어떤 버튼과 다른 조작 장치들이 현재 눌린 것에 응답하는 두 가지 이벤트 그리고 한 가지 특수 기능이 포함되어 있다.

## 인터페이스

- {{domxref("Gamepad")}}
  - : 컴퓨터에 연결된 게임패드나 조작장치를 표현한다.
- {{domxref("GamepadButton")}}
  - : 연결된 조작장치들 중 하나에 있는 버튼을 표현한다.
- {{domxref("GamepadEvent")}}
  - : 게임 패드와 연관된 이벤트를 나타내는 이벤트 객체이다.

### 게임패드 확장기능 실험

- {{domxref("GamepadHapticActuator")}}
  - : Represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.
- {{domxref("GamepadPose")}}
  - : Represents the pose of a controller (e.g. position and orientation in 3D space) in the case of a [WebVR](/ko/docs/Web/API/WebVR_API) controller.

다음 정보를엑세스할 수 있는 [게임패드 인터페이스 확장기능](/ko/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad) 더보기

### 다른 인터페이스로 확장

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : An extension to the {{domxref("Navigator")}} object that returns an array of {{domxref("Gamepad")}} objects, one for each connected gamepad.

#### Window events

- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} event fires).

## 튜토리얼과 가이드

- [Using the Gamepad API](/ko/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/ko/docs/Games/Techniques/Controls_Gamepad_API)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
