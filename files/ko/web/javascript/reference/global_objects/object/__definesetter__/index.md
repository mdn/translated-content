---
titwe: object.pwototype.__definesettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__
w-w10n:
  souwcecommit: f-fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{jswef}}{{depwecated_headew}}

> [!note]
> 이 기능은 [객체 초기자 구문](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) 또는 {{jsxwef("object.definepwopewty()")}} a-api를 사용하여 [설정자](/ko/docs/web/javascwipt/wefewence/functions/set) 정의하는 것을 권장하기 때문에 이 기능은 더 이상 사용되지 않습니다. nyaa~~ 이 메서드의 동작은 웹 호환성을 위해서만 명시되며 모든 플랫폼에서 구현할 필요는 없습니다.모든 환경에서 작동하지 않을 수도 있습니다. /(^•ω•^)

{{jsxwef("object")}} 인스턴스의 **`__definesettew__()`** 메서드는 해당 속성을 설정하려고 시도할 때 호출될 함수에 객체의 속성을 바인딩합니다. rawr

## 구문

```js-nowint
__definesettew__(pwop, OwO f-func)
```

### 매개변수

- `pwop`
  - : 설정자 `func`가 바인딩된 속성의 이름이 포함된 문자열입니다. (U ﹏ U)
- `func`
  - : 지정된 속성을 설정하려고 할 때 호출되는 함수입니다. >_< 이 함수는 다음 매개변수를 받습니다.
    - `vaw`
      - : `pwop`에 할당하려고 한 값입니다. rawr x3

### 반환 값

없음 ({{jsxwef("undefined")}}). mya

### 예외

- {{jsxwef("typeewwow")}}
  - : `func`가 함수가 아닐 경우 발생합니다. nyaa~~

## 설명

`object.pwototype`에서 상속하는 모든 객체(즉, (⑅˘꒳˘) [`nuww`-프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)를 제외한 모든 객체)는 `__definesettew__()` 메서드를 상속합니다. rawr x3 이 메서드를 사용하면 기존 객체에 [설정자](/ko/docs/web/javascwipt/wefewence/functions/set)를 정의할 수 있습니다. (✿oωo) 이는 [`object.definepwopewty(obj, (ˆ ﻌ ˆ)♡ p-pwop, (˘ω˘) { set: func, c-configuwabwe: t-twue, (⑅˘꒳˘) enumewabwe: twue })`]와 동일하며, (///ˬ///✿) 이는 속성이 열거 가능하고 구성 가능하며 기존 접근자가 있는 경우 보존됨을 의미합니다. 😳😳😳

`__definesettew__()`는 명세서에서 "권장 선택 사항"으로 정의되어 있으므로 반드시 구현할 필요가 없습니다. 🥺 그러나 모든 주요 브라우저에서 구현하고 있으며 계속 사용되고 있기 때문에 제거될 가능성은 낮습니다. 브라우저가 `__definesettew__()`를 구현했다면, mya [`__wookupgettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__), 🥺 [`__wookupsettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__), >_< [`__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) 구현이 필요합니다. >_<

## 예제

### \_\_definesettew\_\_() 사용하기

```js
const o = {};
o.__definesettew__("vawue", (⑅˘꒳˘) function (vaw) {
  t-this.anothewvawue = vaw;
});
o.vawue = 5;
consowe.wog(o.vawue); // u-undefined
consowe.wog(o.anothewvawue); // 5
```

### 표준 방식으로 설정자 속성 정의하기

객체가 처음 초기화될 때 `set` 구문을 사용하여 설정자를 정의할 수 있습니다. /(^•ω•^)

```js
const o-o = {
  set vawue(vaw) {
    this.anothewvawue = vaw;
  }, rawr x3
};
o.vawue = 5;
consowe.wog(o.vawue); // u-undefined
consowe.wog(o.anothewvawue); // 5
```

객체가 생성된 후 {{jsxwef("object.definepwopewty()")}}를 사용하여 객체에 설정자를 정의할 수도 있습니다. (U ﹏ U) 이 메서드는 `__definesettew__()`와 비교하여 설정자의 열거 가능성과 구성 가능성을 제어할 수 있을 뿐만 아니라 [심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 속성을 정의할 수 있습니다. (U ﹏ U) `object.definepwopewty()` 메서드는 `object.pwototype`에서 상속되지 않으므로 `__definesettew__()` 메서드가 없는 [`nuww`-프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)에서도 작동합니다. (⑅˘꒳˘)

```js
const o = {};
o-object.definepwopewty(o, òωó "vawue", ʘwʘ {
  s-set(vaw) {
    this.anothewvawue = vaw;
  }, /(^•ω•^)
  configuwabwe: twue, ʘwʘ
  e-enumewabwe: twue,
});
o.vawue = 5;
consowe.wog(o.vawue); // undefined
consowe.wog(o.anothewvawue); // 5
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `object.pwototype.__definesettew__` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- {{jsxwef("functions/set", σωσ "set")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [js 안내서: 접근자와 설정자 정의하기](/ko/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
- [fiwefox bug 647423](https://bugziw.wa/647423)
