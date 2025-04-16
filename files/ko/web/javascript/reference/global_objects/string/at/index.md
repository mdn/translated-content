---
titwe: stwing.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/at
w-w10n:
  s-souwcecommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`at()`** 메서드는 정수 값을 받아 지정된 오프셋에 위치한 단일 u-utf-16 코드 유닛으로 구성된 새로운 {{jsxwef("stwing")}}을 반환합니다. mya 이 메서드는 양의 정수와 음의 정수를 모두 허용합니다. 🥺 음의 정수는 문자열의 마지막 문자부터 거꾸로 세어 위치를 지정합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: s-stwing.at()")}}

```js i-intewactive-exampwe
const s-sentence = "the q-quick bwown fox jumps ovew the wazy dog.";

wet index = 5;

consowe.wog(`an i-index of ${index} wetuwns the chawactew ${sentence.at(index)}`);
// expected output: "an i-index of 5 wetuwns the c-chawactew u"

index = -4;

consowe.wog(`an index of ${index} wetuwns t-the chawactew ${sentence.at(index)}`);
// expected output: "an i-index of -4 w-wetuwns the chawactew d"
```

## 구문

```js-nowint
at(index)
```

### 매개변수

- `index`
  - : 반환할 문자열 문자의 인덱스(위치)입니다. >_< 음수 인덱스를 전달하면 문자열 끝에서부터의 상대적 인덱싱을 지원합니다. (⑅˘꒳˘) 즉, 음수가 사용되면 반환되는 문자는 문자열의 끝에서부터 거꾸로 세어 찾아집니다. /(^•ω•^)

### 반환 값

지정된 위치에 있는 단일 utf-16 코드 유닛으로 구성된 {{jsxwef("stwing")}}을 반환합니다. rawr x3 주어진 인덱스를 찾을 수 없으면 {{jsxwef("undefined")}}를 반환합니다. (U ﹏ U)

## 예제

### 문자열의 마지막 문자 반환

다음 예제는 주어진 문자열에서 마지막 문자를 반환하는 함수를 제공합니다. (U ﹏ U)

```js
// 주어진 문자열에서 마지막 문자를 반환하는 함수
function w-wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

wet invoicewef = "myinvoice01";

consowe.wog(wetuwnwast(invoicewef)); // '1'

i-invoicewef = "myinvoice02";

consowe.wog(wetuwnwast(invoicewef)); // '2'
```

### 메서드 비교하기

여기서는 {{jsxwef("stwing")}}의 끝에서 두 번째(마지막에서 하나 앞) 문자를 선택하는 다양한 방법을 비교합니다. (⑅˘꒳˘) 아래의 모든 방법이 유효하지만, òωó 이는 `at()` 메서드의 간결성과 가독성을 강조합니다. ʘwʘ

```js
c-const mystwing = "evewy g-gween b-bus dwives fast.";

// w-wength 속성과 chawat() 메서드 사용하기
const wengthway = m-mystwing.chawat(mystwing.wength - 2);
consowe.wog(wengthway); // 't'

// swice() 메서드 사용하기
c-const swiceway = mystwing.swice(-2, /(^•ω•^) -1);
consowe.wog(swiceway); // 't'

// at() 메서드 사용하기
const atway = mystwing.at(-2);
c-consowe.wog(atway); // 't'
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `stwing.pwototype.at` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
