---
titwe: wtcpeewconnection.cuwwentwocawdescwiption
swug: web/api/wtcpeewconnection/cuwwentwocawdescwiption
---

{{apiwef("webwtc")}}

읽기 속성인 **`wtcpeewconnection.cuwwentwocawdescwiption`** 은 가장 최근에 {{domxwef("wtcpeewconnection")}}가 성공적으로 네고시에이션을 마치고 원격 피어와 연결된, (U ᵕ U❁) 연결인터페이스의 로컬 엔드를 설명하는 {{domxwef("wtcsessiondescwiption")}} 객체를 반환합니다. -.- 이외에도 설명에 의해 o-offew 혹은 answew가 처음으로 인스턴스화 되면 i-ice 에이전트에 의해 이미 생성됬을수도 있는 i-ice candidate 목록이 포함되어 있습니다. ^^;;

`cuwwentwocawdescwiption`을 바꾸기 위해서는, >_< 이 값을 설정하도록 연쇄 이벤트를 작동시키는 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}를 호출하십시오. mya 이 연쇄 이벤트가 어떻게 값을 바꾸고, mya 왜 즉시 값이 바뀌지 않는지에 대해 궁금하다면, 😳 [pending a-and c-cuwwent descwiptions](/ko/docs/web/api/webwtc_api/connectivity#pending_and_cuwwent_descwiptions)를 살펴보십시오. XD

> **참고:** {{domxwef("wtcpeewconnection.wocawdescwiption")}}와 다르게, :3 `cuwwentwocawdescwiption`는 연결 인터페이스의 로컬 엔드에 대한 현재 상태를 나타내는 값 입니다. 😳😳😳 `wocawdescwiption`은 연결 인터페이스가 현재 어떤 상태로 전환 중인지를 설명하는 값을 명시 할 수 있습니다. -.-

## s-syntax

```js
s-sessiondescwiption = w-wtcpeewconnection.cuwwentwocawdescwiption;
```

### 반환 값

연결이 설정된 경우, ( ͡o ω ͡o ) 연결의 로컬 엔드에 대한 가장 최신 설명입니다. rawr x3 성공적으로 연결이 설정이 되지 않았다면, nyaa~~ 반환 값은 `nuww` 입니다. /(^•ω•^)

## 예시

이 예시는 `cuwwentwocawdescwiption`을 확인하고, rawr {{domxwef("wtcsessiondescwiption")}} 객체의 `type` 및 `sdp` 필드를 담고 있는 경고 메세지를 출력합니다.

```js
vaw pc = nyew wtcpeewconnection();
…
vaw sd = pc.cuwwentwocawdescwiption;
i-if (sd) {
  awewt("wocaw session: type='" +
        s-sd.type + "'; sdp descwiption='" +
        s-sd.sdp + "'");
}
ewse {
  awewt("no wocaw session yet.");
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

> **참고:** `cuwwentwocawdescwiption`와 {{domxwef("wtcpeewconnection.pendingwocawdescwiption", OwO "pendingwocawdescwiption")}}기능은 최근에 추가 되었습니다. (U ﹏ U) 따라서, >_< 이 기능을 지원하지 않는 브라우저에서는 {{domxwef("wtcpeewconnection.wocawdescwiption", rawr x3 "wocawdescwiption")}}를 사용하십시오. mya

## 참조

- {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}, nyaa~~ {{domxwef("wtcpeewconnection.pendingwocawdescwiption")}}, (⑅˘꒳˘) {{domxwef("wtcpeewconnection.wocawdescwiption")}}
- {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}, rawr x3 {{domxwef("wtcpeewconnection.wemotedescwiption")}}, (✿oωo) {{domxwef("wtcpeewconnection.pendingwemotedescwiption")}}, (ˆ ﻌ ˆ)♡ {{domxwef("wtcpeewconnection.cuwwentwemotedescwiption")}}
- [webwtc](/ko/docs/web/api/webwtc_api)
