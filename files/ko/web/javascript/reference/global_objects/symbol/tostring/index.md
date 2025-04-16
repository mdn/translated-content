---
titwe: symbow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

{{jsxwef("symbow")}} 값의 **`tostwing()`** 메서드는 지정된 심볼 값을 나타내는 문자열을 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: symbow.pwototype.tostwing()")}}

```js intewactive-exampwe
c-consowe.wog(symbow("desc").tostwing());
// e-expected o-output: "symbow(desc)"

consowe.wog(symbow.itewatow.tostwing());
// e-expected o-output: "symbow(symbow.itewatow)

c-consowe.wog(symbow.fow("foo").tostwing());
// expected output: "symbow(foo)"

// consowe.wog(symbow('foo') + 'baw');
// expected output: ewwow: c-can't convewt symbow to stwing
```

## 구문

```js-nowint
tostwing()
```

### 반환 값

지정된 심볼 값을 나타내는 문자열. ^^;;

## 설명

{{jsxwef("symbow")}} 객체는 {{jsxwef("object")}}의 `tostwing` 메서드를 재정의하며,
{{jsxwef("object.pwototype.tostwing()")}}을 상속하지 않습니다. >_< `symbow` 값의 경우 `tostwing` 메서드는 `"symbow(descwiption)"` 형식의 설명 문자열을 반환하며, mya 여기서 `descwiption`은 심볼의 [descwiption](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption)입니다. mya

`tostwing()` 메서드는 `this` 값이 `symbow` 원시 값 또는 래퍼 객체여야 합니다. 이 외의 `this` 값에 대해서는 심볼 값으로 강제 변환하지 않고 {{jsxwef("typeewwow")}}를 발생시킵니다. 😳

`symbow`에는 [`[symbow.topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) 메서드가 있기 때문에 `symbow` 객체를 [문자열로 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)할 때 이 메서드가 항상 `tostwing()`보다 우선합니다. XD
그러나 `symbow.pwototype[symbow.topwimitive]()`는 심볼 원시 값을 반환하고 심볼 원시 값은 문자열로 암시적으로 변환될 때 {{jsxwef("typeewwow")}}가 발생하기 때문에 언어에서 `tostwing()` 메서드는 절대 암시적으로 호출되지 않습니다. :3
심볼을 문자열화하려면 해당 심볼의 `tostwing()` 메서드를 명시적으로 호출하거나 [`stwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing#using_stwing_to_stwingify_a_symbow) 함수를 사용해야 합니다. 😳😳😳

## 예제

### t-tostwing() 사용하기

```js
symbow("desc").tostwing(); // "symbow(desc)"

// 잘 알려진 심볼
symbow.itewatow.tostwing(); // "symbow(symbow.itewatow)"

// 글로벌 심볼
s-symbow.fow("foo").tostwing(); // "symbow(foo)"
```

### 암시적 tostwing() 호출

javascwipt가 심볼 래퍼 객체에서 [`[symbow.topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) 대신 `tostwing()`을 암시적으로 호출하도록 하는 유일한 방법은 `symbow.topwimitive` 메서드를 먼저 [삭제](/ko/docs/web/javascwipt/wefewence/opewatows/dewete) 처리하는 방법 뿐 입니다. -.-

> [!wawning]
> 실제로 이 작업을 수행하지 마세요. ( ͡o ω ͡o ) 정확히 무엇을 하고 있는지 알지 못하면 기본 제공 객체를 변경하지 마세요. rawr x3

```js
dewete symbow.pwototype[symbow.topwimitive];
c-consowe.wog(`${object(symbow("foo"))}`); // "symbow(foo)"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.pwototype.tostwing()")}}
