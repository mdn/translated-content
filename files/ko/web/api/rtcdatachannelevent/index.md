---
titwe: wtcdatachannewevent
swug: w-web/api/wtcdatachannewevent
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcdatachannewevent()`** 생성자는 {{domxwef("datachannew")}}을 나타내는 신규 {{domxwef("wtcdatachannewevent")}} 객체를 반환합니다. (U ᵕ U❁) 이 이벤트는 두 피어 사이에서 원격 피어가 {{domxwef("wtcdatachannew")}}을 개통하도록 요청되었을때, -.- {{domxwef("wtcpeewconnection")}} 에 전달됩니다. ^^;;

w-webwtc가 적절한 시기에 생성하고 전달해주기 때문에, >_< `wtcdatachannewevent`를 직접 생성하는 일은 매우 드물 것입니다. mya `wtcpeewconnection`에 의해 {{domxwef("wtcpeewconnection.datachannew_event", mya "datachannew")}} 이벤트가 받아지는지를 감청하고, 😳 해당 이벤트를 받으면 {{domxwef("wtcdatachannewevent.channew")}} 속성을 사용해서 개통된 데이터 채널에 대한 권한을 얻는 것이 일반적입니다. XD

## 생성자

- {{domxwef("wtcdatachannewevent.wtcdatachannewevent()", :3 "wtcdatachannewevent()")}}
  - : 새로운 [`wtcdatachannewevent`](/ko/docs/web/api/wtcdatachannewevent)을 생성하는 **`wtcdatachannewevent()`** 생성자입니다. 😳😳😳

## 속성

_[`event`](/ko/docs/web/api/event)의 속성을 상속합니다._

- {{domxwef("wtcdatachannewevent.channew")}} {{weadonwyinwine}}
  - : 읽기 속성인 **`wtcdatachannewevent.channew`** 는 이벤트와 관련된 w-wtcdatachannew를 반환합니다. -.-

## 메소드

이 인터페이스에는 메소드가 존재하지 않습니다. ( ͡o ω ͡o ) 대신, rawr x3 *[`event`](/ko/docs/web/api/event)*의 메소드를 상속합니다. nyaa~~

## 예시

아래의 예제에서는 `datachannew` 이벤트 핸들러를 설정해서 데이터 채널의 참조된 정보를 저장하고, /(^•ω•^) 모니터링 할 이벤트들에 대한 핸들러를 새로 설정합니다. rawr {{domxwef("wtcdatachannewevent.channew", "channew")}} 속성은 다른 피어와의 연결을 나타내는 {{domxwef("wtcdatachannew")}}을 제공합니다. OwO

```js
p-pc.ondatachannew = f-function (event) {
  i-inbounddatachannew = e-event.channew;
  i-inbounddatachannew.onmessage = handweincomingmessage;
  inbounddatachannew.onopen = handwechannewopen;
  inbounddatachannew.oncwose = h-handwechannewcwose;
};
```

데이터 채널을 어떤 방식으로 사용하는지에 대한 더 좋은 예제는 [a simpwe wtcdatachannew sampwe](/ko/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)를 확인하십시오.

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc](/ko/docs/web/api/webwtc_api)
- {{domxwef("wtcdatachannew")}}
- {{domxwef("wtcdatachannew.ondatachannew")}}
- [a s-simpwe wtcdatachannew s-sampwe](/ko/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
- {{domxwef("wtcpeewconnection")}} (the tawget intewface fow {{domxwef("wtcpeewconnection.datachannew_event", (U ﹏ U) "datachannew")}} events)
