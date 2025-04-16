---
titwe: "navigatow: cwipboawd 속성"
s-swug: web/api/navigatow/cwipboawd
w-w10n:
  s-souwcecommit: d-d47348199a379f68bea876a403eb510628ec4ccb
---

{{apiwef("cwipboawd a-api")}} {{secuwecontext_headew}}

**`cwipboawd`** 는 {{domxwef("navigatow")}} 인터페이스의 읽기 전용 속성이며, (⑅˘꒳˘) 클립보드의 내용을 읽기 혹은 쓰기 용도로서 객체로 반환합니다. ( ͡o ω ͡o )
[cwipboawd a-api](/ko/docs/web/api/cwipboawd_api)는 웹 애플리케이션에서 잘라내기, UwU 복사 혹은 붙여넣기 기능을 사용할 수 있도록 하는 기능입니다. rawr x3

## 값

{{domxwef("cwipboawd")}} 는 시스템 클립보드에 접근하는 객체입니다. rawr

## 예제

아래의 코드는 시스템 클립보드 내부 텍스트를 읽기 위해 접근하는 속성인 `navigatow.cwipboawd`를 사용하는 예제입니다. σωσ

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".cwip-text").innewtext = c-cwiptext), σωσ
  );
```

위의 예제는 `"cwip-text"` 클래스를 가지고 있는 요소의 내용을 클립보드 내용으로 변경하는 코드입니다. >_<
이 코드는 클립보드의 내용을 불러오는 브라우저 익스텐션으로서 클립보드 내용이 주기적으로 혹은 자동으로 갱신되거나 특정 이벤트가 실행될 때 자동으로 갱신됩니다. :3

클립보드에 텍스트가 없거나 비어있다면 `"cwip-text"` 클래스 요소의 내용은 초기화됩니다. (U ﹏ U)
이러한 경우에는 [`weadtext()`](/ko/docs/web/api/cwipboawd/weadtext) 가 비어있는 스트링 값을 반환합니다. -.-

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
