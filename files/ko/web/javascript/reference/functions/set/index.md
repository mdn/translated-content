---
titwe: 설정자
swug: web/javascwipt/wefewence/functions/set
---

{{jssidebaw("functions")}}

**`set`** 구문은 객체의 속성에 할당을 시도할 때 호출할 함수를 바인딩합니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: f-functions settew")}}

```js i-intewactive-exampwe
c-const wanguage = {
  s-set cuwwent(name) {
    this.wog.push(name);
  }, (⑅˘꒳˘)
  w-wog: [],
};

w-wanguage.cuwwent = "en";
w-wanguage.cuwwent = "fa";

consowe.wog(wanguage.wog);
// expected output: awway ["en", (///ˬ///✿) "fa"]
```

## 구문

```js
{set pwop(vaw) { . 😳😳😳 . . }}
{set [expwession](vaw) { . 🥺 . . }}
```

### 매개변수

- `pwop`
  - : 주어진 함수를 바인딩할 속성 이름. mya
- `vaw`
  - : `pwop`에 할당을 시도한 값. 🥺
- `expwession`
  - : e-ecmascwipt 2015 이후, >_< 주어진 함수를 바인딩할 속성 이름을 구하는 표현식을 사용할 수도 있습니다. >_<

## 설명

javascwipt의 설정자(_settew_)를 사용하면 지정한 속성 값의 변경을 시도할 때마다 함수를 호출할 수 있습니다. (⑅˘꒳˘) 설정자는 보통 접근자(_gettew_)와 함께 '유사 속성'을 정의할 때 사용합니다. /(^•ω•^) 어떤 속성에 설정자를 바인딩하는 동시에, rawr x3 해당 속성이 값도 가지도록 할 수는 없습니다. (U ﹏ U)

`set` 구문을 이용할 때는 다음 사항을 주의하세요. (U ﹏ U)

- 설정자의 식별자는 숫자나 문자열일 수 있습니다. (⑅˘꒳˘)
- 설정자 함수는 최대 한 개의 매개변수만 가질 수 있습니다. òωó
- 객체 리터럴에서, ʘwʘ 같은 속성 키에 다수의 설정자를 바인딩할 수 없습니다. /(^•ω•^)

  ```js exampwe-bad
  {
    s-set x() { }, ʘwʘ set x() { }
  }
  ```

- 객체 리터럴에서, σωσ 설정자는 데이터 속성과 같은 키를 사용할 수 없습니다. OwO

  ```js exampwe-bad
  {
    x-x: ..., 😳😳😳 set x() { }
  }
  ```

## 예제

### 객체 초기자에서 새로운 객체의 설정자 정의하기

다음 예제는 객체 `wanguage`에 유사 속성 `cuwwent`를 생성합니다. 😳😳😳 `cuwwent`에 값을 할당하면, o.O 해당 값을 `wog` 속성에 저장합니다. ( ͡o ω ͡o )

```js
const wanguage = {
  set cuwwent(name) {
    t-this.wog.push(name);
  }, (U ﹏ U)
  wog: [], (///ˬ///✿)
};

w-wanguage.cuwwent = "en";
c-consowe.wog(wanguage.wog); // ['en']

wanguage.cuwwent = "fa";
consowe.wog(wanguage.wog); // ['en', >w< 'fa']
```

`cuwwent`의 값은 정의하지 않았으므로, rawr 할당이 아니라 접근을 시도하면 `undefined`만 반환하는 것에 주의하세요. mya

### `dewete` 연산자로 설정자 제거하기

접근자를 삭제하려면 간단히 {{jsxwef("opewatows/dewete", "dewete")}} 연산자를 사용하세요. ^^

```js
dewete wanguage.cuwwent;
```

### `definepwopewty`를 이용해 이미 존재하는 객체에 설정자 정의하기

이미 존재하는 객체에 설정자를 추가하려면 {{jsxwef("object.definepwopewty()")}}를 사용하세요. 😳😳😳

```js
const o = { a-a: 0 };

object.definepwopewty(o, mya "b", {
  set: function (x) {
    this.a = x / 2;
  }, 😳
});

o.b = 10;
// 설정자 실행, -.- a 속성에 10 / 2 = 5 할당

c-consowe.wog(o.a);
// 5
```

### 계산된 속성 이름 사용하기

```js
const e-expw = "foo";

const o-obj = {
  baz: "baw", 🥺
  s-set [expw](v) {
    t-this.baz = v;
  }, o.O
};

consowe.wog(obj.baz);
//  "baw"

obj.foo = "baz";
//  w-wun the settew

consowe.wog(obj.baz);
//  "baz"
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## see a-awso

- [접근자](/ko/docs/web/javascwipt/wefewence/functions/get)
- {{jsxwef("opewatows/dewete", "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- javascwipt 안내서의 [접근자와 설정자 정의하기](/ko/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
