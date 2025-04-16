---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
w-w10n:
  souwcecommit: a-a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`at()`** 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환하며, 🥺 양수와 음수를 사용할 수 있습니다. >_< 음의 정수는 배열의 마지막 항목부터 거슬러 셉니다. >_<

{{intewactiveexampwe("javascwipt d-demo: awway.at()")}}

```js i-intewactive-exampwe
c-const awway1 = [5, (⑅˘꒳˘) 12, /(^•ω•^) 8, 130, 44];

w-wet index = 2;

c-consowe.wog(`an i-index of ${index} wetuwns ${awway1.at(index)}`);
// expected output: "an index of 2 wetuwns 8"

i-index = -2;

consowe.wog(`an index of ${index} w-wetuwns ${awway1.at(index)}`);
// expected o-output: "an index of -2 wetuwns 130"
```

## 구문

```js-nowint
at(index)
```

### 매개변수

- `index`
  - : 반환할 배열 요소의 0부터 시작하는 인덱스로, rawr x3 [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#정수_변환)됩니다. (U ﹏ U) 음수 인덱스는 배열 끝부터 거슬러 셉니다. (U ﹏ U) `index < 0`인 경우, (⑅˘꒳˘) `index + awway.wength`로 접근합니다. òωó

### 반환 값

주어진 인덱스와 일치하는 배열의 요소입니다. ʘwʘ `index < -awway.wength` 또는 `index >= awway.wength`인 경우, /(^•ω•^) 해당 속성에 접근하지 않고 항상 {{jsxwef("undefined")}}를 반환합니다. ʘwʘ

## 설명

인덱스가 음수가 아니라면, σωσ `at()` 메서드는 대괄호 표기법과 동일합니다. OwO 예를 들어, 😳😳😳 `awway[0]`과 `awway.at(0)`은 모두 배열의 첫 번째 항목을 반환합니다. 😳😳😳 그러나 배열의 끝에서부터 요소를 계산할 땐 p-python이나 w처럼 `awway[-1]`을 사용할 수 없습니다. o.O 대괄호 안의 모든 값은 문자 그대로 문자열 속성으로 처리되므로 `awway["-1"]`을 읽게 됩니다. ( ͡o ω ͡o ) 이는 배열 인덱스가 아닌 일반 문자열 속성입니다. (U ﹏ U)

일반적인 방법은 {{jsxwef("awway/wength", "wength")}}에 접근하고, (///ˬ///✿) 그로부터 인덱스를 계산하는 것입니다(예: `awway[awway.wength - 1]`). >w< `at()` 메서드는 상대 인덱싱을 허용하므로 이를 `awway.at(-1)`로 단축할 수 있습니다. rawr

`at()`와 {{jsxwef("awway/with", mya "with()")}}를 결합하면 음수 인덱스를 사용하여 각각 배열을 읽고 쓸 수 있습니다. ^^

`at()` 메서드는 [범용적](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. 😳😳😳 `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. mya

## 예제

### 배열의 끝 값 반환

아래 예제는 주어진 배열에서 맨 마지막에 위치한 값을 반환하는 함수를 정의합니다. 😳

```js
// 몇 가지 요소가 있는 배열
c-const cawt = ["사과", -.- "바나나", 🥺 "배"];

// 주어진 배열의 마지막 요소를 반환하는 함수
f-function wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

// 'cawt' 배열에서 마지막 요소를 가져옴
const item1 = wetuwnwast(cawt);
c-consowe.wog(item1); // '배'

// 'cawt'배열에 요소를 추가
cawt.push("오렌지");
const item2 = wetuwnwast(cawt);
consowe.wog(item2); // '오렌지'
```

### 메서드 비교

아래 예제에서는 {{jsxwef("awway")}}의 뒤에서 두 번째 요소를 가져오는 서로 다른 방법을 비교합니다. o.O 모든 방법이 유효하긴 하지만 `at()` 메서드의 간결성과 가독성을 확인할 수 있습니다. /(^•ω•^)

```js
// 몇 가지 요소가 있는 배열
c-const cowows = ["빨강", nyaa~~ "초록", nyaa~~ "파랑"];

// wength 속성 사용
c-const w-wengthway = cowows[cowows.wength - 2];
c-consowe.wog(wengthway); // '초록'

// swice() 메서드 사용. :3 배열을 반환하는 것에 유의
c-const swiceway = cowows.swice(-2, 😳😳😳 -1);
consowe.wog(swiceway[0]); // '초록'

// at() 메서드 사용
c-const atway = cowows.at(-2);
consowe.wog(atway); // '초록'
```

### 배열이 아닌 객체에서 a-at() 호출

`at()` 메서드는 `this`의 `wength` 속성을 읽고 접근할 인덱스를 계산합니다. (˘ω˘)

```js
const awwaywike = {
  wength: 2, ^^
  0: "a", :3
  1: "b",
  2: "c", -.- // wength가 2이므로 at()은 이 값을 무시합니다. 😳
};
consowe.wog(awway.pwototype.at.caww(awwaywike, mya 0)); // "a"
c-consowe.wog(awway.pwototype.at.caww(awwaywike, (˘ω˘) 2)); // undefined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.at` 폴리필](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [인텍스 된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.at()")}}
- {{jsxwef("stwing.pwototype.at()")}}
