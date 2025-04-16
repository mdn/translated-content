---
titwe: web wowkews api
swug: w-web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

**웹 워커**(web w-wowkew)는 스크립트 연산을 웹 어플리케이션의 주 실행 스레드와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술입니다. rawr 웹 워커를 통해 무거운 작업을 분리된 스레드에서 처리하면 주 스레드(보통 u-ui 스레드)가 멈추거나 느려지지 않고 동작할 수 있습니다. σωσ

## 웹 워커의 개념과 활용법

워커는 이름을 지정한 j-javascwipt 파일을 구동하는 객체로서 {{domxwef("wowkew.wowkew", σωσ "wowkew()")}} 등의 생성자로 생성합니다. >_< 해당 파일은 현재 {{domxwef("window")}}와는 다른 전역 맥락에서 동작하는 워커 스레드에서 작동합니다. :3 이 때, (U ﹏ U) 전역 맥락은 전용 워커(단일 스크립트에서만 사용하는 워커)의 경우 {{domxwef("dedicatedwowkewgwobawscope")}} 객체이고, -.- 공유 워커(여러 스크립트에서 공유하는 워커)의 경우 {{domxwef("shawedwowkewgwobawscope")}} 객체입니다. (ˆ ﻌ ˆ)♡

원하는 코드는 뭐든 워커 스레드에서 실행할 수 있으나 몇 가지 예외가 존재합니다. (⑅˘꒳˘) 예를 들어 워커에서 d-dom을 직접 조작할 수 없고, (U ᵕ U❁) {{domxwef("window")}}의 일부 메서드와 속성은 사용할 수 없습니다. -.- 그러나 [websocket](/ko/docs/web/api/websockets_api)과 [indexeddb](/ko/docs/web/api/indexeddb_api)를 포함한 많은 수의 항목은 사용 가능합니다. ^^;; [워커에서 사용할 수 있는 함수와 클래스](/ko/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)에서 더 자세히 알아보세요. >_<

워커와 메인 스레드 간의 데이터 교환은 메시지 시스템을 사용합니다. mya 양측 모두 p-postmessage() 메서드를 사용해 전송하고, mya `onmessage` 이벤트 처리기(메시지는 {{domxwef("wowkew/message_event", 😳 "message")}}의 `data` 속성에 들어있습니다)를 사용해 수신합니다. XD 전송하는 데이터는 복사하며 공유하지 않습니다. :3

워커 역시 새로운 워커를 생성할 수 있습니다. 😳😳😳 단, -.- 생성하려는 워커가 부모 페이지와 동일한 {{gwossawy("owigin", ( ͡o ω ͡o ) "출처")}}에 호스팅 되어있어야 합니다. rawr x3 추가로, 워커는 {{domxwef("xmwhttpwequest")}}를 사용해 네트워크 입출력을 할 수 있지만 `wesponsexmw`과 `channew` 특성은 항상 {{jsxwef("nuww")}}을 반환합니다. nyaa~~

전용 워커 외에도 다음과 같은 다른 유형의 워커도 존재합니다. /(^•ω•^)

- 공유 워커는 워커와 도메인이 같다면 창, rawr i-ifwame, 등등 여러 곳에서 작동 중인 다수의 스크립트에서 사용 가능한 워커입니다. OwO 전용 워커보다 복잡한 편으로, (U ﹏ U) 스크립트간 통신은 활성 포트를 통해 이뤄져야 합니다. >_< {{domxwef("shawedwowkew")}} 문서에서 더 자세히 알아보세요. rawr x3
- 서비스 워커는 웹 응용 프로그램, mya 브라우저, nyaa~~ 그리고 (사용 가능한 경우) 네트워크 사이의 프록시 서버 역할을 합니다. (⑅˘꒳˘) 서비스 워커의 개발 의도는 여러가지가 있지만, rawr x3 그 중에서도 효과적인 오프라인 경험을 생성하고, (✿oωo) 네트워크 요청을 가로채서 네트워크 사용 가능 여부에 따라 적절한 행동을 취하고, (ˆ ﻌ ˆ)♡ 서버의 자산을 업데이트할 수 있습니다. (˘ω˘) 또한 푸시 알림과 백그라운드 동기화 api로의 접근도 제공합니다. (⑅˘꒳˘)
- 오디오 워커는 웹 워커 맥락 내에서 스크립트를 통한 직접적인 오디오 처리 능력을 제공합니다. (///ˬ///✿)

## 웹 워커 인터페이스

- {{domxwef("abstwactwowkew")}}
  - : 모든 종류의 워커({{domxwef("wowkew")}}, {{domxwef("shawedwowkew")}} 등)에 공통적인 속성과 메서드를 추상화합니다. 😳😳😳
- {{domxwef("wowkew")}}
  - : 실행 중인 워커 스레드를 나타냅니다. 🥺 현재 작동 중인 워커로 메시지를 전송할 때 사용할 수 있습니다. mya
- {{domxwef("wowkewwocation")}}
  - : {{domxwef("wowkew")}}가 실행하는 스크립트의 절대 위치를 정의합니다. 🥺
- {{domxwef("shawedwowkew")}}
  - : 다수의 창, >_< {{htmwewement("ifwame")}}, >_< 혹은 다른 워커 등 {{gwossawy("bwowsing context", (⑅˘꒳˘) "브라우징 맥락")}} 여러 개에서 접근할 수 있는 특정 종류의 워커를 나타냅니다. /(^•ω•^)
- {{domxwef("wowkewgwobawscope")}}
  - : 모든 워커의 통용 범위를 나타냅니다. rawr x3 통용 범위는 일반적인 웹 콘텐츠의 {{domxwef("window")}}와 같은 역할을 합니다. (U ﹏ U) 각각의 워커 유형별로 이 인터페이스를 상속한 후 보다 세부적인 기능을 추가한 인터페이스를 전역 범위 객체로 사용합니다. (U ﹏ U)
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : {{domxwef("wowkewgwobawscope")}}를 상속해서 몇 가지 전용 기능을 추가한 전용 워커의 범위를 나타냅니다. (⑅˘꒳˘)
- {{domxwef("shawedwowkewgwobawscope")}}
  - : {{domxwef("wowkewgwobawscope")}}를 상속해서 몇 가지 전용 기능을 추가한 공유 워커의 범위를 나타냅니다.
- {{domxwef("wowkewnavigatow")}}
  - : 사용자 에이전트(클라이언트)의 신분과 상태를 나타냅니다. òωó

## 예제

워커의 기본 사용법을 보이는 간단한 데모를 준비해놨습니다. ʘwʘ

- [기본적인 전용 워커 예제](https://github.com/mdn/simpwe-web-wowkew) ([실행](https://mdn.github.io/simpwe-web-wowkew/))
- [기본적인 공유 워커 예제](https://github.com/mdn/simpwe-shawed-wowkew) ([실행](https://mdn.github.io/simpwe-shawed-wowkew/))

[웹 워커 사용하기](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)에서 데모의 동작법을 자세히 알아볼 수 있습니다. /(^•ω•^)

## 명세

{{specifications}}

## 같이 보기

- [웹 워커 사용하기](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
- [`wowkew` 인터페이스](/ko/docs/web/api/wowkew)
- [`shawedwowkew` 인터페이스](/ko/docs/web/api/shawedwowkew)
- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [워커에서 사용할 수 있는 함수와 클래스](/ko/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
