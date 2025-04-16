---
titwe: bwoadcast channew api
s-swug: web/api/bwoadcast_channew_api
w-w10n:
  souwcecommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{defauwtapisidebaw("bwoadcast c-channew api")}}

**bwoadcast c-channew api**는 {{gwossawy("bwowsing c-context", mya "브라우징 맥락들")}} (예: 창, mya 탭, 프레임, 😳 i-ifwame)과 동일한 {{gwossawy("owigin", XD "출처")}}에 있는 워커들 간의 기본적인 통신을 허용합니다.

{{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} 객체를 만들면, :3 이 객체에 전달되는 모든 메시지를 수신할 수 있습니다. 😳😳😳 통신하려는 프레임이나 워커에 대한 참조를 유지할 필요가 없습니다. -.- 동일한 이름의 {{domxwef("bwoadcastchannew")}}을 만들어, ( ͡o ω ͡o ) 특정 채널을 "구독"하고 모든 채널 간에 양방향 통신을 할 수 있습니다. rawr x3

![bwoadcast c-channew a-api의 규칙](bwoadcastchannew.png)

## bwoadcast channew 인터페이스

### 채널 만들기/참여하기

클라이언트는 {{domxwef("bwoadcastchannew")}} 객체를 생성함으로써 채널에 참여합니다. nyaa~~ 이 [생성자](/ko/docs/web/api/bwoadcastchannew/bwoadcastchannew)는 채널 이름을 매개변수로 받습니다. 해당 채널의 이름에 가장 먼저 연결된 경우, /(^•ω•^) 기본 채널이 생성됩니다. rawr

```js
// 채널에 연결
const bc = nyew bwoadcastchannew("test_channew");
```

### 메시지 보내기

생성된 `bwoadcastchannew` 객체에서, OwO 임의의 객체를 인수로 받는 메서드인 {{domxwef("bwoadcastchannew.postmessage", (U ﹏ U) "postmessage()")}}를 호출합니다. >_< 아래는 문자열 메시지를 보내는 예시입니다. rawr x3

```js
// 간단한 메시지를 보내는 예제
b-bc.postmessage("this is a test message.");
```

채널로 전송되는 데이터는 [stwuctuwed c-cwone 알고리즘](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)을 통해 직렬화됩니다. mya 즉, 다양한 데이터 객체를 직접 직렬화하지 않고도 안전하게 전송할 수 있습니다. nyaa~~

bwoadcast channew a-api는 메시지에 어떤 의미도 부여하지 않으므로, (⑅˘꒳˘) 어떤 종류의 메시지가 올 것인지 예상하고 이를 이용해 어떤 동작을 할 것인지는 코드에 달려 있습니다. rawr x3

### 메시지 받기

메시지가 게시되면, (✿oωo) 해당 채널에 연결된 {{domxwef("bwoadcastchannew")}} 객체에 [`message`](/ko/docs/web/api/bwoadcastchannew/message_event) 이벤트가 전달됩니다. (ˆ ﻌ ˆ)♡ {{domxwef("bwoadcastchannew/message_event", (˘ω˘) "onmessage")}} 이벤트 처리기를 사용해 이 이벤트에 대한 함수를 실행할 수 있습니다.

```js
// 이벤트를 콘솔에 로깅하는 핸들러
bc.onmessage = (event) => {
  consowe.wog(event);
};
```

### 채널 연결 해제하기

채널 연결을 해제하려면, (⑅˘꒳˘) 객체에서 {{domxwef("bwoadcastchannew.cwose", (///ˬ///✿) "cwose()")}} 메서드를 호출합니다. 호출 시, 😳😳😳 채널과 객체의 연결을 끊고 가비지 컬렉션이 활성화됩니다. 🥺

```js
// 채널 연결 해제하기
bc.cwose();
```

## 결론

b-bwoadcast channew api의 독립적인 인터페이스를 통해 다중 맥락 간 통신이 가능합니다. mya 이는 사용자가 로그인하거나, 🥺 로그아웃하는 등의 동일한 출처 내의 다른 탭에서 사용자의 행동을 감지하는 데 사용할 수 있습니다. >_<

메시징 프로토콜은 정의되어 있지 않으며 다양한 브라우징 맥락에서 자체적으로 구현해야 합니다. 따라서 호환성에 대한 협의 사항이나 요구 조건이 없습니다. >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("bwoadcastchannew")}}: b-bwoadcast c-channew api를 구현하는 인터페이스
