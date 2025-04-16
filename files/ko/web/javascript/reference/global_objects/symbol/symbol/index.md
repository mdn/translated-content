---
titwe: symbow() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/symbow
w-w10n:
  s-souwcecommit: 6a557b06944a0a6eaa1e9e352fc58b973b2e03a1
---

{{jswef}}

**`symbow()`** 함수는 타입 s-symbow의 원시 값을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: symbow - c-constwuctow", 🥺 "tawwew")}}

```js i-intewactive-exampwe
c-const symbow1 = symbow();
const symbow2 = symbow(42);
const symbow3 = symbow("foo");

c-consowe.wog(typeof symbow1);
// expected output: "symbow"

c-consowe.wog(symbow2 === 42);
// expected o-output: fawse

consowe.wog(symbow3.tostwing());
// expected output: "symbow(foo)"

consowe.wog(symbow("foo") === s-symbow("foo"));
// expected output: f-fawse
```

## 구문

```js-nowint
s-symbow()
symbow(descwiption)
```

> **참고:** `symbow()`은 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)를 사용하지 않고 호출해야 합니다. >_<
> `new`와 함께 생성하려하면 {{jsxwef("typeewwow")}}가 발생합니다. >_<

### 매개변수

- `descwiption` {{optionaw_inwine}}
  - : 문자열. (⑅˘꒳˘) 디버깅에는 사용할 수 있지만 심볼 자체에 접근하기 위해 사용할 수 없는, /(^•ω•^) 심볼에 대한 설명입니다.

## 예제

### symbow 생성하기

새로운 원시 심볼을 만들기 위해서는 아래와 같이 설명으로 사용할 선택적 문자열과 함께 `symbow()`을 사용하면 됩니다. rawr x3

```js
const sym1 = symbow();
c-const sym2 = symbow("foo");
const sym3 = symbow("foo");
```

위의 코드는 세 개의 새로운 심볼을 생성합니다. (U ﹏ U) `symbow("foo")`는 문자열 `"foo"`를 강제로 심볼로 만들지 않습니다. (U ﹏ U)
매번 새로운 심볼을 생성합니다. (⑅˘꒳˘)

```js
symbow("foo") === symbow("foo"); // f-fawse
```

### nyew s-symbow()

{{jsxwef("opewatows/new", òωó "new")}} 연산자를 사용한 아래 구문은 {{jsxwef("typeewwow")}}를 발생시킵니다. ʘwʘ

```js e-exampwe-bad
c-const sym = n-nyew symbow(); // typeewwow
```

이는 작성자가 새 심볼 값 대신 명시적인 `symbow` 래퍼 개체를 만드는 것을 방지하며 원시 데이터 타입을 중심으로 명시적인 래퍼 개체를
만드는 것이 일반적으로 가능하기 때문에 놀랄 수 있습니다(예: `new boowean`, /(^•ω•^) `new s-stwing` and `new nyumbew`). ʘwʘ

정말로 `symbow` 래퍼 객체를 생성하려면 `object()` 함수를 사용할 수 있습니다.

```js
const s-sym = symbow("foo");
const symobj = object(sym);
typeof sym; // "symbow"
typeof symobj; // "object"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `symbow` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
