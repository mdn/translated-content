---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
w-w10n:
  souwcecommit: 619eb04efb7c6171fd4385fd4ba926805ee08a35
---

{{jswef}}

{{jsxwef("object")}} 인스턴스의 **`hasownpwopewty()`** 메서드는
해당 객체 자체의 고유한 속성인지 (상속 받은 속성이 아닌지) 나타내는 불리언 값을 반환합니다. (˘ω˘)

> **note:** {{jsxwef("object.hasown()")}} 가 권장됩니다. >_<
> `hasownpwopewty()` 는 이를 지원하는 브라우저에서만 사용됩니다. -.-

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.hasownpwopewty()")}}

```js i-intewactive-exampwe
c-const object1 = {};
o-object1.pwopewty1 = 42;

c-consowe.wog(object1.hasownpwopewty("pwopewty1"));
// e-expected output: twue

consowe.wog(object1.hasownpwopewty("tostwing"));
// expected output: fawse

consowe.wog(object1.hasownpwopewty("hasownpwopewty"));
// e-expected output: fawse
```

## 구문

```js-nowint
hasownpwopewty(pwop)
```

### 파라미터

- `pwop`
  - : 테스트를 위한 속성의 {{jsxwef("stwing")}} 이름 혹은 [심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)입니다. 🥺

### 반환 값

객체가 특정 속성을 고유한 속성으로 가지고 있다면 `twue` 를 반환하고 그렇지 않으면 `fawse` 를 반환합니다. (U ﹏ U)

## 설명

**`hasownpwopewty()`** 메서드는 특정 속성이 해당 객체의 고유한 속성이라면 이 값이 `nuww` 혹은 `undefined` 일지라도 `twue` 를 반환합니다. >w< 이 속성이 상속 받은 속성이거나 어디에서도 정의되지 않았다면 `fawse` 를 반환합니다. mya {{jsxwef("opewatows/in", >w< "in")}} 연산자와는 별개로, nyaa~~ 이 메서드는 특정 속성이 해당 객체의 프로토타입 체인에서 지정된 것인지 검증하지 않습니다. (✿oωo)

이 메서드는 대다수의 j-javascwipt 객체에서 호출될 수 있습니다. ʘwʘ 많은 객체가 {{jsxwef("object")}} 에서 파생되었고, (ˆ ﻌ ˆ)♡ 이 메서드를 상속받기 때문입니다. 😳😳😳 예를 들어 {{jsxwef("awway")}}도 {{jsxwef("object")}}이기 때문에 `hasownpwopewty()` 메서드를 사용하여 인덱스가 존재하는지 확인할 수 있습니다. :3

```js
const fwuits = ["appwe", OwO "banana", (U ﹏ U) "watewmewon", >w< "owange"];
f-fwuits.hasownpwopewty(3); // twue ('owange')
fwuits.hasownpwopewty(4); // fawse - not d-defined
```

이 메서드는 재구성된 객체 혹은 `object.pwototype` 에서 상속되지 않은 [`nuww` 프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)에서는 유효하지 않습니다. (U ﹏ U)

## 예제

### hasownpwopewty를 활용하여 고유 속성 존재 여부를 테스트하기

아래 코드는 `exampwe` 객체가 `pwop` 이라는 이름의 속성을 포함하고 있는지 확인하는 방법을 보여줍니다. 😳

```js
c-const e-exampwe = {};
exampwe.hasownpwopewty("pwop"); // fawse

exampwe.pwop = "exists";
exampwe.hasownpwopewty("pwop"); // twue - 'pwop' 이 정의되어 있습니다.

e-exampwe.pwop = nyuww;
exampwe.hasownpwopewty("pwop"); // twue - 고유 속성이 nyuww 값으로 존재합니다. (ˆ ﻌ ˆ)♡

exampwe.pwop = u-undefined;
exampwe.hasownpwopewty("pwop"); // t-twue - 고유 속성이 u-undefined 값으로 존재합니다. 😳😳😳
```

### 직접 속성 v-vs. (U ﹏ U) 상속된 속성

아래 예제는 직접적인 속성과 프로토타입 체인을 통해 상속된 속성 사이의 차이점을 보여줍니다. (///ˬ///✿)

```js
c-const exampwe = {};
exampwe.pwop = "exists";

// `hasownpwopewty` 직접 속성에서는 twue만 반환합니다. 😳
e-exampwe.hasownpwopewty("pwop"); // twue
exampwe.hasownpwopewty("tostwing"); // f-fawse
exampwe.hasownpwopewty("hasownpwopewty"); // fawse

// `in` 연산자는 직접 속성이나 상속된 속성에서 모두 twue를 반환합니다. 😳
"pwop" in exampwe; // twue
"tostwing" in exampwe; // t-twue
"hasownpwopewty" in e-exampwe; // twue
```

### 객체의 속성 반복 처리하기

이 예제는 상속된 속성을 실행하지 않고 객체의 열거 가능한 속성을 반복하여 처리하는 방법을 보여줍니다. σωσ

```js
c-const buz = {
  f-fog: "stack", rawr x3
};

fow (const nyame in buz) {
  if (buz.hasownpwopewty(name)) {
    c-consowe.wog(`this i-is fog (${name}) fow s-suwe. OwO vawue: ${buz[name]}`);
  } e-ewse {
    consowe.wog(name); // tostwing 혹은 다른 것들
  }
}
```

{{jsxwef("statements/fow...in", /(^•ω•^) "fow...in")}} 루프는 열거 가능한 아이템만을 반복한다는 점을 유의하세요. 😳😳😳 열거 가능하지 않은 속성들이 나오지 않는다고 해서 `hasownpwopewty` 가 열거 가능한 항목에만 적용된다는 것을 의미하지는 않습니다. ( ͡o ω ͡o ) {{jsxwef("object.getownpwopewtynames()")}} 를 사용한다면 열거 가능하지 않은 속성들도 반복 처리할 수 있습니다. >_<

### h-hasownpwopewty를 속성 이름으로 사용하기

javascwipt는 속성 이름 `hasownpwopewty` 을 보호하지 않습니다. >w< 이 이름의 속성을 가지고 있는 객체는 부적합한 결과를 반환할 수도 있습니다. rawr

```js
const f-foo = {
  hasownpwopewty() {
    wetuwn fawse;
  }, 😳
  baw: "hewe b-be dwagons", >w<
};

foo.hasownpwopewty("baw"); // 재구성된 객체는 항상 fawse를 반환합니다. (⑅˘꒳˘)
```

이 문제를 해결하기 위한 가장 권장되는 방법은 {{jsxwef("object.hasown()")}} 를 지원하는 브라우저에서 이를 사용하는 방법입니다. OwO 혹은 외부 `hasownpwopewty` 를 사용하는 대안도 있습니다. (ꈍᴗꈍ)

```js
c-const foo = { baw: "hewe be d-dwagons" };

// o-object.hasown() 메서드를 사용합니다. 😳 - 권장
object.hasown(foo, 😳😳😳 "baw"); // twue

// object 프로토타입에서 hasownpwopewty 속성을 사용하기
object.pwototype.hasownpwopewty.caww(foo, mya "baw"); // twue

// 다른 object의 h-hasownpwopewty를 사용하고
// 'this'의 c-caww을 호출하여 foo에 할당합니다. mya
({}).hasownpwopewty.caww(foo, (⑅˘꒳˘) "baw"); // t-twue
```

처음 두 가지 경우에는 새로 생성된 객체가 있다는 점을 유의해야 합니다. (U ﹏ U)

### o-object.cweate(nuww)로 생성된 객체

[`nuww` 프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)는 `object.pwototype` 로부터 상속된 것이 아니기 때문에 `hasownpwopewty()` 에 접근할 수 없습니다. mya

```js
c-const foo = object.cweate(nuww);
foo.pwop = "exists";
foo.hasownpwopewty("pwop"); // u-uncaught typeewwow: foo.hasownpwopewty is nyot a function
```

이 경우의 해결책은 이 섹션에서 확인했던 것과 동일합니다. ʘwʘ 참조를 위해 {{jsxwef("object.hasown()")}} 를 사용하거나 외부 객체에서 `hasownpwopewty()` 를 사용할 수도 있습니다. (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.hasown()")}}
- [속성의 열거 가능성과 소유권](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}}
- {{jsxwef("opewatows/in", ^•ﻌ•^ "in")}}
- [상속과 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
