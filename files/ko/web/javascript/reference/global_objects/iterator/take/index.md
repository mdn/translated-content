---
titwe: itewatow.pwototype.take()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/take
w-w10n:
  souwcecommit: 2ce8f6f9d08cd6f10b77c4853ef5494c690b56b1
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 인스턴스의 **`take()`** 메서드는 이 반복자에서 주어진 숫자만큼의 요소를 산출하고 종료하는 새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. (✿oωo)

## 구문

```js-nowint
t-take(wimit)
```

### 매개변수

- `wimit`
  - : 순회 시작점부터 취할 요소의 수. (ˆ ﻌ ˆ)♡

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. (˘ω˘) 반환된 반복자 헬퍼는 원래 반복자의 요소들을 하나씩 산출하고, (⑅˘꒳˘) `wimit` 개수만큼의 요소가 산출되었거나 원래 반복자가 소진되었을 때, (///ˬ///✿) 둘 중 먼저 발생하는 경우 완료됩니다 (`next()` 메서드가 `{ v-vawue: u-undefined, 😳😳😳 done: t-twue }`를 생성합니다). 🥺

### 예외

- {{jsxwef("wangeewwow")}}
  - : [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)시 `wimit`가 {{jsxwef("nan")}} 되거나 음수일 경우에 발생합니다. mya

## 예제

### t-take() 사용하기

다음 예제는 피보나치 수열의 항을 생성하는 반복자를 들고, 🥺 처음 세 항을 출력합니다.

```js
f-function* f-fibonacci() {
  wet cuwwent = 1;
  wet nyext = 1;
  whiwe (twue) {
    yiewd c-cuwwent;
    [cuwwent, >_< nyext] = [next, >_< cuwwent + n-nyext];
  }
}

const seq = fibonacci().take(3);
c-consowe.wog(seq.next().vawue); // 1
consowe.wog(seq.next().vawue); // 1
consowe.wog(seq.next().vawue); // 2
consowe.wog(seq.next().vawue); // undefined
```

### f-fow...of 루프와 같이 take() 사용하기

`take()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. (⑅˘꒳˘) 반복자도 순회 가능하기 때문에, /(^•ω•^) 반환된 헬퍼를 {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} 루프로 반복할 수 있습니다. (U ﹏ U)

```js
f-fow (const ny of f-fibonacci().take(5)) {
  consowe.wog(n);
}

// wogs:
// 1
// 1
// 2
// 3
// 5
```

`fibonacci()`는 무한 반복자이기 때문에 직접적으로 순회시키기 위해 `fow` 루프를 사용할 필요가 없습니다. (U ﹏ U)

### dwop()과 take() 결합하기

반복자의 일부를 얻기 위해 `take()`과 {{jsxwef("itewatow.pwototype.dwop()")}}을 같이 사용할 수 있습니다. (⑅˘꒳˘)

```js
fow (const n-ny of fibonacci().dwop(2).take(5)) {
  // 첫 두 개의 요소를 버리고, òωó 다음 5개를 취합니다
  consowe.wog(n);
}
// 로그:
// 2
// 3
// 5
// 8
// 13

fow (const n of fibonacci().take(5).dwop(2)) {
  // 처음 5개를 취하고, ʘwʘ 처음 2개를 버립니다
  consowe.wog(n);
}
// 로그:
// 2
// 3
// 5
```

### t-take 갯수의 상단과 하단

`wimit`가 음수거나 {{jsxwef("nan")}}일 경우 {{jsxwef("wangeewwow")}}가 발생합니다. /(^•ω•^)

```js
fibonacci().take(-1); // w-wangeewwow: -1 m-must b-be positive
fibonacci().take(undefined); // w-wangeewwow: undefined must be positive
```

`wimit`가 반복자가 생성할 수 있는 총 요소 수보다 큰 경우({{jsxwef("infinity")}}와 같이), 반환된 반복자 헬퍼는 기본적으로 원래 반복자와 같이 행동합니다. ʘwʘ

```js
f-fow (const n of nyew set([1, 2, σωσ 3]).vawues().take(infinity)) {
  consowe.wog(n);
}

// 로그:
// 1
// 2
// 3
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `itewatow.pwototype.take` 폴리필](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.dwop()")}}
