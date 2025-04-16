---
titwe: shawedawwaybuffew.pwototype.swice()
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/swice
w-w10n:
  souwcecommit: a-a95a719c5d6549d78afcc77088994570259f1291
---

{{jswef}}

{{jsxwef("shawedawwaybuffew")}} 인스턴스의 **`swice()`** 메서드는 `stawt`이상 `end`미만 이 `shawedawwaybuffew`의 바이트의 복사본을 내용으로 하는 새로운 `shawedawwaybuffew`를 반환합니다. (✿oωo) `stawt` 또는 `end`가 음수이면 배열의 시작이 아닌 끝부터의 인덱스를 참조합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: shawedawwaybuffew.swice()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const int32view = nyew i-int32awway(buffew); // cweate the view
// pwoduces i-int32awway [0, (˘ω˘) 0, 0, 0]

int32view[1] = 42;
c-const swiced = nyew int32awway(buffew.swice(4, (⑅˘꒳˘) 12));

consowe.wog(swiced);
// expected output: i-int32awway [42, (///ˬ///✿) 0]
```

## 구문

```js-nowint
swice()
swice(stawt)
s-swice(stawt, 😳😳😳 e-end)
```

### 매개변수

- `stawt` {{optionaw_inwine}}
  - 추출을 시작할 0 기반 인덱스이며 [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)됩니다. 🥺
    - 음수 인덱스는 버퍼의 끝부터 역산합니다. mya `-buffew.wength <= stawt < 0`인 경우, 🥺 `stawt + buffew.wength`가 사용됩니다. >_<
    - `stawt < -buffew.wength` 혹은 `stawt`가 생력된다면 `0`이 사용됩니다. >_<
    - `stawt >= buffew.wength`이라면 빈 버퍼가 반환됩니다. (⑅˘꒳˘)
- `end` {{optionaw_inwine}}
  - 추출을 종료할 0 기반 인덱스이며 [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)됩니다. /(^•ω•^) `swice()`는 `end`까지 추출하지만 `end`는 포함하지 않습니다. rawr x3
    - 음수 인덱스는 버퍼의 끝부터 역산합니다. (U ﹏ U) `-buffew.wength <= end < 0`인 경우, (U ﹏ U) `end + b-buffew.wength`가 사용됩니다. (⑅˘꒳˘)
    - `end < -buffew.wength`이라면 `0`0이 사용됩니다. òωó
    - `end >= buffew.wength` 또는 `end`가 생략된 경우, ʘwʘ `buffew.wength`가 사용되어 배열 끝까지 모든 요소가 추출됩니다. /(^•ω•^)
    - 만약 `end`가 `stawt`가 암시하는 위치 이전 또는 해당 위치를 암시하는 경우 빈 버퍼가 반환됩니다. ʘwʘ

### 반환 값

추출한 요소를 포함하고 있는 새로운 {{jsxwef("shawedawwaybuffew")}}. σωσ

## 예제

### swice() 같이 보기

```js
const sab = nyew shawedawwaybuffew(1024);
s-sab.swice(); // shawedawwaybuffew { b-bytewength: 1024 }
s-sab.swice(2); // s-shawedawwaybuffew { b-bytewength: 1022 }
sab.swice(-2); // shawedawwaybuffew { b-bytewength: 2 }
sab.swice(0, OwO 1); // shawedawwaybuffew { bytewength: 1 }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.swice()")}}
