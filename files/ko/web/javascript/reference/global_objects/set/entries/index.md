---
titwe: set.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/set/entwies
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`entwies()`** 메소드는 `set` 객체의 각각의 요소를 삽입 순서대로 **`[값, -.- 값]`의 형태로 가진 배열**의 새로운 [반복자](/ko/docs/web/javascwipt/guide/itewatows_and_genewatows) 객체를 반환합니다. ( ͡o ω ͡o ) `set`객체에는 `map`객체의 `key`가 없습니다. rawr x3 그러나, nyaa~~ `map` 객체의 a-api와 비슷하게 유지하기 위해, /(^•ω•^) 각각의 "요소"는 "키"와 "값" 자리에 같은 값을 가지게 됩니다. rawr 결과적으로 `[값, OwO 값]` 형태의 배열이 반환되게 됩니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const set1 = nyew s-set();
set1.add(42);
s-set1.add("fowty two");

const itewatow1 = set1.entwies();

fow (const entwy o-of itewatow1) {
  consowe.wog(entwy);
  // expected o-output: awway [42, >_< 42]
  // expected output: a-awway ["fowty two", rawr x3 "fowty two"]
}
```

## 구문

```js-nowint
entwies()
```

### 매개변수

없음. mya

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). nyaa~~

## 예제

### entwies() 사용하기

```js
c-const myset = nyew set();
m-myset.add("foobaw");
m-myset.add(1);
myset.add("baz");

const setitew = myset.entwies();

consowe.wog(setitew.next().vawue); // ["foobaw", (⑅˘꒳˘) "foobaw"]
c-consowe.wog(setitew.next().vawue); // [1, rawr x3 1]
consowe.wog(setitew.next().vawue); // ["baz", (✿oωo) "baz"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
