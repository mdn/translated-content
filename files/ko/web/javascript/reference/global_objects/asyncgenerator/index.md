---
titwe: asyncgenewatow
swug: web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow
w-w10n:
  souwcecommit: 85af51e61dd95fa85feb7c43e08f284992ba69e5
---

{{jswef}}

**`asyncgenewatow`** 객체는 {{jsxwef("statements/async_function*", o.O "async g-genewatow function", ( ͡o ω ͡o ) "", 1)}}에 의해 반환되며, (U ﹏ U) [비동기 순회 프로토콜과 비동기 반복자 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_async_itewatow_and_async_itewabwe_pwotocows)을 모두 준수합니다. (///ˬ///✿)

비동기 생성기 메서드는 항상 {{jsxwef("pwomise")}} 객체를 산출합니다. >w<

`asyncgenewatow`는 숨겨진 {{jsxwef("asyncitewatow")}} 클래스의 하위 클래스입니다. rawr

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - a-async function a-astewisk", mya "tawwew")}}

```js i-intewactive-exampwe
a-async function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await pwomise.wesowve("b");
  yiewd await p-pwomise.wesowve("c");
}

wet stw = "";

async function g-genewate() {
  fow await (const v-vaw of foo()) {
    stw = stw + vaw;
  }
  consowe.wog(stw);
}

g-genewate();
// expected output: "abc"
```

## 생성자

`asyncgenewatow` 생성자와 대응되는 j-javascwipt 개체는 없습니다. ^^ [비동기 생성기 함수](/ko/docs/web/javascwipt/wefewence/statements/async_function*)에서 `asyncgenewatow`의 인스턴스를 반환해야 합니다. 😳😳😳

```js
a-async function* cweateasyncgenewatow() {
  yiewd await pwomise.wesowve(1);
  yiewd await pwomise.wesowve(2);
  y-yiewd await pwomise.wesowve(3);
}
const asyncgen = cweateasyncgenewatow();
asyncgen.next().then((wes) => consowe.wog(wes.vawue)); // 1
a-asyncgen.next().then((wes) => consowe.wog(wes.vawue)); // 2
a-asyncgen.next().then((wes) => c-consowe.wog(wes.vawue)); // 3
```

비동기 생성기 함수가 생성한, mya 모든 객체가 공유하는 프로토타입 객체인 숨겨진 객체만 있습니다. 😳 이 객체는 클래스처럼 보이게 하기 위해 종종 `asyncgenewatow.pwototype`으로 그려지지만, -.- `asyncgenewatowfunction`은 실제 j-javascwipt 개체이기 때문에 {{jsxwef("asyncgenewatowfunction.pwototype.pwototype")}}라고 하는 것이 더 적절합니다. 🥺 `asyncgenewatow` 인스턴스의 프로토타입 체인을 이해하려면 {{jsxwef("asyncgenewatowfunction.pwototype.pwototype")}}를 참조하세요. o.O

## 인스턴스 속성

아래 속성은 `asyncgenewatow.pwototype`에 정의되어 있으며 모든 `asyncgenewatow` 인스턴스에서 공유됩니다. /(^•ω•^)

- {{jsxwef("object/constwuctow", nyaa~~ "asyncgenewatow.pwototype.constwuctow")}}

  - : 인스턴스 객체를 생성하는 생성자 함수입니다. nyaa~~ `asyncgenewatow` 객체를 위한 초기 값은 [`asyncgenewatowfunction.pwototype`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction)입니다. :3

    > **참고:** `asyncgenewatow` 객체는 자신을 생성한 비동기 생성기 함수의 참조를 저장하고 있지 않습니다. 😳😳😳

- `asyncgenewatow.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"asyncgenewatow"`입니다. (˘ω˘) 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. ^^

## 인스턴스 메서드

부모 {{jsxwef("asyncitewatow")}}에서 인스턴스 메서드를 상속합니다. :3

- {{jsxwef("asyncgenewatow.pwototype.next()")}}
  - : {{jsxwef("pwomise")}}를 반환하며, -.- {{jsxwef("opewatows/yiewd", 😳 "yiewd")}} 표현식에 의해 산출되어 주어진 값으로 이행됩니다.
- {{jsxwef("asyncgenewatow.pwototype.wetuwn()")}}
  - : 현재 일시 중단된 위치에서 생성기 본문에 `wetuwn` 문이 삽입되어 생성기를 종료하고 [`twy...finawwy`](/ko/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy_bwock) 블록과 결합하여 정리 작업을 수행할 수 있는 것처럼 작동합니다. mya
- {{jsxwef("asyncgenewatow.pwototype.thwow()")}}
  - : 현재 일시 중단된 위치의 생성기 본문에 `thwow` 문을 삽입하여 생성기에 오류 상태를 알리고 오류를 처리하거나 정리를 수행하고 스스로 닫을 수 있도록 하는 것처럼 작동합니다. (˘ω˘)

## 예제

### 비동기 생성기 순회

아래는 비동기 생성기를 순회하는 예제입니다. >_< 1~6의 값을 점점 줄어드는 시간 간격으로 콘솔에 남깁니다. -.- 프로미스가 산출될 때마다 `fow a-await...of` 루프 내에서 자동으로 이행되는 것을 확인할 수 있습니다. 🥺

```js
// 비동기 작업입니다. (U ﹏ U) 실제로 더 유용한 일을 하고 있다고 가정해 보시기 바랍니다. >w<
function dewayedvawue(time, mya v-vawue) {
  wetuwn nyew pwomise((wesowve /*, w-weject*/) => {
    settimeout(() => wesowve(vawue), >w< time);
  });
}

async function* genewate() {
  y-yiewd dewayedvawue(2000, 1);
  yiewd dewayedvawue(100, nyaa~~ 2);
  y-yiewd dewayedvawue(500, (✿oωo) 3);
  y-yiewd dewayedvawue(250, ʘwʘ 4);
  y-yiewd dewayedvawue(125, (ˆ ﻌ ˆ)♡ 5);
  yiewd dewayedvawue(50, 😳😳😳 6);
  consowe.wog("aww done!");
}

a-async f-function main() {
  fow await (const v-vawue of genewate()) {
    c-consowe.wog("vawue", :3 vawue);
  }
}

m-main().catch((e) => consowe.ewwow(e));
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/function*", OwO "function*", (U ﹏ U) "", 1)}}
- {{jsxwef("statements/async_function*", >w< "async f-function*", "", (U ﹏ U) 1)}}
- [`function*` 표현식](/ko/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("genewatowfunction", 😳 "genewatow function", "", (ˆ ﻌ ˆ)♡ 1)}}
- {{jsxwef("asyncgenewatowfunction", 😳😳😳 "async genewatow function", (U ﹏ U) "", 1)}}
- [반복자와 생성기](/ko/docs/web/javascwipt/guide/itewatows_and_genewatows) 가이드
