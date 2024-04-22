---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
---

{{JSRef}}

**charAt()** 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

{{EmbedInteractiveExample("pages/js/string-charat.html")}}

## 구문

```js
str.charAt(index);
```

### 매개변수

- 0과 문자열의 길이 - 1 사이의 정수값.
- 인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환한다.

<dl><dt><code>index</code></dt></dl>

### 반환 값

- 지정된 인덱스에 해당하는 유니코드 단일문자를 반환한다.
- 만약 인덱스가 문자열 길이보다 큰 경우 빈 문자열 (예) " " 을 반환한다.

## 설명

문자열 내의 문자는 왼쪽에서 오른쪽으로 순번(인덱스)이 매겨집니다. 첫 번째 문자의 순번은 0, 그리고 `stringName` 이라는 이름을 가진 문자열의 마지막 문자 순번은 `stringName.length - 1` 입니다. `index`가 문자열 길이를 벗어나면 빈 문자열을 반환하게 됩니다.

`index`를 제공하지 않으면 기본값은 0입니다.

## 예제

### 문자열 내의 다른 위치에 있는 문자들을 출력하기

아래 예제는 문자열 `"Brave new world"`의 다른 위치에 있는 문자들을 출력합니다.

```js
var anyString = "Brave new world";
console.log("The character at index 0   is '" + anyString.charAt() + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0) + "'");
console.log("The character at index 1   is '" + anyString.charAt(1) + "'");
console.log("The character at index 2   is '" + anyString.charAt(2) + "'");
console.log("The character at index 3   is '" + anyString.charAt(3) + "'");
console.log("The character at index 4   is '" + anyString.charAt(4) + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
```

프로그램의 실행 결과는 아래와 같습니다.

```js
The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```

### 문자열 내의 모든 문자 얻기

아래 예제는 문자열 전체를 순회하며 각 문자가 완전한지 확인하는 프로그램입니다. 심지어 [기본 다국어 평면(Basic Multilingual Plane)](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_%ED%8F%89%EB%A9%B4)에 포함되지 않은 문자들이 포함되어 있다고 하더라도 잘 동작합니다.

```js
var str = "A \uD87E\uDC04 Z"; // 기본 다국어 평면에 포함되지 않는 문자를 사용합니다.
for (var i = 0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the
  // individual character

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ""; // Position not found
  }
  if (code < 0xd800 || code > 0xdfff) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 <= code && code <= 0xdbff) {
    if (str.length <= i + 1) {
      throw "High surrogate without following low surrogate";
    }
    var next = str.charCodeAt(i + 1);
    if (0xdc00 > next || next > 0xdfff) {
      throw "High surrogate without following low surrogate";
    }
    return str.charAt(i) + str.charAt(i + 1);
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw "Low surrogate without preceding high surrogate";
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 > prev || prev > 0xdbff) {
    throw "Low surrogate without preceding high surrogate";
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
```

[비구조화 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 허용하는 ECMAScript 2016 환경에서는 아래 예제 코드가 더 간결하고, 문자가 [서러게이트 페어](https://ko.wikipedia.org/wiki/UTF-16)가 되는 것을 허용할 때는 증가해야 하는 변수를 자동적으로 증가하기에 위의 코드보다 다소 더 유연합니다.

```js
var str = "A\uD87E\uDC04Z"; // We could also use a non-BMP character directly
for (var i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr);
}

function getWholeCharAndI(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ""; // Position not found
  }
  if (code < 0xd800 || code > 0xdfff) {
    return [str.charAt(i), i]; // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xd800 <= code && code <= 0xdbff) {
    if (str.length <= i + 1) {
      throw "High surrogate without following low surrogate";
    }
    var next = str.charCodeAt(i + 1);
    if (0xdc00 > next || next > 0xdfff) {
      throw "High surrogate without following low surrogate";
    }
    return [str.charAt(i) + str.charAt(i + 1), i + 1];
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw "Low surrogate without preceding high surrogate";
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xd800 > prev || prev > 0xdbff) {
    throw "Low surrogate without preceding high surrogate";
  }
  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1];
}
```

### 기본다국어평면(Basic-Multilingual-Plane)이 아닌 문자들을 지원하도록 `charAt()` 수정하기

어떠한 non-BMP 문자들이 나타났는지 호출자가 알 필요가 없기 때문에 non-BMP 문자들을 지원하도록 하는데는 앞의 예제들이 더 자주 사용되지만, 인덱스로 문자를 선택하는데 있어서 문자열 내에 서로게이트 페어들이 하나의 문자들로 처리되길 원한다면, 아래 예제 코드를 사용하면 됩니다.

```js
function fixedCharAt(str, idx) {
  var ret = "";
  str += "";
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while (surrogatePairs.exec(str) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return "";
  }

  ret += str.charAt(idx);

  if (
    /[\uD800-\uDBFF]/.test(ret) &&
    /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))
  ) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1);
  }
  return ret;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련문서

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
