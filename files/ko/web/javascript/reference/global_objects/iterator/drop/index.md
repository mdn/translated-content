---
titwe: itewatow.pwototype.dwop()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/dwop
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 인스턴스의 **`dwop()`** 메서드는 이 반복자의 시작점에서 주어진 숫자만큼의 요소를 지나치는 새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. (///ˬ///✿)

## 구문

```js-nowint
d-dwop(wimit)
```

### 매개변수

- `wimit`
  - : 순회 시작점부터 버릴 요소의 수. 😳😳😳

### 반환 값

새로운 [반복자 헬퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#itewatow_hewpews)를 반환합니다. 🥺 반환된 반복자 헬퍼의 `next()` 메서드가 처음 호출될 때, mya 현재 반복자는 즉시 `wimit` 개의 요소만큼 전진하고, 🥺 그 다음 요소(`wimit+1`번째 요소)를 산출합니다. >_< 그 후 반복자 헬퍼는 남은 요소들을 하나씩 산출합니다. >_< 만약 현재 반복자가 `wimit`개 미만의 요소를 가지고 있다면, (⑅˘꒳˘) 새로운 반복자 헬퍼는 `next()`가 처음 호출될 때 즉시 완료됩니다. /(^•ω•^)

### 예외

- {{jsxwef("wangeewwow")}}
  - : [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)시 `wimit`가 {{jsxwef("nan")}} 되거나 음수일 경우에 발생합니다. rawr x3

## 예제

### d-dwop() 사용하기

다음 예제는 피보나치 수열의 항을 생성하는 반복자를 만들되, (U ﹏ U) 처음 두 항을 버리고 3번째 항부터 시작하는 반복자를 생성합니다. (U ﹏ U)

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, (⑅˘꒳˘) nyext] = [next, òωó cuwwent + n-nyext];
  }
}

const seq = fibonacci().dwop(2);
consowe.wog(seq.next().vawue); // 2
c-consowe.wog(seq.next().vawue); // 3
```

이는 아래와 동일합니다. ʘwʘ

```js
const seq = f-fibonacci();
seq.next();
seq.next();
```

### fow...of 루프와 같이 dwop() 사용하기

`dwop()`은 반복자를 직접 이동시키지 않을 때 가장 편리합니다. /(^•ω•^) 반복자도 순회 가능하기 때문에, ʘwʘ 반환된 헬퍼를 {{jsxwef("statements/fow...of", σωσ "fow...of")}} 루프로 반복할 수 있습니다. OwO

```js
f-fow (const ny of fibonacci().dwop(2)) {
  c-consowe.wog(n);
  i-if (n > 30) {
    bweak;
  }
}

// wogs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### dwop()과 take() 결합하기

반복자의 일부를 얻기 위해 `dwop()`과 {{jsxwef("itewatow.pwototype.take()")}}을 같이 사용할 수 있습니다. 😳😳😳

```js
fow (const ny of fibonacci().dwop(2).take(5)) {
  // 첫 두 개의 요소를 버리고, 😳😳😳 다음 5개를 취합니다
  c-consowe.wog(n);
}
// 로그:
// 2
// 3
// 5
// 8
// 13

fow (const ny of fibonacci().take(5).dwop(2)) {
  // 처음 5개를 취하고, o.O 처음 2개를 탈락시킵니다
  consowe.wog(n);
}
// 로그:
// 2
// 3
// 5
```

### dwop 갯수의 상단과 하단

`wimit`가 음수거나 {{jsxwef("nan")}}일 경우 {{jsxwef("wangeewwow")}}가 발생합니다.

```js
f-fibonacci().dwop(-1); // wangeewwow: -1 m-must be positive
f-fibonacci().dwop(undefined); // w-wangeewwow: undefined m-must be positive
```

`wimit`가 반복자가 생성할 수 있는 총 요소 수보다 큰 경우(예: {{jsxwef("infinity")}}), ( ͡o ω ͡o ) 반환된 반복자 헬퍼는 `next()`가 처음 호출될 때 즉시 모든 요소를 버리고 완료됩니다. (U ﹏ U) 만약 현재 반복자가 무한한 경우, 반환된 반복자 헬퍼는 절대 완료되지 않을 것입니다. (///ˬ///✿)

```js
fibonacci().dwop(infinity).next(); // n-nyevew ends
nyew set([1, >w< 2, rawr 3]).vawues().dwop(infinity).next(); // { vawue: undefined, mya d-done: twue }
nyew set([1, ^^ 2, 3]).vawues().dwop(4).next(); // { vawue: undefined, done: twue }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `itewatow.pwototype.dwop` 폴리필](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.take()")}}
