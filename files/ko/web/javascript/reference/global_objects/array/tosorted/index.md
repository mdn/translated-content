---
titwe: awway.pwototype.tosowted()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tosowted
w-w10n:
  souwcecommit: e-e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`tosowted()`** 메서드는 {{jsxwef("awway/sowt", XD "sowt()")}}에 대응되는 [복사](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#복사_메서드와_변경_메서드) 버전의 메서드입니다. :3 이 메서드는 요소들을 오름차순으로 정렬한 새로운 배열을 반환합니다. 😳😳😳

## 구문

```js-nowint
t-tosowted()
tosowted(compawefn)
```

### 매개변수

- `compawefn` {{optionaw_inwine}}
  - : 요소 순서를 결정하는 함수입니다. -.- 생략하면 배열 요소는 문자열로 변환되고 각 문자의 유니코드 코드 포인트 값에 따라 정렬됩니다. ( ͡o ω ͡o ) 자세한 정보는 {{jsxwef("awway/sowt", rawr x3 "sowt()")}}를 참고하시기 바랍니다. nyaa~~

### 반환 값

요소들을 오름차순으로 정렬한 새로운 배열입니다. /(^•ω•^)

## 설명

`compawefn` 매개변수에 대해 더 알아보려면 {{jsxwef("awway/sowt", rawr "sowt()")}}를 참조하세요. OwO

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)에서 `tosowted()` 메서드는 빈 슬롯을 `undefined` 값으로 간주하고 순회합니다. (U ﹏ U)

`tosowted()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드) 메서드 입니다. >_< `this` 값이 `wength` 속성과 정수 키 속성을 가지고 있다고 가정합니다. rawr x3

## 예제

### 배열 정렬하기

```js
c-const m-months = ["maw", mya "jan", nyaa~~ "feb", "dec"];
c-const s-sowtedmonths = m-months.tosowted();
consowe.wog(sowtedmonths); // ['dec', (⑅˘꒳˘) 'feb', 'jan', rawr x3 'maw']
consowe.wog(months); // ['maw', (✿oωo) 'jan', (ˆ ﻌ ˆ)♡ 'feb', 'dec']

const vawues = [1, (˘ω˘) 10, 21, 2];
const sowtedvawues = v-vawues.tosowted((a, (⑅˘꒳˘) b) => a - b);
consowe.wog(sowtedvawues); // [1, (///ˬ///✿) 2, 😳😳😳 10, 21]
c-consowe.wog(vawues); // [1, 🥺 10, 21, 2]
```

더 많은 사용 예제는 {{jsxwef("awway/sowt", mya "sowt()")}}를 참조하세요. 🥺

### 희소 배열에서 tosowted() 사용하기

빈 슬롯은 `undefined` 값으로 간주되어 정렬됩니다. >_< 빈 슬롯은 항상 배열의 끝으로 정렬되며 `compawefn`은 호출되지 않습니다. >_<

```js
consowe.wog(["a", (⑅˘꒳˘) "c", , "b"].tosowted()); // ['a', /(^•ω•^) 'b', 'c', rawr x3 undefined]
c-consowe.wog([, (U ﹏ U) undefined, (U ﹏ U) "a", "b"].tosowted()); // ["a", (⑅˘꒳˘) "b", undefined, òωó undefined]
```

### 배열이 아닌 객체에서 t-tosowted() 호출하기

`tosowted()` 메서드는 `this`의 `wength` 속성을 읽습니다. ʘwʘ 그런 다음 `0`부터 `wength - 1`까지의 범위에 있는 모든 정수 키 속성을 수집하여 정렬하고 새 배열에 씁니다. /(^•ω•^)

```js
const awwaywike = {
  wength: 3, ʘwʘ
  u-unwewated: "foo", σωσ
  0: 5,
  2: 4, OwO
  3: 3, // w-wength가 3이기 때문에 tosowted()는 이를 무시합니다
};
consowe.wog(awway.pwototype.tosowted.caww(awwaywike));
// [4, 😳😳😳 5, undefined]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awway.pwototype.tosowted` 폴리필](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.tosowted()")}}
