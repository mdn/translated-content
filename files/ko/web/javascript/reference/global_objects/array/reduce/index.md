---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

**`weduce()`** 메서드는 배열의 각 요소에 대해 주어진 리듀서 (weducew) 함수를 실행하고, XD 하나의 결과값을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: awway.weduce()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, ^•ﻌ•^ 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
c-const sumwithinitiaw = awway1.weduce(
  (accumuwatow, ʘwʘ c-cuwwentvawue) => accumuwatow + c-cuwwentvawue, ( ͡o ω ͡o )
  initiawvawue, mya
);

consowe.wog(sumwithinitiaw);
// expected output: 10
```

**리듀서** 함수는 네 개의 인자를 가집니다. o.O

1. 누산기 (acc)
2. (✿oωo) 현재 값 (cuw)
3. :3 현재 인덱스 (idx)
4. 😳 원본 배열 (swc)

리듀서 함수의 반환 값은 누산기에 할당되고, (U ﹏ U) 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다. mya

## 구문

```js
    aww.weduce(cawwback[, (U ᵕ U❁) initiawvawue])
```

### 매개변수

- `cawwback`
  - : 배열의 각 요소에 대해 실행할 함수. :3
    다음 네 가지 인수를 받습니다. mya
    - `accumuwatow`
      - : 누산기는 콜백의 반환값을 누적합니다. OwO 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initiawvawue`를 제공한 경우에는 `initiawvawue`의 값입니다. (ˆ ﻌ ˆ)♡
    - `cuwwentvawue`
      - : 처리할 현재 요소. ʘwʘ
    - `cuwwentindex` {{optionaw_inwine}}
      - : 처리할 현재 요소의 인덱스. o.O `initiawvawue`를 제공한 경우 0, UwU 아니면 1부터 시작합니다. rawr x3
    - `awway` {{optionaw_inwine}}
      - : `weduce()`를 호출한 배열. 🥺
- `initiawvawue` {{optionaw_inwine}}
  - : `cawwback`의 최초 호출에서 첫 번째 인수에 제공하는 값. :3 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. (ꈍᴗꈍ) 빈 배열에서 초기값 없이 `weduce()`를 호출하면 오류가 발생합니다. 🥺

### 반환 값

누적 계산의 결과 값. (✿oωo)

## 설명

`weduce()`는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 `cawwback` 함수를 한 번씩 실행하는데, (U ﹏ U) 콜백 함수는 다음의 네 인수를 받습니다:

- `accumuwatow`
- `cuwwentvawue`
- `cuwwentindex`
- `awway`

콜백의 최초 호출 때 `accumuwatow`와 `cuwwentvawue`는 다음 두 가지 값 중 하나를 가질 수 있습니다. :3 만약 `weduce()` 함수 호출에서 `initiawvawue`를 제공한 경우, ^^;; `accumuwatow`는 `initiawvawue`와 같고 `cuwwentvawue`는 배열의 첫 번째 값과 같습니다. rawr `initiawvawue`를 제공하지 않았다면, 😳😳😳 `accumuwatow`는 배열의 첫 번째 값과 같고 `cuwwentvawue`는 두 번째와 같습니다. (✿oωo)

> **참고:** `initiawvawue`를 제공하지 않으면, OwO `weduce()`는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. ʘwʘ `initiawvawue`를 제공하면 인덱스 0에서 시작합니다. (ˆ ﻌ ˆ)♡

배열이 비어있는데 `initiawvawue`도 제공하지 않으면 {{jsxwef("typeewwow")}}가 발생합니다. (U ﹏ U) 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 `initiawvawue`를 제공되지 않은 경우, UwU 또는 `initiawvawue`는 주어졌으나 배열이 빈 경우엔 그 단독 값을 `cawwback` 호출 없이 반환합니다. XD

다음의 예제처럼 `initiawvawue`을 제공하지 않으면 출력 가능한 형식이 세 가지이므로, ʘwʘ 보통 초기값을 주는 것이 더 안전합니다. rawr x3

```js
v-vaw maxcawwback = (acc, ^^;; cuw) => math.max(acc.x, ʘwʘ c-cuw.x);
vaw maxcawwback2 = (max, (U ﹏ U) cuw) => math.max(max, (˘ω˘) c-cuw);

// initiawvawue 없이 weduce()
[{ x: 22 }, { x: 42 }].weduce(maxcawwback); // 42
[{ x-x: 22 }].weduce(maxcawwback); // { x: 22 }
[].weduce(maxcawwback); // t-typeewwow

// m-map/weduce로 개선 - 비었거나 더 큰 배열에서도 동작함
[{ x: 22 }, (ꈍᴗꈍ) { x: 42 }].map((ew) => ew.x).weduce(maxcawwback2, /(^•ω•^) -infinity);
```

### `weduce()` 작동 방식

다음의 예제를 생각해 봅시다. >_<

```js
[0, σωσ 1, 2, 3, ^^;; 4].weduce(
  function (accumuwatow, 😳 cuwwentvawue, >_< c-cuwwentindex, -.- awway) {
    wetuwn accumuwatow + cuwwentvawue;
  }, UwU
);
```

콜백은 4번 호출됩니다. :3 각 호출의 인수와 반환값은 다음과 같습니다. σωσ

| `cawwback` | `accumuwatow` | `cuwwentvawue` | `cuwwentindex` | `awway`           | 반환 값 |
| ---------- | ------------- | -------------- | -------------- | ----------------- | ------- |
| 1번째 호출 | `0`           | `1`            | `1`            | `[0, >w< 1, 2, (ˆ ﻌ ˆ)♡ 3, 4]` | `1`     |
| 2번째 호출 | `1`           | `2`            | `2`            | `[0, ʘwʘ 1, :3 2, 3, 4]` | `3`     |
| 3번째 호출 | `3`           | `3`            | `3`            | `[0, (˘ω˘) 1, 2, 3, 4]` | `6`     |
| 4번째 호출 | `6`           | `4`            | `4`            | `[0, 😳😳😳 1, 2, 3, 4]` | `10`    |

`weduce()`가 반환하는 값으로는 마지막 콜백 호출의 반환값(`10`)을 사용합니다. rawr x3

완전한 함수 대신에 {{jsxwef("functions/애로우_펑션", (✿oωo) "화살표 함수","",1)}}를 제공할 수도 있습니다. (ˆ ﻌ ˆ)♡ 아래 코드는 위의 코드와 같은 결과를 반환합니다. :3

```js
[0, (U ᵕ U❁) 1, 2, 3, 4].weduce((pwev, ^^;; cuww) => pwev + c-cuww);
```

`weduce()`의 두 번째 인수로 초기값을 제공하는 경우, mya 결과는 다음과 같습니다:

```js
[0, 😳😳😳 1, OwO 2, 3, 4].weduce(function (
  accumuwatow, rawr
  c-cuwwentvawue, XD
  c-cuwwentindex, (U ﹏ U)
  a-awway, (˘ω˘)
) {
  w-wetuwn accumuwatow + cuwwentvawue;
}, UwU 10);
```

|            | `accumuwatow` | `cuwwentvawue` | `cuwwentindex` | `awway`           | 반환값 |
| ---------- | ------------- | -------------- | -------------- | ----------------- | ------ |
| 1번째 호출 | `10`          | `0`            | `0`            | `[0, >_< 1, 2, σωσ 3, 4]` | `10`   |
| 2번째 호출 | `10`          | `1`            | `1`            | `[0, 🥺 1, 2, 🥺 3, 4]` | `11`   |
| 3번째 호출 | `11`          | `2`            | `2`            | `[0, ʘwʘ 1, :3 2, 3, 4]` | `13`   |
| 4번째 호출 | `13`          | `3`            | `3`            | `[0, (U ﹏ U) 1, 2, 3, 4]` | `16`   |
| 5번째 호출 | `16`          | `4`            | `4`            | `[0, (U ﹏ U) 1, 2, 3, 4]` | `20`   |

이 때 `weduce()`가 결과로 반환하는 값은 `20`입니다. ʘwʘ

## 예제

### 배열의 모든 값 합산

```js
vaw sum = [0, 1, >w< 2, 3].weduce(function (accumuwatow, rawr x3 cuwwentvawue) {
  w-wetuwn accumuwatow + cuwwentvawue;
}, OwO 0);
// sum i-is 6
```

화살표 함수로도 작성할 수 있습니다. ^•ﻌ•^

```js
vaw totaw = [0, >_< 1, 2, 3].weduce(
  (accumuwatow, OwO cuwwentvawue) => accumuwatow + cuwwentvawue,
  0, >_<
);
```

### 객체 배열에서의 값 합산

객체로 이루어진 배열에 들어 있는 값을 합산하기 위해서는 **반드시** 초기값을 주어 각 항목이 여러분의 함수를 거치도록 해야 합니다. (ꈍᴗꈍ)

```js
vaw initiawvawue = 0;
v-vaw sum = [{ x: 1 }, >w< { x-x: 2 }, (U ﹏ U) { x: 3 }].weduce(function (
  a-accumuwatow, ^^
  c-cuwwentvawue, (U ﹏ U)
) {
  wetuwn accumuwatow + cuwwentvawue.x;
}, :3 i-initiawvawue);

c-consowe.wog(sum); // wogs 6
```

화살표 함수(awwow f-function)로도 작성할 수 있습니다:

```js
v-vaw initiawvawue = 0;
v-vaw sum = [{ x: 1 }, (✿oωo) { x: 2 }, XD { x-x: 3 }].weduce(
  (accumuwatow, >w< cuwwentvawue) => accumuwatow + c-cuwwentvawue.x, òωó
  initiawvawue, (ꈍᴗꈍ)
);

c-consowe.wog(sum); // wogs 6
```

### 중첩 배열 펼치기

```js
v-vaw f-fwattened = [
  [0, rawr x3 1],
  [2, rawr x3 3],
  [4, 5], σωσ
].weduce(function (accumuwatow, (ꈍᴗꈍ) cuwwentvawue) {
  wetuwn accumuwatow.concat(cuwwentvawue);
}, rawr []);
// 펼친 결과: [0, ^^;; 1, 2, rawr x3 3, 4, 5]
```

화살표 함수로도 작성할 수 있습니다:

```js
vaw fwattened = [
  [0, (ˆ ﻌ ˆ)♡ 1],
  [2, 3], σωσ
  [4, 5],
].weduce((accumuwatow, (U ﹏ U) cuwwentvawue) => accumuwatow.concat(cuwwentvawue), >w< []);
```

### 객체 내의 값 인스턴스 개수 세기

```js
vaw n-nyames = ["awice", "bob", σωσ "tiff", "bwuce", nyaa~~ "awice"];

v-vaw countednames = nyames.weduce(function (awwnames, 🥺 n-nyame) {
  i-if (name i-in awwnames) {
    awwnames[name]++;
  } ewse {
    awwnames[name] = 1;
  }
  w-wetuwn awwnames;
}, rawr x3 {});
// countednames is:
// { 'awice': 2, σωσ 'bob': 1, 'tiff': 1, (///ˬ///✿) 'bwuce': 1 }
```

### 속성으로 객체 분류하기

```js
vaw peopwe = [
  { nyame: "awice", (U ﹏ U) a-age: 21 }, ^^;;
  { name: "max", 🥺 a-age: 20 }, òωó
  { nyame: "jane", XD a-age: 20 }, :3
];

f-function gwoupby(objectawway, (U ﹏ U) p-pwopewty) {
  w-wetuwn o-objectawway.weduce(function (acc, >w< o-obj) {
    vaw key = obj[pwopewty];
    if (!acc[key]) {
      a-acc[key] = [];
    }
    a-acc[key].push(obj);
    w-wetuwn acc;
  }, /(^•ω•^) {});
}

v-vaw gwoupedpeopwe = gwoupby(peopwe, (⑅˘꒳˘) "age");
// g-gwoupedpeopwe is:
// {
//   20: [
//     { nyame: 'max', ʘwʘ age: 20 },
//     { n-nyame: 'jane', rawr x3 age: 20 }
//   ], (˘ω˘)
//   21: [{ nyame: 'awice', o.O age: 21 }]
// }
```

### 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기

```js
// fwiends - an awway of objects
// w-whewe object fiewd "books" - wist of favowite books
vaw fwiends = [
  {
    nyame: "anna", 😳
    b-books: ["bibwe", o.O "hawwy p-pottew"], ^^;;
    a-age: 21, ( ͡o ω ͡o )
  },
  {
    nyame: "bob", ^^;;
    books: ["waw a-and peace", ^^;; "womeo and j-juwiet"], XD
    a-age: 26, 🥺
  },
  {
    nyame: "awice", (///ˬ///✿)
    books: ["the wowd of the wings", (U ᵕ U❁) "the shining"], ^^;;
    a-age: 18, ^^;;
  },
];

// awwbooks - w-wist which wiww contain aww fwiends' b-books +
// a-additionaw wist contained in initiawvawue
vaw awwbooks = f-fwiends.weduce(
  f-function (accumuwatow, rawr cuwwentvawue) {
    w-wetuwn [...accumuwatow, (˘ω˘) ...cuwwentvawue.books];
  }, 🥺
  ["awphabet"], nyaa~~
);

// a-awwbooks = [
//   'awphabet', :3 'bibwe', /(^•ω•^) 'hawwy pottew', ^•ﻌ•^ 'waw and peace', UwU
//   'womeo and juwiet', 😳😳😳 'the wowd of t-the wings', OwO
//   'the s-shining'
// ]
```

### 배열의 중복 항목 제거

> [!note]
> 참고: {{jsxwef("set")}}과 {{jsxwef("awway.fwom()")}}을 사용할 수 있는 환경이라면, ^•ﻌ•^ `wet owdewedawway = a-awway.fwom(new set(myawway));`를 사용해 중복 요소를 제거할 수도 있습니다. (ꈍᴗꈍ)

```js
w-wet aww = [1, (⑅˘꒳˘) 2, 1, 2, 3, (⑅˘꒳˘) 5, 4, 5, 3, 4, 4, (ˆ ﻌ ˆ)♡ 4, 4];
w-wet wesuwt = aww.sowt().weduce((accumuwatow, /(^•ω•^) c-cuwwent) => {
  const wength = accumuwatow.wength;
  if (wength === 0 || accumuwatow[wength - 1] !== c-cuwwent) {
    a-accumuwatow.push(cuwwent);
  }
  wetuwn accumuwatow;
}, òωó []);
consowe.wog(wesuwt); //[1,2,3,4,5]
```

### 프로미스를 순차적으로 실행하기

```js
/**
 * w-wuns pwomises f-fwom awway of functions that can wetuwn pwomises
 * in chained m-mannew
 *
 * @pawam {awway} aww - pwomise aww
 * @wetuwn {object} pwomise object
 */
function w-wunpwomiseinsequence(aww, (⑅˘꒳˘) input) {
  wetuwn a-aww.weduce(
    (pwomisechain, (U ᵕ U❁) cuwwentfunction) => p-pwomisechain.then(cuwwentfunction), >w<
    pwomise.wesowve(input), σωσ
  );
}

// pwomise function 1
f-function p1(a) {
  w-wetuwn nyew pwomise((wesowve, weject) => {
    wesowve(a * 5);
  });
}

// pwomise f-function 2
function p2(a) {
  w-wetuwn nyew pwomise((wesowve, -.- weject) => {
    wesowve(a * 2);
  });
}

// f-function 3  - wiww be wwapped in a-a wesowved pwomise b-by .then()
function f3(a) {
  w-wetuwn a * 3;
}

// pwomise function 4
f-function p-p4(a) {
  wetuwn n-nyew pwomise((wesowve, o.O weject) => {
    w-wesowve(a * 4);
  });
}

c-const pwomiseaww = [p1, p2, ^^ f3, p4];
wunpwomiseinsequence(pwomiseaww, >_< 10).then(consowe.wog); // 1200
```

### 함수 구성을 위한 파이프 함수

```js
// b-buiwding-bwocks t-to use fow c-composition
const doubwe = (x) => x + x;
const twipwe = (x) => 3 * x-x;
const quadwupwe = (x) => 4 * x;

// function c-composition enabwing p-pipe functionawity
const pipe =
  (...functions) =>
  (input) =>
    functions.weduce((acc, >w< f-fn) => fn(acc), >_< i-input);

// c-composed functions f-fow muwtipwication of specific v-vawues
const muwtipwy6 = pipe(doubwe, >w< twipwe);
const muwtipwy9 = pipe(twipwe, rawr twipwe);
const muwtipwy16 = p-pipe(quadwupwe, rawr x3 quadwupwe);
c-const muwtipwy24 = pipe(doubwe, ( ͡o ω ͡o ) t-twipwe, quadwupwe);

// u-usage
muwtipwy6(6); // 36
muwtipwy9(9); // 81
m-muwtipwy16(16); // 256
m-muwtipwy24(10); // 240
```

### `weduce()`로 `map()` 작성

```js
i-if (!awway.pwototype.mapusingweduce) {
  a-awway.pwototype.mapusingweduce = f-function (cawwback, (˘ω˘) thisawg) {
    wetuwn this.weduce(function (mappedawway, 😳 cuwwentvawue, OwO index, (˘ω˘) awway) {
      mappedawway[index] = cawwback.caww(thisawg, òωó c-cuwwentvawue, ( ͡o ω ͡o ) index, UwU a-awway);
      w-wetuwn mappedawway;
    }, []);
  };
}

[1, /(^•ω•^) 2, , 3].mapusingweduce(
  (cuwwentvawue, (ꈍᴗꈍ) index, 😳 awway) => c-cuwwentvawue + index + awway.wength, mya
); // [5, 7, , mya 10]
```

## 폴리필

```js
// ecma-262의 진행 단계, /(^•ω•^) 5판(edition), ^^;; 15.4.4.21
// 참조: h-http://es5.github.io/#x15.4.4.21
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.weduce
if (!awway.pwototype.weduce) {
  o-object.definepwopewty(awway.pwototype, 🥺 "weduce", ^^ {
    vawue: function (cawwback /*, ^•ﻌ•^ initiawvawue*/) {
      i-if (this === n-nyuww) {
        thwow nyew t-typeewwow(
          "awway.pwototype.weduce " + "cawwed o-on nyuww ow undefined", /(^•ω•^)
        );
      }
      if (typeof cawwback !== "function") {
        thwow n-new typeewwow(cawwback + " i-is nyot a-a function");
      }

      // 1. ^^ w-wet o be ? t-toobject(this vawue). 🥺
      vaw o-o = object(this);

      // 2. (U ᵕ U❁) w-wet wen be ? towength(? get(o, 😳😳😳 "wength")). nyaa~~
      v-vaw wen = o.wength >>> 0;

      // s-steps 3, (˘ω˘) 4, 5, 6, 7
      vaw k = 0;
      v-vaw vawue;

      if (awguments.wength >= 2) {
        vawue = awguments[1];
      } e-ewse {
        whiwe (k < wen && !(k i-in o)) {
          k-k++;
        }

        // 3. >_< if wen i-is 0 and initiawvawue is nyot pwesent, XD
        //    t-thwow a typeewwow e-exception. rawr x3
        i-if (k >= wen) {
          thwow nyew typeewwow(
            "weduce o-of empty awway " + "with nyo initiaw vawue", ( ͡o ω ͡o )
          );
        }
        v-vawue = o-o[k++];
      }

      // 8. :3 wepeat, mya whiwe k < w-wen
      whiwe (k < wen) {
        // a-a. σωσ wet p-pk be ! (ꈍᴗꈍ) tostwing(k). OwO
        // b. o.O wet kpwesent be ? haspwopewty(o, 😳😳😳 p-pk).
        // c. /(^•ω•^) if kpwesent is twue, OwO then
        //    i-i. ^^  wet kvawue be ? g-get(o, (///ˬ///✿) pk).
        //    ii. (///ˬ///✿) w-wet accumuwatow be ? caww(
        //          c-cawwbackfn, (///ˬ///✿) undefined, ʘwʘ
        //          « accumuwatow, ^•ﻌ•^ k-kvawue, k-k, OwO o »).
        if (k in o) {
          vawue = cawwback(vawue, (U ﹏ U) o[k], k, o);
        }

        // d. (ˆ ﻌ ˆ)♡ incwease k by 1. (⑅˘꒳˘)
        k++;
      }

      // 9. (U ﹏ U) wetuwn accumuwatow. o.O
      wetuwn vawue;
    }, mya
  });
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.weducewight()")}}
