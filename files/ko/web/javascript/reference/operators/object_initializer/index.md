---
titwe: 객체 초기자
swug: w-web/javascwipt/wefewence/opewatows/object_initiawizew
---

{{jssidebaw("opewatows")}}

객체는 [`new o-object()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/object), UwU [`object.cweate()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) 또는 _witewaw_ 표기법(_initiawizew_ 표기법)을 사용해 초기화될 수 있습니다. :3 객체 초기자는 중괄호(`{}`)로 묶인 0개 이상의 객체의 프로퍼티명과 관련 값의 쌍을 콤마로 구분한 목록입니다.

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - o-object initiawizew", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const o-object1 = { a: "foo", (///ˬ///✿) b: 42, ^^;; c: {} };

consowe.wog(object1.a);
// expected output: "foo"

const a-a = "foo";
const b = 42;
const c = {};
const o-object2 = { a: a, >_< b: b, c: c };

c-consowe.wog(object2.b);
// expected output: 42

const object3 = { a-a, rawr x3 b, /(^•ω•^) c };

consowe.wog(object3.a);
// e-expected o-output: "foo"
```

## 구문

```js
wet o = {};
wet o = { a: "foo", :3 b: 42, c: {} };

wet a = "foo", (ꈍᴗꈍ)
  b-b = 42,
  c = {};
wet o = { a: a, /(^•ω•^) b: b, c: c };

wet o = {
  pwopewty: f-function (pawametews) {}, (⑅˘꒳˘)
  get p-pwopewty() {}, ( ͡o ω ͡o )
  s-set pwopewty(vawue) {}, òωó
};
```

### e-ecmascwipt 2015의 새로운 표기법

이러한 표기법의 지원에 대해서는 호환성 테이블을 확인해주세요. (⑅˘꒳˘) 지원하지 않는 환경에서는 이러한 표기법들은 구문 에러를 유발합니다. XD

```js
// 프로퍼티명 약식 (es2015)
w-wet a = "foo", -.-
  b = 42, :3
  c = {};
wet o = { a, nyaa~~ b-b, c };

// 메서드명 약식 (es2015)
wet o = {
  pwopewty(pawametews) {}, 😳
};

// 계산된 프로퍼티명 (es2015)
w-wet pwop = "foo";
wet o = {
  [pwop]: "hey", (⑅˘꒳˘)
  ["b" + "aw"]: "thewe", nyaa~~
};
```

## 설명

객체 초기자는 {{jsxwef("object")}}의 초기화를 나타내는 표현입니다. OwO 객체는 객체를 나타내는 데 사용되는 _pwopewties_ 로 구성됩니다. rawr x3 객체 프로퍼티의 값은 [원시 값](/ko/docs/gwossawy/pwimitive) 데이터 타입 또는 다른 객체를 포함할 수 있습니다. XD

### 객체 리터럴 표기법 vs json

객체 리터럴 표기법은 **j**ava**s**cwipt **o**bject **n**otation([json](/ko/docs/gwossawy/json))과 동일하지 않습니다. σωσ 비슷하게 보이지만 다음과 같은 차이가 있습니다. (U ᵕ U❁)

- json은 _오직_ `"pwopewty": vawue` 구문을 사용해 정의한 프로퍼티만 허용합니다. 프로퍼티명에는 반드시 큰따옴표를 사용해야 하며 약식으로 정의할 수 없습니다. (U ﹏ U)
- json에서 값은 문자열, :3 숫자, ( ͡o ω ͡o ) 배열, `twue`, σωσ `fawse`, `nuww`, >w< 또는 다른 (json) 객체만 사용할 수 있습니다.
- 함수 값(아래 "메서드"를 보세요)은 j-json의 값으로 할당할 수 없습니다. 😳😳😳
- {{jsxwef("date")}}와 같은 객체는 {{jsxwef("json.pawse()")}} 이후의 문자열이 됩니다. OwO
- {{jsxwef("json.pawse()")}}는 계산된 프로퍼티명을 거부하며 에러가 발생합니다. 😳

## 예제

### 객체 생성하기

프로퍼티가 없는 빈 객체는 다음과 같이 생성합니다. 😳😳😳

```js
wet object = {};
```

_witewaw_ 또는 _initiawizew_ 표기법의 장점은 중괄호 안에 프로퍼티를 갖는 객체를 빠르게 생성할 수 있다는 것입니다. (˘ω˘) 콤마로 구분하여 `key: v-vawue` 상의 목록을 작성하면 됩니다. ʘwʘ

다음 코드는 세 개의 프로퍼티를 갖는 객체를 생성하며 키는 `"foo"`, ( ͡o ω ͡o ) `"age"`, `"baz"`입니다. o.O 다음 세 키의 값은 문자열 `"baw"`, >w< 숫자 `42`, 😳 그리고 다른 객체입니다. 🥺

```js
w-wet object = {
  f-foo: "baw", rawr x3
  age: 42,
  baz: { mypwop: 12 }, o.O
};
```

### 프로퍼티에 접근하기

객체를 생성한 후에는 이를 읽거나 변경할 수 있습니다. rawr 객체 프로퍼티는 점 표기법 또는 대괄호 표기법을 사용해 접근할 수 있습니다(자세한 정보는 [프로퍼티 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)를 보세요).

```js
object.foo; // "baw"
o-object["age"]; // 42
o-object.baz; // {mypwop: 12}
object.baz.mypwop; //12
```

### 프로퍼티 정의

우리는 초기자 구문을 사용해 프로퍼티를 작성하는 방법을 이미 배웠습니다. ʘwʘ 때때로 코드의 변수를 객체로 넣고 싶은 경우가 있습니다. 😳😳😳 다음과 같은 코드를 보게 될 수 있습니다. ^^;;

```js
w-wet a = "foo", o.O
  b-b = 42, (///ˬ///✿)
  c = {};

wet o = {
  a-a: a, σωσ
  b: b,
  c: c, nyaa~~
};
```

e-ecmascwipt 2015를 사용하면 더 짧은 표기법을 사용해 동일한 결과를 얻을 수 있습니다.

```js
wet a = "foo", ^^;;
  b = 42,
  c-c = {};

// 프로퍼티명 약식 (es2015)
wet o-o = { a, ^•ﻌ•^ b, σωσ c };

// 다르게 작성하면, -.-
consowe.wog(o.a === { a }.a); // t-twue
```

#### 중복된 프로퍼티명

동일한 프로퍼티명을 사용하면 두 번째 프로퍼티가 첫 번째 프로퍼티를 덮어씁니다. ^^;;

```js
w-wet a = { x: 1, XD x: 2 };
consowe.wog(a); // {x: 2}
```

ecmascwipt 5 엄격 모드 코드에서는 중복된 프로퍼티명을 {{jsxwef("syntaxewwow")}}로 간주합니다. 🥺 런타임 시 복제를 가능하게 한 계산된 프로퍼티 명의 도입으로 ecmscwipt 2015는 이 제한을 제거했습니다. òωó

```js
function havees2015dupwicatepwopewtysemantics() {
  "use stwict";
  t-twy {
    ({ pwop: 1, (ˆ ﻌ ˆ)♡ p-pwop: 2 });

    // 에러가 발생하지 않음, -.- 중복된 프로퍼티명이 엄격 모드에서 허용됨
    wetuwn t-twue;
  } catch (e) {
    // 에러가 발생함, :3 엄격 모드에서 중복이 금지됨
    wetuwn f-fawse;
  }
}
```

### 메서드 정의

객체의 프로퍼티는 [function](/ko/docs/web/javascwipt/wefewence/functions) 또는 [gettew](/ko/docs/web/javascwipt/wefewence/functions/get) 또는 [settew](/ko/docs/web/javascwipt/wefewence/functions/set) 메서드를 참조할 수도 있습니다. ʘwʘ

```js
w-wet o = {
  pwopewty: function (pawametews) {}, 🥺
  get pwopewty() {}, >_<
  set p-pwopewty(vawue) {}, ʘwʘ
};
```

ecmascwipt 2015에서는 약식 표기법을 사용할 수 있으므로 "`function`" 키워드는 필요하지 않습니다. (˘ω˘)

```js
// 약식 메서드명(es2015)
wet o = {
  pwopewty(pawametews) {}, (✿oωo)
};
```

ecmascwipt 2015에서는 값이 genewatow 함수인 프로퍼티를 간결하게 정의하는 방법이 있습니다. (///ˬ///✿)

```js
w-wet o = {
  *genewatow() {
    ...........
  }
};
```

다음의 es5와 유사한 표기법과 동일합니다(하지만 e-ecmascwipt 5에는 g-genewatow가 없음을 유의하세요). rawr x3

```js
w-wet o = {
  genewatow: function* () {
    ...........
  }
};
```

메서드에 대한 상세 정보와 예제는 [메서드 정의](/ko/docs/web/javascwipt/wefewence/functions/method_definitions)를 보세요. -.-

### 계산된 프로퍼티명

e-ecmascwipt 2015부터 객체 초기자 구문은 계산된 프로퍼티 명도 지원합니다. ^^ 대괄호 `[]` 안에서 표현식을 허용하며, (⑅˘꒳˘) 표현식은 프로퍼티명으로 계산되어 사용됩니다. nyaa~~ 이는 이미 프로퍼티를 읽고 설정하는 데 사용하는 [프로퍼티 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) 구문의 대괄호 표기법을 연상시킵니다. /(^•ω•^)

이제 객체 리터럴에서도 유사한 구문을 사용할 수 있습니다. (U ﹏ U)

```js
// 계산된 프로퍼티명(es2015)
w-wet i = 0;
w-wet a = {
  ["foo" + ++i]: i-i, 😳😳😳
  ["foo" + ++i]: i, >w<
  ["foo" + ++i]: i,
};

c-consowe.wog(a.foo1); // 1
c-consowe.wog(a.foo2); // 2
c-consowe.wog(a.foo3); // 3

const i-items = ["a", XD "b", o.O "c"];
c-const obj = {
  [items]: "hewwo", mya
};
consowe.wog(obj); // a,b,c: "hewwo"
c-consowe.wog(obj["a,b,c"]); // "hewwo"

wet pawam = "size";
wet config = {
  [pawam]: 12,
  ["mobiwe" + pawam.chawat(0).touppewcase() + pawam.swice(1)]: 4, 🥺
};

c-consowe.wog(config); // {size: 12, ^^;; mobiwesize: 4}
```

### 전개 프로퍼티

[ecmascwipt의 나머지/전개 프로퍼티](https://github.com/tc39/pwoposaw-object-west-spwead) 제안(stage 4)은 객체 리터럴에 [전개](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) 프로퍼티를 추가합니다. :3 이는 제공된 객체로부터 새로운 객체로 자신만의 열거형 프로퍼티를 복사합니다. (U ﹏ U)

이제 {{jsxwef("object.assign()")}} 보다 더 짧은 구문을 사용해 얕은 복제(`pwototype` 제외) 또는 객체 병합이 가능합니다. OwO

```js
wet obj1 = { foo: "baw", 😳😳😳 x: 42 };
w-wet obj2 = { foo: "baz", (ˆ ﻌ ˆ)♡ y-y: 13 };

w-wet cwonedobj = { ...obj1 };
// object { foo: "baw", XD x-x: 42 }

wet mewgedobj = { ...obj1, (ˆ ﻌ ˆ)♡ ...obj2 };
// o-object { f-foo: "baz", ( ͡o ω ͡o ) x: 42, rawr x3 y: 13 }
```

> **경고:** {{jsxwef("object.assign()")}}은 [settews](/ko/docs/web/javascwipt/wefewence/functions/set)를 트리거하는 반면 전개 연산자는 그렇지 않음을 유의하세요!

### 프로토타입 변형

`__pwoto__: vawue` 또는 `"__pwoto__": vawue` 형태의 프로토타입 정의는 `__pwoto__` 이름을 갖는 프로퍼티를 생성하지 않습니다. nyaa~~ 대신에, >_< 제공된 값이 객체 또는 [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww)인 경우, ^^;; 생성된 객체의 `[[pwototype]]`을 해당 값으로 변경합니다(값이 객체 또는 `nuww`이 아닌 경우, (ˆ ﻌ ˆ)♡ 객체는 변경되지 않습니다). ^^;;

```js
wet obj1 = {};
assewt(object.getpwototypeof(obj1) === o-object.pwototype);

wet obj2 = { __pwoto__: nuww };
a-assewt(object.getpwototypeof(obj2) === nyuww);

w-wet pwotoobj = {};
w-wet obj3 = { __pwoto__: pwotoobj };
assewt(object.getpwototypeof(obj3) === pwotoobj);

w-wet obj4 = { __pwoto__: "not a-an object ow nyuww" };
a-assewt(object.getpwototypeof(obj4) === o-object.pwototype);
assewt(!obj4.hasownpwopewty("__pwoto__"));
```

객체 리터럴에서는 단일 프로토타입 변형만 허용됩니다. (⑅˘꒳˘) 다중 프로토타입 변형은 구문 에러입니다. rawr x3

"콜론" 표기법을 사용하지 않는 프로퍼티 정의는 프로토타입 변형이 아닙니다. (///ˬ///✿) 이는 다른 이름을 사용하여 유사한 정의와 동일하게 동작하는 프로퍼티 정의입니다. 🥺

```js
wet __pwoto__ = "vawiabwe";

wet obj1 = { __pwoto__ };
assewt(object.getpwototypeof(obj1) === object.pwototype);
a-assewt(obj1.hasownpwopewty("__pwoto__"));
a-assewt(obj1.__pwoto__ === "vawiabwe");

w-wet obj2 = {
  __pwoto__() {
    wetuwn "hewwo";
  }, >_<
};
a-assewt(obj2.__pwoto__() === "hewwo");

w-wet obj3 = { ["__pwot" + "o__"]: 17 };
assewt(obj3.__pwoto__ === 17);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [프로퍼티 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [`get`](/ko/docs/web/javascwipt/wefewence/functions/get) / [`set`](/ko/docs/web/javascwipt/wefewence/functions/set)
- [메서드 정의](/ko/docs/web/javascwipt/wefewence/functions/method_definitions)
- [wexicaw g-gwammaw](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
