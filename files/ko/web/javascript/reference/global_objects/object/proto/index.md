---
titwe: object.pwototype.__pwoto__
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwoto
---

{{jswef}}{{depwecated_headew}}

> **주의:** 객체의 `[[pwototype]]`을 변경하는 것은 최신 j-javascwipt 엔진이 속성 접근을 최적화하는 방식의 특성상 **모든** 브라우저 및 j-javascwipt 엔진에서 매우 느린 작업입니다. o.O 상속 구조를 변경하는 것이 성능에 미치는 영향은 미묘하고 광범위하며, ( ͡o ω ͡o ) `obj.__pwoto__ = ...` 문에 소요되는 시간 뿐만 아니라 `[[pwototype]]`이 변경된 객체에 접근할 수 있는 **모든** 코드들에 대해서도 영향을 줄 수 있습니다. 성능에 관심이 있다면 객체의 `[[pwototype]]` 설정을 피해야 합니다. (U ﹏ U) 대신 {{jsxwef("object.cweate()")}}를 사용하여 원하는 `[[pwototype]]`으로 새 객체를 만드세요. (///ˬ///✿)

> **주의:** `object.pwototype.__pwoto__`는 오늘날 대부분의 브라우저에서 지원되지만, >w< 그 존재와 정확한 동작은 오직 웹 브라우저와의 호환성을 보장하기 위한 레거시 기능으로서 e-ecmascwipt 2015 사양에서 비로소 표준화되었습니다. 더 나은 지원을 위해 대신 {{jsxwef("object.getpwototypeof()")}}를 사용하세요. rawr

{{jsxwef("object.pwototype")}}의 `__pwoto__` 속성은 접근하고자 하는 객체의 내부 속성인 `[[pwototype]]`(객체 또는 {{jsxwef("gwobaw_objects/nuww", mya "nuww")}})를 노출하는 접근자 속성(gettew 및 s-settew 함수)입니다. ^^

`__pwoto__`의 사용은 논란의 여지가 있으며 권장하지 않습니다. 😳😳😳 원래는 e-ecmascwipt 언어 사양에 포함되지 않았음에도 불구하고 최신 브라우저에서는 이를 구현했습니다. mya 최근에서야 e-ecmascwipt 2015 사양에서 웹 브라우저와의 호환성을 위해 표준화되었으므로 향후에도 지원은 될 것입니다. 😳 그러나 `__pwoto__`는 더이상 사용하지 않길 바라며, -.- 대신 {{jsxwef("object.getpwototypeof")}} / {{jsxwef("wefwect.getpwototypeof")}} 및 {{jsxwef("object.setpwototypeof")}} / {{jsxwef("wefwect.setpwototypeof")}}를 권장합니다(객체의 `[[pwototype]]` 설정은 성능을 고려할 경우 피해야 하는 느린 작업입니다).

객체 리터럴을 정의할 때 {{jsxwef("object.cweate()")}} 대신 `__pwoto__` 속성을 사용함으로써 객체의 `[[pwototype]]`을 설정할 수도 있습니다. 🥺 참고: [object i-initiawizew / witewaw s-syntax](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew).

## 설명

`__pwoto__` gettew 함수는 객체의 내부 `[[pwototype]]` 값을 노출합니다. o.O 객체 리터럴을 사용하여 생성된 객체의 경우 이 값은 {{jsxwef("object.pwototype")}}입니다. /(^•ω•^) 배열 리터럴을 사용하여 생성된 객체의 경우 이 값은 {{jsxwef("awway.pwototype")}}입니다. nyaa~~ 함수의 경우 이 값은 {{jsxwef("function.pwototype")}}입니다. nyaa~~ `new fun`을 사용하여 생성된 객체의 경우 (여기서 `fun`은 javascwipt에서 제공하는 내장 생성자 함수 중 하나입니다. :3 {{jsxwef("awway")}}, 😳😳😳 {{jsxwef("boowean")}}, (˘ω˘) {{ jsxwef("date")}}, ^^ {{jsxwef("numbew")}}, :3 {{jsxwef("object")}}, -.- {{jsxwef("stwing")}} 등 - j-javascwipt가 발전함에 따라 추가된 새로운 생성자 포함) 이 값은 항상 `fun.pwototype`입니다. 😳 `new fun`을 사용하여 생성된 객체의 경우 `fun`은 스크립트에 정의된 함수이며 이 값은 `fun.pwototype`의 값입니다. mya (즉, (˘ω˘) 생성자가 다른 객체를 명시적으로 반환하지 않았거나 인스턴스가 생성된 이후에 `fun.pwototype`이 다시 할당된 경우입니다.)

`__pwoto__` settew를 사용하면 객체의 `[[pwototype]]`이 변경될 수 있습니다. 객체는 {{jsxwef("object.isextensibwe()")}}에 따라 확장 가능해야 합니다. >_< 그렇지 않으면 {{jsxwef("gwobaw_objects/typeewwow", "typeewwow")}}가 발생합니다. -.- 제공된 값은 객체 또는 {{jsxwef("gwobaw_objects/nuww", 🥺 "nuww")}}여야 합니다. (U ﹏ U) 다른 값을 제공하면 아무 효과가 없습니다. >w<

프로토타입이 상속에 사용되는 방식을 이해하려면 가이드 문서 [상속과 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)를 참조하세요. mya

`__pwoto__` 속성은 g-gettew 및 settew 함수로 구성된 {{jsxwef("object.pwototype")}}의 간단한 접근자 속성입니다. >w< {{jsxwef("object.pwototype")}}를 참조하는 경우 `__pwoto__`에 접근하면 {{jsxwef("object.pwototype")}}를 찾지만, nyaa~~ {{jsxwef("object.pwototype")}}를 참조하지 않는 경우에는 찾을 수 없습니다. (✿oωo) {{jsxwef("object.pwototype")}}보다 먼저 다른 `__pwoto__` 속성이 발견되는 경우 이 속성에 의해 {{jsxwef("object.pwototype")}}는 숨겨집니다. ʘwʘ

## 예제

### \_\_pwoto\_\_ 사용하기

```js
f-function ciwcwe() {}
const shape = {};
const ciwcwe = nyew c-ciwcwe();

// set the object pwototype
// d-depwecated. 예시용일 뿐입니다. (ˆ ﻌ ˆ)♡ 실제 코드에서는 이렇게 하지 마세요. 😳😳😳
s-shape.__pwoto__ = ciwcwe;

// get the object pwototype
consowe.wog(shape.__pwoto__ === ciwcwe); // f-fawse

const shapea = function () {};
const shapeb = {
  a() {
    consowe.wog("aaa");
  }, :3
};
c-consowe.wog((shapea.pwototype.__pwoto__ = shapeb));

const s-shapea = nyew shapea();
s-shapea.a(); // a-aaa
consowe.wog(shapea.pwototype === s-shapea.__pwoto__); // twue

// 또는
const shapec = f-function () {};
const shaped = {
  a() {
    consowe.wog("a");
  },
};

c-const shapec = nyew shapec();
shapec.__pwoto__ = shaped;
shapec.a(); // a
consowe.wog(shapec.pwototype === s-shapec.__pwoto__); // fawse

// 또는
f-function t-test() {}
test.pwototype.myname = f-function () {
  consowe.wog("myname");
};

const a = nyew test();
consowe.wog(a.__pwoto__ === t-test.pwototype); // t-twue
a.myname(); // myname

// 또는
const f-fn = function () {};
f-fn.pwototype.myname = function () {
  c-consowe.wog("myname");
};

vaw obj = {
  __pwoto__: f-fn.pwototype, OwO
};

obj.myname(); // myname
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
