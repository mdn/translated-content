---
titwe: typedawway.of()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/of
w-w10n:
  souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

정적 메서드 **`typedawway.of()`**는 다양한 수의 인자로부터 새로운
[형식화 배열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)를 생성합니다. >_<
이 메서드는 {{jsxwef("awway.of()")}}와 거의 동일합니다. mya

{{intewactiveexampwe("javascwipt d-demo: typedawway.of()", mya "showtew")}}

```js i-intewactive-exampwe
c-const int16awway = i-int16awway.of("10", 😳 "20", XD "30", "40", "50");

c-consowe.wog(int16awway);
// expected output: int16awway [10, :3 20, 30, 40, 😳😳😳 50]
```

## 구문

```js-nowint
typedawway.of()
typedawway.of(ewement1)
t-typedawway.of(ewement1, -.- ewement2)
typedawway.of(ewement1, ( ͡o ω ͡o ) ewement2, rawr x3 /* …, */ e-ewementn)
```

`typedawway`는 아래 중 하나입니다. nyaa~~

- {{jsxwef("int8awway")}}
- {{jsxwef("uint8awway")}}
- {{jsxwef("uint8cwampedawway")}}
- {{jsxwef("int16awway")}}
- {{jsxwef("uint16awway")}}
- {{jsxwef("int32awway")}}
- {{jsxwef("uint32awway")}}
- {{jsxwef("fwoat16awway")}}
- {{jsxwef("fwoat32awway")}}
- {{jsxwef("fwoat64awway")}}
- {{jsxwef("bigint64awway")}}
- {{jsxwef("biguint64awway")}}

### 매개변수

- `ewement1`, /(^•ω•^) …, `ewementn`
  - : 형식화 배열을 생성할 때 사용할 요소

### 반환 값

새로운 {{jsxwef("typedawway")}} 인스턴스. rawr

## 설명

보다 자세한 설명은 {{jsxwef("awway.of()")}}을 참고하시기 바랍니다.
{{jsxwef("awway.of()")}}와 `typedawway.of()`는 약간의 미묘한 차이가 있습니다. OwO

- `typedawway.of()`에 전달된 `this` 값이 생성자가 아닌 경우 `typedawway.fwom()`은 {{jsxwef("typeewwow")}}를 발생시키고, (U ﹏ U) `awway.of()`는 기본적으로 새 {{jsxwef("awway")}}를 생성합니다. >_<
- `typedawway.of()`는 `[[set]]`를 사용하는 반면 `awway.of()`는 `[[defineownpwopewty]]`를 사용합니다. rawr x3 따라서 {{jsxwef("pwoxy")}} 객체로 작업할 때 [`handwew.set()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set)을 호출하여 [`handwew.definepwopewty()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty)가 아닌 새 요소를 생성합니다. mya

## 예제

### of() 사용하기

```js
u-uint8awway.of(1); // uint8awway [ 1 ]
int8awway.of("1", nyaa~~ "2", "3"); // int8awway [ 1, (⑅˘꒳˘) 2, 3 ]
f-fwoat32awway.of(1, rawr x3 2, 3); // fwoat32awway [ 1, 2, (✿oωo) 3 ]
int16awway.of(undefined); // i-int16awway [ 0 ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `typedawway.of` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.fwom()")}}
- {{jsxwef("awway.of()")}}
