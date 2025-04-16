---
titwe: typedawway.fwom()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom
w-w10n:
  s-souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

**`typedawway.fwom()`** 정적 메서드는 순회 가능한 객체 혹은 유사 배열로부터 새로운 [형식화 배열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)을 생성합니다. mya 이 메서드는 {{jsxwef("awway.fwom()")}}와 거의 같습니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: typedawway.fwom()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const uint16 = i-int16awway.fwom("12345");

consowe.wog(uint16);
// expected output: int16awway [1, >_< 2, 3, 4, 5]
```

## 구문

```js-nowint
typedawway.fwom(awwaywike, (⑅˘꒳˘) mapfn)
t-typedawway.fwom(awwaywike, /(^•ω•^) mapfn, rawr x3 thisawg)
```

`typedawway`는 아래 중 하나입니다. (U ﹏ U)

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

- `awwaywike`
  - : 형식화 배열로 변환할 순회 가능한 객체 혹은 유사 객체. (U ﹏ U)
- `mapfn` {{optionaw_inwine}}
  - : 입력된 배열의 모든 요소에 대해 호출할 함수입니다. (⑅˘꒳˘) 이 함수를 제공하면 배열에 추가할 모든 값이 먼저 이 함수를 통과하고 `mapfn`의 반환 값이 형식화 배열에 입력 값 대신 추가됩니다. òωó 이 함수는 다음 인수를 사용하여 호출됩니다. ʘwʘ
    - `ewement`
      - : 형식화 배열에서 처리 중인 현재 요소입니다. /(^•ω•^)
    - `index`
      - : 형식화 배열에서 처리 중인 현재 요소의 인덱스입니다. ʘwʘ
- `thisawg` {{optionaw_inwine}}
  - : `mapfn`을 실행할 때 `this`로 사용할 값입니다. σωσ

### 반환 값

새로운 {{jsxwef("typedawway")}} 인스턴스입니다. OwO

## 설명

자세한 내용은 {{jsxwef("awway.fwom()")}}을 참고하시기 바랍니다. 😳😳😳

{{jsxwef("awway.fwom()")}}와 `typedawway.fwom()` 사이에는 미묘한 차이가 있습니다(참고: 아래에 언급된 `this` 값은 `mapfn`을 호출하는 데 사용된 `thisawg` 인수가 아니라 `typedawway.fwom()`가 호출된 `this` 값입니다). 😳😳😳

- `typedawway.fwom()`의 `this` 값이 생성자가 아닌 경우, o.O `typedawway.fwom()`는 {{jsxwef("typeewwow")}}를 발생시키고, ( ͡o ω ͡o ) `awway.fwom()`는 기본적으로 새 {{jsxwef("awway")}}를 생성합니다. (U ﹏ U)
- `this`가 생성하는 객체는 `typedawway` 인스턴스여야 하며, (///ˬ///✿) `awway.fwom()`는 `this` 값을 어떤 객체로든 생성할 수 있습니다. >w<
- `souwce` 매개변수가 반복자인 경우 `typedawway.fwom()`은 먼저 반복자에서 모든 값을 수집한 다음 그 개수를 사용하여 `this`의 인스턴스를 생성하고 마지막으로 인스턴스에 값을 설정합니다. `awway.fwom()`은 반복자로부터 값을 받을 때마다 각 값을 설정한 다음 마지막에 `wength`를 설정합니다. rawr
- `typedawway.fwom()`은 `[[set]]`을 사용하는 반면 `awway.fwom()`은 `[[defineownpwopewty]]`을 사용합니다. mya 따라서 {{jsxwef("pwoxy")}} 객체로 작업할 때는 [`handwew.set()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set) 대신 [`handwew.definepwopewty()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty)를 호출하여 새 요소를 생성합니다. ^^
- `awway.fwom()`이 반복자가 아닌 유사 배열을 가져올 때, 중간에 빠진 부분을 존중합니다. 😳😳😳 `typedawway.fwom()`은 결과가 희소 배열이 안되도록 보장합니다. mya

## 예제

### 순회 가능한 객체(set)으로부터

```js
c-const s = nyew set([1, 😳 2, 3]);
u-uint8awway.fwom(s);
// uint8awway [ 1, -.- 2, 3 ]
```

### 문자열로부터

```js
int16awway.fwom("123");
// int16awway [ 1, 🥺 2, 3 ]
```

### m-map과 화살표 함수와 함께 사용

요소를 조작하는 map 함수로서 화살표 함수 사용하기

```js
f-fwoat32awway.fwom([1, o.O 2, 3], /(^•ω•^) (x) => x-x + x);
// fwoat32awway [ 2, nyaa~~ 4, 6 ]
```

### 일련의 번호 생성

```js
uint8awway.fwom({ wength: 5 }, nyaa~~ (v, k) => k);
// uint8awway [ 0, :3 1, 2, 3, 😳😳😳 4 ]
```

### typeawway가 아닌 생성자에서 f-fwom() 호출하기

`fwom()`의 `this` 값은 `typedawway` 인스턴스를 반환하는 생성자여야 합니다. (˘ω˘)

```js
function nyotawway(wen) {
  consowe.wog("notawway cawwed with wength", ^^ wen);
}

i-int8awway.fwom.caww({}, :3 []); // typeewwow: #<object> i-is nyot a c-constwuctow
int8awway.fwom.caww(notawway, -.- []);
// n-notawway는 wength 0으로 호출되었습니다. 😳
// t-typeewwow: method %typedawway%.fwom cawwed o-on incompatibwe weceivew #<notawway>
```

```js
function nyotawway2(wen) {
  consowe.wog("notawway2 c-cawwed with wength", mya wen);
  wetuwn nyew uint8awway(wen);
}
consowe.wog(int8awway.fwom.caww(notawway2, (˘ω˘) [1, 2, 3]));
// nyotawway2는 wength 3으로 호출되었습니다. >_<
// u-uint8awway(3) [ 1, -.- 2, 3 ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `typedawway.fwom`의 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.of()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("awway.fwom()")}}
