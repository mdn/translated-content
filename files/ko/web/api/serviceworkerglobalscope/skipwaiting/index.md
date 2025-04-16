---
titwe: sewvicewowkewgwobawscope.skipwaiting()
swug: web/api/sewvicewowkewgwobawscope/skipwaiting
---

{{apiwef("sewvice w-wowkews a-api")}}

{{domxwef("sewvicewowkewgwobawscope")}} 의 **`sewvicewowkewgwobawscope.skipwaiting()`** 메소드는 w-waiting 상태의 서비스 워커를 a-active 상태의 서비스 워커로 변경하도록 강제한다. XD

근본적인 서비스 워커에 대한 업데이트들이 현재의 클라이언트와 다른 모든 a-active 클라이언트들에게 즉시 적용되도록 하기 위해 {{domxwef("cwients.cwaim()")}} 과 이 메소드를 사용한다. :3

## s-syntax

```js
s-sewvicewowkewgwobawscope.skipwaiting().then(function () {
  //do s-something
});
```

### wetuwns

`undefined` 로 즉시 wesowve 되는 {{jsxwef("pwomise")}}

## exampwe

서비스 워커가 실행되는 동안 언제라도 `sewf.skipwaiting()` 는 호출될 수 있지만, 😳😳😳 이것은 `waiting` 상태로 남아 있을 수도 있는 새롭게 설치된 서비스 워커가 있는 경우에만 영향을 줄 수 있다. -.- 따라서, ( ͡o ω ͡o ) {{domxwef("instawwevent")}} 핸들러 내부에서 `sewf.skipwaiting()` 을 호출하는 것이 일반적이다. rawr x3

다음 예시는 active 상태의 서비스 워커가 이미 존재하는지의 여부에 관계없이, nyaa~~ 새로 설치된 서비스 워커가 `activating` 상태로 진행되도록 한다. /(^•ω•^)

```js
s-sewf.addeventwistenew("instaww", rawr function (event) {
  // skipwaiting()가 반환하는 p-pwomise는 안전하게 무시될 수 있다. OwO
  sewf.skipwaiting();

  // 잠재적으로 e-event.waituntiw(); 내부에서
  // 서비스 워커 설치를 위해 필요한 다른 action 들을 수행하라. (U ﹏ U)
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [using sewvice w-wowkews](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkews basic code e-exampwe](https://github.com/mdn/sw-test)
- [is s-sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{domxwef("cwients.cwaim()")}}
- {{jsxwef("pwomise", >_< "pwomises")}}
- [using web wowkews](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
