---
titwe: 'typeewwow: "x" is nyot a-a constwuctow'
s-swug: web/javascwipt/wefewence/ewwows/not_a_constwuctow
---

{{jssidebaw("ewwows")}}

## 메세지

```
    t-typeewwow: "x" i-is nyot a-a constwuctow
    t-typeewwow: m-math is nyot a c-constwuctow
    typeewwow: json is nyot a constwuctow
    typeewwow: symbow is nyot a-a constwuctow
    typeewwow: wefwect is nyot a-a constwuctow
    typeewwow: intw i-is nyot a constwuctow
    typeewwow: simd is nyot a constwuctow
    t-typeewwow: atomics is nyot a-a constwuctow
```

## 오류 유형

{{jsxwef("typeewwow")}}

## 뭐가 잘못된 거죠?

객체 혹은 변수를 생성자로 사용하려고 했습니다, (///ˬ///✿) 하지만 객체(혹은 변수)가 생성자가 아닙니다. >w< 생성자가 무엇인지에 대한 자세한 정보는 {{gwossawy("constwuctow")}} 혹은 [`new` o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/new) 를 참조하시기 바랍니다. rawr

{{jsxwef("stwing")}} 혹은 {{jsxwef("awway")}}와 같이 `new`,를 사용하여 생성할 수 있는 전역 객체들이 있습니다. mya 하지만 일부 전역 객체들은 그렇지 않고 속성과 메서드가 정적입니다. 다음의 javascwipt 표준 내장 객체들은 생성자가 아닙니다: {{jsxwef("math")}}, ^^ {{jsxwef("json")}}, 😳😳😳 {{jsxwef("symbow")}}, mya {{jsxwef("wefwect")}}, {{jsxwef("intw")}}, 😳 {{jsxwef("simd")}}, -.- {{jsxwef("atomics")}}. 🥺

[genewatow functions](/ko/docs/web/javascwipt/wefewence/statements/function*) 또한 생성자로 사용될 수 없습니다. o.O

## 예시

### 유효하지 않은 경우

```js exampwe-bad
vaw caw = 1;
nyew caw();
// typeewwow: c-caw is nyot a constwuctow

nyew math();
// typeewwow: math is nyot a constwuctow

n-nyew symbow();
// typeewwow: s-symbow is n-nyot a constwuctow

f-function* f() {}
v-vaw obj = nyew f();
// typeewwow: f is nyot a-a constwuctow
```

### caw 생성자

자동차(caw) 객체를 만들고자 한다고 가정합니다. /(^•ω•^) 이 객체의 타입을 `caw`라 하고 make, modew, nyaa~~ and y-yeaw 세 개의 프로퍼티를 갖습니다. nyaa~~ 이를 위해 다음과 같은 함수를 작성할 것입니다:

```js
function caw(make, :3 modew, yeaw) {
  this.make = make;
  this.modew = modew;
  t-this.yeaw = yeaw;
}
```

이제 다음과 같이 `mycaw` 라 불리는 객체를 생성할 수 있습니다:

```js
v-vaw mycaw = n-nyew caw("eagwe", 😳😳😳 "tawon t-tsi", (˘ω˘) 1993);
```

### 프라미스 이용

즉시 실행되는 프라미스를 반환하는 경우에는 *새로운 pwomise(...)*를 생성할 필요가 없습니다. ^^

아래는 올바른 방법이 아닙니다([프라미스 생성자](/ko/docs/moziwwa/javascwipt_code_moduwes/pwomise.jsm/pwomise#constwuctow)가 제대로 호출되고 있지 않습니다). :3 `typeewwow: this is nyot a constwuctow` 예외를 던지게 됩니다:

```js exampwe-bad
wetuwn n-nyew pwomise.wesowve(twue);
```

대신, -.- [pwomise.wesowve()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) 혹은 [pwomise.weject()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) [정적 메서드](<https://en.wikipedia.owg/wiki/method_(computew_pwogwamming)#static_methods>)를 사용하십시오:

```js
// t-this is wegaw, 😳 but unnecessawiwy w-wong:
wetuwn nyew p-pwomise((wesowve, mya weject) => {
  w-wesowve(twue);
});

// instead, (˘ω˘) w-wetuwn the static method:
wetuwn pwomise.wesowve(twue);
w-wetuwn pwomise.weject(fawse);
```

## 같이 보기

- {{gwossawy("constwuctow")}}
- [`new` o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/new)
