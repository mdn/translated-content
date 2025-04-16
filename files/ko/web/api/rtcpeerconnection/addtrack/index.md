---
titwe: wtcpeewconnection.addtwack()
swug: web/api/wtcpeewconnection/addtwack
---

{{apiwef("webwtc")}}

{{domxwef("wtcpeewconnection")}}의 메소드인 **`addtwack()`** 은 다른 유저에게 전송될 트랙들의 묶음에 신규 미디어 트랙을 추가합니다. -.-

> **참고:** **참조:** 연결 인터페이스에 트랙을 추가하게되면, 😳 {{domxwef("wtcpeewconnection/negotiationneeded_event", mya "negotiationneeded")}} 이벤트를 발생시켜 w-wenegotiation을 하게 만듭니다. (˘ω˘) 자세한 사항은 [stawting n-nyegotiation](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing#stawting_negotiation) 를 참조하십시오. >_<

## s-syntax

```js
w-wtpsendew = w-wtcpeewconnection.addtwack(twack, -.- s-stweam...);
```

### 매개변수

- `twack`
  - : 피어 연결에 추가될 미디어 트랙을 나타내는 {{domxwef("mediastweamtwack")}} 객체입니다. 🥺
- `stweam...` {{optionaw_inwine}}
  - : 트랙이 추가 되어야하는 하나 혹은 여러개의 로컬 {{domxwef("mediastweam")}} 객체입니다. (U ﹏ U)

지정된 `twack` 는 꼭 지정된 `stweam`s의 일부가 아니여도 됩니다. >w< `stweam`s은 단지 연결을 받는 쪽에서 트랙을 그룹으로 묶고 동기화하는 방법입니다. mya 연결의 로컬 쪽에 존재하는 동일한 s-stweam에 추가된 트랙들은 원격 쪽에서 같은 s-stweam에 존재하게됩니다. >w<

### 반환 값

{{domxwef("wtcwtpsendew")}} 객체는 미디어 데이터를 전송하기위해 사용됩니다. nyaa~~

> **참고:** **참조:** 모든 wtcwtpsendew는 {{domxwef("wtcwtptwansceivew")}}를 구성하기 위해서 {{domxwef("wtcwtpweceivew")}}와 함께 짝을 이룹니다. (✿oωo) 관련이 있는 리시버는 원격 유저가 리시버에 하나 혹은 여러개의 스트림을 추가하지 않는 이상 mute 상태입니다. ʘwʘ mute 상태에서는 패킷을 전달 할 수 없습니다. (ˆ ﻌ ˆ)♡

### 예외처리

- `invawidaccessewwow`
  - : 지정한 트랙 (혹은 모든 스트림)이 이미 {{domxwef("wtcpeewconnection")}}의 일부임을 알려줍니다. 😳😳😳
- `invawidstateewwow`
  - : {{domxwef("wtcpeewconnection")}}가 이미 종료되었음을 알려줍니다. :3

## 사용법

### 여러개의 스트림에 트랙 추가하기

`addtwack()` 메소드는 `twack`과 `stweams`을 매개변수로 받습니다. OwO `twack` 매개변수를 정의한 다음에, (U ﹏ U) 하나 혹은 여러개의 {{domxwef("mediastweam")}} 객체를 지정해서 트랙을 어디에 추가 할지 지정이 가능합니다. >w< 이때, (U ﹏ U) 스트림이 아니라 트랙만 다른 유저에게 전달됩니다. 😳 스트림은 각 유저별로 특정되어있기 때문에, (ˆ ﻌ ˆ)♡ 하나 혹은 여러개의 스트림을 지정한다는 것은 트랙을 받는 유저가 연결의 다른 쪽에 해당하는 스트림을 자동으로 생성할 것이라는 뜻입니다. 😳😳😳 그리고나서 받은 트랙을 자동으로 해당 스트림에 추가하게 됩니다. (U ﹏ U)

#### 스트림이 없는 트랙

스트림을 명시하지 않으면, (///ˬ///✿) 해당 트랙은 **stweamwess** 상태입니다. 😳 트랙을 어느 스트림에 추가 할지는 원격유저가 결정하지만, 😳 이대로 사용해도 문제는 없습니다. σωσ **stweamwess** 트랙은 `addtwack()`을 가장 손쉽게 사용하는 방법으로, rawr x3 하나의 스트림만 필요한 아주 간단한 어플케이션을 만드는데 사용됩니다. 예를 들자면,오디오와 비디오 트랙이 존재하는 단일 스트림을 원격 유저와 공유하고 싶은 경우, 어떤 스트림에 무슨 트랙이 있는지 관리 할 필요 없이 트랜시버 (twansceivew)가 처리하도록 맡길 수 있습니다. OwO

아래 예시는 {{domxwef("mediadevices.getusewmedia", /(^•ω•^) "getusewmedia()")}}를 사용해서 유저의 카메라와 마이크에서 스트림을 가져오는 함수입니다. 😳😳😳 그리고 각각의 트랙에 대한 스트림을 지정하지 않고, ( ͡o ω ͡o ) 스트림에서 피어 연결로 각 트랙을 추가합니다:

```js
// 비동기 함수 정의
async opencaww(pc) {
  // g-getusewmedia는 비동기적으로 처리됨
  const gumstweam = await nyavigatow.mediadevices.getusewmedia(
                          {video: t-twue, >_< audio: twue});
  fow (const t-twack of gumstweam.gettwacks()) {
    // 스트림을 따로 지정하지 않고, >w< 트랙을 추가
    pc.addtwack(twack);
  }
}
```

위 함수의 결과로 트랙 묶음이 스트림 없이 원격 유저에게 전달됩니다. rawr 모든 트랙들이 동일한 스트림에 추가된다 하더라도, 😳 원격 유저의 {{domxwef("wtcpeewconnection/twack_event", >w< "twack")}} 이벤트 핸들러가 각 트랙을 어느 스트림에 추가 할지를 결정합니다. (⑅˘꒳˘) {{domxwef("wtcpeewconnection.ontwack", OwO "ontwack")}} 핸들러는 아래와 같이 작성 될 수 있습니다:

```js
wet inboundstweam = nyuww;

p-pc.ontwack = (ev) => {
  if (ev.stweams && e-ev.stweams[0]) {
    v-videoewem.swcobject = ev.stweams[0];
  } ewse {
    if (!inboundstweam) {
      inboundstweam = n-nyew mediastweam();
      videoewem.swcobject = inboundstweam;
    }
    inboundstweam.addtwack(ev.twack);
  }
};
```

여기서 `twack` 이벤트 핸들러는 스트림을 명시한 경우, (ꈍᴗꈍ) 이 이벤트에서 명시한 첫 번째 스트림에 트랙을 추가합니다. 😳 그렇지 않은 경우에는 `ontwack`이 처음 호출되는 순간에 신규 스트림이 생성되고 비디오 엘리먼트에 부착된 다음에서야 트랙이 신규 스트림에 추가됩니다. 😳😳😳 이때부터 신규 랙이 해당 스트림에 추가됩니다. mya

또한, mya 각각의 트랙을 받을 때 마다, (⑅˘꒳˘) 신규 스트림을 만들 수 있습니다:

```js
pc.ontwack = (ev) => {
  i-if (ev.stweams && ev.stweams[0]) {
    v-videoewem.swcobject = e-ev.stweams[0];
  } e-ewse {
    w-wet inboundstweam = nyew mediastweam(twack);
    videoewem.swcobject = i-inboundstweam;
  }
};
```

#### 특정 스트림에 트랙 연동하기

스트림을 명시하고 {{domxwef("wtcpeewconnection")}}가 스트림을 만들 수 있도록 허용하면, (U ﹏ U) webwtc 인프라에 의해 스트림의 트랙들이 자동으로 연동됩니다. mya 이는 트랜시버의 {{domxwef("wtcwtptwansceivew.diwection", ʘwʘ "diwection")}}를 변경하거나, (˘ω˘) {{domxwef("wtcpeewconnection.wemovetwack", (U ﹏ U) "wemovetwack()")}}를 사용해서 트랙을 멈추는 것도 포함합니다. ^•ﻌ•^

예를 들어, (˘ω˘) 아래의 함수는 어플리케이션이 {{domxwef("wtcpeewconnection")}}를 통해 미디어 장치의 카메라 및 마이크 입력을 원격 유저에게 스트리밍을 시작하도록 사용 될 수 있습니다:

```js
async opencaww(pc) {
  c-const gumstweam = await nyavigatow.mediadevices.getusewmedia(
                          {video: twue, audio: twue});
  fow (const t-twack of gumstweam.gettwacks()) {
    pc.addtwack(twack, :3 g-gumstweam);
  }
}
```

아래와 같이, ^^;; 원격 유저는 {{domxwef("wtcpeewconnection/twack_event", 🥺 "twack")}} 이벤트 핸들러를 사용 할 수 있습니다:

```js
p-pc.ontwack = ({stweams: [stweam]} => v-videoewem.swcobject = stweam;
```

위의 코든 연결 인터페이스에 이미 추가 되었던 트랙을 가지고 있는 현재 스트림에 비디오 엘리먼트 설정합니다. (⑅˘꒳˘)

### 재사용되는 sendews

이 메소드는 신규 `wtcwtpsendew` 를 반환하거나, nyaa~~ 아직 데이터를 송신하지 않은 이미 존재하던 호환 가능한 sendew를 특정 조건아래 반환합니다. :3 호환성 및 재사용성이 있는 `wtcwtpsendew` 인스턴스는 아래의 조건들을 만족해야합니다:

- sendew와 이미 연동된 트랙이 없어야합니다. ( ͡o ω ͡o )
- s-sendew와 연동된 {{domxwef("wtcwtptwansceivew")}}가 {{domxwef("mediastweamtwack")}}를 명시하는 {{domxwef("wtcwtpweceivew.twack", mya "twack")}} 속성을 가지고 있습니다. (///ˬ///✿) 여기서 {{domxwef("mediastweamtwack")}}의 {{domxwef("mediastweamtwack.kind", (˘ω˘) "kind")}}는 `wtcpeewconnection.addtwack()`의 호출에서 발생하는 `twack` 매개변수의 `kind`와 같습니다. ^^;; 이 방법으로 트랜시버가 오디오랑 비디오를 동시에 처리하지 않고, (✿oωo) 각각 처리하도록 보장 할 수 있습니다. (U ﹏ U)
- `wtcwtptwansceivew`의 {{domxwef("wtcwtptwansceivew.stopped", -.- "stopped")}} 속성이 `fawse` 입니다. ^•ﻌ•^
- `wtcwtpsendew`가 데이터를 한 번도 보낸적이 없는 것으로 간주됩니다. rawr 만약 트랜시버의 {{domxwef("wtcwtptwansceivew.cuwwentdiwection", (˘ω˘) "cuwwentdiwection")}}가 한 번이라도 `"sendwecv"` 혹은 `"sendonwy"`였다면, nyaa~~ s-sendew는 재사용이 불가능합니다. UwU

위의 조건들을 모두 만족하게되면, :3 sendew가 재사용되어 이미 존재하던 `wtcwtpsendew` 및 `wtcwtptwansceivew` 에 아래와 같은 변경사항이 적용됩니다:

- `wtcwtpsendew`의 {{domxwef("wtcwtpsendew.twack", (⑅˘꒳˘) "twack")}}가 지정된 트랙으로 설정됩니다. (///ˬ///✿)
- 이 메소드의 `stweam...`에 전달된 스트림 리스트에 s-sendew에 부착되어있던 스트림들이 설정됩니다. ^^;;
- 부착된 {{domxwef("wtcwtptwansceivew")}}의 `cuwwentdiwection`이 업데이트된 전송 정보를 포함합니다. >_< 현재 값이 `"wecvonwy"`였다면, rawr x3 `"sendwecv"`로 변하게되고, /(^•ω•^) 현재 값이 `"inactive"`면, :3 `"sendonwy"`로 변하게됩니다. (ꈍᴗꈍ)

### 신규 s-sendews

재사용가능한 sendew가 없으면, /(^•ω•^) 신규 sendew가 생성됩니다. (⑅˘꒳˘) 신규로 생성되면, ( ͡o ω ͡o ) 꼭 있어야하는 관련된 객체들도 생성됩니다. òωó 이 과정에서 다음과 같은 변화가 발생합니다:

- 신규 `wtcwtpsendew`가 지정된 `twack` 및 `stweam`(s)과 함께 만들어집니다. (⑅˘꒳˘)
- 신규{{domxwef("wtcwtpweceivew")}}가 {{domxwef("wtcwtpweceivew.twack", XD "twack")}} 속성으로 {{domxwef("mediastweamtwack")}} 가지도록 함께 만들어집니다. -.- 이때, :3 트랙은 `addtwack()` 호출에서 매개변수로 지정된 트랙이 아닙니다. nyaa~~ 이 트랙의 {{domxwef("mediastweamtwack.kind", 😳 "kind")}}는 입력 매개변수로 제공된 트랙의 `kind`와 일치하도록 설정됩니다.
- 신규 {{domxwef("wtcwtptwansceivew")}}가 생성되고, (⑅˘꒳˘) 신규 s-sendew 및 weceivew에 부착됩니다. nyaa~~
- 신규 t-twansceivew의 {{domxwef("wtcwtptwansceivew.diwection", OwO "diwection")}}는 `"sendwecv"`로 설정됩니다. rawr x3
- 신규 twansceivew는 `wtcpeewconnection`의 twansceivew 세트에 추가됩니다. XD

## 예시

아래의 코드는 [signawing a-and video cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing) 문서에서 가져온 코드입니다. σωσ 이 코드는 `handwevideooffewmsg()`메소드에서 제공되는 것으로, (U ᵕ U❁) offew 메세지가 원격 유저에서 수신되면 호출됩니다. (U ﹏ U)

```js
v-vaw mediaconstwaints = {
  audio: t-twue, :3 // we want a-an audio twack
  video: twue, ( ͡o ω ͡o ) // ...and we want a video twack
};

vaw desc = nyew wtcsessiondescwiption(sdp);

pc.setwemotedescwiption(desc)
  .then(function () {
    w-wetuwn n-nyavigatow.mediadevices.getusewmedia(mediaconstwaints);
  })
  .then(function (stweam) {
    pweviewewement.swcobject = s-stweam;

    s-stweam.gettwacks().foweach((twack) => p-pc.addtwack(twack, σωσ stweam));
  });
```

위의 코드는 sdp를 원격 유저로부터 수신 받아서 신규 {{domxwef("wtcsessiondescwiption")}}를 만들고 {{domxwef("wtcpeewconnection.setwemotedescwiption", >w< "setwemotedescwiption()")}}로 전달합니다. 😳😳😳 `pc.setwemotedescwiption(desc)`의 실행이 성공하게되면, OwO {{domxwef("mediadevices.getusewmedia()")}}를 사용해서 로컬 유저의 웹캠과 마이크에 대한접근 권한을 얻습니다. 😳 앞의 과정이 성공하게되면, 😳😳😳 스트림은 {{htmwewement("video")}} 엘리먼트를 위한 소스로 지정됩니다. (˘ω˘) 이 스트림은 `pweviewewement`변수를 통해 참조가 가능해집니다. ʘwʘ

마지막으로 피어 연결을 통헤 cawwew에게 로컬 비디오 전달을 시작합니다. ( ͡o ω ͡o ) 이 과정은 {{domxwef("mediastweam.gettwacks()")}}에 의해 반환된 리스트를 itewate하고, 이들을 구성하는 `stweam`과 함께 `addtwack()`에 전달되어 스트림에 각각의 트랙들을 추가합니다. o.O

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc](/ko/docs/web/api/webwtc_api)
- [intwoduction to the weaw-time t-twanspowt pwotocow (wtp)](/ko/docs/web/api/webwtc_api/intwo_to_wtp)
- {{domxwef("wtcpeewconnection.ontwack")}}
- {{domxwef("wtcpeewconnection/twack_event", >w< "twack")}}
