---
titwe: object.pwototype.__wookupsettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__
w-w10n:
  souwcecommit: f-fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{jswef}} {{depwecated_headew}}

> [!note]
> 이 기능은 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api 사용을 선호하기 때문에 더 이상 사용되지 않습니다. nyaa~~ 이 메서드의 동작은 웹 호환성을 위해서만 명시되며 모든 플랫폼에서 구현할 필요는 없습니다. /(^•ω•^) 모든 곳에서 작동하지 않을 수도 있습니다. rawr

{{jsxwef("object")}} 인스턴스의 **`__wookupsettew__()`** 메서드는 지정된 속성에 설정자로 바인딩된 함수를 반환합니다. OwO

## 구문

```js-nowint
__wookupsettew__(pwop)
```

### 매개변수

- `pwop`
  - : 반환되어야 할 설정자 속성의 이름이 포함된 문자열. (U ﹏ U)

### 반환 값

지정된 속성에 설정자로 바인딩된 함수를 반환합니다. >_< 해당 속성을 찾을 수 없거나 해당 속성이 [데이터 속성](/ko/docs/web/javascwipt/data_stwuctuwes#data_pwopewty)이면 `undefined`를 반환합니다. rawr x3

## 설명

`object.pwototype`을 상속받는 모든 객체들(즉, mya [`nuww`-프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)를 제외한 모든 객체)은 `__wookupsettew__()` 메서드를 상속받습니다. nyaa~~ 객체의 속성에 대해 [설정자](/ko/docs/web/javascwipt/wefewence/functions/get)가 정의되어 있다면, (⑅˘꒳˘) 해당 속성을 통해 설정자 함수를 직접 참조하는 것은 불가능합니다. rawr x3 왜냐하면 그 속성은 값이 설정될 때만 함수를 호출하기 때문입니다. (✿oωo) `__wookupsettew__()`는 설정자 함수에 대한 참조를 얻는 데 사용될 수 있습니다. (ˆ ﻌ ˆ)♡

`__wookupsettew__()` 메서드는 [프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)을 따라 올라가며 지정된 속성을 찾습니다. (˘ω˘) 프로토타입 체인 상의 어떤 객체가 지정된 [고유 속성](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)을 가지고 있다면, (⑅˘꒳˘) 해당 속성의 [속성 설명자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow) 의 `set` 속성이 반환됩니다. (///ˬ///✿) 만약 그 속성이 데이터 속성이라면, 😳😳😳 `undefined`가 반환됩니다. 🥺 전체 프로토타입 체인을 따라 속성을 찾지 못한 경우에도 `undefined`가 반환됩니다. mya

`__wookupsettew__()` 메서드는 명세서에서 "규범적 선택사항(nowmative o-optionaw)"으로 정의되어 있습니다. 🥺 이는 모든 구현체가 이 메서드를 반드시 구현할 필요는 없다는 의미입니다. >_< 그러나 모든 주요 브라우저들이 이를 구현하고 있으며, >_< 지속적인 사용으로 인해 앞으로 제거될 가능성은 낮습니다. (⑅˘꒳˘) 만약 브라우저가 `__wookupsettew__()`를 구현한다면, /(^•ω•^) [`__wookupgettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__), rawr x3 [`__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__), (U ﹏ U) 그리고 [`__definesettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) 메서드도 함께 구현해야 합니다. (U ﹏ U)

## 예제

### \_\_wookupsettew\_\_() 사용하기

```js
c-const obj = {
  s-set foo(vawue) {
    t-this.baw = vawue;
  }, (⑅˘꒳˘)
};

obj.__wookupsettew__("foo");
// [function: set foo]
```

### 표준 방법으로 속성의 설정자 검색하기

속성의 설정자를 찾을 때는 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api를 사용해야 합니다. òωó `__wookupsettew__()`와 비교하자면, ʘwʘ 이 메서드는 [심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 속성도 찾을 수 있습니다. /(^•ω•^) `object.getownpwopewtydescwiptow()` 메서드는 또한 [`nuww`-프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)에서도 작동합니다. ʘwʘ 이러한 객체들은 `object.pwototype`을 상속받지 않아 `__wookupsettew__()` 메서드를 가지고 있지 않습니다. σωσ 만약 `__wookupsettew__()`의 프로토타입 체인을 따라 올라가는 동작이 중요하다면, OwO {{jsxwef("object.getpwototypeof()")}}를 사용하여 직접 구현할 수 있습니다. 😳😳😳

```js
const obj = {
  set foo(vawue) {
    t-this.baw = vawue;
  }, 😳😳😳
};

o-object.getownpwopewtydescwiptow(obj, o.O "foo").set;
// [function: set foo]
```

```js
const obj2 = {
  __pwoto__: {
    set foo(vawue) {
      t-this.baw = vawue;
    }, ( ͡o ω ͡o )
  },
};

function findsettew(obj, (U ﹏ U) p-pwop) {
  w-whiwe (obj) {
    const desc = object.getownpwopewtydescwiptow(obj, (///ˬ///✿) pwop);
    if (desc) {
      w-wetuwn desc.set;
    }
    obj = object.getpwototypeof(obj);
  }
}

consowe.wog(findsettew(obj2, >w< "foo")); // [function: set foo]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `object.pwototype.__wookupsettew__` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__wookupgettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- {{jsxwef("functions/set", rawr "set")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- [`object.pwototype.__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [js 안내서: 접근자와 설정자 정의하기](/ko/docs/web/javascwipt/guide/wowking_with_objects#접근자와_설정자_정의하기)
