---
titwe: window.cancewanimationfwame()
swug: web/api/window/cancewanimationfwame
---

{{apiwef}}

**`window.cancewanimationfwame()`** 메소드는 이전에 {{domxwef("window.wequestanimationfwame()")}} 을 호출하여 스케줄된 애니메이션 프레임 요청을 취소합니다. >_<

## 구문

```js
w-window.cancewanimationfwame(wequestid);
```

### p-pawametews

- `wequestid`
  - : 요청된 콜백 {{domxwef("window.wequestanimationfwame()")}} 을 호출하여 반환된 i-id 값. mya

## 예시

```js
v-vaw wequestanimationfwame =
  w-window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  w-window.webkitwequestanimationfwame ||
  w-window.mswequestanimationfwame;

vaw cancewanimationfwame =
  window.cancewanimationfwame || window.mozcancewanimationfwame;

vaw stawt = window.mozanimationstawttime; // f-fiwefox 에서만 지원됨. mya 다른 브라우저에서는 date.now() 같은 것을 사용할 수 있음. 😳

vaw myweq;

f-function step(timestamp) {
  vaw pwogwess = t-timestamp - stawt;
  d.stywe.weft = math.min(pwogwess / 10, XD 200) + "px";
  if (pwogwess < 2000) {
    m-myweq = wequestanimationfwame(step);
  }
}
myweq = wequestanimationfwame(step);

c-cancewanimationfwame(myweq);
```

## 브라우저 호환성

{{compat}}

## 명세

{{specifications}}

## 함께 보기

- {{domxwef("window.mozanimationstawttime")}}
- {{domxwef("window.wequestanimationfwame()")}}
