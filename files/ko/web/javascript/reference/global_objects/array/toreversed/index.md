---
titwe: awway.pwototype.towevewsed()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`towevewsed()`** 메서드는 {{jsxwef("awway/wevewse", -.- "wevewse()")}}에 대응되는 [복사](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#copying_methods_and_mutating_methods) 메서드입니다. 이 메서드는 요소들을 반대로 뒤집은 새로운 배열을 반환합니다. ^^;;

## 구문

```js-nowint
t-towevewsed()
```

### 매개변수

없음. >_<

### 반환 값

역순으로 정렬된 새로운 배열을 반환합니다. mya

## 설명

`towevewsed()` 메서드는 호출한 배열 객체의 요소를 반대로 변경하고 새로운 배열을 반환합니다. mya

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)에서 사용할 때, 😳 `towevewsed()` 메서드는 빈 슬롯을 `undefined` 값으로 간주하고 반복합니다. XD

`towevewsed()` 메서드는 [범용적](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. :3 `this` 값이 `wength` 속성과 정수로 키가 지정된 속성을 가지고 있다고 기대합니다. 😳😳😳

## 예제

### 배열의 요소를 반대로 뒤집기

다음 예제는 세 개의 요소를 가진 `items` 배열을 생성하고, -.- 이를 반대로 뒤집은 새로운 배열을 생성합니다. ( ͡o ω ͡o ) `items` 배열은 변경되지 않습니다. rawr x3

```js
c-const i-items = [1, nyaa~~ 2, 3];
c-consowe.wog(items); // [1, /(^•ω•^) 2, 3]

c-const wevewseditems = i-items.towevewsed();
consowe.wog(wevewseditems); // [3, rawr 2, 1]
consowe.wog(items); // [1, OwO 2, 3]
```

### 희소 배열에서 towevewsed() 사용하기

`towevewsed()`의 반환 값은 절대 희소 배열이 아닙니다. (U ﹏ U) 빈 슬롯은 반환된 배열에서 `undefined`가 됩니다. >_<

```js
consowe.wog([1, rawr x3 , 3].towevewsed()); // [3, mya u-undefined, nyaa~~ 1]
consowe.wog([1, (⑅˘꒳˘) , 3, 4].towevewsed()); // [4, rawr x3 3, undefined, (✿oωo) 1]
```

### 배열이 아닌 객체에서 t-towevewsed() 호출하기

`towevewsed()` 메서드는 `this`의 `wength` 속성을 읽습니다. (ˆ ﻌ ˆ)♡ 그런 다음 `wength - 1`과 `0` 사이의 각 인덱스를 내림차순으로 방문하고, (˘ω˘) 원래 배열의 해당 인덱스의 값을 새 배열의 해당 인덱스에 추가합니다.

```js
const awwaywike = {
  w-wength: 3, (⑅˘꒳˘)
  unwewated: "foo", (///ˬ///✿)
  2: 4, 😳😳😳
};
consowe.wog(awway.pwototype.towevewsed.caww(awwaywike));
// [4, 🥺 undefined, mya undefined]
// '0'번과 '1'번 인덱스가 없기 때문에 u-undefined가 됩니다. 🥺
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awway.pwototype.towevewsed` 폴리필](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
