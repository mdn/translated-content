---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

**`String`** 전역 객체는 문자열(문자의 나열)의 생성자입니다.

## 구문

문자열 리터럴은 다음과 같은 형식을 사용합니다.

```
'string text'
"string text"
"中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית"
```

문자열은 `String` 전역 객체를 직접 사용하여 생성할 수 있습니다.

```js
String(thing);
```

### 매개변수

<dl><dt><code>thing</code></dt><dd>문자열로 변환할 아무 값.</dd><dt><h3 id="템플릿_리터럴">템플릿 리터럴</h3></dt></dl>

ECMAScript 2015 이후, 문자열 리터럴은 소위 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals)이 될 수 있습니다.

<pre class="language-html"><code class="language-html">`hello world` `hello! world!` `hello ${who}` tag `&#x3C;a>${who}&#x3C;/a>`</code></pre>

### 이스케이프 표현

일반적인 출력 문자 외의 특수 문자는 이스케이프 표현을 사용해 적을 수 있습니다.

| 코드                     | 출력                                        |
| ------------------------ | ------------------------------------------- |
| `\XXX`                   | 8진수 Latin-1 문자                          |
| `\'`                     | 작은따옴표                                  |
| `\"`                     | 큰따옴표                                    |
| `\\`                     | 역슬래시                                    |
| `\n`                     | 개행                                        |
| `\r`                     | 캐리지 리턴                                 |
| `\v`                     | 세로 탭                                     |
| `\t`                     | 탭                                          |
| `\b`                     | 백 스페이스                                 |
| `\f`                     | 폼 피드                                     |
| `\uXXXX`                 | 유니코드 코드포인트                         |
| `\u{X}` ... `\u{XXXXXX}` | 유니코드 코드포인트 {{experimental_inline}} |
| `\xXX`                   | Latin-1 문자                                |

> **참고:** 일부 다른 프로그래밍 언어와 달리, JavaScript는 작은따옴표와 큰따옴표 문자열을 구분하지 않습니다. 따라서 위의 이스케이프 문자는 작은따옴표나 큰따옴표에서 상관 없이 작동합니다.

### 긴 문자열 리터럴

작성한 코드가 매우 긴 문자열을 포함해야 하는 경우, 끝 없이 뻗어나가는 한 줄이나 편집기의 재량에 따라 자동으로 줄을 넘기는 대신 직접 여러 줄로 나누되 내용에는 영향을 주지 않고 싶을 때가 있을겁니다. 이런 상황에는 두 가지 방법을 사용할 수 있습니다.

우선 다음과 같이 [+](</ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#%EB%8D%94%ED%95%98%EA%B8%B0_()>) 연산자를 사용할 수 있습니다.

```js
let longString =
  "여러 줄에 걸쳐 작성해야 할 정도로 " +
  "긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 " +
  "코드를 읽기 힘들어지니까요.";
```

아니면 역슬래시 문자("\\")를 각 줄의 맨 끝에 붙여 문자열이 이어진다는걸 표시할 수도 있습니다. 역슬래시 다음에 공백을 포함한 어떤 문자라도 붙으면 제대로 작동하지 않으므로 주의해야 합니다.

```js
let longString =
  "여러 줄에 걸쳐 작성해야 할 정도로 \
긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 \
코드를 읽기 힘들어지니까요.";
```

두 예시 모두 동일한 문자열을 생성합니다.

## 설명

문자열은 텍스트 형태로 표현될 수있는 데이터를 보관하는 데 유용합니다. 문자열에서 가장 많이 사용되는 작업들은 문자열의 길이를 확인하는 ({{jsxref("String.length", "length")}}), 문자열을 생성하고 연결하는 [+ 와 += 문자열 연산자](/ko/docs/Web/JavaScript/Reference/Operators/String_Operators), 서브문자열(substring)이 있는지 확인하고, 있으면 위치를 확인하는 {{jsxref("String.prototype.indexOf()", "indexOf()")}} 메서드, 서브문자열(substring)을 추출해내는 {{jsxref("String.prototype.substring()", "substring()")}} 메서드가 있습니다.

### 문자 접근

문자열에서 개개의 문자에 접근할 수 있는 방법은 두가지가 있습니다. 첫번째는 {{jsxref("String.prototype.charAt()", "charAt()")}} 메서드를 이용하는 것입니다:

```js
return "cat".charAt(1); // returns "a"
```

다른 방법(ECMAScript 5에서 소개하고 있는)은 문자열을 배열과 같은 오브젝트로 취급하여, 문자에 해당하는 숫자 인덱스를 사용하는 방법입니다 :

```js
return "cat"[1]; // returns "a"
```

브라켓(\[ ]) 표기법을 사용하여 문자에 접근하는 경우 , 이러한 프로퍼티들에 새로운 값을 할당하거나 삭제할 수는 없습니다. 포함되어 있는 프로퍼티들은 작성할 수도, 수정할 수도 없습니다. (더 자세한 정보는 {{jsxref("Object.defineProperty()")}}를 참고 바랍니다 .)

### 문자열 비교

C 개발자는 문자열 비교를 위하여 `strcmp()` 함수를 사용합니다. JavaScript에서는 단지 [less-than와 greater-than 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)만을 사용하여 문자열을 비교할 수 있습니다:

```js
var a = "a";
var b = "b";
if (a < b) {
  // true
  console.log(a + " is less than " + b);
} else if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(a + " and " + b + " are equal.");
}
```

비슷한 결과를 얻을 수 있는 방법으로 String 인스턴스에서 상속된 {{jsxref("String.prototype.localeCompare()", "localeCompare()")}} 메서드를 사용할 수 있습니다.

### 문자열 원형과 `String` 객체의 차이

JavaScript는 `String` 오브젝트와 원형의 문자열을 다르게 취급한다는 것에 주의해야 합니다. ({{jsxref("Boolean")}}과 [숫자](/ko/docs/Web/JavaScript/Reference/Global_Objects)의 true도 마찬가지입니다.)

문자열 리터럴(작은 따옴표 또는 큰 따옴표로 생성되는)과 생성자 없이(즉. {{jsxref("Operators/new", "new")}} 키워드를 사용하지 않고) `String`을 호출하여 반환된 문자열은 원형 문자열(primitive strings)입니다. JavaScript는 자동적으로 원형을 `String` 오브젝트로 변환하기 때문에, `String` 오브젝트 메서드를 사용하여 원형문자열을 생성할 수 있습니다. 문맥 안의 메서드에서 프로퍼티 조회 또는 원형의 문자열 호출이 발생하면, JavaScript는 자동으로 문자열 원형을 감싸고 프로퍼티 조회를 수행 하거나 메서드를 호출합니다.

```js
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj); // Logs "object"
```

문자열 원형과 `String` 오브젝트는 {{jsxref("Global_Objects/eval", "eval()")}}을 사용할 때 다른 결과를 제공합니다. `eval`에 전달되는 문자열 원형들은 소스 코드 취급을 받습니다; `String` 오브젝트들은 다른 모든 오브젝트들과 마찬가지로 취급하며, 오브젝트를 반환합니다. 예를 들면:

```js
var s1 = "2 + 2"; // creates a string primitive
var s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

이러한 이유로, 비록 코드 상에서 원형 문자열을 사용하는 대신에 `String` 오브젝트를 사용하게 되면 코드가 손상될 수 있지만, 일반적인 개발자는 차이를 걱정할 필요는 없습니다.

`String` 오브젝트는 언제든지 {{jsxref("String.prototype.valueOf()", "valueOf()")}} 메서드로 원형에 대응하도록 전환할 수 있습니다.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

## 생성자

- {{jsxref("String/String", "String()")}}
  - : Creates a new `String` object. It performs type conversion when called as
    a function, rather than as a constructor, which is usually more useful.

## 정적 메서드

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[,
    <var>numN</var>]])")}}
  - : 지정된 유니코드 값의 순서를 이용하여 만든 문자열을 반환합니다.
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[,
    <var>numN</var>)")}}
  - : 지정된 코드 포인트 순서를 이용하여 만든 문자열을 반환합니다.
- {{jsxref("String.raw()")}}
  - : 원형 템플릿 문자열(raw template string)에서 생성된 문자열을 반환합니다.

## 인스턴스 속성

- {{jsxref("String.prototype.length")}}
  - : Reflects the `length` of the string. Read-only.

## 인스턴스 메서드

- {{jsxref("String.prototype.at()", "String.prototype.at(<var>index</var>)")}}{{Experimental_Inline}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified `index`. Accepts negative integers, which count back from the last string character.
- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified
    `index`.
- {{jsxref("String.prototype.charCodeAt()",
    "String.prototype.charCodeAt(<var>index</var>)")}}
  - : Returns a number that is the UTF-16 code unit value at the given
    `index`.
- {{jsxref("String.prototype.codePointAt()",
    "String.prototype.codePointAt(<var>pos</var>)")}}
  - : Returns a nonnegative integer Number that is the code point value of the UTF-16
    encoded code point starting at the specified `pos`.
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[,
    ...<var>strN </var>])")}}
  - : Combines the text of two (or more) strings and returns a new string.
- {{jsxref("String.prototype.includes()",
    "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}
  - : Determines whether the calling string contains `searchString`.
- {{jsxref("String.prototype.endsWith()",
    "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Determines whether a string ends with the characters of the string
    `searchString`.
- {{jsxref("String.prototype.indexOf()",
    "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the first
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.lastIndexOf()",
    "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the last
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.localeCompare()",
    "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [,
    <var>options</var>]])")}}
  - : Returns a number indicating whether the reference string
    `compareString` comes before, after, or is equivalent to the
    given string in sort order.
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  - : Used to match regular expression `regexp` against a string.
- {{jsxref("String.prototype.matchAll()",
    "String.prototype.matchAll(<var>regexp</var>)")}}
  - : Returns an iterator of all `regexp`'s matches.
- {{jsxref("String.prototype.normalize()",
    "String.prototype.normalize([<var>form</var>])")}}
  - : Returns the Unicode Normalization Form of the calling string value.
- {{jsxref("String.prototype.padEnd()",
    "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Pads the current string from the end with a given string and returns a new string of
    the length `targetLength`.
- {{jsxref("String.prototype.padStart()",
    "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Pads the current string from the start with a given string and returns a new string
    of the length `targetLength`.
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  - : Returns a string consisting of the elements of the object repeated
    `count` times.
- {{jsxref("String.prototype.replace()" ,
    "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Used to replace occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.replaceAll()" ,
    "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Used to replace all occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.search()",
    "String.prototype.search(<var>regexp</var>)")}}
  - : Search for a match between a regular expression `regexp` and
    the calling string.
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[,
    <var>endIndex</var>])")}}
  - : Extracts a section of a string and returns a new string.
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [,
    <var>limit</var>] ])")}}
  - : Returns an array of strings populated by splitting the calling string at occurrences
    of the substring `sep`.
- {{jsxref("String.prototype.startsWith()",
    "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Determines whether the calling string begins with the characters of string
    `searchString`.
- {{jsxref("String.prototype.substring()",
    "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}
  - : Returns a new string containing characters of the calling string from (or between)
    the specified index (or indices).
- {{jsxref("String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}
  - : The characters within a string are converted to lowercase while respecting the
    current locale.For most languages, this will return the same as
    {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.
- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}
  - : The characters within a string are converted to uppercase while respecting the
    current locale.For most languages, this will return the same as
    {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.
- {{jsxref("String.prototype.toLowerCase()")}}
  - : Returns the calling string value converted to lowercase.
- {{jsxref("String.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the
    {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Returns the calling string value converted to uppercase.
- {{jsxref("String.prototype.trim()")}}
  - : Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5
    standard.
- {{jsxref("String.prototype.trimStart()")}}
  - : Trims whitespace from the beginning of the string.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Trims whitespace from the end of the string.
- {{jsxref("String.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the
    {{jsxref("Object.prototype.valueOf()")}} method.
- {{jsxref("String.prototype.@@iterator()")}}
  - : Returns a new iterator object that iterates over the code points of a String value,
    returning each code point as a String value.

## 예제

### 문자열 변환

비록 일반적으로 toString() 함수를 많이 사용하고 있지만, {{jsxref("String.prototype.toString()", "toString()")}}의 "안전한" 대안으로 String을 사용할 수 있습니다. String은 {{jsxref("Global_Objects/null", "null")}}과 {{jsxref("Global_Objects/undefined", "undefined")}}에 대해서도 잘 동작합니다. 예를 들면:

```js
var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("DOMString")}}
- [Binary strings](/ko/docs/Web/API/DOMString/Binary)
