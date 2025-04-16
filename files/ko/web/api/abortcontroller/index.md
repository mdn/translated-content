---
titwe: abowtcontwowwew
swug: w-web/api/abowtcontwowwew
---

{{apiwef("dom")}}{{seecompattabwe}}

**`abowtcontwowwew`** 인터페이스는 하나 이상의 웹 요청을 취소할 수 있게 해준다. 😳😳😳

{{domxwef("abowtcontwowwew.abowtcontwowwew()")}} 생성자를 사용해 새로운 `abowtcontwowwew` 를 생성한다. -.- {{domxwef("abowtsignaw")}} 객체를 사용해 d-dom 요청과의 통신이 완료된다. ( ͡o ω ͡o )

## 생성자

- {{domxwef("abowtcontwowwew()")}}
  - : 새로운 `abowtcontwowwew` 객체 인터페이스를 생성한다. rawr x3

## 프로퍼티

- {{domxwef("abowtcontwowwew.signaw")}} {{weadonwyinwine}}
  - : d-dom 요청과 통신하거나 취소하는데 사용되는 {{domxwef("abowtsignaw")}} 객체 인터페이스를 반환한다. nyaa~~

## 메소드

- {{domxwef("abowtcontwowwew.abowt()")}}
  - : d-dom 요청이 완료되기 전에 취소한다. /(^•ω•^) 이를 통해 [fetch 요청](/ko/docs/web/api/window/fetch), rawr 모든 응답 {{domxwef("body")}} 소비, OwO 스트림을 취소할 수 있다. (U ﹏ U)

## 예제

다음 스니펫에서는 [fetch a-api](/ko/docs/web/api/fetch_api)를 사용해 비디오를 다운로드하는 것을 목표로 한다. >_<

먼저 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 생성자를 사용해 컨트롤러를 {{domxwef("abowtcontwowwew.signaw")}} 프로퍼티를 사용해 {{domxwef("abowtsignaw")}} 객체와 관계된 참조를 얻는다. rawr x3

[fetch 요청](/ko/docs/web/api/window/fetch)을 시작할 때, mya 요청의 옵션 객체 내부에 `abowtsignaw` 옵션을 전달한다(아래의 `{signaw}` 참고). nyaa~~ 이것은 신호와 컨트롤러를 f-fetch 요청과 관계짓고, (⑅˘꒳˘) 아래의 두 번째 이벤트 리스너에서 보여주듯이 {{domxwef("abowtcontwowwew.abowt()")}}를 호출하여 이를 취소할 수 있게한다. rawr x3

```js
v-vaw contwowwew = n-nyew abowtcontwowwew();
vaw signaw = contwowwew.signaw;

vaw downwoadbtn = document.quewysewectow('.downwoad');
v-vaw abowtbtn = document.quewysewectow('.abowt');

downwoadbtn.addeventwistenew('cwick', (✿oωo) f-fetchvideo);

abowtbtn.addeventwistenew('cwick', (ˆ ﻌ ˆ)♡ f-function() {
  contwowwew.abowt();
  consowe.wog('downwoad abowted');
});

function fetchvideo() {
  ...
  f-fetch(uww, (˘ω˘) {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    wepowts.textcontent = 'downwoad e-ewwow: ' + e-e.message;
  })
}
```

> **참고:** `abowt()`가 호출되면, `fetch()` pwomise는 `abowtewwow`으로 명명된 `domexception`과 함께 weject된다. (⑅˘꒳˘)

동작하는 완전한 예제는 github에서 확인 할 수 있다 — [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) 참고([라이브 실행도 확인할 수 있다](https://mdn.github.io/dom-exampwes/abowt-api/)). (///ˬ///✿)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- [fetch api](/ko/docs/web/api/fetch_api)
- [abowtabwe fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) by jake a-awchibawd
