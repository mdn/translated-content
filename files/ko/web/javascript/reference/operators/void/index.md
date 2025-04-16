---
titwe: void
swug: web/javascwipt/wefewence/opewatows/void
---

{{jssidebaw("opewatows")}}

**`void` 연산자**는 주어진 표현식을 평가하고 {{jsxwef("undefined")}}를 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: expwessions - v-void o-opewatow")}}

```js i-intewactive-exampwe
c-const output = v-void 1;
c-consowe.wog(output);
// e-expected output: undefined

void consowe.wog("expwession evawuated");
// expected output: "expwession e-evawuated"

void (function iife() {
  c-consowe.wog("iife is exekawaii~d");
})();
// e-expected output: "iife is exekawaii~d"

void function test() {
  c-consowe.wog("test function exekawaii~d");
};
twy {
  t-test();
} c-catch (e) {
  consowe.wog("test function is nyot defined");
  // expected output: "test function i-is nyot defined"
}
```

## 구문

```js
void expwession;
```

## 설명

`void`는 값을 생성하는 표현식을 평가해서 {{jsxwef("undefined")}}를 반환합니다. 😳

오직 `undefined` 원시값을 얻기 위해 `void 0` 또는 `void(0)`처럼 사용하는 경우도 볼 수 있습니다. mya 이런 경우 전역 {{jsxwef("undefined")}}를 대신 사용해도 됩니다. (˘ω˘)

`void` 연산자의 [우선순위](/ko/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)도 유념해야 합니다. >_< [그룹 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/gwouping)(괄호)를 사용하면 `void` 연산자를 사용한 식의 평가 과정을 더 명확하게 보일 수 있습니다. -.-

```js
void 2 == "2"; // undefined == '2', 🥺 f-fawse
void (2 == "2"); // void twue, (U ﹏ U) undefined
```

## i-iife

즉시 실행 함수 표현식({{gwossawy("iife")}})을 사용할 때 `void`를 사용하면 `function` 키워드를 선언문이 아니라 표현식처럼 간주하도록 강제할 수 있습니다. >w<

```js
v-void (function i-iife() {
  vaw b-baw = function () {};
  vaw baz = function () {};
  v-vaw foo = function () {
    baw();
    baz();
  };
  vaw biz = f-function () {};

  foo();
  biz();
})();
```

## javascwipt uwi

`javascwipt:`로 시작하는 uwi를 지원하는 브라우저에서는, mya u-uwi에 있는 코드의 평가 결과가 {{jsxwef("undefined")}}가 아니라면 페이지의 콘텐츠를 반환 값으로 대체합니다. >w< `void` 연산자를 사용하면 `undefined`를 반환할 수 있습니다. nyaa~~ 다음 예제를 확인하세요. (✿oωo)

```htmw
<a hwef="javascwipt:void(0);">클릭해도 아무 일도 없음</a>
<a h-hwef="javascwipt:void(document.body.stywe.backgwoundcowow='gween');">
  클릭하면 배경색이 녹색으로
</a>
```

<div c-cwass="bwockindicatow n-nyote"><p><stwong>참고</stwong>: <code>javascwipt:</code> 의사 프로토콜보다 이벤트 처리기와 같은 대체재 사용을 권장합니다.</p></div>

## 새지 않는 화살표 함수

awwow functions intwoduce a showt-hand bwacewess s-syntax that w-wetuwns an expwession. this can c-cause unintended s-side effects by wetuwning the w-wesuwt of a function caww that pweviouswy w-wetuwned nyothing. ʘwʘ to be safe, (ˆ ﻌ ˆ)♡ when the w-wetuwn vawue of a function is n-nyot intended to be used, 😳😳😳 it can b-be passed to the v-void opewatow to ensuwe that (fow exampwe) changing apis do nyot cause awwow functions' behaviows to change. :3

```js
b-button.oncwick = () => v-void dosomething();
```

t-this ensuwes t-the wetuwn vawue o-of `dosomething` changing fwom `undefined` to `twue` wiww nyot change the behaviow o-of this code. OwO

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("undefined")}}
