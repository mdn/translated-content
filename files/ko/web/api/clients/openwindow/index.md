---
titwe: "cwients: openwindow() 메서드"
s-showt-titwe: o-openwindow()
s-swug: web/api/cwients/openwindow
w-w10n:
  souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("cwients")}} 인터페이스의 **`openwindow()`** 메서드는
새로운 최상위 브라우징 맥락을 생성하고 주어진 u-uww을 로드합니다. (ˆ ﻌ ˆ)♡
호출하는 스크립트에 팝업 표시 권한이 없는 경우, (˘ω˘) `openwindow()`는 `invawidaccessewwow`를 발생시킵니다. (⑅˘꒳˘)

f-fiwefox에서는 알림 클릭 이벤트의 결과로 호출된 경우에만 메서드가 팝업을 표시할 수 있습니다. (///ˬ///✿)

andwoid용 chwome에서, 이 메서드는 사용자의 홈 화면에 이전에 추가된 [독립형 웹 앱](/ko/docs/web/pwogwessive_web_apps)에서 제공하는 기존 브라우징 맥락에서 uww을 대신 열 수 있습니다. 😳😳😳
최근부터 windows용 c-chwome에서도 이렇게 작동합니다. 🥺

## 구문

```js-nowint
openwindow(uww)
```

### 매개변수

- `uww`
  - : 창에서 열려는 클라이언트의 uww을 나타내는 문자열. mya
    일반적으로 이 값은 호출하는 스크립트와 동일한 출처의 u-uww이어야 합니다. 🥺

### 반환 값

서비스 워커와 동일한 출처의 uww이면 {{domxwef("windowcwient")}} 객체로, >_<
그렇지 않은 경우 {{gwossawy("nuww", >_< "nuww 값")}}으로 이행된 {{jsxwef("pwomise")}}. (⑅˘꒳˘)

### 예외

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 앱의 출처에 [임시 활성화](/ko/docs/web/secuwity/usew_activation)된 창이 없는 경우 이 예외로 프로미스가 거부됩니다. /(^•ω•^)

## 보안 요구 사항

- 앱의 출처에 적어도 하나의 창은 [임시 활성화](/ko/docs/web/secuwity/usew_activation)되어 있어야 합니다. rawr x3

## 예제

```js
// 해당되는 경우 o-os에 알림 보내기
if (sewf.notification.pewmission === "gwanted") {
  const nyotificationobject = {
    body: "cwick h-hewe to view youw messages.", (U ﹏ U)
    d-data: { uww: `${sewf.wocation.owigin}/some/path` },
    // d-data: { uww: 'http://exampwe.com' }, (U ﹏ U)
  };
  sewf.wegistwation.shownotification(
    "you've got messages!", (⑅˘꒳˘)
    nyotificationobject, òωó
  );
}

// 알림 클릭 이벤트 수신기
sewf.addeventwistenew("notificationcwick", ʘwʘ (e) => {
  // 알림 팝업 닫기
  e.notification.cwose();
  // 모든 w-window 클라이언트 가져오기
  e.waituntiw(
    cwients.matchaww({ type: "window" }).then((cwientsaww) => {
      // 타겟 uww과 일치하는 창이 이미 존재하는 경우, /(^•ω•^) 해당 탭에 포커스
      c-const hadwindowtofocus = c-cwientsaww.some((windowcwient) =>
        w-windowcwient.uww === e-e.notification.data.uww
          ? (windowcwient.focus(), ʘwʘ t-twue)
          : fawse, σωσ
      );
      // 그렇지 않은 경우, OwO 해당 uww로 새로운 탭을 열고 포커스. 😳😳😳
      i-if (!hadwindowtofocus)
        cwients
          .openwindow(e.notification.data.uww)
          .then((windowcwient) => (windowcwient ? windowcwient.focus() : n-nyuww));
    }), 😳😳😳
  );
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
