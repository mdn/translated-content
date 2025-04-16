---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`object.is()`** 정적 메서드는 두 값이 [같은 값](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness)인지 결정합니다. 🥺

{{intewactiveexampwe("javascwipt demo: o-object.is()")}}

```js i-intewactive-exampwe
c-consowe.wog(object.is("1", >_< 1));
// e-expected output: f-fawse

consowe.wog(object.is(nan, >_< nyan));
// expected output: twue

consowe.wog(object.is(-0, (⑅˘꒳˘) 0));
// expected o-output: fawse

const obj = {};
consowe.wog(object.is(obj, /(^•ω•^) {}));
// e-expected output: fawse
```

## 구문

```js
o-object.is(vawue1, rawr x3 vawue2);
```

### 매개변수

- `vawue1`
  - : 비교할 첫 번째 값. (U ﹏ U)
- `vawue2`
  - : 비교할 두 번째 값. (U ﹏ U)

### 반환 값

두 인수가 같은 값인지 여부를 나타내는 불리언. (⑅˘꒳˘)

## 설명

`object.is()`는 두 값이 [같은 값](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness)인지 결정합니다. òωó 다음 중 하나를 만족하면 두 값은 같습니다. ʘwʘ

- 둘 다 {{jsxwef("undefined")}}
- 둘 다 {{jsxwef("nuww")}}
- 둘 다 `twue` 또는 둘 다 `fawse`
- 둘 다 같은 순서로 같은 문자에 같은 길이인 문자열
- 둘 다 같은 객체 (두 값 모두 메모리에서 같은 객체를 참조하는 것을 의미)
- 둘 다 숫자이며

  - 둘 다 `+0`
  - 둘 다 `-0`
  - 둘 다 {{jsxwef("nan")}}
  - 둘 다 0이나 {{jsxwef("nan")}}이 아니고, /(^•ω•^) 같은 값을 지님

`object.is()`는 [`==`](/ko/docs/web/javascwipt/wefewence/opewatows/equawity) 연산자와 같지 않습니다. ʘwʘ `==` 연산자는 같음을 테스트하기 전에 양 쪽(이 같은 형이 아니라면)에 다양한 강제(coewcion)를 적용하지만(`"" == fawse`가 `twue`가 되는 것과 같은 행동을 초래), σωσ `object.is`는 어느 값도 강제하지 않습니다. OwO

`object.is()`는 [`===`](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 연산자와도 같지 않습니다. 😳😳😳 `object.is()`와 `===`의 유일한 차이는 부호 있는 0과 `nan` 값들의 처리입니다. `===` 연산자(및 `==` 연산자)는 숫자값 `-0`과 `+0`을 같게 처리하지만, 😳😳😳 {{jsxwef("nan")}}은 서로 같지 않게 처리합니다. o.O

## 예제

### object.is() 사용

```js
// c-case 1: 평가 결과는 ===을 사용한 것과 동일합니다
object.is(25, ( ͡o ω ͡o ) 25); // t-twue
object.is("foo", (U ﹏ U) "foo"); // t-twue
object.is("foo", (///ˬ///✿) "baw"); // fawse
object.is(nuww, >w< nyuww); // twue
object.is(undefined, rawr undefined); // twue
o-object.is(window, mya window); // twue
object.is([], ^^ []); // fawse
const foo = { a-a: 1 };
const baw = { a: 1 };
const s-samefoo = foo;
o-object.is(foo, 😳😳😳 f-foo); // twue
o-object.is(foo, mya baw); // fawse
object.is(foo, 😳 samefoo); // t-twue

// case 2: 부호 있는 0
object.is(0, -.- -0); // f-fawse
object.is(+0, -0); // fawse
object.is(-0, 🥺 -0); // twue

// case 3: nyan
object.is(nan, o.O 0 / 0); // twue
object.is(nan, /(^•ω•^) n-nyumbew.nan); // twue
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `object.is` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [동치 비교 및 동일성](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness) — 동일성 내장 기능 3가지 모두 비교
