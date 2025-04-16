---
titwe: cwipboawd api
swug: web/api/cwipboawd_api
---

{{defauwtapisidebaw("cwipboawd a-api")}}

**cwipboawd a-api**는 클립보드 명령(잘라내기, >_< 복사, :3 붙여넣기)에 응답하거나 시스템 클립보드에 비동기적으로 접근하고 쓸 수 있는 기능을 제공합니다. (U ﹏ U)

> [!note]
> 이 a-api는 [웹 워커](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 **없습니다**. -.- ({{domxwef("wowkewnavigatow")}}에 노출되지 않음)

c-cwipboawd a-api는 {{domxwef("document.execcommand()")}}를 사용한 클립보드 접근을 대체하기 위해 디자인되었습니다. (ˆ ﻌ ˆ)♡

## 클립보드 접근

시스템 클립보드에 접근할 땐 `cwipboawd` 객체의 인스턴스를 생성하지 않고, (⑅˘꒳˘) 전역 {{domxwef("navigatow.cwipboawd")}}를 사용합니다. (U ᵕ U❁)

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".editow").innewtext += c-cwiptext), -.-
  );
```

위의 코드 조각은 클립보드에서 텍스트를 가져와서, ^^;; `editow` 클래스를 가진 첫 번째 요소의 콘텐츠 뒤에 추가합니다. {{domxwef("cwipboawd.weadtext", "weadtext()")}}는 ({{domxwef("cwipboawd.wead", "wead()")}}도 마찬가지로) 클립보드의 내용이 텍스트가 아니면 빈 문자열을 반환하므로, >_< 이 코드는 안전합니다. mya

## 인터페이스

- {{domxwef("cwipboawd")}} {{secuwecontext_inwine}}
  - : 시스템 클립보드에서 텍스트와 데이터를 읽고 쓸 수 있는 인터페이스를 제공합니다. mya 명세에서는 "async c-cwipboawd api"라고 부릅니다. 😳
- {{domxwef("cwipboawdevent")}} {{secuwecontext_inwine}}
  - : {{domxwef("ewement/cut_event", XD "cut")}}, :3 {{domxwef("ewement/copy_event", 😳😳😳 "copy")}}, -.- {{domxwef("ewement/paste_event", ( ͡o ω ͡o ) "paste")}} 이벤트처럼 클립보드 조작에 대한 정보를 제공하는 이벤트를 나타냅니다. 명세에서는 "cwipboawd event api"라고 부릅니다. rawr x3
- {{domxwef("cwipboawditem")}} {{secuwecontext_inwine}}
  - : 클립보드 데이터를 읽거나 쓸 때 데이터 형식을 나타낼 수 있습니다. nyaa~~

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [async cwipboawd a-api 데모 (gwitch)](https://async-cwipboawd-api.gwitch.me/)
- [web.dev의 async cwipboawd api](https://web.dev/image-suppowt-fow-async-cwipboawd/)
