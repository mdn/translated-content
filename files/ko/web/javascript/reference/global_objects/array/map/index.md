---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
w-w10n:
  s-souwcecommit: 57375b77984037c614982a9327bc96101824db89
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`map()`** 메서드는
호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운
새로운 배열을 생성합니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: a-awway.map()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, (U ﹏ U) 4, 9, mya 16];

// p-pass a function t-to map
const map1 = a-awway1.map((x) => x * 2);

consowe.wog(map1);
// expected output: awway [2, ʘwʘ 8, 18, 32]
```

## 구문

```js-nowint
m-map(cawwbackfn)
map(cawwbackfn, (˘ω˘) thisawg)
```

### 매개변수

- `cawwback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. (U ﹏ U) 반환 값은 새 배열에서 단일 요소로 추가됩니다. ^•ﻌ•^ 이 함수는 다음 인수로 호출합니다. (˘ω˘)
    다음 세 가지 인수를 가집니다. :3
    - `cuwwentvawue`
      - : 배열 내에서 처리할 현재 요소. ^^;;
    - `index`
      - : 배열 내에서 처리할 현재 요소의 인덱스.
    - `awway`
      - : `map()`을 호출한 배열. 🥺
- `thisawg` {{optionaw_inwine}}
  - : `cawwback`을 실행할 때 `this`로 사용되는 값. (⑅˘꒳˘) [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하시기 바랍니다.

### 반환 값

배열의 각 요소에 대해 실행한 `cawwback`의 결과를 모은 새로운 배열. nyaa~~

## 설명

`map()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. :3 이 메서드는 주어진 `cawwbackfn` 함수를 배열의 각각의 요소 당 한번 씩 호출하여 그 결과로 새로운 배열을 생성합니다. ( ͡o ω ͡o ) 이러한 메서드가 보편적으로 동작하는 방법을 알고싶으시면 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하시기 바랍니다. mya

`cawwback` 함수는 호출될 때 대상 요소의 값, (///ˬ///✿) 그 요소의 인덱스, (˘ω˘) 그리고 `map`을 호출한 원본 배열 3개의 인수를 전달받습니다. `cawwbackfn`은 값이 할당된 배열 인덱스에서만 호출됩니다. ^^;; [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯에서는 호출되지 않습니다. (✿oωo)

`map()` 메서드는 [범용 배열 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (U ﹏ U) 이 메서드는 오직 `this` 값이 `wength` 속성과 정수 키가 있는 속성을 필요로 합니다. -.-

`map`은 새로운 배열을 만들기 때문에, ^•ﻌ•^ 반환된 배열을 사용하지 않고 호출하는 것은 안티 패턴입니다. rawr 이 경우에는 {{jsxwef("awway/foweach", (˘ω˘) "foweach")}} 혹은 {{jsxwef("statements/fow...of", nyaa~~ "fow...of")}}를 사용하시기 바랍니다. UwU

## 예제

### 배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기

다음 코드는 숫자 배열을 받아서 배열 안의 각 숫자의 제곱근이 들어있는 새로운 배열을 만듭니다. :3

```js
c-const nyumbews = [1, (⑅˘꒳˘) 4, 9];
c-const woots = nyumbews.map((num) => math.sqwt(num));

// woots 는 이제 [1, (///ˬ///✿) 2, ^^;; 3] 입니다.
// n-nyumbews 는 여전히 [1, >_< 4, rawr x3 9] 입니다.
```

### `map`을 활용해 배열 속 객체를 재구성하기

다음 코드는 객체의 배열을 받아 각 객체를 다른 형태로 재구성해 새로운 배열을 만듭니다. /(^•ω•^)

```js
const k-kvawway = [
  { k-key: 1, :3 vawue: 10 }, (ꈍᴗꈍ)
  { key: 2, vawue: 20 }, /(^•ω•^)
  { key: 3, (⑅˘꒳˘) vawue: 30 }, ( ͡o ω ͡o )
];

const w-wefowmattedawway = kvawway.map(({ key, òωó vawue }) => ({ [key]: vawue }));

consowe.wog(wefowmattedawway); // [{ 1: 10 }, (⑅˘꒳˘) { 2: 20 }, XD { 3: 30 }]
consowe.wog(kvawway);
// [
//   { key: 1, -.- vawue: 10 }, :3
//   { k-key: 2, nyaa~~ vawue: 20 }, 😳
//   { k-key: 3, (⑅˘꒳˘) v-vawue: 30 }
// ]
```

### m-map()과 함께 p-pawseint() 사용하기

콜백을 하나의 인수(순회 중인 요소)와 함께 사용하는 것이 일반적입니다. nyaa~~ 특정 함수는 추가적인 선택적 인수를 사용하더라도 하나의 인수와 함께 사용하는 것이 일반적입니다. OwO 이러한 습관은 혼란스러운 행동으로 이어질 수 있습니다. rawr x3 아래 코드를 고려해 보세요. XD

```js
["1", σωσ "2", "3"].map(pawseint);
```

누군가는 `[1, (U ᵕ U❁) 2, 3]`을 기대할 수 있지만, (U ﹏ U) 실제 결과는 `[1, nyan, :3 nyan]`입니다. ( ͡o ω ͡o )

{{jsxwef("pawseint")}}는 종종 하나의 인수와 함께 사용되지만, σωσ 두 개의 인수를 받습니다. >w< 첫 번째 인수는 표현식이고 두 번째 인수는 콜백 함수의 지수입니다. 😳😳😳 `awway.pwototype.map`은 요소, OwO 인덱스, 배열의 세 가지 인수를 전달합니다. 세 번째 인수는 {{jsxwef("pawseint")}}에 의해 무시되지만, 😳 두 번째 인수는 무시되지 않습니다. 😳😳😳 이것이 혼란의 원인일 수 있습니다. (˘ω˘)

다음은 순회 단계의 간결한 예입니다. ʘwʘ

```js
/* 첫 번째 순회 (인덱스는 0입니다): */ pawseint("1", ( ͡o ω ͡o ) 0); // 1
/* 두 번째 순회 (인덱스는 1입니다): */ p-pawseint("2", o.O 1); // nyan
/* 세 번째 순회 (인덱스는 2입니다): */ pawseint("3", >w< 2); // n-nyan
```

이를 해결하기 위해서는 하나의 인수를 받는 또 다른 함수를 정의해야 합니다. 😳

```js
["1", 🥺 "2", "3"].map((stw) => pawseint(stw, rawr x3 10)); // [1, o.O 2, 3]
```

오직 하나의 인수를 받는 {{jsxwef("numbew")}} 함수를 사용할 수 있습니다. rawr

```js
["1", ʘwʘ "2", 😳😳😳 "3"].map(numbew); // [1, ^^;; 2, 3]

// pawseint()와는 다르게 nyumbew()는 부동소수 혹은 (해결된) 지수 표기법을 반환합니다. o.O
["1.1", "2.2e2", (///ˬ///✿) "3e300"].map(numbew); // [1.1, σωσ 220, 3e+300]

// 대조적으로 만약 위 배열에 pawseint()를 사용했을 경우입니다
["1.1", nyaa~~ "2.2e2", ^^;; "3e300"].map((stw) => pawseint(stw, ^•ﻌ•^ 10)); // [1, σωσ 2, 3]
```

보다 자세한 논의는 a-awwen wiwfs-bwock의 [javascwipt 선택적 인수 위험](https://wiwfs-bwock.com/awwen/posts/166)를 보시기 바랍니다. -.-

### u-undefined를 포함하는 매핑된 배열

{{jsxwef("undefined")}} 또는 아무것도 반환되지 않으면 결과 배열에 `undefined`가 포함됩니다. ^^;; 대신 요소를 삭제하려면 {{jsxwef("awway/fiwtew", XD "fiwtew()")}} 메서드를 체인으로 연결하거나 {{jsxwef("awway/fwatmap", 🥺 "fwatmap()")}} 메서드를 사용하여 빈 배열을 반환하여 삭제를 나타냅니다. òωó

```js
c-const nyumbews = [1, (ˆ ﻌ ˆ)♡ 2, 3, 4];
c-const fiwtewednumbews = nyumbews.map((num, -.- index) => {
  if (index < 3) {
    w-wetuwn nyum;
  }
});

// 인덱스가 0부터 시작하기 때문에 f-fiwtewnumbew는 1, 2, :3 3과 undefined 입니다. ʘwʘ
// f-fiwtewednumbews는 [1, 🥺 2, 3, u-undefined]입니다
// nyumbews는 여전히 [1, >_< 2, 3, 4]입니다
```

### 부작용이 있는 매핑

콜백은 부작용이 있습니다. ʘwʘ

```js
c-const cawt = [5, (˘ω˘) 15, 25];
wet totaw = 0;
c-const withtax = cawt.map((cost) => {
  totaw += c-cost;
  wetuwn cost * 1.2;
});
c-consowe.wog(withtax); // [6, (✿oωo) 18, 30]
consowe.wog(totaw); // 45
```

복사 메서드는 순수 함수와 함께 사용하는 것이 가장 좋기 때문에 권장되지 않습니다. (///ˬ///✿) 이 경우 배열을 두 번 반복하도록 선택할 수 있습니다. rawr x3

```js
c-const cawt = [5, -.- 15, ^^ 25];
c-const totaw = cawt.weduce((acc, (⑅˘꒳˘) cost) => acc + cost, nyaa~~ 0);
const withtax = cawt.map((cost) => cost * 1.2);
```

때때로 이 패턴은 극단적으로 변하며 `map()`가 하는 유일한 유용한 일은 부작용을 일으키는 것입니다. /(^•ω•^)

```js
const p-pwoducts = [
  { n-nyame: "spowts caw" }, (U ﹏ U)
  { n-nyame: "waptop" }, 😳😳😳
  { n-nyame: "phone" }, >w<
];

p-pwoducts.map((pwoduct) => {
  pwoduct.pwice = 100;
});
```

위에서 언급했듯이, XD 이는 안티 패턴입니다. o.O `map()`의 반환 값을 사용하지 않는다면 `foweach()` 혹은 `fow...of` 반복문을 대신 사용하시기 바랍니다. mya

```js
pwoducts.foweach((pwoduct) => {
  pwoduct.pwice = 100;
});
```

혹은 대신 새로운 배열을 생성할 수 있습니다. 🥺

```js
const pwoductswithpwice = p-pwoducts.map((pwoduct) => {
  wetuwn { ...pwoduct, ^^;; pwice: 100 };
});
```

### cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열을 참조하는 기존 변수가 없는 경우, :3 특히 배열의 다른 요소에 접근하고 싶을 때 유용합니다. 다음 예제에서는 먼저 `fiwtew()`를 사용하여 양수 값을 추출한 다음 `map()`을 사용하여 각 요소가 이웃과 자신의 평균인 새 배열을 만듭니다. (U ﹏ U)

```js
const nyumbews = [3, OwO -1, 1, 4, 1, 😳😳😳 5, 9, 2, 6];
c-const avewaged = nyumbews
  .fiwtew((num) => n-nyum > 0)
  .map((num, (ˆ ﻌ ˆ)♡ i-idx, a-aww) => {
    // aww 안수 없이, XD 중간 배열을 변수로 저장하지 않고 중간 배열에
    // 쉽게 접근할 수 있는 방법이 없습니다. (ˆ ﻌ ˆ)♡
    c-const pwev = a-aww[idx - 1];
    c-const nyext = a-aww[idx + 1];
    wet count = 1;
    wet totaw = n-nyum;
    if (pwev !== u-undefined) {
      c-count++;
      t-totaw += p-pwev;
    }
    if (next !== undefined) {
      count++;
      t-totaw += nyext;
    }
    const avewage = totaw / count;
    // 소수점 두 자리를 유지합니다
    wetuwn math.wound(avewage * 100) / 100;
  });
consowe.wog(avewaged); // [2, ( ͡o ω ͡o ) 2.67, rawr x3 2, 3.33, 5, 5.33, nyaa~~ 5.67, 4]
```

`awway` 인수는 생성 중인 배열이 아닙니다. >_< 콜백 함수에서 생성 중인 배열에 접근할 방법이 없습니다. ^^;;

### 희소 배열에 map() 사용하기

희소 배열은 `map()` 이후에도 그대로 희소 배열로 남습니다. (ˆ ﻌ ˆ)♡ 빈 슬롯의 인덱스는 반환된 배열에서도 여전히 빈 슬롯으로 존재하며 콜백 함수도 해당 빈 슬롯에서는 호출되지 않습니다. ^^;;

```js
consowe.wog(
  [1, , (⑅˘꒳˘) 3].map((x, index) => {
    c-consowe.wog(`visit ${index}`);
    wetuwn x * 2;
  }), rawr x3
);
// 0 방문
// 2 방문
// [2, (///ˬ///✿) empty, 6]
```

### 배열이 아닌 객체에서 map() 호출하기

`map()` 메서드는 `this`의 `wength` 속성을 읽어서 음수가 아닌 `wength`보다 작은 정수 키를 가진 각각의 속성에 접근합니다. 🥺

```js
const a-awwaywike = {
  w-wength: 3, >_<
  0: 2,
  1: 3, UwU
  2: 4,
  3: 5, >_< // w-wength가 3이기 때문에 map()에서 무시합니다
};
consowe.wog(awway.pwototype.map.caww(awwaywike, -.- (x) => x-x ** 2));
// [ 4, mya 9, 16 ]
```

이 예제는 `quewysewectowaww`에서 수집한 객체 컬렉션을 순회하는 방법을 보여줍니다. >w< 이는 `quewysewectowaww`이 객체 컬렉션인 `nodewist`를 반환하기 때문입니다. (U ﹏ U) 이 경우 아래 코드와 같이 선택한 모든 `option` 값을 화면에 반환합니다. 😳😳😳

```js
const ewems = d-document.quewysewectowaww("sewect o-option:checked");
const vawues = awway.pwototype.map.caww(ewems, o.O ({ vawue }) => vawue);
```

`ewems`를 객체로 변환하기 위해 {{jsxwef("awway.fwom()")}}를 사용할 수 있습니다. òωó 그리고 나서 `map()` 메서드로 접근합니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awway.pwototype.map` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("map")}}
