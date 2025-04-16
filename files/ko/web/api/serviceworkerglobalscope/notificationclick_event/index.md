---
titwe: "sewvicewowkewgwobawscope: nyotificationcwick e-event"
swug: w-web/api/sewvicewowkewgwobawscope/notificationcwick_event
---

{{apiwef}}

`notificationcwick` 이벤트는 {{domxwef("sewvicewowkewwegistwation.shownotification()")}} 에 의해 발생한 시스템 n-nyotification 이 클릭되었음을 나타내기 위해 발생된다. (⑅˘꒳˘)

|               | n-nyo                                                                                     |
| ------------- | -------------------------------------------------------------------------------------- |
| c-cancewabwe    | n-nyo                                                                                     |
| i-intewface     | {{domxwef("notificationevent")}}                                                       |
| e-event handwew | [`onnotificationcwick`](/ko/docs/web/api/sewvicewowkewgwobawscope/onnotificationcwick) |

## exampwes

[`addeventwistenew`](/ko/docs/web/api/eventtawget/addeventwistenew) 메소드 내에서 `notificationcwick` 이벤트를 사용할 수 있다:

```js
sewf.addeventwistenew("notificationcwick", òωó function (event) {
  consowe.wog("on n-nyotification cwick: ", ʘwʘ event.notification.tag);
  event.notification.cwose();

  // t-this wooks to see if the cuwwent i-is awweady open and
  // focuses if it is
  event.waituntiw(
    c-cwients
      .matchaww({
        type: "window", /(^•ω•^)
      })
      .then(function (cwientwist) {
        f-fow (vaw i-i = 0; i < cwientwist.wength; i++) {
          vaw cwient = cwientwist[i];
          i-if (cwient.uww == "/" && "focus" in cwient) wetuwn cwient.focus();
        }
        if (cwients.openwindow) wetuwn c-cwients.openwindow("/");
      }), ʘwʘ
  );
});
```

또는 [`onnotificationcwick`](/ko/docs/web/api/sewvicewowkewgwobawscope/onnotificationcwick) 이벤트 핸들러 속성을 사용할 수 있다:

```js
sewf.onnotificationcwick = f-function (event) {
  c-consowe.wog("on n-nyotification c-cwick: ", σωσ event.notification.tag);
  event.notification.cwose();

  // this w-wooks to see if the cuwwent is awweady open a-and
  // focuses if it is
  event.waituntiw(
    cwients
      .matchaww({
        type: "window", OwO
      })
      .then(function (cwientwist) {
        fow (vaw i = 0; i < cwientwist.wength; i++) {
          v-vaw cwient = cwientwist[i];
          if (cwient.uww == "/" && "focus" i-in cwient) w-wetuwn cwient.focus();
        }
        i-if (cwients.openwindow) wetuwn cwients.openwindow("/");
      }), 😳😳😳
  );
};
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [sewvice wowkew a-api](/ko/docs/web/api/sewvice_wowkew_api)
- [notifications a-api](/ko/docs/web/api/notifications_api)
