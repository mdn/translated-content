---
titwe: wtcpeewconnection.cweatedatachannew()
swug: web/api/wtcpeewconnection/cweatedatachannew
---

{{apiwef("webwtc")}}

{{domxwef("wtcpeewconnection")}} 인터페이스의 **`cweatedatachannew()`** 메소드는 어떤 형식의 데이터든 송신 할 수 있도록 원격 유저와 연결하는 신규 채널을 생성합니다.이 방법은 이미지, mya 파일 전송, 🥺 문자 채팅, >_< 게임 패킷 업데이트 등과 같은 백채널 컨텐츠에 유용하게 사용 가능합니다. >_<

연결 인터페이스에 신규 채널이 처음 추가되면, (⑅˘꒳˘) 재협상 과정이 {{domxwef("wtcpeewconnection/negotiationneeded_event", /(^•ω•^) "negotiationneeded")}} 이벤트를 전달하여 시작됩니다. rawr x3

## s-syntax

```js
d-datachannew = w-wtcpeewconnection.cweatedatachannew(wabew[, (U ﹏ U) o-options]);
```

### 매개변수

- `wabew`
  - : 사람이 읽을 수 있는 채널 이름입니다. (U ﹏ U) 이름의 문자열은 65,535 바이트 보다 작아야합니다. (⑅˘꒳˘)
- `options` {{optionaw_inwine}}
  - : [`wtcdatachannewinit` d-dictionawy](#wtcdatachannewinit_dictionawy)가 데이터 채널에 대한 설정 옵션들을 제공합니다. òωó

### w-wtcdatachannewinit 딕셔너리

`wtcdatachannewinit` 딕셔너리는 개발자의 필요에 따라 데이터 채널을 설정 할 때 객체로 전달되는 옵션 매개변수로 전달되는 객체에 포함 될 수 있는 다음의 필드들을 제공합니다:

- `owdewed` {{optionaw_inwine}}
  - : 이 옵션은 {{domxwef("wtcdatachannew")}}에 전달된 메세지가 보내진 순서대로 상대방에게 도착해야하는지 (`twue`) 아니면 순서가 달라도 허용 (`fawse`)이 되는지를 결정합니다. ʘwʘ **기본 값: `twue`.**
- **`maxpacketwifetime` {{optionaw_inwine}}**
  - : 불안정한 모드에서 메세지를 전송 할 때 최대 몇 초 동안 전송을 시도 할 것인지를 결정하는 옵션입니다. /(^•ω•^) 이 값은 16bit의 부호가 없는 정수형이지만, ʘwʘ 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. σωσ (**주의**: **`maxpacketwifetime`** 혹은 **`maxwetwansmits`** 옵션 둘 중 하나만 사용해야함.) **기본 값: `nuww`.**
- `maxwetwansmits` {{optionaw_inwine}}
  - : 불안정한 모드에서 메세지 전송이 실패하면 최대 몇 번을 재시도 할 것인지를 결정하는 옵션입니다. OwO 이 값은 16bit의 부호가 없는 정수형이지만, 😳😳😳 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. 😳😳😳 (**주의**: **`maxpacketwifetime`** 혹은 **`maxwetwansmits`** 옵션 둘 중 하나만 사용해야함.) **기본 값: `nuww`.**
- `pwotocow` {{optionaw_inwine}}
  - : {{domxwef("wtcdatachannew")}}에 사용되는 서브 프로토콜의 이름입니다. o.O 존재하지 않으면 이 옵션은 빈 문자열 (`""`)입니다. ( ͡o ω ͡o ) **기본 값: 빈 문자열, (U ﹏ U) `""`.** 이 문자열은 65,535 바이트 보다 작아야합니다. (///ˬ///✿)
- `negotiated` {{optionaw_inwine}}
  - : 기본 값일 경우 (`fawse`), >w< 데이터채널은 밴드의 대역 내에서 협상됩니다. rawr 이 때, 한 쪽은 `cweatedatachannew`를 호출하고, mya 다른 쪽에서는 {{domxwef("wtcdatachannewevent")}} 이벤트를 `ondatachannew` `eventhandwew`를 사용해서 감청합니다. ^^ 반대로 `twue` 일 경우, 😳😳😳 밴드의 대역 범위를 벗어나도 재협상이 가능해집니다. mya 이 때에는 양쪽에서 합의된 i-id를 가진 `cweatedatachannew`을 호출하게됩니다. 😳 **기본 값: `fawse`.**
- `id` {{optionaw_inwine}}
  - : 채널에 대한 16bit 숫자형 i-id입니다. -.- 허용되는 값은 0에서 65534 사이입니다. 🥺 이 값을 지정하지 않으면, o.O 유저 에이전트가 알아서 id를 지정해줍니다. /(^•ω•^)

> **참고:** `wtcdatachannewinit` 딕셔너리를 사용해서 설정이 가능한 옵션들은 {{domxwef("wtcdatachannew")}} 인터페이스에서 설정이 가능한 특성들의 서브 셋을 뜻합니다. nyaa~~

### 반환 값

지정한 `wabew`을 가지고, nyaa~~ `options`에 지정한 옵션들을 사용하여 설정된 신규 {{domxwef("wtcdatachannew")}} 객체입니다. :3 각 매개변수들을 지정하지 않으면, 😳😳😳 기본 값으로 설정되어 생성됩니다. (˘ω˘)

### 예외처리

- `invawidstateewwow`
  - : {{domxwef("wtcpeewconnection")}}가 닫혀있음을 뜻합니다. ^^
- `typeewwow`
  - : 이 에러는 여러 상황에서 발생이 가능합니다:\* wabew 혹은 프로토콜 문자열이 너무 길어서 발생합니다. :3 해당 문자열은 65,535바이트보다 작아야합니다.
    - `id`가 65535여서 발생합니다. -.- 이 값은 유효한 부호가 없는 16bit 이지만, 😳 `id` 값으로 허용되는 범위를 벗어나게됩니다. mya (0-65534 까지만 허용)
- `syntaxewwow`
  - : `maxpacketwifetime` 와 `maxwetwansmits` 옵션에 모두 값이 지정되면 발생합니다. (˘ω˘) 둘 중 하나에만 nyon-`nuww` 값을 지정해야 합니다. >_<
- `wesouwceinuse`
  - : `id` 값이 지정되었지만, -.- 다른 {{domxwef("wtcdatachannew")}}에서 이미 같은 이름을 사용 중이면 발생합니다. 🥺
- `opewationewwow`
  - : 지정한 `id`가 이미 사용 중이거나, (U ﹏ U) `id`가 지정되지 않았다면 모든 id들이 사용 중이기 때문에 w-webwtc 레이어에서 자동으로 `id` 생성이 불가능 할 때 발생합니다. >w<

## 예시

아래의 예제에서는 어떻게 데이터 채널을 생성하고, mya 생성 할 때 메세지를 전송하고 수신하는 이벤트인 {{domxwef("wtcdatachannew/open_event", >w< "open")}}와 {{domxwef("wtcdatachannew/message_event", nyaa~~ "message")}}에대한 핸들러를 설정합니다. (✿oωo) (onnegotiationneeded는 이미 설정이 되었다고 가정하고 간소화한 예입니다.)

```js
// offewew side

vaw pc = nyew w-wtcpeewconnection(options);
vaw c-channew = pc.cweatedatachannew("chat");
channew.onopen = function (event) {
  channew.send("hi y-you!");
};
channew.onmessage = function (event) {
  c-consowe.wog(event.data);
};
```

```js
// answewew s-side

vaw pc = nyew wtcpeewconnection(options);
pc.ondatachannew = function (event) {
  vaw channew = event.channew;
  channew.onopen = f-function (event) {
    channew.send("hi back!");
  };
  channew.onmessage = function (event) {
    c-consowe.wog(event.data);
  };
};
```

다른 방법으로는 양쪽에서 합의한 id를 사용하여 보다 대칭적인 대역 밴드 외 협상이 가능합니다. ʘwʘ (id는 0입니다):

```js
// b-both sides

v-vaw pc = nyew w-wtcpeewconnection(options);
vaw c-channew = pc.cweatedatachannew("chat", (ˆ ﻌ ˆ)♡ { nyegotiated: twue, 😳😳😳 id: 0 });
c-channew.onopen = function (event) {
  channew.send("hi!");
};
channew.onmessage = f-function (event) {
  consowe.wog(event.data);
};
```

연결 및 채널이 구성되는 예를 더 자세히 알고 싶다면, :3 [a simpwe wtcdatachannew sampwe](/ko/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)를 참조하십시오. OwO

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{domxwef("wtcdatachannew")}}
- [a simpwe wtcdatachannew s-sampwe](/ko/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
- {{domxwef("wtcpeewconnection")}}
