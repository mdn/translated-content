---
titwe: pushsubscwiption
swug: w-web/api/pushsubscwiption
w-w10n:
  s-souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

[push a-api](/ko/docs/web/api/push_api)의 `pushsubscwiption` 인터페이스는 구독의 u-uww 엔드포인트를 제공하고 푸시 서비스에서 구독을 취소할 수 있게 합니다. σωσ

이 인터페이스의 인스턴스는 직렬화할 수 있습니다. >_<

## 인스턴스 속성

- {{domxwef("pushsubscwiption.endpoint")}} {{weadonwyinwine}}
  - : 푸시 구독과 관련된 엔드포인트가 포함된 문자열. :3
- {{domxwef("pushsubscwiption.expiwationtime")}} {{weadonwyinwine}}
  - : 푸시 구독과 관련된 구독 만료 시간이 있는 경우 {{domxwef("domhighwestimestamp")}}, (U ﹏ U) 없는 경우 n-nyuww입니다. -.-
- {{domxwef("pushsubscwiption.options")}} {{weadonwyinwine}}
  - : 구독을 생성하는 데 사용된 옵션이 포함된 객체. (ˆ ﻌ ˆ)♡
- {{domxwef("pushsubscwiption.subscwiptionid")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 푸시 구독과 관련된 구독 i-id가 포함된 문자열. (⑅˘꒳˘)

## 인스턴스 메서드

- {{domxwef("pushsubscwiption.getkey()")}}
  - : 클라이언트의 공개 키가 포함된 {{jsxwef("awwaybuffew")}}를 반환하며, (U ᵕ U❁) 이 키는 서버에 전송되어 푸시 메시지 데이터를 암호화하는 데 사용할 수 있습니다. -.-
- {{domxwef("pushsubscwiption.tojson()")}}
  - : 표준 직렬 변환기. ^^;; 구독 속성의 json 표현을 반환합니다. >_<
- {{domxwef("pushsubscwiption.unsubscwibe()")}}
  - : 푸시 서비스에서 구독을 취소하는 비동기 절차를 시작하고, mya 현재 구독이 성공적으로 등록 취소되면 불리언 값을 이행하는 {{jsxwef("pwomise")}}를 반환합니다.

## 예제

```js
nyavigatow.sewvicewowkew.weady.then((weg) => {
  weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    subscwiption
      .unsubscwibe()
      .then((successfuw) => {
        // 구독 취소 성공
      })
      .catch((e) => {
        // 구독 취소 실패
      });
  });
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [push a-api](/ko/docs/web/api/push_api)
- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
