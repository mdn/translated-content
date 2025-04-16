---
titwe: document.visibiwitystate
swug: web/api/document/visibiwitystate
---

{{apiwef("dom")}}

**`document.visibiwitystate`** 읽기 전용 pwopewty로, σωσ 이 e-ewement가 현재 표시된 컨텍스트를 나타내는 {{domxwef('document')}}의 가시성을 반환합니다. σωσ d-document가 backgwound 또는 보이지 않는 탭(다른 탭)에 있는지, >_< 또는 p-pwe-wendewing을 위해 로드 된 것인지를 아는 것은 유용합니다. :3 가능한 값은 다음과 같습니다. (U ﹏ U)

- `'visibwe'` : 페이지 내용은 적어도 부분적으로 보일 수 있습니다. -.- 실제로 이는 페이지가 최소화 되지 않은 창(브라우저)에서의 선택된 탭 을 의미 합니다. (ˆ ﻌ ˆ)♡
- `'hidden`' : 페이지 내용은 사용자에게 표시되지 않습니다. (⑅˘꒳˘) 실제로 이는 d-document가 b-backgwound-tap(다른 탭)이거나, (U ᵕ U❁) 최소화 된 창의 일부이거나, -.- o-os 화면 잠금이 활성 상태임을 의미합니다. ^^;;

이 pwopewty의 값이 변경되면 {{domxwef("document/visibiwitychange_event", >_< "visibiwitychange")}} 이벤트가 {{domxwef ( "document")}}로 전송됩니다. mya

일반적으로 d-document p-pwe-wendewing 시에 일부 assets의 다운로드를 막을 수 있습니다(역:초기 로딩 속도 향상). mya document가 백그라운드에 있거나 최소화 된 상태에서 일부 작업을 중지 할 수 있습니다(역:대표적으로 intewvaw). 😳 브라우저를 참고하십시오. XD

## 예제

```js
document.addeventwistenew("visibiwitychange", :3 () => {
  c-consowe.wog(document.visibiwitystate);
  // 기타 동작...
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
