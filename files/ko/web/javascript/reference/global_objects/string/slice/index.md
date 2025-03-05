---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
l10n:
  sourceCommit: 5f08178b7c2c97b15dd5d6483580fd70abd5169a
---

{{JSRef}}

{{jsxref("String")}} 값의 **`slice()`** 메서드는 이 문자열의 일부를 추출하여 이를 새로운 문자열로 반환합니다. 원본 문자열은 수정하지 않습니다.

{{InteractiveExample("JavaScript Demo: String.slice()", "taller")}}

```js interactive-example
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
```

## 문법

```js-nolint
slice(indexStart)
slice(indexStart, indexEnd)
```

### 매개변수

- `indexStart`
  - : 반환될 부분 문자열에 포함될 첫 번째 문자의 인덱스.
- `indexEnd` {{optional_inline}}
  - : 반환될 부분 문자열에서 제외될 첫 번째 문자열의 인덱스.

### 반환 값

문자열의 추출된 부분을 담는 새로운 문자열이 반환됩니다.

## 설명

`slice()`는 하나의 문자열로부터 텍스트를 추출하고 새 문자열을 반환합니다.

`slice()`는 `indexEnd`를 포함하지 않고 추출합니다. 예를 들어 `str.slice(4, 8)`는 다섯 번째 문자부터 여덟 번째 문자까지 추출합니다(인덱스 `4`, `5`, `6`, `7`에 해당하는 문자).

```plain
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result
```

- `indexStart >= str.length`이라면, 빈 문자열이 반환됩니다.
- `indexStart < 0`이라면, 문자열의 끝부터 인덱스를 셉니다. 보다 공식적으로 말하자면 이 경우, 하위 문자열은 `max(indexStart + str.length, 0)`에서 시작합니다.
- `indexStart`가 생략되었거나 정의되지 않았거나 [숫자로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)할 수 없는 경우, `0`으로 처리됩니다.
- `indexEnd`가 생략되었거나 혹은 정의되지 않았거나 혹은 `indexEnd >= str.length`이면 `slice()`는 문자열 끝으로 추출합니다.
- `indexEnd < 0`이면 문자열의 끝부터 인덱스를 셉니다. 보다 공식적으로 말하자면 이 경우, 하위 문자열은 `max(indexEnd + str.length, 0)`에서 끝납니다.
- 음수 값을 정규화한 후 (즉, `indexEnd`가 `indexStart` 앞에 있는 문자를 나타내는 경우) `indexEnd <= indexStart`인 경우 빈 문자열이 반환됩니다.

## 예제

### `slice()`를 사용하여 새 문자열 생성하기

아래 예제는 새 문자열을 생성하기 위해 `slice()`를 사용합니다.

```js
const str1 = "The morning is upon us."; // str1의 길이는 23입니다.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

### 음수 인덱스로 `slice()` 사용하기

아래 예시는 `slice()`에 음수 인덱스를 사용합니다.

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

아래의 예시는 시작 인덱스를 찾기 위해 문자열의 끝에서부터 역방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 문자열의 시작에서부터 정방향으로 `16`개를 셉니다.

```js
console.log(str.slice(-11, 16)); // "is u"
```

아래에서는 시작 인덱스를 찾기 위해 문자열의 처음부터 정방향으로 `11`개를 세고 끝 인덱스를 찾기 위해 끝에서부터 `7`개를 셉니다.

```js
console.log(str.slice(11, -7)); // " is u"
```

이 인수는 끝에서부터 5로 역순으로 계산하여 시작 인덱스를 찾은 다음 끝에서부터 1을 거쳐 끝 인덱스를 찾습니다.

```js
console.log(str.slice(-5, -1)); // "n us"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
