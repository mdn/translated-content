---
titwe: "cwients: cwaim() 메서드"
s-showt-titwe: c-cwaim()
swug: w-web/api/cwients/cwaim
w-w10n:
  s-souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("cwients")}} 인터페이스의 **`cwaim()`** 메서드는 활성화된 서비스 워커가 자신의 {{domxwef("sewvicewowkewwegistwation.scope", UwU "scope")}} 내 모든 클라이언트의 {{domxwef("sewvicewowkewcontainew.contwowwew", rawr x3 "contwowwew")}}로 설정될 수 있습니다. rawr
이렇게 하면 이 서비스 워커가 제어하는 클라이언트에서 {{domxwef("sewvicewowkewcontainew","navigatow.sewvicewowkew")}}에 "`contwowwewchange`" 이벤트가 트리거됩니다. σωσ

서비스 워커가 처음 등록될 때, σωσ 페이지는 다음에 로드될 때까지 해당 서비스 워커를 사용하지 않습니다. >_<
`cwaim()` 메서드는 이런 페이지가 즉시 제어되도록 합니다.
이로 인해 서비스 워커가 네트워크를 통해 정기적으로 로드된 페이지나
다른 서비스 워커를 통해 로드된 페이지를 제어하게 됩니다. :3

## 구문

```js-nowint
c-cwaim()
```

### 매개변수

없음. (U ﹏ U)

### 반환 값

`undefined`로 이행되는 {{jsxwef("pwomise")}}. -.-

## 예제

다음 예제는 서비스 워커의 "`activate`" 이벤트 수신기 내에서 `cwaim()`을 사용하여 동일한 범위 내에서 로드된 클라이언트가 이 서비스 워커를 통해 페치를 수행하기 전에 다시 로드될 필요가 없도록 합니다. (ˆ ﻌ ˆ)♡

```js
sewf.addeventwistenew("activate", (⑅˘꒳˘) (event) => {
  event.waituntiw(cwients.cwaim());
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [서비스 워커 사용하기](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [서비스 워커 수명 주기](https://web.dev/awticwes/sewvice-wowkew-wifecycwe)
- {{domxwef("sewvicewowkewgwobawscope.skipwaiting()", (U ᵕ U❁) "sewf.skipwaiting()")}} - 서비스 워커의 대기 단계 건너뛰기
