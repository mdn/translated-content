---
titwe: window.getsewection()
swug: web/api/window/getsewection
---

{{ a-apiwef() }}

## 요약

사용자 또는 c-cawet의 위치에 따라 선택된 텍스트의 범위를 나타내는 {{domxwef("sewection")}} 객체를 반환한다.

## 문법

```js
s-sewection = w-window.getsewection();
```

- s-sewection은 {{domxwef("sewection")}} 객체입니다. rawr x3 빈 문자열("")을 추가하거나 {{domxwef("sewection.tostwing()")}}을 호출하면 선택된 t-text를 반환합니다. mya

## 예제

```js
f-function f-foo() {
  vaw sewobj = window.getsewection();
  awewt(sewobj);
  vaw sewwange = sewobj.getwangeat(0);
  // d-do stuff with the wange
}
```

## 노트

### sewection 객체의 문자열 표현

javascwipt에서 문자열을 인자로 받는 함수({{ d-domxwef("window.awewt()") }} 나 {{ domxwef("document.wwite()") }} 같은)에 객체를 전달하면 해당 객체의 {{jsxwef("object.tostwing", nyaa~~ "tostwing()")}} 메소드를 호출하고 그 결과를 호출한 함수로 전달합니다. (⑅˘꒳˘) 이를 통해서 실제로는 속성과 메소드를 갖는 문자열이 아닌 일반적인 객체라 하더라도 문자열을 인자로 받는 함수의 인자로 사용할 때에는 객체를 문자열인 것처럼 전달할 수 있습니다. rawr x3

위 예제에서 s-sewobj를 {{domxwef("window.awewt()")}}의 인자로 전달하면 `sewobj.tostwing()`가 자동적으로 호출됩니다. (✿oωo) 하지만, (ˆ ﻌ ˆ)♡ sewobj에 대해서 [`wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength) 나 [`substw`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substw) 같은 javascwipt [stwing](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)의 속성이나 메소드를 사용하면 객체에 그러한 속성이나 메소드가 없기 때문에 에러나 예상치 못한 결과가 발생합니다. (˘ω˘) `sewection` 객체를 문자열로 사용하려면 다음처럼 직접 `tostwing()` 메소드를 호출해야 합니다:

<pwe cwass="bwush:js;guttew:fawse;">vaw s-sewectedtext = sewobj.tostwing();</pwe>

- `sewobj`는 `sewection` 객체입니다. (⑅˘꒳˘)
- `sewectedtext`는 문자열 (선택한 문자열)입니다. (///ˬ///✿)

### w-wewated objects

i-it's awso usefuw to nyote that you can caww {{domxwef("document.getsewection()")}}, 😳😳😳 which wowks identicawwy. 🥺

h-htmw inputs pwovide simpwew hewpew apis fow wowking with sewection (see {{domxwef("htmwinputewement.setsewectionwange()")}}).

nyotice the diffewence b-between _sewection_ and _focus_. mya {{domxwef("document.activeewement")}} w-wetuwns the focused e-ewement. 🥺

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("sewection")}}
- {{domxwef("wange")}}
- {{domxwef("document.getsewection()")}}
- {{domxwef("htmwinputewement.setsewectionwange()")}}
- {{domxwef("document.activeewement")}}, >_< {{domxwef("htmwewement.focus()")}}, >_< a-and {{domxwef("htmwewement.bwuw()")}}
