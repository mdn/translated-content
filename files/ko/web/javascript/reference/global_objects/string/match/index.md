---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef}}

**`match()`** 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.

## 문법

```js
str.match(regexp);
```

### 매개변수

- `regexp`
  - : 정규식 개체입니다. RegExp가 아닌 객체 obj가 전달되면, `new RegExp(obj)`를 사용하여 암묵적으로 {{jsxref("RegExp")}}로 변환됩니다. 매개변수를 전달하지 않고 match()를 사용하면, 빈 문자열:\[""]이 있는 {{jsxref("Array")}}가 반환됩니다.

### 결과 값

문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 {{jsxref("Array")}}를 반환한 다음 괄호 안에 캡처된 결과가 옵니다. 일치하는 것이 없으면 {{jsxref("null")}}이 반환됩니다.

## 설명

정규식에 `g` 플래그가 포함되어있지 않으면, `str.match()` 는 {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}와 같은 결과를 반환합니다. 반환된 {{jsxref("Array")}}는 원래 문자열의 값을 가지는 `input` 속성을 포함합니다. 그리고 문자열에서 제로 베이스의 인덱스를 나타내는 `index` 속성 또한 포함합니다.

정규식에 `g` 플래그가 포함되어 있으면, 일치는 객체가 아닌 일치하는 하위 문자열을 포함하는 {{jsxref("Array")}}를 반환합니다. 캡처된 그룹은 반환되지 않습니다. 일치하는 것이 없으면 null이 반환됩니다.

### 이것도 보세요: `RegExp` 메서드

- 문자열이 정규표현식{{jsxref("RegExp")}}과 일치하는지 여부를 알아야할 때, {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}을 이용해보세요.
- 일치하는 것 중 제일 첫번째 것만 알고싶을 때, {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}을 대신에 사용하고 싶을겁니다.
- 캡처 그룹을 알고 싶고 전역 플래그가 셋팅되어 있다면, {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}을 대신에 사용해야합니다.

## 예제

### `match()` 사용하기

다음 예제에서는, `match()`를 사용하여 `'Chapter'` 라는 단어와 그에 이어지는 1 이상의 숫자, 그리고 그에 이어서 소숫점, 숫자 형태가 반복되는 문자열을 찾는다. 이 정규표현식은 i 플래그를 사용함으로써, 대소문자 구분 없이 찾고자 하는 문자열을 찾는다.

```js
var str = "For more information, see Chapter 3.4.5.1";
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1'는 완전한 매치 상태임.
// 'Chapter 3.4.5.1'는 '(chapter \d+(\.\d)*)' 부분에 의해 발견된 것임.
// '.1' 는 '(\.\d)'를 통해 매치된 마지막 값임.
// 'index' 요소가 (22)라는 것은 0에서부터 셀 때 22번째 위치부터 완전 매치된 문자열이 나타남을 의미함.
// 'input' 요소는 입력된 원래 문자열을 나타냄.
```

### `match()`와 함께 글로벌(g) 및 대/소문자 무시(i) 플래그 사용하기

다음 예제는 글로벌(g) 및 대/소문자 무시(i) 플래그를 사용하여 `match()`를 사용하는 방법을 보여준다. A부터 E 까지의 모든 문자와 a부터 e 까지의 모든 문자가 배열의 각 원소를 구성하는 형태로 반환된다.

```js
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### 매개변수 없이 `match()` 사용하기

```js
var str = "Nothing will come of nothing.";

str.match(); // returns [""]
```

### 정규표현식이 아닌 객체를 매개변수로 사용하기

매개변수가 문자열이나 숫자(Number)이면, 해당 매개변수는 내부적으로 new RegExp(obj)를 사용하여 {{jsxref("RegExp")}}로 변환된다. 만약 매개변수가 플러스 기호와 이어지는 숫자형이라면, RegExp() 매서드는 플러스 기호를 무시한다.

```js
var str1 =
    "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
  str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
  str3 = "The contract was declared null and void.";
str1.match("number"); // "number"는 문자열임. ["number"]를 반환함.
str1.match(NaN); // NaN 타입은 숫자형임. ["NaN"]을 반환함.
str1.match(Infinity); // Infinity 타입은 숫자형임. ["Infinity"]를 반환함.
str1.match(+Infinity); // ["Infinity"]를 반환함.
str1.match(-Infinity); // ["-Infinity"]를 반환함.
str2.match(65); // ["65"]를 반환함
str2.match(+65); // 플러스 기호가 붙은 숫자형. ["65"]를 반환함.
str3.match(null); // ["null"]을 반환함.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
