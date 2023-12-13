---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{DefaultAPISidebar("Broadcast Channel API")}}

**Broadcast Channel API**는 {{glossary("browsing context", "브라우징 맥락들")}} (예: 창, 탭, 프레임, iframe)과 동일한 {{glossary("origin", "출처")}}에 있는 워커들 간의 기본적인 통신을 허용합니다.

{{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} 객체를 만들면, 이 객체에 전달되는 모든 메시지를 수신할 수 있습니다. 통신하려는 프레임이나 워커에 대한 참조를 유지할 필요가 없습니다. 동일한 이름의 {{domxref("BroadcastChannel")}}을 만들어, 특정 채널을 "구독"하고 모든 채널 간에 양방향 통신을 할 수 있습니다.

![Broadcast Channel API의 규칙](broadcastchannel.png)

## Broadcast Channel 인터페이스

### 채널 만들기/참여하기

클라이언트는 {{domxref("BroadcastChannel")}} 객체를 생성함으로써 채널에 참여합니다. 이 [생성자](/ko/docs/Web/API/BroadcastChannel/BroadcastChannel)는 채널 이름을 매개변수로 받습니다. 해당 채널의 이름에 가장 먼저 연결된 경우, 기본 채널이 생성됩니다.

```js
// 채널에 연결
const bc = new BroadcastChannel("test_channel");
```

### 메시지 보내기

생성된 `BroadcastChannel` 객체에서, 임의의 객체를 인수로 받는 메서드인 {{domxref("BroadcastChannel.postMessage", "postMessage()")}}를 호출합니다. 아래는 문자열 메시지를 보내는 예시입니다.

```js
// 간단한 메시지를 보내는 예제
bc.postMessage("This is a test message.");
```

채널로 전송되는 데이터는 [structured clone 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 통해 직렬화됩니다. 즉, 다양한 데이터 객체를 직접 직렬화하지 않고도 안전하게 전송할 수 있습니다.

Broadcast Channel API는 메시지에 어떤 의미도 부여하지 않으므로, 어떤 종류의 메시지가 올 것인지 예상하고 이를 이용해 어떤 동작을 할 것인지는 코드에 달려 있습니다.

### 메시지 받기

메시지가 게시되면, 해당 채널에 연결된 {{domxref("BroadcastChannel")}} 객체에 [`message`](/ko/docs/Web/API/BroadcastChannel/message_event) 이벤트가 전달됩니다. {{domxref("BroadcastChannel/message_event", "onmessage")}} 이벤트 처리기를 사용해 이 이벤트에 대한 함수를 실행할 수 있습니다.

```js
// 이벤트를 콘솔에 로깅하는 핸들러
bc.onmessage = (event) => {
  console.log(event);
};
```

### 채널 연결 해제하기

채널 연결을 해제하려면, 객체에서 {{domxref("BroadcastChannel.close", "close()")}} 메서드를 호출합니다. 호출 시, 채널과 객체의 연결을 끊고 가비지 컬렉션이 활성화됩니다.

```js
// 채널 연결 해제하기
bc.close();
```

## 결론

Broadcast Channel API의 독립적인 인터페이스를 통해 다중 맥락 간 통신이 가능합니다. 이는 사용자가 로그인하거나, 로그아웃하는 등의 동일한 출처 내의 다른 탭에서 사용자의 행동을 감지하는 데 사용할 수 있습니다.

메시징 프로토콜은 정의되어 있지 않으며 다양한 브라우징 맥락에서 자체적으로 구현해야 합니다. 따라서 호환성에 대한 협의 사항이나 요구 조건이 없습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("BroadcastChannel")}}: Broadcast Channel API를 구현하는 인터페이스
