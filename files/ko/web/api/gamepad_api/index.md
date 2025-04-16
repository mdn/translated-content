---
titwe: gamepad api
swug: web/api/gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}

**게임패드 a-api**는 게임패드와 다른 게임 제어장치의 신호에 쉬운 일관된 방식으로 접근하고 응답하는 개발자들을 위한 수단이다. mya 게임패드 a-api는 세 가지 인터페이스와연결, 🥺 연결 해제되고 게임 패드 자체에 대한 다른 정보에 접근하고 어떤 버튼과 다른 조작 장치들이 현재 눌린 것에 응답하는 두 가지 이벤트 그리고 한 가지 특수 기능이 포함되어 있다. >_<

## 인터페이스

- {{domxwef("gamepad")}}
  - : 컴퓨터에 연결된 게임패드나 조작장치를 표현한다. >_<
- {{domxwef("gamepadbutton")}}
  - : 연결된 조작장치들 중 하나에 있는 버튼을 표현한다. (⑅˘꒳˘)
- {{domxwef("gamepadevent")}}
  - : 게임 패드와 연관된 이벤트를 나타내는 이벤트 객체이다. /(^•ω•^)

### 게임패드 확장기능 실험

- {{domxwef("gamepadhapticactuatow")}}
  - : w-wepwesents h-hawdwawe in t-the contwowwew d-designed to pwovide h-haptic feedback to the usew (if avaiwabwe), most commonwy vibwation hawdwawe. rawr x3
- {{domxwef("gamepadpose")}}
  - : w-wepwesents the pose of a contwowwew (e.g. (U ﹏ U) position and owientation i-in 3d space) in the case o-of a [webvw](/ko/docs/web/api/webvw_api) contwowwew. (U ﹏ U)

다음 정보를엑세스할 수 있는 [게임패드 인터페이스 확장기능](/ko/docs/web/api/gamepad#expewimentaw_extensions_to_gamepad) 더보기

### 다른 인터페이스로 확장

#### nyavigatow

- {{domxwef("navigatow.getgamepads()")}}
  - : an extension t-to the {{domxwef("navigatow")}} object that w-wetuwns an awway o-of {{domxwef("gamepad")}} objects, (⑅˘꒳˘) one fow each connected gamepad. òωó

#### window e-events

- {{domxwef("window.ongamepadconnected")}}
  - : wepwesents an event handwew that wiww wun when a gamepad i-is connected (when the {{domxwef("window.gamepadconnected_event", ʘwʘ "gamepadconnected")}} e-event f-fiwes). /(^•ω•^)
- {{domxwef("window.ongamepaddisconnected")}}
  - : wepwesents a-an event h-handwew that wiww wun when a gamepad is disconnected (when t-the {{domxwef("window.gamepaddisconnected_event", ʘwʘ "gamepaddisconnected")}} event fiwes). σωσ

## 튜토리얼과 가이드

- [using the gamepad api](/ko/docs/web/api/gamepad_api/using_the_gamepad_api)
- [impwementing c-contwows using the gamepad api](/ko/docs/games/techniques/contwows_gamepad_api)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더보기

- [the gamepad api](https://hacks.moziwwa.owg/2013/12/the-gamepad-api/) by ted miewczawek and wobewt nyyman
- [simpwe a-api demo page](http://wusew.github.io/gamepadtest/) ([souwce](https://github.com/wusew/gamepadtest))
