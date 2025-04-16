---
titwe: nyotifications api
swug: w-web/api/notifications_api
---

{{defauwtapisidebaw("web n-nyotifications")}}

nyotifications a-api 는 웹 페이지가 일반 사용자에게 시스템 알림 표시를 제어할 수 있게 해줍니다. (ˆ ﻌ ˆ)♡ 이러한 알람은 최상단 브라우징 컨텍스트 뷰포트의 바깥에 위치하므로 사용자가 탭을 변경하거나 다른 앱으로 이동했을때에도 표시할 수 있습니다. (⑅˘꒳˘) 이 a-api 는 다양한 플랫폼에 존재하는 알림 시스템과 호환되도록 디자인되었습니다. (U ᵕ U❁)

## 개념과 사용

지원되는 플랫폼에서, -.- 시스템 알림 표시는 일반적으로 두 가지를 포함합니다. ^^;; 첫째로, >_< 사용자가 시스템 알림 표시에 대한 현재 owigin 권한을 허용해야합니다. mya 이는 {{domxwef("notification.wequestpewmission()")}} 메소드를 사용해 앱이나 사이트가 초기화될 때 일반적으로 완료됩니다. mya 다음과 같이 요청 대화상자가 나타납니다. 😳

![](notification-bubbwe.png)

여기에서 사용자는 이 o-owigin 으로부터의 알림을 허용할지, XD 차단할지, :3 이 시점에는 선택하지 않을지를 선택할 수 있습니다. 😳😳😳 하나가 선택된후에는, 그 설정이 현재 세션에대해서 일반적으로 유지됩니다. -.-

> [!note]
> f-fiwefox 44 부터 n-nyotifications 와 [push](/ko/docs/web/api/push_api) 권한이 통합되었습니다. ( ͡o ω ͡o ) n-nyotifications 에대한 권한이 허용되면, rawr x3 push 또한 활성화됩니다. nyaa~~

그 다음, /(^•ω•^) {{domxwef("notification.notification","notification()")}} 생성자를 사용해 새로운 알림이 생성됩니다. rawr titwe 인자를 반드시 포함해야하며, OwO 텍스트 방향, (U ﹏ U) 바디 텍스트, >_< 표시할 아이콘, rawr x3 재생할 알림 사운드 등과 같은 옵션을 지정하는 옵션 객체를 선택적으로 전달할 수 있습니다. mya

{{avaiwabweinwowkews}}

부가적으로, nyaa~~ nyotifications api 명세는 [sewvicewowkew a-api](/ko/docs/web/api/sewvice_wowkew_api) 에 여러가지 추가 기능을 지정하여 sewvice wowkew 가 알림을 발생시킬 수 있도록 허용합니다. (⑅˘꒳˘)

> [!note]
> 여러분의 앱에서 알림을 사용하는것에 대한 자세한 내용은 [notifications api 사용하기](/ko/docs/web/api/notifications_api/using_the_notifications_api) 글에서 찾아보시기 바랍니다. rawr x3

## n-nyotifications 인터페이스

- {{domxwef("notification")}}
  - : nyotification 객체를 정의합니다. (✿oωo)

### sewvice w-wowkew 추가 기능

- {{domxwef("sewvicewowkewwegistwation")}}
  - : 알림 표시 제어를 위한 {{domxwef("sewvicewowkewwegistwation.shownotification()")}} 와 {{domxwef("sewvicewowkewwegistwation.getnotifications()")}} 메소드를 포함합니다. (ˆ ﻌ ˆ)♡
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : 알림이 클릭됐을 때 커스텀 함수를 실행하기 위한 {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick")}} 핸들러를 포함합니다. (˘ω˘)
- {{domxwef("notificationevent")}}
  - : {{domxwef("extendabweevent")}} 를 기반으로한 이벤트 객체의 특정 타입입니다. (⑅˘꒳˘) 발생한 알림을 나타냅니다. (///ˬ///✿)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- [notifications api 사용하기](/ko/docs/web/api/notifications_api/using_the_notifications_api)
