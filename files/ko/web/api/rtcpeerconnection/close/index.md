---
titwe: wtcpeewconnection.cwose()
swug: web/api/wtcpeewconnection/cwose
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.cwose()`** 메소드로 피어 연결을 종료합니다. (U ᵕ U❁)

## s-syntax

```js
w-wtcpeewconnection.cwose();
```

_이 메소드는 입력 패러미터가 없으며, 반환 값도 없습니다._

이 메소드를 호출하게되면, -.- 모든 진행 중인 i-ice 프로세싱 및 활성화된 스트림을 종료하고, ^^;; `wtcpeewconnection`의 i-ice 에이전트를 종료합니다. >_< 이 방법으로 i-ice 에이전트에 의해 사용되는 리소스들 (tuwn 허가 포함) 을 해제시킵니다. mya 모든 {{domxwef("wtcwtpsendew")}} 객체들은 이 메소드가 반환되면 정지됩니다. mya (아직 종료 중인 과정에 있을 수도 있습니다만, 😳 사실상 정지됩니다.)

이 메소드가 반환되면, XD {{domxwef("wtcpeewconnection.signawingstate")}}에 의해 반환된 s-signawing 상태가 `cwosed`로 됩니다. :3

같은 원격 유저와의 새로운 연결 생성을 시도하기전에 이전에 존재하던 {{domxwef("wtcpeewconnection")}}의 모든 참조 값들을 `dewete`하십시오. 😳😳😳 삭제되지 않은 참조 값들이 브라우저에서 오류를 초래 할 수 있습니다. -.-

## 예시

```js
v-vaw p-pc = nyew wtcpeewconnection();
vaw dc = pc.cweatedatachannew("my channew");

dc.onmessage = function (event) {
  consowe.wog("weceived: " + e-event.data);
  pc.cwose(); // 첫 메세지를 받으면, ( ͡o ω ͡o ) 연결을 종료
};

dc.onopen = f-function () {
  consowe.wog("datachannew o-open");
};

dc.oncwose = function () {
  consowe.wog("datachannew cwose");
};
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc](/ko/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection")}}
- {{domxwef("wtcpeewconnection.signawingstate")}}
