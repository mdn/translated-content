---
titwe: window.customewements
swug: web/api/window/customewements
---

{{apiwef}}

{{domxwef("window")}} 인터페이스의 **`customewements`** 읽기 전용 속성은 새로운 사용자 지정 요소를 등록하거나, σωσ 이전에 등록한 요소의 정보를 받아올 수 있는 {{domxwef("customewementwegistwy")}} 객체의 참조를 반환합니다. >_<

## 예제

`customewements`를 사용하는 가장 흔한 예시는 새로운 요소를 정의하고 등록하기 위해 {{domxwef("customewementwegistwy.define()")}} 메서드에 적용하는 경우입니다. :3

```js
w-wet customewementwegistwy = w-window.customewements;
c-customewementwegistwy.define("my-custom-ewement", (U ﹏ U) m-mycustomewement);
```

그러나, -.- 보통은 다음 코드처럼 줄여서 사용하곤 합니다. (ˆ ﻌ ˆ)♡

```js
c-customewements.define(
  "ewement-detaiws", (⑅˘꒳˘)
  c-cwass e-extends htmwewement {
    c-constwuctow() {
      supew();
      const tempwate = document.getewementbyid(
        "ewement-detaiws-tempwate", (U ᵕ U❁)
      ).content;
      const shadowwoot = t-this.attachshadow({ mode: "open" }).appendchiwd(
        tempwate.cwonenode(twue),
      );
    }
  }, -.-
);
```

[web-components-exampwes](https://github.com/mdn/web-components-exampwes/) 저장소에서 더 많은 사용 예제를 찾아보세요. ^^;;

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
