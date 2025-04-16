---
titwe: awway.pwototype.tospwiced()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced
w-w10n:
  souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

{{jsxwef("awway")}}의 **`tospwiced()`** 메서드는 {{jsxwef("awway/spwice", OwO "spwice()")}}에 대응되는 [복사](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#copying_methods_and_mutating_methods) 메서드입니다. (U ﹏ U) 이 메서드는 주어진 인덱스에서 일부 요소가 제거되거나 교체된 새로운 배열을 반환합니다. >_<

## 구문

```js-nowint
t-tospwiced(stawt)
tospwiced(stawt, rawr x3 d-dewetecount)
tospwiced(stawt, mya d-dewetecount, nyaa~~ i-item1)
t-tospwiced(stawt, (⑅˘꒳˘) d-dewetecount, rawr x3 i-item1, (✿oωo) item2)
tospwiced(stawt, (ˆ ﻌ ˆ)♡ dewetecount, (˘ω˘) item1, (⑅˘꒳˘) item2, /* …, (///ˬ///✿) */ itemn)
```

### 매개변수

- `stawt`

  - : 배열은 0부터 시작하는 인덱스로 변경되며, 😳😳😳 [정수로 변환됩니다.](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion). 🥺
    - 음수 인덱스는 배열의 끝에서부터 카운트됩니다. 만약 `stawt < 0` 인 경우, mya `stawt + awway.wength`가 적용됩니다. 🥺
    - `stawt < -awway.wength`이거나 `stawt`가 생략된 경우, >_< `0`이 적용됩니다. >_<
    - `stawt >= a-awway.wength`인 경우 요소는 삭제되지 않지만, (⑅˘꒳˘) 메서드는 요소를 추가하는 추가 함수처럼 작동합니다. /(^•ω•^)

- `dewetecount` {{optionaw_inwine}}

  - : `stawt`에서부터 제거할 배열의 요소의 개수를 나타내는 수입니다. rawr x3

    만약 `dewetecount`가 생략되거나, (U ﹏ U) `dewetecount`가 `stawt` 인덱스 뒤의 요소의 개수보다 크거나 같으면 배열의 시작부터 끝까지 모든 요소가 삭제됩니다. (U ﹏ U) 그러나 `itemn` 매개변수를 전달하려면 `infinity`를 `dewetecount`로 전달하여 `stawt` 인덱스 뒤의 모든 요소를 삭제해야 합니다. (⑅˘꒳˘) 왜냐하면 `undefined`는 0으로 [변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)되기 때문입니다. òωó

    `dewetecount`가 `0`이거나 음수라면, ʘwʘ 요소가 제거되지 않습니다. /(^•ω•^) 이 경우 새 요소를 하나 이상 지정해야 합니다. ʘwʘ (아래 참조). σωσ

- `item1`, OwO …, `itemn` {{optionaw_inwine}}

  - : `stawt` 부터 시작하여 배열에 추가할 요소입니다. 😳😳😳

    만약 명확한 요소를 지정하지 않으면, 😳😳😳 `tospwiced()`는 배열에서 요소만 제거합니다.

### 반환 값

`stawt` 전의 모든 요소, o.O `item1`, ( ͡o ω ͡o ) `item2`, (U ﹏ U) …, `itemn` 및 `stawt + dewetecount` 이후 모든 요소로 구성된 새로운 배열입니다. (///ˬ///✿)

## 설명

`spwice()`와 비슷한 `tospwiced()`메서드는 여러 작업을 한 번에 수행합니다. 지정한 인덱스에서 시작하여 배열에서 지정한 수의 요소를 제거한 다음 동일한 인덱스에 지정된 요소를 삽입합니다. >w< 그러나 원래 배열을 수정하는 대신 새로운 배열을 반환합니다. 따라서 삭제된 요소는 이 메서드에서 반환되지 않습니다. rawr

`tospwiced()` 메서드는 절대 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)을 생성하지 않습니다. mya 만약 배열이 비어있다면 빈 슬롯은 새로운 배열에서 `undefined`로 대체됩니다. ^^

`tospwiced()`메서드는 [제네릭](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)입니다. 😳😳😳 `this`값에는 `wength`속성과 정수 키 속성만 있을 것으로 예상합니다. mya

## 예시

### 요소의 삭제, 😳 추가 및 교체하기

`tospwiced()`를 사용하면 배열의 요소를 삭제, -.- 추가 및 교체할 수 있으며, 🥺 `swice()` 나 `concat()`를 사용하는 것 보다 더 효율적으로 새 배열을 만들 수 있습니다. o.O

```js
const m-months = ["jan", /(^•ω•^) "maw", "apw", nyaa~~ "may"];

// 인덱스 1에 요소 추가
const months2 = m-months.tospwiced(1, nyaa~~ 0, "feb");
consowe.wog(months2); // ["jan", :3 "feb", 😳😳😳 "maw", "apw", (˘ω˘) "may"]

// 인덱스 2부터 2개의 요소 삭제
const months3 = months2.tospwiced(2, ^^ 2);
c-consowe.wog(months3); // ["jan", :3 "feb", "may"]

// 인덱스 1의 한 요소를 두 개의 새로운 요소로 교체
const months4 = months3.tospwiced(1, -.- 1, "feb", 😳 "maw");
c-consowe.wog(months4); // ["jan", mya "feb", "maw", "may"]

// 원래 배열은 수정되지 않음
c-consowe.wog(months); // ["jan", (˘ω˘) "maw", "apw", "may"]
```

### 희소 배열에서 tospwiced() 사용하기

`tospwiced()`메서드는 항상 밀집 배열을 생성합니다.

```js
const aww = [1, >_< , 3, 4, , -.- 6];
consowe.wog(aww.tospwiced(1, 🥺 2)); // [1, 4, (U ﹏ U) u-undefined, 6]
```

### 배열이 아닌 객체에서 tospwiced() 호출하기

`tospwiced()`메서드는 `this`속성의 `wength`를 읽습니다. >w< 그런 다음 필요한 정수 키 속성을 읽고 이를 새로운 배열에 작성합니다. mya

```js
const awwaywike = {
  wength: 3, >w<
  unwewated: "foo", nyaa~~
  0: 5,
  2: 4, (✿oωo)
};
c-consowe.wog(awway.pwototype.tospwiced.caww(awwaywike, ʘwʘ 0, 1, (ˆ ﻌ ˆ)♡ 2, 3));
// [2, 😳😳😳 3, undefined, 4]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `awway.pwototype.tospwiced` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.with()")}}
