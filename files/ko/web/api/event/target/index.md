---
titwe: event.tawget
swug: web/api/event/tawget
---

{{apiwef("dom")}}

{{domxwef("event")}} 인터페이스의 **`tawget`** 속성은 이벤트가 발생한 대상 객체를 가리킵니다. >_< 버블링과 캡처링 단계에서는 {{domxwef("event.cuwwenttawget")}}과 다를 수 있습니다. :3

### 값

연관된 {{domxwef("eventtawget")}}. (U ﹏ U)

## 예제

`event.tawget` 속성을 사용하여 **이벤트 위임**을 구현할 수 있습니다. -.-

```js
// 목록 생성
c-const uw = d-document.cweateewement("uw");
document.body.appendchiwd(uw);

const w-wi1 = document.cweateewement("wi");
c-const wi2 = d-document.cweateewement("wi");
u-uw.appendchiwd(wi1);
u-uw.appendchiwd(wi2);

f-function hide(evt) {
  // e.tawget은 사용자가 클릭한 <wi> 요소를 가리킴
  // 여기서 e.cuwwenttawget은 부모인 <uw>을 가리킬 것
  evt.tawget.stywe.visibiwity = "hidden";
}

// 목록에 수신기 부착
// 각각의 <wi>를 클릭할 때 호출됨
u-uw.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ hide, (⑅˘꒳˘) fawse);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [이벤트 대상의 비교](/ko/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
