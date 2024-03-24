---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
---

{{JSRef}}

**`replace()`** 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 그 패턴은 문자열이나 정규식({{jsxref("RegExp")}})이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.

pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## 구문

```js
var newStr = str.replace(regexp|substr, newSubstr|function)
```

### 매개변수

- `regexp` (pattern)
  - : 정규식({{jsxref ( "RegExp")}}) 객체 또는 리터럴. 일치하는 항목은 `newSubStr` 또는 지정된 함수(`function`)가 반환 한 값으로 대체됩니다.
- `substr` (pattern)
  - : `newSubStr`로 대체 될 {{jsxref ( "String")}}. 정규식이 아닌 글자 그대로의 문자열로 처리됩니다. 오직 첫 번째 일치되는 문자열만이 교체됩니다.
- `newSubStr` (replacement)
  - : 첫번째 파라미터를 대신할 문자열({{jsxref("String")}}). 여러가지 대체 패턴들이 지원됩니다. 아래의 "[매개변수가 `string`으로 지정되었을 때](#Specifying_a_string_as_a_parameter)" 섹션을 참고하세요.
- `function` (replacement)
  - : 주어진 `regexp` 또는 `substr`에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수. 이 함수에 제공되는 인수는 아래 "[매개변수가 `function`으로 지정되었을 때](#Specifying_a_function_as_a_parameter)"단원에서 설명합니다.

### 반환값

어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열

## 설명

이 메서드는 호출된 {{jsxref("String")}} 객체를 바꾸지 않습니다. 단순히 새로운 문자열을 리턴합니다.

모든 문자열에 대해 검색하고 바꾸려면 정규표현식의 `g`플래그를 포함하세요.

### 매개변수가 `string`으로 지정되었을 때

`replacement` 문자열은 다음과 같은 특수 교체 패턴을 포함할 수 있습니다.

| Pattern  | Inserts                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `$$`     | "`$`" 기호를 삽입합니다.                                                                                                                                     |
| `$&`     | 매치된 문자열을 삽입합니다.                                                                                                                                  |
| `` $` `` | 매치된 문자열 앞쪽까지의 문자열을 삽입합니다.                                                                                                                |
| `$'`     | 매치된 문자열 이후의 문자열을 삽입합니다.                                                                                                                    |
| `$n`     | *`n`*이 1이상 99이하의 정수라면, 첫번째 매개변수로 넘겨진 {{jsxref("RegExp")}}객체에서 소괄호로 묶인 *`n`*번째의 부분 표현식으로 매치된 문자열을 삽입합니다. |

### 매개변수가 `function`으로 지정되었을 때

두번째 매개변수로 함수를 지정할 수 있습니다. 이 경우, 함수는 정규표현식 매치가 수행된 후 호출될 것입니다. 함수의 반환값은 교체될 문자열이 됩니다. (참고: 윗쪽에서 언급된 특수 교체 패턴은 반환값에 _적용되지 않습니다._) 만약 정규표현식의 플래그로 글로벌(`g`)이 오는 경우, 함수는 매치될 때마다 계속 호출될 것입니다.

함수의 매개변수들은 다음과 같습니다.

| Possible name | Supplied value                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`       | 매치된 문자열. (윗쪽의 `$&` 표현식으로 매치된 경우와 동일합니다.)                                                                                                      |
| `p1, p2, ...` | 윗쪽의 $n 표현식과 동일합니다. (`$1`은 `p1`, `$2`는 `p2`...) 예를 들어, 만약 정규표현식 `/(\a+)(\b+)/` 이 주어진다면`p1`은 `\a+`와 매치되고 `p2`는 `\b+`와 매치됩니다. |
| `offset`      | 조사된 전체 문자열 중에서 매치된 문자열의 `index.`(예를 들어, 조사될 전체 문자열이 `abcd`이고, 매치된 문자열이 `bc`면 이 매개변수의 값은 1이 됩니다.)                  |
| `string`      | 조사된 전체 문자열 (`replace`를 호출한 `string`)                                                                                                                       |

인수의 정확한 수는 첫 번째 인수가 {{jsxref ( "RegExp")}} 객체인지 아닌지에 따라 다르며, 소괄호로 묶이는 부분표현식의 갯수에 따라 달라집니다.

다음 예제는 `newString`을 `'abc - 12345 - #$*%'`로 교체합니다:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
var newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

## 예제

### `replace()`의 정규표현식 정의

다음 예제에서, 대소문자를 구분하지 않는 정규표현식을 `replace()`에 정의했습니다.

```js
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

'Twas the night before Christmas...'로 출력됩니다.

### `global`과 `ignore`를 사용한 `replace()`

Global replace는 정규식으로만 수행 할 수 있습니다. 다음 예제에서 정규 표현식은 replace()가 'apples'를 'oranges'로 바꿀 수 있도록 global 및 ignore case 플래그를 포함합니다.

```js
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

'오렌지는 둥글고 오렌지는 맛있습니다.' 가 출력됩니다.

### 문자열의 단어 치환

다음 스크립트는 문자열의 단어를 전환합니다. 대체 텍스트의 경우 스크립트는 `$1` 와 `$2` 대체 패턴을 사용합니다.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr); // Smith, John
```

'Smith, John.'이 출력됩니다.

### Using an inline function that modifies the matched characters

이 예제에서 문자열의 대문자가 모두 소문자로 변환되고 일치되는 위치 바로 앞에 하이픈이 삽입됩니다. 여기에서 중요한 점은 일치되는 항목이 대체 항목으로 다시 반환되기 전에 추가 작업이 필요하다는 것입니다.

바꾸기 기능은 일치하는 스니펫을 매개 변수로 받고 이를 사용하여 각 케이스별로 변환한후 반환하기 전에 하이픈을 연결합니다.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return "-" + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Given `styleHyphenFormat('borderTop')`, this returns 'border-top'.

Because we want to further transform the _result_ of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} method. If we had tried to do this using the match without a function, the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} would have no effect.

```js
var newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase()); // won't work
```

This is because `'$&'.toLowerCase()` would be evaluated first as a string literal (resulting in the same `'$&'`) before using the characters as a pattern.

### Replacing a Fahrenheit degree with its Celsius equivalent

The following example replaces a Fahrenheit degree with its equivalent Celsius degree. The Fahrenheit degree should be a number ending with F. The function returns the Celsius number ending with C. For example, if the input number is 212F, the function returns 100C. If the number is 0F, the function returns -17.77777777777778C.

The regular expression `test` checks for any number that ends with F. The number of Fahrenheit degree is accessible to the function through its second parameter, `p1`. The function sets the Celsius number based on the Fahrenheit degree passed in a string to the `f2c()` function. `f2c()` then returns the Celsius number. This function approximates Perl's `s///e` flag.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5) / 9 + "C";
  }
  var s = String(x);
  var test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Use an inline function with a regular expression to avoid `for` loops

The following example takes a string pattern and converts it into an array of objects.

**Input:**

A string made out of the characters `x`, `-` and `_`

```
x-x_
x---x---x---x---
x-xxx-xx-x-
x_x_x___x___x___
```

**Output:**

An array of objects. An `'x'` denotes an `'on'` state, a `'-'` (hyphen) denotes an `'off'` state and an `'_'` (underscore) denotes the length of an `'on'` state.

```json
[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]
```

**Snippet:**

```js
var str = "x-x_";
var retArr = [];
str.replace(/(x_*)|(-)/g, function (match, p1, p2) {
  if (p1) {
    retArr.push({ on: true, length: p1.length });
  }
  if (p2) {
    retArr.push({ on: false, length: 1 });
  }
});

console.log(retArr);
```

This snippet generates an array of 3 objects in the desired format without using a `for` loop.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
