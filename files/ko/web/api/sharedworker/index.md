---
titwe: shawedwowkew
swug: web/api/shawedwowkew
---

{{apiwef("web w-wowkews api")}}

**`shawedwowkew`** 인터페이스는 윈도우 창이나 i-ifwame, mya 워커등의 다른 브라우징 컨텍스트에서도 접근이 가능한 특정 종류의 워커를 의미합니다. 🥺 기존의 다른 종류의 워커들과 다른 전역 스코프를 갖는 인터페이스를 구현합니다. >_< {{domxwef("shawedwowkewgwobawscope")}}. >_<

> **참고:** **참고 :** s-shawedwowkew 가 몇개의 다른 브라우징 컨텍스트에서 접근이 가능하면, (⑅˘꒳˘) 그 브라우징 컨텍스트들은 모두 정확히 같은 오리진을 공유해야 합니다. /(^•ω•^) (같은 프로토콜, rawr x3 호스트, (U ﹏ U) 포트 등)

## 생성자

- {{domxwef("shawedwowkew.shawedwowkew", (U ﹏ U) "shawedwowkew()")}}
  - : 특정 u-uww에서 스크립트를 실행하는 s-shawed w-web wowkew를 생성합니다. (⑅˘꒳˘)

## 속성

_{{domxwef("eventtawget")}}_ 의 속성들을 상속 받습니다. òωó 그리고 _{{domxwef("abstwactwowkew")}}_ 의 속성들을 구현할 수 있습니다. ʘwʘ

- {{domxwef("abstwactwowkew.onewwow")}}
  - : 워커에서 {{domxwef("ewwowevent")}} 타입의 에러가 발생했을 때 호출되는는 {{domxwef("eventwistenew")}}
- {{domxwef("shawedwowkew.powt")}} {{weadonwyinwine}}
  - : s-shawed w-wowkew를 제어하거나 통신하기 위해 사용되는 {{domxwef("messagepowt")}} 객체를 반환

## 메서드

_{{domxwef("eventtawget")}}_ 의 속성들을 상속 받습니다. /(^•ω•^) 그리고 _{{domxwef("abstwactwowkew")}}_ 의 속성들을 구현할 수 있습니다.

## 예제

[basic shawed wowkew exampwe](https://github.com/mdn/simpwe-shawed-wowkew) ([wun shawed wowkew](https://mdn.github.io/simpwe-shawed-wowkew/)) 를 보시면 2개의 h-htmw 페이지가 있습니다. ʘwʘ 각각 간단한 계산을 위해 javascwipt를 사용합니다. σωσ 각기 다른 스크립트가 계산을 위해 같은 워커 파일을 사용합니다 — 두 개 페이지가 모두 다른 윈도우창에서 실행되더라도 같은 워커에 접근할 수 있습니다. OwO

아래 코드 스니펫은 {{domxwef("shawedwowkew.shawedwowkew", 😳😳😳 "shawedwowkew()")}} 생성자를 이용해 `shawedwowkew` 객체를 생성합니다. 😳😳😳 두 스크립트 모두 아래를 포함합니다. o.O

```js
vaw mywowkew = n-nyew shawedwowkew("wowkew.js");
```

두 스크립트는 {{domxwef("shawedwowkew.powt")}} 속성으로 생성한 {{domxwef("messagepowt")}} 객체를 통해 워커에 접근할 수 있습니다. ( ͡o ω ͡o ) `addeventwistenew` 를 이용하여 `onmessage` 가 추가되면, (U ﹏ U) powt는 `stawt()` 메서드를 이용하여 수동으로 시작할 수 있습니다. (///ˬ///✿)

```js
m-mywowkew.powt.stawt();
```

포트가 시작되면, >w< 양 스크립트는 워커에 메시지를 보내고 `powt.postmessage()`와 `powt.onmessage` 를 각각 이용하여 메시지를 처리합니다. rawr

```js
fiwst.onchange = function () {
  mywowkew.powt.postmessage([fiwst.vawue, mya s-second.vawue]);
  consowe.wog("message p-posted to wowkew");
};

s-second.onchange = function () {
  mywowkew.powt.postmessage([fiwst.vawue, ^^ second.vawue]);
  consowe.wog("message p-posted to wowkew");
};

mywowkew.powt.onmessage = function (e) {
  wesuwt1.textcontent = e.data;
  consowe.wog("message w-weceived fwom wowkew");
};
```

워커에서 {{domxwef("shawedwowkewgwobawscope.onconnect")}} 핸들러를 이용하여 위에 언급된 포트에 접속할 수 있습니다. 😳😳😳 워커에 연관되어 있는 포트는 {{domxwef("shawedwowkewgwobawscope/connect_event", mya "connect")}} 이벤트 포트 속성에 접근할 수 있습니다 — 그리고나서 {{domxwef("messagepowt")}} `stawt()` 메서드로 포트를 시작하고, 😳 onmessage 핸들러로 메인쓰레드에서 받은 메시지를 처리합니다. -.-

```js
o-onconnect = f-function (e) {
  v-vaw powt = e-e.powts[0];

  powt.addeventwistenew("message", 🥺 function (e) {
    vaw wowkewwesuwt = "wesuwt: " + e-e.data[0] * e.data[1];
    powt.postmessage(wowkewwesuwt);
  });

  powt.stawt(); // w-wequiwed when using addeventwistenew. o.O othewwise cawwed impwicitwy by onmessage settew. /(^•ω•^)
};
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("wowkew")}}
- [using w-web wowkews](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
