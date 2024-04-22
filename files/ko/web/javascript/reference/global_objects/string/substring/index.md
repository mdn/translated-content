---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
---

{{JSRef}}

**`substring()`** 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## 사용방법

```js
str.substring(indexStart[, indexEnd])
```

### 인자값

- `indexStart`
  - : 반환문자열의 시작 인덱스
- `indexEnd`

  - : 옵션. 반환문자열의 마지막 인덱스 (포함하지 않음.)

### 반환값

기존문자열의 부분 문자열을 반환합니다.

## Description

`substring()` 메서드는 `indexStart` 부터 문자를 추출하지만 `indexEnd` 가 포함되지 않아도 괜찮습니다. 특징은 아래와 같습니다.

- 만약 `indexEnd` 가 생략된 경우, `substring()` 문자열의 끝까지 모든 문자를 추출합니다.
- 만약 `indexStart` 가 `indexEnd`와 같을 경우, `substring()` 빈 문자열을 반환합니다.
- 만약 `indexStart` 가 `indexEnd`보다 큰 경우, `substring()` 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. 아래 예제를 보세요.

0보다 작은 인자 값을 가지는 경우에는 0으로, `stringName.length` 보다 큰 인자 값을 가지는 경우, `stringName.length` 로 처리됩니다. {{jsxref("NaN")}} 값은 0으로 처리됩니다.

## Examples

### Using `substring()`

The following example uses `substring()` to display characters from the string `'Mozilla'`:

```js
var anyString = "Mozilla";

// Displays 'M'
console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

### Using `substring()` with `length` property

The following example uses the `substring()` method and {{jsxref("String.length", "length")}} property to extract the last characters of a particular string. This method may be easier to remember, given that you don't need to know the starting and ending indices as you would in the above examples.

```js
// Displays 'illa' the last 4 characters
var anyString = "Mozilla";
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
var anyString = "Mozilla";
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

### The difference between `substring()` and `substr()`

There's a subtle difference between the `substring()` and {{jsxref("String.substr", "substr()")}} methods, so you should be careful not to get them confused.

The arguments of `substring()` represent the starting and ending indexes, while the arguments of `substr()` represent the starting index and the number of characters to include in the returned string.

```js
var text = "Mozilla";
console.log(text.substring(2, 5)); // => "zil"
console.log(text.substr(2, 3)); // => "zil"
```

### Differences between `substring()` and `slice()`

The `substring()` and {{jsxref("String.slice", "slice()")}} methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The `substring()` method swaps its two arguments if `indexStart` is greater than `indexEnd`, meaning that a string is still returned. The {{jsxref("String.slice", "slice()")}} method returns an empty string if this is the case.

```js
var text = "Mozilla";
console.log(text.substring(5, 2)); // => "zil"
console.log(text.slice(5, 2)); // => ""
```

If either or both of the arguments are negative or `NaN`, the `substring()` method treats them as if they were `0`.

```js
console.log(text.substring(-5, 2)); // => "Mo"
console.log(text.substring(-5, -2)); // => ""
```

`slice()` also treats `NaN` arguments as `0`, but when it is given negative values it counts backwards from the end of the string to find the indexes.

```js
console.log(text.slice(-5, 2)); // => ""
console.log(text.slice(-5, -2)); // => "zil"
```

See the {{jsxref("String.slice", "slice()")}} page for more examples with negative numbers.

### Replacing a substring within a string

The following example replaces a substring within a string. It will replace both individual characters and substrings. The function call at the end of the example changes the string `Brave New World` to `Brave New Web`.

```js
// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (var i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

Note that this can result in an infinite loop if `oldS` is itself a substring of `newS` — for example, if you attempted to replace 'World' with 'OtherWorld' here. A better method for replacing strings is as follows:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

The code above serves as an example for substring operations. If you need to replace substrings, most of the time you will want to use {{jsxref("String.prototype.replace()")}}.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
- {{jsxref("String.prototype.slice()")}}
