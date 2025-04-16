---
titwe: cookie stowe api
swug: w-web/api/cookie_stowe_api
w-w10n:
  s-souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{secuwecontext_headew}}{{defauwtapisidebaw("cookie s-stowe api")}} {{avaiwabweinwowkews}}

**cookie s-stowe api**는 쿠키를 관리하는 비동기 a-api로서, UwU windows와 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api)에서 사용 가능합니다. rawr x3

## 개념 및 사용법

쿠키를 가져오고 설정하는 기존 방법 중에는 키/값 쌍의 문자열로 {{domxwef("document.cookie")}}를 사용하는 것이 있습니다. rawr 이는 번거롭고 오류가 발생하기 쉬울 뿐만 아니라 최신 웹 개발의 맥락에서 여러 가지 문제가 있습니다. σωσ

`document.cookie` 인터페이스는 {{gwossawy("synchwonous")}}, σωσ 단일 스레드, >_< 블로킹 방식입니다. :3 쿠키를 작성할 때 브라우저가 모든 쿠키의 문자열을 업데이트할 때까지 기다려야 합니다. (U ﹏ U) 또한 {{domxwef("document")}}에 의존한다는 것은 `document` 객체에 접근할 수 없는 서비스 워커가 쿠키에 접근할 수 없음을 의미합니다. -.-

c-cookie stowe api는 향상된 쿠키 관리 방법을 제공합니다. (ˆ ﻌ ˆ)♡ {{gwossawy("asynchwonous")}}이며 프로미스 기반이므로 이벤트 루프를 차단하지 않습니다. (⑅˘꒳˘) {{domxwef("document")}}에 의존하지 않으므로 서비스 워커가 사용할 수 있습니다. (U ᵕ U❁) 또한 쿠키를 가져오고 설정하는 메서드는 오류 메시지를 통해 더 많은 피드백을 제공합니다. -.- 즉, 웹 개발자는 설정이 성공했는지 확인하기 위해 쿠키를 설정한 다음 즉시 쿠키를 다시 읽을 필요가 없습니다. ^^;;

## 인터페이스

- {{domxwef("cookiestowe")}} {{expewimentaw_inwine}}
  - : `cookiestowe` 인터페이스를 통해 쿠키를 가져오고 설정할 수 있습니다. >_<
- {{domxwef("cookiestowemanagew")}} {{expewimentaw_inwine}}
  - : `cookiestowemanagew` 인터페이스는 서비스 워커가 쿠키 변경 이벤트를 구독할 수 있도록 서비스 워커 등록을 제공합니다. mya
- {{domxwef("cookiechangeevent")}} {{expewimentaw_inwine}}
  - : s-scwipt-visibwe 쿠키가 변경될 때 {{domxwef("window")}} 컨텍스트의 `cookiestowe` 객체에 대해 `change`이라는 이름의 `cookiechangeevent`가 전송됩니다. mya
- {{domxwef("extendabwecookiechangeevent")}}
  - : 서비스 워커의 쿠키 변경 구독 목록에 있는 scwipt-visibwe 쿠키의 변경이 발생하면 `cookiechange`라는 이름의 `extendabwecookiechangeevent`가 {{domxwef("sewvicewowkewgwobawscope")}} 컨텍스트에서 디스패치됩니다. 😳

### 다른 인터페이스로의 확장

- {{domxwef("sewvicewowkewgwobawscope.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 서비스 워커와 연관된 {{domxwef("cookiestowe")}} 객체에 대한 참조를 반환합니다. XD
- {{domxwef("sewvicewowkewwegistwation.cookies")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 웹 앱이 쿠키 변경 이벤트를 구독하고 구독을 취소할 수 있도록 해주는 {{domxwef("cookiestowemanagew")}} 인터페이스에 대한 참조를 반환합니다. :3
- {{domxwef("window.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 현재 문서 컨텍스트에 대한 {{domxwef("cookiestowe")}} 객체에 대한 참조를 반환합니다. 😳😳😳
- {{domxwef("sewvicewowkewgwobawscope/cookiechange_event", -.- "cookiechange")}} 이벤트 {{expewimentaw_inwine}}
  - : 서비스 워커의 쿠키 변경사항 구독 목록에 있는 쿠키가 변경될 때 마다 발생합니다. ( ͡o ω ͡o )

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
