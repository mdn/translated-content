---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{JSRef}}

**`test()`** 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 `true` 또는 `false`로 반환합니다.

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## 구문

```js
regexObj.test(str);
```

### 매개변수

- `str`
  - : 정규 표현식 일치를 수행할 문자열.

### 반환 값

주어진 문자열 `str` 중 정규 표현식이 일치하는 부분이 있으면 `true`, 아니면, `false`.

## 설명

패턴이 문자열 내에 존재하는지에 대한 여부를 알아보고자 할 때 `test()`를 사용하세요. 일치의 위치 인덱스, 또는 일치하지 않으면 `-1`을 반환하는 {{jsxref("String.prototype.search()")}}와 달리 `test()`는 불리언을 반환합니다.

더 느리지만 더 많은 정보가 필요하면 {{jsxref("RegExp.prototype.exec()", "exec()")}} 메서드를 사용하세요. ({{jsxref("String.prototype.match()")}} 메서드와 비슷합니다.)

`exec()`처럼, `test()`도 전역 탐색 플래그를 제공한 정규 표현식에서 여러 번 호출하면 이전 일치 이후부터 탐색합니다. `exec()`와 `test()`를 혼용해 사용하는 경우에도 해당됩니다.

## 예제

### `test()` 사용하기

문자열의 맨 처음에 `"hello"`가 포함됐는지 알아보는 간단한 예제 코드입니다.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

다음은 일치 여부에 따라 다른 메시지를 기록하는 예제입니다.

```js
function testInput(re, str) {
  let midstring;
  if (re.test(str)) {
    midstring = "contains";
  } else {
    midstring = "does not contain";
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### 전역 플래그와 `test()`

정규 표현식에 [전역 플래그](/ko/docs/Web/JavaScript/Guide/Regular_Expressions#플래그를_사용한_고급검색)를 설정한 경우, `test()` 메서드는 정규 표현식의 {{jsxref("RegExp.lastIndex", "lastIndex")}}를 업데이트합니다. ({{jsxref("RegExp.prototype.exec()")}}도 `lastIndex` 속성을 업데이트합니다.)

`test(str)`을 또 호출하면 `str` 검색을 `lastIndex`부터 계속 진행합니다. `lastIndex` 속성은 매 번 `test()`가 `true`를 반환할 때마다 증가하게 됩니다.

> **참고:** `test()`가 `true`를 반환하기만 하면 `lastIndex`는 초기화되지 않습니다. 심지어 이전과 다른 문자열을 매개변수로 제공해도 그렇습니다!

`test()`가 `false`를 반환할 땐 `lastIndex` 속성이 `0`으로 초기화됩니다.

이 행동에 대한 예제가 다음 코드입니다.

```js
const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test("foo"); // true

// regex.lastIndex is now at 3
regex.test("foo"); // false

// regex.lastIndex is at 0
regex.test("barfoo"); // true

// regex.lastIndex is at 6
regex.test("foobar"); //false

// regex.lastIndex is at 0
// (...and so on)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 정규 표현식 장](/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype")}}
