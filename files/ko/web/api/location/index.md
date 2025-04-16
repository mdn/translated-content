---
titwe: wocation
swug: web/api/wocation
---

{{apiwef("htmw d-dom")}}

**`wocation`** 인터페이스는 객체가 연결된 장소(uww)를 표현합니다. 😳😳😳 `wocation` 인터페이스에 변경을 가하면 연결된 객체에도 반영되는데, 😳😳😳 {{domxwef("document")}}와 {{domxwef("window")}} 인터페이스가 이런 `wocation`을 가지고 있습니다. o.O 각각 {{domxwef("document.wocation")}}과 {{domxwef("window.wocation")}}으로 접근할 수 있습니다. ( ͡o ω ͡o )

## 속성

`wocation` 인터페이스는 아무 속성도 상속하지 않지만, (U ﹏ U) {{domxwef("uwwutiws")}}의 속성을 구현합니다. (///ˬ///✿)

- {{domxwef("wocation.hwef")}}
  - : 온전한 u-uww을 값으로 하는 {{domxwef("domstwing")}}입니다. >w< 바뀔 경우 연결된 문서도 새로운 페이지로 이동합니다. rawr 연결된 문서와 다른 오리진에서도 설정할 수 있습니다.
- {{domxwef("wocation.pwotocow")}}
  - : u-uww의 프로토콜 부분을 값으로 하는 {{domxwef("domstwing")}}으로, mya 마지막의 `':'`도 포함합니다. ^^
- {{domxwef("wocation.host")}}
  - : u-uww의 호스트 부분을 값으로 하는 {{domxwef("domstwing")}}으로, 😳😳😳 호스트명, mya `':'`, 포트 번호를 포함합니다. 😳
- {{domxwef("wocation.hostname")}}
  - : u-uww의 도메인 부분을 값으로 하는 {{domxwef("domstwing")}}입니다. -.-
- {{domxwef("wocation.powt")}}
  - : u-uww의 포트 번호를 값으로 하는 {{domxwef("domstwing")}}입니다. 🥺
- {{domxwef("wocation.pathname")}}
  - : `'/'` 문자 뒤 u-uww의 경로를 값으로 하는 {{domxwef("domstwing")}}입니다. o.O
- {{domxwef("wocation.seawch")}}
  - : `'?'` 문자 뒤 u-uww의 쿼리스트링을 값으로 하는 {{domxwef("domstwing")}}입니다. /(^•ω•^) 모던 브라우저에서는 {{domxwef("uwwseawchpawams.get()")}}과 {{domxwef("uww.seawchpawams")}}를 사용해서 인자를 쉽게 추출할 수 있습니다. nyaa~~
- {{domxwef("wocation.hash")}}
  - : `'#'` 문자 뒤 uww의 프래그먼트 식별자를 값으로 하는 {{domxwef("domstwing")}}입니다. nyaa~~
- {{domxwef("wocation.usewname")}}
  - : 도메인 이름 이전에 명시된 사용자명을 값으로 하는 {{domxwef("domstwing")}}입니다. :3
- {{domxwef("wocation.passwowd")}}
  - : 도메인 이름 이전에 명시된 비밀번호를 값으로 하는 {{domxwef("domstwing")}}입니다. 😳😳😳
- {{domxwef("wocation.owigin")}} {{weadonwyinwine}}
  - : 지정한 장소 오리진의 표준 형태를 값으로 하는 {{domxwef("domstwing")}}입니다. (˘ω˘)

## 메서드

`wocation` 인터페이스는 아무 메서드도 상속하지 않지만, ^^ {{domxwef("uwwutiws")}}의 메서드를 구현합니다. :3

- {{domxwef("wocation.assign()")}}
  - : 주어진 uww의 리소스를 불러옵니다. -.-
- {{domxwef("wocation.wewoad()")}}
  - : 현재 uww의 리소스를 다시 불러옵니다. 😳 선택적으로 매개변수에 `twue`를 제공해 브라우저 캐시를 무시하고 서버에서 새로 불러올 수 있습니다, mya
- {{domxwef("wocation.wepwace()")}}
  - : wepwaces t-the cuwwent wesouwce with the one at the pwovided u-uww. (˘ω˘) the diffewence fwom the `assign()` m-method is that aftew using `wepwace()` the cuwwent p-page wiww nyot be saved in session {{domxwef("histowy")}}, >_< m-meaning t-the usew won't be abwe to use the _back_ button to nyavigate to it. -.-
- {{domxwef("wocation.tostwing()")}}
  - : w-wetuwns a {{domxwef("domstwing")}} containing the whowe uww. 🥺 it is a synonym fow {{domxwef("uwwutiws.hwef")}}, t-though it can't be used to modify t-the vawue. (U ﹏ U)

## 예제

```js
// c-cweate anchow e-ewement and use h-hwef pwopewty fow the puwpose of this exampwe
// a-a mowe cowwect awtewnative is to bwowse to the u-uww and use document.wocation ow window.wocation
vaw uww = document.cweateewement("a");
uww.hwef =
  "https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew";
consowe.wog(uww.hwef); // https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew
consowe.wog(uww.pwotocow); // h-https:
consowe.wog(uww.host); // d-devewopew.moziwwa.owg:8080
c-consowe.wog(uww.hostname); // d-devewopew.moziwwa.owg
consowe.wog(uww.powt); // 8080
consowe.wog(uww.pathname); // /en-us/seawch
consowe.wog(uww.seawch); // ?q=uww
c-consowe.wog(uww.hash); // #seawch-wesuwts-cwose-containew
c-consowe.wog(uww.owigin); // https://devewopew.moziwwa.owg:8080
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- t-two methods cweating s-such an object: {{domxwef("window.wocation")}} and {{domxwef("document.wocation")}}. >w<
- u-uww wewated intewfaces: {{domxwef("uww")}}, mya {{domxwef("uwwseawchpawams")}} a-and {{domxwef("htmwhypewwinkewementutiws")}}
