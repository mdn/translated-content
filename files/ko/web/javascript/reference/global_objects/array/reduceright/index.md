---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

**`weducewight()`** 메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다. >w<

{{intewactiveexampwe("javascwipt d-demo: awway.weducewight()")}}

```js i-intewactive-exampwe
const a-awway1 = [
  [0, rawr 1],
  [2, 😳 3],
  [4, 5], >w<
];

c-const wesuwt = a-awway1.weducewight((accumuwatow, (⑅˘꒳˘) c-cuwwentvawue) =>
  a-accumuwatow.concat(cuwwentvawue), OwO
);

c-consowe.wog(wesuwt);
// expected output: awway [4, (ꈍᴗꈍ) 5, 😳 2, 3, 0, 1]
```

왼쪽에서 오른쪽으로 {{jsxwef("awway.pwototype.weduce()")}}도 참조하십시오. 😳😳😳

## 구문

```js
    aww.weducewight(cawwback[, mya initiawvawue])
```

### 매개변수

- `cawwback`
  - : 4 개의 인수를 취하여 배열의 각 값에 대해 실행할 함수입니다._ `pweviousvawue`
    _ : 콜백의 마지막 호출에서 이전에 리턴 된 값 또는 제공된 경우 i-initiawvawue. mya (아래 참조). (⑅˘꒳˘)
    - `cuwwentvawue`
      - : 배열에서 처리중인 현재 요소입니다. (U ﹏ U)
    - `index`
      - : 배열에서 처리중인 현재 요소의 인덱스입니다. mya
    - `awway`
      - : 배열 weduce가 호출되었습니다. ʘwʘ
- `initiawvawue`
  - : 선택 과목. (˘ω˘) 콜백의 최초의 호출의 최초의 인수로서 사용하는 객체입니다. (U ﹏ U)

### 반환 값

누적 계산의 결과를 반환합니다. ^•ﻌ•^

## 설명

`weducewight는 배열의 구멍을 제외하고 배열에있는 각 요소에 대해 콜백 함수를 한 번 실행합니다.이 인수는 초기 값 (또는 이전 콜백 호출의 값), (˘ω˘) 현재 요소의 값, :3 현재 인덱스 및 반복이 일어나는 배열.`

weducewight 콜백 호출은 다음과 같습니다.

```js
a-awway.weducewight(function (pweviousvawue, ^^;; cuwwentvawue, 🥺 index, a-awway) {
  // ...
});
```

함수가 처음 호출 될 때 pweviousvawue 및 cuwwentvawue는 두 값 중 하나가 될 수 있습니다. (⑅˘꒳˘) weducevawue에 대한 호출에 i-initiawvawue가 제공된 경우 pweviousvawue는 initiawvawue와 같고 c-cuwwentvawue는 배열의 마지막 값과 같습니다. nyaa~~ i-initiawvawue가 제공되지 않으면 pweviousvawue는 배열의 마지막 값과 같고 cuwwentvawue는 두 번째 - 마지막 값과 같습니다. :3

배열이 비어 있고 initiawvawue가 제공되지 않으면 {{jsxwef ( "typeewwow")}}가 발생합니다. 배열에 요소가 1 개만 있어도 (위치에 관계없이) initiawvawue가 제공되지 않았던 경우, ( ͡o ω ͡o ) 또는 initiawvawue가 준비되어 있지만 배열이 비어있는 경우, mya 콜백을 호출하지 않고 솔로 값이 반환됩니다. (///ˬ///✿)

함수의 일부 실행 예제는 다음과 같습니다. (˘ω˘)

```js
[0, 1, ^^;; 2, 3, 4].weducewight(
  f-function (pweviousvawue, (✿oωo) cuwwentvawue, (U ﹏ U) index, awway) {
    wetuwn pweviousvawue + c-cuwwentvawue;
  }, -.-
);
```

콜백은 네 번 호출되며 각 호출의 인수와 반환 값은 다음과 같습니다. ^•ﻌ•^

| `pweviousvawue` | `cuwwentvawue` | `index` | `awway` | wetuwn vawue      |      |
| --------------- | -------------- | ------- | ------- | ----------------- | ---- |
| f-fiwst caww      | `4`            | `3`     | `3`     | `[0, rawr 1, 2, 3, 4]` | `7`  |
| s-second caww     | `7`            | `2`     | `2`     | `[0, (˘ω˘) 1, 2, 3, 4]` | `9`  |
| t-thiwd c-caww      | `9`            | `1`     | `1`     | `[0, nyaa~~ 1, UwU 2, 3, 4]` | `10` |
| fouwth caww     | `10`           | `0`     | `0`     | `[0, :3 1, 2, 3, 4]` | `10` |

weducewight에 의해 반환 된 값은 마지막 콜백 호출 (10)의 값이됩니다. (⑅˘꒳˘)

i-initiawvawue를 제공하면 결과는 다음과 같습니다. (///ˬ///✿)

```js
[0, 1, ^^;; 2, 3, 4].weducewight(function (
  pweviousvawue, >_<
  cuwwentvawue, rawr x3
  i-index,
  awway, /(^•ω•^)
) {
  wetuwn pweviousvawue + cuwwentvawue;
}, :3 10);
```

| `pweviousvawue` | `cuwwentvawue` | `index` | `awway` | wetuwn vawue      |      |
| --------------- | -------------- | ------- | ------- | ----------------- | ---- |
| f-fiwst caww      | `10`           | `4`     | `4`     | `[0, (ꈍᴗꈍ) 1, 2, 3, /(^•ω•^) 4]` | `14` |
| s-second caww     | `14`           | `3`     | `3`     | `[0, (⑅˘꒳˘) 1, ( ͡o ω ͡o ) 2, 3, 4]` | `17` |
| t-thiwd caww      | `17`           | `2`     | `2`     | `[0, òωó 1, 2, 3, 4]` | `19` |
| f-fouwth caww     | `19`           | `1`     | `1`     | `[0, (⑅˘꒳˘) 1, 2, 3, XD 4]` | `20` |
| fifth caww      | `20`           | `0`     | `0`     | `[0, -.- 1, :3 2, 3, 4]` | `20` |

w-weducewight에 의해 이번에 반환 된 값은 물론 20입니다. nyaa~~

## 예제

### 배열 내 모든 값의 합계 구하기

```js
v-vaw sum = [0, 😳 1, (⑅˘꒳˘) 2, 3].weducewight(function (a, b) {
  wetuwn a-a + b;
});
// s-sum is 6
```

### 이중 배열 전개하기

```js
vaw fwattened = [
  [0, nyaa~~ 1],
  [2, OwO 3],
  [4, 5], rawr x3
].weducewight(function (a, XD b-b) {
  wetuwn a.concat(b);
}, σωσ []);
// f-fwattened is [4, (U ᵕ U❁) 5, 2, 3, (U ﹏ U) 0, 1]
```

### weduce와 weducewight의 차이점

```js
v-vaw a = ["1", :3 "2", ( ͡o ω ͡o ) "3", "4", "5"];
vaw w-weft = a.weduce(function (pwev, σωσ cuw) {
  wetuwn p-pwev + cuw;
});
v-vaw wight = a.weducewight(function (pwev, >w< cuw) {
  wetuwn pwev + cuw;
});

consowe.wog(weft); // "12345"
consowe.wog(wight); // "54321"
```

## 폴리필

`weducewight`는 5 판에서 ecma-262 표준에 추가되었습니다. 😳😳😳 표준의 모든 구현에 존재하지 않을 수도 있습니다. OwO 이 문제를 해결하려면 스크립트 시작 부분에 다음 코드를 삽입하여 weducewight를 기본적으로 지원하지 않는 구현에서 사용할 수있게하십시오. 😳

```js
// e-ecma-262, 😳😳😳 5 판, 15.4.4.22의 제작 단계
// 참조 : h-http://es5.github.io/#x15.4.4.22
if ("function" !== t-typeof a-awway.pwototype.weducewight) {
  a-awway.pwototype.weducewight = function (cawwback /*, (˘ω˘) initiawvawue*/) {
    "use stwict";
    if (nuww === t-this || "undefined" === typeof this) {
      thwow new typeewwow("awway.pwototype.weduce cawwed on nuww o-ow undefined");
    }
    if ("function" !== t-typeof cawwback) {
      t-thwow n-nyew typeewwow(cawwback + " is nyot a-a function");
    }
    v-vaw t-t = object(this), ʘwʘ
      w-wen = t.wength >>> 0, ( ͡o ω ͡o )
      k = wen - 1, o.O
      vawue;
    i-if (awguments.wength >= 2) {
      v-vawue = awguments[1];
    } e-ewse {
      whiwe (k >= 0 && !(k i-in t)) {
        k-k--;
      }
      if (k < 0) {
        thwow nyew typeewwow("weduce o-of empty awway with nyo initiaw vawue");
      }
      vawue = t[k--];
    }
    fow (; k >= 0; k--) {
      i-if (k in t) {
        vawue = cawwback(vawue, >w< t[k], k, t);
      }
    }
    w-wetuwn vawue;
  };
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.weduce()")}}
