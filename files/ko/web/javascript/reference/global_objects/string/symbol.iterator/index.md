---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("String")}}의 **`[@@iterator]()`** 메서드는 [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 구현하여 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 및 {{jsxref("Statements/for...of", "for...of")}} 루프와 같이 반복자를 기대하는 대부분의 구문에서 문자열을 사용할 수 있게 합니다. 문자열 값의 유니코드 코드 포인트를 개별 문자열로 산출하는 [문자열 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator)를 반환합니다.

{{InteractiveExample}}

```js interactive-example
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}

```

## 구문

```js-nolint
string[Symbol.iterator]()
```

### 매개변수

없음.

### 반환 값

문자열 값의 유니코드 코드 포인트를 개별 문자열로 산출하는 새로운 [문자열 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 설명

문자열은 유니코드 코드 포인트로 순회됩니다. 즉, 그래프 클러스터는 분할되지만 서로게이트는 유지됩니다.

```js
// "집게손가락으로 오른쪽을 가리키는 손등: 어두운 피부 톤"은
[..."👉🏿"]; // ['👉', '🏿']
// "집게손가락으로 오른쪽을 가리키는 손등" 이모지와 "어두운 피부 톤" 이모지로 분리할 수 있습니다.

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// "Man"과 "Boy" 이모지로 나눠지고 ZWJ로 합쳐집니다.
```

## 예제

### for...of 반복를 사용한 순회

이 메서드를 직접 호출할 필요는 거의 없습니다. `@@iterator` 메서드가 존재하기 때문에 문자열 [iterable](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_proocol)과 `for...of` 같은 반복 구문은 자동으로 이 메서드를 호출하여 반복할 반복자를 얻습니다.

```js
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### 반복자 수동으로 돌리기

반환된 반복자 객체의 `next()` 메서드를 수동으로 호출하여 반복 프로세스를 최대한 제어할 수 있습니다.

```js
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `String.prototype[@@iterator]`의 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Text formatting](/ko/docs/Web/JavaScript/Guide/Text_formatting) 가이드
- {{jsxref("Symbol.iterator")}}
- [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
