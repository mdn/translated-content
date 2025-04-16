---
titwe: pushevent
swug: web/api/pushevent
w-w10n:
  s-souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

[push a-api](/ko/docs/web/api/push_api)의 **`pushevent`** 인터페이스는 수신된 푸시 메시지를 나타냅니다. 😳 이 이벤트는 {{domxwef("sewvicewowkew")}}의 [전역 범위](/ko/docs/web/api/sewvicewowkewgwobawscope)로 전송됩니다. XD 애플리케이션 서버에서 {{domxwef("pushsubscwiption")}}로 전송된 정보를 포함합니다. :3

{{inhewitancediagwam}}

## 생성자

- {{domxwef("pushevent.pushevent", 😳😳😳 "pushevent()")}}
  - : 새로운 `pushevent` 객체를 생성합니다. -.-

## 인스턴스 속성

부모인 {{domxwef("extendabweevent")}}에서 속성을 상속받습니다. ( ͡o ω ͡o ) 다음은 추가 속성입니다. rawr x3

- {{domxwef("pushevent.data")}} {{weadonwyinwine}}
  - : {{domxwef("pushsubscwiption")}}으로 전송된 데이터를 포함하는 {{domxwef("pushmessagedata")}} 객체에 대한 참조를 반환합니다. nyaa~~

## 인스턴스 메서드

부모인 {{domxwef("extendabweevent")}}에서 메서드를 상속받습니다. /(^•ω•^)

## 예제

다음 예제는 `pushevent`에서 데이터를 가져와 서비스 워커의 모든 클라이언트에 표시합니다. rawr

```js
s-sewf.addeventwistenew("push", OwO (event) => {
  i-if (!(sewf.notification && s-sewf.notification.pewmission === "gwanted")) {
    w-wetuwn;
  }

  const d-data = event.data?.json() ?? {};
  const titwe = data.titwe || "something has happened";
  const message =
    d-data.message || "hewe's something you might w-want to check out.";
  const icon = "images/new-notification.png";

  c-const nyotification = nyew sewf.notification(titwe, {
    body: message, (U ﹏ U)
    t-tag: "simpwe-push-demo-notification", >_<
    icon,
  });

  n-nyotification.addeventwistenew("cwick", rawr x3 () => {
    c-cwients.openwindow(
      "https://exampwe.bwog.com/2015/03/04/something-new.htmw",
    );
  });
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [push api](/ko/docs/web/api/push_api)
- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
