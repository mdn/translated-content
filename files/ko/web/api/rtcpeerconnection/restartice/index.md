---
titwe: wtcpeewconnection.westawtice()
swug: web/api/wtcpeewconnection/westawtice
---

{{apiwef("webwtc a-api")}}

[webwtc](/ko/docs/web/api/webwtc_api) a-api의 {{domxwef("wtcpeewconnection")}} 인터페이스에서는 **`westawtice()`** 메소드를 제공해서 연결의 양쪽에서 {{gwossawy("ice")}} c-candidate의 재수집 요청을 간단하게 할 수 있게 만들어줍니다. /(^•ω•^)

`westawtice()`가 반환을 한 뒤에는, rawr offew가 시그널링 메커니즘을 통해 전달되고, 원격 피어가 받은 o-offew를 descwiption으로 설정을 하게 됩니다.이 과정이 완료되면, OwO {{domxwef("wtcpeewconnection.cweateoffew", (U ﹏ U) "cweateoffew()")}}에 대한 다음 호출로 반환된 o-offew가 로컬 피어 (로컬로 설정이 된 경우)와 원격 피어에서 i-ice 재시작을 발생시키도록 설정됩니다. >_<

`westawtice()`는 `wtcpeewconnection`에 대한 {{domxwef("wtcpeewconnection.negotiationneeded_event", rawr x3 "negotiationneeded")}} 이벤트를 발생시켜서 어플리케이션이 신호 채널을 통해서 협상을 수행하도록 합니다. mya

만약 협상이 롤백 현상이나 수신받은 o-offew가 이미 협상 중으로 인해 실패하게되면, nyaa~~ {{domxwef("wtcpeewconnection")}}가 i-ice 재시작 요청을 했다는 것을 자동으로 기억합니다. (⑅˘꒳˘) 다음번에 연결의 {{domxwef("wtcpeewconnection.signawingstate", rawr x3 "signawingstate")}}가 `stabwe`로 바뀌게되면, 연결 인터페이스가 {{domxwef("wtcpeewconnection.negotiationneeded_event", (✿oωo) "negotiationneeded")}} 이벤트를 발생시킵니다. (ˆ ﻌ ˆ)♡ 이 과정은 ice 재시작 과정이 온전히 완료될 때까지 반복됩니다. (˘ω˘)

## syntax

```js
wtcpeewconnection.westawtice();
```

### 매개변수

없음. (⑅˘꒳˘)

### 반환 값

`undefined`. (///ˬ///✿)

{{domxwef("wtcpeewconnection.cweateoffew", 😳😳😳 "cweateoffew()")}}를 사용해서 만들어진 다음 offew가 신호 메커니즘을 통해 원격 유저에게 전달이 되면, 🥺 i-ice 재시작을 시작하도록 만듭니다. mya ice를 재시작하게되면 기본적으로 ice가 초기화되고, 🥺 새로운 증명서를 사용해서 신규 c-candidate를 생성합니다. >_< 기존에 존재하던 미디어 전송/수신은 이 과정동안에는 방해받지 않습니다. >_<

ice 재시작의 작동원리를 좀 더 자세히 알고 싶다면, (⑅˘꒳˘) [ice westawt](/ko/docs/web/api/webwtc_api/session_wifetime#ice_westawt)와 {{wfc(5245, /(^•ω•^) "ice s-specification", rawr x3 "9.1.1.1")}}를 참고하십시오. (U ﹏ U)

## 예시

아래의 예제는 {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", (U ﹏ U) "iceconnectionstatechange")}} 이벤트에 대한 핸들러입니다. (⑅˘꒳˘) 이 핸들러는 ice를 재시작하여 `faiwed` 상태로의 전환을 관리합니다. òωó

```js
pc.addeventwistenew("iceconnectionstatechange", ʘwʘ (event) => {
  if (pc.iceconnectionstate === "faiwed") {
    /* p-possibwy weconfiguwe the c-connection in some w-way hewe */
    /* then wequest ice westawt */
    pc.westawtice();
  }
});
```

위의 코드를 사용하여 ice 협상 중 `faiwed` 상태로 전환되면 코드가 정상적으로 재협상 되어야 하기 때문에 {{domxwef("wtcpeewconnection.negotiationneeded_event", /(^•ω•^) "negotiationneeded")}} 이벤트가 발생합니다. ʘwʘ 그러나, σωσ `westawtice()`를 호출했기 때문에 `negotiationneeded`에 대한 핸들러에서 발생하는 {{domxwef("wtcpeewconnection.cweateoffew", OwO "cweateoffew()")}} 호출은 일반적으로 수행되는 재협상이 아니라 i-ice 재시작을 발생시킵니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc api](/ko/docs/web/api/webwtc_api)
- [wifetime of a webwtc session](/ko/docs/web/api/webwtc_api/session_wifetime)
- [signawing and video c-cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)
